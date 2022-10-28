$(function () {

    $('.list>div').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont>div').eq(i).fadeIn().siblings().hide();

    });
    $('.cont>div .close').on('click', function(){
        $(this).parents('.wide_play').fadeOut();
    })












































})