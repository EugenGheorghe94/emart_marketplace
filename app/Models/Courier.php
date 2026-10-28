<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Courier extends Model
{
    protected $fillable = [
        'seller_id',
        'courier_name',
        'time_days',
        'shipping_cost'
    ];


    public function seller()
    {
        return $this->belongsTo(User::class, 'id', 'seller_id');
    }
}