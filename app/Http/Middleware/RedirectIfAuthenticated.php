<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard)
        {
            if ( (\request()->path() === 'admin/login' || \request()->is('admin-home/home/*' )))
            {
                if (Auth::guard('admin')->check())
                {
                    return redirect('/admin-home/dashboard');
                }
                return $next($request);
            }

            return $next($request);
        }

        return $next($request);
    }
}
