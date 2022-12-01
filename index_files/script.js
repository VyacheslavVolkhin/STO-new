function galleryInit() {
    var t = $(".slick-gallery"),
        i = {
            infinite: !0,
            dots: !1,
            speed: 700,
            lazyLoad: "ondemand",
            responsive: [
                {breakpoint: 1024, settings: {arrows: !0}},
                {breakpoint: 640, settings: {arrows: !1}},
            ],
        };

    function e(t) {
        var e = $(t),
            n = e.parent().data("gal-slider");
        $("[data-gal-id=" + n + "]").data("gal");
        let l = $(t).data("rows") || !1;
        l ? $.extend(!0, i, {rows: l, slidesPerRow: a, slidesToScroll: 1}) : $.extend(!0, i, {
            slidesToShow: a,
            slidesToScroll: a
        }), e.slick(i);
    }

    if (t.length > 0) {
        var n = $(window).width(),
            a = 2;
        n > 1024 ? (a = 6) : n > 640 && (a = 4);
        for (var l = 0; l < t.length; l++) e(t[l]);
    }
}

$(document).ready(function () {
    function t(t, i) {
        var e = t.data("info");
        if (e) {
            var n = t.closest(".js-prices").find(".js-prices-result");
            if (
                (n.addClass("block-result_hide"),
                    t.closest("table").find("td.active").removeClass("active"),
                    n.find(".block-result__list").html(""),
                    $.each(e.info, function (t, i) {
                        if (null === i.name) return !0;
                        n.find(".block-result__list").append('<div class="block-result__item">\n<span class="block-result__item-title">' + i.name + ':</span>\n<span class="block-result__item-value">' + i.value + "</span>\n</div>");
                    }),
                    n.find(".block-result__price .sum").html(e.price),
                    n.removeClass("block-result_hide"),
                    t.addClass("active"),
                i && window.matchMedia("(max-width: 767px)").matches)
            )
                return void $("html, body").animate({scrollTop: n.offset().top - $(".fix-header").height() - 15}, 1e3);
        }
    }

    $("[data-gal-id]").each(function (t, i) {
        $(this).show();
        void 0 !== $(this).data("size") && parseInt($(this).data("size")) > 0 && $(this).data("size");
        var e = $(this).data("gal-id");
        0 == $('[data-gal-list="' + e + '"] ul').find("li").length && ($('[data-gal-list="' + e + '"]').hide(), $(this).parent().hide());
        $(this).data("gal").length;
        $(this).closest(".gallery-block").find(".slick-gallery li").length <= 6 && $(this).parent().hide();
    }),
        $(document).on("click", "[data-gal-id]", function (t) {
            t.preventDefault();
            var i = $(this).data("gal-id"),
                n = $('[data-gal-list="' + i + '"] ul'),
			a = n.find("li").length,
                l = $(this).data("gal"),
                o = $(this).data("up") || 0,
                s = 100,
                c = $('[data-gal-list="' + i + '"]'),
                d = $('[data-gal-slider="' + i + '"]');
            if ((d.data("hidden") || (e(c, d), d.data("hidden", !0)), void 0 !== $(this).data("size") && parseInt($(this).data("size")) > 0 && (s = $(this).data("size")), a + s >= l.length && $(this).data("up", 1).text("Свернуть"), 1 == o))
                e(c, d), d.data("hidden", !1), $(this).data("up", 0).text("Посмотреть еще"), n.find("li:gt(5)").remove(), $("html, body").animate({scrollTop: $("[data-gal-slider='" + i + "']").offset().top - 190}, 300);
            else for (var r = 0; r < l.length; r++) r >= a && r < a + s && ((m = l[r]), n.append('<li><a rel="gallery" title="' + m.title + '" href="' + m.img + '"><img src="' + m.prev_img + '" alt="' + m.title + '" /></a></li>'));
        }),

    $(".common-content table").wrap('<div class="table-container"></div>'),
        $(".art-hide").on("click", function () {
            $(this).hide();
            var t = $(this).parents(".art-item-block-right");
            return t.find(".art-item-content-crop").show(), t.find(".art-item-content-full").hide(), t.find(".art-show").show(), !1;
        }),
        $(".art-show").on("click", function () {
            $(this).hide();
            var t = $(this).parents(".art-item-block-right");
            return t.find(".art-item-content-crop").hide(), t.find(".art-item-content-full").show(), t.find(".art-hide").show(), !1;
        }),
        $(".ba-block li").on("mouseover", function () {
            $(this).find(".ba-block-text").hide(), $(this).find(".ba-block-hover, .ba-block-filter-bg").show();
        }),
        $(".ba-block li").on("mouseout", function () {
            $(this).find(".ba-block-text").show(), $(this).find(".ba-block-hover, .ba-block-filter-bg").hide();
        }),
        $(".uslugi").parent().addClass("parent-uslugi"),
        $(document).on("click", ".block-list-button li", function () {
            var t = 2,
                i = 130;
            $(this).parent().find("li").removeClass("active"),
                $(this).addClass("active"),
                void 0 !== $(this).data("time") ? (t = $(this).data("time")) : void 0 !== $(".bl-time .active").data("time") && (t = $(".bl-time .active").data("time")),
                void 0 !== $(this).data("type") ? (i = $(this).data("type")) : void 0 !== $(".bl-type .active").data("type") && (i = $(".bl-type .active").data("type")),
            $(".list_table > div").hasClass("table_" + i + "_" + t) && ($(".list_table > div").addClass("hidden"), $(".table_" + i + "_" + t).removeClass("hidden"));
        }),
        $(document).on("click", ".js-prices .table-listovki td", function () {
            t($(this), !0);
        }),
        $(document).on("change", ".js-prices .korpus > input", function () {
            t($(".js-prices .korpus > div:visible .table-listovki td.active"), !1);
        }),
        t($(".js-prices .korpus > div:visible .table-listovki td.active"), !1),
        $(document).on("click", ".tab-panel-head a", function (t) {
            $(this).parents(".tab-panel-head").find("li").removeClass("active"), $(this).parent().addClass("active");
            var i = $(this).data("img");
            return void 0 === i && (i = "#"), $(this).parents(".tab-panel").find("img").attr("src", i), !1;
        }),
        $(document).on("click", ".flexslider-main [data-url]", function (t) {
            location.href = $(this).data("url");
        }),
        $(document).on("click", ".slider-order-button", function (t) {
            t.stopImmediatePropagation();
        });
    var i = $("#otziv").data("show");

    function e(t, i) {
        t.toggle(), i.toggle();
    }

    function n() {
        if ($(window).width() <= "1023")
            $(document)
                .off("click", ".main-catalog .glyphicon")
                .on("click", ".main-catalog .glyphicon", function () {
                    return $(this).parent().find("ul").is(":visible") ? $(this).parent().find("ul").hide() : $(this).parent().find("ul").show(), !1;
                }),
                $(".main-catalog .glyphicon").show();
        else {
            $(".main-catalog .glyphicon").hide(), $(".main-catalog > ul ul").hide();
            var t = ($(".main-catalog > ul > li:first").find("ul > li").length || 0) % 5,
                i = "";
            if (t > 0) for (var e = 0; e <= 5 - t; e++) i += '<li class="not-li" style="visibility: hidden;"></li>';
            $(".min-catalog-sub-menu ul").append(i),
                $(document)
                    .off("click", ".main-catalog > ul > li ")
                    .on("click", ".main-catalog > ul li  ", function () {
                        var t = 5 - (($(this).find("ul > li").length || 0) % 5),
                            i = "";
                        if (($(".not-li").remove(), t > 0)) for (var e = 0; e < t; e++) i += '<li class="not-li" style="visibility: hidden;"></li>';
                        return $(this).find("ul").append(i), $(".min-catalog-sub-menu").html($(this).find("ul").clone().css("display", "flex")), !1;
                    });
        }
    }

    function a(t, i) {
        var e = "",
            n = $(t)
                .find("> li:eq(" + i + ") > ul")
                .find("> li"),
            a = n.size();
        row = Math.ceil(a / 5);
        for (var l = 0, o = 0; o < 5; o++) {
            var s = parseInt(l + row);
            4 == o && (s = a);
            var c = n.slice(l, s),
                d = "";
            c.each(function () {
                $(this).find("ul").size() > 0 && 0 == $(this).find("span").size() && $(this).find("> a").append('&nbsp;<span class="glyphicon glyphicon-chevron-down "></span>'), (d = d + "<li>" + $(this).html() + "</li>");
            }),
                (e = e + "<div class='cat-menu-col'><ul>" + d + "</ul></div>"),
                (l += row);
        }
        return e;
    }

    $(".block-otziv-comment li").each(function (t, e) {
        t < i && $(this).css("display", "inline-block");
    }),
        $("#otziv").on("click", function () {
            return (
                $(".block-otziv-comment li:not(:visible)").each(function (t, e) {
                    t < i && $(this).css("display", "inline-block");
                }),
                0 == $(".block-otziv-comment li:not(:visible)").size() && $(this).parent().hide(),
                    !1
            );
        }),
        $(".add-star").on("click", function () {
            !(function (t) {
                (title = document.title), (url = document.location);
                try {
                    window.external.AddFavorite(url, title);
                } catch (i) {
                    try {
                        window.sidebar.addPanel(title, url, "");
                    } catch (i) {
                        if ("object" == typeof opera) return (t.rel = "sidebar"), (t.title = title), (t.url = url), !0;
                        alert("Нажмите Ctrl-D чтобы добавить страницу в закладки");
                    }
                }
            })($(this));
        }),
        $(document).on("change", '[type="file"]', function () {
            $(this).parent().find(".name-file").html($(this).val());
        }),
        n(),
        $(window).on("resize", function () {
            n();
        }),
    $(window).width() <= "1023" && $(".main-catalog > ul > li > ul").parent().find("> a").after('<span class="glyphicon glyphicon-chevron-down"></span>'),
        $(".navbar-collapse > ul > li:not(.dropdown-cat) > ul").parent().not(".dropdown-cat").find("> a").after('<span class="ff glyphicon glyphicon-chevron-down"></span>'),
        $("[data-parent-class]").each(function () {
            $(this).attr("href", "#"), $(this).parents("li").addClass($(this).data("parent-class")), $(this).parents("li").prepend('<span class="s-icon s-icon-gamburger"></span>');
            var t = $(this).parents("li").find(" > ul"),
                i = a(t, 0);
            t.find("> li > a").append(' <span class=" glyphicon glyphicon-chevron-right "></span>');
            var e = '<div class="wrap-cat-menu"><ul>' + t.html() + '</ul><div class="cat-menu">' + i + "</div></div>";
            $(this).parent().append(e);
        }),
        $(document).on("click", ".wrap-cat-menu > ul > li", function () {
            return $(".cat-menu").html(a($(this).parent(), $(this).index())), !1;
        }),
        $(document).on("click", ".cat-menu-col  span", function (t) {
            return (
                t.stopImmediatePropagation(),
                    $(".cat-menu-col > ul > li > ul").slideUp(),
                    $(".cat-menu-col > ul  span").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down"),
                    $(".cat-menu-col a").css("color", "#404040"),
                    $(this).parent().find("+ ul").is(":visible")
                        ? ($(this).parent().css("color", "#404040"), $(this).parent().find("+ ul").slideUp(), $(this).removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down"))
                        : ($(this).parent().find("+ ul").slideDown(), $(this).parent().css("color", "red"), $(this).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up")),
                    !1
            );
        }),
        $(".common-content table").tableHover({colClass: "hover-table", rowClass: "hover-table"});
    var l = $(".navbar-collapse > ul").clone();
    $("li ", l).addClass(""),
        $("li > ul", l).parent().addClass("has-children"),
        $("li > ul", l).parent().find(".glyphicon").remove(),
        $("li > ul", l).parent().find(".wrap-cat-menu").remove(),
        $("li > ul", l).addClass("is-hidden").prepend('<li class="go-back"><a href="#0">Назад</a></li>'),
        $("li > ul", l).parent().find("> a").append("<span></span>");
    var o = l.html();
    $(".cd-dropdown-content").html(o),
        $(document).on("click", ".cd-dropdown-content [data-href]", function () {
            return $(this).find("span").click(), !1;
        }),
        $(".menu-icon").on("click", function (t) {
            t.preventDefault(), d();
        }),
        $(".cd-dropdown .cd-close").on("click", function (t) {
            t.preventDefault(), d();
        }),
        $(document).on("click", ".has-children > a > span", function (t) {
            t.preventDefault(), t.stopImmediatePropagation(), $(this).parent().next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("move-out");
        });
    var s,
        c = $(".cd-dropdown-wrapper").hasClass("open-to-left") ? "left" : "right";

    function d() {
        var t = !$(".cd-dropdown").hasClass("dropdown-is-active");
        console.log(t),
            $(".cd-dropdown").toggleClass("dropdown-is-active", t),
        t ||
        $(".cd-dropdown").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
            $(".has-children ul").addClass("is-hidden"), $(".move-out").removeClass("move-out"), $(".is-active").removeClass("is-active");
        });
    }

    function r() {
        $(document).scrollTop() > 100
            ? ($("#totop").fadeIn(), $(".fix-header").hasClass("fix-header-visible") || $(".fix-header").addClass("fix-header-visible"))
            : ($(".fix-header").removeClass("fix-header-visible"), $(".fix-header").show(), $("#totop").fadeOut());
    }

    $(".cd-dropdown-content").menuAim({
        activate: function (t) {
            $(t).children().addClass("is-active").removeClass("fade-out"), 0 == $(".cd-dropdown-content .fade-in").length && $(t).children("ul").addClass("fade-in");
        },
        deactivate: function (t) {
            $(t).children().removeClass("is-active"),
            (0 == $("li.has-children:hover").length || $("li.has-children:hover").is($(t))) && ($(".cd-dropdown-content").find(".fade-in").removeClass("fade-in"), $(t).children("ul").addClass("fade-out"));
        },
        exitMenu: function () {
            return $(".cd-dropdown-content").find(".is-active").removeClass("is-active"), !0;
        },
        submenuDirection: c,
    }),
        $(".go-back").on("click", function () {
            var t = $(this);
            $(this).parent("ul").parent(".has-children").parent("ul");
            t.parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("move-out");
        }),
        $(document).on("click", "[data-parent-class]", function () {
            return !1;
        }),
        (s = $(".wrap-cat-menu")),
        $(document).on("mouseenter", "li.dropdown-cat", function () {
            s.slideDown(0), $(".navbar").addClass("nav-hover");
        }),
        $(document).on("mouseleave", ".dropdown-cat", function () {
            s.delay(300).slideUp(0),
                setTimeout(function () {
                    $(".navbar").removeClass("nav-hover");
                }, 1e3);
        }),
        r(),
        $(document).on("scroll", function () {
            r();
        }),
        $("#totop").click(function () {
            $("body,html").animate({scrollTop: 0}, 800);
        }),
        $(".flexslider-main").flexslider({
            animation: "slide",
            controlNav: !0,
            slideshow: !0,
            slideshowSpeed: 6e3,
            prevText: " ",
            nextText: " "
        }),
        $(".flexslider-ask").flexslider({
            animation: "slide",
            animationLoop: !0,
            controlNav: !1,
            slideshow: !0,
            slideshowSpeed: 7e3,
            itemWidth: 500,
            prevText: " ",
            nextText: " ",
            itemMargin: 30
        }),
        $(".wrap-cat-menu > ul > li").on("click", function () {
            $(this).closest(".wrap-cat-menu").find("li.active__item").removeClass("active__item"), $(this).closest("li").addClass("active__item");
        }),
    0 === $(".table-container").next(".text-sub").length && $(".table-container").after('<p class="text-sub" style="font-style: italic;">*Цена указана за 1 шт. в рублях</p>'),
        $(document).on("click", "[data-gal-list] a", function (t) {
            t.preventDefault();
            var i = $(this).parents(".kvad-block").attr("data-gal-list"),
                e = $('[data-gal-id="' + i + '"]').attr("data-gal");
            e = JSON.parse(e);
            var n = [];
            $.each(e, function (t, i) {
                n.push({href: i.img, title: i.title});
            });
            var a = $(this).parents("[data-gal-list]"),
                l = $(a).find("a").index(this);
            return $.fancybox.open(n, {index: l}), !1;
        }),
        $(".otziv-block li a").fancybox(),
    void 0 !== $("a[href$='.jpg'],a[href$='.JPG'],a[href$='.jpeg'],a[href$='.JPEG'],a[href$='.png'],a[href$='.PNG'],a[href$='.gif'],a[href$='.GIF']") &&
    $("a[href$='.jpg'],a[href$='.JPG'],a[href$='.jpeg'],a[href$='.JPEG'],a[href$='.png'],a[href$='.PNG'],a[href$='.gif'],a[href$='.GIF']").fancybox();
}),
    galleryInit()
    $(document).ready(function () {
        $("#ob_link").click(function (t) {
            t.preventDefault(), $("#order_black").click(), gtag("event", "send", {
                event_category: "zayavka",
                event_action: "fill-form-2"
            });
        }),
            $('a[href="mailto:zakaz@stolitsaprint.ru"]').click(function (t) {
                gtag("event", "send", {event_category: "email", event_action: "click"});
            }),
            $('a[href="mailto:zakazdmd@stolitsaprint.ru"]').click(function (t) {
                gtag("event", "send", {event_category: "email", event_action: "click"});
            }),
            $('a[href="tel:+74957280956"]').click(function (t) {
                gtag("event", "send", {event_category: "phone-number", event_action: "click"});
            }),
            $("#cont_link").click(function (t) {
                t.preventDefault(), $("#order_light_cont").click();
            }),
            $("#phone_link").click(function (t) {
                gtag("event", "send", {event_category: "zvonok", event_action: "zvonok"});
            }),
            $("#znk_link").click(function (t) {
                gtag("event", "send", {event_category: "zayavka", event_action: "fill-form-2"});
            }),
            $("#light_link").click(function (t) {
                t.preventDefault(), $("#order_light").click();
            }),
            $("#zak_link").click(function (t) {
                t.preventDefault(), $("#zakazat").click();
            }),
            $("#light_link").click(function (t) {
                t.preventDefault(), $("#light").click();
            }),
            $(".responsive1:not(.calendar-slider)").css({overflow: "visible"});
    }),
    $(document).ready(function () {
        $("#vkl_calc").click(function (t) {
            var i = document.getElementById("kalk-s");
            i && ("none" == i.style.display ? (i.style.display = "block") : "block" == i.style.display && (i.style.display = "none"));
        });
    }),
