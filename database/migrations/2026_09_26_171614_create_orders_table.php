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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')
                  ->references('id')
                  ->on('users')
                  ->restrictOnDelete();
            $table->foreignId('address_id')
                  ->references('id')
                  ->on('addresses')
                  ->restrictOnDelete();
            $table->string('order_number')->unique();
            $table->decimal('order_total');
            $table->date('required_date');
            $table->date('delivery_date')->nullable();
            $table->enum('status_type', ['new', 'pending', 'delayed', 'completed', 'cancelled by client', 'cancelled by seller', 'cancelled automatically', 'cancelled with incident', 'refunded'])->default('new');
            $table->string('comments')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
