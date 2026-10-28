<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientAuthController;
use App\Http\Controllers\SellerAuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\ReturnOrderController;
use App\Http\Controllers\ReturnOrderDetailController;
use App\Http\Controllers\CourierController;
use App\Models\Category;


/////////////////////////////////////////////////////////////////////////
// Client routes
Route::get('/client-login', [ClientAuthController::class, 'showLogin'])->name('client-login');
Route::post('/client/check-email', [ClientAuthController::class, 'checkEmail']);
Route::post('/client-login', [ClientAuthController::class, 'handleAuth']);
Route::get('/client-logout', [ClientAuthController::class, 'logout']);

Route::redirect ('/', '/home');
Route::view('/home', '/client/home-page');
Route::view('/category', '/client/prod-category');
Route::get('/subcategory/{url_slug}', [ProductController::class, 'subCategoryFilters']);
Route::get('/category/{url_slug}', [ProductController::class, 'categoryFilters']);
Route::get('/products/{collection_type}/{url_slug}', [ProductController::class, 'collectionFilters']);
Route::get('/products/{collection_type}/{url_slug}/{deliveries}/{offers}/{ratings}/{types}/{brands}/{warranties}/{colors}/{prices}/{sellers}/{sort}', [ProductController::class, 'collectionProducts']);
Route::get('/homepage/products', [ProductController::class, 'homepageProducts']);
Route::get('/fetch/section/{id}', [SectionController::class, 'showCategories']);
Route::get('/fetch/category/{id}', [SectionController::class, 'showSubCategories']);

Route::post('/favorites/add', [FavoriteController::class, 'addFavorite']);
Route::post('/favorites/remove', [FavoriteController::class, 'removeFavorite']);
Route::get('/favorites/fetch', [ProductController::class, 'getFavorite']);
Route::get('/favorites/count', [FavoriteController::class, 'countFavorite']);

Route::post('/addresses/add', [AddressController::class, 'addAddress']);
Route::post('/addresses/remove', [AddressController::class, 'removeAddress']);
Route::get('/addresses/delivery/fetch', [AddressController::class, 'deliveryAddresses']);
Route::get('/addresses/pickup/fetch', [AddressController::class, 'pickupAddresses']);
Route::post('/addresses/pickup/primary', [AddressController::class, 'primaryPickup']);
Route::post('/addresses/delivery/primary', [AddressController::class, 'primaryDelivery']);

Route::get('/cart/summary/{product_sku}',   [ProductController::class, 'cartSummary']);
Route::get('/cart/product/{product_sku}',   [ProductController::class, 'cartProduct']);
Route::get('/check/product/{product_sku}',  [ProductController::class, 'checkoutProducts']);

Route::get('/menuCategories', [SectionController::class, 'menuCategories']);

Route::post('/submit/premio/order/{payment}', [OrderController::class, 'submitPremioOrder']);
Route::post('/submit/delivery/order/{payment}', [OrderController::class, 'submitDeliveryOrder']);

Route::get('/client/orders', [OrderController::class, 'getClientOrders']);
Route::get('/client/returns', [ReturnOrderController::class, 'getClientReturns']);

Route::get('/returnable/orders', [OrderDetailController::class, 'getReturnableOrders']);
Route::get('/returnable/products/{order_number}', [OrderDetailController::class, 'getReturnableProducts']);

Route::post('/return/voucher/pickpoint', [ReturnOrderController::class, 'fastReturn']);
Route::post('/return/standard/details',  [ReturnOrderController::class, 'standardReturn']);


Route::get('/account', [
    AddressController::class, 'accountInfo'
])->middleware(['auth', 'check.role:client']);

