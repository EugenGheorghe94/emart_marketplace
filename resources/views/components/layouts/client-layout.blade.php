{{-- components/layouts/client-layout.blade.php --}}

<x-header-footer-client>
    <x-slot:styles>{{ $styles ?? '' }}</x-slot:styles>
        {{ $slot }}
    <x-slot:scripts>{{ $scripts ?? '' }}</x-slot:scripts>
</x-header-footer-client>