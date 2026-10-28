{{-- client/prod-listing.blade.php --}}


<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/prod-listing.scss')
        <title>{{ implode(' ',array_slice((explode(' ', $product->title)), 0, 10)) }}</title>
        <meta name="description" content="{{ $product->title }}">
    </x-slot:styles>

    


    <div class="mainSectionDiv">

    @php
        if ( $product->list_price > 1000 ) {
            $has_resealed_offer = rand(0, 1);
            $has_buyback_offer = rand(0, 1);
        } else {
            $has_resealed_offer = 0;
            $has_buyback_offer = 0;
        }
    @endphp
       

<!-- Pop-up navbar with product summary -->
        <div class="dropDownNavBar">
            <div class="nav-summary">
                <div class="nav-summary__image" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                <div class="nav-summary__title">{{ $product->title }}</div>
            <!---->
                <div class="nav-summary__reviews">
                    @if ( $product->prodReviews->count() > 0 )
                        <div class="nav-summary__reviews-rating">
                            <div class="rating">
                                <div class="nav-empty-stars gray"></div>
                                <div class="nav-filled-stars yellow" style="width: {{ 100/( 5 /$product->prodReviews->avg('rating') ) }}%"></div>
                            </div>
                            <a href="{{ url()->current() }}#reviews-section" class="rating-score">{{ round($product->prodReviews->avg('rating'), 2) }}</a>
                        </div>
                        <a href="{{ url()->current() }}#reviews-section" class="nav-summary__reviews-number">{{ sizeof($product->prodReviews) }} reviews</a>
                    @endif
                </div>
            <!---->
                <div class="nav-summary__price">
                    @if ( $product->discount_percent != null )
                        <p class="nav-summary__price-discount"> 
                            {{ explode('.', $product->list_price)[0] }}<sup>{{ explode('.', $product->list_price)[1] }}
                            </sup><small> USD<b></b></small>
                        @else
                        <p class="nav-summary__price-msrp"> 
                            {{ 'MSRP: ' . explode('.', $product->msrp_price)[0] }}<sup>{{ explode('.', $product->msrp_price)[1] }}
                            </sup><small> USD<b></b></small>
                        @endif
                    </p>
                    <p class="nav-summary__price-list">
                        @if ( $product->discount_percent != null )
                            {{ explode('.', $product->sale_price)[0] }}<sup>{{ explode('.', $product->sale_price)[1] }}
                        @else 
                            {{ explode('.', $product->list_price)[0] }}<sup>{{ explode('.', $product->list_price)[1] }}
                        @endif
                        </sup><small>USD</small>
                    </p>
                </div>
            <!---->
                <div class="nav-summary__cart">
                    <div class="loadingCover"></div>
                    <button class="summary-to-cart">
                        <div class="summaryCartLoader"></div>
                        <div class="topButtonCover"></div>
                        Add to cart
                    </button>
                </div>
                <div class="nav-summary__favourites">
                    @if ( !empty($favorites) && in_array($product->ean_13, json_decode($favorites)) )
                        <button class="favorites-small jq-remove-from-fav" value="{{$product->ean_13}}"></button>
                    @else
                        <button class="favorites-small jq-add-to-fav" value="{{$product->ean_13}}"></button>
                    @endif
                </div>
            </div>
        </div>
<!---------------------------------------->
        @if( !empty($product->subCategory->parent->parent) )
            <div class="productPath">
                <div>
                    <p>{{ $product->subCategory->parent->parent->cat_name }}</p>
                    <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                    <a href="/products/category/{{ $product->subCategory->parent->url_slug }}">{{ $product->subCategory->parent->cat_name }}</a>
                    <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                    <a href="/products/subcategory/{{ $product->subCategory->url_slug }}">{{ $product->subCategory->cat_name }}</a>
                </div>
                <p data-sku="{{ $product->product_sku }}">Product code: {{ $product->product_sku }}</p>
            </div>
        @elseif( !empty($thisCategory->parent) )
            <div class="productPath">
                <div>
                    <p>{{ $thisCategory->parent->cat_name }}</p>
                    <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                    <a href="/products/category/{{ $thisCategory->url_slug }}">{{ $thisCategory->cat_name }}</a>
                </div>
                <p data-sku="{{ $product->product_sku }}">Product code: {{ $product->product_sku }}</p>
            </div>
        @else
            <div style="height: 16px;"></div>
            <p data-sku="{{ $product->product_sku }}">Product code: {{ $product->product_sku }}</p>
        @endif
        

        <div class="productTitle">
            <p data-field="pTitle">{{ $product->title }}</p>
            <div class="ptoductTitleButtons">
                <button class="shareButton" type="submit">Share</button>
                <div class="compareCheckbox">
                    <input type="checkbox" name="compareCheckbox" id="compareCheckbox">
                    <label for="compareCheckbox">Compare</label>
                </div>
            </div>
        </div>




        <div class="mainProductSection">
            <div class="productImage">
                <div class="imgArea">
                    @if ( $product->discount_percent != null && $product->premio != 0 )
                        <div class="premio-label m-label-top">Premio</div>
                        <div class="sale-label m-label-bot">-{{ $product->discount_percent }}%</div>
                    @elseif ( $product->discount_percent != null && $product->premio == 0 )
                        <div class="sale-label s-label">-{{ $product->discount_percent }}%</div>
                    @elseif ( $product->discount_percent == null && $product->premio != 0 )
                        <div class="premio-label s-label">Premio</div>
                    @endif
                    <div class="IMG" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                </div>

                <div class="moreIMG">
                    <div class="moreIMG-buttons">
                        <div class="control prevIMG"></div>
                        <div class="control nextIMG"></div>
                    </div>

                    <div class="moreIMG-carousel">
                        <div class="moreIMG-carousel__ribbon">
                            <div class="sIMG small-img-1 hovered" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                            <div class="sIMG small-img-2" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                            <div class="sIMG small-img-3" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                            <div class="sIMG small-img-4" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                            <div class="sIMG small-img-5" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                            <div class="sIMG small-img-6" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                            <div class="sIMG small-img-7" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                            <div class="sIMG small-img-8" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                        </div>
                    </div>
                </div>

                <div class="moreFormBrand">
                    <div>{{ $product->brand }}</div>
                    <a href="/products/search/{{ $product->brand }}" class="dotted">click to see more</a>
                </div>

            </div>
