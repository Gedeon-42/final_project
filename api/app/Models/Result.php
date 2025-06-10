<?php

namespace App\Models;

use App\Models\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Result extends Model
{
    use HasFactory;
    protected $fillable = ['mineral', 'date', 'supplier_id', 'email', 'batch_number', 'methodology', 'net_Weight', 'technician', 'grade', 'status'];


    public function delivery()
{
    return $this->belongsTo(Order::class);
}
    public function supplier()
{
    return $this->belongsTo(Supplier::class);
}

}
