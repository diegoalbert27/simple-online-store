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
            'password' => 'required|string'
        ]);

        $user = new User();
        $user->name = "{$request->name} {$request->lastName}";
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        $token = $user->createToken("API TOKEN")->plainTextToken;

        return response()->json([
            'message' => 'Creado con exito',
            'data' => [
                'user' => $user,
                'token' => $token
            ]
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $response_body = [
            'message' => 'Usuario o contraseña incorrectos',
            'data' => null
        ];

        $user = User::where('email', '=', $request->email)->first();

        if (is_null($user)) {
            return response()->json($response_body, 401);
        }

        if (Hash::check($request->password, $user->password)) {
            $token = $user->createToken("API TOKEN")->plainTextToken;

            $response_body['message'] = 'Ingreso realizado satisfactoriamente';
            $response_body['data'] = [
                'user' => $user,
                'token' => $token
            ];

            return response()->json($response_body);
        }

        return response()->json($response_body, 401);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Sesion cerrada',
            'data' => null
        ]);
    }
}
