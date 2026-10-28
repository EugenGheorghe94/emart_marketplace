{{-- client/premio-page.blade.php --}}

<x-layouts.client-layout>
    <x-slot:styles>
        @vite('public/resources/css/client/premio-page.scss')
        <title>Premio</title>
    </x-slot:styles>

    <div class="accountMainArea">
        <x-client-account-side-menu />
        <div class="premio-page-right">
            
            <div class="premio-card">
                <div class="premio-card__top">
                    <p>Your Premio subscription has expired!</p>
                    <p>Renew your Premio annual subscription and your benefits continue. Start saving again on shipping fees and exclusive Premio Deals discounts.</p>
                    <button>Renew Premio subscription</button>
                    <p>How much did you save when you were a Premio subscriber?</p>
                </div>
                <div class="premio-card__bottom">
                    <div class="premio-card__bottom-banner total-violet">
                        <div class="banner-dot">=</div>
                        <div class="total-logo"></div>
                        <div class="total-text violet">
                            <p>$ 891<sup>01</sup><small>USD</small></p>
                            <p>Total savings with your Premio subscription</p>
                        </div>
                    </div>
                    <div class="premio-card__bottom-banner ship-blue">
                        <div class="banner-dot">+</div>
                        <div class="ship-logo"></div>
                        <div class="ship-text blue">
                            <p>$ 135<sup>97</sup><small>USD</small></p>
                            <p>Savings from free shipping</p>
                        </div>
                    </div>
                    <div class="premio-card__bottom-banner offers-red">
                        <span></span>
                        <div class="offer-logo"></div>
                        <div class="offer-text green">
                            <p>$ 755<sup>04</sup><small>USD</small></p>
                            <p>Savings from exclusive offers</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="premio-ad"></div>

            <div class="premio-card">
                <div class="premio-card__title">
                    <p>Subscription details</p>
                </div>
                <div class="premio-card__table">
                    <div>
                        <p>Orders remaining from the trial period:</p>
                        <p>8 orders</p>
                    </div>
                    <div>
                        <p>Your Premio subscription was valid until:</p>
                        <p>September 19, 2025</p>
                    </div>
                    <div>
                        <p>Billing data:</p>
                        <p>{{ Auth::user()->first_name . ' ' . Auth::user()->last_name }}</p>
                    </div>
                    <div class="premio-card__button">
                        <button>Renew Premio</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/premio-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>