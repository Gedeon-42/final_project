<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResultRequest;
use App\Http\Requests\UpdateResultRequest;
use App\Models\Result;
use Illuminate\Http\Request;


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
        
        $results = Result::create($data);
        return response()->json([
            'message'=>'result created successfully',
           'results' =>$results 
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $result= Result::findOrFail($id);
        return response()->json($result);
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
