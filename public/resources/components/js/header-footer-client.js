
$(document).ready(function() {



    ////////////////////////////////////////////////////////////////////
    // For reviews POST call
    $.ajaxSetup({
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Search logic
    $('.mainHeaderSearch').on('keypress', function(e) {
        if (e.which === 13) {
            e.preventDefault();
            if ( $('.mainHeaderSearch').val().length > 3 ) {
                performSearch($(this).val());
            };
        };
    });

    $('.mainSearchButton').on('click', function() {
        if ( $('.mainHeaderSearch').val().length > 3 ) {
            performSearch($('.mainHeaderSearch').val());
        };
    });

    function performSearch(query) {
        window.location.href = `/products/search/${query}`;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Menu slide down when "Products" hover
    $('.menuButton').on('mouseover', function() {
        $(this).addClass('menuButton-hover');
        $('.mainMenuList').slideDown('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Menu slide up when menu mouseleave
    $('.mainMenuList').on('mouseleave', function() {
        $('.menuButton').removeClass('menuButton-hover');
        $(this).slideUp('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Menu slide up when click anywhere
    $(window).on('click', function() {
        $('.menuButton').removeClass('menuButton-hover');
        $('.mainMenuList').slideUp('fast');
    });
    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////
    // Ajax call for categories
    $.ajax({
        url: '/menuCategories',
        method: 'GET',
        success(response) {
            $.each(response, function(section, categories) {
                $.each(categories, function(category, subCategories) {
                    $(`p:contains(${section})`)
                        .parent()
                        .find('.mainMenuExpand')
                        .append(
                            $('<div>')
                            .addClass('category-section')
                            .append(
                                $('<a>')
                                .addClass('category-section__category')
                                .attr({ href: `/products/category/${subCategories.url_slug}` })
                                .text(category)
                            )
                        )
                    $.each(subCategories.children, function(index, subCategory) {
                        $('.mainMenuList').find(`a:contains(${category})`)
                        .parent()
                        .append(
                            $('<a>')
                            .addClass('category-section__subCategory')
                            .attr({ href: `/products/subcategory/${subCategory.url_slug}` })
                            .text(subCategory.cat_name)
                        )
                    });
                });
            });
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Sub-category menu expand
    $('.mainCategoryTab')
        .mouseenter( function () {
            $(this)
            .addClass('menuSection-hover')
            .children('.mainMenuExpand').css({display: 'flex'});
        })
        .mouseleave( function () {
            $(this)
            .removeClass('menuSection-hover')
            .children('.mainMenuExpand').hide();
        });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Top right buttons info on hover
    $('.topHeaderButton')
        .mouseenter( function () {
            $(this)
            .find('.jq-enabled')
            .slideDown('fast')
            .css({top: '42px'})
        })
        .mouseleave( function () {
            $(this)
            .find('.jq-enabled')
            .css({top: '62px'})
            .hide()
        });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Login button
    $('.goLogin').on('click', function () {
        window.location.href = '/client-login'
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Shows big cookie pop-up
    if ( sessionStorage.getItem('cookies') == null ) {
        setTimeout( function() { $('.cookie').show(); }, 500);
        setTimeout( function() { $('.cookie').css({bottom: '0px'}); }, 1000);
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Closes big cookie pop-up and shows small account pop-up
    $('.cookieButton').on('click', function() {
        sessionStorage.setItem('cookies', 'Accepted');
        $('.cookie').css({bottom: '-160px'})
        setTimeout( function() {
            $('.cookie').hide();
            $('.account').show();
        }, 1000);
        setTimeout( function() {
            $('.account').css({bottom: '0px'});
        }, 2000);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close account pop-up
    $('.closeButton').on('click', function() {
        $('.account').css({bottom: '-64px'})
        setTimeout( function() {
            $('.account').hide();
        }, 1000)
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Get number of favorites
    function favoritesCount() {
        $.ajax({ 
            url: '/favorites/count',
            method: 'GET',
            success(response){
                if ( response == 0 ) {
                    $('.favorites-Dot').hide();
                } else {
                    $('.favorites-Dot').show();
                    $('.favorites-Dot').css({ scale: '1.2'})
                    $('.favorites-Dot').text(response)
                    setTimeout( function() {
                        $('.favorites-Dot').css({ scale: '1'})
                    }, 100)
                }
            }
        });
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Initial call to get number of favorites
    favoritesCount();
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Add to favorites button
    $(document).on('click', '.jq-add-to-fav', function() {
        $(this).removeClass('jq-add-to-fav').addClass('jq-remove-from-fav')
        const EAN_13 = $(this).val();

        $.ajax({
            url: '/favorites/add',
            data: { user_id: USER_ID, ean_13: EAN_13 },
            method: 'POST',
            success(response){}
        });

        favoritesCount();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Remove from favorites button
    $(document).on('click', '.jq-remove-from-fav', function() {
        $(this).removeClass('jq-remove-from-fav').addClass('jq-add-to-fav')
        const EAN_13 = $(this).val();

        $.ajax({
            url: '/favorites/remove',
            data: { user_id: USER_ID, ean_13: EAN_13 },
            method: 'POST',
            success(response){}
        });

        favoritesCount();
    });
    ////////////////////////////////////////////////////////////////////

   

    ////////////////////////////////////////////////////////////////////
    // Checks items in cart dot number + summary data
    function cartCount() {


        // If cart is empty
        if ( Object.keys(localStorage).length == 0 ) {
            $('.cartInfo').removeClass('jq-enabled').addClass('jq-disabled');
            $('.complexInfo').removeClass('jq-disabled').addClass('jq-enabled');
            $('.cart-items').html('');
            $('.cart-total').html(`<p><b>Total:</b>&nbsp;0 products</p><p><b>$ 0<sup>00</sup><small>USD</small></b></p>`)
            $('.cart-Dot').text(CART_ITEMS).css({ scale: '1.2'}).show();
            setTimeout( function() { $('.cart-Dot').css({ scale: '1'}).hide() }, 100);
            setTimeout( function() { $('.cartInfo').hide(); }, 100)


        // If product added to cart
        } else {
            $('.cartInfo').removeClass('jq-disabled').addClass('jq-enabled');
            $('.complexInfo').removeClass('jq-enabled').addClass('jq-disabled');
        }


        // Height specified to not fully close when removing items
        $('.cart-items').css({ height: `${Object.keys(localStorage).length * 67}` });


        var CART_ITEMS = 0;
        var CART_TOTAL = 0;


        // For each item in cart
        const keys = Object.keys(localStorage);
        keys.forEach(key => { 
            CART_ITEMS += parseInt(localStorage.getItem(key), 10);
            $('.cart-items').html('');
            
            $.ajax({
                url: `/cart/summary/${key}`,
                method: 'GET',
                success(response) {

                    CART_TOTAL += response.final_price * parseInt(localStorage.getItem(key));

                    $('.cart-items')
                    .append(
                        $('<div>')
                        .addClass('cart-items__card')
                        .append(
                            $('<button>')
                            .addClass('cart-items__card-remove jq-remove-from-cart')
                            .attr({
                                value: `${key}`
                            }),
                            $('<div>')
                            .addClass('cart-items__card-image')
                            .css({
                                backgroundImage: `url('/storage/products/thumbnails/${response.thumbnail}')`
                            }),
                            $('<div>')
                            .addClass('cart-items__card-title')
                            .text(response.title),
                            $('<div>')
                            .addClass('cart-items__card-qty')
                            .html(`<p>${localStorage.getItem(key)}</p>`),
                            $('<div>')
                            .addClass('cart-items__card-price')
                            .html(`<p>${parseFloat(response.final_price).toFixed(2).split('.')[0]}<sup>${parseFloat(response.final_price).toFixed(2).split('.')[1]}</sup><small>USD</small></p>`),
                        )
                    )

                    $('.cart-total')
                    .html(`<p><b>Total:</b>&nbsp;${CART_ITEMS} products</p><p><b>$ ${CART_TOTAL.toFixed(2).split('.')[0]}<sup>${CART_TOTAL.toFixed(2).split('.')[1]}</sup><small>USD</small></b></p>`)
                }
            });
        });


        // Cart dot animation
        $('.cart-Dot').text(CART_ITEMS).css({ scale: '1.2'}).show();
        setTimeout( function() { $('.cart-Dot').css({ scale: '1'}) }, 100);


        // Cart total upper shade for scroll
        if ( Object.keys(localStorage).length > 5 ) {
            $('.cart-total').addClass('top-shade');
        } else {
            $('.cart-total').removeClass('top-shade');
        };
    };
    ////////////////////////////////////////////////////////////////////
    


    ////////////////////////////////////////////////////////////////////
    // Initial cart check condition
    if ( Object.keys(localStorage).length > 0 ) { cartCount(); };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Adding to cart
    $(document).on('click', '.jq-add-to-cart', function() {
        const ITEM_PIECES = parseInt(localStorage.getItem($(this).data('product')), 10);

        if ( localStorage.getItem($(this).data('product')) ) {
            localStorage.setItem($(this).data('product'),  ITEM_PIECES + $(this).data('quantity'))
        } else {
            localStorage.setItem($(this).data('product'), $(this).data('quantity'));
        };
        cartCount();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Removing from cart
    $(document).on('click', '.jq-remove-from-cart', function() {
        localStorage.removeItem($(this).val());
        cartCount();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Show hide go to top button when scrolled
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.upButton').fadeIn('slow');
        } else {
            $('.upButton').fadeOut('slow');
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Click to go to top
    $(document).on('click', '.upButton', function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");   
    });
    ////////////////////////////////////////////////////////////////////



});