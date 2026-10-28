$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.financial').trigger('click');
    $('.statement').addClass('clicked');
    $('.statement').css({color: 'var(--blue-main)'});
    $('.statement-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.financial-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});