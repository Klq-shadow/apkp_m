!(function () {
  "use strict";
  function t(t, o) {
    var i = void 0 === o ? {} : o,
      l = i.autoInterval,
      c = void 0 === l ? 5e3 : l,
      s = i.itemSelector,
      f = i.prev,
      d = i.next,
      u = $(t).eq(0),
      v = $(f),
      p = $(d),
      h = "rtl" === $("html").attr("dir");
    u[0].scrollWidth > u.width() && p.addClass("go"),
      u.scroll(
        (function (t, e, n, r) {
          var a,
            o = !1,
            i = 0;
          function l() {
            a && clearTimeout(a);
          }
          function c() {
            for (var t = arguments.length, c = new Array(t), s = 0; s < t; s++) c[s] = arguments[s];
            var f = this,
              d = Date.now() - i;
            function u() {
              (i = Date.now()), n.apply(f, c);
            }
            o ||
              (r && !a && u(),
              l(),
              void 0 === r && d > 200
                ? u()
                : !0 !== e &&
                  (a = setTimeout(
                    r
                      ? function () {
                          a = void 0;
                        }
                      : u,
                    void 0 === r ? 200 - d : 200
                  )));
          }
          return (
            "boolean" != typeof e && ((r = n), (n = e), (e = void 0)),
            (c.cancel = function () {
              l(), (o = !0);
            }),
            c
          );
        })(0, function () {
          0 !== Math.abs(u.scrollLeft()) ? v.addClass("go") : v.removeClass("go");
        })
      ),
      v.click(function () {
        !(function (t, e, r, o) {
          if (!n()) {
            var i = a(t, e),
              l = Math.abs(t.scrollLeft()),
              c = l - (i - (l % i) || i);
            l <= i ? ((c = 0), r.removeClass("go")) : r.addClass("go"), t.animate({ scrollLeft: "".concat(c * (o ? -1 : 1), "px") });
          }
        })(u, s, v, h);
      }),
      p.click(function () {
        r(u, s, v, h);
      }),
      c &&
        (function (t, n, a, o) {
          var i = "rtl" === $("html").attr("dir");
          t.scroll(function () {
            e = Date.now();
          }),
            setInterval(function () {
              r(t, n, a, i);
            }, o);
        })(u, s, v, c);
  }
  var e = Date.now();
  function n() {
    return Date.now() < e + 200;
  }
  function r(t, e, r, o) {
    if (!n()) {
      var i = t.innerWidth(),
        l = t[0].scrollWidth,
        c = a(t, e),
        s = Math.abs(t.scrollLeft()),
        f = s + (c - (s % c));
      l <= s + i ? ((f = 0), r.removeClass("go")) : r.addClass("go"), t.animate({ scrollLeft: "".concat(f * (o ? -1 : 1), "px") });
    }
  }
  function a(t, e) {
    if (!n()) {
      var r = t[0].scrollWidth,
        a = t.children(e),
        o = t.innerWidth() - t.width(),
        i = a.length,
        l = a[0].clientWidth;
      return l + (r - o - i * l) / (i - 1);
    }
  }
  $(function () {
    new LazyLoad({
      elements_selector: ".img-lazy",
      data_src: "original",
      threshold: 200,
      callback_error: function (t) {
        $(t).attr("src", "https://static.cdnpure.com/www/static/imgs/grey.gif");
      },
    }),
      t(".category-apk-swiper .swiper-list", { itemSelector: ".swiper-item", prev: ".category-apk-swiper .prev", next: ".category-apk-swiper .next" });
    // t(".apk-banner-list .no-scrollbar-x", { itemSelector: ".apk-banner-item", prev: ".apk-banner-list .prev", next: ".apk-banner-list .next" });
  });
})();

$(".is-tab .tab-list span").click(function () {
  var t = $(this).index();
  $(this).addClass("active").siblings().removeClass("active"), $(this).parents(".is-tab").find(".tab-items > *").eq(t).show().siblings().hide(), $(this).parents(".category-module-title").find(".title-text").text($(this).data("title"));
});
