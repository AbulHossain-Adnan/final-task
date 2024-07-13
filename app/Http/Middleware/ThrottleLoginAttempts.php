<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\RateLimiter;

class ThrottleLoginAttempts
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $key = 'login-attempts:' . $request->ip();
        $maxAttempts = 3;
        $decayMinutes = 5;

      
        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {

            return response()->json(['message' => 'Too many login attempts. Please try again in 5 minutes.'], 429);
        }

        RateLimiter::hit($key, $decayMinutes * 60);

    
        return $next($request);
    }
}
