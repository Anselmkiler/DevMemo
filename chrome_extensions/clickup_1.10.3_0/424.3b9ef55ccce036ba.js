(self["webpackChunkchrome_app"] = self["webpackChunkchrome_app"] || []).push([[424],{

/***/ 55676:
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = 1e3,
    e = 6e4,
    n = 36e5,
    r = "millisecond",
    i = "second",
    s = "minute",
    u = "hour",
    a = "day",
    o = "week",
    c = "month",
    f = "quarter",
    h = "year",
    d = "date",
    l = "Invalid Date",
    $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function (t) {
        var e = ["th", "st", "nd", "rd"],
          n = t % 100;
        return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
      }
    },
    m = function (t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
    v = {
      s: m,
      z: function (t) {
        var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, c),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), c);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function (t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function (t) {
        return {
          M: c,
          y: h,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: f
        }[t] || String(t || "").toLowerCase().replace(/s$/, "");
      },
      u: function (t) {
        return void 0 === t;
      }
    },
    g = "en",
    D = {};
  D[g] = M;
  var p = "$isDayjsObject",
    S = function (t) {
      return t instanceof _ || !(!t || !t[p]);
    },
    w = function t(e, n, r) {
      var i;
      if (!e) return g;
      if ("string" == typeof e) {
        var s = e.toLowerCase();
        D[s] && (i = s), n && (D[s] = n, i = s);
        var u = e.split("-");
        if (!i && u.length > 1) return t(u[0]);
      } else {
        var a = e.name;
        D[a] = e, i = a;
      }
      return !r && i && (g = i), i || !r && g;
    },
    O = function (t, e) {
      if (S(t)) return t.clone();
      var n = "object" == typeof e ? e : {};
      return n.date = t, n.args = arguments, new _(n);
    },
    b = v;
  b.l = w, b.i = S, b.w = function (t, e) {
    return O(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };
  var _ = function () {
      function M(t) {
        this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
      }
      var m = M.prototype;
      return m.parse = function (t) {
        this.$d = function (t) {
          var e = t.date,
            n = t.utc;
          if (null === e) return new Date(NaN);
          if (b.u(e)) return new Date();
          if (e instanceof Date) return new Date(e);
          if ("string" == typeof e && !/Z$/i.test(e)) {
            var r = e.match($);
            if (r) {
              var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, m.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, m.$utils = function () {
        return b;
      }, m.isValid = function () {
        return !(this.$d.toString() === l);
      }, m.isSame = function (t, e) {
        var n = O(t);
        return this.startOf(e) <= n && n <= this.endOf(e);
      }, m.isAfter = function (t, e) {
        return O(t) < this.startOf(e);
      }, m.isBefore = function (t, e) {
        return this.endOf(e) < O(t);
      }, m.$g = function (t, e, n) {
        return b.u(t) ? this[e] : this.set(n, t);
      }, m.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function () {
        return this.$d.getTime();
      }, m.startOf = function (t, e) {
        var n = this,
          r = !!b.u(e) || e,
          f = b.p(t),
          l = function (t, e) {
            var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
            return r ? i : i.endOf(a);
          },
          $ = function (t, e) {
            return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
          },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          v = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case h:
            return r ? l(1, 0) : l(31, 11);
          case c:
            return r ? l(1, M) : l(0, M + 1);
          case o:
            var g = this.$locale().weekStart || 0,
              D = (y < g ? y + 7 : y) - g;
            return l(r ? m - D : m + (6 - D), M);
          case a:
          case d:
            return $(v + "Hours", 0);
          case u:
            return $(v + "Minutes", 1);
          case s:
            return $(v + "Seconds", 2);
          case i:
            return $(v + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m.endOf = function (t) {
        return this.startOf(t, !1);
      }, m.$set = function (t, e) {
        var n,
          o = b.p(t),
          f = "set" + (this.$u ? "UTC" : ""),
          l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o],
          $ = o === a ? this.$D + (e - this.$W) : e;
        if (o === c || o === h) {
          var y = this.clone().set(d, 1);
          y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
        } else l && this.$d[l]($);
        return this.init(), this;
      }, m.set = function (t, e) {
        return this.clone().$set(t, e);
      }, m.get = function (t) {
        return this[b.p(t)]();
      }, m.add = function (r, f) {
        var d,
          l = this;
        r = Number(r);
        var $ = b.p(f),
          y = function (t) {
            var e = O(l);
            return b.w(e.date(e.date() + Math.round(t * r)), l);
          };
        if ($ === c) return this.set(c, this.$M + r);
        if ($ === h) return this.set(h, this.$y + r);
        if ($ === a) return y(1);
        if ($ === o) return y(7);
        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
          m = this.$d.getTime() + r * M;
        return b.w(m, this);
      }, m.subtract = function (t, e) {
        return this.add(-1 * t, e);
      }, m.format = function (t) {
        var e = this,
          n = this.$locale();
        if (!this.isValid()) return n.invalidDate || l;
        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = b.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          c = n.months,
          f = n.meridiem,
          h = function (t, n, i, s) {
            return t && (t[n] || t(e, r)) || i[n].slice(0, s);
          },
          d = function (t) {
            return b.s(s % 12 || 12, t, "0");
          },
          $ = f || function (t, e, n) {
            var r = t < 12 ? "AM" : "PM";
            return n ? r.toLowerCase() : r;
          };
        return r.replace(y, function (t, r) {
          return r || function (t) {
            switch (t) {
              case "YY":
                return String(e.$y).slice(-2);
              case "YYYY":
                return b.s(e.$y, 4, "0");
              case "M":
                return a + 1;
              case "MM":
                return b.s(a + 1, 2, "0");
              case "MMM":
                return h(n.monthsShort, a, c, 3);
              case "MMMM":
                return h(c, a);
              case "D":
                return e.$D;
              case "DD":
                return b.s(e.$D, 2, "0");
              case "d":
                return String(e.$W);
              case "dd":
                return h(n.weekdaysMin, e.$W, o, 2);
              case "ddd":
                return h(n.weekdaysShort, e.$W, o, 3);
              case "dddd":
                return o[e.$W];
              case "H":
                return String(s);
              case "HH":
                return b.s(s, 2, "0");
              case "h":
                return d(1);
              case "hh":
                return d(2);
              case "a":
                return $(s, u, !0);
              case "A":
                return $(s, u, !1);
              case "m":
                return String(u);
              case "mm":
                return b.s(u, 2, "0");
              case "s":
                return String(e.$s);
              case "ss":
                return b.s(e.$s, 2, "0");
              case "SSS":
                return b.s(e.$ms, 3, "0");
              case "Z":
                return i;
            }
            return null;
          }(t) || i.replace(":", "");
        });
      }, m.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function (r, d, l) {
        var $,
          y = this,
          M = b.p(d),
          m = O(r),
          v = (m.utcOffset() - this.utcOffset()) * e,
          g = this - m,
          D = function () {
            return b.m(y, m);
          };
        switch (M) {
          case h:
            $ = D() / 12;
            break;
          case c:
            $ = D();
            break;
          case f:
            $ = D() / 3;
            break;
          case o:
            $ = (g - v) / 6048e5;
            break;
          case a:
            $ = (g - v) / 864e5;
            break;
          case u:
            $ = g / n;
            break;
          case s:
            $ = g / e;
            break;
          case i:
            $ = g / t;
            break;
          default:
            $ = g;
        }
        return l ? $ : b.a($);
      }, m.daysInMonth = function () {
        return this.endOf(c).$D;
      }, m.$locale = function () {
        return D[this.$L];
      }, m.locale = function (t, e) {
        if (!t) return this.$L;
        var n = this.clone(),
          r = w(t, e, !0);
        return r && (n.$L = r), n;
      }, m.clone = function () {
        return b.w(this.$d, this);
      }, m.toDate = function () {
        return new Date(this.valueOf());
      }, m.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function () {
        return this.$d.toISOString();
      }, m.toString = function () {
        return this.$d.toUTCString();
      }, M;
    }(),
    k = _.prototype;
  return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t) {
    k[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), O.extend = function (t, e) {
    return t.$i || (t(e, _, O), t.$i = !0), O;
  }, O.locale = w, O.isDayjs = S, O.unix = function (t) {
    return O(1e3 * t);
  }, O.en = D[g], O.Ls = D, O.p = {}, O;
});

/***/ }),

/***/ 67704:
/*!****************************************************!*\
  !*** ./node_modules/dayjs/plugin/quarterOfYear.js ***!
  \****************************************************/
/***/ (function(module) {

!function (t, n) {
   true ? module.exports = n() : 0;
}(this, function () {
  "use strict";

  var t = "month",
    n = "quarter";
  return function (e, i) {
    var r = i.prototype;
    r.quarter = function (t) {
      return this.$utils().u(t) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t - 1));
    };
    var s = r.add;
    r.add = function (e, i) {
      return e = Number(e), this.$utils().p(i) === n ? this.add(3 * e, t) : s.bind(this)(e, i);
    };
    var u = r.startOf;
    r.startOf = function (e, i) {
      var r = this.$utils(),
        s = !!r.u(i) || i;
      if (r.p(e) === n) {
        var o = this.quarter() - 1;
        return s ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
      }
      return u.bind(this)(e, i);
    };
  };
});

/***/ }),

/***/ 56572:
/*!*****************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/calculation/mergingCalculation.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeDateTimeComponent: () => (/* binding */ mergeDateTimeComponent),
/* harmony export */   mergeDateTimeResult: () => (/* binding */ mergeDateTimeResult)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types.js */ 49276);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dayjs.js */ 37616);


function mergeDateTimeResult(dateResult, timeResult) {
  const result = dateResult.clone();
  const beginDate = dateResult.start;
  const beginTime = timeResult.start;
  result.start = mergeDateTimeComponent(beginDate, beginTime);
  if (dateResult.end != null || timeResult.end != null) {
    const endDate = dateResult.end == null ? dateResult.start : dateResult.end;
    const endTime = timeResult.end == null ? timeResult.start : timeResult.end;
    const endDateTime = mergeDateTimeComponent(endDate, endTime);
    if (dateResult.end == null && endDateTime.date().getTime() < result.start.date().getTime()) {
      const nextDayJs = endDateTime.dayjs().add(1, "day");
      if (endDateTime.isCertain("day")) {
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_0__.assignSimilarDate)(endDateTime, nextDayJs);
      } else {
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_0__.implySimilarDate)(endDateTime, nextDayJs);
      }
    }
    result.end = endDateTime;
  }
  return result;
}
function mergeDateTimeComponent(dateComponent, timeComponent) {
  const dateTimeComponent = dateComponent.clone();
  if (timeComponent.isCertain("hour")) {
    dateTimeComponent.assign("hour", timeComponent.get("hour"));
    dateTimeComponent.assign("minute", timeComponent.get("minute"));
    if (timeComponent.isCertain("second")) {
      dateTimeComponent.assign("second", timeComponent.get("second"));
      if (timeComponent.isCertain("millisecond")) {
        dateTimeComponent.assign("millisecond", timeComponent.get("millisecond"));
      } else {
        dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
      }
    } else {
      dateTimeComponent.imply("second", timeComponent.get("second"));
      dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
    }
  } else {
    dateTimeComponent.imply("hour", timeComponent.get("hour"));
    dateTimeComponent.imply("minute", timeComponent.get("minute"));
    dateTimeComponent.imply("second", timeComponent.get("second"));
    dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
  }
  if (timeComponent.isCertain("timezoneOffset")) {
    dateTimeComponent.assign("timezoneOffset", timeComponent.get("timezoneOffset"));
  }
  if (timeComponent.isCertain("meridiem")) {
    dateTimeComponent.assign("meridiem", timeComponent.get("meridiem"));
  } else if (timeComponent.get("meridiem") != null && dateTimeComponent.get("meridiem") == null) {
    dateTimeComponent.imply("meridiem", timeComponent.get("meridiem"));
  }
  if (dateTimeComponent.get("meridiem") == _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM && dateTimeComponent.get("hour") < 12) {
    if (timeComponent.isCertain("hour")) {
      dateTimeComponent.assign("hour", dateTimeComponent.get("hour") + 12);
    } else {
      dateTimeComponent.imply("hour", dateTimeComponent.get("hour") + 12);
    }
  }
  dateTimeComponent.addTags(dateComponent.tags());
  dateTimeComponent.addTags(timeComponent.tags());
  return dateTimeComponent;
}
//# sourceMappingURL=mergingCalculation.js.map

/***/ }),

/***/ 67684:
/*!****************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/calculation/years.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMostLikelyADYear: () => (/* binding */ findMostLikelyADYear),
/* harmony export */   findYearClosestToRef: () => (/* binding */ findYearClosestToRef)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);

function findMostLikelyADYear(yearNumber) {
  if (yearNumber < 100) {
    if (yearNumber > 50) {
      yearNumber = yearNumber + 1900;
    } else {
      yearNumber = yearNumber + 2000;
    }
  }
  return yearNumber;
}
function findYearClosestToRef(refDate, day, month) {
  const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(refDate);
  let dateMoment = refMoment;
  dateMoment = dateMoment.month(month - 1);
  dateMoment = dateMoment.date(day);
  dateMoment = dateMoment.year(refMoment.year());
  const nextYear = dateMoment.add(1, "y");
  const lastYear = dateMoment.add(-1, "y");
  if (Math.abs(nextYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
    dateMoment = nextYear;
  } else if (Math.abs(lastYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
    dateMoment = lastYear;
  }
  return dateMoment.year();
}
//# sourceMappingURL=years.js.map

/***/ }),

/***/ 78784:
/*!*****************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/chrono.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* binding */ Chrono),
/* harmony export */   ParsingContext: () => (/* binding */ ParsingContext)
/* harmony export */ });
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.js */ 48648);
/* harmony import */ var _locales_en_configuration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locales/en/configuration.js */ 93628);


class Chrono {
  constructor(configuration) {
    this.defaultConfig = new _locales_en_configuration_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    configuration = configuration || this.defaultConfig.createCasualConfiguration();
    this.parsers = [...configuration.parsers];
    this.refiners = [...configuration.refiners];
  }
  clone() {
    return new Chrono({
      parsers: [...this.parsers],
      refiners: [...this.refiners]
    });
  }
  parseDate(text, referenceDate, option) {
    const results = this.parse(text, referenceDate, option);
    return results.length > 0 ? results[0].start.date() : null;
  }
  parse(text, referenceDate, option) {
    const context = new ParsingContext(text, referenceDate, option);
    let results = [];
    this.parsers.forEach(parser => {
      const parsedResults = Chrono.executeParser(context, parser);
      results = results.concat(parsedResults);
    });
    results.sort((a, b) => {
      return a.index - b.index;
    });
    this.refiners.forEach(function (refiner) {
      results = refiner.refine(context, results);
    });
    return results;
  }
  static executeParser(context, parser) {
    const results = [];
    const pattern = parser.pattern(context);
    const originalText = context.text;
    let remainingText = context.text;
    let match = pattern.exec(remainingText);
    while (match) {
      const index = match.index + originalText.length - remainingText.length;
      match.index = index;
      const result = parser.extract(context, match);
      if (!result) {
        remainingText = originalText.substring(match.index + 1);
        match = pattern.exec(remainingText);
        continue;
      }
      let parsedResult = null;
      if (result instanceof _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult) {
        parsedResult = result;
      } else if (result instanceof _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents) {
        parsedResult = context.createParsingResult(match.index, match[0]);
        parsedResult.start = result;
      } else {
        parsedResult = context.createParsingResult(match.index, match[0], result);
      }
      const parsedIndex = parsedResult.index;
      const parsedText = parsedResult.text;
      context.debug(() => console.log(`${parser.constructor.name} extracted (at index=${parsedIndex}) '${parsedText}'`));
      results.push(parsedResult);
      remainingText = originalText.substring(parsedIndex + parsedText.length);
      match = pattern.exec(remainingText);
    }
    return results;
  }
}
class ParsingContext {
  constructor(text, refDate, option) {
    this.text = text;
    this.reference = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone(refDate);
    this.option = option ?? {};
    this.refDate = this.reference.instant;
  }
  createParsingComponents(components) {
    if (components instanceof _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents) {
      return components;
    }
    return new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(this.reference, components);
  }
  createParsingResult(index, textOrEndIndex, startComponents, endComponents) {
    const text = typeof textOrEndIndex === "string" ? textOrEndIndex : this.text.substring(index, textOrEndIndex);
    const start = startComponents ? this.createParsingComponents(startComponents) : null;
    const end = endComponents ? this.createParsingComponents(endComponents) : null;
    return new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult(this.reference, index, text, start, end);
  }
  debug(block) {
    if (this.option.debug) {
      if (this.option.debug instanceof Function) {
        this.option.debug(block);
      } else {
        const handler = this.option.debug;
        handler.debug(block);
      }
    }
  }
}
//# sourceMappingURL=chrono.js.map

/***/ }),

/***/ 63656:
/*!**********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/abstractRefiners.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter),
/* harmony export */   MergingRefiner: () => (/* binding */ MergingRefiner)
/* harmony export */ });
class Filter {
  refine(context, results) {
    return results.filter(r => this.isValid(context, r));
  }
}
class MergingRefiner {
  refine(context, results) {
    if (results.length < 2) {
      return results;
    }
    const mergedResults = [];
    let curResult = results[0];
    let nextResult = null;
    for (let i = 1; i < results.length; i++) {
      nextResult = results[i];
      const textBetween = context.text.substring(curResult.index + curResult.text.length, nextResult.index);
      if (!this.shouldMergeResults(textBetween, curResult, nextResult, context)) {
        mergedResults.push(curResult);
        curResult = nextResult;
      } else {
        const left = curResult;
        const right = nextResult;
        const mergedResult = this.mergeResults(textBetween, left, right, context);
        context.debug(() => {
          console.log(`${this.constructor.name} merged ${left} and ${right} into ${mergedResult}`);
        });
        curResult = mergedResult;
      }
    }
    if (curResult != null) {
      mergedResults.push(curResult);
    }
    return mergedResults;
  }
}
//# sourceMappingURL=abstractRefiners.js.map

/***/ }),

/***/ 64336:
/*!**************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createParsingComponentsAtWeekday: () => (/* binding */ createParsingComponentsAtWeekday),
/* harmony export */   getBackwardDaysToWeekday: () => (/* binding */ getBackwardDaysToWeekday),
/* harmony export */   getDaysForwardToWeekday: () => (/* binding */ getDaysForwardToWeekday),
/* harmony export */   getDaysToWeekday: () => (/* binding */ getDaysToWeekday),
/* harmony export */   getDaysToWeekdayClosest: () => (/* binding */ getDaysToWeekdayClosest)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/timeunits.js */ 69344);



function createParsingComponentsAtWeekday(reference, weekday, modifier) {
  const refDate = reference.getDateWithAdjustedTimezone();
  const daysToWeekday = getDaysToWeekday(refDate, weekday, modifier);
  let components = new _results_js__WEBPACK_IMPORTED_MODULE_0__.ParsingComponents(reference);
  components = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_1__.addImpliedTimeUnits)(components, {
    "day": daysToWeekday
  });
  components.assign("weekday", weekday);
  return components;
}
function getDaysToWeekday(refDate, weekday, modifier) {
  const refWeekday = refDate.getDay();
  switch (modifier) {
    case "this":
      return getDaysForwardToWeekday(refDate, weekday);
    case "last":
      return getBackwardDaysToWeekday(refDate, weekday);
    case "next":
      if (refWeekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SUNDAY) {
        return weekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SUNDAY ? 7 : weekday;
      }
      if (refWeekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SATURDAY) {
        if (weekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SATURDAY) return 7;
        if (weekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SUNDAY) return 8;
        return 1 + weekday;
      }
      if (weekday < refWeekday && weekday != _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SUNDAY) {
        return getDaysForwardToWeekday(refDate, weekday);
      } else {
        return getDaysForwardToWeekday(refDate, weekday) + 7;
      }
  }
  return getDaysToWeekdayClosest(refDate, weekday);
}
function getDaysToWeekdayClosest(refDate, weekday) {
  const backward = getBackwardDaysToWeekday(refDate, weekday);
  const forward = getDaysForwardToWeekday(refDate, weekday);
  return forward < -backward ? forward : backward;
}
function getDaysForwardToWeekday(refDate, weekday) {
  const refWeekday = refDate.getDay();
  let forwardCount = weekday - refWeekday;
  if (forwardCount < 0) {
    forwardCount += 7;
  }
  return forwardCount;
}
function getBackwardDaysToWeekday(refDate, weekday) {
  const refWeekday = refDate.getDay();
  let backwardCount = weekday - refWeekday;
  if (backwardCount >= 0) {
    backwardCount -= 7;
  }
  return backwardCount;
}
//# sourceMappingURL=weekdays.js.map

/***/ }),

/***/ 35888:
/*!**********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/casualReferences.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afternoon: () => (/* binding */ afternoon),
/* harmony export */   evening: () => (/* binding */ evening),
/* harmony export */   lastNight: () => (/* binding */ lastNight),
/* harmony export */   midnight: () => (/* binding */ midnight),
/* harmony export */   morning: () => (/* binding */ morning),
/* harmony export */   noon: () => (/* binding */ noon),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   theDayAfter: () => (/* binding */ theDayAfter),
/* harmony export */   theDayBefore: () => (/* binding */ theDayBefore),
/* harmony export */   today: () => (/* binding */ today),
/* harmony export */   tomorrow: () => (/* binding */ tomorrow),
/* harmony export */   tonight: () => (/* binding */ tonight),
/* harmony export */   yesterday: () => (/* binding */ yesterday),
/* harmony export */   yesterdayEvening: () => (/* binding */ yesterdayEvening)
/* harmony export */ });
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../results.js */ 48648);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dayjs.js */ 37616);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types.js */ 49276);




function now(reference) {
  const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
  (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarTime)(component, targetDate);
  if (reference.timezoneOffset !== null) {
    component.assign("timezoneOffset", targetDate.utcOffset());
  }
  component.addTag("casualReference/now");
  return component;
}
function today(reference) {
  const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
  (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.implySimilarTime)(component, targetDate);
  component.addTag("casualReference/today");
  return component;
}
function yesterday(reference) {
  return theDayBefore(reference, 1).addTag("casualReference/yesterday");
}
function theDayBefore(reference, numDay) {
  return theDayAfter(reference, -numDay);
}
function tomorrow(reference) {
  return theDayAfter(reference, 1).addTag("casualReference/tomorrow");
}
function theDayAfter(reference, nDays) {
  let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  targetDate = targetDate.add(nDays, "day");
  (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
  (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.implySimilarTime)(component, targetDate);
  return component;
}
function tonight(reference, implyHour = 22) {
  const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
  component.imply("hour", implyHour);
  component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
  component.addTag("casualReference/tonight");
  return component;
}
function lastNight(reference, implyHour = 0) {
  let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  if (targetDate.hour() < 6) {
    targetDate = targetDate.add(-1, "day");
  }
  (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
  component.imply("hour", implyHour);
  return component;
}
function evening(reference, implyHour = 20) {
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
  component.imply("hour", implyHour);
  component.addTag("casualReference/evening");
  return component;
}
function yesterdayEvening(reference, implyHour = 20) {
  let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  targetDate = targetDate.add(-1, "day");
  (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
  component.imply("hour", implyHour);
  component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
  component.addTag("casualReference/yesterday");
  component.addTag("casualReference/evening");
  return component;
}
function midnight(reference) {
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
  if (targetDate.hour() > 2) {
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.implyTheNextDay)(component, targetDate);
  }
  component.assign("hour", 0);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/midnight");
  return component;
}
function morning(reference, implyHour = 6) {
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
  component.imply("hour", implyHour);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/morning");
  return component;
}
function afternoon(reference, implyHour = 15) {
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
  component.imply("hour", implyHour);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/afternoon");
  return component;
}
function noon(reference) {
  const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
  component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
  component.imply("hour", 12);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/noon");
  return component;
}
//# sourceMappingURL=casualReferences.js.map

/***/ }),

/***/ 86684:
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractParserWithWordBoundaryChecking: () => (/* binding */ AbstractParserWithWordBoundaryChecking)
/* harmony export */ });
class AbstractParserWithWordBoundaryChecking {
  constructor() {
    this.cachedInnerPattern = null;
    this.cachedPattern = null;
  }
  innerPatternHasChange(context, currentInnerPattern) {
    return this.innerPattern(context) !== currentInnerPattern;
  }
  patternLeftBoundary() {
    return `(\\W|^)`;
  }
  pattern(context) {
    if (this.cachedInnerPattern) {
      if (!this.innerPatternHasChange(context, this.cachedInnerPattern)) {
        return this.cachedPattern;
      }
    }
    this.cachedInnerPattern = this.innerPattern(context);
    this.cachedPattern = new RegExp(`${this.patternLeftBoundary()}${this.cachedInnerPattern.source}`, this.cachedInnerPattern.flags);
    return this.cachedPattern;
  }
  extract(context, match) {
    const header = match[1] ?? "";
    match.index = match.index + header.length;
    match[0] = match[0].substring(header.length);
    for (let i = 2; i < match.length; i++) {
      match[i - 1] = match[i];
    }
    return this.innerExtract(context, match);
  }
}
//# sourceMappingURL=AbstractParserWithWordBoundary.js.map

/***/ }),

/***/ 93912:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractTimeExpressionParser: () => (/* binding */ AbstractTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types.js */ 49276);

function primaryTimePattern(leftBoundary, primaryPrefix, primarySuffix, flags) {
  return new RegExp(`${leftBoundary}` + `${primaryPrefix}` + `(\\d{1,4})` + `(?:` + `(?:\\.|:|：)` + `(\\d{1,2})` + `(?:` + `(?::|：)` + `(\\d{2})` + `(?:\\.(\\d{1,6}))?` + `)?` + `)?` + `(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?` + `${primarySuffix}`, flags);
}
function followingTimePatten(followingPhase, followingSuffix) {
  return new RegExp(`^(${followingPhase})` + `(\\d{1,4})` + `(?:` + `(?:\\.|\\:|\\：)` + `(\\d{1,2})` + `(?:` + `(?:\\.|\\:|\\：)` + `(\\d{1,2})(?:\\.(\\d{1,6}))?` + `)?` + `)?` + `(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?` + `${followingSuffix}`, "i");
}
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const MILLI_SECOND_GROUP = 5;
const AM_PM_HOUR_GROUP = 6;
class AbstractTimeExpressionParser {
  constructor(strictMode = false) {
    this.cachedPrimaryPrefix = null;
    this.cachedPrimarySuffix = null;
    this.cachedPrimaryTimePattern = null;
    this.cachedFollowingPhase = null;
    this.cachedFollowingSuffix = null;
    this.cachedFollowingTimePatten = null;
    this.strictMode = strictMode;
  }
  patternFlags() {
    return "i";
  }
  primaryPatternLeftBoundary() {
    return `(^|\\s|T|\\b)`;
  }
  primarySuffix() {
    return `(?!/)(?=\\W|$)`;
  }
  followingSuffix() {
    return `(?!/)(?=\\W|$)`;
  }
  pattern(context) {
    return this.getPrimaryTimePatternThroughCache();
  }
  extract(context, match) {
    const startComponents = this.extractPrimaryTimeComponents(context, match);
    if (!startComponents) {
      match.index += match[0].length;
      return null;
    }
    const index = match.index + match[1].length;
    const text = match[0].substring(match[1].length);
    const result = context.createParsingResult(index, text, startComponents);
    match.index += match[0].length;
    const remainingText = context.text.substring(match.index);
    const followingPattern = this.getFollowingTimePatternThroughCache();
    const followingMatch = followingPattern.exec(remainingText);
    if (text.match(/^\d{3,4}/) && followingMatch && followingMatch[0].match(/^\s*([+-])\s*\d{2,4}$/)) {
      return null;
    }
    if (!followingMatch || followingMatch[0].match(/^\s*([+-])\s*\d{3,4}$/)) {
      return this.checkAndReturnWithoutFollowingPattern(result);
    }
    result.end = this.extractFollowingTimeComponents(context, followingMatch, result);
    if (result.end) {
      result.text += followingMatch[0];
    }
    return this.checkAndReturnWithFollowingPattern(result);
  }
  extractPrimaryTimeComponents(context, match, strict = false) {
    const components = context.createParsingComponents();
    let minute = 0;
    let meridiem = null;
    let hour = parseInt(match[HOUR_GROUP]);
    if (hour > 100) {
      if (this.strictMode || match[MINUTE_GROUP] != null) {
        return null;
      }
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (hour > 24) {
      return null;
    }
    if (match[MINUTE_GROUP] != null) {
      if (match[MINUTE_GROUP].length == 1 && !match[AM_PM_HOUR_GROUP]) {
        return null;
      }
      minute = parseInt(match[MINUTE_GROUP]);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 12) {
      meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP] != null) {
      if (hour > 12) return null;
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
        if (hour == 12) {
          hour = 0;
        }
      }
      if (ampm == "p") {
        meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
        if (hour != 12) {
          hour += 12;
        }
      }
    }
    components.assign("hour", hour);
    components.assign("minute", minute);
    if (meridiem !== null) {
      components.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
      } else {
        components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
      }
    }
    if (match[MILLI_SECOND_GROUP] != null) {
      const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
      if (millisecond >= 1000) return null;
      components.assign("millisecond", millisecond);
    }
    if (match[SECOND_GROUP] != null) {
      const second = parseInt(match[SECOND_GROUP]);
      if (second >= 60) return null;
      components.assign("second", second);
    }
    return components;
  }
  extractFollowingTimeComponents(context, match, result) {
    const components = context.createParsingComponents();
    if (match[MILLI_SECOND_GROUP] != null) {
      const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
      if (millisecond >= 1000) return null;
      components.assign("millisecond", millisecond);
    }
    if (match[SECOND_GROUP] != null) {
      const second = parseInt(match[SECOND_GROUP]);
      if (second >= 60) return null;
      components.assign("second", second);
    }
    let hour = parseInt(match[HOUR_GROUP]);
    let minute = 0;
    let meridiem = -1;
    if (match[MINUTE_GROUP] != null) {
      minute = parseInt(match[MINUTE_GROUP]);
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60 || hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP] != null) {
      if (hour > 12) {
        return null;
      }
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
        if (hour == 12) {
          hour = 0;
          if (!components.isCertain("day")) {
            components.imply("day", components.get("day") + 1);
          }
        }
      }
      if (ampm == "p") {
        meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
        if (hour != 12) hour += 12;
      }
      if (!result.start.isCertain("meridiem")) {
        if (meridiem == _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM) {
          result.start.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
          if (result.start.get("hour") == 12) {
            result.start.assign("hour", 0);
          }
        } else {
          result.start.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
          if (result.start.get("hour") != 12) {
            result.start.assign("hour", result.start.get("hour") + 12);
          }
        }
      }
    }
    components.assign("hour", hour);
    components.assign("minute", minute);
    if (meridiem >= 0) {
      components.assign("meridiem", meridiem);
    } else {
      const startAtPM = result.start.isCertain("meridiem") && result.start.get("hour") > 12;
      if (startAtPM) {
        if (result.start.get("hour") - 12 > hour) {
          components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
        } else if (hour <= 12) {
          components.assign("hour", hour + 12);
          components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
        }
      } else if (hour > 12) {
        components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
      } else if (hour <= 12) {
        components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
      }
    }
    if (components.date().getTime() < result.start.date().getTime()) {
      components.imply("day", components.get("day") + 1);
    }
    return components;
  }
  checkAndReturnWithoutFollowingPattern(result) {
    if (result.text.match(/^\d$/)) {
      return null;
    }
    if (result.text.match(/^\d\d\d+$/)) {
      return null;
    }
    if (result.text.match(/\d[apAP]$/)) {
      return null;
    }
    const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)$/);
    if (endingWithNumbers) {
      const endingNumbers = endingWithNumbers[1];
      if (this.strictMode) {
        return null;
      }
      if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
        return null;
      }
      const endingNumberVal = parseInt(endingNumbers);
      if (endingNumberVal > 24) {
        return null;
      }
    }
    return result;
  }
  checkAndReturnWithFollowingPattern(result) {
    if (result.text.match(/^\d+-\d+$/)) {
      return null;
    }
    const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
    if (endingWithNumbers) {
      if (this.strictMode) {
        return null;
      }
      const startingNumbers = endingWithNumbers[1];
      const endingNumbers = endingWithNumbers[2];
      if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
        return null;
      }
      const endingNumberVal = parseInt(endingNumbers);
      const startingNumberVal = parseInt(startingNumbers);
      if (endingNumberVal > 24 || startingNumberVal > 24) {
        return null;
      }
    }
    return result;
  }
  getPrimaryTimePatternThroughCache() {
    const primaryPrefix = this.primaryPrefix();
    const primarySuffix = this.primarySuffix();
    if (this.cachedPrimaryPrefix === primaryPrefix && this.cachedPrimarySuffix === primarySuffix) {
      return this.cachedPrimaryTimePattern;
    }
    this.cachedPrimaryTimePattern = primaryTimePattern(this.primaryPatternLeftBoundary(), primaryPrefix, primarySuffix, this.patternFlags());
    this.cachedPrimaryPrefix = primaryPrefix;
    this.cachedPrimarySuffix = primarySuffix;
    return this.cachedPrimaryTimePattern;
  }
  getFollowingTimePatternThroughCache() {
    const followingPhase = this.followingPhase();
    const followingSuffix = this.followingSuffix();
    if (this.cachedFollowingPhase === followingPhase && this.cachedFollowingSuffix === followingSuffix) {
      return this.cachedFollowingTimePatten;
    }
    this.cachedFollowingTimePatten = followingTimePatten(followingPhase, followingSuffix);
    this.cachedFollowingPhase = followingPhase;
    this.cachedFollowingSuffix = followingSuffix;
    return this.cachedFollowingTimePatten;
  }
}
//# sourceMappingURL=AbstractTimeExpressionParser.js.map

