$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.products').trigger('click');
    $('.my-products').addClass('clicked');
    $('.my-products').css({color: 'var(--blue-main)'});
    $('.my-products-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.products-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Ajax token set globally
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    function showProduct( id, thumbnail, title, brand, sub_category_name, product_sku, documentation_status, level, created_at, updated_at, complete ) {
        const PRODUCT_CONTAINER = $('<div>')
            .addClass('productContainer')
            .append(
                // Checkbox area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<div>').addClass('checkbox check unchecked')
                ),
                // Image area
                $('<div>')
                .addClass('gridSection')
                .append(
                    $('<a>')
                    .css({
                        height: '100%',
                        aspectRatio: '1 / 1',
                        margin: 'auto',
                        backgroundColor: 'white',
                        backgroundImage: `url(/storage/products/thumbnails/${thumbnail})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain'
                    })
                    .attr({ href: `/product/${id}/${product_sku}`})
                ),
                // Product area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<a>').addClass('stdTitle').text(title).attr({ href: `/product/${id}/${product_sku}`}),
                    $('<p>').addClass('stdText id').html(`<b>Product SKU:</b>&nbsp;${product_sku}`),
                    $('<p>').addClass('stdText').html(`<b>Category:</b>&nbsp;${sub_category_name}`),
                    $('<p>').addClass('stdText').html(`<b>Brand:</b>&nbsp;${brand}`)
                ),
                // Status area
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass(`labelText actionButtons ${documentation_status.charAt(0).toLowerCase() + documentation_status.slice(1)}`).text(documentation_status),
                ),
                // Listing details section
                $('<div>')
                .addClass('flexSection')
                .append(
                    $('<p>').addClass('stdText').html(`Product created at:&nbsp;<b>${created_at}</b>`),
                    $('<p>').addClass('stdText documentation').html(`Documentation level:&nbsp;<b>${level}</b>`),
                    $('<p>').addClass('stdText').html(`Percentage completed:&nbsp;<b>${complete + '%'}</b>`),
                    $('<p>').addClass('stdText').html(`Product updated at:&nbsp;<b>${updated_at}</b>`)
                ),
                // Actions area
                $('<div>')
                .addClass('gridSection actionSection')
                .css({ marginTop: 'auto', marginBottom: 'auto' })
                .append(
                    $('<button>')
                    .addClass('aB-1 actionButton')
                    .text("Improve product"),

                    $('<button>')
                    .addClass('aB-2 actionButton')
                    .text("Copy product listing"),

                    $('<button>')
                    .addClass('aB-3 actionButton')
                    .text("Change SKU number"),
                )
            )
            return PRODUCT_CONTAINER;
        };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Timeout functions that shows main page div after 0.5 sec
    setTimeout(function() {
        $('.mainPageSection')
        .css({
            backgroundImage: "none",
            display: 'none'
        })
        .append(
            TOP_SPACER,
            PAGE_TITLE,
            TOP_SEARCH_FORM,
            MORE_FILTERS,
            DYNAMIC_SECTION,
            PAGE_OPTIONS,
            EDIT_PANEL,
            FEEDBACK_LINK
        )
        .slideDown('fast');

        

        $(document).trigger('dynamicSellerPageView:ready');

    }, 500);
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // After DOM is fully loaded
    $(document).on('dynamicSellerPageView:ready', function () {



        ////////////////////////////////////////////////////////////////////
        // Functions
        $('.nextPage').on('click', function(e) { e.preventDefault(); });
        $('.prevPage').on('click', function(e) { e.preventDefault();});
        
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Page title
        $('.pageTitle').text('My products');
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Small filter options
        $('.smallFilterSelect')
        .append(
            $('<option>').text('SKU'),
            $('<option>').text('Name'),
            $('<option>').text('Brand'),
            $('<option>').text('Status'),
            $('<option>').text('Category'),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 1
        $('.expFilter-1')
        .append(
            $('<option>').text('SKU'),
            $('<option>').text('Name'),
            $('<option>').text('Brand'),
            $('<option>').text('Status'),
            $('<option>').text('Category'),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 2
        $('.expFilter-2')
        .append(
            $('<option>').text('SKU'),
            $('<option>').text('Name'),
            $('<option>').text('Brand'),
            $('<option>').text('Status'),
            $('<option>').text('Category'),
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 3
        $('.expFilter-status')
        .append(
            $('<option>').text('All'),
            $('<option>').text('Draft'),
            $('<option>').text('Pending'),
            $('<option>').text('Approved'),
            $('<option>').text('Refused'),
            $('<option>').text('Blocked')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Expanded filter 4
        $('.expFilter-option')
        .append(
            $('<option>')
            .attr({
                value: '', 
                disabled: true, 
                selected: true, 
                hidden: true,
            })
            .text('Documentation level')
            .addClass('selectOption'),
            $('<option>').text('Basic'),
            $('<option>').text('Standard'),
            $('<option>').text('Advanced'),
            $('<option>').text('Complete')     
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
        $('.mainTopButtons')
        .append(
            $('<button>')
            .addClass('filterButton fB-1 all')
            .attr('data-filter', 'all')
            .html("<span>All products<span>"),

            $('<button>')
            .addClass('filterButton fB-2 draft')
            .data({filter: 'documentation_status', type: 'Draft'})
            .html("<span>Draft<span>"),

            $('<button>')
            .addClass('filterButton fB-3 pending')
            .data({filter: 'documentation_status', type: 'Pending'})
            .html("<span>Pending<span>"),

            $('<button>')
            .addClass('filterButton fB-4 approved')
            .data({filter: 'documentation_status', type: 'Approved'})
            .html("<span>Approved<span>"),

            $('<button>')
            .addClass('filterButton fB-5 refused')
            .data({filter: 'documentation_status', type: 'Refused'})
            .html("<span>Refused<span>"),

            $('<button>')
            .addClass('filterButton fB-6 blocked')
            .data({filter: 'documentation_status', type: 'Blocked'})
            .html("<span>Blocked<span>")
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Variables to change
        $('.subMenuSection')
        .append(
            $('<button>')
            .addClass('massActionButton mB-1')
            .text("Upload products with XLS"),

            $('<button>')
            .addClass('massActionButton mB-2')
            .text("Add product"),

            $('<button>')
            .addClass('selectedOffers')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Dynamic section titles
        $('.tableTitle')
        .append(
            $('<div>').addClass('master-check m-unchecked'),
            $('<div>').addClass('titleSection image').text('Image'),
            $('<div>').addClass('titleSection info').text('Product information'),
            $('<div>').addClass('titleSection status').text('Status'),
            $('<div>').addClass('titleSection details').text('Listing details'),
            $('<div>').addClass('titleSection actions').text('Actions')
        );
        ////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////
        // Filter buttons logic
        $(document).on('click', '.filterButton', function() {
            $('.filterButton').removeClass('filterClick')
            $(this).addClass('filterClick')
            $('.loadingDiv').fadeIn('fast')
            $('.dynamicProductsArea').html('')
            

            // Needed for pagination
            var $this = $(this);
            
            
            // Ajax call delayed for animation
            setTimeout( function() {
                $.ajax({
                    url: `/api/myproduct/${$this.data('filter')}/${$this.data('type')}`,
                    method: 'GET',
                    success(response) {


                        // Pagination variables needed
                        var noItems = $('.perPage select').val();
                        var startIndex = (pageNo - 1) * noItems;
                        var stopIndex = pageNo * noItems;


                        // Item number per page logic
                        if ( stopIndex < response.length ) {
                            $('.pagination').text(`${startIndex + 1} - ${stopIndex} of ${response.length}`)
                        } else {
                            $('.pagination').text(`${startIndex + 1} - ${response.length} of ${response.length}`)
                        };
                        

                        // Response brakedown and append 
                        $.each(response.slice(startIndex, stopIndex), function(i, product) {
                            var fNotComplete = (45 - Object.values(product).filter(value => value !== null).length) < 0 ? 0 : (45 - Object.values(product).filter(value => value !== null).length);
                            var pComplete = Math.round(100 - (100 / (45 / fNotComplete)));
                            var pLevel;
                            if      ( pComplete > 95 )                     { pLevel = 'Complete'}
                            else if ( pComplete > 70 && pComplete <= 95 )  { pLevel = 'Advanced'}
                            else if ( pComplete > 50 && pComplete <= 70 )  { pLevel = 'Standard'}
                            else if ( pComplete < 50 )                     { pLevel = 'Basic'}


                            $('.dynamicProductsArea')
                            .append(
                                showProduct(
                                    product.id,
                                    product.thumbnail,
                                    product.title,
                                    product.brand,
                                    product.sub_category.parent.parent.cat_name + ' / ' + product.sub_category.parent.cat_name + ' / ' + product.sub_category.cat_name,
                                    product.product_sku,
                                    product.documentation_status,
                                    pLevel,
                                    product.created_at.split('T')[0],
                                    product.updated_at.split('T')[0],
                                    pComplete
                                )
                            )
                        });
                        $('.loadingDiv').hide()
                        $('.dynamicProductsArea').fadeIn();
                    }
                });
            }, 500)
        });
        ////////////////////////////////////////////////////////////////////
 


        ////////////////////////////////////////////////////////////////////
        // First filter pre-selected
        $('.all').trigger('click');
        ////////////////////////////////////////////////////////////////////



    });



    ////////////////////////////////////////////////////////////////////
    // Object for improve products fields
    var EDITED_FIELDS = {};
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Page mask for "Improve Product" modal
    const EDIT_PANEL = $('<div>').addClass('pageMask')
    ////////////////////////////////////////////////////////////////////
    


    ////////////////////////////////////////////////////////////////////
    // Function that fills in all the fields in "Improve Product" modal
    function fillProduct(

        // Product summary parameters
        pTitle, pLevel, pSku, pID, pSection, pCategory, pSubCategory, pBestPrice, pComission, pReviews, pRating,

        // Product image parameters
        pImage,

        // Product details parameters
        pType, pPieces, pMaterial, pColor, pLength, pWidth, pHeight, pWeight,
        
        // Product description parameters
        pKeywords, pDescription,
        
        // Product offer price parameters
        pListPrice, pMinPrice, pMaxPrice, pMSRP, pDiscount, pSalePrice,
        
        // Product offer details parameters
        pStock, pWarranty,
        
        // Product manufacturer & EU responsible parameters
        pManName, pManEmail, pManAddr, pEuName, pEuEmail, pEuAddr,

        // Save button
        pSeller

    ) {

        return $('<div>')
        .addClass('improveProductArea')
        .append(


            // Product summary area
            $('<div>')
            .addClass('container prodSummary')
            .append(
                $('<div>')
                .addClass('productIMG')
                .css({
                    height: '100%',
                    aspectRatio: '1 / 1',
                    margin: 'auto',
                    backgroundColor: 'white',
                    backgroundImage: `url(/storage/products/${pImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain'
                }),
                $('<div>')
                .addClass('productTEXT')
                .append(
                    $('<div>')
                    .addClass('imp-prod-title')
                    .append(
                        $('<p>').text(pTitle),
                        $('<p>').addClass(`${pLevel.charAt(0).toLowerCase() + pLevel.slice(1)}`).html(`<span>${pLevel}</span>`),
                    ),
                    $('<div>')
                    .addClass('imp-prod-category flex-shrink')
                    .append(
                        $('<p>').html(`${pSection}&nbsp;&nbsp;>&nbsp;&nbsp;`),
                        $('<p>').html(`${pCategory}&nbsp;&nbsp;>&nbsp;&nbsp;`),
                        $('<p>').html(`${pSubCategory}`)
                    ),
                    $('<div>')
                    .addClass('imp-prod-sku-id flex-shrink')
                    .append(
                        $('<p>').html(`Product SKU:&nbsp;<b>${pSku}</b>&nbsp;&nbsp;|&nbsp;&nbsp;`),
                        $('<p>').html(`Product ID:&nbsp;<b>${pID}</b>`)
                    ),
                    $('<div>')
                    .addClass('imp-prod-offer flex-shrink')
                    .append(
                        $('<p>').html(`Pret oferta principala:&nbsp;<b>${pBestPrice}</b>&nbsp;&nbsp;|&nbsp;&nbsp;`),
                        $('<p>').html(`Comision:&nbsp;<b>23%</b>&nbsp;&nbsp;|&nbsp;&nbsp;`),
                        $('<p>').html(`Review-uri:&nbsp;<b>${pReviews}</b>&nbsp;&nbsp;|&nbsp;&nbsp;`),
                        $('<p>').html(`Rating:&nbsp;<b>${pRating}</b>`),
                    )
                )
            ),


            // Edit image area
            $('<div>')
            .addClass('container prodImage')
            .append(
                $('<p>')
                .addClass('containerTitle')
                .text('Product image'),
                $('<form>')
                .addClass('improveForm imageForm')
                .append(
                    $('<input>')
                    .addClass('improvePhoto editField')
                    .attr({
                        type: 'file',
                        accept: 'image/*',
                        name: 'product_photo'
                    })
                )
            ),


            // Edit main details
            $('<div>')
            .addClass('container prodDetails')
            .append(
                $('<p>')
                .addClass('containerTitle')
                .text('Product details'),
                $('<div>')
                .addClass('containerInputs')
                .append(
                    $('<form>')
                    .addClass('improveForm')
                    .append(
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Product type'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'product_type'})
                        .val(pType),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Pieces per set'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'pieces_per_set'})
                        .val(pPieces),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Product material'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'product_material'})
                        .val(pMaterial),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Main color'),
                        $('<input>')
                        .addClass('improveLastInput editField')
                        .data({field: 'main_color'})
                        .val(pColor)
                    ),
                    $('<form>')
                    .addClass('improveForm')
                    .append(
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Length ( mm )'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'length_mm'})
                        .val(pLength),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Width ( mm )'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'width_mm'})
                        .val(pWidth),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Height ( mm )'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'height_mm'})
                        .val(pHeight),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Weight ( gr )'),
                        $('<input>')
                        .addClass('improveLastInput editField')
                        .data({field: 'weight_gr'})
                        .val(pWeight)
                    )
                )
            ),


            // Edit description area
            $('<div>')
            .addClass('container prodDetails')
            .append(
                $('<p>')
                .addClass('containerTitle')
                .text('Keywords & description'),
                $('<div>')
                .addClass('containerTextarea')
                .append(
                    $('<form>')
                    .addClass('improveForm')
                    .append(
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Keywords'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'keywords'})
                        .val(pKeywords),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Description'),
                        $('<textarea>')
                        .addClass('improveLastInput textarea editField')
                        .data({field: 'description'})
                        .val(pDescription)
                    )   
                )
            ),


            // Edit offer details
            $('<div>')
            .addClass('container prodDetails')
            .append(
                $('<p>')
                .addClass('containerTitle')
                .text('Offer details'),
                $('<div>')
                .addClass('containerInputs')
                .append(
                    //
                    $('<form>')
                    .addClass('improveForm')
                    .append(
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('List price'),
                        $('<input>')
                        .addClass('improveInput editField listPrice')
                        .data({field: 'list_price'})
                        .val(pListPrice),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Min. price validation'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'min_price'})
                        .val(pMinPrice),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Max. price validation'),
                        $('<input>')
                        .addClass('improveLastInput editField')
                        .data({field: 'max_price'})
                        .val(pMaxPrice),
                    ),

                    
                    //
                    $('<form>')
                    .addClass('improveForm')
                    .append(
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('MSRP price'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'msrp_price'})
                        .val(pMSRP),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Discount (%)'),
                        $('<input>')
                        .addClass('improveInput editField discount')
                        .data({field: 'discount_percent'})
                        .val(pDiscount),
                        //
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Sale price'),
                        $('<input>')
                        .addClass('improveLastInput editField salePrice')
                        .data({field: 'sale_price'})
                        .val(pSalePrice),
                    )
                )
            ),


            // Edit stock area
            $('<div>')
            .addClass('container prodDetails')
            .append(
                $('<p>')
                .addClass('containerTitle')
                .text('Stock & warranty'),
                $('<div>')
                .addClass('containerInputs')
                .append(
                    //
                    $('<form>')
                    .addClass('improveForm')
                    .append(
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Stock'),
                        $('<input>')
                        .addClass('improveLastInput editField')
                        .data({field: 'stock'})
                        .val(pStock)
                    ),
                    //
                    $('<form>')
                    .addClass('improveForm')
                    .append(
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Warranty ( months )'),
                        $('<input>')
                        .addClass('improveLastInput editField')
                        .data({field: 'warranty_months'})
                        .val(pWarranty)
                    )
                )
            ),


            // Edit regulatory area
            $('<div>')
            .addClass('container prodDetails')
            .append(
                $('<p>')
                .addClass('containerTitle')
                .text('Manufacturer & EU responsible details'),
                $('<div>')
                .addClass('containerInputs')
                .append(
                    //
                    $('<form>')
                    .addClass('improveForm')
                    .append(
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Manufacturer name'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'manufacturer_name'})
                        .val(pManName),
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Manufacturer e-mail'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'manufacturer_email'})
                        .val(pManEmail),
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('Manufacturer address'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'manufacturer_address'})
                        .val(pManAddr)
                    ),
                    //
                    $('<form>')
                    .addClass('improveForm')
                    .append(
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('EU responsible name'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'eu_responsible_name'})
                        .val(pEuName),
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('EU responsible e-mail'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'eu_responsible_email'})
                        .val(pEuEmail),
                        $('<label>')
                        .addClass('improveFormLabel')
                        .text('EU responsible address'),
                        $('<input>')
                        .addClass('improveInput editField')
                        .data({field: 'eu_responsible__address'})
                        .val(pEuAddr)
                    ),
                ),


                // Edit save button
                $('<button>')
                .addClass('saveProductChanges')
                .text('Save and continue')
                .data({ seller: pSeller, sku: pSku})
            )
        )
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Improve product
    $(document).on('click', '.aB-1', function() {
        EDITED_FIELDS = {};


        // Product ID for controller
        const PRODUCT_ID = $(this).closest('.productContainer').children('.flexSection').children('.id').text().split(":")[1].trim();
        const DOCUMENTATION_LEVEL = $(this).closest('.productContainer').children('.flexSection').children('.documentation').text().split(":")[1].trim()


        // Ajax call for side panel
        $.ajax({
            url: `/fetch/product/${PRODUCT_ID}`,
            method: 'GET',
            success(response) {

     
                $('.pageMask')
                .html('')
                .append(
                    fillProduct(

                        // Product summary parameters
                        response.title, DOCUMENTATION_LEVEL, response.product_sku, response.product_id, response.sub_category.parent.parent.cat_name, response.sub_category.parent.cat_name, response.sub_category.cat_name, response.best_price, Math.floor(Math.random() * 6) + 18, response.prod_reviews_count, response.prod_reviews_avg_rating == null ? '-' : response.prod_reviews_avg_rating.toFixed(2),
                        
                        // Product image parameters
                        response.image,
                        
                        // Product details parameters
                        response.product_type, response.pieces_per_set, response.product_material, response.main_color, response.length_mm, response.width_mm, response.height_mm, response.weight_gr,
                        
                        // Product description parameters
                        response.keywords, response.description,

                        // Product offer price parameters
                        response.list_price, response.min_price, response.max_price, response.msrp_price, response.discount_percent, response.sale_price,
                        
                        // Product offer details parameters
                        response.stock, response.warranty_months,
                        
                        // Product manufacturer & EU responsible parameters
                        response.manufacturer_name, response.manufacturer_email, response.manufacturer_address, response.eu_responsible_name, response.eu_responsible_email, response.eu_responsible_address,

                        // Seller
                        response.seller_id
                    )
                )


                // If input has val() moves label up
                $('input, textarea').each(function () {
                    if ($(this).val().length > 0) {
                        $(this).prev('label').css({ top: '6px' });
                    };
                });


                // Top container fixed
                $('.improveProductArea').on('scroll', function () {
                    $('.prodSummary').toggleClass('improveSticky', $(this).scrollTop() > 50);
                });
            }
        });


        // Shows side panel after loading time
        $('.pageMask').fadeIn();
        $('body').css({ overflow: 'hidden', marginRight: `${PAGE_SCROLL_W}px`})
        setTimeout( function() { $('.improveProductArea').css({ right: '0px' }); }, 500);
        setTimeout( function() { $('.pageMask').css({ backgroundImage: 'none' }); }, 650);
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Moves 'placeholder' up when user clicks on input
    $(document).on('focus', 'input, textarea', function () {
        $(this).prev('label').css({ top: '6px' });
    }).on('blur', 'input, textarea', function () {
        if ($(this).val().length === 0) {
            $(this).prev('label').css({ top: '26px' });
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // If text in discount form, sale price is auto-calculateds
    $(document).on('input', '.discount', function () {
        if ( $('.discount').val().length > 0 && $('.listPrice').val() > 0 ) {
            $('.salePrice')
            .css({ 
                pointerEvents: 'none',
            })
            .val(($('.listPrice').val() * (100 - $('.discount').val())/100).toFixed(2))
            .prev('label').css({ top: '6px' });
        } else if ( $('.discount').val().length == 0 ) {
            $('.salePrice')
            .css({ 
                pointerEvents: '',
            })
            .val('')
            .prev('label').css({ top: '26px' });
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // If text in sale form, discount is auto-calculateds
    $(document).on('input', '.salePrice', function () {
        if ( $('.salePrice').val().length > 0 && $('.listPrice').val() > 0 ) {
            $('.discount')
            .css({ 
                pointerEvents: 'none',
            })
            .val(Math.round(100 / ($('.listPrice').val() / ($('.listPrice').val() - $('.salePrice').val()))))
            .prev('label').css({ top: '6px' });
        } else if ( $('.salePrice').val().length == 0 ) {
            $('.discount')
            .css({ 
                pointerEvents: '',
            })
            .val('')
            .prev('label').css({ top: '26px' });
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Creates object with product changes
    $(document).on('change','.editField', function() {
        EDITED_FIELDS[$(this).data('field')] = $(this).val();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    //
    $(document).on('click', '.saveProductChanges', function() {
        if( Object.keys(EDITED_FIELDS).length > 0 ) {
            $.ajax({
                url: `/update/product/${$(this).data('seller')}/${$(this).data('sku')}`,
                method: 'POST',
                data: EDITED_FIELDS,
                success(response) {
                }
            });
            $('.pageMask').trigger('click');
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Only overlay click closes edit area
    $(document).on('click', '.improveProductArea', function(e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Overlay click hides edit area
    $(document).on('click', '.pageMask', function() {
        $(this).fadeOut().css({ backgroundImage: "url('/resources/files/seller/loader.gif')" });
        $('.improveProductArea').css({ right: '-1000px' });
        $('body').css({ overflow: '', marginRight: '0px' });
        EDITED_FIELDS = {};
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    //
    $(document).on('click', '.mB-2', function() {
        window.location.href = '/seller/products/add-products'
    });
    ////////////////////////////////////////////////////////////////////



    



});