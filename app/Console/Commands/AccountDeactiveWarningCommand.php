<?php

namespace App\Console\Commands;

use App\Mail\AccountWarningMail;
use App\Models\Admin;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class AccountDeactiveWarningCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'account:send-warning';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $now = now()->startOfDay();

        $users = Admin::with('payment_log')
            ->select('id', 'name', 'email', 'is_authorized')
            ->where('is_authorized', true)
            ->get();

        foreach ($users as $user) {
            $user_payment_log = $user->payment_log;
            $expire_date = $user_payment_log->expired_date ?? null;

            $days_left = $now->diffInDays(Carbon::parse($expire_date)->startOfDay(), false);

            if ($days_left === -2) {
                Mail::to($user->email)->send(
                    new AccountWarningMail([
                        'body' => 'Your account will be deactivated after 2 days. Kindly renew your monthly subscription.',
                    ])
                );
            }

            if ($days_left === 0) {
                $user->is_authorized = false;
                $user->save();

                Mail::to($user->email)->send(
                    new AccountWarningMail([
                        'body' => 'Your account has been deactivated. Kindly renew your monthly subscription to use the account again.',
                    ])
                );
            }
        }
    }
}
