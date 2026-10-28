{{-- admin/prod-page.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        <link rel="stylesheet" href="{{ asset('/resources/css/admin/prod-page.css') }}">
        <title>Admin - Products</title>
    </x-slot:styles>


    <div class="mainPageSection">
        <section>Admin products section 1</section>
        <section>Admin products section 2</section>
        <section>Admin products section 3</section>
        <section>Admin products section 4</section>
        <section>Admin products section 5</section>
        <section>Admin products section 6</section>
    </div>
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/admin/prod-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>