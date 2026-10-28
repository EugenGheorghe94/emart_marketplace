{{-- seller/offers/reviews.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/offers/reviews.scss')
        <title>Offers Reviews Overview</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />

    
    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/offers/reviews.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>