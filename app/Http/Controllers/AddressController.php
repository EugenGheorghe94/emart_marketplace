<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Address;

class AddressController extends Controller
{


    ////////////////////////////////////////////////////////////////////
    // Add user address
    public function addAddress(Request $request)
    {
        $added = Address::create([
            'user_id'       => $request->user_id,
            'first_name'    => $request->first_name,
            'last_name'     => $request->last_name,
            'phone_number'  => $request->phone_number,
            'country'       => $request->country ?: 'United States',
            'state'         => $request->state,
            'city'          => $request->city,
            'address'       => $request->address,
            'address_type'  => $request->address_type ,
            'primary'       => $request->primary ?: 0,
        ]);

        return response()->json($added);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Remove user address
    public function removeAddress(Request $request)
    {
        $removed = Address::where('id', $request->address_id)->delete();

        return response()->json($removed);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Get user addresses
    public function pickupAddresses()
    {
        $addresses = Address::where('user_id', Auth::id())
            ->where('address_type', 'pickup')
            ->select('id', 'first_name', 'last_name', 'phone_number', 'state', 'city', 'address', 'address_type', 'primary')
            ->get();

        return response()->json($addresses);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Get user addresses
    public function deliveryAddresses()
    {
        $addresses = Address::where('user_id', Auth::id())
            ->where('address_type', 'delivery')
            ->select('id', 'first_name', 'last_name', 'phone_number', 'state', 'city', 'address', 'address_type', 'primary')
            ->get();

        return response()->json($addresses);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Make primary address
    public function primaryPickup(Request $request)
    {
        $removePrimary  = Address::where('address_type', 'pickup')->where('primary', 1)->update(['primary' => 0]);
        $makePrimary    = Address::find($request->address_id)->update(['primary' => 1]);

        return response()->json(['removed' => $removePrimary, 'make' => $makePrimary]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Make primary address
    public function primaryDelivery(Request $request)
    {
        $removePrimary  = Address::where('address_type', 'delivery')->where('primary', 1)->update(['primary' => 0]);
        $makePrimary    = Address::find($request->address_id)->update(['primary' => 1]);

        return response()->json(['removed' => $removePrimary, 'make' => $makePrimary]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // PHP -> for checkout addresses
    public function checkoutAddresses()
    {
        // Get user primary addresses to check
        $types = Auth::user()->addresses()
            ->where('primary', 1)
            ->pluck('address_type');

        // Check if user has set primary addresses
        if ( !$types->contains('pickup') || !$types->contains('delivery') ) {
            return redirect('/addresses');
        } else {
            $addresses = Address::where('user_id', Auth::id())
                ->where('primary', '1')
                ->get();

            return view('client.checkout-page', ['addresses' => $addresses]);
        }
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // PHP -> for my account page
    public function accountInfo()
    {
        $pickup = Address::where('user_id', Auth::id())
            ->where('address_type', 'pickup')
            ->where('primary', '1')
            ->first();

        $delivery = Address::where('user_id', Auth::id())
            ->where('address_type', 'delivery')
            ->where('primary', '1')
            ->first();

        return view('client.my-account', ['pickup' => $pickup, 'delivery' => $delivery]);
    }
    ////////////////////////////////////////////////////////////////////



}
