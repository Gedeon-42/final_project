<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\SupplierCredentialsMail;

class SupplierAuthController extends Controller
{
    //


  public function index()
{
    return Supplier::select('id', 'name','email','phone','district','province')->get();
}



public function register(Request $request)
{
    $validated = $request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:suppliers',
        'phone' => 'required',
        'district' => 'required',
        'province' => 'required',
    ]);

$randomPassword = str_pad(rand(0, 99999), 5, '0', STR_PAD_LEFT);
    $supplier = Supplier::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'phone' => $validated['phone'],
        'district' => $validated['district'],
        'province' => $validated['province'],
        // Generate a random 5-digit password
        'password' => bcrypt($randomPassword),
    ]);

    // Optionally email credentials
    Mail::to($supplier->email)->send(new SupplierCredentialsMail($validated['email'],$randomPassword ,$validated['name'] ));

    return response()->json(['message' => 'Supplier registered successfully']);
}


    public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    
    $supplier = Supplier::where('email', $credentials['email'])->first();

    if (! $supplier || ! Hash::check($credentials['password'], $supplier->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $token = $supplier->createToken('supplier-token')->plainTextToken;

    return response()->json(['token' => $token, 'supplier' => $supplier]);
}

}
