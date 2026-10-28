$(document).ready( function () {
    

    
    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.myAccount').trigger('click');
    $('.profile').addClass('clicked');
    $('.profile').css({color: 'var(--blue-main)'});
    $('.profile-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.account-icon-menu').trigger('click');
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
    // Top folder buttons
    const FRAME_BUTTONS = 
        $('<div>')
        .addClass('frameButtons')
        .append(
            $('<div>')
            .addClass('topFrameButton profile-btn clicked')
            .text('Profile'),
            $('<div>')
            .addClass('topFrameButton contact-btn unclicked')
            .text('Contact'),
            $('<div>')
            .addClass('topFrameButton address-btn unclicked')
            .text('Address'),
            $('<div>')
            .addClass('topFrameButton operational-btn unclicked')
            .text('Operational'),
            $('<div>')
            .addClass('topFrameButton permissions-btn unclicked')
            .text('Permissions'),
            $('<div>')
            .addClass('topFrameButton financial-btn unclicked')
            .text('Financial'),
            $('<div>')
            .addClass('topFrameButton services-btn lastTopFrameButton unclicked')
            .text('Services'),
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Top folder buttons
    const MAIN_FRAME  = 
        $('<div>')
        .addClass('mainFrame profile-frame')
        .append(


            // General information
            $('<div>')
            .addClass('generalInfo blueSection')
            .append(
                $('<div>')
                .addClass('blueSectionTitle')
                .append(
                    $('<div>')
                    .addClass('blueTitle')
                    .text('General information'),
                    $('<div>')
                    .addClass('minMaxBtn maximize')
                ),
                $('<div>')
                .addClass('formArea minMaxDiv')
                .append(
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text('Marketplace name'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: COMPANY_NAME,
                            disabled: true
                        }),
                        $('<label>')
                        .text('Seller status'),
                        $('<select>')
                        .addClass('formSelect enabled')
                        .append(
                            $('<option>')
                            .addClass('Green')
                            .html('🟢&nbsp;&nbsp;Green (Active)'),
                             $('<option>')
                            .addClass('Pink')
                            .html('🟣&nbsp;&nbsp;Violet (Inactive)'), 
                            $('<option>')
                            .addClass('Red')
                            .html('🔴&nbsp;&nbsp;Red (Suspended)')
                            .attr({ disabled: true, }),
                            $('<option>')
                            .addClass('Orange')
                            .html('🟠&nbsp;&nbsp;Orange (Warning)')
                            .attr({ disabled: true, }),
                            $('<option>')
                            .addClass('Yellow')
                            .html('🟡&nbsp;&nbsp;Yellow (Pending)')
                            .attr({ disabled: true, }),
                             $('<option>')
                            .addClass('Black')
                            .html('⚫&nbsp;&nbsp;Black (Blocked)')
                            .attr({ disabled: true, }),
                        )
                    ),
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text('Account health cluster'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: ACCOUNT_HEALTH,
                            disabled: true
                        }),
                        $('<label>')
                        .text('Created at'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: HISTORY,
                            disabled: true
                        })
                    ),
                ),
            ),
            

            // Registered office
            $('<div>')
            .addClass('generalInfo blueSection')
            .append(
                $('<div>')
                .addClass('blueSectionTitle')
                .append(
                    $('<div>')
                    .addClass('blueTitle')
                    .text('Registered office'),
                    $('<div>')
                    .addClass('minMaxBtn maximize')
                ),
                $('<div>')
                .addClass('formArea minMaxDiv')
                .append(
                    $('<form>')
                    .addClass('hqForm std-form')
                    .append(
                        $('<label>')
                        .text('Country'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: 'United States',
                            disabled: true
                        }),
                        $('<label>')
                        .text('City'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: 'Dallas',
                            disabled: true
                        }),
                    ),
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text('State'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: 'Texas',
                            disabled: true
                        }),
                        $('<label>')
                        .text('Zip code'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '75201',
                            disabled: true
                        })
                    ),
                    $('<form>')
                    .addClass('generalForm std-form')
                    .append(
                        $('<label>')
                        .text('Address'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '2141 Bryan Street',
                            disabled: true
                        }),
                        $('<label>')
                        .html('&nbsp;'),
                        $('<button>')
                        .addClass('editButton addrButton')
                        .text('Edit address')
                    ),
                ),
            ),
            
        
            // Seller properties
            $('<div>')
            .addClass('sellerProp blueSection')
            .append(
                $('<div>')
                .addClass('blueSectionTitle')
                .append(
                    $('<div>')
                    .addClass('blueTitle')
                    .text('Seller properties'),
                    $('<div>')
                    .addClass('minMaxBtn maximize')
                ),
                $('<div>')
                .addClass('formArea minMaxDiv')
                .append(
                    $('<form>')
                    .addClass('hqForm std-form')
                    .append(
                        $('<label>')
                        .text('SGR code'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '',
                            disabled: true
                        }),
                    ),
                    $('<form>')
                    .addClass('hqForm std-form')
                    .append(
                        $('<label>')
                        .html('&nbsp;'),
                        $('<button>')
                        .addClass('editButton addrButton')
                        .text('Adauga informatii suplimentare despre companie')
                    ),
                ),
            ),


            // Operational settings
            $('<div>')
            .addClass('generalInfo blueSection')
            .append(
                $('<div>')
                .addClass('blueSectionTitle')
                .append(
                    $('<div>')
                    .addClass('blueTitle')
                    .text('Operational settings'),
                    $('<div>')
                    .addClass('minMaxBtn maximize')
                ),
                $('<div>')
                .addClass('formArea minMaxDiv')
                .append(
                    $('<form>')
                    .addClass('opForm std-form')
                    .append(
                        $('<label>')
                        .text('Preferred language for notifications'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: 'english [EN]',
                            disabled: true
                        }),
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
                        $('<label>')
                        .text('Daily order processing capacity'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '50',
                            disabled: true
                        }),
                    ),
                    $('<form>')
                    .addClass('opForm std-form middle')
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
                    .addClass('opForm std-form middle')
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
                ),
            ),      
            
            
            // Returns, operational settings
            $('<div>')
            .addClass('sellerProp blueSection')
            .append(
                $('<div>')
                .addClass('blueSectionTitle')
                .append(
                    $('<div>')
                    .addClass('blueTitle')
                    .text('Returns | Operational settings'),
                    $('<div>')
                    .addClass('minMaxBtn maximize')
                ),
                $('<div>')
                .addClass('formArea minMaxDiv')
                .append(
                    $('<form>')
                    .addClass('reForm std-form')
                    .append(
                        $('<label>')
                        .text('Return period'),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: '30 days',
                            disabled: true
                        }),
                        $('<label>')
                        .text("Destination address for return AWB's"),
                        $('<input>')
                        .addClass('formInput disabled')
                        .attr({
                            placeholder: 'Address set as the return point',
                            disabled: true
                        }),
                    ),
                    $('<form>')
                    .addClass('btnForm std-form')
                    .append(
                        $('<label>')
                        .text('Free returns'),
                        $('<div>')
                        .addClass('slideButtonMain')
                        .append(
                            $('<div>')
                        .addClass('slideButton')
                        .text('|||'),
                            $('<div>')
                        .addClass('infoButton no')
                        .text('NO')
                        ),
                        $('<label>')
                        .text('Automatic reversal of COD orders'),
                        $('<div>')
                        .addClass('slideButtonMain')
                        .append(
                            $('<div>')
                        .addClass('slideButton')
                        .text('|||'),
                            $('<div>')
                        .addClass('infoButton no')
                        .text('NO')
                        )
                    ),          
                    $('<form>')
                    .addClass('btnForm std-form')
                    .append(
                        $('<label>')
                        .text('Automatic reversal of CO orders'),
                        $('<div>')
                        .addClass('slideButtonMain')
                        .append(
                            $('<div>')
                        .addClass('slideButton')
                        .text('|||'),
                            $('<div>')
                        .addClass('infoButton no')
                        .text('NO')
                        )
                    ),                  
                )
            ),


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
                    .addClass('minMaxBtn maximize')
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
                        $('<p>').text('2019'),
                        $('<p>').html('<i class="fa-solid fa-pencil"></i>')
                    ),
                    $('<div>')
                    .addClass('yearDiv odd')
                    .append(
                        $('<p>').text('2020'),
                        $('<p>').html('<i class="fa-solid fa-pencil"></i>')
                    ),
                    $('<div>')
                    .addClass('yearDiv even')
                    .append(
                        $('<p>').text('2021'),
                        $('<p>').html('<i class="fa-solid fa-pencil"></i>')
                    ),
                    $('<div>')
                    .addClass('yearDiv odd')
                    .append(
                        $('<p>').text('2022'),
                        $('<p>').html('<i class="fa-solid fa-pencil"></i>')
                    ),
                    $('<div>')
                    .addClass('yearDiv even')
                    .append(
                        $('<p>').text('2023'),
                        $('<p>').html('<i class="fa-solid fa-pencil"></i>')
                    ),
                    $('<div>')
                    .addClass('yearDiv odd')
                    .append(
                        $('<p>').text('2024'),
                        $('<p>').html('<i class="fa-solid fa-pencil"></i>')
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
            ),
        );
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
            FEEDBACK_LINK
        );



        ////////////////////////////////////////////////////////////////////
        // Page title
        $('.pageTitle').text('Seller profile');
        ////////////////////////////////////////////////////////////////////



        $('.mainPageSection').css({"background-image": "none"});



    }, 500);
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Main function
    $(document).on('click', '.minMaxBtn', function() {
        $(this).removeClass('maximize').addClass('minimize')
        let hideUnhide = $(this).closest('.blueSection').find('.minMaxDiv');
        if ( hideUnhide.is(':visible') ) {
            hideUnhide.css({opacity: '0'}).slideUp('fast');
        } else {
            $(this).removeClass('minimize').addClass('maximize')
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