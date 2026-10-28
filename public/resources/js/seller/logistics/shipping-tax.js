$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // For reviews POST call
    $.ajaxSetup({
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.logistics').trigger('click');
    $('.shipping-tax').addClass('clicked');
    $('.shipping-tax').css({color: 'var(--blue-main)'});
    $('.shipping-tax-div').css({backgroundColor: 'var(--blue-lightest)'});
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
    const MAIN_SECTION =
        $('<div>')
        .addClass('mainSection')
    ////////////////////////////////////////////////////////////////////
    


    ////////////////////////////////////////////////////////////////////
    function couriers() {
        $.ajax({
            url: '/fetch/seller/couriers',
            method: 'GET',
            success(response) {
                if ( response.length < 1 ) {
                    $('.mainSection')
                    .append(
                        $('<div>')
                        .addClass('shipping-empty')
                        .append(
                            $('<span>'),
                            $('<p>').text("You haven't added any courier accounts yet."),
                            $('<p>').text('Use the button below to add a new courier account.'),
                            $('<a>').addClass('add-courier-account').text('add courier account')
                        )
                    )
                } else {
                    $('.mainSection')
                    .append(
                        $('<div>')
                        .addClass('shipping-empty')
                        .append(
                            $('<span>'),
                            $('<p>').text("You already have a courier account set up."),
                            $('<p>').text('If you would like to change it please submit a ticket.'),
                        )
                    )
                }
            }
        });
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    //
    function addCourier() {
        $('.courier-overlay').remove()
        $('.mainPageSection')
        .append(
            $('<div>')
            .addClass('courier-overlay')
            .append(
                $('<div>')
                .addClass('courier-modal')
                .append(
                    $('<div>')
                    .addClass('courier-title')
                    .append(
                        $('<p>').text("Add courier account"),
                        $('<button>').addClass('closeButton closeCourierModal')
                    ),
                    $('<div>')
                    .addClass('courierForm')
                    .append(
                        $('<label>')
                        .text('Courier name')
                        .append(
                            $('<select>')
                            .append(
                                $('<option>').prop({ selected: true, hidden: true, disabled: true }).text('FedEx Express'),
                                $('<option>').text('FedEx Priority'),
                                $('<option>').text('UPS Parcel'),
                                $('<option>').text('DHL Express'),
                            )
                            .addClass('inputForm courierName')
                        ),
                        $('<label>')
                        .text('Shipping cost (USD)')
                        .append(
                            $('<input>')
                            .addClass('inputForm courierPrice')
                            .attr({
                                placeholder: '12.99'
                            })
                        ),
                        $('<label>')
                        .text('Delivery time (days)')
                        .append(
                            $('<input>')
                            .addClass('inputForm courierTime')
                            .attr({
                                placeholder: '2'
                            })
                        )
                    ),
                    $('<button>')
                    .addClass('submitCourier')
                    .text('Add courier')
                )
            )
        )


        // Shows modal
        $('.courier-overlay').fadeIn();
        $('body')
        .css({
           marginRight: PAGE_SCROLL_W,
           marginBottom: PAGE_SCROLL_H
        })
        .addClass('showFeedback')


        // Buttons to close modal and reset counter
        $('.closeCourierModal').on('click', function() {
            $('body')
            .removeClass('showFeedback')
            .css({
                marginRight: '0px',
                marginBottom: '0px'
            });
            $('.courier-overlay').hide();
            clearTimeout(feedbackTimerId);
            feedbackTimerId = setTimeout( function () { feedback(); }, 120000)
        });
    }
    ////////////////////////////////////////////////////////////////////

    

    ////////////////////////////////////////////////////////////////////
    // Main function
    setTimeout(function() {
        $('.mainPageSection')
        .css({"background-image": "none"});
        $('.mainPageSection')
        .append(
            TOP_SPACER,
            PAGE_TITLE,
            MAIN_SECTION,
            FEEDBACK_LINK
        );

        ////////////////////////////////////////////////////////////////////
        // Page title
        $('.pageTitle').text('Shipping taxes');
        ////////////////////////////////////////////////////////////////////

        couriers();

        $('.stats__right-box-section, .stats__left-box-section').css({
            backgroundImage: 'none'
        });
    }, 500);
    ////////////////////////////////////////////////////////////////////

    

    ////////////////////////////////////////////////////////////////////
    // Feedback
    $(document).on('click', '.feedbackLink', function () {
        clearTimeout(feedbackTimerId);
        feedback();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Add courier modal
    $(document).on('click', '.add-courier-account', function() {
        clearTimeout(feedbackTimerId);
        addCourier();
    });
    ////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////
    // Add courier modal
    $(document).on('click', '.inputForm', function() {
       $(this).removeClass('required');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Add courier modal
    $(document).on('click', '.submitCourier', function() {
        let ALL_COMPLETED = true;
        if ( $('.courierName').val().length < 5 ) {
            $('.courierName').addClass('required');
            ALL_COMPLETED = false;
        }
        if ( $('.courierPrice').val().length < 2 ) {
            $('.courierPrice').addClass('required');
            ALL_COMPLETED = false;
        }
        if ( $('.courierTime').val().length < 1 ) {
            $('.courierTime').addClass('required');
            ALL_COMPLETED = false;
        }

        if ( ALL_COMPLETED == true ) {
            $.ajax({
                url: '/seller/add/courier',
                method: 'POST',
                data: ({
                    courier_name: $('.courierName').val(),
                    courier_price: $('.courierPrice').val(),
                    time_days: $('.courierTime').val()
                }),
                success(response){}
            })
            $('.closeCourierModal').trigger('click');
            notification('success');
            setTimeout( function(){
                location.reload();
            }, 1000)
        }
    });
    ////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////
    // Selected is black not gray
    $(document).on('change', 'select', function() {
        $(this).css({ color: 'black'});
    });
    ////////////////////////////////////////////////////////////////////



});