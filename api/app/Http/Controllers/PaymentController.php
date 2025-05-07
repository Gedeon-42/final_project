<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdatePaymentRequest;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $payments = Payment::query()->orderBy('id', 'desc');
        return response()->json([
            'message' => 'Payment retrieved successfully',
            'payments' => $payments->paginate(10)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->validated();

        $payment = Payment::create($data);
        return response()->json([
            'message' => 'payment recorded successfully',
            'payment' => $payment
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $payment = Payment::findOrFail($id);
        return response()->json($payment);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePaymentRequest $request, string $id)
    {
        //
        $data = $request->validated();
        $payment = Payment::findOrFail($id);
        $payment->update($data);
        return response()->json([
            'message' => 'payment updated successfully',
            'payment' => $payment
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $payment = Payment::findOrFail($id);
        $payment->delete();
        return response()->json([
            'message' => 'Payment deleted successfully'
        ]);
    }
}
