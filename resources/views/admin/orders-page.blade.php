{{-- admin/orders-page.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        <link rel="stylesheet" href="{{ asset('/resources/css/admin/orders-page.css') }}">
        <title>Admin - Orders</title>
    </x-slot:styles>


    <div class="mainPageSection">
        <section>Admin orders section 1</section>
        <section>Admin orders section 2</section>
        <section>Admin orders section 3</section>
        <section>Admin orders section 4</section>
        <section>Admin orders section 5</section>
        <section>Admin orders section 6</section>
    </div>


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/admin/orders-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>