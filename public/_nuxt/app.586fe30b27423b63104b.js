webpackJsonp(
  [3],
  {
    "/C1n": function(t, e, n) {
      "use strict";
      var r = n("AIIS");
      e.a = {
        recommendMusic: function() {
          return r.a.get("/personalized");
        },
        newMusic: function() {
          return r.a.get("/personalized/newsong");
        },
        hotMuiscWy: function(t) {
          return r.a.get("/top/list?idx=" + t);
        },
        searchMusic: function(t) {
          return r.a.get("/search?keywords=" + t);
        },
        searchSuggest: function(t) {
          return r.a.get("/search/suggest?keywords=" + t);
        }
      };
    },
    "0F0d": function(t, e, n) {
      "use strict";
      e.a = {
        name: "no-ssr",
        props: ["placeholder"],
        data: function() {
          return { canRender: !1 };
        },
        mounted: function() {
          this.canRender = !0;
        },
        render: function(t) {
          return this.canRender
            ? this.$slots.default[0]
            : t(
                "div",
                { class: { "no-ssr-placeholder": !0 } },
                this.placeholder
              );
        }
      };
    },
    "0Us4": function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("div", {
            staticClass: "nuxt-progress",
            style: {
              width: t.percent + "%",
              height: t.height,
              "background-color": t.canSuccess ? t.color : t.failedColor,
              opacity: t.show ? 1 : 0
            }
          });
        },
        a = [],
        o = { render: r, staticRenderFns: a };
      e.a = o;
    },
    "5h6U": function(t, e, n) {
      "use strict";
      e.a = {
        name: "nuxt-error",
        props: ["error"],
        head: function() {
          return {
            title: this.message,
            meta: [
              {
                name: "viewport",
                content:
                  "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
              }
            ]
          };
        },
        computed: {
          statusCode: function() {
            return (this.error && this.error.statusCode) || 500;
          },
          message: function() {
            return this.error.message || "Error";
          }
        }
      };
    },
    AIIS: function(t, e, n) {
      "use strict";
      var r = n("rVsN"),
        a = n.n(r),
        o = n("2sCs"),
        i = n.n(o);
      (i.a.defaults.baseURL = "http://127.0.0.1:3389"),
        i.a.interceptors.request.use(
          function(t) {
            return t;
          },
          function(t) {
            return a.a.reject(t);
          }
        ),
        i.a.interceptors.response.use(
          function(t) {
            return 200 === t.status ? t.data : t;
          },
          function(t) {
            return a.a.reject(t);
          }
        ),
        (e.a = i.a);
    },
    Eejf: function(t, e, n) {
      (e = t.exports = n("BkJT")(!1)),
        e.push([
          t.i,
          ".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",
          ""
        ]);
    },
    F88d: function(t, e, n) {
      "use strict";
      function r(t) {
        n("bi1o");
      }
      var a = n("OkKt"),
        o = n("0Us4"),
        i = n("/Xao"),
        s = r,
        u = i(a.a, o.a, !1, s, null, null);
      e.a = u.exports;
    },
    "HBB+": function(t, e, n) {
      "use strict";
      var r = (n("E+ia"),
        [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass"
        ]),
        a = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled"
        ];
      e.a = {
        name: "nuxt-child",
        functional: !0,
        render: function(t, e) {
          var n = e.parent,
            o = e.data;
          o.nuxtChild = !0;
          for (
            var i = n,
              s = n.$nuxt.nuxt.transitions,
              u = n.$nuxt.nuxt.defaultTransition,
              c = 0;
            n;

          )
            n.$vnode && n.$vnode.data.nuxtChild && c++, (n = n.$parent);
          o.nuxtChildDepth = c;
          var f = s[c] || u,
            l = {};
          r.forEach(function(t) {
            void 0 !== f[t] && (l[t] = f[t]);
          });
          var p = {};
          return (
            a.forEach(function(t) {
              "function" == typeof f[t] && (p[t] = f[t].bind(i));
            }),
            t("transition", { props: l, on: p }, [t("router-view", o)])
          );
        }
      };
    },
    J2Ti: function(t, e, n) {
      "use strict";
      function r(t) {
        var e = l(t),
          n = e.default || e;
        if (n.commit)
          throw new Error(
            "[nuxt] store/" +
              t.replace("./", "") +
              " should export a method which returns a Vuex instance."
          );
        if (n.state && "function" != typeof n.state)
          throw new Error(
            "[nuxt] state should be a function in store/" + t.replace("./", "")
          );
        return n;
      }
      function a(t, e) {
        if (1 === e.length) return t.modules;
        var n = e.shift();
        return (
          (t.modules[n] = t.modules[n] || {}),
          (t.modules[n].namespaced = !0),
          (t.modules[n].modules = t.modules[n].modules || {}),
          a(t.modules[n], e)
        );
      }
      n.d(e, "a", function() {
        return C;
      });
      var o = n("aA9S"),
        i = n.n(o),
        s = n("HzJ8"),
        u = n.n(s),
        c = n("E+ia"),
        f = n("HVJf");
      c.default.use(f.default);
      var l = n("kRpp"),
        p = l.keys(),
        d = {},
        h = void 0;
      if (
        (p.forEach(function(t) {
          -1 !== t.indexOf("./index.") && (h = t);
        }),
        h && (d = r(h)),
        "function" != typeof d)
      ) {
        d.modules || (d.modules = {});
        var m = !0,
          v = !1,
          x = void 0;
        try {
          for (var y, b = u()(p); !(m = (y = b.next()).done); m = !0) {
            var _ = y.value,
              g = _.replace(/^\.\//, "").replace(/\.(js|ts)$/, "");
            if ("index" !== g) {
              var w = g.split(/\//),
                t = a(d, w);
              (g = w.pop()), (t[g] = r(_)), (t[g].namespaced = !0);
            }
          }
        } catch (t) {
          (v = !0), (x = t);
        } finally {
          try {
            !m && b.return && b.return();
          } finally {
            if (v) throw x;
          }
        }
      }
      var C =
        d instanceof Function
          ? d
          : function() {
              return new f.default.Store(
                i()({ strict: !1 }, d, {
                  state: d.state instanceof Function ? d.state() : {}
                })
              );
            };
    },
    OkKt: function(t, e, n) {
      "use strict";
      var r = n("E+ia");
      e.a = {
        name: "nuxt-loading",
        data: function() {
          return {
            percent: 0,
            show: !1,
            canSuccess: !0,
            duration: 5e3,
            height: "2px",
            color: "#3B8070",
            failedColor: "red"
          };
        },
        methods: {
          start: function() {
            var t = this;
            return (
              (this.show = !0),
              (this.canSuccess = !0),
              this._timer && (clearInterval(this._timer), (this.percent = 0)),
              (this._cut = 1e4 / Math.floor(this.duration)),
              (this._timer = setInterval(function() {
                t.increase(t._cut * Math.random()),
                  t.percent > 95 && t.finish();
              }, 100)),
              this
            );
          },
          set: function(t) {
            return (
              (this.show = !0),
              (this.canSuccess = !0),
              (this.percent = Math.floor(t)),
              this
            );
          },
          get: function() {
            return Math.floor(this.percent);
          },
          increase: function(t) {
            return (this.percent = this.percent + Math.floor(t)), this;
          },
          decrease: function(t) {
            return (this.percent = this.percent - Math.floor(t)), this;
          },
          finish: function() {
            return (this.percent = 100), this.hide(), this;
          },
          pause: function() {
            return clearInterval(this._timer), this;
          },
          hide: function() {
            var t = this;
            return (
              clearInterval(this._timer),
              (this._timer = null),
              setTimeout(function() {
                (t.show = !1),
                  r.default.nextTick(function() {
                    setTimeout(function() {
                      t.percent = 0;
                    }, 200);
                  });
              }, 500),
              this
            );
          },
          fail: function() {
            return (this.canSuccess = !1), this;
          }
        }
      };
    },
    P5ME: function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "__nuxt-error-page" }, [
            n("div", { staticClass: "error" }, [
              n(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "90",
                    height: "90",
                    fill: "#DBE1EC",
                    viewBox: "0 0 48 48"
                  }
                },
                [
                  n("path", {
                    attrs: {
                      d:
                        "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                    }
                  })
                ]
              ),
              n("div", { staticClass: "title" }, [t._v(t._s(t.message))]),
              404 === t.statusCode
                ? n(
                    "p",
                    { staticClass: "description" },
                    [
                      n(
                        "nuxt-link",
                        { staticClass: "error-link", attrs: { to: "/" } },
                        [t._v("Back to the home page")]
                      )
                    ],
                    1
                  )
                : t._e(),
              t._m(0)
            ])
          ]);
        },
        a = [
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "logo" }, [
              n(
                "a",
                {
                  attrs: {
                    href: "https://nuxtjs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [t._v("Nuxt.js")]
              )
            ]);
          }
        ],
        o = { render: r, staticRenderFns: a };
      e.a = o;
    },
    T23V: function(t, e, n) {
      "use strict";
      function r(t, e) {
        if (!t || !t.options || !t.options[e]) return {};
        var n = t.options[e];
        if ("function" == typeof n) {
          for (
            var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), o = 2;
            o < r;
            o++
          )
            a[o - 2] = arguments[o];
          return n.apply(void 0, a);
        }
        return n;
      }
      function a(t, e, n) {
        var a = function(t) {
          var a = r(t, "transition", e, n) || {};
          return "string" == typeof a ? { name: a } : a;
        };
        return t.map(function(t) {
          var e = w()({}, a(t));
          if (n && n.matched.length && n.matched[0].components.default) {
            var r = a(n.matched[0].components.default);
            _()(r)
              .filter(function(t) {
                return r[t] && -1 !== t.toLowerCase().indexOf("leave");
              })
              .forEach(function(t) {
                e[t] = r[t];
              });
          }
          return e;
        });
      }
      function o(t, e) {
        return L.serverRendered && e && Object($.a)(t, e), (t._Ctor = t), t;
      }
      function i(t) {
        var e = Object($.e)(t.options.base, t.options.mode);
        return Object($.c)(t.match(e), function(t, e, n, r, a) {
          if ("function" != typeof t || t.options) {
            var i = o(Object($.j)(t), L.data ? L.data[a] : null);
            return (n.components[r] = i), i;
          }
          return t().then(function(t) {
            var e = o(Object($.j)(t), L.data ? L.data[a] : null);
            return (n.components[r] = e), e;
          });
        });
      }
      function s(t, e, n) {
        var r = this,
          a = [],
          o = !1;
        if (
          (void 0 !== n &&
            ((a = []),
            n.middleware && (a = a.concat(n.middleware)),
            t.forEach(function(t) {
              t.options.middleware && (a = a.concat(t.options.middleware));
            })),
          (a = a.map(function(t) {
            return (
              "function" != typeof k.a[t] &&
                ((o = !0),
                r.error({
                  statusCode: 500,
                  message: "Unknown middleware " + t
                })),
              k.a[t]
            );
          })),
          !o)
        )
          return Object($.h)(a, e);
      }
      function u(t, e) {
        Object($.c)(t, function(t, e, n, r) {
          return (
            "object" !== (void 0 === t ? "undefined" : p()(t)) ||
              t.options ||
              ((t = C.default.extend(t)), (t._Ctor = t), (n.components[r] = t)),
            t
          );
        });
      }
      function c(t, e) {
        var n = this;
        this._hashChanged ||
          C.default.nextTick(function() {
            var e = Object($.g)(t);
            (M = e.map(function(t, e) {
              if (!t) return "";
              if (
                T[e] === t.constructor._path &&
                "function" == typeof t.constructor.options.data
              ) {
                var n = t.constructor.options.data.call(t);
                for (var r in n) C.default.set(t.$data, r, n[r]);
              }
              return t.constructor.options.__file;
            })),
              n._hadError &&
                n._dateLastError === n.$options._nuxt.dateErr &&
                n.error();
            var r = n.$options._nuxt.err
              ? E.a.layout
              : t.matched[0].components.default.options.layout;
            "function" == typeof r && (r = r(n._context)), n.setLayout(r);
          });
      }
      function f(t) {
        window._nuxtReadyCbs.forEach(function(e) {
          "function" == typeof e && e(t);
        }),
          "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t),
          A.afterEach(function(e, n) {
            t.$nuxt.$emit("routeChanged", e, n);
          });
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var l = n("hRKE"),
        p = n.n(l),
        d = n("lC5x"),
        h = n.n(d),
        m = n("rVsN"),
        v = n.n(m),
        x = n("J0Oq"),
        y = n.n(x),
        b = n("ZLEe"),
        _ = n.n(b),
        g = n("aA9S"),
        w = n.n(g),
        C = n("E+ia"),
        k = n("unZF"),
        E = n("qcny"),
        $ = n("YLfZ"),
        R = (function() {
          var t = y()(
            h.a.mark(function t(e, n, r) {
              var a, o, i;
              return h.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a = n.fullPath.split("#")[0]),
                          (o = e.fullPath.split("#")[0]),
                          (this._hashChanged = a === o),
                          !this._hashChanged &&
                            this.$loading.start &&
                            this.$loading.start(),
                          (t.prev = 4),
                          (t.next = 7),
                          v.a.all(
                            Object($.c)(e, function(t, e, n, r) {
                              if ("function" != typeof t || t.options) {
                                var a = Object($.j)(t);
                                return (n.components[r] = a), a;
                              }
                              return t().then(function(t) {
                                var e = Object($.j)(t);
                                return (n.components[r] = e), e;
                              });
                            })
                          )
                        );
                      case 7:
                        r(), (t.next = 16);
                        break;
                      case 10:
                        (t.prev = 10),
                          (t.t0 = t.catch(4)),
                          t.t0 || (t.t0 = {}),
                          (i =
                            t.t0.statusCode ||
                            t.t0.status ||
                            (t.t0.response && t.t0.response.status) ||
                            500),
                          this.error({ statusCode: i, message: t.t0.message }),
                          r(!1);
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[4, 10]]
              );
            })
          );
          return function(e, n, r) {
            return t.apply(this, arguments);
          };
        })(),
        j = (function() {
          var t = y()(
            h.a.mark(function t(e, n, r) {
              var o,
                i,
                u,
                c,
                f,
                l,
                p,
                d,
                m = this;
              return h.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!this._hashChanged) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return", r());
                      case 2:
                        if (
                          ((o = !1),
                          (i = function(t) {
                            m.$loading.finish && m.$loading.finish(),
                              o || ((o = !0), r(t));
                          }),
                          (u = Object($.d)(
                            {
                              to: e,
                              from: n,
                              store: N,
                              isClient: !0,
                              next: i.bind(this),
                              error: this.error.bind(this)
                            },
                            S
                          )),
                          (this._context = u),
                          (this._dateLastError = this.$options._nuxt.dateErr),
                          (this._hadError = !!this.$options._nuxt.err),
                          (c = Object($.f)(e)),
                          c.length)
                        ) {
                          t.next = 23;
                          break;
                        }
                        return (t.next = 12), s.call(this, c, u);
                      case 12:
                        if (!u._redirected) {
                          t.next = 14;
                          break;
                        }
                        return t.abrupt("return");
                      case 14:
                        return (
                          (t.next = 16),
                          this.loadLayout(
                            "function" == typeof E.a.layout
                              ? E.a.layout(u)
                              : E.a.layout
                          )
                        );
                      case 16:
                        return (
                          (f = t.sent), (t.next = 19), s.call(this, c, u, f)
                        );
                      case 19:
                        if (!u._redirected) {
                          t.next = 21;
                          break;
                        }
                        return t.abrupt("return");
                      case 21:
                        return (
                          this.error({
                            statusCode: 404,
                            message: "This page could not be found"
                          }),
                          t.abrupt("return", r())
                        );
                      case 23:
                        return (
                          c.forEach(function(t) {
                            t._Ctor &&
                              t._Ctor.options &&
                              ((t.options.asyncData =
                                t._Ctor.options.asyncData),
                              (t.options.fetch = t._Ctor.options.fetch));
                          }),
                          this.setTransitions(a(c, e, n)),
                          (t.prev = 25),
                          (t.next = 28),
                          s.call(this, c, u)
                        );
                      case 28:
                        if (!u._redirected) {
                          t.next = 30;
                          break;
                        }
                        return t.abrupt("return");
                      case 30:
                        return (
                          (l = c[0].options.layout),
                          "function" == typeof l && (l = l(u)),
                          (t.next = 34),
                          this.loadLayout(l)
                        );
                      case 34:
                        return (
                          (l = t.sent), (t.next = 37), s.call(this, c, u, l)
                        );
                      case 37:
                        if (!u._redirected) {
                          t.next = 39;
                          break;
                        }
                        return t.abrupt("return");
                      case 39:
                        if (
                          ((p = !0),
                          c.forEach(function(t) {
                            p &&
                              "function" == typeof t.options.validate &&
                              (p = t.options.validate({
                                params: e.params || {},
                                query: e.query || {},
                                store: u.store
                              }));
                          }),
                          p)
                        ) {
                          t.next = 44;
                          break;
                        }
                        return (
                          this.error({
                            statusCode: 404,
                            message: "This page could not be found"
                          }),
                          t.abrupt("return", r())
                        );
                      case 44:
                        return (
                          (t.next = 46),
                          v.a.all(
                            c.map(function(t, n) {
                              if (
                                ((t._path = Object($.b)(e.matched[n].path)(
                                  e.params
                                )),
                                !m._hadError &&
                                  m._isMounted &&
                                  t._path === T[n] &&
                                  n + 1 !== c.length)
                              )
                                return v.a.resolve();
                              var r = [],
                                a =
                                  t.options.asyncData &&
                                  "function" == typeof t.options.asyncData,
                                o = !!t.options.fetch,
                                i = a && o ? 30 : 45;
                              if (a) {
                                var s = Object($.i)(
                                  t.options.asyncData,
                                  u
                                ).then(function(e) {
                                  Object($.a)(t, e),
                                    m.$loading.increase &&
                                      m.$loading.increase(i);
                                });
                                r.push(s);
                              }
                              if (o) {
                                var f = t.options.fetch(u);
                                (f &&
                                  (f instanceof v.a ||
                                    "function" == typeof f.then)) ||
                                  (f = v.a.resolve(f)),
                                  f.then(function(t) {
                                    m.$loading.increase &&
                                      m.$loading.increase(i);
                                  }),
                                  r.push(f);
                              }
                              return v.a.all(r);
                            })
                          )
                        );
                      case 46:
                        (T = c.map(function(t, n) {
                          return Object($.b)(e.matched[n].path)(e.params);
                        })),
                          this.$loading.finish && this.$loading.finish(),
                          o || r(),
                          (t.next = 62);
                        break;
                      case 51:
                        return (
                          (t.prev = 51),
                          (t.t0 = t.catch(25)),
                          t.t0 || (t.t0 = {}),
                          (T = []),
                          (t.t0.statusCode =
                            t.t0.statusCode ||
                            t.t0.status ||
                            (t.t0.response && t.t0.response.status) ||
                            500),
                          (d = E.a.layout),
                          "function" == typeof d && (d = d(u)),
                          (t.next = 60),
                          this.loadLayout(d)
                        );
                      case 60:
                        this.error(t.t0), r(!1);
                      case 62:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[25, 51]]
              );
            })
          );
          return function(e, n, r) {
            return t.apply(this, arguments);
          };
        })(),
        O = (function() {
          var t = y()(
            h.a.mark(function t(e) {
              var n, r, o, s;
              return h.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (S = e.app),
                          (A = e.router),
                          (N = e.store),
                          (t.next = 5),
                          v.a.all(i(A))
                        );
                      case 5:
                        return (
                          (n = t.sent),
                          (r = new C.default(S)),
                          (o = L.layout || "default"),
                          (t.next = 10),
                          r.loadLayout(o)
                        );
                      case 10:
                        if (
                          (r.setLayout(o),
                          (s = function() {
                            r.$mount("#__nuxt"),
                              C.default.nextTick(function() {
                                f(r);
                              });
                          }),
                          (r.setTransitions = r.$options._nuxt.setTransitions.bind(
                            r
                          )),
                          n.length &&
                            (r.setTransitions(a(n, A.currentRoute)),
                            (T = A.currentRoute.matched.map(function(t) {
                              return Object($.b)(t.path)(A.currentRoute.params);
                            })),
                            (M = n.map(function(t) {
                              return t.options.__file;
                            }))),
                          (r.error = r.$options._nuxt.error.bind(r)),
                          (r.$loading = {}),
                          L.error && r.error(L.error),
                          A.beforeEach(R.bind(r)),
                          A.beforeEach(j.bind(r)),
                          A.afterEach(u),
                          A.afterEach(c.bind(r)),
                          !L.serverRendered)
                        ) {
                          t.next = 24;
                          break;
                        }
                        return s(), t.abrupt("return");
                      case 24:
                        j.call(r, A.currentRoute, A.currentRoute, function(t) {
                          if (!t)
                            return (
                              u(A.currentRoute, A.currentRoute),
                              c.call(r, A.currentRoute, A.currentRoute),
                              void s()
                            );
                          var e = !1;
                          A.afterEach(function() {
                            e || ((e = !0), s());
                          }),
                            A.push(t);
                        });
                      case 25:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })(),
        T = [],
        M = [],
        S = void 0,
        A = void 0,
        N = void 0,
        L = window.__NUXT__ || {};
      Object(E.b)()
        .then(O)
        .catch(function(t) {
          console.error("[nuxt] Error while initializing app", t);
        });
    },
    U2RR: function(t, e, n) {
      (e = t.exports = n("BkJT")(!1)),
        e.push([
          t.i,
          ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",
          ""
        ]);
    },
    VUGs: function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.nuxt.err
            ? n("nuxt-error", { attrs: { error: t.nuxt.err } })
            : n("nuxt-child", { key: t.routerViewKey });
        },
        a = [],
        o = { render: r, staticRenderFns: a };
      e.a = o;
    },
    WRRc: function(t, e, n) {
      "use strict";
      n("E+ia");
      e.a = {
        name: "nuxt-link",
        functional: !0,
        render: function(t, e) {
          return t("router-link", e.data, e.children);
        }
      };
    },
    YLfZ: function(t, e, n) {
      "use strict";
      function r(t, e) {
        var n = t.options.data || T;
        (!e && t.options.hasAsyncData) ||
          ((t.options.hasAsyncData = !0),
          (t.options.data = function() {
            var r = n.call(this);
            return (
              this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
              j()({}, r, e)
            );
          }),
          t._Ctor &&
            t._Ctor.options &&
            (t._Ctor.options.data = t.options.data));
      }
      function a(t) {
        return (
          t.options
            ? ((t._Ctor = t), (t.extendOptions = t.options))
            : ((t = O.default.extend(t)), (t._Ctor = t)),
          !t.options.name &&
            t.options.__file &&
            (t.options.name = t.options.__file),
          t
        );
      }
      function o(t) {
        return [].concat.apply(
          [],
          t.matched.map(function(t) {
            return $()(t.components).map(function(e) {
              return t.components[e];
            });
          })
        );
      }
      function i(t) {
        return [].concat.apply(
          [],
          t.matched.map(function(t) {
            return $()(t.instances).map(function(e) {
              return t.instances[e];
            });
          })
        );
      }
      function s(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, n) {
            return $()(t.components).map(function(r) {
              return e(t.components[r], t.instances[r], t, r, n);
            });
          })
        );
      }
      function u(t, e) {
        var n = {
            isServer: !!t.isServer,
            isClient: !!t.isClient,
            isStatic: !0,
            isDev: !1,
            isHMR: t.isHMR || !1,
            app: e,
            store: t.store,
            route: t.to ? t.to : t.route,
            payload: t.payload,
            error: t.error,
            base: "/",
            env: {}
          },
          r = t.next;
        return (
          (n.params = n.route.params || {}),
          (n.query = n.route.query || {}),
          (n.redirect = function(t, e, a) {
            t &&
              ((n._redirected = !0),
              "string" != typeof t ||
                (void 0 !== e &&
                  "object" !== (void 0 === e ? "undefined" : k()(e))) ||
                ((a = e || {}), (e = t), (t = 302)),
              r({ path: e, query: a, status: t }));
          }),
          t.req && (n.req = t.req),
          t.res && (n.res = t.res),
          t.from && (n.from = t.from),
          n.isServer &&
            t.beforeRenderFns &&
            (n.beforeNuxtRender = function(e) {
              return t.beforeRenderFns.push(e);
            }),
          n.isClient && window.__NUXT__ && (n.nuxtState = window.__NUXT__),
          n
        );
      }
      function c(t, e) {
        return !t.length || e._redirected
          ? w.a.resolve()
          : f(t[0], e).then(function() {
              return c(t.slice(1), e);
            });
      }
      function f(t, e) {
        var n = void 0;
        return (
          (n =
            2 === t.length
              ? new w.a(function(n) {
                  t(e, function(t, r) {
                    t && e.error(t), (r = r || {}), n(r);
                  });
                })
              : t(e)),
          (n && (n instanceof w.a || "function" == typeof n.then)) ||
            (n = w.a.resolve(n)),
          n
        );
      }
      function l(t, e) {
        var n = window.location.pathname;
        return "hash" === e
          ? window.location.hash.replace(/^#\//, "")
          : (t && 0 === n.indexOf(t) && (n = n.slice(t.length)),
            (n || "/") + window.location.search + window.location.hash);
      }
      function p(t, e) {
        return v(d(t, e));
      }
      function d(t, e) {
        for (
          var n, r = [], a = 0, o = 0, i = "", s = (e && e.delimiter) || "/";
          null != (n = M.exec(t));

        ) {
          var u = n[0],
            c = n[1],
            f = n.index;
          if (((i += t.slice(o, f)), (o = f + u.length), c)) i += c[1];
          else {
            var l = t[o],
              p = n[2],
              d = n[3],
              h = n[4],
              m = n[5],
              v = n[6],
              b = n[7];
            i && (r.push(i), (i = ""));
            var _ = null != p && null != l && l !== p,
              g = "+" === v || "*" === v,
              w = "?" === v || "*" === v,
              C = n[2] || s,
              k = h || m;
            r.push({
              name: d || a++,
              prefix: p || "",
              delimiter: C,
              optional: w,
              repeat: g,
              partial: _,
              asterisk: !!b,
              pattern: k ? y(k) : b ? ".*" : "[^" + x(C) + "]+?"
            });
          }
        }
        return o < t.length && (i += t.substr(o)), i && r.push(i), r;
      }
      function h(t) {
        return encodeURI(t).replace(/[\/?#]/g, function(t) {
          return (
            "%" +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      }
      function m(t) {
        return encodeURI(t).replace(/[?#]/g, function(t) {
          return (
            "%" +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      }
      function v(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++)
          "object" === k()(t[n]) &&
            (e[n] = new RegExp("^(?:" + t[n].pattern + ")$"));
        return function(n, r) {
          for (
            var a = "",
              o = n || {},
              i = r || {},
              s = i.pretty ? h : encodeURIComponent,
              u = 0;
            u < t.length;
            u++
          ) {
            var c = t[u];
            if ("string" != typeof c) {
              var f,
                l = o[c.name];
              if (null == l) {
                if (c.optional) {
                  c.partial && (a += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (Array.isArray(l)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      _()(l) +
                      "`"
                  );
                if (0 === l.length) {
                  if (c.optional) continue;
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  );
                }
                for (var p = 0; p < l.length; p++) {
                  if (((f = s(l[p])), !e[u].test(f)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        _()(f) +
                        "`"
                    );
                  a += (0 === p ? c.prefix : c.delimiter) + f;
                }
              } else {
                if (((f = c.asterisk ? m(l) : s(l)), !e[u].test(f)))
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      f +
                      '"'
                  );
                a += c.prefix + f;
              }
            } else a += c;
          }
          return a;
        };
      }
      function x(t) {
        return t.replace(/([.+*?=^!:()[\]|\/\\])/g, "\\$1");
      }
      function y(t) {
        return t.replace(/([=!:$\/()])/g, "\\$1");
      }
      (e.a = r),
        (e.j = a),
        (e.f = o),
        (e.g = i),
        (e.c = s),
        (e.d = u),
        (e.h = c),
        (e.i = f),
        (e.e = l),
        (e.b = p);
      var b = n("3cXf"),
        _ = n.n(b),
        g = n("rVsN"),
        w = n.n(g),
        C = n("hRKE"),
        k = n.n(C),
        E = n("ZLEe"),
        $ = n.n(E),
        R = n("4YfN"),
        j = n.n(R),
        O = n("E+ia"),
        T = function() {
          return {};
        };
      (window._nuxtReadyCbs = []),
        (window.onNuxtReady = function(t) {
          window._nuxtReadyCbs.push(t);
        });
      var M = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
        ].join("|"),
        "g"
      );
    },
    bOWB: function(t, e, n) {
      var r = n("Eejf");
      "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      n("8bSs")("5b1bc00c", r, !0);
    },
    bbKq: function(t, e, n) {
      "use strict";
      var r = n("E+ia"),
        a = n("HBB+"),
        o = n("ct3O"),
        i = n("YLfZ");
      e.a = {
        name: "nuxt",
        props: ["nuxtChildKey"],
        beforeCreate: function() {
          r.default.util.defineReactive(
            this,
            "nuxt",
            this.$root.$options._nuxt
          );
        },
        computed: {
          routerViewKey: function() {
            return void 0 !== this.nuxtChildKey ||
              this.$route.matched.length > 1
              ? this.nuxtChildKey ||
                  Object(i.b)(this.$route.matched[0].path)(this.$route.params)
              : this.$route.fullPath.split("#")[0];
          }
        },
        components: { NuxtChild: a.a, NuxtError: o.a }
      };
    },
    bi1o: function(t, e, n) {
      var r = n("U2RR");
      "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      n("8bSs")("0bd07d05", r, !0);
    },
    cffV: function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { attrs: { id: "__nuxt" } },
            [
              n("nuxt-loading", { ref: "loading" }),
              t.layout
                ? n(t.nuxt.err ? "nuxt" : t.layout, { tag: "component" })
                : t._e()
            ],
            1
          );
        },
        a = [],
        o = { render: r, staticRenderFns: a };
      e.a = o;
    },
    cs8z: function(t, e, n) {
      "use strict";
      var r = n("bbKq"),
        a = n("VUGs"),
        o = n("/Xao"),
        i = o(r.a, a.a, !1, null, null, null);
      e.a = i.exports;
    },
    ct3O: function(t, e, n) {
      "use strict";
      function r(t) {
        n("bOWB");
      }
      var a = n("5h6U"),
        o = n("P5ME"),
        i = n("/Xao"),
        s = r,
        u = i(a.a, o.a, !1, s, null, null);
      e.a = u.exports;
    },
    "gXG+": function(t, e, n) {
      "use strict";
      var r = n("x/JP"),
        a = n("cffV"),
        o = n("/Xao"),
        i = o(r.a, a.a, !1, null, null, null);
      e.a = i.exports;
    },
    hFZ7: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        n.d(e, "MUSIC_PLAYING", function() {
          return r;
        });
      var r = "MUSIC_PLAYING";
    },
    kRpp: function(t, e, n) {
      function r(t) {
        return n(a(t));
      }
      function a(t) {
        var e = o[t];
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
        return e;
      }
      var o = { "./index.js": "vdRI", "./mutation_types.js": "hFZ7" };
      (r.keys = function() {
        return Object.keys(o);
      }),
        (r.resolve = a),
        (t.exports = r),
        (r.id = "kRpp");
    },
    mtxM: function(t, e, n) {
      "use strict";
      function r() {
        return new o.default({
          mode: "history",
          base: "/",
          linkActiveClass: "nuxt-link-active",
          linkExactActiveClass: "nuxt-link-exact-active",
          scrollBehavior: s,
          routes: [{ path: "/", component: i, name: "index" }],
          fallback: !1
        });
      }
      e.a = r;
      var a = n("E+ia"),
        o = n("cigS");
      a.default.use(o.default);
      var i = function() {
          return n
            .e(0)
            .then(n.bind(null, "/TYz"))
            .then(function(t) {
              return t.default || t;
            });
        },
        s = function(t, e, n) {
          if (n) return n;
          var r = {};
          return (
            t.matched.length < 2
              ? (r = { x: 0, y: 0 })
              : t.matched.some(function(t) {
                  return t.components.default.options.scrollToTop;
                }) && (r = { x: 0, y: 0 }),
            t.hash && (r = { selector: t.hash }),
            r
          );
        };
    },
    p5rU: function(t, e) {
      function n(t) {
        throw new Error("Cannot find module '" + t + "'.");
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = "p5rU");
    },
    qcny: function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return R;
      });
      var r = n("lC5x"),
        a = n.n(r),
        o = n("rVsN"),
        i = (n.n(o), n("liLe")),
        s = n.n(i),
        u = n("aA9S"),
        c = n.n(u),
        f = n("4YfN"),
        l = n.n(f),
        p = n("J0Oq"),
        d = n.n(p),
        h = n("pAZL"),
        m = (n.n(h), n("E+ia")),
        v = n("7YoK"),
        x = n.n(v),
        y = n("mtxM"),
        b = n("0F0d"),
        _ = n("HBB+"),
        g = n("WRRc"),
        w = n("ct3O"),
        C = n("cs8z"),
        k = n("gXG+"),
        E = n("YLfZ"),
        $ = n("J2Ti");
      n.d(e, "a", function() {
        return w.a;
      });
      var R = (function() {
        var t = d()(
          a.a.mark(function t(e) {
            var n, r, o, i, u, f, p, d;
            return a.a.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (n = Object(y.a)()),
                        (r = Object($.a)()),
                        (o = l()(
                          {
                            router: n,
                            store: r,
                            _nuxt: {
                              defaultTransition: j,
                              transitions: [j],
                              setTransitions: function(t) {
                                return (
                                  Array.isArray(t) || (t = [t]),
                                  (t = t.map(function(t) {
                                    return (t = t
                                      ? "string" == typeof t
                                        ? c()({}, j, { name: t })
                                        : c()({}, j, t)
                                      : j);
                                  })),
                                  (this.$options._nuxt.transitions = t),
                                  t
                                );
                              },
                              err: null,
                              dateErr: null,
                              error: function(t) {
                                "string" == typeof (t = t || null) &&
                                  (t = { statusCode: 500, message: t });
                                var e = this._nuxt || this.$options._nuxt;
                                return (e.dateErr = Date.now()), (e.err = t), t;
                              }
                            }
                          },
                          k.a
                        )),
                        (r.app = o),
                        (i = e
                          ? e.next
                          : function(t) {
                              return o.router.push(t);
                            }),
                        (u = void 0),
                        e
                          ? (u = n.resolve(e.url).route)
                          : ((f = Object(E.e)(n.options.base)),
                            (u = n.resolve(f).route)),
                        (p = Object(E.d)(
                          {
                            isServer: !!e,
                            isClient: !e,
                            route: u,
                            next: i,
                            error: o._nuxt.error.bind(o),
                            store: r,
                            req: e ? e.req : void 0,
                            res: e ? e.res : void 0,
                            beforeRenderFns: e ? e.beforeRenderFns : void 0
                          },
                          o
                        )),
                        (d = function(t, e) {
                          if (!t)
                            throw new Error(
                              "inject(key, value) has no key provided"
                            );
                          if (!e)
                            throw new Error(
                              "inject(key, value) has no value provided"
                            );
                          (t = "$" + t),
                            (o[t] = e),
                            m.default.use(function() {
                              var e = "__nuxt_" + t + "_installed__";
                              m.default[e] ||
                                ((m.default[e] = !0),
                                m.default.prototype.hasOwnProperty(t) ||
                                  s()(m.default.prototype, t, {
                                    get: function() {
                                      return this.$root.$options[t];
                                    }
                                  }));
                            }),
                            (r[t] = o[t]);
                        }),
                        window.__NUXT__ &&
                          window.__NUXT__.state &&
                          r.replaceState(window.__NUXT__.state),
                        (t.next = 13);
                      break;
                    case 13:
                      return t.abrupt("return", {
                        app: o,
                        router: n,
                        store: r
                      });
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
        return function(e) {
          return t.apply(this, arguments);
        };
      })();
      m.default.component(b.a.name, b.a),
        m.default.component(_.a.name, _.a),
        m.default.component(g.a.name, g.a),
        m.default.component(C.a.name, C.a),
        m.default.use(x.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid"
        });
      var j = {
        name: "page",
        mode: "out-in",
        appear: !1,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
      };
    },
    unZF: function(t, e, n) {
      "use strict";
      var r = n("HzJ8"),
        a = n.n(r),
        o = n("p5rU"),
        i = o.keys(),
        s = {},
        u = !0,
        c = !1,
        f = void 0;
      try {
        for (var l, p = a()(i); !(u = (l = p.next()).done); u = !0) {
          var d = l.value;
          s[d.replace(/^\.\//, "").replace(/\.(js|ts)$/, "")] = (function(t) {
            var e = o(t);
            return e.default ? e.default : e;
          })(d);
        }
      } catch (t) {
        (c = !0), (f = t);
      } finally {
        try {
          !u && p.return && p.return();
        } finally {
          if (c) throw f;
        }
      }
      e.a = s;
    },
    vdRI: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        n.d(e, "state", function() {
          return l;
        }),
        n.d(e, "getters", function() {
          return p;
        }),
        n.d(e, "mutations", function() {
          return d;
        }),
        n.d(e, "actions", function() {
          return h;
        });
      var r = n("lC5x"),
        a = n.n(r),
        o = n("J0Oq"),
        i = n.n(o),
        s = n("a3Yh"),
        u = n.n(s),
        c = n("hFZ7"),
        f = n("/C1n"),
        l = function() {
          return { name: "1234" };
        },
        p = {},
        d = u()({}, c.MUSIC_PLAYING, function(t) {
          t.name = "9999";
        }),
        h = {
          musicRecommend: (function() {
            function t(t) {
              return e.apply(this, arguments);
            }
            var e = i()(
              a.a.mark(function t(e) {
                var n;
                e.commit;
                return a.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), f.a.recommendMusic();
                        case 2:
                          return (n = t.sent), t.abrupt("return", n);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            return t;
          })(),
          musicNew: (function() {
            function t(t) {
              return e.apply(this, arguments);
            }
            var e = i()(
              a.a.mark(function t(e) {
                var n;
                e.commit;
                return a.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), f.a.newMusic();
                        case 2:
                          return (n = t.sent), t.abrupt("return", n);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            return t;
          })(),
          hotMusic: (function() {
            function t(t) {
              return e.apply(this, arguments);
            }
            var e = i()(
              a.a.mark(function t(e) {
                var n;
                e.commit;
                return a.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), f.a.hotMuiscWy(1);
                        case 2:
                          return (n = t.sent), t.abrupt("return", n);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            return t;
          })(),
          searchMusic: (function() {
            function t(t, n) {
              return e.apply(this, arguments);
            }
            var e = i()(
              a.a.mark(function t(e, n) {
                var r;
                e.commit;
                return a.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), f.a.searchMusic(n);
                        case 2:
                          return (r = t.sent), t.abrupt("return", r);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            return t;
          })(),
          searchSuggest: (function() {
            function t(t, n) {
              return e.apply(this, arguments);
            }
            var e = i()(
              a.a.mark(function t(e, n) {
                var r;
                e.commit;
                return a.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.log(n), (t.next = 3), f.a.searchSuggest(n)
                          );
                        case 3:
                          return (r = t.sent), t.abrupt("return", r);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            return t;
          })()
        };
    },
    "x/JP": function(t, e, n) {
      "use strict";
      var r = n("rVsN"),
        a = n.n(r),
        o = n("E+ia"),
        i = n("F88d"),
        s = {
          _default: function() {
            return n
              .e(1)
              .then(n.bind(null, "Ma2J"))
              .then(function(t) {
                return t.default || t;
              });
          }
        },
        u = {};
      e.a = {
        head: {
          title: "y",
          meta: [
            { charset: "utf-8" },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "y" }
          ],
          link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "stylesheet", href: "/css/common.css" },
            {
              rel: "stylesheet",
              href: "https://unpkg.com/vant/lib/vant-css/index.css"
            }
          ],
          style: [],
          script: []
        },
        data: function() {
          return { layout: null, layoutName: "" };
        },
        beforeCreate: function() {
          o.default.util.defineReactive(this, "nuxt", this.$options._nuxt);
        },
        created: function() {
          (o.default.prototype.$nuxt = this),
            "undefined" != typeof window && (window.$nuxt = this),
            (this.error = this.nuxt.error);
        },
        mounted: function() {
          this.$loading = this.$refs.loading;
        },
        watch: { "nuxt.err": "errorChanged" },
        methods: {
          errorChanged: function() {
            this.nuxt.err &&
              this.$loading &&
              (this.$loading.fail && this.$loading.fail(),
              this.$loading.finish && this.$loading.finish());
          },
          setLayout: function(t) {
            (t && u["_" + t]) || (t = "default"), (this.layoutName = t);
            var e = "_" + t;
            return (this.layout = u[e]), this.layout;
          },
          loadLayout: function(t) {
            var e = this;
            (t && (s["_" + t] || u["_" + t])) || (t = "default");
            var n = "_" + t;
            return u[n]
              ? a.a.resolve(u[n])
              : s[n]()
                  .then(function(t) {
                    return (u[n] = t), delete s[n], u[n];
                  })
                  .catch(function(t) {
                    if (e.$nuxt)
                      return e.$nuxt.error({
                        statusCode: 500,
                        message: t.message
                      });
                  });
          }
        },
        components: { NuxtLoading: i.a }
      };
    }
  },
  ["T23V"]
);
//# sourceMappingURL=app.586fe30b27423b63104b.js.map
