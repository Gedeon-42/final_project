<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Result;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Mail\ResultAvailableMail;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\ResultRequest;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\UpdateResultRequest;

class ResultController extends Controller
{
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

          $orders = Result::with('supplier')->orderBy('id', 'desc')->paginate(10);

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
            'methodology'=> $order->methodology,
            'net_weight' => $order->net_weight,
            'technician' => $order->technician,
            'supervisor' => $order->supervisor,
            'security' => $order->security,
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

  public function getTotalResults()
    {
        $totalorders = DB::table('results')
            ->count();

        return response()->json([
            
            'total_results' => $totalorders
        ]);
        }

          public function getTotalSuppliers()
    {
        $totalorders = DB::table('suppliers')
            ->count();

        return response()->json([
            
            'total_suppliers' => $totalorders
        ]);
        }


public function downloadResultPdf($id)
{
    $result = Result::findOrFail($id);
    $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('result_pdf', compact('result'));
    return $pdf->download('result_'.$result->id.'.pdf');
}
   
    /**
     * Update the specified resource in storage.
     */


    /**
     * Remove the specified resource from storage.
     */
  

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


