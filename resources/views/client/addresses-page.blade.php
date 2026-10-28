{{-- client/addresses-page.blade.php --}}


<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/addresses-page.scss')
        <title>Addresses</title>
    </x-slot:styles>

    <script>
        const USER_ID = "{{ Auth::check() ? Auth::user()->id : '' }}";
    </script>

    <div class="accountMainArea">
        <x-client-account-side-menu />
        <div class="accountMainContainer">
        <!---->
            <div class="pickup-area">
                <div class="pickup-area__title">
                    <p>Pickup addresses</p>
                    <button class="add-address__pickup">add pickup address</button>
                </div>
                @if ( !sizeof( Auth::user()->addresses->where('address_type', 'pickup') ) > 0 )
                    <div class="pickup-area__empty">
                        <div>
                            <span></span>
                        </div>
                        <p>You haven't added any pickup address yet.</p>
                        <p>Use the button below to add a new pickup address.</p>
                        <a class="add-address__pickup">add pickup address</a>
                    </div>
                @else
                    <div class="pickup-area__cards load"></div>
                @endif
            </div>
        <!---->
             <div class="delivery-area">
                <div class="delivery-area__title">
                    <p>Delivery addresses</p>
                    <button class="add-address__delivery">add delivery address</button>
                </div>
                @if ( !sizeof(Auth::user()->addresses->where('address_type', 'delivery') ) > 0 )
                    <div class="delivery-area__empty">
                        <div></div>
                        <p>You haven't added any delivery address yet.</p>
                        <p>Use the button below to add a new delivery address.</p>
                        <a class="add-address__delivery">add delivery address</a>
                    </div>
                @else
                    <div class="delivery-area__cards load"></div>
                @endif
            </div>
        <!---->
        </div>
    <!---->
        <div class="pickup-backdrop">
            <div class="pickup-modal">
                <div class="close-pickup-modal"></div>
                <div class="pickup-modal__title">Add pickup address</div>
                <div class="pickup-modal__body">
                    <div>
                        <p>Contact person</p>
                        <label>
                            First name
                            <input type="text" placeholder="ex. John" class="pickup-form-input pickup-first-name">
                            <div class="warning">Required field</div>
                        </label>
                        <label>
                            Last name
                            <input type="text" placeholder="ex. Smith" class="pickup-form-input pickup-last-name">
                            <div class="warning">Required field</div>
                        </label>
                        <label>
                            Phone number
                            <input type="text" placeholder="(xxx) xxx-xxxx" class="pickup-form-input pickup-phone-number">
                            <div class="warning">Required field</div>
                        </label>
                    </div>
                    <div>
                        <p>Pickup location</p>
                        <label>
                            State
                            <input type="text" placeholder="ex. California" class="pickup-form-input pickup-state">
                            <div class="warning">Required field</div>
                        </label>
                        <label>
                            City
                            <input type="text" placeholder="ex. Los Angeles" class="pickup-form-input pickup-city">
                            <div class="warning">Required field</div>
                        </label>
                        <label>
                            Address
                            <input type="text" placeholder="ex. 5678 Sunset Blvd, 90028" class="pickup-form-input pickup-address">
                            <div class="warning">Required field</div>
                        </label>
                        @if ( !auth()->user()->addresses()->where('address_type', 'primary')->exists())
                        <span>
                            <label for="primary-pickup">
                                <input type="checkbox" name="" id="primary-pickup">
                                Primary pickup address
                            </label>
                        </span>
                        @else
                            <p></p>
                        @endif
                        <button class="submit-pickup">Save</button>
                    </div>
                </div>
            </div>
        </div>
    <!---->
        <div class="delivery-backdrop">
            <div class="delivery-modal">
                <div class="close-delivery-modal"></div>
                <div class="delivery-modal__title">Add delivery address</div>
                <div class="delivery-modal__body">
                    <div>
                        <p>Contact person</p>
                        <label>
                            First name
                            <input type="text" placeholder="ex. John" class="delivery-form-input delivery-first-name">
                            <div class="warning">Required field</div>
                        </label>
                        <label>
                            Last name
                            <input type="text" placeholder="ex. Smith" class="delivery-form-input delivery-last-name">
                            <div class="warning">Required field</div>
                        </label>
                        <label>
                            Phone number
                            <input type="text" placeholder="(xxx) xxx-xxxx" class="delivery-form-input delivery-phone-number">
                            <div class="warning">Required field</div>
                        </label>
                    </div>
                    <div>
                        <p>Delivery location</p>
                        <label>
                            State
                            <input type="text" placeholder="ex. California" class="delivery-form-input delivery-state">
                            <div class="warning">Required field</div>
                        </label>
                        <label>
                            City
                            <input type="text" placeholder="ex. Los Angeles" class="delivery-form-input delivery-city">
                            <div class="warning">Required field</div>
                        </label>
                        <label>
                            Address
                            <input type="text" placeholder="ex. 5678 Sunset Blvd, 90028" class="delivery-form-input delivery-address">
                            <div class="warning">Required field</div>
                        </label>
                        @if ( !auth()->user()->addresses()->where('address_type', 'primary')->exists())
                        <span>
                            <label for="primary-delivery">
                                <input type="checkbox" name="" id="primary-delivery">
                                Primary delivery address
                            </label>
                        </span>
                        @else
                            <p></p>
                        @endif
                        <button class="submit-delivery">Save</button>
                    </div>
                </div>
            </div>
        </div>
    <!---->
</div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/addresses-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>