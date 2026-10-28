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
        Schema::create('return_order_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('return_id')
                  ->references('id')
                  ->on('return_orders')
                  ->restrictOnDelete();
            $table->foreignId('product_id')
                  ->nullable()
                  ->references('id')
                  ->on('products')
                  ->restrictOnDelete();
            $table->foreignId('seller_id')
                  ->references('id')
                  ->on('users')
                  ->restrictOnDelete();
            $table->decimal('quantity');
            $table->decimal('unit_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('return_order_details');
    }
};
