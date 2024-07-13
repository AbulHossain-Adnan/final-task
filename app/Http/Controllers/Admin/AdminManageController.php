<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminCreateOrUpdateRequest;
use App\Http\Requests\AdminPasswordUpdateRequest;
use App\Http\Requests\AdminProfileUpdateRequest;
use App\Http\Services\AdminManageService;
use App\Models\Admin;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;
use Spatie\Permission\Models\Role;

class AdminManageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $admins = Admin::latest()->paginate(10)->withQueryString();
        $roles = Role::pluck('name', 'name')->all();
        return view('admin.admin-manage.index', compact('admins', 'roles'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AdminCreateOrUpdateRequest $request): RedirectResponse
    {
        $response = AdminManageService::createOrUpdate($request->validated());
        return back()->with($response);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AdminCreateOrUpdateRequest $request, Admin $admin): RedirectResponse
    {
        $response = AdminManageService::createOrUpdate($request->validated(), $admin, true);
        return back()->with($response);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        try {
            Admin::findOrFail($id)->delete();
        } catch (\Exception $exception) {
            return back()->withErrors($exception->getMessage());
        }
        return back()->with(["msg" => "Admin deleted successfully", "type" => "success"]);
    }

    public function changePassword()
    {
        return view('admin.auth.change-password');
    }

    public function update_change_password(AdminPasswordUpdateRequest $request): RedirectResponse
    {
        $response = AdminManageService::updatePassword($request->validated());
        return back()->with($response);
    }

    public function update_edit_profile(AdminProfileUpdateRequest $request): RedirectResponse
    {
        $response = AdminManageService::updateProfile($request->validated());
        return back()->with($response);
    }

    public function edit_profile(): View
    {
        return view('admin.auth.edit-profile');
    }
}
