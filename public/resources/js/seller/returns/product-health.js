$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.returns').trigger('click');
    $('.product-health').addClass('clicked');
    $('.product-health').css({color: 'var(--blue-main)'});
    $('.product-health-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.returns-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    function showProduct () {
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
                $('<div>')
                .addClass('gridSection')
                .append(
                    $('<div>')
                    .css({
                        backgroundColor: 'var(--blue-lightest)',
                        height: '100%',
                        aspectRatio: '1 / 1',
                        margin: 'auto'
                    })
                ),
                // Product area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTitle').text('Borseta Tactica Kanga Fanny Olive GFC Tactical Fanny Olive GFC Tactical Fanny Olive GFC Tactical'),
                    $('<p>').addClass('stdText').html('Product SKU:&nbsp;<b>PNK-123-ABC-3456</b>'),
                    $('<p>').addClass('stdText').html('Categorie:&nbsp;<b>Accesorii camping si drumetii</b>'),
                    $('<p>').addClass('stdText').html('Brand:&nbsp;<b>GFC Tactical</b>')
                ),
                // Status area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('labelText actionButtons green').text('Available'),
                ),
                // Details area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').html('Price:&nbsp;<b>121</b>&nbsp;RON'),
                    $('<p>').addClass('stdTextCenter').html('Stock:&nbsp;<b>24</b>&nbsp;pcs'),
                    $('<p>').addClass('stdTextCenter').html('Buy button:&nbsp;<b>-</b>&nbsp;din&nbsp;<b>3</b>'),
                ),
                // Performance area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('revLabelText blue').html('<span>Regular</span>'),
                    $('<p>').addClass('stdTextCenter').html('Sales in past 14 days:&nbsp;<b>1259</b>&nbsp;RON'),
                    $('<p>').addClass('stdTextCenter').html('Sales in past 30 days:&nbsp;<b>4320</b>&nbsp;RON'),
                ),
                // Questions area
                $('<div>')
                .addClass('gridSection')
                .append(
                    $('<p>').addClass('stdTextCenter borderBottom').html('<b>0</b>&nbsp;question(s)'),
                    $('<p>').addClass('stdTextCenter').html('<b>-</b>'),
                ),
                // Reviews area
                $('<div>')
                .addClass('gridSection')
                .append(
                    $('<p>').addClass('stdTextCenter blue borderBottom').html('<b>1</b>&nbsp;review(s)'),
                    $('<p>').addClass('stdTextCenter').html('<b>-</b>'),
                ),
                // Rating area
                $('<div>')
                .addClass('gridSection')
                .append(
                    $('<p>').addClass('stdTextCenter borderBottom').html('Rating:&nbsp;<b>4.3</b>'),
                    $('<p>').addClass('stdTextCenter ratingStars').html('    '),
                ),
            );
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
        $('.pageTitle').text('Product health');
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
            $('<option>').text('Amazing'),
            $('<option>').text('Good'),
            $('<option>').text('Regular'),
            $('<option>').text('Poor'),
            $('<option>').text('Very poor'),           
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
        $('.mainTopButtons')
        .append(
            $('<button>')
            .addClass('filterButton fB-1 all')
            .attr('data-filter', 'all')
            .html("<span>All offers<span>"),

            $('<button>')
            .addClass('filterButton fB-2 green')
            .attr('data-filter', 'topReviews')
            .html("<span>Top reviews<span>"),

            $('<button>')
            .addClass('filterButton fB-3 violet')
            .attr('data-filter', 'topQuestions')
            .html("<span>Top quesrions<span>"),

            $('<button>')
            .addClass('filterButton fB-4 yellow')
            .attr('data-filter', 'newReviews')
            .html("<span>New reviews<span>"),

            $('<button>')
            .addClass('filterButton fB-5 gray')
            .attr('data-filter', 'newQuestions')
            .html("<span>New questions<span>"),

            $('<button>')
            .addClass('filterButton fB-6 red')
            .attr('data-filter', 'lowRating')
            .html("<span>Low ratng<span>"),
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
            
            setTimeout( function(){
                $('.loadingDiv').hide()
                $('.dynamicProductsArea').fadeIn();
                $('.dynamicProductsArea').append(showProduct())
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