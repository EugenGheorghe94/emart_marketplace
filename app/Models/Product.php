<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        // Identifiers
        'seller_id',
        // Draft fields:
        'title',
        'sub_category_id',
        'brand',
        'product_id',
        'product_sku',
        'ean_13',
        // Image fields:
        'image',
        'thumbnail',
        // Details fields:
        'product_type',
        'pieces_per_set',
        'product_material',
        'main_color',
        'length_mm',
        'width_mm',
        'height_mm',
        'weight_gr',
        // Description fields:
        'keywords',
        'description',
        // Offer fields:
        'list_price',
        'min_price',
        'max_price',
        'msrp_price',
        'discount_percent',
        'sale_price',
        'stock',
        'warranty_months',
        'manufacturer_name',
        'manufacturer_email',
        'manufacturer_address',
        'eu_responsible_name',
        'eu_responsible_email',
        'eu_responsible_address',
        // Admin fields:
        'documentation_status',
        'listing_status',
        'product_status',
        'homepage',
        'premio',
        // Meta fields:
        // 'performance_status',
        // 'pricing_status',
        // 'first_listing',
        // 'views',
    ];


    // Sets first_listing field on condition
    protected static function booted()
    {
        static::creating(function (Product $product) {
            $product->first_listing = !static::where('ean_13', $product->ean_13)->exists();
        });
    }


    // For breadcrumbs ( section -> category -> sub-category )
    public function subCategory()
    {
        return $this->belongsTo(Category::class, 'sub_category_id');
    }


    // Seller attributes
    public function sellerInfo()
    {
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }


    // For reviews
    public function prodReviews()
    {
        return $this->hasMany(Review::class, 'ean_13', 'ean_13');
    }


    // For offers
    public function prodOffers()
    {
        return $this->hasMany(Product::class, 'ean_13', 'ean_13')
                    ->with('sellerInfo:id,company_name');
    }


    // For shipping
    public function courierData()
    {
        return $this->belongsTo(Courier::class, 'seller_id', 'seller_id');
    }


    //
    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }



    //
    public function ReturnOrderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }

}
