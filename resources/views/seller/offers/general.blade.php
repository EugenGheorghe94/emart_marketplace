{{-- seller/offers/general.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/offers/general.scss')
        <title>Offers General Overview</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/offers/general.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>