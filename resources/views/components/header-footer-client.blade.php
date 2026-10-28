{{-- components/header-footer-client.blade.php --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <base href="{{ url('/') }}">
    <link rel="shortcut icon" href="{{ asset('/resources/files/users/emart-favicon.svg') }}?v=2" type="image/x-icon">
    <script src="https://kit.fontawesome.com/9fa22df8b7.js" crossorigin="anonymous" defer></script>
    @vite('public/resources/css/common/variables.scss')
    @vite('public/resources/components/css/header-footer-client.scss')
    {{ $styles ?? '' }}
    @stack('component-styles')
</head>
<body>
<header class="mainHeaderArea">
    <section class="topHeaderArea">
        <div class="topBurgerMenu hidden burger">
        </div>
        <a href="home" class="topHeaderLogo">
            <img class="homePageLogo" src="/resources/files/users/home/emart-logo-white.svg" alt="Company name home">
        </a>
        <div class="topHeaderSearch">
            <input class="mainHeaderSearch" type="text" name="mainSearch" id="mainSearch" placeholder="Start a new search">
            <button class="mainSearchButton" type="submit" aria-label="Search"></button>
        </div>
    <!---->
        <div class="topHeaderButton">
        @if ( !Auth::check() ? 1 : ( Auth::user()->account_role == 'client' ? 0 : 1 ) )
        <!--------------------------------------------------->
            <div class="topHeaderInfo fullInfo jq-enabled">
                <div class="topInfoArrow">
                    <div class="pip1"><div class="pip2"></div></div>
                </div>
                <div class="topInfoArea">
                    <div class="topInfoText">
                        <div class="topInfoLogo">
                            <div class="headButtonSVG account-info"></div>
                        </div>
                        <div class="infoText">Log in to your eMART account and have complete control over the offers!</div>
                    </div>
                    <div class="topInfoButtons">
                        
                        <button class="topButton infoLogin goLogin">
                            <div class="topButtonCover"></div>
                            Log in
                        </button>
                        <a class="topSignupButton" href="/client-login">Sign up</a>
                    </div>
                </div>
            </div>
        <!--------------------------------------------------->
        @else
        <!--------------------------------------------------->
        <div class="topHeaderInfo loggedOptions jq-enabled">
            <div class="topInfoArrow">
                <div class="pip1"><div class="pip2"></div></div>
            </div>
            <div class="topLoggedArea">
                <div class="hello">
                    @if ( empty(Auth::user()->first_name) || empty(Auth::user()->last_name) )
                        <p>Hello, {{ Auth::user()->user_name }}</p>
                    @else
                        <p>Hello, {{ Auth::user()->first_name . ' ' . Auth::user()->last_name}}</p>
                    @endif
                    
                </div>
                <div class="accountOptions">
                    <a href="/premio">Premio plan</a>
                    <a href="/cards">My cards</a>
                    <a href="/orders">My orders</a>
                    <a href="/returns">My returns</a>
                    <a href="/favorites">Favorites products</a>
                    <a href="/reviews">Reviews posted</a>
                    <a href="/addresses">Delivery addresses</a>
                    <a href="/invoices">Orders invoices</a>
                    <a href="/subscriptions">Subscriptions</a>
                    <a href="/account">Account settings</a>
                </div>
              
                <div class="logout">
                    <a href="/client-logout">Logout</a>
                </div>
            </div>
        </div>
        <!--------------------------------------------------->
        @endif
            <a href="/account" class="head-route">
                <span class="acc-route"></span> 
                My account
            </a>
        </div>
        <!---->
        <div class="topHeaderButton">
            <div class="topHeaderInfo simpleInfo jq-enabled">
                <div class="topInfoArrow">
                    <div class="pip1"><div class="pip2"></div></div>
                </div>
                <div class="topInfoArea">
                    <p>Add favorite products to Favorites</p>
                </div>
            </div>
            <a href="/favorites" class="head-route">
                <span class="fav-route">
                    <span class="dot favorites-Dot"></span>
                </span>
                Favorites
            </a>
        </div>
        <div class="topHeaderButton">
        <!----------------------------------->
        <!-- Dynamic JQUERY cart container -->
            <div class="topHeaderInfo cartInfo jq-disabled">
                <div class="topInfoArrow"><div class="pip1"><div class="pip2"></div></div></div>
                <div class="topInfoArea cart">
                    <div class="cart-title"><p>Products added to cart</p></div>
                    <div class="cart-items"></div>
                    <div class="cart-total"></div>
                    <div class="cart-button">
                        <a href="/cart">
                            <div class="topButtonCover"></div>
                            see cart details
                        </a>
                    </div>
                </div>
            </div>
        <!----------------------------------->
        <!----- Empty default cart info ----->
         <div class="topHeaderInfo complexInfo jq-enabled">
            <div class="topInfoArrow">
                <div class="pip1"><div class="pip2"></div></div>
            </div>
            <div class="topInfoArea">
                <p>No products in cart</p>
                <br>
                <button class="topButton cartLogin goLogin">
                    <div class="topButtonCover"></div>
                    View cart
                </button>
            </div>
        </div>
        <!----------------------------------->
            <a href="/cart" class="head-route">
                <span class="cart-route">
                    <span class="dot cart-Dot"></span>
                </span>
                View cart
            </a>
        </div>
    </section>
    <div class="smallGradientLine hidden"></div>
</header>
<nav class="mainNavBarArea">
    <div class="NavBarGradientArea">
        <div class="navBarLeftArea">
            <div class="mainMenuList">
                <div class="mainCategoryTab cat-1 laptops" data-field="1">
                    <p class="phone-p">Laptop, Tablets & Smartphones</p>
                    <div class="mainMenuExpand exp-1"> 
                        
                    </div>
                </div>
                <div class="mainCategoryTab cat-2 periferals" data-field="2">
                    <p class="periferals-p">PC, Periferals & Software</p>
                    <div class="mainMenuExpand exp-2">
                        
                    </div>
                </div>
                <div class="mainCategoryTab cat-3 audioVideo" data-field="3">
                    <p class="video-p">TV, Audio-Video & Photo</p>
                    <div class="mainMenuExpand exp-3">
                        
                    </div>
                </div>
                <div class="mainCategoryTab cat-4 appliances" data-field="4">
                    <p class="electro-p">Appliances & Climate Control</p>
                    <div class="mainMenuExpand exp-4">
                        
                    </div>
                </div>
                <div class="mainCategoryTab cat-5 gaming" data-field="5">
                    <p class="books-p">Games, Books & Office Supplies</p>
                    <div class="mainMenuExpand exp-5">
                        
                    </div>
                </div>
                <div class="mainCategoryTab cat-6 groceries" data-field="6">
                    <p class="grocery-p">Grocery / Pantry</p>
                    <div class="mainMenuExpand exp-6">
                        
                    </div>
                </div>
                <div class="mainCategoryTab cat-7 fashion" data-field="7">
                    <p class="fashion-p">Fashion</p>
                    <div class="mainMenuExpand exp-7">
                        
                    </div>
                </div>
                <div class="mainCategoryTab cat-8 cosmetics" data-field="8">
                    <p class="care-p">Personal Care & Cosmetics</p>
                    <div class="mainMenuExpand exp-8">
                        
                    </div>
                </div>
                <div class="mainCategoryTab cat-9 homeGarden" data-field="9">
                    <p class="home-p">Home, Garden & DIY</p>
                    <div class="mainMenuExpand exp-9">
                        
                    </div>
                </div>
                <div class="mainCategoryTab cat-10 sport" data-field="10">
                    <p class="sport-p">Sports & Travel</p>
                    <div class="mainMenuExpand exp-10">

                    </div>
                </div>
                <div class="mainCategoryTab cat-11 autoMoto" data-field="11">
                    <p class="auto-p">Auto, Moto & Insurance</p>
                    <div class="mainMenuExpand exp-11">

                    </div>
                </div>
                <div class="mainCategoryTab cat-12 toys" data-field="12">
                    <p class="toys-p">Toys, Children & Baby</p>
                    <div class="mainMenuExpand exp-12">  
                    </div>
                </div>
            </div>
                <div class="menuButton"><p>Products</p></div>
                <a class="navBarButton navBtn-2" href="/products/offers/all">eMART offers</a>
                <a class="navBarButton navBtn-3" href="/premio">Premio</a>
                <a class="navBarButton navBtn-4" href="/products/buyback/all">Easy BuyBack</a>
                <a class="navBarButton navBtn-5" href="/products/premio/all">Premio Deals</a>
                <a class="navBarButton navBtn-6" href="/cards">eMART card</a>
                <a class="navBarButton navBtn-7" href="/products/refurbished/all">Refurbished</a>
            </div>
            <div class="navBarRightArea">
            <a class="navBarButton navBtn-8" href="">eMART Help</a>
            <a class="navBarButton navBtn-9" href="/seller-login">Sell on eMART</a>
        </div>
    </div>
</nav>
<main>
    {{ $slot }}
</main>
<footer class="mainFooterArea">
    <div class="footerBannerArea">
        <div class="footerBannerColorArea">
            <div class="footerBannerText">
                <img class="marketplacePromo" src="resources/files/users/home/emart-marketplace-large-white.svg" alt="Marketplace banner">
                <h1>Grow your business</h1>
                <ul>
                    <li>Instant access to <b>hundreds of thousands of unique customers</b>, daily</li>
                    <li>Registering your business is completly <b>free</b></li>
                    <li>You are just a <b>few clicks away</b> from spectacular sales</li>
                </ul>
                <a href="/seller-login" class="joinMarketplace" type="submit">Start selling on eMART</a>
            </div>
            <div class="footerBannerImg"></div>
        </div>
    </div>
    <div class="footerInfoArea">
        <div class="footerInfoContainer">
            <div class="footerInfoSection section-1">
                <p class="footerTitle">Services for customers</p>
                <ul>
                    <li><a href="#">Opening the package at delivery</a></li>
                    <li><a href="#">30 days right of return</a></li>
                    <li><a href="#">Card payment in installments without interest</a></li>
                    <li><a href="#">Installment financing through eCREDIT</a></li>
                    <li><a href="#">Warranties and service</a></li>
                    <li><a href="#">Black Friday eMART</a></li>
                    <li>
                        <img style="width: 30px; position: relative; top: 5px;" src="resources/files/users/home/mastercard.svg" alt="Mastercard logo">
                        <img style="width: 30px; position: relative; top: 4px;" src="resources/files/users/home/maestro.svg" alt="Maestro logo">
                        <img style="width: 30px; position: relative;" src="resources/files/users/home/visa.svg" alt="Visa logo">
                    </li>
                </ul>
            </div>
            <div class="footerInfoSection section-2">
                <p class="footerTitle">Orders and delivery</p>
                <ul>
                    <li><a href="#">My eMART account</a></li>
                    <li><a href="#">Order delivery</a></li>
                    <li><a href="#">eMART Corporate</a></li>
                    <li><a href="#">eMART Marketplace</a></li>
                    <li><a href="#">Payment and financing methods</a></li>
                    <li><a href="#">I want to sell on eMART</a></li>
                </ul>
            </div>
            <div class="footerInfoSection section-3">
                <p class="footerTitle">Clients support</p>
                <ul>
                    <li><a href="#">Product return form</a></li>
                    <li><a href="#">Contact information</a></li>
                    <li><a href="#">Product recall notices</a></li>
                    <li><a href="#">General conditions for the provision of postal services</a></li>
                    <li><a href="#">A.N.P.C. - SAL (Alternative Dispute Resolution)</a></li>
                    <li><a href="#">CONSUMER PROTECTION - A.N.P.C.</a></li>
                </ul>
            </div>
            <div class="footerInfoSection section-4">
                <p class="footerTitle">eMART.click</p>
                <ul>
                    <li><a href="#">About eMART</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">Processing of personal data</a></li>
                    <li><a href="#">Cookie usage policy</a></li>
                    <li><a href="#">I want to start selling on eMART</a></li>
                    <li><a href="#">Programs of the "We care" Foundation</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footerCopyright">
        <div class="footerCopyMainArea">
             <div class="copyrightArea">
                <p>Copyright © 2001-2026 eMART International LLC</p>
                <p>EUID. A12345678901234, Vat. No.: 12345678</p>
                <p>Mobile version</p>
            </div>
            <div class="socialArea">
                <div class="socialLogo">
                    <img src="resources/files/users/home/Instagram.svg" alt="Instagram logo">
                </div>
                <div class="socialLogo">
                    <img src="resources/files/users/home/Facebook.svg" alt="Facebook logo">
                </div>
                <div class="socialLogo">
                    <img src="resources/files/users/home/Twitter.avif" alt="Twitter logo">
                </div>
                <div class="socialLogo">
                    <img src="resources/files/users/home/YouTube.svg" alt="Youtube logo">
                </div>
            </div>
            <div class="promoArea">
                <div class="promoLogos">
                    <div class="promoImg">
                        <img src="resources/files/users/home/winner.avif" alt="ecommerce winner badge">
                    </div>
                    <div class="promoImg">
                        <img src="resources/files/users/home/partner.avif" alt="partener badge">
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!---->
<div class="cookie">
    <div class="cookie-area">
        <div class="cookie-area__text">
            <p>Hello!</p>
            <p>At eMART, we want to offer you the best possible experience. We use cookies and similar technologies for:</p>
            <ul>
                <li>functioning of the website</li>
                <li>performance analysis</li>
                <li>ad personalization</li>
            </ul>
            <p>By clicking "Accept all," you agree to the use of your data (such as site activity and device information) by us and our partners for the purposes mentioned above. If you choose "Reject all," we will use only the cookies strictly necessary for the site to function and will not display personalized ads. You can change your preferences at any time by clicking "Manage preferences." Learn more about cookies in the <a href="">Cookie Policy.</a></p>
        </div>
        <div class="cookie-area__buttons">
            <button class="cookieButton allCookies">Accept all</button>
            <a href="https://www.google.com" class="cookieButton someCookies">Refuse all</a>
            <a class="preferences">Manage preferences</a>
        </div>
    </div>
</div>
<!---->
<div class="account">
    <div class="account-area">
        <button class="closeButton"></button>
        <div class="account-area__text">
            <p>Log in to your eMART account</p>
            <p>Access your favorite products and the best offers personalized for you.</p>
        </div>
        <div class="account-area__button">
            <a class="loginButton" href="/login">Log in</a>
        </div>
    </div>
</div>
<!---->
<div class="upButton"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="resources/components/js/header-footer-client.js"></script>
{{ $scripts ?? '' }}
@stack('component-scripts')
</body>
</html>