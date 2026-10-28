<?php


use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;




// Not my stuff
return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )

    
    // Middleware function
    ->withMiddleware(function (Middleware $middleware): void {


        // Redirects user to login based on the url requested
        $middleware->redirectGuestsTo(function ($request) {


            // If request starts with 'seller' redirects to seller login
            if (str_starts_with($request->path(), 'seller')) {
                return '/seller-login';
                } 


            // If request starts with 'admin' redirects to seller login
            else if (str_starts_with($request->path(), 'admin')) {
                return '/seller-login';
                }


            // Else is probably client so redirect to client login
            else {
                return '/client-login';
                }
            });


        // Alias 'check.role'
        $middleware->alias([
            'check.role' => \App\Http\Middleware\CheckRole::class,
        ]);
    })


    // Not my stuff
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
