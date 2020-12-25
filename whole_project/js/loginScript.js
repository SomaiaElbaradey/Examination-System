$(document).ready(function () {
    $('body').append("<div id='mainDiv'></div>");

   $('#mainDiv').append('<span><i class="far fa-user"></i><input type="text" id="email" value="Email"></span>')
   $('#mainDiv').append('<span><i class="fas fa-lock"></i><input type="text" id="password" value="Password"></span>')
   $('#mainDiv').append('<input type="button" id="button" value="login">')

    $('body').css({
        'background':'url("../img/2.jpg")',
        'background-size':'cover',
    })
    $('input[type="text"]').css({
        'outline': 'none',
        'border': 'none',
        'background': 'transparent',
        'color':'#fbd75c',
        'opacity':'50%'
    })

    $('input[type="text"]').attr("autocomplete", "off");

    $('#mainDiv').css({       
        'margin':'200px auto 0 auto',
        'border':'2px dashed black',
        'border-style': 'dotted solid ',
        'border-color': '#fbd75c  ',
        'border-radius':'50%',
        'width':'30%' , 
        'padding':'20px',
    })

    $('span').css({
        'margin': '20px auto 20px auto',
        'display': 'table',
        'border-bottom': '1px solid #d4cdb3',
        
    })
    $('i').css({
        'margin':'0 20px 0 0',
        'color':'#fbd75c',
    })

    $('input[type="button"]').css({
        'display': 'block',
        'margin': '20px auto 20px auto',
        'border': 'none',
        'background': 'transparent',
        'border-radius':'20px',
        'color':'white'
    })

    $('input[type="button"]').hover(function(){
        $(this).css({
            'background-color':'#fbd75c',                 
            'width':'100px', 
            'color':'black',
            'outline':'20px',
        })
    },function(){
        $(this).css({
            'background':'transparent',
            'color':'white'
        })
    })

    

    $('input[type="text"]').on('click',function (index) {

        if ($(this).val() === 'Email' || $(this).val() === 'Password') {
            $(this).val('');
            $(this).css({
                'opacity':'100%',
            })
        }
    })

    $('input[type="text"]').on('keypress',function (index) {

        if ($(this).val() === 'Email' || $(this).val() === 'Password') {
            $(this).val('');
            $(this).css({
                'opacity':'100%',
            })
        }
    })

    $('input[type="text"]').on('blur', function () {

        if ($(this).val().trim() === '') {
            ($(this).attr('id')==='email')?$(this).val("Email"):$(this).val("Password");
            $(this).css({
                'opacity':'50%',
            })
                        
        }
    });

    $('input[type="button"]').click(function () {

        $('.errors').remove();
        var registeredmail=getCookie("email")[1]
        var registeredPassword=getCookie("password")[1]
        console.log(registeredmail)
        var err=0;
        if($($('input')[0]).val()!==registeredmail)
        {
            $($('input')[0]).parent().parent().parent().append('<span class="errors"><font color="red">**</font>This email isn\'t registed</span>')
            err=1;
        }

        if($($('input')[1]).val()!==registeredPassword)
        {
           $($('input')[1]).parent().parent().parent().append('<span class="errors"><font color="red">**</font>This is inncorrect password</span>')
            err=1
        }

        if(err===0){
            window.location.replace("exam.html");    
        }
        $('.errors').css({            
            'display': 'table',
            'color': 'white',
            'margin':'0 auto 0 auto',
        })


    })
  
});