$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.ads').trigger('click');
    $('.credits').addClass('clicked');
    $('.credits').css({color: 'var(--blue-main)'});
    $('.credits-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.ads-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});