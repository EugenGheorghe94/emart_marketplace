<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReturnOrderDetail extends Model
{
    protected $fillable = [
        'return_id',
        'product_id',
        'seller_id',
        'quantity',
        'unit_price'
    ];

    
    //
    public function product()
    {
        return $this->belongsTo(Product::class);
    }


    // 
    public function returnOrder()
    {
        return $this->belongsTo(ReturnOrder::class, 'return_id', 'id');
    }


    //
    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }
}
