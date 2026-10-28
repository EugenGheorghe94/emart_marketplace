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
    $('.reviews').addClass('clicked');
    $('.reviews').css({color: 'var(--blue-main)'});
    $('.reviews-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.offers-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    function showProduct ( id, thumbnail, title, product_sku, sub_category, brand, stock, performance_status, listing_status, first_listing, final_price, prod_reviews_avg_rating, prod_reviews_count ) {
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
                // Details area
                $('<div>')
                .addClass('flexSection offer-details'),
                // Performance area
                $('<div>')
                .addClass('flexSection performance-status'),
                // Questions area
                $('<div>')
                .addClass('gridSection')
                .append(
                    $('<p>').addClass('stdTextCenter borderBottom').html(`<b>${getRandomInt(8)-2}</b>&nbsp;question(s)`),
                    $('<p>').addClass('stdTextCenter').html('<b>-</b>'),
                ),
                // Reviews area
                $('<div>')
                .addClass('gridSection review-status'),
                // Rating area
                $('<div>')
                .addClass('gridSection rating-status')
            );

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
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 14 days:&nbsp;<b>${(final_price * 5).toFixed(0)}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 30 days:&nbsp;<b>${(final_price * 9).toFixed(0)}</b>&nbsp;USD`),
                    );
                    PRODUCT_CONTAINER.find('.offer-details')
                    .append(
                        $('<p>').addClass('stdTextCenter').html(`Price:&nbsp;<b>${final_price}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Stock:&nbsp;<b>${stock}</b>&nbsp;pcs`),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(5)}</b>`),
                    )
                    break;

                case 'Hot':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText orange').html('<span>Hot</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 14 days:&nbsp;<b>${(final_price * 5).toFixed(0)}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 30 days:&nbsp;<b>${(final_price * 9).toFixed(0)}</b>&nbsp;USD`),
                    );
                    PRODUCT_CONTAINER.find('.offer-details')
                    .append(
                        $('<p>').addClass('stdTextCenter').html(`Price:&nbsp;<b>${final_price}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Stock:&nbsp;<b>${stock}</b>&nbsp;pcs`),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(5)}</b>`),
                    )
                    break;
                case 'Good':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText green').html('<span>Good</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 14 days:&nbsp;<b>${(final_price * 5).toFixed(0)}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 30 days:&nbsp;<b>${(final_price * 9).toFixed(0)}</b>&nbsp;USD`),
                    );
                    PRODUCT_CONTAINER.find('.offer-details')
                    .append(
                        $('<p>').addClass('stdTextCenter').html(`Price:&nbsp;<b>${final_price}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Stock:&nbsp;<b>${stock}</b>&nbsp;pcs`),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(5)}</b>`),
                    )
                    break;

                case 'Regular':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText blue').html('<span>Regular</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 14 days:&nbsp;<b>${(final_price * 5).toFixed(0)}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 30 days:&nbsp;<b>${(final_price * 9).toFixed(0)}</b>&nbsp;USD`),
                    );
                    PRODUCT_CONTAINER.find('.offer-details')
                    .append(
                        $('<p>').addClass('stdTextCenter').html(`Price:&nbsp;<b>${final_price}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Stock:&nbsp;<b>${stock}</b>&nbsp;pcs`),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(5)}</b>`),
                    )
                    break;

                case 'Cold':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText yellow').html('<span>Cold</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 14 days:&nbsp;<b>${(final_price * 5).toFixed(0)}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 30 days:&nbsp;<b>${(final_price * 9).toFixed(0)}</b>&nbsp;USD`),
                    );
                    PRODUCT_CONTAINER.find('.offer-details')
                    .append(
                        $('<p>').addClass('stdTextCenter').html(`Price:&nbsp;<b>${final_price}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Stock:&nbsp;<b>${stock}</b>&nbsp;pcs`),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(5)}</b>`),
                    )
                    break;

                case 'Very Cold':
                    PRODUCT_CONTAINER.find('.performance-status')
                    .append(
                        $('<p>').addClass('revLabelText gray').html('<span>Very Cold</span>'),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 14 days:&nbsp;<b>${(final_price * 5).toFixed(0)}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Sales in past 30 days:&nbsp;<b>${(final_price * 9).toFixed(0)}</b>&nbsp;USD`),
                    );
                    PRODUCT_CONTAINER.find('.offer-details')
                    .append(
                        $('<p>').addClass('stdTextCenter').html(`Price:&nbsp;<b>${final_price}</b>&nbsp;USD`),
                        $('<p>').addClass('stdTextCenter').html(`Stock:&nbsp;<b>${stock}</b>&nbsp;pcs`),
                        $('<p>').addClass('stdTextCenter').html(`Buy button:&nbsp;<b>${2 - first_listing}</b>&nbsp;of&nbsp;<b>${getRandomInt(5)}</b>`),
                    )
                    break;

                }

            if ( prod_reviews_avg_rating > 0 ) {
                PRODUCT_CONTAINER.find('.review-status')
                .append(
                    $('<p>').addClass('stdTextCenter blue borderBottom').html(`<b>${prod_reviews_count}</b>&nbsp;review(s)`),
                    $('<p>').addClass('stdTextCenter').html('<b>-</b>'),
                )
            } else {
                PRODUCT_CONTAINER.find('.review-status')
                .append(
                    $('<p>').addClass('stdTextCenter blue borderBottom').html(`<b>0</b>&nbsp;review(s)`),
                    $('<p>').addClass('stdTextCenter').html('<b>-</b>'),
                )
            }


            if ( prod_reviews_count > 0 ) {
                PRODUCT_CONTAINER.find('.rating-status')
                .append(
                    $('<p>').addClass('stdTextCenter borderBottom').html(`Rating:&nbsp;<b>${prod_reviews_avg_rating.toFixed(2)}</b>`),
                    $('<p>').addClass('stdTextCenter ratingStars').html(`<div class="stars-empty gray"></div><div class="stars-filled yellow" style="width: ${100/(5/prod_reviews_avg_rating)}%"></div>`)
                )
            } else {
                PRODUCT_CONTAINER.find('.rating-status')
                .append(
                    $('<p>').addClass('stdTextCenter borderBottom').html(`Rating:&nbsp;<b>0</b>`),
                    $('<p>').addClass('stdTextCenter ratingStars').html(`<div class="stars-empty gray"></div><div class="stars-filled yellow" style="width: 0%"></div>`)
                )
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
        $('.prevPage').on('click', function(e) { e.preventDefault(); });
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Page title
        $('.pageTitle').text('Reviews');
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
            .addClass('filterButton fB-2 violet')
            .data({filter: 'prod_reviews_avg_rating', type: '4'})
            .html("<span>Top reviews<span>"),

            $('<button>')
            .addClass('filterButton fB-2 green')
            .data({filter: 'prod_reviews_avg_rating', type: '5'})
            .html("<span>5 stars<span>"),

            $('<button>')
            .addClass('filterButton fB-3 lightgreen')
            .data({filter: 'prod_reviews_avg_rating', type: '4'})
            .html("<span>4 stars<span>"),

            $('<button>')
            .addClass('filterButton fB-4 yellow')
            .data({filter: 'prod_reviews_avg_rating', type: '3'})
            .html("<span>3 stars<span>"),

            $('<button>')
            .addClass('filterButton fB-5 orange')
            .data({filter: 'prod_reviews_avg_rating', type: '2'})
            .html("<span>2 stars<span>"),

            $('<button>')
            .addClass('filterButton fB-5 red')
            .data({filter: 'prod_reviews_avg_rating', type: '1'})
            .html("<span>1 star<span>"),

            $('<button>')
            .addClass('filterButton fB-6 gray')
            .data({filter: 'no_rating', type: 'null'})
            .html("<span>No reviews<span>"),
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
            $('<div>').addClass('titleSection details').text('Offer Details'),
            $('<div>').addClass('titleSection performance').text('Performance'),
            $('<div>').addClass('titleSection questions').text('Questions'),
            $('<div>').addClass('titleSection reviews').text('Reviews'),
            $('<div>').addClass('titleSection rating').text('Rating')
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
                                    product.final_price,
                                    product.prod_reviews_avg_rating,
                                    product.prod_reviews_count
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
    


});