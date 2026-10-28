$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.financial').trigger('click');
    $('.documents-3').addClass('clicked');
    $('.documents-3').css({color: 'var(--blue-main)'});
    $('.documents-3-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.financial-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});