$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.fulfilment').trigger('click');
    $('.f-dashboard').addClass('clicked');
    $('.f-dashboard').css({color: 'var(--blue-main)'});
    $('.f-dashboard-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.fulfilment-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});