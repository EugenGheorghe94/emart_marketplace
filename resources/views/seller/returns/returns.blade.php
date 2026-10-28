{{-- seller/returns/returns.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/returns/returns.scss')
        <title>Seller - returns / returns</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/returns/returns.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>