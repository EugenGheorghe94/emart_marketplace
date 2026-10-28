{{-- seller/opportunities/existing-products.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/opportunities/existing-products.scss')
        <title>Opportunities - Existing Products</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/opportunities/existing-products.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>