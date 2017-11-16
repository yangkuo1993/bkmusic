webpackJsonp([5], {
  CY2t: function(t, a, e) {
    var n = e("ftsz");
    "string" == typeof n && (n = [[t.i, n, ""]]),
      n.locals && (t.exports = n.locals);
    e("8bSs")("19b481bb", n, !0);
  },
  OJDP: function(t, a, e) {
    "use strict";
    var n = e("E+ia"),
      s = e("zyvT");
    e.n(s);
    n.default.component(s.Tab.name, s.Tab),
      n.default.component(s.Tabs.name, s.Tabs),
      (a.a = {
        name: "Tab",
        data: function() {
          return { msg: "Welcome to Your Vue.js App" };
        },
        methods: {
          handleTabClick: function(t) {
            this.$emit("handleTabClick", t), this.$emit("update:foo", t);
          }
        }
      });
  },
  TNXK: function(t, a, e) {
    "use strict";
    var n = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e(
          "div",
          { staticClass: "tab" },
          [
            e(
              "van-tabs",
              { on: { click: t.handleTabClick } },
              [
                e("van-tab", {
                  staticClass: "van-tabs",
                  attrs: { title: "推荐音乐" }
                }),
                e("van-tab", { attrs: { title: "热歌榜" } }),
                e("van-tab", { attrs: { title: "搜索" } })
              ],
              1
            )
          ],
          1
        );
      },
      s = [],
      i = { render: n, staticRenderFns: s };
    a.a = i;
  },
  csRj: function(t, a, e) {
    "use strict";
    function n(t) {
      e("CY2t");
    }
    Object.defineProperty(a, "__esModule", { value: !0 });
    var s = e("OJDP"),
      i = e("TNXK"),
      o = e("/Xao"),
      c = n,
      l = o(s.a, i.a, !1, c, "data-v-399a3621", null);
    a.default = l.exports;
  },
  ftsz: function(t, a, e) {
    (a = t.exports = e("BkJT")(!1)),
      a.push([
        t.i,
        ".tab[data-v-399a3621]{position:fixed;z-index:5;width:100%}",
        ""
      ]);
  }
});
//# sourceMappingURL=5.f82d2ae86ad7ea93ba3e.js.map