/***/ }),

/***/ 16256:
/*!*****************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/parsers/ISOFormatParser.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ISOFormatParser)
/* harmony export */ });
/* harmony import */ var _AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundary.js */ 86684);

const PATTERN = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})" + "(?:T" + "([0-9]{1,2}):([0-9]{1,2})" + "(?:" + ":([0-9]{1,2})(?:\\.(\\d{1,4}))?" + ")?" + "(?:" + "Z|([+-]\\d{2}):?(\\d{2})?" + ")?" + ")?" + "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NUMBER_GROUP = 2;
const DATE_NUMBER_GROUP = 3;
const HOUR_NUMBER_GROUP = 4;
const MINUTE_NUMBER_GROUP = 5;
const SECOND_NUMBER_GROUP = 6;
const MILLISECOND_NUMBER_GROUP = 7;
const TZD_HOUR_OFFSET_GROUP = 8;
const TZD_MINUTE_OFFSET_GROUP = 9;
class ISOFormatParser extends _AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const components = {};
    components["year"] = parseInt(match[YEAR_NUMBER_GROUP]);
    components["month"] = parseInt(match[MONTH_NUMBER_GROUP]);
    components["day"] = parseInt(match[DATE_NUMBER_GROUP]);
    if (match[HOUR_NUMBER_GROUP] != null) {
      components["hour"] = parseInt(match[HOUR_NUMBER_GROUP]);
      components["minute"] = parseInt(match[MINUTE_NUMBER_GROUP]);
      if (match[SECOND_NUMBER_GROUP] != null) {
        components["second"] = parseInt(match[SECOND_NUMBER_GROUP]);
      }
      if (match[MILLISECOND_NUMBER_GROUP] != null) {
        components["millisecond"] = parseInt(match[MILLISECOND_NUMBER_GROUP]);
      }
      if (match[TZD_HOUR_OFFSET_GROUP] == null) {
        components["timezoneOffset"] = 0;
      } else {
        const hourOffset = parseInt(match[TZD_HOUR_OFFSET_GROUP]);
        let minuteOffset = 0;
        if (match[TZD_MINUTE_OFFSET_GROUP] != null) {
          minuteOffset = parseInt(match[TZD_MINUTE_OFFSET_GROUP]);
        }
        let offset = hourOffset * 60;
        if (offset < 0) {
          offset -= minuteOffset;
        } else {
          offset += minuteOffset;
        }
        components["timezoneOffset"] = offset;
      }
    }
    return components;
  }
}
//# sourceMappingURL=ISOFormatParser.js.map


/***/ }),

/***/ 18128:
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlashDateFormatParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../calculation/years.js */ 67684);

const PATTERN = new RegExp("([^\\d]|^)" + "([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})" + "(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?" + "(\\W|$)", "i");
const OPENING_GROUP = 1;
const ENDING_GROUP = 5;
const FIRST_NUMBERS_GROUP = 2;
const SECOND_NUMBERS_GROUP = 3;
const YEAR_GROUP = 4;
class SlashDateFormatParser {
  constructor(littleEndian) {
    this.groupNumberMonth = littleEndian ? SECOND_NUMBERS_GROUP : FIRST_NUMBERS_GROUP;
    this.groupNumberDay = littleEndian ? FIRST_NUMBERS_GROUP : SECOND_NUMBERS_GROUP;
  }
  pattern() {
    return PATTERN;
  }
  extract(context, match) {
    if (match[OPENING_GROUP].length == 0 && match.index > 0 && match.index < context.text.length) {
      const previousChar = context.text[match.index - 1];
      if (previousChar >= "0" && previousChar <= "9") {
        return;
      }
    }
    const index = match.index + match[OPENING_GROUP].length;
    const text = match[0].substr(match[OPENING_GROUP].length, match[0].length - match[OPENING_GROUP].length - match[ENDING_GROUP].length);
    if (text.match(/^\d\.\d$/) || text.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) {
      return;
    }
    if (!match[YEAR_GROUP] && match[0].indexOf("/") < 0) {
      return;
    }
    const result = context.createParsingResult(index, text);
    let month = parseInt(match[this.groupNumberMonth]);
    let day = parseInt(match[this.groupNumberDay]);
    if (month < 1 || month > 12) {
      if (month > 12) {
        if (day >= 1 && day <= 12 && month <= 31) {
          [day, month] = [month, day];
        } else {
          return null;
        }
      }
    }
    if (day < 1 || day > 31) {
      return null;
    }
    result.start.assign("day", day);
    result.start.assign("month", month);
    if (match[YEAR_GROUP]) {
      const rawYearNumber = parseInt(match[YEAR_GROUP]);
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_0__.findMostLikelyADYear)(rawYearNumber);
      result.start.assign("year", year);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_0__.findYearClosestToRef)(context.refDate, day, month);
      result.start.imply("year", year);
    }
    return result;
  }
}
//# sourceMappingURL=SlashDateFormatParser.js.map


/***/ }),

/***/ 46080:
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractRefiners.js */ 63656);

class AbstractMergeDateRangeRefiner extends _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    return !currentResult.end && !nextResult.end && textBetween.match(this.patternBetween()) != null;
  }
  mergeResults(textBetween, fromResult, toResult) {
    if (!fromResult.start.isOnlyWeekdayComponent() && !toResult.start.isOnlyWeekdayComponent()) {
      toResult.start.getCertainComponents().forEach(key => {
        if (!fromResult.start.isCertain(key)) {
          fromResult.start.imply(key, toResult.start.get(key));
        }
      });
      fromResult.start.getCertainComponents().forEach(key => {
        if (!toResult.start.isCertain(key)) {
          toResult.start.imply(key, fromResult.start.get(key));
        }
      });
    }
    if (fromResult.start.date().getTime() > toResult.start.date().getTime()) {
      let fromMoment = fromResult.start.dayjs();
      let toMoment = toResult.start.dayjs();
      if (toResult.start.isOnlyWeekdayComponent() && toMoment.add(7, "days").isAfter(fromMoment)) {
        toMoment = toMoment.add(7, "days");
        toResult.start.imply("day", toMoment.date());
        toResult.start.imply("month", toMoment.month() + 1);
        toResult.start.imply("year", toMoment.year());
      } else if (fromResult.start.isOnlyWeekdayComponent() && fromMoment.add(-7, "days").isBefore(toMoment)) {
        fromMoment = fromMoment.add(-7, "days");
        fromResult.start.imply("day", fromMoment.date());
        fromResult.start.imply("month", fromMoment.month() + 1);
        fromResult.start.imply("year", fromMoment.year());
      } else if (toResult.start.isDateWithUnknownYear() && toMoment.add(1, "years").isAfter(fromMoment)) {
        toMoment = toMoment.add(1, "years");
        toResult.start.imply("year", toMoment.year());
      } else if (fromResult.start.isDateWithUnknownYear() && fromMoment.add(-1, "years").isBefore(toMoment)) {
        fromMoment = fromMoment.add(-1, "years");
        fromResult.start.imply("year", fromMoment.year());
      } else {
        [toResult, fromResult] = [fromResult, toResult];
      }
    }
    const result = fromResult.clone();
    result.start = fromResult.start;
    result.end = toResult.start;
    result.index = Math.min(fromResult.index, toResult.index);
    if (fromResult.index < toResult.index) {
      result.text = fromResult.text + textBetween + toResult.text;
    } else {
      result.text = toResult.text + textBetween + fromResult.text;
    }
    return result;
  }
}
//# sourceMappingURL=AbstractMergeDateRangeRefiner.js.map


/***/ }),

/***/ 27312:
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractRefiners.js */ 63656);
/* harmony import */ var _calculation_mergingCalculation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/mergingCalculation.js */ 56572);


class AbstractMergeDateTimeRefiner extends _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    return (currentResult.start.isOnlyDate() && nextResult.start.isOnlyTime() || nextResult.start.isOnlyDate() && currentResult.start.isOnlyTime()) && textBetween.match(this.patternBetween()) != null;
  }
  mergeResults(textBetween, currentResult, nextResult) {
    const result = currentResult.start.isOnlyDate() ? (0,_calculation_mergingCalculation_js__WEBPACK_IMPORTED_MODULE_1__.mergeDateTimeResult)(currentResult, nextResult) : (0,_calculation_mergingCalculation_js__WEBPACK_IMPORTED_MODULE_1__.mergeDateTimeResult)(nextResult, currentResult);
    result.index = currentResult.index;
    result.text = currentResult.text + textBetween + nextResult.text;
    return result;
  }
}
//# sourceMappingURL=AbstractMergeDateTimeRefiner.js.map


/***/ }),

/***/ 34864:
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneAbbrRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExtractTimezoneAbbrRefiner)
/* harmony export */ });
/* harmony import */ var _timezone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../timezone.js */ 472);

const TIMEZONE_NAME_PATTERN = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class ExtractTimezoneAbbrRefiner {
  constructor(timezoneOverrides) {
    this.timezoneOverrides = timezoneOverrides;
  }
  refine(context, results) {
    const timezoneOverrides = context.option.timezones ?? {};
    results.forEach(result => {
      const suffix = context.text.substring(result.index + result.text.length);
      const match = TIMEZONE_NAME_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      const timezoneAbbr = match[1].toUpperCase();
      const refDate = result.start.date() ?? result.refDate ?? new Date();
      const tzOverrides = {
        ...this.timezoneOverrides,
        ...timezoneOverrides
      };
      const extractedTimezoneOffset = (0,_timezone_js__WEBPACK_IMPORTED_MODULE_0__.toTimezoneOffset)(timezoneAbbr, refDate, tzOverrides);
      if (extractedTimezoneOffset == null) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting timezone: '${timezoneAbbr}' into: ${extractedTimezoneOffset} for: ${result.start}`);
      });
      const currentTimezoneOffset = result.start.get("timezoneOffset");
      if (currentTimezoneOffset !== null && extractedTimezoneOffset != currentTimezoneOffset) {
        if (result.start.isCertain("timezoneOffset")) {
          return;
        }
        if (timezoneAbbr != match[1]) {
          return;
        }
      }
      if (result.start.isOnlyDate()) {
        if (timezoneAbbr != match[1]) {
          return;
        }
      }
      result.text += match[0];
      if (!result.start.isCertain("timezoneOffset")) {
        result.start.assign("timezoneOffset", extractedTimezoneOffset);
      }
      if (result.end != null && !result.end.isCertain("timezoneOffset")) {
        result.end.assign("timezoneOffset", extractedTimezoneOffset);
      }
    });
    return results;
  }
}
//# sourceMappingURL=ExtractTimezoneAbbrRefiner.js.map


/***/ }),

/***/ 73640:
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneOffsetRefiner.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExtractTimezoneOffsetRefiner)
/* harmony export */ });
const TIMEZONE_OFFSET_PATTERN = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
const TIMEZONE_OFFSET_SIGN_GROUP = 1;
const TIMEZONE_OFFSET_HOUR_OFFSET_GROUP = 2;
const TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP = 3;
class ExtractTimezoneOffsetRefiner {
  refine(context, results) {
    results.forEach(function (result) {
      if (result.start.isCertain("timezoneOffset")) {
        return;
      }
      const suffix = context.text.substring(result.index + result.text.length);
      const match = TIMEZONE_OFFSET_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting timezone: '${match[0]}' into : ${result}`);
      });
      const hourOffset = parseInt(match[TIMEZONE_OFFSET_HOUR_OFFSET_GROUP]);
      const minuteOffset = parseInt(match[TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP] || "0");
      let timezoneOffset = hourOffset * 60 + minuteOffset;
      if (timezoneOffset > 14 * 60) {
        return;
      }
      if (match[TIMEZONE_OFFSET_SIGN_GROUP] === "-") {
        timezoneOffset = -timezoneOffset;
      }
      if (result.end != null) {
        result.end.assign("timezoneOffset", timezoneOffset);
      }
      result.start.assign("timezoneOffset", timezoneOffset);
      result.text += match[0];
    });
    return results;
  }
}
//# sourceMappingURL=ExtractTimezoneOffsetRefiner.js.map


/***/ }),

/***/ 88264:
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/ForwardDateRefiner.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForwardDateRefiner)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dayjs.js */ 37616);


class ForwardDateRefiner {
  refine(context, results) {
    if (!context.option.forwardDate) {
      return results;
    }
    results.forEach(function (result) {
      let refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
      if (result.start.isOnlyTime() && refMoment.isAfter(result.start.dayjs())) {
        refMoment = refMoment.add(1, "day");
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_1__.implySimilarDate)(result.start, refMoment);
        if (result.end && result.end.isOnlyTime()) {
          (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_1__.implySimilarDate)(result.end, refMoment);
          if (result.start.dayjs().isAfter(result.end.dayjs())) {
            refMoment = refMoment.add(1, "day");
            (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_1__.implySimilarDate)(result.end, refMoment);
          }
        }
      }
      if (result.start.isOnlyWeekdayComponent() && refMoment.isAfter(result.start.dayjs())) {
        if (refMoment.day() >= result.start.get("weekday")) {
          refMoment = refMoment.day(result.start.get("weekday") + 7);
        } else {
          refMoment = refMoment.day(result.start.get("weekday"));
        }
        result.start.imply("day", refMoment.date());
        result.start.imply("month", refMoment.month() + 1);
        result.start.imply("year", refMoment.year());
        context.debug(() => {
          console.log(`Forward weekly adjusted for ${result} (${result.start})`);
        });
        if (result.end && result.end.isOnlyWeekdayComponent()) {
          if (refMoment.day() > result.end.get("weekday")) {
            refMoment = refMoment.day(result.end.get("weekday") + 7);
          } else {
            refMoment = refMoment.day(result.end.get("weekday"));
          }
          result.end.imply("day", refMoment.date());
          result.end.imply("month", refMoment.month() + 1);
          result.end.imply("year", refMoment.year());
          context.debug(() => {
            console.log(`Forward weekly adjusted for ${result} (${result.end})`);
          });
        }
      }
      if (result.start.isDateWithUnknownYear() && refMoment.isAfter(result.start.dayjs())) {
        for (let i = 0; i < 3 && refMoment.isAfter(result.start.dayjs()); i++) {
          result.start.imply("year", result.start.get("year") + 1);
          context.debug(() => {
            console.log(`Forward yearly adjusted for ${result} (${result.start})`);
          });
          if (result.end && !result.end.isCertain("year")) {
            result.end.imply("year", result.end.get("year") + 1);
            context.debug(() => {
              console.log(`Forward yearly adjusted for ${result} (${result.end})`);
            });
          }
        }
      }
    });
    return results;
  }
}
//# sourceMappingURL=ForwardDateRefiner.js.map


/***/ }),

/***/ 82515:
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/MergeWeekdayComponentRefiner.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MergeWeekdayComponentRefiner)
/* harmony export */ });
/* harmony import */ var _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractRefiners.js */ 63656);

class MergeWeekdayComponentRefiner extends _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
  mergeResults(textBetween, currentResult, nextResult) {
    const newResult = nextResult.clone();
    newResult.index = currentResult.index;
    newResult.text = currentResult.text + textBetween + newResult.text;
    newResult.start.assign("weekday", currentResult.start.get("weekday"));
    if (newResult.end) {
      newResult.end.assign("weekday", currentResult.start.get("weekday"));
    }
    return newResult;
  }
  shouldMergeResults(textBetween, currentResult, nextResult) {
    const weekdayThenNormalDate = currentResult.start.isOnlyWeekdayComponent() && !currentResult.start.isCertain("hour") && nextResult.start.isCertain("day");
    return weekdayThenNormalDate && textBetween.match(/^,?\s*$/) != null;
  }
}
//# sourceMappingURL=MergeWeekdayComponentRefiner.js.map


/***/ }),

/***/ 91496:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/OverlapRemovalRefiner.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OverlapRemovalRefiner)
/* harmony export */ });
class OverlapRemovalRefiner {
  refine(context, results) {
    if (results.length < 2) {
      return results;
    }
    const filteredResults = [];
    let prevResult = results[0];
    for (let i = 1; i < results.length; i++) {
      const result = results[i];
      if (result.index >= prevResult.index + prevResult.text.length) {
        filteredResults.push(prevResult);
        prevResult = result;
        continue;
      }
      let kept = null;
      let removed = null;
      if (result.text.length > prevResult.text.length) {
        kept = result;
        removed = prevResult;
      } else {
        kept = prevResult;
        removed = result;
      }
      context.debug(() => {
        console.log(`${this.constructor.name} remove ${removed} by ${kept}`);
      });
      prevResult = kept;
    }
    if (prevResult != null) {
      filteredResults.push(prevResult);
    }
    return filteredResults;
  }
}
//# sourceMappingURL=OverlapRemovalRefiner.js.map


/***/ }),

/***/ 74476:
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/UnlikelyFormatFilter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnlikelyFormatFilter)
/* harmony export */ });
/* harmony import */ var _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractRefiners.js */ 63656);

class UnlikelyFormatFilter extends _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.Filter {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  isValid(context, result) {
    if (result.text.replace(" ", "").match(/^\d*(\.\d*)?$/)) {
      context.debug(() => {
        console.log(`Removing unlikely result '${result.text}'`);
      });
      return false;
    }
    if (!result.start.isValidDate()) {
      context.debug(() => {
        console.log(`Removing invalid result: ${result} (${result.start})`);
      });
      return false;
    }
    if (result.end && !result.end.isValidDate()) {
      context.debug(() => {
        console.log(`Removing invalid result: ${result} (${result.end})`);
      });
      return false;
    }
    if (this.strictMode) {
      return this.isStrictModeValid(context, result);
    }
    return true;
  }
  isStrictModeValid(context, result) {
    if (result.start.isOnlyWeekdayComponent()) {
      context.debug(() => {
        console.log(`(Strict) Removing weekday only component: ${result} (${result.end})`);
      });
      return false;
    }
    if (result.start.isOnlyTime() && (!result.start.isCertain("hour") || !result.start.isCertain("minute"))) {
      context.debug(() => {
        console.log(`(Strict) Removing uncertain time component: ${result} (${result.end})`);
      });
      return false;
    }
    return true;
  }
}
//# sourceMappingURL=UnlikelyFormatFilter.js.map


/***/ }),

/***/ 72560:
/*!*************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/configurations.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   includeCommonConfiguration: () => (/* binding */ includeCommonConfiguration)
/* harmony export */ });
/* harmony import */ var _common_refiners_ExtractTimezoneAbbrRefiner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/refiners/ExtractTimezoneAbbrRefiner.js */ 34864);
/* harmony import */ var _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/refiners/ExtractTimezoneOffsetRefiner.js */ 73640);
/* harmony import */ var _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/refiners/OverlapRemovalRefiner.js */ 91496);
/* harmony import */ var _common_refiners_ForwardDateRefiner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/refiners/ForwardDateRefiner.js */ 88264);
/* harmony import */ var _common_refiners_UnlikelyFormatFilter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/refiners/UnlikelyFormatFilter.js */ 74476);
/* harmony import */ var _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/parsers/ISOFormatParser.js */ 16256);
/* harmony import */ var _common_refiners_MergeWeekdayComponentRefiner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/refiners/MergeWeekdayComponentRefiner.js */ 82515);







function includeCommonConfiguration(configuration, strictMode = false) {
  configuration.parsers.unshift(new _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
  configuration.refiners.unshift(new _common_refiners_MergeWeekdayComponentRefiner_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
  configuration.refiners.unshift(new _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
  configuration.refiners.unshift(new _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  configuration.refiners.push(new _common_refiners_ExtractTimezoneAbbrRefiner_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
  configuration.refiners.push(new _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  configuration.refiners.push(new _common_refiners_ForwardDateRefiner_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
  configuration.refiners.push(new _common_refiners_UnlikelyFormatFilter_js__WEBPACK_IMPORTED_MODULE_6__["default"](strictMode));
  return configuration;
}
//# sourceMappingURL=configurations.js.map

/***/ }),

/***/ 17424:
/*!****************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_1__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_2__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   de: () => (/* reexport module object */ _locales_de_index_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   en: () => (/* reexport module object */ _locales_en_index_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   es: () => (/* reexport module object */ _locales_es_index_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   fr: () => (/* reexport module object */ _locales_fr_index_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   ja: () => (/* reexport module object */ _locales_ja_index_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   nl: () => (/* reexport module object */ _locales_nl_index_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   pt: () => (/* reexport module object */ _locales_pt_index_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   ru: () => (/* reexport module object */ _locales_ru_index_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   strict: () => (/* binding */ strict),
/* harmony export */   uk: () => (/* reexport module object */ _locales_uk_index_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   zh: () => (/* reexport module object */ _locales_zh_index_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _locales_en_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locales/en/index.js */ 54572);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ 49276);
/* harmony import */ var _locales_de_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/de/index.js */ 32484);
/* harmony import */ var _locales_fr_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/fr/index.js */ 18948);
/* harmony import */ var _locales_ja_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locales/ja/index.js */ 93520);
/* harmony import */ var _locales_pt_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locales/pt/index.js */ 59632);
/* harmony import */ var _locales_nl_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locales/nl/index.js */ 18584);
/* harmony import */ var _locales_zh_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locales/zh/index.js */ 38412);
/* harmony import */ var _locales_ru_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locales/ru/index.js */ 9256);
/* harmony import */ var _locales_es_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locales/es/index.js */ 13100);
/* harmony import */ var _locales_uk_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locales/uk/index.js */ 62840);
















const strict = _locales_en_index_js__WEBPACK_IMPORTED_MODULE_0__.strict;
const casual = _locales_en_index_js__WEBPACK_IMPORTED_MODULE_0__.casual;
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 16479:
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ 45944);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ 67684);


const WEEKDAY_DICTIONARY = {
  "sonntag": 0,
  "so": 0,
  "montag": 1,
  "mo": 1,
  "dienstag": 2,
  "di": 2,
  "mittwoch": 3,
  "mi": 3,
  "donnerstag": 4,
  "do": 4,
  "freitag": 5,
  "fr": 5,
  "samstag": 6,
  "sa": 6
};
const MONTH_DICTIONARY = {
  "januar": 1,
  "jänner": 1,
  "janner": 1,
  "jan": 1,
  "jan.": 1,
  "februar": 2,
  "feber": 2,
  "feb": 2,
  "feb.": 2,
  "märz": 3,
  "maerz": 3,
  "mär": 3,
  "mär.": 3,
  "mrz": 3,
  "mrz.": 3,
  "april": 4,
  "apr": 4,
  "apr.": 4,
  "mai": 5,
  "juni": 6,
  "jun": 6,
  "jun.": 6,
  "juli": 7,
  "jul": 7,
  "jul.": 7,
  "august": 8,
  "aug": 8,
  "aug.": 8,
  "september": 9,
  "sep": 9,
  "sep.": 9,
  "sept": 9,
  "sept.": 9,
  "oktober": 10,
  "okt": 10,
  "okt.": 10,
  "november": 11,
  "nov": 11,
  "nov.": 11,
  "dezember": 12,
  "dez": 12,
  "dez.": 12
};
const INTEGER_WORD_DICTIONARY = {
  "eins": 1,
  "eine": 1,
  "einem": 1,
  "einen": 1,
  "einer": 1,
  "zwei": 2,
  "drei": 3,
  "vier": 4,
  "fünf": 5,
  "fuenf": 5,
  "sechs": 6,
  "sieben": 7,
  "acht": 8,
  "neun": 9,
  "zehn": 10,
  "elf": 11,
  "zwölf": 12,
  "zwoelf": 12
};
const TIME_UNIT_DICTIONARY = {
  sek: "second",
  sekunde: "second",
  sekunden: "second",
  min: "minute",
  minute: "minute",
  minuten: "minute",
  h: "hour",
  std: "hour",
  stunde: "hour",
  stunden: "hour",
  tag: "d",
  tage: "d",
  tagen: "d",
  woche: "week",
  wochen: "week",
  monat: "month",
  monate: "month",
  monaten: "month",
  monats: "month",
  quartal: "quarter",
  quartals: "quarter",
  quartale: "quarter",
  quartalen: "quarter",
  a: "year",
  j: "year",
  jr: "year",
  jahr: "year",
  jahre: "year",
  jahren: "year",
  jahres: "year"
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
    return INTEGER_WORD_DICTIONARY[num];
  } else if (num === "ein" || num === "einer" || num === "einem" || num === "einen" || num === "eine") {
    return 1;
  } else if (num.match(/wenigen/)) {
    return 2;
  } else if (num.match(/halb/) || num.match(/halben/)) {
    return 0.5;
  } else if (num.match(/einigen/)) {
    return 3;
  } else if (num.match(/mehreren/)) {
    return 7;
  }
  return parseFloat(num);
}
const YEAR_PATTERN = `(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)`;
function parseYear(match) {
  if (/v/i.test(match)) {
    return -parseInt(match.replace(/[^0-9]+/gi, ""));
  }
  if (/n/i.test(match)) {
    return parseInt(match.replace(/[^0-9]+/gi, ""));
  }
  if (/z/i.test(match)) {
    return parseInt(match.replace(/[^0-9]+/gi, ""));
  }
  const rawYearNumber = parseInt(match);
  return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length);
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 32484:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configurations.js */ 72560);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ 18128);
/* harmony import */ var _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/parsers/ISOFormatParser.js */ 16256);
/* harmony import */ var _parsers_DETimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/DETimeExpressionParser.js */ 71544);
/* harmony import */ var _parsers_DEWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/DEWeekdayParser.js */ 25528);
/* harmony import */ var _parsers_DESpecificTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/DESpecificTimeExpressionParser.js */ 70528);
/* harmony import */ var _refiners_DEMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refiners/DEMergeDateRangeRefiner.js */ 47712);
/* harmony import */ var _refiners_DEMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./refiners/DEMergeDateTimeRefiner.js */ 5104);
/* harmony import */ var _parsers_DECasualDateParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/DECasualDateParser.js */ 20488);
/* harmony import */ var _parsers_DECasualTimeParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/DECasualTimeParser.js */ 29480);
/* harmony import */ var _parsers_DEMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/DEMonthNameLittleEndianParser.js */ 73628);
/* harmony import */ var _parsers_DETimeUnitRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/DETimeUnitRelativeFormatParser.js */ 22632);
/* harmony import */ var _parsers_DETimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/DETimeUnitWithinFormatParser.js */ 84168);


















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
  const option = createConfiguration(false, littleEndian);
  option.parsers.unshift(new _parsers_DECasualTimeParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  option.parsers.unshift(new _parsers_DECasualDateParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
  option.parsers.unshift(new _parsers_DETimeUnitRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
  return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
  return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_6__.includeCommonConfiguration)({
    parsers: [new _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](), new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](littleEndian), new _parsers_DETimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](), new _parsers_DESpecificTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _parsers_DEMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](), new _parsers_DEWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](), new _parsers_DETimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_13__["default"]()],
    refiners: [new _refiners_DEMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_14__["default"](), new _refiners_DEMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_15__["default"]()]
  }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 20488:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DECasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DECasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);
/* harmony import */ var _DECasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DECasualTimeParser.js */ 29480);
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);





