{{-- admin/message-page.blade.php --}}

<x-layouts.seller-layout>
    <x-slot:styles>
        <link rel="stylesheet" href="{{ asset('/resources/css/admin/message-page.css') }}">
        <title>Admin - Messages</title>
    </x-slot:styles>

    
    <div class="mainPageSection">
        <section>Admin messages section 1</section>
        <section>Admin messages section 2</section>
        <section>Admin messages section 3</section>
        <section>Admin messages section 4</section>
        <section>Admin messages section 5</section>
        <section>Admin messages section 6</section>
    </div>


    <x-slot:scripts>
        <script src="{{ asset('/resources/js/admin/message-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.seller-layout>