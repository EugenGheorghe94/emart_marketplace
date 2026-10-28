<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class CheckRole {
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */


    // Runs on every request that uses check.role middleware
    public function handle(Request $request, Closure $next, string $role): Response {
        
    
        // If user is not logged in redirects to login page
        if (!Auth::check()) {
            return redirect()->guest(
                in_array($role, ['seller', 'admin']) ? route('seller-login') : route('client-login')
            );
        }


        // If user account_role doesn't match Route role
        if (Auth::user()->account_role !== $role) {
            return redirect(
                in_array($role, ['seller', 'admin']) ? route('seller-login') : route('client-login')
            );
        }


        // If all checks are correct continue to Route
        return $next($request);
    }
};
