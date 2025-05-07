<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
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
            'date' => 'date|required',
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'payment_type' => "nullable|string",
            'net_Weight' => "required|string",
            'amount' => "required|string",
            'status' => 'required|string'
        ];
    }
}
