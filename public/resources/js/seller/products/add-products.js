$(document).ready( function () {



    ////////////////////////////////////////////////////////////////////
    // Page submenu + icon button click
    $('.products').trigger('click');
    $('.add-products').addClass('clicked');
    $('.add-products').css({color: 'var(--blue-main)'});
    $('.add-products-div').css({backgroundColor: 'var(--blue-lightest)'});
    $('.products-icon-menu').trigger('click');
    ////////////////////////////////////////////////////////////////////



    // Ajax token set globally
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


    // Define product id and product status
    let p_id = null;
    let p_status = null;



    
    
    // Top page spacer div
    const $TOP_SPACER = $('<div>')
        .css({
            height: '64px',
            width: '100%'
        });


    ////////////////////////////////////////////////////////////////////
    //
    const $TOP_SECTIONS = 
        $('<div>')
        .addClass('topSectionButtons')
        .css({
            width: '80%',
            minWidth: '710px',
            height: 'auto',
            margin: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            columnGap: '5px'
        })
        .append(
            $('<button>')
            .addClass('topButton topBtn-1')
            .text('Draft'),
            $('<button>')
            .addClass('topButton topBtn-2')
            .text('Images'),
            $('<button>')
            .addClass('topButton topBtn-3')
            .text('Product details'),
            $('<button>')
            .addClass('topButton topBtn-4')
            .text('Description'),
            $('<button>')
            .addClass('topButton topBtn-5')
            .text('Offer details'),
        );

        ////////////////////////////////////////////////////////////////////
        //
        const $DRAFT_SECTION_DIV =
            $('<div>')
            .addClass('mainSection draftSection')
            .append(
                $('<form>')
                .addClass('titleForm stdForm')
                .append(
                    $('<label>').addClass('formTitle').text('Title'),
                    $('<input>').addClass('productName formInput draft-form-1')
                    .attr({
                        placeholder: 'Add product title'
                    }),
                    $('<p>')
                    .addClass('draft-warning-1')
                    .css({
                        fontSize: '14px',
                        color: 'var(--red-darker)',
                        padding: '8px 0 0 0',
                        display: 'none',
                    })
                    .text('This field is required'),
                    $('<label>').addClass('wordCount titleCount').text('0 / 255')
                ),
                $('<form>')
                .addClass('mainCategoryForm stdForm')
                .append(
                    $('<label>').addClass('formTitle').text('Main Category'),
                    $('<select>').addClass('categoryForm selectCategory formInput draft-form-2')
                    .append(
                        $('<option>')
                        .attr({
                            value: '', 
                            disabled: true, 
                            selected: true, 
                            hidden: true,
                        })
                        .text('Choose product main category')
                        .addClass('selectOption')
                    ),
                    $('<p>')
                    .addClass('draft-warning-2')
                    .css({
                        fontSize: '14px',
                        color: 'var(--red-darker)',
                        padding: '8px 0 0 0',
                        display: 'none',
                    })
                    .text('This field is required'),
                ),
                $('<form>')
                .addClass('subCategoryForm stdForm')
                .append(
                    $('<label>').addClass('formTitle').text('Sub-Category'),
                    $('<select>').addClass('subCatForm selectCategory formInput draft-form-3')
                    .append(
                        $('<option>')
                        .attr({
                            value: '', 
                            disabled: true, 
                            selected: true, 
                            hidden: true,
                        })
                        .text('Choose product main category')
                        .addClass('selectOption'),
                    ),
                    $('<p>')
                    .addClass('draft-warning-3')
                    .css({
                        fontSize: '14px',
                        color: 'var(--red-darker)',
                        padding: '8px 0 0 0',
                        display: 'none',
                    })
                    .text('This field is required')
                ),
                $('<form>')
                .addClass('productDetailsForm stdForm')
                .append(
                    $('<label>').addClass('formTitle').text('Details'),
                    $('<input>').addClass('productBrand formInput draft-form-4')
                    .attr({
                        placeholder: 'Brand'
                    }),
                    $('<p>')
                    .addClass('draft-warning-4')
                    .css({
                        fontSize: '14px',
                        color: 'var(--red-darker)',
                        padding: '8px 0 0 0',
                        display: 'none',
                    })
                    .text('This field is required'),
                    $('<input>').addClass('productID formInput draft-form-5')
                    .attr({
                        placeholder: 'Product ID'
                    }),
                    $('<p>')
                    .addClass('draft-warning-5')
                    .css({
                        fontSize: '14px',
                        color: 'var(--red-darker)',
                        padding: '8px 0 0 0',
                        display: 'none',
                    })
                    .text('This field is required'),
                    $('<input>').addClass('productSKU formInput draft-form-6')
                    .attr({
                        placeholder: 'Product SKU'
                    }),
                    $('<p>')
                    .addClass('draft-warning-6')
                    .css({
                        fontSize: '14px',
                        color: 'var(--red-darker)',
                        padding: '8px 0 0 0',
                        display: 'none',
                    })
                    .text('This field is required'),
                    $('<input>').addClass('productEAN formInput draft-form-7')
                    .attr({
                        placeholder: 'EAN-13'
                    }),
                    $('<p>')
                    .addClass('draft-warning-7')
                    .css({
                        fontSize: '14px',
                        color: 'var(--red-darker)',
                        padding: '8px 0 0 0',
                        display: 'none',
                    })
                    .text('This field is required'),
                    $('<button>')
                    .addClass('nextSection draftContinue')
                    .text('Save and continue')
                )
            );

        ////////////////////////////////////////////////////////////////////
        //
        const $IMAGES_SECTION_DIV = 
            $('<div>')
            .addClass('mainSection imageSection')
            .append(
                $('<div>')
                .addClass('draftInfo stdForm')
                .append(
                    $('<div>')
                    .addClass('placeholderImage'),
                    $('<div>')
                    .addClass('draft-info topCommonInfo')
                    .css({ backgroundColor: 'none'})
                ),
                $('<form>')
                .addClass('imageForm stdForm')
                .append(
                    $('<label>').addClass('formTitle').text('Add Image'),
                    $('<input>').addClass('addImageForm')
                    .attr({
                        type: 'file',
                        accept: 'image/*',
                        name: 'product_photo'
                    }),
                    $('<p>')
                    .addClass('image-warning-1')
                    .css({
                        fontSize: '14px',
                        color: 'var(--red-darker)',
                        padding: '8px 0 0 0',
                        display: 'none',
                    })
                    .text('This field is required'),
                ),
                $('<div>')
                .addClass('standardInfo')
                .append(
                    $('<div>')
                    .addClass('infoDiv div-2-5')
                    .append(
                        $('<div>')
                        .css({
                            pointerEvents: 'none'
                        })
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>eMART Catalog Standard Images</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('All products listed on the platform must include at least one or more photos.'),
                                $('<li>').text('Choose clear, detail-rich images that replace as much of the physical store experience as possible.')
                            )
                        ),
                        $('<div>')
                        .addClass('dropDown')
                        .css({
                            outline: 'none',
                            border: 'none',
                            backgroundColor: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        })
                        .text('⏷'),
                        $('<div>')
                        .addClass('hiddenText')
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>ATTENTION!</b> Products with images that do the following will be rejected:'),
                            $('<ul>')
                            .append(
                                $('<li>').text('Have poor quality: pixelated, blurry, or show signs of editing.'),
                                $('<li>').text('Do not match the information presented in other sections of the documentation.'),
                                $('<li>').text('Are not available for download using the provided links.'),
                                $('<li>').text('Do not comply with the quality rules for main and secondary images mentioned below.')
                            )
                        )
                    ),
                    $('<div>')
                    .addClass('infoDiv div-2-2')
                    .append(
                        $('<div>')
                        .css({
                            pointerEvents: 'none'
                        })
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>Main Image Must:</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('Show only the product being sold, with as few or no support elements as possible.'),
                                $('<li>').text('Feature the product centered, presented from the front, occupying at least 80% of the image.')
                            )
                        ),
                        $('<div>')
                        .addClass('dropDown')
                        .css({
                            outline: 'none',
                            border: 'none',
                            backgroundColor: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        })
                        .text('⏷'),
                        $('<div>')
                        .addClass('hiddenText')
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>Must not:</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('Contain other inserted elements: watermarks, collages, links to another site.'),
                                $('<li>').text('Contain other products from the same range.')
                            )
                        )
                    ),
                    $('<div>')
                    .addClass('infoDiv div-2-2')
                    .append(
                        $('<div>')
                        .css({
                            pointerEvents: 'none'
                        })
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>Additional (Secondary) Images Must:</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('Be numerous enough to describe the product in as much detail as possible.'),
                                $('<lbox-shadow: 2px 2px 4px var(--gray-light-sh);i>').text('Be as explanatory and representative of the listed product as possible.')
                            )
                        ),
                        $('<div>')
                        .addClass('dropDown')
                        .css({
                            outline: 'none',
                            border: 'none',
                            backgroundColor: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        })
                        .text('⏷'),
                        $('<div>')
                        .addClass('hiddenText')
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>ATTENTION!</b> Products with images that do the following will be rejected:'),
                            $('<ul>')
                            .append(
                                $('<li>').text('Contain other inserted elements: watermarks, collages, links to another site.'),
                                $('<li>').text('Contain other products from the same range.')
                            )
                        )
                    ),
                    $('<div>')
                    .addClass('infoDiv div-1-2')
                    .append(
                        $('<div>')
                        .css({
                            pointerEvents: 'none'
                        })
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>Image Dimensions</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('The recommended minimum size is 400 x 400 pixels.')
                            )
                        ),
                        $('<div>')
                        .addClass('dropDown')
                        .css({
                            outline: 'none',
                            border: 'none',
                            backgroundColor: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        })
                        .text('⏷'),
                        $('<div>')
                        .addClass('hiddenText')
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>ATTENTION!</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('If the image does not respect the format, the eMART system will try to resize it automatically.'),
                                $('<li>').text('Only if the dimensions of the product captured in the image are at least 30 x 300 pixels.')
                            )
                        )
                    ),
                    $('<div>')
                    .addClass('infoDiv div-1')
                    .append(
                        $('<div>')
                        .css({
                            pointerEvents: 'none'
                        })
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>Image File Characteristics</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('Accepted image formats are JPG (.jpg), PNG (.png), GIF (.gif), JPEG (.jpeg).'),
                                $('<li>').text('The maximum accepted size for an image file is 8 MB.')
                            )
                        ),
                        $('<div>')
                    ),
                    $('<div>')
                    .addClass('bottomButtons')
                    .append(
                        $('<button>')
                        .addClass('prevSection prevImageButton')
                        .text('Previous'),
                        $('<button>')
                        .addClass('nextSection imageContinue')
                        .text('Save and continue')
                    ),
                )
            );

        ////////////////////////////////////////////////////////////////////
        //
        const $DETAILS_SECTION_DIV =
            $('<div>')
            .addClass('mainSection detailsSection')
            .append(
                $('<div>')
                .addClass('draftInfo stdForm')
                .append(
                    $('<div>')
                    .addClass('placeholderImage'),
                    $('<div>')
                    .addClass('draft-info topCommonInfo')
                    .css({ backgroundColor: 'none'})
                ),
                $('<div>')
                .addClass('standardInfo infoSection')
                .append(
                    $('<div>')
                    .addClass('infoDiv div-2L-6')
                    .append(
                        $('<div>')
                        .css({
                            pointerEvents: 'none'
                        })
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>Instructions</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('Completing all attributes can lead to increase in product page visits and conversion rates.'),
                                $('<li>').text('Ensure there are no discrepancies between the information presented in the features section and the details found in other parts of the documentation, such as the title or description.')
                            )
                        ),
                        $('<div>')
                        .addClass('dropDown')
                        .css({
                            outline: 'none',
                            border: 'none',
                            backgroundColor: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        })
                        .text('⏷'),
                        $('<div>')
                        .addClass('hiddenText')
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>ATTENTION!</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('If you want to mention 3 or more colors for the same product, the "Color" attribute must be defined with the value "Multicolor".'),
                                $('<li>').text('Make sure the values for the "Color" and "Size" characteristics are the same as in the product name or description.'),
                                $('<li>').text('Make sure that for the "Color" and "Size" characteristics you only list the size and color of that product and not all the colors and sizes available'),
                                $('<li>').text('Make sure that for the "Size" feature you have filled in the following values 2XS, 2XL, 3XL, 4XL and not used the following values: XXS, XXL, XXXL'),
                                $('<li>').text('It must NOT contain capitalized words (CAPSLOCK), with the exception of common expressions and acronyms (eg HDD)'),
                                $('<li>').text('It should NOT contain special symbols, used unnecessarily or abusively: -, &, !, @, #, $, ^, *, {, },[, ],< ,> ,? ,",=,; . Justified exceptions are allowed.')
                            )
                        )
                    )
                ),
                $('<form>')
                .addClass('productDetailsForm stdForm')
                .append(
                    $('<label>').addClass('formTitle').text('Main product details'),
                    $('<input>').addClass('productType formInput details-form-1')
                    .attr({
                        placeholder: 'Product type'
                    }),
                    $('<p>')
                        .addClass('details-warning-1')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    $('<input>').addClass('noPieces formInput details-form-2')
                    .attr({
                        placeholder: 'Pieces per set'
                    }),
                    $('<p>')
                        .addClass('details-warning-2')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    $('<input>').addClass('material formInput details-form-3')
                    .attr({
                        placeholder: 'Product material'
                    }),
                    $('<p>')
                        .addClass('details-warning-3')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    $('<input>').addClass('color formInput details-form-4')
                    .attr({
                        placeholder: 'Main color'
                    }),
                    $('<p>')
                        .addClass('details-warning-4')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    $('<input>').addClass('length formInput details-form-5')
                    .attr({
                        placeholder: 'Length ( mm )'
                    }),
                    $('<p>')
                        .addClass('details-warning-5')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    $('<input>').addClass('width formInput details-form-6')
                    .attr({
                        placeholder: 'Width ( mm )'
                    }),
                    $('<p>')
                        .addClass('details-warning-6')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    $('<input>').addClass('height formInput details-form-7')
                    .attr({
                        placeholder: 'Height ( mm )'
                    }),
                    $('<p>')
                        .addClass('details-warning-7')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    $('<input>').addClass('weight formInput details-form-8')
                    .attr({
                        placeholder: 'Weight ( gr )'
                    }),
                    $('<p>')
                        .addClass('details-warning-8')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    $('<div>')
                    .addClass('bottomButtons2')
                    .append(
                        $('<button>')
                        .addClass('prevSection prevDetailsButton')
                        .text('Previous'),
                        $('<button>')
                        .addClass('nextSection detailsContinue')
                        .text('Save and continue')
                    ),
                )
            );
            
        ////////////////////////////////////////////////////////////////////
        //
        const $DESCRIPTION_SECTION_DIV =
            $('<div>')
            .addClass('mainSection descriptionSection')
            .append(
                $('<div>')
                .addClass('draftInfo stdForm')
                .append(
                    $('<div>')
                    .addClass('placeholderImage'),
                    $('<div>')
                    .addClass('draft-info topCommonInfo')
                    .css({ backgroundColor: 'none'})
                ),
                $('<div>')
                .addClass('standardInfo')
                .append(
                $('<div>')
                    .addClass('infoDiv div-2M-6')
                    .append(
                        $('<div>')
                        .css({
                            pointerEvents: 'none'
                        })
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>Safety warnings</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('It is necessary to complete the product safety information.'),
                                $('<li>').text('Any warnings contained in the product or any existing warnings accompanying the product will be mentioned (e.g. Do not ingest, keep out of reach of children, choking hazard, etc.).')
                            )
                        ),
                        $('<div>')
                        .addClass('dropDown')
                        .css({
                            outline: 'none',
                            border: 'none',
                            backgroundColor: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        })
                        .text('⏷'),
                        $('<div>')
                        .addClass('hiddenText')
                        .append(
                            $('<p>')
                            .addClass('ul-title')
                            .html('<b>Instructions</b>'),
                            $('<ul>')
                            .append(
                                $('<li>').text('We offer you some suggestions that you can select to make the process simple.'),
                                $('<li>').text('If you do not complete the field below, we will automatically display our recommendations to comply with legal requirements.'),
                                $('<li>').text('Keep out of reach of children.'),
                                $('<li>').text('Use the product only for its specified purpose.'),
                                $('<li>').text('Read the product instructions and/or user manual carefully.'),
                                $('<li>').text('Do not leave packaging near children, risk of suffocation')
                            )
                        )
                    )
                ),
                $('<form>')
                .addClass('titleForm stdForm')
                .append(
                    $('<label>').addClass('formTitle').text('Keywords'),
                    $('<input>').addClass('keywords formInput desc-form-1')
                    .attr({
                        placeholder: 'Add keywords separated by commas ( phone case, rugged case, black phone case )'
                    }),
                    $('<p>')
                    .addClass('desc-warning-1')
                    .css({
                        fontSize: '14px',
                        color: 'var(--red-darker)',
                        padding: '8px 0 0 0',
                        display: 'none',
                    })
                    .text('This field is required'),
                ),
                $('<form>')
                .addClass('titleTextArea textForm')
                .append(
                    $('<label>').addClass('textAreaTitle').text('Description'),
                    $('<textarea>').addClass('description textInput desc-form-2')
                    .attr({
                        placeholder: 'Highlight key features and benefits...'
                    }),
                    $('<p>')
                        .addClass('desc-warning-2')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                        $('<label>').addClass('wordCount descCount').text('0 / 255'),
                    $('<div>')
                .addClass('bottomButtons2')
                .append(
                    $('<button>')
                    .addClass('prevSection prevDescriptionButton')
                    .text('Previous'),
                    $('<button>')
                    .addClass('nextSection descriptionContinue')
                    .text('Save and continue')
                ),
            ),
        );

        ////////////////////////////////////////////////////////////////////
        //
        const $OFFER_SECTION_DIV =
            $('<div>')
            .addClass('mainSection offerSection')
            .append(
                $('<div>')
                .addClass('draftInfo stdForm')
                .append(
                    $('<div>')
                    .addClass('placeholderImage'),
                    $('<div>')
                    .addClass('draft-info topCommonInfo')
                    .css({ backgroundColor: 'none'})
                ),
                $('<div>')
                .addClass('productOfferForm stdForm')
                .append(
                   $('<form>')
                    .addClass('titleForm')
                    .append(
                        $('<label>').addClass('formTitle').text('Product price'),
                        $('<input>').addClass('listPrice formInput offer-form-1')
                        .attr({
                            placeholder: 'List price'
                        }),
                        $('<p>')
                        .addClass('offer-warning-1')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                        $('<input>').addClass('minPrice formInput offer-form-2')
                        .attr({
                            placeholder: 'Min. price validation'
                        }),
                        $('<p>')
                        .addClass('offer-warning-2')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                        $('<input>').addClass('maxPrice formInput offer-form-3')
                        .attr({
                            placeholder: 'Max. price validation'
                        }),
                        $('<p>')
                        .addClass('offer-warning-3')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    ),
                    $('<form>')
                    .addClass('titleForm')
                    .append(
                        $('<label>').addClass('formTitle').text('Offer price'),
                        $('<input>').addClass('msrpPrice formInput offer-form-4')
                        .attr({
                            placeholder: 'MSRP price'
                        }),
                        $('<p>')
                        .addClass('offer-warning-4')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                        $('<input>').addClass('discount formInput')
                        .attr({
                            placeholder: 'Discount (%)'
                        }),
                        $('<input>').addClass('salePrice formInput')
                        .attr({
                            placeholder: 'Sale price'
                        }),
                    ),
                ),
                $('<div>')
                .addClass('productOfferForm stdForm')
                .append(
                   $('<form>')
                    .addClass('offerDetailsForm ')
                    .append(
                        $('<label>').addClass('formTitle').text('Offer details'),
                        $('<input>').addClass('stock formInput offer-form-5')
                        .attr({
                            placeholder: 'Stock'
                        }),
                        $('<p>')
                        .addClass('offer-warning-5')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    ),
                    $('<form>')
                    .addClass('offerDetailsForm ')
                    .append(
                        $('<label>').addClass('formTitle').html('&nbsp;'),
                        $('<input>').addClass('warranty formInput offer-form-6')
                        .attr({
                            placeholder: 'Warranty ( months )'
                        }),
                        $('<p>')
                        .addClass('offer-warning-6')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    ),
                ),
                $('<div>')
                .addClass('productOfferForm stdForm')
                .append(
                   $('<form>')
                    .addClass('titleForm ')
                    .append(
                        $('<label>').addClass('formTitle').text('Manufacturer details'),
                        $('<input>').addClass('manufacturerName formInput offer-form-7')
                        .attr({
                            placeholder: 'Manufacturer name'
                        }),
                        $('<p>')
                        .addClass('offer-warning-7')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                        $('<input>').addClass('manufacturerMail formInput offer-form-8')
                        .attr({
                            placeholder: 'Manufacturer e-mail'
                        }),
                        $('<p>')
                        .addClass('offer-warning-8')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                        $('<input>').addClass('manufacturerAddr formInput offer-form-9')
                        .attr({
                            placeholder: 'Manufacturer address'
                        }),
                        $('<p>')
                        .addClass('offer-warning-9')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    ),
                    $('<form>')
                    .addClass('titleForm ')
                    .append(
                        $('<label>').addClass('formTitle').text('EU responsible person details'),
                        $('<input>').addClass('euName formInput offer-form-10')
                        .attr({
                            placeholder: 'Name'
                        }),
                        $('<p>')
                        .addClass('offer-warning-10')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                        $('<input>').addClass('euMail formInput offer-form-11')
                        .attr({
                            placeholder: 'E-mail address'
                        }),
                        $('<p>')
                        .addClass('offer-warning-11')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                        $('<input>').addClass('euAddr formInput offer-form-12')
                        .attr({
                            placeholder: 'Address'
                        }),
                        $('<p>')
                        .addClass('offer-warning-12')
                        .css({
                            fontSize: '14px',
                            color: 'var(--red-darker)',
                            padding: '8px 0 0 0',
                            display: 'none',
                        })
                        .text('This field is required'),
                    ),
                    $('<div>')
                    .addClass('bottomButtons2')
                    .append(
                        $('<button>')
                        .addClass('prevSection prevOfferButton')
                        .text('Previous'),
                    ),
                    $('<div>')
                    .addClass('bottomButtons2')
                    .append(
                        $('<button>')
                        .addClass('nextSection offerContinue')
                        .text('Submit product')
                    ),
                ),
            );

        ////////////////////////////////////////////////////////////////////
        //
        const $PRODUCT_SAVING_DIV = 
            $('<div>')
            .addClass('savingProduct')
            .css({
                width: '100%',
                height: '800px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                paddingBottom: '100px'
            })
            .append(
                $('<div>')
                .addClass('pSavingModal')
                .css({
                    height: '300px',
                    width: '500px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid var(--gray-main)',
                    boxShadow: '0 0 16px var(--gray-light-sh)',
                    display: 'grid',
                    gridTemplateRows: 'auto'
                })
                .append(
                    $('<p>')
                    .css({
                        fontSize: '32px',
                        color: 'var(--gray-darkest)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    })
                    .text('Saving product ...'),
                    $('<div>')
                    .css({
                        width: '80px',
                        height: '80px',
                        backgroundImage: 'url(/resources/files/seller/loader.gif)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        margin: '0px auto auto auto'
                    })
                )
            );

        ////////////////////////////////////////////////////////////////////
        //
        const $PRODUCT_SAVED_DIV = 
        $('<div>')
        .addClass('productSaved')
        .css({
            width: '100%',
            height: '800px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            paddingBottom: '100px'
        })
        .append(
            $('<div>')
            .addClass('pSavedModal')
            .css({
                height: '300px',
                width: '500px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid var(--gray-main)',
                boxShadow: '0 0 16px var(--gray-light-sh)',
                display: 'grid',
                gridTemplateRows: 'auto'
            })
            .append(
                $('<p>')
                .css({
                    fontSize: '32px',
                    color: 'var(--gray-darkest)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                })
                .text('Product Saved !'),
                $('<div>')
                .css({
                    width: '80x',
                    height: '80px',
                    fontSize: '64px',
                    lineHeight: '12px',
                    margin: '0px auto auto auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: '0.8'
                })
                .text('✅️')
            )
        );



    ////////////////////////////////////////////////////////////////////
    // Timeout functions that shows main page div after 0.3 sec
    setTimeout(function() {

        $('.mainPageSection')
        .css({
            backgroundImage: "none",
            display: 'none'
        });

        $('.mainPageSection').append(
            $TOP_SPACER,
            $TOP_SECTIONS,
            $DRAFT_SECTION_DIV,
            $IMAGES_SECTION_DIV,
            $DETAILS_SECTION_DIV,
            $DESCRIPTION_SECTION_DIV,
            $OFFER_SECTION_DIV,
            $PRODUCT_SAVING_DIV,
            $PRODUCT_SAVED_DIV
        );

        $('.savingProduct').hide('fast')
        $('.productSaved').hide('fast')



        // Top buttons logic
        ////////////////////////////////////////////////////////////////////
        $('.topButton').on('click', 
            function(e) { e.preventDefault(); });
        // Draft section continue button logic
        $('.topBtn-1').click( function () {
            $('.topButton').removeClass('topClicked');
            $('.topBtn-1').addClass('topClicked');
            $('.draftSection').show('fast')
            $('.imageSection').hide('fast')
            $('.detailsSection').hide('fast')
            $('.descriptionSection').hide('fast')
            $('.offerSection').hide('fast') });
        // Image section continue button logic
        $('.topBtn-2').click( function () {
            $('.topButton').removeClass('topClicked');
            $('.topBtn-2').addClass('topClicked');
            $('.draftSection').hide('fast')
            $('.imageSection').show('fast')
            $('.detailsSection').hide('fast')
            $('.descriptionSection').hide('fast')
            $('.offerSection').hide('fast') });
        // Details section continue button logic
        $('.topBtn-3').click( function () {
            $('.topButton').removeClass('topClicked');
            $('.topBtn-3').addClass('topClicked');
            $('.draftSection').hide('fast')
            $('.imageSection').hide('fast')
            $('.detailsSection').show('fast')
            $('.descriptionSection').hide('fast')
            $('.offerSection').hide('fast') });
        // Description section continue button logic
        $('.topBtn-4').click( function () {
            $('.topButton').removeClass('topClicked');
            $('.topBtn-4').addClass('topClicked');
            $('.draftSection').hide('fast')
            $('.imageSection').hide('fast')
            $('.detailsSection').hide('fast')
            $('.descriptionSection').show('fast')
            $('.offerSection').hide('fast') });
        // Offer section continue button logic
        $('.topBtn-5').click( function () {
            $('.topButton').removeClass('topClicked');
            $('.topBtn-5').addClass('topClicked');
            $('.draftSection').hide('fast')
            $('.imageSection').hide('fast')
            $('.detailsSection').hide('fast')
            $('.descriptionSection').hide('fast')
            $('.offerSection').show('fast') });
        ////////////////////////////////////////////////////////////////////



        // Previous buttons logic
        ////////////////////////////////////////////////////////////////////
        $('.prevSection').on('click', 
            function(e) { e.preventDefault(); });
        $('.prevImageButton').click( function () {
            $('.topBtn-1').trigger('click'); });
        $('.prevDetailsButton').click( function () {
           $('.topBtn-2').trigger('click'); });
        $('.prevDescriptionButton').click( function () {
           $('.topBtn-3').trigger('click'); });
        $('.prevOfferButton').click( function () {
           $('.topBtn-4').trigger('click'); });
        ////////////////////////////////////////////////////////////////////


        $('.topBtn-1').trigger('click');


        // Page section switch
        $('.mainPageSection')
        .slideDown('fast');


        // Backend call for categories
        $.get('/api/categories', function(data) {
            data.forEach(function(cat) {
                $('.categoryForm')
                .append(
                    `<option value="${cat.id}">${cat.cat_name}</option>`
                );
            });
        });



        // Draft section logic
        ///////////////////////////////////////////////////////////////////////////////
        $('.draftContinue').on('click', 
            function(e) { e.preventDefault();
        });


        // Check each field to see if empty
        $('.draftContinue').on('click', function () {
            var DRAFT_SECTION_COMPLETE = true;
            for ( let i = 1; i < 8; i++ ) {
                if ( !$('.draft-form-' + i ).val() ) {
                    $('.draft-form-' + i).css({
                        boxShadow: '0 0 0 3px var(--red-light-sh)',
                        border: '1px solid var(--red-darker)'
                    });
                    $('.draft-warning-' + i).show();
                    DRAFT_SECTION_COMPLETE = false;
                };
            };


            // Checks if all fields are complete and moves to next section
            if ( DRAFT_SECTION_COMPLETE == true ) {
                $('.topBtn-2').trigger('click');

                
                // Ajax call to backend to add new product as draft 
                $.ajax({
                    url: '/product/draft',
                    method: 'POST',
                    data: {
                        title: $('.productName').val(),
                        sub_category_id: $('.subCatForm').val(),
                        brand: $('.productBrand').val(),
                        product_id: $('.productID').val(),
                        product_sku: $('.productSKU').val(),
                        ean_13: $('.productEAN').val(),
                    },
                    success(response) {
                        p_id = response.p_id;
                        p_status = 'Draft';
                        grabTopDetails();
                    }
                });
            };
        });


        // Removes and resets warning if user clicks field
        $(document).on('click', function(e) {
            for ( let i = 1; i < 8; i++ ) {
                if ( $(e.target).closest('.draft-form-' + i).length ) {
                    $('.draft-form-' + i).css({
                        "box-shadow": "",
                        "border": ""
                    });
                    $('.draft-warning-' + i).hide();
                };
            };
        });
        


        // Image section logic
        ///////////////////////////////////////////////////////////////////////////////
        $('.imageContinue').on('click', 
            function(e) { e.preventDefault();
        });


        // Check image field to see if empty
        $('.imageContinue').on('click', function () {
            var IMAGE_SECTION_COMPLETE = true;
            if ( !$('.addImageForm').val() ) {
                $('.addImageForm').css({
                    boxShadow: '0 0 0 3px var(--red-light-sh)',
                    border: '1px solid var(--red-darker)'
                });
                $('.image-warning-1').show();
                IMAGE_SECTION_COMPLETE = false;
            };
            

            // Checks if all fields are complete and moves to next section
            if ( IMAGE_SECTION_COMPLETE == true ) {
                $('.topBtn-3').trigger('click');

            
                // Ajax call to backend to add product image
                let formData = new FormData();
                formData.append('image', $('.addImageForm')[0].files[0]);
                
                $.ajax({
                    url: `/product/${p_id}/image`,
                    method: 'POST',
                    data: formData,
                    contentType: false,
                    processData: false,

                    success: function(response) {
                        $('.placeholderImage')
                        .css({
                            backgroundImage: `url(/storage/products/thumbnails/${response.thumbnail})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        })
                        p_status = 'Pending';
                        grabTopDetails();
                    }
                });
            };
        });


        // Removes and resets warning if user clicks field
        $(document).on('click', function(e) {
            if ( $(e.target).closest('.addImageForm').length ) {
                $('.addImageForm').css({
                    "box-shadow": "",
                    "border": ""
                });
                $('.image-warning-1').hide();
            };
        });



        // Product details section logic
        ///////////////////////////////////////////////////////////////////////////////
        $('.detailsContinue').on('click', 
            function(e) { e.preventDefault();
        });


        // Check each field to see if empty
        $('.detailsContinue').on('click', function () {
            var DETAILS_SECTION_COMPLETE = true;
            for ( let i = 1; i < 9; i++ ) {
                if ( !$('.details-form-' + i ).val() ) {
                    $('.details-form-' + i).css({
                        boxShadow: '0 0 0 3px var(--red-light-sh)',
                        border: '1px solid var(--red-darker)'
                    });
                    $('.details-warning-' + i).show();
                    DETAILS_SECTION_COMPLETE = false;
                };
            };


            // Checks if all fields are complete and moves to next section
            if ( DETAILS_SECTION_COMPLETE == true ) {
                $('.topBtn-4').trigger('click');
            

                // Ajax call to update product details
                $.ajax({
                    url: `/product/${p_id}/details`,
                    method: 'POST',
                    data: {
                        product_type: $('.productType').val(),
                        pieces_per_set: $('.noPieces').val(),
                        product_material: $('.material').val(),
                        main_color: $('.color').val(),
                        length_mm: $('.length').val(),
                        width_mm: $('.width').val(),
                        height_mm: $('.height').val(),
                        weight_gr: $('.weight').val()
                    },
                    success(response) {
                        grabTopDetails();
                    }
                });
            };
        });


        // Removes and resets warning if user clicks field
        $(document).on('click', function(e) {
            for ( let i = 1; i < 9; i++ ) {
                if ( $(e.target).closest('.details-form-' + i).length ) {
                    $('.details-form-' + i).css({
                        "box-shadow": "",
                        "border": ""
                    });
                    $('.details-warning-' + i).hide();
                };
            };
        });

        

        // Product description section logic
        ///////////////////////////////////////////////////////////////////////////////
        $('.descriptionContinue').on('click', 
            function(e) { e.preventDefault();
        });


        // Check each field to see if empty
        $('.descriptionContinue').on('click', function () {
            var DESCRIPTION_SECTION_COMPLETE = true;
            for ( let i = 1; i < 3; i++ ) {
                if ( !$('.desc-form-' + i ).val() ) {
                    $('.desc-form-' + i).css({
                        boxShadow: '0 0 0 3px var(--red-light-sh)',
                        border: '1px solid var(--red-darker)'
                    });
                    $('.desc-warning-' + i).show();
                    DESCRIPTION_SECTION_COMPLETE = false;
                };
            };


            // Checks if all fields are complete and moves to next section
            if ( DESCRIPTION_SECTION_COMPLETE == true ) {
                $('.topBtn-5').trigger('click');
            

                // Ajax call to update product description
                $.ajax({
                    url: `/product/${p_id}/description`,
                    method: 'POST',
                    data: {
                        keywords: $('.keywords').val(),
                        description: $('.description').val()
                    },
                    success(response) {
                        grabTopDetails();
                    }
                });
            };
        });


        // Removes and resets warning if user clicks field
        $(document).on('click', function(e) {
            for ( let i = 1; i < 2; i++ ) {
                if ( $(e.target).closest('.desc-form-' + i).length ) {
                    $('.desc-form-' + i).css({
                        "box-shadow": "",
                        "border": ""
                    });
                    $('.desc-warning-' + i).hide();
                };
            };
        });



        // Product offer section logic
        ///////////////////////////////////////////////////////////////////////////////
        $('.offerContinue').on('click', 
            function(e) { e.preventDefault();
        });


        // Check each field to see if empty
        $('.offerContinue').on('click', function () {
            var OFFER_SECTION_COMPLETE = true;
            for ( let i = 1; i < 13; i++ ) {
                if ( !$('.offer-form-' + i ).val() ) {
                    $('.offer-form-' + i).css({
                        boxShadow: '0 0 0 3px var(--red-light-sh)',
                        border: '1px solid var(--red-darker)'
                    });
                    $('.offer-warning-' + i).show();
                    OFFER_SECTION_COMPLETE = false;
                };
            };


            // Checks if all fields are complete and moves to next section
            if ( OFFER_SECTION_COMPLETE == true ) {


                // Ajax call to update product description
                $.ajax({
                    url: `/product/${p_id}/offer`,
                    method: 'POST',
                    data: {
                        list_price: $('.listPrice').val(),
                        min_price: $('.minPrice').val(),
                        max_price: $('.maxPrice').val(),
                        msrp_price: $('.msrpPrice').val(),
                        discount_percent: $('.discount').val(),
                        sale_price: $('.salePrice').val(),
                        stock: $('.stock').val(),
                        warranty_months: $('.warranty').val(),
                        manufacturer_name: $('.manufacturerName').val(),
                        manufacturer_email: $('.manufacturerMail').val(),
                        manufacturer_address: $('.manufacturerAddr').val(),
                        eu_responsible_name: $('.euName').val(),
                        eu_responsible_email: $('.euMail').val(),
                        eu_responsible_address: $('.euAddr').val()
                    },
                    success(response) {


                        // Product saved animation
                        $('.topButton').removeClass('topClicked');
                        $('.offerSection').hide('fast');
                        $('.savingProduct').show('fast');
                        setTimeout( function () {
                            $('.savingProduct').hide()
                            $('.productSaved').show()
                        }, 1000 );
                        setTimeout( function () {
                            $('.productSaved').fadeOut();
                            window.location.href = '/seller/products/my-products';
                        }, 1500 );
                    }
                });
            };
        });


        // Removes and resets warning if user clicks field
        $(document).on('click', function(e) {
            for ( let i = 1; i < 15; i++ ) {
                if ( $(e.target).closest('.offer-form-' + i).length ) {
                    $('.offer-form-' + i).css({
                        "box-shadow": "",
                        "border": ""
                    });
                    $('.offer-warning-' + i).hide();
                };
            };
        });


        // Top product details on every section
        ////////////////////////////////////////////////////////////////////
        function grabTopDetails() {
            $('.topCommonInfo').html('');
            $('.topCommonInfo')
            .append(
                $('<p>').addClass('draftInfo-t').text($('.productName').val()),
                $('<p>').addClass('draftInfo-p').html('Product ID: <b>' + $('.productID').val() + '</b>'),
                $('<p>').addClass('draftInfo-p').html('Status: <b>' + p_status + '</b>'),
                $('<p>').addClass('draftInfo-p').html('PNK: <b>' + $('.productSKU').val() + '</b>'),
                $('<p>').addClass('draftInfo-p').html('Brand: <b>' + $('.productBrand').val() + '</b>'),
                $('<p>').addClass('draftInfo-p').html('Category: <b>' + $('.categoryForm option:selected').text() + '</b>'),
                $('<p>').addClass('draftInfo-p').html('Sub-Category: <b>' + $('.subCatForm option:selected').text() + '</b>')
            );
        };
        ////////////////////////////////////////////////////////////////////



    }, 300);
    ////////////////////////////////////////////////////////////////////


    $(document).on('change', '.categoryForm', function() {
        $(this).css({
            color: 'var(--gray-darkest)'
        });
        const categoryID = $(this).val();
        const $subForm = $('.subCatForm');
        $('.subCatForm').css({
            color: 'var(--gray-darker)'
        });


        $subForm.html('<option class="selectOption" value="" disabled selected hidden>Choose product main category</option>');

        if (!categoryID) return;

        $.get(`/api/categories/${categoryID}/subcategories`, function(data) {
            data.forEach(function(sub) {
                $subForm.append(`<option value="${sub.id}">${sub.cat_name}</option>`);
            })
        })

    });


    $(document).on('change', '.subCatForm', function() {
        $(this).css({
            color: 'var(--gray-darkest)'
        });
    });
    

    // Draft title form char counter
    ////////////////////////////////////////////////////////////////////
    $(document).on('input', '.draft-form-1', function() {
        $('.titleCount').text($('.draft-form-1').val().length + ' / 255')
    });
    ////////////////////////////////////////////////////////////////////



    // Description form char counter
    ////////////////////////////////////////////////////////////////////
    $(document).on('input', '.desc-form-2', function() {
        $('.descCount').text($('.desc-form-2').val().length + ' / 1000')
    });
    ////////////////////////////////////////////////////////////////////



    // If text in discount form, sale price is auto-calculateds
    ////////////////////////////////////////////////////////////////////
    $(document).on('input', '.discount', function () {
        if ( $('.discount').val().length > 0 && $('.listPrice').val() > 0 ) {
            $('.salePrice')
            .css({ 
                pointerEvents: 'none',
                backgroundColor: 'var(--gray-lighter)'
            })
            .val(($('.listPrice').val() * (100 - $('.discount').val())/100).toFixed(2));
        } else if ( $('.discount').val().length == 0 ) {
            $('.salePrice')
            .css({ 
                pointerEvents: '',
                backgroundColor: ''
            })
            .val('')
        };
    });
    ////////////////////////////////////////////////////////////////////



    // If text in sale form, discount is auto-calculateds
    ////////////////////////////////////////////////////////////////////
    $(document).on('input', '.salePrice', function () {
        if ( $('.salePrice').val().length > 0 && $('.listPrice').val() > 0 ) {
            $('.discount')
            .css({ 
                pointerEvents: 'none',
                backgroundColor: 'var(--gray-lighter)'
            })
            .val(Math.round(100 / ($('.listPrice').val() / ($('.listPrice').val() - $('.salePrice').val()))));
        } else if ( $('.salePrice').val().length == 0 ) {
            $('.discount')
            .css({ 
                pointerEvents: '',
                backgroundColor: ''
            })
            .val('')
        };
    });
    ////////////////////////////////////////////////////////////////////



});