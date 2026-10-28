<?php


namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;




class ClientAuthController extends Controller {


    // Shows client login first page
    public function showLogin() {
        return view('client.client-login');
    }


    // Check if email exists, returns true/false and client role
    public function checkEmail(Request $request) {
        $user = User::where('email_address', $request->email)->first();
        return response() -> json([
            'exists' => (bool)$user,
            'role' => $user ? $user->account_role : null 
            ]);
    }

    
    // Logs in or registers the client
    public function handleAuth(Request $request) {


        // Checks if this is a login (no username) or registration (has username)
        if ($request->has('password') && !$request->has('user_name')) {
            $user = User::where('email_address', $request->email)->first();


            // If password is wrong or user does not exist throws error 401
            if (!$user || !password_verify($request->password, $user->password)) {
                return response()->json(['error' => 'Invalid credentials'], 401);
            }


            // If password is correct updates last_login and redirects to asked page
            $user->update(['last_login' => now()]);
            Auth::login($user);
            return response()->json([
                'redirect' => redirect()->intended('/account')->getTargetUrl()
            ]);
        };
    

        // If request has user_name, registers new client
        $user = User::create([
            'user_name' => $request->user_name,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email_address' => $request->email,
            'password' => $request->password,
            'account_role' => 'client',
        ]);

        
        // Updates last login, and logs in the client
        $user->update(['last_login' => now()]);
        Auth::login($user);
        return response()->json(['redirect' => '/account']);
    }


    // Logout function
    public function logout(Request $request) {
        Auth::logout();                             // clears the logged in user
        $request->session()->invalidate();          // destroys the session
        $request->session()->regenerateToken();     // generates a new CSRF token for security
        return redirect('/home');                   // redirects back to the login page
    }
};