<!------------>
            <div class="shippingDiv">
                @if ( $product->prodReviews->count() > 0 )
                    <a class="main-rating" href="{{ url()->current() }}#reviews-section">
                        <div class="rating">
                            <div class="stars-empty gray"></div>
                            <div class="stars-filled yellow" style="width: {{ 100/( 5 /$product->prodReviews->avg('rating') ) }}%"></div>
                        </div>
                        <div class="rating-info">
                            <p class="rating-score">{{ round($product->prodReviews->avg('rating'), 2) }}</p>
                            <p class="reviews-numbers">({{ sizeof($product->prodReviews) }} reviews)</p>
                        </div>
                    </a>


                    <a class="recommended" href="{{ url()->current() }}#reviews-section">
                        <p><b>{{ round( 100/( 5 /$product->prodReviews->avg('rating')) ) }}% </b>of eMART clients recommend this product</p>
                    </a>
                @endif

                
                <div class="shippingEstimate">
                    <p class="">Delivery estimate for: <b data-filed="uLocation"></b></p>
                </div>

                <div class="shippingDetais">
                   
                    @php 
                        $pickup_date = '';
                        $delivery_date = '';
                        if ( date("l", strtotime("+" . $courier->time_days . " day")) == "Sunday" ) {
                            $pickup_date = date("l, d M.", strtotime("+" . $courier->time_days + 1 . " day"));
                        } else {
                            $pickup_date = date("l, d M.", strtotime("+" . $courier->time_days . " day"));
                        };

                        if ( date("l", strtotime("+" . $courier->time_days . " day")) == "Sunday" ) {
                            $delivery_date = date("l, d M.", strtotime("+" . $courier->time_days + 2 . " day"));
                        } else {
                            $delivery_date = date("l, d M.", strtotime("+" . $courier->time_days . " day"));
                        };
                    @endphp

                    <script>
                        const EAN_13 = "{{ $product->ean_13 }}";
                        const USER_ID = "{{ Auth::check() ? ( Auth::user()->account_role == 'client' ? Auth::user()->id : '' )  : '' }}";
                    </script>

                    
                    <div class="shippingTextArea">
                        <div class="dynamic-content">
                            <span class="dynamic-content__loader"></span>
                        </div>


                    @if( $product->premio == 1 )
                        <div class="shipping-container">
                            <div class="shipping-container__logo pickup">
                                <span></span>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div class="shipping-container__text">
                                <p class="sb16 black personal-delivery">Personal pickup:</p>
                                @if ( empty($pickup) )
                                    <p class="sb13 black padd" data-field="uCityMall">eMART PickPoint next to you</p>
                                @else
                                    <p class="sb13 black padd" data-field="uCityMall">{{ $pickup->city }} Shopping Mall PickPoint</p>
                                @endif
                                <p class="lt13 darkgray padd">from {{ $pickup_date }}</p>
                                <p class="sb13 green padd" data-field="pShipping">2<sup>99</sup><small> USD</small></p>
                                <a href="/addresses" class="dotted">change pickup</a>
                            </div>
                        </div>
                    @endif
                        <div class="shipping-container">
                            <div class="shipping-container__logo delivery">
                                <span></span>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                                <div class="shipping-container__text">
                                <p class="sb16 black courier-delivery">Courier delivery:</p>
                                <p class="sb13 black padd">Standard {{$courier->courier_name}} delivery</p>
                                <p class="lt13 darkgray padd " data-field="uDeliDate">from {{ $delivery_date }}</p>
                                <p class="sb13 green padd" data-field="pShipping">{{ explode('.', $courier->shipping_cost)[0] }}<sup>{{ explode('.', $courier->shipping_cost)[1] }}</sup><small> USD</small></p>
                                <a href="/addresses" class="dotted">change delivery</a>
                            </div>
                        </div>
                        <div class="shipping-container">
                            <div class="shipping-container__logo warranty">
                                <span></span>
                                <div>
                                </div>
                            </div>
                            <div class="shipping-container__text">
                                <p class="sb16 black info-area">Information:</p>
                                <p class="lt13 black check">Warranty included: <a href="{{ url()->current() }}#specifications-section" class="dotted">details</a></p>
                                <ul>
                                    <li class="lt13 black">Individuals: {{ $product->warranty_months }} months <b class="dotted ">extend</b></li>
                                    <li class="lt13 black">Companies: {{ $product->warranty_months / 2 }} months</li>
                                </ul>
                                <p class="lt13 black check ">Protect+ Damage and Theft Insurance</p>
                                <ul>
                                    <li class="lt13 black">Protect your property</li>
                                    <li class="dotted">Choose the right insurance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!------------>
            <div class="buyButtonDiv">
                <div class="price-area">
                        @if ( $product->discount_percent != null )
                        <p class="price-area__discount"> 
                            {{ explode('.', $product->list_price)[0] }}<sup>{{ explode('.', $product->list_price)[1] }}
                            </sup><small> USD<b class="show-sale-info"></b><span class="sale-info">The crossed-out price is the lowest price at which the product was sold in the 30 days prior to the discount.<br>Promotion valid from {{date("d M.", strtotime("+30 day"))}} 2026, while stocks last.</span></small>
                        @else
                        <p class="price-area__msrp"> 
                            {{ 'MSRP: ' . explode('.', $product->msrp_price)[0] }}<sup>{{ explode('.', $product->msrp_price)[1] }}
                            </sup><small> USD<b class="show-sale-info"></b><span class="sale-info">MSRP stands for Manufacturer's Suggested Retail Price, which is the recommended selling price set by a product's manufacturer. <br>The product's actual selling price is displayed below, in red.</span></small>
                        @endif
                        </p>
                    <p class="price-area__list" data-field="pPrice">
                        @if ( $product->discount_percent != null )
                            {{ explode('.', $product->sale_price)[0] }}<sup>{{ explode('.', $product->sale_price)[1] }}
                        @else 
                            {{ explode('.', $product->list_price)[0] }}<sup>{{ explode('.', $product->list_price)[1] }}
                        @endif
                        </sup><small> USD</small>
                    </p>
                    @if ( $product->discount_percent != null )
                        <p class="savings">Savings: {{ $product->discount_percent }}%</p>
                    @endif
                    <p class="price-area__seller" data-field="pSeller">Sold and delivered by: <b><a href="/products/seller/{{$product->seller_id}}">{{ $product->sellerInfo->company_name}}</a></b></p>
                    
                    @if ( $product->stock == 1 )
                        <p class="price-area__stock lastOne" data-filed="pStockInfo">last one in stock</p>
                    @elseif ( $product->stock > 1 && $product->stock < 5 )
                        <p class="price-area__stock fewLeft" data-filed="pStockInfo">few items in stock</p>
                    @else
                        <p class="price-area__stock" data-filed="pStockInfo">in stock</p>
                    @endif
                    
                    <button class="addToCart jq-add-to-cart" data-product="{{ $product->product_sku }}" data-quantity="1">
                        <div class="addToCartLoader"></div>
                        <div class="topButtonCover"></div>
                        Add to cart
                    </button>
                    <br>

                    @if ( !empty($favorites) && in_array($product->ean_13, json_decode($favorites)) )
                        <button class="addToFavorites favorites-main jq-remove-from-fav" value="{{$product->ean_13}}">Add to Favorites</button>
                    @else
                        <button class="addToFavorites favorites-main jq-add-to-fav" value="{{$product->ean_13}}">Add to Favorites</button>
                    @endif

                @if ( $has_buyback_offer )
                    <div class="refurb-banner">
                        <div class="refurb-banner__title">
                            <p>Easy BuyBack: receive {{ round((explode('.', $product->list_price)[0])*0.05) }} USD BONUS!</p>
                            <a></a>
                        </div>
                        <p>Select the BuyBack option on the product page, sell your old device and receive {{ round((explode('.', $product->list_price)[0])*0.05) }} USD BONUS!</p>
                        <button>Start evaluation</button>
                    </div>
                @endif
                </div>

                @if ( $has_resealed_offer )
                <div class="refurb-area">
                    <div class="refurb-area__content">
                        <div class="refurb-area__content-image" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                        <div class="refurb-area__content-text">
                            <span>resealed</span>
                            <p>Product showing slight signs of use; packaging in good condition; fine scratches.</p>
                            <div class="refurb__price">
                            @if ( $product->discount_percent != null )
                                <p class="refurb__price-new">NEW: {{ explode('.', $product->sale_price)[0] }}<sup>{{ explode('.', $product->sale_price)[1] }}</sup><small>USD</small></p>
                                <p class="refurb__price-refurb">{{ round((explode('.', $product->sale_price)[0])*0.85) }}<sup>{{ explode('.', $product->sale_price)[1] }}</sup> <small>USD</small></p>
                                <p class="refurb__price-savings">Savings: {{ explode('.', $product->sale_price)[0] - round((explode('.', $product->sale_price)[0])*0.85) }}<sup>00</sup> <small>USD</small></p>
                            @elseif ( $product->discount_percent == null )
                                <p class="refurb__price-new">NEW: {{ explode('.', $product->list_price)[0] }}<sup>{{ explode('.', $product->list_price)[1] }}</sup><small>USD</small></p>
                                <p class="refurb__price-refurb">{{ round((explode('.', $product->list_price)[0])*0.85) }}<sup>{{ explode('.', $product->list_price)[1] }}</sup> <small>USD</small></p>
                                <p class="refurb__price-savings">Savings: {{ explode('.', $product->list_price)[0] - round((explode('.', $product->list_price)[0])*0.85) }}<sup>00</sup> <small>USD</small></p>
                            @endif
                            </div>
                        </div>
                    </div>

                    <div class="refurb-area__buttons">
                        <button class="buyRefurb">Buy Resealed</button>
                    </div>
                    
                    <a class="seeMoreRefurb" href="{{ url()->current() }}#resealed-section">
                        <p>click to see more</p>
                    </a>
                </div>
                @endif
            </div>
        </div>
