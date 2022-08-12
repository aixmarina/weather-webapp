// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/svg/01d.svg":[function(require,module,exports) {
module.exports = "/01d.521af6df.svg";
},{}],"assets/svg/01n.svg":[function(require,module,exports) {
module.exports = "/01n.e78e2bfb.svg";
},{}],"assets/svg/02d.svg":[function(require,module,exports) {
module.exports = "/02d.940991ab.svg";
},{}],"assets/svg/02n.svg":[function(require,module,exports) {
module.exports = "/02n.44643543.svg";
},{}],"assets/svg/03d.svg":[function(require,module,exports) {
module.exports = "/03d.5483592e.svg";
},{}],"assets/svg/03n.svg":[function(require,module,exports) {
module.exports = "/03n.6905b1a4.svg";
},{}],"assets/svg/04d.svg":[function(require,module,exports) {
module.exports = "/04d.b5741db4.svg";
},{}],"assets/svg/04n.svg":[function(require,module,exports) {
module.exports = "/04n.79feeb2a.svg";
},{}],"assets/svg/09d.svg":[function(require,module,exports) {
module.exports = "/09d.63e55ec5.svg";
},{}],"assets/svg/09n.svg":[function(require,module,exports) {
module.exports = "/09n.6fff4013.svg";
},{}],"assets/svg/10d.svg":[function(require,module,exports) {
module.exports = "/10d.417e1ef9.svg";
},{}],"assets/svg/10n.svg":[function(require,module,exports) {
module.exports = "/10n.59672754.svg";
},{}],"assets/svg/11d.svg":[function(require,module,exports) {
module.exports = "/11d.f252c9c7.svg";
},{}],"assets/svg/11n.svg":[function(require,module,exports) {
module.exports = "/11n.b4afc7fd.svg";
},{}],"assets/svg/13d.svg":[function(require,module,exports) {
module.exports = "/13d.d6d72ae2.svg";
},{}],"assets/svg/13n.svg":[function(require,module,exports) {
module.exports = "/13n.3de3c41c.svg";
},{}],"assets/svg/50d.svg":[function(require,module,exports) {
module.exports = "/50d.e7b5161b.svg";
},{}],"assets/svg/50n.svg":[function(require,module,exports) {
module.exports = "/50n.f7976c33.svg";
},{}],"js/images.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "icon01d", {
  enumerable: true,
  get: function () {
    return _d.default;
  }
});
Object.defineProperty(exports, "icon01n", {
  enumerable: true,
  get: function () {
    return _n.default;
  }
});
Object.defineProperty(exports, "icon02d", {
  enumerable: true,
  get: function () {
    return _d2.default;
  }
});
Object.defineProperty(exports, "icon02n", {
  enumerable: true,
  get: function () {
    return _n2.default;
  }
});
Object.defineProperty(exports, "icon03d", {
  enumerable: true,
  get: function () {
    return _d3.default;
  }
});
Object.defineProperty(exports, "icon03n", {
  enumerable: true,
  get: function () {
    return _n3.default;
  }
});
Object.defineProperty(exports, "icon04d", {
  enumerable: true,
  get: function () {
    return _d4.default;
  }
});
Object.defineProperty(exports, "icon04n", {
  enumerable: true,
  get: function () {
    return _n4.default;
  }
});
Object.defineProperty(exports, "icon09d", {
  enumerable: true,
  get: function () {
    return _d5.default;
  }
});
Object.defineProperty(exports, "icon09n", {
  enumerable: true,
  get: function () {
    return _n5.default;
  }
});
Object.defineProperty(exports, "icon10d", {
  enumerable: true,
  get: function () {
    return _d6.default;
  }
});
Object.defineProperty(exports, "icon10n", {
  enumerable: true,
  get: function () {
    return _n6.default;
  }
});
Object.defineProperty(exports, "icon11d", {
  enumerable: true,
  get: function () {
    return _d7.default;
  }
});
Object.defineProperty(exports, "icon11n", {
  enumerable: true,
  get: function () {
    return _n7.default;
  }
});
Object.defineProperty(exports, "icon13d", {
  enumerable: true,
  get: function () {
    return _d8.default;
  }
});
Object.defineProperty(exports, "icon13n", {
  enumerable: true,
  get: function () {
    return _n8.default;
  }
});
Object.defineProperty(exports, "icon50d", {
  enumerable: true,
  get: function () {
    return _d9.default;
  }
});
Object.defineProperty(exports, "icon50n", {
  enumerable: true,
  get: function () {
    return _n9.default;
  }
});

var _d = _interopRequireDefault(require("../assets/svg/01d.svg"));

var _n = _interopRequireDefault(require("../assets/svg/01n.svg"));

var _d2 = _interopRequireDefault(require("../assets/svg/02d.svg"));

var _n2 = _interopRequireDefault(require("../assets/svg/02n.svg"));

var _d3 = _interopRequireDefault(require("../assets/svg/03d.svg"));

var _n3 = _interopRequireDefault(require("../assets/svg/03n.svg"));

var _d4 = _interopRequireDefault(require("../assets/svg/04d.svg"));

var _n4 = _interopRequireDefault(require("../assets/svg/04n.svg"));

var _d5 = _interopRequireDefault(require("../assets/svg/09d.svg"));

var _n5 = _interopRequireDefault(require("../assets/svg/09n.svg"));

var _d6 = _interopRequireDefault(require("../assets/svg/10d.svg"));

var _n6 = _interopRequireDefault(require("../assets/svg/10n.svg"));

