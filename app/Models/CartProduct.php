<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CartProduct extends Model
{
    use HasFactory;

    protected $table = 'cart_product';
    protected $primaryKey = 'id_cart_product';

    public function product() : HasOne
    {
        return $this->hasOne(Product::class, 'id_product')->with('productImagen');
    }
}
