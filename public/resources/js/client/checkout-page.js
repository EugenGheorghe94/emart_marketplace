$(document).ready(function() {



    ////////////////////////////////////////////////////////////////////
    // Global variables needed
    var PRODUCTS_PRICE = 0;
    var OPERATIONAL_FEES = 0;
    var SHIPPING_FEES = 0;
    var GRAND_TOTAL = 0;
    var ALL_APPENDED = 0;
    var PREMIO_ORDERS = {};
    var DELIVERY_ORDERS = {};
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
    // Payment type data on buttons
    $('.onDelivery').find(':button').data({ payment_type: 'delivery'});
    $('.bankTransfer').find(':button').data({ payment_type: 'transfer'});
    $('.cardOnline').find(':button').data({ payment_type: 'card'});
    $('.payPal').find(':button').data({ payment_type: 'paypal'});
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Grab products from local storage
    Object.keys(localStorage).forEach(key => { 
        $.ajax({
            url: `/check/product/${key}`,
            method: 'GET',
            success(response) {
                PRODUCTS_PRICE += (response.final_price * parseInt(localStorage.getItem(key)));
                


                const DELIVERY_ESTIMATE = 
                    new Date(new Date().setDate(new Date().getDate() + response.courier_data.time_days)).toLocaleDateString('en-GB', { weekday: 'short'})
                    + ', ' +
                    new Date(new Date().setDate(new Date().getDate() + response.courier_data.time_days)).toLocaleDateString('en-GB', {day: 'numeric', month: 'short'})
                    + '.'

                

                // If product has delivery shipping
                if ( response.premio == 0 )
                {

                    // If seller id exists in PREMIO_ORDERS
                    if ( PREMIO_ORDERS[response.seller_id] )
                    {
                        DELIVERY_ORDERS[response.seller_id] ? DELIVERY_ORDERS[response.seller_id] += PREMIO_ORDERS[response.seller_id] : DELIVERY_ORDERS[response.seller_id] = PREMIO_ORDERS[response.seller_id];
                        delete PREMIO_ORDERS[response.seller_id];
                        DELIVERY_ORDERS[response.seller_id] ? DELIVERY_ORDERS[response.seller_id][response.product_sku] = localStorage.getItem(response.product_sku) : DELIVERY_ORDERS[response.seller_id] = { [response.product_sku]: localStorage.getItem(response.product_sku) };
                    }


                    // If seller id does not exist in PREMIO_ORDERS
                    else if ( !PREMIO_ORDERS[response.seller_id] )
                    {
                        DELIVERY_ORDERS[response.seller_id] ? DELIVERY_ORDERS[response.seller_id][response.product_sku] = localStorage.getItem(response.product_sku) : DELIVERY_ORDERS[response.seller_id] = { [response.product_sku]: localStorage.getItem(response.product_sku) };
                    }
                    

                    // Show courier div if any products in it
                    $('.courier').fadeIn('fast');


                    // If seller container already appended in pickup section -> move container
                    if (
                        $(`.seller-${response.seller_id}`).length > 0 &&
                        $(`.seller-${response.seller_id}`).hasClass('pickup-products__seller')) 
                    {

                        $(`.seller-${response.seller_id}`)
                        .appendTo('.courier-products')
                        .removeClass('pickup-products__seller')
                        .addClass('courier-products__seller')
                        .find('.products-cards')
                        .append(
                            $('<div>')
                            .addClass('product')
                            .append(
                                $('<div>')
                                .addClass('product-info')
                                .append(
                                    $('<a>')
                                    .addClass('product-info__image')
                                    .css({
                                        backgroundImage: `url('/storage/products/thumbnails/${response.thumbnail}')`
                                    })
                                    .attr({
                                        href: `/product/${response.id}/${response.product_sku}`
                                    }),
                                    $('<div>')
                                    .addClass('product-info__title')
                                    .append(
                                        $('<a>')
                                        .text(response.title)
                                        .attr({
                                            href: `/product/${response.id}/${response.product_sku}`
                                        })
                                    )
                                ),
                                $('<div>')
                                .addClass('product-ship')
                                .append(
                                    $('<b>').text('starting with:'),
                                    $('<p>').text(DELIVERY_ESTIMATE)
                                ),
                            )
                        )


                        //
                        $(`.seller-${response.seller_id}`)
                        .find('.product-shipping')
                        .html(`Shipping: <b>${response.courier_data.shipping_cost.split('.')[0]}<sup>${response.courier_data.shipping_cost.split('.')[1]}</sup><small>USD</small></b>`)
                        .data({
                            shipping: response.courier_data.shipping_cost
                        })
                        SHIPPING_FEES += Number(response.courier_data.shipping_cost) - 2.99;
                        $('.pickup-products').children().length || $('.pickup').hide();
                    }


                    // If seller container already appended in courier section -> add to container
                    else if (
                        $(`.seller-${response.seller_id}`).length > 0 &&
                        $(`.seller-${response.seller_id}`).hasClass('courier-products__seller'))
                    {

                        $(`.seller-${response.seller_id}`)
                        .find('.products-cards')
                        .append(
                            $('<div>')
                            .addClass('product')
                            .append(
                                $('<div>')
                                .addClass('product-info')
                                .append(
                                    $('<a>')
                                    .addClass('product-info__image')
                                    .css({
                                        backgroundImage: `url('/storage/products/thumbnails/${response.thumbnail}')`
                                    })
                                    .attr({
                                        href: `/product/${response.id}/${response.product_sku}`
                                    }),
                                    $('<div>')
                                    .addClass('product-info__title')
                                    .append(
                                        $('<a>')
                                        .text(response.title)
                                        .attr({
                                            href: `/product/${response.id}/${response.product_sku}`
                                        })
                                    )
                                ),
                                $('<div>')
                                .addClass('product-ship')
                                .append(
                                    $('<b>').text('starting with:'),
                                    $('<p>').text(DELIVERY_ESTIMATE)
                                ),
                            )
                        )
                    }


                    // If seller container does not exist yet -> make container
                    else if ( !$(`.seller-${response.seller_id}`).length > 0 )
                    {

                        $('.courier-products')
                        .append(
                            $('<div>').addClass(`courier-products__seller seller-${response.seller_id}`)
                            .append(
                                $('<div>')
                                .addClass('products-seller')
                                .html(`Sold and delivered by: <b>${response.seller_info.company_name}</b>`),
                                $('<div>')
                                .addClass('products-cards')
                                .append(
                                    $('<div>')
                                    .addClass('product')
                                    .append(
                                        $('<div>')
                                        .addClass('product-info')
                                        .append(
                                            $('<a>')
                                            .addClass('product-info__image')
                                            .css({
                                                backgroundImage: `url('/storage/products/thumbnails/${response.thumbnail}')`
                                            })
                                            .attr({
                                                href: `/product/${response.id}/${response.product_sku}`
                                            }),
                                            $('<div>')
                                            .addClass('product-info__title')
                                            .append(
                                                $('<a>')
                                                .text(response.title)
                                                .attr({
                                                    href: `/product/${response.id}/${response.product_sku}`
                                                })
                                            )
                                        ),
                                        $('<div>')
                                        .addClass('product-ship')
                                        .append(
                                            $('<b>').text('starting with:'),
                                            $('<p>').text(DELIVERY_ESTIMATE)
                                        )
                                    )
                                ),
                                $('<div>')
                                .addClass('product-shipping')
                                .html(`Shipping: <b>${response.courier_data.shipping_cost.split('.')[0]}<sup>${response.courier_data.shipping_cost.split('.')[1]}</sup><small>USD</small></b>`)
                                .data({
                                    shipping: response.courier_data.shipping_cost
                                })
                            )
                        )
                        SHIPPING_FEES += Number(response.courier_data.shipping_cost);
                    }
                }


                // If product has pickup shipping
                else if ( response.premio == 1 )
                {
                    
                    // If seller id exists in DELIVERY_ORDERS
                    if ( DELIVERY_ORDERS[response.seller_id] )
                    {
                        DELIVERY_ORDERS[response.seller_id][response.product_sku] = localStorage.getItem(response.product_sku)
                    }


                    // If seller id does not exist in DELIVERY_ORDERS
                    else if ( !DELIVERY_ORDERS[response.seller_id] )
                    {
                        PREMIO_ORDERS[response.seller_id] ? PREMIO_ORDERS[response.seller_id][response.product_sku] = localStorage.getItem(response.product_sku) : PREMIO_ORDERS[response.seller_id] = { [response.product_sku]: localStorage.getItem(response.product_sku) };
                    }


                    // If seller container already appended anywhere -> add to container
                    if ( $(`.seller-${response.seller_id}`).length > 0 )
                    {

                        $(`.seller-${response.seller_id}`)
                        .find('.products-cards')
                        .append(
                            $('<div>')
                            .addClass('product')
                            .append(
                                $('<div>')
                                .addClass('product-info')
                                .append(
                                    $('<a>')
                                    .addClass('product-info__image')
                                    .css({
                                        backgroundImage: `url('/storage/products/thumbnails/${response.thumbnail}')`
                                    })
                                    .attr({
                                        href: `/product/${response.id}/${response.product_sku}`
                                    }),
                                    $('<div>')
                                    .addClass('product-info__title')
                                    .append(
                                        $('<a>')
                                        .text(response.title)
                                        .attr({
                                            href: `/product/${response.id}/${response.product_sku}`
                                        })
                                    )
                                ),
                                $('<div>')
                                .addClass('product-ship')
                                .append(
                                    $('<b>').text('starting with:'),
                                    $('<p>').text(DELIVERY_ESTIMATE)
                                ),
                            )
                        )
                    }


                    // If seller container does not exist yet -> make container
                    else if ( !$(`.seller-${response.seller_id}`).length > 0 )
                    {

                        // Show pickup div if any products in it
                        $('.pickup').fadeIn('fast');


                        // Append to pickup products container
                        $('.pickup-products')
                        .append(
                            $('<div>').addClass(`pickup-products__seller seller-${response.seller_id}`)
                            .append(
                                $('<div>')
                                .addClass('products-seller')
                                .html(`Sold and delivered by: <b>${response.seller_info.company_name}</b>`),
                                $('<div>')
                                .addClass('products-cards')
                                .append(
                                    $('<div>')
                                    .addClass('product')
                                    .append(
                                        $('<div>')
                                        .addClass('product-info')
                                        .append(
                                            $('<a>')
                                            .addClass('product-info__image')
                                            .css({
                                                backgroundImage: `url('/storage/products/thumbnails/${response.thumbnail}')`
                                            })
                                            .attr({
                                                href: `/product/${response.id}/${response.product_sku}`
                                            }),
                                            $('<div>')
                                            .addClass('product-info__title')
                                            .append(
                                                $('<a>')
                                                .text(response.title)
                                                .attr({
                                                    href: `/product/${response.id}/${response.product_sku}`
                                                })
                                            )
                                        ),
                                        $('<div>')
                                        .addClass('product-ship')
                                        .append(
                                            $('<b>').text('starting with:'),
                                            $('<p>').text(DELIVERY_ESTIMATE)
                                        )
                                    )
                                ),
                                $('<div>')
                                .addClass('product-shipping')
                                .html(`Shipping: <b>2<sup>99</sup><small>USD</small></b>`)
                                .data({
                                    shipping: 2.99
                                }),
                            )
                        )
                        SHIPPING_FEES += 2.99;
                    }
                }
                ALL_APPENDED++;


                // Appending total numbers
                if(ALL_APPENDED === Object.keys(localStorage).length) {
                    OPERATIONAL_FEES = ((Object.keys(PREMIO_ORDERS) == 0 ? 0 : 1) + (Object.keys(DELIVERY_ORDERS) == 0 ? 0 : 1)) * 0.85;
                    GRAND_TOTAL = PRODUCTS_PRICE + OPERATIONAL_FEES + SHIPPING_FEES;
                    $('.operational-services').html(`$ ${OPERATIONAL_FEES.toFixed(2).toString().split('.')[0]}<sup>${(OPERATIONAL_FEES.toFixed(2).toString().split('.')[1])}</sup><small>USD</small>`);
                    $('.products-price').html(`${PRODUCTS_PRICE.toFixed(2).toString().split('.')[0]}<sup>${(PRODUCTS_PRICE.toFixed(2).toString().split('.')[1])}</sup><small>USD</small>`);
                    $('.shipping-cost').html(`$ ${SHIPPING_FEES.toFixed(2).toString().split('.')[0]}<sup>${(SHIPPING_FEES.toFixed(2).toString().split('.')[1])}</sup><small>USD</small>`);
                    $('.grand-total').html(`$ ${GRAND_TOTAL.toFixed(2).toString().split('.')[0]}<sup>${(GRAND_TOTAL.toFixed(2).toString().split('.')[1])}</sup><small>USD</small>`);
                    $('.jq-make-orders').fadeIn('slow');
                }
            }
        });
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Reload page when item from cart dropdown is removed
    $(document).on('click', '.jq-remove-from-cart', function() {
        location.reload();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Payment method selection logic
    $(document).on('click', '.unchecked', function() {
        $('.checked').removeClass('checked').addClass('unchecked');
        $(this).removeClass('unchecked').addClass('checked');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX -> creating orders
    $('.jq-make-orders').on('click', function() {


        if( Object.keys(PREMIO_ORDERS).length > 0 ) {
            $.ajax({
                url: `/submit/premio/order/${$('.checked').data('payment_type')}`,
                method: 'POST',
                data: PREMIO_ORDERS,
                success(response) {}
            });
        };


        if( Object.keys(DELIVERY_ORDERS).length > 0 ) {
            $.ajax({
                url: `/submit/delivery/order/${$('.checked').data('payment_type')}`,
                method: 'POST',
                data: DELIVERY_ORDERS,
                success(response) {}
            });
        };
        

        $('.thankYou-overlay').fadeIn('fast');
        localStorage.clear();
        setTimeout( function() {
            window.location.href = "/orders";
        }, 2000);
    });
    ////////////////////////////////////////////////////////////////////



});






   