$("div.sub-links ul li").length > 5 && $(".sub-links ul").css("justify-content", "flex-start"),
    $(document).ready(function () {
        $("tbody").removeAttr("align"),
            $(".main-catalog-top-menu > ul:first-child > li:first-child > a").addClass("clicked_link"),
            $(".main-catalog-top-menu > ul:first-child > li:first-child").addClass("up_arrow"),
            $(".main-catalog-top-menu > ul > li").on("click", function () {
                $(this).children("a").addClass("clicked_link"),
                    $(this).addClass("up_arrow"),
                    $(this).siblings().children("a").removeClass("clicked_link"),
                    $(this).parent().siblings().find("a").removeClass("clicked_link"),
                    $(this).siblings().removeClass("up_arrow"),
                    $(this).parent().siblings().find("li").removeClass("up_arrow");
            }),
            $('.checkbox__variant--visible[name="variant9"]').on(function (t) {
                t.preventDefault(), $('input[name="variant9"]').removeAttr("checked");
            });
    }),
    $(document).ready(function () {
        $(".country-phone").each(function () {
            var t = $(this),
                i = t.find("phone-country__list");
            t.on("click", ".country-phone__info", function () {
                $(".country-phone").toggleClass("active"), $(this).parent().find(".phone-country__list").slideToggle(300);
            }),
                t.on("click", ".country", function () {
                    var i = $(this),
                        e = i.data("country-mask"),
                        n = i.data("placeholder"),
                        a = i.find(".country__flag").attr("src"),
                        l = i.find(".country__number").text();
                    t.removeClass("active"),
                        i.parents(".phone-country__list").slideUp(300),
                        t.find(".country-phone__info").children(".country-phone__flag").attr("src", a),
                        t.find(".country-phone__info").children(".country-phone__number").text(l),
                        t.find("input[name='phone']").attr("placeholder", n),
                        t.find("input[name='phone']").val(""),
                        t.find("input[name='phone']").mask(e),
                        t.find("input[name='phone']").focus(),
                        t.find("input[name='phone-country']").val(l);
                }),
                $(document).mouseup(function (e) {
                    t.is(e.target) || 0 !== t.has(e.target).length || (t.removeClass("active"), i.slideUp(300));
                });
        }),
            $("body").on('click touchstart', ".men-mob .harmonica-menu .s_h3", function () {
				var block = $(this).next(".harmonica-menu-hidden");
				if(block.hasClass('hidden_block')) {
				   block.removeClass('hidden_block');
				   }
				   else {
						 block.addClass('hidden_block');
				   }
             });
    });

$(window).resize(function() {
	if($('.korpus_add').length) {
		$($('.korpus_add label')[0]).attr('style', 'margin-left: ' +$('#kalk').css('margin-left') + ' !important');
	}
});

$($('.korpus_add label')[0]).attr('style', 'margin-left: ' +$('#kalk').css('margin-left') + ' !important');

