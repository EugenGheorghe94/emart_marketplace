$(document).ready( function () {
    


    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.fulfilment').trigger('click');
    $('.reception').addClass('clicked');
    $('.reception').css({color: 'var(--blue-main)'});
    $('.reception-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.fulfilment-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////


    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});