<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'order_id',
        'payment_date',
        'payment_type',
        'total_amount',
        'status_type'
    ];


    // For seller orders
    public function order()
    {
        return $this->belongsTo(Order::class, 'id', 'order_id');
    }

}
