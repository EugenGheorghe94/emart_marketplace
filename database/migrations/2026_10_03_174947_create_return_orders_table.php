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
        Schema::create('return_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')
                  ->references('id')
                  ->on('users')
                  ->restrictOnDelete();
            $table->foreignId('order_id')
                  ->references('id')
                  ->on('orders')
                  ->restrictOnDelete();
            $table->string('return_number')->unique();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('phone_number');
            $table->string('address');
            $table->enum('address_type', ['delivery', 'pickup']);
            $table->string('bank_account')->nullable();
            $table->decimal('return_total');
            $table->date('required_date');
            $table->date('completed_date')->nullable();
            $table->enum('status_type', ['new', 'pending', 'delayed', 'completed', 'cancelled by client', 'cancelled by seller', 'cancelled automatically', 'cancelled with incident', 'refunded'])->default('new');
            $table->enum('return_type', ['eMART PickPoint', 'Delivery address']);
            $table->enum('refund_type', ['I want eMART voucher', 'I want my money back']);
            $table->string('comments')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('return_orders');
    }
};
