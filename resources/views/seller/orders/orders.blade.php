{{-- seller/orders/orders.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/orders/orders.scss')
        <title>Orders</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/orders/orders.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>