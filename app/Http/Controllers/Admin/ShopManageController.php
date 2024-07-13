<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\ShopManageService;
use App\Models\User;
use App\Models\Webhook;
use App\Traits\ShopifyAppRequestEndpoint;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\View\View;
use mysql_xdevapi\Exception;

class ShopManageController extends Controller
{
    use ShopifyAppRequestEndpoint;

    public function search(Request $request): View
    {
        $shops = ShopManageService::shopSearch($request);
        
        return view('admin.shop.index', compact('shops'));
    }

    public function show(int $id): View
    {
        $shop = ShopManageService::shop_details($id);
        return view('admin.shop.view', compact('shop'));
    }

    public function verifyData(int $shop_id): View
    {
        $shopifyShopDataCounts = $this->fetchShopDataCount($shop_id);
        $data = ShopManageService::shopDataVerification($shopifyShopDataCounts, $shop_id);

        return view('admin.data-verification.index', compact('data', 'shop_id'));
    }

    public function fetchShopDataCount(int $shop_id)
    {
        $this->body = ['user_id' => $shop_id];
        $this->user_id = $shop_id;
        $this->apiEndpoint = $this->apiEndpoint . '/api/admin-app/data-verification/shop-data-counts';
        $response = $this->sendRequest();
        return $response->json();
    }

    public function fetchData(int $shop_id)
    {
        $this->body = ['user_id' => $shop_id];
        $this->user_id = $shop_id;
        $this->apiEndpoint = $this->apiEndpoint . '/api/admin-app/data-verification/shop-data-import';
        $response = $this->sendRequest();
        $response_json = $response->json();

        $data = ['msg' => $response_json['msg'], 'type' => $response_json['type']];
        return back()->with($data);
    }

    public function scopeUpdate(): RedirectResponse
    {
        $response = ShopManageService::scopeUpdate();
        return back()->with(["msg"=>$response['msg'],'type'=>$response['type']]);
    }

    public function shopScopeUpdate(int $shop_id): RedirectResponse
    {
        $response = ShopManageService::scopeUpdate($shop_id);
        return back()->with(["msg"=>$response['msg'],'type'=>$response['type']]);
    }

    public function jobRunUpdate(int $shop_id): RedirectResponse
    {
        $response = ShopManageService::jobRunUpdate($shop_id);
        return back()->with(["msg"=>$response['msg'],'type'=>$response['type']]);
    }

}
