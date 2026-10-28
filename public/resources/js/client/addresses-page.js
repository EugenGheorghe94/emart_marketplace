$(document).ready( function() {



    ////////////////////////////////////////////////////////////////////
    // For reviews POST call
    $.ajaxSetup({
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
    });
    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////
    // Show add-address modal on click
    $('.add-address__pickup').on('click', function() {
        $('.pickup-backdrop').fadeIn('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close add-address modal on click outside
    $('.pickup-backdrop').on('click', function() {
        $(this).fadeOut('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Stop click inside from closing add-address modal
    $('.pickup-modal').on('click', function(e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close add-address modal from top right "x" button
    $('.close-pickup-modal').on('click', function() {
        $('.pickup-backdrop').fadeOut('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to submit addresses
    $('.submit-pickup').on('click', function() {

        var ALL_COMPLETED = true;

        $('.pickup-form-input').each( function( index ) {
            if ( $(this).val().length < 1 ) {
                $(this).addClass('input-warning');
                $(this).next().show();
                ALL_COMPLETED = false;
            }
        });

        var PRIMARY;

        if ($('#primary-pickup').is(':checked')) {
            PRIMARY = 1;
        } else {
            PRIMARY = 0;
        };

        if ( ALL_COMPLETED == true ) {
            $.ajax({
                url: '/addresses/add',
                method: 'POST',
                data: {
                    user_id: USER_ID,
                    first_name: $('.pickup-first-name').val(),
                    last_name: $('.pickup-last-name').val(),
                    phone_number: $('.pickup-phone-number').val(),
                    state: $('.pickup-state').val(),
                    city: $('.pickup-city').val(),
                    address: $('.pickup-address').val(),
                    address_type: 'pickup',
                    primary: PRIMARY,
                },
                success(response) {}
            });

            $('.pickup-modal')
            .html('')
            .append(
                $('<div>')
                .addClass('thanks')
                .append(
                    $('<p>'),
                    $('<p>').text('Address saved!'),
                    $('<p>').text('you will be redirected')
                )
            );

            setTimeout( function() {
                location.reload();
            }, 1000);
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Removes input warning on click
    $('.form-input').on('click', function() {
        $(this).removeClass('input-warning')
        $(this).next().hide();
    });
    ////////////////////////////////////////////////////////////////////




    ////////////////////////////////////////////////////////////////////
    // Fill pickup address cards
    function fillPickupAddress( address_id, first_name, last_name, phone_number, address, city, state, primary) {
        const PICKUP_ADDRESS =
            $('<div>')
            .addClass('pickup')
            .append(
                $('<div>')
                .addClass('pickup-details')
                .append(
                    $('<div>')
                    .addClass('pickup-details__logo')
                    .append(
                        $('<span>')
                    ),
                    $('<div>')
                    .addClass('pickup-details__info')
                    .append(
                        $('<p>').text(first_name + ' ' + last_name),
                        $('<p>').text(phone_number),
                        $('<p>').text(address),
                        $('<p>').text(city + ', ' + state)
                    )
                ),
                $('<div>')
                .addClass('pickup-buttons')
                .append(
                    $('<div>')
                    .append(
                        $('<button>')
                        .addClass('pickup-buttons__edit')
                        .text('edit')
                        .attr({
                            value: address_id
                        }),
                    )
                )
            )

            if ( primary != 1 ) {
                PICKUP_ADDRESS.find('.pickup-buttons')
                .append(
                    $('<div>')
                    .append(
                        $('<button>')
                        .addClass('pickup-buttons__delete')
                        .text('delete')
                        .attr({
                            value: address_id
                        }),
                        $('<button>')
                        .addClass('pickup-buttons__primary')
                        .text('primary')
                        .attr({
                            value: address_id
                        })
                    )
                )
            } else (
                PICKUP_ADDRESS.find('.pickup-details')
                .append(
                    $('<div>').addClass('is-primary')
                )
            )
            return PICKUP_ADDRESS;
        }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to get pickup addresses
    $.ajax({
        url: '/addresses/pickup/fetch',
        method: 'GET',
        success(response) {

            if( response.length == 0 ) {
                $('#primary-pickup')
                .prop('checked', true)
                .parent()
                .css({ pointerEvents: 'none'})
            }

            $('.pickup-area__cards').removeClass('load')

            $.each(response, function(index, address) {
                $('.pickup-area__cards')
                .append(
                    fillPickupAddress(
                        address.id,
                        address.first_name,
                        address.last_name,
                        address.phone_number,
                        address.address,
                        address.city,
                        address.state,
                        address.primary
                    )
                )
            });
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to remove address
    $(document).on('click', '.pickup-buttons__delete', function() {
        const ADDRESS_ID = $(this).val();
    
        $.ajax({
            url: '/addresses/remove',
            method: 'POST',
            data: { address_id: ADDRESS_ID},
            success(response){
                location.reload();
            }
        });
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to make pickup address primary
    $(document).on('click', '.pickup-buttons__primary', function() {
        const ADDRESS_ID = $(this).val();

        $.ajax({
            url: '/addresses/pickup/primary',
            method: 'POST',
            data: { address_id: ADDRESS_ID},
            success(response){
                location.reload();
            }
        });
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Show add-address modal on click
    $('.add-address__delivery').on('click', function() {
        $('.delivery-backdrop').fadeIn('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close add-address modal on click outside
    $('.delivery-backdrop').on('click', function() {
        $(this).fadeOut('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Stop click inside from closing add-address modal
    $('.delivery-modal').on('click', function(e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close add-address modal from top right "x" button
    $('.close-delivery-modal').on('click', function() {
        $('.delivery-backdrop').fadeOut('fast');
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to submit addresses
    $('.submit-delivery').on('click', function() {

        var ALL_COMPLETED = true;

        $('.delivery-form-input').each( function( index ) {
            if ( $(this).val().length < 1 ) {
                $(this).addClass('input-warning');
                $(this).next().show();
                ALL_COMPLETED = false;
            }
        });

        var PRIMARY;

        if ($('#primary-delivery').is(':checked')) {
            PRIMARY = 1;
        } else {
            PRIMARY = 0;
        };

        if ( ALL_COMPLETED == true ) {
            $.ajax({
                url: '/addresses/add',
                method: 'POST',
                data: {
                    user_id: USER_ID,
                    first_name: $('.delivery-first-name').val(),
                    last_name: $('.delivery-last-name').val(),
                    phone_number: $('.delivery-phone-number').val(),
                    state: $('.delivery-state').val(),
                    city: $('.delivery-city').val(),
                    address: $('.delivery-address').val(),
                    address_type: 'delivery',
                    primary: PRIMARY,
                },
                success(response) {}
            });

            $('.delivery-modal')
            .html('')
            .append(
                $('<div>')
                .addClass('thanks')
                .append(
                    $('<p>'),
                    $('<p>').text('Address saved!'),
                    $('<p>').text('you will be redirected')
                )
            );

            setTimeout( function() {
                location.reload();
            }, 1000);
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Removes input warning on click
    $('.form-input').on('click', function() {
        $(this).removeClass('input-warning')
        $(this).next().hide();
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Fill delivery address cards
    function fillDeliveryAddress( address_id, first_name, last_name, phone_number, address, city, state, primary) {
        const DELIVERY_ADDRESS =
            $('<div>')
            .addClass('delivery')
            .append(
                $('<div>')
                .addClass('delivery-details')
                .append(
                    $('<div>')
                    .addClass('delivery-details__logo')
                    .append(
                        $('<span>')
                    ),
                    $('<div>')
                    .addClass('delivery-details__info')
                    .append(
                        $('<p>').text(first_name + ' ' + last_name),
                        $('<p>').text(phone_number),
                        $('<p>').text(address),
                        $('<p>').text(city + ', ' + state)
                    )
                ),
                $('<div>')
                .addClass('delivery-buttons')
                .append(
                    $('<div>')
                    .append(
                        $('<button>')
                        .addClass('delivery-buttons__edit')
                        .text('edit')
                        .attr({
                            value: address_id
                        }),
                    )
                )
            )

            if ( primary != 1 ) {
                DELIVERY_ADDRESS.find('.delivery-buttons')
                .append(
                    $('<div>')
                    .append(
                        $('<button>')
                        .addClass('delivery-buttons__delete')
                        .text('delete')
                        .attr({
                            value: address_id
                        }),
                        $('<button>')
                        .addClass('delivery-buttons__primary')
                        .text('primary')
                        .attr({
                            value: address_id
                        })
                    )
                )
            } else (
                DELIVERY_ADDRESS.find('.delivery-details')
                .append(
                    $('<div>').addClass('is-primary')
                )
            )
            return DELIVERY_ADDRESS;
        }
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to get delivery addresses
    $.ajax({
        url: '/addresses/delivery/fetch',
        method: 'GET',
        success(response) {

            if( response.length == 0 ) {
                $('#primary-delivery')
                .prop('checked', true)
                .parent()
                .css({ pointerEvents: 'none'})
            }

            $('.delivery-area__cards').removeClass('load')

            $.each(response, function(index, address) {
                $('.delivery-area__cards')
                .append(
                    fillDeliveryAddress(
                        address.id,
                        address.first_name,
                        address.last_name,
                        address.phone_number,
                        address.address,
                        address.city,
                        address.state,
                        address.primary
                    )
                )
            });
        }
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to remove address
    $(document).on('click', '.delivery-buttons__delete', function() {
        const ADDRESS_ID = $(this).val();
    
        $.ajax({
            url: '/addresses/remove',
            method: 'POST',
            data: { address_id: ADDRESS_ID},
            success(response){
                location.reload();
            }
        });
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // AJAX call to make delivery address primary
    $(document).on('click', '.delivery-buttons__primary', function() {
        const ADDRESS_ID = $(this).val();

        $.ajax({
            url: '/addresses/delivery/primary',
            method: 'POST',
            data: { address_id: ADDRESS_ID},
            success(response){
                location.reload();
            }
        });
    });
    ////////////////////////////////////////////////////////////////////



});