<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Courier;
use App\Models\Address;
use App\Models\Order;
use App\Models\User;
use App\Models\OrderDetail;
use App\Models\ReturnOrder;
use App\Models\ReturnOrderDetail;

class OrderDetailController extends Controller
{

    ////////////////////////////////////////////////////////////////////
    // AJAX -> info needed for seller.orders page
    public function getSellerOrders($filter, $type)
    {
        $orderIDs = OrderDetail::where('seller_id', auth()->id())->get()->unique('order_id')->pluck('order_id');
        $orders = Order::whereIn('id', $orderIDs)
            ->with('details.product:id,product_sku,title,thumbnail')
            ->with('client:id,first_name,last_name')
            ->with('address:id,first_name,last_name,phone_number,state,city,address_type,address')
            ->with('payment:id,order_id,payment_type')
            ->where($filter, $type)
            ->where('order_total', '>', 1)
            ->orderBy('created_at', 'desc')
            ->get()

            ->each(function ($orders) {
                
                $orders->company_name = User::where('id', $orders->details->first()->seller_id)->first()->company_name;
                $orders->courier_company = Courier::where('seller_id', $orders->details->first()->seller_id)->first()->courier_name;
                
            });

        return response()->json($orders);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Get order that can have returns
    public function getReturnableOrders()
    {
        $returns = Order::where('client_id', auth()->id())
            ->where('order_total', '>', 1)
            ->where('created_at', '>', gmdate('Y-m-d\TH:i:s.000000\Z', strtotime('-15 days'))) // -14 days
            ->select('order_number', 'created_at')
            ->get();

        return response()->json($returns);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Get products for order selected for return
    public function getReturnableProducts($order_number)
    {

        // Get selected order_id
        $order_id = Order::where('client_id', auth()->id())
            ->where('order_number', $order_number)
            ->pluck('id');


        // Does not have return order ? [] : product_id's already returned
        empty(ReturnOrder::where('order_id', $order_id)->first()) ? $returnOrder = [] : $returnOrder = ReturnOrderDetail::where('return_id', ReturnOrder::where('order_id', $order_id)->pluck('id'))->pluck('product_id');
    

        // Products from selected order
        $products = OrderDetail::where('order_id', Order::where('client_id', auth()->id())->where('order_number', $order_number)->first()->id)
            ->whereNotNull('product_id')
            ->whereNotIn('product_id', $returnOrder)
            ->with('product:id,product_sku,thumbnail,title')
            ->get();

        // Products that can be returned and have not been returned
        return response()->json($products);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Get new orders for seller menu dot
    public function getNewOrders()
    {
        $sellerOrders = OrderDetail::where('seller_id', auth()->id())
            ->whereNotNull('product_id')
            ->whereNot('seller_id', '9999')
            ->get()
            ->unique('order_id')
            ->pluck('order_id');


        $newOrders = Order::whereIn('id', $sellerOrders)
            ->where('status_type', 'new')
            ->whereNot('order_total', '0.85')
            ->count();


        return response()->json($newOrders);
    }
    ////////////////////////////////////////////////////////////////////
}
