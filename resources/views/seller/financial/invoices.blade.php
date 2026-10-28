{{-- seller/financial/invoices.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('/resources/css/seller/financial/invoices.scss')
        <title>Seller - financial / invoices</title>
    </x-slot:styles>


        <div style="display: flex; align-items: end; justify-content: center; height: 100%; margin: auto;">
            @filepath
        </div>
    
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/financial/invoices.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>