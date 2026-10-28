$(document).ready(function() {



    ////////////////////////////////////////////////////////////////////
    // Initial initialization of global variables
    var PAGE_NUMBER = 1;        // for pagination
    var PRICE_RANGE_SET = 0;    // for initial price range append
    var NO_FILTERS = 0;         // for no selection refetch
    var price_range = [];       // for price range filter
    var prices_array = [];      // for price ranges
    var PRICE = {};             // for price range count reset
    var FILTER_URL = `${window.location.pathname}/deliveries:/offers:/ratings:/types:/brands:/warranties:/colors:/prices:/sellers:/sort:views=desc`;
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Show top search area + menu after scroll
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 600 ) {
            

            // Pops-up sticky top navbar and makes menu responsive
            $('.mainHeaderArea').removeClass('header-hidden');
            $('.mainHeaderArea').addClass('header-sticky');
            $('.topHeaderArea').addClass('sticky-grid');
            $('.mainMenuList').addClass('menu-sticky');
            $('.topBurgerMenu').removeClass('hidden');
            $('.smallGradientLine').show();
            $('.menuButton').on('mouseover');
            $('.mainMenuList').on('mouseleave');
            $(window).on('click');


            // Shows menu on mouse enter
            $(document).on('mouseenter', '.topBurgerMenu', function() {
                $(this).removeClass('burger').addClass('close');
                $('.mainMenuList').slideDown('fast')
            });


            // Hides menu on mouse leave
            $('.mainMenuList').mouseleave( function () {
                $('.topBurgerMenu').removeClass('close').addClass('burger');
                $(this).slideUp('fast')
            });


            // Hides menu on mouse click anywhere
            $(window).on('click', function () {
                $('.topBurgerMenu').removeClass('close').addClass('burger');
                $('.mainMenuList').slideUp('fast');
            });


        } else {


            // If scrolled back to top, resets everything
            $('.mainHeaderArea').removeClass('header-hidden');
            $('.mainHeaderArea').removeClass('header-sticky');
            $('.topHeaderArea').removeClass('sticky-grid');
            $('.mainMenuList').removeClass('menu-sticky');
            $('.topBurgerMenu').addClass('hidden');
            $('.smallGradientLine').hide();
            $(window).off('click');
        };
    });


    // Shows sticky header out of view for smooth transition in view
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.mainHeaderArea').addClass('header-hidden')
        }
    });
    ////////////////////////////////////////////////////////////////////

    

    ////////////////////////////////////////////////////////////////////
    // Adding options to side-filters
    function fillFilters(filterURL, lastFilterUsed, alreadyChecked) {
        $.ajax({
            url: filterURL,
            method: 'GET',
            success(response) {


                // Initial filter options objects
                var DELIVERY_TIME = {}, 
                    OFFER_TYPE = {}, 
                    MINIMUM_RATING = {}, 
                    PRODUCT_TYPE = {}, 
                    BRAND = {}, 
                    WARRANTY = {},
                    MAIN_COLOR = {},
                    SELLER = {}


                // Making price ranges
                if( PRICE_RANGE_SET == 0 ) {
                    $.each(response.products, function(index, product){price_range.push(product.main_price);});
                    let min_price = Math.floor((Math.min(...price_range)) / 100 ) * 100;
                    let max_price = Math.ceil((Math.max(...price_range)) / 100) * 100;
                    let module = Math.ceil(((max_price - min_price) / 20) / 100) * 100;
                    for(let i = 0; i < 20; i++){prices_array.push([min_price + (module * i), min_price + (module * (i+1))]);};
                } else {
                    Object.keys(PRICE).forEach(function(key) { PRICE[key] = 0 });
                }
               
                

                // Making filter options
                $.each(response.products, function(index, product) {
                    DELIVERY_TIME[product.courier_data.time_days + ' day(s)'] ? DELIVERY_TIME[product.courier_data.time_days + ' day(s)'] += 1 : DELIVERY_TIME[product.courier_data.time_days + ' day(s)'] = 1;
                    OFFER_TYPE.premio = (OFFER_TYPE.premio || 0) + (product.premio === 1 ? 1 : 0);
                    OFFER_TYPE.discount = (OFFER_TYPE.discount || 0) + (product.discount_percent ? 1 : 0); 
                    if ( product.prod_reviews_avg_rating != null ) {
                        for(let i = 1; i <= 5; i++) {
                            MINIMUM_RATING[i] = (MINIMUM_RATING[i] || 0) + ( Math.floor(product.prod_reviews_avg_rating) >= i ? 1 : 0 )
                        }
                    }
                    PRODUCT_TYPE[product.sub_category.cat_name + ' = ' + product.sub_category.id] ? PRODUCT_TYPE[product.sub_category.cat_name + ' = ' + product.sub_category.id] += 1 : PRODUCT_TYPE[product.sub_category.cat_name + ' = ' + product.sub_category.id] = 1;
                    BRAND[product.brand] ? BRAND[product.brand] += 1 : BRAND[product.brand] = 1;
                    product.warranty_months != null && (WARRANTY[product.warranty_months + ' months'] ? WARRANTY[product.warranty_months + ' months'] += 1 : WARRANTY[product.warranty_months + ' months'] = 1);
                    if(product.main_color != null) {$.each(product.main_color.split(', '), function(index, color) { MAIN_COLOR[color.toLowerCase()] ? MAIN_COLOR[color.toLowerCase()] += 1 : MAIN_COLOR[color.toLowerCase()] = 1; })};
                    

                    if( PRICE_RANGE_SET == 1 ) {
                        for( let n = 0; n < prices_array.length; n++ ) {
                            if ( product.main_price > (prices_array[n])[0] && product.main_price < (prices_array[n])[1] ) {
                                PRICE[(prices_array[n])[0] + ' - ' + (prices_array[n])[1]] ? PRICE[(prices_array[n])[0] + ' - ' + (prices_array[n])[1]] += 1 : PRICE[(prices_array[n])[0] + ' - ' + (prices_array[n])[1]] = 1;
                                break;
                            }
                        }

                    } else if( PRICE_RANGE_SET == 0 ) {
                        for( let n = 0; n < 20; n++ ) {
                            if ( product.main_price > (prices_array[n])[0] && product.main_price < (prices_array[n])[1] ) {
                                PRICE[(prices_array[n])[0] + ' - ' + (prices_array[n])[1]] ? PRICE[(prices_array[n])[0] + ' - ' + (prices_array[n])[1]] += 1 : PRICE[(prices_array[n])[0] + ' - ' + (prices_array[n])[1]] = 1;
                            }
                        }
                    }
                    SELLER[product.seller_info.company_name + ' = ' + product.seller_info.id] ? SELLER[product.seller_info.company_name + ' = ' + product.seller_info.id] += 1 : SELLER[product.seller_info.company_name + ' = ' + product.seller_info.id] = 1;
                });


                // Matching container classes with options objects
                const FILTERS = {
                    delivery_time: DELIVERY_TIME,
                    offer_type: OFFER_TYPE,
                    minimum_rating: MINIMUM_RATING,
                    product_type: PRODUCT_TYPE,
                    brand_name: BRAND,
                    warranty_period: WARRANTY,
                    main_color: MAIN_COLOR, 
                    price_range: PRICE, 
                    company_name: SELLER
                };


                // Does not update last filter used if any selection
                NO_FILTERS == 0 ? delete FILTERS[lastFilterUsed] : undefined;

                
                $.each(FILTERS, function(section, filters) {


                    // Sort filter options ascending
                    const sorted = Object.fromEntries(
                        Object.entries(filters).sort((a, b) => {
                            const numA = parseFloat(a[0]);
                            const numB = parseFloat(b[0]);
                            if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
                            return a[0].localeCompare(b[0]);
                        })
                    );


                    // Clears previous filter options
                    $(`.${section}`).html('');


                    // Appending each filter options
                    $.each(sorted, function(option, count) {
                        switch (section) {
                            case "delivery_time":
                                $(`.${section}`)
                                .append(
                                    $('<div>')
                                    .addClass('checkboxArea delivery-filter')
                                    .html(`<label><input type="checkbox" value="${option.split(' ')[0]}d">${option} (${count})</label>`)
                                );
                                break;


                            case "offer_type":
                                if ( option === 'premio' ) {
                                    $(`.${section}`)
                                    .append(
                                        $('<div>')
                                        .addClass('checkboxArea offer-filter')
                                        .html(`<label><input type="checkbox" value="${option.split(' ')[0]}=0">${option} (${count})</label>`)
                                    );
                                };
                                if ( option === 'discount' ) {
                                    $(`.${section}`)
                                    .append(
                                        $('<div>')
                                        .addClass('checkboxArea offer-filter')
                                        .html(`<label><input type="checkbox" value="${option.split(' ')[0]}_percent=null">${option} (${count})</label>`)
                                    );
                                    /*
                                    $('.offer-select')
                                    .append(
                                        $('<option>')
                                        .attr({value: `${option.split(' ')[0]}_percent=null`})
                                        .text(option)
                                    );
                                    */
                                };
                                break;


                            case "minimum_rating":
                                $(`.${section}`)
                                .append(
                                    $('<div>')
                                    .addClass('checkboxArea rating-filter')
                                    .html(`
                                        <label>
                                            <input type="checkbox" name="" id="" value="${option}-5">
                                            <div>
                                                <div class="stars-empty gray"></div>
                                                <div class="stars-filled yellow" style="width: ${100/(5/option)}%"></div>
                                            </div>
                                            (${count})
                                        <label>
                                    `)
                                );
                                break;


                            case "product_type":
                                $(`.${section}`)
                                .append(
                                    $('<div>')
                                    .addClass('checkboxArea type-filter')
                                    .html(`<label><input type="checkbox" value="${option.split(' = ')[1]}">${option.split(' = ')[0]} (${count})</label>`)
                                );
                                break;


                            case "brand_name":
                                $(`.${section}`)
                                .append(
                                    $('<div>')
                                    .addClass('checkboxArea brand-filter')
                                    .html(`<label><input type="checkbox" value="${option}">${option} (${count})</label>`)
                                );
                                break;


                            case "warranty_period":
                                $(`.${section}`)
                                .append(
                                    $('<div>')
                                    .addClass('checkboxArea warranty-filter')
                                    .html(`<label><input type="checkbox" value="${option.split(' ')[0]}m">${option} (${count})</label>`)
                                );
                                break;


                            case "main_color":
                                $(`.${section}`)
                                .append(
                                    $('<div>')
                                    .addClass('checkboxArea color-filter')
                                    .html(`<label><input type="checkbox" value="${option}">${option} (${count})</label>`)
                                );
                                break;


                            case "price_range":
                                $(`.${section}`)
                                .append(
                                    $('<div>')
                                    .addClass('checkboxArea price-filter')
                                    .html(`<label><input type="checkbox" value="${option.split(' - ')[0]+'-'+option.split(' - ')[1]}">${option} (${count})</label>`)
                                );
                                PRICE_RANGE_SET = 1;
                                break;


                            case "company_name":
                                $(`.${section}`)
                                .append(
                                    $('<div>')
                                    .addClass('checkboxArea seller-filter')
                                    .html(`<label><input type="checkbox" value="${option.split(' = ')[1]}">${option.split(' = ')[0]} (${count})</label>`)
                                );
                                break; 
                        }
                    });
                    
                });


                // Adding previous checked filters
                $.each(alreadyChecked, function(index, option) {
                    $(`input[value="${option}"]`).prop('checked', true)
                });
            }
        })
        
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Initial filter fetch
    fillFilters(FILTER_URL);
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Checkboxes logic
    $(document).on('change', '.checkboxArea, .sort-filter', function() {


        // If any options checked show delete button
        if( $('input:checked').length > 0 ) { $('.delete-all').fadeIn('fast'); NO_FILTERS = 0; } 
        

        // If no options checked hide delete button
        if( $('input:checked').length == 0 ) { $('.delete-all').fadeOut('fast'); NO_FILTERS = 1; }


        // Getting already selected options to reselect after fillFilters
        var CHECKED = $('input:checked').map(function() { return this.value; }).get();

       
        // Functions to get selected options from user clicked filter
        function getOpt(filterName) {
            return $(`.${filterName}`).find('input[type="checkbox"]:checked').map(function() {return $(this).val();}).get();};


        // Functions to get selected options from user clicked filter
        function getSel(filterName) {
            return $(`.${filterName}`).find('option:selected').map(function() {return $(this).val();}).get();};


        // Making url with filters selected
        FILTER_URL = `${window.location.pathname}/deliveries:${getOpt("delivery-filter")}/offers:${getOpt("offer-filter")}/ratings:${getOpt("rating-filter")}/types:${getOpt("type-filter")}/brands:${getOpt("brand-filter")}/warranties:${getOpt("warranty-filter")}/colors:${getOpt("color-filter")}/prices:${getOpt("price-filter")}/sellers:${getOpt("seller-filter")}/sort:${getSel("sort-filter")}`;
        
        
        // Calling fillProducts with pagination info and filters url
        fillProducts($('#pagination').val(), FILTER_URL);


        // Calling fillFilters with filters url, last filter used and selected options
        fillFilters(FILTER_URL, $(this).parent().attr("class").split(' ')[1], CHECKED);


    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Hide "Delete all filters" button if clicked
    $(document).on('click', '.delete-all', function() {
        $(":checked").prop("checked", false);
        $('.sort-filter').trigger("change");
        $(this).fadeOut('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Main products fill function
    function productFill( index, id, title, sku, ean_13, image, premio, discount, sale, msrp, price, views, rating, reviews, favorites ) {
        const PRODUCT =
            $('<div>')
            .addClass('product')
            .append(


                // Product top area
                $('<div>')
                .addClass('product-top')
                .append(
                    $('<a>')
                    .addClass('product-top__image')
                    .attr({
                        href: `/product/${id}/${sku}`,
                        'aria-label': 'View product'
                    })
                    .append(
                        $('<img>')
                        .attr({
                            src: `/storage/products/thumbnails/${image}`,
                            alt: title,
                            width: 300,
                            height: 300,
                            loading: index < 8 ? 'eager' : 'lazy',
                            fetchpriority: index < 4 ? 'high' : 'auto'
                        })
                    )
                ),


                // Product middle info area
                $('<div>')
                .addClass('product-details')
                .append(
                    $('<div>')
                    .addClass('product-details__title')
                    .append( 
                        $('<a>')
                        .text(title)
                        .attr({
                            href: `/product/${id}/${sku}`,
                            'aria-label': 'View product'
                        })
                    ),
                    $('<div>')
                    .addClass('product-details__reviews'),
                    $('<div>')
                    .addClass('product-details__credit')
                ),


                // Product bottom price/sale/msrp area
                $('<div>')
                .addClass('product-info')
                .append(
                    $('<div>')
                    .addClass('product-info__msrp'),
                    $('<div>')
                    .addClass('product-info__cart')
                    .append(
                        //data pnk to add
                        $('<button>')
                        .addClass('addToCart jq-add-to-cart')
                        .text('Add to cart')
                        .data({
                            product: sku,
                            quantity: 1,
                        })
                        .attr({ 'aria-label': 'Add to cart' })
                        .append(
                            $('<div>').addClass('addToCartLoader'),
                            $('<div>').addClass('topButtonCover')
                        )
                    )
                )
            )
    

        // If product is Premio
        if ( premio !== 0 ) { PRODUCT.find('.product-top').append( $('<p>').addClass('product-top__premio').text('Premio') ); };


        // If product views are high
        if ( views > 2500 ) { PRODUCT.find('.product-top').append( $('<p>').addClass('product-top__views').text('Top Favorites') ); };


        // If product has reviews
        if ( rating ) {
            PRODUCT.find('.product-details__reviews')
            .append(
                $('<div>')
                .addClass('rating')
                .html(`<div class="stars-empty gray"></div><div class="stars-filled yellow" style="width: ${100/(5/rating)}%"></div>`)
            )
            PRODUCT
            .find('.product-details__reviews')
            .append(
                $('<p>').text(rating),
                $('<p>').text(`(${reviews})`)
            );
        };


        // Making price int and float for custom price look
        var priceINT = parseInt((parseFloat(price).toFixed(2).split('.'))[0]).toLocaleString('ro-RO');
        var priceFLOAT = (parseFloat(price).toFixed(2).split('.'))[1];


        // If product has discount
        if ( discount ) {
            var saleINT = parseInt((parseFloat(sale).toFixed(2).split('.'))[0]).toLocaleString('ro-RO');
            var saleFLOAT = (parseFloat(sale).toFixed(2).split('.'))[1];

            PRODUCT
            .find('.product-top')
            .append(
                $('<p>').addClass('product-top__sale').text(`-${discount}%`),
            ),

            PRODUCT
            .find('.product-info__msrp')
            .append(
                $('<p>').html(`${priceINT}<sup>${priceFLOAT}</sup>&nbsp;<small>USD</small>`).addClass('price-cut'),
                $('<p>').html(`${saleINT}<sup>${saleFLOAT}</sup>&nbsp;<small>USD</small>`),
            );

            if ( sale > 250 ) { 
                PRODUCT
                .find('.product-details__credit')
                .append($('<p>')
                .text('12 payments with 0% interest'));
            };


        // If product doesn't have discount
        } else if ( !discount ) {
            var msrpINT = parseInt((parseFloat(msrp).toFixed(2).split('.'))[0]).toLocaleString('ro-RO');
            var msrpFLOAT = (parseFloat(msrp).toFixed(2).split('.'))[1];

            PRODUCT
            .find('.product-info__msrp')
            .append(
                $('<p>').html(`MSRP:&nbsp;${msrpINT}<sup>${msrpFLOAT}</sup>&nbsp;<small>USD</small>`),
                $('<p>').html(`${priceINT}<sup>${priceFLOAT}</sup>&nbsp;<small>USD</small>`),
            );

            if ( price > 250 ) { 
                PRODUCT
                .find('.product-details__credit')
                .append($('<p>')
                .text('12 payments with 0% interest')); };
        };


        // If product is not favorite
        if ( !favorites.includes(ean_13) ) {
            PRODUCT.find('.product-top')
            .append(
                $('<button>')
                .addClass('product-top__favorites jq-add-to-fav')
                .attr({
                    value: `${ean_13}`,
                    'aria-label': 'Add to favorites'
                }),
            )


        // If product is favorite
        } else {
            PRODUCT.find('.product-top')
            .append(
                $('<button>')
                .addClass('product-top__favorites jq-remove-from-fav')
                .attr({
                    value: `${ean_13}`,
                    'aria-label': 'Remove from favorites'
                }),
            )
        };


        return PRODUCT;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Carousel products fill function
    function carouselProductFill(id, title, sku, ean_13, image, premio, discount, sale, msrp, price, rating, reviews, favorites, views) {
        const PRODUCT =
            $('<div>')
            .addClass('product')
            .append(


                // Product top area
                $('<div>')
                .addClass('product-top')
                .append(
                    $('<a>')
                    .addClass('product-top__image')
                    .attr({
                        href: `/product/${id}/${sku}`,
                        'aria-label': 'View product'
                    })
                    .append(
                        $('<img>')
                        .attr({
                            src: `/storage/products/thumbnails/${image}`,
                            alt: title,
                            width: 300,
                            height: 300,
                            loading: 'lazy',
                        })
                    )
                ),


                // Product middle info area
                $('<div>')
                .addClass('product-details')
                .append(
                    $('<div>')
                    .addClass('product-details__title')
                    .append( 
                        $('<a>')
                        .text(title)
                        .attr({
                            href: `/product/${id}/${sku}`,
                            'aria-label': 'View product'
                        })
                    ),
                    $('<div>')
                    .addClass('product-details__reviews'),
                    $('<div>')
                    .addClass('product-details__credit')
                ),


                // Product bottom price/sale/msrp area
                $('<div>')
                .addClass('product-info')
                .append(
                    $('<div>')
                    .addClass('product-info__gif')
                    .append(
                        $('<div>')
                        .addClass('loader')
                    ),
                    $('<div>')
                    .addClass('product-info__msrp'),
                    $('<div>')
                    .addClass('product-info__cart')
                    .append(
                        //data pnk to add
                        $('<button>')
                        .addClass('toCart jq-add-to-cart')
                        .data({
                            product: sku,
                            quantity: 1,
                        })
                        .attr({ 'aria-label': 'Add to cart' })
                        .html(`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.879591 2.81684C0.978507 2.41422 1.38408 2.17213 1.77975 2.27278L3.87669 2.82653C4.68775 3.03793 5.32095 3.65237 5.57812 4.46764L5.99707 5.79275L19.6144 6.83317C20.2868 6.88358 20.8898 7.20541 21.3151 7.73869L21.3056 7.729C21.7307 8.26242 21.9186 8.9265 21.8395 9.61084L21.5927 11.6142C21.3552 13.5768 19.7722 15.1467 17.8236 15.3279L8.46389 16.2029C8.42605 16.2124 8.38731 16.2202 8.34743 16.2237L7.3191 16.3243C6.88392 16.3646 6.55745 16.7371 6.55738 17.1799C6.55738 17.653 6.9333 18.0355 7.3982 18.0355L9.25345 18.031C9.2908 18.0287 9.32833 18.0258 9.36624 18.0258C9.40091 18.0258 9.43532 18.0291 9.46951 18.031L16.9125 18.0154C16.9746 18.0089 17.0376 18.0057 17.1014 18.0057C18.1103 18.0057 18.9317 18.8408 18.9318 19.8674C18.9318 20.8941 18.1104 21.7299 17.1014 21.7299C16.0925 21.7298 15.2718 20.894 15.2718 19.8674C15.2718 19.7516 15.2833 19.6384 15.3033 19.5283L11.1629 19.5373C11.1842 19.6508 11.1966 19.7678 11.1966 19.8875C11.1966 20.9142 10.3752 21.75 9.36624 21.75C8.35735 21.7499 7.53663 20.9142 7.53663 19.8875C7.53664 19.7704 7.54841 19.6559 7.56886 19.5447L7.38795 19.5455L7.3982 19.535C6.11238 19.535 5.0736 18.4686 5.07348 17.1702C5.07348 15.9423 5.98342 14.9251 7.1902 14.8144H7.29933L4.17332 4.92003C4.07435 4.60814 3.8269 4.36704 3.51047 4.28654L1.41353 3.73279C1.0179 3.63214 0.780734 3.21943 0.879591 2.81684Z" fill="currentColor"></path></svg>`)
                    )
                )
            )
    

        // If product is Premio
        if ( premio !== 0 ) { 
            PRODUCT.find('.product-top')
            .append( 
                $('<p>')
                .addClass('product-top__premio')
                .text('Premio')
            );
        };


        // If product views are high
        if ( views > 1000 ) { PRODUCT.find('.product-top').append( $('<p>').addClass('product-top__views').text('Top Favorites') ); };



        // If product has reviews
        if ( rating ) {
            PRODUCT.find('.product-details__reviews')
            .append(
                $('<div>')
                .addClass('rating')
                .html(`<div class="stars-empty gray"></div><div class="stars-filled yellow" style="width: ${100/(5/rating)}%"></div>`)
            )
           
            PRODUCT
            .find('.product-details__reviews')
            .append(
                $('<p>').text(rating),
                $('<p>').text(`(${reviews})`)
            );
        }


        // For price format
        var priceINT = parseInt((parseFloat(price).toFixed(2).split('.'))[0]).toLocaleString('ro-RO');
        var priceFLOAT = (parseFloat(price).toFixed(2).split('.'))[1];



        // If product has discount
        if ( discount ) {

            var saleINT = parseInt((parseFloat(sale).toFixed(2).split('.'))[0]).toLocaleString('ro-RO');
            var saleFLOAT = (parseFloat(sale).toFixed(2).split('.'))[1];

            PRODUCT
            .find('.product-top')
            .append(
                $('<p>').addClass('product-top__sale').text(`-${discount}%`),
            ),

            PRODUCT
            .find('.product-info__msrp')
            .append(
                $('<p>').html(`${priceINT}<sup>${priceFLOAT}</sup>&nbsp;<small>USD</small>`).addClass('price-cut'),
                $('<p>').html(`${saleINT}<sup>${saleFLOAT}</sup>&nbsp;<small>USD</small>`),
            );


            // If price is higher than 250usd
            if ( sale > 250 ) { 
                PRODUCT
                .find('.product-details__credit')
                .append($('<p>')
                .text('12 payments with 0% interest'));
            };


        // If product doesn't have discount
        } else if ( !discount ) {

            var msrpINT = parseInt((parseFloat(msrp).toFixed(2).split('.'))[0]).toLocaleString('ro-RO');
            var msrpFLOAT = (parseFloat(msrp).toFixed(2).split('.'))[1];

            PRODUCT
            .find('.product-info__msrp')
            .append(
                $('<p>').html(`MSRP:&nbsp;${msrpINT}<sup>${msrpFLOAT}</sup>&nbsp;<small>USD</small>`),
                $('<p>').html(`${priceINT}<sup>${priceFLOAT}</sup>&nbsp;<small>USD</small>`),
            );


            // If price is higher than 250usd
            if ( price > 250 ) { 
                PRODUCT
                .find('.product-details__credit')
                .append($('<p>')
                .text('12 payments with 0% interest'));
            };
        };


        // If product is not favorite
        if ( !favorites.includes(ean_13) ) {
            PRODUCT.find('.product-top')
            .append(
                $('<button>')
                .addClass('product-top__favorites jq-add-to-fav')
                .attr({
                    value: `${ean_13}`,
                    'aria-label': 'Add to favorites'
                }),
            )


        // If product is favorite
        } else {
            PRODUCT.find('.product-top')
            .append(
                $('<button>')
                .addClass('product-top__favorites jq-remove-from-fav')
                .attr({
                    value: `${ean_13}`,
                    'aria-label': 'Remove from favorites'
                }),
            )
        };


        return PRODUCT;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX function to fill products
    function fillProducts(itemsPerPage, filterURL) {
        $.ajax({
            url: filterURL,
            method: 'GET',
            success(response) {


                $('.mainProductsArea').html('');
                $('.pagination-buttons').html('');

                const PRODUCTS_TO_SHOW = response.products.slice( (PAGE_NUMBER * itemsPerPage) - itemsPerPage, (PAGE_NUMBER * itemsPerPage) );
                const FAVORITES = response.favorites;
                
                $.each(PRODUCTS_TO_SHOW, function(index, product) {
                    $('.mainProductsArea')
                    .append(
                        productFill(
                            index,
                            product.id,
                            product.title,
                            product.product_sku,
                            product.ean_13,
                            product.image,
                            product.premio,
                            product.discount_percent,
                            product.sale_price,
                            product.msrp_price,
                            product.list_price,
                            product.views,
                            Math.round((product.prod_reviews_avg_rating * 100 ) ) / 100,
                            product.prod_reviews_count,
                            FAVORITES
                        )
                    )
                });


                // Adding pagination previous button
                $('.pagination-buttons').append($('<button>').addClass('prevPage disabled').text('Previous page'));
         

                // Total number of pages
                var NUMBER_OF_PAGES = Math.ceil(response.products.length / itemsPerPage);


                // prev 1 2 3 4 5 next
                if ( NUMBER_OF_PAGES <= 5 ) {
                    for (let i = 1; i <= NUMBER_OF_PAGES; i++) { $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${i}`).text(i)) }


                // prev 1 2 3 ... 6 next
                } else if ( NUMBER_OF_PAGES > 5 && PAGE_NUMBER < 3 ) {
                    for (let i = 1; i <= 3; i++) {
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${i}`).text(i));
                    }
                    $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES}`).text(NUMBER_OF_PAGES));


                // prev 1 2 3 4 ... 5 next
                } else if ( NUMBER_OF_PAGES > 5 && PAGE_NUMBER == 3 ) {
                    for (let i = 1; i <= 4; i++) {
                        $('.pagination-buttons')
                        .append($('<button>')
                        .addClass(`pageNumber page-${i}`)
                        .text(i));
                    }
                    $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES}`).text(NUMBER_OF_PAGES));
                

                // prev 1 ... 3 4 5 ... 7 next
                } else if ( NUMBER_OF_PAGES > 5  && PAGE_NUMBER > 3 && PAGE_NUMBER + 2 < NUMBER_OF_PAGES ) {
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${1}`).text('1'));
                    $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${PAGE_NUMBER - 1}`).text(PAGE_NUMBER - 1));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${PAGE_NUMBER    }`).text(PAGE_NUMBER    ));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${PAGE_NUMBER + 1}`).text(PAGE_NUMBER + 1));
                    $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES}`).text(NUMBER_OF_PAGES));
               

                // prev 1 ... 96 97 98 99 next
                } else if ( NUMBER_OF_PAGES > 5  && PAGE_NUMBER > 3 && PAGE_NUMBER + 2 ==  NUMBER_OF_PAGES ) {
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${1}`).text('1'));
                    $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 3}`).text(NUMBER_OF_PAGES - 3));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 2}`).text(NUMBER_OF_PAGES - 2));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 1}`).text(NUMBER_OF_PAGES - 1));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES    }`).text(NUMBER_OF_PAGES    ));


                // prev 1 ... 97 98 99 next
                } else if ( NUMBER_OF_PAGES > 5  && PAGE_NUMBER > 3 && PAGE_NUMBER + 2 >  NUMBER_OF_PAGES ) {
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${1}`).text('1'));
                    $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 2}`).text(NUMBER_OF_PAGES - 2));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 1}`).text(NUMBER_OF_PAGES - 1));
                    $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES    }`).text(NUMBER_OF_PAGES    ));
                }


                // Adding pagination next button
                $('.pagination-buttons').append($('<button>').addClass('nextPage').text('Next page'));

                if ( PAGE_NUMBER * itemsPerPage < response.products.length ) {
                    $('.pagination-details').html(`<b>${(PAGE_NUMBER * itemsPerPage) - itemsPerPage + 1} - ${(PAGE_NUMBER * itemsPerPage)}</b> out of <b>${response.products.length}</b> products`);
                } else {
                    $('.pagination-details').html(`<b>${(PAGE_NUMBER * itemsPerPage) - itemsPerPage + 1} - ${response.products.length}</b> out of <b>${response.products.length}</b> products`);
                }


                // Pagination button colors
                $(`.page-${PAGE_NUMBER}`).addClass('pageinview');
                if ( PAGE_NUMBER > 1 ) { $('.prevPage').removeClass('disabled') }
                if ( PAGE_NUMBER == NUMBER_OF_PAGES ) { $('.nextPage').addClass('disabled') }
            }
        }); 
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Function for page change logic
    function changePage() {
        $('.pageinview').removeClass('pageinview')
        $(this).addClass('pageinview');
        $('.mainProductsArea').css({ opacity: '0'})
        setTimeout( function() {
            $('.mainProductsArea').css({ opacity: '1'});
            $("html, body").animate({ scrollTop: 0 }, "fast");
    }, 250);
        fillProducts($('#pagination').val(), FILTER_URL);
    };
    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////
    // Initial product fill call
    fillProducts($('#pagination').val(), FILTER_URL);
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page number click logic
    $(document).on('click', '.pageNumber', function() {
        PAGE_NUMBER = Number($(this).text());
        changePage();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Previous page button logic
    $(document).on('click', '.prevPage', function() {
        PAGE_NUMBER--;
        changePage();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Next page button logic
    $(document).on('click', '.nextPage', function() {
        PAGE_NUMBER++;
        changePage();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Main "Add to cart" button animation
    $(document).on('click', '.addToCart', function() {
        const ADD_TO_CART = $(this);

        $(this).find('.addToCartLoader').css({transform: 'rotate(0deg)'});
        ADD_TO_CART.css({ color: 'transparent', pointerEvents: 'none', opacity: '0.8'});
        $(this).find('.addToCartLoader').fadeIn(100).css({transform: 'rotate(720deg)'});

        setTimeout( function() {
            $('.addToCartLoader').fadeOut(100);
            ADD_TO_CART.css({ color: 'white', pointerEvents: '', opacity: '1'});
        }, 1000);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Items on page change animation
    $(document).on('change', '#pagination', function() {
        PAGE_NUMBER = 1;
        changePage();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Adding product carousel buttons
    $('.similar-products__buttons')
    .append(
        $('<div>').addClass('prevPROD'),
        $('<div>').addClass('nextPROD')
    );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Next / Previous carousel product logic
    $('.nextPROD').on('click', function() {
        const CAROUSEL = $(this).parent().next().find('.similar-products__carousel-ribbon');
        if ( CAROUSEL.hasClass('tr33') ) {
            CAROUSEL.removeClass('tr33').addClass('tr66');
            $(this).fadeOut('fast');
        } else {
            CAROUSEL.addClass('tr33');
            $(this).prev().fadeIn('fast');
        };
    });
    $('.prevPROD').on('click', function() {
        const CAROUSEL = $(this).parent().next().find('.similar-products__carousel-ribbon');
        if ( CAROUSEL.hasClass('tr66') ) {
            CAROUSEL.removeClass('tr66').addClass('tr33');
            $(this).next().fadeIn('fast');
        } else {
            CAROUSEL.removeClass('tr33');
            $(this).fadeOut('fast');
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Random function for similar and others product cards
    function getRandomSKU() {
        return Object.keys(localStorage)[Math.floor(Math.random() * localStorage.length)];
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call for similar products - 1
    $('.recommended-1').html('');
    $.ajax({
        url: `/recommended/${getRandomSKU()}/prod_reviews_count/desc`,
        method: 'GET',
        success(response) {

            const FAVORITES = response.favorites;
            
            $.each(response.relatedProducts, function(index, product) {
                $('.recommended-1')
                .append(
                    carouselProductFill(
                        product.id,
                        product.title,
                        product.product_sku,
                        product.ean_13,
                        product.thumbnail,
                        product.premio,
                        product.discount_percent,
                        product.sale_price,
                        product.msrp_price,
                        product.list_price,
                        Math.round((product.prod_reviews_avg_rating * 100 ) ) / 100,
                        product.prod_reviews_count,
                        FAVORITES,
                        product.views
                    )
                )
            })
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call for other products - 1
    $('.others-1').html('');
    $.ajax({
        url: `/others/${getRandomSKU()}/views/desc`,
        method: 'GET',
        success(response) {

            const FAVORITES = response.favorites;
    
            $.each(response.relatedProducts, function(index, product) {
                $('.others-1')
                .append(
                    carouselProductFill(
                        product.id,
                        product.title,
                        product.product_sku,
                        product.ean_13,
                        product.thumbnail,
                        product.premio,
                        product.discount_percent,
                        product.sale_price,
                        product.msrp_price,
                        product.list_price,
                        Math.round((product.prod_reviews_avg_rating * 100 ) ) / 100,
                        product.prod_reviews_count,
                        FAVORITES,
                        product.views
                    )
                )
            })
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Loader gif + fade when adding product to cart
    $(document).on('click', '.toCart', function() {
        $(this).parent().parent()
        .find('.product-info__gif')
        .addClass('fade')
        .find('.loader')
        .addClass('loading');

        setTimeout( function() { 
            $('.loading').removeClass('loading');
            $('.fade').removeClass('fade');
        }, 1000 );
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // On minimize click
    $(document).on('click', '.minimize', function() {
        $(this)
        .addClass('maximize').removeClass('minimize')
        .prev().css({ borderBottom: 'none'})
        .next().next().slideUp('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // On maximze click
    $(document).on('click', '.maximize', function() {
        $(this)
        .addClass('minimize').removeClass('maximize')
        .prev().css({ borderBottom: '1px solid var(--gray-light)'})
        .next().next().slideDown('fast');
    });
    ////////////////////////////////////////////////////////////////////



});