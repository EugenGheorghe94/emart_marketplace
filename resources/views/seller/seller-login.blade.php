<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('/resources/files/seller/emart-favicon.svg') }}" type="image/x-icon">
    @vite('public/resources/css/common/variables.scss')
    @vite('public/resources/css/seller/seller-login.scss')
    <script src="https://kit.fontawesome.com/9fa22df8b7.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/css/flag-icons.min.css"/>
    <title>eMART Authentication</title>
</head>
<body>
<!---->
<div class="mainHeaderArea">
    <div class="headLogoArea">
        <img src="resources/files/seller/emart-logo-white.svg" alt="">
    </div>
    <div class="headMainArea">
        <p>Business</p>
    </div>
    <div class="headLangArea">
        <p class="carret down"><span class="fi fi-us"></span>EN</p>
    </div>
    <div class="langSelect-area">
        <div>Select language</div>
        <p class="lang-btn es"><span class="fi fi-mx"></span>Español ( spanish )</p>
        <p class="lang-btn fr"><span class="fi fi-fr"></span>Français ( french )</p>
        <p class="lang-btn en"><span class="fi fi-us"></span>English ( english )</p>
        <p class="lang-btn de"><span class="fi fi-de"></span>Deutsch ( german )</p>
        <p class="lang-btn pl"><span class="fi fi-pl"></span>Polski ( polish )</p>
        <p class="lang-btn cn"><span class="fi fi-cn"></span>中国人 ( chinese )</p>
    </div>
</div>
<!---->
<div class="mainLoginArea blankCard">
    <p class="loginTitle"></p>
<!---->
    <div class="loginFirstStep">
        <form class="LFS-form-1" action="">
            <label class="LFS-label-1 formLabel" for="LFS-f-1">Username / E-mail</label>
            <br>
            <input class="LFS-input-1 LFS-emailForm formInput" type="text" id="LFS-f-1" name="LFS-username" autocomplete="username" placeholder="Enter username or e-mail">
            <p class="LFS-warning errorWarning">This field is required</p>
            <button class="LFS-continue formSubmit" type="submit">Next</button>
        </form>
    </div>
<!---->
    <div class="loginSecondStep">
        <form class="LSS-form-1" action="">
            <label class="LSS-label-1 formLabel" for="LSS-f-1">Username / Email</label>
            <br>
            <input class="LSS-input-1 LSS-emailForm formInput" type="text" id="LSS-f-1" name="LSS-username" autocomplete="username" placeholder="Complete with username or e-mail">
        </form>
        <form class="LSS-form-2" action="">
            <div style="margin-top: 16px;">
                <label class="LSS-label-2 formLabel" for="LSS-f-2">Password</label>
                <br>
                <input class="LSS-input-2 passForm formInput" type="password" id="LSS-f-2" name="LSS-password" autocomplete="current-password" placeholder="Enter password">
                <p class="LSS-warning errorWarning">This field is required</p>
            </div>
            <div class="checkBoxArea">
                <input type="checkbox" name="LSS-checkbox" id="LSS-ck-1">
                <label for="LSS-ck-1">Remember me</label>
            </div>
            <a href="">Forgot your password?</a>
            <br>
            <div class="LSS-form-2-buttons buttonsLayout">
                <button class="LSS-previous formReturn" type="button">Previous</button>
                <button class="LSS-connect formSubmit" type="submit">Log in</button>
            </div> 
        </form>
    </div>
<!---->
    <div class="registerFirstStep">
        <form class="RFS-form-0" action="">
            <label class="RFS-label-0 formLabel" for="RFS-f-0">Username / Email</label>
            <br>
            <input class="RFS-input-0 RFS-emailForm formInput" id="RFS-f-0" type="text" name="RFS-username" placeholder="Complete with username or e-mail">
        </form>
        <form class="RFS-form-1" action="">
            <div style="margin-top: 16px;">
                <label class="RFS-label-1 formLabel" for="RFS-f-1">Company name</label>
                <br>
                <input class="RFS-input-1 compNameForm formInput" id="RFS-f-1" name="RFS-companyName" type="text" placeholder="Fill in with you company name">
                <p class="RFS-warning-1 errorWarning">This field is required</p>
            </div>
            <div style="margin-top: 16px;">
                <label class="RFS-label-2 formLabel" for="RFS-f-2">VAT number</label>
                <br>
                <input class="RFS-input-2 vatNoForm formInput" id="RFS-f-2" name="RFS-vatNumber" type="text" placeholder="Add in your valid VAT number">
                <p class="RFS-warning-2 errorWarning">This field is required</p>
            </div>
            <div style="margin-top: 16px;">
                <label class="RFS-label-3 formLabel" for="RFS-f-3">EUID number</label>
                <br>
                <input class="RFS-input-3 euidNoForm formInput" id="RFS-f-3" name="RFS-euidNumber" type="text" placeholder="Add your EUID for selling outside EU">
                <p class="RFS-warning-3 errorWarning">This field is required</p>
            </div>
            <div style="margin-top: 16px;">
                <label class="RFS-label-4 formLabel" for="RFS-f-4">Bank account</label>
                <br>
                <input class="RFS-input-4 bankAccForm formInput" id="RFS-f-4" name="RFS-bankAccount" type="text" placeholder="Fill in with your bank account number">
                <p class="RFS-warning-4 errorWarning">This field is required</p>
            </div>
            <div style="margin-top: 16px;">
                <label class="RFS-label-5 formLabel" for="RFS-f-5">New password</label>
                <br>
                <input class="RFS-input-5 newPassForm formInput" id="RFS-f-5" name="RFS-newPassword" type="text" placeholder="Create a new strong password">
                <p class="RFS-warning-5 errorWarning">This field is required</p>
            </div>
            <div style="margin-top: 16px;">
                <label class="RFS-label-6 formLabel" for="RFS-f-6">Confirm new password</label>
                <br>
                <input class="RFS-input-6 confPassForm formInput" id="RFS-f-6" name="RFS-confPassword" type="text" placeholder="Confirm your new strong password">
                <p class="RFS-warning-6 errorWarning">This field is required</p>
            </div>
            <div class="RFS-form-buttons buttonsLayout">
                <button class="RFS-previous formReturn" type="submit">Previous</button>
                <button class="RFS-register formSubmit" type="submit">Register</button>
            </div>
        </form>
    </div>
</div>
<!---->
<div class="mainFooterArea">
    <div class="footerTextArea">
        <p>Copyright © 2011 - 2026 <b>eMART.</b></p>
        <p>All rights reserved. This site is protected by <b> reCAPTCHA</b> and the <b>Google</b> <a href="">Privacy Policy</a> and <a href="">Terms of Service</a> apply.</p>
    </div>
</div>
<!---->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="{{ asset('resources/js/seller/seller-login.js') }}"></script>
</body>
</html>