$(document).ready(function() {
////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////
    // Logo refresh
    $('.headLogoArea').on('click', function() {
        window.location.href = "/seller-login";
    });
    ////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////
    // Main login form animation
    $('.mainLoginArea')
    .css({ opacity: '1', transform: 'translateY(-80px)' });
    ////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////
    // Toggle menu click
    $(document).on('click', '.headLangArea', function(e) {
        e.stopPropagation();
        if ( $('.carret').hasClass('down') ) {
            $('.down').removeClass('down').addClass('up');
        } else if ( $('.carret').hasClass('up' )) {
             $('.up').removeClass('up').addClass('down');
        }
        $('.langSelect-area').slideToggle(100);
    });
    ////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Close menu when clicking anywhere else
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.langSelect-area').length) {
            $('.up').removeClass('up').addClass('down');
            $('.langSelect-area').slideUp(100);
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////
    // Switch language based on selection
    $(document).on('click', '.lang-btn', function() {
        if ( $(this).hasClass('es') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-mx"></span>ES</p>')
        } else if ( $(this).hasClass('fr') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-fr"></span>FR</p>')
        } else if ( $(this).hasClass('en') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-us"></span>EN</p>')
        } else if ( $(this).hasClass('de') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-de"></span>DE</p>')
        } else if ( $(this).hasClass('pl') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-pl"></span>PL</p>')
        } else if ( $(this).hasClass('cn') ) {
            $('.headLangArea').html('<p class="carret up"><span class="fi fi-cn"></span>CN</p>')
        };
        $('.langSelect-area').slideUp(100);
        $('.up').removeClass('up').addClass('down');
    });
    ////////////////////////////////////////////////////////////



// LOGIN first step logic flow
////////////////////////////////////////////////////////////


    // LFS specific title change
    $('.loginTitle').text('User authentication');


    // Prevents "Continue" button from working if events not checked
    $('.LFS-continue').on('click', 
        function(e) { e.preventDefault(); });

    
    // LFS main logic flow
    $(".LFS-continue").click(
        function () {


            // If email field is empty
            if ( !$('.LFS-emailForm').val() ) {
                $('.LFS-emailForm').css({
                    "box-shadow": "0 0 0 3px var(--red-light-sh)",
                    "border": "1px solid var(--red-darker)"
                });
                $('.LFS-warning').show();

            
            // If email field is not empty
            } else {
                checkEmail();
            }
        });


        // Function for silent retry with new csrf token
        function checkEmail() {


            // Ajax call to backend
            $.ajax({
                url: '/seller/check-email',
                method: 'POST',
                data: {
                    email: $('.LFS-emailForm').val(),
                    _token: $('meta[name="csrf-token"]').attr('content')
                },


                // Checks database response
                success: function(response) {


                    // If email exists in database and user is seller
                    if ( response.exists === true && response.role === 'seller' ) {
                        $(".loginSecondStep").fadeIn('fast');
                        $(".loginFirstStep").hide();
                        
                        
                        // Login first stept gets locked in
                        $('.LSS-emailForm')
                        .prop("disabled", true)
                        .val($('.LFS-emailForm').val())
                        .css({"background-color": "var(--blue-lightest)"});


                        // Previous button animation
                        $('.LSS-previous').css({"width": "10px", "height": "5px"});
                        $('.LSS-previous').animate({ width: '77px', height: '35px' }, 300);
                        $(".LSS-previous").text('Previous');


                    // If email exists in database and user is admin
                    } else if ( response.exists === true && response.role === 'admin' ) {
                        $(".loginSecondStep").fadeIn('fast');
                        $(".loginFirstStep").hide();
                        
                        
                        // Login first stept gets locked in
                        $('.LSS-emailForm')
                        .prop("disabled", true)
                        .val($('.LFS-emailForm').val())
                        .css({"background-color": "var(--blue-lightest)"});


                        // Previous button animation
                        $('.LSS-previous').css({"width": "10px", "height": "5px"});
                        $('.LSS-previous').animate({ width: '77px', height: '35px' }, 300);
                        $(".LSS-previous").text('Previous');

                        
                    // If email exists in database and user is client
                    } else if ( response.exists === true && response.role === 'client' ) {
                        window.location.href = "/client-login";


                    // If email doesn't exist in database
                    } else {
                        $(".registerFirstStep").fadeIn('fast');
                        $(".loginFirstStep").hide();


                        // Login first stept gets locked in
                        $('.RFS-emailForm')
                        .prop("disabled", true)
                        .val($('.LFS-emailForm').val())
                        .css({"background-color": "var(--blue-lightest)"});
                    };
                },


                // Silently get a new token, then retry
                error: function(xhr) {
                    if (xhr.status === 419) {
                        $.get('/csrf-token', function (response) {
                            $('meta[name="csrf-token"]').attr('content', response.token);
                            checkEmail();
                        });
                    };
                }
            });
        }


    // Removes and resets warning if user clicks field
    $(document).on('click', function(e) {
        if ( $(e.target).closest('.LFS-emailForm').length ) {
            $('.LFS-emailForm').css({
                "box-shadow": "",
                "border": ""
            });
            $('.LFS-warning').hide();
            $('.LSS-warning').text('This field is required');
        }
    });


////////////////////////////////////////////////////////////
// LOGIN second step logic flow
////////////////////////////////////////////////////////////


    // LSS previous button logic
    $('.LSS-previous').click( function () {
        $(".loginFirstStep").fadeIn('fast');
        $('.loginSecondStep').hide();
    });


    // Prevents "connect" button from working if events not checked
    $('.LSS-connect').on('click', 
        function(e) { e.preventDefault(); });



    // LSS contiune button logic
    $('.LSS-connect').click( function () {


        // If password field is empty
        if ( !$('.passForm').val() ) {
            $('.passForm').css({
                "box-shadow": "0 0 0 3px var(--red-light-sh)",
                "border": "1px solid var(--red-darker)"
            });
            $('.LSS-warning').show();


            // If email field is not empty
            } else {
                handleLogin() 
            }
        });


        // Function for silent retry with new csrf token
        function handleLogin() {


            // Ajax call to backend
            $.ajax({
                url: '/seller-login',
                method: 'POST',
                data: {
                    email: $('.LFS-emailForm').val(),
                    password: $('.passForm').val(),
                    _token: $('meta[name="csrf-token"]').attr('content')
                },


                // If password is correct
                success: function(response) {
                    window.location.href = response.redirect;
                },


                // Silently get a new token, then retry
                error: function(xhr) {
                    if (xhr.status === 419) {
                        $.get('/csrf-token', function(response) {
                            $('meta[name="csrf-token"]').attr('content', response.token);
                        });
                    };

                    
                    // If password is incorrect
                    if ( xhr.status === 401 ) {
                        $('.passForm').css({
                        "box-shadow": "0 0 0 3px var(--red-light-sh)",
                        "border": "1px solid var(--red-darker)"
                        });
                        $('.LSS-warning').text('Incorrect password entered');
                        $('.LSS-warning').show();
                    };
                }
            });
        };
                

                
    // Prevents "previous" button from default action
    $('.LSS-previous').on('click', 
        function(e) { e.preventDefault(); });


    // Removes and resets warning if user clicks field
    $(document).on('click', function(e) {
        if ( $(e.target).closest('.passForm').length ) {
            $('.passForm').css({
                "box-shadow": "",
                "border": ""
            });
            $('.LSS-warning').hide();
            $('.LSS-warning').text('This field is required');
        }
    });


////////////////////////////////////////////////////////////
// REGISTER first step logic flow
////////////////////////////////////////////////////////////

        
    // Form input classes
    const inputForms = [
        ".compNameForm", 
        ".vatNoForm", 
        ".euidNoForm", 
        ".bankAccForm", 
        ".newPassForm",
        ".confPassForm"
    ];


    // Prevents "previous" default logic
    $('.RFS-previous').on('click', 
        function(e) { e.preventDefault(); });


    // RFS Previous button logic flow
    $('.RFS-previous').click(
        function () {
            $(".loginFirstStep").fadeIn('fast');
            $('.registerFirstStep').hide();
        });    

    
    // Prevents "register" button from working if events not checked
    $('.RFS-register').on('click', 
        function(e) { e.preventDefault(); });


    // RFS Register button logic flow
    $('.RFS-register').click(
        function () {
            let ALL_FIELDS_COMPLETED = true;


            // Check each field
            for ( let i = 0; i < 5; i++ ) {
                if ( !$(inputForms[i]).val() ) {
                    $(inputForms[i]).css({
                        "box-shadow": "0 0 0 3px var(--red-light-sh)",
                        "border": "1px solid var(--red-darker)"
                    });
                    $('.RFS-warning-' + (i+1) ).show();
                    ALL_FIELDS_COMPLETED = false;
                };
            };


            // Confirm password logic
            if ( $('.confPassForm').val() !== $('.newPassForm').val() ) {
                $('.confPassForm').css({
                    "box-shadow": "0 0 0 3px var(--red-light-sh)",
                    "border": "1px solid var(--red-darker)"
                });
                $('.RFS-warning-6').text('Passwords must be identical')
                $('.RFS-warning-6').show();
                ALL_FIELDS_COMPLETED = false;
            }


            // Checks if all conditions are met
            if ( ALL_FIELDS_COMPLETED == true ) {

                
                // Ajax call to backend to register new client 
                $.ajax({
                    url: '/seller-login',
                    method: 'POST',
                    data: {
                        user_name: 'a',
                        email: $('.RFS-emailForm').val(),
                        password: $('.confPassForm').val(),
                        company_name: $('.compNameForm').val(),
                        vat_number: $('.vatNoForm').val(),
                        euid_number: $('.euidNoForm').val(),
                        bank_account: $('.bankAccForm').val(),
                        _token: $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function(response) {
                        window.location.href = response.redirect;
                    }
                });
            }
        });


    // Removes and resets warning if user clicks field
    for ( let i = 0; i < 6; i++ ) {
        $(document).on('click', function(e) {
            if ( $(e.target).closest(inputForms[i]).length ) {
                $(inputForms[i]).css({
                    "box-shadow": "",
                    "border": ""
                });
                $('.RFS-warning-' + (i+1) ).hide();
                $('.LSS-warning').text('This field is required');
            };
        });
    };
});