const PATTERN = new RegExp(`(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)` + `(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?` + `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const TIME_GROUP = 2;
class DECasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return PATTERN;
  }
  innerExtract(context, match) {
    let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const dateKeyword = (match[DATE_GROUP] || "").toLowerCase();
    const timeKeyword = (match[TIME_GROUP] || "").toLowerCase();
    let component = context.createParsingComponents();
    switch (dateKeyword) {
      case "jetzt":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
        break;
      case "heute":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.today(context.reference);
        break;
      case "morgen":
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
        break;
      case "übermorgen":
      case "uebermorgen":
        targetDate = targetDate.add(1, "day");
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
        break;
      case "gestern":
        targetDate = targetDate.add(-1, "day");
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.implySimilarTime)(component, targetDate);
        break;
      case "vorgestern":
        targetDate = targetDate.add(-2, "day");
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.implySimilarTime)(component, targetDate);
        break;
      default:
        if (dateKeyword.match(/letzte\s*nacht/)) {
          if (targetDate.hour() > 6) {
            targetDate = targetDate.add(-1, "day");
          }
          (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
          component.imply("hour", 0);
        }
        break;
    }
    if (timeKeyword) {
      component = _DECasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"].extractTimeComponents(component, timeKeyword);
    }
    return component;
  }
}
//# sourceMappingURL=DECasualDateParser.js.map


/***/ }),

/***/ 29480:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DECasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DECasualTimeParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);





class DECasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const timeKeywordPattern = match[2].toLowerCase();
    const component = context.createParsingComponents();
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.implySimilarTime)(component, targetDate);
    return DECasualTimeParser.extractTimeComponents(component, timeKeywordPattern);
  }
  static extractTimeComponents(component, timeKeywordPattern) {
    switch (timeKeywordPattern) {
      case "morgen":
        component.imply("hour", 6);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
        break;
      case "vormittag":
        component.imply("hour", 9);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
        break;
      case "mittag":
      case "mittags":
        component.imply("hour", 12);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
        break;
      case "nachmittag":
        component.imply("hour", 15);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
        break;
      case "abend":
        component.imply("hour", 18);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
        break;
      case "nacht":
        component.imply("hour", 22);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
        break;
      case "mitternacht":
        if (component.get("hour") > 1) {
          component = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_4__.addImpliedTimeUnits)(component, {
            "day": 1
          });
        }
        component.imply("hour", 0);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
        break;
    }
    return component;
  }
}
//# sourceMappingURL=DECasualTimeParser.js.map


/***/ }),

/***/ 73628:
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DEMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DEMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 16479);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);





const PATTERN = new RegExp("(?:am\\s*?)?" + "(?:den\\s*?)?" + `([0-9]{1,2})\\.` + `(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` + `(?:(?:-|/|,?\\s*)(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}(?![^\\s]\\d)))?` + `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class DEMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = parseInt(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP]) {
      const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
      result.start.assign("year", yearNumber);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
      result.start.imply("year", year);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = parseInt(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
//# sourceMappingURL=DEMonthNameLittleEndianParser.js.map


/***/ }),

/***/ 70528:
/*!************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DESpecificTimeExpressionParser.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DESpecificTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types.js */ 49276);

const FIRST_REG_PATTERN = new RegExp("(^|\\s|T)" + "(?:(?:um|von)\\s*)?" + "(\\d{1,2})(?:h|:)?" + "(?:(\\d{1,2})(?:m|:)?)?" + "(?:(\\d{1,2})(?:s)?)?" + "(?:\\s*Uhr)?" + "(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?" + "(?=\\W|$)", "i");
const SECOND_REG_PATTERN = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|bis(?:\\s+um)?|\\?)\\s*" + "(\\d{1,2})(?:h|:)?" + "(?:(\\d{1,2})(?:m|:)?)?" + "(?:(\\d{1,2})(?:s)?)?" + "(?:\\s*Uhr)?" + "(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?" + "(?=\\W|$)", "i");
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const AM_PM_HOUR_GROUP = 5;
class DESpecificTimeExpressionParser {
  pattern(context) {
    return FIRST_REG_PATTERN;
  }
  extract(context, match) {
    const result = context.createParsingResult(match.index + match[1].length, match[0].substring(match[1].length));
    if (result.text.match(/^\d{4}$/)) {
      match.index += match[0].length;
      return null;
    }
    result.start = DESpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), match);
    if (!result.start) {
      match.index += match[0].length;
      return null;
    }
    const remainingText = context.text.substring(match.index + match[0].length);
    const secondMatch = SECOND_REG_PATTERN.exec(remainingText);
    if (secondMatch) {
      result.end = DESpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), secondMatch);
      if (result.end) {
        result.text += secondMatch[0];
      }
    }
    return result;
  }
  static extractTimeComponent(extractingComponents, match) {
    let hour = 0;
    let minute = 0;
    let meridiem = null;
    hour = parseInt(match[HOUR_GROUP]);
    if (match[MINUTE_GROUP] != null) {
      minute = parseInt(match[MINUTE_GROUP]);
    }
    if (minute >= 60 || hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP] != null) {
      if (hour > 12) return null;
      const ampm = match[AM_PM_HOUR_GROUP].toLowerCase();
      if (ampm.match(/morgen|vormittag/)) {
        meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
        if (hour == 12) {
          hour = 0;
        }
      }
      if (ampm.match(/nachmittag|abend/)) {
        meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
        if (hour != 12) {
          hour += 12;
        }
      }
      if (ampm.match(/nacht/)) {
        if (hour == 12) {
          meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
          hour = 0;
        } else if (hour < 6) {
          meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
        } else {
          meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
          hour += 12;
        }
      }
    }
    extractingComponents.assign("hour", hour);
    extractingComponents.assign("minute", minute);
    if (meridiem !== null) {
      extractingComponents.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        extractingComponents.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
      } else {
        extractingComponents.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
      }
    }
    if (match[SECOND_GROUP] != null) {
      const second = parseInt(match[SECOND_GROUP]);
      if (second >= 60) return null;
      extractingComponents.assign("second", second);
    }
    return extractingComponents;
  }
}
//# sourceMappingURL=DESpecificTimeExpressionParser.js.map


/***/ }),

/***/ 71544:
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DETimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ 93912);

class DETimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:um|von)\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|bis)\\s*";
  }
  extractPrimaryTimeComponents(context, match) {
    if (match[0].match(/^\s*\d{4}\s*$/)) {
      return null;
    }
    return super.extractPrimaryTimeComponents(context, match);
  }
}
//# sourceMappingURL=DETimeExpressionParser.js.map


/***/ }),

/***/ 22632:
/*!************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeUnitRelativeFormatParser.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DETimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 16479);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);





class DETimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`(?:\\s*((?:nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER_PATTERN})?` + `(?:\\s*(nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?` + `\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNIT_DICTIONARY)})`, "i");
  }
  innerExtract(context, match) {
    const num = match[2] ? (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseNumberPattern)(match[2]) : 1;
    const unit = _constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNIT_DICTIONARY[match[4].toLowerCase()];
    let timeUnits = {};
    timeUnits[unit] = num;
    let modifier = match[1] || match[3] || "";
    modifier = modifier.toLowerCase();
    if (!modifier) {
      return;
    }
    if (/vor/.test(modifier) || /letzte/.test(modifier) || /vergangen/.test(modifier)) {
      timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_3__.reverseTimeUnits)(timeUnits);
    }
    return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=DETimeUnitRelativeFormatParser.js.map


/***/ }),

/***/ 84168:
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DETimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 16479);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



class DETimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp(`(?:in|für|während)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
    return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=DETimeUnitWithinFormatParser.js.map


/***/ }),

/***/ 25528:
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DEWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DEWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 16479);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ 64336);




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" + "(?:a[mn]\\s*?)?" + "(?:(diese[mn]|letzte[mn]|n(?:ä|ae)chste[mn])\\s*)?" + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` + "(?:\\s*(?:\\,|\\)|\\）))?" + "(?:\\s*(diese|letzte|n(?:ä|ae)chste)\\s*woche)?" + "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const SUFFIX_GROUP = 3;
const WEEKDAY_GROUP = 2;
class DEWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
    const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
    const prefix = match[PREFIX_GROUP];
    const postfix = match[SUFFIX_GROUP];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord.match(/letzte/)) {
      modifier = "last";
    } else if (modifierWord.match(/chste/)) {
      modifier = "next";
    } else if (modifierWord.match(/diese/)) {
      modifier = "this";
    }
    return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, offset, modifier);
  }
}
//# sourceMappingURL=DEWeekdayParser.js.map


/***/ }),

/***/ 47712:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/refiners/DEMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DEMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class DEMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
  }
}
//# sourceMappingURL=DEMergeDateRangeRefiner.js.map


/***/ }),

/***/ 5104:
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/refiners/DEMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DEMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class DEMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return new RegExp("^\\s*(T|um|am|,|-)?\\s*$");
  }
}
//# sourceMappingURL=DEMergeDateTimeRefiner.js.map


/***/ }),

/***/ 93628:
/*!***********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/configuration.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENDefaultConfiguration)
/* harmony export */ });
/* harmony import */ var _parsers_ENTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/ENTimeUnitWithinFormatParser.js */ 70016);
/* harmony import */ var _parsers_ENMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/ENMonthNameLittleEndianParser.js */ 89056);
/* harmony import */ var _parsers_ENMonthNameMiddleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/ENMonthNameMiddleEndianParser.js */ 18732);
/* harmony import */ var _parsers_ENMonthNameParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/ENMonthNameParser.js */ 29056);
/* harmony import */ var _parsers_ENCasualYearMonthDayParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/ENCasualYearMonthDayParser.js */ 74808);
/* harmony import */ var _parsers_ENSlashMonthFormatParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/ENSlashMonthFormatParser.js */ 24104);
/* harmony import */ var _parsers_ENTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/ENTimeExpressionParser.js */ 44648);
/* harmony import */ var _parsers_ENTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/ENTimeUnitAgoFormatParser.js */ 72144);
/* harmony import */ var _parsers_ENTimeUnitLaterFormatParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/ENTimeUnitLaterFormatParser.js */ 72240);
/* harmony import */ var _refiners_ENMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./refiners/ENMergeDateRangeRefiner.js */ 82992);
/* harmony import */ var _refiners_ENMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refiners/ENMergeDateTimeRefiner.js */ 45768);
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configurations.js */ 72560);
/* harmony import */ var _parsers_ENCasualDateParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/ENCasualDateParser.js */ 25636);
/* harmony import */ var _parsers_ENCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/ENCasualTimeParser.js */ 24896);
/* harmony import */ var _parsers_ENWeekdayParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ENWeekdayParser.js */ 46528);
/* harmony import */ var _parsers_ENRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ENRelativeDateFormatParser.js */ 75704);
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ 18128);
/* harmony import */ var _parsers_ENTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ENTimeUnitCasualRelativeFormatParser.js */ 9728);
/* harmony import */ var _refiners_ENMergeRelativeAfterDateRefiner_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./refiners/ENMergeRelativeAfterDateRefiner.js */ 86376);
/* harmony import */ var _refiners_ENMergeRelativeFollowByDateRefiner_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./refiners/ENMergeRelativeFollowByDateRefiner.js */ 95976);
/* harmony import */ var _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/refiners/OverlapRemovalRefiner.js */ 91496);





















class ENDefaultConfiguration {
  createCasualConfiguration(littleEndian = false) {
    const option = this.createConfiguration(false, littleEndian);
    option.parsers.push(new _parsers_ENCasualDateParser_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
    option.parsers.push(new _parsers_ENCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
    option.parsers.push(new _parsers_ENMonthNameParser_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
    option.parsers.push(new _parsers_ENRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    option.parsers.push(new _parsers_ENTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
    return option;
  }
  createConfiguration(strictMode = true, littleEndian = false) {
    const options = (0,_configurations_js__WEBPACK_IMPORTED_MODULE_5__.includeCommonConfiguration)({
      parsers: [new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](littleEndian), new _parsers_ENTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](strictMode), new _parsers_ENMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](), new _parsers_ENMonthNameMiddleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](littleEndian), new _parsers_ENWeekdayParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _parsers_ENCasualYearMonthDayParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](), new _parsers_ENSlashMonthFormatParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](), new _parsers_ENTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](strictMode), new _parsers_ENTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_14__["default"](strictMode), new _parsers_ENTimeUnitLaterFormatParser_js__WEBPACK_IMPORTED_MODULE_15__["default"](strictMode)],
      refiners: [new _refiners_ENMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__["default"]()]
    }, strictMode);
    options.refiners.unshift(new _refiners_ENMergeRelativeFollowByDateRefiner_js__WEBPACK_IMPORTED_MODULE_17__["default"]());
    options.refiners.unshift(new _refiners_ENMergeRelativeAfterDateRefiner_js__WEBPACK_IMPORTED_MODULE_18__["default"]());
    options.refiners.unshift(new _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_19__["default"]());
    options.refiners.push(new _refiners_ENMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__["default"]());
    options.refiners.push(new _refiners_ENMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_20__["default"]());
    return options;
  }
}
//# sourceMappingURL=configuration.js.map


/***/ }),

/***/ 49400:
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FULL_MONTH_NAME_DICTIONARY: () => (/* binding */ FULL_MONTH_NAME_DICTIONARY),
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   ORDINAL_WORD_DICTIONARY: () => (/* binding */ ORDINAL_WORD_DICTIONARY),
/* harmony export */   TIME_UNITS_NO_ABBR_PATTERN: () => (/* binding */ TIME_UNITS_NO_ABBR_PATTERN),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   TIME_UNIT_DICTIONARY_NO_ABBR: () => (/* binding */ TIME_UNIT_DICTIONARY_NO_ABBR),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ 45944);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ 67684);


const WEEKDAY_DICTIONARY = {
  sunday: 0,
  sun: 0,
  "sun.": 0,
  monday: 1,
  mon: 1,
  "mon.": 1,
  tuesday: 2,
  tue: 2,
  "tue.": 2,
  wednesday: 3,
  wed: 3,
  "wed.": 3,
  thursday: 4,
  thurs: 4,
  "thurs.": 4,
  thur: 4,
  "thur.": 4,
  thu: 4,
  "thu.": 4,
  friday: 5,
  fri: 5,
  "fri.": 5,
  saturday: 6,
  sat: 6,
  "sat.": 6
};
const FULL_MONTH_NAME_DICTIONARY = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
};
const MONTH_DICTIONARY = {
  ...FULL_MONTH_NAME_DICTIONARY,
  jan: 1,
  "jan.": 1,
  feb: 2,
  "feb.": 2,
  mar: 3,
  "mar.": 3,
  apr: 4,
  "apr.": 4,
  jun: 6,
  "jun.": 6,
  jul: 7,
  "jul.": 7,
  aug: 8,
  "aug.": 8,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  oct: 10,
  "oct.": 10,
  nov: 11,
  "nov.": 11,
  dec: 12,
  "dec.": 12
};
const INTEGER_WORD_DICTIONARY = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12
};
const ORDINAL_WORD_DICTIONARY = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eighth: 8,
  ninth: 9,
  tenth: 10,
  eleventh: 11,
  twelfth: 12,
  thirteenth: 13,
  fourteenth: 14,
  fifteenth: 15,
  sixteenth: 16,
  seventeenth: 17,
  eighteenth: 18,
  nineteenth: 19,
  twentieth: 20,
  "twenty first": 21,
  "twenty-first": 21,
  "twenty second": 22,
  "twenty-second": 22,
  "twenty third": 23,
  "twenty-third": 23,
  "twenty fourth": 24,
  "twenty-fourth": 24,
  "twenty fifth": 25,
  "twenty-fifth": 25,
  "twenty sixth": 26,
  "twenty-sixth": 26,
  "twenty seventh": 27,
  "twenty-seventh": 27,
  "twenty eighth": 28,
  "twenty-eighth": 28,
  "twenty ninth": 29,
  "twenty-ninth": 29,
  "thirtieth": 30,
  "thirty first": 31,
  "thirty-first": 31
};
const TIME_UNIT_DICTIONARY_NO_ABBR = {
  second: "second",
  seconds: "second",
  minute: "minute",
  minutes: "minute",
  hour: "hour",
  hours: "hour",
  day: "d",
  days: "d",
  week: "week",
  weeks: "week",
  month: "month",
  months: "month",
  quarter: "quarter",
  quarters: "quarter",
  year: "year",
  years: "year"
};
const TIME_UNIT_DICTIONARY = {
  s: "second",
  sec: "second",
  second: "second",
  seconds: "second",
  m: "minute",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minutes: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  hour: "hour",
  hours: "hour",
  d: "d",
  day: "d",
  days: "d",
  w: "w",
  week: "week",
  weeks: "week",
  mo: "month",
  mon: "month",
  mos: "month",
  month: "month",
  months: "month",
  qtr: "quarter",
  quarter: "quarter",
  quarters: "quarter",
  y: "year",
  yr: "year",
  year: "year",
  years: "year",
  ...TIME_UNIT_DICTIONARY_NO_ABBR
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
    return INTEGER_WORD_DICTIONARY[num];
  } else if (num === "a" || num === "an" || num == "the") {
    return 1;
  } else if (num.match(/few/)) {
    return 3;
  } else if (num.match(/half/)) {
    return 0.5;
  } else if (num.match(/couple/)) {
    return 2;
  } else if (num.match(/several/)) {
    return 7;
  }
  return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function parseOrdinalNumberPattern(match) {
  let num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
    return ORDINAL_WORD_DICTIONARY[num];
  }
  num = num.replace(/(?:st|nd|rd|th)$/i, "");
  return parseInt(num);
}
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])`;
function parseYear(match) {
  if (/BE/i.test(match)) {
    match = match.replace(/BE/i, "");
    return parseInt(match) - 543;
  }
  if (/BCE?/i.test(match)) {
    match = match.replace(/BCE?/i, "");
    return -parseInt(match);
  }
  if (/(AD|CE)/i.test(match)) {
    match = match.replace(/(AD|CE)/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const SINGLE_TIME_UNIT_NO_ABBR_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY_NO_ABBR)})`;
const TIME_UNIT_CONNECTOR_PATTERN = `\\s{0,5},?(?:\\s*and)?\\s{0,5}`;
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
const TIME_UNITS_NO_ABBR_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_NO_ABBR_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
function parseTimeUnits(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length).trim();
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 54572:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   GB: () => (/* binding */ GB),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   configuration: () => (/* binding */ configuration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);
/* harmony import */ var _configuration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.js */ 93628);






const configuration = new _configuration_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(configuration.createCasualConfiguration(false));
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(configuration.createConfiguration(true, false));
const GB = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(configuration.createCasualConfiguration(true));
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 25636:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);




const PATTERN = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class ENCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return PATTERN;
  }
  innerExtract(context, match) {
    let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const lowerText = match[0].toLowerCase();
    let component = context.createParsingComponents();
    switch (lowerText) {
      case "now":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
        break;
      case "today":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.today(context.reference);
        break;
      case "yesterday":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.yesterday(context.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.tomorrow(context.reference);
        break;
      case "tonight":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.tonight(context.reference);
        break;
      default:
        if (lowerText.match(/last\s*night/)) {
          if (targetDate.hour() > 6) {
            targetDate = targetDate.add(-1, "day");
          }
          (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
          component.imply("hour", 0);
        }
        break;
    }
    component.addTag("parser/ENCasualDateParser");
    return component;
  }
}
//# sourceMappingURL=ENCasualDateParser.js.map


/***/ }),

/***/ 24896:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);


const PATTERN = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class ENCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    let component = null;
    switch (match[1].toLowerCase()) {
      case "afternoon":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.afternoon(context.reference);
        break;
      case "evening":
      case "night":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.evening(context.reference);
        break;
      case "midnight":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.midnight(context.reference);
        break;
      case "morning":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.morning(context.reference);
        break;
      case "noon":
      case "midday":
        component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.noon(context.reference);
        break;
    }
    if (component) {
      component.addTag("parser/ENCasualTimeParser");
    }
    return component;
  }
}
//# sourceMappingURL=ENCasualTimeParser.js.map


/***/ }),

/***/ 74808:
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualYearMonthDayParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENCasualYearMonthDayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



const PATTERN = new RegExp(`([0-9]{4})[\\.\\/\\s]` + `(?:(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})|([0-9]{1,2}))[\\.\\/\\s]` + `([0-9]{1,2})` + "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const MONTH_NUMBER_GROUP = 3;
const DATE_NUMBER_GROUP = 4;
class ENCasualYearMonthDayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const month = match[MONTH_NUMBER_GROUP] ? parseInt(match[MONTH_NUMBER_GROUP]) : _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    if (month < 1 || month > 12) {
      return null;
    }
    const year = parseInt(match[YEAR_NUMBER_GROUP]);
    const day = parseInt(match[DATE_NUMBER_GROUP]);
    return {
      day: day,
      month: month,
      year: year
    };
  }
}
//# sourceMappingURL=ENCasualYearMonthDayParser.js.map


/***/ }),

/***/ 89056:
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);






const PATTERN = new RegExp(`(?:on\\s{0,3})?` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` + `(?:` + `\\s{0,3}(?:to|\\-|\\–|until|through|till)?\\s{0,3}` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` + ")?" + `(?:-|/|\\s{0,3}(?:of)?\\s{0,3})` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY)})` + "(?:" + `(?:-|/|,?\\s{0,3})` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.YEAR_PATTERN}(?![^\\s]\\d))` + ")?" + "(?=\\W|$)", "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class ENMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP]) {
      const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseYear)(match[YEAR_GROUP]);
      result.start.assign("year", yearNumber);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
      result.start.imply("year", year);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
//# sourceMappingURL=ENMonthNameLittleEndianParser.js.map


/***/ }),

/***/ 18732:
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameMiddleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMonthNameMiddleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);






const PATTERN = new RegExp(`(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` + "(?:-|/|\\s*,?\\s*)" + `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})(?!\\s*(?:am|pm))\\s*` + "(?:" + "(?:to|\\-)\\s*" + `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})\\s*` + ")?" + "(?:" + `(?:-|/|\\s*,\\s*|\\s+)` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN})` + ")?" + "(?=\\W|$)(?!\\:\\d)", "i");
const MONTH_NAME_GROUP = 1;
const DATE_GROUP = 2;
const DATE_TO_GROUP = 3;
const YEAR_GROUP = 4;
class ENMonthNameMiddleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  constructor(shouldSkipYearLikeDate) {
    super();
    this.shouldSkipYearLikeDate = shouldSkipYearLikeDate;
  }
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
    if (day > 31) {
      return null;
    }
    if (this.shouldSkipYearLikeDate) {
      if (!match[DATE_TO_GROUP] && !match[YEAR_GROUP] && match[DATE_GROUP].match(/^2[0-5]$/)) {
        return null;
      }
    }
    const components = context.createParsingComponents({
      day: day,
      month: month
    }).addTag("parser/ENMonthNameMiddleEndianParser");
    if (match[YEAR_GROUP]) {
      const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
      components.assign("year", year);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
      components.imply("year", year);
    }
    if (!match[DATE_TO_GROUP]) {
      return components;
    }
    const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
    const result = context.createParsingResult(match.index, match[0]);
    result.start = components;
    result.end = components.clone();
    result.end.assign("day", endDate);
    return result;
  }
}
//# sourceMappingURL=ENMonthNameMiddleEndianParser.js.map


/***/ }),

/***/ 29056:
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMonthNameParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);





const PATTERN = new RegExp(`((?:in)\\s*)?` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` + `\\s*` + `(?:` + `[,-]?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN})?` + ")?" + "(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
const PREFIX_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const YEAR_GROUP = 3;
class ENMonthNameParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const monthName = match[MONTH_NAME_GROUP].toLowerCase();
    if (match[0].length <= 3 && !_constants_js__WEBPACK_IMPORTED_MODULE_1__.FULL_MONTH_NAME_DICTIONARY[monthName]) {
      return null;
    }
    const result = context.createParsingResult(match.index + (match[PREFIX_GROUP] || "").length, match.index + match[0].length);
    result.start.imply("day", 1);
    result.start.addTag("parser/ENMonthNameParser");
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[monthName];
    result.start.assign("month", month);
    if (match[YEAR_GROUP]) {
      const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
      result.start.assign("year", year);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, 1, month);
      result.start.imply("year", year);
    }
    return result;
  }
}
//# sourceMappingURL=ENMonthNameParser.js.map


/***/ }),

/***/ 75704:
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENRelativeDateFormatParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENRelativeDateFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);





const PATTERN = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.TIME_UNIT_DICTIONARY)})(?=\\s*)` + "(?=\\W|$)", "i");
const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class ENRelativeDateFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_3__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
    const timeunit = _constants_js__WEBPACK_IMPORTED_MODULE_2__.TIME_UNIT_DICTIONARY[unitWord];
    if (modifier == "next" || modifier.startsWith("after")) {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "last" || modifier == "past") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
    if (unitWord.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (unitWord.match(/month/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (unitWord.match(/year/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
    }
    return components;
  }
}
//# sourceMappingURL=ENRelativeDateFormatParser.js.map


/***/ }),

/***/ 24104:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENSlashMonthFormatParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENSlashMonthFormatParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);

const PATTERN = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})" + "", "i");
const MONTH_GROUP = 1;
const YEAR_GROUP = 2;
class ENSlashMonthFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const year = parseInt(match[YEAR_GROUP]);
    const month = parseInt(match[MONTH_GROUP]);
    return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
  }
}
//# sourceMappingURL=ENSlashMonthFormatParser.js.map


/***/ }),

/***/ 44648:
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ 93912);


class ENTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
  constructor(strictMode) {
    super(strictMode);
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|to|until|through|till|\\?)\\s*";
  }
  primaryPrefix() {
    return "(?:(?:at|from)\\s*)??";
  }
  primarySuffix() {
    return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
  }
  extractPrimaryTimeComponents(context, match) {
    const components = super.extractPrimaryTimeComponents(context, match);
    if (!components) {
      return components;
    }
    if (match[0].endsWith("night")) {
      const hour = components.get("hour");
      if (hour >= 6 && hour < 12) {
        components.assign("hour", components.get("hour") + 12);
        components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM);
      } else if (hour < 6) {
        components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
      }
    }
    if (match[0].endsWith("afternoon")) {
      components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM);
      const hour = components.get("hour");
      if (hour >= 0 && hour <= 6) {
        components.assign("hour", components.get("hour") + 12);
      }
    }
    if (match[0].endsWith("morning")) {
      components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
      const hour = components.get("hour");
      if (hour < 12) {
        components.assign("hour", components.get("hour"));
      }
    }
    return components.addTag("parser/ENTimeExpressionParser");
  }
}
//# sourceMappingURL=ENTimeExpressionParser.js.map


/***/ }),

/***/ 72144:
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);




const PATTERN = new RegExp(`(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
const STRICT_PATTERN = new RegExp(`(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class ENTimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN : PATTERN;
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
    const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
    return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
}
//# sourceMappingURL=ENTimeUnitAgoFormatParser.js.map


/***/ }),

/***/ 9728:
/*!******************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitCasualRelativeFormatParser.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeUnitCasualRelativeFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);




const PATTERN = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_NO_ABBR = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitCasualRelativeFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  constructor(allowAbbreviations = true) {
    super();
    this.allowAbbreviations = allowAbbreviations;
  }
  innerPattern() {
    return this.allowAbbreviations ? PATTERN : PATTERN_NO_ABBR;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[2]);
    switch (prefix) {
      case "last":
      case "past":
      case "-":
        timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        break;
    }
    return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=ENTimeUnitCasualRelativeFormatParser.js.map


/***/ }),

/***/ 72240:
/*!*********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitLaterFormatParser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeUnitLaterFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



const PATTERN = new RegExp(`(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})\\s{0,5}(?:later|after|from now|henceforth|forward|out)` + "(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp(`(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i");
const GROUP_NUM_TIMEUNITS = 1;
class ENTimeUnitLaterFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN : PATTERN;
  }
  innerExtract(context, match) {
    const fragments = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[GROUP_NUM_TIMEUNITS]);
    return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, fragments);
  }
}
//# sourceMappingURL=ENTimeUnitLaterFormatParser.js.map


/***/ }),

/***/ 70016:
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



const PATTERN_WITH_OPTIONAL_PREFIX = new RegExp(`(?:(?:within|in|for)\\s*)?` + `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_WITH_PREFIX = new RegExp(`(?:within|in|for)\\s*` + `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_WITH_PREFIX_STRICT = new RegExp(`(?:within|in|for)\\s*` + `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern(context) {
    if (this.strictMode) {
      return PATTERN_WITH_PREFIX_STRICT;
    }
    return context.option.forwardDate ? PATTERN_WITH_OPTIONAL_PREFIX : PATTERN_WITH_PREFIX;
  }
  innerExtract(context, match) {
    if (match[0].match(/^for\s*the\s*\w+/)) {
      return null;
    }
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
    return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=ENTimeUnitWithinFormatParser.js.map


/***/ }),

/***/ 46528:
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ 64336);




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" + "(?:on\\s*?)?" + "(?:(this|last|past|next)\\s*)?" + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` + "(?:\\s*(?:\\,|\\)|\\）))?" + "(?:\\s*(this|last|past|next)\\s*week)?" + "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class ENWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
    const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
    const prefix = match[PREFIX_GROUP];
    const postfix = match[POSTFIX_GROUP];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord == "last" || modifierWord == "past") {
      modifier = "last";
    } else if (modifierWord == "next") {
      modifier = "next";
    } else if (modifierWord == "this") {
      modifier = "this";
    }
    return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
  }
}
//# sourceMappingURL=ENWeekdayParser.js.map


/***/ }),

/***/ 82992:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class ENMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(to|-|–|until|through|till)\s*$/i;
  }
}
//# sourceMappingURL=ENMergeDateRangeRefiner.js.map


/***/ }),

/***/ 45768:
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class ENMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return new RegExp("^\\s*(T|at|after|before|on|of|,|-)?\\s*$");
  }
}
//# sourceMappingURL=ENMergeDateTimeRefiner.js.map


/***/ }),

/***/ 86376:
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeAfterDateRefiner.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMergeRelativeAfterDateRefiner)
/* harmony export */ });
/* harmony import */ var _common_abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/abstractRefiners.js */ 63656);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);




function IsPositiveFollowingReference(result) {
  return result.text.match(/^[+-]/i) != null;
}
function IsNegativeFollowingReference(result) {
  return result.text.match(/^-/i) != null;
}
class ENMergeRelativeAfterDateRefiner extends _common_abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    if (!textBetween.match(/^\s*$/i)) {
      return false;
    }
    return IsPositiveFollowingReference(nextResult) || IsNegativeFollowingReference(nextResult);
  }
  mergeResults(textBetween, currentResult, nextResult, context) {
    let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(nextResult.text);
    if (IsNegativeFollowingReference(nextResult)) {
      timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
    }
    const components = _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(new _results_js__WEBPACK_IMPORTED_MODULE_3__.ReferenceWithTimezone(currentResult.start.date()), timeUnits);
    return new _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingResult(currentResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
  }
}
//# sourceMappingURL=ENMergeRelativeAfterDateRefiner.js.map


/***/ }),

/***/ 95976:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeFollowByDateRefiner.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMergeRelativeFollowByDateRefiner)
/* harmony export */ });
/* harmony import */ var _common_abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/abstractRefiners.js */ 63656);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 49400);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);




function hasImpliedEarlierReferenceDate(result) {
  return result.text.match(/\s+(before|from)$/i) != null;
}
function hasImpliedLaterReferenceDate(result) {
  return result.text.match(/\s+(after|since)$/i) != null;
}
class ENMergeRelativeFollowByDateRefiner extends _common_abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
  patternBetween() {
    return /^\s*$/i;
  }
  shouldMergeResults(textBetween, currentResult, nextResult) {
    if (!textBetween.match(this.patternBetween())) {
      return false;
    }
    if (!hasImpliedEarlierReferenceDate(currentResult) && !hasImpliedLaterReferenceDate(currentResult)) {
      return false;
    }
    return !!nextResult.start.get("day") && !!nextResult.start.get("month") && !!nextResult.start.get("year");
  }
  mergeResults(textBetween, currentResult, nextResult) {
    let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(currentResult.text);
    if (hasImpliedEarlierReferenceDate(currentResult)) {
      timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
    }
    const components = _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(new _results_js__WEBPACK_IMPORTED_MODULE_3__.ReferenceWithTimezone(nextResult.start.date()), timeUnits);
    return new _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingResult(nextResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
  }
}
//# sourceMappingURL=ENMergeRelativeFollowByDateRefiner.js.map


