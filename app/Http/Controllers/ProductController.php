<?php

namespace App\Http\Controllers;


use Intervention\Image\Laravel\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use App\Models\Favorite;
use App\Models\Courier;
use App\Models\Address;
use App\Models\User;

class ProductController extends Controller {



    ////////////////////////////////////////////////////////////////////
    // AJAX: Saves product with status "Draft"
    public function storeDraft(Request $request)
    {
        $product = Product::create([
            'seller_id'             => auth()   ->  id(),
            'title'                 => $request ->  title,
            'sub_category_id'       => $request ->  sub_category_id,
            'brand'                 => $request ->  brand,
            'product_id'            => $request ->  product_id,
            'product_sku'           => $request ->  product_sku,
            'ean_13'                => $request ->  ean_13
        ]);

        return response()->json([
            'p_id'      => $product ->id,
            'p_status'  => $product ->documentation_status
        ]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX: Saves product image
    public function storeImage(Request $request, $id)
    {
        $product = Product::find($id);

        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $filename = $product->seller_id . '-' . $product->id . '.' . $extension;

        // Save original
        $path = $file->storeAs('products', $filename, 'public');

        // Generate thumbnail
        // $thumb = Image::decode($request->file('image'))->resize(300, 300); -> stretches image
        $thumb = Image::decode($request->file('image'))->contain(300, 300, 'ffffff');   // testing new
        $thumbPath = 'products/thumbnails/' . $filename;
        
        Storage::disk('public')->put(
            $thumbPath,
            $thumb->encodeUsingFileExtension($extension, quality: 80)
        );
        
        $product->update([
            'image' => $filename,
            'thumbnail' => $filename,
        ]);

        return response()->json([
                'thumbnail' => $product->thumbnail,
                'success' => true
            ]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX: Saves full product details and adds status "pending"
    public function storeDetails(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update([
            'product_type'      => $request ->  product_type,
            'pieces_per_set'    => $request ->  pieces_per_set,
            'product_material'  => $request ->  product_material,
            'main_color'        => $request ->  main_color,
            'length_mm'         => $request ->  length_mm,
            'width_mm'          => $request ->  width_mm,
            'height_mm'         => $request ->  height_mm,
            'weight_gr'         => $request ->  weight_gr
        ]);
        
        return response()->json(['success' => true]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX:
    public function storeDescription(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update([
            'keywords'      => $request ->  keywords,
            'description'   => $request ->  description
        ]);
        
        return response()->json(['success' => true]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX:
    public function storeOffer(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update([
            'list_price'                => $request ->  list_price,
            'min_price'                 => $request ->  min_price,
            'max_price'                 => $request ->  max_price,
            'msrp_price'                => $request ->  msrp_price,
            'discount_percent'          => $request ->  discount_percent,
            'sale_price'                => $request ->  sale_price,
            'stock'                     => $request ->  stock,
            'warranty_months'           => $request ->  warranty_months,
            'manufacturer_name'         => $request ->  manufacturer_name,
            'manufacturer_email'        => $request ->  manufacturer_email,
            'manufacturer_address'      => $request ->  manufacturer_address,
            'eu_responsible_name'       => $request ->  eu_responsible_name,
            'eu_responsible_email'      => $request ->  eu_responsible_email,
            'eu_responsible_address'    => $request ->  eu_responsible_address,
            'documentation_status'      => 'Approved' // only for showcase, should be 'Pending'
        ]);
        
        return response()->json(['success' => true]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX:
    public function homepageProducts(Request $request)
    {
        $products = Product::where('homepage', 1)
            ->where('documentation_status', 'Approved')
            ->select(
                'id',
                'title',
                'product_sku',
                'ean_13',
                'thumbnail',
                'sale_price',
                'msrp_price',
                'list_price',
                'views',
                'premio',
                'discount_percent'
            )
            ->withAvg('prodReviews', 'rating')
            ->withCount('prodReviews')
            ->orderBy('views', 'desc')
            ->orderByRaw('COALESCE(sale_price, list_price) ASC')->orderBy('id')->get()->unique('ean_13');

        $favorites = Favorite::where('user_id', Auth::id())->pluck('ean_13');

        return response()->json(['products' => $products, 'favorites' => $favorites]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX:
    public function showProduct($id, $sku) 
    {
        $product = Product::where('id', $id)->where('product_sku', $sku)->first();
        return response()->json($product);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Favorites - AJAX:
    public function getFavorite() {

        $favorites = Favorite::where('user_id', Auth::id())->pluck('ean_13');

        $products = [];

        foreach($favorites as $favorite) {
            array_push($products, Product::where('ean_13', $favorite)
                    ->select('id', 'title', 'product_sku', 'ean_13', 'image', 'sale_price', 'msrp_price', 'list_price', 'premio', 'discount_percent', 'views')
                    ->withAvg('prodReviews', 'rating')
                    ->withCount('prodReviews')
                    ->orderByRaw('COALESCE(sale_price, list_price) ASC')->first() );
        }

        return response()->json(['favorites' => $favorites, 'products' => $products]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // PHP:
    public function productListing($id, $sku) 
    {
        $favorites = Favorite::where('user_id', Auth::id())->pluck('ean_13');
        
        $product = Product::with([
            'subCategory.parent.parent',
            'prodReviews' => function ($query) { $query->orderBy('created_at', 'desc'); },
            'sellerInfo' => function ($query) { $query->select('id', 'company_name'); },
            'prodOffers.courierData'
            ])
            ->where('id', $id)
            ->where('product_sku', $sku)
            ->where('documentation_status', 'Approved')
            ->first();

        $courier = Courier::where('seller_id', $product->seller_id)
            ->select('time_days', 'shipping_cost', 'courier_name')
            ->first();
            
        $pickup = Address::where('user_id', Auth::id())
            ->where('address_type', 'pickup')
            ->where('primary', 1)
            ->select('city')
            ->first();

        return view('client.prod-listing', ['product' => $product, 'favorites' => $favorites, 'courier' => $courier, 'pickup' => $pickup]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX:
    public function similarProducts($sku, $sort_field, $sort_type) 
    {
        $product = Product::with(['subCategory.parent.parent'])
            ->where('product_sku', $sku)
            ->where('documentation_status', 'Approved')
            ->first();

        // Get product with the same category id for "Similar products"
        $categoryId = $product->subCategory->parent_id;
        $relatedProducts = Product::whereHas('subCategory', function ($query) use ($categoryId) {
                $query->where('parent_id', $categoryId)->where('documentation_status', 'Approved');
                        
            })
            ->orderByRaw('COALESCE(sale_price, list_price)' . $sort_type)
            ->select(
                'id',
                'title',
                'product_sku',
                'ean_13',
                'thumbnail',
                'list_price',
                'msrp_price',
                'discount_percent',
                'sale_price',
                'views',
                'premio'
            )
            ->with(['prodReviews' => function ($query) {
                $query->select('ean_13', 'rating');
            }])
            ->orderBy($sort_field, $sort_type)
            ->get()
            ->unique('ean_13')
            ->take(18)
            
            // For clean rating array
            ->each(function ($product) {
                $product->ratings = $product->prodReviews->pluck('rating');
                unset($product->prodReviews);
            });

        return response()->json($relatedProducts);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX:
    public function recommendedProducts($sku, $sort_field, $sort_type) 
    {
        $favorites = Favorite::where('user_id', Auth::id())->pluck('ean_13');

        if ( $sku != "undefined" ) {

            $product = Product::with(['subCategory.parent.parent'])
                ->where('product_sku', $sku)
                //->where('documentation_status', 'Approved')
                ->first();

            // Get product with the same category id for "Similar products"
            $categoryId = $product->subCategory->parent_id;
            $relatedProducts = Product::whereHas('subCategory', function ($query) use ($categoryId) {
                    $query->where('parent_id', $categoryId)->where('documentation_status', 'Approved');  
                })
                ->select(
                    'id',
                    'title',
                    'product_sku',
                    'ean_13',
                    'thumbnail',
                    'list_price',
                    'msrp_price',
                    'discount_percent',
                    'sale_price',
                    'views',
                    'premio'
                )
                ->withAvg('prodReviews', 'rating')
                ->withCount('prodReviews')
                ->orderBy($sort_field, $sort_type)
                ->get()
                ->unique('ean_13')
                ->take(18);

                return response()->json(['relatedProducts' => $relatedProducts, 'favorites' => $favorites]);
                
        } else {

            $relatedProducts = Product::select(
                    'id',
                    'title',
                    'product_sku',
                    'ean_13',
                    'thumbnail',
                    'list_price',
                    'msrp_price',
                    'discount_percent',
                    'sale_price',
                    'views',
                    'premio'
                )
                ->withAvg('prodReviews', 'rating')
                ->withCount('prodReviews')
                ->orderBy($sort_field, $sort_type)
                ->get()
                ->unique('ean_13')
                ->take(18);

                return response()->json(['relatedProducts' => $relatedProducts, 'favorites' => $favorites]);
        }  
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX:
    public function otherProducts($sku, $sort_field, $sort_type) 
    {
        $favorites = Favorite::where('user_id', Auth::id())->pluck('ean_13');
        
        if ( $sku != "undefined" ) {

            $product = Product::with(['subCategory.parent.parent'])
                ->where('product_sku', $sku)
                //->where('documentation_status', 'Approved')
                ->first();

            // Get product with the same category id for "Similar products"
            $categoryId = $product->subCategory->parent->parent_id;
            $relatedProducts = Product::whereHas('subCategory.parent', function ($query) use ($categoryId) {
                    $query->where('parent_id', $categoryId)->where('documentation_status', 'Approved');
                })
                
                ->select(
                    'id',
                    'title',
                    'product_sku',
                    'ean_13',
                    'thumbnail',
                    'list_price',
                    'msrp_price',
                    'discount_percent',
                    'sale_price',
                    'views',
                    'premio'
                )
                ->withAvg('prodReviews', 'rating')
                ->withCount('prodReviews')
                ->orderBy($sort_field, $sort_type)
                ->get()
                ->unique('ean_13')
                ->take(18);

            return response()->json(['relatedProducts' => $relatedProducts, 'favorites' => $favorites]);

        } else {

            $relatedProducts = Product::select(
                    'id',
                    'title',
                    'product_sku',
                    'ean_13',
                    'thumbnail',
                    'list_price',
                    'msrp_price',
                    'discount_percent',
                    'sale_price',
                    'views',
                    'premio'
                )
                ->withAvg('prodReviews', 'rating')
                ->withCount('prodReviews')
                ->orderBy($sort_field, $sort_type)
                ->get()
                ->unique('ean_13')
                ->take(18);

            return response()->json(['relatedProducts' => $relatedProducts, 'favorites' => $favorites]);
        }
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX:
    public function productReviews($sku, $sort_col_1, $sort_type_1, $sort_col_2, $sort_type_2, $sort_col_3, $search) 
    {
        $product = Product::where('product_sku', $sku)
            ->with(['prodReviews' => function ($query) use ($sort_col_1, $sort_type_1, $sort_col_2, $sort_type_2, $sort_col_3, $search) {
                if ( $sort_col_3 == 'buyers' ) {
                        $query->whereNotNull('user_id');
                    }

                if ( $sort_type_2 != 'all' ) {
                        $query->where($sort_col_2, $sort_type_2);
                    }

                if ( $search != 'all' ) {
                    foreach ( explode(' ', $search) as $keyword) {
                        $query->whereLike('description', '%' . $keyword . '%', caseSensitive: false);
                    }
                }

                $query->orderBy($sort_col_1, $sort_type_1);
            }])
            ->first();
       
        $reviews = $product->prodReviews->map(function ($review) {
            $review->formatted_date = $review->created_at->format('d M Y');
            return $review;
        });

        return response()->json($reviews);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> my products
    public function filterMyProducts($filter, $type)
    {
        if ( $filter === 'all' ) {
            $products = Product::where('seller_id', auth()->id())
                ->with([
                    'subCategory:id,cat_name,parent_id',
                    'subCategory.parent:id,cat_name,parent_id',
                    'subCategory.parent.parent:id,cat_name'
                ])
                ->get();
            return response()->json($products);
        } else {
            $products = Product::where('seller_id', auth()->id())
                ->with([
                    'subCategory:id,cat_name,parent_id',
                    'subCategory.parent:id,cat_name,parent_id',
                    'subCategory.parent.parent:id,cat_name'
                ])
                ->where($filter, $type)
                ->get();
            return response()->json($products);
        }
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> my products
    public function filterProducts($filter, $type)
    {
        if ( $filter === 'all' ) {
            $products = Product::where('seller_id', auth()->id())
                ->select('id', 'thumbnail', 'title', 'product_sku', 'sub_category_id', 'brand', 'premio', 'documentation_status', 'pricing_status', 'listing_status', 'performance_status', 'first_listing', 'stock', 'msrp_price', 'list_price', DB::raw('COALESCE(sale_price, list_price) as final_price'), 'created_at')
                ->withAvg('prodReviews', 'rating')
                ->withCount('prodReviews')
                ->with([
                    'subCategory:id,cat_name,parent_id',
                    'subCategory.parent:id,cat_name,parent_id',
                    'subCategory.parent.parent:id,cat_name'
                ])
                ->get();
            return response()->json($products);
        } else if ( $filter === 'prod_reviews_avg_rating' ) {
            $products = Product::where('seller_id', auth()->id())
                ->select('id', 'thumbnail', 'title', 'product_sku', 'sub_category_id', 'brand', 'premio', 'documentation_status', 'pricing_status', 'listing_status', 'performance_status', 'first_listing', 'stock', 'msrp_price', 'list_price', DB::raw('COALESCE(sale_price, list_price) as final_price'), 'created_at')
                ->withAvg('prodReviews', 'rating')
                ->withCount('prodReviews')
                ->with([
                    'subCategory:id,cat_name,parent_id',
                    'subCategory.parent:id,cat_name,parent_id',
                    'subCategory.parent.parent:id,cat_name'
                ])
                ->havingBetween($filter, [$type , $type+1])
                ->get();
            return response()->json($products);
        } else if ( $filter === 'no_rating' ) {
            $products = Product::where('seller_id', auth()->id())
                ->select('id', 'thumbnail', 'title', 'product_sku', 'sub_category_id', 'brand', 'premio', 'documentation_status', 'pricing_status', 'listing_status', 'performance_status', 'first_listing', 'stock', 'msrp_price', 'list_price', DB::raw('COALESCE(sale_price, list_price) as final_price'), 'created_at')
                ->withAvg('prodReviews', 'rating')
                ->withCount('prodReviews')
                ->with([
                    'subCategory:id,cat_name,parent_id',
                    'subCategory.parent:id,cat_name,parent_id',
                    'subCategory.parent.parent:id,cat_name'
                ])
                ->havingNull('prod_reviews_avg_rating')
                ->get();
            return response()->json($products);
        } else {
            $products = Product::where('seller_id', auth()->id())
                ->where($filter, $type)
                ->select('id', 'thumbnail', 'title', 'product_sku', 'sub_category_id', 'brand', 'premio', 'documentation_status', 'pricing_status', 'listing_status', 'performance_status', 'first_listing', 'stock', 'msrp_price', 'list_price', DB::raw('COALESCE(sale_price, list_price) as final_price'), 'created_at')
                ->with([
                    'subCategory:id,cat_name,parent_id',
                    'subCategory.parent:id,cat_name,parent_id',
                    'subCategory.parent.parent:id,cat_name'
                ])
                ->get();
            return response()->json($products);
        }
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> for opportunities page
    public function opportunitiesProducts($filter, $type)
    {
        if ( $filter === 'all' ) {
            $products = Product::whereNot('seller_id', auth()->id())
                ->where('documentation_status', 'Approved')
                ->select('id', 'thumbnail', 'title', 'product_sku', 'sub_category_id', 'ean_13', 'stock', 'brand', 'performance_status', DB::raw('COALESCE(sale_price, list_price) as final_price'), 'product_type', 'product_material', 'main_color', 'updated_at')
                ->with([
                    'subCategory:id,cat_name,parent_id',
                    'subCategory.parent:id,cat_name,parent_id',
                    'subCategory.parent.parent:id,cat_name'
                ])
                ->orderBy('views', 'desc')
                ->get();
            return response()->json($products);
        } else {
            $products = Product::whereNot('seller_id', auth()->id())
                ->where('documentation_status', 'Approved')
                ->where($filter, $type)
                ->select('id', 'thumbnail', 'title', 'product_sku', 'sub_category_id', 'ean_13', 'stock', 'brand', 'performance_status', DB::raw('COALESCE(sale_price, list_price) as final_price'), 'product_type', 'product_material', 'main_color', 'updated_at')
                ->with([
                    'subCategory:id,cat_name,parent_id',
                    'subCategory.parent:id,cat_name,parent_id',
                    'subCategory.parent.parent:id,cat_name'
                ])
                ->orderBy('views', 'desc')
                ->get();
            return response()->json($products);
        }
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> info for improve product side window
    public function improveProduct($product_sku)
    {
        $product = Product::with('subCategory.parent.parent')
            ->withAvg('prodReviews', 'rating')
            ->withCount('prodReviews')
            ->where('seller_id', auth()->id())
            ->where('product_sku', $product_sku)
            ->firstOrFail();

        $bestPrice = Product::where('ean_13', $product->ean_13)
            ->where('documentation_status', 'Approved')
            ->where('stock', '>', 0)
            ->orderByRaw('COALESCE(sale_price, list_price) ASC')
            ->value(DB::raw('COALESCE(sale_price, list_price)'));
        
        // Eloquent model instance - dynamically attach extra attributes
        $product->best_price = $bestPrice ?? 'N/A';

        return response()->json($product);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAZ -> updates product
    public function updateProduct(Request $request, $seller, $sku)
    {
        foreach($request->all() as $field => $value) {
            $product = Product::where('seller_id', $seller)
            ->where('product_sku', $sku)
            ->update([$field => $value]);
        }
        
        return response();
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> for cart summary popup
    public function cartSummary($product_sku)
    {
        $products = Product::where('product_sku', $product_sku)
            ->where('documentation_status', 'Approved')
            ->select('id', 'product_sku', 'title', 'thumbnail', 'sale_price', 'list_price')
            ->selectRaw('COALESCE(sale_price, list_price) as final_price')
            ->first();

        return response()->json($products);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> for cart products
    public function cartProduct($product_sku)
    {
        $favorites = Favorite::where('user_id', Auth::id())->pluck('ean_13');

        $product = Product::where('product_sku', $product_sku)
            ->where('documentation_status', 'Approved')
            ->with(['sellerInfo' => function ($query) { $query->select('id', 'company_name'); } ])
            ->select('id', 'product_sku', 'ean_13', 'title', 'thumbnail', 'sale_price', 'list_price', 'premio', 'seller_id', 'stock')
            ->selectRaw('COALESCE(sale_price, list_price) as final_price')
            ->first();

        return response()->json(['product' => $product, 'favorites' => $favorites]);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> for checkout products
    public function checkoutProducts($product_sku)
    {
        $products = Product::where('product_sku', $product_sku)
            ->where('documentation_status', 'Approved')
            ->with(['sellerInfo' => function ($query) { $query->select('id', 'company_name'); } ])
            ->with(['courierData' => function ($query) { $query->select('seller_id', 'time_days', 'shipping_cost'); } ])
            ->select('id', 'product_sku', 'title', 'thumbnail', 'sale_price', 'list_price', 'premio', 'seller_id')
            ->selectRaw('COALESCE(sale_price, list_price) as final_price')
            ->first();

        return response()->json($products);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // PHP -> prod-category page, filters view
    public function collectionFilters($collection_type, $url_slug)
    {
        switch ($collection_type) {

            case 'subcategory':
                $thisSubCategory = Category::where('url_slug', $url_slug)->select('id', 'cat_name', 'parent_id', 'url_slug')->first();
                $subCategories = Category::where('parent_id', $thisSubCategory->parent_id )->select('cat_name', 'url_slug')->get();
                $collection = Product::where('sub_category_id', $thisSubCategory->id);
                break;

            case 'category':
                $thisCategory = Category::where('url_slug', $url_slug)->select('id', 'cat_name', 'parent_id', 'url_slug')->first();
                $subCategories = Category::where('parent_id', $thisCategory->id )->select('cat_name', 'url_slug')->get();
                $collection = Product::whereHas('subCategory', function ($query) use ($thisCategory) { $query->where('parent_id', $thisCategory->id); });
                break;

            case 'offers':
                $title = 'eMART offers';
                $collection = Product::whereNotNull('sale_price');
                $offers = 1;
                break;

            case 'buyback':
                $title = 'Easy BuyBack';
                $collection = Product::where('buyback', 1);
                $buyback = 1;
                break;

            case 'premio':
                $title = 'Premio Deals';
                $collection = Product::where('premio', 1);
                $premio = 1;
                break;

            case 'refurbished':
                $title = 'Refurbished';
                $collection = Product::where('title', 'LIKE', '%efurbishe%');
                $refurbished = 1;
                break;

            case 'search':
                $title = 'Search results for ' . $url_slug;
                $search = explode(' ', $url_slug);
                $collection = Product::query();
                foreach ($search as $keyword) {
                    $collection->whereLike('title', '%' . $keyword . '%', caseSensitive: false);
                }
                break;

            case 'seller':
                $title = 'Products from ' . User::where('id', $url_slug)->first()->company_name;
                $collection = Product::where('seller_id', $url_slug);
                break;
        }

        $buyButtonIDs = (clone $collection)->orderByRaw('COALESCE(sale_price, list_price) ASC')->orderBy('id')->get()->unique('ean_13')->pluck('id');

        $products = $collection
            ->where('documentation_status', 'Approved')
            ->whereIn('id', $buyButtonIDs)
            ->select('seller_id', 'brand', 'ean_13', 'main_color', 'list_price', 'msrp_price', 'discount_percent', 'sale_price', 'warranty_months', 'premio')
            ->with(['sellerInfo' => function ($query) { $query->select('id', 'company_name'); } ])
            ->with(['prodReviews' => function ($query) { $query->select('ean_13', 'rating'); } ])
            ->get()
            ->unique('ean_13')

            // for clean arrays
            ->each(function ($product) {
                $product->ratings = $product->prodReviews->pluck('rating');
                $product->company_name = $product->sellerInfo->company_name ?? null;
                unset($product->prodReviews);
                unset($product->sellerInfo);
            });

        return view('client.prod-category', [
            // for sub-category page
            'subCategories'     => $subCategories   ?? null,
            'thisSubCategory'   => $thisSubCategory ?? null,

            // for category page
            'thisCategory'      => $thisCategory    ?? null,
            'product_types'     => $subCategories   ?? null,

            // for special pags
            'offers'            => $offers          ?? null,
            'buyback'           => $buyback         ?? null,
            'premio'            => $premio          ?? null,
            'refurbished'       => $refurbished     ?? null,
            'title'             => $title           ?? null,
            
            // for all
            'products'          => $products        ?? null
            ]);
    }
    ////////////////////////////////////////////////////////////////////
   


    ////////////////////////////////////////////////////////////////////
    // AJAX -> prod-category page, products json
    public function collectionProducts($collection_type, $url_slug, $deliveries, $offers, $ratings, $types, $brands, $warranties, $colors, $prices, $sellers, $sort,)
    {
        $subCategory = Category::where('url_slug', $url_slug)
            ->select('id')  
            ->first();

        $orderBy    = ['sort'];
        $where      = ['offer'];
        $whereIn    = ['brand', 'time_days', 'warranty_months', 'main_color', 'seller_id', 'sub_category_id'];
        $having     = ['prod_reviews_avg_rating', 'main_price'];

        $filters = [
            'time_days'                 => strlen(explode(':', $deliveries)[1]) == 0 ? [] : explode(',', explode(':', $deliveries)[1]),
            'offer'                     => strlen(explode(':', $offers)[1])     == 0 ? [] : explode(',', explode(':', $offers)[1]),
            'prod_reviews_avg_rating'   => strlen(explode(':', $ratings)[1])    == 0 ? [] : explode(',', explode(':', $ratings)[1]),
            'sub_category_id'           => strlen(explode(':', $types)[1])      == 0 ? [] : explode(',', explode(':', $types)[1]),
            'brand'                     => strlen(explode(':', $brands)[1])     == 0 ? [] : explode(',', explode(':', $brands)[1]),
            'warranty_months'           => strlen(explode(':', $warranties)[1]) == 0 ? [] : explode(',', explode(':', $warranties)[1]),
            'main_color'                => strlen(explode(':', $colors)[1])     == 0 ? [] : explode(',', explode(':', $colors)[1]),
            'main_price'                => strlen(explode(':', $prices)[1])     == 0 ? [] : explode(',', explode(':', $prices)[1]),
            'seller_id'                 => strlen(explode(':', $sellers)[1])    == 0 ? [] : explode(',', explode(':', $sellers)[1]),
            'sort'                      => strlen(explode(':', $sort)[1])       == 0 ? [] : explode(',', explode(':', $sort)[1])
        ];

                
        switch ($collection_type) {

            case 'subcategory':
                $thisSubCategory = Category::where('url_slug', $url_slug)->select('id', 'cat_name', 'parent_id', 'url_slug')->first();
                $collection = Product::where('sub_category_id', $thisSubCategory->id);
                break;

            case 'category':
                $thisCategory = Category::where('url_slug', $url_slug)->select('id', 'cat_name', 'parent_id', 'url_slug')->first();
                $collection = Product::whereHas('subCategory', function ($query) use ($thisCategory) { $query->where('parent_id', $thisCategory->id); });
                break;

            case 'offers':
                $collection = Product::whereNotNull('sale_price');
                break;

            case 'buyback':
                $collection = Product::where('buyback', 1);
                break;

            case 'premio':
                $collection = Product::where('premio', 1);
                break;

            case 'refurbished':
                $collection = Product::where('title', 'LIKE', '%efurbishe%');
                break;

            case 'search':
                $title = 'Search results for' . $url_slug;
                $search = explode(' ', $url_slug);
                $query = Product::query();
                foreach ($search as $keyword) {
                    $query->whereLike('title', '%' . $keyword . '%', caseSensitive: false);}
                $collection = $query;
                break;

            case 'seller':
                $title = 'Products from ' . User::where('id', $url_slug)->first()->company_name;
                $collection = Product::where('seller_id', $url_slug);
                break;
        };

        $buyButtonIDs = (clone $collection)->orderByRaw('COALESCE(sale_price, list_price) ASC')->orderBy('id')->get()->unique('ean_13')->pluck('id');

        $query = $collection
            ->where('documentation_status', 'Approved')
            ->whereIn('id', $buyButtonIDs)
            ->with(['subCategory' => function ($query) { $query->select('id', 'cat_name'); } ])
            ->select('id', 'product_sku', 'title', 'brand', 'ean_13', 'sub_category_id', 'main_color', 'warranty_months', 'seller_id', 'list_price', 'sale_price', 'msrp_price', 'premio', 'image', 'discount_percent',  DB::raw('COALESCE(sale_price, list_price) as main_price'), 'views' )
            ->with(['sellerInfo' => function ($query) { $query->select('id', 'company_name'); } ])
            ->with(['courierData' => function ($query) { $query->select('seller_id', 'time_days'); } ])
            ->withAvg('prodReviews', 'rating')
            ->withCount('prodReviews');
            

            foreach($filters as $column => $values) {
                if ( in_array($column, $whereIn) && sizeof($values) > 0 ) {
                    if ($column === 'main_color') {
                        $query->where(function($q) use ($values) {
                            foreach ($values as $value) {
                                $q->orWhere('main_color', 'LIKE', '%' . $value . '%');
                            }
                        });
                    } else if ($column === 'time_days') {
                        array_walk($values, function(&$value) {$value = rtrim($value, 'd');});
                        $query->whereHas('courierData', function ($q) use ($column, $values) {
                            $q->whereIn($column, $values);
                        });
                    } else if ($column === 'warranty_months') {
                        array_walk($values, function(&$value) {$value = rtrim($value, 'm');});
                        $query->whereHas('courierData', function ($q) use ($column, $values) {
                            $q->whereIn($column, $values);
                        });
                    } else {
                        $query->whereIn($column, $values);
                    }
                }

                if ( in_array($column, $where) && sizeof($values) > 0 ) {
                    foreach($values as $value) {
                        $query->whereNot(explode('=', $value)[0], "=", explode('=', $value)[1]);
                    }
                }
                
                if ( in_array($column, $having) && sizeof($values) > 0 ) {
                    $query->having(function($q) use ($values, $column) {
                        foreach($values as $value) {
                            $q->orHavingBetween($column, [explode('-', $value)[0], explode('-', $value)[1]]);
                        }
                    });
                }

                if ( in_array($column, $orderBy) && sizeof($values) > 0 ) {
                    foreach($values as $value) {
                        $query->orderBy(explode('=', $value)[0], explode('=', $value)[1]);
                    }
                }
            }
            
            $products = $query->orderByRaw('COALESCE(sale_price, list_price) ASC')->orderBy('id')->get()->unique('ean_13')->values();

            $favorites = Favorite::where('user_id', Auth::id())->pluck('ean_13');

        return response()->json(['products' => $products, 'favorites' => $favorites, 'filters' => $filters]);
    }
    ////////////////////////////////////////////////////////////////////



}
