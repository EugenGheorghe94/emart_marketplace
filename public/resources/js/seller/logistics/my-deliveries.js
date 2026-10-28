 $(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.logistics').trigger('click');
    $('.deliveries').addClass('clicked');
    $('.deliveries').css({color: 'var(--blue-main)'});
    $('.deliveries-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.logistics-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    function showProduct() {
        const PRODUCT_CONTAINER = $('<div>')
            .addClass('productContainer')
            .append(
                // Checkbox area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<div>').addClass('checkbox check unchecked')
                ),
                // Type area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text('Order'),
                    $('<p>').addClass('stdTextCenter link blue').text('4378968521')
                ),
                // AWB area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').html('<b>FedEX Priority</b>'),
                    $('<p>').addClass('stdTextCenter link blue').text('2145FDEX487000659')
                ),
                // Order date area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text('12-06-2026'),
                    $('<p>').addClass('stdTextCenter').text('12:45:23')
                ),
                // Shipping date area
                $('<div>')
                .addClass('gridSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text('13-06-2026'),
                    
                ),
                // Pickup date area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text('17-06-2026'),
                    $('<p>').addClass('smallLabelText red').html('<span>-4 days</span>')
                ),
                // Last update area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text('12-06-2026'),
                    $('<p>').addClass('stdTextCenter').text('12:45:23')
                ),
                // Status area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('labelText actionButtons violet').text('Delayed'),
                ),
                // Delivery contact area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').html('<b>James Mitchell</b>'),
                    $('<p>').addClass('stdTextCenter').text('(404) 555-0119')
                ),
                // Value area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').html('$&nbsp;<b>114.39</b>&nbsp;USD'),
                ),
                // Actions area
                $('<div>')
                .addClass('gridSection actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-1 actionButton')
                    .text("Download"),

                    $('<button>')
                    .addClass('aB-2 actionButton')
                    .text("History"),
                )
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
        $('.pageTitle').text('My deliveries');
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Small filter options
        $('.smallFilterSelect')
        .append(
            $('<option>').text('Order ID'),
            $('<option>').text('AWB no.'),
            $('<option>').text('Contact'),
            $('<option>').text('Phone')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 1
        $('.expFilter-1')
        .append(
            $('<option>').text('Order ID'),
            $('<option>').text('AWB no.'),
            $('<option>').text('Contact'),
            $('<option>').text('Phone')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 2
        $('.expFilter-2')
        .append(
            $('<option>').text('Order ID'),
            $('<option>').text('AWB no.'),
            $('<option>').text('Contact'),
            $('<option>').text('Phone')
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
        // Variables to change
        $('.mainTopButtons')
        .append(
            $('<button>')
            .addClass('filterButton fB-1 all')
            .attr('data-filter', 'all')
            .html("<span>All deliveries<span>"),

            $('<button>')
            .addClass('filterButton fB-2 green')
            .attr('data-filter', 'delivered')
            .html("<span>Delivered<span>"),

            $('<button>')
            .addClass('filterButton fB-3 yellow')
            .attr('data-filter', 'pending')
            .html("<span>Pending<span>"),

            $('<button>')
            .addClass('filterButton fB-4 violet')
            .attr('data-filter', 'delayed')
            .html("<span>Delayed<span>"),

            $('<button>')
            .addClass('filterButton fB-5 gray')
            .attr('data-filter', 'cancelled')
            .html("<span>Cancelled<span>"),

            $('<button>')
            .addClass('filterButton fB-6 red')
            .attr('data-filter', 'refused')
            .html("<span>Refused<span>"),

            $('<button>')
            .addClass('filterButton fB-7 darkgray')
            .attr('data-filter', 'damagedLost')
            .html("<span>Damaged / Lost<span>"),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
        $('.subMenuSection')
        .append(
            $('<button>')
            .addClass('massActionButton mB-1')
            .text("Download AWB's list"),
            
            $('<button>')
            .addClass('massActionButton mB-2')
            .text("Generate raport"),

            $('<button>')
            .addClass('selectedOffers')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Dynamic section titles
        $('.tableTitle')
        .append(
            $('<div>').addClass('titleSection master-check m-unchecked'),
            $('<div>').addClass('titleSection type').text('Type'),
            $('<div>').addClass('titleSection awb').text('AWB'),
            $('<div>').addClass('titleSection date').text('Order date'),
            $('<div>').addClass('titleSection shipping').text('Max. shipping date'),
            $('<div>').addClass('titleSection pickup').text('Pickup date'),
            $('<div>').addClass('titleSection update').text('Last update'),
            $('<div>').addClass('titleSection status').text('Status'),
            $('<div>').addClass('titleSection contact').text('Delivery contact'),
            $('<div>').addClass('titleSection value').text('Value'),
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
            
            setTimeout( function(){
                $('.loadingDiv').hide()
                $('.dynamicProductsArea').fadeIn();
                $('.dynamicProductsArea').append(showProduct(), showProduct(), showProduct(), showProduct())
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
 