/***/ }),

/***/ 72216:
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ 45944);

const WEEKDAY_DICTIONARY = {
  "domingo": 0,
  "dom": 0,
  "lunes": 1,
  "lun": 1,
  "martes": 2,
  "mar": 2,
  "miércoles": 3,
  "miercoles": 3,
  "mié": 3,
  "mie": 3,
  "jueves": 4,
  "jue": 4,
  "viernes": 5,
  "vie": 5,
  "sábado": 6,
  "sabado": 6,
  "sáb": 6,
  "sab": 6
};
const MONTH_DICTIONARY = {
  "enero": 1,
  "ene": 1,
  "ene.": 1,
  "febrero": 2,
  "feb": 2,
  "feb.": 2,
  "marzo": 3,
  "mar": 3,
  "mar.": 3,
  "abril": 4,
  "abr": 4,
  "abr.": 4,
  "mayo": 5,
  "may": 5,
  "may.": 5,
  "junio": 6,
  "jun": 6,
  "jun.": 6,
  "julio": 7,
  "jul": 7,
  "jul.": 7,
  "agosto": 8,
  "ago": 8,
  "ago.": 8,
  "septiembre": 9,
  "setiembre": 9,
  "sep": 9,
  "sep.": 9,
  "octubre": 10,
  "oct": 10,
  "oct.": 10,
  "noviembre": 11,
  "nov": 11,
  "nov.": 11,
  "diciembre": 12,
  "dic": 12,
  "dic.": 12
};
const INTEGER_WORD_DICTIONARY = {
  "uno": 1,
  "dos": 2,
  "tres": 3,
  "cuatro": 4,
  "cinco": 5,
  "seis": 6,
  "siete": 7,
  "ocho": 8,
  "nueve": 9,
  "diez": 10,
  "once": 11,
  "doce": 12,
  "trece": 13
};
const TIME_UNIT_DICTIONARY = {
  "sec": "second",
  "segundo": "second",
  "segundos": "second",
  "min": "minute",
  "mins": "minute",
  "minuto": "minute",
  "minutos": "minute",
  "h": "hour",
  "hr": "hour",
  "hrs": "hour",
  "hora": "hour",
  "horas": "hour",
  "día": "d",
  "días": "d",
  "semana": "week",
  "semanas": "week",
  "mes": "month",
  "meses": "month",
  "cuarto": "quarter",
  "cuartos": "quarter",
  "año": "year",
  "años": "year"
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|un?|uno?|una?|algunos?|unos?|demi-?)`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
    return INTEGER_WORD_DICTIONARY[num];
  } else if (num === "un" || num === "una" || num === "uno") {
    return 1;
  } else if (num.match(/algunos?/)) {
    return 3;
  } else if (num.match(/unos?/)) {
    return 3;
  } else if (num.match(/media?/)) {
    return 0.5;
  }
  return parseFloat(num);
}
const YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
function parseYear(match) {
  if (match.match(/^[0-9]{1,4}$/)) {
    let yearNumber = parseInt(match);
    if (yearNumber < 100) {
      if (yearNumber > 50) {
        yearNumber = yearNumber + 1900;
      } else {
        yearNumber = yearNumber + 2000;
      }
    }
    return yearNumber;
  }
  if (match.match(/a\.?\s*c\.?/i)) {
    match = match.replace(/a\.?\s*c\.?/i, "");
    return -parseInt(match);
  }
  return parseInt(match);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length);
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 13100:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configurations.js */ 72560);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ 18128);
/* harmony import */ var _parsers_ESWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/ESWeekdayParser.js */ 9000);
/* harmony import */ var _parsers_ESTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/ESTimeExpressionParser.js */ 88332);
/* harmony import */ var _refiners_ESMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refiners/ESMergeDateTimeRefiner.js */ 96592);
/* harmony import */ var _refiners_ESMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./refiners/ESMergeDateRangeRefiner.js */ 75584);
/* harmony import */ var _parsers_ESMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/ESMonthNameLittleEndianParser.js */ 80312);
/* harmony import */ var _parsers_ESCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ESCasualDateParser.js */ 20392);
/* harmony import */ var _parsers_ESCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ESCasualTimeParser.js */ 47552);
/* harmony import */ var _parsers_ESTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ESTimeUnitWithinFormatParser.js */ 66908);















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
  const option = createConfiguration(false, littleEndian);
  option.parsers.push(new _parsers_ESCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  option.parsers.push(new _parsers_ESCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
  return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
  return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_5__.includeCommonConfiguration)({
    parsers: [new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](littleEndian), new _parsers_ESWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](), new _parsers_ESTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](), new _parsers_ESMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](), new _parsers_ESTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_10__["default"]()],
    refiners: [new _refiners_ESMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__["default"](), new _refiners_ESMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_12__["default"]()]
  }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 20392:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);


class ESCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(ahora|hoy|mañana|ayer)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "ahora":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.now(context.reference);
      case "hoy":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
      case "mañana":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
      case "ayer":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
    }
    return component;
  }
}
//# sourceMappingURL=ESCasualDateParser.js.map


/***/ }),

/***/ 47552:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);




class ESCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const component = context.createParsingComponents();
    switch (match[1].toLowerCase()) {
      case "tarde":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        component.imply("hour", 15);
        break;
      case "noche":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        component.imply("hour", 22);
        break;
      case "mañana":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        component.imply("hour", 6);
        break;
      case "medianoche":
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
        component.imply("hour", 0);
        component.imply("minute", 0);
        component.imply("second", 0);
        break;
      case "mediodia":
      case "mediodía":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        component.imply("hour", 12);
        break;
    }
    return component;
  }
}
//# sourceMappingURL=ESCasualTimeParser.js.map


/***/ }),

/***/ 80312:
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 72216);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);





const PATTERN = new RegExp(`([0-9]{1,2})(?:º|ª|°)?` + "(?:\\s*(?:desde|de|\\-|\\–|ao?|\\s)\\s*([0-9]{1,2})(?:º|ª|°)?)?\\s*(?:de)?\\s*" + `(?:-|/|\\s*(?:de|,)?\\s*)` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` + `(?:\\s*(?:de|,)?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}))?` + `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class ESMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = parseInt(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP]) {
      const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
      result.start.assign("year", yearNumber);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
      result.start.imply("year", year);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = parseInt(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
//# sourceMappingURL=ESMonthNameLittleEndianParser.js.map


/***/ }),

/***/ 88332:
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ 93912);

class ESTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:l)?|\\?)\\s*";
  }
}
//# sourceMappingURL=ESTimeExpressionParser.js.map


/***/ }),

/***/ 66908:
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 72216);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



class ESTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp(`(?:en|por|durante|de|dentro de)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
    return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=ESTimeUnitWithinFormatParser.js.map


/***/ }),

/***/ 9000:
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 72216);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ 64336);




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" + "(?:(este|esta|pasado|pr[oó]ximo)\\s*)?" + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` + "(?:\\s*(?:\\,|\\)|\\）))?" + "(?:\\s*(este|esta|pasado|pr[óo]ximo)\\s*semana)?" + "(?=\\W|\\d|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class ESWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
    const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
    if (weekday === undefined) {
      return null;
    }
    const prefix = match[PREFIX_GROUP];
    const postfix = match[POSTFIX_GROUP];
    let norm = prefix || postfix || "";
    norm = norm.toLowerCase();
    let modifier = null;
    if (norm == "pasado") {
      modifier = "this";
    } else if (norm == "próximo" || norm == "proximo") {
      modifier = "next";
    } else if (norm == "este") {
      modifier = "this";
    }
    return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
  }
}
//# sourceMappingURL=ESWeekdayParser.js.map


/***/ }),

/***/ 75584:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/refiners/ESMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class ESMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(?:-)\s*$/i;
  }
}
//# sourceMappingURL=ESMergeDateRangeRefiner.js.map


/***/ }),

/***/ 96592:
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/refiners/ESMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class ESMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return new RegExp("^\\s*(?:,|de|aslas|a)?\\s*$");
  }
}
//# sourceMappingURL=ESMergeDateTimeRefiner.js.map


/***/ }),

/***/ 61884:
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ 45944);

const WEEKDAY_DICTIONARY = {
  "dimanche": 0,
  "dim": 0,
  "lundi": 1,
  "lun": 1,
  "mardi": 2,
  "mar": 2,
  "mercredi": 3,
  "mer": 3,
  "jeudi": 4,
  "jeu": 4,
  "vendredi": 5,
  "ven": 5,
  "samedi": 6,
  "sam": 6
};
const MONTH_DICTIONARY = {
  "janvier": 1,
  "jan": 1,
  "jan.": 1,
  "février": 2,
  "fév": 2,
  "fév.": 2,
  "fevrier": 2,
  "fev": 2,
  "fev.": 2,
  "mars": 3,
  "mar": 3,
  "mar.": 3,
  "avril": 4,
  "avr": 4,
  "avr.": 4,
  "mai": 5,
  "juin": 6,
  "jun": 6,
  "juillet": 7,
  "juil": 7,
  "jul": 7,
  "jul.": 7,
  "août": 8,
  "aout": 8,
  "septembre": 9,
  "sep": 9,
  "sep.": 9,
  "sept": 9,
  "sept.": 9,
  "octobre": 10,
  "oct": 10,
  "oct.": 10,
  "novembre": 11,
  "nov": 11,
  "nov.": 11,
  "décembre": 12,
  "decembre": 12,
  "dec": 12,
  "dec.": 12
};
const INTEGER_WORD_DICTIONARY = {
  "un": 1,
  "deux": 2,
  "trois": 3,
  "quatre": 4,
  "cinq": 5,
  "six": 6,
  "sept": 7,
  "huit": 8,
  "neuf": 9,
  "dix": 10,
  "onze": 11,
  "douze": 12,
  "treize": 13
};
const TIME_UNIT_DICTIONARY = {
  "sec": "second",
  "seconde": "second",
  "secondes": "second",
  "min": "minute",
  "mins": "minute",
  "minute": "minute",
  "minutes": "minute",
  "h": "hour",
  "hr": "hour",
  "hrs": "hour",
  "heure": "hour",
  "heures": "hour",
  "jour": "d",
  "jours": "d",
  "semaine": "week",
  "semaines": "week",
  "mois": "month",
  "trimestre": "quarter",
  "trimestres": "quarter",
  "ans": "year",
  "année": "year",
  "années": "year"
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|une?\\b|quelques?|demi-?)`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
    return INTEGER_WORD_DICTIONARY[num];
  } else if (num === "une" || num === "un") {
    return 1;
  } else if (num.match(/quelques?/)) {
    return 3;
  } else if (num.match(/demi-?/)) {
    return 0.5;
  }
  return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:[0-9]{1,2}(?:er)?)`;
function parseOrdinalNumberPattern(match) {
  let num = match.toLowerCase();
  num = num.replace(/(?:er)$/i, "");
  return parseInt(num);
}
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:AC|AD|p\\.\\s*C(?:hr?)?\\.\\s*n\\.)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
  if (/AC/i.test(match)) {
    match = match.replace(/BC/i, "");
    return -parseInt(match);
  }
  if (/AD/i.test(match) || /C/i.test(match)) {
    match = match.replace(/[^\d]+/i, "");
    return parseInt(match);
  }
  let yearNumber = parseInt(match);
  if (yearNumber < 100) {
    if (yearNumber > 50) {
      yearNumber = yearNumber + 1900;
    } else {
      yearNumber = yearNumber + 2000;
    }
  }
  return yearNumber;
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length);
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 18948:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configurations.js */ 72560);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);
/* harmony import */ var _parsers_FRCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/FRCasualDateParser.js */ 39956);
/* harmony import */ var _parsers_FRCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/FRCasualTimeParser.js */ 1764);
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ 18128);
/* harmony import */ var _parsers_FRTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/FRTimeExpressionParser.js */ 18520);
/* harmony import */ var _refiners_FRMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refiners/FRMergeDateTimeRefiner.js */ 29656);
/* harmony import */ var _refiners_FRMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./refiners/FRMergeDateRangeRefiner.js */ 75402);
/* harmony import */ var _parsers_FRWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/FRWeekdayParser.js */ 74752);
/* harmony import */ var _parsers_FRSpecificTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/FRSpecificTimeExpressionParser.js */ 48635);
/* harmony import */ var _parsers_FRMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/FRMonthNameLittleEndianParser.js */ 56408);
/* harmony import */ var _parsers_FRTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/FRTimeUnitAgoFormatParser.js */ 18104);
/* harmony import */ var _parsers_FRTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/FRTimeUnitWithinFormatParser.js */ 88608);
/* harmony import */ var _parsers_FRTimeUnitRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/FRTimeUnitRelativeFormatParser.js */ 13608);


















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
  const option = createConfiguration(false, littleEndian);
  option.parsers.unshift(new _parsers_FRCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  option.parsers.unshift(new _parsers_FRCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
  option.parsers.unshift(new _parsers_FRTimeUnitRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
  return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
  return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_6__.includeCommonConfiguration)({
    parsers: [new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](littleEndian), new _parsers_FRMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](), new _parsers_FRTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](), new _parsers_FRSpecificTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _parsers_FRTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](), new _parsers_FRTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](), new _parsers_FRWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__["default"]()],
    refiners: [new _refiners_FRMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_14__["default"](), new _refiners_FRMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_15__["default"]()]
  }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 39956:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);





class FRCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "maintenant":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
      case "aujourd'hui":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.today(context.reference);
      case "hier":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.yesterday(context.reference);
      case "demain":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.tomorrow(context.reference);
      default:
        if (lowerText.match(/cette\s*nuit/)) {
          (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
          component.imply("hour", 22);
          component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_4__.Meridiem.PM);
        } else if (lowerText.match(/la\s*veille/)) {
          targetDate = targetDate.add(-1, "day");
          (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
          component.imply("hour", 0);
        }
    }
    return component;
  }
}
//# sourceMappingURL=FRCasualDateParser.js.map


/***/ }),

/***/ 1764:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);


class FRCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const suffixLower = match[2].toLowerCase();
    const component = context.createParsingComponents();
    switch (suffixLower) {
      case "après-midi":
      case "aprem":
        component.imply("hour", 14);
        component.imply("minute", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM);
        break;
      case "soir":
        component.imply("hour", 18);
        component.imply("minute", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM);
        break;
      case "matin":
        component.imply("hour", 8);
        component.imply("minute", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
        break;
      case "a midi":
        component.imply("hour", 12);
        component.imply("minute", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
        break;
      case "à minuit":
        component.imply("hour", 0);
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
        break;
    }
    return component;
  }
}
//# sourceMappingURL=FRCasualTimeParser.js.map


/***/ }),

/***/ 56408:
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 61884);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);






const PATTERN = new RegExp("(?:on\\s*?)?" + `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` + `(?:\\s*(?:au|\\-|\\–|jusqu'au?|\\s)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN}))?` + `(?:-|/|\\s*(?:de)?\\s*)` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY)})` + `(?:(?:-|/|,?\\s*)(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.YEAR_PATTERN}(?![^\\s]\\d)))?` + `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class FRMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP]) {
      const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseYear)(match[YEAR_GROUP]);
      result.start.assign("year", yearNumber);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
      result.start.imply("year", year);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
//# sourceMappingURL=FRMonthNameLittleEndianParser.js.map


/***/ }),

/***/ 48635:
/*!************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRSpecificTimeExpressionParser.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRSpecificTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types.js */ 49276);

const FIRST_REG_PATTERN = new RegExp("(^|\\s|T)" + "(?:(?:[àa])\\s*)?" + "(\\d{1,2})(?:h|:)?" + "(?:(\\d{1,2})(?:m|:)?)?" + "(?:(\\d{1,2})(?:s|:)?)?" + "(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?" + "(?=\\W|$)", "i");
const SECOND_REG_PATTERN = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*" + "(\\d{1,2})(?:h|:)?" + "(?:(\\d{1,2})(?:m|:)?)?" + "(?:(\\d{1,2})(?:s|:)?)?" + "(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?" + "(?=\\W|$)", "i");
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const AM_PM_HOUR_GROUP = 5;
class FRSpecificTimeExpressionParser {
  pattern(context) {
    return FIRST_REG_PATTERN;
  }
  extract(context, match) {
    const result = context.createParsingResult(match.index + match[1].length, match[0].substring(match[1].length));
    if (result.text.match(/^\d{4}$/)) {
      match.index += match[0].length;
      return null;
    }
    result.start = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), match);
    if (!result.start) {
      match.index += match[0].length;
      return null;
    }
    const remainingText = context.text.substring(match.index + match[0].length);
    const secondMatch = SECOND_REG_PATTERN.exec(remainingText);
    if (secondMatch) {
      result.end = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), secondMatch);
      if (result.end) {
        result.text += secondMatch[0];
      }
    }
    return result;
  }
  static extractTimeComponent(extractingComponents, match) {
    let hour = 0;
    let minute = 0;
    let meridiem = null;
    hour = parseInt(match[HOUR_GROUP]);
    if (match[MINUTE_GROUP] != null) {
      minute = parseInt(match[MINUTE_GROUP]);
    }
    if (minute >= 60 || hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP] != null) {
      if (hour > 12) return null;
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
        if (hour == 12) {
          hour = 0;
        }
      }
      if (ampm == "p") {
        meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
        if (hour != 12) {
          hour += 12;
        }
      }
    }
    extractingComponents.assign("hour", hour);
    extractingComponents.assign("minute", minute);
    if (meridiem !== null) {
      extractingComponents.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        extractingComponents.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
      } else {
        extractingComponents.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
      }
    }
    if (match[SECOND_GROUP] != null) {
      const second = parseInt(match[SECOND_GROUP]);
      if (second >= 60) return null;
      extractingComponents.assign("second", second);
    }
    return extractingComponents;
  }
}
//# sourceMappingURL=FRSpecificTimeExpressionParser.js.map


/***/ }),

/***/ 18520:
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ 93912);

class FRTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:[àa])\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*";
  }
  extractPrimaryTimeComponents(context, match) {
    if (match[0].match(/^\s*\d{4}\s*$/)) {
      return null;
    }
    return super.extractPrimaryTimeComponents(context, match);
  }
}
//# sourceMappingURL=FRTimeExpressionParser.js.map


/***/ }),

/***/ 18104:
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 61884);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);




class FRTimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`il y a\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})(?=(?:\\W|$))`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
    const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
    return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
}
//# sourceMappingURL=FRTimeUnitAgoFormatParser.js.map


/***/ }),

/***/ 13608:
/*!************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitRelativeFormatParser.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 61884);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);





class FRTimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`(?:les?|la|l'|du|des?)\\s*` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER_PATTERN})?` + `(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?` + `\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNIT_DICTIONARY)})` + `(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?`, "i");
  }
  innerExtract(context, match) {
    const num = match[1] ? (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseNumberPattern)(match[1]) : 1;
    const unit = _constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNIT_DICTIONARY[match[3].toLowerCase()];
    let timeUnits = {};
    timeUnits[unit] = num;
    let modifier = match[2] || match[4] || "";
    modifier = modifier.toLowerCase();
    if (!modifier) {
      return;
    }
    if (/derni[eè]re?s?/.test(modifier) || /pass[ée]e?s?/.test(modifier) || /pr[ée]c[ée]dents?/.test(modifier)) {
      timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_3__.reverseTimeUnits)(timeUnits);
    }
    return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=FRTimeUnitRelativeFormatParser.js.map


/***/ }),

/***/ 88608:
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 61884);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



class FRTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp(`(?:dans|en|pour|pendant|de)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
    return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=FRTimeUnitWithinFormatParser.js.map


/***/ }),

/***/ 74752:
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 61884);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ 64336);




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" + "(?:(?:ce)\\s*)?" + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` + "(?:\\s*(?:\\,|\\)|\\）))?" + "(?:\\s*(dernier|prochain)\\s*)?" + "(?=\\W|\\d|$)", "i");
const WEEKDAY_GROUP = 1;
const POSTFIX_GROUP = 2;
class FRWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
    const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
    if (weekday === undefined) {
      return null;
    }
    let suffix = match[POSTFIX_GROUP];
    suffix = suffix || "";
    suffix = suffix.toLowerCase();
    let modifier = null;
    if (suffix == "dernier") {
      modifier = "last";
    } else if (suffix == "prochain") {
      modifier = "next";
    }
    return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
  }
}
//# sourceMappingURL=FRWeekdayParser.js.map


/***/ }),

/***/ 75402:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/refiners/FRMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class FRMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(à|a|au|-)\s*$/i;
  }
}
//# sourceMappingURL=FRMergeDateRangeRefiner.js.map


/***/ }),

/***/ 29656:
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/refiners/FRMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class FRMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return new RegExp("^\\s*(T|à|a|au|vers|de|,|-)?\\s*$");
  }
}
//# sourceMappingURL=FRMergeDateTimeRefiner.js.map


/***/ }),

/***/ 2252:
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toHankaku: () => (/* binding */ toHankaku)
/* harmony export */ });
function toHankaku(text) {
  return String(text).replace(/\u2019/g, "\u0027").replace(/\u201D/g, "\u0022").replace(/\u3000/g, "\u0020").replace(/\uFFE5/g, "\u00A5").replace(/[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g, alphaNum);
}
function alphaNum(token) {
  return String.fromCharCode(token.charCodeAt(0) - 65248);
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 93520:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _parsers_JPStandardParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/JPStandardParser.js */ 76252);
/* harmony import */ var _refiners_JPMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refiners/JPMergeDateRangeRefiner.js */ 41512);
/* harmony import */ var _parsers_JPCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/JPCasualDateParser.js */ 81848);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);








const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration());
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
function createCasualConfiguration() {
  const option = createConfiguration();
  option.parsers.unshift(new _parsers_JPCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  return option;
}
function createConfiguration() {
  return {
    parsers: [new _parsers_JPStandardParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]()],
    refiners: [new _refiners_JPMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_5__["default"]()]
  };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 81848:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/parsers/JPCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JPCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);



const PATTERN = /今日|きょう|当日|とうじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;
function normalizeTextToKanji(text) {
  switch (text) {
    case "きょう":
      return "今日";
    case "とうじつ":
      return "当日";
    case "きのう":
      return "昨日";
    case "あした":
      return "明日";
    case "こんや":
      return "今夜";
    case "こんゆう":
      return "今夕";
    case "こんばん":
      return "今晩";
    case "けさ":
      return "今朝";
    default:
      return text;
  }
}
class JPCasualDateParser {
  pattern() {
    return PATTERN;
  }
  extract(context, match) {
    const text = normalizeTextToKanji(match[0]);
    const date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const components = context.createParsingComponents();
    switch (text) {
      case "昨日":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
      case "明日":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
      case "今日":
      case "当日":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
    }
    if (text == "今夜" || text == "今夕" || text == "今晩") {
      components.imply("hour", 22);
      components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
    } else if (text.match("今朝")) {
      components.imply("hour", 6);
      components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
    }
    components.assign("day", date.date());
    components.assign("month", date.month() + 1);
    components.assign("year", date.year());
    return components;
  }
}
//# sourceMappingURL=JPCasualDateParser.js.map


/***/ }),

/***/ 76252:
/*!**********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/parsers/JPStandardParser.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JPStandardParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 2252);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);



const PATTERN = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
const SPECIAL_YEAR_GROUP = 1;
const TYPICAL_YEAR_GROUP = 2;
const ERA_GROUP = 3;
const YEAR_NUMBER_GROUP = 4;
const MONTH_GROUP = 5;
const DAY_GROUP = 6;
class JPStandardParser {
  pattern() {
    return PATTERN;
  }
  extract(context, match) {
    const month = parseInt((0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.toHankaku)(match[MONTH_GROUP]));
    const day = parseInt((0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.toHankaku)(match[DAY_GROUP]));
    const components = context.createParsingComponents({
      day: day,
      month: month
    });
    if (match[SPECIAL_YEAR_GROUP] && match[SPECIAL_YEAR_GROUP].match("同|今|本")) {
      const moment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
      components.assign("year", moment.year());
    }
    if (match[TYPICAL_YEAR_GROUP]) {
      const yearNumText = match[YEAR_NUMBER_GROUP];
      let year = yearNumText == "元" ? 1 : parseInt((0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.toHankaku)(yearNumText));
      if (match[ERA_GROUP] == "令和") {
        year += 2018;
      } else if (match[ERA_GROUP] == "平成") {
        year += 1988;
      } else if (match[ERA_GROUP] == "昭和") {
        year += 1925;
      }
      components.assign("year", year);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_2__.findYearClosestToRef)(context.refDate, day, month);
      components.imply("year", year);
    }
    return components;
  }
}
//# sourceMappingURL=JPStandardParser.js.map


/***/ }),

/***/ 41512:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/refiners/JPMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JPMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class JPMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(から|ー|-)\s*$/i;
  }
}
//# sourceMappingURL=JPMergeDateRangeRefiner.js.map


/***/ }),

/***/ 47432:
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   ORDINAL_WORD_DICTIONARY: () => (/* binding */ ORDINAL_WORD_DICTIONARY),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ 45944);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ 67684);


const WEEKDAY_DICTIONARY = {
  zondag: 0,
  zon: 0,
  "zon.": 0,
  zo: 0,
  "zo.": 0,
  maandag: 1,
  ma: 1,
  "ma.": 1,
  dinsdag: 2,
  din: 2,
  "din.": 2,
  di: 2,
  "di.": 2,
  woensdag: 3,
  woe: 3,
  "woe.": 3,
  wo: 3,
  "wo.": 3,
  donderdag: 4,
  dond: 4,
  "dond.": 4,
  do: 4,
  "do.": 4,
  vrijdag: 5,
  vrij: 5,
  "vrij.": 5,
  vr: 5,
  "vr.": 5,
  zaterdag: 6,
  zat: 6,
  "zat.": 6,
  "za": 6,
  "za.": 6
};
const MONTH_DICTIONARY = {
  januari: 1,
  jan: 1,
  "jan.": 1,
  februari: 2,
  feb: 2,
  "feb.": 2,
  maart: 3,
  mar: 3,
  "mar.": 3,
  mrt: 3,
  "mrt.": 3,
  april: 4,
  apr: 4,
  "apr.": 4,
  mei: 5,
  juni: 6,
  jun: 6,
  "jun.": 6,
  juli: 7,
  jul: 7,
  "jul.": 7,
  augustus: 8,
  aug: 8,
  "aug.": 8,
  september: 9,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  oktober: 10,
  okt: 10,
  "okt.": 10,
  november: 11,
  nov: 11,
  "nov.": 11,
  december: 12,
  dec: 12,
  "dec.": 12
};
const INTEGER_WORD_DICTIONARY = {
  een: 1,
  twee: 2,
  drie: 3,
  vier: 4,
  vijf: 5,
  zes: 6,
  zeven: 7,
  acht: 8,
  negen: 9,
  tien: 10,
  elf: 11,
  twaalf: 12
};
const ORDINAL_WORD_DICTIONARY = {
  eerste: 1,
  tweede: 2,
  derde: 3,
  vierde: 4,
  vijfde: 5,
  zesde: 6,
  zevende: 7,
  achtste: 8,
  negende: 9,
  tiende: 10,
  elfde: 11,
  twaalfde: 12,
  dertiende: 13,
  veertiende: 14,
  vijftiende: 15,
  zestiende: 16,
  zeventiende: 17,
  achttiende: 18,
  negentiende: 19,
  twintigste: 20,
  "eenentwintigste": 21,
  "tweeëntwintigste": 22,
  "drieentwintigste": 23,
  "vierentwintigste": 24,
  "vijfentwintigste": 25,
  "zesentwintigste": 26,
  "zevenentwintigste": 27,
  "achtentwintig": 28,
  "negenentwintig": 29,
  "dertigste": 30,
  "eenendertigste": 31
};
const TIME_UNIT_DICTIONARY = {
  sec: "second",
  second: "second",
  seconden: "second",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minuut: "minute",
  minuten: "minute",
  minuutje: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  uur: "hour",
  u: "hour",
  uren: "hour",
  dag: "d",
  dagen: "d",
  week: "week",
  weken: "week",
  maand: "month",
  maanden: "month",
  jaar: "year",
  jr: "year",
  jaren: "year"
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+[\\.,][0-9]+|halve?|half|paar)`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
    return INTEGER_WORD_DICTIONARY[num];
  } else if (num === "paar") {
    return 2;
  } else if (num === "half" || num.match(/halve?/)) {
    return 0.5;
  }
  return parseFloat(num.replace(",", "."));
}
const ORDINAL_NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:ste|de)?)`;
function parseOrdinalNumberPattern(match) {
  let num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
    return ORDINAL_WORD_DICTIONARY[num];
  }
  num = num.replace(/(?:ste|de)$/i, "");
  return parseInt(num);
}
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
  if (/voor Christus/i.test(match)) {
    match = match.replace(/voor Christus/i, "");
    return -parseInt(match);
  }
  if (/na Christus/i.test(match)) {
    match = match.replace(/na Christus/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:binnen|in)\\s*)?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length);
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 18584:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configurations.js */ 72560);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);
/* harmony import */ var _refiners_NLMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./refiners/NLMergeDateRangeRefiner.js */ 83296);
/* harmony import */ var _refiners_NLMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./refiners/NLMergeDateTimeRefiner.js */ 99192);
/* harmony import */ var _parsers_NLCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/NLCasualDateParser.js */ 4907);
/* harmony import */ var _parsers_NLCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/NLCasualTimeParser.js */ 49832);
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ 18128);
/* harmony import */ var _parsers_NLTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/NLTimeUnitWithinFormatParser.js */ 18232);
/* harmony import */ var _parsers_NLWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/NLWeekdayParser.js */ 50044);
/* harmony import */ var _parsers_NLMonthNameMiddleEndianParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/NLMonthNameMiddleEndianParser.js */ 43608);
/* harmony import */ var _parsers_NLMonthNameParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/NLMonthNameParser.js */ 51488);
/* harmony import */ var _parsers_NLSlashMonthFormatParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/NLSlashMonthFormatParser.js */ 83488);
/* harmony import */ var _parsers_NLTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsers/NLTimeExpressionParser.js */ 26728);
/* harmony import */ var _parsers_NLCasualYearMonthDayParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/NLCasualYearMonthDayParser.js */ 51017);
/* harmony import */ var _parsers_NLCasualDateTimeParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/NLCasualDateTimeParser.js */ 22264);
/* harmony import */ var _parsers_NLTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/NLTimeUnitCasualRelativeFormatParser.js */ 32544);
/* harmony import */ var _parsers_NLRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/NLRelativeDateFormatParser.js */ 33480);
/* harmony import */ var _parsers_NLTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsers/NLTimeUnitAgoFormatParser.js */ 11200);
/* harmony import */ var _parsers_NLTimeUnitLaterFormatParser_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsers/NLTimeUnitLaterFormatParser.js */ 47244);























