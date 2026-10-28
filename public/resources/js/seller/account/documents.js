$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.myAccount').trigger('click');
    $('.documents').addClass('clicked');
    $('.documents').css({color: 'var(--blue-main)'});
    $('.documents-div').css({backgroundColor: 'var(--blue-lightest)'});
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
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Top page banner notifications
    const PAGE_BANNERS = $('<div>')
        .addClass('pageBanners')
        .append(
            $('<div>')
            .addClass('banner')
            .append(
                $('<div>')
                .addClass('notifiNumber')
                .text('3'),
                $('<div>')
                .addClass('notifiTextArea')
                .append(
                    $('<p>')
                    .html(`Click here to view<br>the legal documents requiring approval`)
                )
            ),
            $('<div>')
            .addClass('banner')
            .append(
                $('<div>')
                .addClass('notifiNumber')
                .text('3'),
                $('<div>')
                .addClass('notifiTextArea')
                .append(
                    $('<p>')
                    .html(`Click here to review<br>legal documentation pending approval`)
                )
            )
        );
        ////////////////////////////////////////////////////////////////////





        ////////////////////////////////////////////////////////////////////
        // Main page container
        const PAGE_CONTAINER = $('<div>')
            .addClass('pageContainter')
            .append(
                $('<div>')
                .addClass('generalInfo blueSection')
                .append(
                    $('<div>')
                    .addClass('blueSectionTitle')
                    .append(
                        $('<div>')
                        .addClass('blueTitle')
                        .text('Legal documents list'),
                    ),
                    $('<div>')
                    .addClass('topBars')
                    .append(
                        $('<div>')
                        .addClass('topButtonArea')
                        .append(
                            $('<button>')
                            .addClass('topButton blue-button')
                            .text('Generate self-declaration of liability'),
                            $('<button>')
                            .addClass('topButton red-button')
                            .text('Terminate account')
                        ),
                        $('<div>')
                        .addClass('topSectionArea')
                        .append(
                            $('<div>')
                            .addClass('section masterCheck'),
                            $('<div>')
                            .addClass('section')
                            .text('ID'),
                            $('<div>')
                            .addClass('section')
                            .text('Contract no.'),
                            $('<div>')
                            .addClass('section')
                            .text('Legal type'),
                            $('<div>')
                            .addClass('section')
                            .text('Document type'),
                            $('<div>')
                            .addClass('section')
                            .text('Accepted by'),
                            $('<div>')
                            .addClass('section')
                            .text('Status'),
                            $('<div>')
                            .addClass('section')
                            .text('Date of issue'),
                            $('<div>')
                            .addClass('section')
                            .text('Approval type'),
                            $('<div>')
                            .addClass('last-section')
                            .text('Actions')
                        )
                    ),
                $('<div>')
                .addClass('documents-area')
                .append(
                    showDocument('1', '5029933', '2024-04-11', 'TC', 'Self Certification', 'gray', 'Expired', '11/04/2024', 'Check', 'Open / View'),
                    showDocument('2', '5029925', '2024-04-11', 'TC', 'Company Identification Affidavit', 'gray', 'Expired', '11/04/2024', 'Check', 'Open / View'),
                    showDocument('1', '5029916', '2024-04-11', 'TC', 'Appendix 5 - Fair Business Practices', 'gray', 'Expired', '11/04/2024', 'Check', 'Open / View'),
                    showDocument('2', '5029910', '2024-04-11', 'TC', 'Appendix 4 - GDPR', 'green', 'Active', '11/04/2024', 'Read', 'Open / View'),
                    showDocument('1', '5029890', '2024-04-11', 'TC', 'Appendix 3 - Commissions', 'gray', 'Expired', '11/04/2024', 'Check', 'Open / View'),
                    showDocument('2', '5029869', '2024-04-11', 'TC', 'Appendix 2 - Performance', 'blue', 'Renewed', '11/04/2024', 'Approve', 'Open / View'),
                    showDocument('1', '5029847', '2024-04-11', 'FBE', 'Appendix 1 - Terms and Conditions', 'gray', 'Expired', '11/04/2024', 'Check', 'Open / View'),
                    showDocument('2', '5025478', '2024-04-11', 'TC', 'Terms and Conditions', 'gray', 'Expired', '11/04/2024', 'Check', 'Open / View'),
                    showDocument('1', '4773892', '2023-09-14', 'TC', 'Genius HD', 'green', 'Active', '20/02/2024', 'Approve', 'Open / View'),
                    showDocument('2', '4715546', '2023-09-14', 'TC', 'Self Certification', 'red', 'Refused', '14/02/2024', 'Check', 'Open / View'),
                    showDocument('1', '4677961', '2023-09-14', 'TC', 'Commissions Addendum', 'gray', 'Expired', '20/01/2024', 'Check', 'Open / View'),
                    showDocument('2', '4626883', '2023-09-14', 'TC', 'Commissions Addendum', 'blue', 'Renewed', '18/11/2023', 'Approve', 'Open / View'),
                    showDocument('1', '4308069', '2023-09-14', 'TC', 'Genius Appendix', 'gray', 'Expired', '14/09/2023', 'Check', 'Open / View'),
                    showDocument('2', '4307902', '2023-09-14', 'TC', 'Company Identification Affidavit', 'gray', 'Expired', '14/09/2023', 'Check', 'Open / View'),
                    showDocument('1', '4307878', '2023-09-14', 'FBE', 'Appendix 4 - GDPR', 'green', 'Active', '14/09/2023', 'Read', 'Open / View'),
                    showDocument('2', '4307777', '2023-09-14', 'TC', 'Appendix 3 - Commissions', 'gray', 'Expired', '14/09/2023', 'Check', 'Open / View'),
                    showDocument('1', '4307705', '2023-09-14', 'TC', 'Appendix 2 - Performance', 'gray', 'Expired', '14/09/2023', 'Check', 'Open / View'),
                    showDocument('2', '4307644', '2023-09-14', 'TC', 'Appendix 1 - Terms and Conditions', 'blue', 'Renewed', '14/09/2023', 'Approve', 'Open / View'),
                    showDocument('1', '4305643', '2023-09-14', 'TC', 'Terms and Conditions', 'gray', 'Expired', '14/09/2023', 'Check', 'Open / View'),
                    showDocument('2', '4145493', '2023-03-30', 'TC', 'Commissions Addendum', 'green', 'Active', '29/08/2023', 'Approve', 'Open / View')
                )
            )
        );    
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Main function
    function showDocument(index, dNumber, dContract, dCategory, dType, dColor, dStatus, dDate, dApproval, dAction) {
        const DOCUMENT_ROW =
            $('<div>')
                .addClass(`documents-area__row row-${index}`)
                .append(
                    $('<p>').addClass('check cell'),
                    $('<p>').addClass('stdTextCenter cell').text(dNumber),
                    $('<p>').addClass('stdTextCenter cell').text(dContract),
                    $('<p>').addClass('stdTextCenter cell').text(dCategory),
                    $('<p>').addClass('stdTextCenter cell').text(dType),
                    $('<p>').addClass('stdTextCenter cell').text($('.topCompanyInfo').data('email')),
                    $('<p>').addClass('stdLabel cell').html(`<span class="${dColor}" style>${dStatus}</span>`),
                    $('<p>').addClass('stdDate cell').text(dDate),
                    $('<p>').addClass('stdTextCenter cell').text(dApproval),
                    $('<p>').addClass('actionButton last-cell').text(dAction),
                );
            return DOCUMENT_ROW;
    };
    ////////////////////////////////////////////////////////////////////




    ////////////////////////////////////////////////////////////////////
    // Main function
    setTimeout(function() {
        $('.mainPageSection')
        .append(
            TOP_SPACER,
            PAGE_TITLE,
            PAGE_BANNERS,
            PAGE_CONTAINER,
            FEEDBACK_LINK  
        )


        ////////////////////////////////////////////////////////////////////
        // Page title
        $('.pageTitle').text('Legal documents');
        ////////////////////////////////////////////////////////////////////




        $('.mainPageSection').css({"background-image": "none"});


    }, 500);
    ////////////////////////////////////////////////////////////////////

});