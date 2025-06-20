<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
     public function register(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string',
        'phone' => 'nullable|string',
      
    ]);

    $user = User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'phone' => $validated['phone'],
        'password' => Hash::make($validated['password']),
    
    ]);

    $token = $user->createToken('Token')->plainTextToken;
    return response()->json([
        'user' => $user,
        'Token' => $token,
        'role' => 'user'
    ]);
}

    // Login
  public function login(Request $request)
{
    $validated = $request->validate([
        'email' => 'required|email',
        'password' => 'required|string'
    ]);

    // Try User table
    $user = User::where('email', $validated['email'])->first();

    if ($user && Hash::check($validated['password'], $user->password)) {
        $token = $user->createToken('Token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'Token' => $token,
            'role' => 'user'
        ]);
    }

    // Try Supplier table
    $supplier = Supplier::where('email', $validated['email'])->first();

    if ($supplier && Hash::check($validated['password'], $supplier->password)) {
        $token = $supplier->createToken('Token')->plainTextToken;

        return response()->json([
            'user' => $supplier,
            'Token' => $token,
            'role' => 'supplier'
        ]);
    }

    return response()->json(['message' => 'Invalid credentials'], 401);
}
}
