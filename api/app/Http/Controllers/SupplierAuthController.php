<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Supplier;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\SupplierCredentialsMail;
use App\Mail\SupplierPasswordResetMail;

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
        'license_number'=>'required'
    ]);

$randomPassword = str_pad(rand(0, 99999), 5, '0', STR_PAD_LEFT);
    $supplier = Supplier::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'phone' => $validated['phone'],
        'district' => $validated['district'],
        'province' => $validated['province'],
        'license_number'=>$validated['license_number'],
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


public function changePassword(Request $request)
{
    $request->validate([
        'current_password' => 'required',
        'new_password' => 'required|min:6|confirmed', // expects new_password_confirmation field
    ]);

    $supplier = Auth::user();

    if (!Hash::check($request->current_password, $supplier->password)) {
        return response()->json(['message' => 'Current password is incorrect'], 400);
    }

    $supplier->password = bcrypt($request->new_password);
    $supplier->save();

    return response()->json(['message' => 'Password changed successfully']);
}





// ...existing code...

// 1. Request password reset
public function forgotPassword(Request $request)
{
    $request->validate(['email' => 'required|email']);

    $supplier = Supplier::where('email', $request->email)->first();
    if (!$supplier) {
        return response()->json(['message' => 'Email not found'], 404);
    }

    $token = Str::random(60);

    // Store token in password_resets table
    DB::table('password_resets')->updateOrInsert(
        ['email' => $request->email],
        [
            'email' => $request->email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]
    );

    // Send token via email (implement your own Mailable if needed)
   Mail::to($supplier->email)->send(new SupplierPasswordResetMail($token, $supplier->name,$supplier->email));

    return response()->json(['message' => 'Password reset token sent to your email']);
}

// 2. Reset password
public function resetPassword(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'token' => 'required',
        'password' => 'required|min:6|confirmed'
    ]);

    $reset = DB::table('password_resets')
        ->where('email', $request->email)
        ->where('token', $request->token)
        ->first();

    if (!$reset) {
        return response()->json(['message' => 'Invalid token or email'], 400);
    }

    $supplier = Supplier::where('email', $request->email)->first();
    if (!$supplier) {
        return response()->json(['message' => 'Supplier not found'], 404);
    }

    $supplier->password = bcrypt($request->password);
    $supplier->save();

    // Delete the reset token
    DB::table('password_resets')->where('email', $request->email)->delete();

    return response()->json(['message' => 'Password has been reset successfully']);
}

// ...existing code...

}
