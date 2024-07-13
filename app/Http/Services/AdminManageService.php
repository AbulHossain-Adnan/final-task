<?php

namespace App\Http\Services;


use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminManageService
{
    public static function createOrUpdate(array $data, ?object $admin = null, bool $update = false): array
    {
        DB::beginTransaction();

        try {
            if (is_null($admin)) {
                $admin = new Admin();
                $admin->password = Hash::make($data['password']);
            }
            $admin->name = $data['name'];
            $admin->username = $data['username'];
            $admin->email = $data['email'];
            $admin->mobile = $data['mobile'];
            $admin->save();
            $msg = "Admin Created Successfully";

            if ($update) {
                DB::table('model_has_roles')->where('model_id', $admin->id)->delete();
                $msg = "Admin Updated Successfully";
            };

            $admin->assignRole($data['role']);
            $response = ["msg" => $msg, "type" => "success", "status" => true];

            DB::commit();

        } catch (\Exception $e) {

            DB::rollback();

            $response = ["msg" => $e->getMessage(), "type" => "danger", "status" => false];
        }

        return $response;
    }

    public static function updatePassword(array $data): array
    {
        try {
            Admin::find(auth('admin')->id())->update(['password' => Hash::make($data['password'])]);
//            Auth::guard('admin')->logout();
            $msg = "Password Changed Successfully";
            $status = true;
            $type = 'success';
            $response = ["msg" => $msg, "type" => "success", "status" => true];
        } catch (\Exception $e) {
            $msg = $e->getMessage();
            $status = false;
            $response = ["msg" => $e->getMessage(), "type" => "danger", "status" => false];
        }

        return $response;

    }

    public static function updateProfile(array $data): array
    {
        try {
            Admin::find(auth('admin')->id())->update([
                'name' => $data['name'],
                'email' => $data['email'],
                'mobile' => $data['mobile'],
            ]);
            $msg = "Profile Updated Successfully";
            $status = true;
            $type = 'success';
            $response = ["msg" => $msg, "type" => "success", "status" => true];
        } catch (\Exception $e) {
            $msg = $e->getMessage();
            $status = false;
            $response = ["msg" => $e->getMessage(), "type" => "danger", "status" => false];
        }

        return $response;

    }

}
