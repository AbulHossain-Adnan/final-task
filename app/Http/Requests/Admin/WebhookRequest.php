<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class WebhookRequest extends FormRequest
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
            "topic" => 'required|min:3|unique:webhooks,topic,' . ($this->webhook->id ?? 0),
            "address" => "required|string"
        ];
    }

    protected function prepareForValidation()
    {
        $topic = strtolower(str_replace(' ', '_', $this->topic));
        $address = str_replace([' ','/'], ['_','-'], $topic);

        return $this->merge([
            'address' => $address,
            'topic' => $topic
        ]);
    }
}
