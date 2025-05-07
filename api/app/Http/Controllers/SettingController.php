<?php

namespace App\Http\Controllers;

use App\Http\Requests\SettingRequest;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $settings = Setting::query()->orderBy('id', 'desc');
        return response()->json([
            'message' => 'Settings retrieved successfully',
            'settings' => $settings->paginate(10)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SettingRequest $request)
    {
        //
        $data = $request->validated();

        $setting = Setting::create($data);
        return response()->json([
            'message' => 'setting recorded successfully',
            'setting' => $setting
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $setting= Setting::findOrFail($id);
        return response()->json($setting);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $data = $request->validated();
        $setting = Setting::findOrFail($id);
        $setting->update($data);
        return response()->json([
            'message' => 'setting updated successfully',
            'setting' => $setting
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $setting = Setting::findOrFail($id);
        $setting->delete();
        return response()->json([
            'message' => 'Setting deleted successfully'
        ]);
    }
}
