<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlanModuleRequest extends FormRequest
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
            "name" => "required|string|unique:plan_modules,name,". ($this->plan_module?->id ?? 0),
            "plan_id" => "required|numeric",
        ];
    }
}
