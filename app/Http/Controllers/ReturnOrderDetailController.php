<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ReturnOrderDetail;
use App\Models\ReturnOrder;
use App\Models\User;

class ReturnOrderDetailController extends Controller
{
    ////////////////////////////////////////////////////////////////////
    //
    public function getSellerReturns($filter, $type)
    {
        $returnOrders = ReturnOrder::whereIn('id', ReturnOrderDetail::where('seller_id', auth()->id())->get()->pluck('return_id'))
            ->select('id', 'order_id', 'return_number', 'created_at', 'first_name', 'last_name', 'phone_number', 'return_type', 'updated_at', 'status_type', 'refund_type', 'address', 'return_total')
            ->with([
                'details:product_id,return_id,quantity,unit_price',
                'details.product:id,thumbnail,product_id,product_sku,title',
                'order:id,order_number',
                'order.payment:order_id,payment_type'
            ])
            ->where($filter, $type)
            ->get()
            ->each(function ($returnOrders) {
                $returnOrders->company_name = User::where('id', auth()->id())->first()->company_name;
            });

        return response()->json($returnOrders);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Get new returns for seller menu dot
    public function getNewReturns()
    {
        $sellerReturns = ReturnOrderDetail::where('seller_id', auth()->id())
            ->get()
            ->unique('return_id')
            ->pluck('return_id');


        $newReturns = ReturnOrder::whereIn('id', $sellerReturns)
            ->where('status_type', 'new')
            ->count();


        return response()->json($newReturns);
    }
    ////////////////////////////////////////////////////////////////////
}
