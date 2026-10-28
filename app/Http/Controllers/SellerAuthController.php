<?php


namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;




class SellerAuthController extends Controller {


    // Shows seller/admin login first page
    public function showLogin() {
        return view('seller.seller-login');
    }


    // Check if email exists, returns true/false and seller/admin role
    public function checkEmail(Request $request) {
        $user = User::where('email_address', $request->email)->first();
        return response() -> json([
            'exists' => (bool)$user,
            'role' => $user ? $user->account_role : null
            ]);
    }
    

    // Logs in or registers the seller
    public function handleAuth(Request $request) {


        // Checks if this is a login (no username) or registration (has username)
        if ($request->has('password') && !$request->has('user_name')) {
            $user = User::where('email_address', $request->email)->first();

            
            // If password is wrong or user does not exist throws error 401
            if (!$user || !password_verify($request->password, $user->password)) {
                return response()->json(['error' => 'Invalid dredentials'], 401);
            }


            // If password is correct updates last_login
            $user->update(['last_login' => now()]);
            Auth::login($user);


            // If user is seller, redirects to the page they asked for, or the seller dashboard
            if ($user->account_role === 'seller') {
                return response()->json([
                    'redirect' => redirect()->intended('/seller/dashboard')->getTargetUrl()
                ]);
            }

            // If user is admin, redirects to the page they asked for, or the admin dashboard
            if ($user->account_role === 'admin') {
                return response()->json([
                    'redirect' => redirect()->intended('/admin/dashboard')->getTargetUrl()
                ]);
            }
        };


        // Creates seller username needed to register new seller
        $userName = strtolower(explode(' ', $request->company_name)[0] . '_' . explode(' ', $request->company_name)[1]);

        
        // If request has user_name, registers new seller
        $user = User::create([
            'user_name' => $userName,
            'first_name' => '',
            'last_name' => '',
            'email_address' => $request->email,
            'password' => $request->password,
            'company_name' => $request->company_name,
            'vat_number' => $request->vat_number,
            'euid_number' => $request->euid_number,
            'bank_account' => $request->bank_account,
            'account_role' => 'seller',
        ]);


        // Updates last login, and logs in the client
        $user->update(['last_login' => now()]);
        Auth::login($user);
        return response()->json(['redirect' => '/seller/dashboard']);
    }


    // Logout function
    public function logout(Request $request) {
        Auth::logout();                             // clears the logged in user
        $request->session()->invalidate();          // destroys the session
        $request->session()->regenerateToken();     // generates a new CSRF token for security
        return redirect('/seller-login');           // redirects back to the login page
    }
};
