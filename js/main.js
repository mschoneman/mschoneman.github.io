$(document).ready(function () {
    $('a.cv-button').click(function (e) {
        if ($('.panel-cover').hasClass('data-cv-clicked')) return;
        $('.panel-cover').addClass('data-cv-clicked');
        if (window.matchMedia('(max-width:960px)').matches) {
            $('.panel-cover').addClass('panel-cover--collapsed');
            $('.content-wrapper').addClass('animated slideInRight');
        } else {
            currentWidth = $('.panel-cover').width()
            $('.panel-cover').css('max-width', currentWidth);
            $('.panel-cover').animate({ 'max-width': '530px', 'width': '35%' });
        }
    });
    if (window.location.hash && window.location.hash == '#cv') {
        $('.panel-cover').addClass('data-cv-clicked');
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.content-wrapper').css("display", "block");
    }
    $('.btn-mobile-menu').click(function () {
        $('.navigation-wrapper').toggleClass('visible animated slideInDown');
        $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
    });
    $('.navigation-wrapper .cv-button').click(function () {
        $('.navigation-wrapper').toggleClass('visible');
        $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
        $('.content-wrapper').css("display", "block");
    });

    window.addEventListener('resize', function () {
        if (!$('.panel-cover').hasClass('data-cv-clicked')) return;
        if (window.matchMedia('(max-width:960px)').matches) {
            $('.panel-cover').removeAttr('style');
            $('.panel-cover').addClass('panel-cover--collapsed');
            $('.navigation-wrapper').removeClass('visible');
            $('.btn-mobile-menu__icon').removeClass('icon-x-circle animated fadeIn');
            $('.btn-mobile-menu__icon').addClass('icon-list animated fadeIn');
        } else {
        }
    }, false);
})