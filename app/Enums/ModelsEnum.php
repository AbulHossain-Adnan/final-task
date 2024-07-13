<?php
namespace App\Enums;

use App\Traits\EnumConversions;
use App\Models;
enum ModelsEnum : string
{

    use EnumConversions;

    case Customer = 'App\Models\Customer';
    case CustomerAddress = 'App\Models\CustomerAddress';
    case EmailMarketingConsent = 'App\Models\EmailMarketingConsent';
    case GeneralSetting = 'App\Models\GeneralSetting';
    case LineItem = 'App\Models\LineItem';
    case LineItemDiscountAllocation = 'App\Models\LineItemDiscountAllocation';
    case LineItemTax = 'App\Models\LineItemTax';
    case Location = 'App\Models\Location';
    case Order = 'App\Models\Order';
    case OrderBillingAddress = 'App\Models\OrderBillingAddress';
    case OrderCustomer = 'App\Models\OrderCustomer';
    case OrderBillingAmount = 'App\Models\OrderBillingAmount';
    case OrderCustomerDefaultAddress = 'App\Models\OrderCustomerDefaultAddress';
    case OrderDiscount = 'App\Models\OrderDiscount';
    case OrderFulfillment= 'App\Models\OrderFulfillment';
    case OrderRefund = 'App\Models\OrderRefund';
    case OrderRefundLineItem = 'App\Models\OrderRefundLineItem';
    case OrderRefundTransaction = 'App\Models\OrderRefundTransaction';
    case OrderShippingAddress = 'App\Models\OrderShippingAddress';
    case OrderShippingLine = 'App\Models\OrderShippingLine';
    case OrderShippingLineTax = 'App\Models\OrderShippingLineTax';
    case OrderShopAmount = 'App\Models\OrderShopAmount';
    case Product = 'App\Models\Product';
    case ProductImage = 'App\Models\ProductImage';
    case ProductInventoryItem = 'App\Models\ProductInventoryItem';
    case ProductInventoryItemHarmonized = 'App\Models\ProductInventoryItemHarmonized';
    case ProductInventoryLevel = 'App\Models\ProductInventoryHarmonized';
    case ProductOption = 'App\Models\ProductOption';
    case ProductVariant = 'App\Models\ProductVariant';
    case StoreOption = 'App\Models\StoreOption';


}
