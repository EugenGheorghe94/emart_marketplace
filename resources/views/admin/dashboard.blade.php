{{-- admin/dashboard.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        <link rel="stylesheet" href="{{ asset('/resources/css/admin/dashboard.css') }}">
        <title>Admin - Dashboard</title>
    </x-slot:styles>


    <div class="mainPageSection">
        <section>Admin dashboard section 1</section>
        <section>Admin dashboard section 2</section>
        <section>Admin dashboard section 3</section>
        <section>Admin dashboard section 4</section>
        <section>Admin dashboard section 5</section>
        <section>Admin dashboard section 6</section>
    </div>


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/admin/dashboard.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>