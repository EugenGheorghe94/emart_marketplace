{{-- seller/account/rating.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/account/rating.scss')
        <title>Seller Rating</title>
    </x-slot:styles>

    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/account/rating.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>