<!------------>
        <div class="offerBanners">
            <div class="offerBanner">
                <p><b>BEST PRICE:</b>This product has a competitive offer based on constant monitoring.</p><p></p>
            </div>

            @if ( $has_buyback_offer )
                <div class="offerBanner">
                    <p><b>BuyBack {{ round((explode('.', $product->list_price)[0])*0.05) }} USD BONUS:</b>Buy this product, select the BuyBack option on the product page, and receive a bonus. Complete the product self-assessment and send it in.</p><p></p>
                </div>
            @endif

            @if ( $product->discount_percent != null )
                <div class="offerBanner">
                    <p><b>SAVINGS OF {{ $product->discount_percent }}%:</b>Promotion valid until {{date("d M.", strtotime("+30 day"))}} 2026, while stocks last. More information in the terms and conditions.</p><p></p>
                </div>
            @endif
        </div>
<!------------>
    @if ( sizeof($product->prodOffers) > 1 )
        <div class="optional-offers">       
            <div class="other-offers">
                <div class="other-offers__title" id="offers-section">Offers available: {{ sizeof($product->prodOffers)}}</div>
                <div class="other-offers__area">
                    <div class="other-offers__area-carousel">
                    @php
                        $allOffers = $product->prodOffers->sortBy(fn($offer) => $offer->discount_percent !== null ? $offer->sale_price : $offer->list_price);
                        $offersTitles = ['Smallest price', 'Fastest delivery'];
                        $count = 0;
                    @endphp

                    @foreach ( $allOffers as $offer )
                        @php
                            if ( date("l", strtotime("+" . $offer->courierData->time_days . " day")) == "Sunday" ) {
                                $offer_delivery_date = date("l, d M.", strtotime("+" . $offer->courierData->time_days + 1 . " day"));
                            } else {
                                $offer_delivery_date = date("l, d M.", strtotime("+" . $offer->courierData->time_days . " day"));
                            }
                        @endphp


                        <div class="offer">
                            @if ( $count < sizeof($offersTitles) )
                                <div class="offer-title">{{ $offersTitles[$count] }}</div>
                            @else
                                <div class="offer-title">Available offer</div>
                            @endif
                            <div class="offer-area">
                                <div class="offer-area__image" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                                <div class="offer-area__details">
                                    @if ( $offer->sale_price )
                                        <p>{{ explode('.', $offer->sale_price)[0] }}<sup>{{ explode('.', $offer->sale_price)[1] }}</sup><small> USD</small></p>
                                    @else
                                        <p>{{ explode('.', $offer->list_price)[0] }}<sup>{{ explode('.', $offer->list_price)[1] }}</sup><small> USD</small></p>
                                    @endif
                                    <p>Sold by: <b>{{ $offer->sellerInfo->company_name }}</b></p>
                                    <p>from {{ $offer_delivery_date }}</p>
                                    <p>{{ $offer->courierData->courier_name }}:&nbsp;<b>{{ explode('.', $offer->courierData->shipping_cost)[0] }}<sup>{{ explode('.', $offer->courierData->shipping_cost)[1] }}</sup><small>USD</small></b></p>
                                </div>
                                <div class="offer-area__action">
                                    <button class="jq-add-to-cart" data-product="{{ $offer->product_sku }}" data-quantity="1">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        @php
                            $count++;
                        @endphp
                    @endforeach
                    </div>
                    <div class="other-offers__area-prev"></div>
                    <div class="other-offers__area-next"></div>
                </div>
            </div>
        </div>
    @endif
