$(document).ready( function(){



    ////////////////////////////////////////////////////////////////////
    // Initial initialization of global variables
    var PAGE_NUMBER = 1;        // for pagination
    var itemsPerPage = 10;
    ////////////////////////////////////////////////////////////////////
    

    
    ////////////////////////////////////////////////////////////////////
    // Main review fill function
    function reviewFill( created_at, title, rating, description, likes, thumbnail, productTitle, product_id, product_sku ) {
        const USER_COLORS =  ["gray", "yellow", "green", "blue", "lightgreen", "violet", "red", "orange", "yellow", "lightgreen"];
        const REVIEW = 
        $('<div>')
        .addClass('oneReview')
        .append(


            // User details
            $('<div>')
            .addClass('product')
            .append(
                $('<a>')
                .css({ backgroundImage: `url('/storage/products/thumbnails/${thumbnail}')` })
                .attr({ href: `/product/${product_id}/${product_sku}`})
            ),


            // Review details
            $('<div>')
            .addClass('review-body')
            .append(
                $('<div>')
                .append(
                    $('<p>')
                    .text(productTitle),
                    $('<p>')
                    .text(created_at.split('T')[0]),
                ),
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
                    .text('Respond to comment')
                )
            ),
        );

        return REVIEW;
    };
    ////////////////////////////////////////////////////////////////////




    function reviewsFill() {

    
        $.ajax({
            url: '/fetch/client/reviews',
            method: 'GET',
            success(response) {


                // If user doesn't have any reviews, show nice svg logo
                if ( response.length == 0 ) {


                    // Remove loader gif
                    $('.reviews-area__cards').html('').removeClass('loader');


                    // Add "no reviews" text
                    $('.reviews-area')
                    .append(
                        $('<div>')
                        .addClass('reviews-area__empty')
                        .append(
                            $('<div>'),
                            $('<p>')
                            .html('No reviews added, no products to be reviewed.<br>Here are some recommendations that might inspire you.'),
                            $('<p>')
                            .html('Add to cart now and make an order by finishing the checkout.<br>You can later review the products you bought or other products.'),
                            $('<a>')
                            .text('see more products')
                            .attr({
                                href: '/'
                            }),
                        )
                    );


                    // Make container height auto
                    $('.reviews-area__cards').css({ height: 'auto'});


                // If user has any reviews
                } else if ( response.length > 0 ) {


                    // Remove old pagination
                    $('.pagination').remove();


                    // Add reviews pagination buttons
                    $('.reviews-area__cards').html('').removeClass('loader');


                    // Add pagination
                    $('.reviews-area').after(
                        $('<div>')
                        .addClass('pagination')
                        .append(
                            $('<p>').addClass('pagination-details'),
                            $('<div>').addClass('pagination-buttons')
                        )
                    )


                    const REVIEWS_TO_SHOW = response.slice( (PAGE_NUMBER * itemsPerPage) - itemsPerPage, (PAGE_NUMBER * itemsPerPage) );


                    $.each(REVIEWS_TO_SHOW, function(index, review) {
                        $('.reviews-area__cards').append(
                            reviewFill(review.created_at, review.title, review.rating, review.description, review.likes, review.product_info.thumbnail, review.product_info.title, review.product_info.id, review.product_info.product_sku )
                        )
                    })


                    // Adding pagination previous button
                    $('.pagination-buttons').append($('<button>').addClass('prevPage disabled').text('Previous page'));
                

                    // Total number of pages
                    var NUMBER_OF_PAGES = Math.ceil(response.length / itemsPerPage);


                    // prev 1 2 3 4 5 next
                    if ( NUMBER_OF_PAGES <= 5 ) {
                        for (let i = 1; i <= NUMBER_OF_PAGES; i++) { $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${i}`).text(i)) }


                    // prev 1 2 3 ... 6 next
                    } else if ( NUMBER_OF_PAGES > 5 && PAGE_NUMBER < 3 ) {
                        
                        for (let i = 1; i <= 3; i++) {
                            $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${i}`).text(i));
                        }
                        $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES}`).text(NUMBER_OF_PAGES));


                    // prev 1 2 3 4 ... 5 next
                    } else if ( NUMBER_OF_PAGES > 5 && PAGE_NUMBER == 3 ) {
                        for (let i = 1; i <= 4; i++) {
                            $('.pagination-buttons')
                            .append($('<button>')
                            .addClass(`pageNumber page-${i}`)
                            .text(i));
                        }
                        $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES}`).text(NUMBER_OF_PAGES));
                    

                    // prev 1 ... 3 4 5 ... 7 next
                    } else if ( NUMBER_OF_PAGES > 5  && PAGE_NUMBER > 3 && PAGE_NUMBER + 2 < NUMBER_OF_PAGES ) {
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${1}`).text('1'));
                        $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${PAGE_NUMBER - 1}`).text(PAGE_NUMBER - 1));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${PAGE_NUMBER    }`).text(PAGE_NUMBER    ));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${PAGE_NUMBER + 1}`).text(PAGE_NUMBER + 1));
                        $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES}`).text(NUMBER_OF_PAGES));
                    

                    // prev 1 ... 96 97 98 99 next
                    } else if ( NUMBER_OF_PAGES > 5  && PAGE_NUMBER > 3 && PAGE_NUMBER + 2 ==  NUMBER_OF_PAGES ) {
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${1}`).text('1'));
                        $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 3}`).text(NUMBER_OF_PAGES - 3));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 2}`).text(NUMBER_OF_PAGES - 2));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 1}`).text(NUMBER_OF_PAGES - 1));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES    }`).text(NUMBER_OF_PAGES    ));


                    // prev 1 ... 97 98 99 next
                    } else if ( NUMBER_OF_PAGES > 5  && PAGE_NUMBER > 3 && PAGE_NUMBER + 2 >  NUMBER_OF_PAGES ) {
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${1}`).text('1'));
                        $('.pagination-buttons').append($('<button>').addClass('dotdotdot disabled').text('...'));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 2}`).text(NUMBER_OF_PAGES - 2));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES - 1}`).text(NUMBER_OF_PAGES - 1));
                        $('.pagination-buttons').append($('<button>').addClass(`pageNumber page-${NUMBER_OF_PAGES    }`).text(NUMBER_OF_PAGES    ));
                    }


                    // Adding pagination next button
                    $('.pagination-buttons').append($('<button>').addClass('nextPage').text('Next page'));

                    if ( PAGE_NUMBER * itemsPerPage < response.length ) {
                        $('.pagination-details').html(`<b>${(PAGE_NUMBER * itemsPerPage) - itemsPerPage + 1} - ${(PAGE_NUMBER * itemsPerPage)}</b> out of <b>${response.length}</b> reviews`);
                    } else {
                        $('.pagination-details').html(`<b>${(PAGE_NUMBER * itemsPerPage) - itemsPerPage + 1} - ${response.length}</b> out of <b>${response.length}</b> reviews`);
                    }


                    // Pagination button colors
                    $(`.page-${PAGE_NUMBER}`).addClass('pageinview');
                    if ( PAGE_NUMBER > 1 ) { $('.prevPage').removeClass('disabled') }
                    if ( PAGE_NUMBER == NUMBER_OF_PAGES ) { $('.nextPage').addClass('disabled') }
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Initial reviews fill
    reviewsFill();
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page number click logic
    $(document).on('click', '.pageNumber', function() {
        PAGE_NUMBER = Number($(this).text());
        reviewsFill();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Previous page button logic
    $(document).on('click', '.prevPage', function() {
        PAGE_NUMBER--;
        reviewsFill();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Next page button logic
    $(document).on('click', '.nextPage', function() {
        PAGE_NUMBER++;
        reviewsFill();
    });
    ////////////////////////////////////////////////////////////////////
});