const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
  const option = createConfiguration(false, littleEndian);
  option.parsers.unshift(new _parsers_NLCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  option.parsers.unshift(new _parsers_NLCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
  option.parsers.unshift(new _parsers_NLCasualDateTimeParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
  option.parsers.unshift(new _parsers_NLMonthNameParser_js__WEBPACK_IMPORTED_MODULE_6__["default"]());
  option.parsers.unshift(new _parsers_NLRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"]());
  option.parsers.unshift(new _parsers_NLTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_8__["default"]());
  return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
  return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_9__.includeCommonConfiguration)({
    parsers: [new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](littleEndian), new _parsers_NLTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](), new _parsers_NLMonthNameMiddleEndianParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](), new _parsers_NLMonthNameParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](), new _parsers_NLWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](), new _parsers_NLCasualYearMonthDayParser_js__WEBPACK_IMPORTED_MODULE_14__["default"](), new _parsers_NLSlashMonthFormatParser_js__WEBPACK_IMPORTED_MODULE_15__["default"](), new _parsers_NLTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_16__["default"](strictMode), new _parsers_NLTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_17__["default"](strictMode), new _parsers_NLTimeUnitLaterFormatParser_js__WEBPACK_IMPORTED_MODULE_18__["default"](strictMode)],
    refiners: [new _refiners_NLMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_19__["default"](), new _refiners_NLMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_20__["default"]()]
  }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4907:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);


class NLCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "nu":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.now(context.reference);
      case "vandaag":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
      case "morgen":
      case "morgend":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
      case "gisteren":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
    }
    return component;
  }
}
//# sourceMappingURL=NLCasualDateParser.js.map


/***/ }),

/***/ 22264:
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualDateTimeParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLCasualDateTimeParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);




const DATE_GROUP = 1;
const TIME_OF_DAY_GROUP = 2;
class NLCasualDateTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const dateText = match[DATE_GROUP].toLowerCase();
    const timeText = match[TIME_OF_DAY_GROUP].toLowerCase();
    const component = context.createParsingComponents();
    const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    switch (dateText) {
      case "gisteren":
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate.add(-1, "day"));
        break;
      case "van":
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
        break;
      case "morgen":
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignTheNextDay)(component, targetDate);
        break;
    }
    switch (timeText) {
      case "ochtend":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
        component.imply("hour", 6);
        break;
      case "middag":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
        component.imply("hour", 12);
        break;
      case "namiddag":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
        component.imply("hour", 15);
        break;
      case "avond":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
        component.imply("hour", 20);
        break;
    }
    return component;
  }
}
//# sourceMappingURL=NLCasualDateTimeParser.js.map


/***/ }),

/***/ 49832:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);




const DAY_GROUP = 1;
const MOMENT_GROUP = 2;
class NLCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const component = context.createParsingComponents();
    if (match[DAY_GROUP] === "deze") {
      component.assign("day", context.refDate.getDate());
      component.assign("month", context.refDate.getMonth() + 1);
      component.assign("year", context.refDate.getFullYear());
    }
    switch (match[MOMENT_GROUP].toLowerCase()) {
      case "namiddag":
      case "'s namiddags":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        component.imply("hour", 15);
        break;
      case "avond":
      case "'s avonds'":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        component.imply("hour", 20);
        break;
      case "middernacht":
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
        component.imply("hour", 0);
        component.imply("minute", 0);
        component.imply("second", 0);
        break;
      case "ochtend":
      case "'s ochtends":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        component.imply("hour", 6);
        break;
      case "middag":
      case "'s middags":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        component.imply("hour", 12);
        break;
    }
    return component;
  }
}
//# sourceMappingURL=NLCasualTimeParser.js.map


/***/ }),

/***/ 51017:
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualYearMonthDayParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLCasualYearMonthDayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 47432);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



const PATTERN = new RegExp(`([0-9]{4})[\\.\\/\\s]` + `(?:(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})|([0-9]{1,2}))[\\.\\/\\s]` + `([0-9]{1,2})` + "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const MONTH_NUMBER_GROUP = 3;
const DATE_NUMBER_GROUP = 4;
class NLCasualYearMonthDayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const month = match[MONTH_NUMBER_GROUP] ? parseInt(match[MONTH_NUMBER_GROUP]) : _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    if (month < 1 || month > 12) {
      return null;
    }
    const year = parseInt(match[YEAR_NUMBER_GROUP]);
    const day = parseInt(match[DATE_NUMBER_GROUP]);
    return {
      day: day,
      month: month,
      year: year
    };
  }
}
//# sourceMappingURL=NLCasualYearMonthDayParser.js.map


/***/ }),

/***/ 43608:
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLMonthNameMiddleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLMonthNameMiddleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 47432);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);






const PATTERN = new RegExp("(?:on\\s*?)?" + `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` + "(?:\\s*" + "(?:tot|\\-|\\–|until|through|till|\\s)\\s*" + `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` + ")?" + "(?:-|/|\\s*(?:of)?\\s*)" + "(" + (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY) + ")" + "(?:" + "(?:-|/|,?\\s*)" + `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.YEAR_PATTERN}(?![^\\s]\\d))` + ")?" + "(?=\\W|$)", "i");
const MONTH_NAME_GROUP = 3;
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const YEAR_GROUP = 4;
class NLMonthNameMiddleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    const components = context.createParsingComponents({
      day: day,
      month: month
    });
    if (match[YEAR_GROUP]) {
      const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseYear)(match[YEAR_GROUP]);
      components.assign("year", year);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
      components.imply("year", year);
    }
    if (!match[DATE_TO_GROUP]) {
      return components;
    }
    const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
    const result = context.createParsingResult(match.index, match[0]);
    result.start = components;
    result.end = components.clone();
    result.end.assign("day", endDate);
    return result;
  }
}
//# sourceMappingURL=NLMonthNameMiddleEndianParser.js.map


/***/ }),

/***/ 51488:
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLMonthNameParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLMonthNameParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 47432);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);





const PATTERN = new RegExp(`(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` + `\\s*` + `(?:` + `[,-]?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN})?` + ")?" + "(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
const MONTH_NAME_GROUP = 1;
const YEAR_GROUP = 2;
class NLMonthNameParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const components = context.createParsingComponents();
    components.imply("day", 1);
    const monthName = match[MONTH_NAME_GROUP];
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[monthName.toLowerCase()];
    components.assign("month", month);
    if (match[YEAR_GROUP]) {
      const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
      components.assign("year", year);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, 1, month);
      components.imply("year", year);
    }
    return components;
  }
}
//# sourceMappingURL=NLMonthNameParser.js.map


/***/ }),

/***/ 33480:
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLRelativeDateFormatParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLRelativeDateFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ 47432);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);





const PATTERN = new RegExp(`(dit|deze|(?:aan)?komend|volgend|afgelopen|vorig)e?\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.TIME_UNIT_DICTIONARY)})(?=\\s*)` + "(?=\\W|$)", "i");
const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class NLRelativeDateFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_3__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
    const timeunit = _constants_js__WEBPACK_IMPORTED_MODULE_2__.TIME_UNIT_DICTIONARY[unitWord];
    if (modifier == "volgend" || modifier == "komend" || modifier == "aankomend") {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "afgelopen" || modifier == "vorig") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
    if (unitWord.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (unitWord.match(/maand/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (unitWord.match(/jaar/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
    }
    return components;
  }
}
//# sourceMappingURL=NLRelativeDateFormatParser.js.map


/***/ }),

/***/ 83488:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLSlashMonthFormatParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLSlashMonthFormatParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);

const PATTERN = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})" + "", "i");
const MONTH_GROUP = 1;
const YEAR_GROUP = 2;
class NLSlashMonthFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const year = parseInt(match[YEAR_GROUP]);
    const month = parseInt(match[MONTH_GROUP]);
    return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
  }
}
//# sourceMappingURL=NLSlashMonthFormatParser.js.map


/***/ }),

/***/ 26728:
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ 93912);

class NLTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:om)\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|om|\\?)\\s*";
  }
  primarySuffix() {
    return "(?:\\s*(?:uur))?(?!/)(?=\\W|$)";
  }
  extractPrimaryTimeComponents(context, match) {
    if (match[0].match(/^\s*\d{4}\s*$/)) {
      return null;
    }
    return super.extractPrimaryTimeComponents(context, match);
  }
}
//# sourceMappingURL=NLTimeExpressionParser.js.map


/***/ }),

/***/ 11200:
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 47432);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);




const PATTERN = new RegExp("" + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN + ")" + "(?:geleden|voor|eerder)(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp("" + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN + ")" + "geleden(?=(?:\\W|$))", "i");
class NLTimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN : PATTERN;
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
    const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
    return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
}
//# sourceMappingURL=NLTimeUnitAgoFormatParser.js.map


/***/ }),

/***/ 32544:
/*!******************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitCasualRelativeFormatParser.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeUnitCasualRelativeFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 47432);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);




const PATTERN = new RegExp(`(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PREFIX_WORD_GROUP = 1;
const TIME_UNIT_WORD_GROUP = 2;
class NLTimeUnitCasualRelativeFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const prefix = match[PREFIX_WORD_GROUP].toLowerCase();
    let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[TIME_UNIT_WORD_GROUP]);
    switch (prefix) {
      case "vorig":
      case "afgelopen":
      case "-":
        timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        break;
    }
    return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=NLTimeUnitCasualRelativeFormatParser.js.map


/***/ }),

/***/ 47244:
/*!*********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitLaterFormatParser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeUnitLaterFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 47432);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



const PATTERN = new RegExp("" + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN + ")" + "(later|na|vanaf nu|voortaan|vooruit|uit)" + "(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp("" + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN + ")" + "(later|vanaf nu)" + "(?=(?:\\W|$))", "i");
const GROUP_NUM_TIMEUNITS = 1;
class NLTimeUnitLaterFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN : PATTERN;
  }
  innerExtract(context, match) {
    const fragments = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[GROUP_NUM_TIMEUNITS]);
    return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, fragments);
  }
}
//# sourceMappingURL=NLTimeUnitLaterFormatParser.js.map


/***/ }),

/***/ 18232:
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 47432);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



class NLTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp(`(?:binnen|in|binnen de|voor)\\s*` + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN + ")" + `(?=\\W|$)`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
    return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=NLTimeUnitWithinFormatParser.js.map


/***/ }),

/***/ 50044:
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLWeekdayParser)
/* harmony export */ });
/* harmony import */ var _nl_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nl/constants.js */ 47432);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ 64336);




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" + "(?:op\\s*?)?" + "(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?" + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_nl_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` + "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class NLWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
    const weekday = _nl_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
    const prefix = match[PREFIX_GROUP];
    const postfix = match[POSTFIX_GROUP];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord == "vorige") {
      modifier = "last";
    } else if (modifierWord == "volgende") {
      modifier = "next";
    } else if (modifierWord == "deze") {
      modifier = "this";
    }
    return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
  }
}
//# sourceMappingURL=NLWeekdayParser.js.map


/***/ }),

/***/ 83296:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/refiners/NLMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class NLMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(tot|-)\s*$/i;
  }
}
//# sourceMappingURL=NLMergeDateRangeRefiner.js.map


/***/ }),

/***/ 99192:
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/refiners/NLMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class NLMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return new RegExp("^\\s*(om|na|voor|in de|,|-)?\\s*$");
  }
}
//# sourceMappingURL=NLMergeDateTimeRefiner.js.map


/***/ }),

/***/ 6592:
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
const WEEKDAY_DICTIONARY = {
  "domingo": 0,
  "dom": 0,
  "segunda": 1,
  "segunda-feira": 1,
  "seg": 1,
  "terça": 2,
  "terça-feira": 2,
  "ter": 2,
  "quarta": 3,
  "quarta-feira": 3,
  "qua": 3,
  "quinta": 4,
  "quinta-feira": 4,
  "qui": 4,
  "sexta": 5,
  "sexta-feira": 5,
  "sex": 5,
  "sábado": 6,
  "sabado": 6,
  "sab": 6
};
const MONTH_DICTIONARY = {
  "janeiro": 1,
  "jan": 1,
  "jan.": 1,
  "fevereiro": 2,
  "fev": 2,
  "fev.": 2,
  "março": 3,
  "mar": 3,
  "mar.": 3,
  "abril": 4,
  "abr": 4,
  "abr.": 4,
  "maio": 5,
  "mai": 5,
  "mai.": 5,
  "junho": 6,
  "jun": 6,
  "jun.": 6,
  "julho": 7,
  "jul": 7,
  "jul.": 7,
  "agosto": 8,
  "ago": 8,
  "ago.": 8,
  "setembro": 9,
  "set": 9,
  "set.": 9,
  "outubro": 10,
  "out": 10,
  "out.": 10,
  "novembro": 11,
  "nov": 11,
  "nov.": 11,
  "dezembro": 12,
  "dez": 12,
  "dez.": 12
};
const YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
function parseYear(match) {
  if (match.match(/^[0-9]{1,4}$/)) {
    let yearNumber = parseInt(match);
    if (yearNumber < 100) {
      if (yearNumber > 50) {
        yearNumber = yearNumber + 1900;
      } else {
        yearNumber = yearNumber + 2000;
      }
    }
    return yearNumber;
  }
  if (match.match(/a\.?\s*c\.?/i)) {
    match = match.replace(/a\.?\s*c\.?/i, "");
    return -parseInt(match);
  }
  return parseInt(match);
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 59632:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configurations.js */ 72560);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ 18128);
/* harmony import */ var _parsers_PTWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/PTWeekdayParser.js */ 48408);
/* harmony import */ var _parsers_PTTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/PTTimeExpressionParser.js */ 92936);
/* harmony import */ var _refiners_PTMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./refiners/PTMergeDateTimeRefiner.js */ 50728);
/* harmony import */ var _refiners_PTMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refiners/PTMergeDateRangeRefiner.js */ 50168);
/* harmony import */ var _parsers_PTMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/PTMonthNameLittleEndianParser.js */ 29588);
/* harmony import */ var _parsers_PTCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/PTCasualDateParser.js */ 33384);
/* harmony import */ var _parsers_PTCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/PTCasualTimeParser.js */ 6408);














const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
  const option = createConfiguration(false, littleEndian);
  option.parsers.push(new _parsers_PTCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  option.parsers.push(new _parsers_PTCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
  return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
  return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_5__.includeCommonConfiguration)({
    parsers: [new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](littleEndian), new _parsers_PTWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](), new _parsers_PTTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](), new _parsers_PTMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__["default"]()],
    refiners: [new _refiners_PTMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _refiners_PTMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_11__["default"]()]
  }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 33384:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);


class PTCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "agora":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.now(context.reference);
      case "hoje":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
      case "amanha":
      case "amanhã":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
      case "ontem":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
    }
    return component;
  }
}
//# sourceMappingURL=PTCasualDateParser.js.map


/***/ }),

/***/ 6408:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);




class PTCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return /(?:esta\s*)?(manha|manhã|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const component = context.createParsingComponents();
    switch (match[1].toLowerCase()) {
      case "tarde":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        component.imply("hour", 15);
        break;
      case "noite":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        component.imply("hour", 22);
        break;
      case "manha":
      case "manhã":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        component.imply("hour", 6);
        break;
      case "meia-noite":
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
        component.imply("hour", 0);
        component.imply("minute", 0);
        component.imply("second", 0);
        break;
      case "meio-dia":
        component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        component.imply("hour", 12);
        break;
    }
    return component;
  }
}
//# sourceMappingURL=PTCasualTimeParser.js.map


/***/ }),

/***/ 29588:
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 6592);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);





const PATTERN = new RegExp(`([0-9]{1,2})(?:º|ª|°)?` + "(?:\\s*(?:desde|de|\\-|\\–|ao?|\\s)\\s*([0-9]{1,2})(?:º|ª|°)?)?\\s*(?:de)?\\s*" + `(?:-|/|\\s*(?:de|,)?\\s*)` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` + `(?:\\s*(?:de|,)?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}))?` + `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class PTMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = parseInt(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP]) {
      const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
      result.start.assign("year", yearNumber);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
      result.start.imply("year", year);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = parseInt(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
//# sourceMappingURL=PTMonthNameLittleEndianParser.js.map


/***/ }),

/***/ 92936:
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ 93912);

class PTTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:ao?|às?|das|da|de|do)\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:o)?|\\?)\\s*";
  }
}
//# sourceMappingURL=PTTimeExpressionParser.js.map


/***/ }),

/***/ 48408:
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 6592);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ 64336);




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" + "(?:(este|esta|passado|pr[oó]ximo)\\s*)?" + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` + "(?:\\s*(?:\\,|\\)|\\）))?" + "(?:\\s*(este|esta|passado|pr[óo]ximo)\\s*semana)?" + "(?=\\W|\\d|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class PTWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
    const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
    if (weekday === undefined) {
      return null;
    }
    const prefix = match[PREFIX_GROUP];
    const postfix = match[POSTFIX_GROUP];
    let norm = prefix || postfix || "";
    norm = norm.toLowerCase();
    let modifier = null;
    if (norm == "passado") {
      modifier = "this";
    } else if (norm == "próximo" || norm == "proximo") {
      modifier = "next";
    } else if (norm == "este") {
      modifier = "this";
    }
    return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
  }
}
//# sourceMappingURL=PTWeekdayParser.js.map


/***/ }),

/***/ 50168:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/refiners/PTMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class PTMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(?:-)\s*$/i;
  }
}
//# sourceMappingURL=PTMergeDateRangeRefiner.js.map


/***/ }),

/***/ 50728:
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/refiners/PTMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class PTMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return new RegExp("^\\s*(?:,|à)?\\s*$");
  }
}
//# sourceMappingURL=PTMergeDateTimeRefiner.js.map


/***/ }),

/***/ 32648:
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FULL_MONTH_NAME_DICTIONARY: () => (/* binding */ FULL_MONTH_NAME_DICTIONARY),
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   ORDINAL_WORD_DICTIONARY: () => (/* binding */ ORDINAL_WORD_DICTIONARY),
/* harmony export */   REGEX_PARTS: () => (/* binding */ REGEX_PARTS),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ 45944);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ 67684);


const REGEX_PARTS = {
  leftBoundary: "([^\\p{L}\\p{N}_]|^)",
  rightBoundary: "(?=[^\\p{L}\\p{N}_]|$)",
  flags: "iu"
};
const WEEKDAY_DICTIONARY = {
  воскресенье: 0,
  воскресенья: 0,
  вск: 0,
  "вск.": 0,
  понедельник: 1,
  понедельника: 1,
  пн: 1,
  "пн.": 1,
  вторник: 2,
  вторника: 2,
  вт: 2,
  "вт.": 2,
  среда: 3,
  среды: 3,
  среду: 3,
  ср: 3,
  "ср.": 3,
  четверг: 4,
  четверга: 4,
  чт: 4,
  "чт.": 4,
  пятница: 5,
  пятницу: 5,
  пятницы: 5,
  пт: 5,
  "пт.": 5,
  суббота: 6,
  субботу: 6,
  субботы: 6,
  сб: 6,
  "сб.": 6
};
const FULL_MONTH_NAME_DICTIONARY = {
  январь: 1,
  января: 1,
  январе: 1,
  февраль: 2,
  февраля: 2,
  феврале: 2,
  март: 3,
  марта: 3,
  марте: 3,
  апрель: 4,
  апреля: 4,
  апреле: 4,
  май: 5,
  мая: 5,
  мае: 5,
  июнь: 6,
  июня: 6,
  июне: 6,
  июль: 7,
  июля: 7,
  июле: 7,
  август: 8,
  августа: 8,
  августе: 8,
  сентябрь: 9,
  сентября: 9,
  сентябре: 9,
  октябрь: 10,
  октября: 10,
  октябре: 10,
  ноябрь: 11,
  ноября: 11,
  ноябре: 11,
  декабрь: 12,
  декабря: 12,
  декабре: 12
};
const MONTH_DICTIONARY = {
  ...FULL_MONTH_NAME_DICTIONARY,
  янв: 1,
  "янв.": 1,
  фев: 2,
  "фев.": 2,
  мар: 3,
  "мар.": 3,
  апр: 4,
  "апр.": 4,
  авг: 8,
  "авг.": 8,
  сен: 9,
  "сен.": 9,
  окт: 10,
  "окт.": 10,
  ноя: 11,
  "ноя.": 11,
  дек: 12,
  "дек.": 12
};
const INTEGER_WORD_DICTIONARY = {
  один: 1,
  одна: 1,
  одной: 1,
  одну: 1,
  две: 2,
  два: 2,
  двух: 2,
  три: 3,
  трех: 3,
  трёх: 3,
  четыре: 4,
  четырех: 4,
  четырёх: 4,
  пять: 5,
  пяти: 5,
  шесть: 6,
  шести: 6,
  семь: 7,
  семи: 7,
  восемь: 8,
  восьми: 8,
  девять: 9,
  девяти: 9,
  десять: 10,
  десяти: 10,
  одиннадцать: 11,
  одиннадцати: 11,
  двенадцать: 12,
  двенадцати: 12
};
const ORDINAL_WORD_DICTIONARY = {
  первое: 1,
  первого: 1,
  второе: 2,
  второго: 2,
  третье: 3,
  третьего: 3,
  четвертое: 4,
  четвертого: 4,
  пятое: 5,
  пятого: 5,
  шестое: 6,
  шестого: 6,
  седьмое: 7,
  седьмого: 7,
  восьмое: 8,
  восьмого: 8,
  девятое: 9,
  девятого: 9,
  десятое: 10,
  десятого: 10,
  одиннадцатое: 11,
  одиннадцатого: 11,
  двенадцатое: 12,
  двенадцатого: 12,
  тринадцатое: 13,
  тринадцатого: 13,
  четырнадцатое: 14,
  четырнадцатого: 14,
  пятнадцатое: 15,
  пятнадцатого: 15,
  шестнадцатое: 16,
  шестнадцатого: 16,
  семнадцатое: 17,
  семнадцатого: 17,
  восемнадцатое: 18,
  восемнадцатого: 18,
  девятнадцатое: 19,
  девятнадцатого: 19,
  двадцатое: 20,
  двадцатого: 20,
  "двадцать первое": 21,
  "двадцать первого": 21,
  "двадцать второе": 22,
  "двадцать второго": 22,
  "двадцать третье": 23,
  "двадцать третьего": 23,
  "двадцать четвертое": 24,
  "двадцать четвертого": 24,
  "двадцать пятое": 25,
  "двадцать пятого": 25,
  "двадцать шестое": 26,
  "двадцать шестого": 26,
  "двадцать седьмое": 27,
  "двадцать седьмого": 27,
  "двадцать восьмое": 28,
  "двадцать восьмого": 28,
  "двадцать девятое": 29,
  "двадцать девятого": 29,
  "тридцатое": 30,
  "тридцатого": 30,
  "тридцать первое": 31,
  "тридцать первого": 31
};
const TIME_UNIT_DICTIONARY = {
  сек: "second",
  секунда: "second",
  секунд: "second",
  секунды: "second",
  секунду: "second",
  секундочка: "second",
  секундочки: "second",
  секундочек: "second",
  секундочку: "second",
  мин: "minute",
  минута: "minute",
  минут: "minute",
  минуты: "minute",
  минуту: "minute",
  минуток: "minute",
  минутки: "minute",
  минутку: "minute",
  минуточек: "minute",
  минуточки: "minute",
  минуточку: "minute",
  час: "hour",
  часов: "hour",
  часа: "hour",
  часу: "hour",
  часиков: "hour",
  часика: "hour",
  часике: "hour",
  часик: "hour",
  день: "d",
  дня: "d",
  дней: "d",
  суток: "d",
  сутки: "d",
  неделя: "week",
  неделе: "week",
  недели: "week",
  неделю: "week",
  недель: "week",
  недельке: "week",
  недельки: "week",
  неделек: "week",
  месяц: "month",
  месяце: "month",
  месяцев: "month",
  месяца: "month",
  квартал: "quarter",
  квартале: "quarter",
  кварталов: "quarter",
  год: "year",
  года: "year",
  году: "year",
  годов: "year",
  лет: "year",
  годик: "year",
  годика: "year",
  годиков: "year"
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|пол|несколько|пар(?:ы|у)|\\s{0,3})`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
    return INTEGER_WORD_DICTIONARY[num];
  }
  if (num.match(/несколько/)) {
    return 3;
  } else if (num.match(/пол/)) {
    return 0.5;
  } else if (num.match(/пар/)) {
    return 2;
  } else if (num === "") {
    return 1;
  }
  return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:го|ого|е|ое)?)`;
function parseOrdinalNumberPattern(match) {
  const num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
    return ORDINAL_WORD_DICTIONARY[num];
  }
  return parseInt(num);
}
const year = "(?:\\s+(?:году|года|год|г|г.))?";
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}${year}\\s*(?:н.э.|до н.э.|н. э.|до н. э.)|[1-2][0-9]{3}${year}|[5-9][0-9]${year})`;
function parseYear(match) {
  if (/(год|года|г|г.)/i.test(match)) {
    match = match.replace(/(год|года|г|г.)/i, "");
  }
  if (/(до н.э.|до н. э.)/i.test(match)) {
    match = match.replace(/(до н.э.|до н. э.)/i, "");
    return -parseInt(match);
  }
  if (/(н. э.|н.э.)/i.test(match)) {
    match = match.replace(/(н. э.|н.э.)/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:около|примерно)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length).trim();
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 9256:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _parsers_RUTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/RUTimeUnitWithinFormatParser.js */ 41464);
/* harmony import */ var _parsers_RUMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/RUMonthNameLittleEndianParser.js */ 54796);
/* harmony import */ var _parsers_RUMonthNameParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/RUMonthNameParser.js */ 2680);
/* harmony import */ var _parsers_RUTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/RUTimeExpressionParser.js */ 84308);
/* harmony import */ var _parsers_RUTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/RUTimeUnitAgoFormatParser.js */ 70488);
/* harmony import */ var _refiners_RUMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refiners/RUMergeDateRangeRefiner.js */ 6008);
/* harmony import */ var _refiners_RUMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./refiners/RUMergeDateTimeRefiner.js */ 76296);
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configurations.js */ 72560);
/* harmony import */ var _parsers_RUCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/RUCasualDateParser.js */ 52813);
/* harmony import */ var _parsers_RUCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/RUCasualTimeParser.js */ 68068);
/* harmony import */ var _parsers_RUWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/RUWeekdayParser.js */ 30212);
/* harmony import */ var _parsers_RURelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/RURelativeDateFormatParser.js */ 14808);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ 18128);
/* harmony import */ var _parsers_RUTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/RUTimeUnitCasualRelativeFormatParser.js */ 78096);



















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
function createCasualConfiguration() {
  const option = createConfiguration(false);
  option.parsers.unshift(new _parsers_RUCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  option.parsers.unshift(new _parsers_RUCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
  option.parsers.unshift(new _parsers_RUMonthNameParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
  option.parsers.unshift(new _parsers_RURelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"]());
  option.parsers.unshift(new _parsers_RUTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"]());
  return option;
}
function createConfiguration(strictMode = true) {
  return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_8__.includeCommonConfiguration)({
    parsers: [new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](true), new _parsers_RUTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _parsers_RUMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](), new _parsers_RUWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](), new _parsers_RUTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](strictMode), new _parsers_RUTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_14__["default"]()],
    refiners: [new _refiners_RUMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_15__["default"](), new _refiners_RUMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_16__["default"]()]
  }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 50688:
/*!********************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractParserWithLeftBoundaryChecking: () => (/* binding */ AbstractParserWithLeftBoundaryChecking),
/* harmony export */   AbstractParserWithLeftRightBoundaryChecking: () => (/* binding */ AbstractParserWithLeftRightBoundaryChecking)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 32648);


class AbstractParserWithLeftBoundaryChecking extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.leftBoundary;
  }
  innerPattern(context) {
    return new RegExp(this.innerPatternString(context), _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags);
  }
  innerPatternHasChange(context, currentInnerPattern) {
    return false;
  }
}
class AbstractParserWithLeftRightBoundaryChecking extends AbstractParserWithLeftBoundaryChecking {
  innerPattern(context) {
    return new RegExp(`${this.innerPatternString(context)}${_constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.rightBoundary}`, _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags);
  }
}
//# sourceMappingURL=AbstractParserWithWordBoundaryChecking.js.map

/***/ }),

/***/ 52813:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 50688);


class RUCasualDateParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(?:с|со)?\\s*(сегодня|вчера|завтра|послезавтра|послепослезавтра|позапозавчера|позавчера)`;
  }
  innerExtract(context, match) {
    const lowerText = match[1].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "сегодня":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
      case "вчера":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
      case "завтра":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
      case "послезавтра":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayAfter(context.reference, 2);
      case "послепослезавтра":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayAfter(context.reference, 3);
      case "позавчера":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayBefore(context.reference, 2);
      case "позапозавчера":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayBefore(context.reference, 3);
    }
    return component;
  }
}
//# sourceMappingURL=RUCasualDateParser.js.map


/***/ }),

/***/ 68068:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 50688);




class RUCasualTimeParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(сейчас|прошлым\\s*вечером|прошлой\\s*ночью|следующей\\s*ночью|сегодня\\s*ночью|этой\\s*ночью|ночью|этим утром|утром|утра|в\\s*полдень|вечером|вечера|в\\s*полночь)`;
  }
  innerExtract(context, match) {
    let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    if (lowerText === "сейчас") {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
    }
    if (lowerText === "вечером" || lowerText === "вечера") {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.evening(context.reference);
    }
    if (lowerText.endsWith("утром") || lowerText.endsWith("утра")) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.morning(context.reference);
    }
    if (lowerText.match(/в\s*полдень/)) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.noon(context.reference);
    }
    if (lowerText.match(/прошлой\s*ночью/)) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.lastNight(context.reference);
    }
    if (lowerText.match(/прошлым\s*вечером/)) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.yesterdayEvening(context.reference);
    }
    if (lowerText.match(/следующей\s*ночью/)) {
      const daysToAdd = targetDate.hour() < 22 ? 1 : 2;
      targetDate = targetDate.add(daysToAdd, "day");
      (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
      component.imply("hour", 0);
    }
    if (lowerText.match(/в\s*полночь/) || lowerText.endsWith("ночью")) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.midnight(context.reference);
    }
    return component;
  }
}
//# sourceMappingURL=RUCasualTimeParser.js.map


/***/ }),

/***/ 54796:
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 32648);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 50688);






const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class RUMonthNameLittleEndianParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(?:с)?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})` + `(?:` + `\\s{0,3}(?:по|-|–|до)?\\s{0,3}` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})` + `)?` + `(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` + `(?:` + `(?:-|\\/|,?\\s{0,3})` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}(?![^\\s]\\d))` + `)?`;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP]) {
      const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
      result.start.assign("year", yearNumber);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
      result.start.imply("year", year);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
//# sourceMappingURL=RUMonthNameLittleEndianParser.js.map


/***/ }),

/***/ 2680:
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUMonthNameParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUMonthNameParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ 32648);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 50688);





