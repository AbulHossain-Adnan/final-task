<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\StripePaymentService;
use Illuminate\Http\Request;
use Illuminate\View\View;


class StripePaymentController extends Controller
{
    public function showPaymentForm(): View
    {

        return view('admin.stripe.index');
    }

     public function processPayment(Request $request) {

       $response =  StripePaymentService::processPayment($request->all());

        if ($response['status'])
        {
           return redirect(route('admin.home'))->with($response);
        }else 
        {
            return back()->with($response);
        }

    }
}
