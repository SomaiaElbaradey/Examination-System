$(document).ready(function () {
    $('body').append("<div id='mainDiv'></div>");
    $('#mainDiv').append("<div id='firstDiv'></div>");
    $('#mainDiv').append("<div id='secondDiv'></div>");
    var inputInfo = {
        type: ['text', 'text', 'text', 'text', 'text'],
        placeHolder: ['First name', 'Last name', 'Email', 'Password', 'Confirm password '],
        icons: ['<i class="fas fa-user"></i>', '<i class="far fa-user"></i>', '<i class="fas fa-envelope"></i>', '<i class="fas fa-lock"></i>', '<i class="fas fa-lock"></i>',]
    }
    for (i = 0; i < 5; i++) {
        $('#secondDiv').append('<span>' + inputInfo.icons[i] + '<input id="input_' + i + ' "type="' + inputInfo.type[i] + '" value="' + inputInfo.placeHolder[i] + '"></span>')
    }
    $('#secondDiv').append('<input type="button" value="Register">')

    $('body').css({

        'height': '500px',
        'background': 'url("img/2.jpg")',
        'background-size': 'cover',

    })

    $('#mainDiv').css({
        'margin': '70px auto 0px auto',
        'width': '50%',
        'border-radius': '20px',
        'height': '400px',
        'top': '50 %',
        'background': 'transparent',
        'border': '2px dotted #fbd75c',
    })

    $('#firstDiv').css({
        'display': 'inline-block',
        'width': '50%',
        'margin-right': '20px',
    })

    $('#secondDiv').css({

        'display': 'inline-block',
        'position': "absolute",
        'top': '0 px',

    })

    $('input[type="text"]').css({
        'outline': 'none',
        'border': 'none',
        'background': 'transparent',

    })


    $('i').css({
        'margin-right': '20px',
    })

    $('span').css({
        'margin': '40px 0px 40px 40px',
        'display': 'table',
        'border-bottom': '1px solid #d4cdb3',
    })

    $('input[type="button"]').css({
        'display': 'block',
        'margin': '20px auto 20px auto',
        'border': 'none',
        'width': '100px',
        'border-radius': '10px',
        'background-color': '#fbd75c',
    })

    var iconColors = ['#fbd75c', '#fbd75c', '#fbd75c', '#fbd75c', '#fbd75c']
    $('i').each(function (index) {
        $(this).css({
            'color': iconColors[index],

        })

        $($('input[type="text"]')[index]).css({
            'color': iconColors[index],
            'opacity': '50%'
        })
    })





    $('input[type="text"]').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).val(inputInfo.placeHolder[eval((this.id.split('_')[1]))])
            $(this).css({
                'opacity': '50%',
                'color': '#fbd75c',
            })
        }
    });

    $('input[type="text"]').on('click', function (index) {

        if ($(this).val() === inputInfo.placeHolder[0] || $(this).val() === inputInfo.placeHolder[1] || $(this).val() === inputInfo.placeHolder[2] || $(this).val() === inputInfo.placeHolder[3] || $(this).val() === inputInfo.placeHolder[4]) {
            $(this).val('');
        }

        $(this).css({
            'opacity': '100%'
        })

        $('.errors').remove();

        $('#img1').css({
            'display': 'inline-block',
        })
    })


    $('input[type="text"]').on('keypress', function (index) {

        if ($(this).val() === inputInfo.placeHolder[0] || $(this).val() === inputInfo.placeHolder[1] || $(this).val() === inputInfo.placeHolder[2] || $(this).val() === inputInfo.placeHolder[3] || $(this).val() === inputInfo.placeHolder[4]) {
            $(this).val('');
        }
        $(this).css({
            'opacity': '100%',
        })

    })




    $('#firstDiv').append("<img id='img1' src='img/1.jpg'>")
    $('#img1').css({
        'width': '100%',
        'height': $('#mainDiv').height(),
        'border-top-left-radius': '20px',
        'border-bottom-left-radius': '20px',
        'margin': '0px',
        'filter': 'brightness(65%) blur(0px)',

    })


    var regexname = /^[a-zA-Z]{3,50}$/;
    var regexemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    $('input[type="button"]').click(function () {

        $('.errors').remove();

        var err = 0;
        var nameFirstCheck = $($('input')[0])
        if (nameFirstCheck.val() == "" || !regexname.test(nameFirstCheck.val()) || nameFirstCheck.val() === 'First name') {
            $('#firstDiv').append("<span class='errors'><font color='red'>**</font>Your first name should be letters only with length from 3 charchter to 50</span>")
            err = 1;
        }

        var nameLastCheck = $($('input')[1])
        if (nameLastCheck.val() == "" || !regexname.test(nameLastCheck.val()) || nameLastCheck.val() === 'Last name') {
            $('#firstDiv').append("<span class='errors'><font color='red'>**</font>Your last name should be letters only with length from 3 charchter to 50</span>")
            err = 1;
        }


        var emailCheck = $($('input')[2])
        if (emailCheck.val() == "" || !regexemail.test(emailCheck.val())) {
            $('#firstDiv').append("<span class='errors'><font color='red'>**</font>Enter a valid email </span>");
            err = 1;

        }

        var passwordCheck = $($('input')[3])
        if (passwordCheck.val() == "" || passwordCheck.val().length < 8 || passwordCheck.val() == 'Password') {
            $('#firstDiv').append("<span class='errors'><font color='red'>**</font>Enter a password any charchter and at least 8 charchter length </span>");
            err = 1;
        }


        var passwordConfirm = $($('input')[4])
        if (passwordConfirm.val() !== passwordCheck.val()) {
            $('#firstDiv').append("<span class='errors'><font color='red'>**</font>The password and the confirmation password Must be identical</span>")
            err = 1

        }


        if (err === 0) {
            var dateUsed = new Date();
            setCookie("name", nameFirstCheck.val() + ' ' + nameLastCheck.val(), dateUsed);
            setCookie("email", emailCheck.val(), dateUsed);
            setCookie("password", passwordCheck.val(), dateUsed);
            window.location.replace("Pages/loginPage.html");
        }
        else {
            $('#firstDiv').css({
                'position': 'relative',
            })

            $('#img1').css({
                'display': 'none',
            })

            $('.errors').css({
                'display': 'block',
                'color': 'white',
                'font-size': '15px',
                'margin': '40px 5px 40px 5px',
                'postion': 'relative',
            })

            $('#firstDiv').css({
                'background': 'rgba(125,161,157,50%)',
                'border-top-left-radius': '20px',
                'border-bottom-left-radius': '20px',
                'height': $('#mainDiv').height(),

            })

        }
    })




});