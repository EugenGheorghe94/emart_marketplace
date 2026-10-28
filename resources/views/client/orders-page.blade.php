{{-- client/orders-page.blade.php --}}


<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/orders-page.scss')
        <title>Orders</title>
    </x-slot:styles>

    <div class="accountMainArea">
        <x-client-account-side-menu />
        <div>
            <div class="orders-area">
                <div class="orders-area__title">
                    <p>My orders</p>
                </div>
                <div class="orders-area__cards loader"></div>
            </div>
        </div>
    </div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/orders-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>