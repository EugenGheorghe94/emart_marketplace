{{-- seller/fulfilment/dashboard.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('/resources/css/seller/fulfilment/dashboard.scss')
        <title>Seller - fulfilment / dashboard</title>
    </x-slot:styles>


        <div style="display: flex; align-items: end; justify-content: center; height: 100%; margin: auto;">
            @filepath
        </div>
    
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/fulfilment/dashboard.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>