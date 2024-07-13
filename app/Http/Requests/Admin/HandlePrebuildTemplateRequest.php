<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class HandlePrebuildTemplateRequest extends FormRequest
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
            'name' => 'required|string|max:255|unique:pre_build_templates,name|regex:/^[a-zA-Z0-9_ \s]+$/',
            'segment_page' => 'required',
            'condition' => 'required|array',
            'condition.*' => 'required',
            'column' => 'required|array',
            'column.*' => 'required|distinct:column.*',
            'value' => 'required|array',
            'value.*' => 'nullable|regex:/^[a-zA-Z0-9_ \s]+$/',
        ];
    }
}
