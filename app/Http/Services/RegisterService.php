<?php

namespace App\Http\Services;
use App\Models\Admin;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;



class RegisterService
{
    public static function register(array $data): array
    {
        try {
           
            $admin = new Admin();
            $admin->name = $data['name'];
            $admin->username = $data['username'];
            $admin->email = $data['email'];
            $admin->password=hash::make('password');
            $msg = "Registered successfully you can login now";
          
            $response = ["msg" => $msg, "type" => "success", "status" => true];


        } catch (\Exception $e) {

            $response = ["msg" => $e->getMessage(), "type" => "danger", "status" => false];
        }

        return $response;
    }

}
