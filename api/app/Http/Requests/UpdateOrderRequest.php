<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderRequest extends FormRequest
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
            'owner' => 'string|nullable',
            'email' => 'string|nullable',
            'batch_number' => 'string|nullable',
            'gross_weight' => "string|nullable",
            'net_Weight' => "string|nullable",
            'grade' => "string|nullable",
            'status' => 'string|nullable'
        ];
    }
}
