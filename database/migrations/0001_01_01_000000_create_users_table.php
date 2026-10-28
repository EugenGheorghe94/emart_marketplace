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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('user_name');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email_address')->unique();
            $table->string('password');
            $table->string('company_name')->nullable();
            $table->string('vat_number')->nullable();
            $table->string('euid_number')->nullable();
            $table->string('bank_account')->nullable();
            $table->integer('account_health')->default(100);
            $table->string('account_role')->default('client');
            $table->string('status_type')->default('active');
            $table->timestamp('last_login')->nullable();
            // Timestamp for created_at and updated_at
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
