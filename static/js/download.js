!(function () {
  var i = "object" == typeof global && global && global.Object === Object && global,
    r = "object" == typeof self && self && self.Object === Object && self,
    c = i || r || Function("return this")();
  function y(t) {
    var n = typeof t;
    return null != t && ("object" == n || "function" == n);
  }

  function O(t) {
    if ("number" == typeof t) return t;
    if (
      (function (t) {
        return (
          "symbol" == typeof t ||
          ((function (t) {
            return null != t && "object" == typeof t;
          })(t) &&
            (function (t) {
              return null == t
                ? void 0 === t
                  ? g
                  : v
                : h && h in Object(t)
                ? (function (t) {
                    var n = d.call(t, f),
                      e = t[f];
                    try {
                      t[f] = void 0;
                      var o = !0;
                    } catch (t) {}
                    var a = u.call(t);
                    return o && (n ? (t[f] = e) : delete t[f]), a;
                  })(t)
                : (function (t) {
                    return p.call(t);
                  })(t);
            })(t) == m)
        );
      })(t)
    )
      return k;
    if (y(t)) {
      var n = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = y(n) ? n + "" : n;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = (function (t) {
      return t
        ? t
            .slice(
              0,
              (function (t) {
                for (var n = t.length; n-- && w.test(t.charAt(n)); );
                return n;
              })(t) + 1
            )
            .replace(b, "")
        : t;
    })(t);
    var e = x.test(t);
    return e || S.test(t) ? N(t.slice(2), e ? 2 : 8) : _.test(t) ? k : +t;
  }
  var T = function () {
      return c.Date.now();
    },
    C = Math.max,
    D = Math.min;
  $(function () {
    var t = $(".show-more .show-more-content");
    function n() {
      t.each(function (t, n) {
        var e,
          o = $(n),
          a = o.outerHeight(),
          i = a || 9999;
        a <= parseInt(null === (e = o.css("--height")) || void 0 === e ? void 0 : e.replace("px", ""), 10) && o.parent().find(".show-more-mask").remove(), o.parent().css("--max-height", "".concat(i, "px"));
      });
    }
    $(document).on("click", ".show-more .show-more-button", function (t) {
      var n = $(t.currentTarget),
        e = n.parents(".show-more").eq(0),
        o = "true" === e.attr("data-expanded");
      e.attr("data-expanded", String(!o));
      var a = n.contents()[0];
      a && (a.textContent = n.data(o ? "show-more-text" : "show-less-text"));
    });
    //Limit the frequency of resizing execution
    $(window).on(
      "resize",
      (function (t, n, e) {
        var o = !0,
          a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          y(e) && ((o = "leading" in e ? !!e.leading : o), (a = "trailing" in e ? !!e.trailing : a)),
          (function (t, n, e) {
            var o,
              a,
              i,
              r,
              c,
              l,
              s = 0,
              d = !1,
              u = !1,
              f = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            function p(n) {
              var e = o,
                i = a;
              return (o = a = void 0), (s = n), (r = t.apply(i, e));
            }
            function v(t) {
              var e = t - l;
              return void 0 === l || e >= n || e < 0 || (u && t - s >= i);
            }
            function g() {
              var t = T();
              if (v(t)) return h(t);
              c = setTimeout(
                g,
                (function (t) {
                  var e = n - (t - l);
                  return u ? D(e, i - (t - s)) : e;
                })(t)
              );
            }
            function h(t) {
              return (c = void 0), f && o ? p(t) : ((o = a = void 0), r);
            }
            function m() {
              var t = T(),
                e = v(t);
              if (((o = arguments), (a = this), (l = t), e)) {
                if (void 0 === c)
                  return (function (t) {
                    return (s = t), (c = setTimeout(g, n)), d ? p(t) : r;
                  })(l);
                if (u) return clearTimeout(c), (c = setTimeout(g, n)), p(l);
              }
              return void 0 === c && (c = setTimeout(g, n)), r;
            }
            return (
              (n = O(n) || 0),
              y(e) && ((d = !!e.leading), (i = (u = "maxWait" in e) ? C(O(e.maxWait) || 0, n) : i), (f = "trailing" in e ? !!e.trailing : f)),
              (m.cancel = function () {
                void 0 !== c && clearTimeout(c), (s = 0), (o = l = a = c = void 0);
              }),
              (m.flush = function () {
                return void 0 === c ? r : h(T());
              }),
              m
            );
          })(t, 300, { leading: o, maxWait: 300, trailing: a })
        );
      })(n)
    ),
      n();
  });
})();
