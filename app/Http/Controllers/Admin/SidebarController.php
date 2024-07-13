<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SidebarRequest;
use App\Http\Services\SidebarService;
use App\Models\Sidebar;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class SidebarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $sidebars = Sidebar::with('side_menus')->where('parent_id', null)->paginate(10);

        return view('admin.sidebar.index', compact('sidebars'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        return view('admin.sidebar.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SidebarRequest $request): RedirectResponse
    {
        $response = SidebarService::createOrUpdate($request->validated());

        if ($request->action == "save") {
            return back()->with($response);
        } else {
            return redirect()->route('admin.sidebars.index')->with($response);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): View
    {
        $sidebar = Sidebar::with('side_menus')->findOrFail($id);

        return view('admin.sidebar.edit', compact('sidebar'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SidebarRequest $request, Sidebar $sidebar): RedirectResponse
    {
        $response = SidebarService::createOrUpdate($request->validated(), $sidebar, true);

        if ($request->action == "save") {
            return back()->with($response);
        } else {

            return redirect()->route('admin.sidebars.index')->with($response);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        $response = SidebarService::delete($id);

        return back()->with($response);
    }
}
