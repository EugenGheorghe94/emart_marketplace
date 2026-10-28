$(document).ready( function() {



    ////////////////////////////////////////////////////////////////////
    // Page main menu button click
    $('.notifications').trigger('click');
    $('.notifications').addClass('clicked-main');
    ////////////////////////////////////////////////////////////////////

    

    ////////////////////////////////////////////////////////////////////
    // Page small icon button click
    $('.notifications-div').css({color: 'var(--blue-main)'});
    $('.notifications-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.notifications-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////








});