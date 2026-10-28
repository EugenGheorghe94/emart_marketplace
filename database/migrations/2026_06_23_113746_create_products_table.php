<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            // Identifiers
            $table->id();
            $table->foreignId('seller_id')
                  ->references('id')
                  ->on('users')
                  ->restrictOnDelete();
            // Draft
            $table->string('title');
            $table->foreignId('sub_category_id')
                  ->references('id')
                  ->on('categories')
                  ->restrictOnDelete();
            $table->string('brand');
            $table->string('product_id')->unique();
            $table->string('product_sku');
            $table->string('ean_13');
            $table->boolean('first_listing')->default(false);
            // Image
            $table->string('image')->nullable();
            $table->string('thumbnail')->nullable();
            // Product Details
            $table->string('product_type')->nullable();
            $table->integer('pieces_per_set')->nullable();
            $table->string('product_material')->nullable();
            $table->string('main_color')->nullable();
            $table->integer('length_mm')->nullable();
            $table->integer('width_mm')->nullable();
            $table->integer('height_mm')->nullable();
            $table->integer('weight_gr')->nullable();
            // Description
            $table->string('keywords', 500)->nullable();
            $table->string('description', 2000)->nullable();
            // Offer Details
            $table->decimal('list_price', 10, 2)->nullable();
            $table->decimal('min_price', 10, 2)->nullable();
            $table->decimal('max_price', 10, 2)->nullable();
            $table->decimal('msrp_price', 10, 2)->nullable();
            $table->integer('discount_percent')->nullable();
            $table->decimal('sale_price', 10, 2)->nullable();
            $table->integer('stock')->nullable();
            $table->integer('warranty_months')->nullable();
            $table->string('manufacturer_name')->nullable();
            $table->string('manufacturer_email')->nullable();
            $table->string('manufacturer_address')->nullable();
            $table->string('eu_responsible_name')->nullable();
            $table->string('eu_responsible_email')->nullable();
            $table->string('eu_responsible_address')->nullable();
            // Meta
            $table->enum('documentation_status', ['Draft', 'Pending', 'Approved', 'Refused', 'Blocked'])->default('Draft');
            $table->enum('performance_status', ['Very Cold', 'Cold', 'Regular', 'Good', 'Hot', 'Super Hot'])->default('Regular');
            $table->enum('listing_status', ['End of Life', 'Blocked', 'Inactive', 'Unavailable', 'Available'])->default('Available');
            $table->enum('pricing_status', ['Invalid', 'Unfair', 'Lower', 'Best'])->default('Best');
            $table->enum('product_status', ['Suspended', 'Poor', 'Improve', 'Good'])->default('Good');
            $table->boolean('buyback')->default(0);
            $table->boolean('homepage')->default(0);
            $table->boolean('premio')->default(0);
            $table->integer('views')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
