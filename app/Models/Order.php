<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'client_id',
        'address_id',
        'order_number',
        'order_total',
        'required_date',
        'delivery_date',
        'status_type',
        'comments'
    ];


    // For order details !important
    public function details()
    {
        return $this->hasMany(OrderDetail::class, 'order_id', 'id');
    }


    // For seller order details
    public function client()
    {
        return $this->belongsTo(User::class, 'client_id', 'id');
    }


    // For seller order details
    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id', 'id');
    }


   public function payment()
    {
        return $this->hasOne(Payment::class, 'order_id', 'id');
    }
    
}
