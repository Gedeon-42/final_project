<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'mineral', 'user_id', 'email', 'phone', 'payment_type', 'date', 'net_weight', 'amount', 'status'];
}
