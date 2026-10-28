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
        Schema::create('couriers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('seller_id')
                  ->references('id')
                  ->on('users')
                  ->restrictOnDelete();
            $table->enum('courier_name', ['FedEx Priority', 'UPS Parcel', 'DHL Express']);
            $table->integer('time_days');
            $table->decimal('shipping_cost');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('couriers');
    }
};
