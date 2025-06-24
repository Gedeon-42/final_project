<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SupplierAuthController;
use LDAP\Result;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group( function () {
// Add this line to your routes/api.php
Route::post('/supplier/change-password', [SupplierAuthController::class, 'changePassword'])->middleware('auth:sanctum');
});



Route::post('supplier/forgot-password', [SupplierAuthController::class, 'forgotPassword']);
Route::post('supplier/reset-password', [SupplierAuthController::class, 'resetPassword']);

Route::post('/supplier/register', [SupplierAuthController::class, 'register']); // By admin
Route::post('/register', [AuthController::class, 'register']); // By admin
Route::post('/login', [AuthController::class, 'login']);
Route::get('/suppliers', [SupplierAuthController::class, 'index']); 

Route::post('/orders',[OrderController::class, 'store']);
Route::get('/orders',[OrderController::class, 'index']);

Route::get('/suppliers/{supplierId}/orders', [OrderController::class, 'ordersBySupplier']);

Route::put('/orders/{id}',[OrderController::class, 'update']);
Route::delete('/orders/{id}',[OrderController::class, 'destroy']);
Route::get('/orders/total',[OrderController::class, 'getTotalOrders']);
Route::post('/orders/{id}/approve',[OrderController::class, 'approve']);
Route::post('/orders/{id}/reject',[OrderController::class, 'reject']);
Route::post('/orders/{id}/complete',[OrderController::class, 'complete']);

// Result Routes


// routes/web.php or routes/api.php
Route::get('/results/{id}/download-pdf', [ResultController::class, 'downloadResultPdf']);
Route::post('/results',[ResultController::class, 'store']);
//  Route::post('/results/{delivery_id}', [ResultController::class, 'store']);
Route::get('/results',[ResultController::class, 'index']);
Route::get('/suppliers/{supplierId}/results', [ResultController::class, 'resultsBySupplier']);
Route::put('/results/{id}',[ResultController::class, 'update']);
Route::delete('/results/{id}',[ResultController::class, 'destroy']);
Route::get('/results/total',[ResultController::class, 'getTotalResults']);
Route::get('/suppliers/total',[ResultController::class, 'getTotalSuppliers']);

// Payment Routes
Route::post('/payment',[PaymentController::class, 'store']);
Route::get('/payment',[PaymentController::class, 'index']);
Route::get('/payment/{id}',[PaymentController::class, 'show']);
Route::put('/payment/{id}',[PaymentController::class, 'update']);
Route::delete('/payment/{id}',[PaymentController::class, 'destroy']);

Route::post('/settings',[SettingController::class, 'store']);
Route::get('/settings',[SettingController::class, 'index']);
Route::get('/settings/{id}',[SettingController::class, 'show']);
Route::put('/settings/{id}',[SettingController::class, 'update']);
Route::delete('/settings/{id}',[SettingController::class, 'destroy']);