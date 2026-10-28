$(document).ready(function() {



    ////////////////////////////////////////////////////////////////////
    // Show top search area + menu after scroll
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 200 ) {
            

            // Pops-up sticky top navbar and makes menu responsive
            $('.mainHeaderArea').removeClass('header-hidden');
            $('.mainHeaderArea').addClass('header-sticky');
            $('.topHeaderArea').addClass('sticky-grid');
            $('.mainMenuList').addClass('menu-sticky');
            $('.topBurgerMenu').removeClass('hidden');
            $('.smallGradientLine').show();
            $('.menuButton').on('mouseover');
            $('.mainMenuList').on('mouseleave');
            $(window).on('click');


            // Shows menu on mouse enter
            $(document).on('mouseenter', '.topBurgerMenu', function() {
                $(this).removeClass('burger').addClass('close');
                $('.mainMenuList').slideDown('fast')
            });


            // Hides menu on mouse leave
            $('.mainMenuList').mouseleave( function () {
                $('.topBurgerMenu').removeClass('close').addClass('burger');
                $(this).slideUp('fast')
            });


            // Hides menu on mouse click anywhere
            $(window).on('click', function () {
                $('.topBurgerMenu').removeClass('close').addClass('burger');
                $('.mainMenuList').slideUp('fast');
            });


        } else {


            // If scrolled back to top, resets everything
            $('.mainHeaderArea').removeClass('header-hidden');
            $('.mainHeaderArea').removeClass('header-sticky');
            $('.topHeaderArea').removeClass('sticky-grid');
            $('.mainMenuList').removeClass('menu-sticky');
            $('.topBurgerMenu').addClass('hidden');
            $('.smallGradientLine').hide();
            $(window).off('click');
        };
    });


    // Shows sticky header out of view for smooth transition in view
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.mainHeaderArea').addClass('header-hidden')
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Change phone number logic
    $(document).on('click', '.changeData', function() { window.location.href = "/addresses"; });
    ////////////////////////////////////////////////////////////////////



});