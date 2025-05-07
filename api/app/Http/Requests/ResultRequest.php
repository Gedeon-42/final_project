<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResultRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'mineral' => 'required|string',
            'date' => 'date|required',
            'owner' => 'required|string',
            'email' => 'required|email',
            'batch_number' => 'required|string',
            'methodology' => "required|string",
            'net_Weight' => "required|string",
            'grade' => "required|string",
            'technician'=>'nullable|string',
            'status' => 'required|string'
        ];
    }
}
