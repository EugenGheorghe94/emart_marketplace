$(document).ready( function() {



    ////////////////////////////////////////////////////////////////////
    // Auto scroll top when refresh
    $("html, body").animate({ scrollTop: 0 }, "slow");
    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////
    // Show top search area + menu after scroll
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 200 ) {
            

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
    // Fill products function
    function fillCartProducts() {



        ////////////////////////////////////////////////////////////////////
        // If any products in cart
        if ( !localStorage.length == 0 ) {
            $('.toCheckout').parent().attr({href: '/checkout'});
            $('.empty').removeClass('empty');



            ////////////////////////////////////////////////////////////////////
            // Grabs scroll position
            const scrollPos = $(window).scrollTop();



            ////////////////////////////////////////////////////////////////////
            // Quantity change animation
            $('.cart-premio__products').css({opacity: '0', height: `${$('.cart-premio__products').height()}`}).html('');
            $('.cart-normal__products').css({opacity: '0', height: `${$('.cart-normal__products').height()}`}).html('');

            setTimeout( function() {
                $('.cart-premio__products').css({opacity: '1', height: 'auto'});
                $('.cart-normal__products').css({opacity: '1', height: 'auto'});
                $(window).scrollTop(scrollPos);
            }, 250);
            


            ////////////////////////////////////////////////////////////////////
            //Variables needed
            var CART_ITEMS = 0;
            var CART_TOTAL = 0;



            ////////////////////////////////////////////////////////////////////
            // Grabbing key from local storage
            const keys = Object.keys(localStorage);
            keys.forEach(key => { 



                ////////////////////////////////////////////////////////////////////
                // If quantity is decreased to 0
                if ( parseInt(localStorage.getItem(key), 10) < 1 ) {
                    localStorage.removeItem(key)
                    location.reload();
                } else {
                    CART_ITEMS += parseInt(localStorage.getItem(key), 10);
                    $('.cart-items').html('');



                    ////////////////////////////////////////////////////////////////////
                    // AJAX call for each key in local storage
                    $.ajax({
                        url: `/cart/product/${key}`,
                        method: 'GET',
                        success(response) {


                            CART_TOTAL += parseFloat(response.product.final_price).toFixed(2) * parseInt(localStorage.getItem(key));
                            const FAVORITES = response.favorites;


                            // If product is premio
                            if ( response.product.premio == 1 ) {


                                // If Premio products container already appended
                                if ( $('.cart-premio__products').length ) {
                                    $('.cart-premio__products')
                                    .removeClass('load')
                                    .append(
                                        $('<div>')
                                        .addClass('cart-product')
                                        .append(
                                            $('<a>')
                                            .addClass('cart-product__image')
                                            .attr({ href: `/product/${response.product.id}/${response.product.product_sku}`})
                                            .css({backgroundImage: `url('/storage/products/thumbnails/${response.product.thumbnail}')`}),
                                            $('<div>')
                                            .addClass('cart-product__info')
                                            .append(
                                                $('<a>')
                                                .text(response.product.title)
                                                .attr({ href: `/product/${response.product.id}/${response.product.product_sku}`}),
                                                $('<p>')
                                                .html(`Sold and delivered by: <b>${response.product.seller_info.company_name}</b>`),
                                                $('<p>')
                                                .text('Avaialbility: in stock'),
                                            ),
                                            $('<div>')
                                            .addClass('cart-product__actions')
                                            .append(
                                                $('<button>')
                                                .addClass('favorites'),
                                                $('<p>')
                                                .html(`${parseFloat(response.product.final_price).toFixed(2).split('.')[0]}<sup>${parseFloat(response.product.final_price).toFixed(2).split('.')[1]}</sup><small>USD</small>`),
                                                $('<div>')
                                                .addClass('quantity')
                                                .append(
                                                    $('<button>')
                                                    .addClass('less jq-add-to-cart')
                                                    .data({
                                                        product: response.product.product_sku,
                                                        quantity: -1,
                                                    }),
                                                    $('<p>')
                                                    .text(localStorage.getItem(key)),
                                                    $('<button>')
                                                    .addClass('more jq-add-to-cart')
                                                    .data({
                                                        product: response.product.product_sku,
                                                        quantity: (response.product.stock - Number(localStorage.getItem(key))) > 0 ? 1 : 0,
                                                    }),
                                                ),
                                                $('<button>')
                                                .addClass('delete jq-add-to-cart')
                                                .text('delete')
                                                .data({
                                                    product: response.product.product_sku,
                                                    quantity: Number(localStorage.getItem(key)) * -1,
                                                }),
                                            )
                                        )
                                    )


                                // If Premio product contaniner not appended yet
                                } else {
                                    $('.content-area__left-cart')
                                    .append(
                                        $('<div>')
                                        .addClass('cart-premio')
                                        .append(
                                            $('<div>')
                                            .addClass('cart-premio__title')
                                            .append(
                                                $('<p>').text('Premio products delivered at easybox'),
                                                $('<p>').text('View delivery, warranty, and return policies')
                                            ),
                                            $('<div>')
                                            .addClass('cart-premio__products')
                                            .append(
                                                $('<div>')
                                                .addClass('cart-product')
                                                .append(
                                                    $('<a>')
                                                    .addClass('cart-product__image')
                                                    .attr({ href: `/product/${response.product.id}/${response.product.product_sku}`})
                                                    .css({backgroundImage: `url('/storage/products/thumbnails/${response.product.thumbnail}')`}),
                                                    $('<div>')
                                                    .addClass('cart-product__info')
                                                    .append(
                                                        $('<a>')
                                                        .text(response.product.title)
                                                        .attr({ href: `/product/${response.product.id}/${response.product.product_sku}`}),
                                                        $('<p>')
                                                        .html(`Sold and delivered by: <b>${response.product.seller_info.company_name}</b>`),
                                                        $('<p>')
                                                        .text('Avaialbility: in stock')
                                                    ),
                                                    $('<div>')
                                                    .addClass('cart-product__actions')
                                                    .append(
                                                        $('<button>')
                                                        .addClass('favorites'),
                                                        $('<p>')
                                                        .html(`${parseFloat(response.product.final_price).toFixed(2).split('.')[0]}<sup>${parseFloat(response.product.final_price).toFixed(2).split('.')[1]}</sup><small>USD</small>`),
                                                        $('<div>')
                                                        .addClass('quantity')
                                                        .append(
                                                            $('<button>')
                                                            .addClass('less jq-add-to-cart')
                                                            .data({
                                                                product: response.product.product_sku,
                                                                quantity: -1,
                                                            }),
                                                            $('<p>')
                                                            .text(localStorage.getItem(key)),
                                                            $('<button>')
                                                            .addClass('more jq-add-to-cart')
                                                            .data({
                                                                product: response.product.product_sku,
                                                                quantity: (response.product.stock - Number(localStorage.getItem(key))) > 0 ? 1 : 0,
                                                            }),
                                                        ),
                                                        $('<button>')
                                                        .addClass('delete jq-add-to-cart')
                                                        .text('delete')
                                                        .data({
                                                            product: response.product.product_sku,
                                                            quantity: Number(localStorage.getItem(key))*-1,
                                                        }),
                                                    )
                                                )
                                            )
                                        )
                                    )
                                }


                            // If product is not Premio
                            } else {


                                // If normal products container is already appended
                                if ( $('.cart-normal__products').length ) {
                                    $('.cart-normal__products')
                                    .removeClass('load')
                                    .append(
                                        $('<div>')
                                        .addClass('cart-product')
                                        .append(
                                            $('<a>')
                                            .addClass('cart-product__image')
                                            .attr({ href: `/product/${response.product.id}/${response.product.product_sku}`})
                                            .css({backgroundImage: `url('/storage/products/thumbnails/${response.product.thumbnail}')`}),
                                            $('<div>')
                                            .addClass('cart-product__info')
                                            .append(
                                                $('<a>')
                                                .text(response.product.title)
                                                .attr({ href: `/product/${response.product.id}/${response.product.product_sku}`}),
                                                $('<p>')
                                                .html(`Sold and delivered by: <b>${response.product.seller_info.company_name}</b>`),
                                                $('<p>')
                                                .text('Avaialbility: in stock'),
                                            ),
                                            $('<div>')
                                            .addClass('cart-product__actions')
                                            .append(
                                                $('<button>')
                                                .addClass('favorites'),
                                                $('<p>')
                                                .html(`${parseFloat(response.product.final_price).toFixed(2).split('.')[0]}<sup>${parseFloat(response.product.final_price).toFixed(2).split('.')[1]}</sup><small>USD</small>`),
                                                $('<div>')
                                                .addClass('quantity')
                                                .append(
                                                    $('<button>')
                                                    .addClass('less jq-add-to-cart')
                                                    .data({
                                                        product: response.product.product_sku,
                                                        quantity: -1,
                                                    }),
                                                    $('<p>')
                                                    .text(localStorage.getItem(key)),
                                                    $('<button>')
                                                    .addClass('more jq-add-to-cart')
                                                    .data({
                                                        product: response.product.product_sku,
                                                        quantity: (response.product.stock - Number(localStorage.getItem(key))) > 0 ? 1 : 0,
                                                    }),
                                                ),
                                                $('<button>')
                                                .addClass('delete jq-add-to-cart')
                                                .text('delete')
                                                .data({
                                                    product: response.product.product_sku,
                                                    quantity: Number(localStorage.getItem(key))*-1,
                                                }),
                                            )
                                        )
                                    )


                                // If normal products container is not yet appended
                                } else {
                                    $('.content-area__left-cart')
                                    .append(
                                        $('<div>')
                                        .addClass('cart-normal')
                                        .append(
                                            $('<div>')
                                            .addClass('cart-normal__title')
                                            .append(
                                                $('<p>').text('Products delivered at your address'),
                                                $('<p>').text('View delivery, warranty, and return policies')
                                            ),
                                            $('<div>')
                                            .addClass('cart-normal__products')
                                            .append(
                                                $('<div>')
                                                .addClass('cart-product')
                                                .append(
                                                    $('<a>')
                                                    .addClass('cart-product__image')
                                                    .attr({ href: `/product/${response.product.id}/${response.product.product_sku}`})
                                                    .css({backgroundImage: `url('/storage/products/thumbnails/${response.product.thumbnail}')`}),
                                                    $('<div>')
                                                    .addClass('cart-product__info')
                                                    .append(
                                                        $('<a>')
                                                        .text(response.product.title)
                                                        .attr({ href: `/product/${response.product.id}/${response.product.product_sku}`}),
                                                        $('<p>')
                                                        .html(`Sold and delivered by: <b>${response.product.seller_info.company_name}</b>`),
                                                        $('<p>')
                                                        .text('Avaialbility: in stock'),
                                                    ),
                                                    $('<div>')
                                                    .addClass('cart-product__actions')
                                                    .append(
                                                        $('<button>')
                                                        .addClass('favorites'),
                                                        $('<p>')
                                                        .html(`${parseFloat(response.product.final_price).toFixed(2).split('.')[0]}<sup>${parseFloat(response.product.final_price).toFixed(2).split('.')[1]}</sup><small>USD</small>`),
                                                        $('<div>')
                                                        .addClass('quantity')
                                                        .append(
                                                            $('<button>')
                                                            .addClass('less jq-add-to-cart')
                                                            .data({
                                                                product: response.product_sku,
                                                                quantity: -1,
                                                            }),
                                                            $('<p>')
                                                            .text(localStorage.getItem(key)),
                                                            $('<button>')
                                                            .addClass('more jq-add-to-cart')
                                                            .data({
                                                                product: response.product.product_sku,
                                                                quantity: (response.product.stock - Number(localStorage.getItem(key))) > 0 ? 1 : 0,
                                                            }),
                                                        ),
                                                        $('<button>')
                                                        .addClass('delete jq-add-to-cart')
                                                        .text('delete')
                                                        .data({
                                                            product: response.product.product_sku,
                                                            quantity: Number(localStorage.getItem(key))*-1,
                                                        }),
                                                    )
                                                )
                                            )
                                        )
                                    )
                                } 
                            }


                            // Products cost
                            $('.jq-product-value')
                            .html(`<p>Products:</p><p>${CART_TOTAL.toFixed(2).split('.')[0]}<sup>${CART_TOTAL.toFixed(2).split('.')[1]}</sup><small>USD</small></p>`)
                            

                            // Total cost
                            $('.total-area__total')
                            .html(`<div><p>Total:</p><p>$ ${CART_TOTAL.toFixed(2).split('.')[0]}<sup>${CART_TOTAL.toFixed(2).split('.')[1]}</sup><small>USD</small></p></div>`)



                            // If product is favorite
                            if ( !FAVORITES.includes(response.product.ean_13) ) {
                                $(`a:contains(${response.product.title})`)
                                .parent()
                                .next()
                                .find('.favorites')
                                .addClass('jq-add-to-fav')
                                .attr({
                                    value: `${response.product.ean_13}`
                                })
                            } else {
                                $(`a:contains(${response.product.title})`)
                                .parent()
                                .next()
                                .find('.favorites')
                                .addClass('jq-remove-from-fav')
                                .attr({
                                    value: `${response.product.ean_13}`
                                })
                            };
                        }
                    });
                }
            });
        }
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Initial cart products fill
    fillCartProducts();
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // - / + product quantity / deleting product
    $(document).on('click', '.jq-add-to-cart', function() {
        fillCartProducts();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Reload page when item from cart dropdown is removed
    $(document).on('click', '.jq-remove-from-cart', function() {
        location.reload();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Main product fill function
    function productFill( id, title, sku, ean_13, image, premio, discount, sale, msrp, price, rating, reviews, favorites, views) {
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
                    .css({
                        backgroundImage: `url('/storage/products/thumbnails/${image}')`,
                    })
                    .attr({
                        href: `/product/${id}/${sku}`
                    })
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
                            href: `/product/${id}/${sku}`
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


        ////////////////////////////////////////////////////////////////////
        // If product is favorite
        if ( !favorites.includes(ean_13) ) {
            PRODUCT.find('.product-top')
            .append(
                $('<button>')
                .addClass('product-top__favorites jq-add-to-fav')
                .attr({
                    value: `${ean_13}`
                }),
            )
        } else {
            PRODUCT.find('.product-top')
            .append(
                $('<button>')
                .addClass('product-top__favorites jq-remove-from-fav')
                .attr({
                    value: `${ean_13}`
                }),
            )
        };
        ////////////////////////////////////////////////////////////////////


        return PRODUCT;
    };
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
                    productFill( 
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
                    productFill( 
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





});