<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ConditionGroupRequest extends FormRequest
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
            'name' => 'required|string|max:255|regex:/^[a-zA-Z0-9\s]+$/|unique:segments,name,' . ($this->condition_group->id ?? 1),  // Updated table name to 'segments' and max length to 255
            'conditions' => 'required|array',
            'conditions.*' => 'required|regex:/^[a-zA-Z0-9_\s]+$/|distinct:conditions.*',
            'default' => 'required|array',
            'default.*' => 'required|regex:/^[a-zA-Z0-9_\s]+$/|distinct:default.*',
            'type' => "required",
            'condition_groups_data_id' => 'nullable|array',
        ];
    }
}