var _d7 = _interopRequireDefault(require("../assets/svg/11d.svg"));

var _n7 = _interopRequireDefault(require("../assets/svg/11n.svg"));

var _d8 = _interopRequireDefault(require("../assets/svg/13d.svg"));

var _n8 = _interopRequireDefault(require("../assets/svg/13n.svg"));

var _d9 = _interopRequireDefault(require("../assets/svg/50d.svg"));

var _n9 = _interopRequireDefault(require("../assets/svg/50n.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../assets/svg/01d.svg":"assets/svg/01d.svg","../assets/svg/01n.svg":"assets/svg/01n.svg","../assets/svg/02d.svg":"assets/svg/02d.svg","../assets/svg/02n.svg":"assets/svg/02n.svg","../assets/svg/03d.svg":"assets/svg/03d.svg","../assets/svg/03n.svg":"assets/svg/03n.svg","../assets/svg/04d.svg":"assets/svg/04d.svg","../assets/svg/04n.svg":"assets/svg/04n.svg","../assets/svg/09d.svg":"assets/svg/09d.svg","../assets/svg/09n.svg":"assets/svg/09n.svg","../assets/svg/10d.svg":"assets/svg/10d.svg","../assets/svg/10n.svg":"assets/svg/10n.svg","../assets/svg/11d.svg":"assets/svg/11d.svg","../assets/svg/11n.svg":"assets/svg/11n.svg","../assets/svg/13d.svg":"assets/svg/13d.svg","../assets/svg/13n.svg":"assets/svg/13n.svg","../assets/svg/50d.svg":"assets/svg/50d.svg","../assets/svg/50n.svg":"assets/svg/50n.svg"}],"js/app.js":[function(require,module,exports) {
var define;
"use strict";

var images = _interopRequireWildcard(require("./images.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var msg = document.querySelector(".msg");
var form = document.querySelector(".search-bar form");
var list = document.querySelector("ul.cities");
var listItems = document.querySelectorAll(".ajax-section .city");
var listItemsArray = Array.from(listItems);
var url = "https://api.openweathermap.org/data/2.5/weather?appid=".concat("5b3a6d21c1ed4f961685bfcc53f8da7c");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the form from submitting, hence prevent reloading the page

  var inputVal = e.target.city.value; // grab de the value which is contained in the search field

  if (listItemsArray.length > 0) {
    console.log("first");
    var filteredArray = listItemsArray.filter(function (el) {
      var content = "";

      if (inputVal.includes(",")) {
        if (inputVal.split(",")[1].length > 2) {
          inputVal.split(",")[0], _readOnlyError("inputVal");
          content = el.query(".city-name span").textContent.toLowerCase();
          console.log(content, "1");
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
          console.log(content, "2");
        }
      } else {
        content = el.query(".city-name span").textContent.toLowerCase();
        console.log(content, "3");
      }

      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = "You already know the weather for ".concat(filteredArray[0].querySelector(".city-name span").textContent, " ...otherwise be more specific by providing the country code as well :)"); // form.reset();

      return;
    }
  }

  getWeather(inputVal);
  msg.textContent = "";
  form.reset();
});

function getWeather(_x) {
  return _getWeather.apply(this, arguments);
} // async function checkCity() {
//     if (listItemsArray.length > 0) {
//         const filteredArray = listItemsArray.filter(el => {
//             let content = ""
//             if (inputVal.includes(",")) {
//                 if (inputVal.split(",")[1].length > 2) {
//                     inputVal = inputVal.split(",")[0]
//                     content = el.query(".city-name span").textContent.toLowerCase()
//                 } else {
//                     content = el.querySelector(".city-name").dataset.name.toLowerCase()
//                 }
//             } else {
//                 content = el.query(".city-name span").textContent.toLowerCase()
//             }
//             return content == inputVal.toLowerCase()
//         })
//         if (filteredArray.length > 0) {
//             msg.textContent = `You already know the weather for ${filteredArray[0].querySelector(".city-name span").textContent} ...otherwise be more specific by providing the country code as well :)`;
//             // form.reset();
//             return;
//         }
//     }
// }


function _getWeather() {
  _getWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
    var query, data, response, _data, main, name, weather, logo, li, markup;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = "".concat(url, "&q=").concat(city, "&units=metric"); // console.log("query", query)

            _context.prev = 1;
            _context.next = 4;
            return fetch(query);

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            data = _context.sent;
            console.log(data, "data");
            _data = data, main = _data.main, name = _data.name, weather = _data.weather; // data.main, data.name, data.weather
            // const icon = `./icons/${weather[0]["icon"]}.svg`

            logo = "".concat(images["icon".concat(weather[0]['icon'])]);
            li = document.createElement("li");
            li.classList.add("city");
            markup = "\n            <div class=\"card-city\">\n            <h2 class=\"city-name\" data-name=\"".concat(name, "\">\n            <span>").concat(name, "</span>\n            </h2>\n            <div class=\"card-info\">\n            <span class=\"city-temp\">").concat(Math.round(main.temp), "<sup>\xB0</sup>C</span>\n            <figure>\n            <img class=\"city-icon\" src=").concat(logo, " alt=").concat(weather[0]["main"], ">\n            </figure>\n            </div>\n            <figcaption>").concat(weather[0]["description"], "</figcaption>\n            </div>");
            li.innerHTML = markup;
            list.appendChild(li);
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            msg.textContent = "Please search for a valid city :(";

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 18]]);
  }));
  return _getWeather.apply(this, arguments);
}
},{"./images.js":"js/images.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53304" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map