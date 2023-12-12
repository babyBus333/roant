'use strict';
(self.webpackChunkrokid_roant = self.webpackChunkrokid_roant || []).push([
  [366],
  {
    1710: function (K, u, e) {
      e.r(u);
      var s = e(30279),
        C = e.n(s),
        d = e(23786),
        y = e(76978),
        i = e(46686),
        r = e.n(i),
        p = e(50959),
        j = e(4759),
        t = e(11527),
        D = [
          { keyPath: 'name', name: '\u59D3\u540D', required: !0 },
          {
            keyPath: 'age',
            type: 'select',
            name: '\u5E74\u9F84',
            props: {
              options: [
                { label: '\u4E24\u5E74\u534A', value: 2.5 },
                { label: '\u4E24\u5E74', value: 2 },
                { label: '\u4E94\u5E74', value: 5 },
              ],
            },
            initialValue: 2.5,
          },
        ];
      u.default = function () {
        var m = y.Z.useForm(),
          h = r()(m, 1),
          b = h[0],
          $ = p.useState(!0),
          v = r()($, 2),
          S = v[0],
          x = v[1],
          M = {
            form: b,
            layout: 'vertical',
            rowProps: { gutter: [30, 0] },
            colProps: { span: 12 },
            fields: D,
            activeFields: [{ keyPath: 'name', visible: S }],
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)('button', {
              type: 'button',
              onClick: function () {
                return x(!S);
              },
              children: '\u59D3\u540D',
            }),
            (0, t.jsx)(j.Z, C()({}, M)),
          ],
        });
      };
    },
    19606: function (K, u, e) {
      var s = e(50959);
      u.Z = (0, s.createContext)({});
    },
    4759: function (K, u, e) {
      e.d(u, {
        Z: function () {
          return Y;
        },
      });
      var s = e(23786),
        C = e(76978),
        d = e(83365),
        y = e(68073),
        i = e(30279),
        r = e.n(i),
        p = e(44463),
        j = e.n(p),
        t = e(50959),
        D = e(42254),
        m = e(15515),
        h = e(94434),
        b = e.n(h),
        $ = e(58578),
        v = e(59461),
        S = e(58634),
        x = e(37912),
        M = e(42627);
      function I(f, o) {
        var c = o.required,
          a = (0, M.$)(c[f.type || 'input'], f) || (0, M.$)(c.default, f);
        return a;
      }
      function H(f, o) {
        var c = o.placeholder,
          a = (0, M.$)(c[f.type || 'input'], f) || (0, M.$)(c.default, f);
        return a;
      }
      var P = e(11527),
        z = [
          'props',
          'render',
          'visible',
          'formElement',
          'commonColProps',
          'keyPath',
          'required',
          'defaultProps',
          'formLocale',
          'colProps',
        ],
        l = function (o) {
          var c = o.props,
            a = o.render,
            R = o.visible,
            T = o.formElement,
            O = o.commonColProps,
            L = o.keyPath,
            F = o.required,
            W = o.defaultProps,
            Z = o.formLocale,
            E = o.colProps,
            g = j()(o, z),
            U = (0, t.useMemo)(
              function () {
                return typeof a == 'function' ? a : T || x.Z;
              },
              [a],
            ),
            A = O || E;
          O && E && (A = r()(r()({}, O), E));
          var B = A ? v.Z : t.Fragment,
            n = r()(
              r()({}, g),
              {},
              {
                label: g.name,
                name: L,
                rules: F
                  ? [{ required: !0, message: I(o, Z) }].concat(b()(g.rules || []))
                  : g.rules,
              },
            ),
            J = r()(r()({ placeholder: H(o, Z) }, W), c);
          return R === !1
            ? null
            : (0, P.jsx)(
                B,
                r()(
                  r()({}, A),
                  {},
                  {
                    children: (0, P.jsx)(
                      C.Z.Item,
                      r()(r()({}, n), {}, { children: U && (0, P.jsx)(U, r()({}, J)) }),
                    ),
                  },
                ),
              );
        },
        Q = l,
        N = ['activeFields', 'fields', 'children', 'rowProps', 'colProps'],
        V = 'input',
        G = function (o) {
          var c = o.activeFields,
            a = c === void 0 ? [] : c,
            R = o.fields,
            T = R === void 0 ? [] : R,
            O = o.children,
            L = o.rowProps,
            F = o.colProps,
            W = j()(o, N),
            Z = (0, D.Z)(),
            E = Z.form,
            g = E.fieldTypes,
            U = E.fieldDefaultProps,
            A = (0, t.useMemo)(
              function () {
                return (0, m.G)(T, a, 'keyPath').map(function (n) {
                  return (0,
                  t.createElement)(Q, r()(r()({}, n), {}, { key: (0, m.k)(n.keyPath), commonColProps: F, formElement: g[n.type || V], defaultProps: n.render ? void 0 : U[n.type || V], formLocale: Z.locale.form }));
                });
              },
              [a],
            ),
            B = L ? y.Z : t.Fragment;
          return (0, P.jsx)(
            C.Z,
            r()(
              r()({}, W),
              {},
              {
                children: (0, P.jsx)(
                  B,
                  r()(r()({}, L), {}, { children: (0, P.jsxs)(P.Fragment, { children: [A, O] }) }),
                ),
              },
            ),
          );
        };
      G.displayName = 'RForm';
      var Y = G;
    },
    42254: function (K, u, e) {
      e.d(u, {
        Z: function () {
          return o;
        },
      });
      var s = e(32699),
        C = e(50959),
        d = e(19606),
        y = e(15825),
        i = e(25787),
        r = e(58634),
        p = e(37912),
        j = e(53649),
        t = e(83381),
        D = e(77606),
        m = e(63811),
        h = e(92361),
        b = e(62010),
        $ = e(30279),
        v = e.n($),
        S = e(18709),
        x = e(50400),
        M = e(87698),
        I = e(59633),
        H = e(44463),
        P = e.n(H),
        z = e(75909),
        l = e(11527),
        Q = ['options', 'visibleCount', 'moreText'],
        N = function (a) {
          var R = a.options,
            T = a.visibleCount,
            O = a.moreText,
            L = P()(a, Q),
            F = R.filter(function (n) {
              var J = n.visible;
              return J !== !1;
            }),
            W = [F.slice(0, T), F.slice(T)],
            Z = W[0],
            E = W[1],
            g = Z.map(function (n) {
              return (0,
              l.jsx)(x.Z, v()(v()({ type: 'link' }, (0, s.omit)(n, ['key', 'name', 'visible', 'icon'])), {}, { children: (0, l.jsxs)(I.Z, { size: 6, children: [n.icon && (0, l.jsx)(z.Z, { component: n.icon }), (0, l.jsx)('span', { children: n.name })] }) }), n.key || n.name);
            }),
            U = E.map(function (n) {
              return {
                label: (0, l.jsx)(
                  x.Z,
                  v()(
                    v()({ type: 'link' }, (0, s.omit)(n, ['key', 'name', 'visible', 'icon'])),
                    {},
                    {
                      children: (0, l.jsxs)(I.Z, {
                        size: 6,
                        children: [
                          n.icon && (0, l.jsx)(z.Z, { component: n.icon }),
                          (0, l.jsx)('span', { children: n.name }),
                        ],
                      }),
                    },
                  ),
                ),
                key: n.key || n.name,
              };
            }),
            A = v()({ placement: 'bottom', arrow: !0, overlay: (0, l.jsx)(b.Z, { items: U }) }, L),
            B = E.length
              ? (0, l.jsx)(
                  m.Z,
                  v()(v()({}, A), {}, { children: (0, l.jsx)(x.Z, { type: 'link', children: O }) }),
                )
              : null;
          return (0, l.jsxs)(I.Z, {
            className: 'r-dropdown-action',
            size: 0,
            split: (0, l.jsx)(t.Z, {
              type: 'vertical',
              style: { borderLeft: '1px solid #E4E7EE' },
            }),
            children: [g, B],
          });
        };
      N.defaultProps = { visibleCount: 3, moreText: '\u66F4\u591A' };
      var V = N,
        G = {
          table: { showTotal: '\u5171{total}\u6761' },
          form: {
            placeholder: {
              input: '\u8BF7\u8F93\u5165{name}',
              select: '\u8BF7\u9009\u62E9{name}',
              default: '\u8BF7\u9009\u62E9{name}',
            },
            required: {
              input: '\u8BF7\u8F93\u5165{name}',
              select: '\u8BF7\u9009\u62E9{name}',
              default: '\u8BF7\u9009\u62E9{name}',
            },
          },
          searchTable: { search: '\u641C\u7D22', reset: '\u91CD\u7F6E' },
        },
        Y = {
          table: { fieldTypes: { dropdownAction: V } },
          description: { fieldTypes: {} },
          form: {
            fieldTypes: { input: p.Z, select: i.Z },
            fieldDefaultProps: { input: { allowClear: !0 }, select: { allowClear: !0 } },
          },
          searchTable: { isEnterQuery: !1 },
          locale: G,
        },
        f = function () {
          var a = (0, C.useContext)(d.Z);
          return (0, s.merge)(Y, a);
        },
        o = f;
    },
    15515: function (K, u, e) {
      e.d(u, {
        G: function () {
          return y;
        },
        k: function () {
          return d;
        },
      });
      var s = e(32699),
        C = e.n(s),
        d = function (r) {
          return (0, s.isArray)(r) ? r.join('.') : r;
        };
      function y(i, r, p) {
        if (i.length && r.length) {
          var j = {},
            t = (0, s.cloneDeep)(i),
            D = [];
          return (
            t.forEach(function (m, h) {
              j[d(m[p])] = h;
            }),
            r.forEach(function (m) {
              var h = j[d(m[p])];
              h !== void 0 ? (t[h] = (0, s.merge)(t[h], m)) : D.push(m);
            }),
            D.length ? t.concat(D) : t
          );
        }
        return i;
      }
    },
    42627: function (K, u, e) {
      e.d(u, {
        $: function () {
          return s;
        },
      });
      var s = function (d, y) {
        if (d && y) {
          var i = d.match(/\{[^}]+\}/g) || [];
          return (
            i.forEach(function (r) {
              var p = r.substring(1, r.length - 1);
              d = d.replace(r, y[p]);
            }),
            d
          );
        }
        return '';
      };
    },
  },
]);
