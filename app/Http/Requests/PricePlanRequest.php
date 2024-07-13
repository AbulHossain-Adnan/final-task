<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PricePlanRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "type" => "nullable|string",
            "name" => "required|string",
            "price" => "required|numeric",
            "capped_amount" => "nullable|numeric",
            "terms" => "nullable|string",
            "trial_days" => "nullable|numeric",
            "interval" => "nullable|string",
            "is_display_on_app" => "nullable|string",
            "action" => "nullable",
            "uuid" => "nullable",
        ];
    }
}
