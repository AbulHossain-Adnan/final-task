<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\WebhookRequest;
use App\Http\Services\ServicesHelpers;
use App\Http\Services\WebhookService;
use App\Models\ShopifyWebhook;
use App\Models\Webhook;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class WebhookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $webhooks = Webhook::select(['id', 'topic', 'address'])->orderBy('id', 'desc')->paginate(10);
        return view('admin.webhook.index', compact('webhooks'));
    }

    public function shopify_webhook(): View
    {
        $shopify_webhooks = ShopifyWebhook::select(['id', 'topic', 'address'])->orderBy('id', 'desc')->paginate(10);
        return view('admin.shopify-webhook.index', compact('shopify_webhooks'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(WebhookRequest $WebhookRequest): RedirectResponse
    {
        $response = WebhookService::createOrUpdate($WebhookRequest->validated());
        return redirect()->back()->with($response);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(WebhookRequest $WebhookRequest, Webhook $webhook): RedirectResponse
    {
        $response = WebhookService::createOrUpdate($WebhookRequest->validated(), $webhook, true);
        return redirect()->back()->with($response);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Webhook $webhook): RedirectResponse
    {
        try {
            $bool = $webhook->delete();

        } catch (\Exception $exception) {

            return back()->with(ServicesHelpers::send_response(false, "delete"));
        }
        return back()->with(ServicesHelpers::send_response($bool, "delete"));
    }
}
