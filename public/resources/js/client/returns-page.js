$(document).ready( function(){



    ////////////////////////////////////////////////////////////////////
    // Initial initialization of global variables
    var PAGE_NUMBER = 1;        // for pagination
    var itemsPerPage = 10;
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Show add-return modal on click
    $(document).on('click', '.add-return', function() {
        $('.return-backdrop').fadeIn('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close add-return modal on click outside
    $('.return-backdrop').on('click', function() {
        $(this).fadeOut('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Stop click inside from closing add-return modal
    $('.return-modal').on('click', function(e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close add-return modal from top right "x" button
    $('.close-return-modal').on('click', function() {
        $('.return-backdrop').fadeOut('fast');
    });
    ////////////////////////////////////////////////////////////////////
    

    
    ////////////////////////////////////////////////////////////////////
    // Fill return container
    function fillReturns(status_type, return_number, created_at, full_name, client_email, phone_number, address, bank_account, return_type, refund_type, order_number, company_name) {
        const RETURN_CARD = 
            $('<div>')
            .addClass('return-card')
            .append(
                $('<div>')
                .addClass('return-card__summary')
                .append(
                    $('<div>')
                    .addClass('return-card__summary-id')
                    .append(
                        $('<p>').text(`Return #${return_number}`),  
                        $('<p>').text(`from: ${created_at}`),  
                    ),
                    $('<div>')
                    .addClass(`return-card__summary-products return${return_number}`),

                    $('<div>')
                    .addClass('return-card__summary-status')
                    .append(
                        $('<p>').attr('title', `Return status: ${status_type}`).text(status_type)
                    ),
                    $('<div>')
                    .addClass('return-card__summary-button')
                    .append(
                        $('<button>').addClass('return-button').text('see more')
                    )
                ),
                $('<div>')
                .addClass('return-card__info')
                .append(
                    $('<div>')
                    .addClass('return-card__info-contact')
                    .append(
                        $('<span>').text('Delivery details'),
                        $('<div>')
                        .append(
                            $('<p>').text('Client full name:'),
                            $('<p>').text(full_name)
                        ),
                        $('<div>')
                        .append(
                            $('<p>').text('E-mail address:'),
                            $('<p>').text(client_email)
                        ),
                        $('<div>')
                        .append(
                            $('<p>').text('Phone number:'),
                            $('<p>').text(phone_number)
                        ),
                        $('<div>')
                        .append(
                            $('<p>').text('Return delivery address:'),
                            $('<p>').text(address)
                        ),
                        $('<div>')
                        .append(
                            $('<p>').text('Bank account (SWIFT/BIC):'),
                            $('<p>').text(bank_account)
                        ),
                    ),
                    $('<div>')
                    .addClass('return-card__info-return')
                    .append(
                        $('<span>').text('Return details'),
                        $('<div>')
                        .append(
                            $('<p>').text('Return date:'),
                            $('<p>').text(created_at)
                        ),
                        $('<div>')
                        .append(
                            $('<p>').text('Return pickup option:'),
                            $('<p>').text(return_type)
                        ),
                        $('<div>')
                        .append(
                            $('<p>').text('Return refund option:'),
                            $('<p>').text(refund_type)
                        ),
                        $('<div>')
                        .append(
                            $('<p>').text('Products from order:'),
                            $('<p>').text(`#${order_number}`)
                        ),
                        $('<div>')
                        .append(
                            $('<p>').text('Sold and delivered by:'),
                            $('<p>').text(company_name)
                        )
                    )
                )
            )
        return RETURN_CARD;
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call for user order numbers and dates
    $.ajax({
        url: '/returnable/orders',
        method: 'GET',
        success(response) {
            $.each(response, function(index, order){
                $('.orderSelect').append(
                    $('<option>').data({order: order.order_number}).text("#" + order.order_number + " / " + order.created_at.split('T')[0])
                )
            });
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to get client returns
    function getReturns() {
        $.ajax({
            url: '/client/returns',
            method: 'GET',
            success(response) {
                

                // If user doesn't have any orders, show nice svg logo
                if ( response.length == 0 ) {


                    // Remove loader gif
                    $('.returns-area__cards').html('').removeClass('loader');


                    // Add "no orders" text
                    $('.returns-area')
                    .append(
                        $('<div>')
                        .addClass('returns-area__empty')
                        .append(
                            $('<div>'),
                            $('<p>')
                            .html('You have not placed any return orders yet.<br>Once you submit a return request it will show up here.'),
                            $('<p>')
                            .html("Add a return request order by clicking the button below.<br>After you submit the return request you can check it's status here."),
                            $('<button>')
                            .text('add a return request')
                            .addClass('add-return')
                        )
                    );


                    // Make container height auto
                    $('.returns-area__cards').css({ height: 'auto'});


                // If user has any orders
                } else if ( response.length > 0 ) {


                    // Remove old pagination
                    $('.pagination').remove();


                    // Add reviews pagination buttons
                    $('.returns-area__cards').html('').removeClass('loader');


                    // Add pagination
                    $('.returns-area').after(
                        $('<div>')
                        .addClass('pagination')
                        .append(
                            $('<p>').addClass('pagination-details'),
                            $('<div>').addClass('pagination-buttons')
                        )
                    )


                    // Orders page split
                    const RETURNS_TO_SHOW = response.slice( (PAGE_NUMBER * itemsPerPage) - itemsPerPage, (PAGE_NUMBER * itemsPerPage) );


                    // 
                    $.each(RETURNS_TO_SHOW, function(index, returnOrder) {
                        $('.returns-area__cards')
                        .removeClass('loader')
                        .append(
                            fillReturns(
                                returnOrder.status_type,
                                returnOrder.return_number,
                                returnOrder.created_at.split('.')[0].split('T')[0] + ' ' + returnOrder.created_at.split('.')[0].split('T')[1],
                                returnOrder.first_name + ' ' +  returnOrder.last_name,
                                returnOrder.client_email,
                                returnOrder.phone_number,
                                returnOrder.address,
                                returnOrder.bank_account,
                                returnOrder.return_type,
                                returnOrder.refund_type,
                                returnOrder.order_number,
                                returnOrder.company_name),
                        );


                        // 
                        $.each(returnOrder.details, function(index, product) {
                            $(`.return${returnOrder.return_number}`)
                            .append(
                                $('<div>').append(
                                    $('<a>').css({ backgroundImage: `url('/storage/products/thumbnails/${product.product.thumbnail}')` }).attr({ href: `/product/${product.product.id}/${product.product.product_sku}` }),
                                    $('<a>').text(product.product.title).attr({ href: `/product/${product.product.id}/${product.product.product_sku}` })
                                ),
                            )
                        });
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
    getReturns();
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Function for page change logic
    function changePage() {
        $('.pageinview').removeClass('pageinview')
        $(this).addClass('pageinview');
        $('.returns-area').css({ opacity: '0'})
        setTimeout( function() {
            $('.returns-area').css({ opacity: '1'});
            $("html, body").animate({ scrollTop: 0 }, "fast");
    }, 250);
        getReturns()
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



    ////////////////////////////////////////////////////////////////////
    // AJAX for order selected products
    $(document).on('change', '.orderSelect', function() {
        $.ajax({
            url: `/returnable/products/${$('.orderSelect option:selected').data('order')}`,
            method: 'GET',
            success(response) {


                // Reset form on order change
                $('.oneMoreOption').remove();
                $('.extraProduct').remove();
                $('.productSelect').html('<option selected disabled hidden>select a product</option>').css({color: 'var(--gray-darker)'});
                

                // If order has no more products to return
                if ( response.length == 0 ) {
                    $('.productSelect').css({ backgroundColor: 'var(--gray-light', pointerEvents: 'none', userSelect: 'none'});
                } else { $('.productSelect').css({ backgroundColor: '', pointerEvents: '', userSelect: ''}); };


                // Append each product to initial dropdown list
                $.each(response, function(index, returnable) {
                    returnable.product_id != null ? $('.productSelect').append($('<option>').data({sku: returnable.product.product_sku, seller: returnable.seller_id}).text(returnable.product.title.length > 52 ? returnable.product.title.substr(0, 50) + '...' : returnable.product.title )) : undefined;
                });


                // Add "+" button if more than one product in order (without shipping)
                response.length > 2 ? $('.productSelect').parent().append($('<button>').addClass('oneMoreOption').data({products: response.length - 1}).text('+')) : undefined;
            
            
                // If "+" button clicked
                $('.oneMoreOption').on('click', function() {


                    // If perent container has fewer children than response length - 1 for shipping
                    if ( $(this).parent().children().length - 1 < response.length ) {
                        $(this).before(
                            $('<select>').addClass('productSelect selectField extraProduct').html('<option selected disabled hidden>select a product</option>')
                        );


                        // Append each product to each extra dropdown list
                        $.each(response, function(index, returnable) {
                            returnable.product_id != null ? $('.extraProduct').last().append($('<option>').data({sku: returnable.product.product_sku, seller: returnable.seller_id}).text(returnable.product.title.length > 52 ? returnable.product.title.substr(0, 50) + '...' : returnable.product.title )) : undefined;
                        });


                        // Check if parent has the same number of children as response length to remove or continue show "+" button
                        $(this).parent().children().length - 1 == response.length ? $(this).remove() : undefined;
                    }
                });
            }
        });
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // On user select do something based on condition
    $('.selectField').on('change', function() {


        // If return need refund details
        if( $('.returnType').val() == 'Delivery address' && $('.refundType').val() == 'I want my money back' ) {
            $('.refundDetails').remove();
            $('.returnDetails')
            .after(
                $('<div>')
                .addClass('refundDetails')
                .html(`
                    <p>Refund details</p>
                    <label for="">
                        Client full name:
                        <input type="text" placeholder="ex. John Smith" class="inputField fullName">
                    </label>
                    <label for="">
                        Phone number:
                        <input type="text" placeholder="(xxx) xxx-xxxx" class="inputField phoneNumber">
                    </label>
                    <label for="">
                        Return delivery address:
                        <input type="text" placeholder="ex. 567 Sunset Blvd, Los Angeles, CA 90028" class="inputField deliveryAddress">
                    </label>
                    <label for="">
                        Bank account (SWIFT/BIC):
                        <input type="text" placeholder="ex. US1234SWFT12341234" class="inputField bankAccount">
                    </label>
                    `
                )
            );


        // If return is voucher and does not need bank account
        } else if ( $('.returnType').val() == 'Delivery address' && $('.refundType').val() == 'I want eMART voucher' ) {
            $('.refundDetails').remove();
            $('.returnDetails')
            .after(
                $('<div>')
                .addClass('refundDetails')
                .html(`
                    <p>Refund details</p>
                    <label for="">
                        Client full name:
                        <input type="text" placeholder="ex. John Smith" class="inputField fullName">
                    </label>
                    <label for="">
                        Phone number:
                        <input type="text" placeholder="(xxx) xxx-xxxx" class="inputField phoneNumber">
                    </label>
                    <label for="">
                        Return delivery address:
                        <input type="text" placeholder="ex. 567 Sunset Blvd, Los Angeles, CA 90028" class="inputField deliveryAddress">
                    </label>
                    `
                )
            );


        // Remove if exists
        } else { $('.refundDetails').remove(); }


        // Removes warning if user clicks field
        $('input').on('click', function() { $(this).removeClass('required'); });
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Expand return container
    $(document).on('click', '.return-button', function() {
        $(this).toggleClass('expanded').parent().parent().parent().find('.return-card__info').slideToggle(200);
        if ( !$(this).hasClass('expanded') ) {
            $(this).text('see more');
        } else {
            $(this).text('see less');
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Removes warning if user clicks field
    $('select').on('click', function() {
        $(this).removeClass('required');
    });
    ////////////////////////////////////////////////////////////////////
   


    ////////////////////////////////////////////////////////////////////
    // Selected is black not gray
    $(document).on('change', 'select', function() {
        $(this).css({ color: 'black'});
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // On submit check fields
    $('.submitReturn').on('click', function() {


        // Variable to check
        let ALL_FIELDS_COMPLETED = true;


        // Check all "Retun details" select fields
        $.each($('.selectField'), function(index, element) {
            $(this).val() == null ? ($(this).addClass('required'), ALL_FIELDS_COMPLETED = false) : undefined;
        });


        // Check all "Refund details" input fields
        $.each($('.inputField'), function(index, element) {
            $(this).val().length < 1 ? ($(this).addClass('required'), ALL_FIELDS_COMPLETED = false) : undefined;
        });


        // Check "Terms and conditions" checkbox
        !$('#terms').is(':checked') ? ALL_FIELDS_COMPLETED = false : undefined;


        // If all fields required have data in them
        if( ALL_FIELDS_COMPLETED ){


            // Build skus array
            let SKUs_RETURNED = [];
            $.each($('.productSelect').find('option:selected'), function(index, field) {
                SKUs_RETURNED.push([$(field).data('seller'), $(field).data('sku')]);
            });


            // If return any other options that needs refund details
            $.ajax({
                url: '/return/standard/details',
                method: 'POST',
                data: { 
                    order_number: $('.orderSelect').find('option:selected').data('order'),
                    product_skus: SKUs_RETURNED,
                    return_type: $('.returnType').find('option:selected').val(),
                    refund_type: $('.refundType').find('option:selected').val(),
                    full_name: $('.fullName').val()?.trim() || '',
                    phone_number: $('.phoneNumber').val()?.trim() || '',
                    delivery_address: $('.deliveryAddress').val()?.trim() || '',
                    bank_account: $('.bankAccount').val()?.trim() || '',
                },
                success(response) {}
            });


            // Return confirmation
            $('.return-modal').html('')
            .append(
                $('<div>')
                .addClass('thank-you')
                .append(
                    $('<span>'),
                    $('<p>').text("Thank you!"),
                    $('<p>').text("We're getting everything ready, you will receive a confirmation email shortly. You can track your return status from your account dashboard."),
                    $('<p>').text("you'll be redirected to your returns page...")
                )
            );


            // Refresh page after 2 seconds
            setTimeout( function() {
                window.location.href = "/returns";
            }, 1000);
        };
    });
    ////////////////////////////////////////////////////////////////////



});


   