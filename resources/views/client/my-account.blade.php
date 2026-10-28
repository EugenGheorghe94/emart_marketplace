{{-- client/home-page.blade.php --}}

<x-layouts.client-layout>
    <x-slot:styles>
        @vite('/public/resources/css/client/my-account.scss')
        <title>Account</title>
    </x-slot:styles>

<div class="accountMainArea">
    <x-client-account-side-menu />
    <div class="accountMainContainer">
        <div class="d1">
            <div class="mainSection s-main-1">
                <div class="mainCard client">
                    <div class="client-title">
                        <p>Account details</p>
                    </div>
                    <div class="client-area">
                        <div class="client-area__logo">
                            <div>
                                <span class="changeData"></span>
                                @if ( empty(Auth::user()->first_name) || empty(Auth::user()->last_name) )
                                    <p>{{ Auth::user()->user_name[0] . Auth::user()->user_name[1] }}</p>
                                @else
                                    <p>{{ Auth::user()->first_name[0] }}{{ Auth::user()->last_name[0] }}</p>
                                @endif
                            </div>
                        </div>
                        <div class="client-area__info">
                            <div class="alias add-data">
                                <p>Alias:</p>
                                <a href="/addresses" >add alias</a>
                            </div>



                            @if ( empty(Auth::user()->first_name) || empty(Auth::user()->last_name) )
                                <div class="name">
                                    <p>Name:</p>
                                    <a href="/addresses">add name</a>
                                </div>
                            @else
                                <div class="name">
                                    <p>Name:</p>
                                    <p>{{ Auth::user()->first_name . ' ' . Auth::user()->last_name }}</p>
                                </div>
                            @endif







                            <div class="email">
                                <p>Email:</p>
                                <p>{{ Auth::user()->email_address }}</p>
                            </div>
                            @if ( !empty($delivery->phone_number) )
                                <div class="telefon">
                                    <p>Phone:</p>
                                    <p>{{ $delivery->phone_number }}</p>
                                </div>
                            @else
                                <div class="telefon add-data">
                                    <p>Phone:</p>
                                    <a href="/addresses">add phone number</a>
                                </div>
                            @endif

                            @if ( !empty($delivery->phone_number) )
                                <button class="changeData">change phone number</button>
                            @else
                                <button style="opacity: 0; pointer-events: none;">change phone number</button>
                            @endif
                        </div>
                        
                        <div class="client-area__history">
                            <div>
                            @if ( round(Auth::user()->created_at->diffInDays(now())) > 1 )
                                <p>Thank you</p>
                                <p>for being our client for:</p>
                                <span>{{ round(Auth::user()->created_at->diffInDays(now())) }} days</span>
                            @else
                                <p>Thank you</p>
                                <p>for being our client!</p>
                            @endif
                            </div>
                        </div>
                    </div>
                    <div class="client-button">
                        <a href="/addresses">manage your data</a>
                    </div>
                </div>

                <div class="mainCard genius">
                    <div class="genius-area">
                        <div>
                            <span></span>
                            <p>Your subscription to free delivery and exclusive offers</p>
                        </div>
                        <div>
                            <a href="/premio">renew subscription</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainSection s-main-2">
                <div class="mainCard activity">
                    <div class="activity-title">
                        <p>My activity</p>
                    </div>
                    <div class="activity-info">
                        <div class="activity-info__orders">
                            <div>
                                <span></span>
                                <div class="activity-info__orders-text">
                                    <p>{{ Auth::user()->orders->where('order_total', '>', '1')->count() }} orders placed</p>
                                    <p>{{ Auth::user()->returns->count() }} returned orders</p>
                                </div>
                            </div>
                            <div class="activity-info__orders-button">
                                <a href="/orders">see order history</a>
                            </div>
                        </div>
                        <div class="activity-info__favorites">
                            <div>
                                <span></span>
                                <div class="activity-info__favorites-text">
                                    <p>{{ Auth::user()->favorites->count() }} favorite products</p>
                                    <p>1 favorite list</p>
                                </div>
                            </div>
                            <div class="activity-info__favorites-button">
                                <a href="favorites">see favorite products</a>
                            </div>
                        </div>
                        <div class="activity-info__reviews">
                            <div>
                                <span></span>
                                <div class="activity-info__reviews-text">
                                    <p>{{ Auth::user()->reviews->count() }} reviews added</p>
                                    <p>{{ Auth::user()->reviews->sum('likes') }} review likes</p>
                                </div>
                            </div>
                            <div class="activity-info__reviews-button">
                                <a href="/reviews">see reviews</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainSection s-main-3">
                <div class="mainCard pickup">
                    <div class="pickup-title">
                        <p>Favorite pickup point</p>
                    </div>
                    
                    @if ( !empty($pickup) )
                    <div class="pickup-area">
                        <span></span>
                        <div class="pickup-area__info">
                            <p class="p1">{{ $pickup->city }} Shopping Mall PickPoint</p>
                            <b class="p2">Location:</b>
                            <p class="p3">{{ $pickup->address . ', ' . $pickup->city }}</p>
                            <p class="p4">View on Google Maps</p>
                        </div>
                    </div>
                    @else
                        <div class="pickup-blank">
                            <span></span>
                            <p class="empty-area">You haven't added any pickup point yet. Use the button below to add a new pickup point.</p>
                        </div>
                    @endif
                    <div class="pickup-button">
                        <a href="/addresses">manage pickup points</a>
                    </div>
                </div>

                <div class="mainCard addresses">
                    <div class="addresses-title">
                        <p>Primary delivery address</p>
                    </div>
                    
                        @if ( !empty($delivery) )
                        <div class="addresses-area">
                            <span></span>
                            <div class="addresses-area__info">
                                <p class="a1">PRIMARY ADDRESS</p>
                                <b class="a2">{{ $delivery->first_name . ' ' . $delivery->last_name }}</b>
                                <p class="a3">{{ $delivery->phone_number }}</p>
                                <p class="a4">{{ $delivery->address }}</p>
                                <p class="a4">{{ $delivery->city . ', ' . $delivery->state }}</p>
                            </div>
                        </div>

                    @else
                        <div class="address-blank">
                            <span></span>
                            <p class="empty-area">You haven't added any delivery address yet. Use the button below to add a new address.</p>
                        </div>
                    @endif
                    
                    <div class="addresses-button">
                        <a href="/addresses">manage delivery addresses</a>
                    </div>
                </div>

                <div class="mainCard companies">
                    <div class="companies-title">
                        <p>My companies</p>
                    </div>
                    <div class="companies-area">
                        <span></span>
                        <p class="empty-area">Buying for your company? No problem! Add here the data that will appear on your order invoice.</p>
                    </div>
                    <div class="companies-button">
                        <a href="/invoices">add new company</a>
                    </div>
                </div>

                <div class="mainCard cards">
                    <div class="cards-title">
                        <p>My cards</p>
                    </div>
                    <div class="cards-area">
                        <span></span>
                        <p class="empty-area">Add a card to pay for future orders without re-entering all your payment details.</p>
                    </div>
                    <div class="cards-button">
                        <a href="/cards">manage cards</a>
                    </div>
                </div>

                <div class="mainCard feedback">
                    <div class="feedback-title">
                        <p>Market research</p>
                    </div>
                    <div class="feedback-area">
                        <span></span>
                        <p class="empty-area">Periodically, we will ask for your opinion in surveys that help us improve your customer experience.</p>
                    </div>
                    <div class="feedback-button">
                        <a href="/subscriptions">sign me up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/my-account.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>