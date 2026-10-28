$(document).ready(function() {
////////////////////////////////////////////////////////////
// LOGIN first step logic flow
////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////
    // Prevents browser auto-fill pop-up, works 95% of times
    focusInput(500);
    ////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////
    // Prevents "Continue" button default behavior
    $('.LFS-continue').on('click', function(e) { e.preventDefault(); });
    ////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////
    // LFS main logic flow
    $(".LFS-continue").click(
        function () {


            // If email field is empty
            if ( !$('.emailForm').val() ) {
                $('.emailForm').css({
                    boxShadow: '0 0 0 3px var(--red-light-sh)',
                    border: '1px solid var(--red-darker)'
                });
                $('.LFS-warning').show();
                $('.LFS-input-wrapper').addClass('error-logo');
            

            // If email field is not empty
            } else {
                checkEmail();
            }
        });


        // Function for silent retry with new csrf token
        function checkEmail() {


        // Ajax call to backend
        $.ajax({
            url: '/client/check-email',
            method: 'POST',
            data: {
                email: $('.emailForm').val(),
                _token: $('meta[name="csrf-token"]').attr('content')
            },


            // Checks database response
            success: function(response) {


                // If email exists in database and user is client
                if ( response.exists === true && response.role === 'client' ) {
                    $('.LSS-mainAccountEmail').text($('.emailForm').val());
                    $(".loginSecondStep").fadeIn('slow', function() { focusInput(1); });
                    $(".loginFirstStep").hide();


                // If email exists, but user is not client
                } else if ( response.exists === true && response.role !== 'client' ) {
                    window.location.href = "/seller-login";


                // If email doesn't exist in database
                } else {
                    $('.RFS-mainAccountEmail').text($('.emailForm').val());
                    $(".registerFirstStep").fadeIn('slow', function() { focusInput(1); });
                    $(".loginFirstStep").hide();
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
    };
    ////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////
    // Removes warning if user clicks field
    $(document).on('click', function(e) {
        if ( $(e.target).closest('.emailForm').length ) {
            $('.emailForm').css({ boxShadow: '', border: '' });
            $('.emailForm').parent().removeClass('error-logo')
            $('.LFS-warning').hide();
        };
    });
    ////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// LOGIN second step logic flow
////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Prevents "Continue" button from working if events not checked
    $('.LSS-continue').on('click', function(e) { e.preventDefault(); });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // LSS contiune button logic
    $(".LSS-continue").click(
        function () {


            // If password field empty
            if ( !$('.passForm').val() ) {
                $('.passForm').css({
                    boxShadow: '0 0 0 3px var(--red-light-sh)',
                    border: '1px solid var(--red-darker)'
                });
                
                $('.LSS-warning').show();
                $('.LSS-input-wrapper').addClass('error-logo');
            
            
            // If email field is not empty
            } else {
                handleLogin() 
            }
        });


        // Function for silent retry with new csrf token
        function handleLogin() {


                // Ajax call to backends
                $.ajax({
                    url: '/client-login',
                    method: 'POST',
                    data: {
                        email: $('.emailForm').val(),
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
                            boxShadow: '0 0 0 3px var(--red-light-sh)',
                            border: '1px solid var(--red-darker)'
                        });
                        $('.LSS-warning').text("Password is incorrect")
                        $('.LSS-warning').show();
                        $('.LSS-input-wrapper').addClass('error-logo');
                    };
                }
            });
        };
    ////////////////////////////////////////////////////////////////////
        


    ////////////////////////////////////////////////////////////////////
    // "Remember me" hover info (show/hide)
    $(".rememberMeDiv").hover(
        function() { $('.rememberInfo').show(); },
        function() { $('.rememberInfo').hide(); }
    );
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // "Remember me" click check/uncheck
    $(".rememberMeDiv, .termsDiv").on('click', function(e) {
        e.preventDefault();
        const RE_ME = $(this).find('button');
        if ( RE_ME.hasClass('checked') ) {
            RE_ME.removeClass('checked').addClass('unchecked')
        } else if ( RE_ME.hasClass('unchecked') ) {
            RE_ME.removeClass('unchecked').addClass('checked')
        };
    });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // LSS back button logic
    $(".LSS-backButton").click(
        function () {
            $(".loginFirstStep").fadeIn('slow', function() { focusInput(1); });
            $(".loginSecondStep").hide();
        });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Removes and resets warning if user clicks field
    $(document).on('click', function(e) {
        if ( $(e.target).closest('.passForm').length) {
            $('.passForm').css({ boxShadow: '', border: '' });
            $('.LSS-warning').hide();
            $('.LSS-input-wrapper').removeClass('error-logo');
            $('.LSS-warning').text("Camp obligatoriu");
        };
    });
    ////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
// REGISTER first step logic flow
////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Form input classes
    const inputForms = [
        ".userNameForm",
        ".firstNameForm",
        ".lastNameForm",
        ".newPassForm", 
        ".confPassForm",
        ".terms-1" 
    ];
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Prevents "continue" button from working if events not checked
    $('.RFS-continue').on('click', function(e) { e.preventDefault(); });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // RFS Continue button logic flow
    $('.RFS-continue').click(
        function () {
            let ALL_FIELDS_COMPLETED = true;


            // Check each field
            for ( let i = 0; i < 4; i++ ) {
                if ( !$(inputForms[i]).val() ) {
                    $(inputForms[i]).css({
                        "box-shadow": "0 0 0 3px var(--red-light-sh)",
                        "border": "1px solid var(--red-darker)"
                    });
                    $(inputForms[i]).parent().addClass('error-logo');
                    $('.RFS-warning-' + (i+1) ).show()
                    ALL_FIELDS_COMPLETED = false;
                };
            };


            // Confirm password logic
            if ( $('.confPassForm').val() !== $('.newPassForm').val() ) {
                $('.confPassForm').css({
                    "box-shadow": "0 0 0 3px var(--red-light-sh)",
                    "border": "1px solid var(--red-darker)"
                });
                $('.confPassForm').parent().addClass('error-logo')
                $('.RFS-warning-5').text('Passwords must be identical')
                $('.RFS-warning-5').show();
                ALL_FIELDS_COMPLETED = false;
            };


            // Check terms box logic
            if ( !$('#terms1').hasClass('checked') && ALL_FIELDS_COMPLETED == true ) {
                $('.RFS-warning-6').show();
                $('.terms-1').css(
                    'border' , '1px solid var(--red-darker)'
                );
                ALL_FIELDS_COMPLETED = false;
            };


            // Checks if all conditions are met
            if ( ALL_FIELDS_COMPLETED == true ) {


                // Ajax call to backend to register new client 
                $.ajax({
                    url: '/client-login',
                    method: 'POST',
                    data: {
                        user_name: $('.userNameForm').val(),
                        first_name: $('.firstNameForm').val(),
                        last_name: $('.lastNameForm').val(),
                        email: $('.emailForm').val(),
                        password: $('.confPassForm').val(),
                        _token: $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function(response) {
                        window.location.href = response.redirect;
                    }
                });
            }
        });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // RFS back button logic
    $(".RFS-backButton").click(
        function () {
            $(".loginFirstStep").fadeIn('slow', function() { 
                focusInput(1); 
            });
            $(".registerFirstStep").hide();
        });
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Removes warning if user clicks field
    for ( let i = 0; i < 4; i++ ) {
        $(document).on('click', function(e) {
            if ( $(e.target).closest(inputForms[i]).length ) {
                $(inputForms[i]).css({
                    "box-shadow": "",
                    "border": ""
                });
                $(inputForms[i]).parent().removeClass('error-logo')
                $('.RFS-warning-' + (i+1) ).hide();
            };
        });
    };
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    // Alternative ways to login
    $(document).on('click', '.alternate-login', function(e) {
        e.preventDefault();
        const url = $(this).attr('href');
        const width = 800;
        const height = 600;

        const left = ((screen.width - width) / 2) - 300;
        const top = ((screen.height - height) / 2) - 150;

        window.open(url,'myWindow',`width=${width},height=${height},left=${left},top=${top}`);
    });
    ////////////////////////////////////////////////////////////////////



});



////////////////////////////////////////////////////////////////////
// Auto-focus input function with parameter
function focusInput( $param ) {
    requestAnimationFrame( function() {
        setTimeout( function() {
            $('.auto-focused').focus();
        }, $param);
    });
};
////////////////////////////////////////////////////////////////////