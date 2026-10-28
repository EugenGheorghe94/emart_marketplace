<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('cat_name');
            $table->enum('cat_type', ['section', 'category', 'subcategory']);
            $table->foreignId('parent_id')->nullable();
            $table->string('url_slug')->unique();
            $table->integer('sort_order')->default(0);
            // Timestamp for created_at and updated_at
            $table->timestamps();
 
            // Self-referencing FK (nullable — top-level categories have no parent)
            $table->foreign('parent_id')
                  ->references('id')
                  ->on('categories')
                  ->restrictOnDelete();
        });
    }
 
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};