<!------------>
    @if ( $has_resealed_offer )
        <div class="optional-offers">
            <div class="refurb-offer">
                <div class="refurb-offer__title" id="resealed-section">
                    <div>Resealed</div>
                    <p>Sold and delivered by: <b>eMART</b></p>
                    <p>24 months warranty</p>
                    <p>Free returns in 30 days</p>
                </div>
                <div class="refurb-offer__area">
                    <div>
                        <p>resealed</p>
                        <p>Product showing slight signs of use; packaging in good condition; fine scratches on the screen, back, and edges; used accessories.</p>
                    </div>
                    <div>
                    @if ( $product->discount_percent != null )
                        <p>NEW: {{ explode('.', $product->sale_price)[0] }}<sup>{{ explode('.', $product->sale_price)[1] }}</sup><small>USD</small></p>
                        <p>{{ round((explode('.', $product->sale_price)[0])*0.85) }}<sup>{{ explode('.', $product->sale_price)[1] }}</sup> <small>USD</small></p>
                        <p>Savings: {{ explode('.', $product->sale_price)[0] - round((explode('.', $product->sale_price)[0])*0.85) }}<sup>00</sup> <small>USD</small></p>
                    @elseif ( $product->discount_percent == null )
                        <p>NEW: {{ explode('.', $product->list_price)[0] }}<sup>{{ explode('.', $product->list_price)[1] }}</sup><small>USD</small></p>
                        <p>{{ round((explode('.', $product->list_price)[0])*0.85) }}<sup>{{ explode('.', $product->list_price)[1] }}</sup> <small>USD</small></p>
                        <p>Savings: {{ explode('.', $product->list_price)[0] - round((explode('.', $product->list_price)[0])*0.85) }}<sup>00</sup> <small>USD</small></p>
                    @endif
                    </div>
                    <div>
                        <button class="buy-used">Buy Resealed</button>
                    </div>
                </div>
                <div class="refurb-offer__more">
                    <a href="/products/refurbished/all">click to see more</a>
                </div>
            </div>
        </div>
    @endif
    </div>
