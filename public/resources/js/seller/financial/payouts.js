$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.financial').trigger('click');
    $('.payouts').addClass('clicked');
    $('.payouts').css({color: 'var(--blue-main)'});
    $('.payouts-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.financial-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});