Route::get('/premio', function () {
    return view('client.premio-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/cards', function () {
    return view('client.cards-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/orders', function () {
    return view('client.orders-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/subscriptions', function () {
    return view('client.subscriptions-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/returns', function () {
    return view('client.returns-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/favorites', function () {
    return view('client.favorites-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/reviews', function () {
    return view('client.reviews-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/addresses', function () {
    return view('client.addresses-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/invoices', function () {
    return view('client.invoices-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/cart', function () {
    return view('client.cart-page');
})->middleware(['auth', 'check.role:client']);

Route::get('/checkout', [
    AddressController::class, 'checkoutAddresses'
])->middleware(['auth', 'check.role:client']);


Route::get('/seller/orders/{filter}/{type}', [OrderDetailController::class, 'getSellerOrders']);
Route::get('/seller/returns/{filter}/{type}', [ReturnOrderDetailController::class, 'getSellerReturns']);


Route::get('/fetch/product/{id}/{product_sku}', [ProductController::class, 'showProduct']);
Route::get('/fetch/product/{product_sku}', [ProductController::class, 'improveProduct']);
Route::get('/product/{id}/{product_sku}', [ProductController::class, 'productListing']);


Route::get('/similar/{product_sku}/{sort_field}/{sort_type}', [ProductController::class, 'similarProducts']);
Route::get('/recommended/{product_sku}/{sort_field}/{sort_type}', [ProductController::class, 'recommendedProducts']);
Route::get('/others/{product_sku}/{sort_field}/{sort_type}', [ProductController::class, 'otherProducts']);

Route::get('/reviews/{product_sku}/{sort_col_1}/{sort_type_1}/{sort_col_2}/{sort_type_2}/{sort_col_3}/{search}', [ProductController::class, 'productReviews']);


Route::get('/fetch/reviews/{EAN_13}',   [ReviewController::class, 'showRating']);
Route::post('/reviews/submit',          [ReviewController::class, 'submitReview']);
Route::get('/fetch/client/reviews',     [ReviewController::class, 'getClientReviews']);


/////////////////////////////////////////////////////////////////////////
// Seller / Admin log in / register routes
Route::get ('/seller-login', [SellerAuthController::class, 'showLogin'])->name('seller-login');
Route::post('/seller/check-email', [SellerAuthController::class, 'checkEmail']);
Route::post('/seller-login', [SellerAuthController::class, 'handleAuth']);
Route::get('/seller-logout', [SellerAuthController::class, 'logout']);


// Dashboard routes
Route::get('/seller/dashboard', function () {
    return view('seller.dashboard');
})->middleware(['auth', 'check.role:seller']);


// Account routes
Route::get('/seller/account/profile', function () {
    return view('seller.account.profile');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/account/documents', function () {
    return view('seller.account.documents');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/account/newsletters', function () {
    return view('seller.account.newsletters');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/account/rating', function () {
    return view('seller.account.rating');
})->middleware(['auth', 'check.role:seller']);


// Products routes
Route::get('/seller/products/add-products', function () {
    if ( !Auth::user()->courierInfo()->exists() ) { return redirect('/seller/logistics/shipping-tax'); }
    return view('seller.products.add-products');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/products/my-products', function () {
    return view('seller.products.my-products');
})->middleware(['auth', 'check.role:seller']);


// Import XLS
Route::get('/seller/importXLS', function () {
    return view('seller.importXLS');
})->middleware(['auth', 'check.role:seller']);


// Offers routes
Route::get('/seller/offers/general', function () {
    return view('seller.offers.general');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/offers/prices', function () {
    return view('seller.offers.prices');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/offers/reviews', function () {
    return view('seller.offers.reviews');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/offers/stocks', function () {
    return view('seller.offers.stocks');
})->middleware(['auth', 'check.role:seller']);


// Opportunities routes
Route::get('/seller/opportunities/existing-products', function () {
    return view('seller.opportunities.existing-products');
})->middleware(['auth', 'check.role:seller']);


// Orders routes
Route::get('/seller/orders/orders', function () {
    return view('seller.orders.orders');
})->middleware(['auth', 'check.role:seller']);


// Logistics routes
Route::get('/seller/logistics/my-deliveries', function () {
    return view('seller.logistics.my-deliveries');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/logistics/courier-accounts', function () {
    if ( !Auth::user()->courierInfo()->exists() ) { return redirect('/seller/logistics/shipping-tax'); }
    return view('seller.logistics.courier-accounts');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/logistics/shipping-tax', function () {
    if ( Auth::user()->courierInfo()->exists() ) { return redirect('/seller/logistics/courier-accounts'); }
    return view('seller.logistics.shipping-tax');
})->middleware(['auth', 'check.role:seller']);


// Fulfillment routes
Route::get('/seller/fulfilment/calculator', function () {
    return view('seller.fulfilment.calculator');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/fulfilment/dashboard', function () {
    return view('seller.fulfilment.dashboard');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/fulfilment/reception', function () {
    return view('seller.fulfilment.reception');
})->middleware(['auth', 'check.role:seller']);


// Ads routes
Route::get('/seller/ads/campaigns', function () {
    return view('seller.ads.campaigns');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/ads/credits', function () {
    return view('seller.ads.credits');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/ads/interest', function () {
    return view('seller.ads.interest');
})->middleware(['auth', 'check.role:seller']);


// Campaigns routes
Route::get('/seller/campaigns/bundles', function () {
    return view('seller.campaigns.bundles');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/campaigns/campaigns', function () {
    return view('seller.campaigns.campaigns');
})->middleware(['auth', 'check.role:seller']);


// Messages routes
Route::get('/seller/messages/contact', function () {
    return view('seller.messages.contact');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/messages/messages', function () {
    return view('seller.messages.messages');
})->middleware(['auth', 'check.role:seller']);


// Notifications routes
Route::get('/seller/notifications', function () {
    return view('seller.notifications');
})->middleware(['auth', 'check.role:seller']);


// Returns routes
Route::get('/seller/returns/returns', function () {
    return view('seller.returns.returns');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/returns/product-health', function () {
    return view('seller.returns.product-health');
})->middleware(['auth', 'check.role:seller']);


// Financial routes
Route::get('/seller/financial/documents', function () {
    return view('seller.financial.documents');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/financial/invoices', function () {
    return view('seller.financial.invoices');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/financial/payouts', function () {
    return view('seller.financial.payouts');
})->middleware(['auth', 'check.role:seller']);

Route::get('/seller/financial/statement', function () {
    return view('seller.financial.statement');
})->middleware(['auth', 'check.role:seller']);


// Academy route
Route::get('/seller/academy', function () {
    return view('seller.academy');
})->middleware(['auth', 'check.role:seller']);


// Add product Routes
Route::post('/product/draft', [ProductController::class, 'storeDraft'])->middleware(['auth', 'check.role:seller']);
Route::post('/product/{id}/image', [ProductController::class, 'storeImage'])->middleware(['auth', 'check.role:seller']);
Route::post('/product/{id}/details', [ProductController::class, 'storeDetails'])->middleware(['auth', 'check.role:seller']);
Route::post('/product/{id}/description', [ProductController::class, 'storeDescription'])->middleware(['auth', 'check.role:seller']);
Route::post('/product/{id}/offer', [ProductController::class, 'storeOffer'])->middleware(['auth', 'check.role:seller']);
Route::post('/update/product/{seller}/{sku}', [ProductController::class, 'updateProduct'])->middleware(['auth', 'check.role:seller']);



//
Route::get('/api/myproduct/{filter}/{type}', [ProductController::class, 'filterMyProducts']);
Route::get('/api/product/{filter}/{type}', [ProductController::class, 'filterProducts']);
Route::get('/api/opportunities/{filter}/{type}', [ProductController::class, 'opportunitiesProducts']);
Route::post('/order/seen/{order}', [OrderController::class, 'updateOrderStatus']);
Route::post('/return/seen/{returnOrder}', [ReturnOrderController::class, 'updateReturnStatus']);
Route::get('/fetch/seller/couriers', [CourierController::class, 'getSellerCourier']);
Route::post('/seller/add/courier', [CourierController::class, 'addCourier']);
Route::get('/new/orders', [OrderDetailController::class, 'getNewOrders']);
Route::get('/new/returns', [ReturnOrderDetailController::class, 'getNewReturns']);



/////////////////////////////////////////////////////////////////////////
// Admin routes
Route::get('/admin/dashboard', function () {
    return view('admin.dashboard');
})->middleware(['auth', 'check.role:admin']);

Route::get('/admin/products', function () {
    return view('admin.prod-page');
})->middleware(['auth', 'check.role:admin']);

Route::get('/admin/orders', function () {
    return view('admin.orders-page');
})->middleware(['auth', 'check.role:admin']);

Route::get('/admin/returns', function () {
    return view('admin.returns-page');
})->middleware(['auth', 'check.role:admin']);

Route::get('/admin/messages', function () {
    return view('admin.message-page');
})->middleware(['auth', 'check.role:admin']);
/////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////
// Retry login without refresh (different tab)
Route::get('/csrf-token', function() {
    return response()->json(['token' => csrf_token()]);});
/////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////
// API Routes for categories
Route::get('/api/categories', function () {
    return response()->json(
        Category::where('cat_type', 'category')->orderBy('cat_name')->get(['id', 'cat_name'])
    );
});

Route::get('/api/categories/{id}/subcategories', function ($id) {
    return response()->json(
        Category::where('parent_id', $id)->orderBy('cat_name')->get(['id', 'cat_name'])
    );
});
/////////////////////////////////////////////////////////////////////////