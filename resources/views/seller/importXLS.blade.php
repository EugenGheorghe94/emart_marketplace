{{-- seller/importXLS.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/importXLS.scss')
        <title>Import XLS</title>
    </x-slot:styles>

    
    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/importXLS.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>