$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.logistics').trigger('click');
    $('.courier-accounts').addClass('clicked');
    $('.courier-accounts').css({color: 'var(--blue-main)'});
    $('.courier-accounts-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.logistics-icon-menu').trigger('click');
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
    // Top folder buttons
    const FRAME_BUTTONS = 
        $('<div>')
        .addClass('frameButtons')
        .append(
            $('<div>')
            .addClass('topFrameButton profile-btn clicked')
            .text('All couriers'),
            $('<div>')
            .addClass('topFrameButton contact-btn unclicked')
            .text('Active couriers'),
            $('<div>')
            .addClass('topFrameButton address-btn unclicked')
            .text('Inactive couriers'),
            $('<div>')
            .addClass('topFrameButton operational-btn unclicked')
            .text('Operational'),
            $('<div>')
            .addClass('topFrameButton financial-btn unclicked')
            .text('Services'),
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    const MAIN_FRAME = $('<div>').addClass('mainFrame');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Top folder buttons
    function showCourierAcc(courier_name, shipping_cost, time_days) {
        $('.mainFrame')
        .append(


            // Active courier company
            $('<div>')
            .addClass('generalInfo blueSection')
            .append(
                $('<div>')
                .addClass('blueSectionTitle')
                .append(
                    $('<div>')
                    .addClass('blueTitle')
                    .text(courier_name),
                    $('<div>')
                    .addClass('minMaxBtn minimize')
                ),
                $('<div>')
                .addClass('formArea minMaxDiv')
                .append(
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text('Shipping cost'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: `$ ${shipping_cost} USD`,
                            disabled: true
                        }),
                        $('<label>')
                        .text('Courier status'),
                        $('<select>')
                        .addClass('formSelect enabled')
                        .append(
                            $('<option>')
                            .addClass('Green')
                            .html('🟢&nbsp;&nbsp;Green (Active)'),
                                $('<option>')
                            .addClass('Pink')
                            .html('🔴&nbsp;&nbsp;Red (Inactive)'),
                        )
                    ),
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text('Daily closing time'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '04:00 PM',
                            disabled: true
                        }),
                        $('<label>')
                        .text('Daily closing time (Premio)'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '05:00 PM',
                            disabled: true
                        }),
                    ),
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text('Saturday closing time'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '--:-- --',
                            disabled: true
                        }),
                        $('<label>')
                        .text('Saturday closing time (Premio)'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '--:-- --',
                            disabled: true
                        }),
                    ),
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text('Sunday closing time'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '--:-- --',
                            disabled: true
                        }),
                        $('<label>')
                        .text('Sunday closing time (Premio)'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '--:-- --',
                            disabled: true
                        }),
                    ),
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text('Daily order processing limit'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '20',
                            disabled: true
                        }),
                        $('<label>')
                        .text("Delivery time (days)"),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: `${time_days} working day(s)`,
                            disabled: true
                        }),
                    ),
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text("Address for AWB's pickup"),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: 'Seller company address',
                            disabled: true
                        }),
                        $('<label>')
                        .text("Address for AWB's returns"),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: 'Same as pickup address',
                            disabled: true
                        })
                    )
                )
            ),
            $('<div>')
            .append(
                // Average shipping price
                $('<div>')
                .addClass('sellerProp blueSection')
                .append(
                    $('<div>')
                    .addClass('blueSectionTitle')
                    .append(
                        $('<div>')
                        .addClass('blueTitle')
                        .text('Average shipping price'),
                        $('<div>')
                        .addClass('minMaxBtn minimize')
                    ),
                    $('<div>')
                    .addClass('tableArea minMaxDiv')
                    .append(
                        $('<div>')
                        .addClass('monthsArea')
                        .append(
                            $('<p>').text('Year'),
                            $('<p>').text('Jan'),
                            $('<p>').text('Feb'),
                            $('<p>').text('Mar'),
                            $('<p>').text('Apr'),
                            $('<p>').text('May'),
                            $('<p>').text('Jun'),
                            $('<p>').text('Jul'),
                            $('<p>').text('Aug'),
                            $('<p>').text('Sep'),
                            $('<p>').text('Oct'),
                            $('<p>').text('Nov'),
                            $('<p>').text('Dec'),
                            $('<p>').text('Actions'),
                        ),
                        $('<div>')
                        .addClass('yearDiv even')
                        .append(
                            $('<p>').text('2025'),
                            $('<p>').html('<i class="fa-solid fa-pencil"></i>')
                        ),
                        $('<div>')
                        .addClass('yearDiv odd')
                        .append(
                            $('<p>').text('2026'),
                            $('<p>').html('<i class="fa-solid fa-pencil"></i>')
                        ),
                    ),
                )
            )
        )
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Shipping graph
    const GRAPH = 
        
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Main function
    setTimeout(function() {
        $('.mainPageSection')
        .append(
            TOP_SPACER,
            PAGE_TITLE,
            FRAME_BUTTONS,
            MAIN_FRAME,

            $.ajax({
                url: '/fetch/seller/couriers',
                method: 'GET',
                success(response) {
                    $.each(response, function(index, courier) {
                        showCourierAcc(
                            courier.courier_name,
                            courier.shipping_cost,
                            courier.time_days
                        );
                    })
                }
            }),
            FEEDBACK_LINK
        );



        ////////////////////////////////////////////////////////////////////
        // Page title
        $('.pageTitle').text('Courier accounts');
        ////////////////////////////////////////////////////////////////////



        $('.mainPageSection').css({"background-image": "none"});



    }, 500);
    ////////////////////////////////////////////////////////////////////



    



    ////////////////////////////////////////////////////////////////////
    // Main function
    $(document).on('click', '.minMaxBtn', function() {
        $(this).removeClass('minimize').addClass('maximize')
        let hideUnhide = $(this).closest('.blueSection').find('.minMaxDiv');
        if ( hideUnhide.is(':visible') ) {
            hideUnhide.css({opacity: '0'}).slideUp('fast');
        } else {
            $(this).removeClass('mazimize').addClass('minimize')
            hideUnhide.css({opacity: '1'}).fadeIn('fast')
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Slide buttons
    $(document).on('click', '.infoButton', function() {
        if ( $(this).hasClass('no') ) {

            $(this)
            .closest('.slideButtonMain')
            .css({ backgroundColor: 'var(--blue-main)'})
            .find('.slideButton')
            .css({ translate: '37px' });
            
            $(this)
            .closest('.slideButtonMain')
            .find('.infoButton')
            .removeClass('no')
            .addClass('yes')
            .text('YES')
            .css({ translate: '-30px', paddingRight: '4px' });

        } else if ( $(this).hasClass('yes') ) {

            $(this)
            .closest('.slideButtonMain')
            .css({ backgroundColor: 'var(--gray-darker)' })
            .find('.slideButton')
            .css({ translate: '0px' });
            
            $(this)
            .closest('.slideButtonMain')
            .find('.infoButton')
            .removeClass('yes')
            .addClass('no')
            .text('NO')
            .css({ translate: '0px', paddingRight: '2px' });
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Frame button click logic
    $(document).on('click', '.topFrameButton', function () {
        $('.topFrameButton').removeClass('clicked').addClass('unclicked');
        $(this).removeClass('unclicked').addClass('clicked');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Feedback
    $(document).on('click', '.feedbackLink', function () {
        clearTimeout(feedbackTimerId);
        feedback();
    });
    ////////////////////////////////////////////////////////////////////



});