{{-- seller/account/profile.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        @vite('public/resources/css/seller/account/profile.scss')
        <title>Seller - account / profile</title>
    </x-slot:styles>


    <script>
        const COMPANY_NAME = "{{Auth::user()->company_name}}".toUpperCase();
        const ACCOUNT_HEALTH = "{{Auth::user()->account_health}}";
        const HISTORY = "{{ Auth::user()->created_at }}";
    </script>
    
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/seller/account/profile.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>