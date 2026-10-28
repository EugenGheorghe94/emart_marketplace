<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Address;
use App\Models\Product;
use App\Models\Courier;
use App\Models\OrderDetail;
use App\Models\Payment;

class OrderController extends Controller
{
    

    ////////////////////////////////////////////////////////////////////
    // AJAX -> create Premio orders
    public function submitPremioOrder(Request $request, $payment_type)
    {
        // Gobal variables needed
        $order_total = 0;
        $orderDetail;
        

        // Make initial order entries (no total)
        foreach($request->all() as $seller => $products) {
            $order = Order::create([
                'client_id'         => auth()->id(),
                'address_id'        => Address::where('user_id', auth()->id())->where('address_type', 'pickup')->where('primary', '1')->first()->id,
                'order_number'      => auth()->id() . date("dmy") . str_pad(random_int(0, 99999), 5, '0', STR_PAD_LEFT) . $seller,
                'order_total'       => $order_total,
                'required_date'     => date('Y-m-d', strtotime("+" . Courier::where('seller_id', $seller)->first()->time_days . " days")),
                'delivery_date'     => null,
                'status_type'       => 'new',
                'comments'          => null,
            ]);


            // Make order details entries
            foreach($products as $sku => $quantity) {
                $order_total += (float) (Product::where('product_sku', $sku)->select(DB::raw('COALESCE(sale_price, list_price) as final_price'))->first())->final_price * (float) $quantity;
                $orderDetail = OrderDetail::create([
                    'order_id'      => Order::where('order_number', $order->order_number)->first()->id,
                    'product_id'    => Product::where('product_sku', $sku)->first()->id,
                    'seller_id'     => $seller,
                    'quantity'      => $quantity,
                    'unit_price'    => (Product::where('product_sku', $sku)->select(DB::raw('COALESCE(sale_price, list_price) as final_price'))->first())->final_price,
                ]);
            };


            // Add shipping cost after all products
            $shipping = OrderDetail::create([
                'order_id'      => Order::where('order_number', $order->order_number)->first()->id,
                'product_id'    => null,
                'seller_id'     => $seller,
                'quantity'      => 1,
                'unit_price'    => 2.99,
            ]);


            // Update total for initial order
            $total = Order::where('order_number', $order->order_number)
                ->update(['order_total' => $order_total + 2.99]);


            // Make payment entries for each order
            $payment = Payment::create([
                'order_id'          => Order::where('order_number', $order->order_number)->first()->id,
                'payment_date'      => in_array($payment_type, ['card', 'paypal']) ? date('Y-m-d') : null,
                'payment_type'      => $payment_type,
                'total_amount'      => $order_total + 2.99,
                'status_type'       => in_array($payment_type, ['card', 'paypal']) ? 'completed' : 'pending',
            ]);

            
            // Reset order total after each order
            $order_total = 0;
        };


        // Operational fee order
        $opFee = Order::create([
            'client_id'         => auth()->id(),
            'address_id'        => Address::where('user_id', auth()->id())->where('address_type', 'delivery')->where('primary', '1')->first()->id,
            'order_number'      => auth()->id() . date("dmy") . str_pad(random_int(0, 99999), 5, '0', STR_PAD_LEFT) . 9999,
            'order_total'       => 0.85,
            'required_date'     => date('Y-m-d'),
            'delivery_date'     => date('Y-m-d'),
            'status_type'       => 'new',
            'comments'          => 'operational fee',
        ]);


        // Operational fee order detail
        $opFeeDetail = OrderDetail::create([
            'order_id'      => Order::where('order_number', $opFee->order_number)->first()->id,
            'product_id'    => null,
            'seller_id'     => 9999,
            'quantity'      => 1,
            'unit_price'    => 0.85,
        ]);


        // Operational fee payment
        $opPayment = Payment::create([
            'order_id'          => Order::where('order_number', $opFee->order_number)->first()->id,
            'payment_date'      => in_array($payment_type, ['card', 'paypal']) ? date('Y-m-d') : null,
            'payment_type'      => $payment_type,
            'total_amount'      => 0.85,
            'status_type'       => in_array($payment_type, ['card', 'paypal']) ? 'completed' : 'pending',
        ]);


        // 
        return;
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> create non Premio orders
    public function submitDeliveryOrder(Request $request, $payment_type)
    {

        // Gobal variables needed
        $order_total = 0;
        $orderDetail;
        

        // Make initial order entries (no total)
        foreach($request->all() as $seller => $products) {
            $order = Order::create([
                'client_id'         => auth()->id(),
                'address_id'        => Address::where('user_id', auth()->id())->where('address_type', 'delivery')->where('primary', '1')->first()->id,
                'order_number'      => auth()->id() . date("dmy") . str_pad(random_int(0, 99999), 5, '0', STR_PAD_LEFT) . $seller,
                'order_total'       => $order_total,
                'required_date'     => date('Y-m-d', strtotime("+" . Courier::where('seller_id', $seller)->first()->time_days . " days")),
                'delivery_date'     => null,
                'status_type'       => 'new',
                'comments'          => null,
            ]);


            // Make order details entries
            foreach($products as $sku => $quantity) {
                $order_total += (float) (Product::where('product_sku', $sku)->select(DB::raw('COALESCE(sale_price, list_price) as final_price'))->first())->final_price * (float) $quantity;
                $orderDetail = OrderDetail::create([
                    'order_id'      => Order::where('order_number', $order->order_number)->first()->id,
                    'product_id'    => Product::where('product_sku', $sku)->first()->id,
                    'seller_id'     => $seller,
                    'quantity'      => $quantity,
                    'unit_price'    => (Product::where('product_sku', $sku)->select(DB::raw('COALESCE(sale_price, list_price) as final_price'))->first())->final_price,
                ]);
            };


            // Add shipping cost after all products
            $shipping = OrderDetail::create([
                'order_id'      => Order::where('order_number', $order->order_number)->first()->id,
                'product_id'    => null,
                'seller_id'      => $seller,
                'quantity'      => 1,
                'unit_price'    => (float) Courier::where('seller_id', $seller)->first()->shipping_cost,
            ]);


            // Update total for initial order
            $total = Order::where('order_number', $order->order_number)
                ->update(['order_total' => $order_total + (float) Courier::where('seller_id', $seller)->first()->shipping_cost]);


            // Make payment entries for each order
            $payment = Payment::create([
                'order_id'          => Order::where('order_number', $order->order_number)->first()->id,
                'payment_date'      => in_array($payment_type, ['card', 'paypal']) ? date('Y-m-d') : null,
                'payment_type'      => $payment_type,
                'total_amount'      => $order_total + (float) Courier::where('seller_id', $seller)->first()->shipping_cost,
                'status_type'       => in_array($payment_type, ['card', 'paypal']) ? 'completed' : 'pending',
            ]);

            
            // Reset order total after each order
            $order_total = 0;
        };


        // Operational fee order
        $opFee = Order::create([
            'client_id'         => auth()->id(),
            'address_id'        => Address::where('user_id', auth()->id())->where('address_type', 'delivery')->where('primary', '1')->first()->id,
            'order_number'      => auth()->id() . date("dmy") . str_pad(random_int(0, 99999), 5, '0', STR_PAD_LEFT) . 9999,
            'order_total'       => 0.85,
            'required_date'     => date('Y-m-d'),
            'delivery_date'     => date('Y-m-d'),
            'status_type'       => 'new',
            'comments'          => 'operational fee',
        ]);


        // Operational fee order detail
        $opFeeDetail = OrderDetail::create([
            'order_id'      => Order::where('order_number', $opFee->order_number)->first()->id,
            'product_id'    => null,
            'seller_id'     => 9999,
            'quantity'      => 1,
            'unit_price'    => 0.85,
        ]);


        // Operational fee payment
        $opPayment = Payment::create([
            'order_id'          => Order::where('order_number', $opFee->order_number)->first()->id,
            'payment_date'      => in_array($payment_type, ['card', 'paypal']) ? date('Y-m-d') : null,
            'payment_type'      => $payment_type,
            'total_amount'      => 0.85,
            'status_type'       => in_array($payment_type, ['card', 'paypal']) ? 'completed' : 'pending',
        ]);


        // 
        return;
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> info needed for client.orders page
    public function getClientOrders()
    {
        $orders = Order::where('client_id', auth()->id())
            ->with('details.product:id,product_sku,title,thumbnail')
            ->with('details.seller:id,company_name')
            ->where('order_total', '>', 1)
            ->orderBy('created_at', 'desc')
            ->get();
        
        return response()->json($orders);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Updates order status to pending after seller sees it first time
    public function updateOrderStatus($orderNumber)
    {
        $order = Order::where('order_number', $orderNumber)->update(['status_type' => 'pending']);

        return;
    }
    ////////////////////////////////////////////////////////////////////



}
