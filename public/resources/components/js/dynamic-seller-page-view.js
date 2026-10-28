    

    
    ////////////////////////////////////////////////////////////////////
    // Sticky div shadow
    $(window).on('scroll', function () {
        $('.topDynamicSticky').toggleClass('scrolled', $(this).scrollTop() > 200);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Top page spacer div
    const TOP_SPACER = $('<div>').addClass('topSpaceElement');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page title div
    const PAGE_TITLE = $('<div>').addClass('pageTitle');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Top page platform select form
    const TOP_SEARCH_FORM = 
        $('<div>')
        .addClass('topPageForm')
        .append(
            $('<div>')
            .addClass('topSearchArea')
            .append(
                $('<button>')
                .addClass('textButton moreFilters expandFilters')
                .attr({
                    type: 'submit'
                })
                .text('More filters'),
                $('<form>')
                .addClass('pageTopSearchBox')
                .append(
                    $('<select>')
                    .addClass('smallFilterSelect')
                    .append(
                    $('<option>')
                    .attr({
                        value: '', 
                        disabled: true, 
                        selected: true, 
                        hidden: true,
                    })
                    .text('Data field')
                    .addClass('selectOption'),
                    ),
                    $('<input>')
                    .addClass('smallFilterInput')
                    .attr({
                        placeholder: 'Search...',
                        type: 'text',
                    }),
                    $('<button>')
                    .addClass('topSearchButton    ')
                    .attr({
                        type: 'submit'
                    })
                )
            )
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // More filters container
    const MORE_FILTERS = 
        $('<div>')
        .addClass('topFiltersDiv')
        .append(
            $('<div>')
            .addClass('topFilterArea')
            .append(
                $('<form>')
                .addClass('pageTopSearchBox')
                .append(
                    $('<select>')
                    .addClass('extFilterSelect expFilter-1 wAuto back-white no-bor no-out darkgray')
                    .append(
                        $('<option>')
                        .attr({
                            value: '', 
                            disabled: true, 
                            selected: true, 
                            hidden: true,
                        })
                        .text('Data field')
                        .addClass('selectOption'),
                    ),
                    $('<input>')
                    .addClass('extFilterInput filter-1')
                    .attr({
                        placeholder: 'Search...',
                        type: 'text',
                    })
                ),
                $('<form>')
                .addClass('pageTopSearchBox')
                .append(
                    $('<select>')
                    .addClass('extFilterSelect expFilter-2')
                    .append(
                        $('<option>')
                        .attr({
                            value: '', 
                            disabled: true, 
                            selected: true, 
                            hidden: true,
                        })
                        .text('Data field')
                        .addClass('selectOption'),
                    ),
                    $('<input>')
                    .addClass('extFilterInput filter-2')
                    .attr({
                        placeholder: 'Search...',
                        type: 'text',
                    })
                ),
                $('<select>')
                .addClass('borderFilter extFilterSelect expFilter-status')
                .append(
                    $('<option>')
                    .attr({
                        value: '', 
                        disabled: true, 
                        selected: true, 
                        hidden: true,
                    })
                    .text('Status')
                    .addClass('selectOption'),
                ),
                $('<select>')
                .addClass('borderFilter extFilterSelect expFilter-option')
            ),
            $('<div>')
            .addClass('buttonsArea')
            .append(
                $('<div>')
                .addClass('leftButtonsArea')
                .append(
                    $('<p>')
                    .html('Number of results: <b>-</b>')
                ),
                $('<div>')
                .addClass('rightButtonsArea')
                .append(
                    $('<button>')
                    .addClass('moreFilters noExpand blue')
                    .text('More filters'),
                    $('<button>')
                    .addClass('lessFilters blue')
                    .text('Less filters'),
                    $('<button>')
                    .addClass('searchFilters white')
                    .text('Search'),
                    $('<button>')
                    .addClass('resetFilters red')
                    .text('Reset all'),
                )
            )
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Dynamic page display section
    const DYNAMIC_SECTION = 
        $('<div>').addClass('mainSection')
        .append(
            $('<div>').addClass('topDynamicSticky')
            .append(
                $('<div>').addClass('mainTopButtons'),
                $('<div>').addClass('subMenuSection'),
                $('<div>')
                .addClass('tableTitle'),
                $('<div>')
                .addClass('loadingDiv')
            ),
            $('<div>')
            .addClass('dynamicProductsArea')
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page bottom options for number of items per page and page number
    const PAGE_OPTIONS = 
        $('<div>')
        .addClass('bottomPageForm')
        .append(
            $('<div>')
            .addClass('itemsOptions')
            .append(
                $('<form>')
                .addClass('perPage')
                .append(
                    $('<label>')
                    .text('Items on page'),
                    $('<select>')
                    .append(
                        $('<option>').text('20'),
                        $('<option>').text('40'),
                        $('<option>').text('60')
                    ),
                    $('<label>')
                    .addClass('pagination'),
                    $('<button>')
                    .addClass('prevPage'),
                    $('<button>')
                    .addClass('nextPage')
                )
            )
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Feedback button
    const FEEDBACK_LINK = 
        $('<div>')
        .addClass('feedbackLink blue')
        .append(
            $('<p>'),
            $('<p>').text('Give this page a rating')
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Scroll bar size - width / height
    const PAGE_SCROLL_W = window.innerWidth - document.documentElement.clientWidth;
    const PAGE_SCROLL_H = window.innerHeight - document.documentElement.clientHeight;
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Needed to clear feedback timeout
    let feedbackTimerId = null;
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Feedback center modal
    function feedback() {
        $('.feedback-overlay').remove()
        $('.mainPageSection')
            .append(
                $('<div>')
                .addClass('feedback-overlay')
                .append(
                    $('<div>')
                    .addClass('feedback-modal')
                    .append(
                        $('<div>')
                        .addClass('feedback-title')
                        .append(
                            $('<p>').addClass('ratingTitle').text("Give this page a rating"),
                            $('<button>').addClass('closeButton closeModal')
                        ),
                        $('<div>')
                        .addClass('modalDisclaimer')
                        .append(
                            $('<div>').addClass('fcc').text('We need your feedback to help us improve.'),
                            $('<div>').addClass('fcc').text('Click on an icon to let us know how usefull was this page in your activity.')
                        ),
                        $('<div>')
                        .addClass('emoji-area')
                        .append(
                            $('<div>')
                            .addClass('emoji face-1 closeModal'),
                            $('<div>')
                            .addClass('emoji face-2 closeModal'),
                            $('<div>')
                            .addClass('emoji face-3 closeModal'),
                            $('<div>')
                            .addClass('emoji face-4 closeModal'),
                            $('<div>')
                            .addClass('emoji face-5 closeModal')
                        ),
                        $('<div>')
                        .addClass('closeWithoutFeedback')
                        .append(
                            $('<button>')
                            .addClass('closeModal')
                            .text('Close without feedback')
                        )
                    )
                )
            );


        // Shows modal
        $('.feedback-overlay').fadeIn();
        $('body')
        .css({
           marginRight: PAGE_SCROLL_W,
           marginBottom: PAGE_SCROLL_H
        })
        .addClass('showFeedback')
        
        
        // Buttons to close modal and reset counter
        $('.closeModal').on('click', function() {
            $('body')
            .removeClass('showFeedback')
            .css({
                marginRight: '0px',
                marginBottom: '0px'
            });
            $('.feedback-overlay').hide();
            clearTimeout(feedbackTimerId);
            feedbackTimerId = setTimeout( function () { feedback(); }, 120000)
        });
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Clear timeout and call feeback
    clearTimeout(feedbackTimerId);
    feedbackTimerId = setTimeout( function (){ feedback(); }, 120000)
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Notification bottom-right modal
    function notification(param) {
        $('.notification').remove();
        if ( param == 'success') {
            $('.mainPageSection')
            .append(
                $('<div>')
                .addClass('notification success')
                .append(
                    $('<p>').text('Success'),
                    $('<p>').text('Action was successfull')
                )
            )
        } else if ( param == 'error') {
            $('.mainPageSection')
            .append(
                $('<div>')
                .addClass('notification error')
                .append(
                    $('<p>').text('Error'),
                    $('<p>').text('Action failed')
                )
            )
        };
        setTimeout( function () { $('.notification').css({ right: '16px' }) }, 100);
        setTimeout( function () { $('.notification').css({ right: '-300px' }) }, 2000);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page number counter
    var pageNo = 1;
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // User selected no. of items per page
    $(document).on('change', '.perPage select', function() {
        $('.selectedOffers').trigger('click');
        $('.filterClick').trigger('click');
        pageNo = 1;
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Next page button logic
    $(document).on('click', '.nextPage', function() {
        if ( $('.dynamicProductsArea').children().length == $('.perPage select').val() ) {
            $('.selectedOffers').trigger('click');
            $('.filterClick').trigger('click');
            pageNo++;
        } else { return; };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Previous page button logic
    $(document).on('click', '.prevPage', function() {
        if ( pageNo > 1 ) {
            $('.selectedOffers').trigger('click');
            $('.filterClick').trigger('click');
            pageNo--;
        } else { return; };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Master checkbox button logic
    $(document).on('click', '.master-check', function() {
        // If checked
        if ( $(this).hasClass('m-checked') ) {
            $(this).removeClass('m-checked').addClass('m-unchecked')
            $('.check').removeClass('checked').addClass('unchecked')
            $('.selectedOffers').text('').css({visibility: 'hidden'})
        // If not checked
        } else {
            $(this).removeClass('m-unchecked').addClass('m-checked')
            $('.check').removeClass('unchecked').addClass('checked')
            $('.selectedOffers').text($('.checked').length + ' Offer(s) selected').css({visibility: 'visible'})
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Simple checkbox button logic
    $(document).on('click', '.check', function() {
        // If checked and item is not last one checked
        if ( $(this).hasClass('checked') && $('.checked').length > 1 ) {
            $(this).removeClass('checked').addClass('unchecked')
            $('.master-check').removeClass('m-checked').addClass('m-unchecked')
            $('.selectedOffers').text($('.checked').length + ' Offer(s) selected').css({visibility: 'visible'})
        // If checked and item is the last one checked 
        } else if ( $(this).hasClass('checked') && $('.checked').length == 1 ) {
            $(this).removeClass('checked').addClass('unchecked')
            $('.master-check').removeClass('m-checked').addClass('m-unchecked')
            $('.selectedOffers').text('').css({visibility: 'hidden'})
        } else {
            // If all items are checked
            if ( $('.checked').length == $('.productContainer').length - 1 ) {
                $(this).removeClass('unchecked').addClass('checked')
                $('.master-check').removeClass('m-unchecked').addClass('m-checked')
                $('.selectedOffers').text($('.checked').length + ' Offer(s) selected').css({visibility: 'visible'})
            // If all itmes are not checked
            } else {
                $(this).removeClass('unchecked').addClass('checked')
                $('.selectedOffers').text($('.checked').length + ' Offer(s) selected').css({visibility: 'visible'})
            }
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Uncheck all button logic
    $(document).on('click', '.selectedOffers', function () {
        $('.master-check').removeClass('m-checked').addClass('m-unchecked')
        $('.check').removeClass('checked').addClass('unchecked')
        $('.selectedOffers').text('').css({visibility: 'hidden'})
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Buttons that don't work yet
    $(document).on('click', '.noExpand', function() { 
        notification('error');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Expand filters area
    $(document).on('click', '.expandFilters', function() {
        $('.topSearchArea').hide();
        $('.topFiltersDiv').fadeIn();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Minimize filter area
    $(document).on('click', '.lessFilters', function() {
        $('.topFiltersDiv').hide();
        $('.topSearchArea').fadeIn();
        $('.smallFilterSelect').val('');
        $('.smallFilterInput').val('');
        
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Reset all filters
    $(document).on('click', '.resetFilters', function () {
        $('.extFilterInput').val('');
        $('.extFilterSelect').val('');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Feedback
    $(document).on('click', '.feedbackLink', function () {
        clearTimeout(feedbackTimerId);
        feedback();
    });
    ////////////////////////////////////////////////////////////////////