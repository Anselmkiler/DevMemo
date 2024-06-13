/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = a.document
    ? b(a, !0)
    : function (a) {
      if (!a.document) throw new Error('jQuery requires a window with a document');
      return b(a);
    } : b(a);
}('undefined' != typeof window ? window : this, function (a, b) {
  var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty,
    k = {}, l = '1.11.1', m = function (a, b) {
      return new m.fn.init(a, b);
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
      return b.toUpperCase();
    };
  m.fn = m.prototype = {
    jquery: l,
    constructor: m,
    selector: '',
    length: 0,
    toArray: function () {
      return d.call(this);
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    },
    pushStack: function (a) {
      var b = m.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function (a, b) {
      return m.each(this, a, b);
    },
    map: function (a) {
      return this.pushStack(m.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length, c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, m.extend = m.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
    for ('boolean' == typeof g && (j = g, g = arguments[h] || {}, h++), 'object' == typeof g || m.isFunction(g) ||
    (g = {}), h === i && (g = this, h--); i > h; h++) if (null !=
      (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c &&
    (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a &&
    m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g;
  }, m.extend({
    expando: 'jQuery' + (l + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (a) {
      throw new Error(a);
    },
    noop: function () {
    },
    isFunction: function (a) {
      return 'function' === m.type(a);
    },
    isArray: Array.isArray || function (a) {
      return 'array' === m.type(a);
    },
    isWindow: function (a) {
      return null != a && a == a.window;
    },
    isNumeric: function (a) {
      return !m.isArray(a) && a - parseFloat(a) >= 0;
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0;
    },
    isPlainObject: function (a) {
      var b;
      if (!a || 'object' !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
      try {
        if (a.constructor && !j.call(a, 'constructor') && !j.call(a.constructor.prototype, 'isPrototypeOf')) return !1;
      } catch (c) {
        return !1;
      }
      if (k.ownLast) for (b in a) return j.call(a, b);
      for (b in a) ;
      return void 0 === b || j.call(a, b);
    },
    type: function (a) {
      return null == a ? a + '' : 'object' == typeof a || 'function' == typeof a ? h[i.call(a)] || 'object' : typeof a;
    },
    globalEval: function (b) {
      b && m.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function (a) {
      return a.replace(o, 'ms-').replace(p, q);
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function (a, b, c) {
      var d, e = 0, f = a.length, g = r(a);
      if (c) {
        if (g) {
          for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
        } else for (e in a) if (d = b.apply(a[e],
          c), d === !1) break;
      } else if (g) {
        for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
      } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
      return a;
    },
    trim: function (a) {
      return null == a ? '' : (a + '').replace(n, '');
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (r(Object(a)) ? m.merge(c, 'string' == typeof a ? [a] : a) : f.call(c, a)), c;
    },
    inArray: function (a, b, c) {
      var d;
      if (b) {
        if (g) return g.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
      }
      return -1;
    },
    merge: function (a, b) {
      var c = +b.length, d = 0, e = a.length;
      while (c > d) a[e++] = b[d++];
      if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
      return a.length = e, a;
    },
    grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e;
    },
    map: function (a, b, c) {
      var d, f = 0, g = a.length, h = r(a), i = [];
      if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null !=
      d && i.push(d);
      return e.apply([], i);
    },
    guid: 1,
    proxy: function (a, b) {
      var c, e, f;
      return 'string' == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments,
        2), e = function () {
        return a.apply(b || this, c.concat(d.call(arguments)));
      }, e.guid = a.guid = a.guid ||
        m.guid++, e) : void 0;
    },
    now: function () {
      return +new Date;
    },
    support: k
  }), m.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '),
    function (a, b) {
      h['[object ' + b + ']'] = b.toLowerCase();
    });

  function r(a) {
    var b = a.length, c = m.type(a);
    return 'function' === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' ==
      typeof b && b > 0 && b - 1 in a;
  }

  var s = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = 'sizzle' + -new Date, v = a.document, w = 0, x = 0,
      y = gb(), z = gb(), A = gb(), B = function (a, b) {
        return a === b && (l = !0), 0;
      }, C = 'undefined', D = 1 << 31,
      E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
        return -1;
      },
      L = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]', N = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', O = N.replace('w', 'w#'),
      P = '\\[' + M + '*(' + N + ')(?:' + M + '*([*^$|!~]?=)' + M +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + O + '))|)' + M + '*\\]',
      Q = ':(' + N + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + P +
        ')*)|.*)\\)|)', R = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      S = new RegExp('^' + M + '*,' + M + '*'), T = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp('=' + M + '*([^\\]\'"]*?)' + M + '*\\]', 'g'), V = new RegExp(Q), W = new RegExp('^' + O + '$'),
      X = {
        ID: new RegExp('^#(' + N + ')'),
        CLASS: new RegExp('^\\.(' + N + ')'),
        TAG: new RegExp('^(' + N.replace('w', 'w*') + ')'),
        ATTR: new RegExp('^' + P),
        PSEUDO: new RegExp('^' + Q),
        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M +
          '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
        bool: new RegExp('^(?:' + L + ')$', 'i'),
        needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' +
          M + '*\\)|)(?=[^-]|$)', 'i')
      }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g,
      cb = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'), db = function (a, b, c) {
        var d = '0x' + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d |
          56320);
      };
    try {
      I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
    } catch (eb) {
      I = {
        apply: F.length ? function (a, b) {
          H.apply(a, J.call(b));
        } : function (a, b) {
          var c = a.length, d = 0;
          while (a[c++] = b[d++]) ;
          a.length = c - 1;
        }
      };
    }

    function fb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || 'string' != typeof a) return d;
      if (1 !== (k = b.nodeType) && 9 !== k) return [];
      if (p && !e) {
        if (f = _.exec(a)) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;
            if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(
            h), d;
        } else {
          if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
          if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d,
            b.getElementsByClassName(j)), d;
        }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 9 === k && a, 1 === k && 'object' !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute('id'))
              ? s = r.replace(bb, '\\$&')
              : b.setAttribute('id', s), s = '[id=\'' + s + '\'] ', l = o.length;
            while (l--) o[l] = s + qb(o[l]);
            w = ab.test(a) && ob(b.parentNode) || b, x = o.join(',');
          }
          if (x) try {
            return I.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {
          } finally {
            r || b.removeAttribute('id');
          }
        }
      }
      return i(a.replace(R, '$1'), b, d, e);
    }

    function gb() {
      var a = [];

      function b(c, e) {
        return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], b[c + ' '] = e;
      }

      return b;
    }

    function hb(a) {
      return a[u] = !0, a;
    }

    function ib(a) {
      var b = n.createElement('div');
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function jb(a, b) {
      var c = a.split('|'), e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }

    function kb(a, b) {
      var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d) return d;
      if (c) while (c = c.nextSibling) if (c === b) return -1;
      return a ? 1 : -1;
    }

    function lb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return 'input' === c && b.type === a;
      };
    }

    function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ('input' === c || 'button' === c) && b.type === a;
      };
    }

    function nb(a) {
      return hb(function (b) {
        return b = +b, hb(function (c, d) {
          var e, f = a([], c.length, b), g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }

    function ob(a) {
      return a && typeof a.getElementsByTagName !== C && a;
    }

    c = fb.support = {}, f = fb.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? 'HTML' !== b.nodeName : !1;
    }, m = fb.setDocument = function (a) {
      var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
      return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g &&
      g !== g.top && (g.addEventListener ? g.addEventListener('onunload', function () {
        m();
      }, !1) : g.attachEvent &&
        g.attachEvent('onunload', function () {
          m();
        })), c.attributes = ib(
        function (a) {
          return a.className = 'i', !a.getAttribute('className');
        }), c.getElementsByTagName = ib(
        function (a) {
          return a.appendChild(e.createComment('')), !a.getElementsByTagName('*').length;
        }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
        return a.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', a.firstChild.className = 'i', 2 ===
        a.getElementsByClassName('i').length;
      }), c.getById = ib(function (a) {
        return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if (typeof b.getElementById !== C && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          return a.getAttribute('id') === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          var c = typeof a.getAttributeNode !== C && a.getAttributeNode('id');
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return typeof b.getElementsByTagName !== C
          ? b.getElementsByTagName(a)
          : void 0;
      } : function (a, b) {
        var c, d = [], e = 0, f = b.getElementsByTagName(a);
        if ('*' === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d;
        }
        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return typeof b.getElementsByClassName !== C && p
          ? b.getElementsByClassName(a)
          : void 0;
      }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
        a.innerHTML = '<select msallowclip=\'\'><option selected=\'\'></option></select>', a.querySelectorAll(
          '[msallowclip^=\'\']').length && q.push('[*^$]=' + M + '*(?:\'\'|"")'), a.querySelectorAll(
          '[selected]').length || q.push('\\[' + M + '*(?:value|' + L + ')'), a.querySelectorAll(':checked').length ||
        q.push(':checked');
      }), ib(function (a) {
        var b = e.createElement('input');
        b.setAttribute('type', 'hidden'), a.appendChild(b).setAttribute('name', 'D'), a.querySelectorAll(
          '[name=d]').length && q.push('name' + M + '*[*^$|!~]?='), a.querySelectorAll(':enabled').length ||
        q.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), q.push(',.*:');
      })), (c.matchesSelector = $.test(
        s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector ||
          o.msMatchesSelector)) && ib(
        function (a) {
          c.disconnectedMatch = s.call(a, 'div'), s.call(a, '[s!=\'\']:x'), r.push('!=', Q);
        }), q = q.length &&
        new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(
        o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType
          ? a.documentElement
          : a, d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType ||
          !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) if (b === a) return !0;
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 &
        d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a)
          ? -1
          : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
        if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
        if (f === g) return kb(a, b);
        c = a;
        while (c = c.parentNode) h.unshift(c);
        c = b;
        while (c = c.parentNode) i.unshift(c);
        while (h[d] === i[d]) d++;
        return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, e) : n;
    }, fb.matches = function (a, b) {
      return fb(a, null, null, b);
    }, fb.matchesSelector = function (
      a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, '=\'$1\']'), !(!c.matchesSelector || !p || r &&
        r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {
      }
      return fb(b, n, null, [a]).length > 0;
    }, fb.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fb.attr = function (
      a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified
        ? f.value
        : null;
    }, fb.error = function (a) {
      throw new Error('Syntax error, unrecognized expression: ' + a);
    }, fb.uniqueSort = function (a) {
      var b, d = [], e = 0, f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1);
      }
      return k = null, a;
    }, e = fb.getText = function (a) {
      var b, c = '', d = 0, f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ('string' == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) c += e(b);
      return c;
    }, d = fb.selectors = {
      cacheLength: 50,
      createPseudo: hb,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        '>': {dir: 'parentNode', first: !0},
        ' ': {dir: 'parentNode'},
        '+': {dir: 'previousSibling', first: !0},
        '~': {dir: 'previousSibling'}
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || '').replace(cb, db), '~=' === a[2] &&
          (a[3] = ' ' + a[3] + ' '), a.slice(0, 4);
        },
        CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), 'nth' === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] +
            (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = +(a[7] + a[8] || 'odd' === a[3])) : a[3] &&
            fb.error(a[0]), a;
        },
        PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) &&
            (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0,
            3));
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(cb, db).toLowerCase();
          return '*' === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function (a) {
          var b = y[a + ' '];
          return b || (b = new RegExp('(^|' + M + ')' + a + '(' + M + '|$)')) && y(a, function (a) {
            return b.test('string' == typeof a.className && a.className || typeof a.getAttribute !== C &&
              a.getAttribute('class') || '');
          });
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = fb.attr(d, a);
            return null == e ? '!=' === b : b ? (e += '', '=' === b ? e === c : '!=' === b ? e !== c : '^=' === b ? c &&
              0 === e.indexOf(c) : '*=' === b ? c && e.indexOf(c) > -1 : '$=' === b
              ? c && e.slice(-c.length) === c
              : '~=' === b ? (' ' + e + ' ').indexOf(c) > -1 : '|=' === b ? e === c || e.slice(0, c.length + 1) === c +
                '-' : !1) : !0;
          };
        },
        CHILD: function (a, b, c, d, e) {
          var f = 'nth' !== a.slice(0, 3), g = 'last' !== a.slice(-4), h = 'of-type' === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? 'nextSibling' : 'previousSibling', q = b.parentNode,
              r = h && b.nodeName.toLowerCase(), s = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = p = 'only' === a && !o && 'nextSibling';
                }
                return !0;
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n &&
                  q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                  k[a] = [w, n, m];
                  break;
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l &&
                l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m &&
                (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        },
        PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error('unsupported pseudo: ' + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, '', b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(
            function (a, c) {
              var d, f = e(a, b), g = f.length;
              while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
            }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: hb(function (a) {
          var b = [], c = [], d = h(a.replace(R, '$1'));
          return d[u] ? hb(function (a, b, c, e) {
            var f, g = d(a, null, e, []), h = a.length;
            while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop();
          };
        }),
        has: hb(function (a) {
          return function (b) {
            return fb(a, b).length > 0;
          };
        }),
        contains: hb(
          function (a) {
            return function (b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
            };
          }),
        lang: hb(function (a) {
          return W.test(a || '') || fb.error('unsupported lang: ' + a), a = a.replace(cb, db).toLowerCase(), function (b) {
            var c;
            do if (c = p ? b.lang : b.getAttribute('xml:lang') ||
              b.getAttribute('lang')) return c = c.toLowerCase(), c === a ||
            0 === c.indexOf(a + '-'); while ((b = b.parentNode) && 1 === b.nodeType);
            return !1;
          };
        }),
        target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function (a) {
          return a === o;
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function (a) {
          return a.disabled === !1;
        },
        disabled: function (a) {
          return a.disabled === !0;
        },
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return 'input' === b && !!a.checked || 'option' === b && !!a.selected;
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
          return !0;
        },
        parent: function (a) {
          return !d.pseudos.empty(a);
        },
        header: function (a) {
          return Z.test(a.nodeName);
        },
        input: function (a) {
          return Y.test(a.nodeName);
        },
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return 'input' === b && 'button' === a.type || 'button' === b;
        },
        text: function (a) {
          var b;
          return 'input' === a.nodeName.toLowerCase() && 'text' === a.type &&
            (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase());
        },
        first: nb(function () {
          return [0];
        }),
        last: nb(function (a, b) {
          return [b - 1];
        }),
        eq: nb(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: nb(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a;
        }),
        odd: nb(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a;
        }),
        lt: nb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a;
        }),
        gt: nb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = lb(b);
    for (b in {submit: !0, reset: !0}) d.pseudos[b] = mb(b);

    function pb() {
    }

    pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + ' '];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) &&
        (c = e.shift(), f.push({value: c, type: e[0].replace(R, ' ')}), h = h.slice(c.length));
        for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) ||
        (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length));
        if (!c) break;
      }
      return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
    };

    function qb(a) {
      for (var b = 0, c = a.length, d = ''; c > b; b++) d += a[b].value;
      return d;
    }

    function rb(a, b, c) {
      var d = b.dir, e = c && 'parentNode' === d, f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (
        b, c, g) {
        var h, i, j = [w, f];
        if (g) {
          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = b[d]) if (1 ===
          b.nodeType || e) {
          if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
          if (i[d] = j, j[2] = a(b, c, g)) return !0;
        }
      };
    }

    function sb(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--) if (!a[e](b, c, d)) return !1;
        return !0;
      } : a[0];
    }

    function tb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
      return c;
    }

    function ub(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) &&
      (g.push(f), j && b.push(h));
      return g;
    }

    function vb(a, b, c, d, e, f) {
      return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
        var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || '*', h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ub(r, n), d(j, [], h, i), k = j.length;
          while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--) (l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i);
            }
            k = r.length;
            while (k--) (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
      });
    }

    function wb(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g
        ? 1
        : 0, k = rb(function (a) {
        return a === b;
      }, h, !0), l = rb(function (a) {
          return K.call(b, a) > -1;
        }, h,
        !0), m = [
        function (a, c, d) {
          return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        }]; f >
           i; i++) if (c = d.relative[a[i].type]) m = [
        rb(sb(m), c)]; else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
          return vb(i > 1 && sb(m), i > 1 &&
            qb(a.slice(0, i - 1).concat({value: ' ' === a[i - 2].type ? '*' : ''})).replace(R, '$1'), c, e > i &&
            wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
        }
        m.push(c);
      }
      return sb(m);
    }

    function xb(a, b) {
      var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
        var l, m, o, p = 0, q = '0', r = f && [], s = [], t = j, u = f || e && d.find.TAG('*', k),
          v = w += null == t ? 1 : Math.random() || .1, x = u.length;
        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;
            while (o = a[m++]) if (o(l, g, h)) {
              i.push(l);
              break;
            }
            k && (w = v);
          }
          c && ((l = !o && l) && p--, f && r.push(l));
        }
        if (p += q, c && q !== p) {
          m = 0;
          while (o = b[m++]) o(r, s, g, h);
          if (f) {
            if (p > 0) while (q--) r[q] || s[q] || (s[q] = G.call(i));
            s = ub(s);
          }
          I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
        }
        return k && (w = v, j = t), r;
      };
      return c ? hb(f) : f;
    }

    return h = fb.compile = function (a, b) {
      var c, d = [], e = [], f = A[a + ' '];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xb(e, d)), f.selector = a;
      }
      return f;
    }, i = fb.select = function (a, b, e, f) {
      var i, j, k, l, m, n = 'function' == typeof a && a, o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p &&
        d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
            break;
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
    }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(
      function (a) {
        return 1 & a.compareDocumentPosition(n.createElement('div'));
      }), ib(
      function (a) {
        return a.innerHTML = '<a href=\'#\'></a>', '#' === a.firstChild.getAttribute('href');
      }) ||
    jb('type|href|height|width',
      function (a, b, c) {
        return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
      }), c.attributes &&
    ib(function (a) {
      return a.innerHTML = '<input/>', a.firstChild.setAttribute('value', ''), '' ===
      a.firstChild.getAttribute('value');
    }) ||
    jb('value', function (a, b, c) {
      return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ib(
      function (a) {
        return null == a.getAttribute('disabled');
      }) || jb(L, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fb;
  }(a);
  m.find = s, m.expr = s.selectors, m.expr[':'] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
  var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

  function w(a, b, c) {
    if (m.isFunction(b)) return m.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return m.grep(a, function (a) {
      return a === b !== c;
    });
    if ('string' == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);
      b = m.filter(b, a);
    }
    return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }

  m.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ':not(' + a + ')'), 1 === b.length && 1 === d.nodeType
      ? m.find.matchesSelector(d, a) ? [d] : []
      : m.find.matches(a, m.grep(b, function (a) {
        return 1 === a.nodeType;
      }));
  }, m.fn.extend({
    find: function (a) {
      var b, c = [], d = this, e = d.length;
      if ('string' != typeof a) return this.pushStack(
        m(a).filter(function () {
          for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
        }));
      for (b = 0; e > b; b++) m.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + ' ' + a : a, c;
    },
    filter: function (a) {
      return this.pushStack(w(this, a || [], !1));
    },
    not: function (a) {
      return this.pushStack(w(this, a || [], !0));
    },
    is: function (a) {
      return !!w(this, 'string' == typeof a && t.test(a) ? m(a) : a || [], !1).length;
    }
  });
  var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
    var c, d;
    if (!a) return this;
    if ('string' == typeof a) {
      if (c = '<' === a.charAt(0) && '>' === a.charAt(a.length - 1) && a.length >= 3 ? [
        null,
        a,
        null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
      if (c[1]) {
        if (b = b instanceof m ? b[0] : b, m.merge(this,
          m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) &&
        m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        return this;
      }
      if (d = y.getElementById(c[2]), d && d.parentNode) {
        if (d.id !== c[2]) return x.find(a);
        this.length = 1, this[0] = d;
      }
      return this.context = y, this.selector = a, this;
    }
    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? 'undefined' !=
    typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector &&
    (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
  };
  A.prototype = m.fn, x = m(y);
  var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
  m.extend({
    dir: function (a, b, c) {
      var d = [], e = a[b];
      while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType &&
      d.push(e), e = e[b];
      return d;
    }, sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c;
    }
  }), m.fn.extend({
    has: function (a) {
      var b, c = m(a, this), d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
      });
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || 'string' != typeof a
        ? m(a, b || this.context)
        : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 &&
        (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
        f.push(c);
        break;
      }
      return this.pushStack(f.length > 1 ? m.unique(f) : f);
    },
    index: function (a) {
      return a ? 'string' == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] &&
      this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function D(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);
    return a;
  }

  m.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function (a) {
      return m.dir(a, 'parentNode');
    },
    parentsUntil: function (a, b, c) {
      return m.dir(a, 'parentNode', c);
    },
    next: function (a) {
      return D(a, 'nextSibling');
    },
    prev: function (a) {
      return D(a, 'previousSibling');
    },
    nextAll: function (a) {
      return m.dir(a, 'nextSibling');
    },
    prevAll: function (a) {
      return m.dir(a, 'previousSibling');
    },
    nextUntil: function (a, b, c) {
      return m.dir(a, 'nextSibling', c);
    },
    prevUntil: function (a, b, c) {
      return m.dir(a, 'previousSibling', c);
    },
    siblings: function (a) {
      return m.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function (a) {
      return m.sibling(a.firstChild);
    },
    contents: function (a) {
      return m.nodeName(a, 'iframe') ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
    }
  }, function (a, b) {
    m.fn[a] = function (c, d) {
      var e = m.map(this, b, c);
      return 'Until' !== a.slice(-5) && (d = c), d && 'string' == typeof d && (e = m.filter(d, e)), this.length > 1 &&
      (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });
  var E = /\S+/g, F = {};

  function G(a) {
    var b = F[a] = {};
    return m.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  m.Callbacks = function (a) {
    a = 'string' == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
      for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0],
        l[1]) === !1 && a.stopOnFalse) {
        c = !1;
        break;
      }
      b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
    }, k = {
      add: function () {
        if (h) {
          var d = h.length;
          !function f(b) {
            m.each(b, function (b, c) {
              var d = m.type(c);
              'function' === d ? a.unique && k.has(c) || h.push(c) : c && c.length && 'string' !== d && f(c);
            });
          }(arguments), b ? e = h.length : c && (g = d, j(c));
        }
        return this;
      },
      remove: function () {
        return h && m.each(arguments, function (a, c) {
          var d;
          while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
        }), this;
      },
      has: function (a) {
        return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
      },
      empty: function () {
        return h = [], e = 0, this;
      },
      disable: function () {
        return h = i = c = void 0, this;
      },
      disabled: function () {
        return !h;
      },
      lock: function () {
        return i = void 0, c || k.disable(), this;
      },
      locked: function () {
        return !i;
      },
      fireWith: function (a, c) {
        return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this;
      },
      fire: function () {
        return k.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!d;
      }
    };
    return k;
  }, m.extend({
    Deferred: function (a) {
      var b = [
        ['resolve', 'done', m.Callbacks('once memory'), 'resolved'],
        ['reject', 'fail', m.Callbacks('once memory'), 'rejected'],
        ['notify', 'progress', m.Callbacks('memory')]], c = 'pending', d = {
        state: function () {
          return c;
        },
        always: function () {
          return e.done(arguments).fail(arguments), this;
        },
        then: function () {
          var a = arguments;
          return m.Deferred(function (c) {
            m.each(b, function (b, f) {
              var g = m.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] +
                'With'](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function (a) {
          return null != a ? m.extend(a, d) : d;
        }
      }, e = {};
      return d.pipe = d.then, m.each(b, function (a, f) {
        var g = f[2], h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + 'With'](this === e ? d : this, arguments), this;
        }, e[f[0] + 'With'] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function (a) {
      var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
        g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
          return function (e) {
            b[a] = this, c[a] = arguments.length > 1
              ? d.call(arguments)
              : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
          };
        }, i, j, k;
      if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] &&
      m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }, m.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? m.readyWait++ : m.ready(!0);
    },
    ready: function (a) {
      if (a === !0 ? !--m.readyWait : !m.isReady) {
        if (!y.body) return setTimeout(m.ready);
        m.isReady = !0, a !== !0 && --m.readyWait > 0 ||
        (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler('ready'), m(y).off('ready')));
      }
    }
  });

  function I() {
    y.addEventListener
      ? (y.removeEventListener('DOMContentLoaded', J, !1), a.removeEventListener('load', J, !1))
      : (y.detachEvent('onreadystatechange', J), a.detachEvent('onload', J));
  }

  function J() {
    (y.addEventListener || 'load' === event.type || 'complete' === y.readyState) && (I(), m.ready());
  }

  m.ready.promise = function (b) {
    if (!H) if (H = m.Deferred(), 'complete' === y.readyState) setTimeout(
      m.ready); else if (y.addEventListener) y.addEventListener('DOMContentLoaded', J, !1), a.addEventListener('load',
      J, !1); else {
      y.attachEvent('onreadystatechange', J), a.attachEvent('onload', J);
      var c = !1;
      try {
        c = null == a.frameElement && y.documentElement;
      } catch (d) {
      }
      c && c.doScroll && !function e() {
        if (!m.isReady) {
          try {
            c.doScroll('left');
          } catch (a) {
            return setTimeout(e, 50);
          }
          I(), m.ready();
        }
      }();
    }
    return H.promise(b);
  };
  var K = 'undefined', L;
  for (L in m(k)) break;
  k.ownLast = '0' !== L, k.inlineBlockNeedsLayout = !1, m(function () {
    var a, b, c, d;
    c = y.getElementsByTagName('body')[0], c && c.style && (b = y.createElement('div'), d = y.createElement(
      'div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), typeof b.style.zoom !== K &&
    (b.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', k.inlineBlockNeedsLayout = a = 3 ===
      b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
  }), function () {
    var a = y.createElement('div');
    if (null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete a.test;
      } catch (b) {
        k.deleteExpando = !1;
      }
    }
    a = null;
  }(), m.acceptData = function (a) {
    var b = m.noData[(a.nodeName + ' ').toLowerCase()], c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute('classid') === b;
  };
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = 'data-' + b.replace(N, '-$1').toLowerCase();
      if (c = a.getAttribute(d), 'string' == typeof c) {
        try {
          c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c
            ? null
            : +c + '' === c ? +c : M.test(c) ? m.parseJSON(c) : c;
        } catch (e) {
        }
        m.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }

  function P(a) {
    var b;
    for (b in a) if (('data' !== b || !m.isEmptyObject(a[b])) && 'toJSON' !== b) return !1;
    return !0;
  }

  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || 'string' != typeof b) return k ||
      (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ('object' == typeof b ||
        'function' == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e ||
      (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), 'string' == typeof b
        ? (f = g[b], null == f && (f = g[m.camelCase(b)]))
        : f = g, f;
    }
  }

  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d
            ? b = [b]
            : (b = m.camelCase(b), b = b in d ? [b] : b.split(' ')), e = b.length;
          while (e--) delete d[b[e]];
          if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, P(g[h]))) &&
        (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
      }
    }
  }

  m.extend({
    cache: {},
    noData: {'applet ': !0, 'embed ': !0, 'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'},
    hasData: function (a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
    },
    data: function (a, b, c) {
      return Q(a, b, c);
    },
    removeData: function (a, b) {
      return R(a, b);
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return R(a, b, !0);
    }
  }), m.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0], g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, 'parsedAttrs'))) {
          c = g.length;
          while (c--) g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
          m._data(f, 'parsedAttrs', !0);
        }
        return e;
      }
      return 'object' == typeof a ? this.each(function () {
        m.data(this, a);
      }) : arguments.length > 1 ? this.each(
        function () {
          m.data(this, a, b);
        }) : f ? O(f, a, m.data(f, a)) : void 0;
    }, removeData: function (a) {
      return this.each(function () {
        m.removeData(this, a);
      });
    }
  }), m.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || 'fx') + 'queue', d = m._data(a, b), c &&
      (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function (a, b) {
      b = b || 'fx';
      var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
        m.dequeue(a, b);
      };
      'inprogress' === e && (e = c.shift(), d--), e &&
      ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function (a, b) {
      var c = b + 'queueHooks';
      return m._data(a, c) || m._data(a, c,
        {
          empty: m.Callbacks('once memory').add(function () {
            m._removeData(a, b + 'queue'), m._removeData(a, c);
          })
        });
    }
  }), m.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return 'string' != typeof a && (b = a, a = 'fx', c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b
        ? this
        : this.each(function () {
          var c = m.queue(this, a, b);
          m._queueHooks(this, a), 'fx' === a && 'inprogress' !== c[0] && m.dequeue(this, a);
        });
    },
    dequeue: function (a) {
      return this.each(function () {
        m.dequeue(this, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || 'fx', []);
    },
    promise: function (a, b) {
      var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
        --d || e.resolveWith(f, [f]);
      };
      'string' != typeof a && (b = a, a = void 0), a = a || 'fx';
      while (g--) c = m._data(f[g], a + 'queueHooks'), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    }
  });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ['Top', 'Right', 'Bottom', 'Left'],
    U = function (a, b) {
      return a = b || a, 'none' === m.css(a, 'display') || !m.contains(a.ownerDocument, a);
    },
    V = m.access = function (a, b, c, d, e, f, g) {
      var h = 0, i = a.length, j = null == c;
      if ('object' === m.type(c)) {
        e = !0;
        for (h in c) m.access(a, b, h, c[h], !0, f, g);
      } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j &&
      (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
        return j.call(m(a), c);
      })), b)) for (; i >
                      h; h++) b(
        a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, W = /^(?:checkbox|radio)$/i;
  !function () {
    var a = y.createElement('input'), b = y.createElement('div'), c = y.createDocumentFragment();
    if (b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', k.leadingWhitespace = 3 ===
      b.firstChild.nodeType, k.tbody = !b.getElementsByTagName(
      'tbody').length, k.htmlSerialize = !!b.getElementsByTagName('link').length, k.html5Clone = '<:nav></:nav>' !==
      y.createElement('nav').cloneNode(!0).outerHTML, a.type = 'checkbox', a.checked = !0, c.appendChild(
      a), k.appendChecked = a.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(
      !0).lastChild.defaultValue, c.appendChild(
      b), b.innerHTML = '<input type=\'radio\' checked=\'checked\' name=\'t\'/>', k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent &&
    (b.attachEvent('onclick', function () {
      k.noCloneEvent = !1;
    }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  }(), function () {
    var b, c, d = y.createElement('div');
    for (b in {submit: !0, change: !0, focusin: !0}) c = 'on' + b, (k[b + 'Bubbles'] = c in a) ||
    (d.setAttribute(c, 't'), k[b + 'Bubbles'] = d.attributes[c].expando === !1);
    d = null;
  }();
  var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

  function ab() {
    return !0;
  }

  function bb() {
    return !1;
  }

  function cb() {
    try {
      return y.activeElement;
    } catch (a) {
    }
  }

  m.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) ||
        (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return typeof m === K || a && m.event.triggered === a.type
            ? void 0
            : m.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || '').match(E) || [''], h = b.length;
        while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || '').split('.').sort(), o &&
        (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] ||
          {}, l = m.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && m.expr.match.needsContext.test(e),
          namespace: p.join('.')
        }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 ||
        (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent('on' + o, k))), j.add &&
        (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(
          l), m.event.global[o] = !0);
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        b = (b || '').match(E) || [''], j = b.length;
        while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) {
          l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] &&
            new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), i = f = n.length;
          while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) ||
          d && d !== g.selector && ('**' !== d || !g.selector) ||
          (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
          i && !n.length &&
          (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
        } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, 'events'));
      }
    },
    trigger: function (b, c, d, e) {
      var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, 'type') ? b.type : b,
        q = j.call(b, 'namespace') ? b.namespace.split('.') : [];
      if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) &&
      (p.indexOf('.') >= 0 && (q = p.split('.'), p = q.shift(), q.sort()), g = p.indexOf(':') < 0 && 'on' +
        p, b = b[m.expando] ? b : new m.Event(p, 'object' == typeof b && b), b.isTrigger = e
        ? 2
        : 3, b.namespace = q.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + q.join('\\.(?:.*\\.|)') +
        '(\\.|$)') : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c,
        [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
          l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
        }
        n = 0;
        while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h,
          'events') || {})[b.type] && m._data(h, 'handle'), f && f.apply(h, c), f = g && h[g], f && f.apply &&
        m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) &&
        m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;
          try {
            d[p]();
          } catch (r) {
          }
          m.event.triggered = void 0, l && (d[g] = l);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = m.event.fix(a);
      var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, 'events') || {})[a.type] || [],
        k = m.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = m.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re ||
            a.namespace_re.test(e.namespace)) &&
          (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem,
            i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
      if (h && i.nodeType && (!a.button || 'click' !== a.type)) for (; i != this; i = i.parentNode || this) if (1 ===
        i.nodeType && (i.disabled !== !0 || 'click' !== a.type)) {
        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + ' ', void 0 === e[c] &&
        (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
        e.length && g.push({elem: i, handlers: e});
      }
      return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g;
    },
    fix: function (a) {
      if (a[m.expando]) return a;
      var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props
        ? this.props.concat(g.props)
        : this.props, a = new m.Event(f), b = d.length;
      while (b--) c = d[b], a[c] = f[c];
      return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType &&
      (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
      ' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
        ' '), filter: function (a, b) {
        var c, d, e, f = b.button, g = b.fromElement;
        return null == a.pageX && null != b.clientX &&
        (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX +
          (e && e.scrollLeft || c && c.scrollLeft || 0) -
          (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY +
          (e && e.scrollTop || c && c.scrollTop || 0) -
          (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g &&
        (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f ||
        (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      }
    },
    special: {
      load: {noBubble: !0},
      focus: {
        trigger: function () {
          if (this !== cb() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {
          }
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === cb() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          return m.nodeName(this, 'input') && 'checkbox' === this.type && this.click
            ? (this.click(), !1)
            : void 0;
        }, _default: function (a) {
          return m.nodeName(a.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function (a, b, c, d) {
      var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    var d = 'on' + b;
    a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
  }, m.Event = function (a, b) {
    return this instanceof m.Event
      ? (a && a.type
        ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented ||
        void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb)
        : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp ||
        m.now(), void (this[m.expando] = !0))
      : new m.Event(a, b);
  }, m.Event.prototype = {
    isDefaultPrevented: bb,
    isPropagationStopped: bb,
    isImmediatePropagationStopped: bb,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation &&
      a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, m.each({mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout'},
    function (a, b) {
      m.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function (a) {
          var c, d = this, e = a.relatedTarget, f = a.handleObj;
          return (!e || e !== d && !m.contains(d, e)) &&
          (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
        }
      };
    }), k.submitBubbles || (m.event.special.submit = {
    setup: function () {
      return m.nodeName(this, 'form') ? !1 : void m.event.add(this, 'click._submit keypress._submit', function (a) {
        var b = a.target, c = m.nodeName(b, 'input') || m.nodeName(b, 'button') ? b.form : void 0;
        c && !m._data(c, 'submitBubbles') &&
        (m.event.add(c, 'submit._submit', function (a) {
          a._submit_bubble = !0;
        }), m._data(c, 'submitBubbles', !0));
      });
    },
    postDispatch: function (a) {
      a._submit_bubble &&
      (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate('submit', this.parentNode, a, !0));
    },
    teardown: function () {
      return m.nodeName(this, 'form') ? !1 : void m.event.remove(this, '._submit');
    }
  }), k.changeBubbles || (m.event.special.change = {
    setup: function () {
      return X.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) &&
      (m.event.add(this, 'propertychange._change',
        function (a) {
          'checked' === a.originalEvent.propertyName && (this._just_changed = !0);
        }), m.event.add(this,
        'click._change', function (a) {
          this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate('change', this, a, !0);
        })), !1) : void m.event.add(this, 'beforeactivate._change', function (a) {
        var b = a.target;
        X.test(b.nodeName) && !m._data(b, 'changeBubbles') && (m.event.add(b, 'change._change', function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate('change', this.parentNode, a, !0);
        }), m._data(b, 'changeBubbles', !0));
      });
    }, handle: function (a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || 'radio' !== b.type && 'checkbox' !== b.type
        ? a.handleObj.handler.apply(this, arguments)
        : void 0;
    }, teardown: function () {
      return m.event.remove(this, '._change'), !X.test(this.nodeName);
    }
  }), k.focusinBubbles || m.each({focus: 'focusin', blur: 'focusout'}, function (a, b) {
    var c = function (a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0);
    };
    m.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this, e = m._data(d, b);
        e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
      }, teardown: function () {
        var d = this.ownerDocument || this, e = m._data(d, b) - 1;
        e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
      }
    };
  }), m.fn.extend({
    on: function (a, b, c, d, e) {
      var f, g;
      if ('object' == typeof a) {
        'string' != typeof b && (c = c || b, b = void 0);
        for (f in a) this.on(f, b, c, a[f], e);
        return this;
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d &&
        ('string' == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d ===
      !1) d = bb; else if (!d) return this;
      return 1 === e && (g = d, d = function (a) {
        return m().off(a), g.apply(this, arguments);
      }, d.guid = g.guid ||
        (g.guid = m.guid++)), this.each(function () {
        m.event.add(this, a, d, c, b);
      });
    },
    one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler), this;
      if ('object' == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this;
      }
      return (b === !1 || 'function' == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(
        function () {
          m.event.remove(this, a, c, b);
        });
    },
    trigger: function (a, b) {
      return this.each(function () {
        m.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      return c ? m.event.trigger(a, b, c, !0) : void 0;
    }
  });

  function db(a) {
    var b = eb.split('|'), c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }

  var eb = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp('<(?:' + eb + ')[\\s/>]', 'i'), hb = /^\s+/,
    ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i,
    lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
      option: [1, '<select multiple=\'multiple\'>', '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      area: [1, '<map>', '</map>'],
      param: [1, '<object>', '</object>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: k.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>']
    }, sb = db(y), tb = sb.appendChild(y.createElement('div'));
  rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

  function ub(a, b) {
    var c, d, e = 0,
      f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || '*') : typeof a.querySelectorAll !== K
        ? a.querySelectorAll(b || '*')
        : void 0;
    if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f,
      ub(d, b));
    return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
  }

  function vb(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }

  function wb(a, b) {
    return m.nodeName(a, 'table') && m.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr')
      ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody'))
      : a;
  }

  function xb(a) {
    return a.type = (null !== m.find.attr(a, 'type')) + '/' + a.type, a;
  }

  function yb(a) {
    var b = pb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute('type'), a;
  }

  function zb(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) m._data(c, 'globalEval', !b || m._data(b[d], 'globalEval'));
  }

  function Ab(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = m.extend({}, g.data));
    }
  }

  function Bb(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);
        for (d in e.events) m.removeEvent(b, d, e.handle);
        b.removeAttribute(m.expando);
      }
      'script' === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : 'object' === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) &&
        (b.innerHTML = a.innerHTML))
        : 'input' === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value &&
        (b.value = a.value)) : 'option' === c ? b.defaultSelected = b.selected = a.defaultSelected : ('input' === c ||
          'textarea' === c) && (b.defaultValue = a.defaultValue);
    }
  }

  m.extend({
    clone: function (a, b, c) {
      var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
      if (k.html5Clone || m.isXMLDoc(a) || !gb.test('<' + a.nodeName + '>')
        ? f = a.cloneNode(!0)
        : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !==
        a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null !=
      (e = h[g]); ++g) d[g] && Bb(e, d[g]);
      if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]); else Ab(a, f);
      return d = ub(f, 'script'), d.length > 0 && zb(d, !i && ub(a, 'script')), d = h = e = null, f;
    },
    buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) if (f = a[q], f ||
      0 === f) if ('object' === m.type(f)) m.merge(p, f.nodeType ? [f] : f); else if (lb.test(f)) {
        h = h || o.appendChild(b.createElement('div')), i = (jb.exec(f) || ['', ''])[1].toLowerCase(), l = rb[i] ||
          rb._default, h.innerHTML = l[1] + f.replace(ib, '<$1></$2>') + l[2], e = l[0];
        while (e--) h = h.lastChild;
        if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
          f = 'table' !== i || kb.test(f) ? '<table>' !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f &&
            f.childNodes.length;
          while (e--) m.nodeName(j = f.childNodes[e], 'tbody') && !j.childNodes.length && f.removeChild(j);
        }
        m.merge(p, h.childNodes), h.textContent = '';
        while (h.firstChild) h.removeChild(h.firstChild);
        h = o.lastChild;
      } else p.push(b.createTextNode(f));
      h && o.removeChild(h), k.appendChecked || m.grep(ub(p, 'input'), vb), q = 0;
      while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) &&
        (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), 'script'), g && zb(h), c)) {
        e = 0;
        while (f = h[e++]) ob.test(f.type || '') && c.push(f);
      }
      return h = null, o;
    },
    cleanData: function (a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null !=
      (d = a[h]); h++) if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
        if (g.events) for (e in g.events) n[e]
          ? m.event.remove(d, e)
          : m.removeEvent(d, e, g.handle);
        j[f] &&
        (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
      }
    }
  }), m.fn.extend({
    text: function (a) {
      return V(this, function (a) {
        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
      }, null, a, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return this.domManip(arguments,
        function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
    },
    remove: function (a, b) {
      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType ||
      m.cleanData(ub(c)), c.parentNode &&
      (b && m.contains(c.ownerDocument, c) && zb(ub(c, 'script')), c.parentNode.removeChild(c));
      return this;
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && m.cleanData(ub(a, !1));
        while (a.firstChild) a.removeChild(a.firstChild);
        a.options && m.nodeName(a, 'select') && (a.options.length = 0);
      }
      return this;
    },
    clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return m.clone(this, a, b);
      });
    },
    html: function (a) {
      return V(this, function (a) {
        var b = this[0] || {}, c = 0, d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, '') : void 0;
        if (!('string' != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace &&
          hb.test(a) || rb[(jb.exec(a) || ['', ''])[1].toLowerCase()])) {
          a = a.replace(ib, '<$1></$2>');
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
            b = 0;
          } catch (e) {
          }
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function () {
      var a = arguments[0];
      return this.domManip(arguments,
        function (b) {
          a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this);
        }), a &&
      (a.length || a.nodeType) ? this : this.remove();
    },
    detach: function (a) {
      return this.remove(a, !0);
    },
    domManip: function (a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
      if (q || l > 1 && 'string' == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) {
        var d = n.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });
      if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length &&
      (i = c), c)) {
        for (g = m.map(ub(i, 'script'), xb), f = g.length; l > j; j++) d = i, j !== o &&
        (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, 'script'))), b.call(this[j], d, j);
        if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type ||
          '') && !m._data(d, 'globalEval') && m.contains(h, d) &&
        (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval(
          (d.text || d.textContent || d.innerHTML || '').replace(qb, '')));
        i = c = null;
      }
      return this;
    }
  }), m.each(
    {appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith'},
    function (a, b) {
      m.fn[a] = function (a) {
        for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(
          g[d])[b](c), f.apply(e, c.get());
        return this.pushStack(e);
      };
    });
  var Cb, Db = {};

  function Eb(b, c) {
    var d, e = m(c.createElement(b)).appendTo(c.body),
      f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], 'display');
    return e.detach(), f;
  }

  function Fb(a) {
    var b = y, c = Db[a];
    return c || (c = Eb(a, b), 'none' !== c && c ||
    (Cb = (Cb || m('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(
      b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a,
      b), Cb.detach()), Db[a] = c), c;
  }

  !function () {
    var a;
    k.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return c = y.getElementsByTagName('body')[0], c && c.style ? (b = y.createElement('div'), d = y.createElement(
        'div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), typeof b.style.zoom !== K &&
      (b.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', b.appendChild(
        y.createElement('div')).style.width = '5px', a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
    };
  }();
  var Gb = /^margin/, Hb = new RegExp('^(' + S + ')(?!px)[a-z%]+$', 'i'), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ib = function (a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null);
  }, Jb = function (a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c &&
    ('' !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) &&
    (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 ===
    g ? g : g + '';
  }) : y.documentElement.currentStyle && (Ib = function (a) {
    return a.currentStyle;
  }, Jb = function (a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) &&
    (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = 'fontSize' === b
      ? '1em'
      : g, g = h.pixelLeft + 'px', h.left = d, f && (e.left = f)), void 0 === g ? g : g + '' || 'auto';
  });

  function Lb(a, b) {
    return {
      get: function () {
        var c = a();
        if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  !function () {
    var b, c, d, e, f, g, h;
    if (b = y.createElement(
      'div'), b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', d = b.getElementsByTagName(
      'a')[0], c = d && d.style) {
      c.cssText = 'float:left;opacity:.5', k.opacity = '0.5' ===
        c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = 'content-box', b.cloneNode(
        !0).style.backgroundClip = '', k.clearCloneStyle = 'content-box' ===
        b.style.backgroundClip, k.boxSizing = '' === c.boxSizing || '' === c.MozBoxSizing || '' ===
        c.WebkitBoxSizing, m.extend(k, {
        reliableHiddenOffsets: function () {
          return null == g && i(), g;
        },
        boxSizingReliable: function () {
          return null == f && i(), f;
        },
        pixelPosition: function () {
          return null == e && i(), e;
        },
        reliableMarginRight: function () {
          return null == h && i(), h;
        }
      });

      function i() {
        var b, c, d, i;
        c = y.getElementsByTagName('body')[0], c && c.style && (b = y.createElement('div'), d = y.createElement(
          'div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(
          b), b.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', e = f = !1, h = !0, a.getComputedStyle &&
        (e = '1%' !== (a.getComputedStyle(b, null) || {}).top, f = '4px' ===
          (a.getComputedStyle(b, null) || {width: '4px'}).width, i = b.appendChild(y.createElement(
          'div')), i.style.cssText = b.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', i.style.marginRight = i.style.width = '0', b.style.width = '1px', h = !parseFloat(
          (a.getComputedStyle(i, null) ||
            {}).marginRight)), b.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', i = b.getElementsByTagName(
          'td'), i[0].style.cssText = 'margin:0;border:0;padding:0;display:none', g = 0 === i[0].offsetHeight, g &&
        (i[0].style.display = '', i[1].style.display = 'none', g = 0 === i[0].offsetHeight), c.removeChild(d));
      }
    }
  }(), m.swap = function (a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e;
  };
  var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/,
    Pb = new RegExp('^(' + S + ')(.*)$', 'i'), Qb = new RegExp('^([+-])=(' + S + ')', 'i'),
    Rb = {position: 'absolute', visibility: 'hidden', display: 'block'}, Sb = {letterSpacing: '0', fontWeight: '400'},
    Tb = ['Webkit', 'O', 'Moz', 'ms'];

  function Ub(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
    while (e--) if (b = Tb[e] + c, b in a) return b;
    return d;
  }

  function Vb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style &&
    (f[g] = m._data(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' ===
    d.style.display && U(d) && (f[g] = m._data(d, 'olddisplay', Fb(d.nodeName)))) : (e = U(d), (c && 'none' !== c ||
      !e) && m._data(d, 'olddisplay', e ? c : m.css(d, 'display'))));
    for (g = 0; h > g; g++) d = a[g], d.style &&
    (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'));
    return a;
  }

  function Wb(a, b, c) {
    var d = Pb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
  }

  function Xb(a, b, c, d, e) {
    for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2) 'margin' === c &&
    (g += m.css(a, c + T[f], !0, e)), d
      ? ('content' === c && (g -= m.css(a, 'padding' + T[f], !0, e)), 'margin' !== c &&
      (g -= m.css(a, 'border' + T[f] + 'Width', !0, e)))
      : (g += m.css(a, 'padding' + T[f], !0, e), 'padding' !== c && (g += m.css(a, 'border' + T[f] + 'Width', !0, e)));
    return g;
  }

  function Yb(a, b, c) {
    var d = !0, e = 'width' === b ? a.offsetWidth : a.offsetHeight, f = Ib(a),
      g = k.boxSizing && 'border-box' === m.css(a, 'boxSizing', !1, f);
    if (0 >= e || null == e) {
      if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }
    return e + Xb(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
  }

  m.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Jb(a, 'opacity');
            return '' === c ? '1' : c;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {'float': k.cssFloat ? 'cssFloat' : 'styleFloat'},
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = m.camelCase(b), i = a.style;
        if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 ===
        c) return g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, 'string' === f && (e = Qb.exec(c)) &&
        (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = 'number'), null != c && c === c &&
        ('number' !== f || m.cssNumber[h] || (c += 'px'), k.clearCloneStyle || '' !== c ||
        0 !== b.indexOf('background') || (i[b] = 'inherit'), !(g && 'set' in g && void 0 ===
          (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {
        }
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = m.camelCase(b);
      return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g &&
      'get' in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), 'normal' === f && b in Sb &&
      (f = Sb[b]), '' === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
    }
  }), m.each(['height', 'width'], function (a, b) {
    m.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? Ob.test(m.css(a, 'display')) && 0 === a.offsetWidth
          ? m.swap(a, Rb, function () {
            return Yb(a, b, d);
          })
          : Yb(a, b, d) : void 0;
      }, set: function (a, c, d) {
        var e = d && Ib(a);
        return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && 'border-box' === m.css(a, 'boxSizing', !1, e), e) : 0);
      }
    };
  }), k.opacity || (m.cssHooks.opacity = {
    get: function (a, b) {
      return Nb.test((b && a.currentStyle
        ? a.currentStyle.filter
        : a.style.filter) || '') ? .01 * parseFloat(RegExp.$1) + '' : b ? '1' : '';
    },
    set: function (a, b) {
      var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? 'alpha(opacity=' + 100 * b + ')' : '',
        f = d && d.filter || c.filter || '';
      c.zoom = 1, (b >= 1 || '' === b) && '' === m.trim(f.replace(Mb, '')) && c.removeAttribute &&
      (c.removeAttribute('filter'), '' === b || d && !d.filter) ||
      (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + ' ' + e);
    }
  }), m.cssHooks.marginRight = Lb(k.reliableMarginRight,
    function (a, b) {
      return b ? m.swap(a, {display: 'inline-block'}, Jb, [a, 'marginRight']) : void 0;
    }), m.each(
    {margin: '', padding: '', border: 'Width'}, function (a, b) {
      m.cssHooks[a + b] = {
        expand: function (c) {
          for (var d = 0, e = {}, f = 'string' == typeof c
            ? c.split(' ')
            : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        }
      }, Gb.test(a) || (m.cssHooks[a + b].set = Wb);
    }), m.fn.extend({
    css: function (a, b) {
      return V(this, function (a, b, c) {
        var d, e, f = {}, g = 0;
        if (m.isArray(b)) {
          for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
          return f;
        }
        return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function () {
      return Vb(this, !0);
    },
    hide: function () {
      return Vb(this);
    },
    toggle: function (a) {
      return 'boolean' == typeof a ? a ? this.show() : this.hide() : this.each(
        function () {
          U(this) ? m(this).show() : m(this).hide();
        });
    }
  });

  function Zb(a, b, c, d, e) {
    return new Zb.prototype.init(a, b, c, d, e);
  }

  m.Tween = Zb, Zb.prototype = {
    constructor: Zb, init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e ||
        'swing', this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f ||
        (m.cssNumber[c] ? '' : 'px');
    }, cur: function () {
      var a = Zb.propHooks[this.prop];
      return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
    }, run: function (a) {
      var b, c = Zb.propHooks[this.prop];
      return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1,
        this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step &&
      this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(
        this), this;
    }
  }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop,
          ''), b && 'auto' !== b ? b : 0) : a.elem[a.prop];
      },
      set: function (a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style &&
        (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop])
          ? m.style(a.elem, a.prop, a.now + a.unit)
          : a.elem[a.prop] = a.now;
      }
    }
  }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, m.easing = {
    linear: function (a) {
      return a;
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }
  }, m.fx = Zb.prototype.init, m.fx.step = {};
  var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp('^(?:([+-])=|)(' + S + ')([a-z%]*)$', 'i'),
    cc = /queueHooks$/, dc = [ic], ec = {
      '*': [
        function (a, b) {
          var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? '' : 'px'),
            g = (m.cssNumber[a] || 'px' !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
          if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do h = h || '.5', g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
        }]
    };

  function fc() {
    return setTimeout(function () {
      $b = void 0;
    }), $b = m.now();
  }

  function gc(a, b) {
    var c, d = {height: a}, e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d['margin' + c] = d['padding' + c] = a;
    return b && (d.opacity = d.width = a), d;
  }

  function hc(a, b, c) {
    for (var d, e = (ec[b] || []).concat(ec['*']), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b,
      a)) return d;
  }

  function ic(a, b, c) {
    var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, 'fxshow');
    c.queue || (h = m._queueHooks(a, 'fx'), null == h.unqueued &&
    (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, n.always(
      function () {
        n.always(function () {
          h.unqueued--, m.queue(a, 'fx').length || h.empty.fire();
        });
      })), 1 ===
    a.nodeType && ('height' in b || 'width' in b) &&
    (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, 'display'), l = 'none' === j ? m._data(a,
      'olddisplay') || Fb(a.nodeName) : j, 'inline' === l && 'none' === m.css(a, 'float') &&
    (k.inlineBlockNeedsLayout && 'inline' !== Fb(a.nodeName) ? p.zoom = 1 : p.display = 'inline-block')), c.overflow &&
    (p.overflow = 'hidden', k.shrinkWrapBlocks() ||
    n.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));
    for (d in b) if (e = b[d], ac.exec(e)) {
      if (delete b[d], f = f || 'toggle' === e, e === (q ? 'hide' : 'show')) {
        if ('show' !== e || !r || void 0 === r[d]) continue;
        q = !0;
      }
      o[d] = r && r[d] || m.style(a, d);
    } else j = void 0;
    if (m.isEmptyObject(o)) 'inline' === ('none' === j ? Fb(a.nodeName) : j) && (p.display = j); else {
      r ? 'hidden' in r && (q = r.hidden) : r = m._data(a, 'fxshow', {}), f && (r.hidden = !q), q
        ? m(a).show()
        : n.done(function () {
          m(a).hide();
        }), n.done(function () {
        var b;
        m._removeData(a, 'fxshow');
        for (b in o) m.style(a, b, o[b]);
      });
      for (d in o) g = hc(q ? r[d] : 0, d, n), d in r ||
      (r[d] = g.start, q && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0));
    }
  }

  function jc(a, b) {
    var c, d, e, f, g;
    for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d &&
    (a[d] = f, delete a[c]), g = m.cssHooks[d], g && 'expand' in g) {
      f = g.expand(f), delete a[d];
      for (c in f) c in a || (a[c] = f[c], b[c] = e);
    } else b[d] = e;
  }

  function kc(a, b, c) {
    var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () {
      delete i.elem;
    }), i = function () {
      if (e) return !1;
      for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 -
        d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    }, j = h.promise({
      elem: a,
      props: m.extend({}, b),
      opts: m.extend(!0, {specialEasing: {}}, c),
      originalProperties: b,
      originalOptions: c,
      startTime: $b || fc(),
      duration: c.duration,
      tweens: [],
      createTween: function (b, c) {
        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function (b) {
        var c = 0, d = b ? j.tweens.length : 0;
        if (e) return this;
        for (e = !0; d > c; c++) j.tweens[c].run(1);
        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      }
    }), k = j.props;
    for (jc(k, j.opts.specialEasing); g > f; f++) if (d = dc[f].call(j, a, k, j.opts)) return d;
    return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(
      m.extend(i, {
        elem: a,
        anim: j,
        queue: j.opts.queue
      })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  m.Animation = m.extend(kc, {
    tweener: function (a, b) {
      m.isFunction(a) ? (b = a, a = ['*']) : a = a.split(' ');
      for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
    }, prefilter: function (a, b) {
      b ? dc.unshift(a) : dc.push(a);
    }
  }), m.speed = function (a, b, c) {
    var d = a && 'object' == typeof a ? m.extend({}, a) : {
      complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b
    };
    return d.duration = m.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in m.fx.speeds
      ? m.fx.speeds[d.duration]
      : m.fx.speeds._default, (null == d.queue || d.queue === !0) &&
    (d.queue = 'fx'), d.old = d.complete, d.complete = function () {
      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
    }, d;
  }, m.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(U).css('opacity', 0).show().end().animate({opacity: b}, a, c, d);
    },
    animate: function (a, b, c, d) {
      var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
        var b = kc(this, m.extend({}, a), f);
        (e || m._data(this, 'finish')) && b.stop(!0);
      };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop, b(c);
      };
      return 'string' != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || 'fx', []), this.each(
        function () {
          var b = !0, e = null != a && a + 'queueHooks', f = m.timers, g = m._data(this);
          if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a ||
          (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && m.dequeue(this, a);
        });
    },
    finish: function (a) {
      return a !== !1 && (a = a || 'fx'), this.each(function () {
        var b, c = m._data(this), d = c[a + 'queue'], e = c[a + 'queueHooks'], f = m.timers, g = d ? d.length : 0;
        for (c.finish = !0, m.queue(this, a, []), e && e.stop &&
        e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a &&
        (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish;
      });
    }
  }), m.each(['toggle', 'show', 'hide'], function (a, b) {
    var c = m.fn[b];
    m.fn[b] = function (a, d, e) {
      return null == a || 'boolean' == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e);
    };
  }), m.each({
    slideDown: gc('show'),
    slideUp: gc('hide'),
    slideToggle: gc('toggle'),
    fadeIn: {opacity: 'show'},
    fadeOut: {opacity: 'hide'},
    fadeToggle: {opacity: 'toggle'}
  }, function (a, b) {
    m.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), m.timers = [], m.fx.tick = function () {
    var a, b = m.timers, c = 0;
    for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    b.length || m.fx.stop(), $b = void 0;
  }, m.fx.timer = function (a) {
    m.timers.push(a), a()
      ? m.fx.start()
      : m.timers.pop();
  }, m.fx.interval = 13, m.fx.start = function () {
    _b || (_b = setInterval(m.fx.tick, m.fx.interval));
  }, m.fx.stop = function () {
    clearInterval(_b), _b = null;
  }, m.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, m.fn.delay = function (a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, function (b, c) {
      var d = setTimeout(b, a);
      c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a, b, c, d, e;
    b = y.createElement('div'), b.setAttribute('className',
      't'), b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', d = b.getElementsByTagName(
      'a')[0], c = y.createElement('select'), e = c.appendChild(y.createElement('option')), a = b.getElementsByTagName(
      'input')[0], d.style.cssText = 'top:1px', k.getSetAttribute = 't' !== b.className, k.style = /top/.test(
      d.getAttribute('style')), k.hrefNormalized = '/a' ===
      d.getAttribute('href'), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement(
      'form').enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement('input'), a.setAttribute(
      'value', ''), k.input = '' === a.getAttribute('value'), a.value = 't', a.setAttribute('type',
      'radio'), k.radioValue = 't' === a.value;
  }();
  var lc = /\r/g;
  m.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0];
      {
        if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType &&
          (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = '' : 'number' == typeof e ? e += '' : m.isArray(
            e) && (e = m.map(e, function (a) {
            return null == a ? '' : a + '';
          })), b = m.valHooks[this.type] ||
            m.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') ||
          (this.value = e));
        });
        if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && 'get' in b &&
        void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' == typeof c ? c.replace(lc, '') : null == c
          ? ''
          : c);
      }
    }
  }), m.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = m.find.attr(a, 'value');
          return null != b ? b : m.trim(m.text(a));
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f
            ? null
            : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !==
            e || (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled &&
            m.nodeName(c.parentNode, 'optgroup'))) {
            if (b = m(c).val(), f) return b;
            g.push(b);
          }
          return g;
        }, set: function (a, b) {
          var c, d, e = a.options, f = m.makeArray(b), g = e.length;
          while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >=
          0) try {
            d.selected = c = !0;
          } catch (h) {
            d.scrollHeight;
          } else d.selected = !1;
          return c || (a.selectedIndex = -1), e;
        }
      }
    }
  }), m.each(['radio', 'checkbox'], function () {
    m.valHooks[this] = {
      set: function (a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
      }
    }, k.checkOn || (m.valHooks[this].get = function (a) {
      return null === a.getAttribute('value') ? 'on' : a.value;
    });
  });
  var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
  m.fn.extend({
    attr: function (a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    }
  }), m.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f &&
      m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c
        ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e)
        : null !== c
          ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c)
          : void m.removeAttr(a, b));
    },
    removeAttr: function (a, b) {
      var c, d, e = 0, f = b && b.match(E);
      if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc ||
      !pc.test(c) ? a[d] = !1 : a[m.camelCase('default-' + c)] = a[d] = !1 : m.attr(a, c, ''), a.removeAttribute(
        qc ? c : d);
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!k.radioValue && 'radio' === b && m.nodeName(a, 'input')) {
            var c = a.value;
            return a.setAttribute('type', b), c && (a.value = c), b;
          }
        }
      }
    }
  }), nc = {
    set: function (a, b, c) {
      return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c)
        ? a.setAttribute(!qc && m.propFix[c] || c, c)
        : a[m.camelCase('default-' + c)] = a[c] = !0, c;
    }
  }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = oc[b] || m.find.attr;
    oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
      var e, f;
      return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e;
    } : function (a, b, c) {
      return c ? void 0 : a[m.camelCase('default-' + b)] ? b.toLowerCase() : null;
    };
  }), rc && qc || (m.attrHooks.value = {
    set: function (a, b, c) {
      return m.nodeName(a, 'input') ? void (a.defaultValue = b) : mc && mc.set(a, b, c);
    }
  }), qc || (mc = {
    set: function (a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += '', 'value' === c ||
      b === a.getAttribute(c) ? b : void 0;
    }
  }, oc.id = oc.name = oc.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && '' !== d.value ? d.value : null;
  }, m.valHooks.button = {
    get: function (a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0;
    }, set: mc.set
  }, m.attrHooks.contenteditable = {
    set: function (a, b, c) {
      mc.set(a, '' === b ? !1 : b, c);
    }
  }, m.each(
    ['width', 'height'], function (a, b) {
      m.attrHooks[b] = {
        set: function (a, c) {
          return '' === c
            ? (a.setAttribute(b, 'auto'), c)
            : void 0;
        }
      };
    })), k.style || (m.attrHooks.style = {
    get: function (a) {
      return a.style.cssText || void 0;
    },
    set: function (a, b) {
      return a.style.cssText = b + '';
    }
  });
  var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function (a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return a = m.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {
        }
      });
    }
  }), m.extend({
    propFix: {'for': 'htmlFor', 'class': 'className'}, prop: function (a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f &&
      (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b))
        ? d
        : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: {
      tabIndex: {
        get: function (a) {
          var b = m.find.attr(a, 'tabindex');
          return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    }
  }), k.hrefNormalized || m.each(['href', 'src'],
    function (a, b) {
      m.propHooks[b] = {
        get: function (a) {
          return a.getAttribute(b, 4);
        }
      };
    }), k.optSelected ||
  (m.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    }
  }), m.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'], function () {
    m.propFix[this.toLowerCase()] = this;
  }), k.enctype ||
  (m.propFix.enctype = 'encoding');
  var uc = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h = 0, i = this.length, j = 'string' == typeof a && a;
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).addClass(a.call(this, b, this.className));
      });
      if (j) for (b = (a || '').match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType &&
        (c.className ? (' ' + c.className + ' ').replace(uc, ' ') : ' ')) {
        f = 0;
        while (e = b[f++]) d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
        g = m.trim(d), c.className !== g && (c.className = g);
      }
      return this;
    },
    removeClass: function (a) {
      var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || 'string' == typeof a && a;
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).removeClass(a.call(this, b, this.className));
      });
      if (j) for (b = (a || '').match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType &&
        (c.className ? (' ' + c.className + ' ').replace(uc, ' ') : '')) {
        f = 0;
        while (e = b[f++]) while (d.indexOf(' ' + e + ' ') >= 0) d = d.replace(' ' + e + ' ', ' ');
        g = a ? m.trim(d) : '', c.className !== g && (c.className = g);
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return 'boolean' == typeof b && 'string' === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(
        m.isFunction(a)
          ? function (c) {
            m(this).toggleClass(a.call(this, c, this.className, b), b);
          }
          : function () {
            if ('string' === c) {
              var b, d = 0, e = m(this), f = a.match(E) || [];
              while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (c === K || 'boolean' === c) &&
            (this.className && m._data(this, '__className__', this.className), this.className = this.className || a === !1
              ? ''
              : m._data(this, '__className__') || '');
          });
    },
    hasClass: function (a) {
      for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType &&
        (' ' + this[c].className + ' ').replace(uc, ' ').indexOf(b) >= 0) return !0;
      return !1;
    }
  }), m.each(
    'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
      ' '), function (a, b) {
      m.fn[b] = function (a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
      };
    }), m.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function (a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function (a, b) {
      return this.off(a, null, b);
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
    }
  });
  var vc = m.now(), wc = /\?/,
    xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + '');
    var c, d = null, e = m.trim(b + '');
    return e && !m.trim(
      e.replace(xc, function (a, b, e, f) {
        return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, '');
      }))
      ? Function('return ' + e)()
      : m.error('Invalid JSON: ' + b);
  }, m.parseXML = function (b) {
    var c, d;
    if (!b || 'string' != typeof b) return null;
    try {
      a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, 'text/xml')) : (c = new ActiveXObject(
        'Microsoft.XMLDOM'), c.async = 'false', c.loadXML(b));
    } catch (e) {
      c = void 0;
    }
    return c && c.documentElement && !c.getElementsByTagName('parsererror').length || m.error('Invalid XML: ' + b), c;
  };
  var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//,
    Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = '*/'.concat('*');
  try {
    zc = location.href;
  } catch (Kc) {
    zc = y.createElement('a'), zc.href = '', zc = zc.href;
  }
  yc = Gc.exec(zc.toLowerCase()) || [];

  function Lc(a) {
    return function (b, c) {
      'string' != typeof b && (c = b, b = '*');
      var d, e = 0, f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c)) while (d = f[e++]) '+' === d.charAt(0) ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(
        c)) : (a[d] = a[d] || []).push(c);
    };
  }

  function Mc(a, b, c, d) {
    var e = {}, f = a === Ic;

    function g(h) {
      var i;
      return e[h] = !0, m.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return 'string' != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e['*'] && g('*');
  }

  function Nc(a, b) {
    var c, d, e = m.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a;
  }

  function Oc(a, b, c) {
    var d, e, f, g, h = a.contents, i = a.dataTypes;
    while ('*' === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader('Content-Type'));
    if (e) for (g in h) if (h[g] && h[g].test(e)) {
      i.unshift(g);
      break;
    }
    if (i[0] in c) f = i[0]; else {
      for (g in c) {
        if (!i[0] || a.converters[g + ' ' + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function Pc(a, b, c, d) {
    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter &&
    (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ('*' === f) f = i; else if ('*' !== i && i !== f) {
      if (g = j[i + ' ' + f] || j['* ' + f], !g) for (e in j) if (h = e.split(' '), h[1] === f &&
      (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
        break;
      }
      if (g !== !0) if (g && a['throws']) b = g(b); else try {
        b = g(b);
      } catch (l) {
        return {
          state: 'parsererror',
          error: g ? l : 'No conversion from ' + i + ' to ' + f
        };
      }
    }
    return {state: 'success', data: b};
  }

  m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zc,
      type: 'GET',
      isLocal: Dc.test(yc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Jc,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: 'responseXML', text: 'responseText', json: 'responseJSON'},
      converters: {'* text': String, 'text html': !0, 'text json': m.parseJSON, 'text xml': m.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (a, b) {
      return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
    },
    ajaxPrefilter: Lc(Hc),
    ajaxTransport: Lc(Ic),
    ajax: function (a, b) {
      'object' == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k,
        n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks('once memory'),
        q = k.statusCode || {}, r = {}, s = {}, t = 0, u = 'canceled', v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!j) {
                j = {};
                while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2];
              }
              b = j[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? f : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this;
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) +
        '').replace(Ac, '').replace(Fc, yc[1] + '//'), k.type = b.method || b.type || k.method ||
        k.type, k.dataTypes = m.trim(k.dataType || '*').toLowerCase().match(E) || [''], null == k.crossDomain &&
      (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] &&
        (c[3] || ('http:' === c[1] ? '80' : '443')) === (yc[3] || ('http:' === yc[1] ? '80' : '443')))), k.data &&
      k.processData && 'string' != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 ===
      t) return v;
      h = k.global, h && 0 === m.active++ &&
      m.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(
        k.type), e = k.url, k.hasContent ||
      (k.data && (e = k.url += (wc.test(e) ? '&' : '?') + k.data, delete k.data), k.cache === !1 &&
      (k.url = Bc.test(e) ? e.replace(Bc, '$1_=' + vc++) : e + (wc.test(e) ? '&' : '?') + '_=' + vc++)), k.ifModified &&
      (m.lastModified[e] && v.setRequestHeader('If-Modified-Since', m.lastModified[e]), m.etag[e] &&
      v.setRequestHeader('If-None-Match', m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 ||
        b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept',
        k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] +
          ('*' !== k.dataTypes[0] ? ', ' + Jc + '; q=0.01' : '') : k.accepts['*']);
      for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = 'abort';
      for (d in {success: 1, error: 1, complete: 1}) v[d](k[d]);
      if (i = Mc(Ic, k, b, v)) {
        v.readyState = 1, h && n.trigger('ajaxSend', [v, k]), k.async && k.timeout > 0 &&
        (g = setTimeout(function () {
          v.abort('timeout');
        }, k.timeout));
        try {
          t = 1, i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, 'No Transport');

      function x(a, b, c, d) {
        var j, r, s, u, w, x = b;
        2 !== t &&
        (t = 2, g && clearTimeout(g), i = void 0, f = d || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a ||
          304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified &&
        (w = v.getResponseHeader('Last-Modified'), w && (m.lastModified[e] = w), w = v.getResponseHeader('etag'), w &&
        (m.etag[e] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent' : 304 === a
          ? x = 'notmodified'
          : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) &&
        (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j
          ? o.resolveWith(l, [r, x, v])
          : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h &&
        n.trigger(j ? 'ajaxSuccess' : 'ajaxError', [v, k, j ? r : s]), p.fireWith(l, [v, x]), h &&
        (n.trigger('ajaxComplete', [v, k]), --m.active || m.event.trigger('ajaxStop')));
      }

      return v;
    },
    getJSON: function (a, b, c) {
      return m.get(a, b, c, 'json');
    },
    getScript: function (a, b) {
      return m.get(a, void 0, b, 'script');
    }
  }), m.each(['get', 'post'], function (a, b) {
    m[b] = function (a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax(
        {url: a, type: b, dataType: e, data: c, success: d});
    };
  }), m.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
    function (a, b) {
      m.fn[b] = function (a) {
        return this.on(b, a);
      };
    }), m._evalUrl = function (a) {
    return m.ajax({url: a, type: 'GET', dataType: 'script', async: !1, global: !1, 'throws': !0});
  }, m.fn.extend({
    wrapAll: function (a) {
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).wrapAll(a.call(this, b));
      });
      if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
          return a;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (a) {
      return this.each(m.isFunction(a) ? function (b) {
        m(this).wrapInner(a.call(this, b));
      } : function () {
        var b = m(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function (a) {
      var b = m.isFunction(a);
      return this.each(function (c) {
        m(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        m.nodeName(this, 'body') || m(this).replaceWith(this.childNodes);
      }).end();
    }
  }), m.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && 'none' ===
      (a.style && a.style.display || m.css(a, 'display'));
  }, m.expr.filters.visible = function (a) {
    return !m.expr.filters.hidden(a);
  };
  var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i,
    Uc = /^(?:input|select|textarea|keygen)/i;

  function Vc(a, b, c, d) {
    var e;
    if (m.isArray(b)) m.each(b, function (b, e) {
      c || Rc.test(a) ? d(a, e) : Vc(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
    }); else if (c || 'object' !== m.type(b)) d(a, b); else for (e in b) Vc(a + '[' + e + ']', b[e], c, d);
  }

  m.param = function (a, b) {
    var c, d = [], e = function (a, b) {
      b = m.isFunction(b) ? b() : null == b ? '' : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b);
    };
    if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) ||
    a.jquery && !m.isPlainObject(a)) m.each(a, function () {
      e(this.name, this.value);
    }); else for (c in a) Vc(c, a[c],
      b,
      e);
    return d.join('&').replace(Qc, '+');
  }, m.fn.extend({
    serialize: function () {
      return m.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var a = m.prop(this, 'elements');
        return a ? m.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !m(this).is(':disabled') && Uc.test(this.nodeName) && !Tc.test(a) &&
          (this.checked || !W.test(a));
      }).map(function (a, b) {
        var c = m(this).val();
        return null == c ? null : m.isArray(c) ? m.map(c,
          function (a) {
            return {name: b.name, value: a.replace(Sc, '\r\n')};
          }) : {
          name: b.name,
          value: c.replace(Sc, '\r\n')
        };
      }).get();
    }
  }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c();
  } : Zc;
  var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
  a.ActiveXObject && m(a).on('unload', function () {
    for (var a in Xc) Xc[a](void 0, !0);
  }), k.cors = !!Yc &&
    'withCredentials' in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
    if (!a.crossDomain || k.cors) {
      var b;
      return {
        send: function (c, d) {
          var e, f = a.xhr(), g = ++Wc;
          if (f.open(a.type, a.url, a.async, a.username,
            a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] ||
          (c['X-Requested-With'] = 'XMLHttpRequest');
          for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + '');
          f.send(a.hasContent && a.data || null), b = function (c, e) {
            var h, i, j;
            if (b && (e || 4 === f.readyState)) if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !==
            f.readyState && f.abort(); else {
              j = {}, h = f.status, 'string' == typeof f.responseText && (j.text = f.responseText);
              try {
                i = f.statusText;
              } catch (k) {
                i = '';
              }
              h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
            }
            j && d(h, i, j, f.getAllResponseHeaders());
          }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b();
        }, abort: function () {
          b && b(void 0, !0);
        }
      };
    }
  });

  function Zc() {
    try {
      return new a.XMLHttpRequest;
    } catch (b) {
    }
  }

  function $c() {
    try {
      return new a.ActiveXObject('Microsoft.XMLHTTP');
    } catch (b) {
    }
  }

  m.ajaxSetup({
    accepts: {script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      'text script': function (a) {
        return m.globalEval(a), a;
      }
    }
  }), m.ajaxPrefilter('script', function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET', a.global = !1);
  }), m.ajaxTransport('script', function (a) {
    if (a.crossDomain) {
      var b, c = y.head || m('head')[0] || y.documentElement;
      return {
        send: function (d, e) {
          b = y.createElement('script'), b.async = !0, a.scriptCharset &&
          (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) &&
            (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c ||
            e(200, 'success'));
          }, c.insertBefore(b, c.firstChild);
        }, abort: function () {
          b && b.onload(void 0, !0);
        }
      };
    }
  });
  var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: 'callback', jsonpCallback: function () {
      var a = _c.pop() || m.expando + '_' + vc++;
      return this[a] = !0, a;
    }
  }), m.ajaxPrefilter('json jsonp', function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? 'url' : 'string' == typeof b.data &&
      !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && ad.test(b.data) && 'data');
    return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback)
      ? b.jsonpCallback()
      : b.jsonpCallback, h ? b[h] = b[h].replace(ad, '$1' + e) : b.jsonp !== !1 &&
      (b.url += (wc.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
      return g || m.error(e + ' was not called'), g[0];
    }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) &&
      f(g[0]), g = f = void 0;
    }), 'script') : void 0;
  }), m.parseHTML = function (a, b, c) {
    if (!a || 'string' != typeof a) return null;
    'boolean' == typeof b && (c = b, b = !1), b = b || y;
    var d = u.exec(a), e = !c && [];
    return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([],
      d.childNodes));
  };
  var bd = m.fn.load;
  m.fn.load = function (a, b, c) {
    if ('string' != typeof a && bd) return bd.apply(this, arguments);
    var d, e, f, g = this, h = a.indexOf(' ');
    return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b &&
      'object' == typeof b && (f = 'POST'), g.length > 0 && m.ajax({
      url: a,
      type: f,
      dataType: 'html',
      data: b
    }).done(function (a) {
      e = arguments, g.html(d ? m('<div>').append(m.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, e || [a.responseText, b, a]);
    }), this;
  }, m.expr.filters.animated = function (a) {
    return m.grep(m.timers, function (b) {
      return a === b.elem;
    }).length;
  };
  var cd = a.document.documentElement;

  function dd(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }

  m.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = m.css(a, 'position'), l = m(a), n = {};
      'static' === k && (a.style.position = 'relative'), h = l.offset(), f = m.css(a, 'top'), i = m.css(a,
        'left'), j = ('absolute' === k || 'fixed' === k) && m.inArray('auto', [f, i]) > -1, j
        ? (d = l.position(), g = d.top, e = d.left)
        : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top &&
      (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), 'using' in b
        ? b.using.call(a, n)
        : l.css(n);
    }
  }, m.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        m.offset.setOffset(this, a, b);
      });
      var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
      if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K &&
      (d = e.getBoundingClientRect()), c = dd(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d;
    }, position: function () {
      if (this[0]) {
        var a, b, c = {top: 0, left: 0}, d = this[0];
        return 'fixed' === m.css(d, 'position')
          ? b = d.getBoundingClientRect()
          : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], 'html') || (c = a.offset()), c.top += m.css(
            a[0], 'borderTopWidth', !0), c.left += m.css(a[0], 'borderLeftWidth', !0)), {
          top: b.top - c.top - m.css(d, 'marginTop', !0), left: b.left - c.left - m.css(d, 'marginLeft', !0)
        };
      }
    }, offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || cd;
        while (a && !m.nodeName(a, 'html') && 'static' === m.css(a, 'position')) a = a.offsetParent;
        return a || cd;
      });
    }
  }), m.each({scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'}, function (a, b) {
    var c = /Y/.test(b);
    m.fn[a] = function (d) {
      return V(this, function (a, d, e) {
        var f = dd(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(
          c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), m.each(['top', 'left'], function (a, b) {
    m.cssHooks[b] = Lb(k.pixelPosition,
      function (a, c) {
        return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + 'px' : c) : void 0;
      });
  }), m.each({Height: 'height', Width: 'width'}, function (a, b) {
    m.each({padding: 'inner' + a, content: b, '': 'outer' + a}, function (c, d) {
      m.fn[d] = function (d, e) {
        var f = arguments.length && (c || 'boolean' != typeof d), g = c || (d === !0 || e === !0 ? 'margin' : 'border');
        return V(this, function (b, c, d) {
          var e;
          return m.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType
            ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a],
              e['offset' + a], e['client' + a]))
            : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), m.fn.size = function () {
    return this.length;
  }, m.fn.andSelf = m.fn.addBack, 'function' == typeof define &&
  define.amd && define('jquery', [], function () {
    return m;
  });
  var ed = a.jQuery, fd = a.$;
  return m.noConflict = function (b) {
    return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
  }, typeof b === K && (a.jQuery = a.$ = m), m;
});

// seek
/*
 * Easy Seek Slider
 * @version 0.3 (24.06.2012)
*/

(function ($) {

  var $D = $(document);

  var Seekslider = function (e, options) {

    var self = this;

    var _defaults = {
      min: 0,
      max: 100,
      value: 0,
      from: 'left'
    };

    $(e).data('seek', this);

    options = $.extend(_defaults, options);

    $.extend(self, {
      $track: options.track || $(e) || false,
      $field: options.field || false,
      $slider: options.slider || false,
      $bar: options.bar || false,
      extra: {}
    });

    var p = {
      crd: 'pageX',
      ofs: 'offsetX',
      siz: 'width',
      trs: 'left'
    };

    if (options.from == 'bottom') {
      p.crd = 'pageY';
      p.ofs = 'offsetY';
      p.siz = 'height';
      p.trs = 'top';
    }

    if (self.$track) {
      init();
    }

    function init() {

      self.$track.addClass('seekslider-track');

      if (self.$slider.length) {
        self.$slider.addClass('seekslider-slider');
      }

      $.extend(self.extra, {
        trackPos: self.$track.offset(),
        clickPos: 0,
        sliderSize: 0
      });

      if (self.$slider) {
        $.extend(self.extra, {
          clickPos: self.$slider[p.siz]() / 2,
          sliderSize: self.$slider[p.siz]()
        });
      }

      self.extra.trackSize = self.$track[p.siz]() - self.extra.sliderSize;

      if (self.$field) {

        self.extra.trackSize = self.$field[p.siz]() - self.extra.sliderSize;
        self.extra.trackPos = self.$field.offset();
      }

      if ('ontouchstart' in document.documentElement) {
        self.$track.bind('touchstart', dragstart);

      } else {
        self.$track.bind('mousedown', dragstart);

      }

      if ('ontouchstart' in document.documentElement) {
        $D.bind('touchmove', dragmove);
        $D.bind('touchend', dragend);
      } else {
        $D.bind('mousemove', dragmove);
        $D.bind('mouseup', dragend);
      }

      var sliderpos = options.value / options.max * self.extra.trackSize;

      self.value = options.value;

      if (self.$slider) {
        self.$slider.css({left: sliderpos});
      }

      if (self.$bar) {
        self.$bar.css(p.siz, sliderpos);
      }
    }

    this.val = function (value, set) {
      var sliderpos = value / options.max * self.extra.trackSize;
      self.$slider && self.$slider.css({left: sliderpos});
      self.$bar && self.$bar.css(p.siz, sliderpos);

    };

    this.update = function () {
      self.extra.trackSize = self.$track[p.siz]() - self.extra.sliderSize;
      self.val(self.value);
    };

    function dragstart(event) {

      self.extra.drag = true;

      var $trgt = $(event.target);

      if (event.type == 'touchstart') {
        self.start = event.originalEvent[p.crd];
      } else {
        self.start = event[p.crd];
      }

      if (event.touches && event.touches[0]) {
        touch = event.touches[0];
        self.start = touch[p.crd];
      }

      if (self.$field) {
        self.extra.trackPos = self.$field.offset();
      } else {
        self.extra.trackPos = self.$track.offset();
      }

      self.extra.trackSize = self.$track[p.siz]() - self.extra.sliderSize;

      if ($trgt.hasClass('seekslider-slider')) {
        if (event[p.ofs]) {
          self.extra.clickPos = event[p.ofs];
        } else {
          self.extra.clickPos = event[p.crd] - $trgt.offset()[p.trs];
        }
      }

      self.extra.last = self.start;

      if (options.start && typeof options.start == 'function') {
        options.start(self.start, self);
      }

      document.ondragstart = function () {
        return false;
      };
      document.body.onselectstart = function () {
        return false;
      };

    }

    function dragmove(event) {

      if (self.extra.drag) {

        if (event.type == 'touchmove') {
          var c = event.originalEvent[p.crd];
        } else {
          var c = event[p.crd];
        }

        if (c != self.extra.last) {

          self.extra.drag = c;
          var move = c - self.extra.trackPos[p.trs] - self.extra.clickPos;

          if (options.from == 'bottom') {
            move = self.extra.trackSize - move;
          }

          var toMove = calculate(move);

          if (self.$slider) {
            self.$slider.css({left: toMove.px});
          }
          if (self.$bar) {
            self.$bar.css(p.siz, toMove.px);
          }

          if (options.slide && typeof options.slide == 'function') {
            options.slide(toMove, self);
          }
        }

        return false;

      }

    }

    function dragend(e) {

      if (self.extra.drag) {

        if (e.type == 'touchend') {
          c = e.originalEvent[p.crd];
        } else {
          if (e[p.crd]) c = e[p.crd];
        }

        if (!c || c <= 1) {
          c = self.extra.drag;
        }

        if (e.touches && e.touches[0]) {
          touch = e.touches[0];
          c = touch[p.crd];
        }

        var move = c - self.extra.trackPos[p.trs] - self.extra.clickPos;

        if (options.from == 'bottom') {
          move = self.extra.trackSize - move;
        }

        if (move < 0) {
          move = 0;
        }

        var toMove = calculate(move);

        if (self.$slider) {
          self.$slider.css({left: toMove.px});
        }
        if (self.$bar) {
          self.$bar.css(p.siz, toMove.px);
        }

        self.extra.drag = false;

        if (options.slide && typeof options.slide == 'function') {
          options.slide(toMove, self);
        }

        if (options.stop && typeof options.stop == 'function') {
          options.stop(toMove, self);
        }

        document.ondragstart = null;
        document.body.onselectstart = null;

      }

    }

    function calculate(move) {

      var percents = move / self.extra.trackSize;

      if (percents < 0) {
        percents = 0;
      }
      if (percents > 1) {
        percents = 1;
      }

      var toMove = move;
      var value = percents;

      if (options.max >= 0 && options.min >= 0 && options.max > options.min) {
        var range = options.max - options.min;
        value = range * percents + options.min;
      }

      var v = options.step
        ? Math.floor(value / options.step) * options.step
        : value;

      self.value = v;

      return {
        value: v,
        percent: value / options.max,
        px: self.extra.trackSize * (value / options.max)
      };
    }

  };

  $.fn.seekslider = function (options, options2) {
    if (options2) {

    } else {
      return this.each(function (i, e) {
        new Seekslider(e, options);
      });
    }
  };

})(jQuery);

//fabric
/* build: `node build.js modules=ALL exclude=gestures,cufon,json minifier=uglifyjs` */
/*! Fabric.js Copyright 2008-2013, Printio (Juriy Zaytsev, Maxim Chernyak) */

var fabric = fabric || {version: '1.4.2'};
if (typeof exports !== 'undefined') {
  exports.fabric = fabric;
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  fabric.document = document;
  fabric.window = window;
} else {
  // assume we're running under node.js when document/window are not present
  fabric.document = require('jsdom').jsdom('<!DOCTYPE html><html><head></head><body></body></html>');

  fabric.window = fabric.document.createWindow();
}

/**
 * True when in environment that supports touch events
 * @type boolean
 */
fabric.isTouchSupported = 'ontouchstart' in fabric.document.documentElement;

/**
 * True when in environment that's probably Node.js
 * @type boolean
 */
fabric.isLikelyNode = typeof Buffer !== 'undefined' &&
  typeof window === 'undefined';

/**
 * Attributes parsed from all SVG elements
 * @type array
 */
fabric.SHARED_ATTRIBUTES = [
  'transform',
  'fill', 'fill-opacity', 'fill-rule',
  'opacity',
  'stroke', 'stroke-dasharray', 'stroke-linecap',
  'stroke-linejoin', 'stroke-miterlimit',
  'stroke-opacity', 'stroke-width'
];

(function () {

  /**
   * @private
   * @param {String} eventName
   * @param {Function} handler
   */
  function _removeEventListener(eventName, handler) {
    if (!this.__eventListeners[eventName]) return;

    if (handler) {
      fabric.util.removeFromArray(this.__eventListeners[eventName], handler);
    } else {
      this.__eventListeners[eventName].length = 0;
    }
  }

  /**
   * Observes specified event
   * @deprecated `observe` deprecated since 0.8.34 (use `on` instead)
   * @memberOf fabric.Observable
   * @alias on
   * @param {String|Object} eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
   * @param {Function} handler Function that receives a notification when an event of the specified type occurs
   * @return {Self} thisArg
   * @chainable
   */
  function observe(eventName, handler) {
    if (!this.__eventListeners) {
      this.__eventListeners = {};
    }
    // one object with key/value pairs was passed
    if (arguments.length === 1) {
      for (var prop in eventName) {
        this.on(prop, eventName[prop]);
      }
    } else {
      if (!this.__eventListeners[eventName]) {
        this.__eventListeners[eventName] = [];
      }
      this.__eventListeners[eventName].push(handler);
    }
    return this;
  }

  /**
   * Stops event observing for a particular event handler. Calling this method
   * without arguments removes all handlers for all events
   * @deprecated `stopObserving` deprecated since 0.8.34 (use `off` instead)
   * @memberOf fabric.Observable
   * @alias off
   * @param {String|Object} eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
   * @param {Function} handler Function to be deleted from EventListeners
   * @return {Self} thisArg
   * @chainable
   */
  function stopObserving(eventName, handler) {
    if (!this.__eventListeners) return;

    // remove all key/value pairs (event name -> event handler)
    if (arguments.length === 0) {
      this.__eventListeners = {};
    }
    // one object with key/value pairs was passed
    else if (arguments.length === 1 && typeof arguments[0] === 'object') {
      for (var prop in eventName) {
        _removeEventListener.call(this, prop, eventName[prop]);
      }
    } else {
      _removeEventListener.call(this, eventName, handler);
    }
    return this;
  }

  /**
   * Fires event with an optional options object
   * @deprecated `fire` deprecated since 1.0.7 (use `trigger` instead)
   * @memberOf fabric.Observable
   * @alias trigger
   * @param {String} eventName Event name to fire
   * @param {Object} [options] Options object
   * @return {Self} thisArg
   * @chainable
   */
  function fire(eventName, options) {
    if (!this.__eventListeners) return;

    var listenersForEvent = this.__eventListeners[eventName];
    if (!listenersForEvent) return;
    for (var i = 0, len = listenersForEvent.length; i < len; i++) {
      // avoiding try/catch for perf. reasons
      listenersForEvent[i].call(this, options || {});
    }
    return this;
  }

  /**
   * @namespace fabric.Observable
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#events}
   * @see {@link http://fabricjs.com/events/|Events demo}
   */
  fabric.Observable = {
    observe: observe,
    stopObserving: stopObserving,
    fire: fire,

    on: observe,
    off: stopObserving,
    trigger: fire
  };
})();

/**
 * @namespace fabric.Collection
 */
fabric.Collection = {

  /**
   * Adds objects to collection, then renders canvas (if `renderOnAddRemove` is not `false`)
   * Objects should be instances of (or inherit from) fabric.Object
   * @param {...fabric.Object} object Zero or more fabric instances
   * @return {Self} thisArg
   */
  add: function () {
    this._objects.push.apply(this._objects, arguments);
    for (var i = 0, length = arguments.length; i < length; i++) {
      this._onObjectAdded(arguments[i]);
    }
    this.renderOnAddRemove && this.renderAll();
    return this;
  },

  /**
   * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
   * An object should be an instance of (or inherit from) fabric.Object
   * @param {Object} object Object to insert
   * @param {Number} index Index to insert object at
   * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
   * @return {Self} thisArg
   * @chainable
   */
  insertAt: function (object, index, nonSplicing) {
    var objects = this.getObjects();
    if (nonSplicing) {
      objects[index] = object;
    } else {
      objects.splice(index, 0, object);
    }
    this._onObjectAdded(object);
    this.renderOnAddRemove && this.renderAll();
    return this;
  },

  /**
   * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
   * @param {...fabric.Object} object Zero or more fabric instances
   * @return {Self} thisArg
   * @chainable
   */
  remove: function () {
    var objects = this.getObjects(),
      index;

    for (var i = 0, length = arguments.length; i < length; i++) {
      index = objects.indexOf(arguments[i]);

      // only call onObjectRemoved if an object was actually removed
      if (index !== -1) {
        objects.splice(index, 1);
        this._onObjectRemoved(arguments[i]);
      }
    }

    this.renderOnAddRemove && this.renderAll();
    return this;
  },

  /**
   * Executes given function for each object in this group
   * @param {Function} callback
   *                   Callback invoked with current object as first argument,
   *                   index - as second and an array of all objects - as third.
   *                   Iteration happens in reverse order (for performance reasons).
   *                   Callback is invoked in a context of Global Object (e.g. `window`)
   *                   when no `context` argument is given
   *
   * @param {Object} context Context (aka thisObject)
   * @return {Self} thisArg
   */
  forEachObject: function (callback, context) {
    var objects = this.getObjects(),
      i = objects.length;
    while (i--) {
      callback.call(context, objects[i], i, objects);
    }
    return this;
  },

  /**
   * Returns an array of children objects of this instance
   * Type parameter introduced in 1.3.10
   * @param {String} [type] When specified, only objects of this type are returned
   * @return {Array}
   */
  getObjects: function (type) {
    if (typeof type === 'undefined') {
      return this._objects;
    }
    return this._objects.filter(function (o) {
      return o.type === type;
    });
  },

  /**
   * Returns object at specified index
   * @param {Number} index
   * @return {Self} thisArg
   */
  item: function (index) {
    return this.getObjects()[index];
  },

  /**
   * Returns true if collection contains no objects
   * @return {Boolean} true if collection is empty
   */
  isEmpty: function () {
    return this.getObjects().length === 0;
  },

  /**
   * Returns a size of a collection (i.e: length of an array containing its objects)
   * @return {Number} Collection size
   */
  size: function () {
    return this.getObjects().length;
  },

  /**
   * Returns true if collection contains an object
   * @param {Object} object Object to check against
   * @return {Boolean} `true` if collection contains an object
   */
  contains: function (object) {
    return this.getObjects().indexOf(object) > -1;
  },

  /**
   * Returns number representation of a collection complexity
   * @return {Number} complexity
   */
  complexity: function () {
    return this.getObjects().reduce(function (memo, current) {
      memo += current.complexity ? current.complexity() : 0;
      return memo;
    }, 0);
  }
};

(function (global) {

  var sqrt = Math.sqrt,
    atan2 = Math.atan2,
    PiBy180 = Math.PI / 180;

  /**
   * @namespace fabric.util
   */
  fabric.util = {

    /**
     * Removes value from an array.
     * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
     * @static
     * @memberOf fabric.util
     * @param {Array} array
     * @param {Any} value
     * @return {Array} original array
     */
    removeFromArray: function (array, value) {
      var idx = array.indexOf(value);
      if (idx !== -1) {
        array.splice(idx, 1);
      }
      return array;
    },

    /**
     * Returns random number between 2 specified ones.
     * @static
     * @memberOf fabric.util
     * @param {Number} min lower limit
     * @param {Number} max upper limit
     * @return {Number} random value (between min and max)
     */
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Transforms degrees to radians.
     * @static
     * @memberOf fabric.util
     * @param {Number} degrees value in degrees
     * @return {Number} value in radians
     */
    degreesToRadians: function (degrees) {
      return degrees * PiBy180;
    },

    /**
     * Transforms radians to degrees.
     * @static
     * @memberOf fabric.util
     * @param {Number} radians value in radians
     * @return {Number} value in degrees
     */
    radiansToDegrees: function (radians) {
      return radians / PiBy180;
    },

    /**
     * Rotates `point` around `origin` with `radians`
     * @static
     * @memberOf fabric.util
     * @param {fabric.Point} The point to rotate
     * @param {fabric.Point} The origin of the rotation
     * @param {Number} The radians of the angle for the rotation
     * @return {fabric.Point} The new rotated point
     */
    rotatePoint: function (point, origin, radians) {
      var sin = Math.sin(radians),
        cos = Math.cos(radians);

      point.subtractEquals(origin);

      var rx = point.x * cos - point.y * sin,
        ry = point.x * sin + point.y * cos;

      return new fabric.Point(rx, ry).addEquals(origin);
    },

    /**
     * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
     * @static
     * @memberOf fabric.util
     * @param {Number | String} number number to operate on
     * @param {Number} fractionDigits number of fraction digits to "leave"
     * @return {Number}
     */
    toFixed: function (number, fractionDigits) {
      return parseFloat(Number(number).toFixed(fractionDigits));
    },

    /**
     * Function which always returns `false`.
     * @static
     * @memberOf fabric.util
     * @return {Boolean}
     */
    falseFunction: function () {
      return false;
    },

    /**
     * Returns klass "Class" object of given namespace
     * @memberOf fabric.util
     * @param {String} type Type of object (eg. 'circle')
     * @param {String} namespace Namespace to get klass "Class" object from
     * @return {Object} klass "Class"
     */
    getKlass: function (type, namespace) {
      // capitalize first letter only
      type = fabric.util.string.camelize(type.charAt(0).toUpperCase() + type.slice(1));
      return fabric.util.resolveNamespace(namespace)[type];
    },

    /**
     * Returns object of given namespace
     * @memberOf fabric.util
     * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
     * @return {Object} Object for given namespace (default fabric)
     */
    resolveNamespace: function (namespace) {
      if (!namespace) return fabric;

      var parts = namespace.split('.'),
        len = parts.length,
        obj = global || fabric.window;

      for (var i = 0; i < len; ++i) {
        obj = obj[parts[i]];
      }

      return obj;
    },

    /**
     * Loads image element from given url and passes it to a callback
     * @memberOf fabric.util
     * @param {String} url URL representing an image
     * @param {Function} callback Callback; invoked with loaded image
     * @param {Any} [context] Context to invoke callback in
     * @param {Object} [crossOrigin] crossOrigin value to set image element to
     */
    loadImage: function (url, callback, context, crossOrigin) {
      if (!url) {
        callback && callback.call(context, url);
        return;
      }

      var img = fabric.util.createImage();

      /** @ignore */
      img.onload = function () {
        callback && callback.call(context, img);
        img = img.onload = img.onerror = null;
      };

      /** @ignore */
      img.onerror = function () {
        fabric.log('Error loading ' + img.src);
        callback && callback.call(context, null, true);
        img = img.onload = img.onerror = null;
      };

      // data-urls appear to be buggy with crossOrigin
      // https://github.com/kangax/fabric.js/commit/d0abb90f1cd5c5ef9d2a94d3fb21a22330da3e0a#commitcomment-4513767
      // see https://code.google.com/p/chromium/issues/detail?id=315152
      //     https://bugzilla.mozilla.org/show_bug.cgi?id=935069
      if (url.indexOf('data') !== 0 && typeof crossOrigin !== 'undefined') {
        img.crossOrigin = crossOrigin;
      }

      img.src = url;
    },

    /**
     * Creates corresponding fabric instances from their object representations
     * @static
     * @memberOf fabric.util
     * @param {Array} objects Objects to enliven
     * @param {Function} callback Callback to invoke when all objects are created
     * @param {Function} [reviver] Method for further parsing of object elements,
     * called after each fabric object created.
     */
    enlivenObjects: function (objects, callback, namespace, reviver) {
      objects = objects || [];

      function onLoaded() {
        if (++numLoadedObjects === numTotalObjects) {
          callback && callback(enlivenedObjects);
        }
      }

      var enlivenedObjects = [],
        numLoadedObjects = 0,
        numTotalObjects = objects.length;

      if (!numTotalObjects) {
        callback && callback(enlivenedObjects);
        return;
      }

      objects.forEach(function (o, index) {
        // if sparse array
        if (!o || !o.type) {
          onLoaded();
          return;
        }
        var klass = fabric.util.getKlass(o.type, namespace);
        if (klass.async) {
          klass.fromObject(o, function (obj, error) {
            if (!error) {
              enlivenedObjects[index] = obj;
              reviver && reviver(o, enlivenedObjects[index]);
            }
            onLoaded();
          });
        } else {
          enlivenedObjects[index] = klass.fromObject(o);
          reviver && reviver(o, enlivenedObjects[index]);
          onLoaded();
        }
      });
    },

    /**
     * Groups SVG elements (usually those retrieved from SVG document)
     * @static
     * @memberOf fabric.util
     * @param {Array} elements SVG elements to group
     * @param {Object} [options] Options object
     * @return {fabric.Object|fabric.PathGroup}
     */
    groupSVGElements: function (elements, options, path) {
      var object;

      if (elements.length > 1) {
        object = new fabric.PathGroup(elements, options);
      } else {
        object = elements[0];
      }

      if (typeof path !== 'undefined') {
        object.setSourcePath(path);
      }
      return object;
    },

    /**
     * Populates an object with properties of another object
     * @static
     * @memberOf fabric.util
     * @param {Object} source Source object
     * @param {Object} destination Destination object
     * @return {Array} properties Propertie names to include
     */
    populateWithProperties: function (source, destination, properties) {
      if (properties && Object.prototype.toString.call(properties) === '[object Array]') {
        for (var i = 0, len = properties.length; i < len; i++) {
          if (properties[i] in source) {
            destination[properties[i]] = source[properties[i]];
          }
        }
      }
    },

    /**
     * Draws a dashed line between two points
     *
     * This method is used to draw dashed line around selection area.
     * See <a href="http://stackoverflow.com/questions/4576724/dotted-stroke-in-canvas">dotted stroke in canvas</a>
     *
     * @param {CanvasRenderingContext2D} ctx context
     * @param {Number} x  start x coordinate
     * @param {Number} y start y coordinate
     * @param {Number} x2 end x coordinate
     * @param {Number} y2 end y coordinate
     * @param {Array} da dash array pattern
     */
    drawDashedLine: function (ctx, x, y, x2, y2, da) {
      var dx = x2 - x,
        dy = y2 - y,
        len = sqrt(dx * dx + dy * dy),
        rot = atan2(dy, dx),
        dc = da.length,
        di = 0,
        draw = true;

      ctx.save();
      ctx.translate(x, y);
      ctx.moveTo(0, 0);
      ctx.rotate(rot);

      x = 0;
      while (len > x) {
        x += da[di++ % dc];
        if (x > len) {
          x = len;
        }
        ctx[draw ? 'lineTo' : 'moveTo'](x, 0);
        draw = !draw;
      }

      ctx.restore();
    },

    /**
     * Creates canvas element and initializes it via excanvas if necessary
     * @static
     * @memberOf fabric.util
     * @param {CanvasElement} [canvasEl] optional canvas element to initialize;
     * when not given, element is created implicitly
     * @return {CanvasElement} initialized canvas element
     */
    createCanvasElement: function (canvasEl) {
      canvasEl || (canvasEl = fabric.document.createElement('canvas'));
      if (!canvasEl.getContext && typeof G_vmlCanvasManager !== 'undefined') {
        G_vmlCanvasManager.initElement(canvasEl);
      }
      return canvasEl;
    },

    /**
     * Creates image element (works on client and node)
     * @static
     * @memberOf fabric.util
     * @return {HTMLImageElement} HTML image element
     */
    createImage: function () {
      return fabric.isLikelyNode
        ? new (require('canvas').Image)()
        : fabric.document.createElement('img');
    },

    /**
     * Creates accessors (getXXX, setXXX) for a "class", based on "stateProperties" array
     * @static
     * @memberOf fabric.util
     * @param {Object} klass "Class" to create accessors for
     */
    createAccessors: function (klass) {
      var proto = klass.prototype;

      for (var i = proto.stateProperties.length; i--;) {

        var propName = proto.stateProperties[i],
          capitalizedPropName = propName.charAt(0).toUpperCase() + propName.slice(1),
          setterName = 'set' + capitalizedPropName,
          getterName = 'get' + capitalizedPropName;

        // using `new Function` for better introspection
        if (!proto[getterName]) {
          proto[getterName] = (function (property) {
            return new Function('return this.get("' + property + '")');
          })(propName);
        }
        if (!proto[setterName]) {
          proto[setterName] = (function (property) {
            return new Function('value', 'return this.set("' + property + '", value)');
          })(propName);
        }
      }
    },

    /**
     * @static
     * @memberOf fabric.util
     * @param {fabric.Object} receiver Object implementing `clipTo` method
     * @param {CanvasRenderingContext2D} ctx Context to clip
     */
    clipContext: function (receiver, ctx) {
      ctx.save();
      ctx.beginPath();
      receiver.clipTo(ctx);
      ctx.clip();
    },

    /**
     * Multiply matrix A by matrix B to nest transformations
     * @static
     * @memberOf fabric.util
     * @param  {Array} matrixA First transformMatrix
     * @param  {Array} matrixB Second transformMatrix
     * @return {Array} The product of the two transform matrices
     */
    multiplyTransformMatrices: function (matrixA, matrixB) {
      // Matrix multiply matrixA * matrixB
      var a = [
        [matrixA[0], matrixA[2], matrixA[4]],
        [matrixA[1], matrixA[3], matrixA[5]],
        [0, 0, 1]
      ];

      var b = [
        [matrixB[0], matrixB[2], matrixB[4]],
        [matrixB[1], matrixB[3], matrixB[5]],
        [0, 0, 1]
      ];

      var result = [];
      for (var r = 0; r < 3; r++) {
        result[r] = [];
        for (var c = 0; c < 3; c++) {
          var sum = 0;
          for (var k = 0; k < 3; k++) {
            sum += a[r][k] * b[k][c];
          }

          result[r][c] = sum;
        }
      }

      return [
        result[0][0],
        result[1][0],
        result[0][1],
        result[1][1],
        result[0][2],
        result[1][2]
      ];
    },

    /**
     * Returns string representation of function body
     * @param {Function} fn Function to get body of
     * @return {String} Function body
     */
    getFunctionBody: function (fn) {
      return (String(fn).match(/function[^{]*\{([\s\S]*)\}/) || {})[1];
    },

    /**
     * Normalizes polygon/polyline points according to their dimensions
     * @param {Array} points
     * @param {Object} options
     */
    normalizePoints: function (points, options) {
      var minX = fabric.util.array.min(points, 'x'),
        minY = fabric.util.array.min(points, 'y');

      minX = minX < 0 ? minX : 0;
      minY = minX < 0 ? minY : 0;

      for (var i = 0, len = points.length; i < len; i++) {
        // normalize coordinates, according to containing box
        // (dimensions of which are passed via `options`)
        points[i].x -= (options.width / 2 + minX) || 0;
        points[i].y -= (options.height / 2 + minY) || 0;
      }
    },

    /**
     * Returns true if context has transparent pixel
     * at specified location (taking tolerance into account)
     * @param {CanvasRenderingContext2D} ctx context
     * @param {Number} x x coordinate
     * @param {Number} y y coordinate
     * @param {Number} tolerance Tolerance
     */
    isTransparent: function (ctx, x, y, tolerance) {

      // If tolerance is > 0 adjust start coords to take into account.
      // If moves off Canvas fix to 0
      if (tolerance > 0) {
        if (x > tolerance) {
          x -= tolerance;
        } else {
          x = 0;
        }
        if (y > tolerance) {
          y -= tolerance;
        } else {
          y = 0;
        }
      }

      var _isTransparent = true;
      var imageData = ctx.getImageData(
        x, y, (tolerance * 2) || 1, (tolerance * 2) || 1);

      // Split image data - for tolerance > 1, pixelDataSize = 4;
      for (var i = 3, l = imageData.data.length; i < l; i += 4) {
        var temp = imageData.data[i];
        _isTransparent = temp <= 0;
        if (_isTransparent === false) break; // Stop if colour found
      }

      imageData = null;

      return _isTransparent;
    }
  };

})(typeof exports !== 'undefined' ? exports : this);

(function () {

  var arcToSegmentsCache = {},
    segmentToBezierCache = {},
    _join = Array.prototype.join,
    argsString;

  // Generous contribution by Raph Levien, from libsvg-0.1.0.tar.gz
  function arcToSegments(x, y, rx, ry, large, sweep, rotateX, ox, oy) {

    argsString = _join.call(arguments);

    if (arcToSegmentsCache[argsString]) {
      return arcToSegmentsCache[argsString];
    }

    var coords = getXYCoords(rotateX, rx, ry, ox, oy, x, y);

    var d = (coords.x1 - coords.x0) * (coords.x1 - coords.x0) +
      (coords.y1 - coords.y0) * (coords.y1 - coords.y0);

    var sfactor_sq = 1 / d - 0.25;
    if (sfactor_sq < 0) sfactor_sq = 0;

    var sfactor = Math.sqrt(sfactor_sq);
    if (sweep === large) sfactor = -sfactor;

    var xc = 0.5 * (coords.x0 + coords.x1) - sfactor * (coords.y1 - coords.y0);
    var yc = 0.5 * (coords.y0 + coords.y1) + sfactor * (coords.x1 - coords.x0);

    var th0 = Math.atan2(coords.y0 - yc, coords.x0 - xc);
    var th1 = Math.atan2(coords.y1 - yc, coords.x1 - xc);

    var th_arc = th1 - th0;
    if (th_arc < 0 && sweep === 1) {
      th_arc += 2 * Math.PI;
    } else if (th_arc > 0 && sweep === 0) {
      th_arc -= 2 * Math.PI;
    }

    var segments = Math.ceil(Math.abs(th_arc / (Math.PI * 0.5 + 0.001)));
    var result = [];
    for (var i = 0; i < segments; i++) {
      var th2 = th0 + i * th_arc / segments;
      var th3 = th0 + (i + 1) * th_arc / segments;
      result[i] = [xc, yc, th2, th3, rx, ry, coords.sin_th, coords.cos_th];
    }

    arcToSegmentsCache[argsString] = result;
    return result;
  }

  function getXYCoords(rotateX, rx, ry, ox, oy, x, y) {

    var th = rotateX * (Math.PI / 180);
    var sin_th = Math.sin(th);
    var cos_th = Math.cos(th);
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    var px = cos_th * (ox - x) * 0.5 + sin_th * (oy - y) * 0.5;
    var py = cos_th * (oy - y) * 0.5 - sin_th * (ox - x) * 0.5;
    var pl = (px * px) / (rx * rx) + (py * py) / (ry * ry);
    if (pl > 1) {
      pl = Math.sqrt(pl);
      rx *= pl;
      ry *= pl;
    }

    var a00 = cos_th / rx;
    var a01 = sin_th / rx;
    var a10 = (-sin_th) / ry;
    var a11 = (cos_th) / ry;

    return {
      x0: a00 * ox + a01 * oy,
      y0: a10 * ox + a11 * oy,
      x1: a00 * x + a01 * y,
      y1: a10 * x + a11 * y,
      sin_th: sin_th,
      cos_th: cos_th
    };
  }

  function segmentToBezier(cx, cy, th0, th1, rx, ry, sin_th, cos_th) {
    argsString = _join.call(arguments);
    if (segmentToBezierCache[argsString]) {
      return segmentToBezierCache[argsString];
    }

    var a00 = cos_th * rx;
    var a01 = -sin_th * ry;
    var a10 = sin_th * rx;
    var a11 = cos_th * ry;

    var th_half = 0.5 * (th1 - th0);
    var t = (8 / 3) * Math.sin(th_half * 0.5) *
      Math.sin(th_half * 0.5) / Math.sin(th_half);

    var x1 = cx + Math.cos(th0) - t * Math.sin(th0);
    var y1 = cy + Math.sin(th0) + t * Math.cos(th0);
    var x3 = cx + Math.cos(th1);
    var y3 = cy + Math.sin(th1);
    var x2 = x3 + t * Math.sin(th1);
    var y2 = y3 - t * Math.cos(th1);

    segmentToBezierCache[argsString] = [
      a00 * x1 + a01 * y1, a10 * x1 + a11 * y1,
      a00 * x2 + a01 * y2, a10 * x2 + a11 * y2,
      a00 * x3 + a01 * y3, a10 * x3 + a11 * y3
    ];

    return segmentToBezierCache[argsString];
  }

  /**
   * Draws arc
   * @param {CanvasRenderingContext2D} ctx
   * @param {Number} x
   * @param {Number} y
   * @param {Array} coords
   */
  fabric.util.drawArc = function (ctx, x, y, coords) {
    var rx = coords[0];
    var ry = coords[1];
    var rot = coords[2];
    var large = coords[3];
    var sweep = coords[4];
    var ex = coords[5];
    var ey = coords[6];
    var segs = arcToSegments(ex, ey, rx, ry, large, sweep, rot, x, y);
    for (var i = 0; i < segs.length; i++) {
      var bez = segmentToBezier.apply(this, segs[i]);
      ctx.bezierCurveTo.apply(ctx, bez);
    }
  };
})();

(function () {

  var slice = Array.prototype.slice;

  /* _ES5_COMPAT_START_ */

  if (!Array.prototype.indexOf) {
    /**
     * Finds index of an element in an array
     * @param {Any} searchElement
     * @param {Number} [fromIndex]
     * @return {Number}
     */
    Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
      if (this === void 0 || this === null) {
        throw new TypeError();
      }
      var t = Object(this), len = t.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = 0;
      if (arguments.length > 0) {
        n = Number(arguments[1]);
        if (n !== n) { // shortcut for verifying if it's NaN
          n = 0;
        } else if (n !== 0 && n !== Number.POSITIVE_INFINITY && n !== Number.NEGATIVE_INFINITY) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }
      if (n >= len) {
        return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }
      return -1;
    };
  }

  if (!Array.prototype.forEach) {
    /**
     * Iterates an array, invoking callback for each element
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Array}
     */
    Array.prototype.forEach = function (fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          fn.call(context, this[i], i, this);
        }
      }
    };
  }

  if (!Array.prototype.map) {
    /**
     * Returns a result of iterating over an array, invoking callback for each element
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Array}
     */
    Array.prototype.map = function (fn, context) {
      var result = [];
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          result[i] = fn.call(context, this[i], i, this);
        }
      }
      return result;
    };
  }

  if (!Array.prototype.every) {
    /**
     * Returns true if a callback returns truthy value for all elements in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Boolean}
     */
    Array.prototype.every = function (fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this && !fn.call(context, this[i], i, this)) {
          return false;
        }
      }
      return true;
    };
  }

  if (!Array.prototype.some) {
    /**
     * Returns true if a callback returns truthy value for at least one element in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Boolean}
     */
    Array.prototype.some = function (fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this && fn.call(context, this[i], i, this)) {
          return true;
        }
      }
      return false;
    };
  }

  if (!Array.prototype.filter) {
    /**
     * Returns the result of iterating over elements in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Array}
     */
    Array.prototype.filter = function (fn, context) {
      var result = [], val;
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          val = this[i]; // in case fn mutates this
          if (fn.call(context, val, i, this)) {
            result.push(val);
          }
        }
      }
      return result;
    };
  }

  if (!Array.prototype.reduce) {
    /**
     * Returns "folded" (reduced) result of iterating over elements in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Any}
     */
    Array.prototype.reduce = function (fn /*, initial*/) {
      var len = this.length >>> 0,
        i = 0,
        rv;

      if (arguments.length > 1) {
        rv = arguments[1];
      } else {
        do {
          if (i in this) {
            rv = this[i++];
            break;
          }
          // if array contains no values, no initial value to return
          if (++i >= len) {
            throw new TypeError();
          }
        }
        while (true);
      }
      for (; i < len; i++) {
        if (i in this) {
          rv = fn.call(null, rv, this[i], i, this);
        }
      }
      return rv;
    };
  }

  /* _ES5_COMPAT_END_ */

  /**
   * Invokes method on all items in a given array
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} method Name of a method to invoke
   * @return {Array}
   */
  function invoke(array, method) {
    var args = slice.call(arguments, 2), result = [];
    for (var i = 0, len = array.length; i < len; i++) {
      result[i] = args.length ? array[i][method].apply(array[i], args) : array[i][method].call(array[i]);
    }
    return result;
  }

  /**
   * Finds maximum value in array (not necessarily "first" one)
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   * @return {Any}
   */
  function max(array, byProperty) {
    return find(array, byProperty, function (value1, value2) {
      return value1 >= value2;
    });
  }

  /**
   * Finds minimum value in array (not necessarily "first" one)
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   * @return {Any}
   */
  function min(array, byProperty) {
    return find(array, byProperty, function (value1, value2) {
      return value1 < value2;
    });
  }

  /**
   * @private
   */
  function find(array, byProperty, condition) {
    if (!array || array.length === 0) return undefined;

    var i = array.length - 1,
      result = byProperty ? array[i][byProperty] : array[i];
    if (byProperty) {
      while (i--) {
        if (condition(array[i][byProperty], result)) {
          result = array[i][byProperty];
        }
      }
    } else {
      while (i--) {
        if (condition(array[i], result)) {
          result = array[i];
        }
      }
    }
    return result;
  }

  /**
   * @namespace fabric.util.array
   */
  fabric.util.array = {
    invoke: invoke,
    min: min,
    max: max
  };

})();

(function () {

  /**
   * Copies all enumerable properties of one object to another
   * @memberOf fabric.util.object
   * @param {Object} destination Where to copy to
   * @param {Object} source Where to copy from
   * @return {Object}
   */
  function extend(destination, source) {
    // JScript DontEnum bug is not taken care of
    for (var property in source) {
      destination[property] = source[property];
    }
    return destination;
  }

  /**
   * Creates an empty object and copies all enumerable properties of another object to it
   * @memberOf fabric.util.object
   * @param {Object} object Object to clone
   * @return {Object}
   */
  function clone(object) {
    return extend({}, object);
  }

  /** @namespace fabric.util.object */
  fabric.util.object = {
    extend: extend,
    clone: clone
  };

})();

(function () {

  /* _ES5_COMPAT_START_ */
  if (!String.prototype.trim) {
    /**
     * Trims a string (removing whitespace from the beginning and the end)
     * @function external:String#trim
     * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/Trim">String#trim on MDN</a>
     */
    String.prototype.trim = function () {
      // this trim is not fully ES3 or ES5 compliant, but it should cover most cases for now
      return this.replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '');
    };
  }

  /* _ES5_COMPAT_END_ */

  /**
   * Camelizes a string
   * @memberOf fabric.util.string
   * @param {String} string String to camelize
   * @return {String} Camelized version of a string
   */
  function camelize(string) {
    return string.replace(/-+(.)?/g, function (match, character) {
      return character ? character.toUpperCase() : '';
    });
  }

  /**
   * Capitalizes a string
   * @memberOf fabric.util.string
   * @param {String} string String to capitalize
   * @param {Boolean} [firstLetterOnly] If true only first letter is capitalized
   * and other letters stay untouched, if false first letter is capitalized
   * and other letters are converted to lowercase.
   * @return {String} Capitalized version of a string
   */
  function capitalize(string, firstLetterOnly) {
    return string.charAt(0).toUpperCase() +
      (firstLetterOnly ? string.slice(1) : string.slice(1).toLowerCase());
  }

  /**
   * Escapes XML in a string
   * @memberOf fabric.util.string
   * @param {String} string String to escape
   * @return {String} Escaped version of a string
   */
  function escapeXml(string) {
    return string.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /**
   * String utilities
   * @namespace fabric.util.string
   */
  fabric.util.string = {
    camelize: camelize,
    capitalize: capitalize,
    escapeXml: escapeXml
  };
}());

/* _ES5_COMPAT_START_ */
(function () {

  var slice = Array.prototype.slice,
    apply = Function.prototype.apply,
    Dummy = function () {
    };

  if (!Function.prototype.bind) {
    /**
     * Cross-browser approximation of ES5 Function.prototype.bind (not fully spec conforming)
     * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind">Function#bind on MDN</a>
     * @param {Object} thisArg Object to bind function to
     * @param {Any[]} [...] Values to pass to a bound function
     * @return {Function}
     */
    Function.prototype.bind = function (thisArg) {
      var fn = this, args = slice.call(arguments, 1), bound;
      if (args.length) {
        bound = function () {
          return apply.call(fn, this instanceof Dummy ? this : thisArg, args.concat(slice.call(arguments)));
        };
      } else {
        /** @ignore */
        bound = function () {
          return apply.call(fn, this instanceof Dummy ? this : thisArg, arguments);
        };
      }
      Dummy.prototype = this.prototype;
      bound.prototype = new Dummy();

      return bound;
    };
  }

})();
/* _ES5_COMPAT_END_ */

(function () {

  var slice = Array.prototype.slice, emptyFunction = function () {
  };

  var IS_DONTENUM_BUGGY = (function () {
    for (var p in {toString: 1}) {
      if (p === 'toString') return false;
    }
    return true;
  })();

  /** @ignore */
  var addMethods = function (klass, source, parent) {
    for (var property in source) {

      if (property in klass.prototype &&
        typeof klass.prototype[property] === 'function' &&
        (source[property] + '').indexOf('callSuper') > -1) {

        klass.prototype[property] = (function (property) {
          return function () {

            var superclass = this.constructor.superclass;
            this.constructor.superclass = parent;
            var returnValue = source[property].apply(this, arguments);
            this.constructor.superclass = superclass;

            if (property !== 'initialize') {
              return returnValue;
            }
          };
        })(property);
      } else {
        klass.prototype[property] = source[property];
      }

      if (IS_DONTENUM_BUGGY) {
        if (source.toString !== Object.prototype.toString) {
          klass.prototype.toString = source.toString;
        }
        if (source.valueOf !== Object.prototype.valueOf) {
          klass.prototype.valueOf = source.valueOf;
        }
      }
    }
  };

  function Subclass() {
  }

  function callSuper(methodName) {
    var fn = this.constructor.superclass.prototype[methodName];
    return (arguments.length > 1)
      ? fn.apply(this, slice.call(arguments, 1))
      : fn.call(this);
  }

  /**
   * Helper for creation of "classes".
   * @memberOf fabric.util
   * @param parent optional "Class" to inherit from
   * @param properties Properties shared by all instances of this class
   *                  (be careful modifying objects defined here as this would affect all instances)
   */
  function createClass() {
    var parent = null,
      properties = slice.call(arguments, 0);

    if (typeof properties[0] === 'function') {
      parent = properties.shift();
    }

    function klass() {
      this.initialize.apply(this, arguments);
    }

    klass.superclass = parent;
    klass.subclasses = [];

    if (parent) {
      Subclass.prototype = parent.prototype;
      klass.prototype = new Subclass();
      parent.subclasses.push(klass);
    }
    for (var i = 0, length = properties.length; i < length; i++) {
      addMethods(klass, properties[i], parent);
    }
    if (!klass.prototype.initialize) {
      klass.prototype.initialize = emptyFunction;
    }
    klass.prototype.constructor = klass;
    klass.prototype.callSuper = callSuper;
    return klass;
  }

  fabric.util.createClass = createClass;
})();

(function () {

  var unknown = 'unknown';

  /* EVENT HANDLING */

  function areHostMethods(object) {
    var methodNames = Array.prototype.slice.call(arguments, 1),
      t, i, len = methodNames.length;
    for (i = 0; i < len; i++) {
      t = typeof object[methodNames[i]];
      if (!(/^(?:function|object|unknown)$/).test(t)) return false;
    }
    return true;
  }

  var getUniqueId = (function () {
    var uid = 0;
    return function (element) {
      return element.__uniqueID || (element.__uniqueID = 'uniqueID__' + uid++);
    };
  })();

  /** @ignore */
  var getElement, setElement;

  (function () {
    var elements = {};
    /** @ignore */
    getElement = function (uid) {
      return elements[uid];
    };
    /** @ignore */
    setElement = function (uid, element) {
      elements[uid] = element;
    };
  })();

  function createListener(uid, handler) {
    return {
      handler: handler,
      wrappedHandler: createWrappedHandler(uid, handler)
    };
  }

  function createWrappedHandler(uid, handler) {
    return function (e) {
      handler.call(getElement(uid), e || fabric.window.event);
    };
  }

  function createDispatcher(uid, eventName) {
    return function (e) {
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          handlersForEvent[i].call(this, e || fabric.window.event);
        }
      }
    };
  }

  var shouldUseAddListenerRemoveListener = (
      areHostMethods(fabric.document.documentElement, 'addEventListener', 'removeEventListener') &&
      areHostMethods(fabric.window, 'addEventListener', 'removeEventListener')),

    shouldUseAttachEventDetachEvent = (
      areHostMethods(fabric.document.documentElement, 'attachEvent', 'detachEvent') &&
      areHostMethods(fabric.window, 'attachEvent', 'detachEvent')),

    // IE branch
    listeners = {},

    // DOM L0 branch
    handlers = {},

    addListener, removeListener;

  if (shouldUseAddListenerRemoveListener) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      element.addEventListener(eventName, handler, false);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      element.removeEventListener(eventName, handler, false);
    };
  } else if (shouldUseAttachEventDetachEvent) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      setElement(uid, element);
      if (!listeners[uid]) {
        listeners[uid] = {};
      }
      if (!listeners[uid][eventName]) {
        listeners[uid][eventName] = [];

      }
      var listener = createListener(uid, handler);
      listeners[uid][eventName].push(listener);
      element.attachEvent('on' + eventName, listener.wrappedHandler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element), listener;
      if (listeners[uid] && listeners[uid][eventName]) {
        for (var i = 0, len = listeners[uid][eventName].length; i < len; i++) {
          listener = listeners[uid][eventName][i];
          if (listener && listener.handler === handler) {
            element.detachEvent('on' + eventName, listener.wrappedHandler);
            listeners[uid][eventName][i] = null;
          }
        }
      }
    };
  } else {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (!handlers[uid]) {
        handlers[uid] = {};
      }
      if (!handlers[uid][eventName]) {
        handlers[uid][eventName] = [];
        var existingHandler = element['on' + eventName];
        if (existingHandler) {
          handlers[uid][eventName].push(existingHandler);
        }
        element['on' + eventName] = createDispatcher(uid, eventName);
      }
      handlers[uid][eventName].push(handler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          if (handlersForEvent[i] === handler) {
            handlersForEvent.splice(i, 1);
          }
        }
      }
    };
  }

  /**
   * Adds an event listener to an element
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.addListener = addListener;

  /**
   * Removes an event listener from an element
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.removeListener = removeListener;

  /**
   * Cross-browser wrapper for getting event's coordinates
   * @memberOf fabric.util
   * @param {Event} event Event object
   * @param {HTMLCanvasElement} upperCanvasEl &lt;canvas> element on which object selection is drawn
   */
  function getPointer(event, upperCanvasEl) {
    event || (event = fabric.window.event);

    var element = event.target ||
      (typeof event.srcElement !== unknown ? event.srcElement : null);

    var scroll = fabric.util.getScrollLeftTop(element, upperCanvasEl);

    return {
      x: pointerX(event) + scroll.left,
      y: pointerY(event) + scroll.top
    };
  }

  var pointerX = function (event) {
    // looks like in IE (<9) clientX at certain point (apparently when mouseup fires on VML element)
    // is represented as COM object, with all the consequences, like "unknown" type and error on [[Get]]
    // need to investigate later
    return (typeof event.clientX !== unknown ? event.clientX : 0);
  };

  var pointerY = function (event) {
    return (typeof event.clientY !== unknown ? event.clientY : 0);
  };

  function _getPointer(event, pageProp, clientProp) {
    var touchProp = event.type === 'touchend' ? 'changedTouches' : 'touches';

    return (event[touchProp] && event[touchProp][0]
      ? (event[touchProp][0][pageProp] - (event[touchProp][0][pageProp] - event[touchProp][0][clientProp]))
      || event[clientProp]
      : event[clientProp]);
  }

  if (fabric.isTouchSupported) {
    pointerX = function (event) {
      return _getPointer(event, 'pageX', 'clientX');
    };
    pointerY = function (event) {
      return _getPointer(event, 'pageY', 'clientY');
    };
  }

  fabric.util.getPointer = getPointer;

  fabric.util.object.extend(fabric.util, fabric.Observable);

})();

(function () {

  /**
   * Cross-browser wrapper for setting element's style
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {Object} styles
   * @return {HTMLElement} Element that was passed as a first argument
   */
  function setStyle(element, styles) {
    var elementStyle = element.style;
    if (!elementStyle) {
      return element;
    }
    if (typeof styles === 'string') {
      element.style.cssText += ';' + styles;
      return styles.indexOf('opacity') > -1
        ? setOpacity(element, styles.match(/opacity:\s*(\d?\.?\d*)/)[1])
        : element;
    }
    for (var property in styles) {
      if (property === 'opacity') {
        setOpacity(element, styles[property]);
      } else {
        var normalizedProperty = (property === 'float' || property === 'cssFloat')
          ? (typeof elementStyle.styleFloat === 'undefined' ? 'cssFloat' : 'styleFloat')
          : property;
        elementStyle[normalizedProperty] = styles[property];
      }
    }
    return element;
  }

  var parseEl = fabric.document.createElement('div'),
    supportsOpacity = typeof parseEl.style.opacity === 'string',
    supportsFilters = typeof parseEl.style.filter === 'string',
    reOpacity = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,

    /** @ignore */
    setOpacity = function (element) {
      return element;
    };

  if (supportsOpacity) {
    /** @ignore */
    setOpacity = function (element, value) {
      element.style.opacity = value;
      return element;
    };
  } else if (supportsFilters) {
    /** @ignore */
    setOpacity = function (element, value) {
      var es = element.style;
      if (element.currentStyle && !element.currentStyle.hasLayout) {
        es.zoom = 1;
      }
      if (reOpacity.test(es.filter)) {
        value = value >= 0.9999 ? '' : ('alpha(opacity=' + (value * 100) + ')');
        es.filter = es.filter.replace(reOpacity, value);
      } else {
        es.filter += ' alpha(opacity=' + (value * 100) + ')';
      }
      return element;
    };
  }

  fabric.util.setStyle = setStyle;

})();

(function () {

  var _slice = Array.prototype.slice;

  /**
   * Takes id and returns an element with that id (if one exists in a document)
   * @memberOf fabric.util
   * @param {String|HTMLElement} id
   * @return {HTMLElement|null}
   */
  function getById(id) {
    return typeof id === 'string' ? fabric.document.getElementById(id) : id;
  }

  /**
   * Converts an array-like object (e.g. arguments or NodeList) to an array
   * @memberOf fabric.util
   * @param {Object} arrayLike
   * @return {Array}
   */
  var toArray = function (arrayLike) {
    return _slice.call(arrayLike, 0);
  };

  var sliceCanConvertNodelists;
  try {
    sliceCanConvertNodelists = toArray(fabric.document.childNodes) instanceof Array;
  } catch (err) {
  }

  if (!sliceCanConvertNodelists) {
    toArray = function (arrayLike) {
      var arr = new Array(arrayLike.length), i = arrayLike.length;
      while (i--) {
        arr[i] = arrayLike[i];
      }
      return arr;
    };
  }

  /**
   * Creates specified element with specified attributes
   * @memberOf fabric.util
   * @param {String} tagName Type of an element to create
   * @param {Object} [attributes] Attributes to set on an element
   * @return {HTMLElement} Newly created element
   */
  function makeElement(tagName, attributes) {
    var el = fabric.document.createElement(tagName);
    for (var prop in attributes) {
      if (prop === 'class') {
        el.className = attributes[prop];
      } else if (prop === 'for') {
        el.htmlFor = attributes[prop];
      } else {
        el.setAttribute(prop, attributes[prop]);
      }
    }
    return el;
  }

  /**
   * Adds class to an element
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to add class to
   * @param {String} className Class to add to an element
   */
  function addClass(element, className) {
    if ((' ' + element.className + ' ').indexOf(' ' + className + ' ') === -1) {
      element.className += (element.className ? ' ' : '') + className;
    }
  }

  /**
   * Wraps element with another element
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to wrap
   * @param {HTMLElement|String} wrapper Element to wrap with
   * @param {Object} [attributes] Attributes to set on a wrapper
   * @return {HTMLElement} wrapper
   */
  function wrapElement(element, wrapper, attributes) {
    if (typeof wrapper === 'string') {
      wrapper = makeElement(wrapper, attributes);
    }
    if (element.parentNode) {
      element.parentNode.replaceChild(wrapper, element);
    }
    wrapper.appendChild(element);
    return wrapper;
  }

  function getScrollLeftTop(element, upperCanvasEl) {

    var firstFixedAncestor,
      origElement,
      left = 0,
      top = 0,
      docElement = fabric.document.documentElement,
      body = fabric.document.body || {
        scrollLeft: 0, scrollTop: 0
      };

    origElement = element;

    while (element && element.parentNode && !firstFixedAncestor) {

      element = element.parentNode;

      if (element !== fabric.document &&
        fabric.util.getElementStyle(element, 'position') === 'fixed') {
        firstFixedAncestor = element;
      }

      if (element !== fabric.document &&
        origElement !== upperCanvasEl &&
        fabric.util.getElementStyle(element, 'position') === 'absolute') {
        left = 0;
        top = 0;
      } else if (element === fabric.document) {
        left = body.scrollLeft || docElement.scrollLeft || 0;
        top = body.scrollTop || docElement.scrollTop || 0;
      } else {
        left += element.scrollLeft || 0;
        top += element.scrollTop || 0;
      }
    }

    return {left: left, top: top};
  }

  /**
   * Returns offset for a given element
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to get offset for
   * @return {Object} Object with "left" and "top" properties
   */
  function getElementOffset(element) {
    var docElem,
      box = {left: 0, top: 0},
      doc = element && element.ownerDocument,
      offset = {left: 0, top: 0},
      scrollLeftTop,
      offsetAttributes = {
        'borderLeftWidth': 'left',
        'borderTopWidth': 'top',
        'paddingLeft': 'left',
        'paddingTop': 'top'
      };

    if (!doc) {
      return {left: 0, top: 0};
    }

    for (var attr in offsetAttributes) {
      offset[offsetAttributes[attr]] += parseInt(getElementStyle(element, attr), 10) || 0;
    }

    docElem = doc.documentElement;
    if (typeof element.getBoundingClientRect !== 'undefined') {
      box = element.getBoundingClientRect();
    }

    scrollLeftTop = fabric.util.getScrollLeftTop(element, null);

    return {
      left: box.left + scrollLeftTop.left - (docElem.clientLeft || 0) + offset.left,
      top: box.top + scrollLeftTop.top - (docElem.clientTop || 0) + offset.top
    };
  }

  /**
   * Returns style attribute value of a given element
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to get style attribute for
   * @param {String} attr Style attribute to get for element
   * @return {String} Style attribute value of the given element.
   */
  function getElementStyle(element, attr) {
    if (!element.style) {
      element.style = {};
    }

    if (fabric.document.defaultView && fabric.document.defaultView.getComputedStyle) {
      return fabric.document.defaultView.getComputedStyle(element, null)[attr];
    } else {
      var value = element.style[attr];
      if (!value && element.currentStyle) value = element.currentStyle[attr];
      return value;
    }
  }

  (function () {
    var style = fabric.document.documentElement.style;

    var selectProp = 'userSelect' in style
      ? 'userSelect'
      : 'MozUserSelect' in style
        ? 'MozUserSelect'
        : 'WebkitUserSelect' in style
          ? 'WebkitUserSelect'
          : 'KhtmlUserSelect' in style
            ? 'KhtmlUserSelect'
            : '';

    /**
     * Makes element unselectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make unselectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementUnselectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = fabric.util.falseFunction;
      }
      if (selectProp) {
        element.style[selectProp] = 'none';
      } else if (typeof element.unselectable === 'string') {
        element.unselectable = 'on';
      }
      return element;
    }

    /**
     * Makes element selectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make selectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementSelectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = null;
      }
      if (selectProp) {
        element.style[selectProp] = '';
      } else if (typeof element.unselectable === 'string') {
        element.unselectable = '';
      }
      return element;
    }

    fabric.util.makeElementUnselectable = makeElementUnselectable;
    fabric.util.makeElementSelectable = makeElementSelectable;
  })();

  (function () {

    /**
     * Inserts a script element with a given url into a document; invokes callback, when that script is finished loading
     * @memberOf fabric.util
     * @param {String} url URL of a script to load
     * @param {Function} callback Callback to execute when script is finished loading
     */
    function getScript(url, callback) {
      var headEl = fabric.document.getElementsByTagName('head')[0],
        scriptEl = fabric.document.createElement('script'),
        loading = true;

      /** @ignore */
      scriptEl.onload = /** @ignore */ scriptEl.onreadystatechange = function (e) {
        if (loading) {
          if (typeof this.readyState === 'string' &&
            this.readyState !== 'loaded' &&
            this.readyState !== 'complete') return;
          loading = false;
          callback(e || fabric.window.event);
          scriptEl = scriptEl.onload = scriptEl.onreadystatechange = null;
        }
      };
      scriptEl.src = url;
      headEl.appendChild(scriptEl);
      // causes issue in Opera
      // headEl.removeChild(scriptEl);
    }

    fabric.util.getScript = getScript;
  })();

  fabric.util.getById = getById;
  fabric.util.toArray = toArray;
  fabric.util.makeElement = makeElement;
  fabric.util.addClass = addClass;
  fabric.util.wrapElement = wrapElement;
  fabric.util.getScrollLeftTop = getScrollLeftTop;
  fabric.util.getElementOffset = getElementOffset;
  fabric.util.getElementStyle = getElementStyle;

})();

(function () {

  function addParamToUrl(url, param) {
    return url + (/\?/.test(url) ? '&' : '?') + param;
  }

  var makeXHR = (function () {
    var factories = [
      function () {
        return new ActiveXObject('Microsoft.XMLHTTP');
      },
      function () {
        return new ActiveXObject('Msxml2.XMLHTTP');
      },
      function () {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      },
      function () {
        return new XMLHttpRequest();
      }
    ];
    for (var i = factories.length; i--;) {
      try {
        var req = factories[i]();
        if (req) {
          return factories[i];
        }
      } catch (err) {
      }
    }
  })();

  function emptyFn() {
  }

  /**
   * Cross-browser abstraction for sending XMLHttpRequest
   * @memberOf fabric.util
   * @param {String} url URL to send XMLHttpRequest to
   * @param {Object} [options] Options object
   * @param {String} [options.method="GET"]
   * @param {Function} options.onComplete Callback to invoke when request is completed
   * @return {XMLHttpRequest} request
   */
  function request(url, options) {

    options || (options = {});

    var method = options.method ? options.method.toUpperCase() : 'GET',
      onComplete = options.onComplete || function () {
      },
      xhr = makeXHR(),
      body;

    /** @ignore */
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        onComplete(xhr);
        xhr.onreadystatechange = emptyFn;
      }
    };

    if (method === 'GET') {
      body = null;
      if (typeof options.parameters === 'string') {
        url = addParamToUrl(url, options.parameters);
      }
    }

    xhr.open(method, url, true);

    if (method === 'POST' || method === 'PUT') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    xhr.send(body);
    return xhr;
  }

  fabric.util.request = request;
})();

/**
 * Wrapper around `console.log` (when available)
 * @param {Any} values Values to log
 */
fabric.log = function () {
};

/**
 * Wrapper around `console.warn` (when available)
 * @param {Any} Values to log as a warning
 */
fabric.warn = function () {
};

if (typeof console !== 'undefined') {
  ['log', 'warn'].forEach(function (methodName) {
    if (typeof console[methodName] !== 'undefined' && console[methodName].apply) {
      fabric[methodName] = function () {
        return console[methodName].apply(console, arguments);
      };
    }
  });
}

(function () {

  /**
   * Changes value from one to another within certain period of time, invoking callbacks as value is being changed.
   * @memberOf fabric.util
   * @param {Object} [options] Animation options
   * @param {Function} [options.onChange] Callback; invoked on every value change
   * @param {Function} [options.onComplete] Callback; invoked when value change is completed
   * @param {Number} [options.startValue=0] Starting value
   * @param {Number} [options.endValue=100] Ending value
   * @param {Number} [options.byValue=100] Value to modify the property by
   * @param {Function} [options.easing] Easing function
   * @param {Number} [options.duration=500] Duration of change
   */
  function animate(options) {

    requestAnimFrame(function (timestamp) {
      options || (options = {});

      var start = timestamp || +new Date(),
        duration = options.duration || 500,
        finish = start + duration, time,
        onChange = options.onChange || function () {
        },
        abort = options.abort || function () {
          return false;
        },
        easing = options.easing || function (t, b, c, d) {
          return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        startValue = 'startValue' in options ? options.startValue : 0,
        endValue = 'endValue' in options ? options.endValue : 100,
        byValue = options.byValue || endValue - startValue;

      options.onStart && options.onStart();

      (function tick(ticktime) {
        time = ticktime || +new Date();
        var currentTime = time > finish ? duration : (time - start);
        if (abort()) {
          options.onComplete && options.onComplete();
          return;
        }
        onChange(easing(currentTime, startValue, byValue, duration));
        if (time > finish) {
          options.onComplete && options.onComplete();
          return;
        }
        requestAnimFrame(tick);
      })(start);
    });

  }

  var _requestAnimFrame = fabric.window.requestAnimationFrame ||
    fabric.window.webkitRequestAnimationFrame ||
    fabric.window.mozRequestAnimationFrame ||
    fabric.window.oRequestAnimationFrame ||
    fabric.window.msRequestAnimationFrame ||
    function (callback) {
      fabric.window.setTimeout(callback, 1000 / 60);
    };
  /**
   * requestAnimationFrame polyfill based on http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   * In order to get a precise start time, `requestAnimFrame` should be called as an entry into the method
   * @memberOf fabric.util
   * @param {Function} callback Callback to invoke
   * @param {DOMElement} element optional Element to associate with animation
   */
  var requestAnimFrame = function () {
    return _requestAnimFrame.apply(fabric.window, arguments);
  };

  fabric.util.animate = animate;
  fabric.util.requestAnimFrame = requestAnimFrame;

})();

(function () {

  function normalize(a, c, p, s) {
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    return {a: a, c: c, p: p, s: s};
  }

  function elastic(opts, t, d) {
    return opts.a *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin((t * d - opts.s) * (2 * Math.PI) / opts.p);
  }

  /**
   * Cubic easing out
   * @memberOf fabric.util.ease
   */
  function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }

  /**
   * Cubic easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  }

  /**
   * Quartic easing in
   * @memberOf fabric.util.ease
   */
  function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  }

  /**
   * Quartic easing out
   * @memberOf fabric.util.ease
   */
  function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }

  /**
   * Quartic easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutQuart(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }

  /**
   * Quintic easing in
   * @memberOf fabric.util.ease
   */
  function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  }

  /**
   * Quintic easing out
   * @memberOf fabric.util.ease
   */
  function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }

  /**
   * Quintic easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutQuint(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }

  /**
   * Sinusoidal easing in
   * @memberOf fabric.util.ease
   */
  function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  }

  /**
   * Sinusoidal easing out
   * @memberOf fabric.util.ease
   */
  function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  }

  /**
   * Sinusoidal easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }

  /**
   * Exponential easing in
   * @memberOf fabric.util.ease
   */
  function easeInExpo(t, b, c, d) {
    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }

  /**
   * Exponential easing out
   * @memberOf fabric.util.ease
   */
  function easeOutExpo(t, b, c, d) {
    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  }

  /**
   * Exponential easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutExpo(t, b, c, d) {
    if (t === 0) return b;
    if (t === d) return b + c;
    t /= d / 2;
    if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  /**
   * Circular easing in
   * @memberOf fabric.util.ease
   */
  function easeInCirc(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }

  /**
   * Circular easing out
   * @memberOf fabric.util.ease
   */
  function easeOutCirc(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }

  /**
   * Circular easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutCirc(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }

  /**
   * Elastic easing in
   * @memberOf fabric.util.ease
   */
  function easeInElastic(t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t === 0) return b;
    t /= d;
    if (t === 1) return b + c;
    if (!p) p = d * 0.3;
    var opts = normalize(a, c, p, s);
    return -elastic(opts, t, d) + b;
  }

  /**
   * Elastic easing out
   * @memberOf fabric.util.ease
   */
  function easeOutElastic(t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t === 0) return b;
    t /= d;
    if (t === 1) return b + c;
    if (!p) p = d * 0.3;
    var opts = normalize(a, c, p, s);
    return opts.a * Math.pow(2, -10 * t) * Math.sin((t * d - opts.s) * (2 * Math.PI) / opts.p) + opts.c + b;
  }

  /**
   * Elastic easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutElastic(t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t === 0) return b;
    t /= d / 2;
    if (t === 2) return b + c;
    if (!p) p = d * (0.3 * 1.5);
    var opts = normalize(a, c, p, s);
    if (t < 1) return -0.5 * elastic(opts, t, d) + b;
    return opts.a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - opts.s) * (2 * Math.PI) / opts.p) * 0.5 + opts.c +
      b;
  }

  /**
   * Backwards easing in
   * @memberOf fabric.util.ease
   */
  function easeInBack(t, b, c, d, s) {
    if (s === undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }

  /**
   * Backwards easing out
   * @memberOf fabric.util.ease
   */
  function easeOutBack(t, b, c, d, s) {
    if (s === undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }

  /**
   * Backwards easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutBack(t, b, c, d, s) {
    if (s === undefined) s = 1.70158;
    t /= d / 2;
    if (t < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
  }

  /**
   * Bouncing easing in
   * @memberOf fabric.util.ease
   */
  function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
  }

  /**
   * Bouncing easing out
   * @memberOf fabric.util.ease
   */
  function easeOutBounce(t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    }
  }

  /**
   * Bouncing easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  }

  /**
   * Easing functions
   * See <a href="http://gizma.com/easing/">Easing Equations by Robert Penner</a>
   * @namespace fabric.util.ease
   */
  fabric.util.ease = {

    /**
     * Quadratic easing in
     * @memberOf fabric.util.ease
     */
    easeInQuad: function (t, b, c, d) {
      return c * (t /= d) * t + b;
    },

    /**
     * Quadratic easing out
     * @memberOf fabric.util.ease
     */
    easeOutQuad: function (t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },

    /**
     * Quadratic easing in and out
     * @memberOf fabric.util.ease
     */
    easeInOutQuad: function (t, b, c, d) {
      t /= (d / 2);
      if (t < 1) return c / 2 * t * t + b;
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },

    /**
     * Cubic easing in
     * @memberOf fabric.util.ease
     */
    easeInCubic: function (t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },

    easeOutCubic: easeOutCubic,
    easeInOutCubic: easeInOutCubic,
    easeInQuart: easeInQuart,
    easeOutQuart: easeOutQuart,
    easeInOutQuart: easeInOutQuart,
    easeInQuint: easeInQuint,
    easeOutQuint: easeOutQuint,
    easeInOutQuint: easeInOutQuint,
    easeInSine: easeInSine,
    easeOutSine: easeOutSine,
    easeInOutSine: easeInOutSine,
    easeInExpo: easeInExpo,
    easeOutExpo: easeOutExpo,
    easeInOutExpo: easeInOutExpo,
    easeInCirc: easeInCirc,
    easeOutCirc: easeOutCirc,
    easeInOutCirc: easeInOutCirc,
    easeInElastic: easeInElastic,
    easeOutElastic: easeOutElastic,
    easeInOutElastic: easeInOutElastic,
    easeInBack: easeInBack,
    easeOutBack: easeOutBack,
    easeInOutBack: easeInOutBack,
    easeInBounce: easeInBounce,
    easeOutBounce: easeOutBounce,
    easeInOutBounce: easeInOutBounce
  };

}());

(function (global) {

  'use strict';

  /**
   * @name fabric
   * @namespace
   */

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend,
    capitalize = fabric.util.string.capitalize,
    clone = fabric.util.object.clone,
    toFixed = fabric.util.toFixed,
    multiplyTransformMatrices = fabric.util.multiplyTransformMatrices;

  var attributesMap = {
    'fill-opacity': 'fillOpacity',
    'fill-rule': 'fillRule',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-style': 'fontStyle',
    'font-weight': 'fontWeight',
    'cx': 'left',
    'x': 'left',
    'r': 'radius',
    'stroke-dasharray': 'strokeDashArray',
    'stroke-linecap': 'strokeLineCap',
    'stroke-linejoin': 'strokeLineJoin',
    'stroke-miterlimit': 'strokeMiterLimit',
    'stroke-opacity': 'strokeOpacity',
    'stroke-width': 'strokeWidth',
    'text-decoration': 'textDecoration',
    'cy': 'top',
    'y': 'top',
    'transform': 'transformMatrix'
  };

  var colorAttributes = {
    'stroke': 'strokeOpacity',
    'fill': 'fillOpacity'
  };

  function normalizeAttr(attr) {
    // transform attribute names
    if (attr in attributesMap) {
      return attributesMap[attr];
    }
    return attr;
  }

  function normalizeValue(attr, value, parentAttributes) {
    var isArray;

    if ((attr === 'fill' || attr === 'stroke') && value === 'none') {
      value = '';
    } else if (attr === 'fillRule') {
      value = (value === 'evenodd') ? 'destination-over' : value;
    } else if (attr === 'strokeDashArray') {
      value = value.replace(/,/g, ' ').split(/\s+/);
    } else if (attr === 'transformMatrix') {
      if (parentAttributes && parentAttributes.transformMatrix) {
        value = multiplyTransformMatrices(
          parentAttributes.transformMatrix, fabric.parseTransformAttribute(value));
      } else {
        value = fabric.parseTransformAttribute(value);
      }
    }

    isArray = Object.prototype.toString.call(value) === '[object Array]';

    // TODO: need to normalize em, %, pt, etc. to px (!)
    var parsed = isArray ? value.map(parseFloat) : parseFloat(value);

    return (!isArray && isNaN(parsed) ? value : parsed);
  }

  /**
   * @private
   * @param {Object} attributes Array of attributes to parse
   */
  function _setStrokeFillOpacity(attributes) {
    for (var attr in colorAttributes) {

      if (!attributes[attr] || typeof attributes[colorAttributes[attr]] === 'undefined') continue;

      if (attributes[attr].indexOf('url(') === 0) continue;

      var color = new fabric.Color(attributes[attr]);
      attributes[attr] = color.setAlpha(toFixed(color.getAlpha() * attributes[colorAttributes[attr]], 2)).toRgba();

      delete attributes[colorAttributes[attr]];
    }
    return attributes;
  }

  /**
   * Parses "transform" attribute, returning an array of values
   * @static
   * @function
   * @memberOf fabric
   * @param {String} attributeValue String containing attribute value
   * @return {Array} Array of 6 elements representing transformation matrix
   */
  fabric.parseTransformAttribute = (function () {
    function rotateMatrix(matrix, args) {
      var angle = args[0];

      matrix[0] = Math.cos(angle);
      matrix[1] = Math.sin(angle);
      matrix[2] = -Math.sin(angle);
      matrix[3] = Math.cos(angle);
    }

    function scaleMatrix(matrix, args) {
      var multiplierX = args[0],
        multiplierY = (args.length === 2) ? args[1] : args[0];

      matrix[0] = multiplierX;
      matrix[3] = multiplierY;
    }

    function skewXMatrix(matrix, args) {
      matrix[2] = args[0];
    }

    function skewYMatrix(matrix, args) {
      matrix[1] = args[0];
    }

    function translateMatrix(matrix, args) {
      matrix[4] = args[0];
      if (args.length === 2) {
        matrix[5] = args[1];
      }
    }

    // identity matrix
    var iMatrix = [
        1, // a
        0, // b
        0, // c
        1, // d
        0, // e
        0  // f
      ],

      // == begin transform regexp
      number = '(?:[-+]?\\d+(?:\\.\\d+)?(?:e[-+]?\\d+)?)',

      comma_wsp = '(?:\\s+,?\\s*|,\\s*)',

      skewX = '(?:(skewX)\\s*\\(\\s*(' + number + ')\\s*\\))',

      skewY = '(?:(skewY)\\s*\\(\\s*(' + number + ')\\s*\\))',

      rotate = '(?:(rotate)\\s*\\(\\s*(' + number + ')(?:' +
        comma_wsp + '(' + number + ')' +
        comma_wsp + '(' + number + '))?\\s*\\))',

      scale = '(?:(scale)\\s*\\(\\s*(' + number + ')(?:' +
        comma_wsp + '(' + number + '))?\\s*\\))',

      translate = '(?:(translate)\\s*\\(\\s*(' + number + ')(?:' +
        comma_wsp + '(' + number + '))?\\s*\\))',

      matrix = '(?:(matrix)\\s*\\(\\s*' +
        '(' + number + ')' + comma_wsp +
        '(' + number + ')' + comma_wsp +
        '(' + number + ')' + comma_wsp +
        '(' + number + ')' + comma_wsp +
        '(' + number + ')' + comma_wsp +
        '(' + number + ')' +
        '\\s*\\))',

      transform = '(?:' +
        matrix + '|' +
        translate + '|' +
        scale + '|' +
        rotate + '|' +
        skewX + '|' +
        skewY +
        ')',

      transforms = '(?:' + transform + '(?:' + comma_wsp + transform + ')*' + ')',

      transform_list = '^\\s*(?:' + transforms + '?)\\s*$',

      // http://www.w3.org/TR/SVG/coords.html#TransformAttribute
      reTransformList = new RegExp(transform_list),
      // == end transform regexp

      reTransform = new RegExp(transform, 'g');

    return function (attributeValue) {

      // start with identity matrix
      var matrix = iMatrix.concat();
      var matrices = [];

      // return if no argument was given or
      // an argument does not match transform attribute regexp
      if (!attributeValue || (attributeValue && !reTransformList.test(attributeValue))) {
        return matrix;
      }

      attributeValue.replace(reTransform, function (match) {

        var m = new RegExp(transform).exec(match).filter(function (match) {
            return (match !== '' && match != null);
          }),
          operation = m[1],
          args = m.slice(2).map(parseFloat);

        switch (operation) {
          case 'translate':
            translateMatrix(matrix, args);
            break;
          case 'rotate':
            rotateMatrix(matrix, args);
            break;
          case 'scale':
            scaleMatrix(matrix, args);
            break;
          case 'skewX':
            skewXMatrix(matrix, args);
            break;
          case 'skewY':
            skewYMatrix(matrix, args);
            break;
          case 'matrix':
            matrix = args;
            break;
        }

        // snapshot current matrix into matrices array
        matrices.push(matrix.concat());
        // reset
        matrix = iMatrix.concat();
      });

      var combinedMatrix = matrices[0];
      while (matrices.length > 1) {
        matrices.shift();
        combinedMatrix = fabric.util.multiplyTransformMatrices(combinedMatrix, matrices[0]);
      }
      return combinedMatrix;
    };
  })();

  function parseFontDeclaration(value, oStyle) {

    // TODO: support non-px font size
    var match = value.match(
      /(normal|italic)?\s*(normal|small-caps)?\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\s*(\d+)px(?:\/(normal|[\d\.]+))?\s+(.*)/);

    if (!match) return;

    var fontStyle = match[1];
    // Font variant is not used
    // var fontVariant = match[2];
    var fontWeight = match[3];
    var fontSize = match[4];
    var lineHeight = match[5];
    var fontFamily = match[6];

    if (fontStyle) {
      oStyle.fontStyle = fontStyle;
    }
    if (fontWeight) {
      oStyle.fontSize = isNaN(parseFloat(fontWeight)) ? fontWeight : parseFloat(fontWeight);
    }
    if (fontSize) {
      oStyle.fontSize = parseFloat(fontSize);
    }
    if (fontFamily) {
      oStyle.fontFamily = fontFamily;
    }
    if (lineHeight) {
      oStyle.lineHeight = lineHeight === 'normal' ? 1 : lineHeight;
    }
  }

  /**
   * @private
   */
  function parseStyleString(style, oStyle) {
    var attr, value;
    style.replace(/;$/, '').split(';').forEach(function (chunk) {
      var pair = chunk.split(':');

      attr = normalizeAttr(pair[0].trim().toLowerCase());
      value = normalizeValue(attr, pair[1].trim());

      if (attr === 'font') {
        parseFontDeclaration(value, oStyle);
      } else {
        oStyle[attr] = value;
      }
    });
  }

  /**
   * @private
   */
  function parseStyleObject(style, oStyle) {
    var attr, value;
    for (var prop in style) {
      if (typeof style[prop] === 'undefined') continue;

      attr = normalizeAttr(prop.toLowerCase());
      value = normalizeValue(attr, style[prop]);

      if (attr === 'font') {
        parseFontDeclaration(value, oStyle);
      } else {
        oStyle[attr] = value;
      }
    }
  }

  /**
   * @private
   */
  function getGlobalStylesForElement(element) {
    var nodeName = element.nodeName,
      className = element.getAttribute('class'),
      id = element.getAttribute('id'),
      styles = {};

    for (var rule in fabric.cssRules) {
      var ruleMatchesElement = (className && new RegExp('^\\.' + className).test(rule)) ||
        (id && new RegExp('^#' + id).test(rule)) ||
        (new RegExp('^' + nodeName).test(rule));

      if (ruleMatchesElement) {
        for (var property in fabric.cssRules[rule]) {
          styles[property] = fabric.cssRules[rule][property];
        }
      }
    }

    return styles;
  }

  /**
   * Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback
   * @static
   * @function
   * @memberOf fabric
   * @param {SVGDocument} doc SVG document to parse
   * @param {Function} callback Callback to call when parsing is finished; It's being passed an array of elements (parsed from a document).
   * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
   */
  fabric.parseSVGDocument = (function () {

    var reAllowedSVGTagNames = /^(path|circle|polygon|polyline|ellipse|rect|line|image|text)$/;

    // http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute
    // \d doesn't quite cut it (as we need to match an actual float number)

    // matches, e.g.: +14.56e-12, etc.
    var reNum = '(?:[-+]?\\d+(?:\\.\\d+)?(?:e[-+]?\\d+)?)';

    var reViewBoxAttrValue = new RegExp(
      '^' +
      '\\s*(' + reNum + '+)\\s*,?' +
      '\\s*(' + reNum + '+)\\s*,?' +
      '\\s*(' + reNum + '+)\\s*,?' +
      '\\s*(' + reNum + '+)\\s*' +
      '$'
    );

    function hasAncestorWithNodeName(element, nodeName) {
      while (element && (element = element.parentNode)) {
        if (nodeName.test(element.nodeName)) {
          return true;
        }
      }
      return false;
    }

    return function (doc, callback, reviver) {
      if (!doc) return;

      var startTime = new Date(),
        descendants = fabric.util.toArray(doc.getElementsByTagName('*'));

      if (descendants.length === 0) {
        // we're likely in node, where "o3-xml" library fails to gEBTN("*")
        // https://github.com/ajaxorg/node-o3-xml/issues/21
        descendants = doc.selectNodes('//*[name(.)!=\'svg\']');
        var arr = [];
        for (var i = 0, len = descendants.length; i < len; i++) {
          arr[i] = descendants[i];
        }
        descendants = arr;
      }

      var elements = descendants.filter(function (el) {
        return reAllowedSVGTagNames.test(el.tagName) &&
          !hasAncestorWithNodeName(el, /^(?:pattern|defs)$/); // http://www.w3.org/TR/SVG/struct.html#DefsElement
      });

      if (!elements || (elements && !elements.length)) return;

      var viewBoxAttr = doc.getAttribute('viewBox'),
        widthAttr = doc.getAttribute('width'),
        heightAttr = doc.getAttribute('height'),
        width = null,
        height = null,
        minX,
        minY;

      if (viewBoxAttr && (viewBoxAttr = viewBoxAttr.match(reViewBoxAttrValue))) {
        minX = parseInt(viewBoxAttr[1], 10);
        minY = parseInt(viewBoxAttr[2], 10);
        width = parseInt(viewBoxAttr[3], 10);
        height = parseInt(viewBoxAttr[4], 10);
      }

      // values of width/height attributes overwrite those extracted from viewbox attribute
      width = widthAttr ? parseFloat(widthAttr) : width;
      height = heightAttr ? parseFloat(heightAttr) : height;

      var options = {
        width: width,
        height: height
      };

      fabric.gradientDefs = fabric.getGradientDefs(doc);
      fabric.cssRules = fabric.getCSSRules(doc);

      // Precedence of rules:   style > class > attribute

      fabric.parseElements(elements, function (instances) {
        fabric.documentParsingTime = new Date() - startTime;
        if (callback) {
          callback(instances, options);
        }
      }, clone(options), reviver);
    };
  })();

  /**
   * Used for caching SVG documents (loaded via `fabric.Canvas#loadSVGFromURL`)
   * @namespace
   */
  var svgCache = {

    /**
     * @param {String} name
     * @param {Function} callback
     */
    has: function (name, callback) {
      callback(false);
    },

    /**
     * @param {String} url
     * @param {Function} callback
     */
    get: function () {
      /* NOOP */
    },

    /**
     * @param {String} url
     * @param {Object} object
     */
    set: function () {
      /* NOOP */
    }
  };

  /**
   * @private
   */
  function _enlivenCachedObject(cachedObject) {

    var objects = cachedObject.objects,
      options = cachedObject.options;

    objects = objects.map(function (o) {
      return fabric[capitalize(o.type)].fromObject(o);
    });

    return ({objects: objects, options: options});
  }

  /**
   * @private
   */
  function _createSVGPattern(markup, canvas, property) {
    if (canvas[property] && canvas[property].toSVG) {
      markup.push(
        '<pattern x="0" y="0" id="', property, 'Pattern" ',
        'width="', canvas[property].source.width,
        '" height="', canvas[property].source.height,
        '" patternUnits="userSpaceOnUse">',
        '<image x="0" y="0" ',
        'width="', canvas[property].source.width,
        '" height="', canvas[property].source.height,
        '" xlink:href="', canvas[property].source.src,
        '"></image></pattern>'
      );
    }
  }

  extend(fabric, {

    /**
     * Initializes gradients on instances, according to gradients parsed from a document
     * @param {Array} instances
     */
    resolveGradients: function (instances) {
      for (var i = instances.length; i--;) {
        var instanceFillValue = instances[i].get('fill');

        if (!(/^url\(/).test(instanceFillValue)) continue;

        var gradientId = instanceFillValue.slice(5, instanceFillValue.length - 1);

        if (fabric.gradientDefs[gradientId]) {
          instances[i].set('fill',
            fabric.Gradient.fromElement(fabric.gradientDefs[gradientId], instances[i]));
        }
      }
    },

    /**
     * Parses an SVG document, returning all of the gradient declarations found in it
     * @static
     * @function
     * @memberOf fabric
     * @param {SVGDocument} doc SVG document to parse
     * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
     */
    getGradientDefs: function (doc) {
      var linearGradientEls = doc.getElementsByTagName('linearGradient'),
        radialGradientEls = doc.getElementsByTagName('radialGradient'),
        el, i,
        gradientDefs = {};

      i = linearGradientEls.length;
      for (; i--;) {
        el = linearGradientEls[i];
        gradientDefs[el.getAttribute('id')] = el;
      }

      i = radialGradientEls.length;
      for (; i--;) {
        el = radialGradientEls[i];
        gradientDefs[el.getAttribute('id')] = el;
      }

      return gradientDefs;
    },

    /**
     * Returns an object of attributes' name/value, given element and an array of attribute names;
     * Parses parent "g" nodes recursively upwards.
     * @static
     * @memberOf fabric
     * @param {DOMElement} element Element to parse
     * @param {Array} attributes Array of attributes to parse
     * @return {Object} object containing parsed attributes' names/values
     */
    parseAttributes: function (element, attributes) {

      if (!element) {
        return;
      }

      var value,
        parentAttributes = {};

      // if there's a parent container (`g` node), parse its attributes recursively upwards
      if (element.parentNode && /^g$/i.test(element.parentNode.nodeName)) {
        parentAttributes = fabric.parseAttributes(element.parentNode, attributes);
      }

      var ownAttributes = attributes.reduce(function (memo, attr) {
        value = element.getAttribute(attr);
        if (value) {
          attr = normalizeAttr(attr);
          value = normalizeValue(attr, value, parentAttributes);

          memo[attr] = value;
        }
        return memo;
      }, {});

      // add values parsed from style, which take precedence over attributes
      // (see: http://www.w3.org/TR/SVG/styling.html#UsingPresentationAttributes)
      ownAttributes = extend(ownAttributes,
        extend(getGlobalStylesForElement(element), fabric.parseStyleAttribute(element)));

      return _setStrokeFillOpacity(extend(parentAttributes, ownAttributes));
    },

    /**
     * Transforms an array of svg elements to corresponding fabric.* instances
     * @static
     * @memberOf fabric
     * @param {Array} elements Array of elements to parse
     * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
     * @param {Object} [options] Options object
     * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
     */
    parseElements: function (elements, callback, options, reviver) {
      fabric.ElementsParser.parse(elements, callback, options, reviver);
    },

    /**
     * Parses "style" attribute, retuning an object with values
     * @static
     * @memberOf fabric
     * @param {SVGElement} element Element to parse
     * @return {Object} Objects with values parsed from style attribute of an element
     */
    parseStyleAttribute: function (element) {
      var oStyle = {},
        style = element.getAttribute('style');

      if (!style) return oStyle;

      if (typeof style === 'string') {
        parseStyleString(style, oStyle);
      } else {
        parseStyleObject(style, oStyle);
      }

      return oStyle;
    },

    /**
     * Parses "points" attribute, returning an array of values
     * @static
     * @memberOf fabric
     * @param points {String} points attribute string
     * @return {Array} array of points
     */
    parsePointsAttribute: function (points) {

      // points attribute is required and must not be empty
      if (!points) return null;

      points = points.trim();
      var asPairs = points.indexOf(',') > -1;

      points = points.split(/\s+/);
      var parsedPoints = [], i, len;

      // points could look like "10,20 30,40" or "10 20 30 40"
      if (asPairs) {
        i = 0;
        len = points.length;
        for (; i < len; i++) {
          var pair = points[i].split(',');
          parsedPoints.push({x: parseFloat(pair[0]), y: parseFloat(pair[1])});
        }
      } else {
        i = 0;
        len = points.length;
        for (; i < len; i += 2) {
          parsedPoints.push({x: parseFloat(points[i]), y: parseFloat(points[i + 1])});
        }
      }

      // odd number of points is an error
      if (parsedPoints.length % 2 !== 0) {
        // return null;
      }

      return parsedPoints;
    },

    /**
     * Returns CSS rules for a given SVG document
     * @static
     * @function
     * @memberOf fabric
     * @param {SVGDocument} doc SVG document to parse
     * @return {Object} CSS rules of this document
     */
    getCSSRules: function (doc) {
      var styles = doc.getElementsByTagName('style'),
        allRules = {},
        rules;

      // very crude parsing of style contents
      for (var i = 0, len = styles.length; i < len; i++) {
        var styleContents = styles[0].textContent;

        // remove comments
        styleContents = styleContents.replace(/\/\*[\s\S]*?\*\//g, '');

        rules = styleContents.match(/[^{]*\{[\s\S]*?\}/g);
        rules = rules.map(function (rule) {
          return rule.trim();
        });

        rules.forEach(function (rule) {
          var match = rule.match(/([\s\S]*?)\s*\{([^}]*)\}/);
          rule = match[1];
          var declaration = match[2].trim(),
            propertyValuePairs = declaration.replace(/;$/, '').split(/\s*;\s*/);

          if (!allRules[rule]) {
            allRules[rule] = {};
          }

          for (var i = 0, len = propertyValuePairs.length; i < len; i++) {
            var pair = propertyValuePairs[i].split(/\s*:\s*/),
              property = pair[0],
              value = pair[1];

            allRules[rule][property] = value;
          }
        });
      }

      return allRules;
    },

    /**
     * Takes url corresponding to an SVG document, and parses it into a set of fabric objects. Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
     * @memberof fabric
     * @param {String} url
     * @param {Function} callback
     * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
     */
    loadSVGFromURL: function (url, callback, reviver) {

      url = url.replace(/^\n\s*/, '').trim();

      svgCache.has(url, function (hasUrl) {
        if (hasUrl) {
          svgCache.get(url, function (value) {
            var enlivedRecord = _enlivenCachedObject(value);
            callback(enlivedRecord.objects, enlivedRecord.options);
          });
        } else {
          new fabric.util.request(url, {
            method: 'get',
            onComplete: onComplete
          });
        }
      });

      function onComplete(r) {

        var xml = r.responseXML;
        if (xml && !xml.documentElement && fabric.window.ActiveXObject && r.responseText) {
          xml = new ActiveXObject('Microsoft.XMLDOM');
          xml.async = 'false';
          //IE chokes on DOCTYPE
          xml.loadXML(r.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, ''));
        }
        if (!xml || !xml.documentElement) return;

        fabric.parseSVGDocument(xml.documentElement, function (results, options) {
          svgCache.set(url, {
            objects: fabric.util.array.invoke(results, 'toObject'),
            options: options
          });
          callback(results, options);
        }, reviver);
      }
    },

    /**
     * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
     * @memberof fabric
     * @param {String} string
     * @param {Function} callback
     * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
     */
    loadSVGFromString: function (string, callback, reviver) {
      string = string.trim();
      var doc;
      if (typeof DOMParser !== 'undefined') {
        var parser = new DOMParser();
        if (parser && parser.parseFromString) {
          doc = parser.parseFromString(string, 'text/xml');
        }
      } else if (fabric.window.ActiveXObject) {
        doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.async = 'false';
        //IE chokes on DOCTYPE
        doc.loadXML(string.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, ''));
      }

      fabric.parseSVGDocument(doc.documentElement, function (results, options) {
        callback(results, options);
      }, reviver);
    },

    /**
     * Creates markup containing SVG font faces
     * @param {Array} objects Array of fabric objects
     * @return {String}
     */
    createSVGFontFacesMarkup: function (objects) {
      var markup = '';

      for (var i = 0, len = objects.length; i < len; i++) {
        if (objects[i].type !== 'text' || !objects[i].path) continue;

        markup += [
          '@font-face {',
          'font-family: ', objects[i].fontFamily, '; ',
          'src: url(\'', objects[i].path, '\')',
          '}'
        ].join('');
      }

      if (markup) {
        markup = [
          '<style type="text/css">',
          '<![CDATA[',
          markup,
          ']]>',
          '</style>'
        ].join('');
      }

      return markup;
    },

    /**
     * Creates markup containing SVG referenced elements like patterns, gradients etc.
     * @param {fabric.Canvas} canvas instance of fabric.Canvas
     * @return {String}
     */
    createSVGRefElementsMarkup: function (canvas) {
      var markup = [];

      _createSVGPattern(markup, canvas, 'backgroundColor');
      _createSVGPattern(markup, canvas, 'overlayColor');

      return markup.join('');
    }
  });

})(typeof exports !== 'undefined' ? exports : this);

fabric.ElementsParser = {

  parse: function (elements, callback, options, reviver) {

    this.elements = elements;
    this.callback = callback;
    this.options = options;
    this.reviver = reviver;

    this.instances = new Array(elements.length);
    this.numElements = elements.length;

    this.createObjects();
  },

  createObjects: function () {
    for (var i = 0, len = this.elements.length; i < len; i++) {
      (function (_this, i) {
        setTimeout(function () {
          _this.createObject(_this.elements[i], i);
        }, 0);
      })(this, i);
    }
  },

  createObject: function (el, index) {
    var klass = fabric[fabric.util.string.capitalize(el.tagName)];
    if (klass && klass.fromElement) {
      try {
        this._createObject(klass, el, index);
      } catch (err) {
        fabric.log(err);
      }
    } else {
      this.checkIfDone();
    }
  },

  _createObject: function (klass, el, index) {
    if (klass.async) {
      klass.fromElement(el, this.createCallback(index, el), this.options);
    } else {
      var obj = klass.fromElement(el, this.options);
      this.reviver && this.reviver(el, obj);
      this.instances.splice(index, 0, obj);
      this.checkIfDone();
    }
  },

  createCallback: function (index, el) {
    var _this = this;
    return function (obj) {
      _this.reviver && _this.reviver(el, obj);
      _this.instances.splice(index, 0, obj);
      _this.checkIfDone();
    };
  },

  checkIfDone: function () {
    if (--this.numElements === 0) {
      this.instances = this.instances.filter(function (el) {
        return el != null;
      });
      fabric.resolveGradients(this.instances);
      this.callback(this.instances);
    }
  }
};

(function (global) {

  'use strict';

  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */

  var fabric = global.fabric || (global.fabric = {});

  if (fabric.Point) {
    // fabric.warn('fabric.Point is already defined');
    return;
  }

  fabric.Point = Point;

  /**
   * Point class
   * @class fabric.Point
   * @memberOf fabric
   * @constructor
   * @param {Number} x
   * @param {Number} y
   * @return {fabric.Point} thisArg
   */
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype = /** @lends fabric.Point.prototype */ {

    constructor: Point,

    /**
     * Adds another point to this one and returns another one
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point instance with added values
     */
    add: function (that) {
      return new Point(this.x + that.x, this.y + that.y);
    },

    /**
     * Adds another point to this one
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     */
    addEquals: function (that) {
      this.x += that.x;
      this.y += that.y;
      return this;
    },

    /**
     * Adds value to this point and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point} new Point with added value
     */
    scalarAdd: function (scalar) {
      return new Point(this.x + scalar, this.y + scalar);
    },

    /**
     * Adds value to this point
     * @param {Number} scalar
     * @param {fabric.Point} thisArg
     */
    scalarAddEquals: function (scalar) {
      this.x += scalar;
      this.y += scalar;
      return this;
    },

    /**
     * Subtracts another point from this point and returns a new one
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point object with subtracted values
     */
    subtract: function (that) {
      return new Point(this.x - that.x, this.y - that.y);
    },

    /**
     * Subtracts another point from this point
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     */
    subtractEquals: function (that) {
      this.x -= that.x;
      this.y -= that.y;
      return this;
    },

    /**
     * Subtracts value from this point and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    scalarSubtract: function (scalar) {
      return new Point(this.x - scalar, this.y - scalar);
    },

    /**
     * Subtracts value from this point
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     */
    scalarSubtractEquals: function (scalar) {
      this.x -= scalar;
      this.y -= scalar;
      return this;
    },

    /**
     * Miltiplies this point by a value and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    multiply: function (scalar) {
      return new Point(this.x * scalar, this.y * scalar);
    },

    /**
     * Miltiplies this point by a value
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     */
    multiplyEquals: function (scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },

    /**
     * Divides this point by a value and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    divide: function (scalar) {
      return new Point(this.x / scalar, this.y / scalar);
    },

    /**
     * Divides this point by a value
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     */
    divideEquals: function (scalar) {
      this.x /= scalar;
      this.y /= scalar;
      return this;
    },

    /**
     * Returns true if this point is equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    eq: function (that) {
      return (this.x === that.x && this.y === that.y);
    },

    /**
     * Returns true if this point is less than another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    lt: function (that) {
      return (this.x < that.x && this.y < that.y);
    },

    /**
     * Returns true if this point is less than or equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    lte: function (that) {
      return (this.x <= that.x && this.y <= that.y);
    },

    /**

     * Returns true if this point is greater another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    gt: function (that) {
      return (this.x > that.x && this.y > that.y);
    },

    /**
     * Returns true if this point is greater than or equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    gte: function (that) {
      return (this.x >= that.x && this.y >= that.y);
    },

    /**
     * Returns new point which is the result of linear interpolation with this one and another one
     * @param {fabric.Point} that
     * @param {Number} t
     * @return {fabric.Point}
     */
    lerp: function (that, t) {
      return new Point(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
    },

    /**
     * Returns distance from this point and another one
     * @param {fabric.Point} that
     * @return {Number}
     */
    distanceFrom: function (that) {
      var dx = this.x - that.x,
        dy = this.y - that.y;
      return Math.sqrt(dx * dx + dy * dy);
    },

    /**
     * Returns the point between this point and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    midPointFrom: function (that) {
      return new Point(this.x + (that.x - this.x) / 2, this.y + (that.y - this.y) / 2);
    },

    /**
     * Returns a new point which is the min of this and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    min: function (that) {
      return new Point(Math.min(this.x, that.x), Math.min(this.y, that.y));
    },

    /**
     * Returns a new point which is the max of this and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    max: function (that) {
      return new Point(Math.max(this.x, that.x), Math.max(this.y, that.y));
    },

    /**
     * Returns string representation of this point
     * @return {String}
     */
    toString: function () {
      return this.x + ',' + this.y;
    },

    /**
     * Sets x/y of this point
     * @param {Number} x
     * @return {Number} y
     */
    setXY: function (x, y) {
      this.x = x;
      this.y = y;
    },

    /**
     * Sets x/y of this point from another point
     * @param {fabric.Point} that
     */
    setFromPoint: function (that) {
      this.x = that.x;
      this.y = that.y;
    },

    /**
     * Swaps x/y of this point and another point
     * @param {fabric.Point} that
     */
    swap: function (that) {
      var x = this.x,
        y = this.y;
      this.x = that.x;
      this.y = that.y;
      that.x = x;
      that.y = y;
    }
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */

  var fabric = global.fabric || (global.fabric = {});

  if (fabric.Intersection) {
    // fabric.warn('fabric.Intersection is already defined');
    return;
  }

  /**
   * Intersection class
   * @class fabric.Intersection
   * @memberOf fabric
   * @constructor
   */
  function Intersection(status) {
    this.status = status;
    this.points = [];
  }

  fabric.Intersection = Intersection;

  fabric.Intersection.prototype = /** @lends fabric.Intersection.prototype */ {

    /**
     * Appends a point to intersection
     * @param {fabric.Point} point
     */
    appendPoint: function (point) {
      this.points.push(point);
    },

    /**
     * Appends points to intersection
     * @param {Array} points
     */
    appendPoints: function (points) {
      this.points = this.points.concat(points);
    }
  };

  /**
   * Checks if one line intersects another
   * @static
   * @param {fabric.Point} a1
   * @param {fabric.Point} a2
   * @param {fabric.Point} b1
   * @param {fabric.Point} b2
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectLineLine = function (a1, a2, b1, b2) {
    var result,
      ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
      ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
      u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    if (u_b !== 0) {
      var ua = ua_t / u_b,
        ub = ub_t / u_b;
      if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
        result = new Intersection('Intersection');
        result.points.push(new fabric.Point(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
      } else {
        result = new Intersection();
      }
    } else {
      if (ua_t === 0 || ub_t === 0) {
        result = new Intersection('Coincident');
      } else {
        result = new Intersection('Parallel');
      }
    }
    return result;
  };

  /**
   * Checks if line intersects polygon
   * @static
   * @param {fabric.Point} a1
   * @param {fabric.Point} a2
   * @param {Array} points
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectLinePolygon = function (a1, a2, points) {
    var result = new Intersection(),
      length = points.length;

    for (var i = 0; i < length; i++) {
      var b1 = points[i],
        b2 = points[(i + 1) % length],
        inter = Intersection.intersectLineLine(a1, a2, b1, b2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = 'Intersection';
    }
    return result;
  };

  /**
   * Checks if polygon intersects another polygon
   * @static
   * @param {Array} points1
   * @param {Array} points2
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectPolygonPolygon = function (points1, points2) {
    var result = new Intersection(),
      length = points1.length;

    for (var i = 0; i < length; i++) {
      var a1 = points1[i],
        a2 = points1[(i + 1) % length],
        inter = Intersection.intersectLinePolygon(a1, a2, points2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = 'Intersection';
    }
    return result;
  };

  /**
   * Checks if polygon intersects rectangle
   * @static
   * @param {Array} points
   * @param {Number} r1
   * @param {Number} r2
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectPolygonRectangle = function (points, r1, r2) {
    var min = r1.min(r2),
      max = r1.max(r2),
      topRight = new fabric.Point(max.x, min.y),
      bottomLeft = new fabric.Point(min.x, max.y),
      inter1 = Intersection.intersectLinePolygon(min, topRight, points),
      inter2 = Intersection.intersectLinePolygon(topRight, max, points),
      inter3 = Intersection.intersectLinePolygon(max, bottomLeft, points),
      inter4 = Intersection.intersectLinePolygon(bottomLeft, min, points),
      result = new Intersection();

    result.appendPoints(inter1.points);
    result.appendPoints(inter2.points);
    result.appendPoints(inter3.points);
    result.appendPoints(inter4.points);

    if (result.points.length > 0) {
      result.status = 'Intersection';
    }
    return result;
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {});

  if (fabric.Color) {
    // fabric.warn('fabric.Color is already defined.');
    return;
  }

  /**
   * Color class
   * The purpose of {@link fabric.Color} is to abstract and encapsulate common color operations;
   * {@link fabric.Color} is a constructor and creates instances of {@link fabric.Color} objects.
   *
   * @class fabric.Color
   * @param {String} color optional in hex or rgb(a) format
   * @return {fabric.Color} thisArg
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#colors}
   */
  function Color(color) {
    if (!color) {
      this.setSource([0, 0, 0, 1]);
    } else {
      this._tryParsingColor(color);
    }
  }

  fabric.Color = Color;

  fabric.Color.prototype = /** @lends fabric.Color.prototype */ {

    /**
     * @private
     * @param {String|Array} color Color value to parse
     */
    _tryParsingColor: function (color) {
      var source;

      if (color in Color.colorNameMap) {
        color = Color.colorNameMap[color];
      }

      source = Color.sourceFromHex(color);

      if (!source) {
        source = Color.sourceFromRgb(color);
      }
      if (!source) {
        source = Color.sourceFromHsl(color);
      }
      if (source) {
        this.setSource(source);
      }
    },

    /**
     * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
     * @private
     * @param {Number} r Red color value
     * @param {Number} g Green color value
     * @param {Number} b Blue color value
     * @return {Array} Hsl color
     */
    _rgbToHsl: function (r, g, b) {
      r /= 255, g /= 255, b /= 255;

      var h, s, l,
        max = fabric.util.array.max([r, g, b]),
        min = fabric.util.array.min([r, g, b]);

      l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return [
        Math.round(h * 360),
        Math.round(s * 100),
        Math.round(l * 100)
      ];
    },

    /**
     * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @return {Array}
     */
    getSource: function () {
      return this._source;
    },

    /**
     * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @param {Array} source
     */
    setSource: function (source) {
      this._source = source;
    },

    /**
     * Returns color represenation in RGB format
     * @return {String} ex: rgb(0-255,0-255,0-255)
     */
    toRgb: function () {
      var source = this.getSource();
      return 'rgb(' + source[0] + ',' + source[1] + ',' + source[2] + ')';
    },

    /**
     * Returns color represenation in RGBA format
     * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
     */
    toRgba: function () {
      var source = this.getSource();
      return 'rgba(' + source[0] + ',' + source[1] + ',' + source[2] + ',' + source[3] + ')';
    },

    /**
     * Returns color represenation in HSL format
     * @return {String} ex: hsl(0-360,0%-100%,0%-100%)
     */
    toHsl: function () {
      var source = this.getSource(),
        hsl = this._rgbToHsl(source[0], source[1], source[2]);

      return 'hsl(' + hsl[0] + ',' + hsl[1] + '%,' + hsl[2] + '%)';
    },

    /**
     * Returns color represenation in HSLA format
     * @return {String} ex: hsla(0-360,0%-100%,0%-100%,0-1)
     */
    toHsla: function () {
      var source = this.getSource(),
        hsl = this._rgbToHsl(source[0], source[1], source[2]);

      return 'hsla(' + hsl[0] + ',' + hsl[1] + '%,' + hsl[2] + '%,' + source[3] + ')';
    },

    /**
     * Returns color represenation in HEX format
     * @return {String} ex: FF5555
     */
    toHex: function () {
      var source = this.getSource();

      var r = source[0].toString(16);
      r = (r.length === 1) ? ('0' + r) : r;

      var g = source[1].toString(16);
      g = (g.length === 1) ? ('0' + g) : g;

      var b = source[2].toString(16);
      b = (b.length === 1) ? ('0' + b) : b;

      return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
    },

    /**
     * Gets value of alpha channel for this color
     * @return {Number} 0-1
     */
    getAlpha: function () {
      return this.getSource()[3];
    },

    /**
     * Sets value of alpha channel for this color
     * @param {Number} alpha Alpha value 0-1
     * @return {fabric.Color} thisArg
     */
    setAlpha: function (alpha) {
      var source = this.getSource();
      source[3] = alpha;
      this.setSource(source);
      return this;
    },

    /**
     * Transforms color to its grayscale representation
     * @return {fabric.Color} thisArg
     */
    toGrayscale: function () {
      var source = this.getSource(),
        average = parseInt((source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0), 10),
        currentAlpha = source[3];
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Transforms color to its black and white representation
     * @param {Number} threshold
     * @return {fabric.Color} thisArg
     */
    toBlackWhite: function (threshold) {
      var source = this.getSource(),
        average = (source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0),
        currentAlpha = source[3];

      threshold = threshold || 127;

      average = (Number(average) < Number(threshold)) ? 0 : 255;
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Overlays color with another color
     * @param {String|fabric.Color} otherColor
     * @return {fabric.Color} thisArg
     */
    overlayWith: function (otherColor) {
      if (!(otherColor instanceof Color)) {
        otherColor = new Color(otherColor);
      }

      var result = [],
        alpha = this.getAlpha(),
        otherAlpha = 0.5,
        source = this.getSource(),
        otherSource = otherColor.getSource();

      for (var i = 0; i < 3; i++) {
        result.push(Math.round((source[i] * (1 - otherAlpha)) + (otherSource[i] * otherAlpha)));
      }

      result[3] = alpha;
      this.setSource(result);
      return this;
    }
  };

  /**
   * Regex matching color in RGB or RGBA formats (ex: rgb(0, 0, 0), rgba(255, 100, 10, 0.5), rgba( 255 , 100 , 10 , 0.5 ), rgb(1,1,1), rgba(100%, 60%, 10%, 0.5))
   * @static
   * @field
   * @memberOf fabric.Color
   */
  fabric.Color.reRGBa = /^rgba?\(\s*(\d{1,3}\%?)\s*,\s*(\d{1,3}\%?)\s*,\s*(\d{1,3}\%?)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/;

  /**
   * Regex matching color in HSL or HSLA formats (ex: hsl(200, 80%, 10%), hsla(300, 50%, 80%, 0.5), hsla( 300 , 50% , 80% , 0.5 ))
   * @static
   * @field
   * @memberOf fabric.Color
   */
  fabric.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/;

  /**
   * Regex matching color in HEX format (ex: #FF5555, 010155, aff)
   * @static
   * @field
   * @memberOf fabric.Color
   */
  fabric.Color.reHex = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i;

  /**
   * Map of the 17 basic color names with HEX code
   * @static
   * @field
   * @memberOf fabric.Color
   * @see: http://www.w3.org/TR/CSS2/syndata.html#color-units
   */
  fabric.Color.colorNameMap = {
    'aqua': '#00FFFF',
    'black': '#000000',
    'blue': '#0000FF',
    'fuchsia': '#FF00FF',
    'gray': '#808080',
    'green': '#008000',
    'lime': '#00FF00',
    'maroon': '#800000',
    'navy': '#000080',
    'olive': '#808000',
    'orange': '#FFA500',
    'purple': '#800080',
    'red': '#FF0000',
    'silver': '#C0C0C0',
    'teal': '#008080',
    'white': '#FFFFFF',
    'yellow': '#FFFF00'
  };

  /**
   * @private
   * @param {Number} p
   * @param {Number} q
   * @param {Number} t
   * @return {Number}
   */
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  /**
   * Returns new color object, when given a color in RGB format
   * @memberOf fabric.Color
   * @param {String} color Color value ex: rgb(0-255,0-255,0-255)
   * @return {fabric.Color}
   */
  fabric.Color.fromRgb = function (color) {
    return Color.fromSource(Color.sourceFromRgb(color));
  };

  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format
   * @memberOf fabric.Color
   * @param {String} color Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)
   * @return {Array} source
   */
  fabric.Color.sourceFromRgb = function (color) {
    var match = color.match(Color.reRGBa);
    if (match) {
      var r = parseInt(match[1], 10) / (/%$/.test(match[1]) ? 100 : 1) * (/%$/.test(match[1]) ? 255 : 1),
        g = parseInt(match[2], 10) / (/%$/.test(match[2]) ? 100 : 1) * (/%$/.test(match[2]) ? 255 : 1),
        b = parseInt(match[3], 10) / (/%$/.test(match[3]) ? 100 : 1) * (/%$/.test(match[3]) ? 255 : 1);

      return [
        parseInt(r, 10),
        parseInt(g, 10),
        parseInt(b, 10),
        match[4] ? parseFloat(match[4]) : 1
      ];
    }
  };

  /**
   * Returns new color object, when given a color in RGBA format
   * @static
   * @function
   * @memberOf fabric.Color
   * @param {String} color
   * @return {fabric.Color}
   */
  fabric.Color.fromRgba = Color.fromRgb;

  /**
   * Returns new color object, when given a color in HSL format
   * @param {String} color Color value ex: hsl(0-260,0%-100%,0%-100%)
   * @memberOf fabric.Color
   * @return {fabric.Color}
   */
  fabric.Color.fromHsl = function (color) {
    return Color.fromSource(Color.sourceFromHsl(color));
  };

  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
   * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
   * @memberOf fabric.Color
   * @param {String} color Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)
   * @return {Array} source
   * @see http://http://www.w3.org/TR/css3-color/#hsl-color
   */
  fabric.Color.sourceFromHsl = function (color) {
    var match = color.match(Color.reHSLa);
    if (!match) return;

    var h = (((parseFloat(match[1]) % 360) + 360) % 360) / 360,
      s = parseFloat(match[2]) / (/%$/.test(match[2]) ? 100 : 1),
      l = parseFloat(match[3]) / (/%$/.test(match[3]) ? 100 : 1),
      r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      var q = l <= 0.5 ? l * (s + 1) : l + s - l * s;
      var p = l * 2 - q;

      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255),
      match[4] ? parseFloat(match[4]) : 1
    ];
  };

  /**
   * Returns new color object, when given a color in HSLA format
   * @static
   * @function
   * @memberOf fabric.Color
   * @param {String} color
   * @return {fabric.Color}
   */
  fabric.Color.fromHsla = Color.fromHsl;

  /**
   * Returns new color object, when given a color in HEX format
   * @static
   * @memberOf fabric.Color
   * @param {String} color Color value ex: FF5555
   * @return {fabric.Color}
   */
  fabric.Color.fromHex = function (color) {
    return Color.fromSource(Color.sourceFromHex(color));
  };

  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HEX format
   * @static
   * @memberOf fabric.Color
   * @param {String} color ex: FF5555
   * @return {Array} source
   */
  fabric.Color.sourceFromHex = function (color) {
    if (color.match(Color.reHex)) {
      var value = color.slice(color.indexOf('#') + 1),
        isShortNotation = (value.length === 3),
        r = isShortNotation ? (value.charAt(0) + value.charAt(0)) : value.substring(0, 2),
        g = isShortNotation ? (value.charAt(1) + value.charAt(1)) : value.substring(2, 4),
        b = isShortNotation ? (value.charAt(2) + value.charAt(2)) : value.substring(4, 6);

      return [
        parseInt(r, 16),
        parseInt(g, 16),
        parseInt(b, 16),
        1
      ];
    }
  };

  /**
   * Returns new color object, when given color in array representation (ex: [200, 100, 100, 0.5])
   * @static
   * @memberOf fabric.Color
   * @param {Array} source
   * @return {fabric.Color}
   */
  fabric.Color.fromSource = function (source) {
    var oColor = new Color();
    oColor.setSource(source);
    return oColor;
  };

})(typeof exports !== 'undefined' ? exports : this);

(function () {

  /* _FROM_SVG_START_ */
  function getColorStop(el) {
    var style = el.getAttribute('style'),
      offset = el.getAttribute('offset'),
      color, opacity;

    // convert percents to absolute values
    offset = parseFloat(offset) / (/%$/.test(offset) ? 100 : 1);

    if (style) {
      var keyValuePairs = style.split(/\s*;\s*/);

      if (keyValuePairs[keyValuePairs.length - 1] === '') {
        keyValuePairs.pop();
      }

      for (var i = keyValuePairs.length; i--;) {

        var split = keyValuePairs[i].split(/\s*:\s*/),
          key = split[0].trim(),
          value = split[1].trim();

        if (key === 'stop-color') {
          color = value;
        } else if (key === 'stop-opacity') {
          opacity = value;
        }
      }
    }

    if (!color) {
      color = el.getAttribute('stop-color') || 'rgb(0,0,0)';
    }
    if (!opacity) {
      opacity = el.getAttribute('stop-opacity');
    }

    // convert rgba color to rgb color - alpha value has no affect in svg
    color = new fabric.Color(color).toRgb();

    return {
      offset: offset,
      color: color,
      opacity: isNaN(parseFloat(opacity)) ? 1 : parseFloat(opacity)
    };
  }

  function getLinearCoords(el) {
    return {
      x1: el.getAttribute('x1') || 0,
      y1: el.getAttribute('y1') || 0,
      x2: el.getAttribute('x2') || '100%',
      y2: el.getAttribute('y2') || 0
    };
  }

  function getRadialCoords(el) {
    return {
      x1: el.getAttribute('fx') || el.getAttribute('cx') || '50%',
      y1: el.getAttribute('fy') || el.getAttribute('cy') || '50%',
      r1: 0,
      x2: el.getAttribute('cx') || '50%',
      y2: el.getAttribute('cy') || '50%',
      r2: el.getAttribute('r') || '50%'
    };
  }

  /* _FROM_SVG_END_ */

  /**
   * Gradient class
   * @class fabric.Gradient
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#gradients}
   * @see {@link fabric.Gradient#initialize} for constructor definition
   */
  fabric.Gradient = fabric.util.createClass(/** @lends fabric.Gradient.prototype */ {

    /**
     * Constructor
     * @param {Object} [options] Options object with type, coords, gradientUnits and colorStops
     * @return {fabric.Gradient} thisArg
     */
    initialize: function (options) {
      options || (options = {});

      var coords = {};

      this.id = fabric.Object.__uid++;
      this.type = options.type || 'linear';

      coords = {
        x1: options.coords.x1 || 0,
        y1: options.coords.y1 || 0,
        x2: options.coords.x2 || 0,
        y2: options.coords.y2 || 0
      };

      if (this.type === 'radial') {
        coords.r1 = options.coords.r1 || 0;
        coords.r2 = options.coords.r2 || 0;
      }

      this.coords = coords;
      this.gradientUnits = options.gradientUnits || 'objectBoundingBox';
      this.colorStops = options.colorStops.slice();
    },

    /**
     * Adds another colorStop
     * @param {Object} colorStop Object with offset and color
     * @return {fabric.Gradient} thisArg
     */
    addColorStop: function (colorStop) {
      for (var position in colorStop) {
        var color = new fabric.Color(colorStop[position]);
        this.colorStops.push({offset: position, color: color.toRgb(), opacity: color.getAlpha()});
      }
      return this;
    },

    /**
     * Returns object representation of a gradient
     * @return {Object}
     */
    toObject: function () {
      return {
        type: this.type,
        coords: this.coords,
        gradientUnits: this.gradientUnits,
        colorStops: this.colorStops
      };
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an gradient
     * @param {Object} object Object to create a gradient for
     * @param {Boolean} normalize Whether coords should be normalized
     * @return {String} SVG representation of an gradient (linear/radial)
     */
    toSVG: function (object, normalize) {
      var coords = fabric.util.object.clone(this.coords),
        markup;

      // colorStops must be sorted ascending
      this.colorStops.sort(function (a, b) {
        return a.offset - b.offset;
      });

      if (normalize && this.gradientUnits === 'userSpaceOnUse') {
        coords.x1 += object.width / 2;
        coords.y1 += object.height / 2;
        coords.x2 += object.width / 2;
        coords.y2 += object.height / 2;
      } else if (this.gradientUnits === 'objectBoundingBox') {
        _convertValuesToPercentUnits(object, coords);
      }

      if (this.type === 'linear') {
        markup = [
          '<linearGradient ',
          'id="SVGID_', this.id,
          '" gradientUnits="', this.gradientUnits,
          '" x1="', coords.x1,
          '" y1="', coords.y1,
          '" x2="', coords.x2,
          '" y2="', coords.y2,
          '">'
        ];
      } else if (this.type === 'radial') {
        markup = [
          '<radialGradient ',
          'id="SVGID_', this.id,
          '" gradientUnits="', this.gradientUnits,
          '" cx="', coords.x2,
          '" cy="', coords.y2,
          '" r="', coords.r2,
          '" fx="', coords.x1,
          '" fy="', coords.y1,
          '">'
        ];
      }

      for (var i = 0; i < this.colorStops.length; i++) {
        markup.push(
          '<stop ',
          'offset="', (this.colorStops[i].offset * 100) + '%',
          '" style="stop-color:', this.colorStops[i].color,
          (this.colorStops[i].opacity ? ';stop-opacity: ' + this.colorStops[i].opacity : ';'),
          '"/>'
        );
      }

      markup.push((this.type === 'linear' ? '</linearGradient>' : '</radialGradient>'));

      return markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns an instance of CanvasGradient
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @return {CanvasGradient}
     */
    toLive: function (ctx) {
      var gradient;

      if (!this.type) return;

      if (this.type === 'linear') {
        gradient = ctx.createLinearGradient(
          this.coords.x1, this.coords.y1, this.coords.x2, this.coords.y2);
      } else if (this.type === 'radial') {
        gradient = ctx.createRadialGradient(
          this.coords.x1, this.coords.y1, this.coords.r1, this.coords.x2, this.coords.y2, this.coords.r2);
      }

      for (var i = 0, len = this.colorStops.length; i < len; i++) {
        var color = this.colorStops[i].color,
          opacity = this.colorStops[i].opacity,
          offset = this.colorStops[i].offset;

        if (typeof opacity !== 'undefined') {
          color = new fabric.Color(color).setAlpha(opacity).toRgba();
        }
        gradient.addColorStop(parseFloat(offset), color);
      }

      return gradient;
    }
  });

  fabric.util.object.extend(fabric.Gradient, {

    /* _FROM_SVG_START_ */
    /**
     * Returns {@link fabric.Gradient} instance from an SVG element
     * @static
     * @memberof fabric.Gradient
     * @param {SVGGradientElement} el SVG gradient element
     * @param {fabric.Object} instance
     * @return {fabric.Gradient} Gradient instance
     * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
     * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
     */
    fromElement: function (el, instance) {

      /**
       *  @example:
       *
       *  <linearGradient id="linearGrad1">
       *    <stop offset="0%" stop-color="white"/>
       *    <stop offset="100%" stop-color="black"/>
       *  </linearGradient>
       *
       *  OR
       *
       *  <linearGradient id="linearGrad2">
       *    <stop offset="0" style="stop-color:rgb(255,255,255)"/>
       *    <stop offset="1" style="stop-color:rgb(0,0,0)"/>
       *  </linearGradient>
       *
       *  OR
       *
       *  <radialGradient id="radialGrad1">
       *    <stop offset="0%" stop-color="white" stop-opacity="1" />
       *    <stop offset="50%" stop-color="black" stop-opacity="0.5" />
       *    <stop offset="100%" stop-color="white" stop-opacity="1" />
       *  </radialGradient>
       *
       *  OR
       *
       *  <radialGradient id="radialGrad2">
       *    <stop offset="0" stop-color="rgb(255,255,255)" />
       *    <stop offset="0.5" stop-color="rgb(0,0,0)" />
       *    <stop offset="1" stop-color="rgb(255,255,255)" />
       *  </radialGradient>
       *
       */

      var colorStopEls = el.getElementsByTagName('stop'),
        type = (el.nodeName === 'linearGradient' ? 'linear' : 'radial'),
        gradientUnits = el.getAttribute('gradientUnits') || 'objectBoundingBox',
        colorStops = [],
        coords = {};

      if (type === 'linear') {
        coords = getLinearCoords(el);
      } else if (type === 'radial') {
        coords = getRadialCoords(el);
      }

      for (var i = colorStopEls.length; i--;) {
        colorStops.push(getColorStop(colorStopEls[i]));
      }

      _convertPercentUnitsToValues(instance, coords);

      return new fabric.Gradient({
        type: type,
        coords: coords,
        gradientUnits: gradientUnits,
        colorStops: colorStops
      });
    },
    /* _FROM_SVG_END_ */

    /**
     * Returns {@link fabric.Gradient} instance from its object representation
     * @static
     * @memberof fabric.Gradient
     * @param {Object} obj
     * @param {Object} [options] Options object
     */
    forObject: function (obj, options) {
      options || (options = {});
      _convertPercentUnitsToValues(obj, options);
      return new fabric.Gradient(options);
    }
  });

  /**
   * @private
   */
  function _convertPercentUnitsToValues(object, options) {
    for (var prop in options) {
      if (typeof options[prop] === 'string' && /^\d+%$/.test(options[prop])) {
        var percents = parseFloat(options[prop], 10);
        if (prop === 'x1' || prop === 'x2' || prop === 'r2') {
          options[prop] = fabric.util.toFixed(object.width * percents / 100, 2);
        } else if (prop === 'y1' || prop === 'y2') {
          options[prop] = fabric.util.toFixed(object.height * percents / 100, 2);
        }
      }
      normalize(options, prop, object);
    }
  }

  // normalize rendering point (should be from top/left corner rather than center of the shape)
  function normalize(options, prop, object) {
    if (prop === 'x1' || prop === 'x2') {
      options[prop] -= fabric.util.toFixed(object.width / 2, 2);
    } else if (prop === 'y1' || prop === 'y2') {
      options[prop] -= fabric.util.toFixed(object.height / 2, 2);
    }
  }

  /* _TO_SVG_START_ */
  /**
   * @private
   */
  function _convertValuesToPercentUnits(object, options) {
    for (var prop in options) {

      normalize(options, prop, object);

      // convert to percent units
      if (prop === 'x1' || prop === 'x2' || prop === 'r2') {
        options[prop] = fabric.util.toFixed(options[prop] / object.width * 100, 2) + '%';
      } else if (prop === 'y1' || prop === 'y2') {
        options[prop] = fabric.util.toFixed(options[prop] / object.height * 100, 2) + '%';
      }
    }
  }

  /* _TO_SVG_END_ */

})();

/**
 * Pattern class
 * @class fabric.Pattern
 * @see {@link http://fabricjs.com/patterns/|Pattern demo}
 * @see {@link http://fabricjs.com/dynamic-patterns/|DynamicPattern demo}
 * @see {@link fabric.Pattern#initialize} for constructor definition
 */
fabric.Pattern = fabric.util.createClass(/** @lends fabric.Pattern.prototype */ {

  /**
   * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
   * @type String
   * @default
   */
  repeat: 'repeat',

  /**
   * Pattern horizontal offset from object's left/top corner
   * @type Number
   * @default
   */
  offsetX: 0,

  /**
   * Pattern vertical offset from object's left/top corner
   * @type Number
   * @default
   */
  offsetY: 0,

  /**
   * Constructor
   * @param {Object} [options] Options object
   * @return {fabric.Pattern} thisArg
   */
  initialize: function (options) {
    options || (options = {});

    this.id = fabric.Object.__uid++;

    if (options.source) {
      if (typeof options.source === 'string') {
        // function string
        if (typeof fabric.util.getFunctionBody(options.source) !== 'undefined') {
          this.source = new Function(fabric.util.getFunctionBody(options.source));
        } else {
          // img src string
          var _this = this;
          this.source = fabric.util.createImage();
          fabric.util.loadImage(options.source, function (img) {
            _this.source = img;
          });
        }
      } else {
        // img element
        this.source = options.source;
      }
    }
    if (options.repeat) {
      this.repeat = options.repeat;
    }
    if (options.offsetX) {
      this.offsetX = options.offsetX;
    }
    if (options.offsetY) {
      this.offsetY = options.offsetY;
    }
  },

  /**
   * Returns object representation of a pattern
   * @return {Object} Object representation of a pattern instance
   */
  toObject: function () {

    var source;

    // callback
    if (typeof this.source === 'function') {
      source = String(this.source);
    }
    // <img> element
    else if (typeof this.source.src === 'string') {
      source = this.source.src;
    }

    return {
      source: source,
      repeat: this.repeat,
      offsetX: this.offsetX,
      offsetY: this.offsetY
    };
  },

  /* _TO_SVG_START_ */
  /**
   * Returns SVG representation of a pattern
   * @param {fabric.Object} object
   * @return {String} SVG representation of a pattern
   */
  toSVG: function (object) {
    var patternSource = typeof this.source === 'function' ? this.source() : this.source;
    var patternWidth = patternSource.width / object.getWidth();
    var patternHeight = patternSource.height / object.getHeight();
    var patternImgSrc = '';

    if (patternSource.src) {
      patternImgSrc = patternSource.src;
    } else if (patternSource.toDataURL) {
      patternImgSrc = patternSource.toDataURL();
    }

    return '<pattern id="SVGID_' + this.id +
      '" x="' + this.offsetX +
      '" y="' + this.offsetY +
      '" width="' + patternWidth +
      '" height="' + patternHeight + '">' +
      '<image x="0" y="0"' +
      ' width="' + patternSource.width +
      '" height="' + patternSource.height +
      '" xlink:href="' + patternImgSrc +
      '"></image>' +
      '</pattern>';
  },
  /* _TO_SVG_END_ */

  /**
   * Returns an instance of CanvasPattern
   * @param {CanvasRenderingContext2D} ctx Context to create pattern
   * @return {CanvasPattern}
   */
  toLive: function (ctx) {
    var source = typeof this.source === 'function' ? this.source() : this.source;
    // if an image
    if (typeof source.src !== 'undefined') {
      if (!source.complete) return '';
      if (source.naturalWidth === 0 || source.naturalHeight === 0) return '';
    }
    return ctx.createPattern(source, this.repeat);
  }
});

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {});

  if (fabric.Shadow) {
    // fabric.warn('fabric.Shadow is already defined.');
    return;
  }

  /**
   * Shadow class
   * @class fabric.Shadow
   * @see {@link http://fabricjs.com/shadows/|Shadow demo}
   * @see {@link fabric.Shadow#initialize} for constructor definition
   */
  fabric.Shadow = fabric.util.createClass(/** @lends fabric.Shadow.prototype */ {

    /**
     * Shadow color
     * @type String
     * @default
     */
    color: 'rgb(0,0,0)',

    /**
     * Shadow blur
     * @type Number
     */
    blur: 0,

    /**
     * Shadow horizontal offset
     * @type Number
     * @default
     */
    offsetX: 0,

    /**
     * Shadow vertical offset
     * @type Number
     * @default
     */
    offsetY: 0,

    /**
     * Whether the shadow should affect stroke operations
     * @type Boolean
     * @default
     */
    affectStroke: false,

    /**
     * Indicates whether toObject should include default values
     * @type Boolean
     * @default
     */
    includeDefaultValues: true,

    /**
     * Constructor
     * @param {Object|String} [options] Options object with any of color, blur, offsetX, offsetX properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px, "2px 2px 10px rgba(0,0,0,0.2)")
     * @return {fabric.Shadow} thisArg
     */
    initialize: function (options) {
      if (typeof options === 'string') {
        options = this._parseShadow(options);
      }

      for (var prop in options) {
        this[prop] = options[prop];
      }

      this.id = fabric.Object.__uid++;
    },

    /**
     * @private
     * @param {String} shadow Shadow value to parse
     * @return {Object} Shadow object with color, offsetX, offsetY and blur
     */
    _parseShadow: function (shadow) {
      var shadowStr = shadow.trim();

      var offsetsAndBlur = fabric.Shadow.reOffsetsAndBlur.exec(shadowStr) || [],
        color = shadowStr.replace(fabric.Shadow.reOffsetsAndBlur, '') || 'rgb(0,0,0)';

      return {
        color: color.trim(),
        offsetX: parseInt(offsetsAndBlur[1], 10) || 0,
        offsetY: parseInt(offsetsAndBlur[2], 10) || 0,
        blur: parseInt(offsetsAndBlur[3], 10) || 0
      };
    },

    /**
     * Returns a string representation of an instance
     * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
     * @return {String} Returns CSS3 text-shadow declaration
     */
    toString: function () {
      return [this.offsetX, this.offsetY, this.blur, this.color].join('px ');
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of a shadow
     * @param {fabric.Object} object
     * @return {String} SVG representation of a shadow
     */
    toSVG: function (object) {
      var mode = 'SourceAlpha';

      if (object && (object.fill === this.color || object.stroke === this.color)) {
        mode = 'SourceGraphic';
      }

      return (
        '<filter id="SVGID_' + this.id + '" y="-40%" height="180%">' +
        '<feGaussianBlur in="' + mode + '" stdDeviation="' +
        (this.blur ? this.blur / 3 : 0) +
        '"></feGaussianBlur>' +
        '<feOffset dx="' + this.offsetX + '" dy="' + this.offsetY + '"></feOffset>' +
        '<feMerge>' +
        '<feMergeNode></feMergeNode>' +
        '<feMergeNode in="SourceGraphic"></feMergeNode>' +
        '</feMerge>' +
        '</filter>');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns object representation of a shadow
     * @return {Object} Object representation of a shadow instance
     */
    toObject: function () {
      if (this.includeDefaultValues) {
        return {
          color: this.color,
          blur: this.blur,
          offsetX: this.offsetX,
          offsetY: this.offsetY
        };
      }
      var obj = {}, proto = fabric.Shadow.prototype;
      if (this.color !== proto.color) {
        obj.color = this.color;
      }
      if (this.blur !== proto.blur) {
        obj.blur = this.blur;
      }
      if (this.offsetX !== proto.offsetX) {
        obj.offsetX = this.offsetX;
      }
      if (this.offsetY !== proto.offsetY) {
        obj.offsetY = this.offsetY;
      }
      return obj;
    }
  });

  /**
   * Regex matching shadow offsetX, offsetY and blur (ex: "2px 2px 10px rgba(0,0,0,0.2)", "rgb(0,255,0) 2px 2px")
   * @static
   * @field
   * @memberOf fabric.Shadow
   */
  fabric.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/;

})(typeof exports !== 'undefined' ? exports : this);

(function () {

  'use strict';

  if (fabric.StaticCanvas) {
    // fabric.warn('fabric.StaticCanvas is already defined.');
    return;
  }

  // aliases for faster resolution
  var extend = fabric.util.object.extend,
    getElementOffset = fabric.util.getElementOffset,
    removeFromArray = fabric.util.removeFromArray,

    CANVAS_INIT_ERROR = new Error('Could not initialize `canvas` element');

  /**
   * Static canvas class
   * @class fabric.StaticCanvas
   * @mixes fabric.Collection
   * @mixes fabric.Observable
   * @see {@link http://fabricjs.com/static_canvas/|StaticCanvas demo}
   * @see {@link fabric.StaticCanvas#initialize} for constructor definition
   * @fires before:render
   * @fires after:render
   * @fires canvas:cleared
   * @fires object:added
   * @fires object:removed
   */
  fabric.StaticCanvas = fabric.util.createClass(/** @lends fabric.StaticCanvas.prototype */ {

    /**
     * Constructor
     * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function (el, options) {
      options || (options = {});

      this._initStatic(el, options);
      fabric.StaticCanvas.activeInstance = this;
    },

    /**
     * Background color of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
     * @type {(String|fabric.Pattern)}
     * @default
     */
    backgroundColor: '',

    /**
     * Background image of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setBackgroundImage}.
     * <b>Backwards incompatibility note:</b> The "backgroundImageOpacity"
     * and "backgroundImageStretch" properties are deprecated since 1.3.9.
     * Use {@link fabric.Image#opacity}, {@link fabric.Image#width} and {@link fabric.Image#height}.
     * @type fabric.Image
     * @default
     */
    backgroundImage: null,

    /**
     * Overlay color of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
     * @since 1.3.9
     * @type {(String|fabric.Pattern)}
     * @default
     */
    overlayColor: '',

    /**
     * Overlay image of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setOverlayImage}.
     * <b>Backwards incompatibility note:</b> The "overlayImageLeft"
     * and "overlayImageTop" properties are deprecated since 1.3.9.
     * Use {@link fabric.Image#left} and {@link fabric.Image#top}.
     * @type fabric.Image
     * @default
     */
    overlayImage: null,

    /**
     * Indicates whether toObject/toDatalessObject should include default values
     * @type Boolean
     * @default
     */
    includeDefaultValues: true,

    /**
     * Indicates whether objects' state should be saved
     * @type Boolean
     * @default
     */
    stateful: true,

    /**
     * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove} should also re-render canvas.
     * Disabling this option could give a great performance boost when adding/removing a lot of objects to/from canvas at once
     * (followed by a manual rendering after addition/deletion)
     * @type Boolean
     * @default
     */
    renderOnAddRemove: true,

    /**
     * Function that determines clipping of entire canvas area
     * Being passed context as first argument. See clipping canvas area in {@link https://github.com/kangax/fabric.js/wiki/FAQ}
     * @type Function
     * @default
     */
    clipTo: null,

    /**
     * Indicates whether object controls (borders/controls) are rendered above overlay image
     * @type Boolean
     * @default
     */
    controlsAboveOverlay: false,

    /**
     * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
     * @type Boolean
     * @default
     */
    allowTouchScrolling: false,

    /**
     * Callback; invoked right before object is about to be scaled/rotated
     * @param {fabric.Object} target Object that's about to be scaled/rotated
     */
    onBeforeScaleRotate: function () {
      /* NOOP */
    },

    /**
     * @private
     * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
     * @param {Object} [options] Options object
     */
    _initStatic: function (el, options) {
      this._objects = [];

      this._createLowerCanvas(el);
      this._initOptions(options);

      if (options.overlayImage) {
        this.setOverlayImage(options.overlayImage, this.renderAll.bind(this));
      }
      if (options.backgroundImage) {
        this.setBackgroundImage(options.backgroundImage, this.renderAll.bind(this));
      }
      if (options.backgroundColor) {
        this.setBackgroundColor(options.backgroundColor, this.renderAll.bind(this));
      }
      if (options.overlayColor) {
        this.setOverlayColor(options.overlayColor, this.renderAll.bind(this));
      }
      this.calcOffset();
    },

    /**
     * Calculates canvas element offset relative to the document
     * This method is also attached as "resize" event handler of window
     * @return {fabric.Canvas} instance
     * @chainable
     */
    calcOffset: function () {
      this._offset = getElementOffset(this.lowerCanvasEl);
      return this;
    },

    /**
     * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
     * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
     * @param {Function} callback callback to invoke when image is loaded and set as an overlay
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/MnzHT/|jsFiddle demo}
     * @example <caption>Normal overlayImage with left/top = 0</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   // Needed to position overlayImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>overlayImage with different properties</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   opacity: 0.5,
     *   angle: 45,
     *   left: 400,
     *   top: 400,
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>Stretched overlayImage #1 - width/height correspond to canvas width/height</caption>
     * fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img) {
     *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
     *    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
     * });
     * @example <caption>Stretched overlayImage #2 - width/height correspond to canvas width/height</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   width: canvas.width,
     *   height: canvas.height,
     *   // Needed to position overlayImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     */
    setOverlayImage: function (image, callback, options) {
      return this.__setBgOverlayImage('overlayImage', image, callback, options);
    },

    /**
     * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
     * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
     * @param {Function} callback Callback to invoke when image is loaded and set as background
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/YH9yD/|jsFiddle demo}
     * @example <caption>Normal backgroundImage with left/top = 0</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   // Needed to position backgroundImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>backgroundImage with different properties</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   opacity: 0.5,
     *   angle: 45,
     *   left: 400,
     *   top: 400,
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>Stretched backgroundImage #1 - width/height correspond to canvas width/height</caption>
     * fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img) {
     *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
     *    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
     * });
     * @example <caption>Stretched backgroundImage #2 - width/height correspond to canvas width/height</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   width: canvas.width,
     *   height: canvas.height,
     *   // Needed to position backgroundImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     */
    setBackgroundImage: function (image, callback, options) {
      return this.__setBgOverlayImage('backgroundImage', image, callback, options);
    },

    /**
     * Sets {@link fabric.StaticCanvas#overlayColor|background color} for this canvas
     * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set background color to
     * @param {Function} callback Callback to invoke when background color is set
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/pB55h/|jsFiddle demo}
     * @example <caption>Normal overlayColor - color value</caption>
     * canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as overlayColor</caption>
     * canvas.setOverlayColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
     * }, canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as overlayColor with repeat and offset</caption>
     * canvas.setOverlayColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
     *   repeat: 'repeat',
     *   offsetX: 200,
     *   offsetY: 100
     * }, canvas.renderAll.bind(canvas));
     */
    setOverlayColor: function (overlayColor, callback) {
      return this.__setBgOverlayColor('overlayColor', overlayColor, callback);
    },

    /**
     * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
     * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
     * @param {Function} callback Callback to invoke when background color is set
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/hXzvk/|jsFiddle demo}
     * @example <caption>Normal backgroundColor - color value</caption>
     * canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as backgroundColor</caption>
     * canvas.setBackgroundColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
     * }, canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as backgroundColor with repeat and offset</caption>
     * canvas.setBackgroundColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
     *   repeat: 'repeat',
     *   offsetX: 200,
     *   offsetY: 100
     * }, canvas.renderAll.bind(canvas));
     */
    setBackgroundColor: function (backgroundColor, callback) {
      return this.__setBgOverlayColor('backgroundColor', backgroundColor, callback);
    },

    /**
     * @private
     * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundImage|backgroundImage}
     * or {@link fabric.StaticCanvas#overlayImage|overlayImage})
     * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background or overlay to
     * @param {Function} callback Callback to invoke when image is loaded and set as background or overlay
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|image}.
     */
    __setBgOverlayImage: function (property, image, callback, options) {
      if (typeof image === 'string') {
        fabric.util.loadImage(image, function (img) {
          this[property] = new fabric.Image(img, options);
          callback && callback();
        }, this);
      } else {
        this[property] = image;
        callback && callback();
      }

      return this;
    },

    /**
     * @private
     * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundColor|backgroundColor}
     * or {@link fabric.StaticCanvas#overlayColor|overlayColor})
     * @param {(Object|String)} color Object with pattern information or color value
     * @param {Function} [callback] Callback is invoked when color is set
     */
    __setBgOverlayColor: function (property, color, callback) {
      if (color.source) {
        var _this = this;
        fabric.util.loadImage(color.source, function (img) {
          _this[property] = new fabric.Pattern({
            source: img,
            repeat: color.repeat,
            offsetX: color.offsetX,
            offsetY: color.offsetY
          });
          callback && callback();
        });
      } else {
        this[property] = color;
        callback && callback();
      }

      return this;
    },

    /**
     * @private
     */
    _createCanvasElement: function () {
      var element = fabric.document.createElement('canvas');
      if (!element.style) {
        element.style = {};
      }
      if (!element) {
        throw CANVAS_INIT_ERROR;
      }
      this._initCanvasElement(element);
      return element;
    },

    /**
     * @private
     * @param {HTMLElement} element
     */
    _initCanvasElement: function (element) {
      fabric.util.createCanvasElement(element);

      if (typeof element.getContext === 'undefined') {
        throw CANVAS_INIT_ERROR;
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initOptions: function (options) {
      for (var prop in options) {
        this[prop] = options[prop];
      }

      this.width = this.width || parseInt(this.lowerCanvasEl.width, 10) || 0;
      this.height = this.height || parseInt(this.lowerCanvasEl.height, 10) || 0;
      if (!this.lowerCanvasEl.style) return;

      this.lowerCanvasEl.width = this.width;
      this.lowerCanvasEl.height = this.height;

      this.lowerCanvasEl.style.width = this.width + 'px';
      this.lowerCanvasEl.style.height = this.height + 'px';
    },

    /**
     * Creates a bottom canvas
     * @private
     * @param {HTMLElement} [canvasEl]
     */
    _createLowerCanvas: function (canvasEl) {
      this.lowerCanvasEl = fabric.util.getById(canvasEl) || this._createCanvasElement();
      this._initCanvasElement(this.lowerCanvasEl);

      fabric.util.addClass(this.lowerCanvasEl, 'lower-canvas');

      if (this.interactive) {
        this._applyCanvasStyle(this.lowerCanvasEl);
      }

      this.contextContainer = this.lowerCanvasEl.getContext('2d');
    },

    /**
     * Returns canvas width (in px)
     * @return {Number}
     */
    getWidth: function () {
      return this.width;
    },

    /**
     * Returns canvas height (in px)
     * @return {Number}
     */
    getHeight: function () {
      return this.height;
    },

    /**
     * Sets width of this canvas instance
     * @param {Number} width value to set width to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setWidth: function (value) {
      return this._setDimension('width', value);
    },

    /**
     * Sets height of this canvas instance
     * @param {Number} height value to set height to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setHeight: function (value) {
      return this._setDimension('height', value);
    },

    /**
     * Sets dimensions (width, height) of this canvas instance
     * @param {Object} dimensions Object with width/height properties
     * @param {Number} [dimensions.width] Width of canvas element
     * @param {Number} [dimensions.height] Height of canvas element
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setDimensions: function (dimensions) {
      for (var prop in dimensions) {
        this._setDimension(prop, dimensions[prop]);
      }
      return this;
    },

    /**
     * Helper for setting width/height
     * @private
     * @param {String} prop property (width|height)
     * @param {Number} value value to set property to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    _setDimension: function (prop, value) {
      this.lowerCanvasEl[prop] = value;
      this.lowerCanvasEl.style[prop] = value + 'px';

      if (this.upperCanvasEl) {
        this.upperCanvasEl[prop] = value;
        this.upperCanvasEl.style[prop] = value + 'px';
      }

      if (this.cacheCanvasEl) {
        this.cacheCanvasEl[prop] = value;
      }

      if (this.wrapperEl) {
        this.wrapperEl.style[prop] = value + 'px';
      }

      this[prop] = value;

      this.calcOffset();
      this.renderAll();

      return this;
    },

    /**
     * Returns &lt;canvas> element corresponding to this instance
     * @return {HTMLCanvasElement}
     */
    getElement: function () {
      return this.lowerCanvasEl;
    },

    /**
     * Returns currently selected object, if any
     * @return {fabric.Object}
     */
    getActiveObject: function () {
      return null;
    },

    /**
     * Returns currently selected group of object, if any
     * @return {fabric.Group}
     */
    getActiveGroup: function () {
      return null;
    },

    /**
     * Given a context, renders an object on that context
     * @param {CanvasRenderingContext2D} ctx Context to render object on
     * @param {fabric.Object} object Object to render
     * @private
     */
    _draw: function (ctx, object) {
      if (!object) return;

      if (this.controlsAboveOverlay) {
        var hasBorders = object.hasBorders, hasControls = object.hasControls;
        object.hasBorders = object.hasControls = false;
        object.render(ctx);
        object.hasBorders = hasBorders;
        object.hasControls = hasControls;
      } else {
        object.render(ctx);
      }
    },

    /**
     * @private
     * @param {fabric.Object} obj Object that was added
     */
    _onObjectAdded: function (obj) {
      this.stateful && obj.setupState();
      obj.setCoords();
      obj.canvas = this;
      this.fire('object:added', {target: obj});
      obj.fire('added');
    },

    /**
     * @private
     * @param {fabric.Object} obj Object that was removed
     */
    _onObjectRemoved: function (obj) {
      // removing active object should fire "selection:cleared" events
      if (this.getActiveObject() === obj) {
        this.fire('before:selection:cleared', {target: obj});
        this._discardActiveObject();
        this.fire('selection:cleared');
      }

      this.fire('object:removed', {target: obj});
      obj.fire('removed');
    },

    /**
     * Clears specified context of canvas element
     * @param {CanvasRenderingContext2D} ctx Context to clear
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clearContext: function (ctx) {
      ctx.clearRect(0, 0, this.width, this.height);
      return this;
    },

    /**
     * Returns context of canvas where objects are drawn
     * @return {CanvasRenderingContext2D}
     */
    getContext: function () {
      return this.contextContainer;
    },

    /**
     * Clears all contexts (background, main, top) of an instance
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clear: function () {
      this._objects.length = 0;
      if (this.discardActiveGroup) {
        this.discardActiveGroup();
      }
      if (this.discardActiveObject) {
        this.discardActiveObject();
      }
      this.clearContext(this.contextContainer);
      if (this.contextTop) {
        this.clearContext(this.contextTop);
      }
      this.fire('canvas:cleared');
      this.renderAll();
      return this;
    },

    /**
     * Renders both the top canvas and the secondary container canvas.
     * @param {Boolean} [allOnTop] Whether we want to force all images to be rendered on the top canvas
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderAll: function (allOnTop) {

      var canvasToDrawOn = this[(allOnTop === true && this.interactive) ? 'contextTop' : 'contextContainer'];
      var activeGroup = this.getActiveGroup();

      if (this.contextTop && this.selection && !this._groupSelector) {
        this.clearContext(this.contextTop);
      }

      if (!allOnTop) {
        this.clearContext(canvasToDrawOn);
      }

      this.fire('before:render');

      if (this.clipTo) {
        fabric.util.clipContext(this, canvasToDrawOn);
      }

      this._renderBackground(canvasToDrawOn);
      this._renderObjects(canvasToDrawOn, activeGroup);
      this._renderActiveGroup(canvasToDrawOn, activeGroup);

      if (this.clipTo) {
        canvasToDrawOn.restore();
      }

      this._renderOverlay(canvasToDrawOn);

      if (this.controlsAboveOverlay && this.interactive) {
        this.drawControls(canvasToDrawOn);
      }

      this.fire('after:render');

      return this;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {fabric.Group} activeGroup
     */
    _renderObjects: function (ctx, activeGroup) {
      for (var i = 0, length = this._objects.length; i < length; ++i) {
        if (!activeGroup ||
          (activeGroup && this._objects[i] && !activeGroup.contains(this._objects[i]))) {
          this._draw(ctx, this._objects[i]);
        }
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {fabric.Group} activeGroup
     */
    _renderActiveGroup: function (ctx, activeGroup) {

      // delegate rendering to group selection (if one exists)
      if (activeGroup) {

        //Store objects in group preserving order, then replace
        var sortedObjects = [];
        this.forEachObject(function (object) {
          if (activeGroup.contains(object)) {
            sortedObjects.push(object);
          }
        });
        activeGroup._set('objects', sortedObjects);
        this._draw(ctx, activeGroup);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderBackground: function (ctx) {
      if (this.backgroundColor) {
        ctx.fillStyle = this.backgroundColor.toLive
          ? this.backgroundColor.toLive(ctx)
          : this.backgroundColor;

        ctx.fillRect(
          this.backgroundColor.offsetX || 0,
          this.backgroundColor.offsetY || 0,
          this.width,
          this.height);
      }
      if (this.backgroundImage) {
        this.backgroundImage.render(ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderOverlay: function (ctx) {
      if (this.overlayColor) {
        ctx.fillStyle = this.overlayColor.toLive
          ? this.overlayColor.toLive(ctx)
          : this.overlayColor;

        ctx.fillRect(
          this.overlayColor.offsetX || 0,
          this.overlayColor.offsetY || 0,
          this.width,
          this.height);
      }
      if (this.overlayImage) {
        this.overlayImage.render(ctx);
      }
    },

    /**
     * Method to render only the top canvas.
     * Also used to render the group selection box.
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    renderTop: function () {
      var ctx = this.contextTop || this.contextContainer;
      this.clearContext(ctx);

      // we render the top context - last object
      if (this.selection && this._groupSelector) {
        this._drawSelection();
      }

      // delegate rendering to group selection if one exists
      // used for drawing selection borders/controls
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        activeGroup.render(ctx);
      }

      this._renderOverlay(ctx);

      this.fire('after:render');

      return this;
    },

    /**
     * Returns coordinates of a center of canvas.
     * Returned value is an object with top and left properties
     * @return {Object} object with "top" and "left" number values
     */
    getCenter: function () {
      return {
        top: this.getHeight() / 2,
        left: this.getWidth() / 2
      };
    },

    /**
     * Centers object horizontally.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center horizontally
     * @return {fabric.Canvas} thisArg
     */
    centerObjectH: function (object) {
      this._centerObject(object, new fabric.Point(this.getCenter().left, object.getCenterPoint().y));
      this.renderAll();
      return this;
    },

    /**
     * Centers object vertically.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center vertically
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObjectV: function (object) {
      this._centerObject(object, new fabric.Point(object.getCenterPoint().x, this.getCenter().top));
      this.renderAll();
      return this;
    },

    /**
     * Centers object vertically and horizontally.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObject: function (object) {
      var center = this.getCenter();

      this._centerObject(object, new fabric.Point(center.left, center.top));
      this.renderAll();
      return this;
    },

    /**
     * @private
     * @param {fabric.Object} object Object to center
     * @param {fabric.Point} center Center point
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    _centerObject: function (object, center) {
      object.setPositionByOrigin(center, 'center', 'center');
      return this;
    },

    /**
     * Returs dataless JSON representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {String} json string
     */
    toDatalessJSON: function (propertiesToInclude) {
      return this.toDatalessObject(propertiesToInclude);
    },

    /**
     * Returns object representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return this._toObjectMethod('toObject', propertiesToInclude);
    },

    /**
     * Returns dataless object representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toDatalessObject: function (propertiesToInclude) {
      return this._toObjectMethod('toDatalessObject', propertiesToInclude);
    },

    /**
     * @private
     */
    _toObjectMethod: function (methodName, propertiesToInclude) {

      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        this.discardActiveGroup();
      }

      var data = {
        objects: this._toObjects(methodName, propertiesToInclude)
      };

      extend(data, this.__serializeBgOverlay());

      fabric.util.populateWithProperties(this, data, propertiesToInclude);

      if (activeGroup) {
        this.setActiveGroup(new fabric.Group(activeGroup.getObjects()));
        activeGroup.forEachObject(function (o) {
          o.set('active', true);
        });
      }
      return data;
    },

    /**
     * @private
     */
    _toObjects: function (methodName, propertiesToInclude) {
      return this.getObjects().map(function (instance) {
        return this._toObject(instance, methodName, propertiesToInclude);
      }, this);
    },

    /**
     * @private
     */
    _toObject: function (instance, methodName, propertiesToInclude) {
      var originalValue;

      if (!this.includeDefaultValues) {
        originalValue = instance.includeDefaultValues;
        instance.includeDefaultValues = false;
      }
      var object = instance[methodName](propertiesToInclude);
      if (!this.includeDefaultValues) {
        instance.includeDefaultValues = originalValue;
      }
      return object;
    },

    /**
     * @private
     */
    __serializeBgOverlay: function () {
      var data = {
        background: (this.backgroundColor && this.backgroundColor.toObject)
          ? this.backgroundColor.toObject()
          : this.backgroundColor
      };

      if (this.overlayColor) {
        data.overlay = this.overlayColor.toObject
          ? this.overlayColor.toObject()
          : this.overlayColor;
      }
      if (this.backgroundImage) {
        data.backgroundImage = this.backgroundImage.toObject();
      }
      if (this.overlayImage) {
        data.overlayImage = this.overlayImage.toObject();
      }

      return data;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of canvas
     * @function
     * @param {Object} [options] Options object for SVG output
     * @param {Boolean} [options.suppressPreamble=false] If true xml tag is not included
     * @param {Object} [options.viewBox] SVG viewbox object
     * @param {Number} [options.viewBox.x] x-cooridnate of viewbox
     * @param {Number} [options.viewBox.y] y-coordinate of viewbox
     * @param {Number} [options.viewBox.width] Width of viewbox
     * @param {Number} [options.viewBox.height] Height of viewbox
     * @param {String} [options.encoding=UTF-8] Encoding of SVG output
     * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
     * @return {String} SVG string
     * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#serialization}
     * @see {@link http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle demo}
     * @example <caption>Normal SVG output</caption>
     * var svg = canvas.toSVG();
     * @example <caption>SVG output without preamble (without &lt;?xml ../>)</caption>
     * var svg = canvas.toSVG({suppressPreamble: true});
     * @example <caption>SVG output with viewBox attribute</caption>
     * var svg = canvas.toSVG({
     *   viewBox: {
     *     x: 100,
     *     y: 100,
     *     width: 200,
     *     height: 300
     *   }
     * });
     * @example <caption>SVG output with different encoding (default: UTF-8)</caption>
     * var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
     * @example <caption>Modify SVG output with reviver function</caption>
     * var svg = canvas.toSVG(null, function(svg) {
     *   return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
     * });
     */
    toSVG: function (options, reviver) {
      options || (options = {});

      var markup = [];

      this._setSVGPreamble(markup, options);
      this._setSVGHeader(markup, options);

      this._setSVGBgOverlayColor(markup, 'backgroundColor');
      this._setSVGBgOverlayImage(markup, 'backgroundImage');

      this._setSVGObjects(markup, reviver);

      this._setSVGBgOverlayColor(markup, 'overlayColor');
      this._setSVGBgOverlayImage(markup, 'overlayImage');

      markup.push('</svg>');

      return markup.join('');
    },

    /**
     * @private
     */
    _setSVGPreamble: function (markup, options) {
      if (!options.suppressPreamble) {
        markup.push(
          '<?xml version="1.0" encoding="', (options.encoding || 'UTF-8'), '" standalone="no" ?>',
          '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
          '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
        );
      }
    },

    /**
     * @private
     */
    _setSVGHeader: function (markup, options) {
      markup.push(
        '<svg ',
        'xmlns="http://www.w3.org/2000/svg" ',
        'xmlns:xlink="http://www.w3.org/1999/xlink" ',
        'version="1.1" ',
        'width="', (options.viewBox ? options.viewBox.width : this.width), '" ',
        'height="', (options.viewBox ? options.viewBox.height : this.height), '" ',
        (this.backgroundColor && !this.backgroundColor.toLive
          ? 'style="background-color: ' + this.backgroundColor + '" '
          : null),
        (options.viewBox
          ? 'viewBox="' +
          options.viewBox.x + ' ' +
          options.viewBox.y + ' ' +
          options.viewBox.width + ' ' +
          options.viewBox.height + '" '
          : null),
        'xml:space="preserve">',
        '<desc>Created with Fabric.js ', fabric.version, '</desc>',
        '<defs>',
        fabric.createSVGFontFacesMarkup(this.getObjects()),
        fabric.createSVGRefElementsMarkup(this),
        '</defs>'
      );
    },

    /**
     * @private
     */
    _setSVGObjects: function (markup, reviver) {
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        this.discardActiveGroup();
      }
      for (var i = 0, objects = this.getObjects(), len = objects.length; i < len; i++) {
        markup.push(objects[i].toSVG(reviver));
      }
      if (activeGroup) {
        this.setActiveGroup(new fabric.Group(activeGroup.getObjects()));
        activeGroup.forEachObject(function (o) {
          o.set('active', true);
        });
      }
    },

    /**
     * @private
     */
    _setSVGBgOverlayImage: function (markup, property) {
      if (this[property] && this[property].toSVG) {
        markup.push(this[property].toSVG());
      }
    },

    /**
     * @private
     */
    _setSVGBgOverlayColor: function (markup, property) {
      if (this[property] && this[property].source) {
        markup.push(
          '<rect x="', this[property].offsetX, '" y="', this[property].offsetY, '" ',
          'width="',
          (this[property].repeat === 'repeat-y' || this[property].repeat === 'no-repeat'
            ? this[property].source.width
            : this.width),
          '" height="',
          (this[property].repeat === 'repeat-x' || this[property].repeat === 'no-repeat'
            ? this[property].source.height
            : this.height),
          '" fill="url(#' + property + 'Pattern)"',
          '></rect>'
        );
      } else if (this[property] && property === 'overlayColor') {
        markup.push(
          '<rect x="0" y="0" ',
          'width="', this.width,
          '" height="', this.height,
          '" fill="', this[property], '"',
          '></rect>'
        );
      }
    },
    /* _TO_SVG_END_ */

    /**
     * Moves an object to the bottom of the stack of drawn objects
     * @param {fabric.Object} object Object to send to back
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendToBack: function (object) {
      removeFromArray(this._objects, object);
      this._objects.unshift(object);
      return this.renderAll && this.renderAll();
    },

    /**
     * Moves an object to the top of the stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringToFront: function (object) {
      removeFromArray(this._objects, object);
      this._objects.push(object);
      return this.renderAll && this.renderAll();
    },

    /**
     * Moves an object down in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendBackwards: function (object, intersecting) {
      var idx = this._objects.indexOf(object);

      // if object is not on the bottom of stack
      if (idx !== 0) {
        var newIdx = this._findNewLowerIndex(object, idx, intersecting);
        removeFromArray(this._objects, object);
        this._objects.splice(newIdx, 0, object);
        this.renderAll && this.renderAll();
      }
      return this;
    },

    /**
     * @private
     */
    _findNewLowerIndex: function (object, idx, intersecting) {
      var newIdx;

      if (intersecting) {
        newIdx = idx;

        // traverse down the stack looking for the nearest intersecting object
        for (var i = idx - 1; i >= 0; --i) {

          var isIntersecting = object.intersectsWithObject(this._objects[i]) ||
            object.isContainedWithinObject(this._objects[i]) ||
            this._objects[i].isContainedWithinObject(object);

          if (isIntersecting) {
            newIdx = i;
            break;
          }
        }
      } else {
        newIdx = idx - 1;
      }

      return newIdx;
    },

    /**
     * Moves an object up in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringForward: function (object, intersecting) {
      var idx = this._objects.indexOf(object);

      // if object is not on top of stack (last item in an array)
      if (idx !== this._objects.length - 1) {
        var newIdx = this._findNewUpperIndex(object, idx, intersecting);

        removeFromArray(this._objects, object);
        this._objects.splice(newIdx, 0, object);
        this.renderAll && this.renderAll();
      }
      return this;
    },

    /**
     * @private
     */
    _findNewUpperIndex: function (object, idx, intersecting) {
      var newIdx;

      if (intersecting) {
        newIdx = idx;

        // traverse up the stack looking for the nearest intersecting object
        for (var i = idx + 1; i < this._objects.length; ++i) {

          var isIntersecting = object.intersectsWithObject(this._objects[i]) ||
            object.isContainedWithinObject(this._objects[i]) ||
            this._objects[i].isContainedWithinObject(object);

          if (isIntersecting) {
            newIdx = i;
            break;
          }
        }
      } else {
        newIdx = idx + 1;
      }

      return newIdx;
    },

    /**
     * Moves an object to specified level in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Number} index Position to move to
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    moveTo: function (object, index) {
      removeFromArray(this._objects, object);
      this._objects.splice(index, 0, object);
      return this.renderAll && this.renderAll();
    },

    /**
     * Clears a canvas element and removes all event listeners
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    dispose: function () {
      this.clear();
      this.interactive && this.removeListeners();
      return this;
    },

    /**
     * Returns a string representation of an instance
     * @return {String} string representation of an instance
     */
    toString: function () {
      return '#<fabric.Canvas (' + this.complexity() + '): ' +
        '{ objects: ' + this.getObjects().length + ' }>';
    }
  });

  extend(fabric.StaticCanvas.prototype, fabric.Observable);
  extend(fabric.StaticCanvas.prototype, fabric.Collection);
  extend(fabric.StaticCanvas.prototype, fabric.DataURLExporter);

  extend(fabric.StaticCanvas, /** @lends fabric.StaticCanvas */ {

    /**
     * @static
     * @type String
     * @default
     */
    EMPTY_JSON: '{"objects": [], "background": "white"}',

    /**
     * Provides a way to check support of some of the canvas methods
     * (either those of HTMLCanvasElement itself, or rendering context)
     *
     * @param methodName {String} Method to check support for;
     *                            Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
     * @return {Boolean | null} `true` if method is supported (or at least exists),
     *                          `null` if canvas element or context can not be initialized
     */
    supports: function (methodName) {
      var el = fabric.util.createCanvasElement();

      if (!el || !el.getContext) {
        return null;
      }

      var ctx = el.getContext('2d');
      if (!ctx) {
        return null;
      }

      switch (methodName) {

        case 'getImageData':
          return typeof ctx.getImageData !== 'undefined';

        case 'setLineDash':
          return typeof ctx.setLineDash !== 'undefined';

        case 'toDataURL':
          return typeof el.toDataURL !== 'undefined';

        case 'toDataURLWithQuality':
          try {
            el.toDataURL('image/jpeg', 0);
            return true;
          } catch (e) {
          }
          return false;

        default:
          return null;
      }
    }
  });

  /**
   * Returns JSON representation of canvas
   * @function
   * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
   * @return {String} JSON string
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#serialization}
   * @see {@link http://jsfiddle.net/fabricjs/pec86/|jsFiddle demo}
   * @example <caption>JSON without additional properties</caption>
   * var json = canvas.toJSON();
   * @example <caption>JSON with additional properties included</caption>
   * var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockUniScaling']);
   * @example <caption>JSON without default values</caption>
   * canvas.includeDefaultValues = false;
   * var json = canvas.toJSON();
   */
  fabric.StaticCanvas.prototype.toJSON = fabric.StaticCanvas.prototype.toObject;

})();

/**
 * BaseBrush class
 * @class fabric.BaseBrush
 * @see {@link http://fabricjs.com/freedrawing/|Freedrawing demo}
 */
fabric.BaseBrush = fabric.util.createClass(/** @lends fabric.BaseBrush.prototype */ {

  /**
   * Color of a brush
   * @type String
   * @default
   */
  color: 'rgb(0, 0, 0)',

  /**
   * Width of a brush
   * @type Number
   * @default
   */
  width: 1,

  /**
   * Shadow object representing shadow of this shape.
   * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
   * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
   * @type fabric.Shadow
   * @default
   */
  shadow: null,

  /**
   * Line endings style of a brush (one of "butt", "round", "square")
   * @type String
   * @default
   */
  strokeLineCap: 'round',

  /**
   * Corner style of a brush (one of "bevil", "round", "miter")
   * @type String
   * @default
   */
  strokeLineJoin: 'round',

  /**
   * Sets shadow of an object
   * @param {Object|String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
   * @return {fabric.Object} thisArg
   * @chainable
   */
  setShadow: function (options) {
    this.shadow = new fabric.Shadow(options);
    return this;
  },

  /**
   * Sets brush styles
   * @private
   */
  _setBrushStyles: function () {
    var ctx = this.canvas.contextTop;

    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.lineCap = this.strokeLineCap;
    ctx.lineJoin = this.strokeLineJoin;
  },

  /**
   * Sets brush shadow styles
   * @private
   */
  _setShadow: function () {
    if (!this.shadow) return;

    var ctx = this.canvas.contextTop;

    ctx.shadowColor = this.shadow.color;
    ctx.shadowBlur = this.shadow.blur;
    ctx.shadowOffsetX = this.shadow.offsetX;
    ctx.shadowOffsetY = this.shadow.offsetY;
  },

  /**
   * Removes brush shadow styles
   * @private
   */
  _resetShadow: function () {
    var ctx = this.canvas.contextTop;

    ctx.shadowColor = '';
    ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
  }
});

(function () {

  var utilMin = fabric.util.array.min,
    utilMax = fabric.util.array.max;

  /**
   * PencilBrush class
   * @class fabric.PencilBrush
   * @extends fabric.BaseBrush
   */
  fabric.PencilBrush = fabric.util.createClass(fabric.BaseBrush, /** @lends fabric.PencilBrush.prototype */ {

    /**
     * Constructor
     * @param {fabric.Canvas} canvas
     * @return {fabric.PencilBrush} Instance of a pencil brush
     */
    initialize: function (canvas) {
      this.canvas = canvas;
      this._points = [];
    },

    /**
     * Inovoked on mouse down
     * @param {Object} pointer
     */
    onMouseDown: function (pointer) {
      this._prepareForDrawing(pointer);
      // capture coordinates immediately
      // this allows to draw dots (when movement never occurs)
      this._captureDrawingPath(pointer);
      this._render();
    },

    /**
     * Inovoked on mouse move
     * @param {Object} pointer
     */
    onMouseMove: function (pointer) {
      this._captureDrawingPath(pointer);
      // redraw curve
      // clear top canvas
      this.canvas.clearContext(this.canvas.contextTop);
      this._render();
    },

    /**
     * Invoked on mouse up
     */
    onMouseUp: function () {
      this._finalizeAndAddPath();
    },

    /**
     * @param {Object} pointer
     */
    _prepareForDrawing: function (pointer) {

      var p = new fabric.Point(pointer.x, pointer.y);

      this._reset();
      this._addPoint(p);

      this.canvas.contextTop.moveTo(p.x, p.y);
    },

    /**
     * @private
     * @param {fabric.Point} point
     */
    _addPoint: function (point) {
      this._points.push(point);
    },

    /**
     * Clear points array and set contextTop canvas
     * style.
     *
     * @private
     *
     */
    _reset: function () {
      this._points.length = 0;

      this._setBrushStyles();
      this._setShadow();
    },

    /**
     * @private
     *
     * @param point {pointer} (fabric.util.pointer) actual mouse position
     *   related to the canvas.
     */
    _captureDrawingPath: function (pointer) {
      var pointerPoint = new fabric.Point(pointer.x, pointer.y);
      this._addPoint(pointerPoint);
    },

    /**
     * Draw a smooth path on the topCanvas using quadraticCurveTo
     *
     * @private
     */
    _render: function () {
      var ctx = this.canvas.contextTop;
      ctx.beginPath();

      var p1 = this._points[0];
      var p2 = this._points[1];

      //if we only have 2 points in the path and they are the same
      //it means that the user only clicked the canvas without moving the mouse
      //then we should be drawing a dot. A path isn't drawn between two identical dots
      //that's why we set them apart a bit
      if (this._points.length === 2 && p1.x === p2.x && p1.y === p2.y) {
        p1.x -= 0.5;
        p2.x += 0.5;
      }
      ctx.moveTo(p1.x, p1.y);

      for (var i = 1, len = this._points.length; i < len; i++) {
        // we pick the point between pi+1 & pi+2 as the
        // end point and p1 as our control point.
        var midPoint = p1.midPointFrom(p2);
        ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);

        p1 = this._points[i];
        p2 = this._points[i + 1];
      }
      // Draw last line as a straight line while
      // we wait for the next point to be able to calculate
      // the bezier control point
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    },

    /**
     * Return an SVG path based on our captured points and their bounding box
     *
     * @private
     */
    _getSVGPathData: function () {
      this.box = this.getPathBoundingBox(this._points);
      return this.convertPointsToSVGPath(
        this._points, this.box.minx, this.box.maxx, this.box.miny, this.box.maxy);
    },

    /**
     * Returns bounding box of a path based on given points
     * @param {Array} points
     * @return {Object} object with minx, miny, maxx, maxy
     */
    getPathBoundingBox: function (points) {
      var xBounds = [],
        yBounds = [],
        p1 = points[0],
        p2 = points[1],
        startPoint = p1;

      for (var i = 1, len = points.length; i < len; i++) {
        var midPoint = p1.midPointFrom(p2);
        // with startPoint, p1 as control point, midpoint as end point
        xBounds.push(startPoint.x);
        xBounds.push(midPoint.x);
        yBounds.push(startPoint.y);
        yBounds.push(midPoint.y);

        p1 = points[i];
        p2 = points[i + 1];
        startPoint = midPoint;
      } // end for

      xBounds.push(p1.x);
      yBounds.push(p1.y);

      return {
        minx: utilMin(xBounds),
        miny: utilMin(yBounds),
        maxx: utilMax(xBounds),
        maxy: utilMax(yBounds)
      };
    },

    /**
     * Converts points to SVG path
     * @param {Array} points Array of points
     * @return {String} SVG path
     */
    convertPointsToSVGPath: function (points, minX, maxX, minY) {
      var path = [];
      var p1 = new fabric.Point(points[0].x - minX, points[0].y - minY);
      var p2 = new fabric.Point(points[1].x - minX, points[1].y - minY);

      path.push('M ', points[0].x - minX, ' ', points[0].y - minY, ' ');
      for (var i = 1, len = points.length; i < len; i++) {
        var midPoint = p1.midPointFrom(p2);
        // p1 is our bezier control point
        // midpoint is our endpoint
        // start point is p(i-1) value.
        path.push('Q ', p1.x, ' ', p1.y, ' ', midPoint.x, ' ', midPoint.y, ' ');
        p1 = new fabric.Point(points[i].x - minX, points[i].y - minY);
        if ((i + 1) < points.length) {
          p2 = new fabric.Point(points[i + 1].x - minX, points[i + 1].y - minY);
        }
      }
      path.push('L ', p1.x, ' ', p1.y, ' ');
      return path;
    },

    /**
     * Creates fabric.Path object to add on canvas
     * @param {String} pathData Path data
     * @return {fabric.Path} path to add on canvas
     */
    createPath: function (pathData) {
      var path = new fabric.Path(pathData);
      path.fill = null;
      path.stroke = this.color;
      path.strokeWidth = this.width;
      path.strokeLineCap = this.strokeLineCap;
      path.strokeLineJoin = this.strokeLineJoin;

      if (this.shadow) {
        this.shadow.affectStroke = true;
        path.setShadow(this.shadow);
      }

      return path;
    },

    /**
     * On mouseup after drawing the path on contextTop canvas
     * we use the points captured to create an new fabric path object
     * and add it to the fabric canvas.
     *
     */
    _finalizeAndAddPath: function () {
      var ctx = this.canvas.contextTop;
      ctx.closePath();

      var pathData = this._getSVGPathData().join('');
      if (pathData === 'M 0 0 Q 0 0 0 0 L 0 0') {
        // do not create 0 width/height paths, as they are
        // rendered inconsistently across browsers
        // Firefox 4, for example, renders a dot,
        // whereas Chrome 10 renders nothing
        this.canvas.renderAll();
        return;
      }

      // set path origin coordinates based on our bounding box
      var originLeft = this.box.minx + (this.box.maxx - this.box.minx) / 2;
      var originTop = this.box.miny + (this.box.maxy - this.box.miny) / 2;

      this.canvas.contextTop.arc(originLeft, originTop, 3, 0, Math.PI * 2, false);

      var path = this.createPath(pathData);
      path.set({
        left: originLeft,
        top: originTop,
        originX: 'center',
        originY: 'center'
      });

      this.canvas.add(path);
      path.setCoords();

      this.canvas.clearContext(this.canvas.contextTop);
      this._resetShadow();
      this.canvas.renderAll();

      // fire event 'path' created
      this.canvas.fire('path:created', {path: path});
    }
  });
})();

/**
 * CircleBrush class
 * @class fabric.CircleBrush
 */
fabric.CircleBrush = fabric.util.createClass(fabric.BaseBrush, /** @lends fabric.CircleBrush.prototype */ {

  /**
   * Width of a brush
   * @type Number
   * @default
   */
  width: 10,

  /**
   * Constructor
   * @param {fabric.Canvas} canvas
   * @return {fabric.CircleBrush} Instance of a circle brush
   */
  initialize: function (canvas) {
    this.canvas = canvas;
    this.points = [];
  },
  /**
   * Invoked inside on mouse down and mouse move
   * @param {Object} pointer
   */
  drawDot: function (pointer) {
    var point = this.addPoint(pointer);
    var ctx = this.canvas.contextTop;

    ctx.fillStyle = point.fill;
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  },

  /**
   * Invoked on mouse down
   */
  onMouseDown: function (pointer) {
    this.points.length = 0;
    this.canvas.clearContext(this.canvas.contextTop);
    this._setShadow();
    this.drawDot(pointer);
  },

  /**
   * Invoked on mouse move
   * @param {Object} pointer
   */
  onMouseMove: function (pointer) {
    this.drawDot(pointer);
  },

  /**
   * Invoked on mouse up
   */
  onMouseUp: function () {
    var originalRenderOnAddRemove = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;

    var circles = [];

    for (var i = 0, len = this.points.length; i < len; i++) {
      var point = this.points[i];
      var circle = new fabric.Circle({
        radius: point.radius,
        left: point.x,
        top: point.y,
        originX: 'center',
        originY: 'center',
        fill: point.fill
      });

      this.shadow && circle.setShadow(this.shadow);

      circles.push(circle);
    }
    var group = new fabric.Group(circles, {originX: 'center', originY: 'center'});

    this.canvas.add(group);
    this.canvas.fire('path:created', {path: group});

    this.canvas.clearContext(this.canvas.contextTop);
    this._resetShadow();
    this.canvas.renderOnAddRemove = originalRenderOnAddRemove;
    this.canvas.renderAll();
  },

  /**
   * @param {Object} pointer
   * @return {fabric.Point} Just added pointer point
   */
  addPoint: function (pointer) {
    var pointerPoint = new fabric.Point(pointer.x, pointer.y);

    var circleRadius = fabric.util.getRandomInt(
      Math.max(0, this.width - 20), this.width + 20) / 2;

    var circleColor = new fabric.Color(this.color).setAlpha(fabric.util.getRandomInt(0, 100) / 100).toRgba();

    pointerPoint.radius = circleRadius;
    pointerPoint.fill = circleColor;

    this.points.push(pointerPoint);

    return pointerPoint;
  }
});

/**
 * SprayBrush class
 * @class fabric.SprayBrush
 */
fabric.SprayBrush = fabric.util.createClass(fabric.BaseBrush, /** @lends fabric.SprayBrush.prototype */ {

  /**
   * Width of a spray
   * @type Number
   * @default
   */
  width: 10,

  /**
   * Density of a spray (number of dots per chunk)
   * @type Number
   * @default
   */
  density: 20,

  /**
   * Width of spray dots
   * @type Number
   * @default
   */
  dotWidth: 1,

  /**
   * Width variance of spray dots
   * @type Number
   * @default
   */
  dotWidthVariance: 1,

  /**
   * Whether opacity of a dot should be random
   * @type Boolean
   * @default
   */
  randomOpacity: false,

  /**
   * Whether overlapping dots (rectangles) should be removed (for performance reasons)
   * @type Boolean
   * @default
   */
  optimizeOverlapping: true,

  /**
   * Constructor
   * @param {fabric.Canvas} canvas
   * @return {fabric.SprayBrush} Instance of a spray brush
   */
  initialize: function (canvas) {
    this.canvas = canvas;
    this.sprayChunks = [];
  },

  /**
   * Invoked on mouse down
   * @param {Object} pointer
   */
  onMouseDown: function (pointer) {
    this.sprayChunks.length = 0;
    this.canvas.clearContext(this.canvas.contextTop);
    this._setShadow();

    this.addSprayChunk(pointer);
    this.render();
  },

  /**
   * Invoked on mouse move
   * @param {Object} pointer
   */
  onMouseMove: function (pointer) {
    this.addSprayChunk(pointer);
    this.render();
  },

  /**
   * Invoked on mouse up
   */
  onMouseUp: function () {
    var originalRenderOnAddRemove = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;

    var rects = [];

    for (var i = 0, ilen = this.sprayChunks.length; i < ilen; i++) {
      var sprayChunk = this.sprayChunks[i];

      for (var j = 0, jlen = sprayChunk.length; j < jlen; j++) {

        var rect = new fabric.Rect({
          width: sprayChunk[j].width,
          height: sprayChunk[j].width,
          left: sprayChunk[j].x + 1,
          top: sprayChunk[j].y + 1,
          originX: 'center',
          originY: 'center',
          fill: this.color
        });

        this.shadow && rect.setShadow(this.shadow);
        rects.push(rect);
      }
    }

    if (this.optimizeOverlapping) {
      rects = this._getOptimizedRects(rects);
    }

    var group = new fabric.Group(rects, {originX: 'center', originY: 'center'});
    this.canvas.add(group);
    this.canvas.fire('path:created', {path: group});

    this.canvas.clearContext(this.canvas.contextTop);
    this._resetShadow();
    this.canvas.renderOnAddRemove = originalRenderOnAddRemove;
    this.canvas.renderAll();
  },

  _getOptimizedRects: function (rects) {

    // avoid creating duplicate rects at the same coordinates
    var uniqueRects = {}, key;

    for (var i = 0, len = rects.length; i < len; i++) {
      key = rects[i].left + '' + rects[i].top;
      if (!uniqueRects[key]) {
        uniqueRects[key] = rects[i];
      }
    }
    var uniqueRectsArray = [];
    for (key in uniqueRects) {
      uniqueRectsArray.push(uniqueRects[key]);
    }

    return uniqueRectsArray;
  },

  /**
   * Renders brush
   */
  render: function () {
    var ctx = this.canvas.contextTop;
    ctx.fillStyle = this.color;
    ctx.save();

    for (var i = 0, len = this.sprayChunkPoints.length; i < len; i++) {
      var point = this.sprayChunkPoints[i];
      if (typeof point.opacity !== 'undefined') {
        ctx.globalAlpha = point.opacity;
      }
      ctx.fillRect(point.x, point.y, point.width, point.width);
    }
    ctx.restore();
  },

  /**
   * @param {Object} pointer
   */
  addSprayChunk: function (pointer) {
    this.sprayChunkPoints = [];

    var x, y, width, radius = this.width / 2;

    for (var i = 0; i < this.density; i++) {

      x = fabric.util.getRandomInt(pointer.x - radius, pointer.x + radius);
      y = fabric.util.getRandomInt(pointer.y - radius, pointer.y + radius);

      if (this.dotWidthVariance) {
        width = fabric.util.getRandomInt(
          // bottom clamp width to 1
          Math.max(1, this.dotWidth - this.dotWidthVariance),
          this.dotWidth + this.dotWidthVariance);
      } else {
        width = this.dotWidth;
      }

      var point = {x: x, y: y, width: width};

      if (this.randomOpacity) {
        point.opacity = fabric.util.getRandomInt(0, 100) / 100;
      }

      this.sprayChunkPoints.push(point);
    }

    this.sprayChunks.push(this.sprayChunkPoints);
  }
});

/**
 * PatternBrush class
 * @class fabric.PatternBrush
 * @extends fabric.BaseBrush
 */
fabric.PatternBrush = fabric.util.createClass(fabric.PencilBrush, /** @lends fabric.PatternBrush.prototype */ {

  getPatternSrc: function () {

    var dotWidth = 20,
      dotDistance = 5,
      patternCanvas = fabric.document.createElement('canvas'),
      patternCtx = patternCanvas.getContext('2d');

    patternCanvas.width = patternCanvas.height = dotWidth + dotDistance;

    patternCtx.fillStyle = this.color;
    patternCtx.beginPath();
    patternCtx.arc(dotWidth / 2, dotWidth / 2, dotWidth / 2, 0, Math.PI * 2, false);
    patternCtx.closePath();
    patternCtx.fill();

    return patternCanvas;
  },

  getPatternSrcFunction: function () {
    return String(this.getPatternSrc).replace('this.color', '"' + this.color + '"');
  },

  /**
   * Creates "pattern" instance property
   */
  getPattern: function () {
    return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), 'repeat');
  },

  /**
   * Sets brush styles
   */
  _setBrushStyles: function () {
    this.callSuper('_setBrushStyles');
    this.canvas.contextTop.strokeStyle = this.getPattern();
  },

  /**
   * Creates path
   */
  createPath: function (pathData) {
    var path = this.callSuper('createPath', pathData);
    path.stroke = new fabric.Pattern({
      source: this.source || this.getPatternSrcFunction()
    });
    return path;
  }
});

(function () {

  var getPointer = fabric.util.getPointer,
    degreesToRadians = fabric.util.degreesToRadians,
    radiansToDegrees = fabric.util.radiansToDegrees,
    atan2 = Math.atan2,
    abs = Math.abs,

    STROKE_OFFSET = 0.5;

  /**
   * Canvas class
   * @class fabric.Canvas
   * @extends fabric.StaticCanvas
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#canvas}
   * @see {@link fabric.Canvas#initialize} for constructor definition
   *
   * @fires object:modified
   * @fires object:rotating
   * @fires object:scaling
   * @fires object:moving
   * @fires object:selected
   *
   * @fires before:selection:cleared
   * @fires selection:cleared
   * @fires selection:created
   *
   * @fires path:created
   * @fires mouse:down
   * @fires mouse:move
   * @fires mouse:up
   * @fires mouse:over
   * @fires mouse:out
   *
   */
  fabric.Canvas = fabric.util.createClass(fabric.StaticCanvas, /** @lends fabric.Canvas.prototype */ {

    /**
     * Constructor
     * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function (el, options) {
      options || (options = {});

      this._initStatic(el, options);
      this._initInteractive();
      this._createCacheCanvas();

      fabric.Canvas.activeInstance = this;
    },

    /**
     * When true, objects can be transformed by one side (unproportionally)
     * @type Boolean
     * @default
     */
    uniScaleTransform: false,

    /**
     * When true, objects use center point as the origin of scale transformation.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredScaling: false,

    /**
     * When true, objects use center point as the origin of rotate transformation.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredRotation: false,

    /**
     * Indicates that canvas is interactive. This property should not be changed.
     * @type Boolean
     * @default
     */
    interactive: true,

    /**
     * Indicates whether group selection should be enabled
     * @type Boolean
     * @default
     */
    selection: true,

    /**
     * Color of selection
     * @type String
     * @default
     */
    selectionColor: 'rgba(100, 100, 255, 0.3)', // blue

    /**
     * Default dash array pattern
     * If not empty the selection border is dashed
     * @type Array
     */
    selectionDashArray: [],

    /**
     * Color of the border of selection (usually slightly darker than color of selection itself)
     * @type String
     * @default
     */
    selectionBorderColor: 'rgba(255, 255, 255, 0.3)',

    /**
     * Width of a line used in object/group selection
     * @type Number
     * @default
     */
    selectionLineWidth: 1,

    /**
     * Default cursor value used when hovering over an object on canvas
     * @type String
     * @default
     */
    hoverCursor: 'move',

    /**
     * Default cursor value used when moving an object on canvas
     * @type String
     * @default
     */
    moveCursor: 'move',

    /**
     * Default cursor value used for the entire canvas
     * @type String
     * @default
     */
    defaultCursor: 'default',

    /**
     * Cursor value used during free drawing
     * @type String
     * @default
     */
    freeDrawingCursor: 'crosshair',

    /**
     * Cursor value used for rotation point
     * @type String
     * @default
     */
    rotationCursor: 'crosshair',

    /**
     * Default element class that's given to wrapper (div) element of canvas
     * @type String
     * @default
     */
    containerClass: 'canvas-container',

    /**
     * When true, object detection happens on per-pixel basis rather than on per-bounding-box
     * @type Boolean
     * @default
     */
    perPixelTargetFind: false,

    /**
     * Number of pixels around target pixel to tolerate (consider active) during object detection
     * @type Number
     * @default
     */
    targetFindTolerance: 0,

    /**
     * When true, target detection is skipped when hovering over canvas. This can be used to improve performance.
     * @type Boolean
     * @default
     */
    skipTargetFind: false,

    /**
     * @private
     */
    _initInteractive: function () {
      this._currentTransform = null;
      this._groupSelector = null;
      this._initWrapperElement();
      this._createUpperCanvas();
      this._initEventListeners();

      this.freeDrawingBrush = fabric.PencilBrush && new fabric.PencilBrush(this);

      this.calcOffset();
    },

    /**
     * Resets the current transform to its original values and chooses the type of resizing based on the event
     * @private
     * @param {Event} e Event object fired on mousemove
     */
    _resetCurrentTransform: function (e) {
      var t = this._currentTransform;

      t.target.set({
        'scaleX': t.original.scaleX,
        'scaleY': t.original.scaleY,
        'left': t.original.left,
        'top': t.original.top
      });

      if (this._shouldCenterTransform(e, t.target)) {
        if (t.action === 'rotate') {
          this._setOriginToCenter(t.target);
        } else {
          if (t.originX !== 'center') {
            if (t.originX === 'right') {
              t.mouseXSign = -1;
            } else {
              t.mouseXSign = 1;
            }
          }
          if (t.originY !== 'center') {
            if (t.originY === 'bottom') {
              t.mouseYSign = -1;
            } else {
              t.mouseYSign = 1;
            }
          }

          t.originX = 'center';
          t.originY = 'center';
        }
      } else {
        t.originX = t.original.originX;
        t.originY = t.original.originY;
      }
    },

    /**
     * Checks if point is contained within an area of given object
     * @param {Event} e Event object
     * @param {fabric.Object} target Object to test against
     * @return {Boolean} true if point is contained within an area of given object
     */
    containsPoint: function (e, target) {
      var pointer = this.getPointer(e),
        xy = this._normalizePointer(target, pointer);

      // http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
      // http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
      return (target.containsPoint(xy) || target._findTargetCorner(e, this._offset));
    },

    /**
     * @private
     */
    _normalizePointer: function (object, pointer) {
      var activeGroup = this.getActiveGroup(),
        x = pointer.x,
        y = pointer.y;

      var isObjectInGroup = (
        activeGroup &&
        object.type !== 'group' &&
        activeGroup.contains(object)
      );

      if (isObjectInGroup) {
        x -= activeGroup.left;
        y -= activeGroup.top;
      }
      return {x: x, y: y};
    },

    /**
     * Returns true if object is transparent at a certain location
     * @param {fabric.Object} target Object to check
     * @param {Number} x Left coordinate
     * @param {Number} y Top coordinate
     * @return {Boolean}
     */
    isTargetTransparent: function (target, x, y) {
      var hasBorders = target.hasBorders,
        transparentCorners = target.transparentCorners;

      target.hasBorders = target.transparentCorners = false;

      this._draw(this.contextCache, target);

      target.hasBorders = hasBorders;
      target.transparentCorners = transparentCorners;

      var isTransparent = fabric.util.isTransparent(
        this.contextCache, x, y, this.targetFindTolerance);

      this.clearContext(this.contextCache);

      return isTransparent;
    },

    /**
     * @private
     * @param {Event} e Event object
     * @param {fabric.Object} target
     */
    _shouldClearSelection: function (e, target) {
      var activeGroup = this.getActiveGroup(),
        activeObject = this.getActiveObject();

      return (
        !target
        ||
        (target &&
          activeGroup &&
          !activeGroup.contains(target) &&
          activeGroup !== target &&
          !e.shiftKey)
        ||
        (target && !target.evented)
        ||
        (target &&
          !target.selectable &&
          activeObject &&
          activeObject !== target)
      );
    },

    /**
     * @private
     * @param {Event} e Event object
     * @param {fabric.Object} target
     */
    _shouldCenterTransform: function (e, target) {
      if (!target) return;

      var t = this._currentTransform,
        centerTransform;

      if (t.action === 'scale' || t.action === 'scaleX' || t.action === 'scaleY') {
        centerTransform = this.centeredScaling || target.centeredScaling;
      } else if (t.action === 'rotate') {
        centerTransform = this.centeredRotation || target.centeredRotation;
      }

      return centerTransform ? !e.altKey : e.altKey;
    },

    /**
     * @private
     */
    _getOriginFromCorner: function (target, corner) {
      var origin = {
        x: target.originX,
        y: target.originY
      };

      if (corner === 'ml' || corner === 'tl' || corner === 'bl') {
        origin.x = 'right';
      } else if (corner === 'mr' || corner === 'tr' || corner === 'br') {
        origin.x = 'left';
      }

      if (corner === 'tl' || corner === 'mt' || corner === 'tr') {
        origin.y = 'bottom';
      } else if (corner === 'bl' || corner === 'mb' || corner === 'br') {
        origin.y = 'top';
      }

      return origin;
    },

    /**
     * @private
     */
    _getActionFromCorner: function (target, corner) {
      var action = 'drag';
      if (corner) {
        action = (corner === 'ml' || corner === 'mr')
          ? 'scaleX'
          : (corner === 'mt' || corner === 'mb')
            ? 'scaleY'
            : corner === 'mtr'
              ? 'rotate'
              : 'scale';
      }
      return action;
    },

    /**
     * @private
     * @param {Event} e Event object
     * @param {fabric.Object} target
     */
    _setupCurrentTransform: function (e, target) {
      if (!target) return;

      var corner = target._findTargetCorner(e, this._offset),
        pointer = getPointer(e, target.canvas.upperCanvasEl),
        action = this._getActionFromCorner(target, corner),
        origin = this._getOriginFromCorner(target, corner);

      this._currentTransform = {
        target: target,
        action: action,
        scaleX: target.scaleX,
        scaleY: target.scaleY,
        offsetX: pointer.x - target.left,
        offsetY: pointer.y - target.top,
        originX: origin.x,
        originY: origin.y,
        ex: pointer.x,
        ey: pointer.y,
        left: target.left,
        top: target.top,
        theta: degreesToRadians(target.angle),
        width: target.width * target.scaleX,
        mouseXSign: 1,
        mouseYSign: 1
      };

      this._currentTransform.original = {
        left: target.left,
        top: target.top,
        scaleX: target.scaleX,
        scaleY: target.scaleY,
        originX: origin.x,
        originY: origin.y
      };

      // mrnix
      if (target.x1) {
        this._currentTransform.original.x1 = target.x1;
        this._currentTransform.original.y1 = target.y1;
        this._currentTransform.original.x2 = target.x2;
        this._currentTransform.original.y2 = target.y2;
      }
      // mrnix

      this._resetCurrentTransform(e);
    },

    /**
     * Translates object by "setting" its left/top
     * @private
     * @param x {Number} pointer's x coordinate
     * @param y {Number} pointer's y coordinate
     */
    _translateObject: function (x, y) {
      var target = this._currentTransform.target;

      // mrnix
      if (target.translate) {
        target.translate && target.translate(this._currentTransform.original, x, y);
        return;
      }

      if (!target.get('lockMovementX')) {
        var left = x - this._currentTransform.offsetX;
        target.set('left', left);
        target._left = left;
      }
      if (!target.get('lockMovementY')) {
        var top = y - this._currentTransform.offsetY;
        target.set('top', top);
        target._top = top;
      }

    },

    /**
     * Scales object by invoking its scaleX/scaleY methods
     * @private
     * @param x {Number} pointer's x coordinate
     * @param y {Number} pointer's y coordinate
     * @param by {String} Either 'x' or 'y' - specifies dimension constraint by which to scale an object.
     *                    When not provided, an object is scaled by both dimensions equally
     */
    _scaleObject: function (x, y, by) {
      var t = this._currentTransform,
        offset = this._offset,
        target = t.target,
        lockScalingX = target.get('lockScalingX'),
        lockScalingY = target.get('lockScalingY');

      if (lockScalingX && lockScalingY) return;

      // Get the constraint point
      var constraintPosition = target.translateToOriginPoint(target.getCenterPoint(), t.originX, t.originY);
      var localMouse = target.toLocalPoint(new fabric.Point(x - offset.left, y - offset.top), t.originX, t.originY);

      this._setLocalMouse(localMouse, t);

      // Actually scale the object
      this._setObjectScale(localMouse, t, lockScalingX, lockScalingY, by);

      // Make sure the constraints apply
      target.setPositionByOrigin(constraintPosition, t.originX, t.originY);
    },

    /**
     * @private
     */
    _setObjectScale: function (localMouse, transform, lockScalingX, lockScalingY, by) {
      var target = transform.target;

      transform.newScaleX = target.scaleX;
      transform.newScaleY = target.scaleY;

      if (by === 'equally' && !lockScalingX && !lockScalingY) {
        this._scaleObjectEqually(localMouse, target, transform);
      } else if (!by) {
        transform.newScaleX = localMouse.x / (target.width + target.strokeWidth);
        transform.newScaleY = localMouse.y / (target.height + target.strokeWidth);

        lockScalingX || target.set('scaleX', transform.newScaleX);
        lockScalingY || target.set('scaleY', transform.newScaleY);
      } else if (by === 'x' && !target.get('lockUniScaling')) {
        transform.newScaleX = localMouse.x / (target.width + target.strokeWidth);
        lockScalingX || target.set('scaleX', transform.newScaleX);
      } else if (by === 'y' && !target.get('lockUniScaling')) {
        transform.newScaleY = localMouse.y / (target.height + target.strokeWidth);
        lockScalingY || target.set('scaleY', transform.newScaleY);
      }

      this._flipObject(transform);
    },

    /**
     * @private
     */
    _scaleObjectEqually: function (localMouse, target, transform) {

      var dist = localMouse.y + localMouse.x;

      var lastDist = (target.height + (target.strokeWidth)) * transform.original.scaleY +
        (target.width + (target.strokeWidth)) * transform.original.scaleX;

      // We use transform.scaleX/Y instead of target.scaleX/Y
      // because the object may have a min scale and we'll loose the proportions
      transform.newScaleX = transform.original.scaleX * dist / lastDist;
      transform.newScaleY = transform.original.scaleY * dist / lastDist;

      target.set('scaleX', transform.newScaleX);
      target.set('scaleY', transform.newScaleY);
    },

    /**
     * @private
     */
    _flipObject: function (transform) {
      if (transform.newScaleX < 0) {
        if (transform.originX === 'left') {
          transform.originX = 'right';
        } else if (transform.originX === 'right') {
          transform.originX = 'left';
        }
      }

      if (transform.newScaleY < 0) {
        if (transform.originY === 'top') {
          transform.originY = 'bottom';
        } else if (transform.originY === 'bottom') {
          transform.originY = 'top';
        }
      }
    },

    /**
     * @private
     */
    _setLocalMouse: function (localMouse, t) {
      var target = t.target;

      if (t.originX === 'right') {
        localMouse.x *= -1;
      } else if (t.originX === 'center') {
        localMouse.x *= t.mouseXSign * 2;

        if (localMouse.x < 0) {
          t.mouseXSign = -t.mouseXSign;
        }
      }

      if (t.originY === 'bottom') {
        localMouse.y *= -1;
      } else if (t.originY === 'center') {
        localMouse.y *= t.mouseYSign * 2;

        if (localMouse.y < 0) {
          t.mouseYSign = -t.mouseYSign;
        }
      }

      // adjust the mouse coordinates when dealing with padding
      if (abs(localMouse.x) > target.padding) {
        if (localMouse.x < 0) {
          localMouse.x += target.padding;
        } else {
          localMouse.x -= target.padding;
        }
      } else { // mouse is within the padding, set to 0
        localMouse.x = 0;
      }

      if (abs(localMouse.y) > target.padding) {
        if (localMouse.y < 0) {
          localMouse.y += target.padding;
        } else {
          localMouse.y -= target.padding;
        }
      } else {
        localMouse.y = 0;
      }
    },

    /**
     * Rotates object by invoking its rotate method
     * @private
     * @param x {Number} pointer's x coordinate
     * @param y {Number} pointer's y coordinate
     */
    _rotateObject: function (x, y) {

      var t = this._currentTransform,
        o = this._offset;

      if (t.target.get('lockRotation')) return;

      var lastAngle = atan2(t.ey - t.top - o.top, t.ex - t.left - o.left),
        curAngle = atan2(y - t.top - o.top, x - t.left - o.left),
        angle = radiansToDegrees(curAngle - lastAngle + t.theta);

      // normalize angle to positive value
      if (angle < 0) {
        angle = 360 + angle;
      }

      t.target.angle = angle;
    },

    /**
     * @private
     */
    _setCursor: function (value) {
      this.upperCanvasEl.style.cursor = value;
    },

    /**
     * @private
     */
    _resetObjectTransform: function (target) {
      target.scaleX = 1;
      target.scaleY = 1;
      target.setAngle(0);
    },

    /**
     * @private
     */
    _drawSelection: function () {
      var ctx = this.contextTop,
        groupSelector = this._groupSelector,
        left = groupSelector.left,
        top = groupSelector.top,
        aleft = abs(left),
        atop = abs(top);

      ctx.fillStyle = this.selectionColor;

      ctx.fillRect(
        groupSelector.ex - ((left > 0) ? 0 : -left),
        groupSelector.ey - ((top > 0) ? 0 : -top),
        aleft,
        atop
      );

      ctx.lineWidth = this.selectionLineWidth;
      ctx.strokeStyle = this.selectionBorderColor;

      // selection border
      if (this.selectionDashArray.length > 1) {

        var px = groupSelector.ex + STROKE_OFFSET - ((left > 0) ? 0 : aleft);
        var py = groupSelector.ey + STROKE_OFFSET - ((top > 0) ? 0 : atop);

        ctx.beginPath();

        fabric.util.drawDashedLine(ctx, px, py, px + aleft, py, this.selectionDashArray);
        fabric.util.drawDashedLine(ctx, px, py + atop - 1, px + aleft, py + atop - 1, this.selectionDashArray);
        fabric.util.drawDashedLine(ctx, px, py, px, py + atop, this.selectionDashArray);
        fabric.util.drawDashedLine(ctx, px + aleft - 1, py, px + aleft - 1, py + atop, this.selectionDashArray);

        ctx.closePath();
        ctx.stroke();
      } else {
        ctx.strokeRect(
          groupSelector.ex + STROKE_OFFSET - ((left > 0) ? 0 : aleft),
          groupSelector.ey + STROKE_OFFSET - ((top > 0) ? 0 : atop),
          aleft,
          atop
        );
      }
    },

    /**
     * @private
     */
    _isLastRenderedObject: function (e) {
      return (
        this.controlsAboveOverlay &&
        this.lastRenderedObjectWithControlsAboveOverlay &&
        this.lastRenderedObjectWithControlsAboveOverlay.visible &&
        this.containsPoint(e, this.lastRenderedObjectWithControlsAboveOverlay) &&
        this.lastRenderedObjectWithControlsAboveOverlay._findTargetCorner(e, this._offset));
    },

    /**
     * Method that determines what object we are clicking on
     * @param {Event} e mouse event
     * @param {Boolean} skipGroup when true, group is skipped and only objects are traversed through
     */
    findTarget: function (e, skipGroup) {
      if (this.skipTargetFind) return;

      if (this._isLastRenderedObject(e)) {
        return this.lastRenderedObjectWithControlsAboveOverlay;
      }

      // first check current group (if one exists)
      var activeGroup = this.getActiveGroup();
      if (activeGroup && !skipGroup && this.containsPoint(e, activeGroup)) {
        return activeGroup;
      }

      var target = this._searchPossibleTargets(e);
      this._fireOverOutEvents(target);
      return target;
    },

    /**
     * @private
     */
    _fireOverOutEvents: function (target) {
      if (target) {
        if (this._hoveredTarget !== target) {
          this.fire('mouse:over', {target: target});
          target.fire('mouseover');
          if (this._hoveredTarget) {
            this.fire('mouse:out', {target: this._hoveredTarget});
            this._hoveredTarget.fire('mouseout');
          }
          this._hoveredTarget = target;
        }
      } else if (this._hoveredTarget) {
        this.fire('mouse:out', {target: this._hoveredTarget});
        this._hoveredTarget.fire('mouseout');
        this._hoveredTarget = null;
      }
    },

    /**
     * @private
     */
    _searchPossibleTargets: function (e) {

      // Cache all targets where their bounding box contains point.
      var possibleTargets = [],
        target,
        pointer = this.getPointer(e);

      for (var i = this._objects.length; i--;) {
        if (this._objects[i] &&
          this._objects[i].visible &&
          this._objects[i].evented &&
          this.containsPoint(e, this._objects[i])) {

          if (this.perPixelTargetFind || this._objects[i].perPixelTargetFind) {
            possibleTargets[possibleTargets.length] = this._objects[i];
          } else {
            target = this._objects[i];
            this.relatedTarget = target;
            break;
          }
        }
      }

      for (var j = 0, len = possibleTargets.length; j < len; j++) {
        pointer = this.getPointer(e);
        var isTransparent = this.isTargetTransparent(possibleTargets[j], pointer.x, pointer.y);
        if (!isTransparent) {
          target = possibleTargets[j];
          this.relatedTarget = target;
          break;
        }
      }

      return target;
    },

    /**
     * Returns pointer coordinates relative to canvas.
     * @param {Event} e
     * @return {Object} object with "x" and "y" number values
     */
    getPointer: function (e) {
      var pointer = getPointer(e, this.upperCanvasEl);
      return {
        x: pointer.x - this._offset.left,
        y: pointer.y - this._offset.top
      };
    },

    /**
     * @private
     * @param {HTMLElement|String} canvasEl Canvas element
     * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
     */
    _createUpperCanvas: function () {
      var lowerCanvasClass = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, '');

      this.upperCanvasEl = this._createCanvasElement();
      fabric.util.addClass(this.upperCanvasEl, 'upper-canvas ' + lowerCanvasClass);

      this.wrapperEl.appendChild(this.upperCanvasEl);

      this._copyCanvasStyle(this.lowerCanvasEl, this.upperCanvasEl);
      this._applyCanvasStyle(this.upperCanvasEl);
      this.contextTop = this.upperCanvasEl.getContext('2d');
    },

    /**
     * @private
     */
    _createCacheCanvas: function () {
      this.cacheCanvasEl = this._createCanvasElement();
      this.cacheCanvasEl.setAttribute('width', this.width);
      this.cacheCanvasEl.setAttribute('height', this.height);
      this.contextCache = this.cacheCanvasEl.getContext('2d');
    },

    /**
     * @private
     * @param {Number} width
     * @param {Number} height
     */
    _initWrapperElement: function () {
      this.wrapperEl = fabric.util.wrapElement(this.lowerCanvasEl, 'div', {
        'class': this.containerClass
      });
      fabric.util.setStyle(this.wrapperEl, {
        width: this.getWidth() + 'px',
        height: this.getHeight() + 'px',
        position: 'relative'
      });
      fabric.util.makeElementUnselectable(this.wrapperEl);
    },

    /**
     * @private
     * @param {Element} element
     */
    _applyCanvasStyle: function (element) {
      var width = this.getWidth() || element.width,
        height = this.getHeight() || element.height;

      fabric.util.setStyle(element, {
        position: 'absolute',
        width: width + 'px',
        height: height + 'px',
        left: 0,
        top: 0
      });
      element.width = width;
      element.height = height;
      fabric.util.makeElementUnselectable(element);
    },

    /**
     * Copys the the entire inline style from one element (fromEl) to another (toEl)
     * @private
     * @param {Element} fromEl Element style is copied from
     * @param {Element} toEl Element copied style is applied to
     */
    _copyCanvasStyle: function (fromEl, toEl) {
      toEl.style.cssText = fromEl.style.cssText;
    },

    /**
     * Returns context of canvas where object selection is drawn
     * @return {CanvasRenderingContext2D}
     */
    getSelectionContext: function () {
      return this.contextTop;
    },

    /**
     * Returns &lt;canvas> element on which object selection is drawn
     * @return {HTMLCanvasElement}
     */
    getSelectionElement: function () {
      return this.upperCanvasEl;
    },

    /**
     * @private
     * @param {Object} object
     */
    _setActiveObject: function (object) {
      if (this._activeObject) {
        this._activeObject.set('active', false);
      }
      this._activeObject = object;
      object.set('active', true);
    },

    /**
     * Sets given object as the only active object on canvas
     * @param {fabric.Object} object Object to set as an active one
     * @param {Event} [e] Event (passed along when firing "object:selected")
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setActiveObject: function (object, e) {
      this._setActiveObject(object);
      this.renderAll();
      this.fire('object:selected', {target: object, e: e});
      object.fire('selected', {e: e});
      return this;
    },

    /**
     * Returns currently active object
     * @return {fabric.Object} active object
     */
    getActiveObject: function () {
      return this._activeObject;
    },

    /**
     * @private
     */
    _discardActiveObject: function () {
      if (this._activeObject) {
        this._activeObject.set('active', false);
      }
      this._activeObject = null;
    },

    /**
     * Discards currently active object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    discardActiveObject: function (e) {
      this._discardActiveObject();
      this.renderAll();
      this.fire('selection:cleared', {e: e});
      return this;
    },

    /**
     * @private
     * @param {fabric.Group} group
     */
    _setActiveGroup: function (group) {
      this._activeGroup = group;
      if (group) {
        group.canvas = this;
        group.set('active', true);
      }
    },

    /**
     * Sets active group to a speicified one
     * @param {fabric.Group} group Group to set as a current one
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setActiveGroup: function (group, e) {
      this._setActiveGroup(group);
      if (group) {
        this.fire('object:selected', {target: group, e: e});
        group.fire('selected', {e: e});
      }
      return this;
    },

    /**
     * Returns currently active group
     * @return {fabric.Group} Current group
     */
    getActiveGroup: function () {
      return this._activeGroup;
    },

    /**
     * @private
     */
    _discardActiveGroup: function () {
      var g = this.getActiveGroup();
      if (g) {
        g.destroy();
      }
      this.setActiveGroup(null);
    },

    /**
     * Discards currently active group
     * @return {fabric.Canvas} thisArg
     */
    discardActiveGroup: function (e) {
      this._discardActiveGroup();
      this.fire('selection:cleared', {e: e});
      return this;
    },

    /**
     * Deactivates all objects on canvas, removing any active group or object
     * @return {fabric.Canvas} thisArg
     */
    deactivateAll: function () {
      var allObjects = this.getObjects(),
        i = 0,
        len = allObjects.length;
      for (; i < len; i++) {
        allObjects[i].set('active', false);
      }
      this._discardActiveGroup();
      this._discardActiveObject();
      return this;
    },

    /**
     * Deactivates all objects and dispatches appropriate events
     * @return {fabric.Canvas} thisArg
     */
    deactivateAllWithDispatch: function (e) {
      var activeObject = this.getActiveGroup() || this.getActiveObject();
      if (activeObject) {
        this.fire('before:selection:cleared', {target: activeObject, e: e});
      }
      this.deactivateAll();
      if (activeObject) {
        this.fire('selection:cleared', {e: e});
      }
      return this;
    },

    /**
     * Draws objects' controls (borders/controls)
     * @param {CanvasRenderingContext2D} ctx Context to render controls on
     */
    drawControls: function (ctx) {
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        this._drawGroupControls(ctx, activeGroup);
      } else {
        this._drawObjectsControls(ctx);
      }
    },

    /**
     * @private
     */
    _drawGroupControls: function (ctx, activeGroup) {
      this._drawControls(ctx, activeGroup, 'Group');
    },

    /**
     * @private
     */
    _drawObjectsControls: function (ctx) {
      for (var i = 0, len = this._objects.length; i < len; ++i) {
        if (!this._objects[i] || !this._objects[i].active) continue;
        this._drawControls(ctx, this._objects[i], 'Object');
        this.lastRenderedObjectWithControlsAboveOverlay = this._objects[i];
      }
    },

    /**
     * @private
     */
    _drawControls: function (ctx, object, klass) {
      ctx.save();
      fabric[klass].prototype.transform.call(object, ctx);
      object.drawBorders(ctx).drawControls(ctx);
      ctx.restore();
    }
  });

  // copying static properties manually to work around Opera's bug,
  // where "prototype" property is enumerable and overrides existing prototype
  for (var prop in fabric.StaticCanvas) {
    if (prop !== 'prototype') {
      fabric.Canvas[prop] = fabric.StaticCanvas[prop];
    }
  }

  if (fabric.isTouchSupported) {
    /** @ignore */
    fabric.Canvas.prototype._setCursorFromEvent = function () {
    };
  }

  /**
   * Indicates if canvas handlers are initialized for fabric.IText objects
   * @static
   * @memberof fabric.Canvas
   * @type Boolean
   */
  fabric.Canvas._hasITextHandlers = false;

  /**
   * @class fabric.Element
   * @alias fabric.Canvas
   * @deprecated Use {@link fabric.Canvas} instead.
   * @constructor
   */
  fabric.Element = fabric.Canvas;
})();

(function () {

  var cursorMap = [
      'n-resize',
      'ne-resize',
      'e-resize',
      'se-resize',
      's-resize',
      'sw-resize',
      'w-resize',
      'nw-resize'
    ],
    cursorOffset = {
      'mt': 0, // n
      'tr': 1, // ne
      'mr': 2, // e
      'br': 3, // se
      'mb': 4, // s
      'bl': 5, // sw
      'ml': 6, // w
      'tl': 7 // nw
    },
    addListener = fabric.util.addListener,
    removeListener = fabric.util.removeListener,
    getPointer = fabric.util.getPointer;

  fabric.util.object.extend(fabric.Canvas.prototype, /** @lends fabric.Canvas.prototype */ {

    /**
     * Adds mouse listeners to canvas
     * @private
     */
    _initEventListeners: function () {

      this._bindEvents();

      addListener(fabric.window, 'resize', this._onResize);

      // mouse events
      addListener(this.upperCanvasEl, 'mousedown', this._onMouseDown);
      addListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      addListener(this.upperCanvasEl, 'mousewheel', this._onMouseWheel);

      // touch events
      addListener(this.upperCanvasEl, 'touchstart', this._onMouseDown);
      addListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);

      if (typeof Event !== 'undefined' && 'add' in Event) {
        Event.add(this.upperCanvasEl, 'gesture', this._onGesture);
        Event.add(this.upperCanvasEl, 'drag', this._onDrag);
        Event.add(this.upperCanvasEl, 'orientation', this._onOrientationChange);
        Event.add(this.upperCanvasEl, 'shake', this._onShake);
      }
    },

    /**
     * @private
     */
    _bindEvents: function () {
      this._onMouseDown = this._onMouseDown.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onMouseUp = this._onMouseUp.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onGesture = this._onGesture.bind(this);
      this._onDrag = this._onDrag.bind(this);
      this._onShake = this._onShake.bind(this);
      this._onOrientationChange = this._onOrientationChange.bind(this);
      this._onMouseWheel = this._onMouseWheel.bind(this);
    },

    /**
     * Removes all event listeners
     */
    removeListeners: function () {
      removeListener(fabric.window, 'resize', this._onResize);

      removeListener(this.upperCanvasEl, 'mousedown', this._onMouseDown);
      removeListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      removeListener(this.upperCanvasEl, 'mousewheel', this._onMouseWheel);

      removeListener(this.upperCanvasEl, 'touchstart', this._onMouseDown);
      removeListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);
      removeListener(fabric.document, 'keypress', this.onKeyPress);
      removeListener(fabric.document, 'keydown', this.onKeyDown);
      removeListener(fabric.document, 'input', this.onInput);

      if (typeof Event !== 'undefined' && 'remove' in Event) {
        Event.remove(this.upperCanvasEl, 'gesture', this._onGesture);
        Event.remove(this.upperCanvasEl, 'drag', this._onDrag);
        Event.remove(this.upperCanvasEl, 'orientation', this._onOrientationChange);
        Event.remove(this.upperCanvasEl, 'shake', this._onShake);
      }
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js gesture
     * @param {Event} [self] Inner Event object
     */
    _onGesture: function (e, s) {
      this.__onTransformGesture && this.__onTransformGesture(e, s);
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js drag
     * @param {Event} [self] Inner Event object
     */
    _onDrag: function (e, s) {
      this.__onDrag && this.__onDrag(e, s);
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js wheel event
     * @param {Event} [self] Inner Event object
     */
    _onMouseWheel: function (e, s) {
      this.__onMouseWheel && this.__onMouseWheel(e, s);
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js orientation change
     * @param {Event} [self] Inner Event object
     */
    _onOrientationChange: function (e, s) {
      this.__onOrientationChange && this.__onOrientationChange(e, s);
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js shake
     * @param {Event} [self] Inner Event object
     */
    _onShake: function (e, s) {
      this.__onShake && this.__onShake(e, s);
    },

    /**
     * @private
     * @param {Event} e Event object fired on mousedown
     */
    _onMouseDown: function (e) {
      this.__onMouseDown(e);

      addListener(fabric.document, 'mouseup', this._onMouseUp);
      addListener(fabric.document, 'touchend', this._onMouseUp);

      addListener(fabric.document, 'mousemove', this._onMouseMove);
      addListener(fabric.document, 'touchmove', this._onMouseMove);

      removeListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      removeListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);
    },

    /**
     * @private
     * @param {Event} e Event object fired on mouseup
     */
    _onMouseUp: function (e) {
      this.__onMouseUp(e);

      removeListener(fabric.document, 'mouseup', this._onMouseUp);
      removeListener(fabric.document, 'touchend', this._onMouseUp);

      removeListener(fabric.document, 'mousemove', this._onMouseMove);
      removeListener(fabric.document, 'touchmove', this._onMouseMove);

      addListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      addListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);
    },

    /**
     * @private
     * @param {Event} e Event object fired on mousemove
     */
    _onMouseMove: function (e) {
      !this.allowTouchScrolling && e.preventDefault && e.preventDefault();
      this.__onMouseMove(e);
    },

    /**
     * @private
     */
    _onResize: function () {
      this.calcOffset();
    },

    /**
     * Decides whether the canvas should be redrawn in mouseup and mousedown events.
     * @private
     * @param {Object} target
     * @param {Object} pointer
     */
    _shouldRender: function (target, pointer) {
      var activeObject = this.getActiveGroup() || this.getActiveObject();

      return !!(
        (target && (
          target.isMoving ||
          target !== activeObject))
        ||
        (!target && !!activeObject)
        ||
        (!target && !activeObject && !this._groupSelector)
        ||
        (pointer &&
          this._previousPointer &&
          this.selection && (
            pointer.x !== this._previousPointer.x ||
            pointer.y !== this._previousPointer.y))
      );
    },

    /**
     * Method that defines the actions when mouse is released on canvas.
     * The method resets the currentTransform parameters, store the image corner
     * position in the image object and render the canvas on top.
     * @private
     * @param {Event} e Event object fired on mouseup
     */
    __onMouseUp: function (e) {
      var target;

      if (this.isDrawingMode && this._isCurrentlyDrawing) {
        this._onMouseUpInDrawingMode(e);
        return;
      }

      if (this._currentTransform) {
        this._finalizeCurrentTransform();
        target = this._currentTransform.target;
      } else {
        target = this.findTarget(e, true);
      }

      var shouldRender = this._shouldRender(target, this.getPointer(e));

      this._maybeGroupObjects(e);

      if (target) {
        target.isMoving = false;
      }

      shouldRender && this.renderAll();

      this._handleCursorAndEvent(e, target);
    },

    _handleCursorAndEvent: function (e, target) {
      this._setCursorFromEvent(e, target);

      // TODO: why are we doing this?
      var _this = this;
      setTimeout(function () {
        _this._setCursorFromEvent(e, target);
      }, 50);

      this.fire('mouse:up', {target: target, e: e});
      target && target.fire('mouseup', {e: e});
    },

    /**
     * @private
     */
    _finalizeCurrentTransform: function () {

      var transform = this._currentTransform;
      var target = transform.target;

      if (target._scaling) {
        target._scaling = false;
      }

      target.setCoords();

      // only fire :modified event if target coordinates were changed during mousedown-mouseup
      if (this.stateful && target.hasStateChanged()) {
        this.fire('object:modified', {target: target});
        target.fire('modified');
      }

      this._restoreOriginXY(target);
    },

    /**
     * @private
     * @param {Object} target Object to restore
     */
    _restoreOriginXY: function (target) {
      if (this._previousOriginX && this._previousOriginY) {

        var originPoint = target.translateToOriginPoint(
          target.getCenterPoint(),
          this._previousOriginX,
          this._previousOriginY);

        target.originX = this._previousOriginX;
        target.originY = this._previousOriginY;

        target.left = originPoint.x;
        target.top = originPoint.y;

        this._previousOriginX = null;
        this._previousOriginY = null;
      }
    },

    /**
     * @private
     * @param {Event} e Event object fired on mousedown
     */
    _onMouseDownInDrawingMode: function (e) {
      this._isCurrentlyDrawing = true;
      this.discardActiveObject(e).renderAll();
      if (this.clipTo) {
        fabric.util.clipContext(this, this.contextTop);
      }
      this.freeDrawingBrush.onMouseDown(this.getPointer(e));
      this.fire('mouse:down', {e: e});
    },

    /**
     * @private
     * @param {Event} e Event object fired on mousemove
     */
    _onMouseMoveInDrawingMode: function (e) {
      if (this._isCurrentlyDrawing) {
        var pointer = this.getPointer(e);
        this.freeDrawingBrush.onMouseMove(pointer);
      }
      this.upperCanvasEl.style.cursor = this.freeDrawingCursor;
      this.fire('mouse:move', {e: e});
    },

    /**
     * @private
     * @param {Event} e Event object fired on mouseup
     */
    _onMouseUpInDrawingMode: function (e) {
      this._isCurrentlyDrawing = false;
      if (this.clipTo) {
        this.contextTop.restore();
      }
      this.freeDrawingBrush.onMouseUp();
      this.fire('mouse:up', {e: e});
    },

    /**
     * Method that defines the actions when mouse is clic ked on canvas.
     * The method inits the currentTransform parameters and renders all the
     * canvas so the current image can be placed on the top canvas and the rest
     * in on the container one.
     * @private
     * @param {Event} e Event object fired on mousedown
     */
    __onMouseDown: function (e) {

      // accept only left clicks
      var isLeftClick = 'which' in e ? e.which === 1 : e.button === 1;
      if (!isLeftClick && !fabric.isTouchSupported) return;

      if (this.isDrawingMode) {
        this._onMouseDownInDrawingMode(e);
        return;
      }

      // ignore if some object is being transformed at this moment
      if (this._currentTransform) return;

      var target = this.findTarget(e),
        pointer = this.getPointer(e);

      // save pointer for check in __onMouseUp event
      this._previousPointer = pointer;

      var shouldRender = this._shouldRender(target, pointer),
        shouldGroup = this._shouldGroup(e, target);

      if (this._shouldClearSelection(e, target)) {
        this._clearSelection(e, target, pointer);
      } else if (shouldGroup) {
        this._handleGrouping(e, target);
        target = this.getActiveGroup();
      }

      if (target && target.selectable && !shouldGroup) {
        this._beforeTransform(e, target);
        this._setupCurrentTransform(e, target);
      }
      // we must renderAll so that active image is placed on the top canvas
      shouldRender && this.renderAll();

      this.fire('mouse:down', {target: target, e: e});
      target && target.fire('mousedown', {e: e});
    },

    /**
     * @private
     */
    _beforeTransform: function (e, target) {
      var corner;

      this.stateful && target.saveState();

      // determine if it's a drag or rotate case
      if ((corner = target._findTargetCorner(e, this._offset))) {
        this.onBeforeScaleRotate(target);
      }

      if (target !== this.getActiveGroup() && target !== this.getActiveObject()) {
        this.deactivateAll();
        this.setActiveObject(target, e);
      }
    },

    /**
     * @private
     */
    _clearSelection: function (e, target, pointer) {
      this.deactivateAllWithDispatch(e);

      if (target && target.selectable) {
        this.setActiveObject(target, e);
      } else if (this.selection) {
        this._groupSelector = {
          ex: pointer.x,
          ey: pointer.y,
          top: 0,
          left: 0
        };
      }
    },

    /**
     * @private
     * @param {Object} target Object for that origin is set to center
     */
    _setOriginToCenter: function (target) {
      this._previousOriginX = this._currentTransform.target.originX;
      this._previousOriginY = this._currentTransform.target.originY;

      var center = target.getCenterPoint();

      target.originX = 'center';
      target.originY = 'center';

      target.left = center.x;
      target.top = center.y;

      this._currentTransform.left = target.left;
      this._currentTransform.top = target.top;
    },

    /**
     * @private
     * @param {Object} target Object for that center is set to origin
     */
    _setCenterToOrigin: function (target) {
      var originPoint = target.translateToOriginPoint(
        target.getCenterPoint(),
        this._previousOriginX,
        this._previousOriginY);

      target.originX = this._previousOriginX;
      target.originY = this._previousOriginY;

      target.left = originPoint.x;
      target.top = originPoint.y;

      this._previousOriginX = null;
      this._previousOriginY = null;
    },

    /**
     * Method that defines the actions when mouse is hovering the canvas.
     * The currentTransform parameter will definde whether the user is rotating/scaling/translating
     * an image or neither of them (only hovering). A group selection is also possible and would cancel
     * all any other type of action.
     * In case of an image transformation only the top canvas will be rendered.
     * @private
     * @param {Event} e Event object fired on mousemove
     */
    __onMouseMove: function (e) {

      var target, pointer;

      if (this.isDrawingMode) {
        this._onMouseMoveInDrawingMode(e);
        return;
      }

      var groupSelector = this._groupSelector;

      // We initially clicked in an empty area, so we draw a box for multiple selection
      if (groupSelector) {
        pointer = getPointer(e, this.upperCanvasEl);

        groupSelector.left = pointer.x - this._offset.left - groupSelector.ex;
        groupSelector.top = pointer.y - this._offset.top - groupSelector.ey;

        this.renderTop();
      } else if (!this._currentTransform) {

        target = this.findTarget(e);

        if (!target || target && !target.selectable) {
          this.upperCanvasEl.style.cursor = this.defaultCursor;
        } else {
          this._setCursorFromEvent(e, target);
        }
      } else {
        this._transformObject(e);
      }

      this.fire('mouse:move', {target: target, e: e});
      target && target.fire('mousemove', {e: e});
    },

    /**
     * @private
     * @param {Event} e Event fired on mousemove
     */
    _transformObject: function (e) {

      var pointer = getPointer(e, this.upperCanvasEl),
        transform = this._currentTransform;

      transform.reset = false,
        transform.target.isMoving = true;

      this._beforeScaleTransform(e, transform);
      this._performTransformAction(e, transform, pointer);

      this.renderAll();
    },

    /**
     * @private
     */
    _performTransformAction: function (e, transform, pointer) {
      var x = pointer.x,
        y = pointer.y,
        target = transform.target,
        action = transform.action;

      if (action === 'rotate') {
        this._rotateObject(x, y);
        this._fire('rotating', target, e);
      } else if (action === 'scale') {
        this._onScale(e, transform, x, y);
        this._fire('scaling', target, e);
      } else if (action === 'scaleX') {
        this._scaleObject(x, y, 'x');
        this._fire('scaling', target, e);
      } else if (action === 'scaleY') {
        this._scaleObject(x, y, 'y');
        this._fire('scaling', target, e);
      } else {
        this._translateObject(x, y);
        this._fire('moving', target, e);
        this._setCursor(this.moveCursor);
      }
    },

    /**
     * @private
     */
    _fire: function (eventName, target, e) {
      this.fire('object:' + eventName, {target: target, e: e});
      target.fire(eventName, {e: e});
    },

    /**
     * @private
     */
    _beforeScaleTransform: function (e, transform) {
      if (transform.action === 'scale' || transform.action === 'scaleX' || transform.action === 'scaleY') {
        var centerTransform = this._shouldCenterTransform(e, transform.target);

        // Switch from a normal resize to center-based
        if ((centerTransform && (transform.originX !== 'center' || transform.originY !== 'center')) ||
          // Switch from center-based resize to normal one
          (!centerTransform && transform.originX === 'center' && transform.originY === 'center')
        ) {
          this._resetCurrentTransform(e);
          transform.reset = true;
        }
      }
    },

    /**
     * @private
     */
    _onScale: function (e, transform, x, y) {
      // rotate object only if shift key is not pressed
      // and if it is not a group we are transforming
      if ((e.shiftKey || this.uniScaleTransform) && !transform.target.get('lockUniScaling')) {
        transform.currentAction = 'scale';
        this._scaleObject(x, y);
      } else {
        // Switch from a normal resize to proportional
        if (!transform.reset && transform.currentAction === 'scale') {
          this._resetCurrentTransform(e, transform.target);
        }

        transform.currentAction = 'scaleEqually';
        this._scaleObject(x, y, 'equally');
      }
    },

    /**
     * Sets the cursor depending on where the canvas is being hovered.
     * Note: very buggy in Opera
     * @param {Event} e Event object
     * @param {Object} target Object that the mouse is hovering, if so.
     */
    _setCursorFromEvent: function (e, target) {
      var style = this.upperCanvasEl.style;

      if (!target || !target.selectable) {
        style.cursor = this.defaultCursor;
        return false;
      } else {
        var activeGroup = this.getActiveGroup();
        // only show proper corner when group selection is not active
        var corner = target._findTargetCorner
          && (!activeGroup || !activeGroup.contains(target))
          && target._findTargetCorner(e, this._offset);

        if (!corner) {
          style.cursor = target.hoverCursor || this.hoverCursor;
        } else {
          this._setCornerCursor(corner, target);
        }
      }
      return true;
    },

    /**
     * @private
     */
    _setCornerCursor: function (corner, target) {
      var style = this.upperCanvasEl.style;

      if (corner in cursorOffset) {
        style.cursor = this._getRotatedCornerCursor(corner, target);
      } else if (corner === 'mtr' && target.hasRotatingPoint) {
        style.cursor = this.rotationCursor;
      } else {
        style.cursor = this.defaultCursor;
        return false;
      }
    },

    /**
     * @private
     */
    _getRotatedCornerCursor: function (corner, target) {
      var n = Math.round((target.getAngle() % 360) / 45);

      if (n < 0) {
        n += 8; // full circle ahead
      }
      n += cursorOffset[corner];
      // normalize n to be from 0 to 7
      n %= 8;

      return cursorMap[n];
    }
  });
})();

(function () {

  var min = Math.min,
    max = Math.max;

  fabric.util.object.extend(fabric.Canvas.prototype, /** @lends fabric.Canvas.prototype */ {

    /**
     * @private
     * @param {Event} e Event object
     * @param {fabric.Object} target
     * @return {Boolean}
     */
    _shouldGroup: function (e, target) {
      var activeObject = this.getActiveObject();
      return e.shiftKey &&
        (this.getActiveGroup() || (activeObject && activeObject !== target))
        && this.selection;
    },

    /**
     * @private
     * @param {Event} e Event object
     * @param {fabric.Object} target
     */
    _handleGrouping: function (e, target) {

      if (target === this.getActiveGroup()) {

        // if it's a group, find target again, this time skipping group
        target = this.findTarget(e, true);

        // if even object is not found, bail out
        if (!target || target.isType('group')) {
          return;
        }
      }
      if (this.getActiveGroup()) {
        this._updateActiveGroup(target, e);
      } else {
        this._createActiveGroup(target, e);
      }

      if (this._activeGroup) {
        this._activeGroup.saveCoords();
      }
    },

    /**
     * @private
     */
    _updateActiveGroup: function (target, e) {
      var activeGroup = this.getActiveGroup();

      if (activeGroup.contains(target)) {

        activeGroup.removeWithUpdate(target);
        this._resetObjectTransform(activeGroup);
        target.set('active', false);

        if (activeGroup.size() === 1) {
          // remove group alltogether if after removal it only contains 1 object
          this.discardActiveGroup(e);
          // activate last remaining object
          this.setActiveObject(activeGroup.item(0));
          return;
        }
      } else {
        activeGroup.addWithUpdate(target);
        this._resetObjectTransform(activeGroup);
      }
      this.fire('selection:created', {target: activeGroup, e: e});
      activeGroup.set('active', true);
    },

    /**
     * @private
     */
    _createActiveGroup: function (target, e) {

      if (this._activeObject && target !== this._activeObject) {

        var group = this._createGroup(target);

        this.setActiveGroup(group);
        this._activeObject = null;

        this.fire('selection:created', {target: group, e: e});
      }

      target.set('active', true);
    },

    /**
     * @private
     * @param {Object} target
     */
    _createGroup: function (target) {

      var objects = this.getObjects();

      var isActiveLower = objects.indexOf(this._activeObject) < objects.indexOf(target);

      var groupObjects = isActiveLower
        ? [this._activeObject, target]
        : [target, this._activeObject];

      return new fabric.Group(groupObjects, {
        originX: 'center',
        originY: 'center'
      });
    },

    /**
     * @private
     * @param {Event} e mouse event
     */
    _groupSelectedObjects: function (e) {

      var group = this._collectObjects();

      // do not create group for 1 element only
      if (group.length === 1) {
        this.setActiveObject(group[0], e);
      } else if (group.length > 1) {
        group = new fabric.Group(group.reverse(), {
          originX: 'center',
          originY: 'center'
        });
        this.setActiveGroup(group, e);
        group.saveCoords();
        this.fire('selection:created', {target: group});
        this.renderAll();
      }
    },

    /**
     * @private
     */
    _collectObjects: function () {
      var group = [],
        currentObject,
        x1 = this._groupSelector.ex,
        y1 = this._groupSelector.ey,
        x2 = x1 + this._groupSelector.left,
        y2 = y1 + this._groupSelector.top,
        selectionX1Y1 = new fabric.Point(min(x1, x2), min(y1, y2)),
        selectionX2Y2 = new fabric.Point(max(x1, x2), max(y1, y2)),
        isClick = x1 === x2 && y1 === y2;

      for (var i = this._objects.length; i--;) {
        currentObject = this._objects[i];

        if (!currentObject || !currentObject.selectable || !currentObject.visible) continue;

        if (currentObject.intersectsWithRect(selectionX1Y1, selectionX2Y2) ||
          currentObject.isContainedWithinRect(selectionX1Y1, selectionX2Y2) ||
          currentObject.containsPoint(selectionX1Y1) ||
          currentObject.containsPoint(selectionX2Y2)
        ) {
          currentObject.set('active', true);
          group.push(currentObject);

          // only add one object if it's a click
          if (isClick) break;
        }
      }

      return group;
    },

    /**
     * @private
     */
    _maybeGroupObjects: function (e) {
      if (this.selection && this._groupSelector) {
        this._groupSelectedObjects(e);
      }

      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        activeGroup.setObjectsCoords().setCoords();
        activeGroup.isMoving = false;
        this._setCursor(this.defaultCursor);
      }

      // clear selection and current transformation
      this._groupSelector = null;
      this._currentTransform = null;
    }
  });

})();

fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
   * @param {Object} [options] Options object
   * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
   * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
   * @param {Number} [options.multiplier=1] Multiplier to scale by
   * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
   * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
   * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
   * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
   * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
   * @see {@link http://jsfiddle.net/fabricjs/NfZVb/|jsFiddle demo}
   * @example <caption>Generate jpeg dataURL with lower quality</caption>
   * var dataURL = canvas.toDataURL({
   *   format: 'jpeg',
   *   quality: 0.8
   * });
   * @example <caption>Generate cropped png dataURL (clipping of canvas)</caption>
   * var dataURL = canvas.toDataURL({
   *   format: 'png',
   *   left: 100,
   *   top: 100,
   *   width: 200,
   *   height: 200
   * });
   * @example <caption>Generate double scaled png dataURL</caption>
   * var dataURL = canvas.toDataURL({
   *   format: 'png',
   *   multiplier: 2
   * });
   */
  toDataURL: function (options) {
    options || (options = {});

    var format = options.format || 'png',
      quality = options.quality || 1,
      multiplier = options.multiplier || 1,
      cropping = {
        left: options.left,
        top: options.top,
        width: options.width,
        height: options.height
      };

    if (multiplier !== 1) {
      return this.__toDataURLWithMultiplier(format, quality, cropping, multiplier);
    } else {
      return this.__toDataURL(format, quality, cropping);
    }
  },

  /**
   * @private
   */
  __toDataURL: function (format, quality, cropping) {

    this.renderAll(true);

    var canvasEl = this.upperCanvasEl || this.lowerCanvasEl;
    var croppedCanvasEl = this.__getCroppedCanvas(canvasEl, cropping);

    // to avoid common confusion https://github.com/kangax/fabric.js/issues/806
    if (format === 'jpg') {
      format = 'jpeg';
    }

    var data = (fabric.StaticCanvas.supports('toDataURLWithQuality'))
      ? (croppedCanvasEl || canvasEl).toDataURL('image/' + format, quality)
      : (croppedCanvasEl || canvasEl).toDataURL('image/' + format);

    this.contextTop && this.clearContext(this.contextTop);
    this.renderAll();

    if (croppedCanvasEl) {
      croppedCanvasEl = null;
    }

    return data;
  },

  /**
   * @private
   */
  __getCroppedCanvas: function (canvasEl, cropping) {

    var croppedCanvasEl,
      croppedCtx;

    var shouldCrop = 'left' in cropping ||
      'top' in cropping ||
      'width' in cropping ||
      'height' in cropping;

    if (shouldCrop) {

      croppedCanvasEl = fabric.util.createCanvasElement();
      croppedCtx = croppedCanvasEl.getContext('2d');

      croppedCanvasEl.width = cropping.width || this.width;
      croppedCanvasEl.height = cropping.height || this.height;

      croppedCtx.drawImage(canvasEl, -cropping.left || 0, -cropping.top || 0);
    }

    return croppedCanvasEl;
  },

  /**
   * @private
   */
  __toDataURLWithMultiplier: function (format, quality, cropping, multiplier) {

    var origWidth = this.getWidth(),
      origHeight = this.getHeight(),
      scaledWidth = origWidth * multiplier,
      scaledHeight = origHeight * multiplier,
      activeObject = this.getActiveObject(),
      activeGroup = this.getActiveGroup(),

      ctx = this.contextTop || this.contextContainer;

    this.setWidth(scaledWidth).setHeight(scaledHeight);
    ctx.scale(multiplier, multiplier);

    if (cropping.left) {
      cropping.left *= multiplier;
    }
    if (cropping.top) {
      cropping.top *= multiplier;
    }
    if (cropping.width) {
      cropping.width *= multiplier;
    }
    if (cropping.height) {
      cropping.height *= multiplier;
    }

    if (activeGroup) {
      // not removing group due to complications with restoring it with correct state afterwords
      this._tempRemoveBordersControlsFromGroup(activeGroup);
    } else if (activeObject && this.deactivateAll) {
      this.deactivateAll();
    }

    this.renderAll(true);

    var data = this.__toDataURL(format, quality, cropping);

    // restoring width, height for `renderAll` to draw
    // background properly (while context is scaled)
    this.width = origWidth;
    this.height = origHeight;

    ctx.scale(1 / multiplier, 1 / multiplier);
    this.setWidth(origWidth).setHeight(origHeight);

    if (activeGroup) {
      this._restoreBordersControlsOnGroup(activeGroup);
    } else if (activeObject && this.setActiveObject) {
      this.setActiveObject(activeObject);
    }

    this.contextTop && this.clearContext(this.contextTop);
    this.renderAll();

    return data;
  },

  /**
   * Exports canvas element to a dataurl image (allowing to change image size via multiplier).
   * @deprecated since 1.0.13
   * @param {String} format (png|jpeg)
   * @param {Number} multiplier
   * @param {Number} quality (0..1)
   * @return {String}
   */
  toDataURLWithMultiplier: function (format, multiplier, quality) {
    return this.toDataURL({
      format: format,
      multiplier: multiplier,
      quality: quality
    });
  },

  /**
   * @private
   */
  _tempRemoveBordersControlsFromGroup: function (group) {
    group.origHasControls = group.hasControls;
    group.origBorderColor = group.borderColor;

    group.hasControls = true;
    group.borderColor = 'rgba(0,0,0,0)';

    group.forEachObject(function (o) {
      o.origBorderColor = o.borderColor;
      o.borderColor = 'rgba(0,0,0,0)';
    });
  },

  /**
   * @private
   */
  _restoreBordersControlsOnGroup: function (group) {
    group.hideControls = group.origHideControls;
    group.borderColor = group.origBorderColor;

    group.forEachObject(function (o) {
      o.borderColor = o.origBorderColor;
      delete o.origBorderColor;
    });
  }
});

fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Populates canvas with data from the specified dataless JSON.
   * JSON format must conform to the one of {@link fabric.Canvas#toDatalessJSON}
   * @deprecated since 1.2.2
   * @param {String|Object} json JSON string or object
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: {@link fabric.Image})
   *                            are initialized
   * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
   * @return {fabric.Canvas} instance
   * @chainable
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#deserialization}
   */
  loadFromDatalessJSON: function (json, callback, reviver) {
    return this.loadFromJSON(json, callback, reviver);
  },

  /**
   * Populates canvas with data from the specified JSON.
   * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
   * @param {String|Object} json JSON string or object
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: {@link fabric.Image})
   *                            are initialized
   * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
   * @return {fabric.Canvas} instance
   * @chainable
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#deserialization}
   * @see {@link http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle demo}
   * @example <caption>loadFromJSON</caption>
   * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
   * @example <caption>loadFromJSON with reviver</caption>
   * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
   *   // `o` = json object
   *   // `object` = fabric.Object instance
   *   // ... do some stuff ...
   * });
   */
  loadFromJSON: function (json, callback, reviver) {
    if (!json) return;

    // serialize if it wasn't already
    var serialized = (typeof json === 'string')
      ? JSON.parse(json)
      : json;

    this.clear();

    var _this = this;
    this._enlivenObjects(serialized.objects, function () {
      _this._setBgOverlay(serialized, callback);
    }, reviver);

    return this;
  },

  /**
   * @private
   * @param {Object} serialized Object with background and overlay information
   * @param {Function} callback Invoked after all background and overlay images/patterns loaded
   */
  _setBgOverlay: function (serialized, callback) {
    var _this = this,
      loaded = {
        backgroundColor: false,
        overlayColor: false,
        backgroundImage: false,
        overlayImage: false
      };

    if (!serialized.backgroundImage && !serialized.overlayImage && !serialized.background && !serialized.overlay) {
      callback && callback();
      return;
    }

    var cbIfLoaded = function () {
      if (loaded.backgroundImage && loaded.overlayImage && loaded.backgroundColor && loaded.overlayColor) {
        _this.renderAll();
        callback && callback();
      }
    };

    this.__setBgOverlay('backgroundImage', serialized.backgroundImage, loaded, cbIfLoaded);
    this.__setBgOverlay('overlayImage', serialized.overlayImage, loaded, cbIfLoaded);
    this.__setBgOverlay('backgroundColor', serialized.background, loaded, cbIfLoaded);
    this.__setBgOverlay('overlayColor', serialized.overlay, loaded, cbIfLoaded);

    cbIfLoaded();
  },

  /**
   * @private
   * @param {String} property Property to set (backgroundImage, overlayImage, backgroundColor, overlayColor)
   * @param {(Object|String)} value Value to set
   * @param {Object} loaded Set loaded property to true if property is set
   * @param {Object} callback Callback function to invoke after property is set
   */
  __setBgOverlay: function (property, value, loaded, callback) {
    var _this = this;

    if (!value) {
      loaded[property] = true;
      return;
    }

    if (property === 'backgroundImage' || property === 'overlayImage') {
      fabric.Image.fromObject(value, function (img) {
        _this[property] = img;
        loaded[property] = true;
        callback && callback();
      });
    } else {
      this['set' + fabric.util.string.capitalize(property, true)](value, function () {
        loaded[property] = true;
        callback && callback();
      });
    }
  },

  /**
   * @private
   * @param {Array} objects
   * @param {Function} callback
   * @param {Function} [reviver]
   */
  _enlivenObjects: function (objects, callback, reviver) {
    var _this = this;

    if (objects.length === 0) {
      callback && callback();
      return;
    }

    var renderOnAddRemove = this.renderOnAddRemove;
    this.renderOnAddRemove = false;

    fabric.util.enlivenObjects(objects, function (enlivenedObjects) {
      enlivenedObjects.forEach(function (obj, index) {
        _this.insertAt(obj, index, true);
      });

      _this.renderOnAddRemove = renderOnAddRemove;
      callback && callback();
    }, null, reviver);
  },

  /**
   * @private
   * @param {String} format
   * @param {Function} callback
   */
  _toDataURL: function (format, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURL(format));
    });
  },

  /**
   * @private
   * @param {String} format
   * @param {Number} multiplier
   * @param {Function} callback
   */
  _toDataURLWithMultiplier: function (format, multiplier, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURLWithMultiplier(format, multiplier));
    });
  },

  /**
   * Clones canvas instance
   * @param {Object} [callback] Receives cloned instance as a first argument
   * @param {Array} [properties] Array of properties to include in the cloned canvas and children
   */
  clone: function (callback, properties) {
    var data = JSON.stringify(this.toJSON(properties));
    this.cloneWithoutData(function (clone) {
      clone.loadFromJSON(data, function () {
        callback && callback(clone);
      });
    });
  },

  /**
   * Clones canvas instance without cloning existing data.
   * This essentially copies canvas dimensions, clipping properties, etc.
   * but leaves data empty (so that you can populate it with your own)
   * @param {Object} [callback] Receives cloned instance as a first argument
   */
  cloneWithoutData: function (callback) {
    var el = fabric.document.createElement('canvas');

    el.width = this.getWidth();
    el.height = this.getHeight();

    var clone = new fabric.Canvas(el);
    clone.clipTo = this.clipTo;
    if (this.backgroundImage) {
      clone.setBackgroundImage(this.backgroundImage.src, function () {
        clone.renderAll();
        callback && callback(clone);
      });
      clone.backgroundImageOpacity = this.backgroundImageOpacity;
      clone.backgroundImageStretch = this.backgroundImageStretch;
    } else {
      callback && callback(clone);
    }
  }
});

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend,
    toFixed = fabric.util.toFixed,
    capitalize = fabric.util.string.capitalize,
    degreesToRadians = fabric.util.degreesToRadians,
    supportsLineDash = fabric.StaticCanvas.supports('setLineDash');

  if (fabric.Object) {
    return;
  }

  /**
   * Root object class from which all 2d shape classes inherit from
   * @class fabric.Object
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#objects}
   * @see {@link fabric.Object#initialize} for constructor definition
   *
   * @fires added
   * @fires removed
   *
   * @fires selected
   * @fires modified
   * @fires rotating
   * @fires scaling
   * @fires moving
   *
   * @fires mousedown
   * @fires mouseup
   */
  fabric.Object = fabric.util.createClass(/** @lends fabric.Object.prototype */ {

    /**
     * Retrieves object's {@link fabric.Object#clipTo|clipping function}
     * @method getClipTo
     * @memberOf fabric.Object.prototype
     * @return {Function}
     */

    /**
     * Sets object's {@link fabric.Object#clipTo|clipping function}
     * @method setClipTo
     * @memberOf fabric.Object.prototype
     * @param {Function} clipTo Clipping function
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#transformMatrix|transformMatrix}
     * @method getTransformMatrix
     * @memberOf fabric.Object.prototype
     * @return {Array} transformMatrix
     */

    /**
     * Sets object's {@link fabric.Object#transformMatrix|transformMatrix}
     * @method setTransformMatrix
     * @memberOf fabric.Object.prototype
     * @param {Array} transformMatrix
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#visible|visible} state
     * @method getVisible
     * @memberOf fabric.Object.prototype
     * @return {Boolean} True if visible
     */

    /**
     * Sets object's {@link fabric.Object#visible|visible} state
     * @method setVisible
     * @memberOf fabric.Object.prototype
     * @param {Boolean} value visible value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#shadow|shadow}
     * @method getShadow
     * @memberOf fabric.Object.prototype
     * @return {Object} Shadow instance
     */

    /**
     * Retrieves object's {@link fabric.Object#stroke|stroke}
     * @method getStroke
     * @memberOf fabric.Object.prototype
     * @return {String} stroke value
     */

    /**
     * Sets object's {@link fabric.Object#stroke|stroke}
     * @method setStroke
     * @memberOf fabric.Object.prototype
     * @param {String} value stroke value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#strokeWidth|strokeWidth}
     * @method getStrokeWidth
     * @memberOf fabric.Object.prototype
     * @return {Number} strokeWidth value
     */

    /**
     * Sets object's {@link fabric.Object#strokeWidth|strokeWidth}
     * @method setStrokeWidth
     * @memberOf fabric.Object.prototype
     * @param {Number} value strokeWidth value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#originX|originX}
     * @method getOriginX
     * @memberOf fabric.Object.prototype
     * @return {String} originX value
     */

    /**
     * Sets object's {@link fabric.Object#originX|originX}
     * @method setOriginX
     * @memberOf fabric.Object.prototype
     * @param {String} value originX value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#originY|originY}
     * @method getOriginY
     * @memberOf fabric.Object.prototype
     * @return {String} originY value
     */

    /**
     * Sets object's {@link fabric.Object#originY|originY}
     * @method setOriginY
     * @memberOf fabric.Object.prototype
     * @param {String} value originY value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#fill|fill}
     * @method getFill
     * @memberOf fabric.Object.prototype
     * @return {String} Fill value
     */

    /**
     * Sets object's {@link fabric.Object#fill|fill}
     * @method setFill
     * @memberOf fabric.Object.prototype
     * @param {String} value Fill value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#opacity|opacity}
     * @method getOpacity
     * @memberOf fabric.Object.prototype
     * @return {Number} Opacity value (0-1)
     */

    /**
     * Sets object's {@link fabric.Object#opacity|opacity}
     * @method setOpacity
     * @memberOf fabric.Object.prototype
     * @param {Number} value Opacity value (0-1)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#angle|angle} (in degrees)
     * @method getAngle
     * @memberOf fabric.Object.prototype
     * @return {Number}
     */

    /**
     * Sets object's {@link fabric.Object#angle|angle}
     * @method setAngle
     * @memberOf fabric.Object.prototype
     * @param {Number} value Angle value (in degrees)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#top|top position}
     * @method getTop
     * @memberOf fabric.Object.prototype
     * @return {Number} Top value (in pixels)
     */

    /**
     * Sets object's {@link fabric.Object#top|top position}
     * @method setTop
     * @memberOf fabric.Object.prototype
     * @param {Number} value Top value (in pixels)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#left|left position}
     * @method getLeft
     * @memberOf fabric.Object.prototype
     * @return {Number} Left value (in pixels)
     */

    /**
     * Sets object's {@link fabric.Object#left|left position}
     * @method setLeft
     * @memberOf fabric.Object.prototype
     * @param {Number} value Left value (in pixels)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#scaleX|scaleX} value
     * @method getScaleX
     * @memberOf fabric.Object.prototype
     * @return {Number} scaleX value
     */

    /**
     * Sets object's {@link fabric.Object#scaleX|scaleX} value
     * @method setScaleX
     * @memberOf fabric.Object.prototype
     * @param {Number} value scaleX value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#scaleY|scaleY} value
     * @method getScaleY
     * @memberOf fabric.Object.prototype
     * @return {Number} scaleY value
     */

    /**
     * Sets object's {@link fabric.Object#scaleY|scaleY} value
     * @method setScaleY
     * @memberOf fabric.Object.prototype
     * @param {Number} value scaleY value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#flipX|flipX} value
     * @method getFlipX
     * @memberOf fabric.Object.prototype
     * @return {Boolean} flipX value
     */

    /**
     * Sets object's {@link fabric.Object#flipX|flipX} value
     * @method setFlipX
     * @memberOf fabric.Object.prototype
     * @param {Boolean} value flipX value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#flipY|flipY} value
     * @method getFlipY
     * @memberOf fabric.Object.prototype
     * @return {Boolean} flipY value
     */

    /**
     * Sets object's {@link fabric.Object#flipY|flipY} value
     * @method setFlipY
     * @memberOf fabric.Object.prototype
     * @param {Boolean} value flipY value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Type of an object (rect, circle, path, etc.)
     * @type String
     * @default
     */
    type: 'object',

    /**
     * Horizontal origin of transformation of an object (one of "left", "right", "center")
     * @type String
     * @default
     */
    originX: 'left',

    /**
     * Vertical origin of transformation of an object (one of "top", "bottom", "center")
     * @type String
     * @default
     */
    originY: 'top',

    /**
     * Top position of an object. Note that by default it's relative to object center. You can change this by setting originY={top/center/bottom}
     * @type Number
     * @default
     */
    top: 0,

    /**
     * Left position of an object. Note that by default it's relative to object center. You can change this by setting originX={left/center/right}
     * @type Number
     * @default
     */
    left: 0,

    /**
     * Object width
     * @type Number
     * @default
     */
    width: 0,

    /**
     * Object height
     * @type Number
     * @default
     */
    height: 0,

    /**
     * Object scale factor (horizontal)
     * @type Number
     * @default
     */
    scaleX: 1,

    /**
     * Object scale factor (vertical)
     * @type Number
     * @default
     */
    scaleY: 1,

    /**
     * When true, an object is rendered as flipped horizontally
     * @type Boolean
     * @default
     */
    flipX: false,

    /**
     * When true, an object is rendered as flipped vertically
     * @type Boolean
     * @default
     */
    flipY: false,

    /**
     * Opacity of an object
     * @type Number
     * @default
     */
    opacity: 1,

    /**
     * Angle of rotation of an object (in degrees)
     * @type Number
     * @default
     */
    angle: 0,

    /**
     * Size of object's controlling corners (in pixels)
     * @type Number
     * @default
     */
    cornerSize: 12,

    /**
     * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
     * @type Boolean
     * @default
     */
    transparentCorners: true,

    /**
     * Default cursor value used when hovering over this object on canvas
     * @type String
     * @default
     */
    hoverCursor: null,

    /**
     * Padding between object and its controlling borders (in pixels)
     * @type Number
     * @default
     */
    padding: 0,

    /**
     * Color of controlling borders of an object (when it's active)
     * @type String
     * @default
     */
    borderColor: 'rgba(102,153,255,0.75)',

    /**
     * Color of controlling corners of an object (when it's active)
     * @type String
     * @default
     */
    cornerColor: 'rgba(102,153,255,0.5)',

    /**
     * When true, this object will use center point as the origin of transformation
     * when being scaled via the controls.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredScaling: false,

    /**
     * When true, this object will use center point as the origin of transformation
     * when being rotated via the controls.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredRotation: true,

    /**
     * Color of object's fill
     * @type String
     * @default
     */
    fill: 'rgb(0,0,0)',

    /**
     * Fill rule used to fill an object
     * @type String
     * @default
     */
    fillRule: 'source-over',

    /**
     * Background color of an object. Only works with text objects at the moment.
     * @type String
     * @default
     */
    backgroundColor: '',

    /**
     * When defined, an object is rendered via stroke and this property specifies its color
     * @type String
     * @default
     */
    stroke: null,

    /**
     * Width of a stroke used to render this object
     * @type Number
     * @default
     */
    strokeWidth: 1,

    /**
     * Array specifying dash pattern of an object's stroke (stroke must be defined)
     * @type Array
     */
    strokeDashArray: null,

    /**
     * Line endings style of an object's stroke (one of "butt", "round", "square")
     * @type String
     * @default
     */
    strokeLineCap: 'butt',

    /**
     * Corner style of an object's stroke (one of "bevil", "round", "miter")
     * @type String
     * @default
     */
    strokeLineJoin: 'miter',

    /**
     * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
     * @type Number
     * @default
     */
    strokeMiterLimit: 10,

    /**
     * Shadow object representing shadow of this shape
     * @type fabric.Shadow
     * @default
     */
    shadow: null,

    /**
     * Opacity of object's controlling borders when object is active and moving
     * @type Number
     * @default
     */
    borderOpacityWhenMoving: 0.4,

    /**
     * Scale factor of object's controlling borders
     * @type Number
     * @default
     */
    borderScaleFactor: 1,

    /**
     * Transform matrix (similar to SVG's transform matrix)
     * @type Array
     */
    transformMatrix: null,

    /**
     * Minimum allowed scale value of an object
     * @type Number
     * @default
     */
    minScaleLimit: 0.01,

    /**
     * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
     * But events still fire on it.
     * @type Boolean
     * @default
     */
    selectable: true,

    /**
     * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
     * @type Boolean
     * @default
     */
    evented: true,

    /**
     * When set to `false`, an object is not rendered on canvas
     * @type Boolean
     * @default
     */
    visible: true,

    /**
     * When set to `false`, object's controls are not displayed and can not be used to manipulate object
     * @type Boolean
     * @default
     */
    hasControls: true,

    /**
     * When set to `false`, object's controlling borders are not rendered
     * @type Boolean
     * @default
     */
    hasBorders: true,

    /**
     * When set to `false`, object's controlling rotating point will not be visible or selectable
     * @type Boolean
     * @default
     */
    hasRotatingPoint: true,

    /**
     * Offset for object's controlling rotating point (when enabled via `hasRotatingPoint`)
     * @type Number
     * @default
     */
    rotatingPointOffset: 40,

    /**
     * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
     * @type Boolean
     * @default
     */
    perPixelTargetFind: false,

    /**
     * When `false`, default object's values are not included in its serialization
     * @type Boolean
     * @default
     */
    includeDefaultValues: true,

    /**
     * Function that determines clipping of an object (context is passed as a first argument)
     * Note that context origin is at the object's center point (not left/top corner)
     * @type Function
     */
    clipTo: null,

    /**
     * When `true`, object horizontal movement is locked
     * @type Boolean
     * @default
     */
    lockMovementX: false,

    /**
     * When `true`, object vertical movement is locked
     * @type Boolean
     * @default
     */
    lockMovementY: false,

    /**
     * When `true`, object rotation is locked
     * @type Boolean
     * @default
     */
    lockRotation: false,

    /**
     * When `true`, object horizontal scaling is locked
     * @type Boolean
     * @default
     */
    lockScalingX: false,

    /**
     * When `true`, object vertical scaling is locked
     * @type Boolean
     * @default
     */
    lockScalingY: false,

    /**
     * When `true`, object non-uniform scaling is locked
     * @type Boolean
     * @default
     */
    lockUniScaling: false,

    /**
     * List of properties to consider when checking if state
     * of an object is changed (fabric.Object#hasStateChanged)
     * as well as for history (undo/redo) purposes
     * @type Array
     */
    stateProperties: (
      'top left width height scaleX scaleY flipX flipY originX originY transformMatrix ' +
      'stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit ' +
      'angle opacity fill fillRule shadow clipTo visible backgroundColor'
    ).split(' '),

    /**
     * Constructor
     * @param {Object} [options] Options object
     */
    initialize: function (options) {
      if (options) {
        this.setOptions(options);
      }
    },

    /**
     * @private
     */
    _initGradient: function (options) {
      if (options.fill && options.fill.colorStops && !(options.fill instanceof fabric.Gradient)) {
        this.set('fill', new fabric.Gradient(options.fill));
      }
    },

    /**
     * @private
     */
    _initPattern: function (options) {
      if (options.fill && options.fill.source && !(options.fill instanceof fabric.Pattern)) {
        this.set('fill', new fabric.Pattern(options.fill));
      }
      if (options.stroke && options.stroke.source && !(options.stroke instanceof fabric.Pattern)) {
        this.set('stroke', new fabric.Pattern(options.stroke));
      }
    },

    /**
     * @private
     */
    _initClipping: function (options) {
      if (!options.clipTo || typeof options.clipTo !== 'string') return;

      var functionBody = fabric.util.getFunctionBody(options.clipTo);
      if (typeof functionBody !== 'undefined') {
        this.clipTo = new Function('ctx', functionBody);
      }
    },

    /**
     * Sets object's properties from options
     * @param {Object} [options] Options object
     */
    setOptions: function (options) {
      for (var prop in options) {
        this.set(prop, options[prop]);
      }
      this._initGradient(options);
      this._initPattern(options);
      this._initClipping(options);
    },

    /**
     * Transforms context when rendering an object
     * @param {CanvasRenderingContext2D} ctx Context
     * @param {Boolean} fromLeft When true, context is transformed to object's top/left corner. This is used when rendering text on Node
     */
    transform: function (ctx, fromLeft) {
      ctx.globalAlpha = this.opacity;

      var center = fromLeft ? this._getLeftTopCoords() : this.getCenterPoint();
      ctx.translate(center.x, center.y);
      ctx.rotate(degreesToRadians(this.angle));
      ctx.scale(
        this.scaleX * (this.flipX ? -1 : 1),
        this.scaleY * (this.flipY ? -1 : 1)
      );
    },

    /**
     * Returns an object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function (propertiesToInclude) {

      var NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;

      var object = {
        type: this.type,
        originX: this.originX,
        originY: this.originY,
        left: toFixed(this.left, NUM_FRACTION_DIGITS),
        top: toFixed(this.top, NUM_FRACTION_DIGITS),
        width: toFixed(this.width, NUM_FRACTION_DIGITS),
        height: toFixed(this.height, NUM_FRACTION_DIGITS),
        fill: (this.fill && this.fill.toObject) ? this.fill.toObject() : this.fill,
        stroke: (this.stroke && this.stroke.toObject) ? this.stroke.toObject() : this.stroke,
        strokeWidth: toFixed(this.strokeWidth, NUM_FRACTION_DIGITS),
        strokeDashArray: this.strokeDashArray,
        strokeLineCap: this.strokeLineCap,
        strokeLineJoin: this.strokeLineJoin,
        strokeMiterLimit: toFixed(this.strokeMiterLimit, NUM_FRACTION_DIGITS),
        scaleX: toFixed(this.scaleX, NUM_FRACTION_DIGITS),
        scaleY: toFixed(this.scaleY, NUM_FRACTION_DIGITS),
        angle: toFixed(this.getAngle(), NUM_FRACTION_DIGITS),
        flipX: this.flipX,
        flipY: this.flipY,
        opacity: toFixed(this.opacity, NUM_FRACTION_DIGITS),
        shadow: (this.shadow && this.shadow.toObject) ? this.shadow.toObject() : this.shadow,
        visible: this.visible,
        clipTo: this.clipTo && String(this.clipTo),
        backgroundColor: this.backgroundColor
      };

      if (!this.includeDefaultValues) {
        object = this._removeDefaultValues(object);
      }

      fabric.util.populateWithProperties(this, object, propertiesToInclude);

      return object;
    },

    /**
     * Returns (dataless) object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toDatalessObject: function (propertiesToInclude) {
      // will be overwritten by subclasses
      return this.toObject(propertiesToInclude);
    },

    /**
     * @private
     * @param {Object} object
     */
    _removeDefaultValues: function (object) {
      var prototype = fabric.util.getKlass(object.type).prototype;
      var stateProperties = prototype.stateProperties;

      stateProperties.forEach(function (prop) {
        if (object[prop] === prototype[prop]) {
          delete object[prop];
        }
      });

      return object;
    },

    /**
     * Returns a string representation of an instance
     * @return {String}
     */
    toString: function () {
      return '#<fabric.' + capitalize(this.type) + '>';
    },

    /**
     * Basic getter
     * @param {String} property Property name
     * @return {Any} value of a property
     */
    get: function (property) {
      return this[property];
    },

    /**
     * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
     * @param {String|Object} key Property name or object (if object, iterate over the object properties)
     * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
     * @return {fabric.Object} thisArg
     * @chainable
     */
    set: function (key, value) {
      if (typeof key === 'object') {
        for (var prop in key) {
          this._set(prop, key[prop]);
        }
      } else {
        if (typeof value === 'function' && key !== 'clipTo') {
          this._set(key, value(this.get(key)));
        } else {
          this._set(key, value);
        }
      }
      return this;
    },

    /**
     * @private
     * @param {String} key
     * @param {Any} value
     * @return {fabric.Object} thisArg
     */
    _set: function (key, value) {
      var shouldConstrainValue = (key === 'scaleX' || key === 'scaleY');

      if (shouldConstrainValue) {
        value = this._constrainScale(value);
      }
      if (key === 'scaleX' && value < 0) {
        this.flipX = !this.flipX;
        value *= -1;
      } else if (key === 'scaleY' && value < 0) {
        this.flipY = !this.flipY;
        value *= -1;
      } else if (key === 'width' || key === 'height') {
        this.minScaleLimit = toFixed(Math.min(0.1, 1 / Math.max(this.width, this.height)), 2);
      } else if (key === 'shadow' && value && !(value instanceof fabric.Shadow)) {
        value = new fabric.Shadow(value);
      }

      this[key] = value;

      return this;
    },

    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @param {String} property Property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
    toggle: function (property) {
      var value = this.get(property);
      if (typeof value === 'boolean') {
        this.set(property, !value);
      }
      return this;
    },

    /**
     * Sets sourcePath of an object
     * @param {String} value Value to set sourcePath to
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setSourcePath: function (value) {
      this.sourcePath = value;
      return this;
    },

    /**
     * Renders an object on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    render: function (ctx, noTransform) {
      // do not render if width/height are zeros or object is not visible
      if (this.width === 0 || this.height === 0 || !this.visible) return;

      ctx.save();

      this._transform(ctx, noTransform);
      this._setStrokeStyles(ctx);
      this._setFillStyles(ctx);

      var m = this.transformMatrix;
      if (m && this.group) {
        ctx.translate(-this.group.width / 2, -this.group.height / 2);
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }

      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      this._render(ctx, noTransform);
      this.clipTo && ctx.restore();
      this._removeShadow(ctx);

      if (this.active && !noTransform) {
        this.drawBorders(ctx);
        this.drawControls(ctx);
      }
      ctx.restore();
    },

    _transform: function (ctx, noTransform) {
      var m = this.transformMatrix;
      if (m && !this.group) {
        ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }
      if (!noTransform) {
        this.transform(ctx);
      }
    },

    _setStrokeStyles: function (ctx) {
      if (this.stroke) {
        ctx.lineWidth = this.strokeWidth;
        ctx.lineCap = this.strokeLineCap;
        ctx.lineJoin = this.strokeLineJoin;
        ctx.miterLimit = this.strokeMiterLimit;
        ctx.strokeStyle = this.stroke.toLive
          ? this.stroke.toLive(ctx)
          : this.stroke;
      }
    },

    _setFillStyles: function (ctx) {
      if (this.fill) {
        ctx.fillStyle = this.fill.toLive
          ? this.fill.toLive(ctx)
          : this.fill;
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _setShadow: function (ctx) {
      if (!this.shadow) return;

      ctx.shadowColor = this.shadow.color;
      ctx.shadowBlur = this.shadow.blur;
      ctx.shadowOffsetX = this.shadow.offsetX;
      ctx.shadowOffsetY = this.shadow.offsetY;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _removeShadow: function (ctx) {
      if (!this.shadow) return;

      ctx.shadowColor = '';
      ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderFill: function (ctx) {
      if (!this.fill) return;

      if (this.fill.toLive) {
        ctx.save();
        ctx.translate(
          -this.width / 2 + this.fill.offsetX || 0,
          -this.height / 2 + this.fill.offsetY || 0);
      }
      ctx.fill();
      if (this.fill.toLive) {
        ctx.restore();
      }
      if (this.shadow && !this.shadow.affectStroke) {
        this._removeShadow(ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderStroke: function (ctx) {
      if (!this.stroke) return;

      ctx.save();
      if (this.strokeDashArray) {
        // Spec requires the concatenation of two copies the dash list when the number of elements is odd
        if (1 & this.strokeDashArray.length) {
          this.strokeDashArray.push.apply(this.strokeDashArray, this.strokeDashArray);
        }

        if (supportsLineDash) {
          ctx.setLineDash(this.strokeDashArray);
          this._stroke && this._stroke(ctx);
        } else {
          this._renderDashedStroke && this._renderDashedStroke(ctx);
        }
        ctx.stroke();
      } else {
        this._stroke ? this._stroke(ctx) : ctx.stroke();
      }
      this._removeShadow(ctx);
      ctx.restore();
    },

    /**
     * Clones an instance
     * @param {Function} callback Callback is invoked with a clone as a first argument
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {fabric.Object} clone of an instance
     */
    clone: function (callback, propertiesToInclude) {
      if (this.constructor.fromObject) {
        return this.constructor.fromObject(this.toObject(propertiesToInclude), callback);
      }
      return new fabric.Object(this.toObject(propertiesToInclude));
    },

    /**
     * Creates an instance of fabric.Image out of an object
     * @param callback {Function} callback, invoked with an instance as a first argument
     * @return {fabric.Object} thisArg
     */
    cloneAsImage: function (callback) {
      var dataUrl = this.toDataURL();
      fabric.util.loadImage(dataUrl, function (img) {
        if (callback) {
          callback(new fabric.Image(img));
        }
      });
      return this;
    },

    /**
     * Converts an object into a data-url-like string
     * @param {Object} options Options object
     * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
     * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
     * @param {Number} [options.multiplier=1] Multiplier to scale by
     * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
     * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
     * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
     * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
     * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
     */
    toDataURL: function (options) {
      options || (options = {});

      var el = fabric.util.createCanvasElement(),
        boundingRect = this.getBoundingRect();

      el.width = boundingRect.width;
      el.height = boundingRect.height;

      fabric.util.wrapElement(el, 'div');
      var canvas = new fabric.Canvas(el);

      // to avoid common confusion https://github.com/kangax/fabric.js/issues/806
      if (options.format === 'jpg') {
        options.format = 'jpeg';
      }

      if (options.format === 'jpeg') {
        canvas.backgroundColor = '#fff';
      }

      var origParams = {
        active: this.get('active'),
        left: this.getLeft(),
        top: this.getTop()
      };

      this.set('active', false);
      this.setPositionByOrigin(new fabric.Point(el.width / 2, el.height / 2), 'center', 'center');

      var originalCanvas = this.canvas;
      canvas.add(this);
      var data = canvas.toDataURL(options);

      this.set(origParams).setCoords();
      this.canvas = originalCanvas;

      canvas.dispose();
      canvas = null;

      return data;
    },

    /**
     * Returns true if specified type is identical to the type of an instance
     * @param type {String} type Type to check against
     * @return {Boolean}
     */
    isType: function (type) {
      return this.type === type;
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function () {
      return 0;
    },

    /**
     * Returns a JSON representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} JSON
     */
    toJSON: function (propertiesToInclude) {
      // delegate, not alias
      return this.toObject(propertiesToInclude);
    },

    /**
     * Sets gradient (fill or stroke) of an object
     * <b>Backwards incompatibility note:</b> This method was named "setGradientFill" until v1.1.0
     * @param {String} property Property name 'stroke' or 'fill'
     * @param {Object} [options] Options object
     * @param {String} [options.type] Type of gradient 'radial' or 'linear'
     * @param {Number} [options.x1=0] x-coordinate of start point
     * @param {Number} [options.y1=0] y-coordinate of start point
     * @param {Number} [options.x2=0] x-coordinate of end point
     * @param {Number} [options.y2=0] y-coordinate of end point
     * @param {Number} [options.r1=0] Radius of start point (only for radial gradients)
     * @param {Number} [options.r2=0] Radius of end point (only for radial gradients)
     * @param {Object} [options.colorStops] Color stops object eg. {0: 'ff0000', 1: '000000'}
     * @return {fabric.Object} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/58y8b/|jsFiddle demo}
     * @example <caption>Set linear gradient</caption>
     * object.setGradient('fill', {
     *   type: 'linear',
     *   x1: -object.width / 2,
     *   y1: 0,
     *   x2: object.width / 2,
     *   y2: 0,
     *   colorStops: {
     *     0: 'red',
     *     0.5: '#005555',
     *     1: 'rgba(0,0,255,0.5)'
     *   }
     * });
     * canvas.renderAll();
     * @example <caption>Set radial gradient</caption>
     * object.setGradient('fill', {
     *   type: 'radial',
     *   x1: 0,
     *   y1: 0,
     *   x2: 0,
     *   y2: 0,
     *   r1: object.width / 2,
     *   r2: 10,
     *   colorStops: {
     *     0: 'red',
     *     0.5: '#005555',
     *     1: 'rgba(0,0,255,0.5)'
     *   }
     * });
     * canvas.renderAll();
     */
    setGradient: function (property, options) {
      options || (options = {});

      var gradient = {colorStops: []};

      gradient.type = options.type || (options.r1 || options.r2 ? 'radial' : 'linear');
      gradient.coords = {
        x1: options.x1,
        y1: options.y1,
        x2: options.x2,
        y2: options.y2
      };

      if (options.r1 || options.r2) {
        gradient.coords.r1 = options.r1;
        gradient.coords.r2 = options.r2;
      }

      for (var position in options.colorStops) {
        var color = new fabric.Color(options.colorStops[position]);
        gradient.colorStops.push({offset: position, color: color.toRgb(), opacity: color.getAlpha()});
      }

      return this.set(property, fabric.Gradient.forObject(this, gradient));
    },

    /**
     * Sets pattern fill of an object
     * @param {Object} options Options object
     * @param {(String|HTMLImageElement)} options.source Pattern source
     * @param {String} [options.repeat=repeat] Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
     * @param {Number} [options.offsetX=0] Pattern horizontal offset from object's left/top corner
     * @param {Number} [options.offsetY=0] Pattern vertical offset from object's left/top corner
     * @return {fabric.Object} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/QT3pa/|jsFiddle demo}
     * @example <caption>Set pattern</caption>
     * fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
     *   object.setPatternFill({
     *     source: img,
     *     repeat: 'repeat'
     *   });
     *   canvas.renderAll();
     * });
     */
    setPatternFill: function (options) {
      return this.set('fill', new fabric.Pattern(options));
    },

    /**
     * Sets {@link fabric.Object#shadow|shadow} of an object
     * @param {Object|String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
     * @param {String} [options.color=rgb(0,0,0)] Shadow color
     * @param {Number} [options.blur=0] Shadow blur
     * @param {Number} [options.offsetX=0] Shadow horizontal offset
     * @param {Number} [options.offsetY=0] Shadow vertical offset
     * @return {fabric.Object} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/7gvJG/|jsFiddle demo}
     * @example <caption>Set shadow with string notation</caption>
     * object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
     * canvas.renderAll();
     * @example <caption>Set shadow with object notation</caption>
     * object.setShadow({
     *   color: 'red',
     *   blur: 10,
     *   offsetX: 20,
     *   offsetY: 20
     * });
     * canvas.renderAll();
     */
    setShadow: function (options) {
      return this.set('shadow', new fabric.Shadow(options));
    },

    /**
     * Sets "color" of an instance (alias of `set('fill', &hellip;)`)
     * @param {String} color Color value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    setColor: function (color) {
      this.set('fill', color);
      return this;
    },

    /**
     * Centers object horizontally on canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    centerH: function () {
      this.canvas.centerObjectH(this);
      return this;
    },

    /**
     * Centers object vertically on canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    centerV: function () {
      this.canvas.centerObjectV(this);
      return this;
    },

    /**
     * Centers object vertically and horizontally on canvas to which is was added last
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    center: function () {
      this.canvas.centerObject(this);
      return this;
    },

    /**
     * Removes object from canvas to which it was added last
     * @return {fabric.Object} thisArg
     * @chainable
     */
    remove: function () {
      this.canvas.remove(this);
      return this;
    },

    /**
     * Returns coordinates of a pointer relative to an object
     * @param {Event} e Event to operate upon
     * @param {Object} [pointer] Pointer to operate upon (instead of event)
     * @return {Object} Coordinates of a pointer (x, y)
     */
    getLocalPointer: function (e, pointer) {
      pointer = pointer || this.canvas.getPointer(e);
      var objectLeftTop = this.translateToOriginPoint(this.getCenterPoint(), 'left', 'top');
      return {
        x: pointer.x - objectLeftTop.x,
        y: pointer.y - objectLeftTop.y
      };
    }
  });

  // fabric.util.createAccessors(fabric.Object);

  /**
   * Alias for {@link fabric.Object.prototype.setAngle}
   * @alias rotate -> setAngle
   * @memberof fabric.Object
   */
  fabric.Object.prototype.rotate = fabric.Object.prototype.setAngle;

  extend(fabric.Object.prototype, fabric.Observable);

  /**
   * Defines the number of fraction digits to use when serializing object values.
   * You can use it to increase/decrease precision of such values like left, top, scaleX, scaleY, etc.
   * @static
   * @memberof fabric.Object
   * @constant
   * @type Number
   */
  fabric.Object.NUM_FRACTION_DIGITS = 2;

  /**
   * Unique id used internally when creating SVG elements
   * @static
   * @memberof fabric.Object
   * @type Number
   */
  fabric.Object.__uid = 0;

})(typeof exports !== 'undefined' ? exports : this);

(function () {

  var degreesToRadians = fabric.util.degreesToRadians;

  fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

    /**
     * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
     * @param {fabric.Point} point The point which corresponds to the originX and originY params
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    translateToCenterPoint: function (point, originX, originY) {
      var cx = point.x,
        cy = point.y,
        strokeWidth = this.stroke ? this.strokeWidth : 0;

      if (originX === 'left') {
        cx = point.x + (this.getWidth() + strokeWidth * this.scaleX) / 2;
      } else if (originX === 'right') {
        cx = point.x - (this.getWidth() + strokeWidth * this.scaleX) / 2;
      }

      if (originY === 'top') {
        cy = point.y + (this.getHeight() + strokeWidth * this.scaleY) / 2;
      } else if (originY === 'bottom') {
        cy = point.y - (this.getHeight() + strokeWidth * this.scaleY) / 2;
      }

      // Apply the reverse rotation to the point (it's already scaled properly)
      return fabric.util.rotatePoint(new fabric.Point(cx, cy), point, degreesToRadians(this.angle));
    },

    /**
     * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
     * @param {fabric.Point} point The point which corresponds to center of the object
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    translateToOriginPoint: function (center, originX, originY) {
      var x = center.x,
        y = center.y,
        strokeWidth = this.stroke ? this.strokeWidth : 0;

      // Get the point coordinates
      if (originX === 'left') {
        x = center.x - (this.getWidth() + strokeWidth * this.scaleX) / 2;
      } else if (originX === 'right') {
        x = center.x + (this.getWidth() + strokeWidth * this.scaleX) / 2;
      }
      if (originY === 'top') {
        y = center.y - (this.getHeight() + strokeWidth * this.scaleY) / 2;
      } else if (originY === 'bottom') {
        y = center.y + (this.getHeight() + strokeWidth * this.scaleY) / 2;
      }

      // Apply the rotation to the point (it's already scaled properly)
      return fabric.util.rotatePoint(new fabric.Point(x, y), center, degreesToRadians(this.angle));
    },

    /**
     * Returns the real center coordinates of the object
     * @return {fabric.Point}
     */
    getCenterPoint: function () {
      var leftTop = new fabric.Point(this.left, this.top);
      return this.translateToCenterPoint(leftTop, this.originX, this.originY);
    },

    /**
     * Returns the coordinates of the object based on center coordinates
     * @param {fabric.Point} point The point which corresponds to the originX and originY params
     * @return {fabric.Point}
     */
    // getOriginPoint: function(center) {
    //   return this.translateToOriginPoint(center, this.originX, this.originY);
    // },

    /**
     * Returns the coordinates of the object as if it has a different origin
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    getPointByOrigin: function (originX, originY) {
      var center = this.getCenterPoint();
      return this.translateToOriginPoint(center, originX, originY);
    },

    /**
     * Returns the point in local coordinates
     * @param {fabric.Point} point The point relative to the global coordinate system
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    toLocalPoint: function (point, originX, originY) {
      var center = this.getCenterPoint(),
        strokeWidth = this.stroke ? this.strokeWidth : 0,
        x, y;

      if (originX && originY) {
        if (originX === 'left') {
          x = center.x - (this.getWidth() + strokeWidth * this.scaleX) / 2;
        } else if (originX === 'right') {
          x = center.x + (this.getWidth() + strokeWidth * this.scaleX) / 2;
        } else {
          x = center.x;
        }

        if (originY === 'top') {
          y = center.y - (this.getHeight() + strokeWidth * this.scaleY) / 2;
        } else if (originY === 'bottom') {
          y = center.y + (this.getHeight() + strokeWidth * this.scaleY) / 2;
        } else {
          y = center.y;
        }
      } else {
        x = this.left;
        y = this.top;
      }

      return fabric.util.rotatePoint(new fabric.Point(point.x, point.y), center, -degreesToRadians(this.angle)).subtractEquals(new fabric.Point(x, y));
    },

    /**
     * Returns the point in global coordinates
     * @param {fabric.Point} The point relative to the local coordinate system
     * @return {fabric.Point}
     */
    // toGlobalPoint: function(point) {
    //   return fabric.util.rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new fabric.Point(this.left, this.top));
    // },

    /**
     * Sets the position of the object taking into consideration the object's origin
     * @param {fabric.Point} point The new position of the object
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {void}
     */
    setPositionByOrigin: function (pos, originX, originY) {
      var center = this.translateToCenterPoint(pos, originX, originY);
      var position = this.translateToOriginPoint(center, this.originX, this.originY);

      this.set('left', position.x);
      this.set('top', position.y);
    },

    /**
     * @param {String} to One of 'left', 'center', 'right'
     */
    adjustPosition: function (to) {
      var angle = degreesToRadians(this.angle);
      var hypotHalf = this.getWidth() / 2;
      var xHalf = Math.cos(angle) * hypotHalf;
      var yHalf = Math.sin(angle) * hypotHalf;
      var hypotFull = this.getWidth();
      var xFull = Math.cos(angle) * hypotFull;
      var yFull = Math.sin(angle) * hypotFull;

      if (this.originX === 'center' && to === 'left' ||
        this.originX === 'right' && to === 'center') {
        // move half left
        this.left -= xHalf;
        this.top -= yHalf;
      } else if (this.originX === 'left' && to === 'center' ||
        this.originX === 'center' && to === 'right') {
        // move half right
        this.left += xHalf;
        this.top += yHalf;
      } else if (this.originX === 'left' && to === 'right') {
        // move full right
        this.left += xFull;
        this.top += yFull;
      } else if (this.originX === 'right' && to === 'left') {
        // move full left
        this.left -= xFull;
        this.top -= yFull;
      }

      this.setCoords();
      this.originX = to;
    },

    /**
     * @private
     */
    _getLeftTopCoords: function () {
      return this.translateToOriginPoint(this.getCenterPoint(), 'left', 'center');
    }
  });

})();

(function () {

  var degreesToRadians = fabric.util.degreesToRadians;

  fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

    /**
     * Object containing coordinates of object's controls
     * @type Object
     * @default
     */
    oCoords: null,

    /**
     * Checks if object intersects with an area formed by 2 points
     * @param {Object} pointTL top-left point of area
     * @param {Object} pointBR bottom-right point of area
     * @return {Boolean} true if object intersects with an area formed by 2 points
     */
    intersectsWithRect: function (pointTL, pointBR) {
      var oCoords = this.oCoords,
        tl = new fabric.Point(oCoords.tl.x, oCoords.tl.y),
        tr = new fabric.Point(oCoords.tr.x, oCoords.tr.y),
        bl = new fabric.Point(oCoords.bl.x, oCoords.bl.y),
        br = new fabric.Point(oCoords.br.x, oCoords.br.y);

      var intersection = fabric.Intersection.intersectPolygonRectangle(
        [tl, tr, br, bl],
        pointTL,
        pointBR
      );
      return intersection.status === 'Intersection';
    },

    /**
     * Checks if object intersects with another object
     * @param {Object} other Object to test
     * @return {Boolean} true if object intersects with another object
     */
    intersectsWithObject: function (other) {
      // extracts coords
      function getCoords(oCoords) {
        return {
          tl: new fabric.Point(oCoords.tl.x, oCoords.tl.y),
          tr: new fabric.Point(oCoords.tr.x, oCoords.tr.y),
          bl: new fabric.Point(oCoords.bl.x, oCoords.bl.y),
          br: new fabric.Point(oCoords.br.x, oCoords.br.y)
        };
      }

      var thisCoords = getCoords(this.oCoords),
        otherCoords = getCoords(other.oCoords);

      var intersection = fabric.Intersection.intersectPolygonPolygon(
        [thisCoords.tl, thisCoords.tr, thisCoords.br, thisCoords.bl],
        [otherCoords.tl, otherCoords.tr, otherCoords.br, otherCoords.bl]
      );

      return intersection.status === 'Intersection';
    },

    /**
     * Checks if object is fully contained within area of another object
     * @param {Object} other Object to test
     * @return {Boolean} true if object is fully contained within area of another object
     */
    isContainedWithinObject: function (other) {
      var boundingRect = other.getBoundingRect(),
        point1 = new fabric.Point(boundingRect.left, boundingRect.top),
        point2 = new fabric.Point(boundingRect.left + boundingRect.width, boundingRect.top + boundingRect.height);

      return this.isContainedWithinRect(point1, point2);
    },

    /**
     * Checks if object is fully contained within area formed by 2 points
     * @param {Object} pointTL top-left point of area
     * @param {Object} pointBR bottom-right point of area
     * @return {Boolean} true if object is fully contained within area formed by 2 points
     */
    isContainedWithinRect: function (pointTL, pointBR) {
      var boundingRect = this.getBoundingRect();

      return (
        boundingRect.left > pointTL.x &&
        boundingRect.left + boundingRect.width < pointBR.x &&
        boundingRect.top > pointTL.y &&
        boundingRect.top + boundingRect.height < pointBR.y
      );
    },

    /**
     * Checks if point is inside the object
     * @param {fabric.Point} point Point to check against
     * @return {Boolean} true if point is inside the object
     */
    containsPoint: function (point) {
      var lines = this._getImageLines(this.oCoords),
        xPoints = this._findCrossPoints(point, lines);

      // if xPoints is odd then point is inside the object
      return (xPoints !== 0 && xPoints % 2 === 1);
    },

    /**
     * Method that returns an object with the object edges in it, given the coordinates of the corners
     * @private
     * @param {Object} oCoords Coordinates of the object corners
     */
    _getImageLines: function (oCoords) {
      return {
        topline: {
          o: oCoords.tl,
          d: oCoords.tr
        },
        rightline: {
          o: oCoords.tr,
          d: oCoords.br
        },
        bottomline: {
          o: oCoords.br,
          d: oCoords.bl
        },
        leftline: {
          o: oCoords.bl,
          d: oCoords.tl
        }
      };
    },

    /**
     * Helper method to determine how many cross points are between the 4 object edges
     * and the horizontal line determined by a point on canvas
     * @private
     * @param {fabric.Point} point Point to check
     * @param {Object} oCoords Coordinates of the object being evaluated
     */
    _findCrossPoints: function (point, oCoords) {
      var b1, b2, a1, a2, xi, yi,
        xcount = 0,
        iLine;

      for (var lineKey in oCoords) {
        iLine = oCoords[lineKey];
        // optimisation 1: line below point. no cross
        if ((iLine.o.y < point.y) && (iLine.d.y < point.y)) {
          continue;
        }
        // optimisation 2: line above point. no cross
        if ((iLine.o.y >= point.y) && (iLine.d.y >= point.y)) {
          continue;
        }
        // optimisation 3: vertical line case
        if ((iLine.o.x === iLine.d.x) && (iLine.o.x >= point.x)) {
          xi = iLine.o.x;
          yi = point.y;
        }
        // calculate the intersection point
        else {
          b1 = 0;
          b2 = (iLine.d.y - iLine.o.y) / (iLine.d.x - iLine.o.x);
          a1 = point.y - b1 * point.x;
          a2 = iLine.o.y - b2 * iLine.o.x;

          xi = -(a1 - a2) / (b1 - b2);
          yi = a1 + b1 * xi;
        }
        // dont count xi < point.x cases
        if (xi >= point.x) {
          xcount += 1;
        }
        // optimisation 4: specific for square images
        if (xcount === 2) {
          break;
        }
      }
      return xcount;
    },

    /**
     * Returns width of an object's bounding rectangle
     * @deprecated since 1.0.4
     * @return {Number} width value
     */
    getBoundingRectWidth: function () {
      return this.getBoundingRect().width;
    },

    /**
     * Returns height of an object's bounding rectangle
     * @deprecated since 1.0.4
     * @return {Number} height value
     */
    getBoundingRectHeight: function () {
      return this.getBoundingRect().height;
    },

    /**
     * Returns coordinates of object's bounding rectangle (left, top, width, height)
     * @return {Object} Object with left, top, width, height properties
     */
    getBoundingRect: function () {
      this.oCoords || this.setCoords();

      var xCoords = [this.oCoords.tl.x, this.oCoords.tr.x, this.oCoords.br.x, this.oCoords.bl.x];
      var minX = fabric.util.array.min(xCoords);
      var maxX = fabric.util.array.max(xCoords);
      var width = Math.abs(minX - maxX);

      var yCoords = [this.oCoords.tl.y, this.oCoords.tr.y, this.oCoords.br.y, this.oCoords.bl.y];
      var minY = fabric.util.array.min(yCoords);
      var maxY = fabric.util.array.max(yCoords);
      var height = Math.abs(minY - maxY);

      return {
        left: minX,
        top: minY,
        width: width,
        height: height
      };
    },

    /**
     * Returns width of an object
     * @return {Number} width value
     */
    getWidth: function () {
      return this.width * this.scaleX;
    },

    /**
     * Returns height of an object
     * @return {Number} height value
     */
    getHeight: function () {
      return this.height * this.scaleY;
    },

    /**
     * Makes sure the scale is valid and modifies it if necessary
     * @private
     * @param {Number} value
     * @return {Number}
     */
    _constrainScale: function (value) {
      if (Math.abs(value) < this.minScaleLimit) {
        if (value < 0)
          return -this.minScaleLimit;
        else
          return this.minScaleLimit;
      }

      return value;
    },

    /**
     * Scales an object (equally by x and y)
     * @param value {Number} scale factor
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scale: function (value) {
      value = this._constrainScale(value);

      if (value < 0) {
        this.flipX = !this.flipX;
        this.flipY = !this.flipY;
        value *= -1;
      }

      this.scaleX = value;
      this.scaleY = value;
      this.setCoords();
      return this;
    },

    /**
     * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
     * @param value {Number} new width value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToWidth: function (value) {
      // adjust to bounding rect factor so that rotated shapes would fit as well
      var boundingRectFactor = this.getBoundingRectWidth() / this.getWidth();
      return this.scale(value / this.width / boundingRectFactor);
    },

    /**
     * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
     * @param value {Number} new height value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToHeight: function (value) {
      // adjust to bounding rect factor so that rotated shapes would fit as well
      var boundingRectFactor = this.getBoundingRectHeight() / this.getHeight();
      return this.scale(value / this.height / boundingRectFactor);
    },

    /**
     * Sets corner position coordinates based on current angle, width and height
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setCoords: function () {

      var strokeWidth = this.strokeWidth > 1 ? this.strokeWidth : 0,
        padding = this.padding,
        theta = degreesToRadians(this.angle);

      this.currentWidth = (this.width + strokeWidth) * this.scaleX + padding * 2;
      this.currentHeight = (this.height + strokeWidth) * this.scaleY + padding * 2;

      // If width is negative, make postive. Fixes path selection issue
      if (this.currentWidth < 0) {
        this.currentWidth = Math.abs(this.currentWidth);
      }

      var _hypotenuse = Math.sqrt(
        Math.pow(this.currentWidth / 2, 2) +
        Math.pow(this.currentHeight / 2, 2));

      var _angle = Math.atan(
        isFinite(this.currentHeight / this.currentWidth) ? this.currentHeight / this.currentWidth : 0);

      // offset added for rotate and scale actions
      var offsetX = Math.cos(_angle + theta) * _hypotenuse,
        offsetY = Math.sin(_angle + theta) * _hypotenuse,
        sinTh = Math.sin(theta),
        cosTh = Math.cos(theta);

      var coords = this.getCenterPoint();
      var tl = {
        x: coords.x - offsetX,
        y: coords.y - offsetY
      };
      var tr = {
        x: tl.x + (this.currentWidth * cosTh),
        y: tl.y + (this.currentWidth * sinTh)
      };
      var br = {
        x: tr.x - (this.currentHeight * sinTh),
        y: tr.y + (this.currentHeight * cosTh)
      };
      var bl = {
        x: tl.x - (this.currentHeight * sinTh),
        y: tl.y + (this.currentHeight * cosTh)
      };
      var ml = {
        x: tl.x - (this.currentHeight / 2 * sinTh),
        y: tl.y + (this.currentHeight / 2 * cosTh)
      };
      var mt = {
        x: tl.x + (this.currentWidth / 2 * cosTh),
        y: tl.y + (this.currentWidth / 2 * sinTh)
      };
      var mr = {
        x: tr.x - (this.currentHeight / 2 * sinTh),
        y: tr.y + (this.currentHeight / 2 * cosTh)
      };
      var mb = {
        x: bl.x + (this.currentWidth / 2 * cosTh),
        y: bl.y + (this.currentWidth / 2 * sinTh)
      };
      var mtr = {
        x: mt.x,
        y: mt.y
      };

      // debugging

      // setTimeout(function() {
      //   canvas.contextTop.fillStyle = 'green';
      //   canvas.contextTop.fillRect(mb.x, mb.y, 3, 3);
      //   canvas.contextTop.fillRect(bl.x, bl.y, 3, 3);
      //   canvas.contextTop.fillRect(br.x, br.y, 3, 3);
      //   canvas.contextTop.fillRect(tl.x, tl.y, 3, 3);
      //   canvas.contextTop.fillRect(tr.x, tr.y, 3, 3);
      //   canvas.contextTop.fillRect(ml.x, ml.y, 3, 3);
      //   canvas.contextTop.fillRect(mr.x, mr.y, 3, 3);
      //   canvas.contextTop.fillRect(mt.x, mt.y, 3, 3);
      // }, 50);

      this.oCoords = {
        // corners
        tl: tl, tr: tr, br: br, bl: bl,
        // middle
        ml: ml, mt: mt, mr: mr, mb: mb,
        // rotating point
        mtr: mtr
      };

      // set coordinates of the draggable boxes in the corners used to scale/rotate the image
      this._setCornerCoords && this._setCornerCoords();

      return this;
    }
  });
})();

fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * Moves an object to the bottom of the stack of drawn objects
   * @return {fabric.Object} thisArg
   * @chainable
   */
  sendToBack: function () {
    if (this.group) {
      fabric.StaticCanvas.prototype.sendToBack.call(this.group, this);
    } else {
      this.canvas.sendToBack(this);
    }
    return this;
  },

  /**
   * Moves an object to the top of the stack of drawn objects
   * @return {fabric.Object} thisArg
   * @chainable
   */
  bringToFront: function () {
    if (this.group) {
      fabric.StaticCanvas.prototype.bringToFront.call(this.group, this);
    } else {
      this.canvas.bringToFront(this);
    }
    return this;
  },

  /**
   * Moves an object down in stack of drawn objects
   * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
   * @return {fabric.Object} thisArg
   * @chainable
   */
  sendBackwards: function (intersecting) {
    if (this.group) {
      fabric.StaticCanvas.prototype.sendBackwards.call(this.group, this, intersecting);
    } else {
      this.canvas.sendBackwards(this, intersecting);
    }
    return this;
  },

  /**
   * Moves an object up in stack of drawn objects
   * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
   * @return {fabric.Object} thisArg
   * @chainable
   */
  bringForward: function (intersecting) {
    if (this.group) {
      fabric.StaticCanvas.prototype.bringForward.call(this.group, this, intersecting);
    } else {
      this.canvas.bringForward(this, intersecting);
    }
    return this;
  },

  /**
   * Moves an object to specified level in stack of drawn objects
   * @param {Number} index New position of object
   * @return {fabric.Object} thisArg
   * @chainable
   */
  moveTo: function (index) {
    if (this.group) {
      fabric.StaticCanvas.prototype.moveTo.call(this.group, this, index);
    } else {
      this.canvas.moveTo(this, index);
    }
    return this;
  }
});

/* _TO_SVG_START_ */
fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * Returns styles-string for svg-export
   * @return {String}
   */
  getSvgStyles: function () {

    var fill = this.fill
      ? (this.fill.toLive ? 'url(#SVGID_' + this.fill.id + ')' : this.fill)
      : 'none';

    var stroke = this.stroke
      ? (this.stroke.toLive ? 'url(#SVGID_' + this.stroke.id + ')' : this.stroke)
      : 'none';

    var strokeWidth = this.strokeWidth ? this.strokeWidth : '0';
    var strokeDashArray = this.strokeDashArray ? this.strokeDashArray.join(' ') : '';
    var strokeLineCap = this.strokeLineCap ? this.strokeLineCap : 'butt';
    var strokeLineJoin = this.strokeLineJoin ? this.strokeLineJoin : 'miter';
    var strokeMiterLimit = this.strokeMiterLimit ? this.strokeMiterLimit : '4';
    var opacity = typeof this.opacity !== 'undefined' ? this.opacity : '1';

    var visibility = this.visible ? '' : ' visibility: hidden;';
    var filter = this.shadow && this.type !== 'text' ? 'filter: url(#SVGID_' + this.shadow.id + ');' : '';

    return [
      'stroke: ', stroke, '; ',
      'stroke-width: ', strokeWidth, '; ',
      'stroke-dasharray: ', strokeDashArray, '; ',
      'stroke-linecap: ', strokeLineCap, '; ',
      'stroke-linejoin: ', strokeLineJoin, '; ',
      'stroke-miterlimit: ', strokeMiterLimit, '; ',
      'fill: ', fill, '; ',
      'opacity: ', opacity, ';',
      filter,
      visibility
    ].join('');
  },

  /**
   * Returns transform-string for svg-export
   * @return {String}
   */
  getSvgTransform: function () {
    var toFixed = fabric.util.toFixed;
    var angle = this.getAngle();
    var center = this.getCenterPoint();

    var NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;

    var translatePart = 'translate(' +
      toFixed(center.x, NUM_FRACTION_DIGITS) +
      ' ' +
      toFixed(center.y, NUM_FRACTION_DIGITS) +
      ')';

    var anglePart = angle !== 0
      ? (' rotate(' + toFixed(angle, NUM_FRACTION_DIGITS) + ')')
      : '';

    var scalePart = (this.scaleX === 1 && this.scaleY === 1)
      ? '' :
      (' scale(' +
        toFixed(this.scaleX, NUM_FRACTION_DIGITS) +
        ' ' +
        toFixed(this.scaleY, NUM_FRACTION_DIGITS) +
        ')');

    var flipXPart = this.flipX ? 'matrix(-1 0 0 1 0 0) ' : '';
    var flipYPart = this.flipY ? 'matrix(1 0 0 -1 0 0)' : '';

    return [translatePart, anglePart, scalePart, flipXPart, flipYPart].join('');
  },

  /**
   * @private
   */
  _createBaseSVGMarkup: function () {
    var markup = [];

    if (this.fill && this.fill.toLive) {
      markup.push(this.fill.toSVG(this, false));
    }
    if (this.stroke && this.stroke.toLive) {
      markup.push(this.stroke.toSVG(this, false));
    }
    if (this.shadow) {
      markup.push(this.shadow.toSVG(this));
    }
    return markup;
  }
});
/* _TO_SVG_END_ */

/*
  Depends on `stateProperties`
*/
fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * Returns true if object state (one of its state properties) was changed
   * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
   */
  hasStateChanged: function () {
    return this.stateProperties.some(function (prop) {
      return this.get(prop) !== this.originalState[prop];
    }, this);
  },

  /**
   * Saves state of an object
   * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
   * @return {fabric.Object} thisArg
   */
  saveState: function (options) {
    this.stateProperties.forEach(function (prop) {
      this.originalState[prop] = this.get(prop);
    }, this);

    if (options && options.stateProperties) {
      options.stateProperties.forEach(function (prop) {
        this.originalState[prop] = this.get(prop);
      }, this);
    }

    return this;
  },

  /**
   * Setups state of an object
   * @return {fabric.Object} thisArg
   */
  setupState: function () {
    this.originalState = {};
    this.saveState();

    return this;
  }
});

(function () {

  var getPointer = fabric.util.getPointer,
    degreesToRadians = fabric.util.degreesToRadians,
    isVML = typeof G_vmlCanvasManager !== 'undefined';

  fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

    /**
     * The object interactivity controls.
     * @private
     */
    _controlsVisibility: null,

    /**
     * Determines which corner has been clicked
     * @private
     * @param {Event} e Event object
     * @param {Object} offset Canvas offset
     * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
     */
    _findTargetCorner: function (e, offset) {
      if (!this.hasControls || !this.active) return false;

      var pointer = getPointer(e, this.canvas.upperCanvasEl),
        ex = pointer.x - offset.left,
        ey = pointer.y - offset.top,
        xPoints,
        lines;

      for (var i in this.oCoords) {

        if (!this.isControlVisible(i)) {
          continue;
        }

        if (i === 'mtr' && !this.hasRotatingPoint) {
          continue;
        }

        if (this.get('lockUniScaling') && (i === 'mt' || i === 'mr' || i === 'mb' || i === 'ml')) {
          continue;
        }

        lines = this._getImageLines(this.oCoords[i].corner);

        // debugging

        // canvas.contextTop.fillRect(lines.bottomline.d.x, lines.bottomline.d.y, 2, 2);
        // canvas.contextTop.fillRect(lines.bottomline.o.x, lines.bottomline.o.y, 2, 2);

        // canvas.contextTop.fillRect(lines.leftline.d.x, lines.leftline.d.y, 2, 2);
        // canvas.contextTop.fillRect(lines.leftline.o.x, lines.leftline.o.y, 2, 2);

        // canvas.contextTop.fillRect(lines.topline.d.x, lines.topline.d.y, 2, 2);
        // canvas.contextTop.fillRect(lines.topline.o.x, lines.topline.o.y, 2, 2);

        // canvas.contextTop.fillRect(lines.rightline.d.x, lines.rightline.d.y, 2, 2);
        // canvas.contextTop.fillRect(lines.rightline.o.x, lines.rightline.o.y, 2, 2);

        xPoints = this._findCrossPoints({x: ex, y: ey}, lines);
        if (xPoints !== 0 && xPoints % 2 === 1) {
          this.__corner = i;
          return i;
        }
      }
      return false;
    },

    /**
     * Sets the coordinates of the draggable boxes in the corners of
     * the image used to scale/rotate it.
     * @private
     */
    _setCornerCoords: function () {
      var coords = this.oCoords,
        theta = degreesToRadians(this.angle),
        newTheta = degreesToRadians(45 - this.angle),
        cornerHypotenuse = Math.sqrt(2 * Math.pow(this.cornerSize, 2)) / 2,
        cosHalfOffset = cornerHypotenuse * Math.cos(newTheta),
        sinHalfOffset = cornerHypotenuse * Math.sin(newTheta),
        sinTh = Math.sin(theta),
        cosTh = Math.cos(theta);

      coords.tl.corner = {
        tl: {
          x: coords.tl.x - sinHalfOffset,
          y: coords.tl.y - cosHalfOffset
        },
        tr: {
          x: coords.tl.x + cosHalfOffset,
          y: coords.tl.y - sinHalfOffset
        },
        bl: {
          x: coords.tl.x - cosHalfOffset,
          y: coords.tl.y + sinHalfOffset
        },
        br: {
          x: coords.tl.x + sinHalfOffset,
          y: coords.tl.y + cosHalfOffset
        }
      };

      coords.tr.corner = {
        tl: {
          x: coords.tr.x - sinHalfOffset,
          y: coords.tr.y - cosHalfOffset
        },
        tr: {
          x: coords.tr.x + cosHalfOffset,
          y: coords.tr.y - sinHalfOffset
        },
        br: {
          x: coords.tr.x + sinHalfOffset,
          y: coords.tr.y + cosHalfOffset
        },
        bl: {
          x: coords.tr.x - cosHalfOffset,
          y: coords.tr.y + sinHalfOffset
        }
      };

      coords.bl.corner = {
        tl: {
          x: coords.bl.x - sinHalfOffset,
          y: coords.bl.y - cosHalfOffset
        },
        bl: {
          x: coords.bl.x - cosHalfOffset,
          y: coords.bl.y + sinHalfOffset
        },
        br: {
          x: coords.bl.x + sinHalfOffset,
          y: coords.bl.y + cosHalfOffset
        },
        tr: {
          x: coords.bl.x + cosHalfOffset,
          y: coords.bl.y - sinHalfOffset
        }
      };

      coords.br.corner = {
        tr: {
          x: coords.br.x + cosHalfOffset,
          y: coords.br.y - sinHalfOffset
        },
        bl: {
          x: coords.br.x - cosHalfOffset,
          y: coords.br.y + sinHalfOffset
        },
        br: {
          x: coords.br.x + sinHalfOffset,
          y: coords.br.y + cosHalfOffset
        },
        tl: {
          x: coords.br.x - sinHalfOffset,
          y: coords.br.y - cosHalfOffset
        }
      };

      coords.ml.corner = {
        tl: {
          x: coords.ml.x - sinHalfOffset,
          y: coords.ml.y - cosHalfOffset
        },
        tr: {
          x: coords.ml.x + cosHalfOffset,
          y: coords.ml.y - sinHalfOffset
        },
        bl: {
          x: coords.ml.x - cosHalfOffset,
          y: coords.ml.y + sinHalfOffset
        },
        br: {
          x: coords.ml.x + sinHalfOffset,
          y: coords.ml.y + cosHalfOffset
        }
      };

      coords.mt.corner = {
        tl: {
          x: coords.mt.x - sinHalfOffset,
          y: coords.mt.y - cosHalfOffset
        },
        tr: {
          x: coords.mt.x + cosHalfOffset,
          y: coords.mt.y - sinHalfOffset
        },
        bl: {
          x: coords.mt.x - cosHalfOffset,
          y: coords.mt.y + sinHalfOffset
        },
        br: {
          x: coords.mt.x + sinHalfOffset,
          y: coords.mt.y + cosHalfOffset
        }
      };

      coords.mr.corner = {
        tl: {
          x: coords.mr.x - sinHalfOffset,
          y: coords.mr.y - cosHalfOffset
        },
        tr: {
          x: coords.mr.x + cosHalfOffset,
          y: coords.mr.y - sinHalfOffset
        },
        bl: {
          x: coords.mr.x - cosHalfOffset,
          y: coords.mr.y + sinHalfOffset
        },
        br: {
          x: coords.mr.x + sinHalfOffset,
          y: coords.mr.y + cosHalfOffset
        }
      };

      coords.mb.corner = {
        tl: {
          x: coords.mb.x - sinHalfOffset,
          y: coords.mb.y - cosHalfOffset
        },
        tr: {
          x: coords.mb.x + cosHalfOffset,
          y: coords.mb.y - sinHalfOffset
        },
        bl: {
          x: coords.mb.x - cosHalfOffset,
          y: coords.mb.y + sinHalfOffset
        },
        br: {
          x: coords.mb.x + sinHalfOffset,
          y: coords.mb.y + cosHalfOffset
        }
      };

      coords.mtr.corner = {
        tl: {
          x: coords.mtr.x - sinHalfOffset + (sinTh * this.rotatingPointOffset),
          y: coords.mtr.y - cosHalfOffset - (cosTh * this.rotatingPointOffset)
        },
        tr: {
          x: coords.mtr.x + cosHalfOffset + (sinTh * this.rotatingPointOffset),
          y: coords.mtr.y - sinHalfOffset - (cosTh * this.rotatingPointOffset)
        },
        bl: {
          x: coords.mtr.x - cosHalfOffset + (sinTh * this.rotatingPointOffset),
          y: coords.mtr.y + sinHalfOffset - (cosTh * this.rotatingPointOffset)
        },
        br: {
          x: coords.mtr.x + sinHalfOffset + (sinTh * this.rotatingPointOffset),
          y: coords.mtr.y + cosHalfOffset - (cosTh * this.rotatingPointOffset)
        }
      };
    },
    /**
     * Draws borders of an object's bounding box.
     * Requires public properties: width, height
     * Requires public options: padding, borderColor
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawBorders: function (ctx) {
      if (!this.hasBorders) return this;

      var padding = this.padding,
        padding2 = padding * 2,
        strokeWidth = ~~(this.strokeWidth / 2) * 2; // Round down to even number

      ctx.save();

      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
      ctx.strokeStyle = this.borderColor;

      var scaleX = 1 / this._constrainScale(this.scaleX),
        scaleY = 1 / this._constrainScale(this.scaleY);

      ctx.lineWidth = 1 / this.borderScaleFactor;

      ctx.scale(scaleX, scaleY);

      var w = this.getWidth(),
        h = this.getHeight();

      ctx.strokeRect(
        ~~(-(w / 2) - padding - strokeWidth / 2 * this.scaleX) - 0.5, // offset needed to make lines look sharper
        ~~(-(h / 2) - padding - strokeWidth / 2 * this.scaleY) - 0.5,
        ~~(w + padding2 + strokeWidth * this.scaleX) + 1, // double offset needed to make lines look sharper
        ~~(h + padding2 + strokeWidth * this.scaleY) + 1
      );

      if (this.hasRotatingPoint && this.isControlVisible('mtr') && !this.get('lockRotation') && this.hasControls) {

        var rotateHeight = (
          this.flipY
            ? h + (strokeWidth * this.scaleY) + (padding * 2)
            : -h - (strokeWidth * this.scaleY) - (padding * 2)
        ) / 2;

        ctx.beginPath();
        ctx.moveTo(0, rotateHeight);
        ctx.lineTo(0, rotateHeight + (this.flipY ? this.rotatingPointOffset : -this.rotatingPointOffset));
        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
      return this;
    },

    /**
     * Draws corners of an object's bounding box.
     * Requires public properties: width, height, scaleX, scaleY
     * Requires public options: cornerSize, padding
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawControls: function (ctx) {
      if (!this.hasControls) return this;

      var size = this.cornerSize,
        size2 = size / 2,
        strokeWidth2 = ~~(this.strokeWidth / 2), // half strokeWidth rounded down
        left = -(this.width / 2),
        top = -(this.height / 2),
        paddingX = this.padding / this.scaleX,
        paddingY = this.padding / this.scaleY,
        scaleOffsetY = size2 / this.scaleY,
        scaleOffsetX = size2 / this.scaleX,
        scaleOffsetSizeX = (size2 - size) / this.scaleX,
        scaleOffsetSizeY = (size2 - size) / this.scaleY,
        height = this.height,
        width = this.width,
        methodName = this.transparentCorners ? 'strokeRect' : 'fillRect';

      ctx.save();

      ctx.lineWidth = 1 / Math.max(this.scaleX, this.scaleY);

      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
      ctx.strokeStyle = ctx.fillStyle = this.cornerColor;

      // top-left
      this._drawControl('tl', ctx, methodName,
        left - scaleOffsetX - strokeWidth2 - paddingX,
        top - scaleOffsetY - strokeWidth2 - paddingY);

      // top-right
      this._drawControl('tr', ctx, methodName,
        left + width - scaleOffsetX + strokeWidth2 + paddingX,
        top - scaleOffsetY - strokeWidth2 - paddingY);

      // bottom-left
      this._drawControl('bl', ctx, methodName,
        left - scaleOffsetX - strokeWidth2 - paddingX,
        top + height + scaleOffsetSizeY + strokeWidth2 + paddingY);

      // bottom-right
      this._drawControl('br', ctx, methodName,
        left + width + scaleOffsetSizeX + strokeWidth2 + paddingX,
        top + height + scaleOffsetSizeY + strokeWidth2 + paddingY);

      if (!this.get('lockUniScaling')) {

        // middle-top
        this._drawControl('mt', ctx, methodName,
          left + width / 2 - scaleOffsetX,
          top - scaleOffsetY - strokeWidth2 - paddingY);

        // middle-bottom
        this._drawControl('mb', ctx, methodName,
          left + width / 2 - scaleOffsetX,
          top + height + scaleOffsetSizeY + strokeWidth2 + paddingY);

        // middle-right
        this._drawControl('mb', ctx, methodName,
          left + width + scaleOffsetSizeX + strokeWidth2 + paddingX,
          top + height / 2 - scaleOffsetY);

        // middle-left
        this._drawControl('ml', ctx, methodName,
          left - scaleOffsetX - strokeWidth2 - paddingX,
          top + height / 2 - scaleOffsetY);
      }

      // middle-top-rotate
      if (this.hasRotatingPoint) {
        this._drawControl('mtr', ctx, methodName,
          left + width / 2 - scaleOffsetX,
          this.flipY
            ? (top + height + (this.rotatingPointOffset / this.scaleY) - this.cornerSize / this.scaleX / 2 +
              strokeWidth2 + paddingY)
            : (top - (this.rotatingPointOffset / this.scaleY) - this.cornerSize / this.scaleY / 2 - strokeWidth2 -
              paddingY));
      }

      ctx.restore();

      return this;
    },

    /**
     * @private
     */
    _drawControl: function (control, ctx, methodName, left, top) {
      var sizeX = this.cornerSize / this.scaleX,
        sizeY = this.cornerSize / this.scaleY;

      if (this.isControlVisible(control)) {
        isVML || this.transparentCorners || ctx.clearRect(left, top, sizeX, sizeY);
        ctx[methodName](left, top, sizeX, sizeY);
      }
    },

    /**
     * Returns true if the specified control is visible, false otherwise.
     * @param {String} controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
     * @returns {Boolean} true if the specified control is visible, false otherwise
     */
    isControlVisible: function (controlName) {
      return this._getControlsVisibility()[controlName];
    },

    /**
     * Sets the visibility of the specified control.
     * @param {String} controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
     * @param {Boolean} visible true to set the specified control visible, false otherwise
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setControlVisible: function (controlName, visible) {
      this._getControlsVisibility()[controlName] = visible;
      return this;
    },

    /**
     * Sets the visibility state of object controls.
     * @param {Object} [options] Options object
     * @param {Boolean} [options.bl] true to enable the bottom-left control, false to disable it
     * @param {Boolean} [options.br] true to enable the bottom-right control, false to disable it
     * @param {Boolean} [options.mb] true to enable the middle-bottom control, false to disable it
     * @param {Boolean} [options.ml] true to enable the middle-left control, false to disable it
     * @param {Boolean} [options.mr] true to enable the middle-right control, false to disable it
     * @param {Boolean} [options.mt] true to enable the middle-top control, false to disable it
     * @param {Boolean} [options.tl] true to enable the top-left control, false to disable it
     * @param {Boolean} [options.tr] true to enable the top-right control, false to disable it
     * @param {Boolean} [options.mtr] true to enable the middle-top-rotate control, false to disable it
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setControlsVisibility: function (options) {
      options || (options = {});

      for (var p in options) {
        this.setControlVisible(p, options[p]);
      }
      return this;
    },

    /**
     * Returns the instance of the control visibility set for this object.
     * @private
     * @returns {Object}
     */
    _getControlsVisibility: function () {
      if (!this._controlsVisibility) {
        this._controlsVisibility = {
          tl: true,
          tr: true,
          br: true,
          bl: true,
          ml: true,
          mt: true,
          mr: true,
          mb: true,
          mtr: true
        };
      }
      return this._controlsVisibility;
    }
  });
})();

fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Animation duration (in ms) for fx* methods
   * @type Number
   * @default
   */
  FX_DURATION: 500,

  /**
   * Centers object horizontally with animation.
   * @param {fabric.Object} object Object to center
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @param {Function} [callbacks.onComplete] Invoked on completion
   * @param {Function} [callbacks.onChange] Invoked on every step of animation
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxCenterObjectH: function (object, callbacks) {
    callbacks = callbacks || {};

    var empty = function () {
      },
      onComplete = callbacks.onComplete || empty,
      onChange = callbacks.onChange || empty,
      _this = this;

    fabric.util.animate({
      startValue: object.get('left'),
      endValue: this.getCenter().left,
      duration: this.FX_DURATION,
      onChange: function (value) {
        object.set('left', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function () {
        object.setCoords();
        onComplete();
      }
    });

    return this;
  },

  /**
   * Centers object vertically with animation.
   * @param {fabric.Object} object Object to center
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @param {Function} [callbacks.onComplete] Invoked on completion
   * @param {Function} [callbacks.onChange] Invoked on every step of animation
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxCenterObjectV: function (object, callbacks) {
    callbacks = callbacks || {};

    var empty = function () {
      },
      onComplete = callbacks.onComplete || empty,
      onChange = callbacks.onChange || empty,
      _this = this;

    fabric.util.animate({
      startValue: object.get('top'),
      endValue: this.getCenter().top,
      duration: this.FX_DURATION,
      onChange: function (value) {
        object.set('top', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function () {
        object.setCoords();
        onComplete();
      }
    });

    return this;
  },

  /**
   * Same as `fabric.Canvas#remove` but animated
   * @param {fabric.Object} object Object to remove
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @param {Function} [callbacks.onComplete] Invoked on completion
   * @param {Function} [callbacks.onChange] Invoked on every step of animation
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxRemove: function (object, callbacks) {
    callbacks = callbacks || {};

    var empty = function () {
      },
      onComplete = callbacks.onComplete || empty,
      onChange = callbacks.onChange || empty,
      _this = this;

    fabric.util.animate({
      startValue: object.get('opacity'),
      endValue: 0,
      duration: this.FX_DURATION,
      onStart: function () {
        object.set('active', false);
      },
      onChange: function (value) {
        object.set('opacity', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function () {
        _this.remove(object);
        onComplete();
      }
    });

    return this;
  }
});

fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {
  /**
   * Animates object's properties
   * @param {String|Object} property to animate (if string) or properties to animate (if object)
   * @param {Number|Object} value to animate property to (if string was given first) or options object
   * @return {fabric.Object} thisArg
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#animation}
   * @chainable
   *
   * As object — multiple properties
   *
   * object.animate({ left: ..., top: ... });
   * object.animate({ left: ..., top: ... }, { duration: ... });
   *
   * As string — one property
   *
   * object.animate('left', ...);
   * object.animate('left', { duration: ... });
   *
   */
  animate: function () {
    if (arguments[0] && typeof arguments[0] === 'object') {
      var propsToAnimate = [], prop, skipCallbacks;
      for (prop in arguments[0]) {
        propsToAnimate.push(prop);
      }
      for (var i = 0, len = propsToAnimate.length; i < len; i++) {
        prop = propsToAnimate[i];
        skipCallbacks = i !== len - 1;
        this._animate(prop, arguments[0][prop], arguments[1], skipCallbacks);
      }
    } else {
      this._animate.apply(this, arguments);
    }
    return this;
  },

  /**
   * @private
   * @param {String} property Property to animate
   * @param {String} to Value to animate to
   * @param {Object} [options] Options object
   * @param {Boolean} [skipCallbacks] When true, callbacks like onchange and oncomplete are not invoked
   */
  _animate: function (property, to, options, skipCallbacks) {
    var obj = this, propPair;

    to = to.toString();

    if (!options) {
      options = {};
    } else {
      options = fabric.util.object.clone(options);
    }

    if (~property.indexOf('.')) {
      propPair = property.split('.');
    }

    var currentValue = propPair
      ? this.get(propPair[0])[propPair[1]]
      : this.get(property);

    if (!('from' in options)) {
      options.from = currentValue;
    }

    if (~to.indexOf('=')) {
      to = currentValue + parseFloat(to.replace('=', ''));
    } else {
      to = parseFloat(to);
    }

    fabric.util.animate({
      startValue: options.from,
      endValue: to,
      byValue: options.by,
      easing: options.easing,
      duration: options.duration,
      abort: options.abort && function () {
        return options.abort.call(obj);
      },
      onChange: function (value) {
        if (propPair) {
          obj[propPair[0]][propPair[1]] = value;
        } else {
          obj.set(property, value);
        }
        if (skipCallbacks) return;
        options.onChange && options.onChange();
      },
      onComplete: function () {
        if (skipCallbacks) return;

        obj.setCoords();
        options.onComplete && options.onComplete();
      }
    });
  }
});

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend,
    coordProps = {'x1': 1, 'x2': 1, 'y1': 1, 'y2': 1},
    supportsLineDash = fabric.StaticCanvas.supports('setLineDash');

  if (fabric.Line) {
    // fabric.warn('fabric.Line is already defined');
    return;
  }

  /**
   * Line class
   * @class fabric.Line
   * @extends fabric.Object
   * @see {@link fabric.Line#initialize} for constructor definition
   */
  fabric.Line = fabric.util.createClass(fabric.Object, /** @lends fabric.Line.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'line',

    /**
     * Constructor
     * @param {Array} [points] Array of points
     * @param {Object} [options] Options object
     * @return {fabric.Line} thisArg
     */
    initialize: function (points, options) {
      options = options || {};

      if (!points) {
        points = [0, 0, 0, 0];
      }

      this.callSuper('initialize', options);

      this.set('x1', points[0]);
      this.set('y1', points[1]);
      this.set('x2', points[2]);
      this.set('y2', points[3]);

      this._setWidthHeight(options);
    },

    /**
     * @private
     * @param {Object} [options] Options
     */
    _setWidthHeight: function (options) {
      options || (options = {});

      this.set('width', Math.abs(this.x2 - this.x1) || 1);
      this.set('height', Math.abs(this.y2 - this.y1) || 1);

      this.set('left', 'left' in options ? options.left : (Math.min(this.x1, this.x2) + this.width / 2));
      this.set('top', 'top' in options ? options.top : (Math.min(this.y1, this.y2) + this.height / 2));
    },

    /**
     * @private
     * @param {String} key
     * @param {Any} value
     */
    _set: function (key, value) {
      this[key] = value;
      if (key in coordProps) {
        this._setWidthHeight();
      }
      return this;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function (ctx) {
      ctx.beginPath();

      var isInPathGroup = this.group && this.group.type === 'path-group';
      if (isInPathGroup && !this.transformMatrix) {
        ctx.translate(-this.group.width / 2 + this.left, -this.group.height / 2 + this.top);
      }

      if (!this.strokeDashArray || this.strokeDashArray && supportsLineDash) {

        // move from center (of virtual box) to its left/top corner
        // we can't assume x1, y1 is top left and x2, y2 is bottom right
        var xMult = this.x1 <= this.x2 ? -1 : 1;
        var yMult = this.y1 <= this.y2 ? -1 : 1;

        ctx.moveTo(
          this.width === 1 ? 0 : (xMult * this.width / 2),
          this.height === 1 ? 0 : (yMult * this.height / 2));

        ctx.lineTo(
          this.width === 1 ? 0 : (xMult * -1 * this.width / 2),
          this.height === 1 ? 0 : (yMult * -1 * this.height / 2));
      }

      ctx.lineWidth = this.strokeWidth;

      // TODO: test this
      // make sure setting "fill" changes color of a line
      // (by copying fillStyle to strokeStyle, since line is stroked, not filled)
      var origStrokeStyle = ctx.strokeStyle;
      ctx.strokeStyle = this.stroke || ctx.fillStyle;
      this._renderStroke(ctx);
      ctx.strokeStyle = origStrokeStyle;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function (ctx) {
      var
        xMult = this.x1 <= this.x2 ? -1 : 1,
        yMult = this.y1 <= this.y2 ? -1 : 1,
        x = this.width === 1 ? 0 : xMult * this.width / 2,
        y = this.height === 1 ? 0 : yMult * this.height / 2;

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, x, y, -x, -y, this.strokeDashArray);
      ctx.closePath();
    },

    /**
     * Returns object representation of an instance
     * @methd toObject
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        x1: this.get('x1'),
        y1: this.get('y1'),
        x2: this.get('x2'),
        y2: this.get('y2')
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var markup = this._createBaseSVGMarkup();

      markup.push(
        '<line ',
        'x1="', this.get('x1'),
        '" y1="', this.get('y1'),
        '" x2="', this.get('x2'),
        '" y2="', this.get('y2'),
        '" style="', this.getSvgStyles(),
        '"/>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function () {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Line.fromElement})
   * @static
   * @memberOf fabric.Line
   * @see http://www.w3.org/TR/SVG/shapes.html#LineElement
   */
  fabric.Line.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('x1 y1 x2 y2'.split(' '));

  /**
   * Returns fabric.Line instance from an SVG element
   * @static
   * @memberOf fabric.Line
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromElement = function (element, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Line.ATTRIBUTE_NAMES);
    var points = [
      parsedAttributes.x1 || 0,
      parsedAttributes.y1 || 0,
      parsedAttributes.x2 || 0,
      parsedAttributes.y2 || 0
    ];
    return new fabric.Line(points, extend(parsedAttributes, options));
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Line instance from an object representation
   * @static
   * @memberOf fabric.Line
   * @param {Object} object Object to create an instance from
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromObject = function (object) {
    var points = [object.x1, object.y1, object.x2, object.y2];
    return new fabric.Line(points, object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    piBy2 = Math.PI * 2,
    extend = fabric.util.object.extend;

  if (fabric.Circle) {
    // fabric.warn('fabric.Circle is already defined.');
    return;
  }

  /**
   * Circle class
   * @class fabric.Circle
   * @extends fabric.Object
   * @see {@link fabric.Circle#initialize} for constructor definition
   */
  fabric.Circle = fabric.util.createClass(fabric.Object, /** @lends fabric.Circle.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'circle',

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {fabric.Circle} thisArg
     */
    initialize: function (options) {
      options = options || {};

      this.set('radius', options.radius || 0);
      this.callSuper('initialize', options);
    },

    /**
     * @private
     * @param {String} key
     * @param {Any} value
     * @return {fabric.Circle} thisArg
     */
    _set: function (key, value) {
      this.callSuper('_set', key, value);

      if (key === 'radius') {
        this.setRadius(value);
      }

      return this;
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        radius: this.get('radius')
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var markup = this._createBaseSVGMarkup();

      markup.push(
        '<circle ',
        'cx="0" cy="0" ',
        'r="', this.radius,
        '" style="', this.getSvgStyles(),
        '" transform="', this.getSvgTransform(),
        '"/>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function (ctx, noTransform) {
      ctx.beginPath();
      // multiply by currently set alpha (the one that was set by path group where this object is contained, for example)
      ctx.globalAlpha = this.group ? (ctx.globalAlpha * this.opacity) : this.opacity;
      ctx.arc(noTransform ? this.left : 0, noTransform ? this.top : 0, this.radius, 0, piBy2, false);
      ctx.closePath();

      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * Returns horizontal radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRadiusX: function () {
      return this.get('radius') * this.get('scaleX');
    },

    /**
     * Returns vertical radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRadiusY: function () {
      return this.get('radius') * this.get('scaleY');
    },

    /**
     * Sets radius of an object (and updates width accordingly)
     * @return {Number}
     */
    setRadius: function (value) {
      this.radius = value;
      this.set('width', value * 2).set('height', value * 2);
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function () {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Circle.fromElement})
   * @static
   * @memberOf fabric.Circle
   * @see: http://www.w3.org/TR/SVG/shapes.html#CircleElement
   */
  fabric.Circle.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('cx cy r'.split(' '));

  /**
   * Returns {@link fabric.Circle} instance from an SVG element
   * @static
   * @memberOf fabric.Circle
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @throws {Error} If value of `r` attribute is missing or invalid
   * @return {fabric.Circle} Instance of fabric.Circle
   */
  fabric.Circle.fromElement = function (element, options) {
    options || (options = {});
    var parsedAttributes = fabric.parseAttributes(element, fabric.Circle.ATTRIBUTE_NAMES);
    if (!isValidRadius(parsedAttributes)) {
      throw new Error('value of `r` attribute is required and can not be negative');
    }
    if ('left' in parsedAttributes) {
      parsedAttributes.left -= (options.width / 2) || 0;
    }
    if ('top' in parsedAttributes) {
      parsedAttributes.top -= (options.height / 2) || 0;
    }
    var obj = new fabric.Circle(extend(parsedAttributes, options));

    obj.cx = parseFloat(element.getAttribute('cx')) || 0;
    obj.cy = parseFloat(element.getAttribute('cy')) || 0;

    return obj;
  };

  /**
   * @private
   */
  function isValidRadius(attributes) {
    return (('radius' in attributes) && (attributes.radius > 0));
  }

  /* _FROM_SVG_END_ */

  /**
   * Returns {@link fabric.Circle} instance from an object representation
   * @static
   * @memberOf fabric.Circle
   * @param {Object} object Object to create an instance from
   * @return {Object} Instance of fabric.Circle
   */
  fabric.Circle.fromObject = function (object) {
    return new fabric.Circle(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {});

  if (fabric.Triangle) {
    // fabric.warn('fabric.Triangle is already defined');
    return;
  }

  /**
   * Triangle class
   * @class fabric.Triangle
   * @extends fabric.Object
   * @return {fabric.Triangle} thisArg
   * @see {@link fabric.Triangle#initialize} for constructor definition
   */
  fabric.Triangle = fabric.util.createClass(fabric.Object, /** @lends fabric.Triangle.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'triangle',

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function (options) {
      options = options || {};

      this.callSuper('initialize', options);

      this.set('width', options.width || 100).set('height', options.height || 100);
    },

    /**
     * @private
     * @param ctx {CanvasRenderingContext2D} Context to render on
     */
    _render: function (ctx) {
      var widthBy2 = this.width / 2,
        heightBy2 = this.height / 2;

      ctx.beginPath();
      ctx.moveTo(-widthBy2, heightBy2);
      ctx.lineTo(0, -heightBy2);
      ctx.lineTo(widthBy2, heightBy2);
      ctx.closePath();

      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private
     * @param ctx {CanvasRenderingContext2D} Context to render on
     */
    _renderDashedStroke: function (ctx) {
      var widthBy2 = this.width / 2,
        heightBy2 = this.height / 2;

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, -widthBy2, heightBy2, 0, -heightBy2, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, 0, -heightBy2, widthBy2, heightBy2, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, widthBy2, heightBy2, -widthBy2, heightBy2, this.strokeDashArray);
      ctx.closePath();
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var markup = this._createBaseSVGMarkup(),
        widthBy2 = this.width / 2,
        heightBy2 = this.height / 2;

      var points = [
        -widthBy2 + ' ' + heightBy2,
        '0 ' + -heightBy2,
        widthBy2 + ' ' + heightBy2
      ].join(',');

      markup.push(
        '<polygon ',
        'points="', points,
        '" style="', this.getSvgStyles(),
        '" transform="', this.getSvgTransform(),
        '"/>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function () {
      return 1;
    }
  });

  /**
   * Returns fabric.Triangle instance from an object representation
   * @static
   * @memberOf fabric.Triangle
   * @param object {Object} object to create an instance from
   * @return {Object} instance of Canvas.Triangle
   */
  fabric.Triangle.fromObject = function (object) {
    return new fabric.Triangle(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    piBy2 = Math.PI * 2,
    extend = fabric.util.object.extend;

  if (fabric.Ellipse) {
    // fabric.warn('fabric.Ellipse is already defined.');
    return;
  }

  /**
   * Ellipse class
   * @class fabric.Ellipse
   * @extends fabric.Object
   * @return {fabric.Ellipse} thisArg
   * @see {@link fabric.Ellipse#initialize} for constructor definition
   */
  fabric.Ellipse = fabric.util.createClass(fabric.Object, /** @lends fabric.Ellipse.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'ellipse',

    /**
     * Horizontal radius
     * @type Number
     * @default
     */
    rx: 0,

    /**
     * Vertical radius
     * @type Number
     * @default
     */
    ry: 0,

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {fabric.Ellipse} thisArg
     */
    initialize: function (options) {
      options = options || {};

      this.callSuper('initialize', options);

      this.set('rx', options.rx || 0);
      this.set('ry', options.ry || 0);

      this.set('width', this.get('rx') * 2);
      this.set('height', this.get('ry') * 2);
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        rx: this.get('rx'),
        ry: this.get('ry')
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var markup = this._createBaseSVGMarkup();

      markup.push(
        '<ellipse ',
        'rx="', this.get('rx'),
        '" ry="', this.get('ry'),
        '" style="', this.getSvgStyles(),
        '" transform="', this.getSvgTransform(),
        '"/>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Renders this instance on a given context
     * @param ctx {CanvasRenderingContext2D} context to render on
     * @param noTransform {Boolean} context is not transformed when set to true
     */
    render: function (ctx, noTransform) {
      // do not use `get` for perf. reasons
      if (this.rx === 0 || this.ry === 0) return;
      return this.callSuper('render', ctx, noTransform);
    },

    /**
     * @private
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function (ctx, noTransform) {
      ctx.beginPath();
      ctx.save();
      ctx.globalAlpha = this.group ? (ctx.globalAlpha * this.opacity) : this.opacity;
      if (this.transformMatrix && this.group) {
        ctx.translate(this.cx, this.cy);
      }
      ctx.transform(1, 0, 0, this.ry / this.rx, 0, 0);
      ctx.arc(noTransform ? this.left : 0, noTransform ? this.top : 0, this.rx, 0, piBy2, false);

      this._renderFill(ctx);
      this._renderStroke(ctx);
      ctx.restore();
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function () {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Ellipse.fromElement})
   * @static
   * @memberOf fabric.Ellipse
   * @see http://www.w3.org/TR/SVG/shapes.html#EllipseElement
   */
  fabric.Ellipse.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('cx cy rx ry'.split(' '));

  /**
   * Returns {@link fabric.Ellipse} instance from an SVG element
   * @static
   * @memberOf fabric.Ellipse
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromElement = function (element, options) {
    options || (options = {});

    var parsedAttributes = fabric.parseAttributes(element, fabric.Ellipse.ATTRIBUTE_NAMES);
    var cx = parsedAttributes.left;
    var cy = parsedAttributes.top;

    if ('left' in parsedAttributes) {
      parsedAttributes.left -= (options.width / 2) || 0;
    }
    if ('top' in parsedAttributes) {
      parsedAttributes.top -= (options.height / 2) || 0;
    }

    var ellipse = new fabric.Ellipse(extend(parsedAttributes, options));

    ellipse.cx = cx || 0;
    ellipse.cy = cy || 0;

    return ellipse;
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns {@link fabric.Ellipse} instance from an object representation
   * @static
   * @memberOf fabric.Ellipse
   * @param {Object} object Object to create an instance from
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromObject = function (object) {
    return new fabric.Ellipse(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend;

  if (fabric.Rect) {
    // console.warn('fabric.Rect is already defined');
    return;
  }

  var stateProperties = fabric.Object.prototype.stateProperties.concat();
  stateProperties.push('rx', 'ry', 'x', 'y');

  /**
   * Rectangle class
   * @class fabric.Rect
   * @extends fabric.Object
   * @return {fabric.Rect} thisArg
   * @see {@link fabric.Rect#initialize} for constructor definition
   */
  fabric.Rect = fabric.util.createClass(fabric.Object, /** @lends fabric.Rect.prototype */ {

    /**
     * List of properties to consider when checking if state of an object is changed ({@link fabric.Object#hasStateChanged})
     * as well as for history (undo/redo) purposes
     * @type Array
     */
    stateProperties: stateProperties,

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'rect',

    /**
     * Horizontal border radius
     * @type Number
     * @default
     */
    rx: 0,

    /**
     * Vertical border radius
     * @type Number
     * @default
     */
    ry: 0,

    /**
     * @type Number
     * @default
     */
    x: 0,

    /**
     * @type Number
     * @default
     */
    y: 0,

    /**
     * Used to specify dash pattern for stroke on this object
     * @type Array
     */
    strokeDashArray: null,

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function (options) {
      options = options || {};

      this.callSuper('initialize', options);
      this._initRxRy();

      this.x = options.x || 0;
      this.y = options.y || 0;
    },

    /**
     * Initializes rx/ry attributes
     * @private
     */
    _initRxRy: function () {
      if (this.rx && !this.ry) {
        this.ry = this.rx;
      } else if (this.ry && !this.rx) {
        this.rx = this.ry;
      }
    },

    /**
     * @private
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function (ctx) {

      // optimize 1x1 case (used in spray brush)
      if (this.width === 1 && this.height === 1) {
        ctx.fillRect(0, 0, 1, 1);
        return;
      }

      var rx = this.rx || 0,
        ry = this.ry || 0,
        w = this.width,
        h = this.height,
        x = -w / 2,
        y = -h / 2,
        isInPathGroup = this.group && this.group.type === 'path-group',
        isRounded = rx !== 0 || ry !== 0;

      ctx.beginPath();
      ctx.globalAlpha = isInPathGroup ? (ctx.globalAlpha * this.opacity) : this.opacity;

      if (this.transformMatrix && isInPathGroup) {
        ctx.translate(
          this.width / 2 + this.x,
          this.height / 2 + this.y);
      }
      if (!this.transformMatrix && isInPathGroup) {
        ctx.translate(
          -this.group.width / 2 + this.width / 2 + this.x,
          -this.group.height / 2 + this.height / 2 + this.y);
      }

      ctx.moveTo(x + rx, y);

      ctx.lineTo(x + w - rx, y);
      isRounded && ctx.quadraticCurveTo(x + w, y, x + w, y + ry, x + w, y + ry);

      ctx.lineTo(x + w, y + h - ry);
      isRounded && ctx.quadraticCurveTo(x + w, y + h, x + w - rx, y + h, x + w - rx, y + h);

      ctx.lineTo(x + rx, y + h);
      isRounded && ctx.quadraticCurveTo(x, y + h, x, y + h - ry, x, y + h - ry);

      ctx.lineTo(x, y + ry);
      isRounded && ctx.quadraticCurveTo(x, y, x + rx, y, x + rx, y);

      ctx.closePath();

      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _renderDashedStroke: function (ctx) {
      var x = -this.width / 2,
        y = -this.height / 2,
        w = this.width,
        h = this.height;

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, x, y, x + w, y, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y, x + w, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y + h, x, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x, y + h, x, y, this.strokeDashArray);
      ctx.closePath();
    },

    /**
     * Since coordinate system differs from that of SVG
     * @private
     */
    _normalizeLeftTopProperties: function (parsedAttributes) {
      if ('left' in parsedAttributes) {
        this.set('left', parsedAttributes.left + this.getWidth() / 2);
      }
      this.set('x', parsedAttributes.left || 0);
      if ('top' in parsedAttributes) {
        this.set('top', parsedAttributes.top + this.getHeight() / 2);
      }
      this.set('y', parsedAttributes.top || 0);
      return this;
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      var object = extend(this.callSuper('toObject', propertiesToInclude), {
        rx: this.get('rx') || 0,
        ry: this.get('ry') || 0,
        x: this.get('x'),
        y: this.get('y')
      });
      if (!this.includeDefaultValues) {
        this._removeDefaultValues(object);
      }
      return object;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var markup = this._createBaseSVGMarkup();

      markup.push(
        '<rect ',
        'x="', (-1 * this.width / 2), '" y="', (-1 * this.height / 2),
        '" rx="', this.get('rx'), '" ry="', this.get('ry'),
        '" width="', this.width, '" height="', this.height,
        '" style="', this.getSvgStyles(),
        '" transform="', this.getSvgTransform(),
        '"/>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function () {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Rect.fromElement`)
   * @static
   * @memberOf fabric.Rect
   * @see: http://www.w3.org/TR/SVG/shapes.html#RectElement
   */
  fabric.Rect.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('x y rx ry width height'.split(' '));

  /**
   * @private
   */
  function _setDefaultLeftTopValues(attributes) {
    attributes.left = attributes.left || 0;
    attributes.top = attributes.top || 0;
    return attributes;
  }

  /**
   * Returns {@link fabric.Rect} instance from an SVG element
   * @static
   * @memberOf fabric.Rect
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Rect} Instance of fabric.Rect
   */
  fabric.Rect.fromElement = function (element, options) {
    if (!element) {
      return null;
    }

    var parsedAttributes = fabric.parseAttributes(element, fabric.Rect.ATTRIBUTE_NAMES);
    parsedAttributes = _setDefaultLeftTopValues(parsedAttributes);

    var rect = new fabric.Rect(extend((options ? fabric.util.object.clone(options) : {}), parsedAttributes));
    rect._normalizeLeftTopProperties(parsedAttributes);

    return rect;
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns {@link fabric.Rect} instance from an object representation
   * @static
   * @memberOf fabric.Rect
   * @param object {Object} object to create an instance from
   * @return {Object} instance of fabric.Rect
   */
  fabric.Rect.fromObject = function (object) {
    return new fabric.Rect(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    toFixed = fabric.util.toFixed;

  if (fabric.Polyline) {
    // fabric.warn('fabric.Polyline is already defined');
    return;
  }

  /**
   * Polyline class
   * @class fabric.Polyline
   * @extends fabric.Object
   * @see {@link fabric.Polyline#initialize} for constructor definition
   */
  fabric.Polyline = fabric.util.createClass(fabric.Object, /** @lends fabric.Polyline.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'polyline',

    /**
     * Constructor
     * @param {Array} points Array of points (where each point is an object with x and y)
     * @param {Object} [options] Options object
     * @param {Boolean} [skipOffset] Whether points offsetting should be skipped
     * @return {fabric.Polyline} thisArg
     * @example
     * var poly = new fabric.Polyline([
     *     { x: 10, y: 10 },
     *     { x: 50, y: 30 },
     *     { x: 40, y: 70 },
     *     { x: 60, y: 50 },
     *     { x: 100, y: 150 },
     *     { x: 40, y: 100 }
     *   ], {
     *   stroke: 'red',
     *   left: 100,
     *   top: 100
     * });
     */
    initialize: function (points, options, skipOffset) {
      options = options || {};
      this.set('points', points);
      this.callSuper('initialize', options);
      this._calcDimensions(skipOffset);
    },

    /**
     * @private
     * @param {Boolean} [skipOffset] Whether points offsetting should be skipped
     */
    _calcDimensions: function (skipOffset) {
      return fabric.Polygon.prototype._calcDimensions.call(this, skipOffset);
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return fabric.Polygon.prototype.toObject.call(this, propertiesToInclude);
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var points = [],
        markup = this._createBaseSVGMarkup();

      for (var i = 0, len = this.points.length; i < len; i++) {
        points.push(toFixed(this.points[i].x, 2), ',', toFixed(this.points[i].y, 2), ' ');
      }

      markup.push(
        '<polyline ',
        'points="', points.join(''),
        '" style="', this.getSvgStyles(),
        '" transform="', this.getSvgTransform(),
        '"/>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function (ctx) {
      var point;
      ctx.beginPath();
      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (var i = 0, len = this.points.length; i < len; i++) {
        point = this.points[i];
        ctx.lineTo(point.x, point.y);
      }

      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function (ctx) {
      var p1, p2;

      ctx.beginPath();
      for (var i = 0, len = this.points.length; i < len; i++) {
        p1 = this.points[i];
        p2 = this.points[i + 1] || p1;
        fabric.util.drawDashedLine(ctx, p1.x, p1.y, p2.x, p2.y, this.strokeDashArray);
      }
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function () {
      return this.get('points').length;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Polyline.fromElement})
   * @static
   * @memberOf fabric.Polyline
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement
   */
  fabric.Polyline.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat();

  /**
   * Returns fabric.Polyline instance from an SVG element
   * @static
   * @memberOf fabric.Polyline
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Polyline} Instance of fabric.Polyline
   */
  fabric.Polyline.fromElement = function (element, options) {
    if (!element) {
      return null;
    }
    options || (options = {});

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
      parsedAttributes = fabric.parseAttributes(element, fabric.Polyline.ATTRIBUTE_NAMES);

    fabric.util.normalizePoints(points, options);

    return new fabric.Polyline(points, fabric.util.object.extend(parsedAttributes, options), true);
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Polyline instance from an object representation
   * @static
   * @memberOf fabric.Polyline
   * @param object {Object} object Object to create an instance from
   * @return {fabric.Polyline} Instance of fabric.Polyline
   */
  fabric.Polyline.fromObject = function (object) {
    var points = object.points;
    return new fabric.Polyline(points, object, true);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend,
    min = fabric.util.array.min,
    max = fabric.util.array.max,
    toFixed = fabric.util.toFixed;

  if (fabric.Polygon) {
    // fabric.warn('fabric.Polygon is already defined');
    return;
  }

  /**
   * Polygon class
   * @class fabric.Polygon
   * @extends fabric.Object
   * @see {@link fabric.Polygon#initialize} for constructor definition
   */
  fabric.Polygon = fabric.util.createClass(fabric.Object, /** @lends fabric.Polygon.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'polygon',

    /**
     * Constructor
     * @param {Array} points Array of points
     * @param {Object} [options] Options object
     * @param {Boolean} [skipOffset] Whether points offsetting should be skipped
     * @return {fabric.Polygon} thisArg
     */
    initialize: function (points, options, skipOffset) {
      options = options || {};
      this.points = points;
      this.callSuper('initialize', options);
      this._calcDimensions(skipOffset);
    },

    /**
     * @private
     * @param {Boolean} [skipOffset] Whether points offsetting should be skipped
     */
    _calcDimensions: function (skipOffset) {

      var points = this.points,
        minX = min(points, 'x'),
        minY = min(points, 'y'),
        maxX = max(points, 'x'),
        maxY = max(points, 'y');

      this.width = (maxX - minX) || 1;
      this.height = (maxY - minY) || 1;

      this.minX = minX;
      this.minY = minY;

      if (skipOffset) return;

      var halfWidth = this.width / 2 + this.minX,
        halfHeight = this.height / 2 + this.minY;

      // change points to offset polygon into a bounding box
      this.points.forEach(function (p) {
        p.x -= halfWidth;
        p.y -= halfHeight;
      }, this);
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        points: this.points.concat()
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var points = [],
        markup = this._createBaseSVGMarkup();

      for (var i = 0, len = this.points.length; i < len; i++) {
        points.push(toFixed(this.points[i].x, 2), ',', toFixed(this.points[i].y, 2), ' ');
      }

      markup.push(
        '<polygon ',
        'points="', points.join(''),
        '" style="', this.getSvgStyles(),
        '" transform="', this.getSvgTransform(),
        '"/>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function (ctx) {
      var point;
      ctx.beginPath();
      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (var i = 0, len = this.points.length; i < len; i++) {
        point = this.points[i];
        ctx.lineTo(point.x, point.y);
      }
      this._renderFill(ctx);
      if (this.stroke || this.strokeDashArray) {
        ctx.closePath();
        this._renderStroke(ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function (ctx) {
      var p1, p2;

      ctx.beginPath();
      for (var i = 0, len = this.points.length; i < len; i++) {
        p1 = this.points[i];
        p2 = this.points[i + 1] || this.points[0];
        fabric.util.drawDashedLine(ctx, p1.x, p1.y, p2.x, p2.y, this.strokeDashArray);
      }
      ctx.closePath();
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function () {
      return this.points.length;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
   * @static
   * @memberOf fabric.Polygon
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolygonElement
   */
  fabric.Polygon.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat();

  /**
   * Returns {@link fabric.Polygon} instance from an SVG element
   * @static
   * @memberOf fabric.Polygon
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Polygon} Instance of fabric.Polygon
   */
  fabric.Polygon.fromElement = function (element, options) {
    if (!element) {
      return null;
    }
    options || (options = {});

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
      parsedAttributes = fabric.parseAttributes(element, fabric.Polygon.ATTRIBUTE_NAMES);

    fabric.util.normalizePoints(points, options);

    return new fabric.Polygon(points, extend(parsedAttributes, options), true);
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Polygon instance from an object representation
   * @static
   * @memberOf fabric.Polygon
   * @param object {Object} object Object to create an instance from
   * @return {fabric.Polygon} Instance of fabric.Polygon
   */
  fabric.Polygon.fromObject = function (object) {
    return new fabric.Polygon(object.points, object, true);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  var commandLengths = {
    m: 2,
    l: 2,
    h: 1,
    v: 1,
    c: 6,
    s: 4,
    q: 4,
    t: 2,
    a: 7
  };

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    min = fabric.util.array.min,
    max = fabric.util.array.max,
    extend = fabric.util.object.extend,
    _toString = Object.prototype.toString,
    drawArc = fabric.util.drawArc;

  if (fabric.Path) {
    // fabric.warn('fabric.Path is already defined');
    return;
  }

  /**
   * @private
   */
  function getX(item) {
    if (item[0] === 'H') {
      return item[1];
    }
    return item[item.length - 2];
  }

  /**
   * @private
   */
  function getY(item) {
    if (item[0] === 'V') {
      return item[1];
    }
    return item[item.length - 1];
  }

  /**
   * Path class
   * @class fabric.Path
   * @extends fabric.Object
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#path_and_pathgroup}
   * @see {@link fabric.Path#initialize} for constructor definition
   */
  fabric.Path = fabric.util.createClass(fabric.Object, /** @lends fabric.Path.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'path',

    /**
     * Constructor
     * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
     * @param {Object} [options] Options object
     * @return {fabric.Path} thisArg
     */
    initialize: function (path, options) {
      options = options || {};

      this.setOptions(options);

      if (!path) {
        throw new Error('`path` argument is required');
      }

      var fromArray = _toString.call(path) === '[object Array]';

      this.path = fromArray
        ? path
        // one of commands (m,M,l,L,q,Q,c,C,etc.) followed by non-command characters (i.e. command values)
        : path.match && path.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);

      if (!this.path) return;

      if (!fromArray) {
        this.path = this._parsePath();
      }
      this._initializePath(options);

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initializePath: function (options) {
      var isWidthSet = 'width' in options && options.width != null,
        isHeightSet = 'height' in options && options.width != null,
        isLeftSet = 'left' in options,
        isTopSet = 'top' in options,
        origLeft = isLeftSet ? this.left : 0,
        origTop = isTopSet ? this.top : 0;

      if (!isWidthSet || !isHeightSet) {
        extend(this, this._parseDimensions());
        if (isWidthSet) {
          this.width = options.width;
        }
        if (isHeightSet) {
          this.height = options.height;
        }
      } else { //Set center location relative to given height/width if not specified
        if (!isTopSet) {
          this.top = this.height / 2;
        }
        if (!isLeftSet) {
          this.left = this.width / 2;
        }
      }
      this.pathOffset = this.pathOffset ||
        // Save top-left coords as offset
        this._calculatePathOffset(origLeft, origTop);
    },

    /**
     * @private
     * @param {Boolean} positionSet When false, path offset is returned otherwise 0
     */
    _calculatePathOffset: function (origLeft, origTop) {
      return {
        x: this.left - origLeft - (this.width / 2),
        y: this.top - origTop - (this.height / 2)
      };
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render path on
     */
    _render: function (ctx) {
      var current, // current instruction
        previous = null,
        x = 0, // current x
        y = 0, // current y
        controlX = 0, // current control point x
        controlY = 0, // current control point y
        tempX,
        tempY,
        tempControlX,
        tempControlY,
        l = -((this.width / 2) + this.pathOffset.x),
        t = -((this.height / 2) + this.pathOffset.y),
        methodName;

      for (var i = 0, len = this.path.length; i < len; ++i) {

        current = this.path[i];

        switch (current[0]) { // first letter

          case 'l': // lineto, relative
            x += current[1];
            y += current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'L': // lineto, absolute
            x = current[1];
            y = current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'h': // horizontal lineto, relative
            x += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'H': // horizontal lineto, absolute
            x = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'v': // vertical lineto, relative
            y += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'V': // verical lineto, absolute
            y = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'm': // moveTo, relative
            x += current[1];
            y += current[2];
            // draw a line if previous command was moveTo as well (otherwise, it will have no effect)
            methodName = (previous && (previous[0] === 'm' || previous[0] === 'M'))
              ? 'lineTo'
              : 'moveTo';
            ctx[methodName](x + l, y + t);
            break;

          case 'M': // moveTo, absolute
            x = current[1];
            y = current[2];
            // draw a line if previous command was moveTo as well (otherwise, it will have no effect)
            methodName = (previous && (previous[0] === 'm' || previous[0] === 'M'))
              ? 'lineTo'
              : 'moveTo';
            ctx[methodName](x + l, y + t);
            break;

          case 'c': // bezierCurveTo, relative
            tempX = x + current[5];
            tempY = y + current[6];
            controlX = x + current[3];
            controlY = y + current[4];
            ctx.bezierCurveTo(
              x + current[1] + l, // x1
              y + current[2] + t, // y1
              controlX + l, // x2
              controlY + t, // y2
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'C': // bezierCurveTo, absolute
            x = current[5];
            y = current[6];
            controlX = current[3];
            controlY = current[4];
            ctx.bezierCurveTo(
              current[1] + l,
              current[2] + t,
              controlX + l,
              controlY + t,
              x + l,
              y + t
            );
            break;

          case 's': // shorthand cubic bezierCurveTo, relative

            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];

            // calculate reflection of previous control points
            controlX = controlX ? (2 * x - controlX) : x;
            controlY = controlY ? (2 * y - controlY) : y;

            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              x + current[1] + l,
              y + current[2] + t,
              tempX + l,
              tempY + t
            );
            // set control point to 2nd one of this command
            // "... the first control point is assumed to be
            // the reflection of the second control point on
            // the previous command relative to the current point."
            controlX = x + current[1];
            controlY = y + current[2];

            x = tempX;
            y = tempY;
            break;

          case 'S': // shorthand cubic bezierCurveTo, absolute
            tempX = current[3];
            tempY = current[4];
            // calculate reflection of previous control points
            controlX = 2 * x - controlX;
            controlY = 2 * y - controlY;
            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              current[1] + l,
              current[2] + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;

            // set control point to 2nd one of this command
            // "... the first control point is assumed to be
            // the reflection of the second control point on
            // the previous command relative to the current point."
            controlX = current[1];
            controlY = current[2];

            break;

          case 'q': // quadraticCurveTo, relative
            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];

            controlX = x + current[1];
            controlY = y + current[2];

            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'Q': // quadraticCurveTo, absolute
            tempX = current[3];
            tempY = current[4];

            ctx.quadraticCurveTo(
              current[1] + l,
              current[2] + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            controlX = current[1];
            controlY = current[2];
            break;

          case 't': // shorthand quadraticCurveTo, relative

            // transform to absolute x,y
            tempX = x + current[1];
            tempY = y + current[2];

            if (previous[0].match(/[QqTt]/) === null) {
              // If there is no previous command or if the previous command was not a Q, q, T or t,
              // assume the control point is coincident with the current point
              controlX = x;
              controlY = y;
            } else if (previous[0] === 't') {
              // calculate reflection of previous control points for t
              controlX = 2 * x - tempControlX;
              controlY = 2 * y - tempControlY;
            } else if (previous[0] === 'q') {
              // calculate reflection of previous control points for q
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }

            tempControlX = controlX;
            tempControlY = controlY;

            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            controlX = x + current[1];
            controlY = y + current[2];
            break;

          case 'T':
            tempX = current[1];
            tempY = current[2];

            // calculate reflection of previous control points
            controlX = 2 * x - controlX;
            controlY = 2 * y - controlY;
            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'a':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + x + l,
              current[7] + y + t
            ]);
            x += current[6];
            y += current[7];
            break;

          case 'A':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + l,
              current[7] + t
            ]);
            x = current[6];
            y = current[7];
            break;

          case 'z':
          case 'Z':
            ctx.closePath();
            break;
        }
        previous = current;
      }
    },

    /**
     * Renders path on a specified context
     * @param {CanvasRenderingContext2D} ctx context to render path on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    render: function (ctx, noTransform) {
      // do not render if object is not visible
      if (!this.visible) return;

      ctx.save();
      var m = this.transformMatrix;
      if (m) {
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }
      if (!noTransform) {
        this.transform(ctx);
      }
      this._setStrokeStyles(ctx);
      this._setFillStyles(ctx);
      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      ctx.beginPath();

      this._render(ctx);
      this._renderFill(ctx);
      this._renderStroke(ctx);
      this.clipTo && ctx.restore();
      this._removeShadow(ctx);

      if (!noTransform && this.active) {
        this.drawBorders(ctx);
        this.drawControls(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns string representation of an instance
     * @return {String} string representation of an instance
     */
    toString: function () {
      return '#<fabric.Path (' + this.complexity() +
        '): { "top": ' + this.top + ', "left": ' + this.left + ' }>';
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      var o = extend(this.callSuper('toObject', propertiesToInclude), {
        path: this.path.map(function (item) {
          return item.slice();
        }),
        pathOffset: this.pathOffset
      });
      if (this.sourcePath) {
        o.sourcePath = this.sourcePath;
      }
      if (this.transformMatrix) {
        o.transformMatrix = this.transformMatrix;
      }
      return o;
    },

    /**
     * Returns dataless object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toDatalessObject: function (propertiesToInclude) {
      var o = this.toObject(propertiesToInclude);
      if (this.sourcePath) {
        o.path = this.sourcePath;
      }
      delete o.sourcePath;
      return o;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var chunks = [],
        markup = this._createBaseSVGMarkup();

      for (var i = 0, len = this.path.length; i < len; i++) {
        chunks.push(this.path[i].join(' '));
      }
      var path = chunks.join(' ');

      markup.push(
        '<g transform="', (this.group ? '' : this.getSvgTransform()), '">',
        '<path ',
        'd="', path,
        '" style="', this.getSvgStyles(),
        '" transform="translate(', (-this.width / 2), ' ', (-this.height / 2), ')',
        '" stroke-linecap="round" ',
        '/>',
        '</g>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns number representation of an instance complexity
     * @return {Number} complexity of this instance
     */
    complexity: function () {
      return this.path.length;
    },

    /**
     * @private
     */
    _parsePath: function () {
      var result = [],
        coords = [],
        currentPath,
        parsed,
        re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/ig,
        match,
        coordsStr;

      for (var i = 0, coordsParsed, len = this.path.length; i < len; i++) {
        currentPath = this.path[i];

        coordsStr = currentPath.slice(1).trim();
        coords.length = 0;

        while ((match = re.exec(coordsStr))) {
          coords.push(match[0]);
        }

        coordsParsed = [currentPath.charAt(0)];

        for (var j = 0, jlen = coords.length; j < jlen; j++) {
          parsed = parseFloat(coords[j]);
          if (!isNaN(parsed)) {
            coordsParsed.push(parsed);
          }
        }

        var command = coordsParsed[0].toLowerCase(),
          commandLength = commandLengths[command];

        if (coordsParsed.length - 1 > commandLength) {
          for (var k = 1, klen = coordsParsed.length; k < klen; k += commandLength) {
            result.push([coordsParsed[0]].concat(coordsParsed.slice(k, k + commandLength)));
          }
        } else {
          result.push(coordsParsed);
        }
      }

      return result;
    },

    /**
     * @private
     */
    _parseDimensions: function () {
      var aX = [],
        aY = [],
        previous = {};

      this.path.forEach(function (item, i) {
        this._getCoordsFromCommand(item, i, aX, aY, previous);
      }, this);

      var minX = min(aX),
        minY = min(aY),
        maxX = max(aX),
        maxY = max(aY),
        deltaX = maxX - minX,
        deltaY = maxY - minY;

      var o = {
        left: this.left + (minX + deltaX / 2),
        top: this.top + (minY + deltaY / 2),
        width: deltaX,
        height: deltaY
      };

      return o;
    },

    _getCoordsFromCommand: function (item, i, aX, aY, previous) {
      var isLowerCase = false;

      if (item[0] !== 'H') {
        previous.x = (i === 0) ? getX(item) : getX(this.path[i - 1]);
      }
      if (item[0] !== 'V') {
        previous.y = (i === 0) ? getY(item) : getY(this.path[i - 1]);
      }

      // lowercased letter denotes relative position;
      // transform to absolute
      if (item[0] === item[0].toLowerCase()) {
        isLowerCase = true;
      }

      var xy = this._getXY(item, isLowerCase, previous);

      var val = parseInt(xy.x, 10);
      if (!isNaN(val)) aX.push(val);

      val = parseInt(xy.y, 10);
      if (!isNaN(val)) aY.push(val);
    },

    _getXY: function (item, isLowerCase, previous) {

      // last 2 items in an array of coordinates are the actualy x/y (except H/V), collect them
      // TODO (kangax): support relative h/v commands

      var x = isLowerCase
        ? previous.x + getX(item)
        : item[0] === 'V'
          ? previous.x
          : getX(item);

      var y = isLowerCase
        ? previous.y + getY(item)
        : item[0] === 'H'
          ? previous.y
          : getY(item);

      return {x: x, y: y};
    }
  });

  /**
   * Creates an instance of fabric.Path from an object
   * @static
   * @memberOf fabric.Path
   * @param {Object} object
   * @param {Function} callback Callback to invoke when an fabric.Path instance is created
   */
  fabric.Path.fromObject = function (object, callback) {
    if (typeof object.path === 'string') {
      fabric.loadSVGFromURL(object.path, function (elements) {
        var path = elements[0];

        var pathUrl = object.path;
        delete object.path;

        fabric.util.object.extend(path, object);
        path.setSourcePath(pathUrl);

        callback(path);
      });
    } else {
      callback(new fabric.Path(object.path, object));
    }
  };

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Path.fromElement`)
   * @static
   * @memberOf fabric.Path
   * @see http://www.w3.org/TR/SVG/paths.html#PathElement
   */
  fabric.Path.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat(['d']);

  /**
   * Creates an instance of fabric.Path from an SVG <path> element
   * @static
   * @memberOf fabric.Path
   * @param {SVGElement} element to parse
   * @param {Function} callback Callback to invoke when an fabric.Path instance is created
   * @param {Object} [options] Options object
   */
  fabric.Path.fromElement = function (element, callback, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Path.ATTRIBUTE_NAMES);
    callback && callback(new fabric.Path(parsedAttributes.d, extend(parsedAttributes, options)));
  };
  /* _FROM_SVG_END_ */

  /**
   * Indicates that instances of this type are async
   * @static
   * @memberOf fabric.Path
   * @type Boolean
   * @default
   */
  fabric.Path.async = true;

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend,
    invoke = fabric.util.array.invoke,
    parentToObject = fabric.Object.prototype.toObject;

  if (fabric.PathGroup) {
    // fabric.warn('fabric.PathGroup is already defined');
    return;
  }

  /**
   * Path group class
   * @class fabric.PathGroup
   * @extends fabric.Path
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#path_and_pathgroup}
   * @see {@link fabric.PathGroup#initialize} for constructor definition
   */
  fabric.PathGroup = fabric.util.createClass(fabric.Path, /** @lends fabric.PathGroup.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'path-group',

    /**
     * Fill value
     * @type String
     * @default
     */
    fill: '',

    /**
     * Constructor
     * @param {Array} paths
     * @param {Object} [options] Options object
     * @return {fabric.PathGroup} thisArg
     */
    initialize: function (paths, options) {

      options = options || {};
      this.paths = paths || [];

      for (var i = this.paths.length; i--;) {
        this.paths[i].group = this;
      }

      this.setOptions(options);
      this.setCoords();

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * Renders this group on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render this instance on
     */
    render: function (ctx) {
      // do not render if object is not visible
      if (!this.visible) return;

      ctx.save();

      var m = this.transformMatrix;
      if (m) {
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }

      this.transform(ctx);

      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      for (var i = 0, l = this.paths.length; i < l; ++i) {
        this.paths[i].render(ctx, true);
      }
      this.clipTo && ctx.restore();
      this._removeShadow(ctx);

      if (this.active) {
        this.drawBorders(ctx);
        this.drawControls(ctx);
      }
      ctx.restore();
    },

    /**
     * Sets certain property to a certain value
     * @param {String} prop
     * @param {Any} value
     * @return {fabric.PathGroup} thisArg
     */
    _set: function (prop, value) {

      if (prop === 'fill' && value && this.isSameColor()) {
        var i = this.paths.length;
        while (i--) {
          this.paths[i]._set(prop, value);
        }
      }

      return this.callSuper('_set', prop, value);
    },

    /**
     * Returns object representation of this path group
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      var o = extend(parentToObject.call(this, propertiesToInclude), {
        paths: invoke(this.getObjects(), 'toObject', propertiesToInclude)
      });
      if (this.sourcePath) {
        o.sourcePath = this.sourcePath;
      }
      return o;
    },

    /**
     * Returns dataless object representation of this path group
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} dataless object representation of an instance
     */
    toDatalessObject: function (propertiesToInclude) {
      var o = this.toObject(propertiesToInclude);
      if (this.sourcePath) {
        o.paths = this.sourcePath;
      }
      return o;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var objects = this.getObjects();
      var markup = [
        '<g ',
        'style="', this.getSvgStyles(), '" ',
        'transform="', this.getSvgTransform(), '" ',
        '>'
      ];

      for (var i = 0, len = objects.length; i < len; i++) {
        markup.push(objects[i].toSVG(reviver));
      }
      markup.push('</g>');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns a string representation of this path group
     * @return {String} string representation of an object
     */
    toString: function () {
      return '#<fabric.PathGroup (' + this.complexity() +
        '): { top: ' + this.top + ', left: ' + this.left + ' }>';
    },

    /**
     * Returns true if all paths in this group are of same color
     * @return {Boolean} true if all paths are of the same color (`fill`)
     */
    isSameColor: function () {
      var firstPathFill = this.getObjects()[0].get('fill');
      return this.getObjects().every(function (path) {
        return path.get('fill') === firstPathFill;
      });
    },

    /**
     * Returns number representation of object's complexity
     * @return {Number} complexity
     */
    complexity: function () {
      return this.paths.reduce(function (total, path) {
        return total + ((path && path.complexity) ? path.complexity() : 0);
      }, 0);
    },

    /**
     * Returns all paths in this path group
     * @return {Array} array of path objects included in this path group
     */
    getObjects: function () {
      return this.paths;
    }
  });

  /**
   * Creates fabric.PathGroup instance from an object representation
   * @static
   * @memberOf fabric.PathGroup
   * @param {Object} object Object to create an instance from
   * @param {Function} callback Callback to invoke when an fabric.PathGroup instance is created
   */
  fabric.PathGroup.fromObject = function (object, callback) {
    if (typeof object.paths === 'string') {
      fabric.loadSVGFromURL(object.paths, function (elements) {

        var pathUrl = object.paths;
        delete object.paths;

        var pathGroup = fabric.util.groupSVGElements(elements, object, pathUrl);

        callback(pathGroup);
      });
    } else {
      fabric.util.enlivenObjects(object.paths, function (enlivenedObjects) {
        delete object.paths;
        callback(new fabric.PathGroup(enlivenedObjects, object));
      });
    }
  };

  /**
   * Indicates that instances of this type are async
   * @static
   * @memberOf fabric.PathGroup
   * @type Boolean
   * @default
   */
  fabric.PathGroup.async = true;

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend,
    min = fabric.util.array.min,
    max = fabric.util.array.max,
    invoke = fabric.util.array.invoke;

  if (fabric.Group) {
    return;
  }

  // lock-related properties, for use in fabric.Group#get
  // to enable locking behavior on group
  // when one of its objects has lock-related properties set
  var _lockProperties = {
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    lockUniScaling: true
  };

  /**
   * Group class
   * @class fabric.Group
   * @extends fabric.Object
   * @mixes fabric.Collection
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#groups}
   * @see {@link fabric.Group#initialize} for constructor definition
   */
  fabric.Group = fabric.util.createClass(fabric.Object, fabric.Collection, /** @lends fabric.Group.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'group',

    /**
     * Constructor
     * @param {Object} objects Group objects
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function (objects, options) {
      options = options || {};

      this._objects = objects || [];
      for (var i = this._objects.length; i--;) {
        this._objects[i].group = this;
      }

      this.originalState = {};
      this.callSuper('initialize');

      this._calcBounds();
      this._updateObjectsCoords();

      if (options) {
        extend(this, options);
      }
      this._setOpacityIfSame();

      this.setCoords(true);
      this.saveCoords();
    },

    /**
     * @private
     */
    _updateObjectsCoords: function () {
      this.forEachObject(this._updateObjectCoords, this);
    },

    /**
     * @private
     */
    _updateObjectCoords: function (object) {
      var objectLeft = object.getLeft(),
        objectTop = object.getTop();

      object.set({
        originalLeft: objectLeft,
        originalTop: objectTop,
        left: objectLeft - this.left,
        top: objectTop - this.top
      });

      object.setCoords();

      // do not display corners of objects enclosed in a group
      object.__origHasControls = object.hasControls;
      object.hasControls = false;
    },

    /**
     * Returns string represenation of a group
     * @return {String}
     */
    toString: function () {
      return '#<fabric.Group: (' + this.complexity() + ')>';
    },

    /**
     * Adds an object to a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    addWithUpdate: function (object) {
      this._restoreObjectsState();
      this._objects.push(object);
      object.group = this;
      // since _restoreObjectsState set objects inactive
      this.forEachObject(this._setObjectActive, this);
      this._calcBounds();
      this._updateObjectsCoords();
      return this;
    },

    /**
     * @private
     */
    _setObjectActive: function (object) {
      object.set('active', true);
      object.group = this;
    },

    /**
     * Removes an object from a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    removeWithUpdate: function (object) {
      this._moveFlippedObject(object);
      this._restoreObjectsState();

      // since _restoreObjectsState set objects inactive
      this.forEachObject(this._setObjectActive, this);

      this.remove(object);
      this._calcBounds();
      this._updateObjectsCoords();

      return this;
    },

    /**
     * @private
     */
    _onObjectAdded: function (object) {
      object.group = this;
    },

    /**
     * @private
     */
    _onObjectRemoved: function (object) {
      delete object.group;
      object.set('active', false);
    },

    /**
     * Properties that are delegated to group objects when reading/writing
     * @param {Object} delegatedProperties
     */
    delegatedProperties: {
      fill: true,
      opacity: true,
      fontFamily: true,
      fontWeight: true,
      fontSize: true,
      fontStyle: true,
      lineHeight: true,
      textDecoration: true,
      textAlign: true,
      backgroundColor: true
    },

    /**
     * @private
     */
    _set: function (key, value) {
      if (key in this.delegatedProperties) {
        var i = this._objects.length;
        this[key] = value;
        while (i--) {
          this._objects[i].set(key, value);
        }
      } else {
        this[key] = value;
      }
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        objects: invoke(this._objects, 'toObject', propertiesToInclude)
      });
    },

    /**
     * Renders instance on a given context
     * @param {CanvasRenderingContext2D} ctx context to render instance on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    render: function (ctx, noTransform) {
      // do not render if object is not visible
      if (!this.visible) return;

      ctx.save();
      this.transform(ctx);

      this.clipTo && fabric.util.clipContext(this, ctx);

      // the array is now sorted in order of highest first, so start from end
      for (var i = 0, len = this._objects.length; i < len; i++) {
        this._renderObject(this._objects[i], ctx);
      }

      this.clipTo && ctx.restore();

      if (!noTransform && this.active) {
        this.drawBorders(ctx);
        this.drawControls(ctx);
      }
      ctx.restore();
    },

    /**
     * @private
     */
    _renderObject: function (object, ctx) {

      var originalScaleFactor = object.borderScaleFactor,
        originalHasRotatingPoint = object.hasRotatingPoint,
        groupScaleFactor = Math.max(this.scaleX, this.scaleY);

      // do not render if object is not visible
      if (!object.visible) return;

      object.borderScaleFactor = groupScaleFactor;
      object.hasRotatingPoint = false;

      object.render(ctx);

      object.borderScaleFactor = originalScaleFactor;
      object.hasRotatingPoint = originalHasRotatingPoint;
    },

    /**
     * Retores original state of each of group objects (original state is that which was before group was created).
     * @private
     * @return {fabric.Group} thisArg
     * @chainable
     */
    _restoreObjectsState: function () {
      this._objects.forEach(this._restoreObjectState, this);
      return this;
    },

    /**
     * Moves a flipped object to the position where it's displayed
     * @private
     * @param {fabric.Object} object
     * @return {fabric.Group} thisArg
     */
    _moveFlippedObject: function (object) {
      var oldOriginX = object.get('originX'),
        oldOriginY = object.get('originY'),
        center = object.getCenterPoint();

      object.set({
        originX: 'center',
        originY: 'center',
        left: center.x,
        top: center.y
      });

      this._toggleFlipping(object);

      var newOrigin = object.getPointByOrigin(oldOriginX, oldOriginY);

      object.set({
        originX: oldOriginX,
        originY: oldOriginY,
        left: newOrigin.x,
        top: newOrigin.y
      });

      return this;
    },

    /**
     * @private
     */
    _toggleFlipping: function (object) {
      if (this.flipX) {
        object.toggle('flipX');
        object.set('left', -object.get('left'));
        object.setAngle(-object.getAngle());
      }
      if (this.flipY) {
        object.toggle('flipY');
        object.set('top', -object.get('top'));
        object.setAngle(-object.getAngle());
      }
    },

    /**
     * Restores original state of a specified object in group
     * @private
     * @param {fabric.Object} object
     * @return {fabric.Group} thisArg
     */
    _restoreObjectState: function (object) {
      this._setObjectPosition(object);

      object.setCoords();
      object.hasControls = object.__origHasControls;
      delete object.__origHasControls;
      object.set('active', false);
      object.setCoords();
      delete object.group;

      return this;
    },

    /**
     * @private
     */
    _setObjectPosition: function (object) {
      var groupLeft = this.getLeft(),
        groupTop = this.getTop(),
        rotated = this._getRotatedLeftTop(object);

      object.set({
        angle: object.getAngle() + this.getAngle(),
        left: groupLeft + rotated.left,
        top: groupTop + rotated.top,
        scaleX: object.get('scaleX') * this.get('scaleX'),
        scaleY: object.get('scaleY') * this.get('scaleY')
      });
    },

    /**
     * @private
     */
    _getRotatedLeftTop: function (object) {
      var groupAngle = this.getAngle() * (Math.PI / 180);
      return {
        left: (-Math.sin(groupAngle) * object.getTop() * this.get('scaleY') +
          Math.cos(groupAngle) * object.getLeft() * this.get('scaleX')),

        top: (Math.cos(groupAngle) * object.getTop() * this.get('scaleY') +
          Math.sin(groupAngle) * object.getLeft() * this.get('scaleX'))
      };
    },

    /**
     * Destroys a group (restoring state of its objects)
     * @return {fabric.Group} thisArg
     * @chainable
     */
    destroy: function () {
      this._objects.forEach(this._moveFlippedObject, this);
      return this._restoreObjectsState();
    },

    /**
     * Saves coordinates of this instance (to be used together with `hasMoved`)
     * @saveCoords
     * @return {fabric.Group} thisArg
     * @chainable
     */
    saveCoords: function () {
      this._originalLeft = this.get('left');
      this._originalTop = this.get('top');
      return this;
    },

    /**
     * Checks whether this group was moved (since `saveCoords` was called last)
     * @return {Boolean} true if an object was moved (since fabric.Group#saveCoords was called)
     */
    hasMoved: function () {
      return this._originalLeft !== this.get('left') ||
        this._originalTop !== this.get('top');
    },

    /**
     * Sets coordinates of all group objects
     * @return {fabric.Group} thisArg
     * @chainable
     */
    setObjectsCoords: function () {
      this.forEachObject(function (object) {
        object.setCoords();
      });
      return this;
    },

    /**
     * @private
     */
    _setOpacityIfSame: function () {
      var objects = this.getObjects(),
        firstValue = objects[0] ? objects[0].get('opacity') : 1;

      var isSameOpacity = objects.every(function (o) {
        return o.get('opacity') === firstValue;
      });

      if (isSameOpacity) {
        this.opacity = firstValue;
      }
    },

    /**
     * @private
     */
    _calcBounds: function () {
      var aX = [],
        aY = [],
        o;

      for (var i = 0, len = this._objects.length; i < len; ++i) {
        o = this._objects[i];
        o.setCoords();
        for (var prop in o.oCoords) {
          aX.push(o.oCoords[prop].x);
          aY.push(o.oCoords[prop].y);
        }
      }

      this.set(this._getBounds(aX, aY));
    },

    /**
     * @private
     */
    _getBounds: function (aX, aY) {
      var minX = min(aX),
        maxX = max(aX),
        minY = min(aY),
        maxY = max(aY),
        width = (maxX - minX) || 0,
        height = (maxY - minY) || 0;

      return {
        width: width,
        height: height,
        left: (minX + width / 2) || 0,
        top: (minY + height / 2) || 0
      };
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var markup = [
        '<g ',
        'transform="', this.getSvgTransform(),
        '">'
      ];

      for (var i = 0, len = this._objects.length; i < len; i++) {
        markup.push(this._objects[i].toSVG(reviver));
      }

      markup.push('</g>');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns requested property
     * @param {String} prop Property to get
     * @return {Any}
     */
    get: function (prop) {
      if (prop in _lockProperties) {
        if (this[prop]) {
          return this[prop];
        } else {
          for (var i = 0, len = this._objects.length; i < len; i++) {
            if (this._objects[i][prop]) {
              return true;
            }
          }
          return false;
        }
      } else {
        if (prop in this.delegatedProperties) {
          return this._objects[0] && this._objects[0].get(prop);
        }
        return this[prop];
      }
    }
  });

  /**
   * Returns {@link fabric.Group} instance from an object representation
   * @static
   * @memberOf fabric.Group
   * @param {Object} object Object to create a group from
   * @param {Object} [options] Options object
   * @return {fabric.Group} An instance of fabric.Group
   */
  fabric.Group.fromObject = function (object, callback) {
    fabric.util.enlivenObjects(object.objects, function (enlivenedObjects) {
      delete object.objects;
      callback && callback(new fabric.Group(enlivenedObjects, object));
    });
  };

  /**
   * Indicates that instances of this type are async
   * @static
   * @memberOf fabric.Group
   * @type Boolean
   * @default
   */
  fabric.Group.async = true;

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var extend = fabric.util.object.extend;

  if (!global.fabric) {
    global.fabric = {};
  }

  if (global.fabric.Image) {
    // fabric.warn('fabric.Image is already defined.');
    return;
  }

  /**
   * Image class
   * @class fabric.Image
   * @extends fabric.Object
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#images}
   * @see {@link fabric.Image#initialize} for constructor definition
   */
  fabric.Image = fabric.util.createClass(fabric.Object, /** @lends fabric.Image.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'image',

    /**
     * crossOrigin value (one of "", "anonymous", "allow-credentials")
     * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
     * @type String
     * @default
     */
    crossOrigin: '',

    /**
     * Constructor
     * @param {HTMLImageElement | String} element Image element
     * @param {Object} [options] Options object
     * @return {fabric.Image} thisArg
     */
    initialize: function (element, options) {
      options || (options = {});

      this.filters = [];

      this.callSuper('initialize', options);

      this._initElement(element, options);
      this._initConfig(options);

      if (options.filters) {
        this.filters = options.filters;
        this.applyFilters();
      }
    },

    /**
     * Returns image element which this instance if based on
     * @return {HTMLImageElement} Image element
     */
    getElement: function () {
      return this._element;
    },

    /**
     * Sets image element for this instance to a specified one.
     * If filters defined they are applied to new image.
     * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
     * @param {HTMLImageElement} element
     * @param {Function} [callback] Callback is invoked when all filters have been applied and new image is generated
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setElement: function (element, callback) {
      this._element = element;
      this._originalElement = element;
      this._initConfig();

      if (this.filters.length !== 0) {
        this.applyFilters(callback);
      }

      return this;
    },

    /**
     * Sets crossOrigin value (on an instance and corresponding image element)
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setCrossOrigin: function (value) {
      this.crossOrigin = value;
      this._element.crossOrigin = value;

      return this;
    },

    /**
     * Returns original size of an image
     * @return {Object} Object with "width" and "height" properties
     */
    getOriginalSize: function () {
      var element = this.getElement();
      return {
        width: element.width,
        height: element.height
      };
    },

    /**
     * Renders image on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    render: function (ctx, noTransform) {
      // do not render if object is not visible
      if (!this.visible) return;

      ctx.save();
      var m = this.transformMatrix;
      var isInPathGroup = this.group && this.group.type === 'path-group';

      // this._resetWidthHeight();
      if (isInPathGroup) {
        ctx.translate(-this.group.width / 2 + this.width / 2, -this.group.height / 2 + this.height / 2);
      }
      if (m) {
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }
      if (!noTransform) {
        this.transform(ctx);
      }

      ctx.save();
      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      this._render(ctx);
      if (this.shadow && !this.shadow.affectStroke) {
        this._removeShadow(ctx);
      }
      this._renderStroke(ctx);
      this.clipTo && ctx.restore();
      ctx.restore();

      if (this.active && !noTransform) {
        this.drawBorders(ctx);
        this.drawControls(ctx);
      }
      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _stroke: function (ctx) {
      ctx.save();
      this._setStrokeStyles(ctx);
      ctx.beginPath();
      ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
      ctx.closePath();
      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function (ctx) {
      var x = -this.width / 2,
        y = -this.height / 2,
        w = this.width,
        h = this.height;

      ctx.save();
      this._setStrokeStyles(ctx);

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, x, y, x + w, y, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y, x + w, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y + h, x, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x, y + h, x, y, this.strokeDashArray);
      ctx.closePath();
      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        src: this._originalElement.src || this._originalElement._src,
        filters: this.filters.map(function (filterObj) {
          return filterObj && filterObj.toObject();
        }),
        crossOrigin: this.crossOrigin
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var markup = [];

      markup.push(
        '<g transform="', this.getSvgTransform(), '">',
        '<image xlink:href="', this.getSvgSrc(),
        '" style="', this.getSvgStyles(),
        // we're essentially moving origin of transformation from top/left corner to the center of the shape
        // by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
        // so that object's center aligns with container's left/top
        '" transform="translate(' + (-this.width / 2) + ' ' + (-this.height / 2) + ')',
        '" width="', this.width,
        '" height="', this.height,
        '" preserveAspectRatio="none"',
        '></image>'
      );

      if (this.stroke || this.strokeDashArray) {
        var origFill = this.fill;
        this.fill = null;
        markup.push(
          '<rect ',
          'x="', (-1 * this.width / 2), '" y="', (-1 * this.height / 2),
          '" width="', this.width, '" height="', this.height,
          '" style="', this.getSvgStyles(),
          '"/>'
        );
        this.fill = origFill;
      }

      markup.push('</g>');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns source of an image
     * @return {String} Source of an image
     */
    getSrc: function () {
      return this.getElement().src || this.getElement()._src;
    },

    /**
     * Returns string representation of an instance
     * @return {String} String representation of an instance
     */
    toString: function () {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    },

    /**
     * Returns a clone of an instance
     * @param {Function} callback Callback is invoked with a clone as a first argument
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    clone: function (callback, propertiesToInclude) {
      this.constructor.fromObject(this.toObject(propertiesToInclude), callback);
    },

    /**
     * Applies filters assigned to this image (from "filters" array)
     * @mthod applyFilters
     * @param {Function} callback Callback is invoked when all filters have been applied and new image is generated
     * @return {fabric.Image} thisArg
     * @chainable
     */
    applyFilters: function (callback) {

      if (this.filters.length === 0) {
        this._element = this._originalElement;
        callback && callback();
        return;
      }

      var imgEl = this._originalElement,
        canvasEl = fabric.util.createCanvasElement(),
        replacement = fabric.util.createImage(),
        _this = this;

      canvasEl.width = imgEl.width;
      canvasEl.height = imgEl.height;

      canvasEl.getContext('2d').drawImage(imgEl, 0, 0, imgEl.width, imgEl.height);

      this.filters.forEach(function (filter) {
        filter && filter.applyTo(canvasEl);
      });

      /** @ignore */

      replacement.width = imgEl.width;
      replacement.height = imgEl.height;

      if (fabric.isLikelyNode) {
        replacement.src = canvasEl.toBuffer(undefined, fabric.Image.pngCompression);

        // onload doesn't fire in some node versions, so we invoke callback manually
        _this._element = replacement;
        callback && callback();
      } else {
        replacement.onload = function () {
          _this._element = replacement;
          callback && callback();
          replacement.onload = canvasEl = imgEl = null;
        };
        replacement.src = canvasEl.toDataURL('image/png');
      }

      return this;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function (ctx) {
      ctx.drawImage(
        this._element,
        -this.width / 2,
        -this.height / 2,
        this.width,
        this.height
      );
    },

    /**
     * @private
     */
    _resetWidthHeight: function () {
      var element = this.getElement();

      this.set('width', element.width);
      this.set('height', element.height);
    },

    /**
     * The Image class's initialization method. This method is automatically
     * called by the constructor.
     * @private
     * @param {HTMLImageElement|String} element The element representing the image
     */
    _initElement: function (element) {
      this.setElement(fabric.util.getById(element));
      fabric.util.addClass(this.getElement(), fabric.Image.CSS_CANVAS);
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initConfig: function (options) {
      options || (options = {});
      this.setOptions(options);
      this._setWidthHeight(options);
      this._element.crossOrigin = this.crossOrigin;
    },

    /**
     * @private
     * @param {Object} object Object with filters property
     * @param {Function} callback Callback to invoke when all fabric.Image.filters instances are created
     */
    _initFilters: function (object, callback) {
      if (object.filters && object.filters.length) {
        fabric.util.enlivenObjects(object.filters, function (enlivenedObjects) {
          callback && callback(enlivenedObjects);
        }, 'fabric.Image.filters');
      } else {
        callback && callback();
      }
    },

    /**
     * @private
     * @param {Object} [options] Object with width/height properties
     */
    _setWidthHeight: function (options) {
      this.width = 'width' in options
        ? options.width
        : (this.getElement().width || 0);

      this.height = 'height' in options
        ? options.height
        : (this.getElement().height || 0);
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function () {
      return 1;
    }
  });

  /**
   * Default CSS class name for canvas
   * @static
   * @type String
   * @default
   */
  fabric.Image.CSS_CANVAS = 'canvas-img';

  /**
   * Alias for getSrc
   * @static
   */
  fabric.Image.prototype.getSvgSrc = fabric.Image.prototype.getSrc;

  /**
   * Creates an instance of fabric.Image from its object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @param {Function} [callback] Callback to invoke when an image instance is created
   */
  fabric.Image.fromObject = function (object, callback) {
    fabric.util.loadImage(object.src, function (img) {
      fabric.Image.prototype._initFilters.call(object, object, function (filters) {
        object.filters = filters || [];
        var instance = new fabric.Image(img, object);
        callback && callback(instance);
      });
    }, null, object.crossOrigin);
  };

  /**
   * Creates an instance of fabric.Image from an URL string
   * @static
   * @param {String} url URL to create an image from
   * @param {Function} [callback] Callback to invoke when image is created (newly created image is passed as a first argument)
   * @param {Object} [imgOptions] Options object
   */
  fabric.Image.fromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
      callback(new fabric.Image(img, imgOptions));
    }, null, imgOptions && imgOptions.crossOrigin);
  };

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Image.fromElement})
   * @static
   * @see {@link http://www.w3.org/TR/SVG/struct.html#ImageElement}
   */
  fabric.Image.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('x y width height xlink:href'.split(' '));

  /**
   * Returns {@link fabric.Image} instance from an SVG element
   * @static
   * @param {SVGElement} element Element to parse
   * @param {Function} callback Callback to execute when fabric.Image object is created
   * @param {Object} [options] Options object
   * @return {fabric.Image} Instance of fabric.Image
   */
  fabric.Image.fromElement = function (element, callback, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Image.ATTRIBUTE_NAMES);

    fabric.Image.fromURL(parsedAttributes['xlink:href'], callback,
      extend((options ? fabric.util.object.clone(options) : {}), parsedAttributes));
  };
  /* _FROM_SVG_END_ */

  /**
   * Indicates that instances of this type are async
   * @static
   * @type Boolean
   * @default
   */
  fabric.Image.async = true;

  /**
   * Indicates compression level used when generating PNG under Node (in applyFilters). Any of 0-9
   * @static
   * @type Number
   * @default
   */
  fabric.Image.pngCompression = 1;

})(typeof exports !== 'undefined' ? exports : this);

fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * @private
   * @return {Number} angle value
   */
  _getAngleValueForStraighten: function () {
    var angle = this.getAngle() % 360;
    if (angle > 0) {
      return Math.round((angle - 1) / 90) * 90;
    }
    return Math.round(angle / 90) * 90;
  },

  /**
   * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
   * @return {fabric.Object} thisArg
   * @chainable
   */
  straighten: function () {
    this.setAngle(this._getAngleValueForStraighten());
    return this;
  },

  /**
   * Same as {@link fabric.Object.prototype.straighten} but with animation
   * @param {Object} callbacks Object with callback functions
   * @param {Function} [callbacks.onComplete] Invoked on completion
   * @param {Function} [callbacks.onChange] Invoked on every step of animation
   * @return {fabric.Object} thisArg
   * @chainable
   */
  fxStraighten: function (callbacks) {
    callbacks = callbacks || {};

    var empty = function () {
      },
      onComplete = callbacks.onComplete || empty,
      onChange = callbacks.onChange || empty,
      _this = this;

    fabric.util.animate({
      startValue: this.get('angle'),
      endValue: this._getAngleValueForStraighten(),
      duration: this.FX_DURATION,
      onChange: function (value) {
        _this.setAngle(value);
        onChange();
      },
      onComplete: function () {
        _this.setCoords();
        onComplete();
      },
      onStart: function () {
        _this.set('active', false);
      }
    });

    return this;
  }
});

fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Straightens object, then rerenders canvas
   * @param {fabric.Object} object Object to straighten
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  straightenObject: function (object) {
    object.straighten();
    this.renderAll();
    return this;
  },

  /**
   * Same as {@link fabric.Canvas.prototype.straightenObject}, but animated
   * @param {fabric.Object} object Object to straighten
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxStraightenObject: function (object) {
    object.fxStraighten({
      onChange: this.renderAll.bind(this)
    });
    return this;
  }
});

/**
 * @namespace fabric.Image.filters
 * @memberOf fabric.Image
 * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#image_filters}
 * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
 */
fabric.Image.filters = fabric.Image.filters || {};

/**
 * Root filter class from which all filter classes inherit from
 * @class fabric.Image.filters.BaseFilter
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.BaseFilter = fabric.util.createClass(/** @lends fabric.Image.filters.BaseFilter.prototype */ {

  /**
   * Filter type
   * @param {String} type
   * @default
   */
  type: 'BaseFilter',

  /**
   * Returns object representation of an instance
   * @return {Object} Object representation of an instance
   */
  toObject: function () {
    return {type: this.type};
  },

  /**
   * Returns a JSON representation of an instance
   * @return {Object} JSON
   */
  toJSON: function () {
    // delegate, not alias
    return this.toObject();
  }
});

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend;

  /**
   * Brightness filter class
   * @class fabric.Image.filters.Brightness
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Brightness#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Brightness({
   *   brightness: 200
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Brightness = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Brightness.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Brightness',

      /**
       * Constructor
       * @memberOf fabric.Image.filters.Brightness.prototype
       * @param {Object} [options] Options object
       * @param {Number} [options.brightness=100] Value to brighten the image up (0..255)
       */
      initialize: function (options) {
        options = options || {};
        this.brightness = options.brightness || 100;
      },

      /**
       * Applies filter to canvas element
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          brightness = this.brightness;

        for (var i = 0, len = data.length; i < len; i += 4) {
          data[i] += brightness;
          data[i + 1] += brightness;
          data[i + 2] += brightness;
        }

        context.putImageData(imageData, 0, 0);
      },

      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function () {
        return extend(this.callSuper('toObject'), {
          brightness: this.brightness
        });
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Brightness} Instance of fabric.Image.filters.Brightness
   */
  fabric.Image.filters.Brightness.fromObject = function (object) {
    return new fabric.Image.filters.Brightness(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend;

  /**
   * Adapted from <a href="http://www.html5rocks.com/en/tutorials/canvas/imagefilters/">html5rocks article</a>
   * @class fabric.Image.filters.Convolute
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Convolute#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example <caption>Sharpen filter</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   matrix: [ 0, -1,  0,
   *            -1,  5, -1,
   *             0, -1,  0 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Blur filter</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   matrix: [ 1/9, 1/9, 1/9,
   *             1/9, 1/9, 1/9,
   *             1/9, 1/9, 1/9 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Emboss filter</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   matrix: [ 1,   1,  1,
   *             1, 0.7, -1,
   *            -1,  -1, -1 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Emboss filter with opaqueness</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   opaque: true,
   *   matrix: [ 1,   1,  1,
   *             1, 0.7, -1,
   *            -1,  -1, -1 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Convolute = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Convolute.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Convolute',

      /**
       * Constructor
       * @memberOf fabric.Image.filters.Convolute.prototype
       * @param {Object} [options] Options object
       * @param {Boolean} [options.opaque=false] Opaque value (true/false)
       * @param {Array} [options.matrix] Filter matrix
       */
      initialize: function (options) {
        options = options || {};

        this.opaque = options.opaque;
        this.matrix = options.matrix || [
          0, 0, 0,
          0, 1, 0,
          0, 0, 0];

        var canvasEl = fabric.util.createCanvasElement();
        this.tmpCtx = canvasEl.getContext('2d');
      },

      /**
       * @private
       */
      _createImageData: function (w, h) {
        return this.tmpCtx.createImageData(w, h);
      },

      /**
       * Applies filter to canvas element
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {

        var weights = this.matrix,
          context = canvasEl.getContext('2d'),
          pixels = context.getImageData(0, 0, canvasEl.width, canvasEl.height),

          side = Math.round(Math.sqrt(weights.length)),
          halfSide = Math.floor(side / 2),
          src = pixels.data,
          sw = pixels.width,
          sh = pixels.height;

        // pad output by the convolution matrix
        var w = sw;
        var h = sh;
        var output = this._createImageData(w, h);

        var dst = output.data;

        // go through the destination image pixels
        var alphaFac = this.opaque ? 1 : 0;

        for (var y = 0; y < h; y++) {
          for (var x = 0; x < w; x++) {
            var sy = y;
            var sx = x;
            var dstOff = (y * w + x) * 4;
            // calculate the weighed sum of the source image pixels that
            // fall under the convolution matrix
            var r = 0, g = 0, b = 0, a = 0;

            for (var cy = 0; cy < side; cy++) {
              for (var cx = 0; cx < side; cx++) {

                var scy = sy + cy - halfSide;
                var scx = sx + cx - halfSide;

                /* jshint maxdepth:5 */
                if (scy < 0 || scy > sh || scx < 0 || scx > sw) continue;

                var srcOff = (scy * sw + scx) * 4;
                var wt = weights[cy * side + cx];

                r += src[srcOff] * wt;
                g += src[srcOff + 1] * wt;
                b += src[srcOff + 2] * wt;
                a += src[srcOff + 3] * wt;
              }
            }
            dst[dstOff] = r;
            dst[dstOff + 1] = g;
            dst[dstOff + 2] = b;
            dst[dstOff + 3] = a + alphaFac * (255 - a);
          }
        }

        context.putImageData(output, 0, 0);
      },

      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function () {
        return extend(this.callSuper('toObject'), {
          opaque: this.opaque,
          matrix: this.matrix
        });
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Convolute} Instance of fabric.Image.filters.Convolute
   */
  fabric.Image.filters.Convolute.fromObject = function (object) {
    return new fabric.Image.filters.Convolute(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend;

  /**
   * GradientTransparency filter class
   * @class fabric.Image.filters.GradientTransparency
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.GradientTransparency#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.GradientTransparency({
   *   threshold: 200
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.GradientTransparency = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.GradientTransparency.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'GradientTransparency',

      /**
       * Constructor
       * @memberOf fabric.Image.filters.GradientTransparency.prototype
       * @param {Object} [options] Options object
       * @param {Number} [options.threshold=100] Threshold value
       */
      initialize: function (options) {
        options = options || {};
        this.threshold = options.threshold || 100;
      },

      /**
       * Applies filter to canvas element
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          threshold = this.threshold,
          total = data.length;

        for (var i = 0, len = data.length; i < len; i += 4) {
          data[i + 3] = threshold + 255 * (total - i) / total;
        }

        context.putImageData(imageData, 0, 0);
      },

      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function () {
        return extend(this.callSuper('toObject'), {
          threshold: this.threshold
        });
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.GradientTransparency} Instance of fabric.Image.filters.GradientTransparency
   */
  fabric.Image.filters.GradientTransparency.fromObject = function (object) {
    return new fabric.Image.filters.GradientTransparency(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {});

  /**
   * Grayscale image filter class
   * @class fabric.Image.filters.Grayscale
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Grayscale();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Grayscale = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Grayscale.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Grayscale',

      /**
       * Applies filter to canvas element
       * @memberOf fabric.Image.filters.Grayscale.prototype
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          len = imageData.width * imageData.height * 4,
          index = 0,
          average;

        while (index < len) {
          average = (data[index] + data[index + 1] + data[index + 2]) / 3;
          data[index] = average;
          data[index + 1] = average;
          data[index + 2] = average;
          index += 4;
        }

        context.putImageData(imageData, 0, 0);
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Grayscale} Instance of fabric.Image.filters.Grayscale
   */
  fabric.Image.filters.Grayscale.fromObject = function () {
    return new fabric.Image.filters.Grayscale();
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {});

  /**
   * Invert filter class
   * @class fabric.Image.filters.Invert
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Invert();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Invert = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Invert.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Invert',

      /**
       * Applies filter to canvas element
       * @memberOf fabric.Image.filters.Invert.prototype
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i;

        for (i = 0; i < iLen; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }

        context.putImageData(imageData, 0, 0);
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Invert} Instance of fabric.Image.filters.Invert
   */
  fabric.Image.filters.Invert.fromObject = function () {
    return new fabric.Image.filters.Invert();
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend;

  /**
   * Mask filter class
   * See http://resources.aleph-1.com/mask/
   * @class fabric.Image.filters.Mask
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Mask#initialize} for constructor definition
   */
  fabric.Image.filters.Mask = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Mask.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Mask',

      /**
       * Constructor
       * @memberOf fabric.Image.filters.Mask.prototype
       * @param {Object} [options] Options object
       * @param {fabric.Image} [options.mask] Mask image object
       * @param {Number} [options.channel=0] Rgb channel (0, 1, 2 or 3)
       */
      initialize: function (options) {
        options = options || {};

        this.mask = options.mask;
        this.channel = [0, 1, 2, 3].indexOf(options.channel) > -1 ? options.channel : 0;
      },

      /**
       * Applies filter to canvas element
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        if (!this.mask) return;

        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          maskEl = this.mask.getElement(),
          maskCanvasEl = fabric.util.createCanvasElement(),
          channel = this.channel,
          i,
          iLen = imageData.width * imageData.height * 4;

        maskCanvasEl.width = maskEl.width;
        maskCanvasEl.height = maskEl.height;

        maskCanvasEl.getContext('2d').drawImage(maskEl, 0, 0, maskEl.width, maskEl.height);

        var maskImageData = maskCanvasEl.getContext('2d').getImageData(0, 0, maskEl.width, maskEl.height),
          maskData = maskImageData.data;

        for (i = 0; i < iLen; i += 4) {
          data[i + 3] = maskData[i + channel];
        }

        context.putImageData(imageData, 0, 0);
      },

      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function () {
        return extend(this.callSuper('toObject'), {
          mask: this.mask.toObject(),
          channel: this.channel
        });
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @param {Function} [callback] Callback to invoke when a mask filter instance is created
   */
  fabric.Image.filters.Mask.fromObject = function (object, callback) {
    fabric.util.loadImage(object.mask.src, function (img) {
      object.mask = new fabric.Image(img, object.mask);
      callback && callback(new fabric.Image.filters.Mask(object));
    });
  };

  /**
   * Indicates that instances of this type are async
   * @static
   * @type Boolean
   * @default
   */
  fabric.Image.filters.Mask.async = true;

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend;

  /**
   * Noise filter class
   * @class fabric.Image.filters.Noise
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Noise#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Noise({
   *   noise: 700
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Noise = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Noise.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Noise',

      /**
       * Constructor
       * @memberOf fabric.Image.filters.Noise.prototype
       * @param {Object} [options] Options object
       * @param {Number} [options.noise=100] Noise value
       */
      initialize: function (options) {
        options = options || {};
        this.noise = options.noise || 100;
      },

      /**
       * Applies filter to canvas element
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          noise = this.noise, rand;

        for (var i = 0, len = data.length; i < len; i += 4) {

          rand = (0.5 - Math.random()) * noise;

          data[i] += rand;
          data[i + 1] += rand;
          data[i + 2] += rand;
        }

        context.putImageData(imageData, 0, 0);
      },

      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function () {
        return extend(this.callSuper('toObject'), {
          noise: this.noise
        });
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Noise} Instance of fabric.Image.filters.Noise
   */
  fabric.Image.filters.Noise.fromObject = function (object) {
    return new fabric.Image.filters.Noise(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend;

  /**
   * Pixelate filter class
   * @class fabric.Image.filters.Pixelate
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Pixelate#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Pixelate({
   *   blocksize: 8
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Pixelate = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Pixelate.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Pixelate',

      /**
       * Constructor
       * @memberOf fabric.Image.filters.Pixelate.prototype
       * @param {Object} [options] Options object
       * @param {Number} [options.blocksize=4] Blocksize for pixelate
       */
      initialize: function (options) {
        options = options || {};
        this.blocksize = options.blocksize || 4;
      },

      /**
       * Applies filter to canvas element
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = imageData.height,
          jLen = imageData.width,
          index, i, j, r, g, b, a;

        for (i = 0; i < iLen; i += this.blocksize) {
          for (j = 0; j < jLen; j += this.blocksize) {

            index = (i * 4) * jLen + (j * 4);

            r = data[index];
            g = data[index + 1];
            b = data[index + 2];
            a = data[index + 3];

            /*
           blocksize: 4

           [1,x,x,x,1]
           [x,x,x,x,1]
           [x,x,x,x,1]
           [x,x,x,x,1]
           [1,1,1,1,1]
           */

            for (var _i = i, _ilen = i + this.blocksize; _i < _ilen; _i++) {
              for (var _j = j, _jlen = j + this.blocksize; _j < _jlen; _j++) {
                index = (_i * 4) * jLen + (_j * 4);
                data[index] = r;
                data[index + 1] = g;
                data[index + 2] = b;
                data[index + 3] = a;
              }
            }
          }
        }

        context.putImageData(imageData, 0, 0);
      },

      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function () {
        return extend(this.callSuper('toObject'), {
          blocksize: this.blocksize
        });
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Pixelate} Instance of fabric.Image.filters.Pixelate
   */
  fabric.Image.filters.Pixelate.fromObject = function (object) {
    return new fabric.Image.filters.Pixelate(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend;

  /**
   * Remove white filter class
   * @class fabric.Image.filters.RemoveWhite
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.RemoveWhite#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.RemoveWhite({
   *   threshold: 40,
   *   distance: 140
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.RemoveWhite = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.RemoveWhite.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'RemoveWhite',

      /**
       * Constructor
       * @memberOf fabric.Image.filters.RemoveWhite.prototype
       * @param {Object} [options] Options object
       * @param {Number} [options.threshold=30] Threshold value
       * @param {Number} [options.distance=20] Distance value
       */
      initialize: function (options) {
        options = options || {};
        this.threshold = options.threshold || 30;
        this.distance = options.distance || 20;
      },

      /**
       * Applies filter to canvas element
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          threshold = this.threshold,
          distance = this.distance,
          limit = 255 - threshold,
          abs = Math.abs,
          r, g, b;

        for (var i = 0, len = data.length; i < len; i += 4) {
          r = data[i];
          g = data[i + 1];
          b = data[i + 2];

          if (r > limit &&
            g > limit &&
            b > limit &&
            abs(r - g) < distance &&
            abs(r - b) < distance &&
            abs(g - b) < distance
          ) {
            data[i + 3] = 1;
          }
        }

        context.putImageData(imageData, 0, 0);
      },

      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function () {
        return extend(this.callSuper('toObject'), {
          threshold: this.threshold,
          distance: this.distance
        });
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.RemoveWhite} Instance of fabric.Image.filters.RemoveWhite
   */
  fabric.Image.filters.RemoveWhite.fromObject = function (object) {
    return new fabric.Image.filters.RemoveWhite(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {});

  /**
   * Sepia filter class
   * @class fabric.Image.filters.Sepia
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Sepia();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Sepia = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Sepia.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Sepia',

      /**
       * Applies filter to canvas element
       * @memberOf fabric.Image.filters.Sepia.prototype
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i, avg;

        for (i = 0; i < iLen; i += 4) {
          avg = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
          data[i] = avg + 100;
          data[i + 1] = avg + 50;
          data[i + 2] = avg + 255;
        }

        context.putImageData(imageData, 0, 0);
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Sepia} Instance of fabric.Image.filters.Sepia
   */
  fabric.Image.filters.Sepia.fromObject = function () {
    return new fabric.Image.filters.Sepia();
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {});

  /**
   * Sepia2 filter class
   * @class fabric.Image.filters.Sepia2
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Sepia2();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Sepia2 = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Sepia2.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Sepia2',

      /**
       * Applies filter to canvas element
       * @memberOf fabric.Image.filters.Sepia.prototype
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i, r, g, b;

        for (i = 0; i < iLen; i += 4) {
          r = data[i];
          g = data[i + 1];
          b = data[i + 2];

          data[i] = (r * 0.393 + g * 0.769 + b * 0.189) / 1.351;
          data[i + 1] = (r * 0.349 + g * 0.686 + b * 0.168) / 1.203;
          data[i + 2] = (r * 0.272 + g * 0.534 + b * 0.131) / 2.140;
        }

        context.putImageData(imageData, 0, 0);
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Sepia2} Instance of fabric.Image.filters.Sepia2
   */
  fabric.Image.filters.Sepia2.fromObject = function () {
    return new fabric.Image.filters.Sepia2();
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend;

  /**
   * Tint filter class
   * Adapted from <a href="https://github.com/mezzoblue/PaintbrushJS">https://github.com/mezzoblue/PaintbrushJS</a>
   * @class fabric.Image.filters.Tint
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Tint#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example <caption>Tint filter with hex color and opacity</caption>
   * var filter = new fabric.Image.filters.Tint({
   *   color: '#3513B0',
   *   opacity: 0.5
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Tint filter with rgba color</caption>
   * var filter = new fabric.Image.filters.Tint({
   *   color: 'rgba(53, 21, 176, 0.5)'
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Tint = fabric.util.createClass(fabric.Image.filters.BaseFilter,
    /** @lends fabric.Image.filters.Tint.prototype */ {

      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: 'Tint',

      /**
       * Constructor
       * @memberOf fabric.Image.filters.Tint.prototype
       * @param {Object} [options] Options object
       * @param {String} [options.color=#000000] Color to tint the image with
       * @param {Number} [options.opacity] Opacity value that controls the tint effect's transparency (0..1)
       */
      initialize: function (options) {
        options = options || {};

        this.color = options.color || '#000000';
        this.opacity = typeof options.opacity !== 'undefined'
          ? options.opacity
          : new fabric.Color(this.color).getAlpha();
      },

      /**
       * Applies filter to canvas element
       * @param {Object} canvasEl Canvas element to apply filter to
       */
      applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i,
          tintR, tintG, tintB,
          r, g, b, alpha1,
          source;

        source = new fabric.Color(this.color).getSource();

        tintR = source[0] * this.opacity;
        tintG = source[1] * this.opacity;
        tintB = source[2] * this.opacity;

        alpha1 = 1 - this.opacity;

        for (i = 0; i < iLen; i += 4) {
          r = data[i];
          g = data[i + 1];
          b = data[i + 2];

          // alpha compositing
          data[i] = tintR + r * alpha1;
          data[i + 1] = tintG + g * alpha1;
          data[i + 2] = tintB + b * alpha1;
        }

        context.putImageData(imageData, 0, 0);
      },

      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function () {
        return extend(this.callSuper('toObject'), {
          color: this.color,
          opacity: this.opacity
        });
      }
    });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Tint} Instance of fabric.Image.filters.Tint
   */
  fabric.Image.filters.Tint.fromObject = function (object) {
    return new fabric.Image.filters.Tint(object);
  };

})(typeof exports !== 'undefined' ? exports : this);

(function (global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
    extend = fabric.util.object.extend,
    clone = fabric.util.object.clone,
    toFixed = fabric.util.toFixed,
    supportsLineDash = fabric.StaticCanvas.supports('setLineDash');

  if (fabric.Text) {
    // fabric.warn('fabric.Text is already defined');
    return;
  }

  var stateProperties = fabric.Object.prototype.stateProperties.concat();
  stateProperties.push(
    'fontFamily',
    'fontWeight',
    'fontSize',
    'text',
    'textDecoration',
    'textAlign',
    'fontStyle',
    'lineHeight',
    'textBackgroundColor',
    'useNative',
    'path'
  );

  /**
   * Text class
   * @class fabric.Text
   * @extends fabric.Object
   * @return {fabric.Text} thisArg
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#text}
   * @see {@link fabric.Text#initialize} for constructor definition
   */
  fabric.Text = fabric.util.createClass(fabric.Object, /** @lends fabric.Text.prototype */ {

    /**
     * Properties which when set cause object to change dimensions
     * @type Object
     * @private
     */
    _dimensionAffectingProps: {
      fontSize: true,
      fontWeight: true,
      fontFamily: true,
      textDecoration: true,
      fontStyle: true,
      lineHeight: true,
      stroke: true,
      strokeWidth: true,
      text: true
    },

    /**
     * @private
     */
    _reNewline: /\r?\n/,

    /**
     * Retrieves object's fontSize
     * @method getFontSize
     * @memberOf fabric.Text.prototype
     * @return {String} Font size (in pixels)
     */

    /**
     * Sets object's fontSize
     * @method setFontSize
     * @memberOf fabric.Text.prototype
     * @param {Number} fontSize Font size (in pixels)
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's fontWeight
     * @method getFontWeight
     * @memberOf fabric.Text.prototype
     * @return {(String|Number)} Font weight
     */

    /**
     * Sets object's fontWeight
     * @method setFontWeight
     * @memberOf fabric.Text.prototype
     * @param {(Number|String)} fontWeight Font weight
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's fontFamily
     * @method getFontFamily
     * @memberOf fabric.Text.prototype
     * @return {String} Font family
     */

    /**
     * Sets object's fontFamily
     * @method setFontFamily
     * @memberOf fabric.Text.prototype
     * @param {String} fontFamily Font family
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's text
     * @method getText
     * @memberOf fabric.Text.prototype
     * @return {String} text
     */

    /**
     * Sets object's text
     * @method setText
     * @memberOf fabric.Text.prototype
     * @param {String} text Text
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's textDecoration
     * @method getTextDecoration
     * @memberOf fabric.Text.prototype
     * @return {String} Text decoration
     */

    /**
     * Sets object's textDecoration
     * @method setTextDecoration
     * @memberOf fabric.Text.prototype
     * @param {String} textDecoration Text decoration
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's fontStyle
     * @method getFontStyle
     * @memberOf fabric.Text.prototype
     * @return {String} Font style
     */

    /**
     * Sets object's fontStyle
     * @method setFontStyle
     * @memberOf fabric.Text.prototype
     * @param {String} fontStyle Font style
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's lineHeight
     * @method getLineHeight
     * @memberOf fabric.Text.prototype
     * @return {Number} Line height
     */

    /**
     * Sets object's lineHeight
     * @method setLineHeight
     * @memberOf fabric.Text.prototype
     * @param {Number} lineHeight Line height
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's textAlign
     * @method getTextAlign
     * @memberOf fabric.Text.prototype
     * @return {String} Text alignment
     */

    /**
     * Sets object's textAlign
     * @method setTextAlign
     * @memberOf fabric.Text.prototype
     * @param {String} textAlign Text alignment
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's textBackgroundColor
     * @method getTextBackgroundColor
     * @memberOf fabric.Text.prototype
     * @return {String} Text background color
     */

    /**
     * Sets object's textBackgroundColor
     * @method setTextBackgroundColor
     * @memberOf fabric.Text.prototype
     * @param {String} textBackgroundColor Text background color
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'text',

    /**
     * Font size (in pixels)
     * @type Number
     * @default
     */
    fontSize: 40,

    /**
     * Font weight (e.g. bold, normal, 400, 600, 800)
     * @type {(Number|String)}
     * @default
     */
    fontWeight: 'normal',

    /**
     * Font family
     * @type String
     * @default
     */
    fontFamily: 'Times New Roman',

    /**
     * Text decoration Possible values: "", "underline", "overline" or "line-through".
     * @type String
     * @default
     */
    textDecoration: '',

    /**
     * Text alignment. Possible values: "left", "center", or "right".
     * @type String
     * @default
     */
    textAlign: 'left',

    /**
     * Font style . Possible values: "", "normal", "italic" or "oblique".
     * @type String
     * @default
     */
    fontStyle: '',

    /**
     * Line height
     * @type Number
     * @default
     */
    lineHeight: 1.3,

    /**
     * Background color of text lines
     * @type String
     * @default
     */
    textBackgroundColor: '',

    /**
     * URL of a font file, when using Cufon
     * @type String | null
     * @default
     */
    path: null,

    /**
     * Indicates whether canvas native text methods should be used to render text (otherwise, Cufon is used)
     * @type Boolean
     * @default
     */
    useNative: true,

    /**
     * List of properties to consider when checking if
     * state of an object is changed ({@link fabric.Object#hasStateChanged})
     * as well as for history (undo/redo) purposes
     * @type Array
     */
    stateProperties: stateProperties,

    /**
     * When defined, an object is rendered via stroke and this property specifies its color.
     * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
     * @type String
     * @default
     */
    stroke: null,

    /**
     * Shadow object representing shadow of this shape.
     * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
     * @type fabric.Shadow
     * @default
     */
    shadow: null,

    /**
     * Constructor
     * @param {String} text Text string
     * @param {Object} [options] Options object
     * @return {fabric.Text} thisArg
     */
    initialize: function (text, options) {
      options = options || {};

      this.text = text;
      this.__skipDimension = true;
      this.setOptions(options);
      this.__skipDimension = false;
      this._initDimensions();
      this.setCoords();
    },

    /**
     * Renders text object on offscreen canvas, so that it would get dimensions
     * @private
     */
    _initDimensions: function () {
      if (this.__skipDimension) return;
      var canvasEl = fabric.util.createCanvasElement();
      this._render(canvasEl.getContext('2d'));
    },

    /**
     * Returns string representation of an instance
     * @return {String} String representation of text object
     */
    toString: function () {
      return '#<fabric.Text (' + this.complexity() +
        '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function (ctx) {

      var isInPathGroup = this.group && this.group.type === 'path-group';
      if (isInPathGroup && !this.transformMatrix) {
        ctx.translate(-this.group.width / 2 + this.left, -this.group.height / 2 + this.top);
      } else if (isInPathGroup && this.transformMatrix) {
        ctx.translate(-this.group.width / 2, -this.group.height / 2);
      }

      if (typeof Cufon === 'undefined' || this.useNative === true) {
        this._renderViaNative(ctx);
      } else {
        this._renderViaCufon(ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderViaNative: function (ctx) {
      var textLines = this.text.split(this._reNewline);

      this.transform(ctx, fabric.isLikelyNode);

      this._setTextStyles(ctx);

      this.width = this._getTextWidth(ctx, textLines);
      this.height = this._getTextHeight(ctx, textLines);

      this.clipTo && fabric.util.clipContext(this, ctx);

      this._renderTextBackground(ctx, textLines);
      this._translateForTextAlign(ctx);
      this._renderText(ctx, textLines);

      if (this.textAlign !== 'left' && this.textAlign !== 'justify') {
        ctx.restore();
      }

      this._renderTextDecoration(ctx, textLines);
      this.clipTo && ctx.restore();

      this._setBoundaries(ctx, textLines);
      this._totalLineHeight = 0;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderText: function (ctx, textLines) {
      ctx.save();
      this._setShadow(ctx);
      this._renderTextFill(ctx, textLines);
      this._renderTextStroke(ctx, textLines);
      this._removeShadow(ctx);
      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _translateForTextAlign: function (ctx) {
      if (this.textAlign !== 'left' && this.textAlign !== 'justify') {
        ctx.save();
        ctx.translate(this.textAlign === 'center' ? (this.width / 2) : this.width, 0);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _setBoundaries: function (ctx, textLines) {
      this._boundaries = [];

      for (var i = 0, len = textLines.length; i < len; i++) {

        var lineWidth = this._getLineWidth(ctx, textLines[i]);
        var lineLeftOffset = this._getLineLeftOffset(lineWidth);

        this._boundaries.push({
          height: this.fontSize * this.lineHeight,
          width: lineWidth,
          left: lineLeftOffset
        });
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _setTextStyles: function (ctx) {
      this._setFillStyles(ctx);
      this._setStrokeStyles(ctx);
      ctx.textBaseline = 'alphabetic';
      if (!this.skipTextAlign) {
        ctx.textAlign = this.textAlign;
      }
      ctx.font = this._getFontDeclaration();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     * @return {Number} Height of fabric.Text object
     */
    _getTextHeight: function (ctx, textLines) {
      return this.fontSize * textLines.length * this.lineHeight;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     * @return {Number} Maximum width of fabric.Text object
     */
    _getTextWidth: function (ctx, textLines) {
      var maxWidth = ctx.measureText(textLines[0] || '|').width;

      for (var i = 1, len = textLines.length; i < len; i++) {
        var currentLineWidth = ctx.measureText(textLines[i]).width;
        if (currentLineWidth > maxWidth) {
          maxWidth = currentLineWidth;
        }
      }
      return maxWidth;
    },

    /**
     * @private
     * @param {String} method Method name ("fillText" or "strokeText")
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Chars to render
     * @param {Number} left Left position of text
     * @param {Number} top Top position of text
     */
    _renderChars: function (method, ctx, chars, left, top) {
      ctx[method](chars, left, top);
    },

    /**
     * @private
     * @param {String} method Method name ("fillText" or "strokeText")
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Text to render
     * @param {Number} left Left position of text
     * @param {Number} top Top position of text
     * @param {Number} lineIndex Index of a line in a text
     */
    _renderTextLine: function (method, ctx, line, left, top, lineIndex) {
      // lift the line by quarter of fontSize
      top -= this.fontSize / 4;

      // short-circuit
      if (this.textAlign !== 'justify') {
        this._renderChars(method, ctx, line, left, top, lineIndex);
        return;
      }

      var lineWidth = ctx.measureText(line).width;
      var totalWidth = this.width;

      if (totalWidth > lineWidth) {
        // stretch the line
        var words = line.split(/\s+/);
        var wordsWidth = ctx.measureText(line.replace(/\s+/g, '')).width;
        var widthDiff = totalWidth - wordsWidth;
        var numSpaces = words.length - 1;
        var spaceWidth = widthDiff / numSpaces;

        var leftOffset = 0;
        for (var i = 0, len = words.length; i < len; i++) {
          this._renderChars(method, ctx, words[i], left + leftOffset, top, lineIndex);
          leftOffset += ctx.measureText(words[i]).width + spaceWidth;
        }
      } else {
        this._renderChars(method, ctx, line, left, top, lineIndex);
      }
    },

    /**
     * @private
     * @return {Number} Left offset
     */
    _getLeftOffset: function () {
      if (fabric.isLikelyNode) {
        return 0;
      }
      return -this.width / 2;
    },

    /**
     * @private
     * @return {Number} Top offset
     */
    _getTopOffset: function () {
      return -this.height / 2;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextFill: function (ctx, textLines) {
      if (!this.fill && !this._skipFillStrokeCheck) return;

      this._boundaries = [];
      var lineHeights = 0;

      for (var i = 0, len = textLines.length; i < len; i++) {
        var heightOfLine = this._getHeightOfLine(ctx, i, textLines);
        lineHeights += heightOfLine;

        this._renderTextLine(
          'fillText',
          ctx,
          textLines[i],
          this._getLeftOffset(),
          this._getTopOffset() + lineHeights,
          i
        );
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextStroke: function (ctx, textLines) {
      if (!this.stroke && !this._skipFillStrokeCheck) return;

      var lineHeights = 0;

      ctx.save();
      if (this.strokeDashArray) {
        // Spec requires the concatenation of two copies the dash list when the number of elements is odd
        if (1 & this.strokeDashArray.length) {
          this.strokeDashArray.push.apply(this.strokeDashArray, this.strokeDashArray);
        }
        supportsLineDash && ctx.setLineDash(this.strokeDashArray);
      }

      ctx.beginPath();
      for (var i = 0, len = textLines.length; i < len; i++) {
        var heightOfLine = this._getHeightOfLine(ctx, i, textLines);
        lineHeights += heightOfLine;

        this._renderTextLine(
          'strokeText',
          ctx,
          textLines[i],
          this._getLeftOffset(),
          this._getTopOffset() + lineHeights,
          i
        );
      }
      ctx.closePath();
      ctx.restore();
    },

    _getHeightOfLine: function () {
      return this.fontSize * this.lineHeight;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextBackground: function (ctx, textLines) {
      this._renderTextBoxBackground(ctx);
      this._renderTextLinesBackground(ctx, textLines);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextBoxBackground: function (ctx) {
      if (!this.backgroundColor) return;

      ctx.save();
      ctx.fillStyle = this.backgroundColor;

      ctx.fillRect(
        this._getLeftOffset(),
        this._getTopOffset(),
        this.width,
        this.height
      );

      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextLinesBackground: function (ctx, textLines) {
      if (!this.textBackgroundColor) return;

      ctx.save();
      ctx.fillStyle = this.textBackgroundColor;

      for (var i = 0, len = textLines.length; i < len; i++) {

        if (textLines[i] !== '') {

          var lineWidth = this._getLineWidth(ctx, textLines[i]);
          var lineLeftOffset = this._getLineLeftOffset(lineWidth);

          ctx.fillRect(
            this._getLeftOffset() + lineLeftOffset,
            this._getTopOffset() + (i * this.fontSize * this.lineHeight),
            lineWidth,
            this.fontSize * this.lineHeight
          );
        }
      }
      ctx.restore();
    },

    /**
     * @private
     * @param {Number} lineWidth Width of text line
     * @return {Number} Line left offset
     */
    _getLineLeftOffset: function (lineWidth) {
      if (this.textAlign === 'center') {
        return (this.width - lineWidth) / 2;
      }
      if (this.textAlign === 'right') {
        return this.width - lineWidth;
      }
      return 0;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Text line
     * @return {Number} Line width
     */
    _getLineWidth: function (ctx, line) {
      return this.textAlign === 'justify'
        ? this.width
        : ctx.measureText(line).width;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextDecoration: function (ctx, textLines) {
      if (!this.textDecoration) return;

      // var halfOfVerticalBox = this.originY === 'top' ? 0 : this._getTextHeight(ctx, textLines) / 2;
      var halfOfVerticalBox = this._getTextHeight(ctx, textLines) / 2;
      var _this = this;

      /** @ignore */
      function renderLinesAtOffset(offset) {
        for (var i = 0, len = textLines.length; i < len; i++) {

          var lineWidth = _this._getLineWidth(ctx, textLines[i]);
          var lineLeftOffset = _this._getLineLeftOffset(lineWidth);

          ctx.fillRect(
            _this._getLeftOffset() + lineLeftOffset,
            ~~((offset + (i * _this._getHeightOfLine(ctx, i, textLines))) - halfOfVerticalBox),
            lineWidth,
            1);
        }
      }

      if (this.textDecoration.indexOf('underline') > -1) {
        renderLinesAtOffset(this.fontSize * this.lineHeight);
      }
      if (this.textDecoration.indexOf('line-through') > -1) {
        renderLinesAtOffset(this.fontSize * this.lineHeight - this.fontSize / 2);
      }
      if (this.textDecoration.indexOf('overline') > -1) {
        renderLinesAtOffset(this.fontSize * this.lineHeight - this.fontSize);
      }
    },

    /**
     * @private
     */
    _getFontDeclaration: function () {
      return [
        // node-canvas needs "weight style", while browsers need "style weight"
        (fabric.isLikelyNode ? this.fontWeight : this.fontStyle),
        (fabric.isLikelyNode ? this.fontStyle : this.fontWeight),
        this.fontSize + 'px',
        (fabric.isLikelyNode ? ('"' + this.fontFamily + '"') : this.fontFamily)
      ].join(' ');
    },

    /**
     * Renders text instance on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    render: function (ctx, noTransform) {
      // do not render if object is not visible
      if (!this.visible) return;

      ctx.save();
      var m = this.transformMatrix;
      if (m && !this.group) {
        ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }
      this._render(ctx);
      if (!noTransform && this.active) {
        this.drawBorders(ctx);
        this.drawControls(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      var object = extend(this.callSuper('toObject', propertiesToInclude), {
        text: this.text,
        fontSize: this.fontSize,
        fontWeight: this.fontWeight,
        fontFamily: this.fontFamily,
        fontStyle: this.fontStyle,
        lineHeight: this.lineHeight,
        textDecoration: this.textDecoration,
        textAlign: this.textAlign,
        path: this.path,
        textBackgroundColor: this.textBackgroundColor,
        useNative: this.useNative
      });
      if (!this.includeDefaultValues) {
        this._removeDefaultValues(object);
      }
      return object;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function (reviver) {
      var markup = [],
        textLines = this.text.split(this._reNewline),
        offsets = this._getSVGLeftTopOffsets(textLines),
        textAndBg = this._getSVGTextAndBg(offsets.lineTop, offsets.textLeft, textLines),
        shadowSpans = this._getSVGShadows(offsets.lineTop, textLines);

      // move top offset by an ascent
      offsets.textTop += (this._fontAscent ? ((this._fontAscent / 5) * this.lineHeight) : 0);

      this._wrapSVGTextAndBg(markup, textAndBg, shadowSpans, offsets);

      return reviver ? reviver(markup.join('')) : markup.join('');
    },

    /**
     * @private
     */
    _getSVGLeftTopOffsets: function (textLines) {
      var lineTop = this.useNative
          ? this.fontSize * this.lineHeight
          : (-this._fontAscent - ((this._fontAscent / 5) * this.lineHeight)),

        textLeft = -(this.width / 2),
        textTop = this.useNative
          ? this.fontSize - 1
          : (this.height / 2) - (textLines.length * this.fontSize) - this._totalLineHeight;

      return {
        textLeft: textLeft,
        textTop: textTop,
        lineTop: lineTop
      };
    },

    /**
     * @private
     */
    _wrapSVGTextAndBg: function (markup, textAndBg, shadowSpans, offsets) {
      markup.push(
        '<g transform="', this.getSvgTransform(), '">',
        textAndBg.textBgRects.join(''),
        '<text ',
        (this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, '\'') + '" ' : ''),
        (this.fontSize ? 'font-size="' + this.fontSize + '" ' : ''),
        (this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : ''),
        (this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : ''),
        (this.textDecoration ? 'text-decoration="' + this.textDecoration + '" ' : ''),
        'style="', this.getSvgStyles(), '" ',
        /* svg starts from left/bottom corner so we normalize height */
        'transform="translate(', toFixed(offsets.textLeft, 2), ' ', toFixed(offsets.textTop, 2), ')">',
        shadowSpans.join(''),
        textAndBg.textSpans.join(''),
        '</text>',
        '</g>'
      );
    },

    /**
     * @private
     * @param {Number} lineHeight
     * @param {Array} textLines Array of all text lines
     * @return {Array}
     */
    _getSVGShadows: function (lineHeight, textLines) {
      var shadowSpans = [],
        i, len,
        lineTopOffsetMultiplier = 1;

      if (!this.shadow || !this._boundaries) {
        return shadowSpans;
      }

      for (i = 0, len = textLines.length; i < len; i++) {
        if (textLines[i] !== '') {
          var lineLeftOffset = (this._boundaries && this._boundaries[i]) ? this._boundaries[i].left : 0;
          shadowSpans.push(
            '<tspan x="',
            toFixed((lineLeftOffset + lineTopOffsetMultiplier) + this.shadow.offsetX, 2),
            ((i === 0 || this.useNative) ? '" y' : '" dy'), '="',
            toFixed(this.useNative
              ? ((lineHeight * i) - this.height / 2 + this.shadow.offsetY)
              : (lineHeight + (i === 0 ? this.shadow.offsetY : 0)), 2),
            '" ',
            this._getFillAttributes(this.shadow.color), '>',
            fabric.util.string.escapeXml(textLines[i]),
            '</tspan>');
          lineTopOffsetMultiplier = 1;
        } else {
          // in some environments (e.g. IE 7 & 8) empty tspans are completely ignored, using a lineTopOffsetMultiplier
          // prevents empty tspans
          lineTopOffsetMultiplier++;
        }
      }

      return shadowSpans;
    },

    /**
     * @private
     * @param {Number} lineHeight
     * @param {Number} textLeftOffset Text left offset
     * @param {Array} textLines Array of all text lines
     * @return {Object}
     */
    _getSVGTextAndBg: function (lineHeight, textLeftOffset, textLines) {
      var textSpans = [],
        textBgRects = [],
        lineTopOffsetMultiplier = 1;

      // bounding-box background
      this._setSVGBg(textBgRects);

      // text and text-background
      for (var i = 0, len = textLines.length; i < len; i++) {
        if (textLines[i] !== '') {
          this._setSVGTextLineText(textLines[i], i, textSpans, lineHeight, lineTopOffsetMultiplier, textBgRects);
          lineTopOffsetMultiplier = 1;
        } else {
          // in some environments (e.g. IE 7 & 8) empty tspans are completely ignored, using a lineTopOffsetMultiplier
          // prevents empty tspans
          lineTopOffsetMultiplier++;
        }

        if (!this.textBackgroundColor || !this._boundaries) continue;

        this._setSVGTextLineBg(textBgRects, i, textLeftOffset, lineHeight);
      }

      return {
        textSpans: textSpans,
        textBgRects: textBgRects
      };
    },

    _setSVGTextLineText: function (textLine, i, textSpans, lineHeight, lineTopOffsetMultiplier) {
      var lineLeftOffset = (this._boundaries && this._boundaries[i])
        ? toFixed(this._boundaries[i].left, 2)
        : 0;

      textSpans.push(
        '<tspan x="',
        lineLeftOffset, '" ',
        (i === 0 || this.useNative ? 'y' : 'dy'), '="',
        toFixed(this.useNative
          ? ((lineHeight * i) - this.height / 2)
          : (lineHeight * lineTopOffsetMultiplier), 2), '" ',
        // doing this on <tspan> elements since setting opacity
        // on containing <text> one doesn't work in Illustrator
        this._getFillAttributes(this.fill), '>',
        fabric.util.string.escapeXml(textLine),
        '</tspan>'
      );
    },

    _setSVGTextLineBg: function (textBgRects, i, textLeftOffset, lineHeight) {
      textBgRects.push(
        '<rect ',
        this._getFillAttributes(this.textBackgroundColor),
        ' x="',
        toFixed(textLeftOffset + this._boundaries[i].left, 2),
        '" y="',
        /* an offset that seems to straighten things out */
        toFixed((lineHeight * i) - this.height / 2, 2),
        '" width="',
        toFixed(this._boundaries[i].width, 2),
        '" height="',
        toFixed(this._boundaries[i].height, 2),
        '"></rect>');
    },

    _setSVGBg: function (textBgRects) {
      if (this.backgroundColor && this._boundaries) {
        textBgRects.push(
          '<rect ',
          this._getFillAttributes(this.backgroundColor),
          ' x="',
          toFixed(-this.width / 2, 2),
          '" y="',
          toFixed(-this.height / 2, 2),
          '" width="',
          toFixed(this.width, 2),
          '" height="',
          toFixed(this.height, 2),
          '"></rect>');
      }
    },

    /**
     * Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
     * we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
     *
     * @private
     * @param {Any} value
     * @return {String}
     */
    _getFillAttributes: function (value) {
      var fillColor = (value && typeof value === 'string') ? new fabric.Color(value) : '';
      if (!fillColor || !fillColor.getSource() || fillColor.getAlpha() === 1) {
        return 'fill="' + value + '"';
      }
      return 'opacity="' + fillColor.getAlpha() + '" fill="' + fillColor.setAlpha(1).toRgb() + '"';
    },
    /* _TO_SVG_END_ */

    /**
     * Sets specified property to a specified value
     * @param {String} key
     * @param {Any} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    _set: function (key, value) {
      if (key === 'fontFamily' && this.path) {
        this.path = this.path.replace(/(.*?)([^\/]*)(\.font\.js)/, '$1' + value + '$3');
      }
      this.callSuper('_set', key, value);

      if (key in this._dimensionAffectingProps) {
        this._initDimensions();
        this.setCoords();
      }
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function () {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Text.fromElement})
   * @static
   * @memberOf fabric.Text
   * @see: http://www.w3.org/TR/SVG/text.html#TextElement
   */
  fabric.Text.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat(
    'x y font-family font-style font-weight font-size text-decoration'.split(' '));

  /**
   * Returns fabric.Text instance from an SVG element (<b>not yet implemented</b>)
   * @static
   * @memberOf fabric.Text
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Text} Instance of fabric.Text
   */
  fabric.Text.fromElement = function (element, options) {
    if (!element) {
      return null;
    }

    var parsedAttributes = fabric.parseAttributes(element, fabric.Text.ATTRIBUTE_NAMES);
    options = fabric.util.object.extend((options ? fabric.util.object.clone(options) : {}), parsedAttributes);

    var text = new fabric.Text(element.textContent, options);

    /*
      Adjust positioning:
        x/y attributes in SVG correspond to the bottom-left corner of text bounding box
        top/left properties in Fabric correspond to center point of text bounding box
    */

    text.set({
      left: text.getLeft() + text.getWidth() / 2,
      top: text.getTop() - text.getHeight() / 2
    });

    return text;
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Text instance from an object representation
   * @static
   * @memberOf fabric.Text
   * @param object {Object} object Object to create an instance from
   * @return {fabric.Text} Instance of fabric.Text
   */
  fabric.Text.fromObject = function (object) {
    return new fabric.Text(object.text, clone(object));
  };

  // fabric.util.createAccessors(fabric.Text);

})(typeof exports !== 'undefined' ? exports : this);

(function () {

  var clone = fabric.util.object.clone;

  /**
   * IText class (introduced in <b>v1.4</b>)
   * @class fabric.IText
   * @extends fabric.Text
   * @mixes fabric.Observable
   *
   * @fires changed ("text:changed" when observing canvas)
   * @fires editing:entered ("text:editing:entered" when observing canvas)
   * @fires editing:exited ("text:editing:exited" when observing canvas)
   *
   * @return {fabric.IText} thisArg
   * @see {@link fabric.IText#initialize} for constructor definition
   *
   * <p>Supported key combinations:</p>
   * <pre>
   *   Move cursor:                    left, right, up, down
   *   Select character:               shift + left, shift + right
   *   Select text vertically:         shift + up, shift + down
   *   Move cursor by word:            alt + left, alt + right
   *   Select words:                   shift + alt + left, shift + alt + right
   *   Move cursor to line start/end:  cmd + left, cmd + right
   *   Select till start/end of line:  cmd + shift + left, cmd + shift + right
   *   Jump to start/end of text:      cmd + up, cmd + down
   *   Select till start/end of text:  cmd + shift + up, cmd + shift + down
   *   Delete character:               backspace
   *   Delete word:                    alt + backspace
   *   Delete line:                    cmd + backspace
   *   Forward delete:                 delete
   *   Copy text:                      ctrl/cmd + c
   *   Paste text:                     ctrl/cmd + v
   *   Cut text:                       ctrl/cmd + x
   *   Select entire text:             ctrl/cmd + a
   * </pre>
   *
   * <p>Supported mouse/touch combination</p>
   * <pre>
   *   Position cursor:                click/touch
   *   Create selection:               click/touch & drag
   *   Create selection:               click & shift + click
   *   Select word:                    double click
   *   Select line:                    triple click
   * </pre>
   */
  fabric.IText = fabric.util.createClass(fabric.Text, fabric.Observable, /** @lends fabric.IText.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'i-text',

    /**
     * Index where text selection starts (or where cursor is when there is no selection)
     * @type Nubmer
     * @default
     */
    selectionStart: 0,

    /**
     * Index where text selection ends
     * @type Nubmer
     * @default
     */
    selectionEnd: 0,

    /**
     * Color of text selection
     * @type String
     * @default
     */
    selectionColor: 'rgba(17,119,255,0.3)',

    /**
     * Indicates whether text is in editing mode
     * @type Boolean
     * @default
     */
    isEditing: false,

    /**
     * Indicates whether a text can be edited
     * @type Boolean
     * @default
     */
    editable: true,

    /**
     * Border color of text object while it's in editing mode
     * @type String
     * @default
     */
    editingBorderColor: 'rgba(102,153,255,0.25)',

    /**
     * Width of cursor (in px)
     * @type Number
     * @default
     */
    cursorWidth: 2,

    /**
     * Color of default cursor (when not overwritten by character style)
     * @type String
     * @default
     */
    cursorColor: '#333',

    /**
     * Delay between cursor blink (in ms)
     * @type Number
     * @default
     */
    cursorDelay: 1000,

    /**
     * Duration of cursor fadein (in ms)
     * @type Number
     * @default
     */
    cursorDuration: 600,

    /**
     * Object containing character styles
     * (where top-level properties corresponds to line number and 2nd-level properties -- to char number in a line)
     * @type Object
     * @default
     */
    styles: null,

    /**
     * Indicates whether internal text char widths can be cached
     * @type Boolean
     * @default
     */
    caching: true,

    /**
     * @private
     * @type Boolean
     * @default
     */
    _skipFillStrokeCheck: true,

    /**
     * @private
     */
    _reSpace: /\s|\n/,

    /**
     * @private
     */
    _fontSizeFraction: 4,

    /**
     * @private
     */
    _currentCursorOpacity: 0,

    /**
     * @private
     */
    _selectionDirection: null,

    /**
     * @private
     */
    _abortCursorAnimation: false,

    /**
     * @private
     */
    _charWidthsCache: {},

    /**
     * Constructor
     * @param {String} text Text string
     * @param {Object} [options] Options object
     * @return {fabric.IText} thisArg
     */
    initialize: function (text, options) {
      this.styles = options ? (options.styles || {}) : {};
      this.callSuper('initialize', text, options);
      this.initBehavior();

      fabric.IText.instances.push(this);

      // caching
      this.__lineWidths = {};
      this.__lineHeights = {};
      this.__lineOffsets = {};
    },

    /**
     * Returns true if object has no styling
     */
    isEmptyStyles: function () {
      if (!this.styles) return true;
      var obj = this.styles;

      for (var p1 in obj) {
        for (var p2 in obj[p1]) {
          /*jshint unused:false */
          for (var p3 in obj[p1][p2]) {
            return false;
          }
        }
      }
      return true;
    },

    /**
     * Sets selection start (left boundary of a selection)
     * @param {Number} index Index to set selection start to
     */
    setSelectionStart: function (index) {
      this.selectionStart = index;
      this.hiddenTextarea && (this.hiddenTextarea.selectionStart = index);
    },

    /**
     * Sets selection end (right boundary of a selection)
     * @param {Number} index Index to set selection end to
     */
    setSelectionEnd: function (index) {
      this.selectionEnd = index;
      this.hiddenTextarea && (this.hiddenTextarea.selectionEnd = index);
    },

    /**
     * Gets style of a current selection/cursor (at the start position)
     * @param {Number} [startIndex] Start index to get styles at
     * @param {Number} [endIndex] End index to get styles at
     * @return {Object} styles Style object at a specified (or current) index
     */
    getSelectionStyles: function (startIndex, endIndex) {

      if (arguments.length === 2) {
        var styles = [];
        for (var i = startIndex; i < endIndex; i++) {
          styles.push(this.getSelectionStyles(i));
        }
        return styles;
      }

      var loc = this.get2DCursorLocation(startIndex);
      if (this.styles[loc.lineIndex]) {
        return this.styles[loc.lineIndex][loc.charIndex] || {};
      }

      return {};
    },

    /**
     * Sets style of a current selection
     * @param {Object} [styles] Styles object
     * @return {fabric.IText} thisArg
     * @chainable
     */
    setSelectionStyles: function (styles) {
      if (this.selectionStart === this.selectionEnd) {
        this._extendStyles(this.selectionStart, styles);
      } else {
        for (var i = this.selectionStart; i < this.selectionEnd; i++) {
          this._extendStyles(i, styles);
        }
      }
      return this;
    },

    /**
     * @private
     */
    _extendStyles: function (index, styles) {
      var loc = this.get2DCursorLocation(index);

      if (!this.styles[loc.lineIndex]) {
        this.styles[loc.lineIndex] = {};
      }
      if (!this.styles[loc.lineIndex][loc.charIndex]) {
        this.styles[loc.lineIndex][loc.charIndex] = {};
      }

      fabric.util.object.extend(this.styles[loc.lineIndex][loc.charIndex], styles);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function (ctx) {
      this.callSuper('_render', ctx);
      this.ctx = ctx;
      this.isEditing && this.renderCursorOrSelection();
    },

    /**
     * Renders cursor or selection (depending on what exists)
     */
    renderCursorOrSelection: function () {
      if (!this.active) return;

      var chars = this.text.split(''),
        boundaries;

      if (this.selectionStart === this.selectionEnd) {
        boundaries = this._getCursorBoundaries(chars, 'cursor');
        this.renderCursor(boundaries);
      } else {
        boundaries = this._getCursorBoundaries(chars, 'selection');
        this.renderSelection(chars, boundaries);
      }
    },

    /**
     * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
     * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
     */
    get2DCursorLocation: function (selectionStart) {
      if (typeof selectionStart === 'undefined') {
        selectionStart = this.selectionStart;
      }
      var textBeforeCursor = this.text.slice(0, selectionStart);
      var linesBeforeCursor = textBeforeCursor.split(this._reNewline);

      return {
        lineIndex: linesBeforeCursor.length - 1,
        charIndex: linesBeforeCursor[linesBeforeCursor.length - 1].length
      };
    },

    /**
     * Returns fontSize of char at the current cursor
     * @param {Number} lineIndex Line index
     * @param {Number} charIndex Char index
     * @return {Number} Character font size
     */
    getCurrentCharFontSize: function (lineIndex, charIndex) {
      return (
        this.styles[lineIndex] &&
        this.styles[lineIndex][charIndex === 0 ? 0 : (charIndex - 1)] &&
        this.styles[lineIndex][charIndex === 0 ? 0 : (charIndex - 1)].fontSize) || this.fontSize;
    },

    /**
     * Returns color (fill) of char at the current cursor
     * @param {Number} lineIndex Line index
     * @param {Number} charIndex Char index
     * @return {String} Character color (fill)
     */
    getCurrentCharColor: function (lineIndex, charIndex) {
      return (
        this.styles[lineIndex] &&
        this.styles[lineIndex][charIndex === 0 ? 0 : (charIndex - 1)] &&
        this.styles[lineIndex][charIndex === 0 ? 0 : (charIndex - 1)].fill) || this.cursorColor;
    },

    /**
     * Returns cursor boundaries (left, top, leftOffset, topOffset)
     * @private
     * @param {Array} chars Array of characters
     * @param {String} typeOfBoundaries
     */
    _getCursorBoundaries: function (chars, typeOfBoundaries) {

      var cursorLocation = this.get2DCursorLocation(),

        textLines = this.text.split(this._reNewline),

        // left/top are left/top of entire text box
        // leftOffset/topOffset are offset from that left/top point of a text box

        left = Math.round(this._getLeftOffset()),
        top = -this.height / 2,

        offsets = this._getCursorBoundariesOffsets(
          chars, typeOfBoundaries, cursorLocation, textLines);

      return {
        left: left,
        top: top,
        leftOffset: offsets.left + offsets.lineLeft,
        topOffset: offsets.top
      };
    },

    /**
     * @private
     */
    _getCursorBoundariesOffsets: function (chars, typeOfBoundaries, cursorLocation, textLines) {

      var lineLeftOffset = 0,

        lineIndex = 0,
        charIndex = 0,

        leftOffset = 0,
        topOffset = typeOfBoundaries === 'cursor'
          // selection starts at the very top of the line,
          // whereas cursor starts at the padding created by line height
          ? (this._getHeightOfLine(this.ctx, 0) -
            this.getCurrentCharFontSize(cursorLocation.lineIndex, cursorLocation.charIndex))
          : 0;

      for (var i = 0; i < this.selectionStart; i++) {
        if (chars[i] === '\n') {
          leftOffset = 0;
          var index = lineIndex + (typeOfBoundaries === 'cursor' ? 1 : 0);
          topOffset += this._getCachedLineHeight(index);

          lineIndex++;
          charIndex = 0;
        } else {
          leftOffset += this._getWidthOfChar(this.ctx, chars[i], lineIndex, charIndex);
          charIndex++;
        }

        lineLeftOffset = this._getCachedLineOffset(lineIndex, textLines);
      }

      this._clearCache();

      return {
        top: topOffset,
        left: leftOffset,
        lineLeft: lineLeftOffset
      };
    },

    /**
     * @private
     */
    _clearCache: function () {
      this.__lineWidths = {};
      this.__lineHeights = {};
      this.__lineOffsets = {};
    },

    /**
     * @private
     */
    _getCachedLineHeight: function (index) {
      return this.__lineHeights[index] ||
        (this.__lineHeights[index] = this._getHeightOfLine(this.ctx, index));
    },

    /**
     * @private
     */
    _getCachedLineWidth: function (lineIndex, textLines) {
      return this.__lineWidths[lineIndex] ||
        (this.__lineWidths[lineIndex] = this._getWidthOfLine(this.ctx, lineIndex, textLines));
    },

    /**
     * @private
     */
    _getCachedLineOffset: function (lineIndex, textLines) {
      var widthOfLine = this._getCachedLineWidth(lineIndex, textLines);

      return this.__lineOffsets[lineIndex] ||
        (this.__lineOffsets[lineIndex] = this._getLineLeftOffset(widthOfLine));
    },

    /**
     * Renders cursor
     * @param {Object} boundaries
     */
    renderCursor: function (boundaries) {
      var ctx = this.ctx;

      ctx.save();

      var cursorLocation = this.get2DCursorLocation(),
        lineIndex = cursorLocation.lineIndex,
        charIndex = cursorLocation.charIndex,
        charHeight = this.getCurrentCharFontSize(lineIndex, charIndex),
        leftOffset = (lineIndex === 0 && charIndex === 0)
          ? this._getCachedLineOffset(lineIndex, this.text.split(this._reNewline))
          : boundaries.leftOffset;

      ctx.fillStyle = this.getCurrentCharColor(lineIndex, charIndex);
      ctx.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity;

      ctx.fillRect(
        boundaries.left + leftOffset,
        boundaries.top + boundaries.topOffset,
        this.cursorWidth / this.scaleX,
        charHeight);

      ctx.restore();
    },

    /**
     * Renders text selection
     * @param {Array} chars Array of characters
     * @param {Object} boundaries Object with left/top/leftOffset/topOffset
     */
    renderSelection: function (chars, boundaries) {
      var ctx = this.ctx;

      ctx.save();

      ctx.fillStyle = this.selectionColor;

      var start = this.get2DCursorLocation(this.selectionStart),
        end = this.get2DCursorLocation(this.selectionEnd),
        startLine = start.lineIndex,
        endLine = end.lineIndex,
        textLines = this.text.split(this._reNewline),
        charIndex = start.charIndex - textLines[0].length;

      for (var i = startLine; i <= endLine; i++) {
        var lineOffset = this._getCachedLineOffset(i, textLines) || 0,
          lineHeight = this._getCachedLineHeight(i),
          boxWidth = 0;

        if (i === startLine) {
          for (var j = 0, len = textLines[i].length; j < len; j++) {
            if (j >= start.charIndex && (i !== endLine || j < end.charIndex)) {
              boxWidth += this._getWidthOfChar(ctx, textLines[i][j], i, charIndex);
            }
            if (j < start.charIndex) {
              lineOffset += this._getWidthOfChar(ctx, textLines[i][j], i, charIndex);
            }
            charIndex++;
          }
        } else if (i > startLine && i < endLine) {
          boxWidth += this._getCachedLineWidth(i, textLines) || 5;
          charIndex += textLines[i].length;
        } else if (i === endLine) {
          for (var j2 = 0, j2len = end.charIndex; j2 < j2len; j2++) {
            boxWidth += this._getWidthOfChar(ctx, textLines[i][j2], i, charIndex);
            charIndex++;
          }
        }

        ctx.fillRect(
          boundaries.left + lineOffset,
          boundaries.top + boundaries.topOffset,
          boxWidth,
          lineHeight);

        boundaries.topOffset += lineHeight;
      }
      ctx.restore();
    },

    /**
     * @private
     * @param {String} method
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderChars: function (method, ctx, line, left, top, lineIndex) {

      if (this.isEmptyStyles()) {
        return this._renderCharsFast(method, ctx, line, left, top);
      }

      this.skipTextAlign = true;

      // set proper box offset
      left -= this.textAlign === 'center'
        ? (this.width / 2)
        : (this.textAlign === 'right')
          ? this.width
          : 0;

      // set proper line offset
      var textLines = this.text.split(this._reNewline),
        lineWidth = this._getWidthOfLine(ctx, lineIndex, textLines),
        lineHeight = this._getHeightOfLine(ctx, lineIndex, textLines),
        lineLeftOffset = this._getLineLeftOffset(lineWidth),
        chars = line.split('');

      left += lineLeftOffset || 0;

      ctx.save();
      for (var i = 0, len = chars.length; i < len; i++) {
        this._renderChar(method, ctx, lineIndex, i, chars[i], left, top, lineHeight);
      }
      ctx.restore();
    },

    /**
     * @private
     * @param {String} method
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line
     */
    _renderCharsFast: function (method, ctx, line, left, top) {
      this.skipTextAlign = false;

      if (method === 'fillText' && this.fill) {
        this.callSuper('_renderChars', method, ctx, line, left, top);
      }
      if (method === 'strokeText' && this.stroke) {
        this.callSuper('_renderChars', method, ctx, line, left, top);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderChar: function (method, ctx, lineIndex, i, _char, left, top, lineHeight) {
      var decl, charWidth, charHeight;

      if (this.styles && this.styles[lineIndex] && (decl = this.styles[lineIndex][i])) {

        var shouldStroke = decl.stroke || this.stroke,
          shouldFill = decl.fill || this.fill;

        ctx.save();
        charWidth = this._applyCharStylesGetWidth(ctx, _char, lineIndex, i, decl);
        charHeight = this._getHeightOfChar(ctx, _char, lineIndex, i);

        if (shouldFill) {
          ctx.fillText(_char, left, top);
        }
        if (shouldStroke) {
          ctx.strokeText(_char, left, top);
        }

        this._renderCharDecoration(ctx, decl, left, top, charWidth, lineHeight, charHeight);
        ctx.restore();

        ctx.translate(charWidth, 0);
      } else {
        if (method === 'strokeText' && this.stroke) {
          ctx[method](_char, left, top);
        }
        if (method === 'fillText' && this.fill) {
          ctx[method](_char, left, top);
        }
        charWidth = this._applyCharStylesGetWidth(ctx, _char, lineIndex, i);
        this._renderCharDecoration(ctx, null, left, top, charWidth, lineHeight);

        ctx.translate(ctx.measureText(_char).width, 0);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderCharDecoration: function (ctx, styleDeclaration, left, top, charWidth, lineHeight, charHeight) {

      var textDecoration = styleDeclaration
        ? (styleDeclaration.textDecoration || this.textDecoration)
        : this.textDecoration;

      var fontSize = (styleDeclaration ? styleDeclaration.fontSize : null) || this.fontSize;

      if (!textDecoration) return;

      if (textDecoration.indexOf('underline') > -1) {
        this._renderCharDecorationAtOffset(
          ctx,
          left,
          top + (this.fontSize / this._fontSizeFraction),
          charWidth,
          0,
          this.fontSize / 20
        );
      }
      if (textDecoration.indexOf('line-through') > -1) {
        this._renderCharDecorationAtOffset(
          ctx,
          left,
          top + (this.fontSize / this._fontSizeFraction),
          charWidth,
          charHeight / 2,
          fontSize / 20
        );
      }
      if (textDecoration.indexOf('overline') > -1) {
        this._renderCharDecorationAtOffset(
          ctx,
          left,
          top,
          charWidth,
          lineHeight - (this.fontSize / this._fontSizeFraction),
          this.fontSize / 20
        );
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderCharDecorationAtOffset: function (ctx, left, top, charWidth, offset, thickness) {
      ctx.fillRect(left, top - offset, charWidth, thickness);
    },

    /**
     * @private
     * @param {String} method
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line
     */
    _renderTextLine: function (method, ctx, line, left, top, lineIndex) {
      // to "cancel" this.fontSize subtraction in fabric.Text#_renderTextLine
      top += this.fontSize / 4;
      this.callSuper('_renderTextLine', method, ctx, line, left, top, lineIndex);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines
     */
    _renderTextDecoration: function (ctx, textLines) {
      if (this.isEmptyStyles()) {
        return this.callSuper('_renderTextDecoration', ctx, textLines);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextLinesBackground: function (ctx, textLines) {
      if (!this.textBackgroundColor && !this.styles) return;

      ctx.save();

      if (this.textBackgroundColor) {
        ctx.fillStyle = this.textBackgroundColor;
      }

      var lineHeights = 0,
        fractionOfFontSize = this.fontSize / this._fontSizeFraction;

      for (var i = 0, len = textLines.length; i < len; i++) {

        var heightOfLine = this._getHeightOfLine(ctx, i, textLines);
        if (textLines[i] === '') {
          lineHeights += heightOfLine;
          continue;
        }

        var lineWidth = this._getWidthOfLine(ctx, i, textLines),
          lineLeftOffset = this._getLineLeftOffset(lineWidth);

        if (this.textBackgroundColor) {
          ctx.fillStyle = this.textBackgroundColor;

          ctx.fillRect(
            this._getLeftOffset() + lineLeftOffset,
            this._getTopOffset() + lineHeights + fractionOfFontSize,
            lineWidth,
            heightOfLine
          );
        }
        if (this.styles[i]) {
          for (var j = 0, jlen = textLines[i].length; j < jlen; j++) {
            if (this.styles[i] && this.styles[i][j] && this.styles[i][j].textBackgroundColor) {

              var _char = textLines[i][j];

              ctx.fillStyle = this.styles[i][j].textBackgroundColor;

              ctx.fillRect(
                this._getLeftOffset() + lineLeftOffset + this._getWidthOfCharsAt(ctx, i, j, textLines),
                this._getTopOffset() + lineHeights + fractionOfFontSize,
                this._getWidthOfChar(ctx, _char, i, j, textLines) + 1,
                heightOfLine
              );
            }
          }
        }
        lineHeights += heightOfLine;
      }
      ctx.restore();
    },

    /**
     * @private
     */
    _getCacheProp: function (_char, styleDeclaration) {
      return _char +

        styleDeclaration.fontFamily +
        styleDeclaration.fontSize +
        styleDeclaration.fontWeight +
        styleDeclaration.fontStyle +

        styleDeclaration.shadow;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} _char
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @param {Object} [decl]
     */
    _applyCharStylesGetWidth: function (ctx, _char, lineIndex, charIndex, decl) {
      var styleDeclaration = decl ||
        (this.styles[lineIndex] &&
          this.styles[lineIndex][charIndex]);

      if (styleDeclaration) {
        // cloning so that original style object is not polluted with following font declarations
        styleDeclaration = clone(styleDeclaration);
      } else {
        styleDeclaration = {};
      }

      this._applyFontStyles(styleDeclaration);

      var cacheProp = this._getCacheProp(_char, styleDeclaration);

      // short-circuit if no styles
      if (this.isEmptyStyles() && this._charWidthsCache[cacheProp] && this.caching) {
        return this._charWidthsCache[cacheProp];
      }

      if (typeof styleDeclaration.shadow === 'string') {
        styleDeclaration.shadow = new fabric.Shadow(styleDeclaration.shadow);
      }

      var fill = styleDeclaration.fill || this.fill;
      ctx.fillStyle = fill.toLive
        ? fill.toLive(ctx)
        : fill;

      if (styleDeclaration.stroke) {
        ctx.strokeStyle = (styleDeclaration.stroke && styleDeclaration.stroke.toLive)
          ? styleDeclaration.stroke.toLive(ctx)
          : styleDeclaration.stroke;
      }

      ctx.lineWidth = styleDeclaration.strokeWidth || this.strokeWidth;
      ctx.font = this._getFontDeclaration.call(styleDeclaration);
      this._setShadow.call(styleDeclaration, ctx);

      if (!this.caching) {
        return ctx.measureText(_char).width;
      }

      if (!this._charWidthsCache[cacheProp]) {
        this._charWidthsCache[cacheProp] = ctx.measureText(_char).width;
      }

      return this._charWidthsCache[cacheProp];
    },

    /**
     * @private
     * @param {Object} styleDeclaration
     */
    _applyFontStyles: function (styleDeclaration) {
      if (!styleDeclaration.fontFamily) {
        styleDeclaration.fontFamily = this.fontFamily;
      }
      if (!styleDeclaration.fontSize) {
        styleDeclaration.fontSize = this.fontSize;
      }
      if (!styleDeclaration.fontWeight) {
        styleDeclaration.fontWeight = this.fontWeight;
      }
      if (!styleDeclaration.fontStyle) {
        styleDeclaration.fontStyle = this.fontStyle;
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getWidthOfChar: function (ctx, _char, lineIndex, charIndex) {
      ctx.save();
      var width = this._applyCharStylesGetWidth(ctx, _char, lineIndex, charIndex);
      ctx.restore();
      return width;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getHeightOfChar: function (ctx, _char, lineIndex, charIndex) {
      if (this.styles[lineIndex] && this.styles[lineIndex][charIndex]) {
        return this.styles[lineIndex][charIndex].fontSize || this.fontSize;
      }
      return this.fontSize;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getWidthOfCharAt: function (ctx, lineIndex, charIndex, lines) {
      lines = lines || this.text.split(this._reNewline);
      var _char = lines[lineIndex].split('')[charIndex];
      return this._getWidthOfChar(ctx, _char, lineIndex, charIndex);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getHeightOfCharAt: function (ctx, lineIndex, charIndex, lines) {
      lines = lines || this.text.split(this._reNewline);
      var _char = lines[lineIndex].split('')[charIndex];
      return this._getHeightOfChar(ctx, _char, lineIndex, charIndex);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getWidthOfCharsAt: function (ctx, lineIndex, charIndex, lines) {
      var width = 0;
      for (var i = 0; i < charIndex; i++) {
        width += this._getWidthOfCharAt(ctx, lineIndex, i, lines);
      }
      return width;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getWidthOfLine: function (ctx, lineIndex, textLines) {
      // if (!this.styles[lineIndex]) {
      //   return this.callSuper('_getLineWidth', ctx, textLines[lineIndex]);
      // }
      return this._getWidthOfCharsAt(ctx, lineIndex, textLines[lineIndex].length, textLines);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getTextWidth: function (ctx, textLines) {

      if (this.isEmptyStyles()) {
        return this.callSuper('_getTextWidth', ctx, textLines);
      }

      var maxWidth = this._getWidthOfLine(ctx, 0, textLines);

      for (var i = 1, len = textLines.length; i < len; i++) {
        var currentLineWidth = this._getWidthOfLine(ctx, i, textLines);
        if (currentLineWidth > maxWidth) {
          maxWidth = currentLineWidth;
        }
      }
      return maxWidth;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getHeightOfLine: function (ctx, lineIndex, textLines) {

      textLines = textLines || this.text.split(this._reNewline);

      var maxHeight = this._getHeightOfChar(ctx, textLines[lineIndex][0], lineIndex, 0),
        line = textLines[lineIndex],
        chars = line.split('');

      for (var i = 1, len = chars.length; i < len; i++) {
        var currentCharHeight = this._getHeightOfChar(ctx, chars[i], lineIndex, i);
        if (currentCharHeight > maxHeight) {
          maxHeight = currentCharHeight;
        }
      }

      return maxHeight * this.lineHeight;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getTextHeight: function (ctx, textLines) {
      var height = 0;
      for (var i = 0, len = textLines.length; i < len; i++) {
        height += this._getHeightOfLine(ctx, i, textLines);
      }
      return height;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getTopOffset: function () {
      var topOffset = fabric.Text.prototype._getTopOffset.call(this);
      return topOffset - (this.fontSize / this._fontSizeFraction);
    },

    /**
     * @private
     * This method is overwritten to account for different top offset
     */
    _renderTextBoxBackground: function (ctx) {
      if (!this.backgroundColor) return;

      ctx.save();
      ctx.fillStyle = this.backgroundColor;

      ctx.fillRect(
        this._getLeftOffset(),
        this._getTopOffset() + (this.fontSize / this._fontSizeFraction),
        this.width,
        this.height
      );

      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @methd toObject
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return fabric.util.object.extend(this.callSuper('toObject', propertiesToInclude), {
        styles: clone(this.styles)
      });
    }
  });

  /**
   * Returns fabric.IText instance from an object representation
   * @static
   * @memberOf fabric.IText
   * @param {Object} object Object to create an instance from
   * @return {fabric.IText} instance of fabric.IText
   */
  fabric.IText.fromObject = function (object) {
    return new fabric.IText(object.text, clone(object));
  };

  /**
   * Contains all fabric.IText objects that have been created
   * @static
   * @memberof fabric.IText
   * @type Array
   */
  fabric.IText.instances = [];

})();

(function () {

  var clone = fabric.util.object.clone;

  fabric.util.object.extend(fabric.IText.prototype, /** @lends fabric.IText.prototype */ {

    /**
     * Initializes all the interactive behavior of IText
     */
    initBehavior: function () {
      this.initKeyHandlers();
      this.initCursorSelectionHandlers();
      this.initDoubleClickSimulation();
      this.initHiddenTextarea();
    },

    /**
     * Initializes "selected" event handler
     */
    initSelectedHandler: function () {
      this.on('selected', function () {

        var _this = this;
        setTimeout(function () {
          _this.selected = true;
        }, 100);

        if (this.canvas && !fabric.Canvas._hasITextHandlers) {
          this._initCanvasHandlers();
          fabric.Canvas._hasITextHandlers = true;
        }
      });
    },

    /**
     * @private
     */
    _initCanvasHandlers: function () {
      this.canvas.on('selection:cleared', function () {
        fabric.IText.prototype.exitEditingOnOthers.call();
      });

      this.canvas.on('mouse:up', function () {
        fabric.IText.instances.forEach(function (obj) {
          obj.__isMousedown = false;
        });
      });

      this.canvas.on('object:selected', function (options) {
        fabric.IText.prototype.exitEditingOnOthers.call(options.target);
      });
    },

    /**
     * @private
     */
    _tick: function () {

      var _this = this;

      if (this._abortCursorAnimation) return;

      this.animate('_currentCursorOpacity', 1, {

        duration: this.cursorDuration,

        onComplete: function () {
          _this._onTickComplete();
        },

        onChange: function () {
          _this.canvas && _this.canvas.renderAll();
        },

        abort: function () {
          return _this._abortCursorAnimation;
        }
      });
    },

    /**
     * @private
     */
    _onTickComplete: function () {
      if (this._abortCursorAnimation) return;

      var _this = this;
      if (this._cursorTimeout1) {
        clearTimeout(this._cursorTimeout1);
      }
      this._cursorTimeout1 = setTimeout(function () {
        _this.animate('_currentCursorOpacity', 0, {
          duration: this.cursorDuration / 2,
          onComplete: function () {
            _this._tick();
          },
          onChange: function () {
            _this.canvas && _this.canvas.renderAll();
          },
          abort: function () {
            return _this._abortCursorAnimation;
          }
        });
      }, 100);
    },

    /**
     * Initializes delayed cursor
     */
    initDelayedCursor: function (restart) {
      var _this = this;
      var delay = restart ? 0 : this.cursorDelay;

      if (restart) {
        this._abortCursorAnimation = true;
        clearTimeout(this._cursorTimeout1);
        this._currentCursorOpacity = 1;
        this.canvas && this.canvas.renderAll();
      }
      if (this._cursorTimeout2) {
        clearTimeout(this._cursorTimeout2);
      }
      this._cursorTimeout2 = setTimeout(function () {
        _this._abortCursorAnimation = false;
        _this._tick();
      }, delay);
    },

    /**
     * Aborts cursor animation and clears all timeouts
     */
    abortCursorAnimation: function () {
      this._abortCursorAnimation = true;

      clearTimeout(this._cursorTimeout1);
      clearTimeout(this._cursorTimeout2);

      this._currentCursorOpacity = 0;
      this.canvas && this.canvas.renderAll();

      var _this = this;
      setTimeout(function () {
        _this._abortCursorAnimation = false;
      }, 10);
    },

    /**
     * Selects entire text
     */
    selectAll: function () {
      this.selectionStart = 0;
      this.selectionEnd = this.text.length;
    },

    /**
     * Returns selected text
     * @return {String}
     */
    getSelectedText: function () {
      return this.text.slice(this.selectionStart, this.selectionEnd);
    },

    /**
     * Find new selection index representing start of current word according to current selection index
     * @param {Number} startFrom Surrent selection index
     * @return {Number} New selection index
     */
    findWordBoundaryLeft: function (startFrom) {
      var offset = 0, index = startFrom - 1;

      // remove space before cursor first
      if (this._reSpace.test(this.text.charAt(index))) {
        while (this._reSpace.test(this.text.charAt(index))) {
          offset++;
          index--;
        }
      }
      while (/\S/.test(this.text.charAt(index)) && index > -1) {
        offset++;
        index--;
      }

      return startFrom - offset;
    },

    /**
     * Find new selection index representing end of current word according to current selection index
     * @param {Number} startFrom Current selection index
     * @return {Number} New selection index
     */
    findWordBoundaryRight: function (startFrom) {
      var offset = 0, index = startFrom;

      // remove space after cursor first
      if (this._reSpace.test(this.text.charAt(index))) {
        while (this._reSpace.test(this.text.charAt(index))) {
          offset++;
          index++;
        }
      }
      while (/\S/.test(this.text.charAt(index)) && index < this.text.length) {
        offset++;
        index++;
      }

      return startFrom + offset;
    },

    /**
     * Find new selection index representing start of current line according to current selection index
     * @param {Number} current selection index
     */
    findLineBoundaryLeft: function (startFrom) {
      var offset = 0, index = startFrom - 1;

      while (!/\n/.test(this.text.charAt(index)) && index > -1) {
        offset++;
        index--;
      }

      return startFrom - offset;
    },

    /**
     * Find new selection index representing end of current line according to current selection index
     * @param {Number} current selection index
     */
    findLineBoundaryRight: function (startFrom) {
      var offset = 0, index = startFrom;

      while (!/\n/.test(this.text.charAt(index)) && index < this.text.length) {
        offset++;
        index++;
      }

      return startFrom + offset;
    },

    /**
     * Returns number of newlines in selected text
     * @return {Number} Number of newlines in selected text
     */
    getNumNewLinesInSelectedText: function () {
      var selectedText = this.getSelectedText();
      var numNewLines = 0;
      for (var i = 0, chars = selectedText.split(''), len = chars.length; i < len; i++) {
        if (chars[i] === '\n') {
          numNewLines++;
        }
      }
      return numNewLines;
    },

    /**
     * Finds index corresponding to beginning or end of a word
     * @param {Number} selectionStart Index of a character
     * @param {Number} direction: 1 or -1
     */
    searchWordBoundary: function (selectionStart, direction) {
      var index = this._reSpace.test(this.text.charAt(selectionStart)) ? selectionStart - 1 : selectionStart;
      var _char = this.text.charAt(index);
      var reNonWord = /[ \n\.,;!\?\-]/;

      while (!reNonWord.test(_char) && index > 0 && index < this.text.length) {
        index += direction;
        _char = this.text.charAt(index);
      }
      if (reNonWord.test(_char) && _char !== '\n') {
        index += direction === 1 ? 0 : 1;
      }
      return index;
    },

    /**
     * Selects a word based on the index
     * @param {Number} selectionStart Index of a character
     */
    selectWord: function (selectionStart) {
      var newSelectionStart = this.searchWordBoundary(selectionStart, -1);
      /* search backwards */
      var newSelectionEnd = this.searchWordBoundary(selectionStart, 1);
      /* search forward */

      this.setSelectionStart(newSelectionStart);
      this.setSelectionEnd(newSelectionEnd);
      this.initDelayedCursor(true);
    },

    /**
     * Selects a line based on the index
     * @param {Number} selectionStart Index of a character
     */
    selectLine: function (selectionStart) {
      var newSelectionStart = this.findLineBoundaryLeft(selectionStart);
      var newSelectionEnd = this.findLineBoundaryRight(selectionStart);

      this.setSelectionStart(newSelectionStart);
      this.setSelectionEnd(newSelectionEnd);
      this.initDelayedCursor(true);
    },

    /**
     * Enters editing state
     * @return {fabric.IText} thisArg
     * @chainable
     */
    enterEditing: function () {
      if (this.isEditing || !this.editable) return;

      this.exitEditingOnOthers();

      this.isEditing = true;

      this._updateTextarea();
      this._saveEditingProps();
      this._setEditingProps();

      this._tick();
      this.canvas && this.canvas.renderAll();

      this.fire('editing:entered');
      this.canvas && this.canvas.fire('text:editing:entered', {target: this});

      return this;
    },

    exitEditingOnOthers: function () {
      fabric.IText.instances.forEach(function (obj) {
        if (obj === this) return;
        obj.exitEditing();
      }, this);
    },

    /**
     * @private
     */
    _setEditingProps: function () {
      this.hoverCursor = 'text';

      if (this.canvas) {
        this.canvas.defaultCursor = this.canvas.moveCursor = 'text';
      }

      this.borderColor = this.editingBorderColor;

      this.hasControls = this.selectable = false;
      this.lockMovementX = this.lockMovementY = true;
    },

    /**
     * @private
     */
    _updateTextarea: function () {
      if (!this.hiddenTextarea) return;

      this.hiddenTextarea.value = this.text;
      this.hiddenTextarea.selectionStart = this.selectionStart;
      this.hiddenTextarea.focus();
    },

    /**
     * @private
     */
    _saveEditingProps: function () {
      this._savedProps = {
        hasControls: this.hasControls,
        borderColor: this.borderColor,
        lockMovementX: this.lockMovementX,
        lockMovementY: this.lockMovementY,
        hoverCursor: this.hoverCursor,
        defaultCursor: this.canvas && this.canvas.defaultCursor,
        moveCursor: this.canvas && this.canvas.moveCursor
      };
    },

    /**
     * @private
     */
    _restoreEditingProps: function () {
      if (!this._savedProps) return;

      this.hoverCursor = this._savedProps.overCursor;
      this.hasControls = this._savedProps.hasControls;
      this.borderColor = this._savedProps.borderColor;
      this.lockMovementX = this._savedProps.lockMovementX;
      this.lockMovementY = this._savedProps.lockMovementY;

      if (this.canvas) {
        this.canvas.defaultCursor = this._savedProps.defaultCursor;
        this.canvas.moveCursor = this._savedProps.moveCursor;
      }
    },

    /**
     * Exits from editing state
     * @return {fabric.IText} thisArg
     * @chainable
     */
    exitEditing: function () {

      this.selected = false;
      this.isEditing = false;
      this.selectable = true;

      this.selectionEnd = this.selectionStart;
      this.hiddenTextarea && this.hiddenTextarea.blur();

      this.abortCursorAnimation();
      this._restoreEditingProps();
      this._currentCursorOpacity = 0;

      this.fire('editing:exited');
      this.canvas && this.canvas.fire('text:editing:exited', {target: this});

      return this;
    },

    /**
     * @private
     */
    _removeExtraneousStyles: function () {
      var textLines = this.text.split(this._reNewline);
      for (var prop in this.styles) {
        if (!textLines[prop]) {
          delete this.styles[prop];
        }
      }
    },

    /**
     * @private
     */
    _removeCharsFromTo: function (start, end) {

      var i = end;
      while (i !== start) {

        var prevIndex = this.get2DCursorLocation(i).charIndex;
        i--;
        var index = this.get2DCursorLocation(i).charIndex;
        var isNewline = index > prevIndex;

        if (isNewline) {
          this.removeStyleObject(isNewline, i + 1);
        } else {
          this.removeStyleObject(this.get2DCursorLocation(i).charIndex === 0, i);
        }

      }

      this.text = this.text.slice(0, start) +
        this.text.slice(end);
    },

    /**
     * Inserts a character where cursor is (replacing selection if one exists)
     * @param {String} _chars Characters to insert
     */
    insertChars: function (_chars) {
      var isEndOfLine = this.text.slice(this.selectionStart, this.selectionStart + 1) === '\n';

      this.text = this.text.slice(0, this.selectionStart) +
        _chars +
        this.text.slice(this.selectionEnd);

      if (this.selectionStart === this.selectionEnd) {
        this.insertStyleObjects(_chars, isEndOfLine, this.copiedStyles);
      } else if (this.selectionEnd - this.selectionStart > 1) {
        // TODO: replace styles properly
        // console.log('replacing MORE than 1 char');
      }

      this.selectionStart += _chars.length;
      this.selectionEnd = this.selectionStart;

      if (this.canvas) {
        // TODO: double renderAll gets rid of text box shift happenning sometimes
        // need to find out what exactly causes it and fix it
        this.canvas.renderAll().renderAll();
      }

      this.setCoords();
      this.fire('changed');
      this.canvas && this.canvas.fire('text:changed', {target: this});
    },

    /**
     * Inserts new style object
     * @param {Number} lineIndex Index of a line
     * @param {Number} charIndex Index of a char
     * @param {Boolean} isEndOfLine True if it's end of line
     */
    insertNewlineStyleObject: function (lineIndex, charIndex, isEndOfLine) {

      this.shiftLineStyles(lineIndex, +1);

      if (!this.styles[lineIndex + 1]) {
        this.styles[lineIndex + 1] = {};
      }

      var currentCharStyle = this.styles[lineIndex][charIndex - 1],
        newLineStyles = {};

      // if there's nothing after cursor,
      // we clone current char style onto the next (otherwise empty) line
      if (isEndOfLine) {
        newLineStyles[0] = clone(currentCharStyle);
        this.styles[lineIndex + 1] = newLineStyles;
      }
        // otherwise we clone styles of all chars
      // after cursor onto the next line, from the beginning
      else {
        for (var index in this.styles[lineIndex]) {
          if (parseInt(index, 10) >= charIndex) {
            newLineStyles[parseInt(index, 10) - charIndex] = this.styles[lineIndex][index];
            // remove lines from the previous line since they're on a new line now
            delete this.styles[lineIndex][index];
          }
        }
        this.styles[lineIndex + 1] = newLineStyles;
      }
    },

    /**
     * Inserts style object for a given line/char index
     * @param {Number} lineIndex Index of a line
     * @param {Number} charIndex Index of a char
     * @param {Object} [style] Style object to insert, if given
     */
    insertCharStyleObject: function (lineIndex, charIndex, style) {

      var currentLineStyles = this.styles[lineIndex],
        currentLineStylesCloned = clone(currentLineStyles);

      if (charIndex === 0 && !style) {
        charIndex = 1;
      }

      // shift all char styles by 1 forward
      // 0,1,2,3 -> (charIndex=2) -> 0,1,3,4 -> (insert 2) -> 0,1,2,3,4
      for (var index in currentLineStylesCloned) {
        var numericIndex = parseInt(index, 10);
        if (numericIndex >= charIndex) {
          currentLineStyles[numericIndex + 1] = currentLineStylesCloned[numericIndex];
          //delete currentLineStyles[index];
        }
      }

      this.styles[lineIndex][charIndex] =
        style || clone(currentLineStyles[charIndex - 1]);
    },

    /**
     * Inserts style object(s)
     * @param {String} _chars Characters at the location where style is inserted
     * @param {Boolean} isEndOfLine True if it's end of line
     * @param {Array} [styles] Styles to insert
     */
    insertStyleObjects: function (_chars, isEndOfLine, styles) {

      // short-circuit
      if (this.isEmptyStyles()) return;

      var cursorLocation = this.get2DCursorLocation(),
        lineIndex = cursorLocation.lineIndex,
        charIndex = cursorLocation.charIndex;

      if (!this.styles[lineIndex]) {
        this.styles[lineIndex] = {};
      }

      if (_chars === '\n') {
        this.insertNewlineStyleObject(lineIndex, charIndex, isEndOfLine);
      } else {
        if (styles) {
          this._insertStyles(styles);
        } else {
          // TODO: support multiple style insertion if _chars.length > 1
          this.insertCharStyleObject(lineIndex, charIndex);
        }
      }
    },

    /**
     * @private
     */
    _insertStyles: function (styles) {
      for (var i = 0, len = styles.length; i < len; i++) {

        var cursorLocation = this.get2DCursorLocation(this.selectionStart + i),
          lineIndex = cursorLocation.lineIndex,
          charIndex = cursorLocation.charIndex;

        this.insertCharStyleObject(lineIndex, charIndex, styles[i]);
      }
    },

    /**
     * Shifts line styles up or down
     * @param {Number} lineIndex Index of a line
     * @param {Number} offset Can be -1 or +1
     */
    shiftLineStyles: function (lineIndex, offset) {
      // shift all line styles by 1 upward
      var clonedStyles = clone(this.styles);
      for (var line in this.styles) {
        var numericLine = parseInt(line, 10);
        if (numericLine > lineIndex) {
          this.styles[numericLine + offset] = clonedStyles[numericLine];
        }
      }
    },

    /**
     * Removes style object
     * @param {Boolean} isBeginningOfLine True if cursor is at the beginning of line
     * @param {Number} [index] Optional index. When not given, current selectionStart is used.
     */
    removeStyleObject: function (isBeginningOfLine, index) {

      var cursorLocation = this.get2DCursorLocation(index),
        lineIndex = cursorLocation.lineIndex,
        charIndex = cursorLocation.charIndex;

      if (isBeginningOfLine) {

        var textLines = this.text.split(this._reNewline),
          textOnPreviousLine = textLines[lineIndex - 1],
          newCharIndexOnPrevLine = textOnPreviousLine
            ? textOnPreviousLine.length
            : 0;

        if (!this.styles[lineIndex - 1]) {
          this.styles[lineIndex - 1] = {};
        }

        for (charIndex in this.styles[lineIndex]) {
          this.styles[lineIndex - 1][parseInt(charIndex, 10) + newCharIndexOnPrevLine]
            = this.styles[lineIndex][charIndex];
        }

        this.shiftLineStyles(lineIndex, -1);
      } else {
        var currentLineStyles = this.styles[lineIndex];

        if (currentLineStyles) {
          var offset = this.selectionStart === this.selectionEnd ? -1 : 0;
          delete currentLineStyles[charIndex + offset];
          // console.log('deleting', lineIndex, charIndex + offset);
        }

        var currentLineStylesCloned = clone(currentLineStyles);

        // shift all styles by 1 backwards
        for (var i in currentLineStylesCloned) {
          var numericIndex = parseInt(i, 10);
          if (numericIndex >= charIndex && numericIndex !== 0) {
            currentLineStyles[numericIndex - 1] = currentLineStylesCloned[numericIndex];
            delete currentLineStyles[numericIndex];
          }
        }
      }
    },

    /**
     * Inserts new line
     */
    insertNewline: function () {
      this.insertChars('\n');
    }
  });
})();

fabric.util.object.extend(fabric.IText.prototype, /** @lends fabric.IText.prototype */ {
  /**
   * Initializes "dbclick" event handler
   */
  initDoubleClickSimulation: function () {

    // for double click
    this.__lastClickTime = +new Date();

    // for triple click
    this.__lastLastClickTime = +new Date();

    this.lastPointer = {};

    this.on('mousedown', this.onMouseDown.bind(this));
  },

  onMouseDown: function (options) {

    this.__newClickTime = +new Date();
    var newPointer = this.canvas.getPointer(options.e);

    /*if (this.isTripleClick(newPointer)) {
      this.fire('tripleclick', options);
      this._stopEvent(options.e);
    }
    elseif (this.isDoubleClick(newPointer)) {
      this.fire('dblclick', options);
      this._stopEvent(options.e);
    }
*/
    this.__lastLastClickTime = this.__lastClickTime;
    this.__lastClickTime = this.__newClickTime;
    this.__lastPointer = newPointer;
    this.__lastIsEditing = this.isEditing;
  },

  isDoubleClick: function (newPointer) {
    return this.__newClickTime - this.__lastClickTime < 500 &&
      this.__lastPointer.x === newPointer.x &&
      this.__lastPointer.y === newPointer.y && this.__lastIsEditing;
  },

  isTripleClick: function (newPointer) {
    return this.__newClickTime - this.__lastClickTime < 500 &&
      this.__lastClickTime - this.__lastLastClickTime < 500 &&
      this.__lastPointer.x === newPointer.x &&
      this.__lastPointer.y === newPointer.y;
  },

  /**
   * @private
   */
  _stopEvent: function (e) {
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  },

  /**
   * Initializes event handlers related to cursor or selection
   */
  initCursorSelectionHandlers: function () {
    this.initSelectedHandler();
    this.initMousedownHandler();
    this.initMousemoveHandler();
    this.initMouseupHandler();
    this.initClicks();
  },

  /**
   * Initializes double and triple click event handlers
   */
  initClicks: function () {
    this.on('dblclick', function (options) {
      this.selectWord(this.getSelectionStartFromPointer(options.e));
    });
    this.on('tripleclick', function (options) {
      this.selectLine(this.getSelectionStartFromPointer(options.e));
    });
  },

  /**
   * Initializes "mousedown" event handler
   */
  initMousedownHandler: function () {
    this.on('mousedown', function (options) {

      var pointer = this.canvas.getPointer(options.e);

      this.__mousedownX = pointer.x;
      this.__mousedownY = pointer.y;
      this.__isMousedown = true;

      if (this.hiddenTextarea && this.canvas) {
        this.canvas.wrapperEl.appendChild(this.hiddenTextarea);
      }

      if (this.selected) {
        this.setCursorByClick(options.e);
      }

      if (this.isEditing) {
        this.__selectionStartOnMouseDown = this.selectionStart;
        this.initDelayedCursor(true);
      }
    });
  },

  /**
   * Initializes "mousemove" event handler
   */
  initMousemoveHandler: function () {
    this.on('mousemove', function (options) {
      if (!this.__isMousedown || !this.isEditing) return;

      var newSelectionStart = this.getSelectionStartFromPointer(options.e);

      if (newSelectionStart >= this.__selectionStartOnMouseDown) {
        this.setSelectionStart(this.__selectionStartOnMouseDown);
        this.setSelectionEnd(newSelectionStart);
      } else {
        this.setSelectionStart(newSelectionStart);
        this.setSelectionEnd(this.__selectionStartOnMouseDown);
      }
    });
  },

  /**
   * @private
   */
  _isObjectMoved: function (e) {
    var pointer = this.canvas.getPointer(e);

    return this.__mousedownX !== pointer.x ||
      this.__mousedownY !== pointer.y;
  },

  /**
   * Initializes "mouseup" event handler
   */
  initMouseupHandler: function () {
    this.on('mouseup', function (options) {
      this.__isMousedown = false;
      if (this._isObjectMoved(options.e)) return;

      if (this.selected) {
        this.enterEditing();
        this.initDelayedCursor(true);
      }
    });
  },

  /**
   * Changes cursor location in a text depending on passed pointer (x/y) object
   * @param {Object} pointer Pointer object with x and y numeric properties
   */
  setCursorByClick: function (e) {
    var newSelectionStart = this.getSelectionStartFromPointer(e);

    if (e.shiftKey) {
      if (newSelectionStart < this.selectionStart) {
        this.setSelectionEnd(this.selectionStart);
        this.setSelectionStart(newSelectionStart);
      } else {
        this.setSelectionEnd(newSelectionStart);
      }
    } else {
      this.setSelectionStart(newSelectionStart);
      this.setSelectionEnd(newSelectionStart);
    }
  },

  /**
   * @private
   * @param {Event} e Event object
   * @param {Object} Object with x/y corresponding to local offset (according to object rotation)
   */
  _getLocalRotatedPointer: function (e) {
    var pointer = this.canvas.getPointer(e),

      pClicked = new fabric.Point(pointer.x, pointer.y),
      pLeftTop = new fabric.Point(this.left, this.top),

      rotated = fabric.util.rotatePoint(
        pClicked, pLeftTop, fabric.util.degreesToRadians(-this.angle));

    return this.getLocalPointer(e, rotated);
  },

  /**
   * Returns index of a character corresponding to where an object was clicked
   * @param {Event} e Event object
   * @return {Number} Index of a character
   */
  getSelectionStartFromPointer: function (e) {

    var mouseOffset = this._getLocalRotatedPointer(e),
      textLines = this.text.split(this._reNewline),
      prevWidth = 0,
      width = 0,
      height = 0,
      charIndex = 0,
      newSelectionStart;

    for (var i = 0, len = textLines.length; i < len; i++) {

      height += this._getHeightOfLine(this.ctx, i) * this.scaleY;

      var widthOfLine = this._getWidthOfLine(this.ctx, i, textLines);
      var lineLeftOffset = this._getLineLeftOffset(widthOfLine);

      width = lineLeftOffset * this.scaleX;

      if (this.flipX) {
        // when oject is horizontally flipped we reverse chars
        textLines[i] = textLines[i].split('').reverse().join('');
      }

      for (var j = 0, jlen = textLines[i].length; j < jlen; j++) {

        var _char = textLines[i][j];
        prevWidth = width;

        width += this._getWidthOfChar(this.ctx, _char, i, this.flipX ? jlen - j : j) *
          this.scaleX;

        if (height <= mouseOffset.y || width <= mouseOffset.x) {
          charIndex++;
          continue;
        }

        return this._getNewSelectionStartFromOffset(
          mouseOffset, prevWidth, width, charIndex + i, jlen);
      }

      if (mouseOffset.y < height) {
        return this._getNewSelectionStartFromOffset(
          mouseOffset, prevWidth, width, charIndex + i, jlen, j);
      }
    }

    // clicked somewhere after all chars, so set at the end
    if (typeof newSelectionStart === 'undefined') {
      return this.text.length;
    }
  },

  /**
   * @private
   */
  _getNewSelectionStartFromOffset: function (mouseOffset, prevWidth, width, index, jlen, j) {

    var distanceBtwLastCharAndCursor = mouseOffset.x - prevWidth,
      distanceBtwNextCharAndCursor = width - mouseOffset.x,
      offset = distanceBtwNextCharAndCursor > distanceBtwLastCharAndCursor ? 0 : 1,
      newSelectionStart = index + offset;

    // if object is horizontally flipped, mirror cursor location from the end
    if (this.flipX) {
      newSelectionStart = jlen - newSelectionStart;
    }

    if (newSelectionStart > this.text.length) {
      newSelectionStart = this.text.length;
    }

    if (j === jlen) {
      newSelectionStart--;
    }

    return newSelectionStart;
  }
});
var thatText;
fabric.util.object.extend(fabric.IText.prototype, /** @lends fabric.IText.prototype */ {

  /**
   * Initializes key handlers
   */
  initKeyHandlers: function () {
    fabric.util.addListener(fabric.document, 'keydown', this.onKeyDown.bind(this));
    fabric.util.addListener(fabric.document, 'input', this.onInput.bind(this));
    fabric.util.addListener(fabric.document, 'keypress', this.onKeyPress.bind(this));
  },

  /**
   * Initializes hidden textarea (needed to bring up keyboard in iOS)
   */
  initHiddenTextarea: function () {
    this.hiddenTextarea = fabric.document.createElement('textarea');

    this.hiddenTextarea.setAttribute('autocapitalize', 'off');
    this.hiddenTextarea.style.cssText = 'position: absolute; top: 0; left: -9999px';
    this.hiddenTextarea.addEventListener('compositionend', this.compositionEnd.bind(this));
    fabric.document.body.appendChild(this.hiddenTextarea);
  },

  /**
   * @private
   */
  _keysMap: {
    8: 'removeChars',
    13: 'insertNewline',
    37: 'moveCursorLeft',
    38: 'moveCursorUp',
    39: 'moveCursorRight',
    40: 'moveCursorDown',
    46: 'forwardDelete'
  },

  /**
   * @private
   */
  _ctrlKeysMap: {
    65: 'selectAll',
    67: 'copy',
    86: 'paste',
    88: 'cut'
  },

  /**
   * Handles keyup event
   * @param {Event} e Event object
   */
  onKeyDown: function (e) {
    if (!this.isEditing) return;

    if (e.keyCode in this._keysMap) {
      this[this._keysMap[e.keyCode]](e);
    } else if ((e.keyCode in this._ctrlKeysMap) && (e.ctrlKey || e.metaKey)) {
      this[this._ctrlKeysMap[e.keyCode]](e);
    } else {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    this.canvas && this.canvas.renderAll();
  },

  /**
   * Forward delete
   */
  forwardDelete: function (e) {
    if (this.selectionStart === this.selectionEnd) {
      this.moveCursorRight(e);
    }
    this.removeChars(e);
  },

  /**
   * Copies selected text
   */
  copy: function () {
    var selectedText = this.getSelectedText();
    this.copiedText = selectedText;
    this.copiedStyles = this.getSelectionStyles(
      this.selectionStart,
      this.selectionEnd);
  },

  /**
   * Pastes text
   */
  paste: function () {
    if (this.copiedText) {
      this.insertChars(this.copiedText);
    }
  },

  /**
   * Cuts text
   */
  cut: function (e) {
    this.copy();
    this.removeChars(e);
  },

  /**
   * Handles keypress event
   * @param {Event} e Event object
   */
  onKeyPress: function (e) {
    if (!this.isEditing || e.metaKey || e.ctrlKey || e.keyCode === 8 || e.keyCode === 13) {
      return;
    }
    if (e.isComposing === true) {
      return;
    }
    this.insertChars(String.fromCharCode(e.which));

    e.preventDefault();
    e.stopPropagation();
  },

  compositionEnd: function (e) {
    if (e.data) {
      thatText.insertChars(e.data);
    }
  },
  onInput: function (e) {
    thatText = this;
    if (!this.isEditing || e.metaKey || e.ctrlKey || e.keyCode === 8 || e.keyCode === 13) {
      return;
    }
    if (e.isComposing === true) {
      return;
    }
    this.insertChars(e.data);
    this._updateTextarea();
    /*if (e.isComposing === false) {
      if (e.data) {
        this.insertChars(e.data);
        this._updateTextarea();
      }
      return;
    }
    if (e.inputType === 'insertCompositionText') {
      if (e.data) {
        this._updateTextarea();
      }
    } else if (e.inputType === 'insertText') {
      if (e.data) {
        this._updateTextarea();
      }
    }
    return false;*/
  },

  /**
   * Gets start offset of a selection
   * @return {Number}
   */
  getDownCursorOffset: function (e, isRight) {

    var selectionProp = isRight ? this.selectionEnd : this.selectionStart,
      textLines = this.text.split(this._reNewline),
      _char,
      lineLeftOffset,

      textBeforeCursor = this.text.slice(0, selectionProp),
      textAfterCursor = this.text.slice(selectionProp),

      textOnSameLineBeforeCursor = textBeforeCursor.slice(textBeforeCursor.lastIndexOf('\n') + 1),
      textOnSameLineAfterCursor = textAfterCursor.match(/(.*)\n?/)[1],
      textOnNextLine = (textAfterCursor.match(/.*\n(.*)\n?/) || {})[1] || '',

      cursorLocation = this.get2DCursorLocation(selectionProp);

    // if on last line, down cursor goes to end of line
    if (cursorLocation.lineIndex === textLines.length - 1 || e.metaKey) {

      // move to the end of a text
      return this.text.length - selectionProp;
    }

    var widthOfSameLineBeforeCursor = this._getWidthOfLine(this.ctx, cursorLocation.lineIndex, textLines);
    lineLeftOffset = this._getLineLeftOffset(widthOfSameLineBeforeCursor);

    var widthOfCharsOnSameLineBeforeCursor = lineLeftOffset;
    var lineIndex = cursorLocation.lineIndex;

    for (var i = 0, len = textOnSameLineBeforeCursor.length; i < len; i++) {
      _char = textOnSameLineBeforeCursor[i];
      widthOfCharsOnSameLineBeforeCursor += this._getWidthOfChar(this.ctx, _char, lineIndex, i);
    }

    var indexOnNextLine = this._getIndexOnNextLine(
      cursorLocation, textOnNextLine, widthOfCharsOnSameLineBeforeCursor, textLines);

    return textOnSameLineAfterCursor.length + 1 + indexOnNextLine;
  },

  /**
   * @private
   */
  _getIndexOnNextLine: function (cursorLocation, textOnNextLine, widthOfCharsOnSameLineBeforeCursor, textLines) {

    var lineIndex = cursorLocation.lineIndex + 1;
    var widthOfNextLine = this._getWidthOfLine(this.ctx, lineIndex, textLines);
    var lineLeftOffset = this._getLineLeftOffset(widthOfNextLine);
    var widthOfCharsOnNextLine = lineLeftOffset;
    var indexOnNextLine = 0;
    var foundMatch;

    for (var j = 0, jlen = textOnNextLine.length; j < jlen; j++) {

      var _char = textOnNextLine[j];
      var widthOfChar = this._getWidthOfChar(this.ctx, _char, lineIndex, j);

      widthOfCharsOnNextLine += widthOfChar;

      if (widthOfCharsOnNextLine > widthOfCharsOnSameLineBeforeCursor) {

        foundMatch = true;

        var leftEdge = widthOfCharsOnNextLine - widthOfChar;
        var rightEdge = widthOfCharsOnNextLine;
        var offsetFromLeftEdge = Math.abs(leftEdge - widthOfCharsOnSameLineBeforeCursor);
        var offsetFromRightEdge = Math.abs(rightEdge - widthOfCharsOnSameLineBeforeCursor);

        indexOnNextLine = offsetFromRightEdge < offsetFromLeftEdge ? j + 1 : j;

        break;
      }
    }

    // reached end
    if (!foundMatch) {
      indexOnNextLine = textOnNextLine.length;
    }

    return indexOnNextLine;
  },

  /**
   * Moves cursor down
   * @param {Event} e Event object
   */
  moveCursorDown: function (e) {

    this.abortCursorAnimation();
    this._currentCursorOpacity = 1;

    var offset = this.getDownCursorOffset(e, this._selectionDirection === 'right');

    if (e.shiftKey) {
      this.moveCursorDownWithShift(offset);
    } else {
      this.moveCursorDownWithoutShift(offset);
    }

    this.initDelayedCursor();
  },

  /**
   * Moves cursor down without keeping selection
   * @param {Number} offset
   */
  moveCursorDownWithoutShift: function (offset) {

    this._selectionDirection = 'right';
    this.selectionStart += offset;

    if (this.selectionStart > this.text.length) {
      this.selectionStart = this.text.length;
    }
    this.selectionEnd = this.selectionStart;
  },

  /**
   * Moves cursor down while keeping selection
   * @param {Number} offset
   */
  moveCursorDownWithShift: function (offset) {

    if (this._selectionDirection === 'left' && (this.selectionStart !== this.selectionEnd)) {
      this.selectionStart += offset;
      this._selectionDirection = 'left';
      return;
    } else {
      this._selectionDirection = 'right';
      this.selectionEnd += offset;

      if (this.selectionEnd > this.text.length) {
        this.selectionEnd = this.text.length;
      }
    }
  },

  getUpCursorOffset: function (e, isRight) {

    var selectionProp = isRight ? this.selectionEnd : this.selectionStart,
      cursorLocation = this.get2DCursorLocation(selectionProp);

    // if on first line, up cursor goes to start of line
    if (cursorLocation.lineIndex === 0 || e.metaKey) {
      return selectionProp;
    }

    var textBeforeCursor = this.text.slice(0, selectionProp),
      textOnSameLineBeforeCursor = textBeforeCursor.slice(textBeforeCursor.lastIndexOf('\n') + 1),
      textOnPreviousLine = (textBeforeCursor.match(/\n?(.*)\n.*$/) || {})[1] || '',
      textLines = this.text.split(this._reNewline),
      _char,
      lineLeftOffset;

    var widthOfSameLineBeforeCursor = this._getWidthOfLine(this.ctx, cursorLocation.lineIndex, textLines);
    lineLeftOffset = this._getLineLeftOffset(widthOfSameLineBeforeCursor);

    var widthOfCharsOnSameLineBeforeCursor = lineLeftOffset;
    var lineIndex = cursorLocation.lineIndex;

    for (var i = 0, len = textOnSameLineBeforeCursor.length; i < len; i++) {
      _char = textOnSameLineBeforeCursor[i];
      widthOfCharsOnSameLineBeforeCursor += this._getWidthOfChar(this.ctx, _char, lineIndex, i);
    }

    var indexOnPrevLine = this._getIndexOnPrevLine(
      cursorLocation, textOnPreviousLine, widthOfCharsOnSameLineBeforeCursor, textLines);

    return textOnPreviousLine.length - indexOnPrevLine + textOnSameLineBeforeCursor.length;
  },

  /**
   * @private
   */
  _getIndexOnPrevLine: function (cursorLocation, textOnPreviousLine, widthOfCharsOnSameLineBeforeCursor, textLines) {

    var lineIndex = cursorLocation.lineIndex - 1;
    var widthOfPreviousLine = this._getWidthOfLine(this.ctx, lineIndex, textLines);
    var lineLeftOffset = this._getLineLeftOffset(widthOfPreviousLine);
    var widthOfCharsOnPreviousLine = lineLeftOffset;
    var indexOnPrevLine = 0;
    var foundMatch;

    for (var j = 0, jlen = textOnPreviousLine.length; j < jlen; j++) {

      var _char = textOnPreviousLine[j];
      var widthOfChar = this._getWidthOfChar(this.ctx, _char, lineIndex, j);

      widthOfCharsOnPreviousLine += widthOfChar;

      if (widthOfCharsOnPreviousLine > widthOfCharsOnSameLineBeforeCursor) {

        foundMatch = true;

        var leftEdge = widthOfCharsOnPreviousLine - widthOfChar;
        var rightEdge = widthOfCharsOnPreviousLine;
        var offsetFromLeftEdge = Math.abs(leftEdge - widthOfCharsOnSameLineBeforeCursor);
        var offsetFromRightEdge = Math.abs(rightEdge - widthOfCharsOnSameLineBeforeCursor);

        indexOnPrevLine = offsetFromRightEdge < offsetFromLeftEdge ? j : (j - 1);

        break;
      }
    }

    // reached end
    if (!foundMatch) {
      indexOnPrevLine = textOnPreviousLine.length - 1;
    }

    return indexOnPrevLine;
  },

  /**
   * Moves cursor up
   * @param {Event} e Event object
   */
  moveCursorUp: function (e) {

    this.abortCursorAnimation();
    this._currentCursorOpacity = 1;

    var offset = this.getUpCursorOffset(e, this._selectionDirection === 'right');

    if (e.shiftKey) {
      this.moveCursorUpWithShift(offset);
    } else {
      this.moveCursorUpWithoutShift(offset);
    }

    this.initDelayedCursor();
  },

  /**
   * Moves cursor up with shift
   * @param {Number} offset
   */
  moveCursorUpWithShift: function (offset) {

    if (this.selectionStart === this.selectionEnd) {
      this.selectionStart -= offset;
    } else {
      if (this._selectionDirection === 'right') {
        this.selectionEnd -= offset;
        this._selectionDirection = 'right';
        return;
      } else {
        this.selectionStart -= offset;
      }
    }

    if (this.selectionStart < 0) {
      this.selectionStart = 0;
    }

    this._selectionDirection = 'left';
  },

  /**
   * Moves cursor up without shift
   * @param {Number} offset
   */
  moveCursorUpWithoutShift: function (offset) {
    if (this.selectionStart === this.selectionEnd) {
      this.selectionStart -= offset;
    }
    if (this.selectionStart < 0) {
      this.selectionStart = 0;
    }
    this.selectionEnd = this.selectionStart;

    this._selectionDirection = 'left';
  },

  /**
   * Moves cursor left
   * @param {Event} e Event object
   */
  moveCursorLeft: function (e) {
    if (this.selectionStart === 0 && this.selectionEnd === 0) return;

    this.abortCursorAnimation();
    this._currentCursorOpacity = 1;

    if (e.shiftKey) {
      this.moveCursorLeftWithShift(e);
    } else {
      this.moveCursorLeftWithoutShift(e);
    }

    this.initDelayedCursor();
  },

  /**
   * @private
   */
  _move: function (e, prop, direction) {
    if (e.altKey) {
      this[prop] = this['findWordBoundary' + direction](this[prop]);
    } else if (e.metaKey) {
      this[prop] = this['findLineBoundary' + direction](this[prop]);
    } else {
      this[prop] += (direction === 'Left' ? -1 : 1);
    }
  },

  /**
   * @private
   */
  _moveLeft: function (e, prop) {
    this._move(e, prop, 'Left');
  },

  /**
   * @private
   */
  _moveRight: function (e, prop) {
    this._move(e, prop, 'Right');
  },

  /**
   * Moves cursor left without keeping selection
   * @param {Event} e
   */
  moveCursorLeftWithoutShift: function (e) {
    this._selectionDirection = 'left';

    // only move cursor when there is no selection,
    // otherwise we discard it, and leave cursor on same place
    if (this.selectionEnd === this.selectionStart) {
      this._moveLeft(e, 'selectionStart');
    }
    this.selectionEnd = this.selectionStart;
  },

  /**
   * Moves cursor left while keeping selection
   * @param {Event} e
   */
  moveCursorLeftWithShift: function (e) {
    if (this._selectionDirection === 'right' && this.selectionStart !== this.selectionEnd) {
      this._moveLeft(e, 'selectionEnd');
    } else {
      this._selectionDirection = 'left';
      this._moveLeft(e, 'selectionStart');

      // increase selection by one if it's a newline
      if (this.text.charAt(this.selectionStart) === '\n') {
        this.selectionStart--;
      }
      if (this.selectionStart < 0) {
        this.selectionStart = 0;
      }
    }
  },

  /**
   * Moves cursor right
   * @param {Event} e Event object
   */
  moveCursorRight: function (e) {
    if (this.selectionStart >= this.text.length && this.selectionEnd >= this.text.length) return;

    this.abortCursorAnimation();
    this._currentCursorOpacity = 1;

    if (e.shiftKey) {
      this.moveCursorRightWithShift(e);
    } else {
      this.moveCursorRightWithoutShift(e);
    }

    this.initDelayedCursor();
  },

  /**
   * Moves cursor right while keeping selection
   * @param {Event} e
   */
  moveCursorRightWithShift: function (e) {
    if (this._selectionDirection === 'left' && this.selectionStart !== this.selectionEnd) {
      this._moveRight(e, 'selectionStart');
    } else {
      this._selectionDirection = 'right';
      this._moveRight(e, 'selectionEnd');

      // increase selection by one if it's a newline
      if (this.text.charAt(this.selectionEnd - 1) === '\n') {
        this.selectionEnd++;
      }
      if (this.selectionEnd > this.text.length) {
        this.selectionEnd = this.text.length;
      }
    }
  },

  /**
   * Moves cursor right without keeping selection
   * @param {Event} e
   */
  moveCursorRightWithoutShift: function (e) {
    this._selectionDirection = 'right';

    if (this.selectionStart === this.selectionEnd) {
      this._moveRight(e, 'selectionStart');
      this.selectionEnd = this.selectionStart;
    } else {
      this.selectionEnd += this.getNumNewLinesInSelectedText();
      if (this.selectionEnd > this.text.length) {
        this.selectionEnd = this.text.length;
      }
      this.selectionStart = this.selectionEnd;
    }
  },

  /**
   * Inserts a character where cursor is (replacing selection if one exists)
   */
  removeChars: function (e) {
    if (this.selectionStart === this.selectionEnd) {
      this._removeCharsNearCursor(e);
    } else {
      this._removeCharsFromTo(this.selectionStart, this.selectionEnd);
    }

    this.selectionEnd = this.selectionStart;

    this._removeExtraneousStyles();

    if (this.canvas) {
      // TODO: double renderAll gets rid of text box shift happenning sometimes
      // need to find out what exactly causes it and fix it
      this.canvas.renderAll().renderAll();
    }

    this.setCoords();
    this.fire('changed');
    this.canvas && this.canvas.fire('text:changed', {target: this});
  },

  /**
   * @private
   */
  _removeCharsNearCursor: function (e) {
    if (this.selectionStart !== 0) {

      if (e.metaKey) {
        // remove all till the start of current line
        var leftLineBoundary = this.findLineBoundaryLeft(this.selectionStart);

        this._removeCharsFromTo(leftLineBoundary, this.selectionStart);
        this.selectionStart = leftLineBoundary;
      } else if (e.altKey) {
        // remove all till the start of current word
        var leftWordBoundary = this.findWordBoundaryLeft(this.selectionStart);

        this._removeCharsFromTo(leftWordBoundary, this.selectionStart);
        this.selectionStart = leftWordBoundary;
      } else {
        var isBeginningOfLine = this.text.slice(this.selectionStart - 1, this.selectionStart) === '\n';
        this.removeStyleObject(isBeginningOfLine);

        this.selectionStart--;
        this.text = this.text.slice(0, this.selectionStart) +
          this.text.slice(this.selectionStart + 1);
      }
    }
  }
});

/* _TO_SVG_START_ */
fabric.util.object.extend(fabric.IText.prototype, /** @lends fabric.IText.prototype */ {

  /**
   * @private
   */
  _setSVGTextLineText: function (textLine, lineIndex, textSpans, lineHeight, lineTopOffsetMultiplier, textBgRects) {
    if (!this.styles[lineIndex]) {
      this.callSuper('_setSVGTextLineText',
        textLine, lineIndex, textSpans, lineHeight, lineTopOffsetMultiplier);
    } else {
      this._setSVGTextLineChars(
        textLine, lineIndex, textSpans, lineHeight, lineTopOffsetMultiplier, textBgRects);
    }
  },

  /**
   * @private
   */
  _setSVGTextLineChars: function (textLine, lineIndex, textSpans, lineHeight, lineTopOffsetMultiplier, textBgRects) {

    var yProp = lineIndex === 0 || this.useNative ? 'y' : 'dy',
      chars = textLine.split(''),
      charOffset = 0,
      lineLeftOffset = this._getSVGLineLeftOffset(lineIndex),
      lineTopOffset = this._getSVGLineTopOffset(lineIndex),
      heightOfLine = this._getHeightOfLine(this.ctx, lineIndex);

    for (var i = 0, len = chars.length; i < len; i++) {
      var styleDecl = this.styles[lineIndex][i] || {};

      textSpans.push(
        this._createTextCharSpan(
          chars[i], styleDecl, lineLeftOffset, lineTopOffset, yProp, charOffset));

      var charWidth = this._getWidthOfChar(this.ctx, chars[i], lineIndex, i);

      if (styleDecl.textBackgroundColor) {
        textBgRects.push(
          this._createTextCharBg(
            styleDecl, lineLeftOffset, lineTopOffset, heightOfLine, charWidth, charOffset));
      }

      charOffset += charWidth;
    }
  },

  /**
   * @private
   */
  _getSVGLineLeftOffset: function (lineIndex) {
    return (this._boundaries && this._boundaries[lineIndex])
      ? fabric.util.toFixed(this._boundaries[lineIndex].left, 2)
      : 0;
  },

  /**
   * @private
   */
  _getSVGLineTopOffset: function (lineIndex) {
    var lineTopOffset = 0;
    for (var j = 0; j <= lineIndex; j++) {
      lineTopOffset += this._getHeightOfLine(this.ctx, j);
    }
    return lineTopOffset - this.height / 2;
  },

  /**
   * @private
   */
  _createTextCharBg: function (styleDecl, lineLeftOffset, lineTopOffset, heightOfLine, charWidth, charOffset) {
    return [
      '<rect fill="', styleDecl.textBackgroundColor,
      '" transform="translate(',
      -this.width / 2, ' ',
      -this.height + heightOfLine, ')',
      '" x="', lineLeftOffset + charOffset,
      '" y="', lineTopOffset + heightOfLine,
      '" width="', charWidth,
      '" height="', heightOfLine,
      '"></rect>'
    ].join('');
  },

  /**
   * @private
   */
  _createTextCharSpan: function (_char, styleDecl, lineLeftOffset, lineTopOffset, yProp, charOffset) {

    var fillStyles = this.getSvgStyles.call(fabric.util.object.extend({
      visible: true,
      fill: this.fill,
      stroke: this.stroke,
      type: 'text'
    }, styleDecl));

    return [
      '<tspan x="', lineLeftOffset + charOffset, '" ',
      yProp, '="', lineTopOffset, '" ',

      (styleDecl.fontFamily ? 'font-family="' + styleDecl.fontFamily.replace(/"/g, '\'') + '" ' : ''),
      (styleDecl.fontSize ? 'font-size="' + styleDecl.fontSize + '" ' : ''),
      (styleDecl.fontStyle ? 'font-style="' + styleDecl.fontStyle + '" ' : ''),
      (styleDecl.fontWeight ? 'font-weight="' + styleDecl.fontWeight + '" ' : ''),
      (styleDecl.textDecoration ? 'text-decoration="' + styleDecl.textDecoration + '" ' : ''),
      'style="', fillStyles, '">',

      fabric.util.string.escapeXml(_char),
      '</tspan>'
    ].join('');
  }
});
/* _TO_SVG_END_ */

(function () {

  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    return;
  }

  var DOMParser = new require('xmldom').DOMParser,
    URL = require('url'),
    HTTP = require('http'),
    HTTPS = require('https'),

    Canvas = require('canvas'),
    Image = require('canvas').Image;

  /** @private */
  function request(url, encoding, callback) {
    var oURL = URL.parse(url);

    // detect if http or https is used
    if (!oURL.port) {
      oURL.port = (oURL.protocol.indexOf('https:') === 0) ? 443 : 80;
    }

    // assign request handler based on protocol
    var reqHandler = (oURL.port === 443) ? HTTPS : HTTP;

    var req = reqHandler.request({
      hostname: oURL.hostname,
      port: oURL.port,
      path: oURL.path,
      method: 'GET'
    }, function (response) {
      var body = '';
      if (encoding) {
        response.setEncoding(encoding);
      }
      response.on('end', function () {
        callback(body);
      });
      response.on('data', function (chunk) {
        if (response.statusCode === 200) {
          body += chunk;
        }
      });
    });

    req.on('error', function (err) {
      if (err.errno === process.ECONNREFUSED) {
        fabric.log('ECONNREFUSED: connection refused to ' + oURL.hostname + ':' + oURL.port);
      } else {
        fabric.log(err.message);
      }
    });

    req.end();
  }

  /** @private */
  function request_fs(path, callback) {
    var fs = require('fs');
    fs.readFile(path, function (err, data) {
      if (err) {
        fabric.log(err);
        throw err;
      } else {
        callback(data);
      }
    });
  }

  fabric.util.loadImage = function (url, callback, context) {
    var createImageAndCallBack = function (data) {
      img.src = new Buffer(data, 'binary');
      // preserving original url, which seems to be lost in node-canvas
      img._src = url;
      callback && callback.call(context, img);
    };
    var img = new Image();
    if (url && (url instanceof Buffer || url.indexOf('data') === 0)) {
      img.src = img._src = url;
      callback && callback.call(context, img);
    } else if (url && url.indexOf('http') !== 0) {
      request_fs(url, createImageAndCallBack);
    } else if (url) {
      request(url, 'binary', createImageAndCallBack);
    } else {
      callback && callback.call(context, url);
    }
  };

  fabric.loadSVGFromURL = function (url, callback, reviver) {
    url = url.replace(/^\n\s*/, '').replace(/\?.*$/, '').trim();
    if (url.indexOf('http') !== 0) {
      request_fs(url, function (body) {
        fabric.loadSVGFromString(body, callback, reviver);
      });
    } else {
      request(url, '', function (body) {
        fabric.loadSVGFromString(body, callback, reviver);
      });
    }
  };

  fabric.loadSVGFromString = function (string, callback, reviver) {
    var doc = new DOMParser().parseFromString(string);
    fabric.parseSVGDocument(doc.documentElement, function (results, options) {
      callback && callback(results, options);
    }, reviver);
  };

  fabric.util.getScript = function (url, callback) {
    request(url, '', function (body) {
      eval(body);
      callback && callback();
    });
  };

  fabric.Image.fromObject = function (object, callback) {
    fabric.util.loadImage(object.src, function (img) {
      var oImg = new fabric.Image(img);

      oImg._initConfig(object);
      oImg._initFilters(object, function (filters) {
        oImg.filters = filters || [];
        callback && callback(oImg);
      });
    });
  };

  /**
   * Only available when running fabric on node.js
   * @param width Canvas width
   * @param height Canvas height
   * @param {Object} options to pass to FabricCanvas.
   * @return {Object} wrapped canvas instance
   */
  fabric.createCanvasForNode = function (width, height, options) {

    var canvasEl = fabric.document.createElement('canvas'),
      nodeCanvas = new Canvas(width || 600, height || 600);

    // jsdom doesn't create style on canvas element, so here be temp. workaround
    canvasEl.style = {};

    canvasEl.width = nodeCanvas.width;
    canvasEl.height = nodeCanvas.height;

    var FabricCanvas = fabric.Canvas || fabric.StaticCanvas;
    var fabricCanvas = new FabricCanvas(canvasEl, options);
    fabricCanvas.contextContainer = nodeCanvas.getContext('2d');
    fabricCanvas.nodeCanvas = nodeCanvas;
    fabricCanvas.Font = Canvas.Font;

    return fabricCanvas;
  };

  /** @ignore */
  fabric.StaticCanvas.prototype.createPNGStream = function () {
    return this.nodeCanvas.createPNGStream();
  };

  fabric.StaticCanvas.prototype.createJPEGStream = function (opts) {
    return this.nodeCanvas.createJPEGStream(opts);
  };

  var origSetWidth = fabric.StaticCanvas.prototype.setWidth;
  fabric.StaticCanvas.prototype.setWidth = function (width) {
    origSetWidth.call(this, width);
    this.nodeCanvas.width = width;
    return this;
  };
  if (fabric.Canvas) {
    fabric.Canvas.prototype.setWidth = fabric.StaticCanvas.prototype.setWidth;
  }

  var origSetHeight = fabric.StaticCanvas.prototype.setHeight;
  fabric.StaticCanvas.prototype.setHeight = function (height) {
    origSetHeight.call(this, height);
    this.nodeCanvas.height = height;
    return this;
  };
  if (fabric.Canvas) {
    fabric.Canvas.prototype.setHeight = fabric.StaticCanvas.prototype.setHeight;
  }

})();

// store
/* Copyright (c) 2010-2013 Marcus Westin */
this.JSON || (this.JSON = {}), function () {
  function f(e) {
    return e < 10 ? '0' + e : e;
  }

  function quote(e) {
    return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
      var t = meta[e];
      return typeof t == 'string' ? t : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + e + '"';
  }

  function str(e, t) {
    var n, r, i, s, o = gap, u, a = t[e];
    a && typeof a == 'object' && typeof a.toJSON == 'function' && (a = a.toJSON(e)), typeof rep == 'function' &&
    (a = rep.call(t, e, a));
    switch (typeof a) {
      case'string':
        return quote(a);
      case'number':
        return isFinite(a) ? String(a) : 'null';
      case'boolean':
      case'null':
        return String(a);
      case'object':
        if (!a) return 'null';
        gap += indent, u = [];
        if (Object.prototype.toString.apply(a) === '[object Array]') {
          s = a.length;
          for (n = 0; n < s; n += 1) u[n] = str(n, a) || 'null';
          return i = u.length === 0 ? '[]' : gap ? '[\n' + gap + u.join(',\n' + gap) + '\n' + o + ']' : '[' +
            u.join(',') + ']', gap = o, i;
        }
        if (rep && typeof rep == 'object') {
          s = rep.length;
          for (n = 0; n < s; n += 1) r = rep[n], typeof r == 'string' &&
          (i = str(r, a), i && u.push(quote(r) + (gap ? ': ' : ':') + i));
        } else for (r in a) Object.hasOwnProperty.call(a, r) &&
        (i = str(r, a), i && u.push(quote(r) + (gap ? ': ' : ':') + i));
        return i = u.length === 0 ? '{}' : gap ? '{\n' + gap + u.join(',\n' + gap) + '\n' + o + '}' : '{' +
          u.join(',') + '}', gap = o, i;
    }
  }

  typeof Date.prototype.toJSON != 'function' && (Date.prototype.toJSON = function (e) {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' +
      f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' +
      f(this.getUTCSeconds()) + 'Z' : null;
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
    return this.valueOf();
  });
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap, indent, meta = {'\b': '\\b', ' ': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\'}, rep;
  typeof JSON.stringify != 'function' && (JSON.stringify = function (e, t, n) {
    var r;
    gap = '', indent = '';
    if (typeof n == 'number') for (r = 0; r < n; r += 1) indent += ' '; else typeof n == 'string' && (indent = n);
    rep = t;
    if (!t || typeof t == 'function' || typeof t == 'object' && typeof t.length == 'number') return str('', {'': e});
    throw new Error('JSON.stringify');
  }), typeof JSON.parse != 'function' && (JSON.parse = function (text, reviver) {
    function walk(e, t) {
      var n, r, i = e[t];
      if (i && typeof i == 'object') for (n in i) Object.hasOwnProperty.call(i, n) &&
      (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
      return reviver.call(e, t, i);
    }

    var j;
    text = String(text), cx.lastIndex = 0, cx.test(text) &&
    (text = text.replace(cx, function (e) {
      return '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
    }));
    if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) return j = eval('(' + text + ')'), typeof reviver == 'function' ? walk(
      {'': j}, '') : j;
    throw new SyntaxError('JSON.parse');
  });
}(), function (e) {
  function o() {
    try {
      return r in e && e[r];
    } catch (t) {
      return !1;
    }
  }

  var t = {}, n = e.document, r = 'localStorage', i = 'script', s;
  t.disabled = !1, t.set = function (
    e, t) {
  }, t.get = function (e) {
  }, t.remove = function (e) {
  }, t.clear = function () {
  }, t.transact = function (
    e, n, r) {
    var i = t.get(e);
    r == null && (r = n, n = null), typeof i == 'undefined' && (i = n || {}), r(i), t.set(e, i);
  }, t.getAll = function () {
  }, t.forEach = function () {
  }, t.serialize = function (e) {
    return JSON.stringify(e);
  }, t.deserialize = function (e) {
    if (typeof e != 'string') return undefined;
    try {
      return JSON.parse(e);
    } catch (t) {
      return e || undefined;
    }
  };
  if (o()) s = e[r], t.set = function (e, n) {
    return n === undefined ? t.remove(e) : (s.setItem(e, t.serialize(n)), n);
  }, t.get = function (e) {
    return t.deserialize(s.getItem(e));
  }, t.remove = function (e) {
    s.removeItem(e);
  }, t.clear = function () {
    s.clear();
  }, t.getAll = function () {
    var e = {};
    return t.forEach(function (t, n) {
      e[t] = n;
    }), e;
  }, t.forEach = function (e) {
    for (var n = 0; n < s.length; n++) {
      var r = s.key(n);
      e(r, t.get(r));
    }
  }; else if (n.documentElement.addBehavior) {
    var u, a;
    try {
      a = new ActiveXObject('htmlfile'), a.open(), a.write('<' + i + '>document.w=window</' + i +
        '><iframe src="/favicon.ico"></iframe>'), a.close(), u = a.w.frames[0].document, s = u.createElement('div');
    } catch (f) {
      s = n.createElement('div'), u = n.body;
    }

    function l(e) {
      return function () {
        var n = Array.prototype.slice.call(arguments, 0);
        n.unshift(s), u.appendChild(s), s.addBehavior('#default#userData'), s.load(r);
        var i = e.apply(t, n);
        return u.removeChild(s), i;
      };
    }

    var c = new RegExp('[!"#$%&\'()*+,/\\\\:;<=>?@[\\]^`{|}~]', 'g');

    function h(e) {
      return e.replace(/^d/, '___$&').replace(c, '___');
    }

    t.set = l(function (e, n, i) {
      return n = h(n), i === undefined ? t.remove(n) : (e.setAttribute(n, t.serialize(i)), e.save(r), i);
    }), t.get = l(function (e, n) {
      return n = h(n), t.deserialize(e.getAttribute(n));
    }), t.remove = l(
      function (e, t) {
        t = h(t), e.removeAttribute(t), e.save(r);
      }), t.clear = l(function (e) {
      var t = e.XMLDocument.documentElement.attributes;
      e.load(r);
      for (var n = 0, i; i = t[n]; n++) e.removeAttribute(i.name);
      e.save(r);
    }), t.getAll = function (e) {
      var n = {};
      return t.forEach(function (e, t) {
        n[e] = t;
      }), n;
    }, t.forEach = l(function (e, n) {
      var r = e.XMLDocument.documentElement.attributes;
      for (var i = 0, s; s = r[i]; ++i) n(s.name, t.deserialize(e.getAttribute(s.name)));
    });
  }
  try {
    var p = '__storejs__';
    t.set(p, p), t.get(p) != p && (t.disabled = !0), t.remove(p);
  } catch (f) {
    t.disabled = !0;
  }
  t.enabled = !t.disabled, typeof module != 'undefined' && module.exports && this.module !== module
    ? module.exports = t
    : typeof define == 'function' && define.amd ? define(t) : e.store = t;
}(this);

// blur

function stackBlurImage(e, t, n, r) {
  var i = document.getElementById(e);
  var s = i.naturalWidth;
  var o = i.naturalHeight;
  var u = document.getElementById(t);
  u.style.width = s + 'px';
  u.style.height = o + 'px';
  u.width = s;
  u.height = o;
  var a = u.getContext('2d');
  a.clearRect(0, 0, s, o);
  a.drawImage(i, 0, 0);
  if (isNaN(n) || n < 1) return;
  if (r) stackBlurCanvasRGBA(t, 0, 0, s, o, n); else stackBlurCanvasRGB(t, 0, 0, s, o, n);
}

function stackBlurCanvasRGBA(e, t, n, r, i, s) {
  if (isNaN(s) || s < 1) return;
  s |= 0;
  var o = document.getElementById(e);
  var u = o.getContext('2d');
  var a;
  try {
    try {
      a = u.getImageData(t, n, r, i);
    } catch (f) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');
        a = u.getImageData(t, n, r, i);
      } catch (f) {
        alert('Cannot access local image');
        throw new Error('unable to access local image data: ' + f);
        return;
      }
    }
  } catch (f) {
    alert('Cannot access image');
    throw new Error('unable to access image data: ' + f);
  }
  var l = a.data;
  var c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P;
  var H = s + s + 1;
  var B = r << 2;
  var j = r - 1;
  var F = i - 1;
  var I = s + 1;
  var q = I * (I + 1) / 2;
  var R = new BlurStack;
  var U = R;
  for (p = 1; p < H; p++) {
    U = U.next = new BlurStack;
    if (p == I) var z = U;
  }
  U.next = R;
  var W = null;
  var X = null;
  g = m = 0;
  var V = mul_table[s];
  var $ = shg_table[s];
  for (h = 0; h < i; h++) {
    C = k = L = A = y = b = w = E = 0;
    S = I * (O = l[m]);
    x = I * (M = l[m + 1]);
    T = I * (_ = l[m + 2]);
    N = I * (D = l[m + 3]);
    y += q * O;
    b += q * M;
    w += q * _;
    E += q * D;
    U = R;
    for (p = 0; p < I; p++) {
      U.r = O;
      U.g = M;
      U.b = _;
      U.a = D;
      U = U.next;
    }
    for (p = 1; p < I; p++) {
      d = m + ((j < p ? j : p) << 2);
      y += (U.r = O = l[d]) * (P = I - p);
      b += (U.g = M = l[d + 1]) * P;
      w += (U.b = _ = l[d + 2]) * P;
      E += (U.a = D = l[d + 3]) * P;
      C += O;
      k += M;
      L += _;
      A += D;
      U = U.next;
    }
    W = R;
    X = z;
    for (c = 0; c < r; c++) {
      l[m + 3] = D = E * V >> $;
      if (D != 0) {
        D = 255 / D;
        l[m] = (y * V >> $) * D;
        l[m + 1] = (b * V >> $) * D;
        l[m + 2] = (w * V >> $) * D;
      } else {
        l[m] = l[m + 1] = l[m + 2] = 0;
      }
      y -= S;
      b -= x;
      w -= T;
      E -= N;
      S -= W.r;
      x -= W.g;
      T -= W.b;
      N -= W.a;
      d = g + ((d = c + s + 1) < j ? d : j) << 2;
      C += W.r = l[d];
      k += W.g = l[d + 1];
      L += W.b = l[d + 2];
      A += W.a = l[d + 3];
      y += C;
      b += k;
      w += L;
      E += A;
      W = W.next;
      S += O = X.r;
      x += M = X.g;
      T += _ = X.b;
      N += D = X.a;
      C -= O;
      k -= M;
      L -= _;
      A -= D;
      X = X.next;
      m += 4;
    }
    g += r;
  }
  for (c = 0; c < r; c++) {
    k = L = A = C = b = w = E = y = 0;
    m = c << 2;
    S = I * (O = l[m]);
    x = I * (M = l[m + 1]);
    T = I * (_ = l[m + 2]);
    N = I * (D = l[m + 3]);
    y += q * O;
    b += q * M;
    w += q * _;
    E += q * D;
    U = R;
    for (p = 0; p < I; p++) {
      U.r = O;
      U.g = M;
      U.b = _;
      U.a = D;
      U = U.next;
    }
    v = r;
    for (p = 1; p <= s; p++) {
      m = v + c << 2;
      y += (U.r = O = l[m]) * (P = I - p);
      b += (U.g = M = l[m + 1]) * P;
      w += (U.b = _ = l[m + 2]) * P;
      E += (U.a = D = l[m + 3]) * P;
      C += O;
      k += M;
      L += _;
      A += D;
      U = U.next;
      if (p < F) {
        v += r;
      }
    }
    m = c;
    W = R;
    X = z;
    for (h = 0; h < i; h++) {
      d = m << 2;
      l[d + 3] = D = E * V >> $;
      if (D > 0) {
        D = 255 / D;
        l[d] = (y * V >> $) * D;
        l[d + 1] = (b * V >> $) * D;
        l[d + 2] = (w * V >> $) * D;
      } else {
        l[d] = l[d + 1] = l[d + 2] = 0;
      }
      y -= S;
      b -= x;
      w -= T;
      E -= N;
      S -= W.r;
      x -= W.g;
      T -= W.b;
      N -= W.a;
      d = c + ((d = h + I) < F ? d : F) * r << 2;
      y += C += W.r = l[d];
      b += k += W.g = l[d + 1];
      w += L += W.b = l[d + 2];
      E += A += W.a = l[d + 3];
      W = W.next;
      S += O = X.r;
      x += M = X.g;
      T += _ = X.b;
      N += D = X.a;
      C -= O;
      k -= M;
      L -= _;
      A -= D;
      X = X.next;
      m += r;
    }
  }
  u.putImageData(a, t, n);
}

function stackBlurCanvasRGB(e, t, n, r, i, s, o) {
  if (isNaN(s) || s < 1) return;
  s |= 0;
  if (o) {
    var u = o;
  } else {
    var u = document.getElementById(e);
  }
  var a = u.getContext('2d');
  var f;
  try {
    try {
      f = a.getImageData(t, n, r, i);
    } catch (l) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');
        f = a.getImageData(t, n, r, i);
      } catch (l) {
        alert('Cannot access local image');
        throw new Error('unable to access local image data: ' + l);
        return;
      }
    }
  } catch (l) {
    alert('Cannot access image');
    throw new Error('unable to access image data: ' + l);
  }
  var c = f.data;
  var h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M;
  var _ = s + s + 1;
  var D = r << 2;
  var P = r - 1;
  var H = i - 1;
  var B = s + 1;
  var j = B * (B + 1) / 2;
  var F = new BlurStack;
  var I = F;
  for (d = 1; d < _; d++) {
    I = I.next = new BlurStack;
    if (d == B) var q = I;
  }
  I.next = F;
  var R = null;
  var U = null;
  y = g = 0;
  var z = mul_table[s];
  var W = shg_table[s];
  for (p = 0; p < i; p++) {
    N = C = k = b = w = E = 0;
    S = B * (L = c[g]);
    x = B * (A = c[g + 1]);
    T = B * (O = c[g + 2]);
    b += j * L;
    w += j * A;
    E += j * O;
    I = F;
    for (d = 0; d < B; d++) {
      I.r = L;
      I.g = A;
      I.b = O;
      I = I.next;
    }
    for (d = 1; d < B; d++) {
      v = g + ((P < d ? P : d) << 2);
      b += (I.r = L = c[v]) * (M = B - d);
      w += (I.g = A = c[v + 1]) * M;
      E += (I.b = O = c[v + 2]) * M;
      N += L;
      C += A;
      k += O;
      I = I.next;
    }
    R = F;
    U = q;
    for (h = 0; h < r; h++) {
      c[g] = b * z >> W;
      c[g + 1] = w * z >> W;
      c[g + 2] = E * z >> W;
      b -= S;
      w -= x;
      E -= T;
      S -= R.r;
      x -= R.g;
      T -= R.b;
      v = y + ((v = h + s + 1) < P ? v : P) << 2;
      N += R.r = c[v];
      C += R.g = c[v + 1];
      k += R.b = c[v + 2];
      b += N;
      w += C;
      E += k;
      R = R.next;
      S += L = U.r;
      x += A = U.g;
      T += O = U.b;
      N -= L;
      C -= A;
      k -= O;
      U = U.next;
      g += 4;
    }
    y += r;
  }
  for (h = 0; h < r; h++) {
    C = k = N = w = E = b = 0;
    g = h << 2;
    S = B * (L = c[g]);
    x = B * (A = c[g + 1]);
    T = B * (O = c[g + 2]);
    b += j * L;
    w += j * A;
    E += j * O;
    I = F;
    for (d = 0; d < B; d++) {
      I.r = L;
      I.g = A;
      I.b = O;
      I = I.next;
    }
    m = r;
    for (d = 1; d <= s; d++) {
      g = m + h << 2;
      b += (I.r = L = c[g]) * (M = B - d);
      w += (I.g = A = c[g + 1]) * M;
      E += (I.b = O = c[g + 2]) * M;
      N += L;
      C += A;
      k += O;
      I = I.next;
      if (d < H) {
        m += r;
      }
    }
    g = h;
    R = F;
    U = q;
    for (p = 0; p < i; p++) {
      v = g << 2;
      c[v] = b * z >> W;
      c[v + 1] = w * z >> W;
      c[v + 2] = E * z >> W;
      b -= S;
      w -= x;
      E -= T;
      S -= R.r;
      x -= R.g;
      T -= R.b;
      v = h + ((v = p + B) < H ? v : H) * r << 2;
      b += N += R.r = c[v];
      w += C += R.g = c[v + 1];
      E += k += R.b = c[v + 2];
      R = R.next;
      S += L = U.r;
      x += A = U.g;
      T += O = U.b;
      N -= L;
      C -= A;
      k -= O;
      U = U.next;
      g += r;
    }
  }
  a.putImageData(f, t, n);
}

function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}

var mul_table = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259];
var shg_table = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24];

// underscore
(function () {
  var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push,
    o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, h = e.reduce,
    v = e.reduceRight, d = e.filter, g = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray,
    _ = Object.keys, j = i.bind,
    w = function (n) {
      return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n);
    };
  'undefined' != typeof exports ? ('undefined' != typeof module && module.exports &&
  (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = '1.4.4';
  var A = w.each = w.forEach = function (n, t, e) {
    if (null != n) if (s && n.forEach === s) n.forEach(t, e); else if (n.length === +n.length) {
      for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return;
    } else for (var a in n) if (w.has(n, a) && t.call(e, n[a], a, n) === r) return;
  };
  w.map = w.collect = function (n, t, r) {
    var e = [];
    return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n,
      function (n, u, i) {
        e[e.length] = t.call(r, n, u, i);
      }), e);
  };
  var O = 'Reduce of empty array with no initial value';
  w.reduce = w.foldl = w.inject = function (n, t, r, e) {
    var u = arguments.length > 2;
    if (null == n && (n = []), h && n.reduce === h) return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
    if (A(n, function (n, i, a) {
      u ? r = t.call(e, r, n, i, a) : (r = n, u = !0);
    }), !u) throw new TypeError(O);
    return r;
  }, w.reduceRight = w.foldr = function (n, t, r, e) {
    var u = arguments.length > 2;
    if (null == n && (n = []), v && n.reduceRight === v) return e && (t = w.bind(t, e)), u
      ? n.reduceRight(t, r)
      : n.reduceRight(t);
    var i = n.length;
    if (i !== +i) {
      var a = w.keys(n);
      i = a.length;
    }
    if (A(n, function (o, c, l) {
      c = a ? a[--i] : --i, u
        ? r = t.call(e, r, n[c], c, l)
        : (r = n[c], u = !0);
    }), !u) throw new TypeError(O);
    return r;
  }, w.find = w.detect = function (n, t, r) {
    var e;
    return E(n, function (n, u, i) {
      return t.call(r, n, u, i) ? (e = n, !0) : void 0;
    }), e;
  }, w.filter = w.select = function (n, t, r) {
    var e = [];
    return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n,
      function (n, u, i) {
        t.call(r, n, u, i) && (e[e.length] = n);
      }), e);
  }, w.reject = function (n, t, r) {
    return w.filter(n, function (n, e, u) {
      return !t.call(r, n, e, u);
    }, r);
  }, w.every = w.all = function (n, t, e) {
    t || (t = w.identity);
    var u = !0;
    return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n,
      function (n, i, a) {
        return (u = u && t.call(e, n, i, a)) ? void 0 : r;
      }), !!u);
  };
  var E = w.some = w.any = function (n, t, e) {
    t || (t = w.identity);
    var u = !1;
    return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n,
      function (n, i, a) {
        return u || (u = t.call(e, n, i, a)) ? r : void 0;
      }), !!u);
  };
  w.contains = w.include = function (n, t) {
    return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : E(n, function (n) {
      return n === t;
    });
  }, w.invoke = function (n, t) {
    var r = o.call(arguments, 2), e = w.isFunction(t);
    return w.map(n, function (n) {
      return (e ? t : n[t]).apply(n, r);
    });
  }, w.pluck = function (n, t) {
    return w.map(n, function (n) {
      return n[t];
    });
  }, w.where = function (
    n, t, r) {
    return w.isEmpty(t) ? r ? null : [] : w[r ? 'find' : 'filter'](n, function (n) {
      for (var r in t) if (t[r] !== n[r]) return !1;
      return !0;
    });
  }, w.findWhere = function (n, t) {
    return w.where(n, t, !0);
  }, w.max = function (n, t, r) {
    if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.max.apply(Math, n);
    if (!t && w.isEmpty(n)) return -1 / 0;
    var e = {computed: -1 / 0, value: -1 / 0};
    return A(n, function (n, u, i) {
      var a = t ? t.call(r, n, u, i) : n;
      a >= e.computed && (e = {value: n, computed: a});
    }), e.value;
  }, w.min = function (n, t, r) {
    if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.min.apply(Math, n);
    if (!t && w.isEmpty(n)) return 1 / 0;
    var e = {computed: 1 / 0, value: 1 / 0};
    return A(n, function (n, u, i) {
      var a = t ? t.call(r, n, u, i) : n;
      e.computed > a && (e = {value: n, computed: a});
    }), e.value;
  }, w.shuffle = function (n) {
    var t, r = 0, e = [];
    return A(n, function (n) {
      t = w.random(r++), e[r - 1] = e[t], e[t] = n;
    }), e;
  };
  var k = function (n) {
    return w.isFunction(n) ? n : function (t) {
      return t[n];
    };
  };
  w.sortBy = function (n, t, r) {
    var e = k(t);
    return w.pluck(w.map(n, function (n, t, u) {
      return {value: n, index: t, criteria: e.call(r, n, t, u)};
    }).sort(function (n, t) {
      var r = n.criteria, e = t.criteria;
      if (r !== e) {
        if (r > e || r === void 0) return 1;
        if (e > r || e === void 0) return -1;
      }
      return n.index < t.index ? -1 : 1;
    }), 'value');
  };
  var F = function (n, t, r, e) {
    var u = {}, i = k(t || w.identity);
    return A(n, function (t, a) {
      var o = i.call(r, t, a, n);
      e(u, o, t);
    }), u;
  };
  w.groupBy = function (n, t, r) {
    return F(n, t, r, function (n, t, r) {
      (w.has(n, t) ? n[t] : n[t] = []).push(r);
    });
  }, w.countBy = function (n, t, r) {
    return F(n, t, r, function (n, t) {
      w.has(n, t) || (n[t] = 0), n[t]++;
    });
  }, w.sortedIndex = function (n, t, r, e) {
    r = null == r ? w.identity : k(r);
    for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
      var o = i + a >>> 1;
      u > r.call(e, n[o]) ? i = o + 1 : a = o;
    }
    return i;
  }, w.toArray = function (n) {
    return n ? w.isArray(n) ? o.call(n) : n.length === +n.length
      ? w.map(n, w.identity)
      : w.values(n) : [];
  }, w.size = function (n) {
    return null == n ? 0 : n.length === +n.length ? n.length : w.keys(n).length;
  }, w.first = w.head = w.take = function (n, t, r) {
    return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t);
  }, w.initial = function (n, t, r) {
    return o.call(n, 0, n.length - (null == t || r ? 1 : t));
  }, w.last = function (
    n, t, r) {
    return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0));
  }, w.rest = w.tail = w.drop = function (n, t, r) {
    return o.call(n, null == t || r ? 1 : t);
  }, w.compact = function (n) {
    return w.filter(n, w.identity);
  };
  var R = function (n, t, r) {
    return A(n, function (n) {
      w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n);
    }), r;
  };
  w.flatten = function (n, t) {
    return R(n, t, []);
  }, w.without = function (n) {
    return w.difference(n, o.call(arguments, 1));
  }, w.uniq = w.unique = function (n, t, r, e) {
    w.isFunction(t) && (e = r, r = t, t = !1);
    var u = r ? w.map(n, r, e) : n, i = [], a = [];
    return A(u, function (r, e) {
      (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]));
    }), i;
  }, w.union = function () {
    return w.uniq(c.apply(e, arguments));
  }, w.intersection = function (n) {
    var t = o.call(arguments, 1);
    return w.filter(w.uniq(n), function (n) {
      return w.every(t, function (t) {
        return w.indexOf(t, n) >= 0;
      });
    });
  }, w.difference = function (n) {
    var t = c.apply(e, o.call(arguments, 1));
    return w.filter(n, function (n) {
      return !w.contains(t, n);
    });
  }, w.zip = function () {
    for (var n = o.call(arguments), t = w.max(w.pluck(n, 'length')), r = Array(t), e = 0; t > e; e++) r[e] = w.pluck(
      n, '' + e);
    return r;
  }, w.object = function (n, t) {
    if (null == n) return {};
    for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
    return r;
  }, w.indexOf = function (n, t, r) {
    if (null == n) return -1;
    var e = 0, u = n.length;
    if (r) {
      if ('number' != typeof r) return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
      e = 0 > r ? Math.max(0, u + r) : r;
    }
    if (y && n.indexOf === y) return n.indexOf(t, r);
    for (; u > e; e++) if (n[e] === t) return e;
    return -1;
  }, w.lastIndexOf = function (n, t, r) {
    if (null == n) return -1;
    var e = null != r;
    if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
    for (var u = e ? r : n.length; u--;) if (n[u] === t) return u;
    return -1;
  }, w.range = function (n, t, r) {
    1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
    for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;) i[u++] = n, n += r;
    return i;
  }, w.bind = function (n, t) {
    if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
    var r = o.call(arguments, 2);
    return function () {
      return n.apply(t, r.concat(o.call(arguments)));
    };
  }, w.partial = function (n) {
    var t = o.call(arguments, 1);
    return function () {
      return n.apply(this, t.concat(o.call(arguments)));
    };
  }, w.bindAll = function (n) {
    var t = o.call(arguments, 1);
    return 0 === t.length && (t = w.functions(n)), A(t, function (t) {
      n[t] = w.bind(n[t], n);
    }), n;
  }, w.memoize = function (n, t) {
    var r = {};
    return t || (t = w.identity), function () {
      var e = t.apply(this, arguments);
      return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments);
    };
  }, w.delay = function (n, t) {
    var r = o.call(arguments, 2);
    return setTimeout(function () {
      return n.apply(null, r);
    }, t);
  }, w.defer = function (n) {
    return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)));
  }, w.throttle = function (
    n, t) {
    var r, e, u, i, a = 0, o = function () {
      a = new Date, u = null, i = n.apply(r, e);
    };
    return function () {
      var c = new Date, l = t - (c - a);
      return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u ||
        (u = setTimeout(o, l)), i;
    };
  }, w.debounce = function (n, t, r) {
    var e, u;
    return function () {
      var i = this, a = arguments, o = function () {
        e = null, r || (u = n.apply(i, a));
      }, c = r && !e;
      return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u;
    };
  }, w.once = function (n) {
    var t, r = !1;
    return function () {
      return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t);
    };
  }, w.wrap = function (n, t) {
    return function () {
      var r = [n];
      return a.apply(r, arguments), t.apply(this, r);
    };
  }, w.compose = function () {
    var n = arguments;
    return function () {
      for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
      return t[0];
    };
  }, w.after = function (n, t) {
    return 0 >= n ? t() : function () {
      return 1 > --n
        ? t.apply(this, arguments)
        : void 0;
    };
  }, w.keys = _ || function (n) {
    if (n !== Object(n)) throw new TypeError('Invalid object');
    var t = [];
    for (var r in n) w.has(n, r) && (t[t.length] = r);
    return t;
  }, w.values = function (n) {
    var t = [];
    for (var r in n) w.has(n, r) && t.push(n[r]);
    return t;
  }, w.pairs = function (n) {
    var t = [];
    for (var r in n) w.has(n, r) && t.push([r, n[r]]);
    return t;
  }, w.invert = function (n) {
    var t = {};
    for (var r in n) w.has(n, r) && (t[n[r]] = r);
    return t;
  }, w.functions = w.methods = function (n) {
    var t = [];
    for (var r in n) w.isFunction(n[r]) && t.push(r);
    return t.sort();
  }, w.extend = function (n) {
    return A(o.call(arguments, 1), function (t) {
      if (t) for (var r in t) n[r] = t[r];
    }), n;
  }, w.pick = function (n) {
    var t = {}, r = c.apply(e, o.call(arguments, 1));
    return A(r, function (r) {
      r in n && (t[r] = n[r]);
    }), t;
  }, w.omit = function (n) {
    var t = {}, r = c.apply(e, o.call(arguments, 1));
    for (var u in n) w.contains(r, u) || (t[u] = n[u]);
    return t;
  }, w.defaults = function (n) {
    return A(o.call(arguments, 1), function (t) {
      if (t) for (var r in t) null == n[r] && (n[r] = t[r]);
    }), n;
  }, w.clone = function (n) {
    return w.isObject(n)
      ? w.isArray(n) ? n.slice() : w.extend({}, n)
      : n;
  }, w.tap = function (n, t) {
    return t(n), n;
  };
  var I = function (n, t, r, e) {
    if (n === t) return 0 !== n || 1 / n == 1 / t;
    if (null == n || null == t) return n === t;
    n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
    var u = l.call(n);
    if (u != l.call(t)) return !1;
    switch (u) {
      case'[object String]':
        return n == t + '';
      case'[object Number]':
        return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
      case'[object Date]':
      case'[object Boolean]':
        return +n == +t;
      case'[object RegExp]':
        return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase ==
          t.ignoreCase;
    }
    if ('object' != typeof n || 'object' != typeof t) return !1;
    for (var i = r.length; i--;) if (r[i] == n) return e[i] == t;
    r.push(n), e.push(t);
    var a = 0, o = !0;
    if ('[object Array]' == u) {
      if (a = n.length, o = a == t.length) for (; a-- && (o = I(n[a], t[a], r, e));) ;
    } else {
      var c = n.constructor, f = t.constructor;
      if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return !1;
      for (var s in n) if (w.has(n, s) && (a++, !(o = w.has(t, s) && I(n[s], t[s], r, e)))) break;
      if (o) {
        for (s in t) if (w.has(t, s) && !a--) break;
        o = !a;
      }
    }
    return r.pop(), e.pop(), o;
  };
  w.isEqual = function (n, t) {
    return I(n, t, [], []);
  }, w.isEmpty = function (n) {
    if (null == n) return !0;
    if (w.isArray(n) || w.isString(n)) return 0 === n.length;
    for (var t in n) if (w.has(n, t)) return !1;
    return !0;
  }, w.isElement = function (n) {
    return !(!n || 1 !== n.nodeType);
  }, w.isArray = x ||
    function (n) {
      return '[object Array]' == l.call(n);
    }, w.isObject = function (n) {
    return n === Object(n);
  }, A(
    ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'],
    function (n) {
      w['is' + n] = function (t) {
        return l.call(t) == '[object ' + n + ']';
      };
    }), w.isArguments(arguments) ||
  (w.isArguments = function (n) {
    return !(!n || !w.has(n, 'callee'));
  }), 'function' != typeof /./ &&
  (w.isFunction = function (n) {
    return 'function' == typeof n;
  }), w.isFinite = function (n) {
    return isFinite(n) && !isNaN(parseFloat(n));
  }, w.isNaN = function (n) {
    return w.isNumber(n) && n != +n;
  }, w.isBoolean = function (n) {
    return n === !0 || n === !1 || '[object Boolean]' == l.call(n);
  }, w.isNull = function (n) {
    return null === n;
  }, w.isUndefined = function (n) {
    return n === void 0;
  }, w.has = function (n, t) {
    return f.call(n, t);
  }, w.noConflict = function () {
    return n._ = t, this;
  }, w.identity = function (n) {
    return n;
  }, w.times = function (
    n, t, r) {
    for (var e = Array(n), u = 0; n > u; u++) e[u] = t.call(r, u);
    return e;
  }, w.random = function (n, t) {
    return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
  };
  var M = {escape: {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#x27;', '/': '&#x2F;'}};
  M.unescape = w.invert(M.escape);
  var S = {
    escape: RegExp('[' + w.keys(M.escape).join('') + ']', 'g'),
    unescape: RegExp('(' + w.keys(M.unescape).join('|') + ')', 'g')
  };
  w.each(['escape', 'unescape'], function (n) {
    w[n] = function (t) {
      return null == t ? '' : ('' + t).replace(S[n], function (t) {
        return M[n][t];
      });
    };
  }), w.result = function (n, t) {
    if (null == n) return null;
    var r = n[t];
    return w.isFunction(r) ? r.call(n) : r;
  }, w.mixin = function (n) {
    A(w.functions(n), function (t) {
      var r = w[t] = n[t];
      w.prototype[t] = function () {
        var n = [this._wrapped];
        return a.apply(n, arguments), D.call(this, r.apply(w, n));
      };
    });
  };
  var N = 0;
  w.uniqueId = function (n) {
    var t = ++N + '';
    return n ? n + t : t;
  }, w.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
  var T = /(.)^/, q = {'\'': '\'', '\\': '\\', '\r': 'r', '\n': 'n', '  ': 't', '\u2028': 'u2028', '\u2029': 'u2029'},
    B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  w.template = function (n, t, r) {
    var e;
    r = w.defaults({}, r, w.templateSettings);
    var u = RegExp([(r.escape || T).source, (r.interpolate || T).source, (r.evaluate || T).source].join('|') + '|$',
      'g'), i = 0, a = '__p+=\'';
    n.replace(u, function (t, r, e, u, o) {
      return a += n.slice(i, o).replace(B, function (n) {
        return '\\' + q[n];
      }), r &&
      (a += '\'+\n((__t=(' + r + '))==null?\'\':_.escape(__t))+\n\''), e &&
      (a += '\'+\n((__t=(' + e + '))==null?\'\':__t)+\n\''), u && (a += '\';\n' + u + '\n__p+=\''), i = o + t.length, t;
    }), a += '\';\n', r.variable ||
    (a = 'with(obj||{}){\n' + a + '}\n'), a = 'var __t,__p=\'\',__j=Array.prototype.join,' +
      'print=function(){__p+=__j.call(arguments,\'\');};\n' + a + 'return __p;\n';
    try {
      e = Function(r.variable || 'obj', '_', a);
    } catch (o) {
      throw o.source = a, o;
    }
    if (t) return e(t, w);
    var c = function (n) {
      return e.call(this, n, w);
    };
    return c.source = 'function(' + (r.variable || 'obj') + '){\n' + a + '}', c;
  }, w.chain = function (n) {
    return w(n).chain();
  };
  var D = function (n) {
    return this._chain ? w(n).chain() : n;
  };
  w.mixin(w), A(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (n) {
    var t = e[n];
    w.prototype[n] = function () {
      var r = this._wrapped;
      return t.apply(r, arguments), 'shift' != n && 'splice' != n || 0 !== r.length || delete r[0], D.call(this, r);
    };
  }), A(['concat', 'join', 'slice'], function (n) {
    var t = e[n];
    w.prototype[n] = function () {
      return D.call(this, t.apply(this._wrapped, arguments));
    };
  }), w.extend(w.prototype,
    {
      chain: function () {
        return this._chain = !0, this;
      }, value: function () {
        return this._wrapped;
      }
    });
}).call(this);

// editor

var t = function (msg) {
  return chrome.i18n.getMessage(msg);
};

var Clickup = function () {

  var clickup = this;

  this.$doc = $(document);
  this.$win = $(window);

};

var isEmail = function (str) {
  return str.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);
};

var isPassword = function (str) {
  return str.length >= 3 && str.length <= 100;
};

var issetVal = function (str) {
  return (str && str !== '');
};

var humanFileSize = function (bytes, si) {
  var thresh = si ? 1000 : 1024;
  if (bytes < thresh) return bytes + ' B';
  var units = si ? [t('KB'), t('MB'), t('GB'), t('TB'), 'PB', 'EB', 'ZB', 'YB'] : [
    t('kb'),
    t('mb'),
    t('gb'),
    t('tb'),
    'pb',
    'eb',
    'zb',
    'yb'];
  var u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (bytes >= thresh);
  return parseFloat(bytes.toFixed(1)) + ' ' + units[u];
};

$(function () {

  var imageData = store.get('screenshot');
  var i = new Image();

  i.onload = function () {
    data = {
      'msg': 'capturePage',
      'x': 0,
      'y': 0,
      'w': 0,
      'h': 0,
      'left': 0,
      'top': 0,
      'complete': 1,
      'ratio': 2,
      'time': 1522366132441
    };
    data.totalWidth = window.screen.availWidth;
    data.totalHeight = window.screen.availHeight;
    if (i.height > i.width) {
      data.h = (i.height < (window.outerHeight - 100)) ? i.height : (window.outerHeight - 100);
      data.w = data.h / i.height * i.width;
      if (data.w > window.outerWidth) {
        data.w = window.outerWidth * 0.95;
      }
    } else {
      if (i.width > (window.outerWidth * 0.90)) {
        data.w = window.outerWidth * 0.90;
      } else {
        data.w = i.width;
      }
      data.h = data.w / i.width * i.height;
    }

    if (!data) {
      return false;
    }

    clickup = new Clickup;

    editor = new Editor;
    editor.init(data);
  };

  i.src = imageData;

});

ClickupInEditor = true;

var Editor = function () {
};

var Shapes = {};

Shapes.brush = function () {

  return {

    mousedown: function (e) {
      editor.canvas.isDrawingMode = true;
      editor.brushDown = true;
    },

    mousemove: function (e, mouse) {
      editor.brushMouse = mouse;
      if (editor.shiftKey) {
        editor.canvas.isDrawingMode = false;
        if (editor.brushLine) {
          editor.brushLine.set({x2: mouse.x, y2: mouse.y});
          editor.canvas.renderAll();
        }
      } else {
        editor.brushLine && editor.canvas.remove(editor.brushLine);
        editor.canvas.isDrawingMode = true;
      }
    },

    mouseup: function (e) {

      editor.brushDown = false;
      editor.brushMouse = false;

      editor.canvas.isDrawingMode = true;

      // brushFinalize (e);

      editor.brushLine && editor.canvas.remove(editor.brushLine);
      editor.brushLine = null;

      setTimeout(function () {
        editor.canvas.renderAll();
      }, 500);

      editor.canvas.renderAll();
    }
  };

};

Shapes.rectangle = rectangle;

Shapes.ellipse = function () {

  return {

    aux: ['real'],

    mousedown: function (e, mouse, x, y) {

      var p = 'M' + x + ',' + y;

      this.elem = new fabric.Path(p, {
        fill: 'rgba(0,0,0,.1)',
        originX: 'center',
        originY: 'center'
      });

      this.elem.real = new fabric.Path(p, {
        fill: editor.fill,
        originX: 'center',
        originY: 'center'
      });

      extend(this.elem.real, true);

      add('ellipse_real', this.elem.real);

    },

    mousemove: function (e, mouse, x, y, w, h) {

      var elem = this.elem;

      if (editor.shiftKey) {
        w = h = Math.min(w, h);
      }

      if (w < 0) {
        w = Math.abs(w);
        x = x - w;
      }

      if (h < 0) {
        h = Math.abs(h);
        y = y - h;
      }

      this.save = [x, y, w, h];

      elem.path = elem.real.path = ellipsePath.apply(this, this.save);

    },

    mouseup: function (e, mouse, x, y) {

      if (!this.save) return;

      var elem = this.elem,
        s = this.save,
        x = s[0], y = s[1], w = s[2], h = s[3];

      var o = {
        width: w,
        height: h,
        left: x + w / 2,
        top: y + h / 2
      };

      elem.pathOffset = elem.real.pathOffset = {x: x, y: y};
      elem.set(o).real.set(o);

    },

    moving: function (e) {

      this.elem.real.set({
        left: e.target.left,
        top: e.target.top
      });

    },

    scaling: function (e, el) {

      var real = this.elem.real,
        t = e.target,
        w = t.width * t.scaleX,
        h = t.height * t.scaleY,
        po = t.pathOffset;

      real.path = ellipsePath(po.x, po.y, w, h);

      real.set({
        width: w,
        height: h,
        left: t.left,
        top: t.top
      });

    },

    rotating: function (e, el) {
      this.elem.real.setAngle(e.target.angle);
    }
  };

};

Shapes.line = function () {

  return {

    mousedown: function (e, mouse, x, y) {
      var elem = this.elem = new fabric.Line([x, y, x, y]);

      elem.set({
        originX: 'center',
        originY: 'center'
      });

      elem.translate = function (orig, x, y) {

        var mx = x - editor.canvas._currentTransform.ex,
          my = y - editor.canvas._currentTransform.ey;

        elem.set({
          x1: orig.x1 + mx,
          y1: orig.y1 + my,
          x2: orig.x2 + mx,
          y2: orig.y2 + my
        });

        editor.lc1.css({
          left: elem.x1,
          top: elem.y1
        });

        editor.lc2.css({
          left: elem.x2,
          top: elem.y2
        });

        elem.setCoords();

        // editor.canvas.renderAll()
      };
    },

    mousemove: function (e, mouse, x, y) {

      if (editor.shiftKey) {
        mouse = roundAngle(x, y, mouse.x, mouse.y);
      }

      this.elem.set({
        x2: mouse.x,
        y2: mouse.y
      });

    },

    mouseup: function (e) {

      var elem = this.elem;

      if (elem.x1 == elem.y1 && elem.x2 == elem.y2) {

      } else {
        elem._left = elem.left;
        elem._top = elem.top;
      }
      elem.setCoords();
    },

    transform: function (e, el) {

      if (editor.liveinterval) {
        clearInterval(editor.liveinterval);
      }

      editor.lc1.css({
        top: el.e.y1,
        left: el.e.x1
      });

      editor.lc2.css({
        top: el.e.y2,
        left: el.e.x2
      });

      editor.lcvisible = true;
      editor.lchover = true;
    }
  };
};

Shapes.blur = function () {

  return {

    aux: ['blurimg'],

    extend: function () {
      var elem = this.elem;
      elem.fill = editor.fill;
      elem.stroke = null;
      elem.strokeWidth = 0;
      elem.hasRotatingPoint = false;
      elem.blur = {};
      elem.blur.canvas = document.createElement('canvas');
      elem.blur.canvas.width = elem.width;
      elem.blur.canvas.height = elem.height;
      elem.blur.ctx = elem.blur.canvas.getContext('2d');
    },

    mousedown: function (e, mouse, x, y) {

      var elem = this.elem = new fabric.Rect({
        width: 0,
        height: 0,
        left: x,
        top: y,
        fill: editor.fill,
        originX: 'center',
        originY: 'center'
      });

    },

    mousemove: function (e, mouse, x, y, w, h) {
      mousemoveRect(this.elem, mouse, x, y, w, h, editor.mode);
      this.elem.hasControls = this.elem.hasBorders = false;
    },

    mouseup: function (e) {
      editor.blurer(this.elem);
      this.elem.hasControls = this.elem.hasBorders = false;
      prepareBlur();
    },

    controls: function (on) {
      this.elem.hasControls = this.elem.hasBorders = on;
    },

    selected: function () {
      var _this = this;
      this.controls(false);
      this.elem.blurimg.set({visible: false});
      prepareBlur();
      editor.front(this.elem);
      this.elem.blurimg.set({visible: true});
      this.controls(true);
      setTimeout(function () {
        editor.blurer(_this.elem);
      }, 10);
    },

    scaling: function (e) {
      this.elem.blur.canvas.width = this.elem.width * this.elem.scaleX;
      this.elem.blur.canvas.height = this.elem.height * this.elem.scaleY;
      editor.blurer(this.elem);
    },

    moving: function (e) {
      this.elem.set({
        left: e.target.left,
        top: e.target.top
      });
      editor.blurer(this.elem);
    },

    undo: function () {
      setTimeout(function () {
        prepareBlur();
      }, 50);
    },

    redo: function () {
      setTimeout(function () {
        prepareBlur();
      }, 50);
    },

    update: function () {
      prepareBlur();
      editor.blurer(this.elem);
    }
  };
};

Shapes.number = function () {

  var rect = new rectangle;

  return {

    aux: ['real', 'numbg', 'num'],

    extend: rect.extend,

    mousedown: rect.mousedown,

    mousemove: rect.mousemove,

    mouseup: function (e) {

      var elem = this.elem;

      rect.mouseup.apply(this, arguments);

      editor.numberCount = (editor.numberCount || 0) + 1;

      var pos = getNumberPos(elem);

      elem.numbg = new fabric.Ellipse({
        width: 22,
        height: 22,
        rx: 11,
        ry: 11,
        left: pos.x,
        top: pos.y,
        fill: editor.color,
        originX: 'center',
        originY: 'center',
        isnumbg: true
      });

      elem.num = new fabric.Text(editor.numberCount + '', {
        left: pos.x,
        top: pos.y,
        fill: '#fff',
        fontSize: 16,
        fontFamily: 'Arial',
        originX: 'center',
        originY: 'center',
        num: true
      });

      extend(elem.numbg, true);
      extend(elem.num, true);

      // elem.num.lockMovementX = elem.numbg.lockMovementX = true
      // elem.num.lockMovementY = elem.numbg.lockMovementY = true
      // elem.num.selectable = elem.numbg.selectable = true

      elem.num.stroke = elem.numbg.stroke = null;
      elem.num.eid = elem.numbg.eid = elem.eid;
      elem.num.isnum = elem.numbg.isnumbg = 1;

      editor.canvas.add(elem.numbg);
      editor.canvas.add(elem.num);

      editor.front(elem);
    },

    moving: function (e) {

      if (e.target.isnum || e.target.isnumbg) {

        var sim = e.target.isnum ? this.elem.numbg : this.elem.num;

        sim.set({
          left: e.target.left,
          top: e.target.top
        });

        var pos = getNumberDivPos(sim, this.elem);

        this.elem.set({
          left: pos.x,
          top: pos.y
        });

        this.elem.real.set({
          left: pos.x,
          top: pos.y
        });

        this.elem.setCoords();

      } else {
        rect.moving.apply(this, arguments);
        numberForElem(this.elem);
      }

      // rect.moving.apply(this, arguments)
      // numberForElem(this.elem)
    },

    scaling: function () {
      rect.scaling.apply(this, arguments);
      numberForElem(this.elem);
    },

    rotating: function () {
      rect.rotating.apply(this, arguments);
      numberForElem(this.elem);
    }

  };
};

Shapes.arrow = function () {

  return {

    extend: function () {
      this.elem.set({
        stroke: null,
        selection: false,
        selectable: false,
        lockMovementY: true,
        lockMovementX: true,
        hasControls: false,
        hasBorders: false,
        originX: 'center',
        originY: 'center'
      });
    },

    mousedown: function (e, mouse, x, y) {

      var elem = this.elem = new fabric.Path('M' + x + ',' + y, {
        stroke: null,
        fill: editor.color
      });

    },

    mousemove: function (e, mouse, x, y, w, h) {
      mousemoveArrows(this.elem, mouse, x, y, w, h, editor.mode);
    },

    mouseup: function (e, mouse, x, y, w, h) {
      mouseupArrows(this.elem, mouse, x, y, w, h, editor.mode);
    },

    transform: arrowTransform,

    selected: arrowSelected,

    moving: arrowMoving
  };

};

Shapes.text = function () {

  return {

    aux: ['text'],

    extend: function () {
      this.elem.set({
        stroke: null,
        selection: false,
        selectable: false,
        lockMovementY: true,
        lockMovementX: true,
        hasControls: false,
        hasBorders: false,
        originX: 'center',
        originY: 'center'
      });
    },

    mousemove: function (e, mouse, x, y, w, h) {
      // mousemoveArrows(this.elem, mouse, x, y, w, h, editor.mode);
    },

    mousedown: function (e, mouse, x, y) {
      if (e.target.editable) {
        // editor.setMode('transform');
        // $('[data-type="transform"]').click();
        this.elem2 = e.target;
      } else {
        var elem = this.elem = new fabric.Path('M' + x + ',' + y, {
          stroke: null,
          fill: editor.color
        });
      }
    },

    mouseup: function (e, mouse, x, y, w, h) {
      if (this.elem2) {
        this.elem2.enterEditing();
      } else {
        // fix scrollUp part 1
        var scrX1 = window.scrollX;
        var scrY1 = window.scrollY;

        var elem = this.elem;

        // mouseupArrows(this.elem, mouse, x, y, w, h, editor.mode);

        if (editor.shiftKey) {
          mouse = roundAngle(x, y, mouse.x, mouse.y);
        }

        var left = w < 0,
          top = h < 0,
          x1 = x,
          y1 = y,
          x2 = mouse.x,
          y2 = mouse.y,
          textAlign = 'center';

        var fontSize = editor.size / 100 * 300;

        if (fontSize < 8) {
          fontSize = 8;
        }

        var text = new fabric.IText('', {
          opacity: 1,
          left: x2,
          top: y2,
          cursorColor: 'rgba(0,0,0,.8)',
          cursorDelay: 1000,
          cursorDuration: 100,
          cursorWidth: 1,
          editable: true,
          fill: editor.color,
          fontSize: fontSize * 2,
          fontWeight: 'normal',
          fontFamily: 'Arial',
          originX: 'center',
          originY: 'center',
          backgroundColor: editor.substrate ? '#fff' : null
        });

        text.line = elem;
        text.eid = elem.eid;
        elem.text = text;

        extend(text);

        text.stroke = null;

        editor.canvas.add(text);

        editor.front(text);

        text.enterEditing();

        editor.canvas.setActiveObject(text);

        /// fix scrollUp part 2
        scrollTo(scrX1, scrY1);

        // editor.setMode('text');
      }
    },

    transform: arrowTransform,

    selected: function (e, el) {
      arrowSelected(e, el);
      // this.elem.text.enterEditing()
    },

    moving: arrowMoving
  };

};

Editor.prototype.init = function (data) {
  // console.log(data);
  var height = window.screen.availHeight > window.innerHeight ? window.screen.availHeight : window.innerHeight;
  var width = window.screen.width > window.innerWidth ? window.screen.width : window.innerWidth;
  document.getElementsByClassName('cu-content')[0].style.height = height + 'px';
  document.getElementsByClassName('cu-content')[0].style.minWidth = (window.innerWidth > 500) ? '100%' : (width + 'px');
  document.getElementsByClassName('cu-content')[0].style.paddingTop = '25px';
  document.getElementsByClassName('cu-content')[0].style.background = 'rgba(218, 218, 218, 0.85)';
  document.getElementsByClassName('cu-header')[0].style.display = 'none';
  window.scrollBy(window.innerWidth / 2, 0);
  var editor = this,
    ratio = 1;
  $.extend(this, {
    data: data,
    Shapes: {},
    redo: [],
    width: data.w || data.totalWidth || 300,
    height: data.h || data.totalHeight || 200,
    color: '#e60000',
    size: parseInt(store.get('size'), 10) || 3,
    maxSize: 20,
    substrate: store.get('substrate'),
    mode: store.get('cu-editor-mode') || 'brush',
    elements: [],
    elementz: {},
    fill: 'rgba(255,255,255,0.01)',
    toolsOff: {},
    x: 0, y: 0,
    ratio: ratio,
    $win: $(window),
    $doc: $(document),
    $tools: $('#tools'),
    $shot: $('#shot'),
    $menu: $('.menu').hide(),
    $done: $('.done-single'),
    $doneAdv: $('.done-advanced'),
    $canvasDiv: $('#canvas-div'),
    $canvas: $('#canvas'),
    $width: $('#width'),
    $widthSlider: $('.width-slider'),
    $widthField: $('.width-field'),
    $color: $('#color'),
    $substrate: $('#substrate'),
    $colorSlider: $('.color-slider')
  });

  this.$colorSliderIcon = this.$colorSlider.find('i');

  this.width = ~~(this.width / ratio);
  this.height = ~~(this.height / ratio);

  this.lc1 = $('<span class="lc"></span>').appendTo(this.$canvasDiv);
  this.lc2 = $('<span class="lc"></span>').appendTo(this.$canvasDiv);
  this.lcs = this.lc1.add(this.lc2);

  clickup.$done = $('.done');

  this.$menu.find('a').click(function () {
    editor.$menu.fadeOut(111);
  });

  this.$tools.find('.clickup-send').click(function () {
    editor.active = false;
    editor.canvas.deactivateAllWithDispatch();
    clickup.send({notice: true});
  }).find('b').html(t('clickup_send'));

  this.$tools.find('.clickup-save').click(function () {
    return editor.save(this);
  }).find('b').html(t('clickup_save'));

  this.$tools.find('[data-type="clickup-save"]').click(function () {
    return editor.save(this);
  });

  this.$tools.find('.clickup-copy').click(function () {
    return editor.copy();
  }).find('b').html(t('clickup_copy'));

  this.$substrate.find('span').html(t('substrate'));

  setTimeout(function () {
    editor.$tools.addClass('tools-transition');
  }, 20);

  editor.$tools.toggleClass('sub-hidden', store.get('subHidden') === 'hidden');
  editor.$tools.toggleClass('mode-text', editor.mode === 'text');

  if (editor.height >= editor.$win.height()) {
    editor.toolsOff[1] = editor.$win.height() - editor.$tools.height();
  } else {
    editor.toolsOff[1] = (editor.$win.height() - editor.height) / 2 + editor.height + 13;
  }

  if (editor.width >= editor.$win.width()) {
    editor.toolsOff[0] = editor.$win.width() - 700;
  } else {
    var tw = editor.$tools.width();
    editor.toolsOff[0] = (editor.$win.width() - editor.width) / 2 - (tw - editor.width + 85);
    if (tw > editor.width) {
      editor.toolsOff[0] += (tw - editor.width) / 2 + 42;
    }
  }

  // this.$tools.css({ top: editor.toolsOff[1], left: editor.toolsOff[0] });

  if (data) {

    this.$canvas.attr({
      width: this.width,
      height: this.height
    });

    this.$canvasDiv.css({
      width: this.width,
      height: this.height
    });

    this.$shot.css({
      width: this.width,
      height: this.height
    });
  }

  this.$win.resize(function () {
    editor.onResize();
  }).trigger('resize');

  this.$doneAdv.click(function () {
    editor.$menu.fadeToggle(111);
    editor.onResize();
  });

  this.$menu.add(editor.$doneAdv).mouseenter(function () {
    editor.$menu.hovered = true;
  }).mouseleave(function () {
    editor.$menu.hovered = false;
  });

  this.$doc.mousedown(function () {
    if (!editor.$menu.hovered) {
      editor.$menu.fadeOut(111);
    }
  });

  this.$doc.on('focus', 'input,textarea', function () {
    clickup.inputFocus = true;
  });
  this.$doc.on('blur', 'input,textarea', function () {
    clickup.inputFocus = false;
  });

  var canvas = this.canvas = window._canvas = new fabric.Canvas('canvas', {
    isDrawingMode: editor.mode === 'brush',
    moveCursor: 'move',
    hoverCursor: 'move',
    perPixelTargetFind: true,
    targetFindTolerance: 4,
    uniScaleTransform: true,
    selection: false // обязательно для рисования
  });

  /*  this.ias = this.$canvasDiv.imgAreaSelect({

      handles: true,
      borderWidth: 1,
      fadeSpeed: 0,
      keys: true,
      instance: true,
      enable: (this.mode=='crop'),

      onSelectEnd: function(img, selection) {

        var elem = selection,
            prev = {
              x1: Math.abs(parseInt(editor.$canvasDiv.css('left'),10)),
              y1: Math.abs(parseInt(editor.$canvasDiv.css('top'),10)),
              width: editor.$shot.width(),
              height: editor.$shot.height()
            };


        if (!(elem.x1==prev.x1 &&
            elem.y1==prev.y1 &&
            elem.width==prev.width &&
            elem.height==prev.height) &&
            elem.width>0 && elem.height>0
        ) {

          editor.toCrop = {
            elem: elem,
            prev: prev
          }

        }

        else {
          editor.toCrop = false
        }
      }
    });




    editor.ias.setSelection(0, 0, 0, 0)*/

  var $buttons = $('.button');
  $buttons.removeClass('active').filter('.' + editor.mode).addClass('active');

  $buttons.each(function () {
    var $b = $(this),
      data = $b.data(),
      title = '',
      btitle = t(data.type + '_title');

    data.info = t(data.type + '_info');
    data.small = t(data.type + '_small');

    if (btitle && $.trim(btitle) != '') {
      title += '<b>' + btitle + '</b>';
    }
    if (data.info !== '') {
      title += '<span>' + data.info + '</span>';
    }
    if (data.small !== '') {
      title += '<small>' + data.small + '</small>';
    }

    /*if (title && title!="") {
      $b.tipsy({
        html: true,
        gravity: "s",
        title: function() {
          return title
        }
      })
    }*/
  });

  $('.undo').click(function () {
    stepUndo();
  });
  $('.redo').click(function () {
    stepRedo();
  });

  editor.$substrate.click(function () {
    var substrate = $(this).toggleClass('active').hasClass('active');
    editor.substrate = substrate;
    store.set('substrate', substrate);

    if (editor.active && editor.active.e.text) {
      editor.active.substrate = substrate;
      editor.active.e.text.set({backgroundColor: substrate ? '#fff' : null});
      editor.canvas.renderAll();
    }

  }).toggleClass('active', editor.substrate);

  $buttons.click(function () {
    $buttons.removeClass('active');
    var tool = $(this).addClass('active').data('type');
    editor.setMode(tool);

  });

  // screenshoot

  var shot = new Image(),
    src = store.get('screenshot');

  shot.src = src;
  fabric.Image.fromURL(src, function (img) {

    transformDisable(img);

    img.set({
      width: editor.width,
      height: editor.height
    });

    img.isbg = true;

    editor.canvas.add(img);

    setTimeout(function () {
      editor.mode === 'blur' && prepareBlur();
    }, 50);

  });

  // Brush
  if (editor.canvas.freeDrawingBrush) {
    editor.canvas.freeDrawingBrush.color = editor.color;
    editor.canvas.freeDrawingBrush.width = editor.size;
  }

  this.lcInit();
  this.observe();
  this.seeks();
  this.drags();
};

Editor.prototype.observe = function () {

  var editor = this;

  editor.canvas.observe('mouse:down', mousedown);
  editor.canvas.observe('mouse:move', mousemove);
  editor.canvas.observe('mouse:up', mouseup);
  editor.canvas.observe('path:created', function (e) {
    pathcreated(e);
  });

  editor.canvas.observe('object:selected', selected);
  editor.canvas.observe('object:moving', moving);
  editor.canvas.observe('object:scaling', scaling);
  editor.canvas.observe('object:rotating', rotating);

  function scaling(e) {

    var el = getElement(e);

    if (el) {
      editor.active = el;
      if (el.shape && el.shape.scaling) {
        el.shape.scaling(e, el);
      }
    }

  }

  function rotating(e) {

    var el = getElement(e);

    if (el) {

      editor.active = el;

      if (el.shape && el.shape.rotating) {
        el.shape.rotating(e, el);
      }

    }

  }

  function moving(e) {

    var el = getElement(e);

    if (el) {
      editor.active = el;
      el.shape && el.shape.moving && el.shape.moving(e, el);
    }

  }

  function selected(e) {

    var el = getElement(e);

    var width = editor.$width.data('seek'),
      color = editor.$color.data('seek');

    if (el) {

      editor.active = el;
      editor.hold = el;

      unblur(el);

      el.shape && el.shape.selected && el.shape.selected(e, el);

      width.val(el.currentSize, true);
      color.val(el.currentColor, true);

      colorFromVal(el.currentColor);

      editor.$tools.toggleClass('mode-text', el.t === 'text_arrow');

      editor.$substrate.toggleClass('active', !!el.substrate);

    } else {
      editor.$tools.removeClass('mode-text');
    }

    color.update();
  }

  function mousedown(e) {

    if (editor.mode == 'transform') {
      var el = getElement(e);
      if (el) {
        editor.active = el;
      }
    }

    if (editor.hold) {
      return false;
    }

    if (e.target && e.target.isbg) {
      editor.active = false;
    }

    var Shape = Shapes[editor.mode],
      mouse = editor.canvas.getPointer(e.e),
      isArrow = (editor.mode == 'arrow' || editor.mode == 'text'),
      _mode = editor.mode;

    editor.x = mouse.x;
    editor.y = mouse.y;

    if (!Shape) {
      return false;
    }

    editor.shape = new Shape;

    editor.shape.mousedown && editor.shape.mousedown(e, mouse, editor.x, editor.y);

    var elem = editor.shape.elem;

    if (elem) {

      elem.mode = editor.mode;

      editor.current = elem;

      extend(elem, true);

      var el = add(_mode, elem, true);

      el.shape = editor.shape;

      editor.shape.el = el;

      editor.active = el;

      editor.shape.extend && editor.shape.extend();

    }

  }

  function mousemove(e) {

    var _mode = editor.mode;

    var el = getElement(e);

    if (editor.mode == 'transform' && el && !editor.currentLC) {

      editor._active = el;

      if (el.shape && el.shape.transform) {
        el.shape.transform(e, el);
      }

    } else {

      /* прячем кругляшки */
      if (editor.lcvisible && !editor.lchover) {

        editor.liveinterval && clearInterval(editor.liveinterval);

        !editor.lchover && editor.lcs.css({top: -9999, left: -9999});

      }

      editor.lchover = false;

    }

    var mouse = editor.canvas.getPointer(e.e),
      w = mouse.x - editor.x,
      h = mouse.y - editor.y;

    editor.shape && editor.shape.mousemove && editor.shape.mousemove(e, mouse, editor.x, editor.y, w, h);

    editor.canvas.renderAll();
  }

  function mouseup(e) {

    var mouse = editor.canvas.getPointer(e.e),
      w = mouse.x - editor.x,
      h = mouse.y - editor.y,
      angle = null,
      elem = editor.current;

    if (editor.active) {

      var el = editor.active;

      if (el.moved) {

        $.extend(el.e, el.moved);
        setArrowPath(el);
        el.moved = false;

        editor.canvas.renderAll();

      }

      el._left = el.e.left;
      el._top = el.e.top;

    }

    if (editor.hold) {
      editor.hold = false;
      return false;
    }

    if (!editor.shape) {
      return false;
    }

    var elem = editor.shape.elem;

    editor.shape.mouseup && editor.shape.mouseup(e, mouse, editor.x, editor.y, w, h);

    elem && elem.setCoords && elem.setCoords();

    editor.current = false;

    editor.shape = false;

    editor.canvas.renderAll();

  }

  editor.$doc.keydown(function (e) {

    var UP = 38,
      DOWN = 40,
      LEFT = 37,
      RIGHT = 39,
      KEY = e.which,
      meta = (e.ctrlKey || e.metaKey);

    var activeObject = editor.canvas.getActiveObject(),
      isEditableText = activeObject && activeObject.text && activeObject.isEditing;

    if (KEY === 27) {
      window.close();
    }

    var inp = isEditableText || clickup.inputFocus;

    // sending to clickup
    if (KEY == 13 && meta) {
      clickup.send({notice: true});
    }

    // ctrl+s
    if (KEY == 83 && meta && editor.shiftKey) {
      e.preventDefault();
      return editor.save($('.clickup-save')[0]);
      return false;
    }

    // ctrl+c
    if (!inp && KEY == 67 && meta) {
      editor.copy();
      return false;
    }

    // delete || backspace
    if (!inp && (KEY == 46 || KEY == 8)) {

      var el = editor.active;

      if (el && !el.deleted) {
        el.undo();
        add('delete', {undo: el.redo, redo: el.undo, el: el}, true);
        el.deleted = true;
      }

    }

    // space
    if (!inp && KEY == 32) {
      if (editor.mode == 'transform') {
        if (editor.prevmode) {
          $buttons.filter('.' + editor.prevmode).click();
        }
      } else {
        $buttons.filter('.transform').click();
      }

      return false;
    }

    // ctrl+z
    if (!inp && KEY == 90 && meta && !editor.shiftKey) {
      stepUndo();
      return false;
    }

    // ctrl+y
    if (!inp && KEY == 89 && meta) {
      stepRedo();
      return false;
    }

    // ctrl+shift+z
    if (!inp && KEY == 90 && meta && editor.shiftKey) {
      stepRedo();
      return false;
    }

    // arrows
    if (!inp && (KEY == UP || KEY == DOWN || KEY == LEFT || KEY == RIGHT)) {

      if (editor.active) {

        var el = editor.active,
          m = 1,
          set = {},
          mx = 0;
        my = 0;

        if (editor.shiftKey) {
          m = 10;
        }

        if (KEY == UP) {
          set = {top: el.e.top - m};
          my = -m;
        }
        if (KEY == DOWN) {
          set = {top: el.e.top + m};
          my = m;
        }
        if (KEY == LEFT) {
          set = {left: el.e.left - m};
          mx = -m;
        }
        if (KEY == RIGHT) {
          set = {left: el.e.left + m};
          mx = m;
        }

        if (el.t === 'line' || el.t === 'arrow') {

          set = {
            x1: el.e.x1 + mx,
            y1: el.e.y1 + my,
            x2: el.e.x2 + mx,
            y2: el.e.y2 + my
          };

          editor.lc1.css({
            top: set.y1,
            left: set.x1
          });

          editor.lc2.css({
            top: set.y2,
            left: set.x2
          });

        }

        el && el.e && el.e.set(set);

        if (el.t == 'arrow') {
          setArrowPath(el);
        }

        editor.canvas.renderAll();

        return false;

      }
    }

    // editor.shiftKey ?
    if (KEY == 16) {
      editor.shiftKey = e.shiftKey;
    }

    if (editor.brushDown && editor.shiftKey) {

      if (editor.brushLine) {
        editor.canvas.remove(editor.brushLine);
      }

      if (editor.brushMouse) {

        editor.brushLine = new fabric.Line([
          editor.brushMouse.x, editor.brushMouse.y,
          editor.brushMouse.x, editor.brushMouse.y
        ]);

        extend(editor.brushLine, true);

        editor.brushLine.set({
          originX: 'center',
          originY: 'center'
        });

        editor.canvas.add(editor.brushLine);
        editor.canvas.renderAll();
      }
    }

  });

  editor.$doc.keyup(function (e) {

    if (editor.mode == 'brush') {
      editor.canvas.isDrawingMode = true;
    }

    // editor.shiftKey ?
    if (e.which == 16) {
      editor.shiftKey = e.shiftKey;
      if (editor.mode == 'brush') {
        editor.canvas.isDrawingMode = true;
      }
    }

    if (editor.brushLine) {
      editor.canvas.remove(editor.brushLine);
    }
  });

};

Editor.prototype.setMode = function (mode) {

  var editor = this,
    prev = editor.mode,
    trans = mode === 'transform';

  editor.lcs.css({top: -9999, left: -9999});
  editor.hold = false;

  if (editor.active && editor.active.e && editor.active.e.text) {
    editor.active.e.text.exitEditing();
    editor.canvas.discardActiveObject();
  }

  editor.canvas.deactivateAllWithDispatch();

  if (trans) {
    editor.prevmode = editor.mode;
  }

  editor.mode = mode;
  if (['brush', 'line', 'arrow', 'text', 'ellipse', 'rectangle', 'blur', 'number'].indexOf(mode) !== -1) {
    store.set('cu-editor-mode', mode);
  }

  editor.active = false;

  editor.$tools.toggleClass('mode-text', editor.mode === 'text');

  editor.$color.data('seek').update();

  var cropmode = (editor.mode == 'crop');

  if (cropmode) {

    editor.$shot.css({
      width: editor.width,
      height: editor.height
    });
    editor.$canvasDiv.css({
      top: 0,
      left: 0
    });
    editor.onResize();
  } else {

    prev === 'crop' && editor.doCrop();

  }

  if (editor.ias) {
    editor.ias.setOptions({
      disable: !cropmode,
      enable: cropmode,
      hide: !cropmode,
      show: cropmode
    });
    editor.ias.update();
  }

  editor.canvas.defaultCursor = Shapes[editor.mode] ? 'crosshair' : 'default';

  editor.canvas.isDrawingMode = editor.mode === 'brush';

  _.each(editor.elements, function (elem) {
    trans ? transformEnable(elem.e, elem.t) : transformDisable(elem.e, elem.t);
  });

  editor.mode === 'blur' && setTimeout(function () {
    prepareBlur();
  }, 50);

  editor.$width.add(color).toggle(editor.mode !== 'blur' && editor.mode !== 'crop');
};

Editor.prototype.seeks = function () {

  var editor = this;

  editor.$width.seekslider({
    slider: editor.$widthSlider,
    max: editor.maxSize,
    value: editor.size,
    bar: editor.$widthField,
    min: 1,
    slide: function (a, b) {

      editor.size = Math.ceil(a.value);
      store.set('size', editor.size);
      editor.canvas.freeDrawingBrush.width = editor.size;

      if (editor.active) {

        var el = editor.active;

        el.e.stroke && el.e.set({
          strokeWidth: editor.size
        });

        el.e.real && el.e.real.set({
          strokeWidth: editor.size
        });

        if (el.t === 'arrow') {
          el.currentSize = editor.size;
          setArrowPath(el);
        }

        if (el.t === 'text' && el.e.text) {
          var fontSize = editor.size / 100 * 300 * 2;
          if (fontSize < 8) {
            fontSize = 8;
          }
          el.e.text.set({
            fontSize: fontSize
          });
        }

        el.t === 'number' && numberForElem(el.e);

        el.currentSize = editor.size;

        editor.canvas.renderAll();
      }
    }
  });

  var c = store.get('color');

  editor.$color.seekslider({
    slider: editor.$colorSlider,
    max: 360,
    value: c,
    min: 0,
    slide: function (a, b) {
      colorFromVal(a.value);
    }
  });

  colorFromVal(c || 0);

};

Editor.prototype.lcInit = function () {

  var editor = this;

  editor.lc1.mousedown(function () {
    editor.clc = 1;
    editor.currentLC = editor.lc1;
    editor.active = editor._active;
    unblur(editor.active);
    editor._active = null;
  });

  editor.lc2.mousedown(function () {
    editor.clc = 2;
    editor.currentLC = editor.lc2;
    editor.active = editor._active;
    unblur(editor.active);
    editor._active = null;
  });

  editor.lcs.mouseenter(function () {
    editor.lchover = true;
  });

  editor.$doc.mousemove(function (e) {

    if (editor.clc && editor.currentLC) {

      var offset = editor.$canvasDiv.offset();

      var pos = {
        left: e.pageX - offset.left,
        top: e.pageY - offset.top
      };

      editor.currentLC.css(pos);

      if (editor.active) {

        var el = editor.active;

        editor.lchover = true;

        if (el.t == 'line') {

          if (editor.clc == 1) {
            el.e.set({
              x1: pos.left,
              y1: pos.top
            }).setCoords();
          }

          if (editor.clc == 2) {
            el.e.set({
              x2: pos.left,
              y2: pos.top
            }).setCoords();
          }

        }

        if (el.t == 'arrow') {

          if (editor.clc == 1) {
            el.e.x1 = pos.left;
            el.e.y1 = pos.top;
          }

          if (editor.clc == 2) {
            el.e.x2 = pos.left;
            el.e.y2 = pos.top;
          }

          setArrowPath(el);

          el._left = el.e.left;
          el._top = el.e.top;

        }

        editor.canvas.renderAll();

      }
    }
  });

  editor.$doc.mouseup(function () {

    if (editor.clc && editor.active) {

      var el = editor.active;

      if (el.t == 'arrow') {

        el.e.set(arrowDimensions(el.e));

      }
    }

    editor.clc = 0;
    editor.currentLC = false;

  });

};

Editor.prototype.drags = function () {

  var editor = this,
    drag = {};

  editor.$tools.mousedown(function (e) {

    if (e.target.className === 'move-handle') {

      document.body.onselectstart = function () {
        return false;
      };

      editor.$tools.removeClass('tools-transition');

      var off = editor.$tools.offset();

      drag.on = true;
      drag.sx = editor.$win.scrollLeft();
      drag.sy = editor.$win.scrollTop();
      drag.ox = e.pageX - off.left + drag.sx;
      drag.oy = e.pageY - off.top + drag.sy;

      return false;

    }
  });

  /*  editor.$doc.mousemove(function (e) {

    if (drag.on) {
      var pos = {

        top: e.pageY-drag.oy,
        left: e.pageX-drag.ox
      }
      editor.$tools.css({
        top: pos.top,
        left: pos.left
      })

      drag.off = pos.left+'x'+pos.top
      return false
    }
  })*/

  /* Tools drag */

  editor.$doc.mouseup(function () {
    if (drag.on) {
      document.body.onselectstart = null;
      editor.$tools.addClass('tools-transition');
      drag.on = false;
      store.set('toolspos', drag.off);
      editor.onResize();
      return false;
    }
    drag.on = false;
  });

  $('.sub-toggle').on('click', function () {
    var vis = editor.$tools.toggleClass('sub-hidden').hasClass('sub-hidden');
    store.set('subHidden', vis ? 'hidden' : 'visible');
    setTimeout(function () {
      editor.onResize();
    }, 300);
  });

};

Editor.prototype.front = function (elem) {
  return this.canvas.bringToFront(elem);
},
  Editor.prototype.back = function (elem) {
    this.canvas.sendToBack(elem);
  },
  Editor.prototype.indexOf = function (elem) {
    return this.canvas.getObjects().indexOf(elem);
  };

Editor.prototype.copy = function (text) {

  var copyDiv = document.createElement('div');
  copyDiv.contentEditable = true;
  document.body.appendChild(copyDiv);
  copyDiv.unselectable = 'off';
  copyDiv.innerHTML = text || '<img src="' + canvas.toDataURL() + '">';
  copyDiv.style.position = 'fixed';
  copyDiv.style.top = '50%';
  copyDiv.focus();
  document.execCommand('SelectAll');
  document.execCommand('Copy', false, null);
  document.body.removeChild(copyDiv);
  if (!text) {
    clickup.bg.clickup.notify({
      title: t('screenshot_copied'),
      message: ' '
    });
  }
};

Editor.prototype.save = function (a) {
  var url = window.URL || window.webkitURL || window.mozURL || window.msURL;
  // a.download = clickup.fakeFileName();

  var tmp = editor.canvas;

  /*if (editor.toCrop && editor.toCrop.elem) {
    tmp = editor.crop();
  }*/
  chrome.storage.local.set({screenshot: tmp.toDataURL()}, function () {
    document.location = chrome.runtime.getURL('index.html#screenshot');
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {'editor': 'close'});
      console.log('closed');
      tmp.dispose();
      tmp = null;
    });
  });

  a.href = url.createObjectURL(window.dataURLtoBlob(tmp.toDataURL(), 'png'));
  return false;
};

Editor.prototype.crop = function () {

  var tmp,
    crop = editor.toCrop.elem,
    toCrop = new Image();

  toCrop.src = editor.canvas.toDataURL();
  tmp = document.createElement('canvas');
  tmp.width = crop.width;
  tmp.height = crop.height;

  var ctx = tmp.getContext('2d');
  ctx.drawImage(toCrop, -crop.x1, -crop.y1);

  return tmp;

};

Editor.prototype.doCrop = function () {

  if (editor.toCrop) {

    editor.$shot.css({
      width: editor.toCrop.elem.width,
      height: editor.toCrop.elem.height
    });

    editor.$canvasDiv.css({
      left: -editor.toCrop.elem.x1,
      top: -editor.toCrop.elem.y1
    });

    editor.ias.update();

    add('crop', editor.toCrop.elem, true, editor.toCrop.prev);

    editor.onResize();

  }
};

Editor.prototype.onResize = function () {

  var winHeight = editor.$win.height(),
    winWidth = editor.$win.width(),
    scrTop = editor.$win.scrollTop();

  var shotHeight = editor.$shot.height();
  if (winHeight > shotHeight) {
    editor.$shot.css({marginTop: (winHeight - shotHeight) / 2});
  } else {
    editor.$shot.css({marginTop: 0});
  }

  var width = editor.$tools.width() + 100,
    height = editor.$tools.height(),
    left = parseInt(editor.$tools.css('left'), 10),
    top = parseInt(editor.$tools.css('top'), 10);

  top = top + height > winHeight ? winHeight - height : top;
  top = top < 0 ? 0 : top;

  left = left + width > winWidth ? winWidth - width : left;
  left = left < 0 ? 0 : left;

  /*editor.$tools.css({
    left: left,
    top: top
  })*/

  editor.canvas && editor.canvas.calcOffset();

  var spaceBottom = winHeight - (top + height),
    spaceTop = top;

  if (spaceBottom > spaceTop || spaceBottom + 30 >= editor.$menu.height()) {
    editor.$menu.removeClass('menu-top');
  } else {
    editor.$menu.addClass('menu-top');
  }

  editor.$win.trigger('resize.mrnix');
};

Editor.prototype.blurer = function (elem) {

  var editor = this,
    w = elem.width * elem.scaleX,
    h = elem.height * elem.scaleY;

  elem.blur.width = w;
  elem.blur.height = h;

  if (w > 0 && h > 0) {

    elem.blur.ctx.drawImage(editor.toBlur, -elem.left + (w / 2), -elem.top + (h / 2));

    stackBlurCanvasRGB(elem.blur.canvas, 0, 0, w, h, 10, elem.blur.canvas);

    fabric.Image.fromURL(elem.blur.canvas.toDataURL(), function (img) {

      editor.canvas.remove(elem.blurimg);

      elem.blurimg = img;
      elem.blurimg.eid = elem.eid;

      img.set({
        top: elem.top,
        left: elem.left,
        originX: 'center',
        originY: 'center'
      });

      extend(img);

      img.stroke = null;
      img.strokeWidth = 0;

      transformDisable(img);

      editor.canvas.add(img);

      var index = editor.indexOf(elem);

      editor.canvas.moveTo(img, index);

    });
  }
};

function stepUndo() {
  var last = _.last(editor.elements);
  if (last) {
    last.undo();
    editor.redo.push(last);
    editor.elements.pop();
  }
}

function stepRedo() {
  var last = _.last(editor.redo);
  if (last) {
    last.redo();
    editor.elements.push(last);
    editor.redo.pop();
  }
}

function prepareBlur(from) {

  var objects = [];

  editor.toBlur = new Image();
  editor.toBlur.src = editor.canvas.toDataURL();

}

function setArrowPath(el) {

  var p = arrowPath(el.e.x1, el.e.y1, el.e.x2, el.e.y2, el.currentSize);
  el.e.set({path: p});
  mouseupArrows(el.e);
  el.e.path = el.e._parsePath();

}

function transformEnable(elem, type) {

  if (!elem) return;

  var o = {
    selectable: true,
    selection: true,
    perPixelTargetFind: true,
    lockMovementX: false,
    lockMovementY: false,
    lockUniScaling: false,
    hasControls: true,
    hasBorders: true,
    editable: true
  };

  if (elem.type === 'line' || type === 'arrow' || elem.lc) {
    o.hasControls = o.hasBorders = false;
  }

  elem.set && elem.set(o);

  type === 'text_arrow' && transformEnable(elem.text);

  if (elem.blurimg) {
    // transformEnable(elem.blurimg)
    elem.blurimg.hasControls = elem.blurimg.hasBorders = false;
  }

  if (type === 'number') {
    transformEnable(elem.numbg);
    transformEnable(elem.num);
    elem.numbg.hasControls = elem.numbg.hasBorders = false;
    elem.num.hasControls = elem.num.hasBorders = false;
  }

  elem.setCoords && elem.setCoords();
  elem.real && elem.real.setCoords();

}

function transformDisable(elem) {

  elem && elem.set && elem.set({
    selectable: false,
    selection: false,
    lockMovementX: true,
    lockMovementY: true,
    hasControls: false,
    hasBorders: false,
    editable: false
  });

  elem.real && transformDisable(elem.real);
  elem.text && transformDisable(elem.text);

}

function arrowMoving(e, el) {

  var w = el.e.left - el._left,
    h = el.e.top - el._top;

  el.moved = {
    x1: el.e.x1 + w,
    y1: el.e.y1 + h,
    x2: el.e.x2 + w,
    y2: el.e.y2 + h
  };

  editor.lc1.css({
    top: el.moved.y1,
    left: el.moved.x1
  });

  editor.lc2.css({
    top: el.moved.y2,
    left: el.moved.x2
  });

}

var arrowSelected = function (e, el) {

  el._left = el.e.left;
  el._top = el.e.top;
  el.moved = false;

};

var arrowTransform = function (e, el) {

  if (editor.liveinterval) {
    clearInterval(editor.liveinterval);
  }

  if (!editor.hold && !el.moved) {
    editor.lc1.css({
      top: el.e.y1,
      left: el.e.x1
    });
    editor.lc2.css({
      top: el.e.y2,
      left: el.e.x2
    });
  }

  editor.lcvisible = editor.lchover = true;

};

var arrowDimensions = function (elem) {

  var points = [
      {x: elem.x1, y: elem.y1},
      {x: elem.x2, y: elem.y2}
    ],
    minX = fabric.util.array.min([elem.x1, elem.x2]),
    minY = fabric.util.array.min([elem.y1, elem.y2]),
    maxX = fabric.util.array.max([elem.x1, elem.x2]),
    maxY = fabric.util.array.max([elem.y1, elem.y2]),
    deltaX = maxX - minX,
    deltaY = maxY - minY,
    w = elem.x2 - elem.x1,
    h = elem.y2 - elem.y1;

  var set = {
    left: minX + deltaX / 2,
    top: minY + deltaY / 2,
    width: deltaX,
    height: deltaY
  };

  return set;
};

var nearest = function (r) {

  if (r >= 0 && r < 22.5) {
    d = 0;
  }
  if (r >= 22.5 && r < 67.5) {
    d = 45;
  }
  if (r >= 67.5 && r < 112.5) {
    d = 90;
  }
  if (r >= 112.5 && r < 157.5) {
    d = 135;
  }
  if (r >= 157.5) {
    d = 180;
  }

  return d;
};

var getNumberPos = function (elem) {
  elem.setCoords();
  return elem.oCoords.br;
};

var getNumberDivPos = function (num, elem) {
  return {
    x: num.left - elem.width / 2,
    y: num.top - elem.height / 2
  };
};

var linked = function (elem, callback) {
  _.each(['arrow', 'text', 'real', 'numbg', 'num', 'blurimg'], function (e) {
    elem[e] && callback(elem[e], e);
  });
};

var unblur = function (el, callback) {

  if (!el || !el.e) return;

  var blurs = _.where(editor.elements, {t: 'blur'}),
    index = editor.indexOf(el.e),
    objects = editor.canvas.getObjects(),
    over = objects.slice(index),
    ids = _.pluck(over, 'eid'),
    uids = _.unique(ids);

  var blurs = $.map(uids, function (eid) {
    var el = editor.elementz[eid];
    if (el && el.t === 'blur') {
      return el;
    }
  });

  if (!blurs.length) {
    return;
  }

  el.shape && el.shape.aux && _.each(el.shape.aux, function (aux) {
    el.e[aux] && editor.front(el.e[aux]) && el.e[aux].set({visible: false});
  });

  editor.front(el.e);
  el.e.set({visible: false});

  _.each(over, function (elem) {
    if (elem.eid === el.id) {
      return;
    }
    elem.set({visible: false});
  });

  _.each(uids, function (eid, i) {

    if (eid === el.id) {
      return;
    }
    var _el = editor.elementz[eid];
    _el.shape && _el.shape.update && _el.shape.update();
    _el.shape && _el.shape.aux && _.each(_el.shape.aux, function (aux) {
      _el.e[aux] && _el.e[aux].set({visible: true});
    });
    _el.e.set({visible: true});
  });

  el.e.set({visible: true});
  el.shape && el.shape.aux && _.each(el.shape.aux, function (aux) {
    el.e[aux] && el.e[aux].set({visible: true});
  });

};

function extend(elem, lockscaling) {

  if (!elem.set) {
    return false;
  }

  var o = {
    stroke: editor.color,
    strokeWidth: editor.size,
    strokeLineCap: 'round',
    lockUniScaling: false
  };

  elem.set(o);

  if (elem.real) {
    elem.set(o).set({
      opacity: .05,
      stroke: null,
      strokeWidth: 0
    });
    elem.real.set(o);
  }

  lockscaling ? transformDisable(elem) : transformEnable(elem);

}

function add(type, elem, pushing, prev) {

  if (type !== 'brush' && type !== 'crop' && type !== 'delete') {
    editor.canvas.add(elem);
  }

  if (pushing) {

    var eid = editor.eid = (editor.eid || 0) + 1;

    elem.eid = eid;

    if (elem.real) {
      elem.real.eid = elem.eid;
    }

    var el = {t: type, e: elem, id: eid};

    editor.elements.push(el);
    editor.elementz[editor.eid] = el;

    editor.active = el;

    // обнуляем историю redo
    editor.redo = [];

    if (type === 'text_arrow') {
      el.substrate = editor.substrate;
    }

    if (type === 'crop') {

      el.undo = function () {

        editor.$shot.css({
          width: prev.width,
          height: prev.height
        });

        editor.$canvasDiv.css({
          top: prev.y1,
          left: prev.x1
        });

        editor.onResize();
      };

      el.redo = function () {

        editor.$shot.css({
          width: elem.width,
          height: elem.height
        });

        editor.$canvasDiv.css({
          top: -elem.y1,
          left: -elem.x1
        });

        editor.onResize();
      };
    } else if (type === 'delete') {

      el.undo = function () {
        elem.el.redo();
        elem.deleted = false;
      };

      el.redo = function () {
        elem.el.undo();
        elem.deleted = true;
      };

    } else {

      el.undo = function () {

        editor.lcs.css({top: -9999, left: -9999});
        if (this.e.hasOwnProperty('num')) {
          editor.numberCount = parseInt(this.e.num.text) - 1;
        }
        editor.canvas.remove(this.e);

        linked(this.e, function (e) {
          editor.canvas.remove(e);
        });

        el.shape && el.shape.undo && el.shape.undo();
      };

      el.redo = function () {
        if (this.e.hasOwnProperty('num')) {
          editor.numberCount = editor.numberCount + 1;
        }

        editor.canvas.add(this.e);

        linked(this.e, function (e) {
          editor.canvas.add(e);
        });

        el.shape && el.shape.redo && el.shape.redo();
      };

      el.currentSize = parseInt(editor.size, 10);
      el.currentColor = parseInt(store.get('color'), 10);
    }

    return el;

  }
}

var pathcreated = _.debounce(function (e) {

  var path = e.path;

  add('brush', path, true);

  extend(path, true);

}, 10, true);

function getElement(e) {
  if (e && e.target && e.target.eid && editor.elementz[e.target.eid]) {
    return editor.elementz[e.target.eid];
  }
  return false;
}

function rpap(rp, cp, angle) {
  var p = {},
    l = Math.sqrt(Math.pow(rp.x - cp.x, 2) + Math.pow(rp.y - cp.y, 2)),
    b = Math.atan((rp.y - cp.y) / (rp.x - cp.x));
  p.x = cp.x + l * Math.cos(angle + b);
  p.y = cp.y + l * Math.sin(angle + b);
  return p;
}

function arrowPath(x0, y0, x1, y1, size) {
  if (!size || size < 4) {
    size = 4;
  }
  var p1 = {x: x0, y: y0},
    p2 = {x: x1, y: y1},
    width = size,
    l = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)),
    h = Math.floor(0.6 * width),
    minim = 12 * h;

  if (l < minim) {
    h *= (l / minim);
  }

  var diameter = 1.2 * h,
    PI = Math.PI,
    alpha = -(Math.PI / 2) - Math.atan2(p1.x - p2.x, p1.y - p2.y),
    sin = Math.sin(PI / 6),
    cos = Math.cos(PI / 6),
    tan = Math.tan(PI / 6),
    p3 = {x: p1.x + l, y: p1.y},
    a = alpha;

  var c1 = {x: p1.x, y: p1.y + 1},
    c2 = {x: p3.x - h / tan - 1.25 * h / tan, y: p3.y + 1.25 * h},
    c3 = {x: c2.x - 4 * h * cos / 3, y: c2.y + 4 * h * sin / 3},
    c4 = {x: c3.x + 0.5 * diameter * sin, y: c3.y + 0.5 * diameter * cos},
    c5 = {x: c3.x + diameter * sin, y: c3.y + diameter * cos},
    c6 = {x: p3.x, y: p3.y + 1},
    c7 = {x: p3.x, y: p3.y - 1},
    c12 = {x: p1.x, y: p1.y - 1},
    c11 = {x: p3.x - h / tan - 1.25 * h / tan, y: p3.y - 1.25 * h},
    c10 = {x: c11.x - 4 * h * cos / 3, y: c11.y - 4 * h * sin / 3},
    c9 = {x: c10.x + 0.5 * diameter * sin, y: c10.y - 0.5 * diameter * cos},
    c8 = {x: c10.x + diameter * sin, y: c10.y - diameter * cos};

  c1 = rpap(c1, p1, a);
  c2 = rpap(c2, p1, a);
  c3 = rpap(c3, p1, a);
  c4 = rpap(c4, p1, a);
  c5 = rpap(c5, p1, a);
  c6 = rpap(c6, p1, a);
  c7 = rpap(c7, p1, a);
  c8 = rpap(c8, p1, a);
  c9 = rpap(c9, p1, a);
  c10 = rpap(c10, p1, a);
  c11 = rpap(c11, p1, a);
  c12 = rpap(c12, p1, a);

  var t = 0;

  if (alpha > PI / 4) t = 1;
  if (alpha < -PI / 4 && alpha > -3 * PI / 4) t = -1;
  if (alpha < -3 * PI / 4 && alpha > -5 * PI / 4) t = -2;
  if (alpha < -5 * PI / 4) t = -3;

  return [
    'M' + c1.x + ',' + c1.y,
    'L' + c2.x + ',' + c2.y,
    'L' + c5.x + ',' + c5.y,
    'L' + c6.x + ',' + c6.y,
    'L' + c7.x + ',' + c7.y,
    'L' + c8.x + ',' + c8.y,
    'L' + c11.x + ',' + c11.y,
    'L' + c12.x + ',' + c12.y
  ];

}

function ellipsePath(x, y, w, h) {

  var k = .5522848;

  var ox = (w / 2) * k,
    oy = (h / 2) * k,
    xe = x + w,
    ye = y + h,
    xm = x + w / 2,
    ym = y + h / 2;

  return [
    ['M', x, ym],
    ['C', x, ym - oy, xm - ox, y, xm, y],
    ['C', xm + ox, y, xe, ym - oy, xe, ym],
    ['C', xe, ym + oy, xm + ox, ye, xm, ye],
    ['C', xm - ox, ye, x, ym + oy, x, ym]
  ];

}

function rectanglePath(x, y, w, h) {

  return [
    ['M', x, y],
    ['L', x + w, y],
    ['L', x + w, y + h],
    ['L', x, y + h],
    ['L', x, y]
  ];

}

function rectangle() {

  var elem, real;

  this.aux = ['real'];

  this.mousedown = function (e, mouse, x, y) {

    var p = 'M' + x + ',' + y;

    elem = this.elem = new fabric.Path(p, {
      fill: 'rgba(0,0,0,.1)',
      originX: 'center',
      originY: 'center'
    });

    real = this.elem.real = new fabric.Path(p, {
      fill: editor.fill,
      originX: 'center',
      originY: 'center'
    });

    extend(real, true);

    add('rectangle_real', real);

  };

  this.extend = function () {
    elem.strokeLineCap = real.strokeLineCap = 'square';
  };

  this.mousemove = function (e, mouse, x, y, w, h) {

    if (editor.shiftKey) {
      w = h = Math.min(w, h);
    }

    if (w < 0) {
      w = Math.abs(w);
      x = x - w;
    }

    if (h < 0) {
      h = Math.abs(h);
      y = y - h;
    }

    this.save = [x, y, w, h];
    elem.path = elem.real.path = rectanglePath.apply(this, this.save);
    // elem.path = elem.real.path = elem._parsePath()
  };

  this.mouseup = function (e, mouse, x, y, w, h) {

    if (!this.save) return;

    var s = this.save,
      x = s[0], y = s[1], w = s[2], h = s[3];

    var o = {
      width: w,
      height: h,
      left: x + w / 2,
      top: y + h / 2
    };

    elem.pathOffset = elem.real.pathOffset = {x: x, y: y};

    elem.set(o);
    real.set(o);

  };

  this.moving = function (e) {

    real.set({
      left: e.target.left,
      top: e.target.top
    });

  },

    this.scaling = function (e, el) {

      var t = e.target,
        w = t.width * t.scaleX,
        h = t.height * t.scaleY,
        po = t.pathOffset;

      real.path = rectanglePath(po.x, po.y, w, h);
      // real.path = real._parsePath()

      real.set({
        width: w,
        height: h,
        left: t.left,
        top: t.top
      });

    },

    this.rotating = function (e, el) {
      real.setAngle(e.target.angle);
    };

}

function colorFromVal(value) {
  var cleft = Math.ceil(value);
  store.set('color', cleft);
  var color = hsb2hex({h: cleft, s: 100, b: 90});
  editor.$colorSliderIcon.css({background: hsb2hex({h: cleft, s: 100, b: 100})});
  changeColor(color);
  if (editor.active) {
    editor.active.currentColor = cleft;
  }
}

function roundAngle(x, y, x2, y2) {

  var radians = Math.atan2((y2 - y), (x2 - x)),
    ispos = radians > 0,
    deg = radians * (180 / Math.PI);

  var nearestDeg = nearest(Math.abs(deg)),
    nearestRad = nearestDeg * (Math.PI / 180),
    tang = Math.tan(nearestRad),
    _y = tang * (x2 - x);

  if (nearestDeg == 0 || nearestDeg == 180) {
    y2 = y;
  }
  if (nearestDeg == 90) {
    x2 = x;
  }

  if (nearestDeg == 45 || nearestDeg == 135) {

    var _xx = Math.abs(x2 - x),
      _yy = Math.abs(y2 - y),
      c = Math.sqrt(_xx * _xx + _yy * _yy),
      a = Math.sqrt((c * c) / 2);

    x2 = x + a;
    y2 = y + a;

    if (nearestDeg == 135) {
      x2 = x - a;
    }

    if (!ispos) {
      y2 = y - a;
    }

  }

  return {
    x: x2, y: y2
  };
}

function remover(ct) {
  if (ct && ct.line) {
    editor.canvas.remove(ct.line.arrow);
    editor.canvas.remove(ct.line);
  }
  if (ct && ct.bg) {
    editor.canvas.remove(ct.bg);
  }
  editor.canvas.remove(ct);

}

function numberForElem(elem) {

  var pos = getNumberPos(elem);

  elem.numbg.set({
    left: pos.x,
    top: pos.y
  });

  elem.num.set({
    left: pos.x,
    top: pos.y
  });
}

function mousemoveRect(elem, mouse, x, y, w, h, mode) {

  var rec_w = Math.abs(w),
    rec_h = Math.abs(h);

  if (editor.shiftKey) {

    var w_neg = w < 0,
      h_neg = h < 0;

    if (rec_w > rec_h) {
      rec_w = rec_h, w = rec_w;
      if (w_neg) w = -Math.abs(w);
    }
    if (rec_h > rec_w) {
      rec_h = rec_w, h = rec_h;
      if (h_neg) h = -Math.abs(h);
    }
  }

  var rec_x = x + w / 2,
    rec_y = y + h / 2;

  elem.set({
    width: rec_w,
    height: rec_h,
    left: rec_x,
    top: rec_y
  });

  if (mode === 'blur') {
    elem.blur.canvas.width = rec_w * elem.scaleX;
    elem.blur.canvas.height = rec_h * elem.scaleY;
    editor.blurer(elem);
  }

}

function mousemoveArrows(elem, mouse, x, y, w, h, mode) {

  if (editor.shiftKey) {
    mouse = roundAngle(x, y, mouse.x, mouse.y);
  }

  elem.x1 = x;
  elem.y1 = y;
  elem.x2 = mouse.x;
  elem.y2 = mouse.y;

  if (mode === 'text') {
    elem.x1 = mouse.x;
    elem.y1 = mouse.y;
    elem.x2 = x;
    elem.y2 = y;
  }

  var el = editor.elementz[elem.eid];

  el.currentSize = editor.size;

  setArrowPath(el);

}

function mouseupArrows(elem) {

  var minX = Math.min(elem.x1, elem.x2),
    minY = Math.min(elem.y1, elem.y2),
    maxX = Math.max(elem.x1, elem.x2),
    maxY = Math.max(elem.y1, elem.y2),
    deltaX = maxX - minX,
    deltaY = maxY - minY;

  elem.left = 0;
  elem.top = 0;

  elem.pathOffset = {x: minX, y: minY};

  elem.set({
    left: minX + deltaX / 2,
    top: minY + deltaY / 2,
    width: deltaX,
    height: deltaY
  });

  elem.setCoords();

}

function changeColor(hex) {

  editor.canvas.freeDrawingBrush.color = hex;
  editor.color = hex;

  if (editor.active) {

    var el = editor.active;

    el.e.stroke && el.e.set({stroke: hex});
    el.e.real && el.e.real.set({stroke: hex});
    if (el.t === 'arrow' || el.t === 'text') {
      el.e.set({fill: hex});
      el.e.text && el.e.text.set({fill: hex});
    }

    el.e.num && el.e.numbg.set({fill: hex});

    editor.canvas.renderAll();
  }
}

function hsb2rgb(hsb) {
  var rgb = {};
  var h = Math.round(hsb.h);
  var s = Math.round(hsb.s * 255 / 100);
  var v = Math.round(hsb.b * 255 / 100);
  if (s === 0) {
    rgb.r = rgb.g = rgb.b = v;
  } else {
    var t1 = v;
    var t2 = (255 - s) * v / 255;
    var t3 = (t1 - t2) * (h % 60) / 60;
    if (h === 360) h = 0;
    if (h < 60) {
      rgb.r = t1;
      rgb.b = t2;
      rgb.g = t2 + t3;
    } else if (h < 120) {
      rgb.g = t1;
      rgb.b = t2;
      rgb.r = t1 - t3;
    } else if (h < 180) {
      rgb.g = t1;
      rgb.r = t2;
      rgb.b = t2 + t3;
    } else if (h < 240) {
      rgb.b = t1;
      rgb.r = t2;
      rgb.g = t1 - t3;
    } else if (h < 300) {
      rgb.b = t1;
      rgb.g = t2;
      rgb.r = t2 + t3;
    } else if (h < 360) {
      rgb.r = t1;
      rgb.g = t2;
      rgb.b = t1 - t3;
    } else {
      rgb.r = 0;
      rgb.g = 0;
      rgb.b = 0;
    }
  }
  return {
    r: Math.round(rgb.r),
    g: Math.round(rgb.g),
    b: Math.round(rgb.b)
  };
}

// Converts an RGB object to a hex string
function rgb2hex(rgb) {
  var hex = [
    rgb.r.toString(16),
    rgb.g.toString(16),
    rgb.b.toString(16)
  ];
  $.each(hex, function (nr, val) {
    if (val.length === 1) hex[nr] = '0' + val;
  });
  return '#' + hex.join('');
}

// Converts an HSB object to a hex string
function hsb2hex(hsb) {
  return rgb2hex(hsb2rgb(hsb));
}

// Converts a hex string to an HSB object
function hex2hsb(hex) {
  var hsb = rgb2hsb(hex2rgb(hex));
  if (hsb.s === 0) hsb.h = 360;
  return hsb;
}

// Converts an RGB object to an HSB object
function rgb2hsb(rgb) {
  var hsb = {h: 0, s: 0, b: 0};
  var min = Math.min(rgb.r, rgb.g, rgb.b);
  var max = Math.max(rgb.r, rgb.g, rgb.b);
  var delta = max - min;
  hsb.b = max;
  hsb.s = max !== 0 ? 255 * delta / max : 0;
  if (hsb.s !== 0) {
    if (rgb.r === max) {
      hsb.h = (rgb.g - rgb.b) / delta;
    } else if (rgb.g === max) {
      hsb.h = 2 + (rgb.b - rgb.r) / delta;
    } else {
      hsb.h = 4 + (rgb.r - rgb.g) / delta;
    }
  } else {
    hsb.h = -1;
  }
  hsb.h *= 60;
  if (hsb.h < 0) {
    hsb.h += 360;
  }
  hsb.s *= 100 / 255;
  hsb.b *= 100 / 255;
  return hsb;
}

// Converts a hex string to an RGB object
function hex2rgb(hex) {
  hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
  return {
    r: hex >> 16,
    g: (hex & 0x00FF00) >> 8,
    b: (hex & 0x0000FF)
  };
}

//toblob
!function (a) {
  'use strict';
  var b = a.HTMLCanvasElement && a.HTMLCanvasElement.prototype,
    c = a.Blob && function () {
      try {
        return Boolean(new Blob);
      } catch (a) {
        return !1;
      }
    }(), d = c && a.Uint8Array &&
      function () {
        try {
          return 100 === new Blob([new Uint8Array(100)]).size;
        } catch (a) {
          return !1;
        }
      }(),
    e = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || a.MSBlobBuilder,
    f = (c || e) && a.atob && a.ArrayBuffer && a.Uint8Array && function (a) {
      var b, f, g, h, i, j;
      for (b = a.split(',')[0].indexOf('base64') >= 0 ? atob(a.split(',')[1]) : decodeURIComponent(
        a.split(',')[1]), f = new ArrayBuffer(b.length), g = new Uint8Array(f), h = 0; h <
           b.length; h += 1) g[h] = b.charCodeAt(h);
      return i = a.split(',')[0].split(':')[1].split(';')[0], c
        ? new Blob([d ? g : f], {type: i})
        : (j = new e, j.append(f), j.getBlob(i));
    };
  a.HTMLCanvasElement && !b.toBlob && (b.mozGetAsFile ? b.toBlob = function (a, c, d) {
    d && b.toDataURL && f ? a(f(this.toDataURL(c, d))) : a(this.mozGetAsFile('blob', c));
  } : b.toDataURL && f && (b.toBlob = function (a, b, c) {
    a(f(this.toDataURL(b, c)));
  })), 'function' == typeof define &&
  define.amd ? define(function () {
    return f;
  }) : a.dataURLtoBlob = f;
}(this);



