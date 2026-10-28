<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class User extends Authenticatable {
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;


    // Columns that are assignable
    protected $fillable = [
        'user_name',
        'first_name',
        'last_name',
        'email_address',
        'password',
        'company_name',
        'vat_number',
        'euid_number',
        'bank_account',
        'account_health',
        'account_role',
        'status_type',
        'last_login',
    ];


    // Column excluded from json response
    protected $hidden = [
        'password',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */


    // Auto convert columns to data type
    protected function casts(): array {
        return [
            'password' => 'hashed',         // Automatically bcrypt-hashes the password 
            'last_login' => 'datetime',     // Converts to datetime object
        ];
    }

    // For Reviews
    public function reviews()
    {
        return $this->hasMany(Review::class, 'user_id', 'id');
    }


    // For Favorites
    public function favorites()
    {
        return $this->hasMany(Favorite::class, 'user_id', 'id');
    }


    // For Addresses
    public function addresses()
    {
        return $this->hasMany(Address::class);
    }


    // For client orders
    public function orders()
    {
        return $this->hasMany(Order::class, 'client_id', 'id');
    }



    // For seller orders
    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class, 'user_id', 'id');
    }





    // For client returns
    public function returns()
    {
        return $this->hasMany(ReturnOrder::class, 'client_id', 'id');
    }


    // For client returns
    public function returnsOrderDetail()
    {
        return $this->hasMany(ReturnOrderDetails::class, 'seller_id', 'id');
    }


    // For seller shipping tax
    public function courierInfo()
    {
        return $this->hasMany(Courier::class, 'seller_id', 'id');
    }
}
