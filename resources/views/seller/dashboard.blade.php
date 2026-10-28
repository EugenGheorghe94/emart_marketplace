{{-- seller/dashboard.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/dashboard.scss')
        <title>Dashboard</title>
    </x-slot:styles>

    <div class="topSpacer"></div>

    <div class="promo-area"></div>

    <div class="stats">
        <div class="stats__right">
            <!---->
            <div class="stats__right-banner">

            </div>
            <!---->
            <div class="stats__right-box">
                <div class="stats__right-box-title">
                    <p>Try FBE for free for 3 months and see how your business grows</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__right-box-section info-area box-1"></div>
            </div>
            <!---->
            <div class="stats__right-box">
                <div class="stats__right-box-title">
                    <p>Performance Ads</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__right-box-section info-area box-2"></div>
            </div>
            <!---->
            <div class="stats__right-box">
                <div class="stats__right-box-title">
                    <p>Newsletter</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__right-box-section info-area box-3"></div>
            </div>
            <!---->
            <div class="stats__right-box">
                <div class="stats__right-box-title">
                    <p>Sales statistics ( USD, tax included )</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__right-box-section info-area box-4"></div>
            </div>
            <!---->
            <div class="stats__right-double">
                <div class="stats__right-box">
                    <div class="stats__right-box-title">
                        <p>Value of received orders ( last 8 days )</p>
                        <p class="button min"></p>
                    </div>
                    <div class="stats__right-box-section info-area graph-1"></div>
                </div>
                <div class="stats__right-box">
                    <div class="stats__right-box-title">
                        <p>Orders completed with delay ( last 8 days )</p>
                        <p class="button min"></p>
                    </div>
                    <div class="stats__right-box-section info-area graph-2"></div>
                </div>
            </div>
            <!---->
            <div class="stats__right-box">
                <div class="stats__right-box-title">
                    <p>Pending orders that are delayed</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__right-box-section info-area box-5"></div>
            </div>
            <!---->
        </div>


        <div class="stats__left">
            <!---->
            <div class="stats__left-box">
                <div class="stats__left-box-title">
                    <p>Seller rating</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__left-box-section info-area seller-rating"></div>
            </div>
            <!---->
            <div class="stats__left-box">
                <div class="stats__left-box-title">
                    <p>Account health</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__left-box-section info-area accHealth"></div>
            </div>
            <!---->
            <div class="stats__left-box">
                <div class="stats__left-box-title">
                    <p>Customer experience KPI</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__left-box-section info-area kpi"></div>
            </div>
            <!---->
            <div class="stats__left-box">
                <div class="stats__left-box-title">
                    <p>Products health</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__left-box-section info-area proHealth"></div>
            </div>
            <!---->
            <div class="stats__left-box">
                <div class="stats__left-box-title">
                    <p>Conversion rate</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__left-box-section info-area conversion"></div>
            </div>
            <!---->
            <div class="stats__left-box">
                <div class="stats__left-box-title">
                    <p>API documentation</p>
                    <p class="button min"></p>
                </div>
                <div class="stats__left-box-section info-area api"></div>
            </div>
            <!---->
        </div>
    </div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/dashboard.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>