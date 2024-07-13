"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_checkout_js"],{

/***/ "./assets/js/theme/checkout.js":
/*!*************************************!*\
  !*** ./assets/js/theme/checkout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkout)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_checkout_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk */ "./node_modules/@bigcommerce/checkout-sdk/dist/checkout-sdk.js");
/* harmony import */ var _bigcommerce_checkout_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bigcommerce_checkout_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var win = window,
  listeners = [],
  doc = win.document,
  MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
  observer,
  _this;
var service = (0,_bigcommerce_checkout_sdk__WEBPACK_IMPORTED_MODULE_4__.createCheckoutService)();
var Checkout = /*#__PURE__*/function (_PageManager) {
  function Checkout() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Checkout, _PageManager);
  var _proto = Checkout.prototype;
  _proto.onReady = /*#__PURE__*/function () {
    var _onReady = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var state, get_checkout, grandTotal;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return service.loadCheckout();
          case 2:
            state = _context.sent;
            get_checkout = state.data.getCheckout();
            console.log('get_checkout', get_checkout);
            grandTotal = get_checkout.grandTotal;
            postCartItems(get_checkout);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function onReady() {
      return _onReady.apply(this, arguments);
    }
    return onReady;
  }();
  return Checkout;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

function postCartItems(_x) {
  return _postCartItems.apply(this, arguments);
}
function _postCartItems() {
  _postCartItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(get_checkout) {
    var myForm, product_name, product_price, product_quantity, product_img, productSalePrice, subTotal, _i8, new_product_qty, product_id, variant_id, lineItems_id, salePrice, checkout_id, firstDiv, productNameDiv, productPriceDiv, productImgDiv, productQtyDiv, priceClass, plusQtyClass, minusQtyClass, priceInputClass, productPriceSpan, new_product_img, elem, new_product_name, new_product_price, customer_fname, customer_email, customer_lname, customer_addr_1, customer_addr_2, customer_state, customer_city, customer_pcode, customer_pnumber, country, customer_company, countryCode, address, state, selectDiv, continueButton, shippingSelect, _i9, optionElement, _i10;
    return _regeneratorRuntime().wrap(function _callee14$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          myForm = get_checkout;
          myForm.method = "post";
          myForm.action = "http://localhost:3000/checkout";
          product_name = get_checkout.cart.lineItems.physicalItems[0].name;
          product_price = get_checkout.cart.lineItems.physicalItems[0].originalPrice;
          product_quantity = get_checkout.cart.lineItems.physicalItems[0].quantity;
          product_img = get_checkout.cart.lineItems.physicalItems[0].imageUrl;
          productSalePrice = get_checkout.cart.lineItems.physicalItems[0].salePrice;
          subTotal = get_checkout.subtotal;
          if (get_checkout.cart.lineItems.physicalItems.length > 1) {
            for (_i8 = 1; _i8 < get_checkout.cart.lineItems.physicalItems.length; _i8++) {
              new_product_qty = get_checkout.cart.lineItems.physicalItems[_i8].quantity;
              product_id = get_checkout.cart.lineItems.physicalItems[_i8].productId;
              variant_id = get_checkout.cart.lineItems.physicalItems[_i8].variantId;
              lineItems_id = get_checkout.cart.lineItems.physicalItems[_i8].id;
              salePrice = get_checkout.cart.lineItems.physicalItems[_i8].salePrice;
              checkout_id = get_checkout.cart.id;
              firstDiv = document.createElement("div");
              firstDiv.className = "row mt-3";
              productNameDiv = document.createElement("div");
              productPriceDiv = document.createElement("div");
              productImgDiv = document.createElement("div");
              productQtyDiv = document.createElement("div");
              priceClass = document.createElement("div");
              plusQtyClass = document.createElement("span");
              minusQtyClass = document.createElement("span");
              priceInputClass = document.createElement("input");
              productPriceSpan = document.createElement("span");
              productNameDiv.className = "col-4";
              productImgDiv.className = "col-2";
              productImgDiv.className = "col-3";
              productQtyDiv.className = "col-3";
              priceClass.className = "number";
              plusQtyClass.className = "plus";
              plusQtyClass.setAttribute("data-another-attribute", product_id);
              plusQtyClass.setAttribute("data-for", lineItems_id);
              plusQtyClass.setAttribute("data-title", checkout_id);
              plusQtyClass.setAttribute('data-price-id', salePrice);
              minusQtyClass.className = "minus";
              minusQtyClass.setAttribute("data-another-attribute", product_id);
              minusQtyClass.setAttribute("data-for", lineItems_id);
              minusQtyClass.setAttribute("data-title", checkout_id);
              minusQtyClass.setAttribute('data-price-id', salePrice);
              priceInputClass.className = "txtQuantity";
              priceInputClass.setAttribute("name", product_id);
              priceInputClass.id = "txtQuantity";
              priceInputClass.setAttribute("type", "text");
              priceInputClass.setAttribute("data-title", variant_id);
              productQtyDiv.append(priceClass);
              new_product_img = get_checkout.cart.lineItems.physicalItems[_i8].imageUrl;
              elem = document.createElement("img");
              elem.setAttribute("src", new_product_img);
              elem.setAttribute("height", "150");
              elem.setAttribute("width", "150");
              productImgDiv.append(elem);
              new_product_name = get_checkout.cart.lineItems.physicalItems[_i8].name;
              new_product_price = get_checkout.cart.lineItems.physicalItems[_i8].originalPrice;
              productNameDiv.innerHTML = new_product_name;
              productPriceDiv.className = "col-2";
              productPriceSpan.id = "product-price";
              productPriceSpan.innerHTML = "$" + new_product_price;
              productPriceDiv.append(productPriceSpan);
              minusQtyClass.innerHTML = "-";
              plusQtyClass.innerHTML = "+";
              priceInputClass.setAttribute("value", new_product_qty);
              priceClass.append(minusQtyClass, priceInputClass, plusQtyClass);
              firstDiv.append(productImgDiv, productNameDiv, productPriceDiv, productQtyDiv);
              jquery__WEBPACK_IMPORTED_MODULE_1___default()("#product-row").append(firstDiv);
            }
          }
          customer_fname = get_checkout.customer.firstName;
          customer_email = get_checkout.customer.email;
          customer_lname = get_checkout.customer.lastName;
          if (customer_email) {
            customer_addr_1 = get_checkout.customer.addresses[0].address1;
            customer_addr_2 = get_checkout.customer.addresses[0].address2;
            customer_state = get_checkout.customer.addresses[0].stateOrProvince;
            customer_city = get_checkout.customer.addresses[0].city;
            customer_pcode = get_checkout.customer.addresses[0].postalCode;
            customer_pnumber = get_checkout.customer.addresses[0].phone;
            country = get_checkout.customer.addresses[0].country;
            customer_company = get_checkout.customer.addresses[0].company;
            countryCode = get_checkout.customer.addresses[0].countryCode;
          }
          document.getElementById("product-image").src = product_img;
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("#product-name").append(product_name);
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("#product-price").append(product_price);
          checkout_id = get_checkout.cart.id;
          new_product_qty = get_checkout.cart.lineItems.physicalItems[0].quantity;
          product_id = get_checkout.cart.lineItems.physicalItems[0].productId;
          variant_id = get_checkout.cart.lineItems.physicalItems[0].variantId;
          lineItems_id = get_checkout.cart.lineItems.physicalItems[0].id;
          document.getElementById("minus").setAttribute('data-another-attribute', get_checkout.cart.lineItems.physicalItems[0].productId);
          document.getElementById("minus").setAttribute('data-title', get_checkout.id);
          document.getElementById("minus").setAttribute('data-for', get_checkout.cart.lineItems.physicalItems[0].id);
          document.getElementById("minus").setAttribute('data-price-id', productSalePrice);
          document.getElementById("plus").setAttribute('data-another-attribute', get_checkout.cart.lineItems.physicalItems[0].productId);
          document.getElementById("plus").setAttribute('data-title', get_checkout.id);
          document.getElementById("plus").setAttribute('data-for', get_checkout.cart.lineItems.physicalItems[0].id);
          document.getElementById("plus").setAttribute('data-price-id', productSalePrice);
          document.getElementById("txtQuantity_1").setAttribute('name', get_checkout.cart.lineItems.physicalItems[0].productId);
          document.getElementById("txtQuantity_1").setAttribute('value', product_quantity);
          document.getElementById("txtQuantity_1").setAttribute('data-title', variant_id);
          document.getElementById("subtotal").innerHTML = "$" + subTotal;
          document.getElementById("totalCheckoutPrice").innerHTML = "$" + subTotal;
          if (!customer_email) {
            _context15.next = 61;
            break;
          }
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(".shippingForm").css('display', 'block');
          document.getElementById("txtEmail").setAttribute('value', customer_email);
          document.getElementById("shippingtxtFirstName").setAttribute('value', customer_fname);
          document.getElementById("shippingtxtLastName").setAttribute('value', customer_lname);
          document.getElementById("shippingtxtAddress").setAttribute('value', customer_addr_1);
          document.getElementById("shippingtxtAddress-2").setAttribute('value', customer_addr_2);
          document.getElementById("shippingtxtCityName").setAttribute('value', customer_city);
          document.getElementById("shippingtxtCompanyName").setAttribute('value', customer_company);
          document.getElementById("shippingtxtStateName").setAttribute('value', customer_state);
          document.getElementById("shippingtxtPostalCode").setAttribute('value', customer_pcode);
          document.getElementById("shippingtxtPhoneNumber").setAttribute('value', customer_pnumber);
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("#shippingZone").val(countryCode);
          address = {
            firstName: customer_fname,
            lastName: customer_lname,
            address1: customer_addr_1,
            address2: customer_addr_2,
            city: customer_city,
            company: customer_company,
            state: customer_state,
            postalCode: customer_pcode,
            country: country,
            countryCode: countryCode,
            phone: customer_pnumber,
            email: customer_email
          };
          _context15.next = 51;
          return service.updateShippingAddress(address);
        case 51:
          state = _context15.sent;
          selectDiv = document.getElementById("shippingMethod");
          continueButton = document.createElement('button');
          if (selectDiv == null) {
            shippingSelect = document.createElement('select');
            for (_i9 = 0; _i9 < state.data.getShippingOptions().length; _i9++) {
              shippingSelect.id = 'shippingMethod';
              shippingSelect.className = 'selectpicker shippingmethod dropdown-header w-100';
              optionElement = document.createElement('option');
              optionElement.value = state.data.getShippingOptions()[_i9].id;
              optionElement.text = state.data.getShippingOptions()[_i9].description;
              shippingSelect.appendChild(optionElement);
              document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
              shippingSelect.appendChild(optionElement);
              document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
            }
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(selectDiv).empty();
            for (_i10 = 0; _i10 < state.data.getShippingOptions().length; _i10++) {
              optionElement = document.createElement('option');
              optionElement.value = state.data.getShippingOptions()[_i10].id;
              optionElement.text = state.data.getShippingOptions()[_i10].description;
              document.getElementById("shippingMethod").appendChild(optionElement);
            }
          }
          continueButton.innerHTML = 'Continue';
          continueButton.className = '';
          continueButton.onclick = handleContinueButtonClick;
          document.getElementById("shippingMethodDropDown").appendChild(continueButton);
          _context15.next = 62;
          break;
        case 61:
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.continue', /*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(e) {
              var emailInput;
              return _regeneratorRuntime().wrap(function _callee13$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    e.preventDefault();
                    emailInput = document.getElementById("txtEmail");
                    if (emailInput.value !== '') {
                      console.log(emailInput.value);
                      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.shippingForm').css('display', 'block');
                      validateForm();
                    } else {
                      if (document.getElementsByClassName('error-class')[0]) {} else {
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()("<div class='error-class'>Please enter email</div>").insertAfter(emailInput);
                      }
                    }
                  case 3:
                  case "end":
                    return _context14.stop();
                }
              }, _callee13);
            }));
            return function (_x13) {
              return _ref12.apply(this, arguments);
            };
          }());
        case 62:
        case "end":
          return _context15.stop();
      }
    }, _callee14);
  }));
  return _postCartItems.apply(this, arguments);
}
function validateForm() {
  var isValid = true;
  var ObjData = {};
  var ObjDataArr = new Array();
  var divs = document.querySelectorAll('.shipping');
  divs.forEach(function (el) {
    return el.addEventListener('change', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
        var customer_fname, customer_lname, customer_addr_1, customer_addr_2, customer_city, customer_company, customer_state, customer_pcode, customer_pnumber, customer_email, country, countryCode, address, state, selectDiv, continueButton, shippingSelect, _i, optionElement, _i2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              customer_fname = document.getElementById("shippingtxtFirstName").value;
              customer_lname = document.getElementById("shippingtxtLastName").value;
              customer_addr_1 = document.getElementById("shippingtxtAddress").value;
              customer_addr_2 = document.getElementById("shippingtxtAddress-2").value;
              customer_city = document.getElementById("shippingtxtCityName").value;
              customer_company = document.getElementById("shippingtxtCompanyName").value;
              customer_state = document.getElementById("shippingtxtStateName").value;
              customer_pcode = document.getElementById("shippingtxtPostalCode").value;
              customer_pnumber = document.getElementById("shippingtxtPhoneNumber").value;
              customer_email = document.getElementById("txtEmail").value;
              country = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#shippingZone option:selected").html();
              countryCode = document.getElementById("shippingZone").value;
              if (!(customer_fname !== "" && customer_lname !== "" && customer_addr_1 !== "" && customer_addr_2 !== "" && customer_city !== "" && customer_state !== "" && customer_pcode !== "" && customer_pnumber !== "" && customer_email !== "" && country !== "" && countryCode !== "")) {
                _context2.next = 25;
                break;
              }
              address = {
                firstName: customer_fname,
                lastName: customer_lname,
                address1: customer_addr_1,
                address2: customer_addr_2,
                city: customer_city,
                state: customer_state,
                postalCode: customer_pcode,
                country: country,
                countryCode: countryCode,
                phone: customer_pnumber,
                email: customer_email
              };
              _context2.next = 16;
              return service.updateShippingAddress(address);
            case 16:
              state = _context2.sent;
              console.log('state.data.getShippingOptions()', state.data.getShippingOptions());
              selectDiv = document.getElementById("shippingMethod");
              continueButton = document.createElement('button');
              if (selectDiv == null) {
                shippingSelect = document.createElement('select');
                for (_i = 0; _i < state.data.getShippingOptions().length; _i++) {
                  shippingSelect.id = 'shippingMethod';
                  shippingSelect.className = 'selectpicker shippingmethod dropdown-header w-100';
                  optionElement = document.createElement('option');
                  optionElement.value = state.data.getShippingOptions()[_i].id;
                  optionElement.text = state.data.getShippingOptions()[_i].description;
                  shippingSelect.appendChild(optionElement);
                  document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
                  shippingSelect.appendChild(optionElement);
                  document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
                }
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()(selectDiv).empty();
                for (_i2 = 0; _i2 < state.data.getShippingOptions().length; _i2++) {
                  optionElement = document.createElement('option');
                  optionElement.value = state.data.getShippingOptions()[_i2].id;
                  optionElement.text = state.data.getShippingOptions()[_i2].description;
                  document.getElementById("shippingMethod").appendChild(optionElement);
                }
              }
              continueButton.innerHTML = 'Continue';
              continueButton.className = '';
              continueButton.onclick = handleContinueButtonClick;
              document.getElementById("shippingMethodDropDown").appendChild(continueButton);
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }());
  });
}
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.continue').click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.shippingForm.panel').css('display', 'block');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", ".minus", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ev) {
    var productId, lineItemId, chkOutId, productPrice, qty, variantId, data, config;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          productId = ev.target.getAttribute("data-another-attribute");
          lineItemId = ev.target.getAttribute("data-for");
          chkOutId = ev.target.getAttribute("data-title");
          productPrice = ev.target.getAttribute("data-price-id");
          qty = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[name= ' + productId + ']').val();
          variantId = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[name= ' + productId + ']').attr("data-title");
          data = {};
          data = {
            lineItem: {
              productId: productId,
              quantity: qty - 1,
              variantId: variantId
            }
          };
          config = {
            method: 'PUT',
            maxBodyLength: Infinity,
            url: "/api/storefront/checkouts/" + chkOutId + "/carts/" + chkOutId + "/items/" + lineItemId,
            headers: {
              "Content-Type": "application/json"
            },
            data: JSON.stringify(data)
          };
          _context4.next = 11;
          return axios.request(config).then( /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response) {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (response.status == 200 || response.status == 204) {
                      reloadFn(data, productPrice, "minus");
                      console.log(" minus success");
                    }
                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x4) {
              return _ref3.apply(this, arguments);
            };
          }())["catch"](function (error) {
            console.log(error);
          });
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}());
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", ".plus", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(ev) {
    var productId, lineItemId, chkOutId, productPrice, qty, variantId, data, config;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          productId = ev.target.getAttribute("data-another-attribute");
          lineItemId = ev.target.getAttribute("data-for");
          chkOutId = ev.target.getAttribute("data-title");
          productPrice = ev.target.getAttribute("data-price-id");
          qty = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[name= ' + productId + ']').val();
          variantId = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[name= ' + productId + ']').attr("data-title");
          data = {};
          data = {
            lineItem: {
              productId: productId,
              quantity: Number(qty) + 1,
              variantId: variantId
            }
          };
          config = {
            method: 'PUT',
            maxBodyLength: Infinity,
            url: "/api/storefront/checkouts/" + chkOutId + "/carts/" + chkOutId + "/items/" + lineItemId,
            headers: {
              "Content-Type": "application/json"
            },
            data: JSON.stringify(data)
          };
          _context6.next = 11;
          return axios.request(config).then( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(response) {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (response.status == 200 || response.status == 204) {
                      reloadFn(data, productPrice, "plus");
                      console.log("plus success");
                    }
                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x6) {
              return _ref5.apply(this, arguments);
            };
          }())["catch"](function (error) {
            console.log(error);
          });
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
}());
function showLoader() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".loader").css("display", "block");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("#main-div").css("display", "none");
  setTimeout(hideLoader, 3000);
}
function hideLoader() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".loader").css("display", "none");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("#main-div").css("display", "block");
}
function reloadFn(data, price, method) {
  showLoader();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("input[name*=" + data.lineItem.productId + "]").val(data.lineItem.quantity);
  var newPrice = 0;
  var productPrice = 0;
  var subtotalPrice = 0;
  var total = 0;
  if (method == "minus") {
    newPrice = price.replace(/\$/g, '');
    total = document.getElementById("subtotal").innerText;
    subtotalPrice = Number(total.replace(/\$/g, '')) - Number(newPrice);
  } else {
    newPrice = price.replace(/\$/g, '');
    ;
    total = document.getElementById("subtotal").innerText;
    subtotalPrice = Number(total.replace(/\$/g, '')) + Number(newPrice);
  }
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#subtotal').html("$" + subtotalPrice.toFixed(2));
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#totalCheckoutPrice').html("$" + subtotalPrice.toFixed(2));
}
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", "#couponBtn", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
  var couponCode, state, get_checkout, code, type, discountedAmount, displayName;
  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        couponCode = document.getElementById("couponCode").value;
        if (!(couponCode != "")) {
          _context7.next = 13;
          break;
        }
        _context7.next = 4;
        return service.applyCoupon(couponCode);
      case 4:
        state = _context7.sent;
        get_checkout = state.data.getCheckout();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#couponDetails').css('display', 'block');
        code = get_checkout.coupons[0].code;
        type = get_checkout.coupons[0].couponType;
        discountedAmount = get_checkout.coupons[0].discountedAmount;
        displayName = get_checkout.coupons[0].displayName;
        document.getElementById("couponName").innerText = displayName;
        updateSubtotal(type, discountedAmount, get_checkout);
      case 13:
      case "end":
        return _context7.stop();
    }
  }, _callee7);
})));
var couponApplied = false;
function updateSubtotal(_x7, _x8, _x9) {
  return _updateSubtotal.apply(this, arguments);
}
function _updateSubtotal() {
  _updateSubtotal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(type, discountedAmount, get_checkout) {
    var total, subTotal, elements, total_discount;
    return _regeneratorRuntime().wrap(function _callee15$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          subTotal = 0;
          if (couponApplied == true) {
            document.getElementById("errorClass").innerHTML = "Already applied";
          }
          if (type == 'per_total_discount' && couponApplied == false) {
            showLoader();
            total = document.getElementById("subtotal").innerText;
            subTotal = Number(total.replace(/\$/g, '')) - Number(discountedAmount);
            document.getElementById("totalCheckoutPrice").innerHTML = "$" + subTotal;
            document.getElementById("discountValue").innerText = "-$" + discountedAmount.toFixed(2);
          } else if (type == 'per_item_discount' && couponApplied == false) {
            showLoader();
            elements = document.querySelectorAll('#product-price');
            total = document.getElementById("subtotal").innerText;
            total_discount = 0;
            elements.forEach(function (element, i) {
              total_discount = total_discount + Number(get_checkout.cart.lineItems.physicalItems[i].couponAmount);
            });
            subTotal = Number(total.replace(/\$/g, '')) - total_discount;
            document.getElementById("discountValue").innerText = "-$" + total_discount.toFixed(2);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#totalCheckoutPrice').html("$" + subTotal.toFixed(2));
          } else if (type == 'percentage_discount') {
            showLoader();
            elements = document.querySelectorAll('#product-price');
            total = document.getElementById("subtotal").innerText;
            total_discount = 0;
            elements.forEach(function (element, i) {
              total_discount = total_discount + Number(get_checkout.cart.lineItems.physicalItems[i].couponAmount);
            });
            subTotal = Number(total.replace(/\$/g, '')) - total_discount;
            document.getElementById("discountValue").innerText = "-$" + total_discount.toFixed(2);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#totalCheckoutPrice').html("$" + subTotal.toFixed(2));
          } else {
            console.log("Discout is Not Valid");
          }
          couponApplied = true;
        case 4:
        case "end":
          return _context16.stop();
      }
    }, _callee15);
  }));
  return _updateSubtotal.apply(this, arguments);
}
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", "#removeCoupon", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(ev) {
    var couponCode;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          couponCode = document.getElementById("couponCode").value;
          if (!(couponCode != '')) {
            _context8.next = 9;
            break;
          }
          _context8.next = 4;
          return service.removeCoupon(couponCode);
        case 4:
          document.getElementById("couponCode").value = '';
          document.getElementById("couponName").innerHTML = '';
          document.getElementById("discountValue").innerHTML = '';
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("#couponInput").css("display", "none");
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("#removeCoupon").css("display", "none");
        case 9:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x10) {
    return _ref7.apply(this, arguments);
  };
}());
jquery__WEBPACK_IMPORTED_MODULE_1___default()("input[type=radio][id=cardDetails]").change(function () {
  if (this.checked) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#card-template").css("display", "block");
  }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", "#couponCodeHead", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
    while (1) switch (_context9.prev = _context9.next) {
      case 0:
        jquery__WEBPACK_IMPORTED_MODULE_1___default()("#couponInput").css("display", "block");
      case 1:
      case "end":
        return _context9.stop();
    }
  }, _callee9);
})));
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", "#adresscheckbox", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
  var shippingData, firstName, lastName, address1, address2, city, company, state12, postalCode, pnumber, customerEmail, country, countryCode, address, state, get_checkout, selectDiv, shippingSelect, continueButton, _i3, optionElement, _i4, x, _i5;
  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
    while (1) switch (_context10.prev = _context10.next) {
      case 0:
        if (!(document.getElementById('adresscheckbox').checked == true)) {
          _context10.next = 34;
          break;
        }
        shippingData = document.getElementById("shippingtxtFirstName").value;
        if (!(shippingData != null)) {
          _context10.next = 32;
          break;
        }
        firstName = document.getElementById("shippingtxtFirstName").value;
        lastName = document.getElementById("shippingtxtLastName").value;
        address1 = document.getElementById("shippingtxtAddress").value;
        address2 = document.getElementById("shippingtxtAddress-2").value;
        city = document.getElementById("shippingtxtCityName").value;
        company = document.getElementById("shippingtxtCompanyName").value;
        state12 = document.getElementById("shippingtxtStateName").value;
        postalCode = document.getElementById("shippingtxtPhoneNumber").value;
        pnumber = document.getElementById("shippingtxtPhoneNumber").value;
        customerEmail = document.getElementById("txtEmail").value;
        country = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#shippingZone option:selected").html();
        countryCode = document.getElementById("shippingZone").value;
        document.getElementById("billingtxtFirstName").setAttribute('value', firstName);
        document.getElementById("billingtxtLastName").setAttribute('value', lastName);
        document.getElementById("billingtxtAddress").setAttribute('value', address1);
        document.getElementById("billingtxtAddress-2").setAttribute('value', address2);
        document.getElementById("billingtxtCityName").setAttribute('value', city);
        document.getElementById("billingtxtStateName").setAttribute('value', state12);
        document.getElementById("billingtxtPostalCode").setAttribute('value', postalCode);
        document.getElementById("billingtxtPhoneNumber").setAttribute('value', pnumber);
        document.getElementById("billingtxtCompanyName").setAttribute('value', company);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()("#billingZone").val(countryCode);
        address = {
          firstName: firstName,
          lastName: lastName,
          address1: address1,
          address2: address2,
          city: city,
          company: company,
          stateOrProvince: state12,
          postalCode: postalCode,
          country: country,
          countryCode: countryCode,
          phone: pnumber,
          email: customerEmail
        };
        _context10.next = 28;
        return service.updateBillingAddress(address);
      case 28:
        state = _context10.sent;
        get_checkout = state.data.getCheckout();
        selectDiv = document.getElementById("shippingMethod");
        if (selectDiv == null) {
          shippingSelect = document.createElement('select');
          continueButton = document.createElement('button');
          for (_i3 = 0; _i3 < state.data.getShippingOptions().length; _i3++) {
            shippingSelect.id = 'shippingMethod';
            shippingSelect.className = 'selectpicker shippingmethod dropdown-header w-100';
            optionElement = document.createElement('option');
            optionElement.value = state.data.getShippingOptions()[_i3].id;
            optionElement.text = state.data.getShippingOptions()[_i3].description;
            continueButton.innerHTML = 'Continue';
            continueButton.className = '';
            shippingSelect.appendChild(optionElement);
            document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
            document.getElementById("shippingMethodDropDown").appendChild(continueButton);
          }
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(selectDiv).empty();
          for (_i4 = 0; _i4 < state.data.getShippingOptions().length; _i4++) {
            optionElement = document.createElement('option');
            optionElement.text = state.data.getShippingOptions()[_i4].description;
            optionElement.value = state.data.getShippingOptions()[_i4].id;
            document.getElementById("shippingMethod").appendChild(optionElement);
          }
        }
      case 32:
        _context10.next = 43;
        break;
      case 34:
        document.getElementById("shippingtxtFirstName").setAttribute('value', '');
        document.getElementById("shippingtxtLastName").setAttribute('value', '');
        document.getElementById("shippingtxtAddress").setAttribute('value', '');
        document.getElementById("shippingtxtCityName").setAttribute('value', '');
        document.getElementById("shippingtxtStateName").setAttribute('value', '');
        document.getElementById("shippingtxtPostalCode").setAttribute('value', '');
        document.getElementById("shippingtxtPhoneNumber").setAttribute('value', '');
        x = document.getElementById("shippingMethod");
        for (_i5 = 0; _i5 < x.length; _i5++) {
          x.remove(x.length - 1);
          x[_i5].innerHTML = "No Shipping Methods";
        }
      case 43:
      case "end":
        return _context10.stop();
    }
  }, _callee10);
})));
function handleContinueButtonClick(_x11) {
  return _handleContinueButtonClick.apply(this, arguments);
}
function _handleContinueButtonClick() {
  _handleContinueButtonClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(e) {
    var _state, _loop2, radioBtn, label, breakElem, _i11, proceedBtn, selectedMethod, state, address, options, updateShippingMethod, get_checkout, checkoutTotal, updatedTotal;
    return _regeneratorRuntime().wrap(function _callee16$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          e.preventDefault();
          if (!(document.getElementById('adresscheckbox').checked == false)) {
            _context18.next = 18;
            break;
          }
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(".billingForm").css('display', 'block');
          _context18.next = 5;
          return service.loadPaymentMethods();
        case 5:
          _state = _context18.sent;
          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
            var radioInput, _label2, paymentMethodContainer, formBody, cardNumberInput, cardNameInput, dateField, monthSelect, months, yearSelect, currentYear, _i12, option, cardVerification, cvvInput, cvvDetails;
            return _regeneratorRuntime().wrap(function _loop2$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  if (_state.data.getPaymentMethods()[_i11].type == "PAYMENT_TYPE_API" && _state.data.getPaymentMethods()[_i11].supportedCards.length !== 0 && _state.data.getPaymentMethods()[_i11].method !== 'googlepay') {
                    radioInput = document.createElement('input');
                    radioInput.type = 'radio';
                    radioInput.name = 'paymentMethod';
                    radioInput.className = 'cardPaymentMethod';
                    radioInput.value = _state.data.getPaymentMethods()[_i11].id;
                    _label2 = document.createElement('label');
                    _label2.className = 'cardPaymentMethodLabel';
                    _label2.title = '';
                    _label2.textContent = _state.data.getPaymentMethods()[_i11].config.displayName;
                    paymentMethodContainer = document.createElement('div');
                    paymentMethodContainer.classList.add('paymentMethod', 'cardPaymentMethod');
                    formBody = document.createElement('div');
                    formBody.classList.add('form-body');
                    cardNumberInput = document.createElement('input');
                    cardNumberInput.type = 'text';
                    cardNumberInput.classList.add('card-number');
                    cardNumberInput.placeholder = 'Card Number';
                    cardNameInput = document.createElement('input');
                    cardNameInput.type = 'text';
                    cardNameInput.classList.add('card-name');
                    cardNameInput.placeholder = 'Name on Card';
                    dateField = document.createElement('div');
                    dateField.classList.add('date-field');
                    monthSelect = document.createElement('select');
                    monthSelect.name = 'Month';
                    monthSelect.id = 'cardMonth';
                    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    months.forEach(function (month, index) {
                      var option = document.createElement('option');
                      option.value = (index + 1).toString().padStart(2, '0');
                      option.textContent = month;
                      monthSelect.appendChild(option);
                    });
                    yearSelect = document.createElement('select');
                    yearSelect.name = 'Year';
                    currentYear = new Date().getFullYear();
                    for (_i12 = currentYear; _i12 <= currentYear + 6; _i12++) {
                      option = document.createElement('option');
                      option.value = (_i12 % 100).toString().padStart(2, '0');
                      option.textContent = _i12;
                      yearSelect.appendChild(option);
                    }
                    cardVerification = document.createElement('div');
                    cardVerification.classList.add('card-verification');
                    cvvInput = document.createElement('input');
                    cvvInput.type = 'text';
                    cvvInput.id = 'cvv';
                    cvvInput.placeholder = 'CVV';
                    cvvDetails = document.createElement('div');
                    cvvDetails.classList.add('cvv-details');
                    cvvDetails.innerHTML = '<p>3 or 4 digits usually found <br> on the signature strip</p>';
                    dateField.appendChild(monthSelect);
                    dateField.appendChild(yearSelect);
                    cardVerification.appendChild(cvvInput);
                    cardVerification.appendChild(cvvDetails);
                    formBody.appendChild(cardNumberInput);
                    formBody.appendChild(cardNameInput);
                    formBody.appendChild(dateField);
                    formBody.appendChild(cardVerification);
                    paymentMethodContainer.appendChild(formBody);
                    document.getElementsByClassName('paymentMethodList')[0].appendChild(radioInput);
                    document.getElementsByClassName('paymentMethodList')[0].appendChild(_label2);
                    document.getElementsByClassName('paymentMethodList')[0].appendChild(paymentMethodContainer);
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.paymentMethodList').css('display', 'block');
                  } else {
                    radioBtn = document.createElement("input");
                    radioBtn.type = "radio";
                    radioBtn.name = "paymentMethod";
                    radioBtn.value = _state.data.getPaymentMethods()[_i11].id;
                    label = document.createElement("label");
                    breakElem = document.createElement("BR");
                    label.textContent = _state.data.getPaymentMethods()[_i11].config.displayName;
                    document.getElementsByClassName('paymentMethodList')[0].appendChild(radioBtn);
                    document.getElementsByClassName('paymentMethodList')[0].appendChild(label);
                    document.getElementsByClassName('paymentMethodList')[0].appendChild(breakElem);
                  }
                case 1:
                case "end":
                  return _context17.stop();
              }
            }, _loop2);
          });
          _i11 = 0;
        case 8:
          if (!(_i11 < _state.data.getPaymentMethods().length)) {
            _context18.next = 13;
            break;
          }
          return _context18.delegateYield(_loop2(), "t0", 10);
        case 10:
          _i11++;
          _context18.next = 8;
          break;
        case 13:
          proceedBtn = document.createElement('button');
          proceedBtn.innerHTML = 'Proceed';
          proceedBtn.type = "submit";
          proceedBtn.className = 'proceed-btn';
          document.getElementsByClassName('paymentMethodList')[0].appendChild(proceedBtn);
        case 18:
          selectedMethod = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#shippingMethod :selected").val();
          _context18.next = 21;
          return service.loadPaymentMethods();
        case 21:
          state = _context18.sent;
          address = state.data.getShippingAddress();
          options = state.data.getShippingOptions();
          console.log("selectedMethod", selectedMethod);
          _context18.next = 27;
          return service.selectShippingOption(selectedMethod);
        case 27:
          updateShippingMethod = _context18.sent;
          get_checkout = state.data.getCheckout();
          if (get_checkout.consignments[0].selectedShippingOption.type == "shipping_flatrate") {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#shippingRate").html("$" + get_checkout.consignments[0].selectedShippingOption.cost.toFixed(2));
            checkoutTotal = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#totalCheckoutPrice").html();
            updatedTotal = Number(checkoutTotal.replace("$", "")) + Number(get_checkout.consignments[0].selectedShippingOption.cost);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#totalCheckoutPrice").html("$" + updatedTotal.toFixed(2));
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#shippingRate").html("Free");
          }
        case 30:
        case "end":
          return _context18.stop();
      }
    }, _callee16);
  }));
  return _handleContinueButtonClick.apply(this, arguments);
}
var billingContBtn = document.querySelector('.billingContinue');
if (billingContBtn) {
  billingContBtn.addEventListener('click', /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e) {
      var state, _loop, radioBtn, label, breakElem, _i6, proceedBtn;
      return _regeneratorRuntime().wrap(function _callee11$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            e.preventDefault();
            _context12.next = 3;
            return service.loadCheckout();
          case 3:
            state = _context12.sent;
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var radioInput, _label, paymentMethodContainer, formBody, cardNumberInput, cardNameInput, dateField, monthSelect, months, yearSelect, currentYear, _i7, option, cardVerification, cvvInput, cvvDetails;
              return _regeneratorRuntime().wrap(function _loop$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    if (state.data.getPaymentMethods()[_i6].type == "PAYMENT_TYPE_API" && state.data.getPaymentMethods()[_i6].supportedCards.length !== 0 && state.data.getPaymentMethods()[_i6].method !== 'googlepay') {
                      radioInput = document.createElement('input');
                      radioInput.type = 'radio';
                      radioInput.name = 'paymentMethod';
                      radioInput.className = 'cardPaymentMethod';
                      radioInput.value = state.data.getPaymentMethods()[_i6].id;
                      _label = document.createElement('label');
                      _label.className = 'cardPaymentMethodLabel';
                      _label.title = '';
                      _label.textContent = state.data.getPaymentMethods()[_i6].config.displayName;
                      paymentMethodContainer = document.createElement('div');
                      paymentMethodContainer.classList.add('paymentMethod', 'cardPaymentMethod');
                      formBody = document.createElement('div');
                      formBody.classList.add('form-body');
                      cardNumberInput = document.createElement('input');
                      cardNumberInput.type = 'text';
                      cardNumberInput.classList.add('card-number');
                      cardNumberInput.placeholder = 'Card Number';
                      cardNameInput = document.createElement('input');
                      cardNameInput.type = 'text';
                      cardNameInput.classList.add('card-name');
                      cardNameInput.placeholder = 'Name on Card';
                      dateField = document.createElement('div');
                      dateField.classList.add('date-field');
                      monthSelect = document.createElement('select');
                      monthSelect.name = 'Month';
                      monthSelect.id = 'cardMonth';
                      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                      months.forEach(function (month, index) {
                        var option = document.createElement('option');
                        option.value = (index + 1).toString().padStart(2, '0');
                        option.textContent = month;
                        monthSelect.appendChild(option);
                      });
                      yearSelect = document.createElement('select');
                      yearSelect.name = 'Year';
                      currentYear = new Date().getFullYear();
                      for (_i7 = currentYear; _i7 <= currentYear + 6; _i7++) {
                        option = document.createElement('option');
                        option.value = (_i7 % 100).toString().padStart(2, '0');
                        option.textContent = _i7;
                        yearSelect.appendChild(option);
                      }
                      cardVerification = document.createElement('div');
                      cardVerification.classList.add('card-verification');
                      cvvInput = document.createElement('input');
                      cvvInput.type = 'text';
                      cvvInput.id = 'cvv';
                      cvvInput.placeholder = 'CVV';
                      cvvDetails = document.createElement('div');
                      cvvDetails.classList.add('cvv-details');
                      cvvDetails.innerHTML = '<p>3 or 4 digits usually found <br> on the signature strip</p>';
                      dateField.appendChild(monthSelect);
                      dateField.appendChild(yearSelect);
                      cardVerification.appendChild(cvvInput);
                      cardVerification.appendChild(cvvDetails);
                      formBody.appendChild(cardNumberInput);
                      formBody.appendChild(cardNameInput);
                      formBody.appendChild(dateField);
                      formBody.appendChild(cardVerification);
                      paymentMethodContainer.appendChild(formBody);
                      document.getElementsByClassName('paymentMethodList')[0].appendChild(radioInput);
                      document.getElementsByClassName('paymentMethodList')[0].appendChild(_label);
                      document.getElementsByClassName('paymentMethodList')[0].appendChild(paymentMethodContainer);
                      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.paymentMethodList').css('display', 'block');
                    } else {
                      radioBtn = document.createElement("input");
                      radioBtn.type = "radio";
                      radioBtn.name = "paymentMethod";
                      radioBtn.value = state.data.getPaymentMethods()[_i6].id;
                      label = document.createElement("label");
                      breakElem = document.createElement("BR");
                      label.textContent = state.data.getPaymentMethods()[_i6].config.displayName;
                      document.getElementsByClassName('paymentMethodList')[0].appendChild(radioBtn);
                      document.getElementsByClassName('paymentMethodList')[0].appendChild(label);
                      document.getElementsByClassName('paymentMethodList')[0].appendChild(breakElem);
                    }
                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }, _loop);
            });
            _i6 = 0;
          case 6:
            if (!(_i6 < state.data.getPaymentMethods().length)) {
              _context12.next = 11;
              break;
            }
            return _context12.delegateYield(_loop(), "t0", 8);
          case 8:
            _i6++;
            _context12.next = 6;
            break;
          case 11:
            proceedBtn = document.createElement('button');
            proceedBtn.innerHTML = 'Proceed';
            proceedBtn.type = "submit";
            proceedBtn.className = 'proceed-btn';
            document.getElementsByClassName('paymentMethodList')[0].appendChild(proceedBtn);
          case 16:
          case "end":
            return _context12.stop();
        }
      }, _callee11);
    }));
    return function (_x12) {
      return _ref10.apply(this, arguments);
    };
  }());
}
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.proceed-btn', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
  var methodId, cardPaymentMethodClass, cardPaymentMethodId, i, cardNumber, cardName, cardExpMonth, cardExpYear, cvv, payment, _service$initializePa, state;
  return _regeneratorRuntime().wrap(function _callee12$(_context13) {
    while (1) switch (_context13.prev = _context13.next) {
      case 0:
        methodId = jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[name="paymentMethod"]:checked').val();
        cardPaymentMethodClass = document.getElementsByClassName('cardPaymentMethod');
        for (i = 0; i < cardPaymentMethodClass.length; i++) {
          if (cardPaymentMethodClass[i].checked) {
            cardPaymentMethodId = cardPaymentMethodClass[i].value;
          }
        }
        cardNumber = document.getElementsByClassName('card-number')[0].value;
        cardName = document.getElementsByClassName('card-name')[0].value;
        cardExpMonth = jquery__WEBPACK_IMPORTED_MODULE_1___default()('select[name="Month"] option:selected').val();
        cardExpYear = jquery__WEBPACK_IMPORTED_MODULE_1___default()('select[name="Year"] option:selected').val();
        cvv = document.getElementById('cvv').value;
        payment = {};
        if (!(methodId == 'zip')) {
          _context13.next = 14;
          break;
        }
        _context13.next = 12;
        return service.initializePayment((_service$initializePa = {
          methodId: methodId
        }, _service$initializePa["methodId"] = {
          container: 'walletWidget'
        }, _service$initializePa));
      case 12:
        _context13.next = 16;
        break;
      case 14:
        _context13.next = 16;
        return service.initializePayment({
          methodId: methodId
        });
      case 16:
        if (!cardPaymentMethodId) {
          _context13.next = 20;
          break;
        }
        payment = {
          methodId: cardPaymentMethodId,
          paymentData: {
            ccExpiry: {
              month: cardExpMonth,
              year: cardExpYear
            },
            ccName: cardName,
            ccNumber: cardNumber,
            ccType: 'VISA',
            ccCvv: cvv
          }
        };
        _context13.next = 36;
        break;
      case 20:
        if (!(methodId == 'zip')) {
          _context13.next = 35;
          break;
        }
        _context13.next = 23;
        return service.loadCheckout();
      case 23:
        _context13.prev = 23;
        _context13.next = 26;
        return service.finalizeOrderIfNeeded();
      case 26:
        window.location.assign('/order-confirmation');
        _context13.next = 33;
        break;
      case 29:
        _context13.prev = 29;
        _context13.t0 = _context13["catch"](23);
        if (!(_context13.t0.type !== 'order_finalization_not_required')) {
          _context13.next = 33;
          break;
        }
        throw _context13.t0;
      case 33:
        _context13.next = 36;
        break;
      case 35:
        payment = {
          methodId: methodId
        };
      case 36:
        _context13.next = 38;
        return service.submitOrder({
          payment: payment
        });
      case 38:
        state = _context13.sent;
        window.location.assign('/order-confirmation');
      case 40:
      case "end":
        return _context13.stop();
    }
  }, _callee12, null, [[23, 29]]);
})));
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panelParentClass = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().parent().parent();
    var panel = panelParentClass.next('.panel');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(panel).toggle();
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jaGVja291dF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FB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QUFBO1FBTXhEdVgsT0FBTyxHQUFHO1VBQ05SLFFBQVEsRUFBRUE7UUFDZCxDQUFDO01BQUM7UUFBQVcsVUFBQSxDQUFBMVgsSUFBQTtRQUFBLE9BRWM0RCxPQUFPLENBQUM0VSxXQUFXLENBQUM7VUFBRWpCLE9BQU8sRUFBUEE7UUFBUSxDQUFDLENBQUM7TUFBQTtRQUE5Q3BULEtBQUssR0FBQXVULFVBQUEsQ0FBQWhZLElBQUE7UUFDWDBELE1BQU0sQ0FBQ2lWLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLHFCQUFxQixDQUFDO01BQUM7TUFBQTtRQUFBLE9BQUFaLFVBQUEsQ0FBQTVWLElBQUE7SUFBQTtFQUFBLEdBQUFnVixTQUFBO0FBQUEsQ0FDakQsR0FBQztBQUVGLElBQUkyQixHQUFHLEdBQUdsVixRQUFRLENBQUM0SCxzQkFBc0IsQ0FBQyxXQUFXLENBQUM7QUFDdEQsSUFBSXpPLENBQUM7QUFDTCxLQUFLQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcrYixHQUFHLENBQUM1WCxNQUFNLEVBQUVuRSxDQUFDLEVBQUUsRUFBRTtFQUM3QitiLEdBQUcsQ0FBQy9iLENBQUMsQ0FBQyxDQUFDbVAsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDekMsSUFBSSxDQUFDc0osU0FBUyxDQUFDdUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUMvQixJQUFJQyxnQkFBZ0IsR0FBRzNWLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM0VixNQUFNLENBQUMsQ0FBQyxDQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDQSxNQUFNLENBQUMsQ0FBQztJQUN6RCxJQUFJQyxLQUFLLEdBQUdGLGdCQUFnQixDQUFDM1ksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMzQ2dELDZDQUFDLENBQUM2VixLQUFLLENBQUMsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7RUFDckIsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jaGVja291dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVDaGVja291dFNlcnZpY2UgfSBmcm9tICdAYmlnY29tbWVyY2UvY2hlY2tvdXQtc2RrJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGZvcm1zIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcclxudmFyIHdpbiA9IHdpbmRvdyxcclxuICAgIGxpc3RlbmVycyA9IFtdLFxyXG4gICAgZG9jID0gd2luLmRvY3VtZW50LFxyXG4gICAgTXV0YXRpb25PYnNlcnZlciA9IHdpbi5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbi5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLFxyXG4gICAgb2JzZXJ2ZXIsXHJcbiAgICBfdGhpcztcclxuY29uc3Qgc2VydmljZSA9IGNyZWF0ZUNoZWNrb3V0U2VydmljZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja291dCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGFzeW5jIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgLypDb2RleCBjb2RlIHN0YXJ0Ki9cclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IHNlcnZpY2UubG9hZENoZWNrb3V0KCk7XHJcbiAgICAgICAgdmFyIGdldF9jaGVja291dCA9IHN0YXRlLmRhdGEuZ2V0Q2hlY2tvdXQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0X2NoZWNrb3V0JywgZ2V0X2NoZWNrb3V0KTtcclxuICAgICAgICB2YXIgZ3JhbmRUb3RhbCA9IGdldF9jaGVja291dC5ncmFuZFRvdGFsO1xyXG4gICAgICAgIHBvc3RDYXJ0SXRlbXMoZ2V0X2NoZWNrb3V0KTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcG9zdENhcnRJdGVtcyhnZXRfY2hlY2tvdXQpIHtcclxuICAgIHZhciBteUZvcm0gPSBnZXRfY2hlY2tvdXQ7XHJcbiAgICBteUZvcm0ubWV0aG9kID0gXCJwb3N0XCI7XHJcbiAgICBteUZvcm0uYWN0aW9uID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY2hlY2tvdXRcIjtcclxuICAgIHZhciBwcm9kdWN0X25hbWUgPSBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1swXS5uYW1lO1xyXG4gICAgdmFyIHByb2R1Y3RfcHJpY2UgPSBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1swXS5vcmlnaW5hbFByaWNlO1xyXG4gICAgdmFyIHByb2R1Y3RfcXVhbnRpdHkgPSBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1swXS5xdWFudGl0eTtcclxuICAgIHZhciBwcm9kdWN0X2ltZyA9IGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zWzBdLmltYWdlVXJsO1xyXG4gICAgdmFyIHByb2R1Y3RTYWxlUHJpY2UgPSBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1swXS5zYWxlUHJpY2U7XHJcbiAgICB2YXIgc3ViVG90YWwgPSBnZXRfY2hlY2tvdXQuc3VidG90YWw7XHJcbiAgICBpZiAoZ2V0X2NoZWNrb3V0LmNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZ2V0X2NoZWNrb3V0LmNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG5ld19wcm9kdWN0X3F0eSA9IGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2ldLnF1YW50aXR5O1xyXG4gICAgICAgICAgICB2YXIgcHJvZHVjdF9pZCA9IGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2ldLnByb2R1Y3RJZDtcclxuICAgICAgICAgICAgdmFyIHZhcmlhbnRfaWQgPSBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpXS52YXJpYW50SWQ7XHJcbiAgICAgICAgICAgIHZhciBsaW5lSXRlbXNfaWQgPSBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpXS5pZDtcclxuICAgICAgICAgICAgdmFyIHNhbGVQcmljZSA9IGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2ldLnNhbGVQcmljZTtcclxuICAgICAgICAgICAgdmFyIGNoZWNrb3V0X2lkID0gZ2V0X2NoZWNrb3V0LmNhcnQuaWQ7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGZpcnN0RGl2LmNsYXNzTmFtZSA9IFwicm93IG10LTNcIjtcclxuICAgICAgICAgICAgdmFyIHByb2R1Y3ROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdmFyIHByb2R1Y3RQcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0SW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdmFyIHByb2R1Y3RRdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB2YXIgcHJpY2VDbGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHZhciBwbHVzUXR5Q2xhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgdmFyIG1pbnVzUXR5Q2xhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgdmFyIHByaWNlSW5wdXRDbGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgdmFyIHByb2R1Y3RQcmljZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgcHJvZHVjdE5hbWVEaXYuY2xhc3NOYW1lID0gXCJjb2wtNFwiO1xyXG4gICAgICAgICAgICBwcm9kdWN0SW1nRGl2LmNsYXNzTmFtZSA9IFwiY29sLTJcIjtcclxuICAgICAgICAgICAgcHJvZHVjdEltZ0Rpdi5jbGFzc05hbWUgPSBcImNvbC0zXCI7XHJcbiAgICAgICAgICAgIHByb2R1Y3RRdHlEaXYuY2xhc3NOYW1lID0gXCJjb2wtM1wiO1xyXG4gICAgICAgICAgICBwcmljZUNsYXNzLmNsYXNzTmFtZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgICAgIHBsdXNRdHlDbGFzcy5jbGFzc05hbWUgPSBcInBsdXNcIjtcclxuICAgICAgICAgICAgcGx1c1F0eUNsYXNzLnNldEF0dHJpYnV0ZShcImRhdGEtYW5vdGhlci1hdHRyaWJ1dGVcIiwgcHJvZHVjdF9pZCk7XHJcbiAgICAgICAgICAgIHBsdXNRdHlDbGFzcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZvclwiLCBsaW5lSXRlbXNfaWQpO1xyXG4gICAgICAgICAgICBwbHVzUXR5Q2xhc3Muc2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiLCBjaGVja291dF9pZCk7XHJcbiAgICAgICAgICAgIHBsdXNRdHlDbGFzcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UtaWQnLCBzYWxlUHJpY2UpO1xyXG4gICAgICAgICAgICBtaW51c1F0eUNsYXNzLmNsYXNzTmFtZSA9IFwibWludXNcIjtcclxuICAgICAgICAgICAgbWludXNRdHlDbGFzcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFub3RoZXItYXR0cmlidXRlXCIsIHByb2R1Y3RfaWQpO1xyXG4gICAgICAgICAgICBtaW51c1F0eUNsYXNzLnNldEF0dHJpYnV0ZShcImRhdGEtZm9yXCIsIGxpbmVJdGVtc19pZCk7XHJcbiAgICAgICAgICAgIG1pbnVzUXR5Q2xhc3Muc2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiLCBjaGVja291dF9pZCk7XHJcbiAgICAgICAgICAgIG1pbnVzUXR5Q2xhc3Muc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLWlkJywgc2FsZVByaWNlKTtcclxuICAgICAgICAgICAgcHJpY2VJbnB1dENsYXNzLmNsYXNzTmFtZSA9IFwidHh0UXVhbnRpdHlcIjtcclxuICAgICAgICAgICAgcHJpY2VJbnB1dENsYXNzLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgcHJvZHVjdF9pZCk7XHJcbiAgICAgICAgICAgIHByaWNlSW5wdXRDbGFzcy5pZCA9IFwidHh0UXVhbnRpdHlcIjtcclxuICAgICAgICAgICAgcHJpY2VJbnB1dENsYXNzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICBwcmljZUlucHV0Q2xhc3Muc2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiLCB2YXJpYW50X2lkKTtcclxuICAgICAgICAgICAgcHJvZHVjdFF0eURpdi5hcHBlbmQocHJpY2VDbGFzcyk7XHJcbiAgICAgICAgICAgIHZhciBuZXdfcHJvZHVjdF9pbWcgPSBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpXS5pbWFnZVVybDtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBuZXdfcHJvZHVjdF9pbWcpO1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE1MFwiKTtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1MFwiKTtcclxuICAgICAgICAgICAgcHJvZHVjdEltZ0Rpdi5hcHBlbmQoZWxlbSk7XHJcbiAgICAgICAgICAgIHZhciBuZXdfcHJvZHVjdF9uYW1lID0gZ2V0X2NoZWNrb3V0LmNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXNbaV0ubmFtZTtcclxuICAgICAgICAgICAgdmFyIG5ld19wcm9kdWN0X3ByaWNlID0gZ2V0X2NoZWNrb3V0LmNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXNbaV0ub3JpZ2luYWxQcmljZTtcclxuICAgICAgICAgICAgcHJvZHVjdE5hbWVEaXYuaW5uZXJIVE1MID0gbmV3X3Byb2R1Y3RfbmFtZTtcclxuICAgICAgICAgICAgcHJvZHVjdFByaWNlRGl2LmNsYXNzTmFtZSA9IFwiY29sLTJcIjtcclxuICAgICAgICAgICAgcHJvZHVjdFByaWNlU3Bhbi5pZCA9IFwicHJvZHVjdC1wcmljZVwiO1xyXG4gICAgICAgICAgICBwcm9kdWN0UHJpY2VTcGFuLmlubmVySFRNTCA9IFwiJFwiICsgbmV3X3Byb2R1Y3RfcHJpY2U7XHJcbiAgICAgICAgICAgIHByb2R1Y3RQcmljZURpdi5hcHBlbmQocHJvZHVjdFByaWNlU3Bhbik7XHJcbiAgICAgICAgICAgIG1pbnVzUXR5Q2xhc3MuaW5uZXJIVE1MID0gXCItXCI7XHJcbiAgICAgICAgICAgIHBsdXNRdHlDbGFzcy5pbm5lckhUTUwgPSBcIitcIjtcclxuICAgICAgICAgICAgcHJpY2VJbnB1dENsYXNzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG5ld19wcm9kdWN0X3F0eSk7XHJcbiAgICAgICAgICAgIHByaWNlQ2xhc3MuYXBwZW5kKG1pbnVzUXR5Q2xhc3MsIHByaWNlSW5wdXRDbGFzcywgcGx1c1F0eUNsYXNzKTtcclxuICAgICAgICAgICAgZmlyc3REaXYuYXBwZW5kKHByb2R1Y3RJbWdEaXYsIHByb2R1Y3ROYW1lRGl2LCBwcm9kdWN0UHJpY2VEaXYsIHByb2R1Y3RRdHlEaXYpO1xyXG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3Qtcm93XCIpLmFwcGVuZChmaXJzdERpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGN1c3RvbWVyX2ZuYW1lID0gZ2V0X2NoZWNrb3V0LmN1c3RvbWVyLmZpcnN0TmFtZTtcclxuICAgIHZhciBjdXN0b21lcl9lbWFpbCA9IGdldF9jaGVja291dC5jdXN0b21lci5lbWFpbDtcclxuICAgIHZhciBjdXN0b21lcl9sbmFtZSA9IGdldF9jaGVja291dC5jdXN0b21lci5sYXN0TmFtZTtcclxuICAgIGlmIChjdXN0b21lcl9lbWFpbCkge1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9hZGRyXzEgPSBnZXRfY2hlY2tvdXQuY3VzdG9tZXIuYWRkcmVzc2VzWzBdLmFkZHJlc3MxO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9hZGRyXzIgPSBnZXRfY2hlY2tvdXQuY3VzdG9tZXIuYWRkcmVzc2VzWzBdLmFkZHJlc3MyO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9zdGF0ZSA9IGdldF9jaGVja291dC5jdXN0b21lci5hZGRyZXNzZXNbMF0uc3RhdGVPclByb3ZpbmNlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9jaXR5ID0gZ2V0X2NoZWNrb3V0LmN1c3RvbWVyLmFkZHJlc3Nlc1swXS5jaXR5O1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9wY29kZSA9IGdldF9jaGVja291dC5jdXN0b21lci5hZGRyZXNzZXNbMF0ucG9zdGFsQ29kZTtcclxuICAgICAgICB2YXIgY3VzdG9tZXJfcG51bWJlciA9IGdldF9jaGVja291dC5jdXN0b21lci5hZGRyZXNzZXNbMF0ucGhvbmU7XHJcbiAgICAgICAgdmFyIGNvdW50cnkgPSBnZXRfY2hlY2tvdXQuY3VzdG9tZXIuYWRkcmVzc2VzWzBdLmNvdW50cnk7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX2NvbXBhbnkgPSBnZXRfY2hlY2tvdXQuY3VzdG9tZXIuYWRkcmVzc2VzWzBdLmNvbXBhbnk7XHJcbiAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gZ2V0X2NoZWNrb3V0LmN1c3RvbWVyLmFkZHJlc3Nlc1swXS5jb3VudHJ5Q29kZTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1pbWFnZVwiKS5zcmMgPSBwcm9kdWN0X2ltZztcclxuICAgICQoXCIjcHJvZHVjdC1uYW1lXCIpLmFwcGVuZChwcm9kdWN0X25hbWUpO1xyXG4gICAgJChcIiNwcm9kdWN0LXByaWNlXCIpLmFwcGVuZChwcm9kdWN0X3ByaWNlKTtcclxuICAgIHZhciBjaGVja291dF9pZCA9IGdldF9jaGVja291dC5jYXJ0LmlkO1xyXG4gICAgdmFyIG5ld19wcm9kdWN0X3F0eSA9IGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zWzBdLnF1YW50aXR5O1xyXG4gICAgdmFyIHByb2R1Y3RfaWQgPSBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1swXS5wcm9kdWN0SWQ7XHJcbiAgICB2YXIgdmFyaWFudF9pZCA9IGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zWzBdLnZhcmlhbnRJZDtcclxuICAgIHZhciBsaW5lSXRlbXNfaWQgPSBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1swXS5pZDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludXNcIikuc2V0QXR0cmlidXRlKCdkYXRhLWFub3RoZXItYXR0cmlidXRlJywgZ2V0X2NoZWNrb3V0LmNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXNbMF0ucHJvZHVjdElkKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludXNcIikuc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgZ2V0X2NoZWNrb3V0LmlkKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludXNcIikuc2V0QXR0cmlidXRlKCdkYXRhLWZvcicsIGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zWzBdLmlkKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludXNcIikuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLWlkJywgcHJvZHVjdFNhbGVQcmljZSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdXNcIikuc2V0QXR0cmlidXRlKCdkYXRhLWFub3RoZXItYXR0cmlidXRlJywgZ2V0X2NoZWNrb3V0LmNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXNbMF0ucHJvZHVjdElkKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c1wiKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBnZXRfY2hlY2tvdXQuaWQpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzXCIpLnNldEF0dHJpYnV0ZSgnZGF0YS1mb3InLCBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1swXS5pZCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdXNcIikuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLWlkJywgcHJvZHVjdFNhbGVQcmljZSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFF1YW50aXR5XzFcIikuc2V0QXR0cmlidXRlKCduYW1lJywgZ2V0X2NoZWNrb3V0LmNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXNbMF0ucHJvZHVjdElkKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0UXVhbnRpdHlfMVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvZHVjdF9xdWFudGl0eSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFF1YW50aXR5XzFcIikuc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgdmFyaWFudF9pZCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnRvdGFsXCIpLmlubmVySFRNTCA9IFwiJFwiICsgc3ViVG90YWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsQ2hlY2tvdXRQcmljZVwiKS5pbm5lckhUTUwgPSBcIiRcIiArIHN1YlRvdGFsO1xyXG4gICAgaWYgKGN1c3RvbWVyX2VtYWlsKSB7XHJcbiAgICAgICAgJChcIi5zaGlwcGluZ0Zvcm1cIikuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRFbWFpbFwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VzdG9tZXJfZW1haWwpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRGaXJzdE5hbWVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1c3RvbWVyX2ZuYW1lKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0TGFzdE5hbWVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1c3RvbWVyX2xuYW1lKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0QWRkcmVzc1wiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VzdG9tZXJfYWRkcl8xKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0QWRkcmVzcy0yXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXN0b21lcl9hZGRyXzIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRDaXR5TmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VzdG9tZXJfY2l0eSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dENvbXBhbnlOYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXN0b21lcl9jb21wYW55KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0U3RhdGVOYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXN0b21lcl9zdGF0ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFBvc3RhbENvZGVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1c3RvbWVyX3Bjb2RlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0UGhvbmVOdW1iZXJcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1c3RvbWVyX3BudW1iZXIpO1xyXG4gICAgICAgICQoXCIjc2hpcHBpbmdab25lXCIpLnZhbChjb3VudHJ5Q29kZSk7XHJcbiAgICAgICAgdmFyIGFkZHJlc3MgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogY3VzdG9tZXJfZm5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBjdXN0b21lcl9sbmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczE6IGN1c3RvbWVyX2FkZHJfMSxcclxuICAgICAgICAgICAgYWRkcmVzczI6IGN1c3RvbWVyX2FkZHJfMixcclxuICAgICAgICAgICAgY2l0eTogY3VzdG9tZXJfY2l0eSxcclxuICAgICAgICAgICAgY29tcGFueTogY3VzdG9tZXJfY29tcGFueSxcclxuICAgICAgICAgICAgc3RhdGU6IGN1c3RvbWVyX3N0YXRlLFxyXG4gICAgICAgICAgICBwb3N0YWxDb2RlOiBjdXN0b21lcl9wY29kZSxcclxuICAgICAgICAgICAgY291bnRyeTogY291bnRyeSxcclxuICAgICAgICAgICAgY291bnRyeUNvZGU6IGNvdW50cnlDb2RlLFxyXG4gICAgICAgICAgICBwaG9uZTogY3VzdG9tZXJfcG51bWJlcixcclxuICAgICAgICAgICAgZW1haWw6IGN1c3RvbWVyX2VtYWlsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IHNlcnZpY2UudXBkYXRlU2hpcHBpbmdBZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgICAgIHZhciBzZWxlY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nTWV0aG9kXCIpO1xyXG4gICAgICAgIHZhciBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGlmIChzZWxlY3REaXYgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgc2hpcHBpbmdTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzaGlwcGluZ1NlbGVjdC5pZCA9ICdzaGlwcGluZ01ldGhvZCc7XHJcbiAgICAgICAgICAgICAgICBzaGlwcGluZ1NlbGVjdC5jbGFzc05hbWUgPSAnc2VsZWN0cGlja2VyIHNoaXBwaW5nbWV0aG9kIGRyb3Bkb3duLWhlYWRlciB3LTEwMCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKClbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHQgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgc2hpcHBpbmdTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nTWV0aG9kRHJvcERvd25cIikuYXBwZW5kQ2hpbGQoc2hpcHBpbmdTZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgc2hpcHBpbmdTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nTWV0aG9kRHJvcERvd25cIikuYXBwZW5kQ2hpbGQoc2hpcHBpbmdTZWxlY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChzZWxlY3REaXYpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmlkO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0ID0gc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmdNZXRob2RcIikuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmlubmVySFRNTCA9ICdDb250aW51ZSc7XHJcbiAgICAgICAgY29udGludWVCdXR0b24uY2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgY29udGludWVCdXR0b24ub25jbGljayA9IGhhbmRsZUNvbnRpbnVlQnV0dG9uQ2xpY2s7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ01ldGhvZERyb3BEb3duXCIpLmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jb250aW51ZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEVtYWlsXCIpO1xyXG4gICAgICAgICAgICBpZiAoZW1haWxJbnB1dC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVtYWlsSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNoaXBwaW5nRm9ybScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcnJvci1jbGFzcycpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCI8ZGl2IGNsYXNzPSdlcnJvci1jbGFzcyc+UGxlYXNlIGVudGVyIGVtYWlsPC9kaXY+XCIpLmluc2VydEFmdGVyKGVtYWlsSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XHJcbiAgICB2YXIgT2JqRGF0YSA9IHt9O1xyXG4gICAgdmFyIE9iakRhdGFBcnIgPSBuZXcgQXJyYXkoKTtcclxuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHBpbmcnKTtcclxuICAgIGRpdnMuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX2ZuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEZpcnN0TmFtZVwiKS52YWx1ZTtcclxuICAgICAgICB2YXIgY3VzdG9tZXJfbG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0TGFzdE5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX2FkZHJfMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRBZGRyZXNzXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9hZGRyXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0QWRkcmVzcy0yXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9jaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dENpdHlOYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9jb21wYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dENvbXBhbnlOYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9zdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRTdGF0ZU5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX3Bjb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFBvc3RhbENvZGVcIikudmFsdWU7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX3BudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0UGhvbmVOdW1iZXJcIikudmFsdWU7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX2VtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRFbWFpbFwiKS52YWx1ZTtcclxuICAgICAgICB2YXIgY291bnRyeSA9ICQoXCIjc2hpcHBpbmdab25lIG9wdGlvbjpzZWxlY3RlZFwiKS5odG1sKCk7XHJcbiAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ1pvbmVcIikudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChjdXN0b21lcl9mbmFtZSAhPT0gXCJcIiAmJiBjdXN0b21lcl9sbmFtZSAhPT0gXCJcIiAmJiBjdXN0b21lcl9hZGRyXzEgIT09IFwiXCIgJiYgY3VzdG9tZXJfYWRkcl8yICE9PSBcIlwiICYmIGN1c3RvbWVyX2NpdHkgIT09IFwiXCIgJiYgY3VzdG9tZXJfc3RhdGUgIT09IFwiXCIgJiYgY3VzdG9tZXJfcGNvZGUgIT09IFwiXCIgJiYgY3VzdG9tZXJfcG51bWJlciAhPT0gXCJcIiAmJiBjdXN0b21lcl9lbWFpbCAhPT0gXCJcIiAmJiBjb3VudHJ5ICE9PSBcIlwiICYmIGNvdW50cnlDb2RlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHZhciBhZGRyZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBjdXN0b21lcl9mbmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBjdXN0b21lcl9sbmFtZSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxOiBjdXN0b21lcl9hZGRyXzEsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMjogY3VzdG9tZXJfYWRkcl8yLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogY3VzdG9tZXJfY2l0eSxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBjdXN0b21lcl9zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RhbENvZGU6IGN1c3RvbWVyX3Bjb2RlLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogY291bnRyeSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZSxcclxuICAgICAgICAgICAgICAgIHBob25lOiBjdXN0b21lcl9wbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1c3RvbWVyX2VtYWlsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgc2VydmljZS51cGRhdGVTaGlwcGluZ0FkZHJlc3MoYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpJywgc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKSk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nTWV0aG9kXCIpO1xyXG4gICAgICAgICAgICB2YXIgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdERpdiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hpcHBpbmdTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nU2VsZWN0LmlkID0gJ3NoaXBwaW5nTWV0aG9kJztcclxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ1NlbGVjdC5jbGFzc05hbWUgPSAnc2VsZWN0cGlja2VyIHNoaXBwaW5nbWV0aG9kIGRyb3Bkb3duLWhlYWRlciB3LTEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHQgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmdNZXRob2REcm9wRG93blwiKS5hcHBlbmRDaGlsZChzaGlwcGluZ1NlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ01ldGhvZERyb3BEb3duXCIpLmFwcGVuZENoaWxkKHNoaXBwaW5nU2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoc2VsZWN0RGl2KS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHQgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmdNZXRob2RcIikuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLmlubmVySFRNTCA9ICdDb250aW51ZSc7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICBjb250aW51ZUJ1dHRvbi5vbmNsaWNrID0gaGFuZGxlQ29udGludWVCdXR0b25DbGljaztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ01ldGhvZERyb3BEb3duXCIpLmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbiQoJy5jb250aW51ZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5zaGlwcGluZ0Zvcm0ucGFuZWwnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxufSlcclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5taW51c1wiLCBhc3luYyBmdW5jdGlvbiAoZXYpIHtcclxuICAgIHZhciBwcm9kdWN0SWQgPSBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbm90aGVyLWF0dHJpYnV0ZVwiKTtcclxuICAgIHZhciBsaW5lSXRlbUlkID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZm9yXCIpO1xyXG4gICAgdmFyIGNoa091dElkID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIik7XHJcbiAgICB2YXIgcHJvZHVjdFByaWNlID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpY2UtaWRcIik7XHJcbiAgICB2YXIgcXR5ID0gJCgnW25hbWU9ICcgKyBwcm9kdWN0SWQgKyAnXScpLnZhbCgpO1xyXG4gICAgdmFyIHZhcmlhbnRJZCA9ICQoJ1tuYW1lPSAnICsgcHJvZHVjdElkICsgJ10nKS5hdHRyKFwiZGF0YS10aXRsZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGxpbmVJdGVtOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxyXG4gICAgICAgICAgICBxdWFudGl0eTogcXR5IC0gMSxcclxuICAgICAgICAgICAgdmFyaWFudElkOiB2YXJpYW50SWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgbWF4Qm9keUxlbmd0aDogSW5maW5pdHksXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvc3RvcmVmcm9udC9jaGVja291dHMvXCIgKyBjaGtPdXRJZCArIFwiL2NhcnRzL1wiICsgY2hrT3V0SWQgKyBcIi9pdGVtcy9cIiArIGxpbmVJdGVtSWQsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9O1xyXG4gICAgYXdhaXQgYXhpb3MucmVxdWVzdChjb25maWcpXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcclxuICAgICAgICAgICAgICAgIHJlbG9hZEZuKGRhdGEsIHByb2R1Y3RQcmljZSwgXCJtaW51c1wiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgbWludXMgc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5wbHVzXCIsIGFzeW5jIGZ1bmN0aW9uIChldikge1xyXG4gICAgdmFyIHByb2R1Y3RJZCA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFub3RoZXItYXR0cmlidXRlXCIpO1xyXG4gICAgdmFyIGxpbmVJdGVtSWQgPSBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1mb3JcIik7XHJcbiAgICB2YXIgY2hrT3V0SWQgPSBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiKTtcclxuICAgIHZhciBwcm9kdWN0UHJpY2UgPSBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmljZS1pZFwiKTtcclxuICAgIHZhciBxdHkgPSAkKCdbbmFtZT0gJyArIHByb2R1Y3RJZCArICddJykudmFsKCk7XHJcbiAgICB2YXIgdmFyaWFudElkID0gJCgnW25hbWU9ICcgKyBwcm9kdWN0SWQgKyAnXScpLmF0dHIoXCJkYXRhLXRpdGxlXCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbGluZUl0ZW06IHtcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0SWQsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBOdW1iZXIocXR5KSArIDEsXHJcbiAgICAgICAgICAgIHZhcmlhbnRJZDogdmFyaWFudElkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIG1heEJvZHlMZW5ndGg6IEluZmluaXR5LFxyXG4gICAgICAgIHVybDogXCIvYXBpL3N0b3JlZnJvbnQvY2hlY2tvdXRzL1wiICsgY2hrT3V0SWQgKyBcIi9jYXJ0cy9cIiArIGNoa091dElkICsgXCIvaXRlbXMvXCIgKyBsaW5lSXRlbUlkLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfTtcclxuICAgIGF3YWl0IGF4aW9zLnJlcXVlc3QoY29uZmlnKVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XHJcbiAgICAgICAgICAgICAgICByZWxvYWRGbihkYXRhLCBwcm9kdWN0UHJpY2UsIFwicGx1c1wiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbHVzIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG59KTtcclxuZnVuY3Rpb24gc2hvd0xvYWRlcigpIHtcclxuICAgICQoXCIubG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICQoXCIjbWFpbi1kaXZcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTG9hZGVyKCkge1xyXG4gICAgJChcIi5sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAkKFwiI21haW4tZGl2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVsb2FkRm4oZGF0YSwgcHJpY2UsIG1ldGhvZCkge1xyXG4gICAgc2hvd0xvYWRlcigpXHJcbiAgICAkKFwiaW5wdXRbbmFtZSo9XCIgKyBkYXRhLmxpbmVJdGVtLnByb2R1Y3RJZCArIFwiXVwiKS52YWwoZGF0YS5saW5lSXRlbS5xdWFudGl0eSk7XHJcbiAgICB2YXIgbmV3UHJpY2UgPSAwO1xyXG4gICAgdmFyIHByb2R1Y3RQcmljZSA9IDA7XHJcbiAgICB2YXIgc3VidG90YWxQcmljZSA9IDA7XHJcbiAgICB2YXIgdG90YWwgPSAwO1xyXG4gICAgaWYgKG1ldGhvZCA9PSBcIm1pbnVzXCIpIHtcclxuICAgICAgICBuZXdQcmljZSA9IHByaWNlLnJlcGxhY2UoL1xcJC9nLCAnJyk7XHJcbiAgICAgICAgdG90YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnRvdGFsXCIpLmlubmVyVGV4dDtcclxuICAgICAgICBzdWJ0b3RhbFByaWNlID0gTnVtYmVyKHRvdGFsLnJlcGxhY2UoL1xcJC9nLCAnJykpIC0gTnVtYmVyKG5ld1ByaWNlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5ld1ByaWNlID0gcHJpY2UucmVwbGFjZSgvXFwkL2csICcnKTs7XHJcbiAgICAgICAgdG90YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnRvdGFsXCIpLmlubmVyVGV4dDtcclxuICAgICAgICBzdWJ0b3RhbFByaWNlID0gTnVtYmVyKHRvdGFsLnJlcGxhY2UoL1xcJC9nLCAnJykpICsgTnVtYmVyKG5ld1ByaWNlKTtcclxuICAgIH1cclxuICAgICQoJyNzdWJ0b3RhbCcpLmh0bWwoXCIkXCIgKyBzdWJ0b3RhbFByaWNlLnRvRml4ZWQoMikpO1xyXG4gICAgJCgnI3RvdGFsQ2hlY2tvdXRQcmljZScpLmh0bWwoXCIkXCIgKyBzdWJ0b3RhbFByaWNlLnRvRml4ZWQoMikpO1xyXG59XHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIjY291cG9uQnRuXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjb3Vwb25Db2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vwb25Db2RlXCIpLnZhbHVlO1xyXG4gICAgaWYgKGNvdXBvbkNvZGUgIT0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgc2VydmljZS5hcHBseUNvdXBvbihjb3Vwb25Db2RlKTtcclxuICAgICAgICB2YXIgZ2V0X2NoZWNrb3V0ID0gc3RhdGUuZGF0YS5nZXRDaGVja291dCgpO1xyXG4gICAgICAgICQoJyNjb3Vwb25EZXRhaWxzJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgdmFyIGNvZGUgPSBnZXRfY2hlY2tvdXQuY291cG9uc1swXS5jb2RlO1xyXG4gICAgICAgIHZhciB0eXBlID0gZ2V0X2NoZWNrb3V0LmNvdXBvbnNbMF0uY291cG9uVHlwZTtcclxuICAgICAgICB2YXIgZGlzY291bnRlZEFtb3VudCA9IGdldF9jaGVja291dC5jb3Vwb25zWzBdLmRpc2NvdW50ZWRBbW91bnQ7XHJcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZ2V0X2NoZWNrb3V0LmNvdXBvbnNbMF0uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vwb25OYW1lXCIpLmlubmVyVGV4dCA9IGRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHVwZGF0ZVN1YnRvdGFsKHR5cGUsIGRpc2NvdW50ZWRBbW91bnQsIGdldF9jaGVja291dCk7XHJcbiAgICB9XHJcbn0pO1xyXG52YXIgY291cG9uQXBwbGllZCA9IGZhbHNlO1xyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVTdWJ0b3RhbCh0eXBlLCBkaXNjb3VudGVkQW1vdW50LCBnZXRfY2hlY2tvdXQpIHtcclxuICAgIHZhciB0b3RhbDtcclxuICAgIHZhciBzdWJUb3RhbCA9IDA7XHJcbiAgICBpZiAoY291cG9uQXBwbGllZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvckNsYXNzXCIpLmlubmVySFRNTCA9IFwiQWxyZWFkeSBhcHBsaWVkXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PSAncGVyX3RvdGFsX2Rpc2NvdW50JyAmJiBjb3Vwb25BcHBsaWVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgc2hvd0xvYWRlcigpXHJcbiAgICAgICAgdG90YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnRvdGFsXCIpLmlubmVyVGV4dDtcclxuICAgICAgICBzdWJUb3RhbCA9IE51bWJlcih0b3RhbC5yZXBsYWNlKC9cXCQvZywgJycpKSAtIE51bWJlcihkaXNjb3VudGVkQW1vdW50KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsQ2hlY2tvdXRQcmljZVwiKS5pbm5lckhUTUwgPSBcIiRcIiArIHN1YlRvdGFsO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY291bnRWYWx1ZVwiKS5pbm5lclRleHQgPSBcIi0kXCIgKyBkaXNjb3VudGVkQW1vdW50LnRvRml4ZWQoMik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3Blcl9pdGVtX2Rpc2NvdW50JyAmJiBjb3Vwb25BcHBsaWVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgc2hvd0xvYWRlcigpXHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2R1Y3QtcHJpY2UnKTtcclxuICAgICAgICB0b3RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VidG90YWxcIikuaW5uZXJUZXh0O1xyXG4gICAgICAgIHZhciB0b3RhbF9kaXNjb3VudCA9IDA7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaSkge1xyXG4gICAgICAgICAgICB0b3RhbF9kaXNjb3VudCA9IHRvdGFsX2Rpc2NvdW50ICsgTnVtYmVyKGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2ldLmNvdXBvbkFtb3VudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3ViVG90YWwgPSBOdW1iZXIodG90YWwucmVwbGFjZSgvXFwkL2csICcnKSkgLSB0b3RhbF9kaXNjb3VudDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2NvdW50VmFsdWVcIikuaW5uZXJUZXh0ID0gXCItJFwiICsgdG90YWxfZGlzY291bnQudG9GaXhlZCgyKTtcclxuICAgICAgICAkKCcjdG90YWxDaGVja291dFByaWNlJykuaHRtbChcIiRcIiArIHN1YlRvdGFsLnRvRml4ZWQoMikpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdwZXJjZW50YWdlX2Rpc2NvdW50Jykge1xyXG4gICAgICAgIHNob3dMb2FkZXIoKVxyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9kdWN0LXByaWNlJyk7XHJcbiAgICAgICAgdG90YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnRvdGFsXCIpLmlubmVyVGV4dDtcclxuICAgICAgICB2YXIgdG90YWxfZGlzY291bnQgPSAwO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGkpIHtcclxuICAgICAgICAgICAgdG90YWxfZGlzY291bnQgPSB0b3RhbF9kaXNjb3VudCArIE51bWJlcihnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpXS5jb3Vwb25BbW91bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1YlRvdGFsID0gTnVtYmVyKHRvdGFsLnJlcGxhY2UoL1xcJC9nLCAnJykpIC0gdG90YWxfZGlzY291bnQ7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjb3VudFZhbHVlXCIpLmlubmVyVGV4dCA9IFwiLSRcIiArIHRvdGFsX2Rpc2NvdW50LnRvRml4ZWQoMik7XHJcbiAgICAgICAgJCgnI3RvdGFsQ2hlY2tvdXRQcmljZScpLmh0bWwoXCIkXCIgKyBzdWJUb3RhbC50b0ZpeGVkKDIpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlzY291dCBpcyBOb3QgVmFsaWRcIik7XHJcbiAgICB9XHJcbiAgICBjb3Vwb25BcHBsaWVkID0gdHJ1ZTtcclxufVxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiI3JlbW92ZUNvdXBvblwiLCBhc3luYyBmdW5jdGlvbiAoZXYpIHtcclxuICAgIHZhciBjb3Vwb25Db2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vwb25Db2RlXCIpLnZhbHVlO1xyXG4gICAgaWYgKGNvdXBvbkNvZGUgIT0gJycpIHtcclxuICAgICAgICBhd2FpdCBzZXJ2aWNlLnJlbW92ZUNvdXBvbihjb3Vwb25Db2RlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXBvbkNvZGVcIikudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXBvbk5hbWVcIikuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjb3VudFZhbHVlXCIpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICQoXCIjY291cG9uSW5wdXRcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIiNyZW1vdmVDb3Vwb25cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcbn0pXHJcblxyXG4kKFwiaW5wdXRbdHlwZT1yYWRpb11baWQ9Y2FyZERldGFpbHNdXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgJChcIiNjYXJkLXRlbXBsYXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiI2NvdXBvbkNvZGVIZWFkXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjY291cG9uSW5wdXRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG59KVxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiI2FkcmVzc2NoZWNrYm94XCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRyZXNzY2hlY2tib3gnKS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICB2YXIgc2hpcHBpbmdEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEZpcnN0TmFtZVwiKS52YWx1ZTtcclxuICAgICAgICBpZiAoc2hpcHBpbmdEYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGZpcnN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRGaXJzdE5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBsYXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRMYXN0TmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGFkZHJlc3MxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEFkZHJlc3NcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBhZGRyZXNzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRBZGRyZXNzLTJcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dENpdHlOYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgY29tcGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRDb21wYW55TmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHN0YXRlMTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0U3RhdGVOYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgcG9zdGFsQ29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRQaG9uZU51bWJlclwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0UGhvbmVOdW1iZXJcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBjdXN0b21lckVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRFbWFpbFwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGNvdW50cnkgPSAkKFwiI3NoaXBwaW5nWm9uZSBvcHRpb246c2VsZWN0ZWRcIikuaHRtbCgpO1xyXG4gICAgICAgICAgICB2YXIgY291bnRyeUNvZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nWm9uZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsaW5ndHh0Rmlyc3ROYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBmaXJzdE5hbWUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRMYXN0TmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbGFzdE5hbWUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRBZGRyZXNzXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBhZGRyZXNzMSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlsbGluZ3R4dEFkZHJlc3MtMlwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYWRkcmVzczIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRDaXR5TmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY2l0eSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlsbGluZ3R4dFN0YXRlTmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc3RhdGUxMik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlsbGluZ3R4dFBvc3RhbENvZGVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHBvc3RhbENvZGUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRQaG9uZU51bWJlclwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcG51bWJlcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlsbGluZ3R4dENvbXBhbnlOYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb21wYW55KTtcclxuICAgICAgICAgICAgJChcIiNiaWxsaW5nWm9uZVwiKS52YWwoY291bnRyeUNvZGUpO1xyXG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMTogYWRkcmVzczEsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMjogYWRkcmVzczIsXHJcbiAgICAgICAgICAgICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICAgICAgICAgICAgY29tcGFueTogY29tcGFueSxcclxuICAgICAgICAgICAgICAgIHN0YXRlT3JQcm92aW5jZTogc3RhdGUxMixcclxuICAgICAgICAgICAgICAgIHBvc3RhbENvZGU6IHBvc3RhbENvZGUsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgY291bnRyeUNvZGU6IGNvdW50cnlDb2RlLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IHBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VzdG9tZXJFbWFpbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IHNlcnZpY2UudXBkYXRlQmlsbGluZ0FkZHJlc3MoYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIHZhciBnZXRfY2hlY2tvdXQgPSBzdGF0ZS5kYXRhLmdldENoZWNrb3V0KCk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nTWV0aG9kXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0RGl2ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzaGlwcGluZ1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ1NlbGVjdC5pZCA9ICdzaGlwcGluZ01ldGhvZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdTZWxlY3QuY2xhc3NOYW1lID0gJ3NlbGVjdHBpY2tlciBzaGlwcGluZ21ldGhvZCBkcm9wZG93bi1oZWFkZXIgdy0xMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKClbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0ID0gc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZUJ1dHRvbi5pbm5lckhUTUwgPSAnQ29udGludWUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmdNZXRob2REcm9wRG93blwiKS5hcHBlbmRDaGlsZChzaGlwcGluZ1NlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ01ldGhvZERyb3BEb3duXCIpLmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoc2VsZWN0RGl2KS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHQgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmdNZXRob2RcIikuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEZpcnN0TmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRMYXN0TmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRBZGRyZXNzXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dENpdHlOYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFN0YXRlTmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRQb3N0YWxDb2RlXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFBob25lTnVtYmVyXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XHJcbiAgICAgICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nTWV0aG9kXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB4LnJlbW92ZSh4Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB4W2ldLmlubmVySFRNTCA9IFwiTm8gU2hpcHBpbmcgTWV0aG9kc1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVDb250aW51ZUJ1dHRvbkNsaWNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRyZXNzY2hlY2tib3gnKS5jaGVja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgJChcIi5iaWxsaW5nRm9ybVwiKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IHNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKVtpXS50eXBlID09IFwiUEFZTUVOVF9UWVBFX0FQSVwiICYmIHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKVtpXS5zdXBwb3J0ZWRDYXJkcy5sZW5ndGggIT09IDAgJiYgc3RhdGUuZGF0YS5nZXRQYXltZW50TWV0aG9kcygpW2ldLm1ldGhvZCAhPT0gJ2dvb2dsZXBheScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9ICdwYXltZW50TWV0aG9kJztcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2xhc3NOYW1lID0gJ2NhcmRQYXltZW50TWV0aG9kJztcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uaWQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdjYXJkUGF5bWVudE1ldGhvZExhYmVsJztcclxuICAgICAgICAgICAgICAgIGxhYmVsLnRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKVtpXS5jb25maWcuZGlzcGxheU5hbWU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGF5bWVudE1ldGhvZCcsICdjYXJkUGF5bWVudE1ldGhvZCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuY2xhc3NMaXN0LmFkZCgnZm9ybS1ib2R5Jyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmROdW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjYXJkTnVtYmVySW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdjYXJkLW51bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgY2FyZE51bWJlcklucHV0LnBsYWNlaG9sZGVyID0gJ0NhcmQgTnVtYmVyJztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgY2FyZE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdOYW1lIG9uIENhcmQnO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVGaWVsZC5jbGFzc0xpc3QuYWRkKCdkYXRlLWZpZWxkJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBtb250aFNlbGVjdC5uYW1lID0gJ01vbnRoJztcclxuICAgICAgICAgICAgICAgIG1vbnRoU2VsZWN0LmlkID0gJ2NhcmRNb250aCc7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRocyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbW9udGhzLmZvckVhY2goKG1vbnRoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IChpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBtb250aDtcclxuICAgICAgICAgICAgICAgICAgICBtb250aFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXJTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIHllYXJTZWxlY3QubmFtZSA9ICdZZWFyJztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudFllYXI7IGkgPD0gY3VycmVudFllYXIgKyA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAoaSAlIDEwMCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFZlcmlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY2FyZFZlcmlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJkLXZlcmlmaWNhdGlvbicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdnZJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjdnZJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgY3Z2SW5wdXQuaWQgPSAnY3Z2JztcclxuICAgICAgICAgICAgICAgIGN2dklucHV0LnBsYWNlaG9sZGVyID0gJ0NWVic7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN2dkRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGN2dkRldGFpbHMuY2xhc3NMaXN0LmFkZCgnY3Z2LWRldGFpbHMnKTtcclxuICAgICAgICAgICAgICAgIGN2dkRldGFpbHMuaW5uZXJIVE1MID0gJzxwPjMgb3IgNCBkaWdpdHMgdXN1YWxseSBmb3VuZCA8YnI+IG9uIHRoZSBzaWduYXR1cmUgc3RyaXA8L3A+JztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKG1vbnRoU2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZCh5ZWFyU2VsZWN0KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY2FyZFZlcmlmaWNhdGlvbi5hcHBlbmRDaGlsZChjdnZJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjYXJkVmVyaWZpY2F0aW9uLmFwcGVuZENoaWxkKGN2dkRldGFpbHMpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChjYXJkTnVtYmVySW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoY2FyZE5hbWVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoY2FyZFZlcmlmaWNhdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUJvZHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5bWVudE1ldGhvZExpc3QnKVswXS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKHBheW1lbnRNZXRob2RDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnBheW1lbnRNZXRob2RMaXN0JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICByYWRpb0J0bi50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9CdG4ubmFtZSA9IFwicGF5bWVudE1ldGhvZFwiO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9CdG4udmFsdWUgPSBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnJlYWtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJSXCIpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uY29uZmlnLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5bWVudE1ldGhvZExpc3QnKVswXS5hcHBlbmRDaGlsZChyYWRpb0J0bik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheW1lbnRNZXRob2RMaXN0JylbMF0uYXBwZW5kQ2hpbGQoYnJlYWtFbGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvY2VlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHByb2NlZWRCdG4uaW5uZXJIVE1MID0gJ1Byb2NlZWQnO1xyXG4gICAgICAgIHByb2NlZWRCdG4udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICAgICAgcHJvY2VlZEJ0bi5jbGFzc05hbWUgPSAncHJvY2VlZC1idG4nO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheW1lbnRNZXRob2RMaXN0JylbMF0uYXBwZW5kQ2hpbGQocHJvY2VlZEJ0bik7XHJcbiAgICB9XHJcbiAgICB2YXIgc2VsZWN0ZWRNZXRob2QgPSAkKFwiI3NoaXBwaW5nTWV0aG9kIDpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgc2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHMoKTtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nQWRkcmVzcygpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkTWV0aG9kXCIsIHNlbGVjdGVkTWV0aG9kKTtcclxuICAgIGNvbnN0IHVwZGF0ZVNoaXBwaW5nTWV0aG9kID0gYXdhaXQgc2VydmljZS5zZWxlY3RTaGlwcGluZ09wdGlvbihzZWxlY3RlZE1ldGhvZCk7XHJcbiAgICB2YXIgZ2V0X2NoZWNrb3V0ID0gc3RhdGUuZGF0YS5nZXRDaGVja291dCgpO1xyXG4gICAgaWYgKGdldF9jaGVja291dC5jb25zaWdubWVudHNbMF0uc2VsZWN0ZWRTaGlwcGluZ09wdGlvbi50eXBlID09IFwic2hpcHBpbmdfZmxhdHJhdGVcIikge1xyXG4gICAgICAgICQoXCIjc2hpcHBpbmdSYXRlXCIpLmh0bWwoXCIkXCIgKyBnZXRfY2hlY2tvdXQuY29uc2lnbm1lbnRzWzBdLnNlbGVjdGVkU2hpcHBpbmdPcHRpb24uY29zdC50b0ZpeGVkKDIpKTtcclxuICAgICAgICB2YXIgY2hlY2tvdXRUb3RhbCA9ICQoXCIjdG90YWxDaGVja291dFByaWNlXCIpLmh0bWwoKTtcclxuICAgICAgICB2YXIgdXBkYXRlZFRvdGFsID0gTnVtYmVyKGNoZWNrb3V0VG90YWwucmVwbGFjZShcIiRcIiwgXCJcIikpICsgTnVtYmVyKGdldF9jaGVja291dC5jb25zaWdubWVudHNbMF0uc2VsZWN0ZWRTaGlwcGluZ09wdGlvbi5jb3N0KTtcclxuICAgICAgICAkKFwiI3RvdGFsQ2hlY2tvdXRQcmljZVwiKS5odG1sKFwiJFwiICsgdXBkYXRlZFRvdGFsLnRvRml4ZWQoMikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI3NoaXBwaW5nUmF0ZVwiKS5odG1sKFwiRnJlZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGJpbGxpbmdDb250QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJpbGxpbmdDb250aW51ZScpO1xyXG5pZihiaWxsaW5nQ29udEJ0bil7XHJcbiAgICBiaWxsaW5nQ29udEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IHNlcnZpY2UubG9hZENoZWNrb3V0KCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0udHlwZSA9PSBcIlBBWU1FTlRfVFlQRV9BUElcIiAmJiBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uc3VwcG9ydGVkQ2FyZHMubGVuZ3RoICE9PSAwICYmIHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKVtpXS5tZXRob2QgIT09ICdnb29nbGVwYXknKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSAncGF5bWVudE1ldGhvZCc7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuY2xhc3NOYW1lID0gJ2NhcmRQYXltZW50TWV0aG9kJztcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKVtpXS5pZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ2NhcmRQYXltZW50TWV0aG9kTGFiZWwnO1xyXG4gICAgICAgICAgICBsYWJlbC50aXRsZSA9ICcnO1xyXG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKVtpXS5jb25maWcuZGlzcGxheU5hbWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGF5bWVudE1ldGhvZCcsICdjYXJkUGF5bWVudE1ldGhvZCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZm9ybUJvZHkuY2xhc3NMaXN0LmFkZCgnZm9ybS1ib2R5Jyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkTnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBjYXJkTnVtYmVySW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgY2FyZE51bWJlcklucHV0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtbnVtYmVyJyk7XHJcbiAgICAgICAgICAgIGNhcmROdW1iZXJJbnB1dC5wbGFjZWhvbGRlciA9ICdDYXJkIE51bWJlcic7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgY2FyZE5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICBjYXJkTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtbmFtZScpO1xyXG4gICAgICAgICAgICBjYXJkTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ05hbWUgb24gQ2FyZCc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGF0ZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2RhdGUtZmllbGQnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIG1vbnRoU2VsZWN0Lm5hbWUgPSAnTW9udGgnO1xyXG4gICAgICAgICAgICBtb250aFNlbGVjdC5pZCA9ICdjYXJkTW9udGgnO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9udGhzID0gW1xyXG4gICAgICAgICAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxyXG4gICAgICAgICAgICAgICAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgbW9udGhzLmZvckVhY2goKG1vbnRoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAoaW5kZXggKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBtb250aDtcclxuICAgICAgICAgICAgICAgIG1vbnRoU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeWVhclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICB5ZWFyU2VsZWN0Lm5hbWUgPSAnWWVhcic7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnRZZWFyOyBpIDw9IGN1cnJlbnRZZWFyICsgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IChpICUgMTAwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpO1xyXG4gICAgICAgICAgICAgICAgeWVhclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRWZXJpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2FyZFZlcmlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJkLXZlcmlmaWNhdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3Z2SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBjdnZJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICBjdnZJbnB1dC5pZCA9ICdjdnYnO1xyXG4gICAgICAgICAgICBjdnZJbnB1dC5wbGFjZWhvbGRlciA9ICdDVlYnO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3Z2RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjdnZEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2N2di1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGN2dkRldGFpbHMuaW5uZXJIVE1MID0gJzxwPjMgb3IgNCBkaWdpdHMgdXN1YWxseSBmb3VuZCA8YnI+IG9uIHRoZSBzaWduYXR1cmUgc3RyaXA8L3A+JztcclxuXHJcbiAgICAgICAgICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZChtb250aFNlbGVjdCk7XHJcbiAgICAgICAgICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZCh5ZWFyU2VsZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGNhcmRWZXJpZmljYXRpb24uYXBwZW5kQ2hpbGQoY3Z2SW5wdXQpO1xyXG4gICAgICAgICAgICBjYXJkVmVyaWZpY2F0aW9uLmFwcGVuZENoaWxkKGN2dkRldGFpbHMpO1xyXG5cclxuICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoY2FyZE51bWJlcklucHV0KTtcclxuICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoY2FyZE5hbWVJbnB1dCk7XHJcbiAgICAgICAgICAgIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGRhdGVGaWVsZCk7XHJcbiAgICAgICAgICAgIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGNhcmRWZXJpZmljYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQm9keSk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5bWVudE1ldGhvZExpc3QnKVswXS5hcHBlbmRDaGlsZChwYXltZW50TWV0aG9kQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgJCgnLnBheW1lbnRNZXRob2RMaXN0JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJhZGlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICByYWRpb0J0bi50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICByYWRpb0J0bi5uYW1lID0gXCJwYXltZW50TWV0aG9kXCI7XHJcbiAgICAgICAgICAgIHJhZGlvQnRuLnZhbHVlID0gc3RhdGUuZGF0YS5nZXRQYXltZW50TWV0aG9kcygpW2ldLmlkO1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHZhciBicmVha0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlJcIik7XHJcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gc3RhdGUuZGF0YS5nZXRQYXltZW50TWV0aG9kcygpW2ldLmNvbmZpZy5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5bWVudE1ldGhvZExpc3QnKVswXS5hcHBlbmRDaGlsZChyYWRpb0J0bik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheW1lbnRNZXRob2RMaXN0JylbMF0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKGJyZWFrRWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHByb2NlZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2NlZWRCdG4uaW5uZXJIVE1MID0gJ1Byb2NlZWQnO1xyXG4gICAgcHJvY2VlZEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcclxuICAgIHByb2NlZWRCdG4uY2xhc3NOYW1lID0gJ3Byb2NlZWQtYnRuJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheW1lbnRNZXRob2RMaXN0JylbMF0uYXBwZW5kQ2hpbGQocHJvY2VlZEJ0bik7XHJcblxyXG59KTtcclxufVxyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wcm9jZWVkLWJ0bicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBtZXRob2RJZCA9ICQoJ2lucHV0W25hbWU9XCJwYXltZW50TWV0aG9kXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgIHZhciBjYXJkUGF5bWVudE1ldGhvZENsYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZFBheW1lbnRNZXRob2QnKTtcclxuICAgIHZhciBjYXJkUGF5bWVudE1ldGhvZElkO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXJkUGF5bWVudE1ldGhvZENsYXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGNhcmRQYXltZW50TWV0aG9kQ2xhc3NbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjYXJkUGF5bWVudE1ldGhvZElkID0gY2FyZFBheW1lbnRNZXRob2RDbGFzc1tpXS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgY2FyZE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtbnVtYmVyJylbMF0udmFsdWU7XHJcbiAgICB2YXIgY2FyZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkLW5hbWUnKVswXS52YWx1ZTtcclxuICAgIHZhciBjYXJkRXhwTW9udGggPSAkKCdzZWxlY3RbbmFtZT1cIk1vbnRoXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgdmFyIGNhcmRFeHBZZWFyID0gJCgnc2VsZWN0W25hbWU9XCJZZWFyXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgdmFyIGN2diA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdnYnKS52YWx1ZTtcclxuICAgIHZhciBwYXltZW50ID0ge307XHJcbiAgICBpZiAobWV0aG9kSWQgPT0gJ3ppcCcpIHtcclxuICAgICAgICBhd2FpdCBzZXJ2aWNlLmluaXRpYWxpemVQYXltZW50KHtcclxuICAgICAgICAgICAgbWV0aG9kSWQ6IG1ldGhvZElkLFxyXG4gICAgICAgICAgICBtZXRob2RJZDoge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnd2FsbGV0V2lkZ2V0JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgc2VydmljZS5pbml0aWFsaXplUGF5bWVudCh7IG1ldGhvZElkOiBtZXRob2RJZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2FyZFBheW1lbnRNZXRob2RJZCkge1xyXG4gICAgICAgIHBheW1lbnQgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZElkOiBjYXJkUGF5bWVudE1ldGhvZElkLFxyXG4gICAgICAgICAgICBwYXltZW50RGF0YToge1xyXG4gICAgICAgICAgICAgICAgY2NFeHBpcnk6IHsgbW9udGg6IGNhcmRFeHBNb250aCwgeWVhcjogY2FyZEV4cFllYXIgfSxcclxuICAgICAgICAgICAgICAgIGNjTmFtZTogY2FyZE5hbWUsXHJcbiAgICAgICAgICAgICAgICBjY051bWJlcjogY2FyZE51bWJlcixcclxuICAgICAgICAgICAgICAgIGNjVHlwZTogJ1ZJU0EnLFxyXG4gICAgICAgICAgICAgICAgY2NDdnY6IGN2dixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtZXRob2RJZCA9PSAnemlwJykge1xyXG4gICAgICAgIGF3YWl0IHNlcnZpY2UubG9hZENoZWNrb3V0KCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNlcnZpY2UuZmluYWxpemVPcmRlcklmTmVlZGVkKCk7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvb3JkZXItY29uZmlybWF0aW9uJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnR5cGUgIT09ICdvcmRlcl9maW5hbGl6YXRpb25fbm90X3JlcXVpcmVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwYXltZW50ID0ge1xyXG4gICAgICAgICAgICBtZXRob2RJZDogbWV0aG9kSWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBzZXJ2aWNlLnN1Ym1pdE9yZGVyKHsgcGF5bWVudCB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oJy9vcmRlci1jb25maXJtYXRpb24nKTtcclxufSlcclxuXHJcbnZhciBhY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWNjb3JkaW9uXCIpO1xyXG52YXIgaTtcclxuZm9yIChpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xyXG4gICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIHZhciBwYW5lbFBhcmVudENsYXNzID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgICAgICB2YXIgcGFuZWwgPSBwYW5lbFBhcmVudENsYXNzLm5leHQoJy5wYW5lbCcpO1xyXG4gICAgICAgICQocGFuZWwpLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2luaGVyaXRzTG9vc2UiLCJfc2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiUGFnZU1hbmFnZXIiLCJjcmVhdGVDaGVja291dFNlcnZpY2UiLCIkIiwiZm9ybXMiLCJub2QiLCJ3aW4iLCJ3aW5kb3ciLCJsaXN0ZW5lcnMiLCJkb2MiLCJkb2N1bWVudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJfdGhpcyIsInNlcnZpY2UiLCJDaGVja291dCIsIl9QYWdlTWFuYWdlciIsIl9wcm90byIsIm9uUmVhZHkiLCJfb25SZWFkeSIsIl9jYWxsZWUiLCJzdGF0ZSIsImdldF9jaGVja291dCIsImdyYW5kVG90YWwiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibG9hZENoZWNrb3V0IiwiZGF0YSIsImdldENoZWNrb3V0IiwiY29uc29sZSIsImxvZyIsInBvc3RDYXJ0SXRlbXMiLCJkZWZhdWx0IiwiX3giLCJfcG9zdENhcnRJdGVtcyIsIl9jYWxsZWUxNCIsIm15Rm9ybSIsInByb2R1Y3RfbmFtZSIsInByb2R1Y3RfcHJpY2UiLCJwcm9kdWN0X3F1YW50aXR5IiwicHJvZHVjdF9pbWciLCJwcm9kdWN0U2FsZVByaWNlIiwic3ViVG90YWwiLCJfaTgiLCJuZXdfcHJvZHVjdF9xdHkiLCJwcm9kdWN0X2lkIiwidmFyaWFudF9pZCIsImxpbmVJdGVtc19pZCIsInNhbGVQcmljZSIsImNoZWNrb3V0X2lkIiwiZmlyc3REaXYiLCJwcm9kdWN0TmFtZURpdiIsInByb2R1Y3RQcmljZURpdiIsInByb2R1Y3RJbWdEaXYiLCJwcm9kdWN0UXR5RGl2IiwicHJpY2VDbGFzcyIsInBsdXNRdHlDbGFzcyIsIm1pbnVzUXR5Q2xhc3MiLCJwcmljZUlucHV0Q2xhc3MiLCJwcm9kdWN0UHJpY2VTcGFuIiwibmV3X3Byb2R1Y3RfaW1nIiwiZWxlbSIsIm5ld19wcm9kdWN0X25hbWUiLCJuZXdfcHJvZHVjdF9wcmljZSIsImN1c3RvbWVyX2ZuYW1lIiwiY3VzdG9tZXJfZW1haWwiLCJjdXN0b21lcl9sbmFtZSIsImN1c3RvbWVyX2FkZHJfMSIsImN1c3RvbWVyX2FkZHJfMiIsImN1c3RvbWVyX3N0YXRlIiwiY3VzdG9tZXJfY2l0eSIsImN1c3RvbWVyX3Bjb2RlIiwiY3VzdG9tZXJfcG51bWJlciIsImNvdW50cnkiLCJjdXN0b21lcl9jb21wYW55IiwiY291bnRyeUNvZGUiLCJhZGRyZXNzIiwic2VsZWN0RGl2IiwiY29udGludWVCdXR0b24iLCJzaGlwcGluZ1NlbGVjdCIsIl9pOSIsIm9wdGlvbkVsZW1lbnQiLCJfaTEwIiwiX2NhbGxlZTE0JCIsIl9jb250ZXh0MTUiLCJhY3Rpb24iLCJjYXJ0IiwibGluZUl0ZW1zIiwicGh5c2ljYWxJdGVtcyIsIm9yaWdpbmFsUHJpY2UiLCJxdWFudGl0eSIsImltYWdlVXJsIiwic3VidG90YWwiLCJwcm9kdWN0SWQiLCJ2YXJpYW50SWQiLCJpZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJpbm5lckhUTUwiLCJjdXN0b21lciIsImZpcnN0TmFtZSIsImVtYWlsIiwibGFzdE5hbWUiLCJhZGRyZXNzZXMiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwic3RhdGVPclByb3ZpbmNlIiwiY2l0eSIsInBvc3RhbENvZGUiLCJwaG9uZSIsImNvbXBhbnkiLCJnZXRFbGVtZW50QnlJZCIsInNyYyIsImNzcyIsInZhbCIsInVwZGF0ZVNoaXBwaW5nQWRkcmVzcyIsImdldFNoaXBwaW5nT3B0aW9ucyIsInRleHQiLCJkZXNjcmlwdGlvbiIsImFwcGVuZENoaWxkIiwiZW1wdHkiLCJvbmNsaWNrIiwiaGFuZGxlQ29udGludWVCdXR0b25DbGljayIsIm9uIiwiX3JlZjEyIiwiX2NhbGxlZTEzIiwiZW1haWxJbnB1dCIsIl9jYWxsZWUxMyQiLCJfY29udGV4dDE0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUZvcm0iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5zZXJ0QWZ0ZXIiLCJfeDEzIiwiaXNWYWxpZCIsIk9iakRhdGEiLCJPYmpEYXRhQXJyIiwiQXJyYXkiLCJkaXZzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJfY2FsbGVlMiIsImV2ZW50IiwiX2kiLCJfaTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJodG1sIiwiX3gyIiwiY2xpY2siLCJfcmVmMiIsIl9jYWxsZWU0IiwiZXYiLCJsaW5lSXRlbUlkIiwiY2hrT3V0SWQiLCJwcm9kdWN0UHJpY2UiLCJxdHkiLCJjb25maWciLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyIiwibGluZUl0ZW0iLCJtYXhCb2R5TGVuZ3RoIiwiSW5maW5pdHkiLCJ1cmwiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImF4aW9zIiwicmVxdWVzdCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJyZXNwb25zZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsInN0YXR1cyIsInJlbG9hZEZuIiwiX3g0IiwiZXJyb3IiLCJfeDMiLCJfcmVmNCIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiTnVtYmVyIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl94NiIsIl94NSIsInNob3dMb2FkZXIiLCJzZXRUaW1lb3V0IiwiaGlkZUxvYWRlciIsInByaWNlIiwibmV3UHJpY2UiLCJzdWJ0b3RhbFByaWNlIiwidG90YWwiLCJyZXBsYWNlIiwiaW5uZXJUZXh0IiwidG9GaXhlZCIsIl9jYWxsZWU3IiwiY291cG9uQ29kZSIsImNvZGUiLCJkaXNjb3VudGVkQW1vdW50IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiYXBwbHlDb3Vwb24iLCJjb3Vwb25zIiwiY291cG9uVHlwZSIsInVwZGF0ZVN1YnRvdGFsIiwiY291cG9uQXBwbGllZCIsIl94NyIsIl94OCIsIl94OSIsIl91cGRhdGVTdWJ0b3RhbCIsIl9jYWxsZWUxNSIsImVsZW1lbnRzIiwidG90YWxfZGlzY291bnQiLCJfY2FsbGVlMTUkIiwiX2NvbnRleHQxNiIsImVsZW1lbnQiLCJjb3Vwb25BbW91bnQiLCJfcmVmNyIsIl9jYWxsZWU4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwicmVtb3ZlQ291cG9uIiwiX3gxMCIsImNoYW5nZSIsImNoZWNrZWQiLCJfY2FsbGVlOSIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsIl9jYWxsZWUxMCIsInNoaXBwaW5nRGF0YSIsInN0YXRlMTIiLCJwbnVtYmVyIiwiY3VzdG9tZXJFbWFpbCIsIl9pMyIsIl9pNCIsIngiLCJfaTUiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsInVwZGF0ZUJpbGxpbmdBZGRyZXNzIiwicmVtb3ZlIiwiX3gxMSIsIl9oYW5kbGVDb250aW51ZUJ1dHRvbkNsaWNrIiwiX2NhbGxlZTE2IiwiX3N0YXRlIiwiX2xvb3AyIiwicmFkaW9CdG4iLCJsYWJlbCIsImJyZWFrRWxlbSIsIl9pMTEiLCJwcm9jZWVkQnRuIiwic2VsZWN0ZWRNZXRob2QiLCJvcHRpb25zIiwidXBkYXRlU2hpcHBpbmdNZXRob2QiLCJjaGVja291dFRvdGFsIiwidXBkYXRlZFRvdGFsIiwiX2NhbGxlZTE2JCIsIl9jb250ZXh0MTgiLCJsb2FkUGF5bWVudE1ldGhvZHMiLCJyYWRpb0lucHV0IiwiX2xhYmVsMiIsInBheW1lbnRNZXRob2RDb250YWluZXIiLCJmb3JtQm9keSIsImNhcmROdW1iZXJJbnB1dCIsImNhcmROYW1lSW5wdXQiLCJkYXRlRmllbGQiLCJtb250aFNlbGVjdCIsIm1vbnRocyIsInllYXJTZWxlY3QiLCJjdXJyZW50WWVhciIsIl9pMTIiLCJvcHRpb24iLCJjYXJkVmVyaWZpY2F0aW9uIiwiY3Z2SW5wdXQiLCJjdnZEZXRhaWxzIiwiX2xvb3AyJCIsIl9jb250ZXh0MTciLCJnZXRQYXltZW50TWV0aG9kcyIsInN1cHBvcnRlZENhcmRzIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsInBsYWNlaG9sZGVyIiwibW9udGgiLCJpbmRleCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRTaGlwcGluZ0FkZHJlc3MiLCJzZWxlY3RTaGlwcGluZ09wdGlvbiIsImNvbnNpZ25tZW50cyIsInNlbGVjdGVkU2hpcHBpbmdPcHRpb24iLCJjb3N0IiwiYmlsbGluZ0NvbnRCdG4iLCJxdWVyeVNlbGVjdG9yIiwiX3JlZjEwIiwiX2NhbGxlZTExIiwiX2xvb3AiLCJfaTYiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMiIsIl9sYWJlbCIsIl9pNyIsIl9sb29wJCIsIl9jb250ZXh0MTEiLCJfeDEyIiwiX2NhbGxlZTEyIiwibWV0aG9kSWQiLCJjYXJkUGF5bWVudE1ldGhvZENsYXNzIiwiY2FyZFBheW1lbnRNZXRob2RJZCIsImNhcmROdW1iZXIiLCJjYXJkTmFtZSIsImNhcmRFeHBNb250aCIsImNhcmRFeHBZZWFyIiwiY3Z2IiwicGF5bWVudCIsIl9zZXJ2aWNlJGluaXRpYWxpemVQYSIsIl9jYWxsZWUxMiQiLCJfY29udGV4dDEzIiwiaW5pdGlhbGl6ZVBheW1lbnQiLCJjb250YWluZXIiLCJwYXltZW50RGF0YSIsImNjRXhwaXJ5IiwieWVhciIsImNjTmFtZSIsImNjTnVtYmVyIiwiY2NUeXBlIiwiY2NDdnYiLCJmaW5hbGl6ZU9yZGVySWZOZWVkZWQiLCJsb2NhdGlvbiIsImFzc2lnbiIsInQwIiwic3VibWl0T3JkZXIiLCJhY2MiLCJ0b2dnbGUiLCJwYW5lbFBhcmVudENsYXNzIiwicGFyZW50IiwicGFuZWwiXSwic291cmNlUm9vdCI6IiJ9