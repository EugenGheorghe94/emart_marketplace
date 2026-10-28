$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.myAccount').trigger('click');
    $('.newsletters').addClass('clicked');
    $('.newsletters').css({color: 'var(--blue-main)'});
    $('.newsletters-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.account-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////
    function showNewsletter( pID, pDate, pSubject, pStatus, pLanguage, pRecipients ) {
        const PRODUCT_CONTAINER = $('<div>')
            .addClass('productContainer')
            .append(
                
                
                // Checkbox area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<div>').addClass('checkbox check unchecked')
                ),
                
                
                // Date created area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter').text(pID),
                ),
                
                
                // Date created area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdTextCenter newsletter-date').text(pDate),
                ),
                
                
                // Subject area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdText').text(pSubject),
                ),
                
                
                // Status area
                $('<div>')
                .addClass('flexSection status-section'),
                
                
                // Language area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdText').text(pLanguage),
                ),


                // Recipients area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdText').text(pRecipients),
                ),


                // Actions area
                $('<div>')
                .addClass('gridSection actionSection')
            );


            // Action buttons
            if ( pStatus == 'Seen') {
                PRODUCT_CONTAINER.find('.status-section')
                .append($('<p>').addClass('revLabelText gray').html(`<span>${pStatus}</span>`))
            } else {
                PRODUCT_CONTAINER.find('.status-section')
                .append($('<p>').addClass('revLabelText blue').html(`<span>${pStatus}</span>`))
            };


            // Status label
            if ( pStatus == 'View') {
                PRODUCT_CONTAINER.find('.actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-1 actionButton mark-read')
                    .text("Mark as read"),
                )
            } else {
                PRODUCT_CONTAINER.find('.actionSection')
                .append(
                    $('<button>')
                    .addClass('aB-2 actionButton mark-unread')
                    .text("Mark unread"),
                )
            };


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
        $('.pageTitle').text('Newsletters');
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Small filter options
        $('.smallFilterSelect')
        .append(
            $('<option>').text('Subject'),
            $('<option>').text('Status'),
            $('<option>').text('Language')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 1
        $('.expFilter-1')
        .append(
            $('<option>').text('Subject'),
            $('<option>').text('Status'),
            $('<option>').text('Language')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 2
        $('.expFilter-2')
        .append(
            $('<option>').text('Subject'),
            $('<option>').text('Status'),
            $('<option>').text('Language')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 3
        $('.expFilter-status')
        .append(
            $('<option>').text('All'),
            $('<option>').text('Seen'),
            $('<option>').text('Not Seen'),
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
            .text('Language')
            .addClass('selectOption'),
            $('<option>').text('English'),
            $('<option>').text('Hungarian'),
            $('<option>').text('Bulgarian'),
            $('<option>').text('Polish')     
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
        $('.mainTopButtons')
        .append(
            $('<button>')
            .addClass('filterButton fB-1 all')
            .attr('data-filter', 'all')
            .html("<span>All Newsletters<span>"),

            $('<button>')
            .addClass('filterButton fB-2 yellow')
            .attr('data-filter', 'campaigns')
            .html("<span>Campaigns<span>"),

            $('<button>')
            .addClass('filterButton fB-3 green')
            .attr('data-filter', 'opportunities')
            .html("<span>Opportunities<span>"),

            $('<button>')
            .addClass('filterButton fB-4 violet')
            .attr('data-filter', 'programs')
            .html("<span>Programs<span>"),

            $('<button>')
            .addClass('filterButton fB-5 red')
            .attr('data-filter', 'legal')
            .html("<span>Legal<span>"),

            $('<button>')
            .addClass('filterButton fB-6 gray')
            .attr('data-filter', 'platform')
            .html("<span>Platform<span>"),

            $('<button>')
            .addClass('filterButton fB-7 darkgray')
            .attr('data-filter', 'operational')
            .html("<span>Operational<span>"),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
        $('.subMenuSection')
        .append(
            $('<button>')
            .addClass('massActionButton mB-1')
            .text("Subscribe"),

            $('<button>')
            .addClass('massActionButton mB-2')
            .text("Unsubscribe"),

            $('<button>')
            .addClass('massActionButton mB-3')
            .text("Mark as read"),

            $('<button>')
            .addClass('massActionButton mB-4')
            .text("Mark unread"),

            $('<button>')
            .addClass('selectedOffers')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Dynamic section titles
        $('.tableTitle')
        .append(
            $('<div>').addClass('master-check m-unchecked'),
            $('<div>').addClass('titleSection id').text('ID'),
            $('<div>').addClass('titleSection date').text('Date created'),
            $('<div>').addClass('titleSection subject').text('Subject'),
            $('<div>').addClass('titleSection status').text('Status'),
            $('<div>').addClass('titleSection language').text('Language'),
            $('<div>').addClass('titleSection recipients').text('Recipients'),
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
                $('.dynamicProductsArea').append(
                    showNewsletter( '93', '03/02/2026 18:56:22', '[EN] [Support] A new way to contact the eMART Marketplace support team', 'View', 'BG, PL', 'Specific list of sellers'),
                    showNewsletter( '92', '30/01/2026 10:16:38', 'Navigation update in the "My Offers" section', 'View', 'EN, HU, BG, PL', 'All Sellers'),
                    showNewsletter( '91', '05/12/2025 18:38:15', '[EN] [FBE] Join the Q&A session - get all your answers in one meeting!', 'View', 'EN, HU, BG, PL', 'Specific list of sellers'),
                    showNewsletter( '89', '28/11/2025 11:22:05', '[EN] [Promotions] Black Friday 2025 - prepare your stock now', 'Seen', 'EN, HU, BG, PL', 'All Sellers'),
                    showNewsletter( '88', '14/11/2025 09:15:40', '[EN] [Logistics] New return policy for FBE sellers', 'View', 'EN, HU, BG, PL', 'Specific list of sellers'),
                    showNewsletter( '87', '02/11/2025 13:47:52', '[Invoicing] Changes to the automatic invoicing process', 'Seen', 'EN, HU, BG', 'All Sellers'),
                    showNewsletter( '86', '20/10/2025 08:30:11', '[EN] [Marketing] Boost your visibility with Sponsored Products', 'Seen', 'EN, HU', 'All Sellers'),
                    showNewsletter( '85', '05/10/2025 15:05:29', 'eMART Premio Program - new benefits for sellers', 'Seen', 'EN, HU, BG, PL', 'Specific list of sellers'),
                    showNewsletter( '84', '22/09/2025 10:40:03', '[EN] [Payments] Update on settlement schedule for Q4', 'View', 'BG', 'All Sellers'),
                    showNewsletter( '83', '08/09/2025 17:12:36', '[EN] [Analytics] New dashboard for tracking return rates', 'View', 'EN, HU, BG', 'All Sellers'),
                    showNewsletter( '82', '25/08/2025 12:58:47', '[Orders] Improved order fulfillment tracking', 'Seen', 'EN, HU, BG, PL', 'Specific list of sellers'),
                    showNewsletter( '81', '11/08/2025 19:23:14', '[EN] [Support] Extended support hours during holiday season', 'Seen', 'EN, HU, BG, PL', 'All Sellers'),
                    showNewsletter( '80', '30/07/2025 07:50:59', '[EN] [FBE] Warehouse capacity update for September', 'View', 'EN, HU, BG, PL', 'Specific list of sellers'),
                    showNewsletter( '79', '27/05/2026 09:36:34', '[EN] [Couriers] Courier schedule - June 1 2026', 'Seen', 'EN, HU', 'All Sellers'),
                    showNewsletter( '78', '20/05/2026 09:44:58', '[EN] [Campaigns] Weekly eMART Basket - a 100 lei gift card for your customers!', 'Seen', 'EN, BG, PL', 'All Sellers'),
                    showNewsletter( '77', '19/05/2026 09:47:01', '[EN] [Analytics] See how your business is performing, in the new Analytics section ->', 'Seen', 'EN, HU, BG, PL', 'All Sellers'),
                    showNewsletter( '76', '15/05/2026 16:31:15', 'eMART Brand Portal - Active tools for protecting your brand', 'View', 'EN, HU, BG, PL', 'All Sellers'),
                    showNewsletter( '75', '28/04/2026 14:29:17', 'Courier schedule for the period May 1 - 4 2026', 'Seen', 'EN, HU, BG, PL', 'All Sellers'),
                    showNewsletter( '74', '20/03/2026 17:56:39', '[Orders] Improved AWB issuance process using volumetric data', 'View', 'EN, HU, BG, PL', 'All Sellers'),
                    showNewsletter( '73', '25/02/2026 16:55:15', '[EN] [Support] A new way to contact the eMART Marketplace support team', 'Seen', 'EN, HU, BG, PL', 'Specific list of sellers'),
                )
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
    // Mark as read action button
    $(document).on('click', '.actionButton', function() {
        if ( $(this).hasClass('aB-1') ) {
            $(this)
            .addClass('aB-2 mark-unread')
            .removeClass('aB-1 mark-read')
            .text('Mark unread')
            .parent()
            .parent()
            .find('.status-section')
            .html('')
            .append(
                $('<p>')
                .addClass('revLabelText gray')
                .html(`<span>Seen</span>`)
            );
        } else if ( $(this).hasClass('aB-2') ) {
            $(this)
            .addClass('aB-1 mark-read')
            .removeClass('aB-2 mark-unread')
            .text('Mark as read')
            .parent()
            .parent()
            .find('.status-section')
            .html('')
            .append(
                $('<p>')
                .addClass('revLabelText blue')
                .html(`<span>View</span>`)
            );
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Mass action buttons logic
    $(document).on('click', '.massActionButton', function() {
        if ( $(this).hasClass('mB-3') ) {
            $('.checked').parent().parent().find('.mark-read').trigger('click')
            $('.selectedOffers').trigger('click')
        } else if ( $(this).hasClass('mB-4') ) {
            $('.checked').parent().parent().find('.mark-unread').trigger('click')
            $('.selectedOffers').trigger('click')
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Mass action buttons not working yet
    $(document).on('click', '.mB-1', function() { 
        notification('error')
    });
    $(document).on('click', '.mB-2', function() { 
        notification('error')
    });
    ////////////////////////////////////////////////////////////////////



});