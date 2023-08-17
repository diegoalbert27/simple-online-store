<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function show(Request $request)
    {
        $products = Product::all();
        return Inertia::render('Welcome', [ 'products' => $products ]);
    }
}
