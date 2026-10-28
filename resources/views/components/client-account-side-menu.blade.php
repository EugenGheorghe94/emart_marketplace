{{-- components/client-account-side-menu.blade.php --}}

@once
    @push('component-styles')
        @vite('/public/resources/components/css/client-account-side-menu.scss')
    @endpush


    <div class="accountSideContainer">
        <div class="sideCard s-card-1 summary">
            <div class="summary-top">
                <div class="summary-top__edit changeData"></div>
                <div class="summary-top__icon">
                    @if ( empty(Auth::user()->first_name) || empty(Auth::user()->last_name) )
                        <span><p>{{ Auth::user()->user_name[0] }}{{ Auth::user()->user_name[1] }}</p></span>
                    @else
                        <span><p>{{ Auth::user()->first_name[0] }}{{ Auth::user()->last_name[0] }}</p></span>
                    @endif
                </div>
                <div class="summary-top__username">
                    @if ( empty(Auth::user()->first_name) || empty(Auth::user()->last_name) )
                        <p>{{ Auth::user()->user_name }}</p>
                        <p></p>
                    @else
                        <p>{{ Auth::user()->first_name }}</p>
                        <p>{{ Auth::user()->last_name }}</p>
                    @endif

                    @if ( round(Auth::user()->created_at->diffInDays(now())) > 1 )
                        <p>eMART user for {{ round(Auth::user()->created_at->diffInDays(now())) }} days.</p>
                    @else
                        <p>New eMART user. Thank you!</p>
                    @endif
                </div>
            </div>
            <div class="summary-icons">
                <a href="/orders" class="icon">
                    <p class="orders-icon"></p>
                    <p>Orders</p>
                </a>
                <a href="/subscriptions" class="icon">
                    <p class="vouchers-icon"></p>
                    <p>Vouchers</p>
                </a>
                <a href="/cards" class="icon">
                    <p class="wallet-icon"></p>
                    <p>My Wallet</p>
                </a>
                <a href="/account" class="icon">
                    <p class="support-icon"></p>
                    <p>Support</p>
                </a>
            </div>
            <div class="summary-action">
                <p>Confirm your phone number</p>
            </div>
        </div>
        <div class="sideCard s-card-3 menu">
            <div class="menu-button premio violet">
                <span></span>
                <a href="/premio">Premio plan</a>
            </div>
            <div class="menu-button cards blue">
                <span></span>
                <a href="/cards">My cards</a>
            </div>
            <div class="menu-button orders green">
                <span></span>
                <a href="/orders">My orders</a>
            </div>
            <div class="menu-button returns orange">
                <span></span>
                <a href="/returns">My returns</a>
            </div>
            <div class="menu-button favorites red">
                <span></span>
                <a href="/favorites">Favorites products</a>
            </div>
            <div class="menu-button reviews yellow">
                <span></span>
                <a href="/reviews">Reviews posted</a>
            </div>
            <div class="menu-button delivery lightgreen">
                <span></span>
                <a href="/addresses">Delivery addresses</a>
            </div>
            <div class="menu-button invoice blue">
                <span></span>
                <a href="/invoices">Orders invoices</a>
            </div>
            <div class="menu-button subscriptions red">
                <span></span>
                <a href="/subscriptions">Subscriptions</a>
            </div>
            <div class="menu-button settings orange">
                <span></span>
                <a href="/account">Account settings</a>
            </div>
            <div class="menu-button-last logout black">
                <span></span>
                <a href="/client-logout">Logout</a>
            </div>
        </div>
    </div>

    {{ $slot }}

    @push('component-scripts')
        <script src="{{ asset('resources/components/js/client-account-side-menu.js') }}"></script>
    @endpush

@endonce