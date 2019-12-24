(this.webpackJsonptasktsproject = this.webpackJsonptasktsproject || []).push([
  [0],
  {
    20: function(e, t, n) {
      e.exports = n.p + "static/media/sf.0c92876a.svg";
    },
    21: function(e, t, n) {
      e.exports = n.p + "static/media/star.ca20135a.svg";
    },
    22: function(e, t, n) {
      e.exports = n.p + "static/media/rep.f868b1b9.svg";
    },
    23: function(e, t, n) {
      e.exports = n.p + "static/media/am.a873b24d.svg";
    },
    26: function(e, t, n) {
      e.exports = n(37);
    },
    31: function(e, t, n) {},
    37: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        s = n(19),
        o = (n(31), n(1)),
        i = n(2),
        c = n(4),
        l = n(3),
        u = n(5),
        p = (function(e) {
          function t() {
            var e, n;
            Object(o.a)(this, t);
            for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++)
              r[s] = arguments[s];
            return (
              ((n = Object(c.a)(
                this,
                (e = Object(l.a)(t)).call.apply(e, [this].concat(r))
              )).state = { hasError: !1 }),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidCatch",
                value: function(e, t) {
                  console.log("error", e),
                    console.log("info", t),
                    this.setState({ hasError: !0 });
                }
              },
              {
                key: "render",
                value: function() {
                  return this.state.hasError
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "p",
                          null,
                          "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u041e\u0448\u0438\u0431\u043a\u0430 :("
                        ),
                        r.a.createElement(
                          "button",
                          {
                            onClick: function() {
                              return console.log(
                                "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435"
                              );
                            }
                          },
                          "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435"
                        )
                      )
                    : this.props.children;
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        h = function() {
          return a.createElement(
            "div",
            { className: "burger-menu burger-menu_active" },
            a.createElement(
              "a",
              { href: "#", className: "burger-menu__button" },
              a.createElement("span", { className: "burger-menu__lines" })
            ),
            a.createElement(
              "nav",
              { className: "burger-menu__nav" },
              a.createElement(
                "a",
                { href: "/", className: "burger-menu__link" },
                "Home"
              ),
              a.createElement(
                "a",
                { href: "/DisplayGit", className: "burger-menu__link" },
                "GitProfile"
              )
            ),
            a.createElement("div", { className: "burger-menu__overlay" })
          );
        },
        m = n(10),
        f = n(20),
        b = n.n(f),
        g = n(21),
        v = n.n(g),
        j = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(c.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return a.createElement(
                    "div",
                    { className: "App", key: this.props.name },
                    "\u0418\u043c\u044f \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f: ",
                    this.props.name,
                    " ",
                    a.createElement("br", null),
                    "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",
                    this.props.description,
                    " ",
                    a.createElement("br", null),
                    a.createElement(
                      "div",
                      { id: "repinfo" },
                      a.createElement("img", { src: b.a }),
                      this.props.forks_count,
                      a.createElement("img", { src: v.a }),
                      this.props.stargazers_count
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        E = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(c.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return (
                    console.log(this.state),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      this.props.hits.map(function(e) {
                        return r.a.createElement(j, {
                          name: e.name,
                          description: e.description,
                          forks_count: e.forks_count,
                          stargazers_count: e.stargazers_count
                        });
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        O = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(c.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return a.createElement(
                    "div",
                    { className: "info", key: this.props.login },
                    a.createElement("img", {
                      className: "avatar",
                      src: this.props.avatar_url
                    }),
                    a.createElement("br", null),
                    this.props.login,
                    " ",
                    a.createElement("br", null),
                    this.props.name
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        d = n(22),
        _ = n.n(d),
        y = n(23),
        w = n.n(y),
        k = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(c.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return a.createElement(
                    "div",
                    { className: "about" },
                    a.createElement("img", { src: _.a }),
                    this.props.public_repos,
                    a.createElement("img", { src: w.a }),
                    this.props.followers
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        x = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(c.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return (
                    console.log(this.state),
                    a.createElement(
                      "div",
                      null,
                      a.createElement(O, {
                        login: this.props.login,
                        avatar_url: this.props.avatar_url,
                        public_repos: this.props.public_repos,
                        followers: this.props.followers,
                        name: this.props.name
                      }),
                      a.createElement(k, {
                        public_repos: this.props.public_repos,
                        followers: this.props.followers
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        C = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(c.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return a.createElement("img", {
                    className: "avafol",
                    src: this.props.avatar_url
                  });
                }
              }
            ]),
            t
          );
        })(a.Component),
        N = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(c.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return (
                    console.log(this.state),
                    a.createElement(
                      a.Fragment,
                      null,
                      this.props.bites.map(function(e) {
                        return a.createElement(C, { avatar_url: e.avatar_url });
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        V = (function(e) {
          function t(e) {
            var n;
            return (
              Object(o.a)(this, t),
              ((n = Object(c.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).onValueChange = function(e) {
                n.setState({ textBoxValue: e.currentTarget.value });
              }),
              (n.display = function() {
                n.props.inputsave(n.state.textBoxValue),
                  n.props.userS(n.state.textBoxValue),
                  n.props.following(n.state.textBoxValue);
              }),
              (n.handleKeyPress = function(e) {
                "Enter" === e.key &&
                  (n.props.inputsave(n.state.textBoxValue),
                  n.props.userS(n.state.textBoxValue),
                  n.props.following(n.state.textBoxValue));
              }),
              (n.state = { textBoxValue: "" }),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("input", {
                      placeholder: "UserName",
                      onChange: this.onValueChange,
                      value: this.state.textBoxValue,
                      onKeyPress: this.handleKeyPress
                    }),
                    r.a.createElement(
                      "button",
                      { id: "display", onClick: this.display },
                      "\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        S = (function(e) {
          function t(e) {
            var n;
            return (
              Object(o.a)(this, t),
              ((n = Object(c.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).save = function(e) {
                fetch("https://api.github.com/users/".concat(e, "/repos"))
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    return n.setState({ hits: e });
                  });
              }),
              (n.user = function(e) {
                fetch("https://api.github.com/users/".concat(e))
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    return n.setState({
                      login: e.login,
                      avatar_url: e.avatar_url,
                      public_repos: e.public_repos,
                      followers: e.followers,
                      name: e.name
                    });
                  });
              }),
              (n.following = function(e) {
                fetch("https://api.github.com/users/".concat(e, "/following"))
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    return n.setState({ bites: e.slice(0, 16) });
                  });
              }),
              (n.state = {
                name: "",
                hits: [],
                hasError: !1,
                user: "",
                login: "",
                avatar_url: "",
                public_repos: "",
                followers: "",
                following: "",
                bites: []
              }),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return (
                    console.log(this.state),
                    a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(V, {
                        userS: this.user,
                        inputsave: this.save,
                        following: this.following
                      }),
                      a.createElement(
                        "div",
                        { id: "main" },
                        a.createElement(
                          "div",
                          { id: "left" },
                          a.createElement(x, {
                            login: this.state.login,
                            avatar_url: this.state.avatar_url,
                            public_repos: this.state.public_repos,
                            followers: this.state.followers,
                            name: this.state.name
                          }),
                          a.createElement(
                            "div",
                            { id: "avatars" },
                            a.createElement(N, {
                              bites: this.state.bites,
                              avatar_url: this.state.avatar_url
                            })
                          )
                        ),
                        a.createElement(
                          "div",
                          { id: "right" },
                          a.createElement(E, {
                            hits: this.state.hits,
                            name: this.state.name
                          })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        B = (function(e) {
          function t(e) {
            var n;
            return (
              Object(o.a)(this, t),
              ((n = Object(c.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).save = function(e) {
                fetch("https://api.github.com/users/".concat(e, "/repos"))
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    return n.setState({ hits: e });
                  });
              }),
              (n.user = function(e) {
                fetch("https://api.github.com/users/".concat(e))
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    return n.setState({
                      login: e.login,
                      avatar_url: e.avatar_url,
                      public_repos: e.public_repos,
                      followers: e.followers,
                      name: e.name
                    });
                  });
              }),
              (n.following = function(e) {
                fetch("https://api.github.com/users/".concat(e, "/following"))
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    return n.setState({ bites: e.slice(0, 16) });
                  });
              }),
              (n.state = {
                name: "",
                hits: [],
                hasError: !1,
                user: "",
                login: "",
                avatar_url: "",
                public_repos: "",
                followers: "",
                following: "",
                bites: []
              }),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidCatch",
                value: function() {
                  this.setState({ hasError: !0 });
                }
              },
              {
                key: "render",
                value: function() {
                  return (
                    console.log(this.state),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        p,
                        null,
                        r.a.createElement("div", { id: "header" }),
                        r.a.createElement(h, null),
                        r.a.createElement(m.a, {
                          path: "/DisplayGit",
                          component: S
                        }),
                        r.a.createElement(
                          "div",
                          { className: "mainPage" },
                          r.a.createElement(
                            "h1",
                            { className: "GitViewer" },
                            "GitViewer"
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        F = n(14);
      Object(s.render)(
        r.a.createElement(F.a, null, r.a.createElement(B, null)),
        document.getElementById("root")
      );
    }
  },
  [[26, 1, 2]]
]);
//# sourceMappingURL=main.a483d9eb.chunk.js.map
