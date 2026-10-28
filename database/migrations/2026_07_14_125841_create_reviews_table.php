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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                  ->nullable()
                  ->references('id')
                  ->on('users')
                  ->restrictOnDelete();
            $table->string('user_name')->nullable();
            $table->string('ean_13')->index();
            $table->enum('rating', [1, 2, 3, 4, 5]);
            $table->string('title');
            $table->text('description');
            $table->integer('likes')->default(0);
            $table->enum('status', ['pending', 'approved', 'refused'])->default('approved');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
