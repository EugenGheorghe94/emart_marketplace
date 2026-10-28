$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.fulfilment').trigger('click');
    $('.calculator').addClass('clicked');
    $('.calculator').css({color: 'var(--blue-main)'});
    $('.calculator-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.fulfilment-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});