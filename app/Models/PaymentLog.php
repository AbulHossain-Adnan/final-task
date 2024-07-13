<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentLog extends Model
{
    use HasFactory;
    protected $fillable = ['amount', 'transaction_date', 'expired_date', 'status'];

    // protected $cast = ['transaction_date' => 'date', 'expired_date' => 'date'];

    protected $casts = [
    'transaction_date'  => 'date',
    'expired_date' => 'date',
];

}
