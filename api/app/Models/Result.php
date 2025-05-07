<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;
    protected $fillable = ['mineral', 'date', 'owner', 'email', 'batch_number', 'methodology', 'net_Weight', 'technician', 'grade', 'status'];
}