const MONTH_NAME_GROUP = 2;
const YEAR_GROUP = 3;
class RUMonthNameParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftBoundaryChecking {
  innerPatternString(context) {
    return `((?:в)\\s*)?` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.MONTH_DICTIONARY)})` + `\\s*` + `(?:` + `[,-]?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_2__.YEAR_PATTERN})?` + `)?` + `(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`;
  }
  innerExtract(context, match) {
    const monthName = match[MONTH_NAME_GROUP].toLowerCase();
    if (match[0].length <= 3 && !_constants_js__WEBPACK_IMPORTED_MODULE_2__.FULL_MONTH_NAME_DICTIONARY[monthName]) {
      return null;
    }
    const result = context.createParsingResult(match.index, match.index + match[0].length);
    result.start.imply("day", 1);
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_2__.MONTH_DICTIONARY[monthName];
    result.start.assign("month", month);
    if (match[YEAR_GROUP]) {
      const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.parseYear)(match[YEAR_GROUP]);
      result.start.assign("year", year);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, 1, month);
      result.start.imply("year", year);
    }
    return result;
  }
}
//# sourceMappingURL=RUMonthNameParser.js.map


/***/ }),

/***/ 14808:
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RURelativeDateFormatParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RURelativeDateFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 32648);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 50688);





const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class RURelativeDateFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(в прошлом|на прошлой|на следующей|в следующем|на этой|в этом)\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.TIME_UNIT_DICTIONARY)})`;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
    const timeunit = _constants_js__WEBPACK_IMPORTED_MODULE_3__.TIME_UNIT_DICTIONARY[unitWord];
    if (modifier == "на следующей" || modifier == "в следующем") {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "в прошлом" || modifier == "на прошлой") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
    if (timeunit.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (timeunit.match(/month/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (timeunit.match(/year/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
    }
    return components;
  }
}
//# sourceMappingURL=RURelativeDateFormatParser.js.map


/***/ }),

/***/ 84308:
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ 93912);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 32648);



class RUTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
  constructor(strictMode) {
    super(strictMode);
  }
  patternFlags() {
    return _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags;
  }
  primaryPatternLeftBoundary() {
    return `(^|\\s|T|(?:[^\\p{L}\\p{N}_]))`;
  }
  followingPhase() {
    return `\\s*(?:\\-|\\–|\\~|\\〜|до|и|по|\\?)\\s*`;
  }
  primaryPrefix() {
    return `(?:(?:в|с)\\s*)??`;
  }
  primarySuffix() {
    return `(?:\\s*(?:утра|вечера|после полудня))?(?!\\/)${_constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.rightBoundary}`;
  }
  extractPrimaryTimeComponents(context, match) {
    const components = super.extractPrimaryTimeComponents(context, match);
    if (components) {
      if (match[0].endsWith("вечера")) {
        const hour = components.get("hour");
        if (hour >= 6 && hour < 12) {
          components.assign("hour", components.get("hour") + 12);
          components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        } else if (hour < 6) {
          components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        }
      }
      if (match[0].endsWith("после полудня")) {
        components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        const hour = components.get("hour");
        if (hour >= 0 && hour <= 6) {
          components.assign("hour", components.get("hour") + 12);
        }
      }
      if (match[0].endsWith("утра")) {
        components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        const hour = components.get("hour");
        if (hour < 12) {
          components.assign("hour", components.get("hour"));
        }
      }
    }
    return components;
  }
}
//# sourceMappingURL=RUTimeExpressionParser.js.map


/***/ }),

/***/ 70488:
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 32648);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 50688);




class RUTimeUnitAgoFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftBoundaryChecking {
  innerPatternString(context) {
    return `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})\\s{0,5}назад(?=(?:\\W|$))`;
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
    const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
    return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
}
//# sourceMappingURL=RUTimeUnitAgoFormatParser.js.map


/***/ }),

/***/ 78096:
/*!******************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitCasualRelativeFormatParser.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUTimeUnitCasualRelativeFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 32648);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 50688);




class RUTimeUnitCasualRelativeFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})`;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[2]);
    switch (prefix) {
      case "последние":
      case "прошлые":
      case "-":
        timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        break;
    }
    return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=RUTimeUnitCasualRelativeFormatParser.js.map


/***/ }),

/***/ 41464:
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 32648);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



const PATTERN = `(?:(?:около|примерно)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})${_constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.rightBoundary}`;
class RUTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.leftBoundary;
  }
  innerPattern(context) {
    return context.option.forwardDate ? new RegExp(PATTERN, _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.flags) : new RegExp(`(?:в течение|в течении)\\s*${PATTERN}`, _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.flags);
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
    return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=RUTimeUnitWithinFormatParser.js.map


/***/ }),

/***/ 30212:
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ 32648);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ 64336);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 50688);




const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class RUWeekdayParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(?:(?:,|\\(|（)\\s*)?` + `(?:в\\s*?)?` + `(?:(эту|этот|прошлый|прошлую|следующий|следующую|следующего)\\s*)?` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.WEEKDAY_DICTIONARY)})` + `(?:\\s*(?:,|\\)|）))?` + `(?:\\s*на\\s*(этой|прошлой|следующей)\\s*неделе)?`;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
    const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_2__.WEEKDAY_DICTIONARY[dayOfWeek];
    const prefix = match[PREFIX_GROUP];
    const postfix = match[POSTFIX_GROUP];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord == "прошлый" || modifierWord == "прошлую" || modifierWord == "прошлой") {
      modifier = "last";
    } else if (modifierWord == "следующий" || modifierWord == "следующую" || modifierWord == "следующей" || modifierWord == "следующего") {
      modifier = "next";
    } else if (modifierWord == "этот" || modifierWord == "эту" || modifierWord == "этой") {
      modifier = "this";
    }
    return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
  }
}
//# sourceMappingURL=RUWeekdayParser.js.map


/***/ }),

/***/ 6008:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/refiners/RUMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class RUMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(и до|и по|до|по|-)\s*$/i;
  }
}
//# sourceMappingURL=RUMergeDateRangeRefiner.js.map


/***/ }),

/***/ 76296:
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/refiners/RUMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class RUMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return new RegExp(`^\\s*(T|в|,|-)?\\s*$`);
  }
}
//# sourceMappingURL=RUMergeDateTimeRefiner.js.map


/***/ }),

/***/ 52376:
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FULL_MONTH_NAME_DICTIONARY: () => (/* binding */ FULL_MONTH_NAME_DICTIONARY),
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   ORDINAL_WORD_DICTIONARY: () => (/* binding */ ORDINAL_WORD_DICTIONARY),
/* harmony export */   REGEX_PARTS: () => (/* binding */ REGEX_PARTS),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYearPattern: () => (/* binding */ parseYearPattern)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ 45944);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ 67684);


const REGEX_PARTS = {
  leftBoundary: "([^\\p{L}\\p{N}_]|^)",
  rightBoundary: "(?=[^\\p{L}\\p{N}_]|$)",
  flags: "iu"
};
const WEEKDAY_DICTIONARY = {
  "неділя": 0,
  "неділі": 0,
  "неділю": 0,
  "нд": 0,
  "нд.": 0,
  "понеділок": 1,
  "понеділка": 1,
  "пн": 1,
  "пн.": 1,
  "вівторок": 2,
  "вівторка": 2,
  "вт": 2,
  "вт.": 2,
  "середа": 3,
  "середи": 3,
  "середу": 3,
  "ср": 3,
  "ср.": 3,
  "четвер": 4,
  "четверга": 4,
  "четвергу": 4,
  "чт": 4,
  "чт.": 4,
  "п'ятниця": 5,
  "п'ятниці": 5,
  "п'ятницю": 5,
  "пт": 5,
  "пт.": 5,
  "субота": 6,
  "суботи": 6,
  "суботу": 6,
  "сб": 6,
  "сб.": 6
};
const FULL_MONTH_NAME_DICTIONARY = {
  "січень": 1,
  "січня": 1,
  "січні": 1,
  "лютий": 2,
  "лютого": 2,
  "лютому": 2,
  "березень": 3,
  "березня": 3,
  "березні": 3,
  "квітень": 4,
  "квітня": 4,
  "квітні": 4,
  "травень": 5,
  "травня": 5,
  "травні": 5,
  "червень": 6,
  "червня": 6,
  "червні": 6,
  "липень": 7,
  "липня": 7,
  "липні": 7,
  "серпень": 8,
  "серпня": 8,
  "серпні": 8,
  "вересень": 9,
  "вересня": 9,
  "вересні": 9,
  "жовтень": 10,
  "жовтня": 10,
  "жовтні": 10,
  "листопад": 11,
  "листопада": 11,
  "листопаду": 11,
  "грудень": 12,
  "грудня": 12,
  "грудні": 12
};
const MONTH_DICTIONARY = {
  ...FULL_MONTH_NAME_DICTIONARY,
  "січ": 1,
  "січ.": 1,
  "лют": 2,
  "лют.": 2,
  "бер": 3,
  "бер.": 3,
  "квіт": 4,
  "квіт.": 4,
  "трав": 5,
  "трав.": 5,
  "черв": 6,
  "черв.": 6,
  "лип": 7,
  "лип.": 7,
  "серп": 8,
  "серп.": 8,
  "сер": 8,
  "cер.": 8,
  "вер": 9,
  "вер.": 9,
  "верес": 9,
  "верес.": 9,
  "жовт": 10,
  "жовт.": 10,
  "листоп": 11,
  "листоп.": 11,
  "груд": 12,
  "груд.": 12
};
const INTEGER_WORD_DICTIONARY = {
  "один": 1,
  "одна": 1,
  "одної": 1,
  "одну": 1,
  "дві": 2,
  "два": 2,
  "двох": 2,
  "три": 3,
  "трьох": 3,
  "чотири": 4,
  "чотирьох": 4,
  "п'ять": 5,
  "п'яти": 5,
  "шість": 6,
  "шести": 6,
  "сім": 7,
  "семи": 7,
  "вісім": 8,
  "восьми": 8,
  "дев'ять": 9,
  "дев'яти": 9,
  "десять": 10,
  "десяти": 10,
  "одинадцять": 11,
  "одинадцяти": 11,
  "дванадцять": 12,
  "дванадцяти": 12
};
const ORDINAL_WORD_DICTIONARY = {
  "перше": 1,
  "першого": 1,
  "друге": 2,
  "другого": 2,
  "третє": 3,
  "третього": 3,
  "четверте": 4,
  "четвертого": 4,
  "п'яте": 5,
  "п'ятого": 5,
  "шосте": 6,
  "шостого": 6,
  "сьоме": 7,
  "сьомого": 7,
  "восьме": 8,
  "восьмого": 8,
  "дев'яте": 9,
  "дев'ятого": 9,
  "десяте": 10,
  "десятого": 10,
  "одинадцяте": 11,
  "одинадцятого": 11,
  "дванадцяте": 12,
  "дванадцятого": 12,
  "тринадцяте": 13,
  "тринадцятого": 13,
  "чотирнадцяте": 14,
  "чотинрнадцятого": 14,
  "п'ятнадцяте": 15,
  "п'ятнадцятого": 15,
  "шістнадцяте": 16,
  "шістнадцятого": 16,
  "сімнадцяте": 17,
  "сімнадцятого": 17,
  "вісімнадцяте": 18,
  "вісімнадцятого": 18,
  "дев'ятнадцяте": 19,
  "дев'ятнадцятого": 19,
  "двадцяте": 20,
  "двадцятого": 20,
  "двадцять перше": 21,
  "двадцять першого": 21,
  "двадцять друге": 22,
  "двадцять другого": 22,
  "двадцять третє": 23,
  "двадцять третього": 23,
  "двадцять четверте": 24,
  "двадцять четвертого": 24,
  "двадцять п'яте": 25,
  "двадцять п'ятого": 25,
  "двадцять шосте": 26,
  "двадцять шостого": 26,
  "двадцять сьоме": 27,
  "двадцять сьомого": 27,
  "двадцять восьме": 28,
  "двадцять восьмого": 28,
  "двадцять дев'яте": 29,
  "двадцять дев'ятого": 29,
  "тридцяте": 30,
  "тридцятого": 30,
  "тридцять перше": 31,
  "тридцять першого": 31
};
const TIME_UNIT_DICTIONARY = {
  сек: "second",
  секунда: "second",
  секунд: "second",
  секунди: "second",
  секунду: "second",
  секундочок: "second",
  секундочки: "second",
  секундочку: "second",
  хв: "minute",
  хвилина: "minute",
  хвилин: "minute",
  хвилини: "minute",
  хвилину: "minute",
  хвилинок: "minute",
  хвилинки: "minute",
  хвилинку: "minute",
  хвилиночок: "minute",
  хвилиночки: "minute",
  хвилиночку: "minute",
  год: "hour",
  година: "hour",
  годин: "hour",
  години: "hour",
  годину: "hour",
  годинка: "hour",
  годинок: "hour",
  годинки: "hour",
  годинку: "hour",
  день: "d",
  дня: "d",
  днів: "d",
  дні: "d",
  доба: "d",
  добу: "d",
  тиждень: "week",
  тижню: "week",
  тижня: "week",
  тижні: "week",
  тижнів: "week",
  місяць: "month",
  місяців: "month",
  місяці: "month",
  місяця: "month",
  квартал: "quarter",
  кварталу: "quarter",
  квартала: "quarter",
  кварталів: "quarter",
  кварталі: "quarter",
  рік: "year",
  року: "year",
  році: "year",
  років: "year",
  роки: "year"
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|пів|декілька|пар(?:у)|\\s{0,3})`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
    return INTEGER_WORD_DICTIONARY[num];
  }
  if (num.match(/декілька/)) {
    return 2;
  } else if (num.match(/пів/)) {
    return 0.5;
  } else if (num.match(/пар/)) {
    return 2;
  } else if (num === "") {
    return 1;
  }
  return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:го|ого|е)?)`;
function parseOrdinalNumberPattern(match) {
  const num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
    return ORDINAL_WORD_DICTIONARY[num];
  }
  return parseInt(num);
}
const year = "(?:\\s+(?:року|рік|р|р.))?";
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}${year}\\s*(?:н.е.|до н.е.|н. е.|до н. е.)|[1-2][0-9]{3}${year}|[5-9][0-9]${year})`;
function parseYearPattern(match) {
  if (/(рік|року|р|р.)/i.test(match)) {
    match = match.replace(/(рік|року|р|р.)/i, "");
  }
  if (/(до н.е.|до н. е.)/i.test(match)) {
    match = match.replace(/(до н.е.|до н. е.)/i, "");
    return -parseInt(match);
  }
  if (/(н. е.|н.е.)/i.test(match)) {
    match = match.replace(/(н. е.|н.е.)/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:близько|приблизно)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length).trim();
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 62840:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _parsers_UKTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/UKTimeUnitWithinFormatParser.js */ 31616);
/* harmony import */ var _parsers_UKMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/UKMonthNameLittleEndianParser.js */ 12244);
/* harmony import */ var _parsers_UKMonthNameParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/UKMonthNameParser.js */ 52120);
/* harmony import */ var _parsers_UKTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/UKTimeExpressionParser.js */ 63096);
/* harmony import */ var _parsers_UKTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/UKTimeUnitAgoFormatParser.js */ 39675);
/* harmony import */ var _refiners_UKMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./refiners/UKMergeDateRangeRefiner.js */ 99380);
/* harmony import */ var _refiners_UKMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refiners/UKMergeDateTimeRefiner.js */ 74688);
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configurations.js */ 72560);
/* harmony import */ var _parsers_UKCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/UKCasualDateParser.js */ 37157);
/* harmony import */ var _parsers_UKCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/UKCasualTimeParser.js */ 12104);
/* harmony import */ var _parsers_UKWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/UKWeekdayParser.js */ 94036);
/* harmony import */ var _parsers_UKRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/UKRelativeDateFormatParser.js */ 82200);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 49276);
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ 18128);
/* harmony import */ var _parsers_UKTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/UKTimeUnitCasualRelativeFormatParser.js */ 76960);
/* harmony import */ var _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/parsers/ISOFormatParser.js */ 16256);




















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function createCasualConfiguration() {
  const option = createConfiguration(false);
  option.parsers.unshift(new _parsers_UKCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  option.parsers.unshift(new _parsers_UKCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
  option.parsers.unshift(new _parsers_UKMonthNameParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
  option.parsers.unshift(new _parsers_UKRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"]());
  option.parsers.unshift(new _parsers_UKTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"]());
  return option;
}
function createConfiguration(strictMode) {
  return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_8__.includeCommonConfiguration)({
    parsers: [new _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](), new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](true), new _parsers_UKTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](), new _parsers_UKMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](), new _parsers_UKWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](), new _parsers_UKTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_14__["default"](strictMode), new _parsers_UKTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_15__["default"]()],
    refiners: [new _refiners_UKMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__["default"](), new _refiners_UKMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_17__["default"]()]
  }, strictMode);
}
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 13040:
/*!********************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractParserWithLeftBoundaryChecking: () => (/* binding */ AbstractParserWithLeftBoundaryChecking),
/* harmony export */   AbstractParserWithLeftRightBoundaryChecking: () => (/* binding */ AbstractParserWithLeftRightBoundaryChecking)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 52376);


class AbstractParserWithLeftBoundaryChecking extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.leftBoundary;
  }
  innerPattern(context) {
    return new RegExp(this.innerPatternString(context), _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags);
  }
  innerPatternHasChange(context, currentInnerPattern) {
    return false;
  }
}
class AbstractParserWithLeftRightBoundaryChecking extends AbstractParserWithLeftBoundaryChecking {
  innerPattern(context) {
    return new RegExp(`${this.innerPatternString(context)}${_constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.rightBoundary}`, _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags);
  }
}
//# sourceMappingURL=AbstractParserWithWordBoundaryChecking.js.map

/***/ }),

/***/ 37157:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 13040);


class UKCasualDateParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(?:з|із|від)?\\s*(сьогодні|вчора|завтра|післязавтра|післяпіслязавтра|позапозавчора|позавчора)`;
  }
  innerExtract(context, match) {
    const lowerText = match[1].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "сьогодні":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
      case "вчора":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
      case "завтра":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
      case "післязавтра":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayAfter(context.reference, 2);
      case "післяпіслязавтра":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayAfter(context.reference, 3);
      case "позавчора":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayBefore(context.reference, 2);
      case "позапозавчора":
        return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayBefore(context.reference, 3);
    }
    return component;
  }
}
//# sourceMappingURL=UKCasualDateParser.js.map


/***/ }),

/***/ 12104:
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ 35888);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ 37616);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 13040);




class UKCasualTimeParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(зараз|минулого\\s*вечора|минулої\\s*ночі|наступної\\s*ночі|сьогодні\\s*вночі|цієї\\s*ночі|цього ранку|вранці|ранку|зранку|опівдні|ввечері|вечора|опівночі|вночі)`;
  }
  innerExtract(context, match) {
    let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    if (lowerText === "зараз") {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
    }
    if (lowerText === "ввечері" || lowerText === "вечора") {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.evening(context.reference);
    }
    if (lowerText.endsWith("вранці") || lowerText.endsWith("ранку") || lowerText.endsWith("зранку")) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.morning(context.reference);
    }
    if (lowerText.endsWith("опівдні")) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.noon(context.reference);
    }
    if (lowerText.match(/минулої\s*ночі/)) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.lastNight(context.reference);
    }
    if (lowerText.match(/минулого\s*вечора/)) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.yesterdayEvening(context.reference);
    }
    if (lowerText.match(/наступної\s*ночі/)) {
      const daysToAdd = targetDate.hour() < 22 ? 1 : 2;
      targetDate = targetDate.add(daysToAdd, "day");
      (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
      component.imply("hour", 1);
    }
    if (lowerText.match(/цієї\s*ночі/)) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.midnight(context.reference);
    }
    if (lowerText.endsWith("опівночі") || lowerText.endsWith("вночі")) {
      return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.midnight(context.reference);
    }
    return component;
  }
}
//# sourceMappingURL=UKCasualTimeParser.js.map


/***/ }),

/***/ 12244:
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 52376);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 13040);






const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class UKMonthNameLittleEndianParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(?:з|із)?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})` + `(?:` + `\\s{0,3}(?:по|-|–|до)?\\s{0,3}` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})` + `)?` + `(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` + `(?:` + `(?:-|\\/|,?\\s{0,3})` + `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}(?![^\\s]\\d))` + `)?`;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP]) {
      const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYearPattern)(match[YEAR_GROUP]);
      result.start.assign("year", yearNumber);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.reference.instant, day, month);
      result.start.imply("year", year);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
//# sourceMappingURL=UKMonthNameLittleEndianParser.js.map


/***/ }),

/***/ 52120:
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKMonthNameParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UkMonthNameParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ 52376);
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ 67684);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 13040);





const MONTH_NAME_GROUP = 2;
const YEAR_GROUP = 3;
class UkMonthNameParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftBoundaryChecking {
  innerPatternString(context) {
    return `((?:в|у)\\s*)?` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.MONTH_DICTIONARY)})` + `\\s*` + `(?:` + `[,-]?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_2__.YEAR_PATTERN})?` + `)?` + `(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`;
  }
  innerExtract(context, match) {
    const monthName = match[MONTH_NAME_GROUP].toLowerCase();
    if (match[0].length <= 3 && !_constants_js__WEBPACK_IMPORTED_MODULE_2__.FULL_MONTH_NAME_DICTIONARY[monthName]) {
      return null;
    }
    const result = context.createParsingResult(match.index, match.index + match[0].length);
    result.start.imply("day", 1);
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_2__.MONTH_DICTIONARY[monthName];
    result.start.assign("month", month);
    if (match[YEAR_GROUP]) {
      const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.parseYearPattern)(match[YEAR_GROUP]);
      result.start.assign("year", year);
    } else {
      const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.reference.instant, 1, month);
      result.start.imply("year", year);
    }
    return result;
  }
}
//# sourceMappingURL=UKMonthNameParser.js.map


/***/ }),

/***/ 82200:
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKRelativeDateFormatParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKRelativeDateFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 52376);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 13040);





const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class UKRelativeDateFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(в минулому|у минулому|на минулому|минулого|на наступному|в наступному|у наступному|наступного|на цьому|в цьому|у цьому|цього)\\s*` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.TIME_UNIT_DICTIONARY)})(?=\\s*)`;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
    const timeunit = _constants_js__WEBPACK_IMPORTED_MODULE_3__.TIME_UNIT_DICTIONARY[unitWord];
    if (modifier == "на наступному" || modifier == "в наступному" || modifier == "у наступному" || modifier == "наступного") {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "на минулому" || modifier == "в минулому" || modifier == "у минулому" || modifier == "минулого") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
    if (timeunit.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (timeunit.match(/month/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (timeunit.match(/year/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
    }
    return components;
  }
}
//# sourceMappingURL=UKRelativeDateFormatParser.js.map


/***/ }),

/***/ 63096:
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ 93912);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 52376);



class UKTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
  constructor(strictMode) {
    super(strictMode);
  }
  patternFlags() {
    return _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags;
  }
  primaryPatternLeftBoundary() {
    return `(^|\\s|T|(?:[^\\p{L}\\p{N}_]))`;
  }
  followingPhase() {
    return `\\s*(?:\\-|\\–|\\~|\\〜|до|і|по|\\?)\\s*`;
  }
  primaryPrefix() {
    return `(?:(?:в|у|о|об|з|із|від)\\s*)??`;
  }
  primarySuffix() {
    return `(?:\\s*(?:ранку|вечора|по обіді|після обіду))?(?!\\/)${_constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.rightBoundary}`;
  }
  extractPrimaryTimeComponents(context, match) {
    const components = super.extractPrimaryTimeComponents(context, match);
    if (components) {
      if (match[0].endsWith("вечора")) {
        const hour = components.get("hour");
        if (hour >= 6 && hour < 12) {
          components.assign("hour", components.get("hour") + 12);
          components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        } else if (hour < 6) {
          components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        }
      }
      if (match[0].endsWith("по обіді") || match[0].endsWith("після обіду")) {
        components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        const hour = components.get("hour");
        if (hour >= 0 && hour <= 6) {
          components.assign("hour", components.get("hour") + 12);
        }
      }
      if (match[0].endsWith("ранку")) {
        components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        const hour = components.get("hour");
        if (hour < 12) {
          components.assign("hour", components.get("hour"));
        }
      }
    }
    return components;
  }
}
//# sourceMappingURL=UKTimeExpressionParser.js.map


/***/ }),

/***/ 39675:
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 52376);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 13040);




class UKTimeUnitAgoFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftBoundaryChecking {
  innerPatternString(context) {
    return `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})\\s{0,5}тому(?=(?:\\W|$))`;
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
    const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
    return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
}
//# sourceMappingURL=UKTimeUnitAgoFormatParser.js.map


/***/ }),

/***/ 76960:
/*!******************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitCasualRelativeFormatParser.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKTimeUnitCasualRelativeFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 52376);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ 69344);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 13040);




class UKTimeUnitCasualRelativeFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})`;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[3]);
    switch (prefix) {
      case "останні":
      case "минулі":
      case "-":
        timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        break;
    }
    return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=UKTimeUnitCasualRelativeFormatParser.js.map


/***/ }),

/***/ 31616:
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 52376);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);



const PATTERN = `(?:(?:приблизно|орієнтовно)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})${_constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.rightBoundary}`;
class UKTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.leftBoundary;
  }
  innerPattern(context) {
    return context.option.forwardDate ? new RegExp(PATTERN, "i") : new RegExp(`(?:протягом|на протязі|протягом|упродовж|впродовж)\\s*${PATTERN}`, _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.flags);
  }
  innerExtract(context, match) {
    const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
    return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
//# sourceMappingURL=UKTimeUnitWithinFormatParser.js.map


/***/ }),

/***/ 94036:
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ 52376);
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ 45944);
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ 64336);
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ 13040);




const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class UKWeekdayParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
  innerPatternString(context) {
    return `(?:(?:,|\\(|（)\\s*)?` + `(?:в\\s*?)?` + `(?:у\\s*?)?` + `(?:(цей|минулого|минулий|попередній|попереднього|наступного|наступний|наступному)\\s*)?` + `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.WEEKDAY_DICTIONARY)})` + `(?:\\s*(?:,|\\)|）))?` + `(?:\\s*(на|у|в)\\s*(цьому|минулому|наступному)\\s*тижні)?`;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP].toLocaleLowerCase();
    const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_2__.WEEKDAY_DICTIONARY[dayOfWeek];
    const prefix = match[PREFIX_GROUP];
    const postfix = match[POSTFIX_GROUP];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLocaleLowerCase();
    let modifier = null;
    if (modifierWord == "минулого" || modifierWord == "минулий" || modifierWord == "попередній" || modifierWord == "попереднього") {
      modifier = "last";
    } else if (modifierWord == "наступного" || modifierWord == "наступний") {
      modifier = "next";
    } else if (modifierWord == "цей" || modifierWord == "цього" || modifierWord == "цьому") {
      modifier = "this";
    }
    return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
  }
}
//# sourceMappingURL=UKWeekdayParser.js.map


/***/ }),

/***/ 99380:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/refiners/UKMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class UKMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(і до|і по|до|по|-)\s*$/i;
  }
}
//# sourceMappingURL=UKMergeDateRangeRefiner.js.map


/***/ }),

/***/ 74688:
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/refiners/UKMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class UKMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return new RegExp(`^\\s*(T|в|у|о|,|-)?\\s*$`);
  }
}
//# sourceMappingURL=UKMergeDateTimeRefiner.js.map


/***/ }),

/***/ 4232:
/*!************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/constants.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NUMBER: () => (/* binding */ NUMBER),
/* harmony export */   WEEKDAY_OFFSET: () => (/* binding */ WEEKDAY_OFFSET),
/* harmony export */   zhStringToNumber: () => (/* binding */ zhStringToNumber),
/* harmony export */   zhStringToYear: () => (/* binding */ zhStringToYear)
/* harmony export */ });
const NUMBER = {
  "零": 0,
  "〇": 0,
  "一": 1,
  "二": 2,
  "两": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6,
  "七": 7,
  "八": 8,
  "九": 9,
  "十": 10
};
const WEEKDAY_OFFSET = {
  "天": 0,
  "日": 0,
  "一": 1,
  "二": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6
};
function zhStringToNumber(text) {
  let number = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "十") {
      number = number === 0 ? NUMBER[char] : number * NUMBER[char];
    } else {
      number += NUMBER[char];
    }
  }
  return number;
}
function zhStringToYear(text) {
  let string = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    string = string + NUMBER[char];
  }
  return parseInt(string);
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 22528:
/*!********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   hans: () => (/* binding */ hans),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/refiners/ExtractTimezoneOffsetRefiner.js */ 73640);
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configurations.js */ 72560);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _parsers_ZHHansCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ZHHansCasualDateParser.js */ 83960);
/* harmony import */ var _parsers_ZHHansDateParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/ZHHansDateParser.js */ 16416);
/* harmony import */ var _parsers_ZHHansDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/ZHHansDeadlineFormatParser.js */ 30424);
/* harmony import */ var _parsers_ZHHansRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/ZHHansRelationWeekdayParser.js */ 49344);
/* harmony import */ var _parsers_ZHHansTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/ZHHansTimeExpressionParser.js */ 79454);
/* harmony import */ var _parsers_ZHHansWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/ZHHansWeekdayParser.js */ 65800);
/* harmony import */ var _refiners_ZHHansMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./refiners/ZHHansMergeDateRangeRefiner.js */ 49216);
/* harmony import */ var _refiners_ZHHansMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refiners/ZHHansMergeDateTimeRefiner.js */ 52832);















const hans = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration());
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
function createCasualConfiguration() {
  const option = createConfiguration();
  option.parsers.unshift(new _parsers_ZHHansCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  return option;
}
function createConfiguration() {
  const configuration = (0,_configurations_js__WEBPACK_IMPORTED_MODULE_4__.includeCommonConfiguration)({
    parsers: [new _parsers_ZHHansDateParser_js__WEBPACK_IMPORTED_MODULE_5__["default"](), new _parsers_ZHHansRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](), new _parsers_ZHHansWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](), new _parsers_ZHHansTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](), new _parsers_ZHHansDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_9__["default"]()],
    refiners: [new _refiners_ZHHansMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _refiners_ZHHansMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__["default"]()]
  });
  configuration.refiners = configuration.refiners.filter(refiner => !(refiner instanceof _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_12__["default"]));
  return configuration;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 83960:
