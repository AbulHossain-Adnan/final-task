<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SidebarRequest extends FormRequest
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
        $sidebarId = $this->sidebar?->id ?? null;
        return [
            "parent_name" => "required|unique:sidebars,name,". ($this->sidebar?->id ?? 0),
//            "name.*" => "required|unique:sidebars,name,". ($this->sidebar?->id ?? 0),
            'name' => ['required', Rule::unique('sidebars', 'name')->ignore($sidebarId)],
//            "name.*" => "required",
            "parent_icon" => "nullable|max:255",
            "icon.*" => "nullable|max:255",
            "parent_url" => "nullable|max:255",
            "url.*" => "nullable|max:255",
            "parent_id" => "nullable",
            "side_menu_id" => "nullable",
        ];
    }
}
