<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class AdminCreateOrUpdateRequest extends FormRequest
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
            'name' => 'required|string|max:191',
            'username' => 'required|string|max:191|unique:admins,username,' . ($this->admin?->id ?? 0),
            'email' => 'required|email|max:191',
            'role' => 'required|string|max:191',
            'password' => request()->isMethod('post') ? 'required|min:8|confirmed' : 'nullable|min:8|confirmed',
            'mobile' => 'nullable|string',
        ];
    }
}
