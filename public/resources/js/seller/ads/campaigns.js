$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.ads').trigger('click');
    $('.ads-campaigns').addClass('clicked');
    $('.ads-campaigns').css({color: 'var(--blue-main)'});
    $('.ads-campaigns-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.ads-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});