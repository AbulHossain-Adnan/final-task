<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\AdminHomeService;
use App\Models\PaymentLog;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;

class AdminHomeController extends Controller
{
    public function index(): View
    {
    
       $data = AdminHomeService::dashboardProcessedData();

        return view('admin.home', compact('data'));
    }

    public function shop_search(): View
    {
        return view('admin.home');
    }

}
