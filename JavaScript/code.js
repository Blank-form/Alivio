$(function (){
    $('.menu-open').click(function (){
        $('.cap_text').addClass('show-menu');
        $('.menu-open').removeClass('menu-open');
    })
}) 
$(function (){
    $('.menu-close').click(function (){
        $('.cap_text').removeClass('show-menu');
        $('.s').addClass('menu-open');
    })
}) 

$(function (){
    $('.menu-open').click(function (){
        $('.cap_btn').addClass('show-btn');
    })
}) 
$(function (){
    $('.menu-close').click(function (){
        $('.cap_btn').removeClass('show-btn');
    })
}) 