<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlanModuleFeatureRequest extends FormRequest
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
            "name"=>"required",
            "name.*"=>"required",
            "value"=>"required",
            "value.*"=>"required|string",
            "has_condition"=>"nullable",
            "has_condition.*"=>"nullable",
            "plan_id"=>"required",
            "module_name"=>"required",
            "module_feature_id"=>"nullable",
            "action"=>"nullable",
        ];
    }
}
