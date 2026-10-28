{{-- seller/account/documents.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/account/documents.scss')
        <title>Seller Documents</title>
    </x-slot:styles>


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/account/documents.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>