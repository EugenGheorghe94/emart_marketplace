{{-- seller/fulfilment/reception.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('/resources/css/seller/fulfilment/reception.scss')
        <title>Seller - fulfilment / reception</title>
    </x-slot:styles>


        <div style="display: flex; align-items: end; justify-content: center; height: 100%; margin: auto;">
            @filepath
        </div>
    
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/fulfilment/reception.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>