<!------------>
        <div class="similarProductsContainer">
            <div class="similar-products">
                <p class="similar-products__title">Similar products</p>
                <div class="similar-products__buttons"></div>
                <div class="similar-products__carousel">
                    <div class="similar-products__carousel-ribbon similar-1">
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
        </div>
<!------------>
        <div class="descriptionBar">
            <div class="descriptionNavButtons">
                @if ( sizeof($product->prodOffers) > 1 )
                    <a href="{{ url()->current() }}#offers-section" class="descNavBtn normal">Offers</a>
                @endif
                @if ( $has_resealed_offer )
                    <a href="{{ url()->current() }}#resealed-section" class="descNavBtn normal">Resealed</a>
                @endif
                <a href="{{ url()->current() }}#description-section" class="descNavBtn normal">Description</a>
                <a href="{{ url()->current() }}#specifications-section" class="descNavBtn normal">Specifications</a>
                <a href="{{ url()->current() }}#reviews-section" class="descNavBtn normal gotoReviews">Reviews ({{ sizeof($product->prodReviews) }})</a>
            </div>
        </div>
<!------------>
        <div class="descriptionArea">
            <div class="productDesc">
                <p class="prodDescTitle" id="description-section">Description</p>
                <div class="descArea" data-field="pDescription">
                    @foreach(explode('. ', $product->description) as $phrase)
                        {{ trim($phrase) }}.<br>
                    @endforeach
                </div>
            </div>
            <div class="prodSpecs">
                <p class="prodSpecsTitle" id="specifications-section">Specifications</p>
            <!---->
                <div class="specsLine line-t">
                    <p class="specsMainTitle">General characteristics</p>
                </div>
                <div class="specsLine line-1">
                    <p class="specsTitle">Product title</p>
                    <p class="specsValue" data-field="pTitle">{{ $product->title }}</p>
                </div>
                <div class="specsLine line-2">
                    <p class="specsTitle">Main category</p>
                    <p class="specsValue" data-field="pMainCat">{{ $product->subCategory->parent->cat_name }}</p>
                </div>
                <div class="specsLine line-1">
                    <p class="specsTitle">Sub category</p>
                    <p class="specsValue" data-field="pSubCat">{{ $product->subCategory->cat_name }}</p>
                </div>
                <div class="specsLine line-2">
                    <p class="specsTitle">Brand</p>
                    <p class="specsValue" data-field="pBrand">{{ $product->brand }}</p>
                </div>
                <div class="specsLine line-1 last-line">
                    <p class="specsTitle">Keywords</p>
                    <p class="specsValue" data-field="pLength">{{ $product->keywords }} mm</p>
                </div>
            <!---->
                <div class="specsLine line-t">
                    <p class="specsMainTitle">Technical specifications</p>
                </div>
                 <div class="specsLine line-1">
                    <p class="specsTitle">Product type</p>
                    <p class="specsValue" data-field="pType">{{ $product->product_type }}</p>
                </div>
                <div class="specsLine line-2">
                    <p class="specsTitle">Product material</p>
                    <p class="specsValue" data-field="pLength">{{ $product->product_material }}</p>
                </div>
                <div class="specsLine line-1">
                    <p class="specsTitle">Main color</p>
                    <p class="specsValue" data-field="pColor">{{ $product->main_color }}</p>
                </div>
                <div class="specsLine line-2">
                    <p class="specsTitle">Product length</p>
                    <p class="specsValue" data-field="pLength">{{ $product->length_mm }} mm</p>
                </div>
                <div class="specsLine line-1">
                    <p class="specsTitle">Product width</p>
                    <p class="specsValue" data-field="pWidth">{{ $product->width_mm }} mm</p>
                </div>
                <div class="specsLine line-2">
                    <p class="specsTitle">Product height</p>
                    <p class="specsValue" data-field="pHeight">{{ $product->height_mm }} mm</p>
                </div>
                <div class="specsLine line-1 last-line">
                    <p class="specsTitle">Product weight</p>
                    <p class="specsValue" data-field="pWeight">{{ $product->weight_gr }} gr</p>
                </div>
            <!---->
                <div class="specsLine line-t">
                    <p class="specsMainTitle">Warranty details</p>
                </div>
                <div class="specsLine line-1">
                    <p class="specsTitle">Protect+ Damage and Theft Insurance</p>
                    <p class="specsValue" data-field="pWarranty">+ 12 months</p>
                </div>
                <div class="specsLine line-2">
                    <p class="specsTitle">Warranty for indivituals</p>
                    <p class="specsValue" data-field="pWarranty">{{ $product->warranty_months }} months</p>
                </div>
                <div class="specsLine line-1 last-line">
                    <p class="specsTitle">Warranty for companies</p>
                    <p class="specsValue" data-field="pWarranty">{{ $product->warranty_months / 2 }} months</p>
                </div>  
            <!---->
                <div class="specsLine line-t">
                    <p class="specsMainTitle">Manufacturer details</p>
                </div>
                <div class="specsLine line-1">
                    <p class="specsTitle">Manufacturer name</p>
                    <p class="specsValue" data-field="pManName">{{ $product->manufacturer_name }}</p>
                </div>
                <div class="specsLine line-2">
                    <p class="specsTitle">Manufacturer e-mail</p>
                    <p class="specsValue" data-field="pManMail">{{ $product->manufacturer_email }}</p>
                </div>
                <div class="specsLine line-1 last-line">
                    <p class="specsTitle">Manufacturer address</p>
                    <p class="specsValue" data-field="pManAddr">{{ $product->manufacturer_address }}</p>
                </div>
            <!---->
                <div class="specsLine line-t">
                    <p class="specsMainTitle">EU responsible person details</p>
                </div>
                <div class="specsLine line-1">
                    <p class="specsTitle">EU responsible name</p>
                    <p class="specsValue" data-field="pEuName">{{ $product->eu_responsible_name }}</p>
                </div>
                <div class="specsLine line-2">
                    <p class="specsTitle">EU responsible e-mail</p>
                    <p class="specsValue" data-field="pEuMail">{{ $product->eu_responsible_email }}</p>
                </div>
                <div class="specsLine line-1 last-line">
                    <p class="specsTitle">EU responsible address</p>
                    <p class="specsValue" data-field="pEuAddr">{{ $product->eu_responsible_address }}</p>
                </div>
            </div>
            <p class="productWarning">eMART.click makes constant efforts to maintain the accuracy of the information on this page. Rarely may these contain inaccuracies: the photo is for informational purposes and may contain accessories not included in the standard packages, some specifications may be modified by the manufacturer without notice or may contain operating errors. All promotions present on the site are valid while stocks last. In accordance with the provisions of OUG 140/2021, products benefit from a legal guarantee of conformity of 24 months, with the exception of digital content or digital services, in which case the legal guarantee of conformity is 60 months, according to OUG 141/2021. The previously mentioned provisions are not applicable to food products.</p>
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
    <div class="reviews">
        @if ( $product->prodReviews->count() > 0 )

        @php
            $total = $product->prodReviews->count();
            $fiveStar   = $product->prodReviews->where('rating', 5)->count();
            $fourStar   = $product->prodReviews->where('rating', 4)->count();
            $threeStar  = $product->prodReviews->where('rating', 3)->count();
            $twoStar    = $product->prodReviews->where('rating', 2)->count();
            $oneStar    = $product->prodReviews->where('rating', 1)->count();
        @endphp

            <div class="reviews-title" id="reviews-section">Reviews <small>({{ sizeof($product->prodReviews) }} reviews)</small></div>
            <div class="reviews-summary">
                <div class="reviews-summary__rating">
                    <div class="reviews-summary__rating-area">
                        <p>{{ round($product->prodReviews->avg('rating'), 2) }}</p>
                        <div class="big-rating">
                            <div class="big-stars-empty gray"></div>
                            <div class="big-stars-filled yellow" style="width: {{ 100/( 5 /$product->prodReviews->avg('rating') ) }}%"></div>
                        </div>
                        <p>{{ sizeof($product->prodReviews) }} reviews</p>
                    </div>
                </div>
                <div class="reviews-summary__chart">
                    <div class="reviews-summary__chart-row">
                        <p class="row-rating rating-chart-filter" value="5">5 stars</p>
                        <div class="row-background">
                             <div class="row-filled green" style="width: {{ $percent = $total > 0 ? round(($fiveStar / $total) * 100) : 0; }}%"></div>
                        </div>
                        <p class="row-total rating-chart-filter" value="5">({{ $product->prodReviews->where('rating', 5)->count() }})</p>
                    </div>
                    <div class="reviews-summary__chart-row">
                        <p class="row-rating rating-chart-filter" value="4">4 stars</p>
                        <div class="row-background">
                            <div class="row-filled lightgreen" style="width: {{ $percent = $total > 0 ? round(($fourStar / $total) * 100) : 0; }}%"></div>
                        </div>
                        <p class="row-total rating-chart-filter" value="4">({{ $product->prodReviews->where('rating', 4)->count() }})</p>
                    </div>
                    <div class="reviews-summary__chart-row">
                        <p class="row-rating rating-chart-filter" value="3">3 stars</p>
                        <div class="row-background">
                            <div class="row-filled yellow" style="width: {{ $percent = $total > 0 ? round(($threeStar / $total) * 100) : 0; }}%"></div>
                        </div>
                        <p class="row-total rating-chart-filter" value="3">({{ $product->prodReviews->where('rating', 3)->count() }})</p>
                    </div>
                    <div class="reviews-summary__chart-row">
                        <p class="row-rating rating-chart-filter" value="2">2 stars</p>
                        <div class="row-background">
                            <div class="row-filled orange" style="width: {{ $percent = $total > 0 ? round(($twoStar / $total) * 100) : 0; }}%"></div>
                        </div>
                        <p class="row-total rating-chart-filter" value="2">({{ $product->prodReviews->where('rating', 2)->count() }})</p>
                    </div>
                    <div class="reviews-summary__chart-row">
                        <p class="row-rating rating-chart-filter" value="1">1 star</p>
                        <div class="row-background">
                            <div class="row-filled red" style="width: {{ $percent = $total > 0 ? round(($oneStar / $total) * 100) : 0; }}%"></div>
                        </div>
                        <p class="row-total rating-chart-filter" value="1">({{ $product->prodReviews->where('rating', 1)->count() }})</p>
                    </div>
                </div>
                <div class="reviews-summary__checked">
                    <div class="reviews-summary__checked-area">
                        <div class="check-logo"></div>
                        <p>{{ $product->prodReviews->whereNotNull('user_id')->count() }}</p>
                        <p>Reviews from eMART buyers</p>
                    </div>
                </div>
                <div class="reviews-summary__liked">
                     <div class="reviews-summary__liked-area">
                        <div class="liked-logo"></div>
                        <p>{{ round((($fiveStar + $fourStar + $threeStar) / $product->prodReviews->count())*100) }}%</p>
                        <p>eMART buyers recommend it</p>
                    </div>
                </div>
                <div class="reviews-summary__add">
                    <div class="reviews-summary__add-area">
                        <p>Own or have used the product?</p>
                        <p>Share your opinion by rating the product.</p>
                        <div>
                            <div>
                                <span class="gray 1-star add-review"></span>
                                <span class="gray 2-star add-review"></span>
                                <span class="gray 3-star add-review"></span>
                                <span class="gray 4-star add-review"></span>
                                <span class="gray 5-star add-review"></span>
                            </div>
                            <p class=rate-it>Rate it</p>
                        </div>
                        <button class="add-review">Add a review</button>
                    </div>  
                </div>
            </div>
        <!---->
            <div class="reviews-filters">
                <div class="reviews-filters__left">
                <select class="std-in reSort_1" name="order" id="reviews-order" aria-label="Order reviews by">
                    <option value="created_at:desc">Newest</option>
                    <option value="created_at:asc">Oldest</option>
                    <option value="rating:desc">Best</option>
                    <option value="rating:asc">Worst</option>
                </select>
                <select class="std-in reSort_2" name="sort" id="reviews-sort" aria-label="Sort reviews by">
                    <option value="rating:all">All reviews</option>
                    <option value="rating:1">1 star reviews</option>
                    <option value="rating:2">2 star reviews</option>
                    <option value="rating:3">3 star reviews</option>
                    <option value="rating:4">4 star reviews</option>
                    <option value="rating:5">5 star reviews</option>
                </select>
                <button class="std-in reSort_3" value="any">eMART buyer reviews only</button>
                </div>
                <div class="reviews-filters__right">
                    <input type="text" class="searchReviewsInput" placeholder="Search in reviews">
                    <button type="submit" class="searchReviewsButton" aria-label="search reviews"></button>
                </div>
            </div>
            <div class="reviewsContainer">
                @php
                    $colors = ['red', 'green', 'blue', 'yellow', 'orange', 'violet', 'lightgreen'];
                    $limit = 0;
                @endphp

                @foreach($product->prodReviews as $review)
                    @if ( $limit < 10 )
                    <div class="oneReview">
                        <div class="user">
                            <div class="user-img {{$colors[rand(0, 6)]}}">
                                <p>{{ explode(' ', $review->user_name)[0][0] }}</p>
                            </div>
                            <p class="user-name">{{ $review->user_name }}</p>
                            <p class="review-date">{{ $review->created_at->format('d M Y') }}</p>
                            @if ( $review->user_id )
                                <p class="review-type">Verified account</p>
                            @endif
                        </div>

                        <div class="review-body">
                            <p class="review-body__title">{{ $review->title }}</p>
                            <div class="review-body__stars">
                                <div class="review-stars">
                                    <div class="review-stars__empty gray"></div>
                                    <div class="review-stars__filled yellow" style="width: {{ 100/( 5 / $review->rating ) }}%"></div>
                                </div>
                                @if ( $review->user_id )
                                    <p class="customer-label">Review from eMART customer</p>
                                @endif
                            </div>
                            <p class="review-body__text">{{ $review->description }}</p>
                            <div class="review-body__buttons">
                                <button>{{ $review->likes }}</button>
                                <button>Add a comment</button>
                            </div>
                        </div>
                    </div>
                    @php
                        $limit++;
                    @endphp
                @endif
                @endforeach
            </div>
        </div>
        @else 
        <div class="reviews-title" id="reviews-section">Reviews <small>(0 reviews)</small></div>
            <div class="reviews-summary">
                <div class="reviews-summary__rating">
                    <div class="reviews-summary__rating-area">
                        <p>&nbsp;</p>
                        <div class="big-rating">
                            <div class="big-stars-empty gray"></div>
                            <div class="big-stars-filled yellow" style="width: 0%"></div>
                        </div>
                        <p>0 reviews</p>
                    </div>
                </div>
                <div class="reviews-summary__chart">
                    <div class="reviews-summary__chart-row">
                        <p class="row-rating">5 stars</p>
                        <div class="row-background">
                             <div class="row-filled green" style="width: 0%"></div>
                        </div>
                        <p class="row-total">(0)</p>
                    </div>

                    <div class="reviews-summary__chart-row">
                        <p class="row-rating">4 stars</p>
                        <div class="row-background">
                            <div class="row-filled lightgreen" style="width: 0%"></div>
                        </div>
                        <p class="row-total">(0)</p>
                    </div>

                    <div class="reviews-summary__chart-row">
                        <p class="row-rating">3 stars</p>
                        <div class="row-background">
                            <div class="row-filled yellow" style="width: 0%"></div>
                        </div>
                        <p class="row-total">(0)</p>
                    </div>

                    <div class="reviews-summary__chart-row">
                        <p class="row-rating">2 stars</p>
                        <div class="row-background">
                            <div class="row-filled orange" style="width: 0%"></div>
                        </div>
                        <p class="row-total">(0)</p>
                    </div>

                    <div class="reviews-summary__chart-row">
                        <p class="row-rating">1 star</p>
                        <div class="row-background">
                            <div class="row-filled red" style="width: 0%"></div>
                        </div>
                        <p class="row-total">(0)</p>
                    </div>
                </div>
                <div class="reviews-summary__checked">
                    <div class="reviews-summary__checked-area">
                        <div class="check-logo"></div>
                        <p>&nbsp;</p>
                        <p>Reviews from eMART buyers</p>
                    </div>
                </div>
                <div class="reviews-summary__liked">
                     <div class="reviews-summary__liked-area">
                        <div class="liked-logo"></div>
                        <p>&nbsp;</p>
                        <p>eMART buyers recommend it</p>
                    </div>
                </div>
                <div class="reviews-summary__add">
                    <div class="reviews-summary__add-area">
                        <p>Own or have used the product?</p>
                        <p>Share your opinion by rating the product.</p>
                        <div>
                            <div>
                                <span class="gray 1-star add-review"></span>
                                <span class="gray 2-star add-review"></span>
                                <span class="gray 3-star add-review"></span>
                                <span class="gray 4-star add-review"></span>
                                <span class="gray 5-star add-review"></span>
                            </div>
                            <p class=rate-it>Rate it</p>
                        </div>
                        <button class="add-review">Add a review</button>
                    </div>
                </div>
            </div>
            <div class="reviews-filters" style="display: none;">
                <div class="reviews-filters__left">
                <select class="std-in reSort_1" name="order" id="reviews-order" aria-label="Order reviews by">
                    <option value="created_at:desc">Newest</option>
                    <option value="created_at:asc">Oldest</option>
                    <option value="rating:desc">Best</option>
                    <option value="rating:asc">Worst</option>
                </select>
                <select class="std-in reSort_2" name="sort" id="reviews-sort" aria-label="Sort reviews by">
                    <option value="rating:all">All reviews</option>
                    <option value="rating:1">1 star reviews</option>
                    <option value="rating:2">2 star reviews</option>
                    <option value="rating:3">3 star reviews</option>
                    <option value="rating:4">4 star reviews</option>
                    <option value="rating:5">5 star reviews</option>
                </select>
                <button class="std-in reSort_3" value="any">eMART buyer reviews only</button>
                </div>
                <div class="reviews-filters__right">
                    <input class="searchInReviews" type="text" placeholder="Search in reviews">
                    <button type="submit" aria-label="search reviews"></button>
                </div>
            </div>
        @endif
    </div>
