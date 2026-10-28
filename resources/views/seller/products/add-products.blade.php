{{-- seller/products/add-products.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/products/add-products.scss')
        <title>Seller - products / add-products</title>
    </x-slot:styles>


    


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/products/add-products.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>