/*!*********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansCasualDateParser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);


const NOW_GROUP = 1;
const DAY_GROUP_1 = 2;
const TIME_GROUP_1 = 3;
const TIME_GROUP_2 = 4;
const DAY_GROUP_3 = 5;
const TIME_GROUP_3 = 6;
class ZHHansCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return new RegExp("(现在|立(?:刻|即)|即刻)|" + "(今|明|前|大前|后|大后|昨)(早|晚)|" + "(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" + "(今|明|前|大前|后|大后|昨)(?:日|天)" + "(?:[\\s|,|，]*)" + "(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?", "i");
  }
  innerExtract(context, match) {
    const index = match.index;
    const result = context.createParsingResult(index, match[0]);
    const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    let startMoment = refMoment;
    if (match[NOW_GROUP]) {
      result.start.imply("hour", refMoment.hour());
      result.start.imply("minute", refMoment.minute());
      result.start.imply("second", refMoment.second());
      result.start.imply("millisecond", refMoment.millisecond());
    } else if (match[DAY_GROUP_1]) {
      const day1 = match[DAY_GROUP_1];
      const time1 = match[TIME_GROUP_1];
      if (day1 == "明") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day1 == "昨") {
        startMoment = startMoment.add(-1, "day");
      } else if (day1 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day1 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day1 == "后") {
        startMoment = startMoment.add(2, "day");
      } else if (day1 == "大后") {
        startMoment = startMoment.add(3, "day");
      }
      if (time1 == "早") {
        result.start.imply("hour", 6);
      } else if (time1 == "晚") {
        result.start.imply("hour", 22);
        result.start.imply("meridiem", 1);
      }
    } else if (match[TIME_GROUP_2]) {
      const timeString2 = match[TIME_GROUP_2];
      const time2 = timeString2[0];
      if (time2 == "早" || time2 == "上") {
        result.start.imply("hour", 6);
      } else if (time2 == "下") {
        result.start.imply("hour", 15);
        result.start.imply("meridiem", 1);
      } else if (time2 == "中") {
        result.start.imply("hour", 12);
        result.start.imply("meridiem", 1);
      } else if (time2 == "夜" || time2 == "晚") {
        result.start.imply("hour", 22);
        result.start.imply("meridiem", 1);
      } else if (time2 == "凌") {
        result.start.imply("hour", 0);
      }
    } else if (match[DAY_GROUP_3]) {
      const day3 = match[DAY_GROUP_3];
      if (day3 == "明") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day3 == "昨") {
        startMoment = startMoment.add(-1, "day");
      } else if (day3 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day3 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day3 == "后") {
        startMoment = startMoment.add(2, "day");
      } else if (day3 == "大后") {
        startMoment = startMoment.add(3, "day");
      }
      const timeString3 = match[TIME_GROUP_3];
      if (timeString3) {
        const time3 = timeString3[0];
        if (time3 == "早" || time3 == "上") {
          result.start.imply("hour", 6);
        } else if (time3 == "下") {
          result.start.imply("hour", 15);
          result.start.imply("meridiem", 1);
        } else if (time3 == "中") {
          result.start.imply("hour", 12);
          result.start.imply("meridiem", 1);
        } else if (time3 == "夜" || time3 == "晚") {
          result.start.imply("hour", 22);
          result.start.imply("meridiem", 1);
        } else if (time3 == "凌") {
          result.start.imply("hour", 0);
        }
      }
    }
    result.start.assign("day", startMoment.date());
    result.start.assign("month", startMoment.month() + 1);
    result.start.assign("year", startMoment.year());
    return result;
  }
}
//# sourceMappingURL=ZHHansCasualDateParser.js.map


/***/ }),

/***/ 16416:
/*!***************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDateParser.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ 4232);



const YEAR_GROUP = 1;
const MONTH_GROUP = 2;
const DAY_GROUP = 3;
class ZHHansDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp("(" + "\\d{2,4}|" + "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{4}|" + "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{2}" + ")?" + "(?:\\s*)" + "(?:年)?" + "(?:[\\s|,|，]*)" + "(" + "\\d{1,2}|" + "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{1,3}" + ")" + "(?:\\s*)" + "(?:月)" + "(?:\\s*)" + "(" + "\\d{1,2}|" + "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{1,3}" + ")?" + "(?:\\s*)" + "(?:日|号)?");
  }
  innerExtract(context, match) {
    const startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const result = context.createParsingResult(match.index, match[0]);
    let month = parseInt(match[MONTH_GROUP]);
    if (isNaN(month)) month = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToNumber)(match[MONTH_GROUP]);
    result.start.assign("month", month);
    if (match[DAY_GROUP]) {
      let day = parseInt(match[DAY_GROUP]);
      if (isNaN(day)) day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToNumber)(match[DAY_GROUP]);
      result.start.assign("day", day);
    } else {
      result.start.imply("day", startMoment.date());
    }
    if (match[YEAR_GROUP]) {
      let year = parseInt(match[YEAR_GROUP]);
      if (isNaN(year)) year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToYear)(match[YEAR_GROUP]);
      result.start.assign("year", year);
    } else {
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
//# sourceMappingURL=ZHHansDateParser.js.map


/***/ }),

/***/ 30424:
/*!*************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDeadlineFormatParser.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansDeadlineFormatParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 4232);



const PATTERN = new RegExp("(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+|半|几)(?:\\s*)" + "(?:个)?" + "(秒(?:钟)?|分钟|小时|钟|日|天|星期|礼拜|月|年)" + "(?:(?:之|过)?后|(?:之)?内)", "i");
const NUMBER_GROUP = 1;
const UNIT_GROUP = 2;
class ZHHansDeadlineFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    let number = parseInt(match[NUMBER_GROUP]);
    if (isNaN(number)) {
      number = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[NUMBER_GROUP]);
    }
    if (isNaN(number)) {
      const string = match[NUMBER_GROUP];
      if (string === "几") {
        number = 3;
      } else if (string === "半") {
        number = 0.5;
      } else {
        return null;
      }
    }
    let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const unit = match[UNIT_GROUP];
    const unitAbbr = unit[0];
    if (unitAbbr.match(/[日天星礼月年]/)) {
      if (unitAbbr == "日" || unitAbbr == "天") {
        date = date.add(number, "d");
      } else if (unitAbbr == "星" || unitAbbr == "礼") {
        date = date.add(number * 7, "d");
      } else if (unitAbbr == "月") {
        date = date.add(number, "month");
      } else if (unitAbbr == "年") {
        date = date.add(number, "year");
      }
      result.start.assign("year", date.year());
      result.start.assign("month", date.month() + 1);
      result.start.assign("day", date.date());
      return result;
    }
    if (unitAbbr == "秒") {
      date = date.add(number, "second");
    } else if (unitAbbr == "分") {
      date = date.add(number, "minute");
    } else if (unitAbbr == "小" || unitAbbr == "钟") {
      date = date.add(number, "hour");
    }
    result.start.imply("year", date.year());
    result.start.imply("month", date.month() + 1);
    result.start.imply("day", date.date());
    result.start.assign("hour", date.hour());
    result.start.assign("minute", date.minute());
    result.start.assign("second", date.second());
    return result;
  }
}
//# sourceMappingURL=ZHHansDeadlineFormatParser.js.map


/***/ }),

/***/ 49344:
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansRelationWeekdayParser.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansRelationWeekdayParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 4232);



const PATTERN = new RegExp("(?<prefix>上|下|这)(?:个)?(?:星期|礼拜|周)(?<weekday>" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET).join("|") + ")");
class ZHHansRelationWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const dayOfWeek = match.groups.weekday;
    const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET[dayOfWeek];
    if (offset === undefined) return null;
    let modifier = null;
    const prefix = match.groups.prefix;
    if (prefix == "上") {
      modifier = "last";
    } else if (prefix == "下") {
      modifier = "next";
    } else if (prefix == "这") {
      modifier = "this";
    }
    let startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    let startMomentFixed = false;
    const refOffset = startMoment.day();
    if (modifier == "last" || modifier == "past") {
      startMoment = startMoment.day(offset - 7);
      startMomentFixed = true;
    } else if (modifier == "next") {
      startMoment = startMoment.day(offset + 7);
      startMomentFixed = true;
    } else if (modifier == "this") {
      startMoment = startMoment.day(offset);
    } else {
      if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
        startMoment = startMoment.day(offset - 7);
      } else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
        startMoment = startMoment.day(offset + 7);
      } else {
        startMoment = startMoment.day(offset);
      }
    }
    result.start.assign("weekday", offset);
    if (startMomentFixed) {
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
//# sourceMappingURL=ZHHansRelationWeekdayParser.js.map


/***/ }),

/***/ 79454:
/*!*************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansTimeExpressionParser.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 4232);



const FIRST_REG_PATTERN = new RegExp("(?:从|自)?" + "(?:" + "(今|明|前|大前|后|大后|昨)(早|朝|晚)|" + "(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" + "(今|明|前|大前|后|大后|昨)(?:日|天)" + "(?:[\\s,，]*)" + "(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?" + ")?" + "(?:[\\s,，]*)" + "(?:(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)(?:\\s*)(?:点|时|:|：)" + "(?:\\s*)" + "(\\d+|半|正|整|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)?(?:\\s*)(?:分|:|：)?" + "(?:\\s*)" + "(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)?(?:\\s*)(?:秒)?)" + "(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const SECOND_REG_PATTERN = new RegExp("(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)" + "(?:" + "(今|明|前|大前|后|大后|昨)(早|朝|晚)|" + "(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" + "(今|明|前|大前|后|大后|昨)(?:日|天)" + "(?:[\\s,，]*)" + "(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?" + ")?" + "(?:[\\s,，]*)" + "(?:(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)(?:\\s*)(?:点|时|:|：)" + "(?:\\s*)" + "(\\d+|半|正|整|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)?(?:\\s*)(?:分|:|：)?" + "(?:\\s*)" + "(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)?(?:\\s*)(?:秒)?)" + "(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const DAY_GROUP_1 = 1;
const ZH_AM_PM_HOUR_GROUP_1 = 2;
const ZH_AM_PM_HOUR_GROUP_2 = 3;
const DAY_GROUP_3 = 4;
const ZH_AM_PM_HOUR_GROUP_3 = 5;
const HOUR_GROUP = 6;
const MINUTE_GROUP = 7;
const SECOND_GROUP = 8;
const AM_PM_HOUR_GROUP = 9;
class ZHHansTimeExpressionParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return FIRST_REG_PATTERN;
  }
  innerExtract(context, match) {
    if (match.index > 0 && context.text[match.index - 1].match(/\w/)) {
      return null;
    }
    const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const result = context.createParsingResult(match.index, match[0]);
    let startMoment = refMoment.clone();
    if (match[DAY_GROUP_1]) {
      const day1 = match[DAY_GROUP_1];
      if (day1 == "明") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day1 == "昨") {
        startMoment = startMoment.add(-1, "day");
      } else if (day1 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day1 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day1 == "后") {
        startMoment = startMoment.add(2, "day");
      } else if (day1 == "大后") {
        startMoment = startMoment.add(3, "day");
      }
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else if (match[DAY_GROUP_3]) {
      const day3 = match[DAY_GROUP_3];
      if (day3 == "明") {
        startMoment = startMoment.add(1, "day");
      } else if (day3 == "昨") {
        startMoment = startMoment.add(-1, "day");
      } else if (day3 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day3 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day3 == "后") {
        startMoment = startMoment.add(2, "day");
      } else if (day3 == "大后") {
        startMoment = startMoment.add(3, "day");
      }
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    let hour = 0;
    let minute = 0;
    let meridiem = -1;
    if (match[SECOND_GROUP]) {
      let second = parseInt(match[SECOND_GROUP]);
      if (isNaN(second)) {
        second = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[SECOND_GROUP]);
      }
      if (second >= 60) return null;
      result.start.assign("second", second);
    }
    hour = parseInt(match[HOUR_GROUP]);
    if (isNaN(hour)) {
      hour = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[HOUR_GROUP]);
    }
    if (match[MINUTE_GROUP]) {
      if (match[MINUTE_GROUP] == "半") {
        minute = 30;
      } else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
        minute = 0;
      } else {
        minute = parseInt(match[MINUTE_GROUP]);
        if (isNaN(minute)) {
          minute = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[MINUTE_GROUP]);
        }
      }
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = 1;
    }
    if (match[AM_PM_HOUR_GROUP]) {
      if (hour > 12) return null;
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      }
      if (ampm == "p") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
      const zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
      const zhAMPM1 = zhAMPMString1[0];
      if (zhAMPM1 == "早") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM1 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
      const zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
      const zhAMPM2 = zhAMPMString2[0];
      if (zhAMPM2 == "上" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM2 == "下" || zhAMPM2 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
      const zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
      const zhAMPM3 = zhAMPMString3[0];
      if (zhAMPM3 == "上" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM3 == "下" || zhAMPM3 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    }
    result.start.assign("hour", hour);
    result.start.assign("minute", minute);
    if (meridiem >= 0) {
      result.start.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        result.start.imply("meridiem", 0);
      } else {
        result.start.imply("meridiem", 1);
      }
    }
    match = SECOND_REG_PATTERN.exec(context.text.substring(result.index + result.text.length));
    if (!match) {
      if (result.text.match(/^\d+$/)) {
        return null;
      }
      return result;
    }
    let endMoment = startMoment.clone();
    result.end = context.createParsingComponents();
    if (match[DAY_GROUP_1]) {
      const day1 = match[DAY_GROUP_1];
      if (day1 == "明") {
        if (refMoment.hour() > 1) {
          endMoment = endMoment.add(1, "day");
        }
      } else if (day1 == "昨") {
        endMoment = endMoment.add(-1, "day");
      } else if (day1 == "前") {
        endMoment = endMoment.add(-2, "day");
      } else if (day1 == "大前") {
        endMoment = endMoment.add(-3, "day");
      } else if (day1 == "后") {
        endMoment = endMoment.add(2, "day");
      } else if (day1 == "大后") {
        endMoment = endMoment.add(3, "day");
      }
      result.end.assign("day", endMoment.date());
      result.end.assign("month", endMoment.month() + 1);
      result.end.assign("year", endMoment.year());
    } else if (match[DAY_GROUP_3]) {
      const day3 = match[DAY_GROUP_3];
      if (day3 == "明") {
        endMoment = endMoment.add(1, "day");
      } else if (day3 == "昨") {
        endMoment = endMoment.add(-1, "day");
      } else if (day3 == "前") {
        endMoment = endMoment.add(-2, "day");
      } else if (day3 == "大前") {
        endMoment = endMoment.add(-3, "day");
      } else if (day3 == "后") {
        endMoment = endMoment.add(2, "day");
      } else if (day3 == "大后") {
        endMoment = endMoment.add(3, "day");
      }
      result.end.assign("day", endMoment.date());
      result.end.assign("month", endMoment.month() + 1);
      result.end.assign("year", endMoment.year());
    } else {
      result.end.imply("day", endMoment.date());
      result.end.imply("month", endMoment.month() + 1);
      result.end.imply("year", endMoment.year());
    }
    hour = 0;
    minute = 0;
    meridiem = -1;
    if (match[SECOND_GROUP]) {
      let second = parseInt(match[SECOND_GROUP]);
      if (isNaN(second)) {
        second = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[SECOND_GROUP]);
      }
      if (second >= 60) return null;
      result.end.assign("second", second);
    }
    hour = parseInt(match[HOUR_GROUP]);
    if (isNaN(hour)) {
      hour = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[HOUR_GROUP]);
    }
    if (match[MINUTE_GROUP]) {
      if (match[MINUTE_GROUP] == "半") {
        minute = 30;
      } else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
        minute = 0;
      } else {
        minute = parseInt(match[MINUTE_GROUP]);
        if (isNaN(minute)) {
          minute = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[MINUTE_GROUP]);
        }
      }
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = 1;
    }
    if (match[AM_PM_HOUR_GROUP]) {
      if (hour > 12) return null;
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      }
      if (ampm == "p") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
      if (!result.start.isCertain("meridiem")) {
        if (meridiem == 0) {
          result.start.imply("meridiem", 0);
          if (result.start.get("hour") == 12) {
            result.start.assign("hour", 0);
          }
        } else {
          result.start.imply("meridiem", 1);
          if (result.start.get("hour") != 12) {
            result.start.assign("hour", result.start.get("hour") + 12);
          }
        }
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
      const zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
      const zhAMPM1 = zhAMPMString1[0];
      if (zhAMPM1 == "早") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM1 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
      const zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
      const zhAMPM2 = zhAMPMString2[0];
      if (zhAMPM2 == "上" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM2 == "下" || zhAMPM2 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
      const zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
      const zhAMPM3 = zhAMPMString3[0];
      if (zhAMPM3 == "上" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM3 == "下" || zhAMPM3 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    }
    result.text = result.text + match[0];
    result.end.assign("hour", hour);
    result.end.assign("minute", minute);
    if (meridiem >= 0) {
      result.end.assign("meridiem", meridiem);
    } else {
      const startAtPM = result.start.isCertain("meridiem") && result.start.get("meridiem") == 1;
      if (startAtPM && result.start.get("hour") > hour) {
        result.end.imply("meridiem", 0);
      } else if (hour > 12) {
        result.end.imply("meridiem", 1);
      }
    }
    if (result.end.date().getTime() < result.start.date().getTime()) {
      result.end.imply("day", result.end.get("day") + 1);
    }
    return result;
  }
}
//# sourceMappingURL=ZHHansTimeExpressionParser.js.map


/***/ }),

/***/ 65800:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansWeekdayParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansWeekdayParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 4232);



const PATTERN = new RegExp("(?:星期|礼拜|周)(?<weekday>" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET).join("|") + ")");
class ZHHansWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const dayOfWeek = match.groups.weekday;
    const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET[dayOfWeek];
    if (offset === undefined) return null;
    let startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const startMomentFixed = false;
    const refOffset = startMoment.day();
    if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
      startMoment = startMoment.day(offset - 7);
    } else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
      startMoment = startMoment.day(offset + 7);
    } else {
      startMoment = startMoment.day(offset);
    }
    result.start.assign("weekday", offset);
    if (startMomentFixed) {
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
//# sourceMappingURL=ZHHansWeekdayParser.js.map


/***/ }),

/***/ 49216:
/*!***************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/refiners/ZHHansMergeDateRangeRefiner.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class ZHHansMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(至|到|-|~|～|－|ー)\s*$/i;
  }
}
//# sourceMappingURL=ZHHansMergeDateRangeRefiner.js.map


/***/ }),

/***/ 52832:
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/refiners/ZHHansMergeDateTimeRefiner.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class ZHHansMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*$/i;
  }
}
//# sourceMappingURL=ZHHansMergeDateTimeRefiner.js.map


/***/ }),

/***/ 19076:
/*!************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/constants.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NUMBER: () => (/* binding */ NUMBER),
/* harmony export */   WEEKDAY_OFFSET: () => (/* binding */ WEEKDAY_OFFSET),
/* harmony export */   zhStringToNumber: () => (/* binding */ zhStringToNumber),
/* harmony export */   zhStringToYear: () => (/* binding */ zhStringToYear)
/* harmony export */ });
const NUMBER = {
  "零": 0,
  "一": 1,
  "二": 2,
  "兩": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6,
  "七": 7,
  "八": 8,
  "九": 9,
  "十": 10,
  "廿": 20,
  "卅": 30
};
const WEEKDAY_OFFSET = {
  "天": 0,
  "日": 0,
  "一": 1,
  "二": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6
};
function zhStringToNumber(text) {
  let number = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "十") {
      number = number === 0 ? NUMBER[char] : number * NUMBER[char];
    } else {
      number += NUMBER[char];
    }
  }
  return number;
}
function zhStringToYear(text) {
  let string = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    string = string + NUMBER[char];
  }
  return parseInt(string);
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 74824:
/*!********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   hant: () => (/* binding */ hant),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/refiners/ExtractTimezoneOffsetRefiner.js */ 73640);
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configurations.js */ 72560);
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chrono.js */ 78784);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../results.js */ 48648);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ 49276);
/* harmony import */ var _parsers_ZHHantCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ZHHantCasualDateParser.js */ 38088);
/* harmony import */ var _parsers_ZHHantDateParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/ZHHantDateParser.js */ 9272);
/* harmony import */ var _parsers_ZHHantDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/ZHHantDeadlineFormatParser.js */ 27268);
/* harmony import */ var _parsers_ZHHantRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/ZHHantRelationWeekdayParser.js */ 75300);
/* harmony import */ var _parsers_ZHHantTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/ZHHantTimeExpressionParser.js */ 54843);
/* harmony import */ var _parsers_ZHHantWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/ZHHantWeekdayParser.js */ 6152);
/* harmony import */ var _refiners_ZHHantMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./refiners/ZHHantMergeDateRangeRefiner.js */ 83508);
/* harmony import */ var _refiners_ZHHantMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refiners/ZHHantMergeDateTimeRefiner.js */ 36328);















const hant = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration());
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
function createCasualConfiguration() {
  const option = createConfiguration();
  option.parsers.unshift(new _parsers_ZHHantCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  return option;
}
function createConfiguration() {
  const configuration = (0,_configurations_js__WEBPACK_IMPORTED_MODULE_4__.includeCommonConfiguration)({
    parsers: [new _parsers_ZHHantDateParser_js__WEBPACK_IMPORTED_MODULE_5__["default"](), new _parsers_ZHHantRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](), new _parsers_ZHHantWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](), new _parsers_ZHHantTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](), new _parsers_ZHHantDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_9__["default"]()],
    refiners: [new _refiners_ZHHantMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _refiners_ZHHantMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__["default"]()]
  });
  configuration.refiners = configuration.refiners.filter(refiner => !(refiner instanceof _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_12__["default"]));
  return configuration;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 38088:
/*!*********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantCasualDateParser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);


const NOW_GROUP = 1;
const DAY_GROUP_1 = 2;
const TIME_GROUP_1 = 3;
const TIME_GROUP_2 = 4;
const DAY_GROUP_3 = 5;
const TIME_GROUP_3 = 6;
class ZHHantCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return new RegExp("(而家|立(?:刻|即)|即刻)|" + "(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|" + "(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" + "(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)" + "(?:[\\s|,|，]*)" + "(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?", "i");
  }
  innerExtract(context, match) {
    const index = match.index;
    const result = context.createParsingResult(index, match[0]);
    const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    let startMoment = refMoment;
    if (match[NOW_GROUP]) {
      result.start.imply("hour", refMoment.hour());
      result.start.imply("minute", refMoment.minute());
      result.start.imply("second", refMoment.second());
      result.start.imply("millisecond", refMoment.millisecond());
    } else if (match[DAY_GROUP_1]) {
      const day1 = match[DAY_GROUP_1];
      const time1 = match[TIME_GROUP_1];
      if (day1 == "明" || day1 == "聽") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day1 == "昨" || day1 == "尋" || day1 == "琴") {
        startMoment = startMoment.add(-1, "day");
      } else if (day1 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day1 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day1 == "後") {
        startMoment = startMoment.add(2, "day");
      } else if (day1 == "大後") {
        startMoment = startMoment.add(3, "day");
      }
      if (time1 == "早" || time1 == "朝") {
        result.start.imply("hour", 6);
      } else if (time1 == "晚") {
        result.start.imply("hour", 22);
        result.start.imply("meridiem", 1);
      }
    } else if (match[TIME_GROUP_2]) {
      const timeString2 = match[TIME_GROUP_2];
      const time2 = timeString2[0];
      if (time2 == "早" || time2 == "朝" || time2 == "上") {
        result.start.imply("hour", 6);
      } else if (time2 == "下" || time2 == "晏") {
        result.start.imply("hour", 15);
        result.start.imply("meridiem", 1);
      } else if (time2 == "中") {
        result.start.imply("hour", 12);
        result.start.imply("meridiem", 1);
      } else if (time2 == "夜" || time2 == "晚") {
        result.start.imply("hour", 22);
        result.start.imply("meridiem", 1);
      } else if (time2 == "凌") {
        result.start.imply("hour", 0);
      }
    } else if (match[DAY_GROUP_3]) {
      const day3 = match[DAY_GROUP_3];
      if (day3 == "明" || day3 == "聽") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day3 == "昨" || day3 == "尋" || day3 == "琴") {
        startMoment = startMoment.add(-1, "day");
      } else if (day3 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day3 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day3 == "後") {
        startMoment = startMoment.add(2, "day");
      } else if (day3 == "大後") {
        startMoment = startMoment.add(3, "day");
      }
      const timeString3 = match[TIME_GROUP_3];
      if (timeString3) {
        const time3 = timeString3[0];
        if (time3 == "早" || time3 == "朝" || time3 == "上") {
          result.start.imply("hour", 6);
        } else if (time3 == "下" || time3 == "晏") {
          result.start.imply("hour", 15);
          result.start.imply("meridiem", 1);
        } else if (time3 == "中") {
          result.start.imply("hour", 12);
          result.start.imply("meridiem", 1);
        } else if (time3 == "夜" || time3 == "晚") {
          result.start.imply("hour", 22);
          result.start.imply("meridiem", 1);
        } else if (time3 == "凌") {
          result.start.imply("hour", 0);
        }
      }
    }
    result.start.assign("day", startMoment.date());
    result.start.assign("month", startMoment.month() + 1);
    result.start.assign("year", startMoment.year());
    return result;
  }
}
//# sourceMappingURL=ZHHantCasualDateParser.js.map


/***/ }),

/***/ 9272:
/*!***************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDateParser.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ 19076);



const YEAR_GROUP = 1;
const MONTH_GROUP = 2;
const DAY_GROUP = 3;
class ZHHantDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp("(" + "\\d{2,4}|" + "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{4}|" + "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{2}" + ")?" + "(?:\\s*)" + "(?:年)?" + "(?:[\\s|,|，]*)" + "(" + "\\d{1,2}|" + "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{1,2}" + ")" + "(?:\\s*)" + "(?:月)" + "(?:\\s*)" + "(" + "\\d{1,2}|" + "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{1,2}" + ")?" + "(?:\\s*)" + "(?:日|號)?");
  }
  innerExtract(context, match) {
    const startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const result = context.createParsingResult(match.index, match[0]);
    let month = parseInt(match[MONTH_GROUP]);
    if (isNaN(month)) month = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToNumber)(match[MONTH_GROUP]);
    result.start.assign("month", month);
    if (match[DAY_GROUP]) {
      let day = parseInt(match[DAY_GROUP]);
      if (isNaN(day)) day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToNumber)(match[DAY_GROUP]);
      result.start.assign("day", day);
    } else {
      result.start.imply("day", startMoment.date());
    }
    if (match[YEAR_GROUP]) {
      let year = parseInt(match[YEAR_GROUP]);
      if (isNaN(year)) year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToYear)(match[YEAR_GROUP]);
      result.start.assign("year", year);
    } else {
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
//# sourceMappingURL=ZHHantDateParser.js.map


/***/ }),

/***/ 27268:
/*!*************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDeadlineFormatParser.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantDeadlineFormatParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 19076);



const PATTERN = new RegExp("(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+|半|幾)(?:\\s*)" + "(?:個)?" + "(秒(?:鐘)?|分鐘|小時|鐘|日|天|星期|禮拜|月|年)" + "(?:(?:之|過)?後|(?:之)?內)", "i");
const NUMBER_GROUP = 1;
const UNIT_GROUP = 2;
class ZHHantDeadlineFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    let number = parseInt(match[NUMBER_GROUP]);
    if (isNaN(number)) {
      number = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[NUMBER_GROUP]);
    }
    if (isNaN(number)) {
      const string = match[NUMBER_GROUP];
      if (string === "幾") {
        number = 3;
      } else if (string === "半") {
        number = 0.5;
      } else {
        return null;
      }
    }
    let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const unit = match[UNIT_GROUP];
    const unitAbbr = unit[0];
    if (unitAbbr.match(/[日天星禮月年]/)) {
      if (unitAbbr == "日" || unitAbbr == "天") {
        date = date.add(number, "d");
      } else if (unitAbbr == "星" || unitAbbr == "禮") {
        date = date.add(number * 7, "d");
      } else if (unitAbbr == "月") {
        date = date.add(number, "month");
      } else if (unitAbbr == "年") {
        date = date.add(number, "year");
      }
      result.start.assign("year", date.year());
      result.start.assign("month", date.month() + 1);
      result.start.assign("day", date.date());
      return result;
    }
    if (unitAbbr == "秒") {
      date = date.add(number, "second");
    } else if (unitAbbr == "分") {
      date = date.add(number, "minute");
    } else if (unitAbbr == "小" || unitAbbr == "鐘") {
      date = date.add(number, "hour");
    }
    result.start.imply("year", date.year());
    result.start.imply("month", date.month() + 1);
    result.start.imply("day", date.date());
    result.start.assign("hour", date.hour());
    result.start.assign("minute", date.minute());
    result.start.assign("second", date.second());
    return result;
  }
}
//# sourceMappingURL=ZHHantDeadlineFormatParser.js.map


/***/ }),

/***/ 75300:
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantRelationWeekdayParser.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantRelationWeekdayParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 19076);



const PATTERN = new RegExp("(?<prefix>上|今|下|這|呢)(?:個)?(?:星期|禮拜|週)(?<weekday>" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET).join("|") + ")");
class ZHHantRelationWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const dayOfWeek = match.groups.weekday;
    const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET[dayOfWeek];
    if (offset === undefined) return null;
    let modifier = null;
    const prefix = match.groups.prefix;
    if (prefix == "上") {
      modifier = "last";
    } else if (prefix == "下") {
      modifier = "next";
    } else if (prefix == "今" || prefix == "這" || prefix == "呢") {
      modifier = "this";
    }
    let startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    let startMomentFixed = false;
    const refOffset = startMoment.day();
    if (modifier == "last" || modifier == "past") {
      startMoment = startMoment.day(offset - 7);
      startMomentFixed = true;
    } else if (modifier == "next") {
      startMoment = startMoment.day(offset + 7);
      startMomentFixed = true;
    } else if (modifier == "this") {
      startMoment = startMoment.day(offset);
    } else {
      if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
        startMoment = startMoment.day(offset - 7);
      } else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
        startMoment = startMoment.day(offset + 7);
      } else {
        startMoment = startMoment.day(offset);
      }
    }
    result.start.assign("weekday", offset);
    if (startMomentFixed) {
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
//# sourceMappingURL=ZHHantRelationWeekdayParser.js.map


/***/ }),

