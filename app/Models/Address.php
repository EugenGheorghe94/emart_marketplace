<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'phone_number',
        'country',
        'state',
        'city',
        'address',
        'address_type',
        'primary',
    ];


    // To get the user addresses
    public function user()
    {
        return $this->belongsTo(User::class);
    }





    // To get the order addresses for seller
    public function order()
    {
        return $this->belongsTo(Order::class, 'id', 'address_id');
    }
}
