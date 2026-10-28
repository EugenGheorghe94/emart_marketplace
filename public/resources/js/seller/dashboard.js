$(document).ready( function() {
    


    ////////////////////////////////////////////////////////////////////
    // Page main menu button click
    $('.dashboard').trigger('click');
    $('.dashboard').addClass('clicked-main');
    ////////////////////////////////////////////////////////////////////

    

    ////////////////////////////////////////////////////////////////////
    // Page small icon button click
    $('.dashboard-div').css({color: 'var(--blue-main)'});
    $('.dashboard-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.dashboard-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Dynamic data
    function dashboardFill() {
        $('.promo-area').
        append(
            $('<div>')
            .addClass('promo-area__prev'),
            $('<div>')
            .addClass('promo-area__next'),
            $('<div>')
            .addClass('promo-area__carousel')
            .append(
                $('<div>')
                .addClass('promo-area__carousel-banner1')
                .append(
                    $('<img>')
                    .attr({
                        src: '/resources/files/seller/red_banner_logo.jpg'
                    }),
                    $('<div>')
                    .append(
                        $('<p>').text(`Up to 30% support from eMART during Crazy Days, ${new Date().toLocaleString('en-GB', { month: 'long' })}`),
                        $('<p>').text('Discount or voucher - you choose the mechanism, and we back your offers with up to 30% support, based on the discounts provided.')
                    ),
                    $('<button>').text('Submit offers!')
                ),
                $('<div>')
                .addClass('promo-area__carousel-banner2')
                .append(
                    $('<img>')
                    .attr({
                        src: '/resources/files/seller/blue_banner_logo.jpg'
                    }),
                    $('<div>')
                    .append(
                        $('<p>').text(`${new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toLocaleString('en-GB', { month: 'long' })} is HOT. Campaign support is SuperHOT!`),
                        $('<p>').text('Up to 30% off across all eMART campaigns, and up to 40% off specifically on Home & Garden and AC products in voucher and Smart Deals campaigns.')
                    ),
                    $('<button>').text('Find out more!')
                ),
            ),
        ),
        $('.stats__right-banner')
        .append(
            $('<div>')
            .addClass('title')
            .text('Sell more through campaigns and get a commission discount'),
            $('<div>')
            .addClass('promo')
            .append(
                $('<div>')
                .addClass('promo-card running')
                .append(
                    $('<div>')
                    .addClass('promo-card__banner')
                    .append(
                        $('<span>').text('1'),
                        $('<div>')
                        .addClass('promo-card__banner-dots')
                        .append( $('<p>'), $('<p>') ),
                        $('<p>')
                        .addClass('promo-card__banner-title')
                        .html('<b>Voucher</b>&nbsp;|&nbsp;Multi Deals - min. 10% Voucher'),
                        $('<button>')
                        .addClass('promo-card__banner-button')
                        .text('Generate template'),
                        $('<p>')
                        .addClass('promo-card__banner-period')
                        .text('Period: ' + [-10, 10].map(d => { const t = new Date(); t.setDate(t.getDate() + d); return t.toLocaleDateString('en-GB'); }).join(' - '))
                    ),
                    $('<div>')
                    .addClass('promo-card__options')
                    .append(
                        $('<p>').text('9d 1h 51m'),
                        $('<p>').html('Propuneri:&nbsp;<b>0</b>')
                    )
                ),
                $('<div>')
                .addClass('promo-card')
                .append(
                    $('<div>')
                    .addClass('promo-card__banner')
                    .append(
                        $('<span>').text('2'),
                        $('<div>')
                        .addClass('promo-card__banner-dots')
                        .append( $('<p>'), $('<p>') ),
                        $('<p>')
                        .addClass('promo-card__banner-title')
                        .html('<b>Voucher</b>&nbsp;|&nbsp;Crazy Days - min. 15% Voucher'),
                        $('<button>')
                        .addClass('promo-card__banner-button')
                        .text('Generate template'),
                        $('<p>')
                        .addClass('promo-card__banner-period')
                        .text('Period: ' + [10, 25].map(d => { const t = new Date(); t.setDate(t.getDate() + d); return t.toLocaleDateString('en-GB'); }).join(' - '))
                    ),
                    $('<div>')
                    .addClass('promo-card__options')
                    .append(
                        $('<p>').text('34d 9h 51m'),
                        $('<p>').html('Propuneri:&nbsp;<b>0</b>')
                    )
                ),
                $('<div>')
                .addClass('promo-card')
                .append(
                    $('<div>')
                    .addClass('promo-card__banner')
                    .append(
                        $('<span>').text('3'),
                        $('<div>')
                        .addClass('promo-card__banner-dots')
                        .append( $('<p>'), $('<p>') ),
                        $('<p>')
                        .addClass('promo-card__banner-title')
                        .html('<b>Discount</b>&nbsp;|&nbsp;Crazy Days - 15% min. Discount'),
                        $('<button>')
                        .addClass('promo-card__banner-button')
                        .text('Generate template'),
                        $('<p>')
                        .addClass('promo-card__banner-period')
                        .text('Period: ' + [25, 35].map(d => { const t = new Date(); t.setDate(t.getDate() + d); return t.toLocaleDateString('en-GB'); }).join(' - '))
                    ),
                    $('<div>')
                    .addClass('promo-card__options')
                    .append(
                        $('<p>').text('48d 51m'),
                        $('<p>').html('Propuneri:&nbsp;<b>0</b>')
                    )
                ),
                $('<div>')
                .addClass('promo-card')
                .append(
                    $('<div>')
                    .addClass('promo-card__banner')
                    .append(
                        $('<span>').text('4'),
                        $('<div>')
                        .addClass('promo-card__banner-dots')
                        .append( $('<p>'), $('<p>') ),
                        $('<p>')
                        .addClass('promo-card__banner-title')
                        .html('<b>Discount</b>&nbsp;|&nbsp;SMART DEALS - 20% min. Discount'),
                        $('<button>')
                        .addClass('promo-card__banner-button')
                        .text('Generate template'),
                        $('<p>')
                        .addClass('promo-card__banner-period')
                        .text('Period: ' + [35, 45].map(d => { const t = new Date(); t.setDate(t.getDate() + d); return t.toLocaleDateString('en-GB'); }).join(' - '))
                    ),
                    $('<div>')
                    .addClass('promo-card__options')
                    .append(
                        $('<p>').text('73d 9h 51m'),
                        $('<p>').html('Propuneri:&nbsp;<b>0</b>')
                    )
                ),
            ),
            $('<div>')
            .addClass('banner-link')
            .append(
                $('<div>')
                .html('<p>Campaigns documentation</p>|<p>Contact Marketplace</p>'),
                $('<div>')
                .append(
                    $('<p>').text('See more campaigns')
                )
            ),
            $('<div>')
            .addClass('banner-join')
            .append(
                $('<button>').text('Join campaigns now')
            ),
        ),


        // FBE container
        $('.box-1')
        .append(
            $('<div>')
            .addClass('FBE-area')
            .append(
                $('<img>')
                .addClass('FBE-area__logo')
                .attr({
                    src: '/resources/files/seller/emart-fbe-blue.svg'
                }),
                $('<p>')
                .text('Earn up to 3,105.43 USD more'),
                $('<p>')
                .text('Start now at no cost - we store, pack, and ship your orders'),
                $('<p>')
                .text('Fast deliveries every day of the week'),
                $('<p>')
                .text('Increased visibility thanks to the "Shipped by eMART" filter'),
                $('<p>')
                .text('+50% sales from the very first month'),
                $('<div>')
                .addClass('FBE-area__actions')
                .append(
                    $('<button>')
                    .text('I want to sell more'),
                    $('<button>')
                    .text('View offer details')
                )
            ),
            $('<div>')
            .addClass('FBE-image')
        ),


        // Ads container
        $('.box-2')
        .append(
            $('<div>')
            .addClass('order')
            .append(
                $('<div>')
                .addClass('order-logo')
                .append(
                    $('<p>')
                ),
                $('<div>')
                .addClass('order-values')
                .append(
                    $('<p>').text('Orders'),
                    $('<div>')
                    .addClass('order-values__info')
                    .append(
                        $('<div>')
                        .addClass('order-values__info-past')
                        .append(
                            $('<p>').text('$ 4,453'),
                            $('<p>').text('Last month'),
                        ),
                        $('<div>')
                        .addClass('order-values__info-current')
                        .append(
                            $('<p>').text('$ 5,856'),
                            $('<p>').text('This month'),
                        ),
                    ),
                ),
            ),
            $('<div>')
            .addClass('click')
            .append(
                $('<div>')
                .addClass('click-logo')
                .append(
                    $('<p>')
                ),
                $('<div>')
                .addClass('click-values')
                .append(
                    $('<p>').text('Clicks'),
                    $('<div>')
                    .addClass('click-values__info')
                    .append(
                        $('<div>')
                        .addClass('click-values__info-past')
                        .append(
                            $('<p>').text('547'),
                            $('<p>').text('Last month'),
                        ),
                        $('<div>')
                        .addClass('click-values__info-current')
                        .append(
                            $('<p>').text('765'),
                            $('<p>').text('This month'),
                        ),
                    ),
                ),
            ),
            $('<div>')
            .addClass('credit')
            .append(
                $('<div>')
                .addClass('credit-logo')
                .append(
                    $('<p>')
                ),
                $('<div>')
                .addClass('credit-values')
                .append(
                    $('<p>').text('Credits'),
                    $('<div>')
                    .addClass('credit-values__info')
                    .append(
                        $('<div>')
                        .addClass('credit-values__info-past')
                        .append(
                            $('<p>').text('2000 cr'),
                            $('<p>').text('Last month'),
                        ),
                        $('<div>')
                        .addClass('credit-values__info-current')
                        .append(
                            $('<p>').text('2400 cr'),
                            $('<p>').text('This month'),
                        ),
                    ),
                ),
            ),
        ),

            // Newsletter container
            $('.box-3')
            .append(
                $('<div>')
                .addClass('news-area')
                .append(
                    $('<div>')
                    .addClass('news-area__row')
                    .append(
                        $('<div>')
                        .addClass('news-area__row-logo'),
                        $('<div>')
                        .addClass('news-area__row-text')
                        .append(
                            $('<p>').text('🖐 [EN] [Support] A new way to contact the eMART Marketplace support team'),
                            $('<p>')
                        )
                    ),
                    $('<div>')
                    .addClass('news-area__row')
                    .append(
                        $('<div>')
                        .addClass('news-area__row-logo'),
                        $('<div>')
                        .addClass('news-area__row-text')
                        .append(
                            $('<p>').text('🎧 [EN] [FBE] Join the Q&A session - get all your answers in one meeting!'),
                            $('<p>')
                        )
                    ),
                    $('<div>')
                    .addClass('news-area__row')
                    .append(
                        $('<div>')
                        .addClass('news-area__row-logo'),
                        $('<div>')
                        .addClass('news-area__row-text')
                        .append(
                            $('<p>').text('✅ [EN] [Promotions] Black Friday 2025 - prepare your stock now'),
                            $('<p>')
                        )
                    ),
                    $('<div>')
                    .addClass('news-area__row')
                    .append(
                        $('<div>')
                        .addClass('news-area__row-logo'),
                        $('<div>')
                        .addClass('news-area__row-text')
                        .append(
                            $('<p>').text('🔔 [EN] [Marketing] Boost your visibility with Sponsored Products'),
                            $('<p>')
                        )
                    ),
                    $('<div>')
                    .addClass('news-area__row')
                    .append(
                        $('<div>')
                        .addClass('news-area__row-logo'),
                        $('<div>')
                        .addClass('news-area__row-text')
                        .append(
                            $('<p>').text('📦 [Orders] Improved order fulfillment tracking'),
                            $('<p>')
                        )
                    ),
                    $('<div>')
                    .addClass('news-area__row')
                    .append(
                        $('<div>')
                        .addClass('news-area__row-logo'),
                        $('<div>')
                        .addClass('news-area__row-text')
                        .append(
                            $('<p>').text('🎯 [EN] [Campaigns] Weekly eMART Basket - a 100 lei gift card for your customers!'),
                            $('<p>')
                        )
                    ),
                    $('<div>')
                    .addClass('news-area__link')
                    .append(
                        $('<a>')
                        .text('click to see more')
                        .attr({
                            src: ''
                        })
                    ),
                ),
            ),
            $('.box-4')
            .append(
                $('<div>')
                .addClass('sales')
                .append(
                    $('<div>')
                    .addClass('sales-logo monthly')
                    .append(
                        $('<p>')
                    ),
                    $('<div>')
                    .addClass('sales-area')
                    .append(
                        $('<p>').text('Monthly'),
                        $('<div>')
                        .addClass('sales-area__info')
                        .append(
                            $('<div>')
                            .addClass('sales-area__info-past')
                            .append(
                                $('<p>').text('$ 7,892'),
                                $('<p>').text('Last month'),
                            ),
                            $('<div>')
                            .addClass('sales-area__info-current')
                            .append(
                                $('<p>').text('$ 9,563'),
                                $('<p>').text('This month'),
                            ),
                            $('<div>')
                            .addClass('sales-area__info-change')
                            .append(
                                $('<p>')
                                .addClass('change_from')
                                .text('+46.52%'),
                            ),
                        ),
                    ),
                ),
                $('<div>')
                .addClass('sales')
                .append(
                    $('<div>')
                    .addClass('sales-logo yearly')
                    .append(
                        $('<p>')
                    ),
                    $('<div>')
                    .addClass('sales-area')
                    .append(
                        $('<p>').text('Yearly'),
                        $('<div>')
                        .addClass('sales-area__info')
                        .append(
                            $('<div>')
                            .addClass('sales-area__info-past')
                            .append(
                                $('<p>').text('$ 228,259'),
                                $('<p>').text('Last year'),
                            ),
                            $('<div>')
                            .addClass('sales-area__info-current')
                            .append(
                                $('<p>').text('$ 268,124'),
                                $('<p>').text('This year'),
                            ),
                            $('<div>')
                            .addClass('sales-area__info-change')
                            .append(
                                $('<p>')
                                .addClass('change_from')
                                .text('+26.50%'),
                            ),
                        ),
                    ),
                ),
            ),
            $('.graph-1')
            .append(
                $('<div>')
                .addClass('graph-area')
                .append(
                    $('<div>')
                    .addClass('graph-area__side-text')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('250'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('200'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('150'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('100'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('50'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('0'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell red')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell blue')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell blue')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell red')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell red')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell blue')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell blue')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell blue')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell blue')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell red')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell red')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                ),
                $('<div>')
                .addClass('graph-bottom-marks')
                .append(
                    $('<p>'),
                    $('<p>').text((d => (d.setDate(d.getDate() - 8), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 7), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 6), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 5), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 4), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 3), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 2), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 1), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                ),
                $('<div>')
                .addClass('graph-bottom-legend')
                .append(
                    $('<p>').text('pending'),
                    $('<p>').text('completed'),
                    $('<p>').text('cancelled')
                ),
            )
            $('.graph-2')
            .append(
                $('<div>')
                .addClass('graph-area')
                .append(
                    $('<div>')
                    .addClass('graph-area__side-text')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('+ 5'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('+ 4'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('+ 3'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('+ 2'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('+ 1'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('0'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell red')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell yellow')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell green')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell yellow')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell yellow')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                    $('<div>')
                    .addClass('graph-area__column')
                    .append(
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell red')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell red')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__cell red')
                        .text('|'),
                        $('<div>')
                        .addClass('graph-area__bottom-line zero'),
                    ),
                ),
                $('<div>')
                .addClass('graph-bottom-marks')
                .append(
                    $('<p>'),
                    $('<p>').text((d => (d.setDate(d.getDate() - 8), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 7), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 6), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 5), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 4), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 3), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 2), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                    $('<p>').text((d => (d.setDate(d.getDate() - 1), d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.')))(new Date())),
                ),
                $('<div>')
                .addClass('graph-bottom-legend')
                .append(
                    $('<p>').text('on time'),
                    $('<p>').text('below 3 days'),
                    $('<p>').text('over 3 days')
                )
            ),
            $('.box-5')
            .append(
                $('<div>')
                .addClass('delayed-area')
                .append(
                    $('<div>')
                    .addClass('delayed-area__row')
                    .append(
                        $('<p>')
                        .addClass('day1')
                        .text('+ 1 day(s)'),
                        $('<p>').text('-'),
                    ),
                    $('<div>')
                    .addClass('delayed-area__row')
                    .append(
                        $('<p>')
                        .addClass('day2')
                        .text('+ 2 day(s)'),
                        $('<p>').text('-'),
                    ),
                    $('<div>')
                    .addClass('delayed-area__row')
                    .append(
                        $('<p>')
                        .addClass('day3')
                        .text('+ 3 day(s)'),
                        $('<p>').text('-'),
                    ),
                    $('<div>')
                    .addClass('delayed-area__row')
                    .append(
                        $('<p>')
                        .addClass('dayN')
                        .text('> 3 day(s)'),
                        $('<p>').text('-'),
                    ),
                    $('<div>')
                    .addClass('delayed-area__link')
                    .append(
                        $('<a>')
                        .text('click to see more')
                        .attr({
                            src: ''
                        })
                    ),
                )
            ),
            $('.seller-rating')
            .append(
                $('<div>')
                .addClass('rating-area')
                .append(
                    // Title
                    $('<div>')
                    .addClass('rating-area__score')
                    .append(
                        $('<p>').text('4.8'),
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('rating-area__stars')
                    .html(`
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    `),
                    // Row --------------------------
                    $('<div>')
                    .addClass('rating-area__info')
                    .html(`
                        <p class="link">20 ratings</p>
                        &nbsp;|&nbsp;
                        <p class="link">95% positive</p>
                        &nbsp;|&nbsp;
                        <p class="link">3 reviews</p>
                    `),
                ),
            ),


            // Summary
            $('.accHealth')
            .append(
                $('<div>')
                .addClass('summary')
                .append(
                    $('<div>')
                    .addClass('summary-area')
                    .append(
                        $('<div>')
                        .addClass('summary-area__logo')
                        .append(
                            $('<p>')
                        ),
                        $('<div>')
                        .addClass('summary-area__info')
                        .append(
                            $('<p>').text('Good'),
                            $('<p>').text('Keep up the same standards of service!'),
                        )
                    ),


                    // Orders flow
                    $('<div>')
                    .addClass('section-area')
                    .append(
                        // Title
                        $('<div>')
                        .addClass('section-area__title')
                        .append(
                            $('<p>').text('Orders flow'),
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Order service level'),
                                $('<p>').text('Target > 95% | 95 / 97')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('98%'))
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Completed orders rate'),
                                $('<p>').text('Target > 98% | 97 / 97')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('100%'))
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Order incidents rate'),
                                $('<p>').text('Target > 0.7% | 0 / 97')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('0%'))
                        ),
                         // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Refunded orders rate'),
                                $('<p>').text('Target < 5 | 3 / 97')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('3'))
                        ),
                    ),


                    // Delivery performance
                    $('<div>')
                    .addClass('section-area')
                    .append(
                        // Title
                        $('<div>')
                        .addClass('section-area__title')
                        .append(
                            $('<p>').text('Delivery performance'),
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('AWB tracking parcel coverage'),
                                $('<p>').text('Target > 98% | 97 / 97')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('100%'))
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Order handover service level'),
                                $('<p>').text('Target > 90% | 95 / 97')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('97%'))
                        ),
                    ),


                    // Returns flow
                    $('<div>')
                    .addClass('section-area')
                    .append(
                        // Title
                        $('<div>')
                        .addClass('section-area__title')
                        .append(
                            $('<p>').text('Returns flow'),
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Returns service level'),
                                $('<p>').text('Target > 98% | 5 / 6')
                            ),
                            $('<span>').addClass('yellow').append($('<p>').text('5'))
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Return completion rate '),
                                $('<p>').text('Target > 90% | 5 / 6')
                            ),
                            $('<span>').addClass('orange').append($('<p>').text('90%'))
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Return incident rate'),
                                $('<p>').text('Target < 10% | 0 / 6')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('0%'))
                        ),
                    ),


                    // Product returns
                    $('<div>')
                    .addClass('section-area')
                    .append(
                        // Title
                        $('<div>')
                        .addClass('section-area__title')
                        .append(
                            $('<p>').text('Product returns'),
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Product return rate'),
                                $('<p>').text('Target < 5% | 7 / 143')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('2%'))
                        ),
                    ),


                    // Client support
                    $('<div>')
                    .addClass('section-area')
                    .append(
                        // Title
                        $('<div>')
                        .addClass('section-area__title')
                        .append(
                            $('<p>').text('Client support'),
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Number of complaints'),
                                $('<p>').text('Target < 2 | 1 / 97')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('1'))
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Complaints with incident'),
                                $('<p>').text('Target < 1 | 0 / 1')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('0'))
                        ),
                        // Row --------------------------
                        $('<div>')
                        .addClass('section-area__row')
                        .append(
                            $('<div>')
                            .append(
                                $('<p>').text('Invoice attachment rate'),
                                $('<p>').text('Target > 95% | 97 / 97')
                            ),
                            $('<span>').addClass('green').append($('<p>').text('100%'))
                        ),
                       // Row --------------------------
                        $('<div>')
                        .addClass('section-area__more')
                        .append(
                            $('<p>').addClass('link lt14').text('click to see more')
                        ),
                    ),
                ),
            ),
            $('.kpi')
            .append(
                $('<div>')
                .addClass('section-area')
                .append(
                    // Title
                    $('<div>')
                    .addClass('section-area__info')
                    .append(
                        $('<p>').text('🔔 Customer experience performance metrics are a crucial component of the Buy Button algorithm, alongside account health metrics.'),
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__row')
                    .append(
                        $('<div>')
                        .append(
                            $('<p>').text('Average delivery speed'),
                            $('<p>').text('Target < 48.00 | 97 / 97')
                        ),
                        $('<span>').addClass('green').append($('<p>').text('44.68'))
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__more')
                    .append(
                        $('<p>').addClass('link lt14').text('click to see more')
                    ),
                ),
            ),
            $('.proHealth')
            .append(
                $('<div>')
                .addClass('section-area')
                .append(
                    // Title
                    $('<div>')
                    .addClass('section-area__info')
                    .append(
                        $('<p>').text('🔔 Below, you can find the products at risk of suspension and those already suspended due to high return rates.'),
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__row')
                    .append(
                        $('<div>')
                        .append(
                            $('<p>').text('At risk of suspension'),
                            $('<p>').text('Target < 10% | 0 / 97')
                        ),
                        $('<span>').addClass('green').append($('<p>').text('0%'))
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__row')
                    .append(
                        $('<div>')
                        .append(
                            $('<p>').text('Suspended products'),
                            $('<p>').text('Target < 3 | 0 / 97')
                        ),
                        $('<span>').addClass('green').append($('<p>').text('0'))
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__row')
                    .append(
                        $('<div>')
                        .append(
                            $('<p>').text('Conditionally protected'),
                            $('<p>').text('Target < 10% | 0 / 97')
                        ),
                        $('<span>').addClass('green').append($('<p>').text('0%'))
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__more')
                    .append(
                        $('<p>').addClass('link lt14').text('click to see more')
                    ),
                )
            )
            $('.conversion')
            .append(
                $('<div>')
                .addClass('section-area')
                .append(
                    // Title
                    $('<div>')
                    .addClass('section-area__info')
                    .append(
                        $('<p>').text('🔔 Masures the percentage of visitors who complete a purchase, this specific metric tells us how well your products is driving sales, helping us spot any issues.'),
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__row')
                    .append(
                        $('<div>')
                        .append(
                            $('<p>').text('Conversion rate'),
                            $('<p>').text('Target > 5% | 100 / 100')
                        ),
                        $('<span>').addClass('green').append($('<p>').text('7.6%'))
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__more')
                    .append(
                        $('<p>').addClass('link lt14').text('click to see more')
                    ),
                ),
            ),
            $('.api')
            .append(
                $('<div>')
                .addClass('section-area')
                .append(
                    // Title
                    $('<div>')
                    .addClass('section-area__info')
                    .append(
                        $('<p>').text('🔔 Clear guide for developers showing how to connect your product to our platform, helping them integrate your features quickly and easily.'),
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__row')
                    .append(
                        $('<p>'),
                        $('<p>').addClass('link lt14').html('<i class="fa-regular fa-file-pdf lt20 red"></i> API Documentation'),
                        $('<p>')
                    ),
                    // Row --------------------------
                    $('<div>')
                    .addClass('section-area__more')
                    .append(
                        $('<p>').addClass('link lt14').text('click to see more')
                    ),
                ),
            )        
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Feedback button
    const FEEDBACK_LINK = 
        $('<div>')
        .addClass('feedbackLink blue')
        .append(
            $('<p>'),
            $('<p>').text('Give this page a rating')
        );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Scroll bar size - width / height
    const PAGE_SCROLL_W = window.innerWidth - document.documentElement.clientWidth;
    const PAGE_SCROLL_H = window.innerHeight - document.documentElement.clientHeight;
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Needed to clear feedback timeout
    let feedbackTimerId = null;
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Feedback center modal
    function feedback() {
        $('.feedback-overlay').remove()
        $('.mainPageSection')
            .append(
                $('<div>')
                .addClass('feedback-overlay')
                .append(
                    $('<div>')
                    .addClass('feedback-modal')
                    .append(
                        $('<div>')
                        .addClass('feedback-title')
                        .append(
                            $('<p>').addClass('ratingTitle').text("Give this page a rating"),
                            $('<button>').addClass('closeButton closeModal')
                        ),
                        $('<div>')
                        .addClass('modalDisclaimer')
                        .append(
                            $('<div>').addClass('fcc').text('We need your feedback to help us improve.'),
                            $('<div>').addClass('fcc').text('Click on an icon to let us know how usefull was this page in your activity.')
                        ),
                        $('<div>')
                        .addClass('emoji-area')
                        .append(
                            $('<div>')
                            .addClass('emoji face-1 closeModal'),
                            $('<div>')
                            .addClass('emoji face-2 closeModal'),
                            $('<div>')
                            .addClass('emoji face-3 closeModal'),
                            $('<div>')
                            .addClass('emoji face-4 closeModal'),
                            $('<div>')
                            .addClass('emoji face-5 closeModal')
                        ),
                        $('<div>')
                        .addClass('closeWithoutFeedback')
                        .append(
                            $('<button>')
                            .addClass('closeModal')
                            .text('Close without feedback')
                        )
                    )
                )
            );


        // Shows modal
        $('.feedback-overlay').fadeIn();
        $('body')
        .css({
           marginRight: PAGE_SCROLL_W,
           marginBottom: PAGE_SCROLL_H
        })
        .addClass('showFeedback')
        
        
        // Buttons to close modal and reset counter
        $('.closeModal').on('click', function() {
            $('body')
            .removeClass('showFeedback')
            .css({
                marginRight: '0px',
                marginBottom: '0px'
            });
            $('.feedback-overlay').hide();
            clearTimeout(feedbackTimerId);
            feedbackTimerId = setTimeout( function () { feedback(); }, 120000)
        });
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Notification bottom-right modal
    function notification(param) {
        $('.notification').remove();
        if ( param == 'success') {
            $('.mainPageSection')
            .append(
                $('<div>')
                .addClass('notification success')
                .append(
                    $('<p>').text('Success'),
                    $('<p>').text('Action was successfull')
                )
            )
        } else if ( param == 'error') {
            $('.mainPageSection')
            .append(
                $('<div>')
                .addClass('notification error')
                .append(
                    $('<p>').text('Error'),
                    $('<p>').text('Action failed')
                )
            )
        };
        setTimeout( function () { $('.notification').css({ right: '16px' }) }, 100);
        setTimeout( function () { $('.notification').css({ right: '-300px' }) }, 2000);
    }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Main function
    setTimeout(function() {
        $('.mainPageSection')
        $('.mainPageSection').append(
            dashboardFill(),
            FEEDBACK_LINK
        );
        $('.stats__right-box-section, .stats__left-box-section').css({
            backgroundImage: 'none'
        });
    }, 500);
    ////////////////////////////////////////////////////////////////////

    

    //////////////////////////////////////////////////////////////////
    // Toggle click
    $(document).on('click', '.button', function() {
        if ( $(this).hasClass('max') ) {
            $(this).removeClass('max').addClass('min');
        } else if ( $(this).hasClass('min' )) {
             $(this).removeClass('min').addClass('max');
        };
        $(this).parent().parent().find('.info-area').slideToggle(100);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Feedback
    $(document).on('click', '.feedbackLink', function () {
        clearTimeout(feedbackTimerId);
        feedback();
    });
    ////////////////////////////////////////////////////////////////////



});