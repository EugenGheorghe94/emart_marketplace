{{-- client/reviews-page.blade.php --}}


<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/reviews-page.scss')
        <title>Reviews</title>
    </x-slot:styles>

    <div class="accountMainArea">
        <x-client-account-side-menu />
        <div>
            <div class="reviews-area">
                <div class="reviews-area__title">
                    <p>My reviews</p>
                </div>
                <div class="reviews-area__cards loader"></div>
            </div>
        </div>
    </div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/reviews-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>