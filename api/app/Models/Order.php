<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['mineral', 'date', 'owner', 'email', 'batch_number', 'gross_weight', 'net_Weight', 'grade', 'status'];
}
