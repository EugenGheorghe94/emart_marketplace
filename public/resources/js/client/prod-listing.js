$(document).ready(function() {



    ////////////////////////////////////////////////////////////////////
    // For reviews POST call
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    ////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////
    // Alternative ways to login
    $('.shareButton').on('click', function() {
        window.open('https://www.facebook.com/','myWindow',`width=700,height=700,left=600,top=200`);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Rotate loading gif faster
    $('.dynamic-content__loader').css({ transform: 'rotate(720deg)' });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAZ call for ip -> location
    setTimeout( function() {
        $('.dynamic-content').fadeOut('slow');
    }, 350)
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Top product summary visible on scroll
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 1000 ) {
            $('.dropDownNavBar').show();
            setTimeout( function() {$('.dropDownNavBar').css({ transform: 'translateY(100px)' });}, 100)
        };
    });
    $(window).scroll(function() {
        if ( $(window).scrollTop() < 800 ) {
            $('.dropDownNavBar').css({ display: 'none', transform: 'translateY(0px)' });
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Blue navbar sticky
    $('.descriptionBar').css({ position: 'sticky' });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Next / Previous carousel image logic
    $('.nextIMG').on('click', function() {
        if ( $('.moreIMG-carousel__ribbon').hasClass('tr12') ) {
            $('.moreIMG-carousel__ribbon')
            .removeClass('tr12')
            .addClass('tr25');
            $('.nextIMG').fadeOut('fast');
        } else {
            $('.moreIMG-carousel__ribbon').addClass('tr12');
            $('.prevIMG').fadeIn('fast');
        };
    });
    $('.prevIMG').on('click', function() {
        if ( $('.moreIMG-carousel__ribbon').hasClass('tr25') ) {
            $('.moreIMG-carousel__ribbon')
            .removeClass('tr25')
            .addClass('tr12');
            $('.nextIMG').fadeIn('fast');
        } else {
            $('.moreIMG-carousel__ribbon').removeClass('tr12');
            $('.prevIMG').fadeOut('fast');
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Adding product carousel buttons
    $('.similar-products__buttons')
    .append(
        $('<div>').addClass('prevPROD'),
        $('<div>').addClass('nextPROD')
    );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Next / Previous carousel product logic
    $('.nextPROD').on('click', function() {
        const CAROUSEL = $(this).parent().next().find('.similar-products__carousel-ribbon');
        if ( CAROUSEL.hasClass('tr33') ) {
            CAROUSEL.removeClass('tr33').addClass('tr66');
            $(this).fadeOut('fast');
        } else {
            CAROUSEL.addClass('tr33');
            $(this).prev().fadeIn('fast');
        };
    });
    $('.prevPROD').on('click', function() {
        const CAROUSEL = $(this).parent().next().find('.similar-products__carousel-ribbon');
        if ( CAROUSEL.hasClass('tr66') ) {
            CAROUSEL.removeClass('tr66').addClass('tr33');
            $(this).next().fadeIn('fast');
        } else {
            CAROUSEL.removeClass('tr33');
            $(this).fadeOut('fast');
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Sale price info
    $('.show-sale-info').mouseenter(
        function() { 
            $('.sale-info')
            .fadeIn('fast')
            .css({transform: 'translateY(42%)'})
        }
    );
    $('.show-sale-info').mouseleave(
        function() {
            $('.sale-info')
            .fadeOut('fast')
            .css({transform: 'translateY(62%)'})
        }
    );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Product image selection logic
    $('.productImage').hover(
        function() {
            $('.sIMG').hover(
                function() {
                    $('.sIMG').removeClass('hovered');
                    $(this).addClass('hovered');
                    $('.IMG').hide()
                    $('.IMG').removeClass($('.IMG').attr('class').split(/\s+/)[1]);
                    $('.IMG').addClass($(this).attr('class').split(/\s+/)[1]);
                    $('.IMG').stop(true, true).fadeIn(300);
                }, 
                function() {
                }
            );
        },
        function() {
            if ( $('.IMG').attr('class').trim().split(/\s+/).length > 1 ) {
                setTimeout( function() {
                    $('.IMG').hide();
                    $('.IMG').removeClass($('.IMG').attr('class').split(/\s+/)[1]);
                    $('.IMG').stop(true, true).fadeIn(300);
                    $('.sIMG').removeClass('hovered');
                    $('.small-img-1').addClass('hovered');
                    
                    if ( $('.moreIMG-carousel__ribbon').hasClass('tr12') ) {
                        $('.prevIMG').trigger('click');
                    } else if ( $('.moreIMG-carousel__ribbon').hasClass('tr25') ) {
                        $('.prevIMG').trigger('click').trigger('click');
                    }
                }, 1000);
            }   
        }
    );
    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////
    // Changes button state based on scroll - CLAUDE
    const links = document.querySelectorAll('.descNavBtn');
    const sections = [...links].map(l => document.getElementById(l.getAttribute('href').split('#')[1]));

    window.addEventListener('scroll', () => {
        let current = sections[0];
        sections.forEach(s => { if (s && window.scrollY >= s.offsetTop - 150) current = s; });
        links.forEach(l => {
            const isActive = l.getAttribute('href').endsWith('#' + current.id);
            l.classList.toggle('inview', isActive);
            l.classList.toggle('normal', !isActive);
        });
    });
    ////////////////////////////////////////////////////////////////////
   

    ////////////////////////////////////////////////////////////////////
    // Main "Add to cart" button animation
    $('.addToCart').on('click', function() {
        $('.addToCartLoader').css({transform: 'rotate(0deg)'});
        $(this).css({ color: 'transparent'});
        $('.addToCartLoader')
        .fadeIn(100).css({transform: 'rotate(720deg)'});
        setTimeout( function() {
            $('.addToCartLoader').fadeOut(100);
            $('.addToCart').css({ color: 'white'});
        }, 1000);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Navbar summary "Add to cart" button animation
    $('.summary-to-cart').on('click', function() {
        $('.summaryCartLoader').css({transform: 'rotate(0deg)'});
        $(this).css({ color: 'transparent'});
        $('.summaryCartLoader')
        .fadeIn(100).css({transform: 'rotate(720deg)'});
        setTimeout( function() {
            $('.summaryCartLoader').fadeOut(100);
            $('.summary-to-cart').css({ color: 'white'});
        }, 1000);
    });
    ////////////////////////////////////////////////////////////////////
    


    ////////////////////////////////////////////////////////////////////
    // Add review
    $('.1-star').hover( 
        function() {
            $(this).addClass('yellow')
            $('.rate-it').text('Very bad')
        }, function() {
            $(this).removeClass('yellow')
            $('.rate-it').text('Rate it')
        }
    );

    $('.2-star').hover( 
        function() {
            $(this).addClass('yellow')
            $(this).prevAll().addClass('yellow')
            $('.rate-it').text('Not good')
        }, function() {
            $(this).removeClass('yellow')
            $(this).prevAll().removeClass('yellow')
            $('.rate-it').text('Rate it')
        }
    );

    $('.3-star').hover( 
        function() {
            $(this).addClass('yellow')
            $(this).prevAll().addClass('yellow')
            $('.rate-it').text('Acceptable')
        }, function() {
            $(this).removeClass('yellow')
            $(this).prevAll().removeClass('yellow')
            $('.rate-it').text('Rate it')
        }
    );

    $('.4-star').hover( 
        function() {
            $(this).addClass('yellow')
            $(this).prevAll().addClass('yellow')
            $('.rate-it').text('Good')
        }, function() {
            $(this).removeClass('yellow')
            $(this).prevAll().removeClass('yellow')
            $('.rate-it').text('Rate it')
        }
    );

    $('.5-star').hover( 
        function() {
            $(this).addClass('yellow')
            $(this).prevAll().addClass('yellow')
            $('.rate-it').text('Excellent')
        }, function() {
            $(this).removeClass('yellow')
            $(this).prevAll().removeClass('yellow')
            $('.rate-it').text('Rate it')
        }
    );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Show add-review modal on click
    $('.add-review').on('click', function() {
        $('.review-backdrop').fadeIn('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close add-review modal on click outside
    $('.review-backdrop').on('click', function() {
        $(this).fadeOut('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Stop click inside from closing add-review modal
    $('.review-modal').on('click', function(e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close add-review modal from top right "x" button
    $('.close-review-modal').on('click', function() {
        $('.review-backdrop').fadeOut('fast');
    });
    ////////////////////////////////////////////////////////////////////
    


    ////////////////////////////////////////////////////////////////////
    // Add-review modal rating hover logic
    $('.modal-star').hover(
        function() {
            $(this).parent().prev().text( $(this).attr('value') )
            $('.rated').removeClass('rated').addClass('gray')
            $(this).addClass('yellow')
            $(this).prevAll().addClass('yellow')
        }, function() {
            if ( !$(this).hasClass('rated') ) {
                $(this).parent().prev().text('Choose rating:')
            }
            $(this).removeClass('yellow')
            $(this).prevAll().removeClass('yellow')
        }
    );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Add-review modal rating click logic
    $('.rate').on('click', function() {
        $('.rated').removeClass('rated').addClass('gray')
        $(this)
        .removeClass('gray').addClass('rated');
        $(this)
        .prevAll().removeClass('gray').addClass('rated');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Title suggestions in add-review modal
    $('.select-title').on('click', function() {
        $('.modal-review-title').val( $(this).html() );
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Add-review modal fields not completed
    $('.modal-review-name').on('click', function() {
        $('.modal-review-name').removeClass('border-red').addClass('border-gray');
    });
    $('.modal-review-description').on('click', function() {
        $('.modal-review-description').removeClass('border-red').addClass('border-gray');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Add-review modal submit button logic
    $('.add-new-review').on('click', function() {


        // Check before review submit
        var REVIEW_COMPLETE = true;


        // Check if user rated product
        if ( !$('.rated').hasClass('modal-star') ) {
            alert('Please choose a rating')
            REVIEW_COMPLETE = false;
            return;
        }


        // Check if title is longer than 4 chars
        if ( $('.modal-review-name').val().length < 4 ) {
            $('.modal-review-name').removeClass('border-gray').addClass('border-red');
            alert('Your name should be at least 4 characters')
            REVIEW_COMPLETE = false;
            return;
        }


        // Check if review is longer than 10 chars
        if ( $('.modal-review-description').val().length < 10 ) {
            $('.modal-review-description').removeClass('border-gray').addClass('border-red');
            alert('Review should be at least 10 characters')
            REVIEW_COMPLETE = false;
            return;
        }


        // If all checks are good
        if ( REVIEW_COMPLETE = true ) {
            $.ajax({
                url: '/reviews/submit',
                method: 'POST',
                data: {
                    user_id: USER_ID,
                    user_name: $('.modal-review-name').val(),
                    ean_13: EAN_13,
                    rating: $('.rated').length,
                    title: $('.modal-review-title').val(),
                    description: $('.modal-review-description').val(),
                    likes: 0
                },
                success(response) {
                    $('.review-modal')
                    .html('')
                    .css({
                        backgroundImage: 'url(/resources/files/seller/loader.gif)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '30px',
                        color: 'var(--gray-dark)'
                    })
                    setTimeout( function() {
                        $('.review-modal')
                        .css({
                            backgroundImage: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '24px'
                        }).append(
                            $('<span>')
                            .addClass('reviewApproved'),
                            $('<p>').text('Thank you for your review!').css({color: 'black'})
                        )
                    }, 1000)

                    setTimeout( function() {
                        $('.review-modal').hide();
                        location.reload();
                    }, 2000)
                }     
            });
        }
    });
    ////////////////////////////////////////////////////////////////////
   


    ////////////////////////////////////////////////////////////////////
    // Main product fill function
    function productFill( id, title, sku, ean_13, thumbnail, premio, discount, sale, msrp, price, rating, reviews, favorites, views ) {
        const PRODUCT =
            $('<div>')
            .addClass('product')
            .append(


                // Product top area
                $('<div>')
                .addClass('product-top')
                .append(
                    $('<a>')
                    .addClass('product-top__image')
                    .attr({
                        href: `/product/${id}/${sku}`,
                        'aria-label': 'View product'
                    })
                    .append(
                        $('<img>')
                        .attr({
                            src: `/storage/products/thumbnails/${thumbnail}`,
                            alt: title,
                            width: 300,
                            height: 300,
                            loading: 'lazy',
                        })
                    )
                ),


                // Product middle info area
                $('<div>')
                .addClass('product-details')
                .append(
                    $('<div>')
                    .addClass('product-details__title')
                    .append( 
                        $('<a>')
                        .text(title)
                        .attr({
                            href: `/product/${id}/${sku}`
                        })
                    ),
                    $('<div>')
                    .addClass('product-details__reviews'),
                    $('<div>')
                    .addClass('product-details__credit')
                ),


                // Product bottom price/sale/msrp area
                $('<div>')
                .addClass('product-info')
                .append(
                    $('<div>')
                    .addClass('product-info__gif')
                    .append(
                        $('<div>')
                        .addClass('loader')
                    ),
                    $('<div>')
                    .addClass('product-info__msrp'),
                    $('<div>')
                    .addClass('product-info__cart')
                    .append(
                        //data pnk to add
                        $('<button>')
                        .addClass('toCart jq-add-to-cart')
                        .data({
                            product: sku,
                            quantity: 1,
                        })
                        .attr({ 'aria-label': 'Add to cart' })
                        .html(`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.879591 2.81684C0.978507 2.41422 1.38408 2.17213 1.77975 2.27278L3.87669 2.82653C4.68775 3.03793 5.32095 3.65237 5.57812 4.46764L5.99707 5.79275L19.6144 6.83317C20.2868 6.88358 20.8898 7.20541 21.3151 7.73869L21.3056 7.729C21.7307 8.26242 21.9186 8.9265 21.8395 9.61084L21.5927 11.6142C21.3552 13.5768 19.7722 15.1467 17.8236 15.3279L8.46389 16.2029C8.42605 16.2124 8.38731 16.2202 8.34743 16.2237L7.3191 16.3243C6.88392 16.3646 6.55745 16.7371 6.55738 17.1799C6.55738 17.653 6.9333 18.0355 7.3982 18.0355L9.25345 18.031C9.2908 18.0287 9.32833 18.0258 9.36624 18.0258C9.40091 18.0258 9.43532 18.0291 9.46951 18.031L16.9125 18.0154C16.9746 18.0089 17.0376 18.0057 17.1014 18.0057C18.1103 18.0057 18.9317 18.8408 18.9318 19.8674C18.9318 20.8941 18.1104 21.7299 17.1014 21.7299C16.0925 21.7298 15.2718 20.894 15.2718 19.8674C15.2718 19.7516 15.2833 19.6384 15.3033 19.5283L11.1629 19.5373C11.1842 19.6508 11.1966 19.7678 11.1966 19.8875C11.1966 20.9142 10.3752 21.75 9.36624 21.75C8.35735 21.7499 7.53663 20.9142 7.53663 19.8875C7.53664 19.7704 7.54841 19.6559 7.56886 19.5447L7.38795 19.5455L7.3982 19.535C6.11238 19.535 5.0736 18.4686 5.07348 17.1702C5.07348 15.9423 5.98342 14.9251 7.1902 14.8144H7.29933L4.17332 4.92003C4.07435 4.60814 3.8269 4.36704 3.51047 4.28654L1.41353 3.73279C1.0179 3.63214 0.780734 3.21943 0.879591 2.81684Z" fill="currentColor"></path></svg>`)
                    )
                )
            )
    

        // If product is Premio
        if ( premio !== 0 ) { 
            PRODUCT.find('.product-top')
            .append( 
                $('<p>')
                .addClass('product-top__premio')
                .text('Premio')
            );
        };


        // If product views are high
        if ( views > 2500 ) { PRODUCT.find('.product-top').append( $('<p>').addClass('product-top__views').text('Top Favorites') ); };



        // If product has reviews
        if ( rating ) {
            PRODUCT.find('.product-details__reviews')
            .append(
                $('<div>')
                .addClass('rating')
                .html(`<div class="stars-empty gray"></div><div class="stars-filled yellow" style="width: ${100/(5/rating)}%"></div>`)
            )
           
            PRODUCT
            .find('.product-details__reviews')
            .append(
                $('<p>').text(rating),
                $('<p>').text(`(${reviews})`)
            );
        }


        // For price format
        var priceINT = parseInt((parseFloat(price).toFixed(2).split('.'))[0]).toLocaleString('ro-RO');
        var priceFLOAT = (parseFloat(price).toFixed(2).split('.'))[1];



        // If product has discount
        if ( discount ) {

            var saleINT = parseInt((parseFloat(sale).toFixed(2).split('.'))[0]).toLocaleString('ro-RO');
            var saleFLOAT = (parseFloat(sale).toFixed(2).split('.'))[1];

            PRODUCT
            .find('.product-top')
            .append(
                $('<p>').addClass('product-top__sale').text(`-${discount}%`),
            ),

            PRODUCT
            .find('.product-info__msrp')
            .append(
                $('<p>').html(`${priceINT}<sup>${priceFLOAT}</sup>&nbsp;<small>USD</small>`).addClass('price-cut'),
                $('<p>').html(`${saleINT}<sup>${saleFLOAT}</sup>&nbsp;<small>USD</small>`),
            );


            // If price is higher than 250usd
            if ( sale > 250 ) { 
                PRODUCT
                .find('.product-details__credit')
                .append($('<p>')
                .text('12 payments with 0% interest'));
            };


        // If product doesn't have discount
        } else if ( !discount ) {

            var msrpINT = parseInt((parseFloat(msrp).toFixed(2).split('.'))[0]).toLocaleString('ro-RO');
            var msrpFLOAT = (parseFloat(msrp).toFixed(2).split('.'))[1];

            PRODUCT
            .find('.product-info__msrp')
            .append(
                $('<p>').html(`MSRP:&nbsp;${msrpINT}<sup>${msrpFLOAT}</sup>&nbsp;<small>USD</small>`),
                $('<p>').html(`${priceINT}<sup>${priceFLOAT}</sup>&nbsp;<small>USD</small>`),
            );


            // If price is higher than 250usd
            if ( price > 250 ) { 
                PRODUCT
                .find('.product-details__credit')
                .append($('<p>')
                .text('12 payments with 0% interest'));
            };
        };


        ////////////////////////////////////////////////////////////////////
        // If product is not favorite
        if ( !favorites.includes(ean_13) ) {
            PRODUCT.find('.product-top')
            .append(
                $('<button>')
                .addClass('product-top__favorites jq-add-to-fav')
                .attr({
                    value: `${ean_13}`,
                    'aria-label': 'Add to favorites'
                }),
            )
        } else {
            PRODUCT.find('.product-top')
            .append(
                $('<button>')
                .addClass('product-top__favorites jq-remove-from-fav')
                .attr({
                    value: `${ean_13}`,
                    'aria-label': 'Remove from favorites'
                }),
            )
        };
        ////////////////////////////////////////////////////////////////////


        return PRODUCT;
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Main review fill function
    function reviewFill( user_name, created_at, user_id, title, rating, description, likes ) {
        const USER_COLORS =  ["gray", "yellow", "green", "blue", "lightgreen", "violet", "red", "orange", "yellow", "lightgreen"];
        const REVIEW = 
        $('<div>')
        .addClass('oneReview')
        .append(


            // User details
            $('<div>')
            .addClass('user')
            .append(
                $('<div>')
                .addClass(`user-img ${USER_COLORS[Math.floor(Math.random() * 10)]}`)
                .append(
                    $('<p>')
                    .text(user_name[0])
                ),
                $('<p>')
                .addClass('user-name')
                .text(user_name),
                $('<p>')
                .addClass('review-date')
                .text(created_at),
            ),


            // Review details
            $('<div>')
            .addClass('review-body')
            .append(
                $('<p>')
                .addClass('review-body__title')
                .text(title),
                $('<div>')
                .addClass('review-body__stars')
                .append(
                    $('<div>')
                    .addClass('review-stars')
                    .html(`
                        <div class="review-stars__empty gray"></div>
                        <div class="review-stars__filled yellow" style="width: ${100/( 5 / rating )}%"></div>
                    `)
                ),
                $('<p>')
                .addClass('review-body__text')
                .text(description),
                $('<div>')
                .addClass('review-body__buttons')
                .append(
                    $('<button>')
                    .text(likes),
                    $('<button>')
                    .text('Add a comment')
                )
            ),
        );


        // If user is registered
        if ( user_id ) {
            REVIEW
            .find('.user')
            .append( $('<p>').addClass('review-type').text('Verified account') );

            REVIEW
            .find('.review-body__stars')
            .append( $('<p>').addClass('customer-label').text('Review from eMART customer') );
        };

        return REVIEW;
    };
    ////////////////////////////////////////////////////////////////////
    


    ////////////////////////////////////////////////////////////////////
    // Random function for similar and others product cards
    function getRandomSKU() {
        return Object.keys(localStorage)[Math.floor(Math.random() * localStorage.length)];
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call for similar products - 1
    $('.similar-1').html('');

    $.ajax({
        url: `/recommended/${$('p[data-sku]').data('sku')}/prod_reviews_count/desc`,
        method: 'GET',
        success(response) {

            const FAVORITES = response.favorites;
            $.each(response.relatedProducts, function(index, product) {
                $('.similar-1')
                .append(
                    productFill( 
                        product.id,
                        product.title,
                        product.product_sku,
                        product.ean_13,
                        product.thumbnail,
                        product.premio,
                        product.discount_percent,
                        product.sale_price,
                        product.msrp_price,
                        product.list_price,
                        Math.round((product.prod_reviews_avg_rating * 100 ) ) / 100,
                        product.prod_reviews_count,
                        FAVORITES,
                        product.views
                    )
                )
            })
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call for similar products - 1
    $('.similar-2').html('');

    $.ajax({
        url: `/recommended/${$('p[data-sku]').data('sku')}/prod_reviews_avg_rating/desc`,
        method: 'GET',
        success(response) {

            const FAVORITES = response.favorites;
            
            $.each(response.relatedProducts, function(index, product) {
                $('.similar-2')
                .append(
                    productFill( 
                        product.id,
                        product.title,
                        product.product_sku,
                        product.ean_13,
                        product.thumbnail,
                        product.premio,
                        product.discount_percent,
                        product.sale_price,
                        product.msrp_price,
                        product.list_price,
                        Math.round((product.prod_reviews_avg_rating * 100 ) ) / 100,
                        product.prod_reviews_count,
                        FAVORITES,
                        product.views
                    )
                )
            })
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call for similar products - 1
    $('.recommended-1').html('');

    $.ajax({
        url: `/recommended/${$('p[data-sku]').data('sku')}/discount_percent/desc`,
        method: 'GET',
        success(response) {

            const FAVORITES = response.favorites;
            
            $.each(response.relatedProducts, function(index, product) {
                $('.recommended-1')
                .append(
                    productFill( 
                        product.id,
                        product.title,
                        product.product_sku,
                        product.ean_13,
                        product.thumbnail,
                        product.premio,
                        product.discount_percent,
                        product.sale_price,
                        product.msrp_price,
                        product.list_price,
                        Math.round((product.prod_reviews_avg_rating * 100 ) ) / 100,
                        product.prod_reviews_count,
                        FAVORITES,
                        product.views
                    )
                )
            })
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call for other products - 1
    $('.others-1').html('');

    $.ajax({
        url: `/others/${getRandomSKU()}/views/desc`,
        method: 'GET',
        success(response) {

            const FAVORITES = response.favorites;
    
            $.each(response.relatedProducts, function(index, product) {
                $('.others-1')
                .append(
                    productFill( 
                        product.id,
                        product.title,
                        product.product_sku,
                        product.ean_13,
                        product.thumbnail,
                        product.premio,
                        product.discount_percent,
                        product.sale_price,
                        product.msrp_price,
                        product.list_price,
                        Math.round((product.prod_reviews_avg_rating * 100 ) ) / 100,
                        product.prod_reviews_count,
                        FAVORITES,
                        product.views
                    )
                )
            })
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call for other products - 1
    $('.others-2').html('');

    $.ajax({
        url: `/others/${getRandomSKU()}/discount_percent/desc`,
        method: 'GET',
        success(response) {

            const FAVORITES = response.favorites;
    
            $.each(response.relatedProducts, function(index, product) {
                $('.others-2')
                .append(
                    productFill( 
                        product.id,
                        product.title,
                        product.product_sku,
                        product.ean_13,
                        product.thumbnail,
                        product.premio,
                        product.discount_percent,
                        product.sale_price,
                        product.msrp_price,
                        product.list_price,
                        Math.round((product.prod_reviews_avg_rating * 100 ) ) / 100,
                        product.prod_reviews_count,
                        FAVORITES,
                        product.views
                    )
                )
            })
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Loader gif + fade when adding product to cart
    $(document).on('click', '.toCart', function() {
        $(this).parent().parent()
        .find('.product-info__gif')
        .addClass('fade')
        .find('.loader')
        .addClass('loading');

        setTimeout( function() { 
            $('.loading').removeClass('loading');
            $('.fade').removeClass('fade');
        }, 1000 );
    });
    ////////////////////////////////////////////////////////////////////

    

    ////////////////////////////////////////////////////////////////////
    // Initial page number
    var PAGE_NUMBER = 1;
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Reviews pagination logic
    function showReviewsPerPage() {
        $.ajax({
            url: `/reviews/${$('p[data-sku]').data('sku')}/${$('.reSort_1').val().split(':')[0]}/${$('.reSort_1').val().split(':')[1]}/${$('.reSort_2').val().split(':')[0]}/${$('.reSort_2').val().split(':')[1]}/${$('.reSort_3').val()}/${$('.searchReviewsInput').val() ? $('.searchReviewsInput').val() : 'all' }`,
            dataType: 'json',
            method: 'GET',
            success(response) {

                
                    $('.reviewsContainer').html('');

                    const REVIEWS_TO_SHOW = response.slice( (PAGE_NUMBER * 10) - 10, (PAGE_NUMBER * 10) );

                    $.each( REVIEWS_TO_SHOW, function(index, review) {
                        $('.reviewsContainer')
                        .append(
                            reviewFill(
                                review.user_name,
                                review.formatted_date,
                                review.user_id,
                                review.title,
                                review.rating,
                                review.description,
                                review.likes
                            )
                        )
                    });

                    
                    $('.reviewsContainer')
                    .append(
                        $('<div>')
                        .addClass('reviews-pagination')
                        .append(
                            $('<button>')
                            .addClass('prevPage disabled')
                            .text('Previous'),
                        )
                    )

                    for ( let i = 1; i <= Math.ceil(response.length / 10); i++ ) {
                        $('.reviews-pagination')
                        .append(
                            $('<button>')
                            .addClass(`pageNumber page-${i}`)
                            .text(i),
                        )
                    }

                    $('.reviews-pagination')
                        .append(
                            $('<button>')
                            .addClass('nextPage')
                            .text('Next'),
                        )

                    $(`.page-${PAGE_NUMBER}`).addClass('pageinview');
                    

                    if ( PAGE_NUMBER > 1 ) {
                        $('.prevPage').removeClass('disabled')
                    }

                    if ( PAGE_NUMBER == Math.ceil(response.length / 10) || response.length == 0 ) {
                        $('.nextPage').addClass('disabled')
                    }
                }
        });
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Initial trigger to show reviews
    showReviewsPerPage();
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // If user changes filters
    $('.std-in').on('change', function() { 
        PAGE_NUMBER = 1;
        showReviewsPerPage();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page number click logic
    $(document).on('click', '.pageNumber', function() {
        $('.pageinview').removeClass('pageinview')
        $(this).addClass('pageinview');
        PAGE_NUMBER = $(this).text();

        showReviewsPerPage();

        $('html, body').animate({ scrollTop: $('#reviews-section').offset().top - 120 }, 100);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // If user checks "eMART buyer reviews only"
    $('.reSort_3').on('click', function() {
        PAGE_NUMBER = 1;
        if ( $(this).hasClass('buyers') ) {
            $(this).removeClass('buyers').val('any');
            showReviewsPerPage();
        } else {
            $(this).addClass('buyers').val('buyers');
            showReviewsPerPage();
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Reviews search logic
    $('.searchReviewsInput').on('keypress', function(e) {
        if (e.which === 13) {
            e.preventDefault();
            if ( $('.searchReviewsInput').val().length > 3 ) {
                showReviewsPerPage();
            };
        };
    });

    $('.searchReviewsButton').on('click', function() {
        showReviewsPerPage();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Previous page button logic
    $(document).on('click', '.prevPage', function() {
        $('.pageinview').prev().trigger('click');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Next page button logic
    $(document).on('click', '.nextPage', function() {
        $('.pageinview').next().trigger('click');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Chart filters click logic
    $('.rating-chart-filter').on('click', function() {
        $('.reSort_2').val(`rating:${$(this).attr('value')}`).trigger('change');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Avaialable offers carousel logic
    var page = 0;
    var totalPages = Math.ceil($('.other-offers__area-carousel').children().length / 3);


    // Remove prev button on inital load and check if next buttons should exist
    $('.other-offers__area-prev').hide();
    if ( page == totalPages - 1 ) { $('.other-offers__area-next').hide('slow'); }


    // Function for carousel buttons
    function goToPage() {
        page == totalPages - 1 ? $('.other-offers__area-next').fadeOut('slow') : $('.other-offers__area-next').fadeIn('slow');
        page == 0 ? $('.other-offers__area-prev').fadeOut('slow') : $('.other-offers__area-prev').fadeIn('slow');
        var pageWidth = $('.other-offers__area').outerWidth() - 24;
        $('.other-offers__area-carousel').css({ transform: 'translateX(-' + (page * pageWidth) + 'px)'});
    };


    // Next button logic
    $('.other-offers__area-next').on('click', function () {
        if (page < totalPages - 1) {
            page++;
            goToPage();
        }
    });


    // Prev button logic
    $('.other-offers__area-prev').on('click', function () {
        if (page > 0) {
            page--;
            goToPage();
        };
    });
    ////////////////////////////////////////////////////////////////////



});



    ////////////////////////////////////////////////////////////////////
    // Auto update both favorties buttons
    $(document).on('click', '.favorites-main', function() {
        if ( $(this).hasClass('jq-add-to-fav') ) {
            $('.favorites-small').removeClass('jq-add-to-fav').addClass('jq-remove-from-fav');
        } else if ( $(this).hasClass('jq-remove-from-fav') ) {
            $('.favorites-small').removeClass('jq-remove-from-fav').addClass('jq-add-to-fav');
        }
    });

    $(document).on('click', '.favorites-small', function() {
        if ( $(this).hasClass('jq-add-to-fav') ) {
            $('.favorites-main').removeClass('jq-add-to-fav').addClass('jq-remove-from-fav');
        } else if ( $(this).hasClass('jq-remove-from-fav') ) {
            $('.favorites-main').removeClass('jq-remove-from-fav').addClass('jq-add-to-fav');
        }
    });
    ////////////////////////////////////////////////////////////////////