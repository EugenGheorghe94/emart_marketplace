{{-- client/returns-page.blade.php --}}


<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/returns-page.scss')
        <title>Returns</title>
    </x-slot:styles>

    <div class="accountMainArea">
        <x-client-account-side-menu />

        <div>
            <div class="returns-area">
                <div class="returns-area__title">
                    <p>My returns</p>
                    <button class="add-return">add a return request</button>
                </div>
                <div class="returns-area__cards loader"></div>
            </div>
        </div>
    </div>

    <div class="return-backdrop">
        <div class="return-modal">
            <div class="close-return-modal"></div>
            <div class="return-modal__title">
                Add a new return
            </div>
            <div class="return-modal__body">
                <div class="returnDetails">
                    <p>Return details</p>
                    <label for="">
                        Choose order:
                        <select class="orderSelect selectField">
                            <option selected disabled hidden>select an order</option>
                        </select>
                    </label>
                    <label for="">
                        Select prduct:
                        <select class="productSelect selectField">
                            <option selected disabled hidden>select a product</option>
                        </select>
                    </label>
                    <label for="">
                        Return pickup option:
                        <select class="returnType selectField">
                            <option selected disabled hidden>select an option</option>
                            <option>eMART PickPoint</option>
                            <option>Delivery address</option>
                        </select>
                    </label>
                    <label for="">
                        Return refund option:
                        <select class="refundType selectField">
                            <option selected disabled hidden>select an option</option>
                            <option>I want eMART voucher</option>
                            <option>I want my money back</option>
                        </select>
                    </label>
                </div>
                <span>
                    <label for="terms">
                        <input type="checkbox" name="" id="terms">
                        I agree with the&nbsp;<a href="/">terms and conditions </a>&nbsp;for returns.
                    </label>
                </span>
                <button class="submitReturn">Save</button>
            </div>
        </div>
    </div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/returns-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>