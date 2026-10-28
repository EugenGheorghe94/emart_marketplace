$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.campaigns').trigger('click');
    $('.campaigns-2').addClass('clicked');
    $('.campaigns-2').css({color: 'var(--blue-main)'});
    $('.campaigns-2-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.campaigns-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});