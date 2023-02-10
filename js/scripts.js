$(document).ready(function(){

    
    
    
    //category action
    $('.categories-tiles-box .item-tile-category[data-block]').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.categories-inner-box').slideUp(200);
        } else {
            let dataBlock = $(this).attr('data-block');
            $('.item-tile-category[data-block].active').removeClass('active');
            $(this).addClass('active');
            $('.categories-inner-box').fadeOut(0);
            $('.categories-inner-box[data-block="'+dataBlock+'"]').slideDown(200);
        }
        return false;
    })
    if (!!$('.categories-tiles-box').offset()) {
        $('.categories-tiles-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-main ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-main ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }
    


    //types-slider-box
    if (!!$('.types-slider-box').offset()) {
        $('.types-slider-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-main ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-main ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    
});
$(window).on('load', function () {
    /*let anchorTop = $('.categories-tiles-box').offset().top;
    console.log(anchorTop)*/
    //more action
    $('.more-action-wrap .btn').on('click', function() {
        
        if ($(this).parent().parent().find('.items-wrap').hasClass('show-all')) {
            $(this).parent().parent().find('.items-wrap').removeClass('show-all');
            if ($(this).hasClass('js-more-hidden')) {
                $('.item-tile-category.active').click();
                /*$('html, body').stop().animate({
                    scrollTop: anchorTop
                }, 1000);*/
            }
        } else {
            $(this).parent().parent().find('.items-wrap').addClass('show-all');
        }
        return false;
    })
});