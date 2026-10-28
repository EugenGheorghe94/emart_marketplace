$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.messages').trigger('click');
    $('.contact').addClass('clicked');
    $('.contact').css({color: 'var(--blue-main)'});
    $('.contact-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.messages-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});