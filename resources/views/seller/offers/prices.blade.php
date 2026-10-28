{{-- seller/offers/prices.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/offers/prices.scss')
        <title>Offers Prices Overview</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/offers/prices.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>