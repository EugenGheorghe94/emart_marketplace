{{-- components/dynamic-seller-page-view.blade.php --}}

@once
    @push('component-styles')
        @vite('public/resources/components/css/dynamic-seller-page-view.scss')
    @endpush

    @push('component-scripts')
        <script src="{{ asset('resources/components/js/dynamic-seller-page-view.js') }}"></script>
    @endpush
@endonce