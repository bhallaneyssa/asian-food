!(function (e) {
  var t = {};
  function r(o) {
    if (t[o]) return t[o].exports;
    var n = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            o,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return o;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 7));
})({
  7: function (e, t, r) {
    "use strict";
    r.r(t), r(8);
    const o = document.querySelectorAll.bind(document),
      n = window.jQuery;
    function i() {
      o(
        ".arve p, .arve .video-wrap, .arve .fluid-width-video-wrapper, .arve .fluid-vids"
      ).forEach((e) => {
        u(e);
      }),
        o(".ast-oembed-container").forEach((e) => {
          e.querySelector(".arve") && u(e);
        }),
        o(".arve br").forEach((e) => {
          e.remove();
        }),
        o(".arve-iframe, .arve-video").forEach((e) => {
          e.removeAttribute("width"),
            e.removeAttribute("height"),
            e.removeAttribute("style");
        }),
        o(".wp-block-embed").forEach((e) => {
          if (e.querySelector(".arve")) {
            e.classList.remove("wp-embed-aspect-16-9", "wp-has-aspect-ratio");
            const t = e.querySelector(".wp-block-embed__wrapper");
            t && u(t);
          }
        });
    }
    function u(e) {
      const t = e.parentNode;
      if (t) {
        for (; t && e.firstChild; ) t.insertBefore(e.firstChild, e);
        t.removeChild(e);
      }
    }
    "html" !== document.documentElement.id &&
      (document.documentElement.id
        ? document.body.id || (document.body.id = "html")
        : (document.documentElement.id = "html")),
      i(),
      document.addEventListener("DOMContentLoaded", () => {
        i();
      }),
      n &&
        void 0 !== n.fn.fitVids &&
        n(document).ready(() => {
          setTimeout(() => {
            i();
          }, 1);
        });
  },
  8: function (e, t, r) {},
});
