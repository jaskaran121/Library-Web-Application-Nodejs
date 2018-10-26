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

                   // console.log(document.cookie);
                },
                error: function (error) {
                    console.log(error);
                    window.alert(error.responseJSON.error);
                }
            });
        }
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
            $(this).parent().removeClass('true-validate');
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>')
        $('.btn-hide-validate').each(function () {
            $(this).on('click', function () {
                hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }

    //Sign-up for admin
    var input = $('.validate-input .input100');

    $('#sign-up-admin').on('submit', function ($event) {
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
                url: "/api/signup/admin",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    "user": $("#user").val(),
                    "password": $("#password").val(),
                    "FirstName": $("#FirstName").val(),
                    "LastName": $("#LastName").val(),
                    "Email": $("#Email").val(),
                    "PhoneNumber": $("#PhoneNumber").val()
                }),

                success: function (data) {
                    window.alert("Signup-Successfull");
                    window.location.replace("adminhome");
                },
                error: function (error) {
                    console.log(error);
                    window.alert(error.responseJSON.error);
                }

            });
        }
    });

    //Sign-in for student
    var input = $('.validate-input .input100');

    $('#sign-in-student').on('submit', function ($event) {
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
                url: "/api/student/login",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    "UserName": $("#user").val(),
                    "Password": $("#password").val()
                }),
                success: function (data) {
                    console.log(data.id);
                    window.alert("Login-Successfull");
                   // document.write(JSON.stringify(data.id));
                },
                error: function (error) {
                    window.alert(error.responseJSON.error);
                }
            });
        }
    });
    //Sign-up for student
    var input = $('.validate-input .input100');

    $('#sign-up-student').on('submit', function ($event) {
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
                url: "/api/signup/student",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    "FirstName": $("#FirstName").val(),
                    "LastName": $("#LastName").val(),
                    "UserName": $("#UserName").val(),
                    "Password": $("#Password").val(),
                    "Email": $("#Email").val(),
                    "PhoneNumber": $("#PhoneNumber").val()
                }),
                success: function (data) {
                    window.alert("Sign-Up Succesfull");
                    window.location.replace("studentlogin");
                },
                error: function (error) {
                    console.log(error);
                    window.alert(error.responseJSON.error);
                }
            });
        }
    });


    //View active users
    $('#admin-home').on("click", function ($event) {
         $event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/api/view/students",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log(JSON.stringify(data.id));
                document.write(JSON.stringify(data.id));
            },
            error: function (error) {
                console.log(error);
                window.alert(error.responseJSON.error);
            }
        });
    });

    var input = $('#validate-input .input100');
//console.log(input);
    $('#create-new-entry-book').on("click", function ($event) {
        $event.preventDefault();
        var check = true;
//console.log("New book created");
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (check == true) {
          
            $.ajax({
                type: "POST",
                url: "/api/create/book",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    "Title": $("#Title").val(),
                    "Author": $("#Author").val(),
                    "Format": $("#Format").val(),
                    "Pages": $("#Pages").val(),
                    "Publisher": $("#Publisher").val(),
                    "Language": $("#Language").val(),
                    "ISBN10": $("#ISBN10").val(),
                    "ISBN13": $("#ISBN13").val()
                }),
                success: function (data) {
                    window.alert("Created Entry Successfully");
                    window.location.replace("adminhome");
                },
                error: function (error) {
                    console.log(error);
                    window.alert(error.responseJSON.error);
                }
            });
        }
    });

    //Entry for magazine
    var input = $('#validate-input-Magazine .input100');
//console.log(input);
    $('#create-new-entry-Magazine').on("click", function ($event) {
        $event.preventDefault();
        var check = true;
//console.log("New book created");
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (check == true) {
            $.ajax({
            type: "POST",
                url: "/api/create/magazine",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    "Title": $("#Title-Magazine").val(),
                    "Publisher": $("#Publisher-Magazine").val(),
                    "Language": $("#Language-Magazine").val(),
                    "ISBN10": $("#ISBN10-Magazine").val(),
                    "ISBN13": $("#ISBN13-Magazine").val()
                }),
                success: function (data) {
                    window.alert("Created Entry Successfully");
                    window.location.replace("adminhome");
                },
                error: function (error) {
                    console.log(error);
                    window.alert(error.responseJSON.error);
                }
            });
        }
    });

    //Entry for movie
    var input = $('#validate-input-Movie .input100');
//console.log(input);
    $('#create-new-entry-Movie').on("click", function ($event) {
        $event.preventDefault();
        var check = true;
//console.log("New book created");
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (check == true) {
            $.ajax({
            type: "POST",
                url: "/api/create/movie",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    "Title": $("#Title-Movie").val(),
                    "Director": $("#Director-Movie").val(),
                    "Producers": $("#Producers-Movie").val(),
                    "Actors": $("#Actors-Movie").val(),
                    "Language": $("#Language-Movie").val(),
                    "Subtitles": $("#Subtitles-Movie").val(),
                    "Dubbed": $("#Dubbed-Movie").val(),
                    "ReleaseDate": $("#Release-Date-Movie").val(),
                    "RunTime": $("#Run-Time-Movie").val()
                }),
                success: function (data) {
                    window.alert("Created Entry Successfully");
                    window.location.replace("adminhome");
                },
                error: function (error) {
                    console.log(error);
                    window.alert(error.responseJSON.error);
                }
            });
        }
    });

    //Entry for music
    var input = $('#validate-input-Music .input100');
//console.log(input);
    $('#create-new-entry-Music').on("click", function ($event) {
        $event.preventDefault();
        var check = true;
//console.log("New book created");
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (check == true) {
            $.ajax({
            type: "POST",
                url: "/api/create/music",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    "Type": $("#Type-Music").val(),
                    "Title": $("#Title-Music").val(),
                    "Artist": $("#Artist-Music").val(),
                    "Label": $("#Label-Music").val(),
                    "ReleaseDate": $("#Release-Date-Music").val(),
                    "ASIN": $("#ASIN-Music").val()
                }),
                success: function (data) {
                    window.alert("Created Entry Successfully");
                    window.location.replace("adminhome");
                },
                error: function (error) {
                    console.log(error);
                    window.alert(error.responseJSON.error);
                }
            });
        }
    });
})(jQuery);