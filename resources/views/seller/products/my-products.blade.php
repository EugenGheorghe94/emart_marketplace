{{-- seller/products/my-products.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/products/my-products.scss')
        <title>Seller - products / my-products</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/products/my-products.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>