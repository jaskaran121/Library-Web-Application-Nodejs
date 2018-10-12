(function ($) {

    "use strict";


    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function () {
        $(this).on('blur', function () {
            if (validate(this) == false) {
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

 $('#sign-in-admin').on('submit', function ($event) {
        $event.preventDefault();
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (check == true) {
            $.ajax({
                type: "POST",
                url: "/api/login",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    "user": $("#user").val(),
                    "password": $("#password").val()
                }),
                success: function (data) {

                    document.cookie = "flag=true";

                    console.log(document.cookie);

                    window.location.replace("adminhome");

                    console.log(document.cookie);
                },
                error: function (error) {
                    console.log(error);
                    window.alert(error.responseJSON.error);
                }
            });
        }
    });

})(jQuery);