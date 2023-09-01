<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function signup(Request $request)
    {
        return Inertia::render('Account/Signup');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|unique:user,email|email',
            'phone' => 'required|integer:user',
            'address' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = new User();
        $user->name = "{$request->name} {$request->lastName}";
        $user->email = $request->email;
        $user->address = $request->address;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->password);
        $user->save();

        $token = $user->createToken("API TOKEN")->plainTextToken;

        return response()->json([
            'message' => 'Creado con exito',
            'data' => [
                'user' => $user,
                'token' => $token
            ]
        ]);
    }
}
