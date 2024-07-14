<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UserResetPasswordRequest;
use App\Http\Services\RegisterService;
use App\Models\Admin;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\View\View;

class AdminAuthController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('guest:admin')->except('logout');
    }

    public function showLoginForm(): View
    {
        return view('admin.auth.login');
    }

    public function showRegistrationForm(): View
    {
        return view('admin.auth.register');
    }

    public function register(RegisterRequest $request): RedirectResponse
    {
        $response = RegisterService::register($request->validated());

        if ($response['status']) {
            return redirect(route('admin.login'))->with($response);
        } else {
            return back()->with($response);
        }

    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::guard('admin')->logout();

        return redirect()->route('admin.login');
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $credentials = filter_var($validated['email'], FILTER_VALIDATE_EMAIL)
            ? ['email' => $validated['email']]
            : ['username' => $validated['email']];

        $credentials['password'] = $validated['password'];

        if (Auth::guard('admin')->attempt($credentials, $request->boolean('remember'))) {
            return response()->json([
                'msg' => __('Login Success Redirecting'),
                'type' => 'success',
            ]);
        }

        return response()->json([
            'msg' => sprintf(__('Your %s or Password Is Wrong !!'), key($credentials)),
            'type' => 'error',
        ], 400);
    }


    public function UserResetPassword(UserResetPasswordRequest $request)
    {
        $user_info = Admin::where('username', $request->validated('username'))->first();
        $user = Admin::findOrFail($user_info->id);
        $token_info = DB::table('password_resets')->where(['email' => $user_info->email, 'token' => $request->validated('token')->first()]);

        $token_id = Str::random(30);
        if (empty($token_info)) {

            DB::table('password_resets')->insert(['email' => $user_info->email, 'token' => $token_id]);
        }

        if (!empty($token_iinfo)) {
            $user->password = Hash::make($request->password);
            $user->save();
            return redirect()->route('landlord.admin.login')->with(['msg' => __('Password Changed Successfully'), 'type' => 'success']);
        }

        return redirect()->back()->with(['msg' => __('Somethings Going Wrong! Please Try Again or Check Your Old Password'), 'type' => 'danger']);
    }
}
