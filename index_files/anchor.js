!(function (r) {
    (window.anchor = {
        settings: { transitionDuration: 2e3, transitionTimingFunction: "swing", labels: { error: "Couldn't find any section" } },
        init: function (n) {
            return (
                r(this).data("settings", r.extend(anchor.settings, n)),
                this.each(function () {
                    var t = r(this);
                    t.unbind("click").click(function (n) {
                        n.preventDefault(), anchor.jumpTo(anchor.getTopOffsetPosition(t), t.data("settings"));
                    });
                })
            );
        },
        getTopOffsetPosition: function (n) {
            var t = n.attr("href"),
                o = r(r(t).get(0)),
                e = r(document).height(),
                i = r(window).height();
            if (!o || o.length < 1) throw new ReferenceError(anchor.settings.labels.error);
            return o.offset().top + i > e ? e - i : o.offset().top;
        },
        jumpTo: function (n, t) {
            var o = r("html, body");
            o.animate({ scrollTop: n }, t.transitionDuration, t.transitionTimingFunction),
                o.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function (n) {
                    (0 < n.which || "mousedown" === n.type || "mousewheel" === n.type) && o.stop().unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
                });
        },
    }),
        (r.fn.anchor = function (n) {
            return anchor[n] ? anchor[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? r.error("Method " + n + " does not exist on jQuery.anchor") : anchor.init.apply(this, arguments);
        });
});
