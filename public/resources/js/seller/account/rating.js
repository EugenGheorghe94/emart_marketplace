$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.myAccount').trigger('click');
    $('.rating').addClass('clicked');
    $('.rating').css({color: 'var(--blue-main)'});
    $('.rating-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.account-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Top page spacer div
    const TOP_SPACER = $('<div>').addClass('topSpaceElement');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Top promo area
    const PROMO_AREA = $('<div>').addClass('promoArea');
    ////////////////////////////////////////////////////////////////////
    


    ////////////////////////////////////////////////////////////////////
    // Page title div
    const PAGE_TITLE = $('<div>').addClass('pageTitle');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Rating summary area
    const RATING_SUMMARY = 
        $('<div>')
        .addClass('ratingSummary')
        .append(
            $('<div>')
            .addClass('reviews-area wh-panel-sh')
            .append(
                $('<div>')
                .addClass('reviews-area__title')
                .append(
                    $('<p>')
                    .addClass('reviews-area__title-text')
                    .html('Rating shown on website:&nbsp;&nbsp;<span>4.6</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>20 ratings</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>85% positive</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>2 reviews</span>')
                ),
                $('<div>')
                .addClass('reviews-area__container')
                .append(
                    $('<div>')
                    .addClass('reviews-area__stars')
                    .append(
                        $('<p>')
                        .addClass('reviews-area__stars-number')
                        .text('4.6'),
                        $('<p>')
                        .addClass('reviews-area__stars-emoji')
                    ),
                    $('<div>')
                    .addClass('reviews-area__graph')
                    .append(
                        $('<div>')
                        .addClass('reviews-area__graph-row')
                        .append(
                            $('<div>').addClass('link').text('5 stele'),
                            $('<div>').addClass('blue').html('<div class="sz-80"></div>'),
                            $('<div>').text('16')
                        ),
                        $('<div>')
                        .addClass('reviews-area__graph-row')
                        .append(
                            $('<div>').addClass('link').text('4 stele'),
                            $('<div>').addClass('green').html('<div class="sz-60"></div>'),
                            $('<div>').text('14')
                        ),
                        $('<div>')
                        .addClass('reviews-area__graph-row')
                        .append(
                            $('<div>').addClass('link').text('3 stele'),
                            $('<div>').addClass('yellow').html('<div class="sz-40"></div>'),
                            $('<div>').addClass('link').text('23')
                        ),
                        $('<div>')
                        .addClass('reviews-area__graph-row')
                        .append(
                            $('<div>').addClass('link').text('2 stele'),
                            $('<div>').addClass('orange').html('<div class="sz-20"></div>'),
                            $('<div>').text('11')
                        ),
                        $('<div>')
                        .addClass('reviews-area__graph-row')
                        .append(
                            $('<div>').addClass('link').text('1 stele'),
                            $('<div>').addClass('red').html('<div class="sz-20"></div>'),
                            $('<div>').text('9')
                        ),                       
                    ),
                )
            ),
            $('<div>')
            .addClass('timeline-area wh-panel-sh')
            .append(
                $('<div>')
                .addClass('timeline-area__row')
                .append(
                    $('<div>')
                    .addClass('timeline-area__row-title')
                    .text(''),
                    $('<div>')
                    .addClass('timeline-area__row-title')
                    .text('30 days'),
                    $('<div>')
                    .addClass('timeline-area__row-title')
                    .text('60 days'),
                    $('<div>')
                    .addClass('timeline-area__row-title')
                    .text('90 days'),
                    $('<div>')
                    .addClass('timeline-area__row-title')
                    .text('12 months'),
                    $('<div>')
                    .addClass('timeline-area__row-title')
                    .text('All time'),
                ),
                $('<div>')
                .addClass('timeline-area__row')
                .append(
                    $('<div>')
                    .addClass('timeline-area__row-label')
                    .text('Seller rating'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('4.0'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('4.3'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('4.6'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('4.6'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('4.9'),
                ),
                $('<div>')
                .addClass('timeline-area__row')
                .append(
                    $('<div>')
                    .addClass('timeline-area__row-label')
                    .text('Number of ratings'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('2'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('3'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('5'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('32'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('164'),
                ),
                $('<div>')
                .addClass('timeline-area__row')
                .append(
                    $('<div>')
                    .addClass('timeline-area__row-label')
                    .text('Number of reviews'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('0'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('0'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('0'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('5'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('24'),
                ),
                $('<div>')
                .addClass('timeline-area__row')
                .append(
                    $('<div>')
                    .addClass('timeline-area__row-label')
                    .text('Positive reviews'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('50%'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('67%'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('80%'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('88%'),
                    $('<div>')
                    .addClass('timeline-area__row-cell')
                    .text('97%'),
                ),
            )
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Rating search forms
    const RATING_SEARCH = 
        $('<div>')
        .addClass('searchForm')
        .append(
            $('<div>')
            .addClass('search-area wh-panel-sh')
            .append(
                $('<div>')
                .addClass('search-area__top')
                .append(
                    $('<div>')
                    .append(
                        $('<label>')
                        .text('Review score'),
                        $('<select>')
                        .addClass('filter')
                        .append(
                            $('<option>')
                            .attr({
                                value: '', 
                                disabled: true, 
                                selected: true, 
                                hidden: true,
                            })
                            .text('Choose option'),
                            $('<option>').text('1 star'),
                            $('<option>').text('2 stars'),
                            $('<option>').text('3 stars'),
                            $('<option>').text('4 stars'),
                            $('<option>').text('5 stars'),
                        )
                    ),
                    $('<div>')
                    .append(
                        $('<label>')
                        .text('Rating with review'),
                        $('<select>')
                        .addClass('filter')
                        .append(
                            $('<option>')
                            .attr({
                                value: '',
                                selected: true,
                            })
                            .text('All'),
                            $('<option>').text('With review'),
                            $('<option>').text('Without review'),
                        )
                    ),
                    $('<div>')
                    .append(
                        $('<label>')
                        .text('Included in site rating'),
                        $('<select>')
                        .addClass('filter')
                        .append(
                            $('<option>')
                            .attr({
                                value: '',
                                selected: true,
                            })
                            .text('All'),
                            $('<option>').text('Included'),
                            $('<option>').text('Not included'),
                        )
                    ),
                    $('<div>')
                    .append(
                        $('<label>')
                        .text('Period'),
                        $('<select>')
                        .addClass('filter')
                        .append(
                            $('<option>')
                            .attr({
                                value: '',
                                selected: true,
                            })
                            .text('All'),
                            $('<option>').text('30 days'),
                            $('<option>').text('60 days'),
                            $('<option>').text('90 days'),
                            $('<option>').text('120 days')
                        )
                    ),
                    $('<div>')
                    .append(
                        $('<label>')
                        .text('Month'),
                        $('<input>')
                        .addClass('filter')
                        .addClass('date')
                        .attr({
                            type: 'month'
                        })
                        .text('Choose')
                        )
                    
                ),
                $('<div>')
                .addClass('search-area__bottom')
                .append(
                    $('<div>')
                    .html('Number of results:&nbsp;<span>20</span>'),
                    $('<div>')
                    .addClass('search-area__bottom-buttons')
                    .append(
                        $('<button>')
                        .addClass('error')
                        .text('Advanced search'),
                        $('<button>')
                        .addClass('error')
                        .text('Search'),
                        $('<button>')
                        .addClass('reset-filters')
                        .text('Reset'),
                    )
                )
            )
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Rating search forms
    const RATING_TABLE = 
        $('<div>')
        .addClass('ratingTable')
        .append(
            $('<div>')
            .addClass('rating-table wh-panel-sh')
            .append(
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('12 Jun 2025'),
                    $('<p>').html('Order&nbsp;<span>491308240</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('15 May 2026'),
                    $('<p>').html('Order&nbsp;<span>654308221</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('12 May 2026'),
                    $('<p>').html('Order&nbsp;<span>234308232</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('11 May 2026'),
                    $('<p>').html('Order&nbsp;<span>761308254</span>'),
                    $('<p>').text('Very slow shipping and no communication.'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i><i class="fa-solid fa-star gray"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('23 May 2026'),
                    $('<p>').html('Order&nbsp;<span>321308870</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('17 May 2026'),
                    $('<p>').html('Order&nbsp;<span>491308650</span>'),
                    $('<p>').text('Item exactly as described, highly recommend.'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('24 Apr 2026'),
                    $('<p>').html('Order&nbsp;<span>213308132</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('25 Apr 2026'),
                    $('<p>').html('Order&nbsp;<span>541308240</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('22 Apr 2026'),
                    $('<p>').html('Order&nbsp;<span>431308543</span>'),
                    $('<p>').text('Product arrived early and in perfect condition.'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('08 Mar 2026'),
                    $('<p>').html('Order&nbsp;<span>411308234</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('12 Mar 2026'),
                    $('<p>').html('Order&nbsp;<span>351308456</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('11 Mar 2026'),
                    $('<p>').html('Order&nbsp;<span>491308756</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i><i class="fa-solid fa-star gray"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('10 Mar 2026'),
                    $('<p>').html('Order&nbsp;<span>461308534</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('22 Apr 2025'),
                    $('<p>').html('Order&nbsp;<span>491308123</span>'),
                    $('<p>').text('Very professional and responsive seller.'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('18 Mar 2025'),
                    $('<p>').html('Order&nbsp;<span>741308453</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('16 Feb 2025'),
                    $('<p>').html('Order&nbsp;<span>491308768</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('13 Feb 2025'),
                    $('<p>').html('Order&nbsp;<span>321308240</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('22 Dec 2024'),
                    $('<p>').html('Order&nbsp;<span>567308232</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i><i class="fa-solid fa-star gray"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('12 Dec 2024'),
                    $('<p>').html('Order&nbsp;<span>492358241</span>'),
                    $('<p>').text('Outstanding service, thank you!'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i>')
                ),
                $('<div>')
                .addClass('rating-table__row')
                .append(
                    $('<p>').text('05 Nov 2024'),
                    $('<p>').html('Order&nbsp;<span>491568267</span>'),
                    $('<p>'),
                    $('<p>').html('<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star gray"></i>')
                )
            )
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
                    .addClass('prevPage error'),
                    $('<button>')
                    .addClass('nextPage error')
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
        )
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
            feedbackTimerId = setTimeout( function() { feedback(); }, 120000)
        });
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Clear timeout and call feeback
    clearTimeout(feedbackTimerId);
    feedbackTimerId = setTimeout( function() { feedback(); }, 120000)
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
    // Main function
    setTimeout( function() {
        $('.mainPageSection')
        .css({"background-image": "none"})
        .append(
            TOP_SPACER,
            PROMO_AREA,
            PAGE_TITLE,
            RATING_SUMMARY,
            RATING_SEARCH,
            RATING_TABLE,
            PAGE_OPTIONS,
            FEEDBACK_LINK
        );
        


        ////////////////////////////////////////////////////////////////////
        // Page title
        $('.pageTitle').text('Seller Rating');
        ////////////////////////////////////////////////////////////////////

    

        ////////////////////////////////////////////////////////////////////
        // Feedback
        $(document).on('click', '.feedbackLink', function() {
            clearTimeout(feedbackTimerId);
            feedback();
        });
        ////////////////////////////////////////////////////////////////////
    
    

    }, 500);
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // On change date is visible
    $(document).on('change', '.date', function() {
        $(this).css({ color: 'var(--gray-darkest)'})
    });
    ////////////////////////////////////////////////////////////////////


 
    ////////////////////////////////////////////////////////////////////
    // Reset all filters
    $(document).on('click', '.reset-filters', function() {
        $('.filter').val('');
        $('.date').css({ color: 'white' })
    });
    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////
    // Buttons not working yet
    $(document).on('click', '.error', function(e) {
        notification('error');
        e.preventDefault();
    });
    ////////////////////////////////////////////////////////////////////
});