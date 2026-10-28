{{-- seller/account/newsletters.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/account/newsletters.scss')
        <title>Seller Newsletters</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/account/newsletters.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>