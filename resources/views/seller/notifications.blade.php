{{-- seller/notifications.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/notifications.scss')
        <title>Notifications</title>
    </x-slot:styles>


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/notifications.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>