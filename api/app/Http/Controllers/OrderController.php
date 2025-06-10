<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Http\Requests\OrderRequest;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
      
         $orders = Order::with('supplier')->orderBy('id', 'desc')->paginate(10);

    // Optionally, format the orders to include supplier name directly
    $orders->getCollection()->transform(function ($order) {
        return [
            'id' => $order->id,
            'supplier_name' => $order->supplier ? $order->supplier->name : null,
            'supplier_email' => $order->supplier ? $order->supplier->email : null,
            'district' => $order->supplier ? $order->supplier->district : null,
            'province' => $order->supplier ? $order->supplier->province : null,
            // add other order fields as needed
            'mineral' => $order->mineral,
            'batch_number' => $order->batch_number,
            'date' => $order->date,
            'quantity' => $order->quantity,
            'gross_weight' => $order->gross_weight,
            'net_weight' => $order->net_Weight,
            'grade' => $order->grade,
            'status' => $order->status,
            'created_at' => $order->created_at,
            'updated_at' => $order->updated_at,
            // ... add more fields as needed
        ];
    });

    return response()->json([
        'message' => 'Orders retrieved successfully',
        'orders' => $orders
    ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OrderRequest $request)
    {
        //
        
        $data = $request->validated();
        
        $supplier = Supplier::findOrFail($data['supplier_id']);
    $orders = $supplier->orders()->create($data);

   
        
    // $orders = $request->supplier()->deliveries()->create($data);
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
