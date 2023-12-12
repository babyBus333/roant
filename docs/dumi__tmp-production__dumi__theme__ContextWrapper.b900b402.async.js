'use strict';
(self.webpackChunkrokid_roant = self.webpackChunkrokid_roant || []).push([
  [923],
  {
    27141: function (h, o, _) {
      _.r(o),
        _.d(o, {
          default: function () {
            return p;
          },
        });
      var i = _(46686),
        l = _.n(i),
        e = _(50959),
        t = _(31644),
        u = _(12180),
        n = _(7907),
        m = _(36354),
        E = _(11527),
        c = {};
      function p() {
        var D = (0, t.pC)(),
          f = (0, e.useState)(!0),
          r = l()(f, 2),
          P = r[0],
          s = r[1],
          a = (0, e.useRef)(t.m8.location.pathname);
        return (
          (0, e.useEffect)(function () {
            return t.m8.listen(function (d) {
              s(!0),
                d.location.pathname !== a.current &&
                  ((a.current = d.location.pathname), document.documentElement.scrollTo(0, 0));
            });
          }, []),
          (0, E.jsx)(u.D.Provider, {
            value: {
              pkg: {
                name: 'rokid-roant',
                description: 'rokid-roant',
                version: '0.1.3',
                license: 'MIT',
                authors: [],
              },
              entryExports: c,
              demos: n.DE,
              components: n.wx,
              locales: m.k,
              loading: P,
              setLoading: s,
              themeConfig: {
                footer:
                  'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
                name: 'rokid-roant',
              },
            },
            children: D,
          })
        );
      }
    },
  },
]);
