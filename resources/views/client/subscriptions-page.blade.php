{{-- client/subscriptions-page.blade.php --}}


<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/subscriptions-page.scss')
        <title>Subscriptions</title>
    </x-slot:styles>

    <div class="accountMainArea">
        <x-client-account-side-menu />

        <div class="subscriptions-area">
            <div class="subscriptions-area__title">
                <p>Subscriptions</p>
            </div>

            <div class="subscriptions-area__cards">

                <div class="sub-card">
                    <div class="sub-card__logo newsletter"></div>
                    <div class="sub-card__title">
                        <p>Newsletter eMART</p>
                        <label for="newsletter">
                            <input type="checkbox" name="" id="newsletter">
                            I want to receive the newsletter
                        </label>
                    </div>
                </div>

                <div class="sub-card">
                    <div class="sub-card__logo feedback"></div>
                    <div class="sub-card__title">
                        <p>Feedback notifications</p>
                        <label for="feedback">
                            <input type="checkbox" name="" id="feedback">
                            I want to receive notifications for feedback
                        </label>
                    </div>
                </div>

                <div class="sub-card">
                    <div class="sub-card__logo promos"></div>
                    <div class="sub-card__title">
                        <p>Dedicated promotions</p>
                        <label for="promos">
                            <input type="checkbox" name="" id="promos">
                            I want to receive promotions
                        </label>
                    </div>
                </div>

                <div class="sub-card">
                    <div class="sub-card__logo shoppingCart"></div>
                    <div class="sub-card__title">
                        <p>Shopping cart alerts</p>
                        <label for="cart">
                            <input type="checkbox" name="" id="cart">
                            I want to receive alerts about my shopping cart
                        </label>
                    </div>
                </div>

                <div class="sub-card">
                    <div class="sub-card__logo favorites"></div>
                    <div class="sub-card__title">
                        <p>Favorite product alerts</p>
                        <label for="favorites">
                            <input type="checkbox" name="" id="favorites">
                            I want to receive alerts about my favorite products
                        </label>
                    </div>
                </div>

                <div class="sub-card">
                    <div class="sub-card__logo recommended"></div>
                    <div class="sub-card__title">
                        <p>Personalized recommendations</p>
                        <label for="recommended">
                            <input type="checkbox" name="" id="recommended">
                            I want to receive personalized recommendations
                        </label>
                    </div>
                </div>

                <div class="sub-card">
                    <div class="sub-card__logo offers"></div>
                    <div class="sub-card__title">
                        <p>Your offers of interest</p>
                        <label for="offers">
                            <input type="checkbox" name="" id="offers">
                            I want to receive offers of interest.
                        </label>
                    </div>
                </div>

                <div class="sub-card">
                    <div class="sub-card__logo research"></div>
                    <div class="sub-card__title">
                        <p>Market research</p>
                        <label for="research">
                            <input type="checkbox" name="" id="research">
                            I want to receive market research
                        </label>
                    </div>
                </div>
            </div>
            <div class="subscriptions-area__button">
                <button>save changes</button>
            </div>
        </div>
    </div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/subscriptions-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>