$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Logo menu button
    $('.bigLogo').on('click', function() {
        window.location.href = "/seller/dashboard"
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Toggle platform/account menu click
    $(document).on('click', '.topMiddle-area__selected', function(e) {
        e.stopPropagation();
        $('.topMiddle-area__menu').slideToggle(100);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close platform/account menu when clicking anywhere else
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.topMiddle-area__menu').length) {
            $('.topMiddle-area__menu').slideUp(100);
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // My account menu button
    $('.topMiddle-area__account-option').on('click', function() {
        window.location.href = "/seller/account/profile"
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Logout menu button
    $('.topMiddle-area__logout-option').on('click', function() {
        window.location.href = "/seller-logout"
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Toggle langauge menu click
    $(document).on('click', '.headLangArea', function(e) {
        e.stopPropagation();
        if ( $('.carret').hasClass('down') ) {
            $('.down').removeClass('down').addClass('up');
        } else if ( $('.carret').hasClass('up' )) {
             $('.up').removeClass('up').addClass('down');
        }
        $('.langSelect-area').slideToggle(100);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close languag menu when clicking anywhere else
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.langSelect-area').length) {
            $('.up').removeClass('up').addClass('down');
            $('.langSelect-area').slideUp(100);
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Switch language based on selection
    $(document).on('click', '.lang-btn', function() {
        if ( $(this).hasClass('es') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-mx"></span>ES</p>')
        } else if ( $(this).hasClass('fr') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-fr"></span>FR</p>')
        } else if ( $(this).hasClass('en') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-us"></span>EN</p>')
        } else if ( $(this).hasClass('de') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-de"></span>DE</p>')
        } else if ( $(this).hasClass('pl') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-pl"></span>PL</p>')
        } else if ( $(this).hasClass('cn') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-cn"></span>CN</p>')
        };
        $('.langSelect-area').slideUp(100);
        $('.up').removeClass('up').addClass('down');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Side menu option expanded / minimized
    $(document).on('click', '.menuButton-1', function() {
        if ( $(this).hasClass('minimized') ) {


            // Closes already opened submenu
            $('.menuButton-0')
            .removeClass('expanded')
            .addClass('minimized')
            $('.menuButton-1')
            .removeClass('expanded')
            .addClass('minimized')
            .parent()
            .find('.menuButton-2')
            .slideUp('fast')

            
            // Unclicks already clicked main menu
            $('.clicked-main')
            .removeClass('clicked-main')


            // Openes clicked menu
            $(this)
            .removeClass('minimized')
            .addClass('expanded')
            .parent()
            .find('.menuButton-2')
            .slideDown('fast')
            .css({
                display: "flex",
                alignItems: "center",
                justifyContent: "justify",
                paddingLeft: "0px"
            });


        // If clicked menu is already opened
        } else if ( $(this).hasClass('expanded') ) {
            $(this)
            .removeClass('expanded')
            .addClass('minimized')
            .parent()
            .find('.menuButton-2')
            .slideUp('fast')   
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Side menu option expanded / minimized
    $(document).on('click', '.expandIconMenu', function() {
        $(this).parent().addClass('selected');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Side menu option expanded / minimized
    $('.minimize').click( function(e) {
        e.stopPropagation(); 
        $('.sideBarArea').css({"left": "-210px"});
        $('.sideBarArea').hide('fast');
        $('.menuSideIcons').fadeIn('fast');
        $('.menuSideIcons').css({"left": "0px"});
        $('.mainPageSection').css({"padding-left": "43px"});
        $('footer').css({"padding-left": "43px"});
    });
    ////////////////////////////////////////////////////////////////////
        


    ////////////////////////////////////////////////////////////////////
    // Side menu option expanded / minimized
    $('.maximize').click( function(e) {
        e.stopPropagation();
        if ( !$('.sideBarArea').is(':visible') ) {
            $('.sideBarArea').show();
            $('.sideBarArea').css({"left": ""});
            $('.menuSideIcons').css({"left": "-42px"});
            $('.menuSideIcons').hide('fast');
            $('.mainPageSection').css({"padding-left": "205px"});
            $('footer').css({"padding-left": "205px"});
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Show hide go to top button when scrolled
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.upButton').fadeIn('slow');
        } else {
            $('.upButton').fadeOut('slow');
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Click to go to top
    $(document).on('click', '.upButton', function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");   
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Show cookie on first load
    if ( sessionStorage.getItem('cookies') == null ) {
        setTimeout(function() { $('.cookie').css({bottom: '0px'}); }, 1500);
    }
    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////
    // Close cookie on any click
    $(document).on('click', '.close-cookie', function() {
        sessionStorage.setItem('cookies', 'Accepted');
        $('.cookie').css({bottom: '-150px'});
        setTimeout( function() { $('.cookie').hide(10); }, 1000);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Check for new orders/returns and add badge
    $.ajax({
        url: '/new/orders',
        method: 'GET',
        success(response) {
            if( response > 0 ) {
                $('.newOrdersDot').after(
                    $('<span>')
                    .addClass('ordersBadge redDot')
                    .text(response)
                )
            }
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Check for new orders/returns and add badge
    $.ajax({
        url: '/new/returns',
        method: 'GET',
        success(response) {
            if( response > 0 ) {
                $('.newReturnsDot').after(
                    $('<span>')
                    .addClass('returnsBadge redDot')
                    .text(response)
                )
            }
        }
    });
    ////////////////////////////////////////////////////////////////////


});