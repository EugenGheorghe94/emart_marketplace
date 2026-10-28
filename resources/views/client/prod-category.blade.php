{{-- client/prod-category.blade.php --}}

<x-layouts.client-layout>
    <x-slot:styles>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite('public/resources/css/client/prod-category.scss')
        @if ( !empty($thisSubCategory) )
            <title>{{ $thisSubCategory->cat_name }}, add to cart and order - eMART.click</title>
            <meta name="description" content="{{ $thisSubCategory->cat_name }} category page, all products">
        @elseif ( !empty($thisCategory) )
            <title>{{ $thisCategory->cat_name }}, add to cart and order - eMART.click</title>
            <meta name="description" content="{{ $thisCategory->cat_name }} category page, all products">
        @else
            <title>{{ $title }}, add to cart and order - eMART.click</title>
            <meta name="description" content="{{ $title }} products page">
        @endif
    </x-slot:styles>
    

    @php
        $numbers = [];

        if( !empty($subCategories) ) {
            for ($k = 0; $k < $subCategories->count(); $k++) {
                array_push($numbers, rand(200, 1000));
            };
        };
        
        $n = 0;
    @endphp

    <script>

    const USER_ID = "{{ Auth::check() ? ( Auth::user()->account_role == 'client' ? Auth::user()->id : '' )  : '' }}";

    </script>


    <div class="mainSectionDiv">


        @if( !empty($thisSubCategory->parent->parent) )
            <div class="productPath">
                <p>{{ $thisSubCategory->parent->parent->cat_name }}</p>
                <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                <a href="/products/category/{{ $thisSubCategory->parent->url_slug }}">{{ $thisSubCategory->parent->cat_name }}</a>
                <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                <a href="/products/subcategory/{{ $thisSubCategory->url_slug }}">{{ $thisSubCategory->cat_name }}</a>
            </div>
        @elseif( !empty($thisCategory->parent) )
            <div class="productPath">
                <p>{{ $thisCategory->parent->cat_name }}</p>
                <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                <a href="/products/category/{{ $thisCategory->url_slug }}">{{ $thisCategory->cat_name }}</a>
            </div>
        @else
            <div style="height: 16px;"></div>
        @endif


    <div class="mainContainer">
        <div class="filterContainer">


        @if( count($products) > 0 )
            @if( !empty($subCategories) )
                <div class="filterSection categories">
                @if ( !empty($thisSubCategory) )
                 <p class="sectionTitleBlue">{{ $thisSubCategory->parent->cat_name }} ({{array_sum($numbers)}})</p>
                    @foreach($subCategories as $sub_category)
                        @if ( $sub_category->cat_name == $thisSubCategory->cat_name )
                            <a href="products/subcategory/{{$sub_category->url_slug}}" class="catFilterSelected">{{ $sub_category->cat_name }} ({{ $numbers[$n] }})</a>
                            @php $title_number = $numbers[$n]; @endphp
                        @else
                            <a href="products/subcategory/{{$sub_category->url_slug}}" class="catFilter">{{ $sub_category->cat_name }} ({{ $numbers[$n] }})</a>
                        @endif
                    @php $n++; @endphp
                    @endforeach
                @else
                    <p class="sectionTitleBlue">{{ $thisCategory->cat_name }} ({{array_sum($numbers)}})</p>
                    @foreach($subCategories as $sub_category)
                        <a href="products/subcategory/{{$sub_category->url_slug}}" class="catFilter">{{ $sub_category->cat_name }} ({{ $numbers[$n] }})</a>
                    @php $title_number = array_sum($numbers); @endphp
                    @php $n++; @endphp
                    @endforeach
                @endif
                </div>
            @endif
        @else
            @if( !empty($subCategories) )
                <div class="filterSection categories">
                @if ( !empty($thisSubCategory) )
                 <p class="sectionTitleBlue">{{ $thisSubCategory->parent->cat_name }} (0)</p>
                    @foreach($subCategories as $sub_category)
                        @if ( $sub_category->cat_name == $thisSubCategory->cat_name )
                            <a href="products/subcategory/{{$sub_category->url_slug}}" class="catFilterSelected">{{ $sub_category->cat_name }} (0)</a>
                        @else
                            <a href="products/subcategory/{{$sub_category->url_slug}}" class="catFilter">{{ $sub_category->cat_name }} (0)</a>
                        @endif
                    @endforeach
                @else
                    <p class="sectionTitleBlue">{{ $thisCategory->cat_name }} (0)</p>
                    @foreach($subCategories as $sub_category)
                        <a href="products/subcategory/{{$sub_category->url_slug}}" class="catFilter">{{ $sub_category->cat_name }} (0)</a>
                    @endforeach
                @endif
                </div>
            @endif
        @endif


            <button class="attributes delete-all">Delete all fiters</button>

            @if( count($products) > 0)
                <div class="filterSection attributes">
                    <p class="sectionTitle">Delivery time:</p>
                    <p class="minimize"></p>
                    <div class="side-filters delivery_time"></div>
                </div>

                <div class="filterSection attributes">
                    <p class="sectionTitle">Offer type</p>
                    <p class="minimize"></p>
                    <div class="side-filters offer_type"></div>
                </div>

                <div class="filterSection attributes">
                    <p class="sectionTitle">Minimum rating:</p>
                    <p class="minimize"></p>
                    <div class="side-filters minimum_rating"></div>
                </div>

                @if( !empty($thisCategory) )
                    <div class="filterSection attributes">
                        <p class="sectionTitle">Product type:</p>
                        <p class="minimize"></p>
                        <div class="side-filters product_type"></div>
                    </div>
                @endif
            
            
                <div class="filterSection attributes">
                    <p class="sectionTitle">Brand:</p>
                    <p class="minimize"></p>
                    <div class="side-filters brand_name"></div>
                </div>
                

                <div class="filterSection attributes">
                    <p class="sectionTitle">Warranty:</p>
                    <p class="minimize"></p>
                    <div class="side-filters warranty_period"></div>
                </div>

                <div class="filterSection attributes">
                    <p class="sectionTitle">Main color:</p>
                    <p class="minimize"></p>
                    <div class="side-filters main_color"></div>
                </div>

                <div class="filterSection attributes">
                    <p class="sectionTitle">Price range:</p>
                    <p class="minimize"></p>
                    <div class="side-filters price_range"></div>
                </div>

                <div class="filterSection attributes">
                    <p class="sectionTitle">Sold and delivery by:</p>
                    <p class="minimize"></p>
                    <div class="side-filters company_name"></div>
                </div>
            @endif
        </div>

        <div class="main-content-area">
            <div class="top-filters">
                <div class="top-filters__title">
                    @if( count($products) > 0 )
                        @if ( !empty($thisSubCategory) )
                            <p class="topTitle">{{ $thisSubCategory->cat_name }}&nbsp;<small>({{ $title_number }} products)</small></p>
                        @elseif ( !empty($thisCategory) )
                            <p class="topTitle">{{ $thisCategory->cat_name }}&nbsp;<small>({{ $title_number }} products)</small></p>
                        @else
                            <p class="topTitle">{{ $title }}&nbsp;<small>({{ $products->count() }} products)</small></p>
                        @endif
                    @else
                        @if ( !empty($thisSubCategory) )
                            <p class="topTitle">{{ $thisSubCategory->cat_name }}&nbsp;<small>(0 products)</small></p>
                        @elseif ( !empty($thisCategory) )
                            <p class="topTitle">{{ $thisCategory->cat_name }}&nbsp;<small>(0 products)</small></p>
                        @else
                            <p class="topTitle">{{ $title }}&nbsp;<small>(0 products)</small></p>
                        @endif
                    @endif
                    <span>How the results are ordered</span>
                </div>

                <div class="top-filters__sort">
                    <div class="pagination-filters">
                        <label>Sort by:
                            <div class="sort-outline">
                                <select class="sort-filter">
                                    <option value="views=desc" selected>Most relevant</option>
                                    <option value="created_at=desc">Newest</option>
                                    <option value="main_price=asc">Price ascending</option>
                                    <option value="main_price=desc">Price descending</option>
                                    <option value="prod_reviews_count=desc">Reviews number</option>
                                    <option value="discount_percent=desc">Discount %</option>
                                </select>
                            </div>
                        </label>
            

                        <label>Products:
                            <div class="sort-outline">
                                <select name="" id="pagination">
                                    <option class="per-page" value="20" selected >20 per page</option>
                                    <option class="per-page" value="40"          >40 per page</option>
                                    <option class="per-page" value="60"          >60 per page</option>
                                </select>
                            </div>
                        </label>
                    </div>


                    <div class="product-display-type">
                        <label>Display:
                            <div>
                                <button class="list-products"></button>
                                <button class="grid-products pressed"></button>
                            </div>
                        </label>
                    </div>


                </div>
            </div>

            <div class="mainProductsArea">
                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>

                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>

                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>

                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>

                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>
                <div class="product empty"></div>
            </div>

            @if( count($products) > 0 )
                <div class="pagination">
                    <p class="pagination-details"></p>
                    <div class="pagination-buttons"></div>
                </div>
            @else
                <div class="emptyCategory">
                    <div></div>
                    <br>
                    <br>
                    <p>Hmm, no products in this category.</p>
                    <p>Here are some recommendations that might inspire you.</p>
                </div>
            @endif
            
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
        <script src="{{ asset('/resources/js/client/prod-category.js') }}"></script>
    </x-slot:scripts>
</x-layouts.client-layout>