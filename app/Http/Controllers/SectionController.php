<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class SectionController extends Controller
{
    public function showCategories($id) {
        $subCategories = Category::where('parent_id', $id)
            ->select('id', 'cat_name', 'cat_type', 'parent_id', 'url_slug', 'sort_order')
            ->get();
        return response()->json($subCategories);
    }

    public function showSubCategories($id) {
        $subCategories = Category::where('parent_id', $id)
            ->select('id', 'cat_name', 'cat_type', 'parent_id', 'url_slug', 'sort_order')
            ->get();
        return response()->json($subCategories);
    }

    public function menuCategories()
    {
        $sections = Category::where('cat_type', 'section')->select('id', 'cat_name')->get();
        
        $categories = [];

        foreach($sections as $section) {
            $categories[$section->cat_name] = Category::where('parent_id', $section->id)
                ->whereNotIn('id', [40, 41, 74])
                ->select('id', 'cat_name', 'url_slug')->get();
        }

        $subCategories = [];

        foreach($categories as $section => $categories ) {
            $abc = [];
            foreach($categories as $category) {
                $abc[$category->cat_name] = ['url_slug' => $category->url_slug, 'children' => Category::where('parent_id', $category->id)->select('cat_name', 'url_slug')->get()];
                $subCategories[$section] = $abc;
            }
        }

        return response()->json($subCategories);
    }
}
