<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlanPermissionRequest extends FormRequest
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
            'plan_id' =>'required',
            'action' =>'nullable',
            'sidebar_id' =>'required',
            'is_parent' =>'nullable',
            'child_menu_id' =>'nullable|array',
            'child_menus' =>'nullable|array',
        ];
    }
}
