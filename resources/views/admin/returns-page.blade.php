{{-- admin/returns-page.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        <link rel="stylesheet" href="{{ asset('/resources/css/admin/returns-page.css') }}">
        <title>Admin - Returns</title>
    </x-slot:styles>


    <div class="mainPageSection">
        <section>Admin returns section 1</section>
        <section>Admin returns section 2</section>
        <section>Admin returns section 3</section>
        <section>Admin returns section 4</section>
        <section>Admin returns section 5</section>
        <section>Admin returns section 6</section>
    </div>
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/admin/returns-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>