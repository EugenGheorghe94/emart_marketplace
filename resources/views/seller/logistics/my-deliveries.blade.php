{{-- seller/logistics/my-deliveries.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/logistics/my-deliveries.scss')
        <title>My deliveries</title>
    </x-slot:styles>


    <x-dynamic-seller-page-view />


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/logistics/my-deliveries.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>