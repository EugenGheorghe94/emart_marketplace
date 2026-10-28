<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('/resources/files/users/emart-favicon.svg') }}?v=2" type="image/x-icon">
    <script src="https://kit.fontawesome.com/9fa22df8b7.js" crossorigin="anonymous"></script>
    @vite('public/resources/css/common/variables.scss')
    @vite('public/resources/css/client/client-login.scss')
    <title>eMART - Login</title>
</head>
<body>
<div class="mainArea">
    <div class="bannerContainer">
        <img src="/resources/files/users/login/auth-logos.avif" alt="">
    </div>
    <!-- Start of .loginSwitchArea -->
    <div class="loginSwitchArea">
        <!---->
        <div class="loginFirstStep">
            <!---->
            <div class="mainLogoArea">
                <div class="mainLogo">
                    <img src="/resources/files/users/login/emart-logo-blue.svg" alt="">
                </div>
            </div>
            <div class="mainSlogan">
                <p>One account, many benefits!</p>
            </div>
            <!---->
            <div class="cardsArea">
                <div class="firstCard bannerCard">
                    <div class="cardLogoArea">
                        <img src="/resources/files/users/login/auth-secure.svg" alt="">
                    </div>
                    <div class="cardTextArea">
                        <p class="cardText">Safe and fast card payments</p>
                    </div>
                </div>
                <div class="secondCard bannerCard">
                    <div class="cardLogoArea">
                        <img src="/resources/files/users/login/user-wallet.png" alt="">
                    </div>
                    <div class="cardTextArea">
                        <p class="cardText">Financing from your account</p>
                    </div>
                </div>
                <div class="thirdCard bannerCard">
                    <div class="cardLogoArea">
                        <img src="/resources/files/users/login/premio-logo.svg" alt="">
                    </div>
                    <div class="cardTextArea">
                        <p class="cardText">Multiple benefits with Premio</p>
                    </div>
                </div>
            </div>
            <!---->
            <div class="mainTitle">Authenticate with email</div>
            <!---->
            <div class="loginForm mailLogo">
                <form class="LFS-form" action="">
                    <div class="LFS-input-wrapper">
                        <input class="emailForm normalForm auto-focused" type="text" id="LFS-f-1" name="LFS-username" autocomplete="username" placeholder="Enter your email address">
                    </div>
                    <p class="LFS-warning warningError">Required field</p>
                    <button class="continueBtn LFS-continue" type="submit">Continue</button>
                </form>
            </div>
            <!---->
            <div class="noAccArea">
                <p class="noAccText">Don't have an account? Don't worry!</p>
                <p class="noAccText">You can create one in the next step.</p>
            </div>
            <!---->
            <div class="accAlternativesArea">
                <div class="accAltTitleArea">
                    <p class="accAltTitle">Or quickly with:</p>
                </div>
                <div class="accAltLogoArea">
                    <div class="accAltLogo">
                        <a class="alternate-login" href="https://www.facebook.com/" target="_blank">
                            <img src="/resources/files/users/login/facebook-auth.svg" alt="">
                    </a>
                    </div>
                    <div class="accAltLogo">
                        <a class="alternate-login" href="https://accounts.google.com" target="_blank">
                            <img src="/resources/files/users/login/google-auth.svg" alt="">
                        </a>
                    </div>
                    <div class="accAltLogo">
                        <a class="alternate-login" href="https://account.apple.com/sign-in" target="_blank">
                            <img src="/resources/files/users/login/apple-auth.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="accAltHelpArea">
                <p class="accAltHelpText">Do you need help?</p>
            </div>
        </div>
        <!---->
        <div class="loginSecondStep">
            <div class="LSS-backButton"></div>
            <div class="mainLogoArea">
                <div class="mainLogo">
                    <img src="/resources/files/users/login/emart-logo-blue.svg" alt="">
                </div>
            </div>
            <div class="LSS-mainTextArea">
                <p class="LSS-mainTitle">Welcome!</p>
                <p class="LSS-mainActionCall">Enter your account password</p>
                <p class="LSS-mainAccountEmail"></p>
            </div>
            <div class="LSS-mainFormArea">
                <form class="LSS-form" action="">
                    <div class="LSS-input-wrapper">
                        <input class="passForm normalForm auto-focused" type="password" id="LSS-f-1" name="LSS-password" autocomplete="current-password" placeholder="Enter your account password">
                    </div>
                    <p class="LSS-warning warningError">Required field</p>
                    <div class="rememberMeDiv">
                        <button class="remember-me unchecked" type="button"></button>Remember me
                    </div>
                    <div class="rememberInfo">
                        <div class="popupArrow"></div>
                        <div class="popupText">
                            <p>Keep this option enabled only for personal devices. For shared devices, uncheck the option.</p>
                        </div>
                    </div>
                    <button class="continueBtn  LSS-continue" type="submit">Continue</button>
                </form>
            </div>
            <div class="LSS-forgotPass">
                <p>Forgot your password?</p>
            </div>
            <div class="accAltHelpArea">
                <p class="accAltHelpText">Do you need help?</p>
            </div>
        </div>
        <!---->
        <div class="registerFirstStep">
            <div class="RFS-backButton"></div>
            <div class="mainLogoArea">
                <div class="mainLogo">
                    <img src="/resources/files/users/login/emart-logo-blue.svg" alt="">
                </div>
            </div>
            <div class="RFS-mainTextArea">
                <p class="RFS-mainTitle">Welcome!</p>
                <p class="RFS-mainActionCall">It looks like you don't have an account.<br>Let's create a new account for you!</p>
                <p class="RFS-mainAccountEmail"></p>
            </div>
            <!---->
            <div class="RFS-mainFormArea">
                <form class="RFS-form" action="">
                    <div class="RFS-input-wrapper-1">
                        <input class="userNameForm normalForm auto-focused" type="text" id="RFS-f-1" name="RFS-username"  placeholder="Choose a username">
                    </div>
                    <p class="RFS-warning-1 warningError">Required field</p>




                    <div class="RFS-input-wrapper-2">
                        <input class="firstNameForm normalForm" type="text" id="RFS-f-2" name="RFS-firstname"  placeholder="Enter first name">
                    </div>
                    <p class="RFS-warning-2 warningError">Required field</p>
                    
                    <div class="RFS-input-wrapper-3">
                        <input class="lastNameForm normalForm" type="text" id="RFS-f-3" name="RFS-lastname"  placeholder="Enter last name">
                    </div>
                    <p class="RFS-warning-3 warningError">Required field</p>


                    

                    <div class="RFS-input-wrapper-4">
                        <input class="newPassForm normalForm" type="text" id="RFS-f-4" name="RFS-newPassword" placeholder="Choose a secure password">
                    </div>
                    <p class="RFS-warning-4 warningError">Required field</p>
                    <div class="RFS-input-wrapper-5">
                        <input class="confPassForm normalForm" type="text" id="RFS-f-5" name="RFS-confPassword" placeholder="Confirm your password">
                    </div>
                    <p class="RFS-warning-5 warningError">The passwords are not identical.</p>
                    <br>
                    <!---->
                    <div class="termsAgreeArea terms-1">
                        <div class="termsDiv">
                            <button class="remember-me unchecked" id="terms1" type="button"></button>
                            <p>I have read and I agree to the Terms and Conditions and Privacy Policy. I can confirm that I am over 18 years old.</p>
                        </div>
                    </div>
                    <p class="RFS-warning-6 warningError">Required field</p>
                    <!---->
                    <div class="termsAgreeArea terms-2">
                        <div class="termsDiv">
                            <button class="remember-me unchecked" type="button"></button>
                            <p>I want to receive offers and discounts through eMART Newsletter (you will need to confirm your subscription).</p>
                        </div>
                    </div>
                    <button class="continueBtn RFS-continue" type="submit">Continue</button>
                </form>
            </div>
        </div>
    </div>
    <!-- End of .loginSwitchArea-->
</div>
<!---->
<div class="footerLine">
    <div class="footerLinksArea">
        <p>eMART client account</p>|<p>Privacy and personal data</p>|<p>CPSC</p>|<p>eMART uses cookies</p>
    </div>
</div>
<!---->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="{{ asset('resources/js/client/client-login.js') }}"></script>
</body>
</html>