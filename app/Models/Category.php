<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'cat_name',
        'cat_type',
        'parent_id',
        'url_slug',
        'sort_order',
    ];


    // For breadcrumbs ( section -> category -> sub-category )
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }
}
