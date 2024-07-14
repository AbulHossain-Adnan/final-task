<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Services\RegisterService;
use App\Models\Admin;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

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

    public function showLoginForm()
    {
        return view('admin.auth.login');
    }

    public function showRegistrationForm()
    {
        return view('admin.auth.register');
    }

    public function register(RegisterRequest $request)
    {
        $response = RegisterService::register($request->validated());

        if ($response['status']) {
            return redirect(route('admin.login'))->with($response);
        }else{
            return back()->with($response);
        }

    }

    public function logout(Request $request){

        Auth::guard('admin')->logout();

        return redirect()->route('admin.login');
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|min:6'
        ]);
        $type = 'username';

        //check is email or username
        if (filter_var($request->email,FILTER_VALIDATE_EMAIL))
        {
            $type = 'email';
        }
        if (Auth::guard('admin')->attempt([ $type => $request->email, 'password' => $request->password], $request->get('remember')))
        {
            return response()->json([
                'msg' => __('Login Success Redirecting'),
                'type' => 'success',
            ]);
        }

        abort(400,sprintf(__('Your %s or Password Is Wrong !!'),$type));
    }


    public function UserResetPassword(Request $request)
    {
        $this->validate($request, [
            'token' => 'required',
            'username' => 'required',
            'password' => 'required|string|min:8|confirmed'
        ]);


        $user_info = Admin::where('username', $request->username)->first();
        $user = Admin::findOrFail($user_info->id);
        $token_iinfo = DB::table('password_resets')->where(['email' => $user_info->email, 'token' => $request->token])->first();

        $token_id = Str::random(30);
        if (empty($token_iinfo)) {

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
