{{-- seller/returns/product-health.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/returns/product-health.scss')
        <title>Seller - returns / product-health</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/returns/product-health.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>