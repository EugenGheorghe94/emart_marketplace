{{-- client/checkout-page.blade.php --}}

<x-layouts.client-layout>
    <x-slot:styles>
        @vite('public/resources/css/client/checkout-page.scss')
        <title>Checkout</title>
    </x-slot:styles>

    
    <div class="checkout-area">
        <div class="checkout-area__container">
            <div class="checkout-area__container-title">
                <p>Order details</p>
                <span>SECURE<br>CONNECTION</span>
            </div>
        <!-------------------------------------------------------------->
            <div class="container delivery_types">
                <div class="container-title one">
                    <p>Delivery methods</p>
                </div>
            <!---->
                <div class="pickup">
                    <div class="pickup-address">
                        <p>Pickup point location:</p>

                        @php
                            $pickupAddress = $addresses->where('address_type', 'pickup')->first();
                            $deliveryAddress = $addresses->where('address_type', 'delivery')->first();
                        @endphp

                        <div>
                            <span class="pickup-logo">
                                <span>95% less CO<sub>2</sub></span>
                            </span>
                            <div>
                                <p>{{ $pickupAddress->city }} Shopping Mall - eMART PickPoint</p>
                                <p>{{ $pickupAddress->address . ', ' . $pickupAddress->city . ', ' . $pickupAddress->state }}</p>
                                <p class="red">Favorite pickup point</p>
                            </div>
                        </div>
                        <a href="/addresses">change pickup location</a>
                    </div>
                    <div class="pickup-products">
                    </div>
                </div>
            <!---->
                <div class="courier">
                    <div class="courier-address">
                        <p>Delivery address:</p>
                        <div>
                            <span class="courier-logo"></span>
                            <div>
                                <p>{{ $deliveryAddress->first_name . ' ' . $deliveryAddress->last_name}} </p>
                                <p>{{ $deliveryAddress->address . ', ' . $deliveryAddress->city . ', ' . $deliveryAddress->state }}<br>{{ $deliveryAddress->phone_number }}</p>
                                <p class="blue">Favorite delivery address</p>
                            </div>
                        </div>
                        <a href="/addresses">change delivery location</a>
                    </div>
                    <div class="courier-products"></div>
                </div>
            <!---->
            </div>
        <!-------------------------------------------------------------->
            <div class="container">
                <div class="container-title two">
                    <p>Billing information</p>
                </div>
                <div class="container-invoice">
                    <div class="container-invoice__title">
                        We have used the billing details from your last order
                    </div>
                    <div class="container-invoice__area">
                        <div class="container-invoice__area-info">
                            <p>Individual</p>
                            <p>{{ $deliveryAddress->first_name . ' ' . $deliveryAddress->last_name . ' - ' . $deliveryAddress->phone_number}} </p>
                            <p>{{ $deliveryAddress->address . ', ' . $deliveryAddress->city . ', ' . $deliveryAddress->state }}<p>
                        </div>
                        <div class="container-invoice__area-button">
                            <a href="/addresses">change</a>
                        </div>
                    </div>
                </div>
            </div>
        <!-------------------------------------------------------------->
            <div class="container">
                <div class="container-title three">
                    <p>Payment methods</p>
                    <span>SECURE<br>CONNECTION</span>
                </div>
                <div class="container-payment">
                <!---->
                    <div class="container-payment__option onDelivery">
                        <button class="unchecked">
                            <p>Card at delivery / pickup</p>
                            <p>Pay by card when your order arrives.</p>
                        </button>
                        <span></span>
                    </div>
                <!---->
                     <div class="container-payment__option bankTransfer">
                        <button class="unchecked">
                            <p>Bank transfer</p>
                            <p>Pay via direct transfer from your bank account.</p>
                        </button>
                        <span></span>
                    </div>
                <!---->
                    <div class="container-payment__option cardOnline">
                        <button class="checked">
                            <p>Online card</p>
                            <p>Pay securely online with your bank card.</p>
                        </button>
                        <span></span>
                    </div>
                <!---->
                    <div class="container-payment__option payPal">
                        <button class="unchecked">
                            <p>PayPal</p>
                            <p>Pay quickly and securely using your PayPal account.</p>
                        </button>
                        <span></span>
                    </div>
                <!---->
                </div>
            </div>
        <!-------------------------------------------------------------->
            <div class="container">
                <div class="container-summary">
                    <div class="container-summary__left">
                        <div class="container-summary__left-top">
                            <p>Order summary</p>
                            <div>
                                <p>Products price:</p>
                                <p class="products-price">0<sup>00</sup><small>USD</small></p>
                            </div>
                            <div>
                                <p>Operational services:</p>
                                <p class="operational-services">0<sup>00</sup><small>USD</small></p>
                            </div>
                            <div>
                                <p>Shipping fees:</p>
                                <p class="shipping-cost">0<sup>00</sup><small>USD</small></p>
                            </div>
                        </div>
                         <div class="container-summary__left-info">
                            <p>By placing your order, you agree to the <a href="">Terms and Conditions</a> and the <a href="">Privacy Policy</a>.</p>
                        </div>
                    </div>
                    <div class="container-summary__right">
                        <div>
                            <p>Total:</p>
                            <p class="grand-total">$ 0<sup>00</sup><small>USD</small></p>
                        </div>
                        <button class="jq-make-orders">
                            <div class="topButtonCover"></div>
                            submit order
                        </button>
                    </div>
                </div>
            </div>
        <!-------------------------------------------------------------->
        </div>
    </div>
    <div class="thankYou-overlay">
        <div class="thankYou-overlay__modal">
            <span>x</span>
            <p>Thank you for your order!</p>
            <p>We're getting everything ready, you will receive a confirmation email shortly. You can track your order status from your account dashboard.</p>
            <p>you'll be redirected to your orders page...</p>
        </div>
    </div>
    
    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/checkout-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>