{{-- seller/academy.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/academy.scss')
        <title>eMART Academy</title>
    </x-slot:styles>


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/academy.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>