<!------------>
    <div class="review-backdrop">
        <div class="review-modal">
            <button class="close-review-modal"></button>
            <div class="review-modal__top">
                <div class="product-image" style="background-image: url('/storage/products/{{ $product->image }}')"></div>
                <div class="product-title">
                    <p><b>Add a review for:</b></p>
                    <p>{{ $product->title }}</p>
                </div>
            </div>
            <div class="review-modal__middle">
                <div class="review-modal__middle-select">
                    <p>Choose rating:</p>
                    <div>
                        <span class="gray modal-star rate" value="Very bad"></span>
                        <span class="gray modal-star rate" value="Not good"></span>
                        <span class="gray modal-star rate" value="Acceptable"></span>
                        <span class="gray modal-star rate" value="Good"></span>
                        <span class="gray modal-star rate" value="Excellent"></span>
                    </div>
                </div>
                 <div class="review-modal__middle-name">
                    <p><b>Your name:</b></p>
                @if ( Auth::check() ? ( Auth::user()->account_role == 'client' ? 1 : 0 ) : 0 )
                    <input class="modal-review-name border-gray input-disabled" type="text" placeholder="Enter you user name" value="{{ Auth::user()->first_name . ' ' .Auth::user()->last_name }}">
                @else
                    <input class="modal-review-name border-gray" type="text" placeholder="Enter you user name">
                @endif
                </div>
                <div class="review-modal__middle-title">
                    <p><b>Review title:</b> (optional)</p>
                    <input class="modal-review-title" type="text" placeholder="Use a suggestion or create your own title">
                    <div>
                        <span class="select-title">Excellent</span>
                        <span class="select-title">Very pleased</span>
                        <span class="select-title">I recommend it</span>
                        <span class="select-title">Amazing</span>
                        <span class="select-title">Exceeded expectations</span>
                    </div>
                </div>
                <div class="review-modal__middle-review">
                    <p>Review:</p>
                    <textarea class="modal-review-description border-gray" name="" id="" placeholder="Let us know if you liked what you got?"></textarea>
                </div>
                <div class="review-modal__middle-picture">
                    <p><b>Add real pictures with the product to help others!</b> (optional)</p>
                    <span>Click here to add images</span>
                </div>
            </div>
            <div class="review-modal__bottom">
                <div class="review-modal__bottom-text">
                    <p><b>Problems with product or delivery? </b><a href="">Send a request</a></p>
                    <p>By publishing the review you agree with eMART website's <a href="">terms and consitions</a>.</p>
                </div>
            <button class="add-new-review">Add a review</button>
        </div>
    </div>
<!------------>

</div>

<!------------>
        <div class="similarProductsContainer">
        <!---->
            <div class="similar-products">
                <p class="similar-products__title">Similar products</p>
                <div class="similar-products__buttons"></div>
                <div class="similar-products__carousel">
                    <div class="similar-products__carousel-ribbon similar-2">
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
                    <div class="similar-products__carousel-ribbon others-2">
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
    </div>
    

    <x-slot:scripts>
        <script src="{{ asset('/resources/js/client/prod-listing.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>



<script>
    $('.summary-to-cart').addClass('jq-add-to-cart').data({ product: @json($product->product_sku), quantity: 1});
</script>
