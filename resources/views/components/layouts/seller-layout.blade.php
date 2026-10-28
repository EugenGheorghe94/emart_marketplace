{{-- components/layouts/seller-layout.blade.php --}}

<x-header-footer-seller>
    <x-slot:styles>{{ $styles ?? '' }}</x-slot:styles>
        {{ $slot }}
    <x-slot:scripts>{{ $scripts ?? '' }}</x-slot:scripts>
</x-header-footer-seller>