<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateResultRequest extends FormRequest
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
            'mineral' => 'nullable|string',
            'date' => 'date|nullable',
            'owner' => 'nullable|string',
            'email' => 'nullable|email',
            'batch_number' => 'nullable|string',
            'methodology' => "nullable|string",
            'net_Weight' => "nullable|string",
            'grade' => "nullable|string",
            'technician'=>'nullable|string',
            'status' => 'nullable|string'
        ];
    }
}
