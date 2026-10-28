{{-- client/cards-page.blade.php --}}


<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/cards-page.scss')
        <title>Cards</title>
    </x-slot:styles>

    <div class="accountMainArea">
        <x-client-account-side-menu />

        <div class="cards-area">
            <div class="cards-area__title">
                <p>Cards details</p>
                <button>add new cards</button>
            </div>
            <div class="cards-area__cards">
                <div></div>
                <p>You have not added any cards yet.</p>
                <p>Use the button below to add a new card.</p>
                <a>add a new card</a>
            </div>
        </div>
    </div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/cards-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>