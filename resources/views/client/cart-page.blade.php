{{-- client/cart-page.blade.php --}}

<x-layouts.client-layout>
    <x-slot:styles>
        @vite('public/resources/css/client/cart-page.scss')
        <title>Cart</title>
    </x-slot:styles>

    <div class="content-area">
        <div class="content-area__left empty">
            <div class="content-area__left-cart">
                <div class="cart-head">
                    <p>Cart details</p>
                </div>
            </div>
        </div>

        <script>
            const USER_ID = "{{ Auth::check() ? Auth::user()->id : '' }}";
        </script>

        <div class="content-area__right">
            <div class="content-area__right-total">
                <div class="total-area">
                    <div class="total-area__title">
                        <p>Order summary</p>
                    </div>
                    <div class="total-area__info">
                        <div class="jq-product-value">
                            <p>Products:</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Shipping:</p>
                            <a href="/checkout" class="at-checkout">at checkout</a>
                        </div>
                        <div class="total-area__info-banner">
                            <span></span>
                            <p>Activate yout Premio subscription and get <b>FREE</b> shipping for eligible products from your order.</p>
                            <a href="/premio">Activate Premio</a>
                        </div>
                    </div>
                    <div class="total-area__total">
                        <div><p>Total:</p><p></p></div>
                    </div>
                    <div class="total-area__button">
                        <a>
                            <div class="topButtonCover toCheckout"></div>
                            Continue
                        </a>
                    </div>
                </div>
                <div class="voucher-area">
                    <p>check / add vouchers</p>
                </div>
            </div>
        </div>
    </div>
    <!------------>
        <div class="similarProductsContainer">
        <!---->
            <div class="similar-products">
                <p class="similar-products__title">Recomended for you</p>
                <div class="similar-products__buttons"></div>
                <div class="similar-products__carousel">
                    <div class="similar-products__carousel-ribbon recommended-1">
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>

                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>

                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                    </div>
                </div>
            </div>
        <!---->
            <div class="similar-products">
                <p class="similar-products__title">Other clients have seen</p>
                <div class="similar-products__buttons"></div>
                <div class="similar-products__carousel">
                    <div class="similar-products__carousel-ribbon others-1">
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>

                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>

                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                    </div>
                </div>
            </div>
        <!---->
        </div>
<!------------>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/cart-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>