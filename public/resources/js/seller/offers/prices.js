$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Random function needed
    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 2;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.myOffers').trigger('click');
    $('.prices').addClass('clicked');
    $('.prices').css({color: 'var(--blue-main)'});
    $('.prices-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.offers-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    function showProduct ( id, thumbnail, title, product_sku, sub_category, brand, pricing_status, performance_status, listing_status, first_listing, msrp_price, list_price, final_price ) {
        const PRODUCT_CONTAINER = $('<div>')
            .addClass('productContainer')
            .append(
                // Checkbox area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<div>').addClass('checkbox check unchecked')
                ),
                // Image area
                $('<a>')
                .addClass('gridSection')
                .append(
                    $('<a>')
                    .css({
                        height: '100%',
                        aspectRatio: '1 / 1',
                        margin: 'auto',
                        backgroundColor: 'white',
                        backgroundImage: `url(/storage/products/thumbnails/${thumbnail})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain'
                    })
                    .attr({ href: `/product/${id}/${product_sku}`})
                ),
                // Product area
                $('<div>')
                .addClass('flexSection product-details')
                .append(
                    $('<a>').addClass('stdTitle').text(title).attr({ href: `/product/${id}/${product_sku}`}),
                    $('<p>').addClass('stdText').html(`<b>Product SKU:</b>&nbsp;${product_sku}`),
                    $('<p>').addClass('stdText').html(`<b>Category:</b>&nbsp;<p>${sub_category}</p>`),
                    $('<p>').addClass('stdText').html(`<b>Brand:</b>&nbsp;${brand}`),
                ),
                // Status area
                $('<div>')
                .addClass('flexSection listing-status'),
                // Performance area
                $('<div>')
                .addClass('flexSection performance-status'),
                // Status area
                $('<div>')
                .addClass('flexSection pricing-status'),
                // Stock & Price area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<div>')
                    .css({
                        backgroundColor: 'var(--gray-lighter-sh)',
                        boxSizing: 'border-box',
                        padding: '4px 8px 0px 8px',
                        fontSize: '14px',
                        color: 'var(--gray-darkest)',
                    })
                    .append(
                        $('<div>')
                        .addClass('stockPriceRows')
                        .append(
                            $('<p>').text('List price:'),
                            $('<input>').attr({
                                placeholder: list_price
                            })
                        ),
                        $('<div>')
                        .addClass('stockPriceRows')
                        .append(
                            $('<p>').text('MSRP:'),
                            $('<input>').attr({
                                placeholder: msrp_price
                            })
                        ),
                        $('<div>')
                        .addClass('stockPriceRows')
                        .append(
                            $('<p>').text('Best price:'),
                            $('<p>').html(`<b>$ ${final_price}</b>`)
                        )
                    )
                ),     
                // Actions area
                $('<div>')
                .addClass('gridSection actionSection')
            );

            
            if ( listing_status == 'Inactive' ) {
                PRODUCT_CONTAINER.find('.actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-1 actionButton')
                    .text("Activate offer"),
                );
            } else {
                PRODUCT_CONTAINER.find('.actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-2 actionButton')
                    .text("Inactivate offer"),
                );
            }


            if ( pricing_status == 'Invalid' ) {
                PRODUCT_CONTAINER.find('.actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-3 actionButton')
                    .text("Validate price"),
                );
            }


            if ( pricing_status != 'Best' ) {
                PRODUCT_CONTAINER.find('.actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-4 actionButton')
                    .text("Match best price"),
                );
            }


            switch (pricing_status) {
                case 'Best':
                    PRODUCT_CONTAINER.find('.pricing-status')
                    .append($('<p>').addClass('labelText actionButtons green').text('Best'),);
                    break;

                case 'Lower':
                    PRODUCT_CONTAINER.find('.pricing-status')
                    .append($('<p>').addClass('labelText actionButtons violet').text('Lower'));
                    break;

                case 'Unfair':
                    PRODUCT_CONTAINER.find('.pricing-status')
                    .append($('<p>').addClass('labelText actionButtons yellow').text('Unfair'));
                    break;

                case 'Invalid':
                    PRODUCT_CONTAINER.find('.pricing-status')
                    .append($('<p>').addClass('labelText actionButtons red').text('Invalid'));
                    break;
            };


            switch (listing_status) {
                case 'Available':
                    PRODUCT_CONTAINER.find('.listing-status')
                    .append($('<p>').addClass('labelText actionButtons green').text('Available'));
                    break;

                case 'Unavailable':
                    PRODUCT_CONTAINER.find('.listing-status')
                    .append($('<p>').addClass('labelText actionButtons yellow').text('Unavailable'));
                    break;

                case 'Inactive':
                    PRODUCT_CONTAINER.find('.listing-status')
                    .append($('<p>').addClass('labelText actionButtons gray').text('Inactive'));
                    break;

                case 'Blocked':
                    PRODUCT_CONTAINER.find('.listing-status')
                    .append($('<p>').addClass('labelText actionButtons red').text('Blocked'));
                    break;

                case 'End of Life':
                    PRODUCT_CONTAINER.find('.listing-status')
                    .append($('<p>').addClass('labelText actionButtons black').text('End of Life'));
                    break;
            };


            switch (performance_status) {
                case 'Super Hot':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText red').html('<span>Super Hot</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(5)}</b>`),
                        $('<p>').addClass('stdTextCenter').html(`Past 30 days:&nbsp;<b>${(final_price * 9).toFixed(0)} USD</b>`),
                    );
                    break;

                case 'Hot':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText orange').html('<span>Hot</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(5)}</b>`),
                        $('<p>').addClass('stdTextCenter').html(`Past 30 days:&nbsp;<b>${(final_price * 7).toFixed(0)} USD</b>`),
                    );
                    break;
                case 'Good':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText green').html('<span>Good</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(4)}</b>`),
                        $('<p>').addClass('stdTextCenter').html(`Past 30 days:&nbsp;<b>${(final_price * 5).toFixed(0)} USD</b>`),
                    );
                    break;

                case 'Regular':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText blue').html('<span>Regular</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(4)}</b>`),
                        $('<p>').addClass('stdTextCenter').html(`Past 30 days:&nbsp;<b>${(final_price * 4).toFixed(0)} USD</b>`),
                    );
                    break;

                case 'Cold':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText yellow').html('<span>Cold</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(3)}</b>`),
                        $('<p>').addClass('stdTextCenter').html(`Past 30 days:&nbsp;<b>${(final_price * 3).toFixed(0)} USD</b>`),
                    );
                    break;

                case 'Very Cold':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText gray').html('<span>Very Cold</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(2)}</b>`),
                        $('<p>').addClass('stdTextCenter').html(`Past 30 days:&nbsp;<b>${(final_price * 1).toFixed(0)} USD</b>`),
                    );
                    break;
            }

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
        $('.pageTitle').text('Prices');
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Small filter options
        $('.smallFilterSelect')
        .append(
            $('<option>').text('SKU'),
            $('<option>').text('Name'),
            $('<option>').text('Brand'),
            $('<option>').text('Status'),
            $('<option>').text('Category'),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 1
        $('.expFilter-1')
        .append(
            $('<option>').text('SKU'),
            $('<option>').text('Name'),
            $('<option>').text('Brand'),
            $('<option>').text('Status'),
            $('<option>').text('Category'),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 2
        $('.expFilter-2')
        .append(
            $('<option>').text('SKU'),
            $('<option>').text('Name'),
            $('<option>').text('Brand'),
            $('<option>').text('Status'),
            $('<option>').text('Category'),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 3
        $('.expFilter-status')
        .append(
            $('<option>').text('All'),
            $('<option>').text('Inactive'),
            $('<option>').text('Available'),
            $('<option>').text('Unavailable'),
            $('<option>').text('End of life'),
            $('<option>').text('Blocked'),
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
            .text('Performance')
            .addClass('selectOption'),
            $('<option>').text('All'),
            $('<option>').text('Super Hot'),
            $('<option>').text('Hot'),
            $('<option>').text('Good'),
            $('<option>').text('Regular'),
            $('<option>').text('Cold'),
            $('<option>').text('Very cold')    
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
        $('.mainTopButtons')
        .append(
            $('<button>')
            .addClass('filterButton fB-1 all')
            .data({filter: 'all', type: 'all'})
            .html("<span>All offers<span>"),

            $('<button>')
            .addClass('filterButton fB-2 bestPrice green')
            .data({filter: 'pricing_status', type: 'Best'})
            .html("<span>Best price<span>"),

            $('<button>')
            .addClass('filterButton fB-3 lower')
            .data({filter: 'pricing_status', type: 'Lower'})
            .html("<span>Lower prices<span>"),

            $('<button>')
            .addClass('filterButton fB-4 available')
            .data({filter: 'listing_status', type: 'Available'})
            .html("<span>Available<span>"),

            $('<button>')
            .addClass('filterButton fB-5 unavailable')
            .data({filter: 'listing_status', type: 'Unavailable'})
            .html("<span>Unavailable<span>"),

            $('<button>')
            .addClass('filterButton fB-6 invalid')
            .data({filter: 'pricing_status', type: 'Invalid'})
            .html("<span>Invalid price<span>"),

            $('<button>')
            .addClass('filterButton fB-7 unfair')
            .data({filter: 'pricing_status', type: 'Unfair'})
            .html("<span>Unfair price<span>"),

            $('<button>')
            .addClass('filterButton fB-8 inactive')
            .data({filter: 'listing_status', type: 'Inactive'})
            .html("<span>Inactive<span>"),

            $('<button>')
            .addClass('filterButton fB-9 blocked')
            .data({filter: 'listing_status', type: 'Blocked'})
            .html("<span>Blocked<span>"),

        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
        $('.subMenuSection')
        .append(
            $('<button>')
            .addClass('massActionButton mB-1')
            .text("Activate offer"),
            
            $('<button>')
            .addClass('massActionButton mB-2')
            .text("Inactivate offer"),

            $('<button>')
            .addClass('massActionButton mB-3')
            .text("Validate price"),

            $('<button>')
            .addClass('massActionButton mB-4')
            .text("Match best price"),

            $('<button>')
            .addClass('selectedOffers')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Dynamic section titles
        $('.tableTitle')
        .append(
            $('<div>').addClass('titleSection master-check m-unchecked'),
            $('<div>').addClass('titleSection image').text('Image'),
            $('<div>').addClass('titleSection product').text('Product'),
            $('<div>').addClass('titleSection status').text('Status'),
            $('<div>').addClass('titleSection performance').text('Performance'),
            $('<div>').addClass('titleSection status').text('Pricing'),
            $('<div>').addClass('titleSection price').text('Price'),
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


            setTimeout( function() {
               $.ajax({
                    url: `/api/product/${$this.data('filter')}/${$this.data('type')}`,
                    method: 'GET',
                    success(response) {


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
                        

                        // Response brakedown and append 
                        $.each(response.slice(startIndex, stopIndex), function(i, product) {

                            //image, title, product_sku, sub_category, brand, pricing_status, performance_status, listing_status, first_listing, stock, final_price 
                            $('.dynamicProductsArea')
                            .append(
                                showProduct(
                                    product.id,
                                    product.thumbnail,
                                    product.title,
                                    product.product_sku,
                                    product.sub_category.parent.parent.cat_name + ' / ' + product.sub_category.parent.cat_name + ' / ' + product.sub_category.cat_name,
                                    product.brand,
                                    product.pricing_status,
                                    product.performance_status,
                                    product.listing_status,
                                    product.first_listing,
                                    product.msrp_price,
                                    product.list_price,
                                    product.final_price
                                )
                            )
                        });
                        $('.loadingDiv').hide()
                        $('.dynamicProductsArea').fadeIn();
                    }
                });
            }, 500)
        });
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // First filter pre-selected
        $('.all').trigger('click');
        ////////////////////////////////////////////////////////////////////


        
    });
    ////////////////////////////////////////////////////////////////////


});