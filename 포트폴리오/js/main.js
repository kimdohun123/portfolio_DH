
$(function () {

    //1. 마우스휠 움직이기
    //2. tab>li 클릭했을 때 순서에 맞게 cont 보여주기
    //3. menu_toggle 클릭했을 때 this와 menu class(active, show)추가하기


    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('#wrap>section').on('mousewheel', function (e, d) {
        if (d > 0) {
            let prv = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop: prv
            });
        } else if (d < 0) {
            let nxt = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop: nxt
            })
        }
    });

    $('.tab li').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont>div').eq(i).css({ display: 'flex' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('#menu_toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('#menu').toggleClass('show');
    })

    let title = $('#title').offset().top;
    let intro = $('#intro').offset().top;
    let work = $('#work').offset().top;
    let contact = $('#contact').offset().top;

    $(window).on('scroll', function () {
        let scr = $(this).scrollTop();
        if (scr <= title) {
            $('#menu_toggle').find('span').css({ backgroundColor: '#fff' });
            $('#menu').css({ color: '#fff' });
        } else if (scr > title && scr <= intro) {
            $('#menu_toggle').find('span').css({ backgroundColor: '#000' });
            $('#menu').css({ color: '#000' });
        } else if (scr > intro && scr <= work) {
            $('#menu_toggle').find('span').css({ backgroundColor: '#fff' });
            $('#menu').css({ color: '#fff' });
        } else if (scr > work && scr <= contact) {
            $('#menu_toggle').find('span').css({ backgroundColor: '#000' });
            $('#menu').css({ color: '#000' });
        }
    });

    $('#goTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('#menu li a').on('click', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        });
    })




























}); // html, css문서 다 읽고 제일 마지막에 읽으라는 opening 구문