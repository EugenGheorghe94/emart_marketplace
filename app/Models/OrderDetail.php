<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $fillable = [
        'order_id',
        'product_id',
        'seller_id',
        'quantity',
        'unit_price'
    ];


    // For shipping
    public function courierData() {
        return $this->belongsTo(Courier::class, 'seller_id', 'seller_id');
    }


    //
    public function order()
    {
        return $this->belongsTo(Order::class);
    }


    //
    public function product()
    {
        return $this->belongsTo(Product::class);
    }


    // For order details !important
    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }


    //
    public function return()
    {
        return $this->hasMany(ReturnOrder::class, 'id', 'order_id');
    }
}
