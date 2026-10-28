{{-- client/home-page.blade.php --}}

<x-layouts.client-layout>
    <x-slot:styles>
        @vite('public/resources/css/client/home-page.scss')
        <title>eMART.click - Find it. Buy it. Love it.</title>
        <meta name="description" content="Browse thousands of products across every category with secure checkout, low prices, and hassle-free returns.">
    </x-slot:styles>


    <script>
    const USER_ID = "{{ Auth::check() ? ( Auth::user()->account_role == 'client' ? Auth::user()->id : '' )  : '' }}";
    </script>

    @php

        $bannerSets = [
            [
                '/resources/files/users/home/set_1/banner-skincare.avif',
                '/resources/files/users/home/set_1/banner-cameras.avif',
                '/resources/files/users/home/set_1/banner-selfcare.avif',
                '/resources/files/users/home/set_1/banner-gaming.avif',
                '/resources/files/users/home/set_1/banner-mouse-2.avif',
                '/resources/files/users/home/set_1/banner-headphones.avif'
            ],
            [
                '/resources/files/users/home/set_2/banner-smartwatch-2.avif',
                '/resources/files/users/home/set_2/banner-cameras-2.avif',
                '/resources/files/users/home/set_2/banner-sneakers.avif',
                '/resources/files/users/home/set_2/banner-beauty.avif',
                '/resources/files/users/home/set_2/banner-laptops.avif',
                '/resources/files/users/home/set_2/banner-phones.avif'
            ],
            [
                '/resources/files/users/home/set_3/banner-video-camera.avif',
                '/resources/files/users/home/set_3/banner-mouse.avif',
                '/resources/files/users/home/set_3/banner-drones.avif',
                '/resources/files/users/home/set_3/banner-perfume.avif',
                '/resources/files/users/home/set_3/banner-vr.avif',
                '/resources/files/users/home/set_3/banner-orange-phones.avif'
            ]
        ];

        $random = rand(0, 2);

    @endphp


    <div class="mainBannerArea">
        <div class="mainBannerImgArea">
            <div class="banner-buttons">
                <button class="prev-banner slide" aria-label="previous banner"></button>
                <button class="next-banner slide" aria-label="next banner"></button>
            </div>
            <div class="banner-dots">
                <p class="filled-dot" value="1"></p>
                <p class="empty-dot"  value="2"></p>
                <p class="empty-dot"  value="3"></p>
                <p class="empty-dot"  value="4"></p>
                <p class="empty-dot"  value="5"></p>
                <p class="empty-dot"  value="6"></p>
            </div>
            <div class="carousel">
                <img src="{{$bannerSets[$random][0]}}" alt="{{explode('.', basename($bannerSets[$random][0]))[0]}}" class="banner b-1" fetchpriority="high" loading="eager">
                <img src="{{$bannerSets[$random][1]}}" alt="{{explode('.', basename($bannerSets[$random][1]))[0]}}" class="banner b-2" fetchpriority="auto" loading="lazy">
                <img src="{{$bannerSets[$random][2]}}" alt="{{explode('.', basename($bannerSets[$random][2]))[0]}}" class="banner b-3" fetchpriority="auto" loading="lazy">
                <img src="{{$bannerSets[$random][3]}}" alt="{{explode('.', basename($bannerSets[$random][3]))[0]}}" class="banner b-4" fetchpriority="auto" loading="lazy">
                <img src="{{$bannerSets[$random][4]}}" alt="{{explode('.', basename($bannerSets[$random][4]))[0]}}" class="banner b-5" fetchpriority="auto" loading="lazy">
                <img src="{{$bannerSets[$random][5]}}" alt="{{explode('.', basename($bannerSets[$random][5]))[0]}}" class="banner b-6" fetchpriority="auto" loading="lazy">
            </div>
        </div>
    </div>

    <div class="main-container-title">
        <p>Products selected for you</p>
        <button aria-label="products info"></button>
    </div>

    <div class="mainProductsArea">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">

        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">

        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
        <img src="/resources/files/users/home/prod-card.svg" alt="product card">
    </div>
    <div class="newsletterBannerArea">
        <div class="newsletterBanner">
            <img src="/resources/files/users/home/subscribe-homepage.avif" alt="subscribe banner">
            
            <div class="newsBannerText">
                <p class="newsTitle">Subscribe to the newsletter and be the first to know about discounts and exclusive offers at eMART.</p>
                <p class="newsText">You will receive an email in which we ask you to confirm your subscription.</p>
                <form class="newsletterForm" action="">
                    <input class="newsletterNameForm" type="text" name="" id="" placeholder="Full name">
                    <input class="newsletterEmailForm" type="text" name="" id="" placeholder="E-mail address">
                    <button class="newsletterButton" type="button" aria-label="subscribe to newsletter">Subscribe</button>
                </form>
                <p class="newsFinePrint">By providing the information above, I confirm that I am over 18 years old.</p>
            </div>
        </div>
    </div>
    <!------------>
        <div class="similarProductsContainer">
        <!---->
            <div class="similar-products">
                <p class="similar-products__title">Recomended for you</p>
                <div class="similar-products__buttons"></div>
                <div class="similar-products__carousel">
                    <div class="similar-products__carousel-ribbon recommended-1">
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>

                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>

                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                    </div>
                </div>
            </div>
        <!---->
            <div class="similar-products">
                <p class="similar-products__title">Other clients have seen</p>
                <div class="similar-products__buttons"></div>
                <div class="similar-products__carousel">
                    <div class="similar-products__carousel-ribbon others-1">
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>

                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>

                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                        <div class="pCard"></div>
                    </div>
                </div>
            </div>
        <!---->
        </div>
<!------------>
    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/home-page.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>