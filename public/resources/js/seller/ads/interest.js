$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.ads').trigger('click');
    $('.interest').addClass('clicked');
    $('.interest').css({color: 'var(--blue-main)'});
    $('.interest-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.ads-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});