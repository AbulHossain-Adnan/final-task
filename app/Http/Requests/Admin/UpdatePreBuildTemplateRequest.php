<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePreBuildTemplateRequest extends FormRequest
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
            'name' => 'required|string|max:255|regex:/^[a-zA-Z\s]+$/|unique:pre_build_templates,name,'.$this->route('pre_build_template'),
            'segment_page' => 'required',
            'condition' => 'required|array',
            'condition.*' => 'required|distinct:conditions.*',
            'column' => 'required|array',
            'column.*' => 'required|distinct:column.*',
            'value' => 'required|array',
            'value.*' => 'nullable|regex:/^[a-zA-Z0-9\s]+$/',
            'template_condition_id'=>"required|array",
            'template_condition_id.*'=>"required",
        ];
    }
}
