<?php

namespace App\Http\Services;

use App\Models\PaymentLog;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdminHomeService
{
    public static function dashboardProcessedData(): array
    {
        $user = Auth::user();

        $currentMonth = now()->month;
        $currentYear = now()->year;

          $payment_log = PaymentLog::where('user_id', $user->id)
            ->whereMonth('transaction_date', $currentMonth)
            ->whereYear('transaction_date', $currentYear)
            ->get();

        $data = [
            "payment_log" => $payment_log
        ];


        return $data;
    }
}

?>
