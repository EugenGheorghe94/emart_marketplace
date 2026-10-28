$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.returns').trigger('click');
    $('.returns-2').addClass('clicked');
    $('.returns-2').css({color: 'var(--blue-main)'});
    $('.returns-2-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.returns-icon-menu').trigger('click');
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
    function showReturn(return_number, date, seller, order_id, payment, client_name, phone_number, shipping, AWB, received_date, received_time,  return_color, return_status, refund_type, return_type, address, city, state) {
        const RETURN_CONTAINER = $('<div>')
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
                // Return ID area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter link blue').text(return_number),
                    $('<p>').addClass('stdTextCenter').text(date)
                ),
                // Seller details area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdText').html(`<b>${seller}</b>`),
                    $('<p>').addClass('stdText').text('eMART.click')
                ),
                // Order ID area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter link blue').text(order_id),
                    $('<p>').addClass('stdTextCenter').text(payment)
                ),
                // Client details area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').html(`<b>${client_name}</b>`),
                    $('<p>').addClass('stdTextCenter').text(phone_number)
                ),
                // AWB area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(shipping),
                    $('<p>').addClass('stdTextCenter link blue').text(AWB)
                ),
                // Date received area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(received_date),
                    $('<p>').addClass('stdTextCenter').text(received_time)
                ),
                // Status area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass(`labelText ${return_color}`).html(`<span>${return_status}</span>`),
                ),
                // Total area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(refund_type),
                    $('<p>').addClass('stdTextCenter').text(return_type)
                ),
                // Actions area
                $('<div>')
                .addClass('gridSection actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-1 actionButton')
                    .text("Change return"),

                    $('<button>')
                    .addClass('aB-2 actionButton')
                    .text("Show details"),
                )
            ),
            $('<div>')
                .addClass(`expandedContainer`)
                .css({display: 'none'})
                .append(
                    $('<div>')
                    .addClass('clientDetails')
                    .append(
                        $('<p>').addClass('stdText').html(`<b>Name:&nbsp;&nbsp;</b>${client_name}`),
                        $('<p>').addClass('stdText').html(`<b>Phone:&nbsp;&nbsp;</b>${phone_number}`),
                        $('<p>').addClass('stdText').html(`<b>Address:&nbsp;&nbsp;</b>${address}`),
                        $('<p>').addClass('stdText').html(`<b>City:&nbsp;&nbsp;</b>${city}`),
                        $('<p>').addClass('stdText').html(`<b>State:&nbsp;&nbsp;</b>${state}`),
                        $('<p>').addClass('stdText').html(`<b>Delivery:&nbsp;&nbsp;</b>${return_type}`),
                        $('<p>').addClass('stdText').html(`<b>Payment:&nbsp;&nbsp;</b>${refund_type}`),
                    ),
                    $('<div>')
                    .addClass(`orderDetails order${return_number}`),
                    // Expanded area buttons
                    $('<div>')
                    .addClass('flexSectionExpanded fss')
                    .append(
                        $('<button>')
                        .addClass('aB-3 actionButton')
                        .text("Complete return"),

                        $('<button>')
                        .addClass('aB-5 actionButton')
                        .text("Download AWB"),

                        $('<button>')
                        .addClass('aB-4 actionButton')
                        .text("Open Dispute"),

                        $('<button>')
                        .addClass('aB-6 actionButton')
                        .text("Upload file"),
                    )
                )
            )
        return RETURN_CONTAINER;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    function addProduct(thumbnail, product_id, product_sku, product_title, quantity, price) {
        const PRODUCT = 
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
                        backgroundImage: `url('/storage/products/thumbnails/${thumbnail}')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    })
                    .attr({ href: `/product/${product_id}/${product_sku}` })
                ),
                // Product info area
                $('<div>')
                .addClass('productIdentity')
                .append(
                    $('<p>').addClass('stdText lt16 blue').text(product_title),
                    $('<p>').addClass('stdText').text(`Product SKU: ${product_sku}`)
                ),
                // Product quantity area
                $('<div>')
                .addClass('productQuantity fse')
                .append(
                    $('<p>').addClass('stdText').text(`${quantity} pcs`)
                ),
                // Product price area
                $('<div>')
                .addClass('productPrice fse')
                .append(
                    $('<p>').addClass('stdText').html(`$&nbsp;<b>${price}</b>&nbsp;USD`)
                )
            )
            return PRODUCT;
        }
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
        $('.prevPage').on('click', function(e) { e.preventDefault(); });
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Page title
        $('.pageTitle').text('Returns');
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Small filter options
        $('.smallFilterSelect')
        .append(
            $('<option>').text('Return ID'),
            $('<option>').text('Order ID'),
            $('<option>').text('Client'),
            $('<option>').text('Phone')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 1
        $('.expFilter-1')
        .append(
            $('<option>').text('Return ID'),
            $('<option>').text('Order ID'),
            $('<option>').text('Client'),
            $('<option>').text('Phone')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 2
        $('.expFilter-2')
        .append(
            $('<option>').text('Return ID'),
            $('<option>').text('Order ID'),
            $('<option>').text('Client'),
            $('<option>').text('Phone')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 3
        $('.expFilter-status')
        .append(
            $('<option>').text('All'),
            $('<option>').text('Delayed'),
            $('<option>').text('Completed'),
            $('<option>').text('Received'),
            $('<option>').text('Refused'),
            $('<option>').text('Cancelled'),
            $('<option>').text('Incident')
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
            .text('Client type')
            .addClass('selectOption'),
            $('<option>').text('Premio'),
            $('<option>').text('Non Premio'),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
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
        // Variables to change
        $('.subMenuSection')
        .append(
            $('<button>')
            .addClass('massActionButton mB-1')
            .text("Download returns list"),
            
            $('<button>')
            .addClass('massActionButton mB-2')
            .text("Download returns details"),

            $('<button>')
            .addClass('selectedOffers')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Dynamic section titles
        $('.tableTitle')
        .append(
            $('<div>').addClass('titleSection master-check m-unchecked'),
            $('<div>').addClass('titleSection id').text('Return ID'),
            $('<div>').addClass('titleSection seller').text('Seller details'),
            $('<div>').addClass('titleSection date').text('Order ID'),
            $('<div>').addClass('titleSection delivery').text('Client details'),
            $('<div>').addClass('titleSection payment').text('AWB'),
            $('<div>').addClass('titleSection details').text('Last update'),
            $('<div>').addClass('titleSection status').text('Status'),
            $('<div>').addClass('titleSection total').text('Return details'),
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
            

            setTimeout( function(){
                $.ajax({
                    url: `/seller/returns/${$this.data('filter')}/${$this.data('type')}`,
                    method: 'GET',
                    success(response) {


                        response.length == 0 && $('.new').hasClass('filterClick') ? $('.yellow').trigger('click') : undefined;


                        // Needed to update seen orders from new to pending
                        let RETURNS_SEEN = [];
                    
                    
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
                        $.each(response.slice(startIndex, stopIndex), function(index, returnOrder) {

                            
                            // Array of orders seen
                            returnOrder.status_type == 'new' ? RETURNS_SEEN.push(returnOrder.return_number) : undefined;


                            // Label variables
                            const paymentLabels = { card: "Online Card", delivery: "Pay on Delivery", paypal: "PayPal", transfer: "Bank Transfer" };
                            const statusLabels = { new: "blue", pending: "yellow", delayed: "gray", completed: "green", "cancelled by client": "violet", "cancelled by seller": "red",  "cancelled automatically": "gray", "cancelled with incident": "red", refused: "black"};


                            // Appending order conainers 
                            $('.dynamicProductsArea')
                            .append(
                                showReturn(
                                    returnOrder.return_number,
                                    returnOrder.created_at.split('T')[0],
                                    returnOrder.company_name,
                                    returnOrder.order.order_number,
                                    paymentLabels[returnOrder.order.payment.payment_type],
                                    returnOrder.first_name + ' ' + returnOrder.last_name,
                                    returnOrder.phone_number,
                                    returnOrder.return_type,
                                    '26EMT' + returnOrder.return_number + 'R',
                                    returnOrder.updated_at.split('T')[0],
                                    returnOrder.updated_at.split('T')[1].split('.')[0],
                                    statusLabels[returnOrder.status_type],
                                    [returnOrder.status_type],
                                    returnOrder.refund_type,
                                    returnOrder.return_type,
                                    returnOrder.address.split(',').slice(2),
                                    returnOrder.address.split(',')[0],
                                    returnOrder.address.split(',')[1],
                                )
                            );


                            // Adding products to order container
                            $.each(returnOrder.details, function(index, product){
                                $(`.order${returnOrder.return_number}`)
                                .append(
                                    addProduct(
                                        product.product.thumbnail,
                                        product.product.id,
                                        product.product.product_sku,
                                        product.product.title,
                                        parseInt(product.quantity),
                                        product.unit_price,
                                    )
                                );
                            })
                            $(`.order${returnOrder.return_number}`)
                            .append(
                                $('<div>')
                                .addClass('totalDetails')
                                .append(
                                    // Shipping tax area
                                    $('<div>')
                                    .addClass('shippingPrice fbtw')
                                    .append(
                                        $('<p>').addClass('stdText').text(''),
                                        $('<p>').addClass('stdText').text('')
                                    ),
                                    // Order total area
                                    $('<div>')
                                    .addClass('totalAmount fbtw')
                                    .append(
                                        $('<p>').addClass('stdText').html('<b>Total:</b>'),
                                        $('<p>').addClass('stdText').html(`$&nbsp;<b>${returnOrder.return_total}</b>&nbsp;USD`)
                                    )
                                )
                            )
                        });


                        // For each order shown update it's status to pending
                        $.each(RETURNS_SEEN, function(index, returnOrder) {
                            $.ajax({
                                url: `/return/seen/${returnOrder}`,
                                method: 'POST',
                                success(response) {}
                            })
                        });
                    }
                });


                //
                $('.loadingDiv').hide()
                $('.dynamicProductsArea').fadeIn();
            }, 500)
        });
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // First filter pre-selected
        $('.new').trigger('click');
        ////////////////////////////////////////////////////////////////////


  
    });



    ////////////////////////////////////////////////////////////////////
    // Buttons that don't work yet
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
        )
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