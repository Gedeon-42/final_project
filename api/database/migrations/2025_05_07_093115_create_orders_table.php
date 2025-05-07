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
            $table->string('mineral');
            $table->date('date');
            $table->string('owner');
            $table->string('email');
            $table->string('batch_number');
            $table->string('gross_weight')->nullable();
            $table->string('net_weight');
            $table->string('grade');
            $table->enum('status', ['Pending', 'Completed', 'Rejected'])->default('Pending');

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
