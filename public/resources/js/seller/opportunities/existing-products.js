$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Random function needed
    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 2;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.opportunities').trigger('click');
    $('.existing-products').addClass('clicked');
    $('.existing-products').css({color: 'var(--blue-main)'});
    $('.existing-products-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.opportunities-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////
  


    ////////////////////////////////////////////////////////////////////
    function showProduct( thumbnail, title, sub_category, ean_13, brand, views, performance_status, msrp_price, product_type, product_material, main_color, updated_at ) {
        const PRODUCT_CONTAINER = $('<div>')
            .addClass('productContainer')
            .append(
                // Checkbox area
                $('<div>')
                .addClass('flexSection checkbox')
                .append(
                    $('<div>').addClass('checkbox check unchecked')
                ),
                // Image area
                $('<div>')
                .addClass('gridSection')
                .append(
                    $('<div>')
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
                ),
                // Product area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTitle').text(title),
                    $('<p>').addClass('stdText').html(`<b>Category:</b>&nbsp;<p>${sub_category}</p>`),
                    $('<p>').addClass('stdText').html(`<b>Brand:</b>&nbsp;${brand}`),
                    $('<p>').addClass('stdText').html(`<b>EAN-13:</b>&nbsp;${ean_13}`),
                ),
                // Performance area
                $('<div>')
                .addClass('flexSection performance-status'),
                // Offers area
                $('<div>')
                .addClass('flexSection offers-status')
                .append(
                    $('<p>').addClass('stdText').html(`Views (30 days):&nbsp;<b>${(views / 3).toFixed(0)}</b>`),
                    $('<p>').addClass('stdText').html(`Commission:&nbsp;<b>${getRandomInt(3) + 20}%</b>`),
                    $('<p>').addClass('stdText').html(`MSRP price:&nbsp;<b>${msrp_price} USD</b>`),
                    $('<p>').addClass('stdText').html(`Last offer:&nbsp;<b>${(updated_at.split('T'))[0]}</b>`)
                ),
                // Prices area
                $('<div>')
                .addClass('flexSection product-details')
                .append(
                    $('<p>').addClass('stdText').html(`Product type:&nbsp;<b>${product_type}</b>`),
                    $('<p>').addClass('stdText').html(`Material:&nbsp;<b>${product_material}</b>`),
                    $('<p>').addClass('stdText').html(`Color:&nbsp;<b>${main_color}</b>`),
                    $('<p>').addClass('stdText').html(`Other offers:&nbsp;<b>${getRandomInt(5)-1}</b>`),
                ),
                // Actions area
                $('<div>')
                .addClass('gridSection actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-1 actionButton')
                    .text("Add your offer"),

                    $('<button>')
                    .addClass('aB-2 actionButton')
                    .text("Add to favorites"),
                )
            );


            switch (performance_status) {
                case 'Super Hot':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText red').html('<span>Super Hot</span>'),
                    );
                    break;

                case 'Hot':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText orange').html('<span>Hot</span>'),
                    );
                    break;
                case 'Good':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText green').html('<span>Good</span>'),
                    );
                    break;

                case 'Regular':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText blue').html('<span>Regular</span>'),
                    );
                    break;

                case 'Cold':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText yellow').html('<span>Cold</span>'),
                    );
                    break;

                case 'Very Cold':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText gray').html('<span>Very Cold</span>'),
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
        $('.pageTitle').text('Existing products');
        ////////////////////////////////////////////////////////////////////



        //////////////////////////////////////////////////////////////////
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
            .html("<span>All opportunities<span>"),

            $('<button>')
            .addClass('filterButton fB-1 red')
            .data({filter: 'performance_status', type: 'Super Hot'})
            .html("<span>Super Hot<span>"),

            $('<button>')
            .addClass('filterButton fB-2 orange')
            .data({filter: 'performance_status', type: 'Hot'})
            .html("<span>Hot<span>"),

            $('<button>')
            .addClass('filterButton fB-3 green')
            .data({filter: 'performance_status', type: 'Good'})
            .html("<span>Good<span>"),

            $('<button>')
            .addClass('filterButton fB-4 blue')
            .data({filter: 'performance_status', type: 'Regular'})
            .html("<span>Regular<span>"),

            $('<button>')
            .addClass('filterButton fB-5 yellow')
            .data({filter: 'performance_status', type: 'Cold'})
            .html("<span>Cold<span>"),

            $('<button>')
            .addClass('filterButton fB-6 gray')
            .data({filter: 'performance_status', type: 'Very Cold'})
            .html("<span>Very Cold<span>"),

            $('<button>')
            .addClass('filterButton fB-6 violet')
            .data({filter: 'stock', type: '0'})
            .html("<span>Out of stock<span>"),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
        $('.subMenuSection')
        .append(
            $('<button>')
            .addClass('massActionButton mB-1')
            .text("XLS download"),

            $('<button>')
            .addClass('massActionButton mB-2')
            .text("XLS upload"),

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
            $('<div>').addClass('titleSection performance').text('Performance'),
            $('<div>').addClass('titleSection listing').text('Listing details'),
            $('<div>').addClass('titleSection details').text('Product details'),
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
                    url: `/api/opportunities/${$this.data('filter')}/${$this.data('type')}`,
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
                                    product.thumbnail,
                                    product.title,
                                    product.sub_category.parent.parent.cat_name + ' / ' + product.sub_category.parent.cat_name + ' / ' + product.sub_category.cat_name,
                                    product.ean_13,
                                    product.brand,
                                    product.views,
                                    product.performance_status,
                                    product.msrp_price,
                                    product.product_type,
                                    product.product_material,
                                    product.main_color,
                                    product.updated_at,
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



    ////////////////////////////////////////////////////////////////////
    // Buttons that don't work yet
    $(document).on('click', '.massButton', function() { 
        notification('error');
    });
    $(document).on('click', '.actionButton', function() { 
        notification('success');
    });
    ////////////////////////////////////////////////////////////////////

});