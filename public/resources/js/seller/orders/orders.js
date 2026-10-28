$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.orders').trigger('click');
    $('.orders-2').addClass('clicked');
    $('.orders-2').css({color: 'var(--blue-main)'});
    $('.orders-2-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.orders-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////
    // Ajax token set globally
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    function showProduct( orderNumber, companyName, clientName, deliveryPerson, statusColor, phoneNumber, clientCity, clientState, clientAddress, orderDate, orderTime, requiredDate, timeDifference, timeLabel, paymentType, deliveryType, courierCompany, AWB, orderStatus, orderTotal ) {
        const PRODUCT_CONTAINER = $('<div>')
            .append(
            $('<div>')
            .addClass('productContainer')
            .append(


                // Checkbox area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<div>').addClass('checkbox check unchecked')
                ),


                // Order ID area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(orderNumber),
                    $('<a>').addClass('stdTextCenter link blue').attr({ href: '/seller/account/profile/'}).text(companyName)
                ),


                // Client area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(clientName),
                    $('<p>').addClass('stdTextCenter').text(phoneNumber)
                ),


                // Order date area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(orderDate),
                    $('<p>').addClass('stdTextCenter').text(orderTime)
                ),


                // Max. delivery area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(requiredDate),
                    $('<p>').addClass(`smallLabelText ${timeLabel}`).html(`<span>${timeDifference} days</span>`)
                ),


                // Payment area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(paymentType),
                    $('<p>').addClass('stdTextCenter').text(deliveryType)
                ),


                // Delivery details area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(courierCompany),
                    $('<p>').addClass('stdTextCenter link blue').text(AWB)
                ),


                // Status area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass(`labelText ${statusColor}`)
                    .append(
                        $('<span>')
                        .text(orderStatus)
                        .data({ order: orderNumber })
                    )
                ),


                // Total area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdText fce').html(`$&nbsp;<b>${orderTotal}</b>&nbsp;USD&nbsp;`),
                ),


                // Actions area
                $('<div>')
                .addClass('gridSection actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-1 actionButton')
                    .text("Change order"),

                    $('<button>')
                    .addClass('aB-2 actionButton')
                    .text("Show details"),
                )
            ),


            // Order details
            $('<div>')
            .addClass('expandedContainer')
            .css({ display: 'none' })
            .append(


                // Client details area
                $('<div>')
                .addClass('clientDetails')
                .append(
                    $('<p>').addClass('stdText').html(`<b>Name:&nbsp;&nbsp;</b>${deliveryPerson}`),
                    $('<p>').addClass('stdText').html(`<b>Phone:&nbsp;&nbsp;</b>${phoneNumber}`),
                    $('<p>').addClass('stdText').html(`<b>Address:&nbsp;&nbsp;</b>${clientAddress}`),
                    $('<p>').addClass('stdText').html(`<b>City:&nbsp;&nbsp;</b>${clientCity}`),
                    $('<p>').addClass('stdText').html(`<b>State:&nbsp;&nbsp;</b>${clientState}`),
                    $('<p>').addClass('stdText').html(`<b>Delivery:&nbsp;&nbsp;</b>${deliveryType}`),
                    $('<p>').addClass('stdText').html(`<b>Payment:&nbsp;&nbsp;</b>${paymentType}`),
                ),
                

                // Products container
                $('<div>')
                .addClass(`orderDetails`)
                .append(
                    $('<div>')
                    .addClass(`order${orderNumber}`)
                ),

                
                // Expanded area buttons
                $('<div>')
                .addClass('flexSectionExpanded fss')
                .append(
                    $('<button>')
                    .addClass('aB-3 actionButton')
                    .text("Complete order"),

                    $('<button>')
                    .addClass('aB-4 actionButton')
                    .text("Generate AWB"),

                    $('<button>')
                    .addClass('aB-5 actionButton')
                    .text("Download AWB"),

                    $('<button>')
                    .addClass('aB-6 actionButton')
                    .text("Upload file"),
                ),
            )
        );


        // Return order container
        return PRODUCT_CONTAINER;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Timeout functions that shows main page div after 0.5 sec
    setTimeout(function() {
        $('.mainPageSection')
        .css({
            backgroundImage: "none",
            display: 'none'
        })
        .append(
            TOP_SPACER,
            PAGE_TITLE,
            TOP_SEARCH_FORM,
            MORE_FILTERS,
            DYNAMIC_SECTION,
            PAGE_OPTIONS,
            EDIT_PANEL,
            FEEDBACK_LINK
        )
        .slideDown('fast');

        $(document).trigger('dynamicSellerPageView:ready');

    }, 500);
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // After DOM is fully loaded
    $(document).on('dynamicSellerPageView:ready', function () {



        ////////////////////////////////////////////////////////////////////
        // Functions
        $('.nextPage').on('click', function(e) { e.preventDefault(); });
        $('.prevPage').on('click', function(e) { e.preventDefault();});
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Page title
        $('.pageTitle').text('Orders');
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Small filter options
        $('.smallFilterSelect')
        .append(
           $('<option>').text('Order ID'),
            $('<option>').text('Client'),
            $('<option>').text('Phone'),
            $('<option>').text('AWB')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 1
        $('.expFilter-1')
        .append(
            $('<option>').text('Order ID'),
            $('<option>').text('Client'),
            $('<option>').text('Phone'),
            $('<option>').text('AWB')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 2
        $('.expFilter-2')
        .append(
            $('<option>').text('Order ID'),
            $('<option>').text('Client'),
            $('<option>').text('Phone'),
            $('<option>').text('AWB')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 3
        $('.expFilter-status')
        .append(
            $('<option>').text('All'),
            $('<option>').text('Delivered'),
            $('<option>').text('Pending'),
            $('<option>').text('Delayed'),
            $('<option>').text('Cancelled'),
            $('<option>').text('Refused'),
            $('<option>').text('Damaged / Lost')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 4
        $('.expFilter-option')
        .append(
            $('<option>')
            .attr({
                value: '', 
                disabled: true, 
                selected: true, 
                hidden: true,
            })
            .text('Pickup delay')
            .addClass('selectOption'),
            $('<option>').text('All'),
            $('<option>').text('+0 days'),
            $('<option>').text('+1 days'),
            $('<option>').text('+2 days'),
            $('<option>').text('+3 days'),
            $('<option>').text('>3 days'),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Fillter buttons + color
        $('.mainTopButtons')
        .append(
            $('<button>')
            .addClass('filterButton fB-1 new blue')
            .data({filter: 'status_type', type: 'new'})
            .html("<span>New orders</span>"),

            $('<button>')
            .addClass('filterButton fB-2 yellow')
            .data({filter: 'status_type', type: 'pending'})
            .html("<span>Pending</span>"),

            $('<button>')
            .addClass('filterButton fB-3 gray')
            .data({filter: 'status_type', type: 'delayed'})
            .html("<span>Delayed</span>"),

            $('<button>')
            .addClass('filterButton fB-4 green')
            .data({filter: 'status_type', type: 'completed'})
            .html("<span>Completed</span>"),

            $('<button>')
            .addClass('filterButton fB-5 violet')
            .data({filter: 'status_type', type: 'cancelled by client'})
            .html("<span>Cancelled by client</span>"),

            $('<button>')
            .addClass('filterButton fB-6 red')
            .data({filter: 'status_type', type: 'cancelled by seller'})
            .html("<span>Cancelled by seller</span>"),

            $('<button>')
            .addClass('filterButton fB-7 gray')
            .data({filter: 'status_type', type: 'cancelled automatically'})
            .html("<span>Cancelled automatically</span>"),
            
            $('<button>')
            .addClass('filterButton fB-8 red')
            .data({filter: 'status_type', type: 'cancelled with incident'})
            .html("<span>Cancelled with incident</span>"),

            $('<button>')
            .addClass('filterButton fB-9 darkgray')
            .data({filter: 'status_type', type: 'refunded'})
            .html("<span>Refunded</span>"),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Mass actions buttons
        $('.subMenuSection')
        .append(
            $('<button>')
            .addClass('massActionButton mB-1')
            .text("Download client list"),
            
            $('<button>')
            .addClass('massActionButton mB-2')
            .text("Download order details"),

            $('<button>')
            .addClass('massActionButton mB-3')
            .text("Generate AWB's"),

            $('<button>')
            .addClass('massActionButton mB-4')
            .text("Download packing list"),

            $('<button>')
            .addClass('massActionButton mB-5')
            .text("Download AWB's"),

            $('<button>')
            .addClass('selectedOffers')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Dynamic section titles
        $('.tableTitle')
        .append(
            $('<div>').addClass('titleSection master-check m-unchecked'),
            $('<div>').addClass('titleSection id').text('Order ID'),
            $('<div>').addClass('titleSection client').text('Client'),
            $('<div>').addClass('titleSection date').text('Order date'),
            $('<div>').addClass('titleSection delivery').text('Max. delivery date'),
            $('<div>').addClass('titleSection payment').text('Payment & delivery'),
            $('<div>').addClass('titleSection details').text('Delivery details'),
            $('<div>').addClass('titleSection status').text('Status'),
            $('<div>').addClass('titleSection total').text('Total'),
            $('<div>').addClass('titleSection actions').text('Actions')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Filter buttons logic
        $(document).on('click', '.filterButton', function() {
            $('.filterButton').removeClass('filterClick')
            $(this).addClass('filterClick')
            $('.loadingDiv').fadeIn('fast')
            $('.dynamicProductsArea').html('')


            // Needed for filter
            var $this = $(this);


            // Delayed show orders
            setTimeout( function() {
                $.ajax({
                    url: `/seller/orders/${$this.data('filter')}/${$this.data('type')}`,
                    method: 'GET',
                    success(response) {


                        response.length == 0 && $('.new').hasClass('filterClick') ? $('.yellow').trigger('click') : undefined;


                        // Needed to update seen orders from new to pending
                        let ORDERS_SEEN = [];


                        // Pagination variables needed
                        var noItems = $('.perPage select').val();
                        var startIndex = (pageNo - 1) * noItems;
                        var stopIndex = pageNo * noItems;


                        // Item number per page logic
                        if ( stopIndex < response.length ) {
                            $('.pagination').text(`${startIndex + 1} - ${stopIndex} of ${response.length}`)
                        } else {
                            $('.pagination').text(`${startIndex + 1} - ${response.length} of ${response.length}`)
                        };


                        // Splitting response into orders
                        $.each(response.slice(startIndex, stopIndex), function(index, order) {


                            // Array of orders seen
                            order.status_type == 'new' ? ORDERS_SEEN.push(order.order_number) : undefined;


                            // Label variables
                            const paymentLabels = { card: "Online Card", delivery: "Pay on Delivery", paypal: "PayPal", transfer: "Bank Transfer" };
                            const deiveryLabels = { pickup: "eMART PickPoint", delivery: "Courier Delivery" };
                            const statusLabels = { new: "blue", pending: "yellow", delayed: "gray", completed: "green", "cancelled by client": "violet", "cancelled by seller": "red",  "cancelled automatically": "gray", "cancelled with incident": "red", refused: "black"};
                            const waiting = Math.round((new Date() - new Date(order.required_date)) / (1000 * 60 * 60 * 24)) - 1;
                            const completed = Math.round((new Date(order.updated_at.split('T')[0]) - new Date(order.required_date)) / (1000 * 60 * 60 * 24));


                            // Appending oarder conainers 
                            $('.dynamicProductsArea')
                            .append(
                                showProduct(
                                    order.order_number,
                                    order.company_name,
                                    order.client.first_name + ' ' + order.client.last_name,
                                    order.address.first_name + ' ' + order.address.last_name,
                                    statusLabels[order.status_type],
                                    order.address.phone_number,
                                    order.address.city,
                                    order.address.state,
                                    order.address.address,
                                    order.created_at.split('T')[0],
                                    order.created_at.split('T')[1].split('.')[0],
                                    order.required_date,
                                    ['new', 'pending', 'delayed'].includes(order.status_type) ?  waiting : completed,
                                    ['new', 'pending', 'delayed'].includes(order.status_type) ?  (waiting < 1 ? 'green' : (waiting < 3 ? 'yellow' : 'red'))    :     (completed < 1 ? 'green' : (completed < 3 ? 'yellow' : 'red')),
                                    paymentLabels[order.payment.payment_type],
                                    deiveryLabels[order.address.address_type],
                                    order.courier_company,
                                    '',
                                    order.status_type,
                                    order.order_total
                                )
                            );


                            // Appending products to order container
                            $.each(order.details, function(index, product) {


                                // If product is not shipping
                                if( product.product_id != null ) {
                                    $(`.order${order.order_number}`)
                                    .append(
                                        $('<div>')
                                        .addClass('productDetails')
                                        .append(


                                            // Product image area
                                            $('<div>')
                                            .addClass('productImage')
                                            .append(
                                                $('<a>')
                                                .css({
                                                    width: '80px',
                                                    aspectRatio: '1 / 1',
                                                    display: 'block',
                                                    backgroundImage: `url('/storage/products/thumbnails/${product.product.thumbnail}')`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat'
                                                })
                                                .attr({ href: `/product/${product.product.product_id}/${product.product.product_sku}` })
                                            ),


                                            // Product info area
                                            $('<div>')
                                            .addClass('productIdentity')
                                            .append(
                                                $('<p>').addClass('stdText lt16 blue').text(product.product.title),
                                                $('<p>').addClass('stdText').text(`Product SKU: ${product.product.product_sku}`)
                                            ),


                                            // Product quantity area
                                            $('<div>')
                                            .addClass('productQuantity fse')
                                            .append(
                                                $('<p>').addClass('stdText').text(`${parseFloat(product.quantity)} pcs.`)
                                            ),


                                            // Product price area
                                            $('<div>')
                                            .addClass('productPrice fse')
                                            .append(
                                                $('<p>').addClass('stdText').html(`$&nbsp;<b>${parseFloat(product.unit_price).toFixed(2)}</b>&nbsp;USD`)
                                            )
                                        )
                                    )


                                // If product is shipping
                                } else if( product.product_id == null ) {
                                    $(`.order${order.order_number}`)
                                    .after(
                                        $('<div>')
                                        .addClass('totalDetails')
                                        .append(


                                            // Shipping tax area
                                            $('<div>')
                                            .addClass('shippingPrice fbtw')
                                            .append(
                                                $('<p>').addClass('stdText').text('Shipping price:'),
                                                $('<p>').addClass('stdText').html(`$&nbsp;<b>${product.unit_price}</b>&nbsp;USD`)
                                            ),


                                            // Order total area
                                            $('<div>')
                                            .addClass('totalAmount fbtw')
                                            .append(
                                                $('<p>').addClass('stdText').html('<b>Total:</b>'),
                                                $('<p>').addClass('stdText').html(`$&nbsp;<b>${order.order_total}</b>&nbsp;USD`)
                                            )
                                        )
                                    )
                                }
                            });
                        });


                        // Hides and resets orders container
                        $('.loadingDiv').hide()
                        $('.dynamicProductsArea').fadeIn();


                        // For each order shown update it's status to pending
                        $.each(ORDERS_SEEN, function(index, order) {
                            $.ajax({
                                url: `/order/seen/${order}`,
                                method: 'POST',
                                success(response) {}
                            })
                        });
                    }
                });


            // 500ms delay for function
            }, 500);
        });
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // First filter pre-selected
        $('.new').trigger('click');
        ////////////////////////////////////////////////////////////////////



    });



    ////////////////////////////////////////////////////////////////////
    // Expand order button logic
    $(document).on('click', '.aB-2', function() {
        const ORDER_DETAIS = $(this).parent().parent();
        if ( !$(this).hasClass('rotate') ) {
            $(this).text('Close details').addClass('rotate');
            ORDER_DETAIS.next().slideDown('fast');
        } else {
            $(this).text('Show details').removeClass('rotate')
            ORDER_DETAIS.next().slideUp('fast');
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page mask for "Improve Product" modal
    const EDIT_PANEL = $('<div>')
        .addClass('pageMask')
        .append(
            $('<div>')
            .addClass('improveProductArea')
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Only overlay click closes edit area
    $(document).on('click', '.aB-1', function() {

        // Scroll width in px
        const PAGE_SCROLL = window.innerWidth - document.documentElement.clientWidth;

        // Shows side panel after loading time
        $('.pageMask').fadeIn();
        $('body').css({ overflow: 'hidden', paddingRight: `${PAGE_SCROLL}px`})
        setTimeout( function() { $('.improveProductArea').css({ right: '0px' }); }, 500);
        setTimeout( function() { $('.pageMask').css({ backgroundImage: 'none' }); }, 650);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Only overlay click closes edit area
    $(document).on('click', '.improveProductArea', function(e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Overlay click hides edit area
    $(document).on('click', '.pageMask', function() {
        $(this).fadeOut().css({ backgroundImage: "url('/resources/files/seller/loader.gif')" });
        $('.improveProductArea').css({ right: '-1000px' });
        $('body').css({ overflow: '', paddingRight: '' });
    });
    ////////////////////////////////////////////////////////////////////



});