{{-- seller/offers/stocks.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/offers/stocks.scss')
        <title>Offers Stocks Overview</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />

    
    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/offers/stocks.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>