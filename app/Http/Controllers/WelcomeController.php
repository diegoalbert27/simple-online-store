<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function show(Request $request)
    {
        $products_page = Product::with('productImagen')->with('category')->orderBy('id_product')->paginate(8);
        $categories = Category::all();

        return Inertia::render('Welcome', [ 'productsPage' => $products_page, 'categories' => $categories ]);
    }
}
