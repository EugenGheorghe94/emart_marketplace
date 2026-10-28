{{-- client/invoices-page.blade.php --}}


<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/invoices-page.scss')
        <title>Invoices</title>
    </x-slot:styles>

    <div class="accountMainArea">
        <x-client-account-side-menu />

        <div class="invoices-area">
            <div class="invoices-area__title">
                <p>Invoice details</p>
                <button>add new company</button>
            </div>
            <div class="invoices-area__cards">
                <div></div>
                <p>You have not added any legal entities yet.</p>
                <p>Use the button below to add a new company entity.</p>
                <a>add a new company</a>
            </div>
        </div>
    </div>

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/invoices-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>