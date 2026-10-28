<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReturnOrder extends Model
{
    protected $fillable = [
        'client_id',
        'order_id',
        'return_number',
        'first_name',
        'last_name',
        'phone_number',
        'address',
        'address_type',
        'bank_account',
        'return_total',
        'required_date',
        'completed_date',
        'status_type',
        'return_type',
        'refund_type',
        'comments'
    ];


    //
    public function details()
    {
        return $this->hasMany(ReturnOrderDetail::class, 'return_id', 'id');
    }


    //
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }
}
