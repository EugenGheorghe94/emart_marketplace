{{-- seller/campaigns/bundles.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('/resources/css/seller/campaigns/bundles.scss')
        <title>Seller - campaigns / bundles</title>
    </x-slot:styles>


        <div style="display: flex; align-items: end; justify-content: center; height: 100%; margin: auto;">
            @filepath
        </div>
    
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/campaigns/bundles.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>