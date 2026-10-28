$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.financial').trigger('click');
    $('.invoices').addClass('clicked');
    $('.invoices').css({color: 'var(--blue-main)'});
    $('.invoices-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.financial-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////
    

    
    setTimeout(function() {
        $('.mainPageSection').css({"background-image": "none"});
    }, 10000);

});