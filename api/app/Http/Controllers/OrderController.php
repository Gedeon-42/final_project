<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $orders = Order::query()->orderBy('id','desc');
        return response()->json([
            'message' => 'Orders retrieved successfully',
            'orders' => $orders->paginate(10)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OrderRequest $request)
    {
        //
        $data = $request->validated();
        
        $orders = Order::create($data);
        return response()->json([
            'message'=>'orders created successfully',
           'orders' =>$orders 
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $order= Order::findOrFail($id);
        return response()->json($order);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, string $id)
    {
        //
        $data = $request->validated();
        $order = Order::findOrFail($id);
        $order->update($data);
        return response()->json([
            'message' => 'Order updated successfully',
            'order' => $order
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $order = Order::findOrFail($id);
        $order->delete();
        return response()->json([
            'message' => 'Order deleted successfully'
        ]);
    }
}
