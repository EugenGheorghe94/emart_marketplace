<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\ReturnOrderDetail;
use App\Models\OrderDetail;
use App\Models\ReturnOrder;
use App\Models\Order;
use App\Models\Product;
use App\Models\Address;
use App\Models\User;


class ReturnOrderController extends Controller
{

    ////////////////////////////////////////////////////////////////////
    // Standard returns with address pickup or money refund
    public function standardReturn(Request $request)
    {

        // Initial return total
        $return_total = 0;
        

        // Create return order
        $return_order = ReturnOrder::create([
            'client_id'         => auth()->id(),
            'order_id'          => Order::where('order_number', $request->order_number)->select('id')->first()->id,
            'return_number'     => auth()->id() . date("dmy") . str_pad(random_int(0, 9999), 4, '0', STR_PAD_LEFT),
            'first_name'        => str_contains($request->full_name, ' ') ? explode(' ', $request->full_name)[0] : $request->full_name ?? Auth::user()->first_name,
            'last_name'         => str_contains($request->full_name, ' ') ? explode(' ', $request->full_name)[1] : $request->full_name ?? Auth::user()->last_name,
            'phone_number'      => $request->phone_number ?? Address::where('user_id', auth()->id())->where('address_type', 'pickup')->where('primary', 1)->first()->phone_number,
            'address'           => $request->delivery_address ?? Address::where('user_id', auth()->id())->where('address_type', 'pickup')->where('primary', 1)->value(DB::raw("CONCAT_WS(', ', city, state, address)")),
            'address_type'      => $request->return_type == 'eMART PickPoint' ? 'pickup' : 'delivery',
            'bank_account'      => $request->bank_account ?? '/',
            'return_total'      => $return_total,
            'required_date'     => date('Y-m-d', strtotime("+15 days")),
            'completed_date'    => null,
            'status_type'       => 'new',
            'return_type'       => $request->return_type,
            'refund_type'       => $request->refund_type,
            'comments'          => '',
        ]);


        foreach($request->product_skus as $product) {


            // Get product info
            $product = OrderDetail::where('order_id', Order::where('order_number', $request->order_number)->first()->id)
                ->where('product_id', Product::where('seller_id', $product[0])
                ->where('product_sku', $product[1])->first()->id)
                ->first();


            // Create return order details
            $return_order_detail = ReturnOrderDetail::create([
                'return_id'     => ReturnOrder::where('return_number', $return_order->return_number)->first()->id,
                'product_id'    => $product->product_id,
                'seller_id'     => $product->seller_id,
                'quantity'      => 1,
                'unit_price'    => $product->unit_price
            ]);


            // Add to total
            $return_total += $product->unit_price;
        };


        // Update return order total
        $total = ReturnOrder::where('return_number', $return_order->return_number)
                ->update(['return_total' => $return_total]);

        
        // Return
        return;
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Get client returns
    public function getClientReturns()
    {

        // Get client returns
        $returns = ReturnOrder::where('client_id', auth()->id())
            ->with('details.product:id,product_sku,title,thumbnail')
            ->orderBy('created_at', 'desc')
            ->get()
            ->each(function ($return) {
                $return->order_number = Order::where('id', $return->order_id)->first()->order_number;
                $return->company_name = User::where('id', $return->details->first()->seller_id)->first()->company_name;
                $return->client_email = User::where('id', $return->client_id)->first()->email_address;
            });

        
        // Return
        return response()->json($returns);
    }
    ////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////
    // Updates return status to pending after seller sees it first time
    public function updateReturnStatus($ReturnNumber)
    {
        $return = ReturnOrder::where('return_number', $ReturnNumber)->update(['status_type' => 'pending']);

        return;
    }
    ////////////////////////////////////////////////////////////////////
}
