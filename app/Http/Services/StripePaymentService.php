<?php

namespace App\Http\Services;


use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\PaymentLog;
use Spatie\Permission\Models\Role;
use Stripe;
use Carbon\Carbon;

class StripePaymentService
{
    public static function processPayment(array $data): array
    {
        DB::beginTransaction();

        try {

            $user = Auth::user();

            Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

            Stripe\Charge::create ([

                "amount" => 10 * 100,

                "currency" => "USD",

                "source" => $data['stripeToken'],

                "description" => "Payment for account activation." 

            ]);

            PaymentLog::insert([
                'user_id' => $user->id,
                'payment_type' => "stripe",
                'amount' => 10,
                'transaction_date' => Carbon::now(),
                'expired_date' => Carbon::now()->addMonth(),
                'status' => "complete"
            ]);

            $user->update([
                'is_authorized' => 1
            ]);
            

            $msg = "Payment Successfully";
            $response = ["msg" => $msg, "type" => "success", "status" => true];

            DB::commit();

        } catch (\Exception $e) {

            DB::rollback();

            dd($e->getMessage());
            $response = ["msg" => $e->getMessage(), "type" => "danger", "status" => false];
        }

        return $response;
    }


}