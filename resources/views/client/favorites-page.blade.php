{{-- client/favorites-page.blade.php --}}


<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/favorites-page.scss')
        <title>Favorites</title>
    </x-slot:styles>

    <script>
    const USER_ID = "{{ Auth::check() ? Auth::user()->id : '' }}";
    </script>

    <div class="accountMainArea">
        <x-client-account-side-menu />

        <div class="favorites-area">
            <div class="favorites-area__title">
                <p>Favorites</p>
                <button>+ new list</button>
            </div>
            <div class="favorites-area__cards load"></div>
        </div>
    </div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/favorites-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>