<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Result;
use Illuminate\Http\Request;
use App\Mail\ResultAvailableMail;
use App\Http\Requests\ResultRequest;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\UpdateResultRequest;
use App\Models\Supplier;

class ResultController extends Controller
{
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $results = Result::query()->orderBy('id','desc');
        return response()->json([
            'message' => 'Result retrieved successfully',
            'results' => $results->paginate(10)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ResultRequest $request)
    {
        //
        $data = $request->validated();
        $supplier = Supplier::findOrFail($data['supplier_id']);
        $results = $supplier->results()->create($data);
     
// Send email to supplier
    Mail::to($results->supplier->email)->send(new ResultAvailableMail($results));

    $results->update(['status' =>'completed']);
    return response()->json(['message' => 'Result created and supplier notified']);

      
    }

    /**
     * Display the specified resource.
     */
  public function resultsBySupplier($supplierId)
{
    $orders = Result::where('supplier_id', $supplierId)
        ->orderBy('id', 'desc')
        ->with('supplier')
        ->get();

    
    return response()->json([
        'message' => 'Result for supplier retrieved successfully',
        'orders' => $orders
    ]);
}

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResultRequest $request, string $id)
    {
        //
        $data = $request->validated();
        $result = Result::findOrFail($id);
        $result->update($data);
        return response()->json([
            'message' => 'Result updated successfully',
            'result' => $result
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $result = Result::findOrFail($id);
        $result->delete();
        return response()->json([
            'message' => 'result deleted successfully'
        ]);
    }
}