/***/ 54843:
/*!*************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantTimeExpressionParser.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 19076);



const FIRST_REG_PATTERN = new RegExp("(?:由|從|自)?" + "(?:" + "(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|" + "(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" + "(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)" + "(?:[\\s,，]*)" + "(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?" + ")?" + "(?:[\\s,，]*)" + "(?:(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)(?:\\s*)(?:點|時|:|：)" + "(?:\\s*)" + "(\\d+|半|正|整|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)?(?:\\s*)(?:分|:|：)?" + "(?:\\s*)" + "(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)?(?:\\s*)(?:秒)?)" + "(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const SECOND_REG_PATTERN = new RegExp("(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)" + "(?:" + "(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|" + "(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" + "(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)" + "(?:[\\s,，]*)" + "(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?" + ")?" + "(?:[\\s,，]*)" + "(?:(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)(?:\\s*)(?:點|時|:|：)" + "(?:\\s*)" + "(\\d+|半|正|整|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)?(?:\\s*)(?:分|:|：)?" + "(?:\\s*)" + "(\\d+|[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") + "]+)?(?:\\s*)(?:秒)?)" + "(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const DAY_GROUP_1 = 1;
const ZH_AM_PM_HOUR_GROUP_1 = 2;
const ZH_AM_PM_HOUR_GROUP_2 = 3;
const DAY_GROUP_3 = 4;
const ZH_AM_PM_HOUR_GROUP_3 = 5;
const HOUR_GROUP = 6;
const MINUTE_GROUP = 7;
const SECOND_GROUP = 8;
const AM_PM_HOUR_GROUP = 9;
class ZHHantTimeExpressionParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return FIRST_REG_PATTERN;
  }
  innerExtract(context, match) {
    if (match.index > 0 && context.text[match.index - 1].match(/\w/)) {
      return null;
    }
    const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const result = context.createParsingResult(match.index, match[0]);
    let startMoment = refMoment.clone();
    if (match[DAY_GROUP_1]) {
      var day1 = match[DAY_GROUP_1];
      if (day1 == "明" || day1 == "聽") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day1 == "昨" || day1 == "尋" || day1 == "琴") {
        startMoment = startMoment.add(-1, "day");
      } else if (day1 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day1 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day1 == "後") {
        startMoment = startMoment.add(2, "day");
      } else if (day1 == "大後") {
        startMoment = startMoment.add(3, "day");
      }
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else if (match[DAY_GROUP_3]) {
      var day3 = match[DAY_GROUP_3];
      if (day3 == "明" || day3 == "聽") {
        startMoment = startMoment.add(1, "day");
      } else if (day3 == "昨" || day3 == "尋" || day3 == "琴") {
        startMoment = startMoment.add(-1, "day");
      } else if (day3 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day3 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day3 == "後") {
        startMoment = startMoment.add(2, "day");
      } else if (day3 == "大後") {
        startMoment = startMoment.add(3, "day");
      }
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    let hour = 0;
    let minute = 0;
    let meridiem = -1;
    if (match[SECOND_GROUP]) {
      var second = parseInt(match[SECOND_GROUP]);
      if (isNaN(second)) {
        second = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[SECOND_GROUP]);
      }
      if (second >= 60) return null;
      result.start.assign("second", second);
    }
    hour = parseInt(match[HOUR_GROUP]);
    if (isNaN(hour)) {
      hour = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[HOUR_GROUP]);
    }
    if (match[MINUTE_GROUP]) {
      if (match[MINUTE_GROUP] == "半") {
        minute = 30;
      } else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
        minute = 0;
      } else {
        minute = parseInt(match[MINUTE_GROUP]);
        if (isNaN(minute)) {
          minute = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[MINUTE_GROUP]);
        }
      }
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = 1;
    }
    if (match[AM_PM_HOUR_GROUP]) {
      if (hour > 12) return null;
      var ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      }
      if (ampm == "p") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
      var zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
      var zhAMPM1 = zhAMPMString1[0];
      if (zhAMPM1 == "朝" || zhAMPM1 == "早") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM1 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
      var zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
      var zhAMPM2 = zhAMPMString2[0];
      if (zhAMPM2 == "上" || zhAMPM2 == "朝" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM2 == "下" || zhAMPM2 == "晏" || zhAMPM2 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
      var zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
      var zhAMPM3 = zhAMPMString3[0];
      if (zhAMPM3 == "上" || zhAMPM3 == "朝" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM3 == "下" || zhAMPM3 == "晏" || zhAMPM3 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    }
    result.start.assign("hour", hour);
    result.start.assign("minute", minute);
    if (meridiem >= 0) {
      result.start.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        result.start.imply("meridiem", 0);
      } else {
        result.start.imply("meridiem", 1);
      }
    }
    match = SECOND_REG_PATTERN.exec(context.text.substring(result.index + result.text.length));
    if (!match) {
      if (result.text.match(/^\d+$/)) {
        return null;
      }
      return result;
    }
    let endMoment = startMoment.clone();
    result.end = context.createParsingComponents();
    if (match[DAY_GROUP_1]) {
      var day1 = match[DAY_GROUP_1];
      if (day1 == "明" || day1 == "聽") {
        if (refMoment.hour() > 1) {
          endMoment = endMoment.add(1, "day");
        }
      } else if (day1 == "昨" || day1 == "尋" || day1 == "琴") {
        endMoment = endMoment.add(-1, "day");
      } else if (day1 == "前") {
        endMoment = endMoment.add(-2, "day");
      } else if (day1 == "大前") {
        endMoment = endMoment.add(-3, "day");
      } else if (day1 == "後") {
        endMoment = endMoment.add(2, "day");
      } else if (day1 == "大後") {
        endMoment = endMoment.add(3, "day");
      }
      result.end.assign("day", endMoment.date());
      result.end.assign("month", endMoment.month() + 1);
      result.end.assign("year", endMoment.year());
    } else if (match[DAY_GROUP_3]) {
      var day3 = match[DAY_GROUP_3];
      if (day3 == "明" || day3 == "聽") {
        endMoment = endMoment.add(1, "day");
      } else if (day3 == "昨" || day3 == "尋" || day3 == "琴") {
        endMoment = endMoment.add(-1, "day");
      } else if (day3 == "前") {
        endMoment = endMoment.add(-2, "day");
      } else if (day3 == "大前") {
        endMoment = endMoment.add(-3, "day");
      } else if (day3 == "後") {
        endMoment = endMoment.add(2, "day");
      } else if (day3 == "大後") {
        endMoment = endMoment.add(3, "day");
      }
      result.end.assign("day", endMoment.date());
      result.end.assign("month", endMoment.month() + 1);
      result.end.assign("year", endMoment.year());
    } else {
      result.end.imply("day", endMoment.date());
      result.end.imply("month", endMoment.month() + 1);
      result.end.imply("year", endMoment.year());
    }
    hour = 0;
    minute = 0;
    meridiem = -1;
    if (match[SECOND_GROUP]) {
      var second = parseInt(match[SECOND_GROUP]);
      if (isNaN(second)) {
        second = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[SECOND_GROUP]);
      }
      if (second >= 60) return null;
      result.end.assign("second", second);
    }
    hour = parseInt(match[HOUR_GROUP]);
    if (isNaN(hour)) {
      hour = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[HOUR_GROUP]);
    }
    if (match[MINUTE_GROUP]) {
      if (match[MINUTE_GROUP] == "半") {
        minute = 30;
      } else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
        minute = 0;
      } else {
        minute = parseInt(match[MINUTE_GROUP]);
        if (isNaN(minute)) {
          minute = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[MINUTE_GROUP]);
        }
      }
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = 1;
    }
    if (match[AM_PM_HOUR_GROUP]) {
      if (hour > 12) return null;
      var ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      }
      if (ampm == "p") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
      if (!result.start.isCertain("meridiem")) {
        if (meridiem == 0) {
          result.start.imply("meridiem", 0);
          if (result.start.get("hour") == 12) {
            result.start.assign("hour", 0);
          }
        } else {
          result.start.imply("meridiem", 1);
          if (result.start.get("hour") != 12) {
            result.start.assign("hour", result.start.get("hour") + 12);
          }
        }
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
      var zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
      var zhAMPM1 = zhAMPMString1[0];
      if (zhAMPM1 == "朝" || zhAMPM1 == "早") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM1 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
      var zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
      var zhAMPM2 = zhAMPMString2[0];
      if (zhAMPM2 == "上" || zhAMPM2 == "朝" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM2 == "下" || zhAMPM2 == "晏" || zhAMPM2 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
      var zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
      var zhAMPM3 = zhAMPMString3[0];
      if (zhAMPM3 == "上" || zhAMPM3 == "朝" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
        meridiem = 0;
        if (hour == 12) hour = 0;
      } else if (zhAMPM3 == "下" || zhAMPM3 == "晏" || zhAMPM3 == "晚") {
        meridiem = 1;
        if (hour != 12) hour += 12;
      }
    }
    result.text = result.text + match[0];
    result.end.assign("hour", hour);
    result.end.assign("minute", minute);
    if (meridiem >= 0) {
      result.end.assign("meridiem", meridiem);
    } else {
      const startAtPM = result.start.isCertain("meridiem") && result.start.get("meridiem") == 1;
      if (startAtPM && result.start.get("hour") > hour) {
        result.end.imply("meridiem", 0);
      } else if (hour > 12) {
        result.end.imply("meridiem", 1);
      }
    }
    if (result.end.date().getTime() < result.start.date().getTime()) {
      result.end.imply("day", result.end.get("day") + 1);
    }
    return result;
  }
}
//# sourceMappingURL=ZHHantTimeExpressionParser.js.map


/***/ }),

/***/ 6152:
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantWeekdayParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantWeekdayParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ 86684);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ 19076);



const PATTERN = new RegExp("(?:星期|禮拜|週)(?<weekday>" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET).join("|") + ")");
class ZHHantWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const dayOfWeek = match.groups.weekday;
    const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET[dayOfWeek];
    if (offset === undefined) return null;
    let startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
    const startMomentFixed = false;
    const refOffset = startMoment.day();
    if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
      startMoment = startMoment.day(offset - 7);
    } else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
      startMoment = startMoment.day(offset + 7);
    } else {
      startMoment = startMoment.day(offset);
    }
    result.start.assign("weekday", offset);
    if (startMomentFixed) {
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
//# sourceMappingURL=ZHHantWeekdayParser.js.map


/***/ }),

/***/ 83508:
/*!***************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateRangeRefiner.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/refiners/AbstractMergeDateRangeRefiner.js */ 46080);

class ZHHantMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*(至|到|\-|\~|～|－|ー)\s*$/i;
  }
}
//# sourceMappingURL=ZHHantMergeDateRangeRefiner.js.map


/***/ }),

/***/ 36328:
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateTimeRefiner.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/refiners/AbstractMergeDateTimeRefiner.js */ 27312);

class ZHHantMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  patternBetween() {
    return /^\s*$/i;
  }
}
//# sourceMappingURL=ZHHantMergeDateTimeRefiner.js.map


/***/ }),

/***/ 38412:
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.Weekday),
/* harmony export */   casual: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.casual),
/* harmony export */   createCasualConfiguration: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.createConfiguration),
/* harmony export */   hans: () => (/* reexport module object */ _hans_index_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   hant: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.hant),
/* harmony export */   parse: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.parse),
/* harmony export */   parseDate: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.parseDate),
/* harmony export */   strict: () => (/* reexport safe */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__.strict)
/* harmony export */ });
/* harmony import */ var _hant_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hant/index.js */ 74824);
/* harmony import */ var _hans_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hans/index.js */ 22528);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 48648:
/*!******************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/results.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParsingComponents: () => (/* binding */ ParsingComponents),
/* harmony export */   ParsingResult: () => (/* binding */ ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* binding */ ReferenceWithTimezone)
/* harmony export */ });
/* harmony import */ var dayjs_plugin_quarterOfYear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/plugin/quarterOfYear.js */ 67704);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dayjs.js */ 37616);
/* harmony import */ var _timezone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timezone.js */ 472);




dayjs__WEBPACK_IMPORTED_MODULE_1__.extend(dayjs_plugin_quarterOfYear_js__WEBPACK_IMPORTED_MODULE_0__);
class ReferenceWithTimezone {
  constructor(input) {
    input = input ?? new Date();
    if (input instanceof Date) {
      this.instant = input;
    } else {
      this.instant = input.instant ?? new Date();
      this.timezoneOffset = (0,_timezone_js__WEBPACK_IMPORTED_MODULE_2__.toTimezoneOffset)(input.timezone, this.instant);
    }
  }
  getDateWithAdjustedTimezone() {
    return new Date(this.instant.getTime() + this.getSystemTimezoneAdjustmentMinute(this.instant) * 60000);
  }
  getSystemTimezoneAdjustmentMinute(date, overrideTimezoneOffset) {
    if (!date || date.getTime() < 0) {
      date = new Date();
    }
    const currentTimezoneOffset = -date.getTimezoneOffset();
    const targetTimezoneOffset = overrideTimezoneOffset ?? this.timezoneOffset ?? currentTimezoneOffset;
    return currentTimezoneOffset - targetTimezoneOffset;
  }
}
class ParsingComponents {
  constructor(reference, knownComponents) {
    this._tags = new Set();
    this.reference = reference;
    this.knownValues = {};
    this.impliedValues = {};
    if (knownComponents) {
      for (const key in knownComponents) {
        this.knownValues[key] = knownComponents[key];
      }
    }
    const refDayJs = dayjs__WEBPACK_IMPORTED_MODULE_1__(reference.instant);
    this.imply("day", refDayJs.date());
    this.imply("month", refDayJs.month() + 1);
    this.imply("year", refDayJs.year());
    this.imply("hour", 12);
    this.imply("minute", 0);
    this.imply("second", 0);
    this.imply("millisecond", 0);
  }
  get(component) {
    if (component in this.knownValues) {
      return this.knownValues[component];
    }
    if (component in this.impliedValues) {
      return this.impliedValues[component];
    }
    return null;
  }
  isCertain(component) {
    return component in this.knownValues;
  }
  getCertainComponents() {
    return Object.keys(this.knownValues);
  }
  imply(component, value) {
    if (component in this.knownValues) {
      return this;
    }
    this.impliedValues[component] = value;
    return this;
  }
  assign(component, value) {
    this.knownValues[component] = value;
    delete this.impliedValues[component];
    return this;
  }
  delete(component) {
    delete this.knownValues[component];
    delete this.impliedValues[component];
  }
  clone() {
    const component = new ParsingComponents(this.reference);
    component.knownValues = {};
    component.impliedValues = {};
    for (const key in this.knownValues) {
      component.knownValues[key] = this.knownValues[key];
    }
    for (const key in this.impliedValues) {
      component.impliedValues[key] = this.impliedValues[key];
    }
    return component;
  }
  isOnlyDate() {
    return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
  }
  isOnlyTime() {
    return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
  }
  isOnlyWeekdayComponent() {
    return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
  }
  isDateWithUnknownYear() {
    return this.isCertain("month") && !this.isCertain("year");
  }
  isValidDate() {
    const date = this.dateWithoutTimezoneAdjustment();
    if (date.getFullYear() !== this.get("year")) return false;
    if (date.getMonth() !== this.get("month") - 1) return false;
    if (date.getDate() !== this.get("day")) return false;
    if (this.get("hour") != null && date.getHours() != this.get("hour")) return false;
    if (this.get("minute") != null && date.getMinutes() != this.get("minute")) return false;
    return true;
  }
  toString() {
    return `[ParsingComponents {
            tags: ${JSON.stringify(Array.from(this._tags).sort())}, 
            knownValues: ${JSON.stringify(this.knownValues)}, 
            impliedValues: ${JSON.stringify(this.impliedValues)}}, 
            reference: ${JSON.stringify(this.reference)}]`;
  }
  dayjs() {
    return dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date());
  }
  date() {
    const date = this.dateWithoutTimezoneAdjustment();
    const timezoneAdjustment = this.reference.getSystemTimezoneAdjustmentMinute(date, this.get("timezoneOffset"));
    return new Date(date.getTime() + timezoneAdjustment * 60000);
  }
  addTag(tag) {
    this._tags.add(tag);
    return this;
  }
  addTags(tags) {
    for (const tag of tags) {
      this._tags.add(tag);
    }
    return this;
  }
  tags() {
    return new Set(this._tags);
  }
  dateWithoutTimezoneAdjustment() {
    const date = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
    date.setFullYear(this.get("year"));
    return date;
  }
  static createRelativeFromReference(reference, fragments) {
    let date = dayjs__WEBPACK_IMPORTED_MODULE_1__(reference.instant);
    for (const key in fragments) {
      date = date.add(fragments[key], key);
    }
    const components = new ParsingComponents(reference);
    if (fragments["hour"] || fragments["minute"] || fragments["second"]) {
      (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarTime)(components, date);
      (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(components, date);
      if (reference.timezoneOffset !== null) {
        components.assign("timezoneOffset", -reference.instant.getTimezoneOffset());
      }
    } else {
      (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.implySimilarTime)(components, date);
      if (reference.timezoneOffset !== null) {
        components.imply("timezoneOffset", -reference.instant.getTimezoneOffset());
      }
      if (fragments["d"]) {
        components.assign("day", date.date());
        components.assign("month", date.month() + 1);
        components.assign("year", date.year());
      } else {
        if (fragments["week"]) {
          components.imply("weekday", date.day());
        }
        components.imply("day", date.date());
        if (fragments["month"]) {
          components.assign("month", date.month() + 1);
          components.assign("year", date.year());
        } else {
          components.imply("month", date.month() + 1);
          if (fragments["year"]) {
            components.assign("year", date.year());
          } else {
            components.imply("year", date.year());
          }
        }
      }
    }
    return components;
  }
}
class ParsingResult {
  constructor(reference, index, text, start, end) {
    this.reference = reference;
    this.refDate = reference.instant;
    this.index = index;
    this.text = text;
    this.start = start || new ParsingComponents(reference);
    this.end = end;
  }
  clone() {
    const result = new ParsingResult(this.reference, this.index, this.text);
    result.start = this.start ? this.start.clone() : null;
    result.end = this.end ? this.end.clone() : null;
    return result;
  }
  date() {
    return this.start.date();
  }
  tags() {
    const combinedTags = new Set(this.start.tags());
    if (this.end) {
      for (const tag of this.end.tags()) {
        combinedTags.add(tag);
      }
    }
    return combinedTags;
  }
  toString() {
    const tags = Array.from(this.tags()).sort();
    return `[ParsingResult {index: ${this.index}, text: '${this.text}', tags: ${JSON.stringify(tags)} ...}]`;
  }
}
//# sourceMappingURL=results.js.map

/***/ }),

/***/ 472:
/*!*******************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/timezone.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TIMEZONE_ABBR_MAP: () => (/* binding */ TIMEZONE_ABBR_MAP),
/* harmony export */   getLastWeekdayOfMonth: () => (/* binding */ getLastWeekdayOfMonth),
/* harmony export */   getNthWeekdayOfMonth: () => (/* binding */ getNthWeekdayOfMonth),
/* harmony export */   toTimezoneOffset: () => (/* binding */ toTimezoneOffset)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 55676);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 49276);


const TIMEZONE_ABBR_MAP = {
  ACDT: 630,
  ACST: 570,
  ADT: -180,
  AEDT: 660,
  AEST: 600,
  AFT: 270,
  AKDT: -480,
  AKST: -540,
  ALMT: 360,
  AMST: -180,
  AMT: -240,
  ANAST: 720,
  ANAT: 720,
  AQTT: 300,
  ART: -180,
  AST: -240,
  AWDT: 540,
  AWST: 480,
  AZOST: 0,
  AZOT: -60,
  AZST: 300,
  AZT: 240,
  BNT: 480,
  BOT: -240,
  BRST: -120,
  BRT: -180,
  BST: 60,
  BTT: 360,
  CAST: 480,
  CAT: 120,
  CCT: 390,
  CDT: -300,
  CEST: 120,
  CET: {
    timezoneOffsetDuringDst: 2 * 60,
    timezoneOffsetNonDst: 60,
    dstStart: year => getLastWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2),
    dstEnd: year => getLastWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.OCTOBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 3)
  },
  CHADT: 825,
  CHAST: 765,
  CKT: -600,
  CLST: -180,
  CLT: -240,
  COT: -300,
  CST: -360,
  CT: {
    timezoneOffsetDuringDst: -5 * 60,
    timezoneOffsetNonDst: -6 * 60,
    dstStart: year => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2, 2),
    dstEnd: year => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.NOVEMBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 1, 2)
  },
  CVT: -60,
  CXT: 420,
  ChST: 600,
  DAVT: 420,
  EASST: -300,
  EAST: -360,
  EAT: 180,
  ECT: -300,
  EDT: -240,
  EEST: 180,
  EET: 120,
  EGST: 0,
  EGT: -60,
  EST: -300,
  ET: {
    timezoneOffsetDuringDst: -4 * 60,
    timezoneOffsetNonDst: -5 * 60,
    dstStart: year => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2, 2),
    dstEnd: year => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.NOVEMBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 1, 2)
  },
  FJST: 780,
  FJT: 720,
  FKST: -180,
  FKT: -240,
  FNT: -120,
  GALT: -360,
  GAMT: -540,
  GET: 240,
  GFT: -180,
  GILT: 720,
  GMT: 0,
  GST: 240,
  GYT: -240,
  HAA: -180,
  HAC: -300,
  HADT: -540,
  HAE: -240,
  HAP: -420,
  HAR: -360,
  HAST: -600,
  HAT: -90,
  HAY: -480,
  HKT: 480,
  HLV: -210,
  HNA: -240,
  HNC: -360,
  HNE: -300,
  HNP: -480,
  HNR: -420,
  HNT: -150,
  HNY: -540,
  HOVT: 420,
  ICT: 420,
  IDT: 180,
  IOT: 360,
  IRDT: 270,
  IRKST: 540,
  IRKT: 540,
  IRST: 210,
  IST: 330,
  JST: 540,
  KGT: 360,
  KRAST: 480,
  KRAT: 480,
  KST: 540,
  KUYT: 240,
  LHDT: 660,
  LHST: 630,
  LINT: 840,
  MAGST: 720,
  MAGT: 720,
  MART: -510,
  MAWT: 300,
  MDT: -360,
  MESZ: 120,
  MEZ: 60,
  MHT: 720,
  MMT: 390,
  MSD: 240,
  MSK: 180,
  MST: -420,
  MT: {
    timezoneOffsetDuringDst: -6 * 60,
    timezoneOffsetNonDst: -7 * 60,
    dstStart: year => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2, 2),
    dstEnd: year => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.NOVEMBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 1, 2)
  },
  MUT: 240,
  MVT: 300,
  MYT: 480,
  NCT: 660,
  NDT: -90,
  NFT: 690,
  NOVST: 420,
  NOVT: 360,
  NPT: 345,
  NST: -150,
  NUT: -660,
  NZDT: 780,
  NZST: 720,
  OMSST: 420,
  OMST: 420,
  PDT: -420,
  PET: -300,
  PETST: 720,
  PETT: 720,
  PGT: 600,
  PHOT: 780,
  PHT: 480,
  PKT: 300,
  PMDT: -120,
  PMST: -180,
  PONT: 660,
  PST: -480,
  PT: {
    timezoneOffsetDuringDst: -7 * 60,
    timezoneOffsetNonDst: -8 * 60,
    dstStart: year => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2, 2),
    dstEnd: year => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.NOVEMBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 1, 2)
  },
  PWT: 540,
  PYST: -180,
  PYT: -240,
  RET: 240,
  SAMT: 240,
  SAST: 120,
  SBT: 660,
  SCT: 240,
  SGT: 480,
  SRT: -180,
  SST: -660,
  TAHT: -600,
  TFT: 300,
  TJT: 300,
  TKT: 780,
  TLT: 540,
  TMT: 300,
  TVT: 720,
  ULAT: 480,
  UTC: 0,
  UYST: -120,
  UYT: -180,
  UZT: 300,
  VET: -210,
  VLAST: 660,
  VLAT: 660,
  VUT: 660,
  WAST: 120,
  WAT: 60,
  WEST: 60,
  WESZ: 60,
  WET: 0,
  WEZ: 0,
  WFT: 720,
  WGST: -120,
  WGT: -180,
  WIB: 420,
  WIT: 540,
  WITA: 480,
  WST: 780,
  WT: 0,
  YAKST: 600,
  YAKT: 600,
  YAPT: 600,
  YEKST: 360,
  YEKT: 360
};
function getNthWeekdayOfMonth(year, month, weekday, n, hour = 0) {
  let dayOfMonth = 0;
  let i = 0;
  while (i < n) {
    dayOfMonth++;
    const date = new Date(year, month - 1, dayOfMonth);
    if (date.getDay() === weekday) i++;
  }
  return new Date(year, month - 1, dayOfMonth, hour);
}
function getLastWeekdayOfMonth(year, month, weekday, hour = 0) {
  const oneIndexedWeekday = weekday === 0 ? 7 : weekday;
  const date = new Date(year, month - 1 + 1, 1, 12);
  const firstWeekdayNextMonth = date.getDay() === 0 ? 7 : date.getDay();
  let dayDiff;
  if (firstWeekdayNextMonth === oneIndexedWeekday) dayDiff = 7;else if (firstWeekdayNextMonth < oneIndexedWeekday) dayDiff = 7 + firstWeekdayNextMonth - oneIndexedWeekday;else dayDiff = firstWeekdayNextMonth - oneIndexedWeekday;
  date.setDate(date.getDate() - dayDiff);
  return new Date(year, month - 1, date.getDate(), hour);
}
function toTimezoneOffset(timezoneInput, date, timezoneOverrides = {}) {
  if (timezoneInput == null) {
    return null;
  }
  if (typeof timezoneInput === "number") {
    return timezoneInput;
  }
  const matchedTimezone = timezoneOverrides[timezoneInput] ?? TIMEZONE_ABBR_MAP[timezoneInput];
  if (matchedTimezone == null) {
    return null;
  }
  if (typeof matchedTimezone == "number") {
    return matchedTimezone;
  }
  if (date == null) {
    return null;
  }
  if (dayjs__WEBPACK_IMPORTED_MODULE_0__(date).isAfter(matchedTimezone.dstStart(date.getFullYear())) && !dayjs__WEBPACK_IMPORTED_MODULE_0__(date).isAfter(matchedTimezone.dstEnd(date.getFullYear()))) {
    return matchedTimezone.timezoneOffsetDuringDst;
  }
  return matchedTimezone.timezoneOffsetNonDst;
}
//# sourceMappingURL=timezone.js.map

/***/ }),

/***/ 49276:
/*!****************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/types.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Meridiem: () => (/* binding */ Meridiem),
/* harmony export */   Month: () => (/* binding */ Month),
/* harmony export */   Weekday: () => (/* binding */ Weekday)
/* harmony export */ });
var Meridiem = /*#__PURE__*/function (Meridiem) {
  Meridiem[Meridiem["AM"] = 0] = "AM";
  Meridiem[Meridiem["PM"] = 1] = "PM";
  return Meridiem;
}(Meridiem || {});
var Weekday = /*#__PURE__*/function (Weekday) {
  Weekday[Weekday["SUNDAY"] = 0] = "SUNDAY";
  Weekday[Weekday["MONDAY"] = 1] = "MONDAY";
  Weekday[Weekday["TUESDAY"] = 2] = "TUESDAY";
  Weekday[Weekday["WEDNESDAY"] = 3] = "WEDNESDAY";
  Weekday[Weekday["THURSDAY"] = 4] = "THURSDAY";
  Weekday[Weekday["FRIDAY"] = 5] = "FRIDAY";
  Weekday[Weekday["SATURDAY"] = 6] = "SATURDAY";
  return Weekday;
}(Weekday || {});
var Month = /*#__PURE__*/function (Month) {
  Month[Month["JANUARY"] = 1] = "JANUARY";
  Month[Month["FEBRUARY"] = 2] = "FEBRUARY";
  Month[Month["MARCH"] = 3] = "MARCH";
  Month[Month["APRIL"] = 4] = "APRIL";
  Month[Month["MAY"] = 5] = "MAY";
  Month[Month["JUNE"] = 6] = "JUNE";
  Month[Month["JULY"] = 7] = "JULY";
  Month[Month["AUGUST"] = 8] = "AUGUST";
  Month[Month["SEPTEMBER"] = 9] = "SEPTEMBER";
  Month[Month["OCTOBER"] = 10] = "OCTOBER";
  Month[Month["NOVEMBER"] = 11] = "NOVEMBER";
  Month[Month["DECEMBER"] = 12] = "DECEMBER";
  return Month;
}(Month || {});

//# sourceMappingURL=types.js.map

/***/ }),

/***/ 37616:
/*!**********************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/utils/dayjs.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignSimilarDate: () => (/* binding */ assignSimilarDate),
/* harmony export */   assignSimilarTime: () => (/* binding */ assignSimilarTime),
/* harmony export */   assignTheNextDay: () => (/* binding */ assignTheNextDay),
/* harmony export */   implySimilarDate: () => (/* binding */ implySimilarDate),
/* harmony export */   implySimilarTime: () => (/* binding */ implySimilarTime),
/* harmony export */   implyTheNextDay: () => (/* binding */ implyTheNextDay)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types.js */ 49276);

function assignTheNextDay(component, targetDayJs) {
  targetDayJs = targetDayJs.add(1, "day");
  assignSimilarDate(component, targetDayJs);
  implySimilarTime(component, targetDayJs);
}
function implyTheNextDay(component, targetDayJs) {
  targetDayJs = targetDayJs.add(1, "day");
  implySimilarDate(component, targetDayJs);
  implySimilarTime(component, targetDayJs);
}
function assignSimilarDate(component, targetDayJs) {
  component.assign("day", targetDayJs.date());
  component.assign("month", targetDayJs.month() + 1);
  component.assign("year", targetDayJs.year());
}
function assignSimilarTime(component, targetDayJs) {
  component.assign("hour", targetDayJs.hour());
  component.assign("minute", targetDayJs.minute());
  component.assign("second", targetDayJs.second());
  component.assign("millisecond", targetDayJs.millisecond());
  if (component.get("hour") < 12) {
    component.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
  } else {
    component.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
  }
}
function implySimilarDate(component, targetDayJs) {
  component.imply("day", targetDayJs.date());
  component.imply("month", targetDayJs.month() + 1);
  component.imply("year", targetDayJs.year());
}
function implySimilarTime(component, targetDayJs) {
  component.imply("hour", targetDayJs.hour());
  component.imply("minute", targetDayJs.minute());
  component.imply("second", targetDayJs.second());
  component.imply("millisecond", targetDayJs.millisecond());
}
//# sourceMappingURL=dayjs.js.map

/***/ }),

/***/ 45944:
/*!************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/utils/pattern.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractTerms: () => (/* binding */ extractTerms),
/* harmony export */   matchAnyPattern: () => (/* binding */ matchAnyPattern),
/* harmony export */   repeatedTimeunitPattern: () => (/* binding */ repeatedTimeunitPattern)
/* harmony export */ });
function repeatedTimeunitPattern(prefix, singleTimeunitPattern, connectorPattern = "\\s{0,5},?\\s{0,5}") {
  const singleTimeunitPatternNoCapture = singleTimeunitPattern.replace(/\((?!\?)/g, "(?:");
  return `${prefix}${singleTimeunitPatternNoCapture}(?:${connectorPattern}${singleTimeunitPatternNoCapture}){0,10}`;
}
function extractTerms(dictionary) {
  let keys;
  if (dictionary instanceof Array) {
    keys = [...dictionary];
  } else if (dictionary instanceof Map) {
    keys = Array.from(dictionary.keys());
  } else {
    keys = Object.keys(dictionary);
  }
  return keys;
}
function matchAnyPattern(dictionary) {
  const joinedTerms = extractTerms(dictionary).sort((a, b) => b.length - a.length).join("|").replace(/\./g, "\\.");
  return `(?:${joinedTerms})`;
}
//# sourceMappingURL=pattern.js.map

/***/ }),

/***/ 69344:
/*!**************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/utils/timeunits.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImpliedTimeUnits: () => (/* binding */ addImpliedTimeUnits),
/* harmony export */   reverseTimeUnits: () => (/* binding */ reverseTimeUnits)
/* harmony export */ });
function reverseTimeUnits(timeUnits) {
  const reversed = {};
  for (const key in timeUnits) {
    reversed[key] = -timeUnits[key];
  }
  return reversed;
}
function addImpliedTimeUnits(components, timeUnits) {
  const output = components.clone();
  let date = components.dayjs();
  for (const key in timeUnits) {
    date = date.add(timeUnits[key], key);
  }
  if ("day" in timeUnits || "d" in timeUnits || "week" in timeUnits || "month" in timeUnits || "year" in timeUnits) {
    output.imply("day", date.date());
    output.imply("month", date.month() + 1);
    output.imply("year", date.year());
  }
  if ("second" in timeUnits || "minute" in timeUnits || "hour" in timeUnits) {
    output.imply("second", date.second());
    output.imply("minute", date.minute());
    output.imply("hour", date.hour());
  }
  return output;
}
//# sourceMappingURL=timeunits.js.map

/***/ })

}]);