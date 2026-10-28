$(document).ready( function(){



    ////////////////////////////////////////////////////////////////////
    // Initial initialization of global variables
    var PAGE_NUMBER = 1;        // for pagination
    var itemsPerPage = 10;
    ////////////////////////////////////////////////////////////////////
    

    
    ////////////////////////////////////////////////////////////////////
    // Append order container
    function appendOrder( orderNumber, orderDate, orderTotal, orderID, companyName ) {
        const ORDER_CARD =
            $('<div>')
            .addClass('order-card')
            .append(
                $('<div>')
                .addClass('order-card__title')
                .append(
                    $('<p>')
                    .text(`Order number: #${orderNumber}`),
                    $('<div>')
                    .append(
                        $('<p>')
                        .html(`${new Date(orderDate).toLocaleDateString()} | Total: ${orderTotal.split('.')[0]}<sup>${orderTotal.split('.')[1]}</sup> USD&nbsp;<span>Buy again</span>`)
                    )
                ),
                $('<div>')
                .addClass(`order-card__product order-${orderID}`)
                .append(
                    $('<div>')
                    .addClass('order-card__product-seller')
                    .append(
                        $('<div>')
                        .append(
                            $('<b>')
                            .html(`Products sold and delivered by ${companyName}`),
                            $('<p>')
                            .addClass('subtotal')
                            .text('Subtotal:')
                        ),
                        $('<div>')
                        .text('Seller feedback:')
                        .append(
                            $('<span>'),
                            $('<span>'),
                            $('<span>'),
                            $('<span>'),
                            $('<span>'),
                        )
                    )
                ),
                $('<div>')
                .addClass('order-card__more')
            );
        return ORDER_CARD;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Append order products
    function appendProducts( prodThumbnail, prodTitle, prodQuantity, prodPrice, prodSubtotal, product_id, product_sku ) {
        const PRODUCT_CARD =
                $('<div>')
                .addClass('order-card__product-details')
                .append(
                    $('<a>')
                    .addClass('product-image')
                    .css({ backgroundImage: `url('/storage/products/thumbnails/${prodThumbnail}')` })
                    .attr({ href: `/product/${product_id}/${product_sku}` }),
                    $('<div>')
                    .addClass('product-title')
                    .append(
                        $('<a>')
                        .text(prodTitle)
                        .attr({ href: `/product/${product_id}/${product_sku}` }),
                    ),
                    $('<div>')
                    .addClass('product-units')
                    .append(
                        $('<p>').text(`${prodQuantity} pcs.`)
                    ),
                    $('<div>')
                    .addClass('product-unitPrice')
                    .append(
                        $('<p>').html(`${prodPrice.split('.')[0]}<sup>${prodPrice.split('.')[1]}</sup> USD`)
                    ),
                    $('<div>')
                    .addClass('product-totalPrice')
                    .append(
                        $('<p>').html(`${prodSubtotal.split('.')[0]}<sup>${prodSubtotal.split('.')[1]}</sup> USD`)
                    )
                )
        return PRODUCT_CARD;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to get client orders
    function fillOrders() {
        $.ajax({
            url: '/client/orders',
            method: 'GET',
            success(response){


                // If user doesn't have any orders, show nice svg logo
                if ( response.length == 0 ) {


                    // Remove loader gif
                    $('.orders-area__cards').html('').removeClass('loader');


                    // Add "no orders" text
                    $('.orders-area')
                    .append(
                        $('<div>')
                        .addClass('orders-area__empty')
                        .append(
                            $('<div>'),
                            $('<p>')
                            .html('You have not placed any orders yet.<br>Here are some recommendations that might inspire you.'),
                            $('<p>')
                            .html('Add to cart now and make an order by finishing the checkout.<br>You can save the products in your cart to Favorites and buy them later.'),
                            $('<a>')
                            .text('see more products')
                            .attr({
                                href: '/'
                            }),
                        )
                    );


                    // Make container height auto
                    $('.orders-area__cards').css({ height: 'auto'});


                // If user has any orders
                } else if ( response.length > 0 ) {


                    // Remove old pagination
                    $('.pagination').remove();


                    // Add reviews pagination buttons
                    $('.orders-area__cards').html('').removeClass('loader');


                    // Add pagination
                    $('.orders-area').after(
                        $('<div>')
                        .addClass('pagination')
                        .append(
                            $('<p>').addClass('pagination-details'),
                            $('<div>').addClass('pagination-buttons')
                        )
                    )
                    

                    // Orders page split
                    const PRODUCTS_TO_SHOW = response.slice( (PAGE_NUMBER * itemsPerPage) - itemsPerPage, (PAGE_NUMBER * itemsPerPage) );


                    // Append orders to container
                    $.each(PRODUCTS_TO_SHOW, function(index, order) {
                            $('.orders-area__cards')
                            .append(
                                appendOrder( order.order_number, order.created_at, order.order_total, order.id, order.details[0].seller.company_name )
                            );
                            

                            // Subtotal semi-global variable
                            var subtotal = 0;


                            // Append products to orders
                            $.each(order.details, function(index, products) {
                                if ( products.product && products.order_id == order.id ) {
                                    subtotal += parseFloat(products.unit_price*products.quantity);
                                    $(`.order-${order.id}`)
                                    .append(
                                        appendProducts( products.product.thumbnail, products.product.title, `${parseFloat(products.quantity).toFixed(0)}`, products.unit_price, `${(products.unit_price*products.quantity).toFixed(2)}`, products.product.id, products.product.product_sku )
                                    )
                                };


                                // If product is null it's shipping cost
                                if ( !products.product && products.order_id == order.id ) {
                                    $(`.order-${order.id}`)
                                    .parent()
                                    .find('.order-card__more')
                                    .append(
                                        $('<p>')
                                        .html(`Shipping cost: ${products.unit_price.split('.')[0]}<sup>${products.unit_price.split('.')[1]}</sup>USD`),
                                        $('<p>')
                                        .text('see more')
                                    )
                                };
                            });


                        // Appending order subtotal
                        $(`.order-${order.id}`).parent().find('.subtotal').html(`Subtotal: ${(subtotal).toFixed(2).split('.')[0]}<sup>${(subtotal).toFixed(2).split('.')[1]}</sup> USD`)
                    });
                    

                    // Adding pagination previous button
                    $('.pagination-buttons').append($('<button>').addClass('prevPage disabled').text('Previous page'));
                

                    // Total number of pages
                    var NUMBER_OF_PAGES = Math.ceil(response.length / itemsPerPage);


                    // prev 1 2 3 itemsPerPage 5 next
                    if ( NUMBER_OF_PAGES <= 5 ) {
                        for (let i = 1; i <= NUMBER_OF_PAGES; i++) { $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${i}`).text(i)) }


                    // prev 1 2 3 ... 6 next
                    } else if ( NUMBER_OF_PAGES > 5 && PAGE_NUMBER < 3 ) {
                        for (let i = 1; i <= 3; i++) {
                            $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${i}`).text(i));
                        }
                        $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES}`).text(NUMBER_OF_PAGES));


                    // prev 1 2 3 itemsPerPage ... 5 next
                    } else if ( NUMBER_OF_PAGES > 5 && PAGE_NUMBER == 3 ) {
                        for (let i = 1; i <= itemsPerPage; i++) {
                            $('.pagination-buttons')
                            .append($('<button>')
                            .addClass(`pageNumber page-${i}`)
                            .text(i));
                        }
                        $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES}`).text(NUMBER_OF_PAGES));
                    

                    // prev 1 ... 3 itemsPerPage 5 ... 7 next
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

                    if ( PAGE_NUMBER * itemsPerPage < response.length ) {
                        $('.pagination-details').html(`<b>${(PAGE_NUMBER * itemsPerPage) - itemsPerPage + 1} - ${(PAGE_NUMBER * itemsPerPage)}</b> out of <b>${response.length}</b> orders`);
                    } else {
                        $('.pagination-details').html(`<b>${(PAGE_NUMBER * itemsPerPage) - itemsPerPage + 1} - ${response.length}</b> out of <b>${response.length}</b> orders`);
                    };


                    // Pagination button colors
                    $(`.page-${PAGE_NUMBER}`).addClass('pageinview');
                    if ( PAGE_NUMBER > 1 ) { $('.prevPage').removeClass('disabled') }
                    if ( PAGE_NUMBER == NUMBER_OF_PAGES ) { $('.nextPage').addClass('disabled') }
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Initial order fill
    fillOrders();
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Function for page change logic
    function changePage() {
        $('.pageinview').removeClass('pageinview')
        $(this).addClass('pageinview');
        $('.orders-area').css({ opacity: '0'})
        setTimeout( function() {
            $('.orders-area').css({ opacity: '1'});
            $("html, body").animate({ scrollTop: 0 }, "fast");
    }, 250);
        fillOrders()
    };
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
    // Items on page change animation
    $(document).on('change', '#pagination', function() {
        PAGE_NUMBER = 1;
        changePage();
    });
    ////////////////////////////////////////////////////////////////////



});