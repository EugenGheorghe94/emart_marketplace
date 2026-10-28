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
    $('.stocks').addClass('clicked');
    $('.stocks').css({color: 'var(--blue-main)'});
    $('.stocks-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.offers-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    function showProduct ( id, thumbnail, title, product_sku, sub_category, brand, stock, performance_status, listing_status, first_listing, final_price) {
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
                .addClass('flexSection')
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
                // Stock & Price area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<div>')
                    .css({
                        backgroundColor: 'var(--gray-lighter-sh)',
                        boxSizing: 'border-box',
                        padding: '0px 8px 0px 8px',
                        fontSize: '14px',
                        color: 'var(--gray-darkest)',
                    })
                    .append(
                        $('<div>')
                        .addClass('stockPriceRows')
                        .append(
                            $('<p>').html('<b>For sale:</b>'),
                            $('<p>').html(`<b>stock</b>`)
                        ),
                        $('<div>')
                        .addClass('stockPriceRows')
                        .append(
                            $('<p>').text('Seller stock:'),
                            $('<input>').attr({
                                placeholder: stock
                            })
                        ),
                        $('<div>')
                        .addClass('stockPriceRows')
                        .append(
                            $('<p>').text('FBE stock:'),
                            $('<p>').html('<b>0</b>')
                        )
                    )
                ),
                // Inventory area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdText').html(`Days until out of stock:&nbsp;<b>${getRandomInt(10) + 3}</b>`),
                    $('<p>').addClass('stdText').html('Days needed to restock:&nbsp;<b>15</b>'),
                    $('<p>').addClass('stdText').html('Supplier order date:&nbsp;<b>21.06.2022</b>'),
                    $('<p>').addClass('stdText').html(`Sales lost:&nbsp;<b>${(final_price * 2).toFixed(0)}</b>`),
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

                    $('<button>')
                    .addClass('aB-4 actionButton')
                    .text("Import stock file"),

                     $('<button>')
                    .addClass('aB-3 actionButton')
                    .text("Save changes"),
                );
            } else {
                PRODUCT_CONTAINER.find('.actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-2 actionButton')
                    .text("Inactivate offer"),

                    $('<button>')
                    .addClass('aB-4 actionButton')
                    .text("Import stock file"),

                     $('<button>')
                    .addClass('aB-3 actionButton')
                    .text("Save changes"),
                );
            }


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
        $('.pageTitle').text('Stocks');
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
            .addClass('filterButton fB-2 available')
            .data({filter: 'listing_status', type: 'Available'})
            .html("<span>Available<span>"),

            $('<button>')
            .addClass('filterButton fB-3 unavailable')
            .data({filter: 'listing_status', type: 'Unavailable'})
            .html("<span>Unavailable<span>"),

            $('<button>')
            .addClass('filterButton fB-4 restock')
            .data({filter: 'stock', type: '0'})
            .html("<span>Restock needed<span>"),

            $('<button>')
            .addClass('filterButton fB-5 inactive')
            .data({filter: 'listing_status', type: 'Inactive'})
            .html("<span>Inactive<span>"),

            $('<button>')
            .addClass('filterButton fB-6 blocked')
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
            .text("Save changes"),

            $('<button>')
            .addClass('massActionButton mB-4')
            .text("Import stock file"),

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
            $('<div>').addClass('titleSection stock').text('Stock'),
            $('<div>').addClass('titleSection inventory').text('Inventory'),
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

                            $('.dynamicProductsArea')
                            .append(
                                showProduct(
                                    product.id,
                                    product.thumbnail,
                                    product.title,
                                    product.product_sku,
                                    product.sub_category.parent.parent.cat_name + ' / ' + product.sub_category.parent.cat_name + ' / ' + product.sub_category.cat_name,
                                    product.brand,
                                    product.stock,
                                    product.performance_status,
                                    product.listing_status,
                                    product.first_listing,
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