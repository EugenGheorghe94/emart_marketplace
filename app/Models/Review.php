<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'user_id',
        'user_name',
        'ean_13',
        'rating',
        'title',
        'description',
        'likes',
        'status'
    ];


    // To get the user who wrote the review
    public function user()
    {
        return $this->belongsTo(User::class);
    }



    // For review display product info
    public function productInfo()
    {
        return $this->hasOne(Product::class, 'ean_13', 'ean_13');
    }
}
