<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Courier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourierController extends Controller
{
    public function getSellerCourier()
    {
        $courier = Courier::where('seller_id', auth()->id())->get();

        return response()->json($courier);
    }



    public function addCourier(Request $request)
    {
        $courierAcc = Courier::create([
            'seller_id'     => Auth::user()->id,
            'courier_name'  => $request->courier_name,
            'time_days'     => $request->time_days,
            'shipping_cost' => $request->courier_price,
        ]);

        return response()->json($courierAcc);
    }
}
