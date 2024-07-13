<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class SegmentPageColumnRequest extends FormRequest
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
            'name' => 'required',
            'name.*' => 'required|string|max:255|regex:/^[a-zA-Z0-9_\s]+$/',
            'page_name' => 'required|string|max:191',
            'model' => 'required',
            'model.*' => 'required|string|max:191',
            'condition_group_id' => 'required',
            'condition_group_id.*' => 'required',
            'model_column' => 'required',
            'model_column.*' => ['nullable','string','max:191'],
            'table_name' => 'nullable',
            'table_name.*' => 'nullable|string|max:191',
            'having' => 'nullable',
            'having.*' => 'nullable',
            'is_graphable' => 'nullable',
            'is_graphable.*' => 'nullable|boolean',
            'is_default' => 'nullable',
            'is_default.*' => 'nullable|boolean',
            'segment_id' => 'required',
            'page_column_id' => 'nullable',
        ];
    }
}
