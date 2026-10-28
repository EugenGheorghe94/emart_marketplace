$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.messages').trigger('click');
    $('.messages-2').addClass('clicked');
    $('.messages-2').css({color: 'var(--blue-main)'});
    $('.messages-2-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.messages-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});