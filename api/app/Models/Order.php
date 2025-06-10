<?php

namespace App\Models;

use App\Models\Result;
use App\Models\Supplier;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['mineral','supplier_id', 'date', 'email', 'batch_number', 'gross_weight', 'net_Weight', 'grade', 'status'];

    public function supplier()
{
    return $this->belongsTo(Supplier::class);
}

public function result()
{
    return $this->hasOne(Result::class);
}
}
