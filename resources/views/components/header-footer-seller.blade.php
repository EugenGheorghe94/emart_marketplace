{{-- components/header-footer-seller.blade.php --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('/resources/files/seller/emart-favicon.svg') }}" type="image/x-icon">
    <script src="https://kit.fontawesome.com/9fa22df8b7.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/css/flag-icons.min.css" />
    @vite('public/resources/css/common/variables.scss')
    @vite('public/resources/components/css/header-footer-seller.scss')
    {{ $styles ?? '' }}
    @stack('component-styles')
</head>
<body>


<!---->
<header>
    <div class="topBarArea">
        <!---->
        <div class="topLeft-area">
            <img class="bigLogo" src="/resources/files/seller/emart-marketplace-small-white.svg" alt="">
        </div>
        <!---->
        <div class="topLarge-area">
            @auth
                <span class="topCompanyInfo">{{ Auth::user()->company_name }}</span>
            @endauth

            <script>
                $(function () {
                    $('.topCompanyInfo').data('email', @json(Auth::user()->email_address));
                });
            </script>
        </div>
        <!---->
        <div class="topMiddle-area">
            <div class="topMiddle-area__menu">
                <div class="topMiddle-area__menu-title">
                    <p>Select platform</p>
                </div>
                <div class="topMiddle-area__menu-option">
                    <p>eMART.us</p>
                </div>
                <div class="topMiddle-area__menu-option">
                    <p>eMART.ca</p>
                </div>
                <div class="topMiddle-area__menu-option">
                    <p>eMART.eu</p>
                </div>
                <div class="topMiddle-area__account-option">
                    <p>My account</p>
                </div>
                <div class="topMiddle-area__logout-option">
                    <p>Logout</p>
                </div>
            </div>
            <p class="topMiddle-area__selected">eMART.us</p>
        </div>
        <!---->
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
    <div class="sideBarArea">
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 MB-V-1 minimized">
                <a class="menuRoute-main Visible dashboard" href="/seller/dashboard">Dashboard</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-2 minimized">
                <p class="menuExpandBtn myAccount">My Account</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible profile-div dot-border MB-nV-2">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute profile" href="/seller/account/profile">Profile</a>
            </div>
            <div class="menuButton-2 NOT-Visible documents-div dot-border MB-nV-2">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute documents" href="/seller/account/documents">Legal documents</a>
            </div>
            <div class="menuButton-2 NOT-Visible newsletters-div dot-border MB-nV-2">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute newsletters" href="/seller/account/newsletters">Newsletters</a>
            </div>
            <div class="menuButton-2 NOT-Visible rating-div MB-nV-2">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute rating" href="/seller/account/rating">Seller rating</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-3 minimized">
                <p class="menuExpandBtn products">Products</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible my-products-div dot-border MB-nV-3">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute my-products" href="/seller/products/my-products">My products</a>
            </div>
            <div class="menuButton-2 NOT-Visible add-products-div MB-nV-3">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute add-products" href="/seller/products/add-products">Add products</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 MB-V-4 minimized">
                <a class="menuRoute-main Visible importXLS" href="/seller/importXLS">Import XLS</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-5 minimized">
                <p class="menuExpandBtn myOffers">My Offers</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible general-div dot-border MB-nV-5">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute general" href="/seller/offers/general">General</a>
            </div>
            <div class="menuButton-2 NOT-Visible prices-div dot-border MB-nV-5">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute prices" href="/seller/offers/prices">Prices</a>
            </div>
            <div class="menuButton-2 NOT-Visible stocks-div dot-border MB-nV-5">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute stocks" href="/seller/offers/stocks">Stocks</a>
            </div>
            <div class="menuButton-2 NOT-Visible reviews-div MB-nV-5">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute reviews" href="/seller/offers/reviews">Reviews</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-6 minimized">
                <p class="menuExpandBtn opportunities">Opportunities</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible existing-products-div MB-nV-6">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute existing-products" href="/seller/opportunities/existing-products">Existing products</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-7 minimized">
                <p class="menuExpandBtn orders newOrdersDot">Orders</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible orders-2-div MB-nV-7">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute ordersRoute orders-2" href="/seller/orders/orders">Orders</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-8 minimized">
                <p class="menuExpandBtn logistics">Logistics</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible deliveries-div dot-border MB-nV-8">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute deliveries" href="/seller/logistics/my-deliveries">My deliveries</a>
            </div>
            <div class="menuButton-2 NOT-Visible courier-accounts-div dot-border MB-nV-8">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute courier-accounts" href="/seller/logistics/courier-accounts">Courier accounts</a>
            </div>
            <div class="menuButton-2 NOT-Visible shipping-tax-div MB-nV-8">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute shipping-tax" href="/seller/logistics/shipping-tax">Shipping tax</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-9 minimized">
                <p class="menuExpandBtn fulfilment">Fulfilment by eMART</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible f-dashboard-div dot-border MB-nV-9">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute f-dashboard" href="/seller/fulfilment/dashboard">Dashboard</a>
            </div>
            <div class="menuButton-2 NOT-Visible calculator-div dot-border MB-nV-9">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute calculator" href="/seller/fulfilment/calculator">Cost calculator</a>
            </div>
            <div class="menuButton-2 NOT-Visible reception-div MB-nV-9">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute reception" href="/seller/fulfilment/reception">Reception</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-10 minimized">
                <p class="menuExpandBtn ads">eMART Ads</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible interest-div dot-border MB-nV-10">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute interest" href="/seller/ads/interest">Customer interest</a>
            </div>
            <div class="menuButton-2 NOT-Visible ads-campaigns-div dot-border MB-nV-10">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute ads-campaigns" href="/seller/ads/campaigns">Campaigns</a>
            </div>
            <div class="menuButton-2 NOT-Visible credits-div MB-nV-10">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute credits" href="/seller/ads/credits">Credits</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-11 minimized">
                <p class="menuExpandBtn campaigns">Campaigns<p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible bundles-div dot-border MB-nV-11">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute bundles" href="/seller/campaigns/bundles">Bundles</a>
            </div>
            <div class="menuButton-2 NOT-Visible campaigns-2-div MB-nV-11">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute campaigns-2" href="/seller/campaigns/campaigns">Campaigns</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-12 minimized">
                <p class="menuExpandBtn messages">Message Center</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible messages-2-div dot-border MB-nV-12">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute messages-2" href="/seller/messages/messages">Messages</a>
            </div>
            <div class="menuButton-2 NOT-Visible contact-div MB-nV-12">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute contact" href="/seller/messages/contact">Contact eMART</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 MB-V-13 minimized">
                <a class="menuRoute-main Visible notifications" href="/seller/notifications">Notifications</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-15 minimized">
                <p class="menuExpandBtn returns newReturnsDot">Returns</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible returns-2-div dot-border MB-nV-15">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute returns-2" href="/seller/returns/returns">Returns</a>
            </div>
            <div class="menuButton-2 NOT-Visible product-health-div MB-nV-15">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute product-health" href="/seller/returns/product-health">Product health</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-16 minimized">
                <p class="menuExpandBtn financial">Financial</p>
                <i class="fa-solid fa-angle-down downArrow"></i>
            </div>
            <div class="menuButton-2 NOT-Visible invoices-div dot-border MB-nV-16">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute invoices" href="/seller/financial/invoices">Invoices</a>
            </div>
            <div class="menuButton-2 NOT-Visible documents-3-div dot-border MB-nV-16">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute documents-3" href="/seller/financial/documents">All documents</a>
            </div>
            <div class="menuButton-2 NOT-Visible statement-div dot-border MB-nV-16">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute statement" href="/seller/financial/statement">Account statement</a>
            </div>
            <div class="menuButton-2 NOT-Visible payouts-div MB-nV-16">
                <div class="connection">
                    <div class="verticalLine"></div>
                    <div class="horizontalLine"></div>
                </div>
                <a class="menuRoute payouts" href="/seller/financial/payouts">Payouts</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 MB-V-17 minimized">
                <a class="menuRoute-main Visible academy" href="/seller/academy">eMART Academy</a>
            </div>
        </div>
    <!---->
        <div class="menuButtonArea">
            <div class="menuButton-1 Visible MB-V-18 minimize">
                <p class="menuRoute-main minimize">
                    <i class="fa-solid fa-angles-left"></i>
                </p>
            </div>
        </div>
    </div>
    <!---->
    <div class="menuSideIcons">
        <div class="iconMenuButton">
            <i class="fa-solid fa-gauge-high"></i>
            <div class="expandIconMenu dashboard-icon-menu">
                <p class="expandIconTitle">Dashboard</p>
                <a class="expandIconButton dashboard-div" href="/seller/dashboard">Dashboard</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-user"></i>
            <div class="expandIconMenu account-icon-menu">
                <p class="expandIconTitle">My Account</p>
                <a class="expandIconButton profile profile-div" href="/seller/account/profile">Profile</a>
                <a class="expandIconButton documents documents-div" href="/seller/account/documents">Legal documents</a>
                <a class="expandIconButton newsletters newsletters-div" href="/seller/account/newsletters">Newsletters</a>
                <a class="expandIconButton rating rating-div" href="/seller/account/rating">Seller rating</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-sliders"></i>
            <div class="expandIconMenu products-icon-menu">
                <p class="expandIconTitle">Products</p>
                <a class="expandIconButton my-products my-products-div" href="/seller/products/my-products">My products</a>
                <a class="expandIconButton add-products add-products-div" href="/seller/products/add-products">Add products</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-upload"></i>
            <div class="expandIconMenu importXLS-icon-menu">
                <p class="expandIconTitle">Import XLS</p>
                <a class="expandIconButton importXLS-div" href="/seller/importXLS">Import XLS</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-chart-area"></i>
            <div class="expandIconMenu offers-icon-menu">
                <p class="expandIconTitle">My Offers</p>
                <a class="expandIconButton general general-div" href="/seller/offers/general">General</a>
                <a class="expandIconButton prices prices-div" href="/seller/offers/prices">Prices</a>
                <a class="expandIconButton stocks stocks-div" href="/seller/offers/stocks">Stocks</a>
                <a class="expandIconButton reviews reviews-div" href="/seller/offers/reviews">Reviews</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-star"></i>
            <div class="expandIconMenu opportunities-icon-menu">
                <p class="expandIconTitle">Opportunities</p>
                <a class="expandIconButton existing-products existing-products-div" href="/seller/opportunities/existing-products">Existing products</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="expandIconMenu orders-icon-menu">
                <p class="expandIconTitle">Orders</p>
                <a class="expandIconButton orders-2 orders-2-div" href="/seller/orders/orders">Orders</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-truck"></i>
            <div class="expandIconMenu logistics-icon-menu">
                <p class="expandIconTitle">Logistics</p>
                <a class="expandIconButton deliveries deliveries-div" href="/seller/logistics/my-deliveries">My deliveries</a>
                <a class="expandIconButton courier-accounts courier-accounts-div" href="/seller/logistics/courier-accounts">Courier accounts</a>
                <a class="expandIconButton shipping-tax shipping-tax-div" href="/seller/logistics/shipping-tax">Shipping tax</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-boxes-stacked"></i>
            <div class="expandIconMenu fulfilment-icon-menu">
                <p class="expandIconTitle">Fulfilement by eMART</p>
                <a class="expandIconButton f-dashboard f-dashboard-div" href="/seller/fulfilment/dashboard">Dashboard</a>
                <a class="expandIconButton calculator calculator-div" href="/seller/fulfilment/calculator">Cost calculator</a>
                <a class="expandIconButton reception reception-div" href="/seller/fulfilment/reception">Reception</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-chart-pie"></i>
            <div class="expandIconMenu ads-icon-menu">
                <p class="expandIconTitle">eMART ads</p>
                <a class="expandIconButton interest interest-div" href="/seller/ads/interest">Customer interest</a>
                <a class="expandIconButton ads-campaigns ads-campaigns-div" href="/seller/ads/campaigns">Campaigns</a>
                <a class="expandIconButton credits credits-div" href="/seller/ads/credits">Credits</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-calendar-check"></i>
            <div class="expandIconMenu campaigns-icon-menu">
                <p class="expandIconTitle">Campaigns</p>
                <a class="expandIconButton bundles bundles-div" href="/seller/campaigns/bundles">Bundles</a>
                <a class="expandIconButton campaigns-2 campaigns-2-div" href="/seller/campaigns/campaigns">Campaigns</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-envelope"></i>
            <div class="expandIconMenu messages-icon-menu">
                <p class="expandIconTitle">Message Center</p>
                <a class="expandIconButton messages messages-div" href="/seller/messages/messages">Messages</a>
                <a class="expandIconButton contact contact-div" href="/seller/messages/contact">Contact eMART</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <div class="expandIconMenu notifications-icon-menu">
                <p class="expandIconTitle">Notifications</p>
                <a class="expandIconButton notifications-div" href="/seller/notifications">Notifications</a>
            </div>
            <i class="fa-solid fa-bell"></i>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-sack-xmark"></i>
            <div class="expandIconMenu returns-icon-menu">
                <p class="expandIconTitle">Returns</p>
                <a class="expandIconButton returns-2 returns-2-div" href="/seller/returns/returns">Returns</a>
                <a class="expandIconButton product-health product-health-div" href="/seller/returns/product-health">Product health</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-newspaper"></i>
            <div class="expandIconMenu financial-icon-menu">
                <p class="expandIconTitle">Financial</p>
                <a class="expandIconButton invoices invoices-div" href="/seller/financial/invoices">Invoices</a>
                <a class="expandIconButton documents-3 documents-3-div" href="/seller/financial/documents">All documents</a>
                <a class="expandIconButton statement statement-div" href="/seller/financial/statement">Account statement</a>
                <a class="expandIconButton payouts payouts-div" href="/seller/financial/payouts">Payouts</a>
            </div>
        </div>
        <div class="iconMenuButton">
            <i class="fa-solid fa-graduation-cap"></i>
            <div class="expandIconMenu academy-icon-menu">
                <p class="expandIconTitle">eMART Academy</p>
                <a class="expandIconButton academy-div" href="/seller/academy">eMART Academy</a>
            </div>
        </div>
        <div class="iconMenuButton maximize">
            <i class="fa-solid fa-angles-right"></i>
        </div>
    </div>
</header>
<!---->
<div class="mainPageSection">
    {{ $slot }}
</div>
<!---->
<footer>
    <div class="footerMainArea">
        <p>Copyright © 2026 eMART</p><p style="width: 20px; text-align: center;"> | </p><a class="footerLink" href="">Privacy Policy</a>
    </div>
</footer>
<!---->
<div class="cookie">
    <div class="cookie-text">
        <p>The privacy of your data is very important to us</p>
        <p>We use cookies to improve your browsing experience, to show you personalized content and ads, and to analyze our traffic. By clicking "Accept all", you agree to the use of cookies.</p>
    </div>
    <div class="cookie-buttons">
        <button class="close-cookie">Customize</button>
        <button class="close-cookie">Reject all</button>
        <button class="close-cookie">Accept all</button>
    </div>
</div>
<!---->
<div class="upButton"></div>
<script src="{{ asset('resources/components/js/header-footer-seller.js') }}"></script>
{{ $scripts ?? '' }}
@stack('component-scripts')
</body>
</html>