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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "../node_modules/axios/lib/axios.js");
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
            get_checkout = state.data.getCheckout(); //console.log('get_checkout', get_checkout);
            grandTotal = get_checkout.grandTotal;
            postCartItems(get_checkout);
          case 6:
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
  _postCartItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(get_checkout) {
    var myForm, subTotal, createProductItem, products, _i8, product, customer_fname, customer_email, customer_lname, customer_addr_1, customer_addr_2, customer_state, customer_city, customer_pcode, customer_pnumber, country, customer_company, countryCode, createShippingMethod, address, state, continueButton, shippingContainer, _i9, pickupMethod, shippingElementDropDown;
    return _regeneratorRuntime().wrap(function _callee16$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          myForm = get_checkout;
          myForm.method = "post";
          myForm.action = "http://localhost:3000/checkout";
          subTotal = get_checkout.subtotal;
          if (get_checkout.cart.lineItems.physicalItems.length > 0) {
            createProductItem = function createProductItem(product) {
              var itemDiv = document.createElement('div');
              itemDiv.className = 'item';
              var detailsDiv = document.createElement('div');
              detailsDiv.className = 'item-details';
              itemDiv.appendChild(detailsDiv);
              var img = document.createElement('img');
              img.id = 'product-image';
              img.src = product.imageSrc;
              img.alt = 'Product Image';
              img.style.width = '50px';
              detailsDiv.appendChild(img);
              var nameSpan = document.createElement('span');
              nameSpan.id = 'product-name';
              nameSpan.textContent = "" + product.name;
              detailsDiv.appendChild(nameSpan);
              var quantityDiv = document.createElement('div');
              quantityDiv.className = 'item-quantity';
              itemDiv.appendChild(quantityDiv);
              var minusButton = document.createElement('button');
              minusButton.className = 'minus';
              minusButton.id = 'minus';
              minusButton.textContent = '-';
              minusButton.setAttribute('data-another-attribute', product.id);
              minusButton.setAttribute('data-title', product.dataTitle);
              minusButton.setAttribute('data-for', product.dataFor);
              minusButton.setAttribute('data-price-id', product.dataPriceId);
              quantityDiv.appendChild(minusButton);
              var quantityInput = document.createElement('input');
              quantityInput.type = 'text';
              quantityInput.value = product.quantity;
              quantityInput.id = "txtQuantity_" + product.id;
              quantityInput.name = product.id;
              quantityInput.setAttribute('data-title', '66');
              quantityDiv.appendChild(quantityInput);
              var plusButton = document.createElement('button');
              plusButton.className = 'plus';
              plusButton.id = 'plus';
              plusButton.textContent = '+';
              plusButton.setAttribute('data-another-attribute', product.id);
              plusButton.setAttribute('data-title', product.dataTitle);
              plusButton.setAttribute('data-for', product.dataFor);
              plusButton.setAttribute('data-price-id', product.dataPriceId);
              quantityDiv.appendChild(plusButton);
              var priceDiv = document.createElement('div');
              priceDiv.className = 'item-price';
              priceDiv.id = 'product-price';
              priceDiv.textContent = "$" + product.salePrice;
              itemDiv.appendChild(priceDiv);
              return itemDiv;
            };
            products = [];
            for (_i8 = 0; _i8 < get_checkout.cart.lineItems.physicalItems.length; _i8++) {
              product = {
                id: get_checkout.cart.lineItems.physicalItems[_i8].productId,
                quantity: get_checkout.cart.lineItems.physicalItems[_i8].quantity,
                variant_id: get_checkout.cart.lineItems.physicalItems[_i8].variantId,
                lineItems_id: get_checkout.cart.lineItems.physicalItems[_i8].id,
                salePrice: get_checkout.cart.lineItems.physicalItems[_i8].salePrice,
                checkout_id: get_checkout.cart.id,
                name: get_checkout.cart.lineItems.physicalItems[_i8].name,
                imageSrc: get_checkout.cart.lineItems.physicalItems[_i8].imageUrl
              };
              console.log("product", product);
              products.push(product);
            }
            products.forEach(function (product) {
              var productItem = createProductItem(product);
              console.log(productItem);
              document.getElementsByClassName('summary-header')[0].appendChild(productItem);
            });
            console.log("subTotal", subTotal);
            document.getElementById("subtotal").innerHTML = "$" + subTotal;
            document.getElementById("totalCheckoutPrice").innerHTML = "$" + subTotal;
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
          if (!customer_email) {
            _context17.next = 38;
            break;
          }
          createShippingMethod = function createShippingMethod(value, id, labelText, spanText, checked) {
            if (checked === void 0) {
              checked = false;
            }
            var shippingMethodDiv = document.createElement('div');
            shippingMethodDiv.className = 'shipping-method';
            var input = document.createElement('input');
            input.type = 'radio';
            input.name = 'shippingMethod';
            input.value = value;
            input.id = id;
            if (checked) {
              input.checked = true;
            }
            var label = document.createElement('label');
            label.htmlFor = id;
            label.textContent = labelText;
            var span = document.createElement('span');
            span.textContent = spanText;
            shippingMethodDiv.appendChild(input);
            shippingMethodDiv.appendChild(label);
            shippingMethodDiv.appendChild(span);
            return shippingMethodDiv;
          };
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
          _context17.next = 26;
          return service.updateShippingAddress(address);
        case 26:
          state = _context17.sent;
          continueButton = document.createElement('button');
          shippingContainer = document.createElement('div');
          for (_i9 = 0; _i9 < state.data.getShippingOptions().length; _i9++) {
            pickupMethod = createShippingMethod(state.data.getShippingOptions()[_i9].id, state.data.getShippingOptions()[_i9].id, state.data.getShippingOptions()[_i9].description, state.data.getShippingOptions()[_i9].description, state.data.getShippingOptions()[_i9].cost);
            shippingContainer.appendChild(pickupMethod);
          }
          document.getElementsByClassName('shipping-methods')[0].appendChild(shippingContainer);
          continueButton.innerHTML = 'Continue';
          continueButton.className = 'continue';
          continueButton.onclick = handleContinueButtonClick;
          shippingElementDropDown = document.getElementById("shippingMethodDropDown");
          if (shippingElementDropDown !== null) {
            shippingContainer.appendChild(continueButton);
          }
          _context17.next = 39;
          break;
        case 38:
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.continue', /*#__PURE__*/function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(e) {
              var emailInput;
              return _regeneratorRuntime().wrap(function _callee15$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    e.preventDefault();
                    emailInput = document.getElementById("txtEmail");
                    if (emailInput.value !== '') {
                      console.log(emailInput.value);
                      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.shippingForm').css('display', 'block');
                      validateForm();
                    } else {
                      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.shippingForm').css('display', 'none');
                      if (document.getElementsByClassName('error-class')[0]) {} else {
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()("<div class='error-class'>Please enter email</div>").insertAfter(emailInput);
                      }
                    }
                  case 3:
                  case "end":
                    return _context16.stop();
                }
              }, _callee15);
            }));
            return function (_x14) {
              return _ref14.apply(this, arguments);
            };
          }());
        case 39:
        case "end":
          return _context17.stop();
      }
    }, _callee16);
  }));
  return _postCartItems.apply(this, arguments);
}
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.shippingContinue').on('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(ev) {
    var shippingData, createShippingMethod, firstName, lastName, address1, address2, city, company, state12, postalCode, pnumber, customerEmail, country, countryCode, address, state, get_checkout, shippingContainer, _i, pickupMethod, newButton;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          shippingData = document.getElementById("shippingtxtFirstName").value;
          if (!(shippingData != null)) {
            _context3.next = 29;
            break;
          }
          createShippingMethod = function createShippingMethod(value, id, labelText, spanText, checked) {
            if (checked === void 0) {
              checked = false;
            }
            var shippingMethodDiv = document.createElement('div');
            shippingMethodDiv.className = 'shipping-method';
            var input = document.createElement('input');
            input.type = 'radio';
            input.name = 'shippingMethod';
            input.value = value;
            input.id = id;
            if (checked) {
              input.checked = true;
            }
            var label = document.createElement('label');
            label.htmlFor = id;
            label.textContent = labelText;
            var span = document.createElement('span');
            span.textContent = spanText;
            shippingMethodDiv.appendChild(input);
            shippingMethodDiv.appendChild(label);
            shippingMethodDiv.appendChild(span);
            return shippingMethodDiv;
          };
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
          _context3.next = 18;
          return service.updateShippingAddress(address);
        case 18:
          state = _context3.sent;
          get_checkout = state.data.getCheckout();
          shippingContainer = document.createElement('div');
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.shipping-methods').css('display', 'block');
          for (_i = 0; _i < state.data.getShippingOptions().length; _i++) {
            pickupMethod = createShippingMethod(state.data.getShippingOptions()[_i].id, state.data.getShippingOptions()[_i].id, state.data.getShippingOptions()[_i].description, state.data.getShippingOptions()[_i].description, state.data.getShippingOptions()[_i].cost);
            shippingContainer.appendChild(pickupMethod);
          }
          document.getElementsByClassName('shipping-methods')[0].appendChild(shippingContainer);
          newButton = document.createElement('button');
          newButton.classList.add('shippingMethodContinue');
          newButton.textContent = 'Continue';
          document.getElementsByClassName('shipping-methods')[0].appendChild(newButton);
          newButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var selectedShippingMethod, selectedMethod, state, address, options, updateShippingMethod, get_checkout, checkoutTotal, updatedTotal;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  selectedShippingMethod = document.querySelector('input[name="shippingMethod"]:checked');
                  if (selectedShippingMethod) {
                    selectedMethod = selectedShippingMethod.value;
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.billingForm').css('display', 'block');
                  }
                  _context2.next = 4;
                  return service.loadPaymentMethods();
                case 4:
                  state = _context2.sent;
                  address = state.data.getShippingAddress();
                  options = state.data.getShippingOptions();
                  _context2.next = 9;
                  return service.selectShippingOption(selectedMethod);
                case 9:
                  updateShippingMethod = _context2.sent;
                  get_checkout = state.data.getCheckout();
                  if (get_checkout.consignments[0].selectedShippingOption.type == "shipping_flatrate") {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#shippingRate").html("$" + get_checkout.consignments[0].selectedShippingOption.cost.toFixed(2));
                    checkoutTotal = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#totalCheckoutPrice").html();
                    updatedTotal = Number(checkoutTotal.replace("$", "")) + Number(get_checkout.consignments[0].selectedShippingOption.cost);
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#totalCheckoutPrice").html("$" + updatedTotal.toFixed(2));
                  } else {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#shippingRate").html("Free");
                  }
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        case 29:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x2) {
    return _ref.apply(this, arguments);
  };
}());
function validateForm() {
  var isValid = true;
  var ObjData = {};
  var ObjDataArr = new Array();
  var divs = document.querySelectorAll('.shipping');
  divs.forEach(function (el) {
    return el.addEventListener('change', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(event) {
        var customer_fname, customer_lname, customer_addr_1, customer_addr_2, customer_city, customer_company, customer_state, customer_pcode, customer_pnumber, customer_email, country, countryCode, address, state, selectDiv, continueButton, shippingSelect, _i2, optionElement, shippingElementDropDown, _i3;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
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
                _context4.next = 26;
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
              _context4.next = 16;
              return service.updateShippingAddress(address);
            case 16:
              state = _context4.sent;
              console.log('state.data.getShippingOptions()', state.data.getShippingOptions());
              selectDiv = document.getElementById("shippingMethod");
              continueButton = document.createElement('button');
              if (selectDiv == null) {
                shippingSelect = document.createElement('select');
                for (_i2 = 0; _i2 < state.data.getShippingOptions().length; _i2++) {
                  shippingSelect.id = 'shippingMethod';
                  shippingSelect.className = 'selectpicker shippingmethod dropdown-header w-100';
                  optionElement = document.createElement('option');
                  optionElement.value = state.data.getShippingOptions()[_i2].id;
                  optionElement.text = state.data.getShippingOptions()[_i2].description;
                  shippingSelect.appendChild(optionElement);
                  shippingElementDropDown = document.getElementById("shippingMethodDropDown");
                  if (shippingElementDropDown != null) {
                    shippingElementDropDown.appendChild(shippingSelect);
                    shippingSelect.appendChild(optionElement);
                    shippingElementDropDown.appendChild(shippingSelect);
                  }
                }
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()(selectDiv).empty();
                for (_i3 = 0; _i3 < state.data.getShippingOptions().length; _i3++) {
                  optionElement = document.createElement('option');
                  optionElement.value = state.data.getShippingOptions()[_i3].id;
                  optionElement.text = state.data.getShippingOptions()[_i3].description;
                  document.getElementById("shippingMethod").appendChild(optionElement);
                }
              }
              continueButton.innerHTML = 'Continue';
              continueButton.className = '';
              continueButton.onclick = handleContinueButtonClick;
              shippingElementDropDown = document.getElementById("shippingMethodDropDown");
              if (shippingElementDropDown) {
                shippingElementDropDown.appendChild(continueButton);
              }
            case 26:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
}
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.continue').click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.shippingForm.panel').css('display', 'block');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.minus').on('click', /*#__PURE__*/function () {
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
          _context6.next = 11;
          return axios__WEBPACK_IMPORTED_MODULE_5__["default"].request(config).then( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(response) {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (response.status == 200 || response.status == 204) {
                      reloadFn(data, productPrice, "minus");
                      console.log(" minus success");
                    }
                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x5) {
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
  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}());
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", ".plus", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(ev) {
    var productId, lineItemId, chkOutId, productPrice, qty, variantId, data, config;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
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
          _context8.next = 11;
          return axios__WEBPACK_IMPORTED_MODULE_5__["default"].request(config).then( /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(response) {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    if (response.status == 200 || response.status == 204) {
                      reloadFn(data, productPrice, "plus");
                      console.log("plus success");
                    }
                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x7) {
              return _ref7.apply(this, arguments);
            };
          }())["catch"](function (error) {
            console.log(error);
          });
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x6) {
    return _ref6.apply(this, arguments);
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
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", "#couponBtn", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
  var couponCode, state, get_checkout, code, type, discountedAmount, displayName;
  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
    while (1) switch (_context9.prev = _context9.next) {
      case 0:
        couponCode = document.getElementById("couponCode").value;
        if (!(couponCode != "")) {
          _context9.next = 13;
          break;
        }
        _context9.next = 4;
        return service.applyCoupon(couponCode);
      case 4:
        state = _context9.sent;
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
        return _context9.stop();
    }
  }, _callee9);
})));
var couponApplied = false;
function updateSubtotal(_x8, _x9, _x10) {
  return _updateSubtotal.apply(this, arguments);
}
function _updateSubtotal() {
  _updateSubtotal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(type, discountedAmount, get_checkout) {
    var total, subTotal, elements, total_discount;
    return _regeneratorRuntime().wrap(function _callee17$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
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
          return _context18.stop();
      }
    }, _callee17);
  }));
  return _updateSubtotal.apply(this, arguments);
}
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", "#removeCoupon", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(ev) {
    var couponCode;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          couponCode = document.getElementById("couponCode").value;
          if (!(couponCode != '')) {
            _context10.next = 9;
            break;
          }
          _context10.next = 4;
          return service.removeCoupon(couponCode);
        case 4:
          document.getElementById("couponCode").value = '';
          document.getElementById("couponName").innerHTML = '';
          document.getElementById("discountValue").innerHTML = '';
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("#couponInput").css("display", "none");
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("#removeCoupon").css("display", "none");
        case 9:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x11) {
    return _ref9.apply(this, arguments);
  };
}());
jquery__WEBPACK_IMPORTED_MODULE_1___default()("input[type=radio][id=cardDetails]").change(function () {
  if (this.checked) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#card-template").css("display", "block");
  }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", "#couponCodeHead", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
    while (1) switch (_context11.prev = _context11.next) {
      case 0:
        jquery__WEBPACK_IMPORTED_MODULE_1___default()("#couponInput").css("display", "block");
      case 1:
      case "end":
        return _context11.stop();
    }
  }, _callee11);
})));
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", "#adresscheckbox", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
  var shippingData, createShippingMethod, firstName, lastName, address1, address2, city, company, state12, postalCode, pnumber, customerEmail, country, countryCode, address, state, get_checkout, shippingContainer, _i4, pickupMethod, x, _i5;
  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
    while (1) switch (_context12.prev = _context12.next) {
      case 0:
        if (!(document.getElementById('adresscheckbox').checked == true)) {
          _context12.next = 35;
          break;
        }
        shippingData = document.getElementById("shippingtxtFirstName").value;
        if (!(shippingData != null)) {
          _context12.next = 33;
          break;
        }
        createShippingMethod = function createShippingMethod(value, id, labelText, spanText, checked) {
          if (checked === void 0) {
            checked = false;
          }
          var shippingMethodDiv = document.createElement('div');
          shippingMethodDiv.className = 'shipping-method';
          var input = document.createElement('input');
          input.type = 'radio';
          input.name = 'shippingMethod';
          input.value = value;
          input.id = id;
          if (checked) {
            input.checked = true;
          }
          var label = document.createElement('label');
          label.htmlFor = id;
          label.textContent = labelText;
          var span = document.createElement('span');
          span.textContent = spanText;
          shippingMethodDiv.appendChild(input);
          shippingMethodDiv.appendChild(label);
          shippingMethodDiv.appendChild(span);
          return shippingMethodDiv;
        };
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
        _context12.next = 29;
        return service.updateBillingAddress(address);
      case 29:
        state = _context12.sent;
        get_checkout = state.data.getCheckout();
        shippingContainer = document.createElement('div');
        for (_i4 = 0; _i4 < state.data.getShippingOptions().length; _i4++) {
          console.log(state.data.getShippingOptions());
          pickupMethod = createShippingMethod(state.data.getShippingOptions()[_i4].id, state.data.getShippingOptions()[_i4].id, state.data.getShippingOptions()[_i4].description, state.data.getShippingOptions()[_i4].description, state.data.getShippingOptions()[_i4].cost);
          shippingContainer.appendChild(pickupMethod);
        }
      case 33:
        _context12.next = 44;
        break;
      case 35:
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
      case 44:
      case "end":
        return _context12.stop();
    }
  }, _callee12);
})));
function handleContinueButtonClick(_x12) {
  return _handleContinueButtonClick.apply(this, arguments);
}
function _handleContinueButtonClick() {
  _handleContinueButtonClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(e) {
    var state, _loop2, radioBtn, label, breakElem, _i10, proceedBtn, selectedMethod, selectedShippingMethod, address, options, updateShippingMethod, get_checkout, checkoutTotal, updatedTotal;
    return _regeneratorRuntime().wrap(function _callee18$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          e.preventDefault();
          _context20.next = 3;
          return service.loadPaymentMethods();
        case 3:
          state = _context20.sent;
          if (!(document.getElementById('adresscheckbox').checked == false)) {
            _context20.next = 8;
            break;
          }
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(".billingForm").css('display', 'block');
          _context20.next = 20;
          break;
        case 8:
          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
            var radioInput, _label2, paymentMethodContainer, formBody, cardNumberInput, cardNameInput, dateField, monthSelect, months, yearSelect, currentYear, _i11, option, cardVerification, cvvInput, cvvDetails;
            return _regeneratorRuntime().wrap(function _loop2$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  if (state.data.getPaymentMethods()[_i10].type == "PAYMENT_TYPE_API" && state.data.getPaymentMethods()[_i10].supportedCards.length !== 0 && state.data.getPaymentMethods()[_i10].method !== 'googlepay') {
                    console.log("hi");
                    radioInput = document.createElement('input');
                    radioInput.type = 'radio';
                    radioInput.name = 'paymentMethod';
                    radioInput.className = 'cardPaymentMethod';
                    radioInput.value = state.data.getPaymentMethods()[_i10].id;
                    _label2 = document.createElement('label');
                    _label2.className = 'cardPaymentMethodLabel';
                    _label2.title = '';
                    _label2.textContent = state.data.getPaymentMethods()[_i10].config.displayName;
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
                    for (_i11 = currentYear; _i11 <= currentYear + 6; _i11++) {
                      option = document.createElement('option');
                      option.value = (_i11 % 100).toString().padStart(2, '0');
                      option.textContent = _i11;
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
                    radioBtn.value = state.data.getPaymentMethods()[_i10].id;
                    label = document.createElement("label");
                    breakElem = document.createElement("BR");
                    label.textContent = state.data.getPaymentMethods()[_i10].config.displayName;
                    document.getElementsByClassName('paymentMethodList')[0].appendChild(radioBtn);
                    document.getElementsByClassName('paymentMethodList')[0].appendChild(label);
                    document.getElementsByClassName('paymentMethodList')[0].appendChild(breakElem);
                  }
                case 1:
                case "end":
                  return _context19.stop();
              }
            }, _loop2);
          });
          _i10 = 0;
        case 10:
          if (!(_i10 < state.data.getPaymentMethods().length)) {
            _context20.next = 15;
            break;
          }
          return _context20.delegateYield(_loop2(), "t0", 12);
        case 12:
          _i10++;
          _context20.next = 10;
          break;
        case 15:
          proceedBtn = document.createElement('button');
          proceedBtn.innerHTML = 'Proceed';
          proceedBtn.type = "submit";
          proceedBtn.className = 'proceed-btn';
          document.getElementsByClassName('paymentMethodList')[0].appendChild(proceedBtn);
        case 20:
          selectedShippingMethod = document.querySelector('input[name="shippingMethod"]:checked');
          if (selectedShippingMethod) {
            selectedMethod = selectedShippingMethod.value;
          }
          address = state.data.getShippingAddress();
          options = state.data.getShippingOptions();
          console.log("selectedMethod", selectedMethod);
          _context20.next = 27;
          return service.selectShippingOption(selectedMethod);
        case 27:
          updateShippingMethod = _context20.sent;
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
          return _context20.stop();
      }
    }, _callee18);
  }));
  return _handleContinueButtonClick.apply(this, arguments);
}
var billingContBtn = document.querySelector('.billingContinue');
if (billingContBtn) {
  billingContBtn.addEventListener('click', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(e) {
      var firstName, lastName, address1, address2, city, company, state12, postalCode, pnumber, customerEmail, country, countryCode, address, state, _loop, radioBtn, label, breakElem, _i6, proceedBtn;
      return _regeneratorRuntime().wrap(function _callee13$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            e.preventDefault();
            firstName = document.getElementById("billingtxtFirstName").value;
            lastName = document.getElementById("billingtxtLastName").value;
            address1 = document.getElementById("billingtxtAddress").value;
            address2 = document.getElementById("billingtxtAddress-2").value;
            city = document.getElementById("billingtxtCityName").value;
            company = document.getElementById("billingtxtCompanyName").value;
            state12 = document.getElementById("billingtxtStateName").value;
            postalCode = document.getElementById("billingtxtPhoneNumber").value;
            pnumber = document.getElementById("billingtxtPhoneNumber").value;
            customerEmail = document.getElementById("txtEmail").value;
            country = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#billingZone option:selected").html();
            countryCode = document.getElementById("billingZone").value;
            address = {
              firstName: firstName,
              lastName: lastName,
              address1: address1,
              address2: address2,
              city: city,
              company: company,
              state: state12,
              postalCode: postalCode,
              country: country,
              countryCode: countryCode,
              phone: pnumber,
              email: customerEmail
            };
            _context14.next = 16;
            return service.updateBillingAddress(address);
          case 16:
            state = _context14.sent;
            console.log(state.data.getBillingAddress());
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var radioInput, _label, paymentMethodContainer, formBody, cardNumberInput, cardNameInput, dateField, monthSelect, months, yearSelect, currentYear, _i7, option, cardVerification, cvvInput, cvvDetails;
              return _regeneratorRuntime().wrap(function _loop$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
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
                    return _context13.stop();
                }
              }, _loop);
            });
            _i6 = 0;
          case 20:
            if (!(_i6 < state.data.getPaymentMethods().length)) {
              _context14.next = 25;
              break;
            }
            return _context14.delegateYield(_loop(), "t0", 22);
          case 22:
            _i6++;
            _context14.next = 20;
            break;
          case 25:
            proceedBtn = document.createElement('button');
            proceedBtn.innerHTML = 'Proceed';
            proceedBtn.type = "submit";
            proceedBtn.className = 'proceed-btn';
            document.getElementsByClassName('paymentMethodList')[0].appendChild(proceedBtn);
          case 30:
          case "end":
            return _context14.stop();
        }
      }, _callee13);
    }));
    return function (_x13) {
      return _ref12.apply(this, arguments);
    };
  }());
}
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.proceed-btn', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
  var methodId, cardPaymentMethodClass, cardPaymentMethodId, i, cardNumber, cardName, cardExpMonth, cardExpYear, cvv, payment, _service$initializePa, state;
  return _regeneratorRuntime().wrap(function _callee14$(_context15) {
    while (1) switch (_context15.prev = _context15.next) {
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
          _context15.next = 14;
          break;
        }
        _context15.next = 12;
        return service.initializePayment((_service$initializePa = {
          methodId: methodId
        }, _service$initializePa["methodId"] = {
          container: 'walletWidget'
        }, _service$initializePa));
      case 12:
        _context15.next = 16;
        break;
      case 14:
        _context15.next = 16;
        return service.initializePayment({
          methodId: methodId
        });
      case 16:
        if (!cardPaymentMethodId) {
          _context15.next = 20;
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
        _context15.next = 36;
        break;
      case 20:
        if (!(methodId == 'zip')) {
          _context15.next = 35;
          break;
        }
        _context15.next = 23;
        return service.loadCheckout();
      case 23:
        _context15.prev = 23;
        _context15.next = 26;
        return service.finalizeOrderIfNeeded();
      case 26:
        window.location.assign('/order-confirmation');
        _context15.next = 33;
        break;
      case 29:
        _context15.prev = 29;
        _context15.t0 = _context15["catch"](23);
        if (!(_context15.t0.type !== 'order_finalization_not_required')) {
          _context15.next = 33;
          break;
        }
        throw _context15.t0;
      case 33:
        _context15.next = 36;
        break;
      case 35:
        payment = {
          methodId: methodId
        };
      case 36:
        _context15.next = 38;
        return service.submitOrder({
          payment: payment
        });
      case 38:
        state = _context15.sent;
        window.location.assign('/order-confirmation');
      case 40:
      case "end":
        return _context15.stop();
    }
  }, _callee14, null, [[23, 29]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jaGVja291dF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdB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UUFBUSxDQUFDO0lBQzNDZ0QsNkNBQUMsQ0FBQzZXLEtBQUssQ0FBQyxDQUFDSCxNQUFNLENBQUMsQ0FBQztFQUNyQixDQUFDLENBQUM7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NoZWNrb3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUNoZWNrb3V0U2VydmljZSB9IGZyb20gJ0BiaWdjb21tZXJjZS9jaGVja291dC1zZGsnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG52YXIgd2luID0gd2luZG93LFxyXG4gICAgbGlzdGVuZXJzID0gW10sXHJcbiAgICBkb2MgPSB3aW4uZG9jdW1lbnQsXHJcbiAgICBNdXRhdGlvbk9ic2VydmVyID0gd2luLk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luLldlYktpdE11dGF0aW9uT2JzZXJ2ZXIsXHJcbiAgICBvYnNlcnZlcixcclxuICAgIF90aGlzO1xyXG5jb25zdCBzZXJ2aWNlID0gY3JlYXRlQ2hlY2tvdXRTZXJ2aWNlKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrb3V0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgYXN5bmMgb25SZWFkeSgpIHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IHNlcnZpY2UubG9hZENoZWNrb3V0KCk7XHJcbiAgICAgICAgdmFyIGdldF9jaGVja291dCA9IHN0YXRlLmRhdGEuZ2V0Q2hlY2tvdXQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRfY2hlY2tvdXQnLCBnZXRfY2hlY2tvdXQpO1xyXG4gICAgICAgIHZhciBncmFuZFRvdGFsID0gZ2V0X2NoZWNrb3V0LmdyYW5kVG90YWw7XHJcbiAgICAgICAgcG9zdENhcnRJdGVtcyhnZXRfY2hlY2tvdXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwb3N0Q2FydEl0ZW1zKGdldF9jaGVja291dCkge1xyXG4gICAgdmFyIG15Rm9ybSA9IGdldF9jaGVja291dDtcclxuICAgIG15Rm9ybS5tZXRob2QgPSBcInBvc3RcIjtcclxuICAgIG15Rm9ybS5hY3Rpb24gPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGVja291dFwiO1xyXG4gICAgdmFyIHN1YlRvdGFsID0gZ2V0X2NoZWNrb3V0LnN1YnRvdGFsO1xyXG4gICAgaWYgKGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0SXRlbShwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGl0ZW1EaXYuY2xhc3NOYW1lID0gJ2l0ZW0nO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc05hbWUgPSAnaXRlbS1kZXRhaWxzJztcclxuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLmlkID0gJ3Byb2R1Y3QtaW1hZ2UnO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gcHJvZHVjdC5pbWFnZVNyYztcclxuICAgICAgICAgICAgaW1nLmFsdCA9ICdQcm9kdWN0IEltYWdlJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gJzUwcHgnO1xyXG4gICAgICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIG5hbWVTcGFuLmlkID0gJ3Byb2R1Y3QtbmFtZSc7XHJcbiAgICAgICAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gYCR7cHJvZHVjdC5uYW1lfWA7XHJcbiAgICAgICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQobmFtZVNwYW4pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHF1YW50aXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHF1YW50aXR5RGl2LmNsYXNzTmFtZSA9ICdpdGVtLXF1YW50aXR5JztcclxuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChxdWFudGl0eURpdik7XHJcbiBcclxuICAgICAgICAgICAgdmFyIG1pbnVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLmNsYXNzTmFtZSA9ICdtaW51cyc7XHJcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLmlkID0gJ21pbnVzJztcclxuICAgICAgICAgICAgbWludXNCdXR0b24udGV4dENvbnRlbnQgPSAnLSc7XHJcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hbm90aGVyLWF0dHJpYnV0ZScsIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBtaW51c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBwcm9kdWN0LmRhdGFUaXRsZSk7XHJcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1mb3InLCBwcm9kdWN0LmRhdGFGb3IpO1xyXG4gICAgICAgICAgICBtaW51c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UtaWQnLCBwcm9kdWN0LmRhdGFQcmljZUlkKTtcclxuICAgICAgICAgICAgcXVhbnRpdHlEaXYuYXBwZW5kQ2hpbGQobWludXNCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHF1YW50aXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBxdWFudGl0eUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBwcm9kdWN0LnF1YW50aXR5O1xyXG4gICAgICAgICAgICBxdWFudGl0eUlucHV0LmlkID0gYHR4dFF1YW50aXR5XyR7cHJvZHVjdC5pZH1gO1xyXG4gICAgICAgICAgICBxdWFudGl0eUlucHV0Lm5hbWUgPSBwcm9kdWN0LmlkO1xyXG4gICAgICAgICAgICBxdWFudGl0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsICc2NicpO1xyXG4gICAgICAgICAgICBxdWFudGl0eURpdi5hcHBlbmRDaGlsZChxdWFudGl0eUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwbHVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHBsdXNCdXR0b24uY2xhc3NOYW1lID0gJ3BsdXMnO1xyXG4gICAgICAgICAgICBwbHVzQnV0dG9uLmlkID0gJ3BsdXMnO1xyXG4gICAgICAgICAgICBwbHVzQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xyXG4gICAgICAgICAgICBwbHVzQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hbm90aGVyLWF0dHJpYnV0ZScsIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBwbHVzQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIHByb2R1Y3QuZGF0YVRpdGxlKTtcclxuICAgICAgICAgICAgcGx1c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9yJywgcHJvZHVjdC5kYXRhRm9yKTtcclxuICAgICAgICAgICAgcGx1c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UtaWQnLCBwcm9kdWN0LmRhdGFQcmljZUlkKTtcclxuICAgICAgICAgICAgcXVhbnRpdHlEaXYuYXBwZW5kQ2hpbGQocGx1c0J1dHRvbik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcHJpY2VEaXYuY2xhc3NOYW1lID0gJ2l0ZW0tcHJpY2UnO1xyXG4gICAgICAgICAgICBwcmljZURpdi5pZCA9ICdwcm9kdWN0LXByaWNlJztcclxuICAgICAgICAgICAgcHJpY2VEaXYudGV4dENvbnRlbnQgPSBgJCR7cHJvZHVjdC5zYWxlUHJpY2V9YDtcclxuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChwcmljZURpdik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbURpdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHByb2R1Y3RzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpXS5wcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogZ2V0X2NoZWNrb3V0LmNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXNbaV0ucXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50X2lkOiBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpXS52YXJpYW50SWQsXHJcbiAgICAgICAgICAgICAgICBsaW5lSXRlbXNfaWQ6IGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2ldLmlkLFxyXG4gICAgICAgICAgICAgICAgc2FsZVByaWNlOiBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpXS5zYWxlUHJpY2UsXHJcbiAgICAgICAgICAgICAgICBjaGVja291dF9pZDogZ2V0X2NoZWNrb3V0LmNhcnQuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM6IGdldF9jaGVja291dC5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2ldLmltYWdlVXJsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdFwiLCBwcm9kdWN0KTtcclxuICAgICAgICAgICAgcHJvZHVjdHMucHVzaChwcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0SXRlbSA9IGNyZWF0ZVByb2R1Y3RJdGVtKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0SXRlbSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1bW1hcnktaGVhZGVyJylbMF0uYXBwZW5kQ2hpbGQocHJvZHVjdEl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ViVG90YWxcIiwgc3ViVG90YWwpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VidG90YWxcIikuaW5uZXJIVE1MID0gXCIkXCIgKyBzdWJUb3RhbDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsQ2hlY2tvdXRQcmljZVwiKS5pbm5lckhUTUwgPSBcIiRcIiArIHN1YlRvdGFsO1xyXG4gICAgfVxyXG4gICAgdmFyIGN1c3RvbWVyX2ZuYW1lID0gZ2V0X2NoZWNrb3V0LmN1c3RvbWVyLmZpcnN0TmFtZTtcclxuICAgIHZhciBjdXN0b21lcl9lbWFpbCA9IGdldF9jaGVja291dC5jdXN0b21lci5lbWFpbDtcclxuICAgIHZhciBjdXN0b21lcl9sbmFtZSA9IGdldF9jaGVja291dC5jdXN0b21lci5sYXN0TmFtZTtcclxuICAgIGlmIChjdXN0b21lcl9lbWFpbCkge1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9hZGRyXzEgPSBnZXRfY2hlY2tvdXQuY3VzdG9tZXIuYWRkcmVzc2VzWzBdLmFkZHJlc3MxO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9hZGRyXzIgPSBnZXRfY2hlY2tvdXQuY3VzdG9tZXIuYWRkcmVzc2VzWzBdLmFkZHJlc3MyO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9zdGF0ZSA9IGdldF9jaGVja291dC5jdXN0b21lci5hZGRyZXNzZXNbMF0uc3RhdGVPclByb3ZpbmNlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9jaXR5ID0gZ2V0X2NoZWNrb3V0LmN1c3RvbWVyLmFkZHJlc3Nlc1swXS5jaXR5O1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9wY29kZSA9IGdldF9jaGVja291dC5jdXN0b21lci5hZGRyZXNzZXNbMF0ucG9zdGFsQ29kZTtcclxuICAgICAgICB2YXIgY3VzdG9tZXJfcG51bWJlciA9IGdldF9jaGVja291dC5jdXN0b21lci5hZGRyZXNzZXNbMF0ucGhvbmU7XHJcbiAgICAgICAgdmFyIGNvdW50cnkgPSBnZXRfY2hlY2tvdXQuY3VzdG9tZXIuYWRkcmVzc2VzWzBdLmNvdW50cnk7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX2NvbXBhbnkgPSBnZXRfY2hlY2tvdXQuY3VzdG9tZXIuYWRkcmVzc2VzWzBdLmNvbXBhbnk7XHJcbiAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gZ2V0X2NoZWNrb3V0LmN1c3RvbWVyLmFkZHJlc3Nlc1swXS5jb3VudHJ5Q29kZTtcclxuICAgIH1cclxuICAgIGlmIChjdXN0b21lcl9lbWFpbCkge1xyXG4gICAgICAgICQoXCIuc2hpcHBpbmdGb3JtXCIpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0RW1haWxcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1c3RvbWVyX2VtYWlsKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0Rmlyc3ROYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXN0b21lcl9mbmFtZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dExhc3ROYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXN0b21lcl9sbmFtZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEFkZHJlc3NcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1c3RvbWVyX2FkZHJfMSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEFkZHJlc3MtMlwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VzdG9tZXJfYWRkcl8yKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0Q2l0eU5hbWVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1c3RvbWVyX2NpdHkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRDb21wYW55TmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VzdG9tZXJfY29tcGFueSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFN0YXRlTmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VzdG9tZXJfc3RhdGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRQb3N0YWxDb2RlXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXN0b21lcl9wY29kZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFBob25lTnVtYmVyXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXN0b21lcl9wbnVtYmVyKTtcclxuICAgICAgICAkKFwiI3NoaXBwaW5nWm9uZVwiKS52YWwoY291bnRyeUNvZGUpO1xyXG4gICAgICAgIHZhciBhZGRyZXNzID0ge1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IGN1c3RvbWVyX2ZuYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogY3VzdG9tZXJfbG5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3MxOiBjdXN0b21lcl9hZGRyXzEsXHJcbiAgICAgICAgICAgIGFkZHJlc3MyOiBjdXN0b21lcl9hZGRyXzIsXHJcbiAgICAgICAgICAgIGNpdHk6IGN1c3RvbWVyX2NpdHksXHJcbiAgICAgICAgICAgIGNvbXBhbnk6IGN1c3RvbWVyX2NvbXBhbnksXHJcbiAgICAgICAgICAgIHN0YXRlOiBjdXN0b21lcl9zdGF0ZSxcclxuICAgICAgICAgICAgcG9zdGFsQ29kZTogY3VzdG9tZXJfcGNvZGUsXHJcbiAgICAgICAgICAgIGNvdW50cnk6IGNvdW50cnksXHJcbiAgICAgICAgICAgIGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZSxcclxuICAgICAgICAgICAgcGhvbmU6IGN1c3RvbWVyX3BudW1iZXIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBjdXN0b21lcl9lbWFpbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBzZXJ2aWNlLnVwZGF0ZVNoaXBwaW5nQWRkcmVzcyhhZGRyZXNzKTtcclxuICAgICAgICB2YXIgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IHNoaXBwaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNoaXBwaW5nTWV0aG9kKHZhbHVlLCBpZCwgbGFiZWxUZXh0LCBzcGFuVGV4dCwgY2hlY2tlZCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBzaGlwcGluZ01ldGhvZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hpcHBpbmdNZXRob2REaXYuY2xhc3NOYW1lID0gJ3NoaXBwaW5nLW1ldGhvZCc7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XHJcbiAgICBpbnB1dC5uYW1lID0gJ3NoaXBwaW5nTWV0aG9kJztcclxuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICBpbnB1dC5pZCA9IGlkO1xyXG4gICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5odG1sRm9yID0gaWQ7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHNwYW5UZXh0O1xyXG5cclxuICAgIHNoaXBwaW5nTWV0aG9kRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIHNoaXBwaW5nTWV0aG9kRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHNoaXBwaW5nTWV0aG9kRGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgIHJldHVybiBzaGlwcGluZ01ldGhvZERpdjtcclxufVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBwaWNrdXBNZXRob2QgPSBjcmVhdGVTaGlwcGluZ01ldGhvZChzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmlkLHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKClbaV0uaWQsc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5kZXNjcmlwdGlvbiwgc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5kZXNjcmlwdGlvbiwgc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5jb3N0KTsgXHJcbiAgICBzaGlwcGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaWNrdXBNZXRob2QpO1xyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaGlwcGluZy1tZXRob2RzJylbMF0uYXBwZW5kQ2hpbGQoc2hpcHBpbmdDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmlubmVySFRNTCA9ICdDb250aW51ZSc7XHJcbiAgICAgICAgY29udGludWVCdXR0b24uY2xhc3NOYW1lID0gJ2NvbnRpbnVlJztcclxuICAgICAgICBjb250aW51ZUJ1dHRvbi5vbmNsaWNrID0gaGFuZGxlQ29udGludWVCdXR0b25DbGljaztcclxuICAgICAgICB2YXIgc2hpcHBpbmdFbGVtZW50RHJvcERvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nTWV0aG9kRHJvcERvd25cIik7XHJcbiAgICAgICAgaWYgKHNoaXBwaW5nRWxlbWVudERyb3BEb3duICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNoaXBwaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY29udGludWUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRFbWFpbFwiKTtcclxuICAgICAgICAgICAgaWYgKGVtYWlsSW5wdXQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbWFpbElucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZ0Zvcm0nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybSgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2hpcHBpbmdGb3JtJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcnJvci1jbGFzcycpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCI8ZGl2IGNsYXNzPSdlcnJvci1jbGFzcyc+UGxlYXNlIGVudGVyIGVtYWlsPC9kaXY+XCIpLmluc2VydEFmdGVyKGVtYWlsSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuJCgnLnNoaXBwaW5nQ29udGludWUnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZXYpIHtcclxuICAgIHZhciBzaGlwcGluZ0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0Rmlyc3ROYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIGlmIChzaGlwcGluZ0RhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgZmlyc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEZpcnN0TmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGxhc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dExhc3ROYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgYWRkcmVzczEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0QWRkcmVzc1wiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGFkZHJlc3MyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEFkZHJlc3MtMlwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0Q2l0eU5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBjb21wYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dENvbXBhbnlOYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUxMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRTdGF0ZU5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBwb3N0YWxDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFBob25lTnVtYmVyXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgcG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRQaG9uZU51bWJlclwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGN1c3RvbWVyRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEVtYWlsXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgY291bnRyeSA9ICQoXCIjc2hpcHBpbmdab25lIG9wdGlvbjpzZWxlY3RlZFwiKS5odG1sKCk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudHJ5Q29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmdab25lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMTogYWRkcmVzczEsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMjogYWRkcmVzczIsXHJcbiAgICAgICAgICAgICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICAgICAgICAgICAgY29tcGFueTogY29tcGFueSxcclxuICAgICAgICAgICAgICAgIHN0YXRlT3JQcm92aW5jZTogc3RhdGUxMixcclxuICAgICAgICAgICAgICAgIHBvc3RhbENvZGU6IHBvc3RhbENvZGUsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgY291bnRyeUNvZGU6IGNvdW50cnlDb2RlLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IHBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VzdG9tZXJFbWFpbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IHNlcnZpY2UudXBkYXRlU2hpcHBpbmdBZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgICAgICAgICB2YXIgZ2V0X2NoZWNrb3V0ID0gc3RhdGUuZGF0YS5nZXRDaGVja291dCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hpcHBpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLW1ldGhvZHMnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2hpcHBpbmdNZXRob2QodmFsdWUsIGlkLCBsYWJlbFRleHQsIHNwYW5UZXh0LCBjaGVja2VkID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBwaW5nTWV0aG9kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kRGl2LmNsYXNzTmFtZSA9ICdzaGlwcGluZy1tZXRob2QnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lID0gJ3NoaXBwaW5nTWV0aG9kJztcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5pZCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5odG1sRm9yID0gaWQ7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHNwYW5UZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kRGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzaGlwcGluZ01ldGhvZERpdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBpY2t1cE1ldGhvZCA9IGNyZWF0ZVNoaXBwaW5nTWV0aG9kKHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKClbaV0uaWQsc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5pZCxzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmRlc2NyaXB0aW9uLCBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmRlc2NyaXB0aW9uLCBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmNvc3QpOyBcclxuICAgICAgICAgICAgICAgICBzaGlwcGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaWNrdXBNZXRob2QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NoaXBwaW5nLW1ldGhvZHMnKVswXS5hcHBlbmRDaGlsZChzaGlwcGluZ0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBuZXdCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcHBpbmdNZXRob2RDb250aW51ZScpO1xyXG4gICAgICAgICAgICBuZXdCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGludWUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaGlwcGluZy1tZXRob2RzJylbMF0uYXBwZW5kQ2hpbGQobmV3QnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTaGlwcGluZ01ldGhvZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJzaGlwcGluZ01ldGhvZFwiXTpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRNZXRob2Q7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwcGluZ01ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWV0aG9kID0gc2VsZWN0ZWRTaGlwcGluZ01ldGhvZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmlsbGluZ0Zvcm0nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgc2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nQWRkcmVzcygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVTaGlwcGluZ01ldGhvZCA9IGF3YWl0IHNlcnZpY2Uuc2VsZWN0U2hpcHBpbmdPcHRpb24oc2VsZWN0ZWRNZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdldF9jaGVja291dCA9IHN0YXRlLmRhdGEuZ2V0Q2hlY2tvdXQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChnZXRfY2hlY2tvdXQuY29uc2lnbm1lbnRzWzBdLnNlbGVjdGVkU2hpcHBpbmdPcHRpb24udHlwZSA9PSBcInNoaXBwaW5nX2ZsYXRyYXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nUmF0ZVwiKS5odG1sKFwiJFwiICsgZ2V0X2NoZWNrb3V0LmNvbnNpZ25tZW50c1swXS5zZWxlY3RlZFNoaXBwaW5nT3B0aW9uLmNvc3QudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrb3V0VG90YWwgPSAkKFwiI3RvdGFsQ2hlY2tvdXRQcmljZVwiKS5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZWRUb3RhbCA9IE51bWJlcihjaGVja291dFRvdGFsLnJlcGxhY2UoXCIkXCIsIFwiXCIpKSArIE51bWJlcihnZXRfY2hlY2tvdXQuY29uc2lnbm1lbnRzWzBdLnNlbGVjdGVkU2hpcHBpbmdPcHRpb24uY29zdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0b3RhbENoZWNrb3V0UHJpY2VcIikuaHRtbChcIiRcIiArIHVwZGF0ZWRUb3RhbC50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ1JhdGVcIikuaHRtbChcIkZyZWVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgXHJcbn0pO1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XHJcbiAgICB2YXIgT2JqRGF0YSA9IHt9O1xyXG4gICAgdmFyIE9iakRhdGFBcnIgPSBuZXcgQXJyYXkoKTtcclxuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHBpbmcnKTtcclxuICAgIGRpdnMuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX2ZuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEZpcnN0TmFtZVwiKS52YWx1ZTtcclxuICAgICAgICB2YXIgY3VzdG9tZXJfbG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0TGFzdE5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX2FkZHJfMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRBZGRyZXNzXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9hZGRyXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0QWRkcmVzcy0yXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9jaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dENpdHlOYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9jb21wYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dENvbXBhbnlOYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBjdXN0b21lcl9zdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRTdGF0ZU5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX3Bjb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFBvc3RhbENvZGVcIikudmFsdWU7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX3BudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0UGhvbmVOdW1iZXJcIikudmFsdWU7XHJcbiAgICAgICAgdmFyIGN1c3RvbWVyX2VtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRFbWFpbFwiKS52YWx1ZTtcclxuICAgICAgICB2YXIgY291bnRyeSA9ICQoXCIjc2hpcHBpbmdab25lIG9wdGlvbjpzZWxlY3RlZFwiKS5odG1sKCk7XHJcbiAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ1pvbmVcIikudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChjdXN0b21lcl9mbmFtZSAhPT0gXCJcIiAmJiBjdXN0b21lcl9sbmFtZSAhPT0gXCJcIiAmJiBjdXN0b21lcl9hZGRyXzEgIT09IFwiXCIgJiYgY3VzdG9tZXJfYWRkcl8yICE9PSBcIlwiICYmIGN1c3RvbWVyX2NpdHkgIT09IFwiXCIgJiYgY3VzdG9tZXJfc3RhdGUgIT09IFwiXCIgJiYgY3VzdG9tZXJfcGNvZGUgIT09IFwiXCIgJiYgY3VzdG9tZXJfcG51bWJlciAhPT0gXCJcIiAmJiBjdXN0b21lcl9lbWFpbCAhPT0gXCJcIiAmJiBjb3VudHJ5ICE9PSBcIlwiICYmIGNvdW50cnlDb2RlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHZhciBhZGRyZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBjdXN0b21lcl9mbmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBjdXN0b21lcl9sbmFtZSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxOiBjdXN0b21lcl9hZGRyXzEsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMjogY3VzdG9tZXJfYWRkcl8yLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogY3VzdG9tZXJfY2l0eSxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBjdXN0b21lcl9zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RhbENvZGU6IGN1c3RvbWVyX3Bjb2RlLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogY291bnRyeSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZSxcclxuICAgICAgICAgICAgICAgIHBob25lOiBjdXN0b21lcl9wbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1c3RvbWVyX2VtYWlsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgc2VydmljZS51cGRhdGVTaGlwcGluZ0FkZHJlc3MoYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpJywgc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKSk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nTWV0aG9kXCIpO1xyXG4gICAgICAgICAgICB2YXIgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdERpdiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hpcHBpbmdTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nU2VsZWN0LmlkID0gJ3NoaXBwaW5nTWV0aG9kJztcclxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ1NlbGVjdC5jbGFzc05hbWUgPSAnc2VsZWN0cGlja2VyIHNoaXBwaW5nbWV0aG9kIGRyb3Bkb3duLWhlYWRlciB3LTEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHQgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaGlwcGluZ0VsZW1lbnREcm9wRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmdNZXRob2REcm9wRG93blwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHBpbmdFbGVtZW50RHJvcERvd24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0VsZW1lbnREcm9wRG93bi5hcHBlbmRDaGlsZChzaGlwcGluZ1NlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0VsZW1lbnREcm9wRG93bi5hcHBlbmRDaGlsZChzaGlwcGluZ1NlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChzZWxlY3REaXYpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dCA9IHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKClbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ01ldGhvZFwiKS5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGludWVCdXR0b24uaW5uZXJIVE1MID0gJ0NvbnRpbnVlJztcclxuICAgICAgICAgICAgY29udGludWVCdXR0b24uY2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLm9uY2xpY2sgPSBoYW5kbGVDb250aW51ZUJ1dHRvbkNsaWNrO1xyXG4gICAgICAgICAgICB2YXIgc2hpcHBpbmdFbGVtZW50RHJvcERvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5nTWV0aG9kRHJvcERvd25cIik7XHJcbiAgICAgICAgICAgIGlmKHNoaXBwaW5nRWxlbWVudERyb3BEb3duKXtcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nRWxlbWVudERyb3BEb3duLmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxufVxyXG5cclxuJCgnLmNvbnRpbnVlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnNoaXBwaW5nRm9ybS5wYW5lbCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG59KVxyXG5cclxuJCgnLm1pbnVzJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICB2YXIgcHJvZHVjdElkID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtYW5vdGhlci1hdHRyaWJ1dGVcIik7XHJcbiAgICB2YXIgbGluZUl0ZW1JZCA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZvclwiKTtcclxuICAgIHZhciBjaGtPdXRJZCA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIpO1xyXG4gICAgdmFyIHByb2R1Y3RQcmljZSA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaWNlLWlkXCIpO1xyXG4gICAgdmFyIHF0eSA9ICQoJ1tuYW1lPSAnICsgcHJvZHVjdElkICsgJ10nKS52YWwoKTtcclxuICAgIHZhciB2YXJpYW50SWQgPSAkKCdbbmFtZT0gJyArIHByb2R1Y3RJZCArICddJykuYXR0cihcImRhdGEtdGl0bGVcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBsaW5lSXRlbToge1xyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHF0eSAtIDEsXHJcbiAgICAgICAgICAgIHZhcmlhbnRJZDogdmFyaWFudElkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIG1heEJvZHlMZW5ndGg6IEluZmluaXR5LFxyXG4gICAgICAgIHVybDogXCIvYXBpL3N0b3JlZnJvbnQvY2hlY2tvdXRzL1wiICsgY2hrT3V0SWQgKyBcIi9jYXJ0cy9cIiArIGNoa091dElkICsgXCIvaXRlbXMvXCIgKyBsaW5lSXRlbUlkLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfTtcclxuICAgIGF3YWl0IGF4aW9zLnJlcXVlc3QoY29uZmlnKVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XHJcbiAgICAgICAgICAgICAgICByZWxvYWRGbihkYXRhLCBwcm9kdWN0UHJpY2UsIFwibWludXNcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIG1pbnVzIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIucGx1c1wiLCBhc3luYyBmdW5jdGlvbiAoZXYpIHtcclxuICAgIHZhciBwcm9kdWN0SWQgPSBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbm90aGVyLWF0dHJpYnV0ZVwiKTtcclxuICAgIHZhciBsaW5lSXRlbUlkID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZm9yXCIpO1xyXG4gICAgdmFyIGNoa091dElkID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIik7XHJcbiAgICB2YXIgcHJvZHVjdFByaWNlID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpY2UtaWRcIik7XHJcbiAgICB2YXIgcXR5ID0gJCgnW25hbWU9ICcgKyBwcm9kdWN0SWQgKyAnXScpLnZhbCgpO1xyXG4gICAgdmFyIHZhcmlhbnRJZCA9ICQoJ1tuYW1lPSAnICsgcHJvZHVjdElkICsgJ10nKS5hdHRyKFwiZGF0YS10aXRsZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGxpbmVJdGVtOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxyXG4gICAgICAgICAgICBxdWFudGl0eTogTnVtYmVyKHF0eSkgKyAxLFxyXG4gICAgICAgICAgICB2YXJpYW50SWQ6IHZhcmlhbnRJZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBtYXhCb2R5TGVuZ3RoOiBJbmZpbml0eSxcclxuICAgICAgICB1cmw6IFwiL2FwaS9zdG9yZWZyb250L2NoZWNrb3V0cy9cIiArIGNoa091dElkICsgXCIvY2FydHMvXCIgKyBjaGtPdXRJZCArIFwiL2l0ZW1zL1wiICsgbGluZUl0ZW1JZCxcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH07XHJcbiAgICBhd2FpdCBheGlvcy5yZXF1ZXN0KGNvbmZpZylcclxuICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xyXG4gICAgICAgICAgICAgICAgcmVsb2FkRm4oZGF0YSwgcHJvZHVjdFByaWNlLCBcInBsdXNcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGx1cyBzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxufSk7XHJcbmZ1bmN0aW9uIHNob3dMb2FkZXIoKSB7XHJcbiAgICAkKFwiLmxvYWRlclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAkKFwiI21haW4tZGl2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUxvYWRlcigpIHtcclxuICAgICQoXCIubG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgJChcIiNtYWluLWRpdlwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbG9hZEZuKGRhdGEsIHByaWNlLCBtZXRob2QpIHtcclxuICAgIHNob3dMb2FkZXIoKVxyXG4gICAgJChcImlucHV0W25hbWUqPVwiICsgZGF0YS5saW5lSXRlbS5wcm9kdWN0SWQgKyBcIl1cIikudmFsKGRhdGEubGluZUl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgdmFyIG5ld1ByaWNlID0gMDtcclxuICAgIHZhciBwcm9kdWN0UHJpY2UgPSAwO1xyXG4gICAgdmFyIHN1YnRvdGFsUHJpY2UgPSAwO1xyXG4gICAgdmFyIHRvdGFsID0gMDtcclxuICAgIGlmIChtZXRob2QgPT0gXCJtaW51c1wiKSB7XHJcbiAgICAgICAgbmV3UHJpY2UgPSBwcmljZS5yZXBsYWNlKC9cXCQvZywgJycpO1xyXG4gICAgICAgIHRvdGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJ0b3RhbFwiKS5pbm5lclRleHQ7XHJcbiAgICAgICAgc3VidG90YWxQcmljZSA9IE51bWJlcih0b3RhbC5yZXBsYWNlKC9cXCQvZywgJycpKSAtIE51bWJlcihuZXdQcmljZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBuZXdQcmljZSA9IHByaWNlLnJlcGxhY2UoL1xcJC9nLCAnJyk7O1xyXG4gICAgICAgIHRvdGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJ0b3RhbFwiKS5pbm5lclRleHQ7XHJcbiAgICAgICAgc3VidG90YWxQcmljZSA9IE51bWJlcih0b3RhbC5yZXBsYWNlKC9cXCQvZywgJycpKSArIE51bWJlcihuZXdQcmljZSk7XHJcbiAgICB9XHJcbiAgICAkKCcjc3VidG90YWwnKS5odG1sKFwiJFwiICsgc3VidG90YWxQcmljZS50b0ZpeGVkKDIpKTtcclxuICAgICQoJyN0b3RhbENoZWNrb3V0UHJpY2UnKS5odG1sKFwiJFwiICsgc3VidG90YWxQcmljZS50b0ZpeGVkKDIpKTtcclxufVxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiI2NvdXBvbkJ0blwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY291cG9uQ29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cG9uQ29kZVwiKS52YWx1ZTtcclxuICAgIGlmIChjb3Vwb25Db2RlICE9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IHNlcnZpY2UuYXBwbHlDb3Vwb24oY291cG9uQ29kZSk7XHJcbiAgICAgICAgdmFyIGdldF9jaGVja291dCA9IHN0YXRlLmRhdGEuZ2V0Q2hlY2tvdXQoKTtcclxuICAgICAgICAkKCcjY291cG9uRGV0YWlscycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIHZhciBjb2RlID0gZ2V0X2NoZWNrb3V0LmNvdXBvbnNbMF0uY29kZTtcclxuICAgICAgICB2YXIgdHlwZSA9IGdldF9jaGVja291dC5jb3Vwb25zWzBdLmNvdXBvblR5cGU7XHJcbiAgICAgICAgdmFyIGRpc2NvdW50ZWRBbW91bnQgPSBnZXRfY2hlY2tvdXQuY291cG9uc1swXS5kaXNjb3VudGVkQW1vdW50O1xyXG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldF9jaGVja291dC5jb3Vwb25zWzBdLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cG9uTmFtZVwiKS5pbm5lclRleHQgPSBkaXNwbGF5TmFtZTtcclxuICAgICAgICB1cGRhdGVTdWJ0b3RhbCh0eXBlLCBkaXNjb3VudGVkQW1vdW50LCBnZXRfY2hlY2tvdXQpO1xyXG4gICAgfVxyXG59KTtcclxudmFyIGNvdXBvbkFwcGxpZWQgPSBmYWxzZTtcclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3VidG90YWwodHlwZSwgZGlzY291bnRlZEFtb3VudCwgZ2V0X2NoZWNrb3V0KSB7XHJcbiAgICB2YXIgdG90YWw7XHJcbiAgICB2YXIgc3ViVG90YWwgPSAwO1xyXG4gICAgaWYgKGNvdXBvbkFwcGxpZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JDbGFzc1wiKS5pbm5lckhUTUwgPSBcIkFscmVhZHkgYXBwbGllZFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT0gJ3Blcl90b3RhbF9kaXNjb3VudCcgJiYgY291cG9uQXBwbGllZCA9PSBmYWxzZSkge1xyXG4gICAgICAgIHNob3dMb2FkZXIoKVxyXG4gICAgICAgIHRvdGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJ0b3RhbFwiKS5pbm5lclRleHQ7XHJcbiAgICAgICAgc3ViVG90YWwgPSBOdW1iZXIodG90YWwucmVwbGFjZSgvXFwkL2csICcnKSkgLSBOdW1iZXIoZGlzY291bnRlZEFtb3VudCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbENoZWNrb3V0UHJpY2VcIikuaW5uZXJIVE1MID0gXCIkXCIgKyBzdWJUb3RhbDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2NvdW50VmFsdWVcIikuaW5uZXJUZXh0ID0gXCItJFwiICsgZGlzY291bnRlZEFtb3VudC50b0ZpeGVkKDIpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdwZXJfaXRlbV9kaXNjb3VudCcgJiYgY291cG9uQXBwbGllZCA9PSBmYWxzZSkge1xyXG4gICAgICAgIHNob3dMb2FkZXIoKVxyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9kdWN0LXByaWNlJyk7XHJcbiAgICAgICAgdG90YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnRvdGFsXCIpLmlubmVyVGV4dDtcclxuICAgICAgICB2YXIgdG90YWxfZGlzY291bnQgPSAwO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGkpIHtcclxuICAgICAgICAgICAgdG90YWxfZGlzY291bnQgPSB0b3RhbF9kaXNjb3VudCArIE51bWJlcihnZXRfY2hlY2tvdXQuY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpXS5jb3Vwb25BbW91bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1YlRvdGFsID0gTnVtYmVyKHRvdGFsLnJlcGxhY2UoL1xcJC9nLCAnJykpIC0gdG90YWxfZGlzY291bnQ7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjb3VudFZhbHVlXCIpLmlubmVyVGV4dCA9IFwiLSRcIiArIHRvdGFsX2Rpc2NvdW50LnRvRml4ZWQoMik7XHJcbiAgICAgICAgJCgnI3RvdGFsQ2hlY2tvdXRQcmljZScpLmh0bWwoXCIkXCIgKyBzdWJUb3RhbC50b0ZpeGVkKDIpKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAncGVyY2VudGFnZV9kaXNjb3VudCcpIHtcclxuICAgICAgICBzaG93TG9hZGVyKClcclxuICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvZHVjdC1wcmljZScpO1xyXG4gICAgICAgIHRvdGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJ0b3RhbFwiKS5pbm5lclRleHQ7XHJcbiAgICAgICAgdmFyIHRvdGFsX2Rpc2NvdW50ID0gMDtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpKSB7XHJcbiAgICAgICAgICAgIHRvdGFsX2Rpc2NvdW50ID0gdG90YWxfZGlzY291bnQgKyBOdW1iZXIoZ2V0X2NoZWNrb3V0LmNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXNbaV0uY291cG9uQW1vdW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdWJUb3RhbCA9IE51bWJlcih0b3RhbC5yZXBsYWNlKC9cXCQvZywgJycpKSAtIHRvdGFsX2Rpc2NvdW50O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY291bnRWYWx1ZVwiKS5pbm5lclRleHQgPSBcIi0kXCIgKyB0b3RhbF9kaXNjb3VudC50b0ZpeGVkKDIpO1xyXG4gICAgICAgICQoJyN0b3RhbENoZWNrb3V0UHJpY2UnKS5odG1sKFwiJFwiICsgc3ViVG90YWwudG9GaXhlZCgyKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRpc2NvdXQgaXMgTm90IFZhbGlkXCIpO1xyXG4gICAgfVxyXG4gICAgY291cG9uQXBwbGllZCA9IHRydWU7XHJcbn1cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIiNyZW1vdmVDb3Vwb25cIiwgYXN5bmMgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICB2YXIgY291cG9uQ29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cG9uQ29kZVwiKS52YWx1ZTtcclxuICAgIGlmIChjb3Vwb25Db2RlICE9ICcnKSB7XHJcbiAgICAgICAgYXdhaXQgc2VydmljZS5yZW1vdmVDb3Vwb24oY291cG9uQ29kZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vwb25Db2RlXCIpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vwb25OYW1lXCIpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY291bnRWYWx1ZVwiKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAkKFwiI2NvdXBvbklucHV0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIjcmVtb3ZlQ291cG9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuJChcImlucHV0W3R5cGU9cmFkaW9dW2lkPWNhcmREZXRhaWxzXVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICQoXCIjY2FyZC10ZW1wbGF0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIiNjb3Vwb25Db2RlSGVhZFwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2NvdXBvbklucHV0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxufSlcclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIiNhZHJlc3NjaGVja2JveFwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkcmVzc2NoZWNrYm94JykuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgdmFyIHNoaXBwaW5nRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRGaXJzdE5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgaWYgKHNoaXBwaW5nRGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0Rmlyc3ROYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgbGFzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0TGFzdE5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBhZGRyZXNzMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRBZGRyZXNzXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgYWRkcmVzczIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0QWRkcmVzcy0yXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmd0eHRDaXR5TmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGNvbXBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0Q29tcGFueU5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZTEyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFN0YXRlTmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHBvc3RhbENvZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0UGhvbmVOdW1iZXJcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBwbnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFBob25lTnVtYmVyXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgY3VzdG9tZXJFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0RW1haWxcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBjb3VudHJ5ID0gJChcIiNzaGlwcGluZ1pvbmUgb3B0aW9uOnNlbGVjdGVkXCIpLmh0bWwoKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ1pvbmVcIikudmFsdWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlsbGluZ3R4dEZpcnN0TmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsaW5ndHh0TGFzdE5hbWVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGxhc3ROYW1lKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsaW5ndHh0QWRkcmVzc1wiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYWRkcmVzczEpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRBZGRyZXNzLTJcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGFkZHJlc3MyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsaW5ndHh0Q2l0eU5hbWVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNpdHkpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRTdGF0ZU5hbWVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHN0YXRlMTIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRQb3N0YWxDb2RlXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwb3N0YWxDb2RlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsaW5ndHh0UGhvbmVOdW1iZXJcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHBudW1iZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRDb21wYW55TmFtZVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29tcGFueSk7XHJcbiAgICAgICAgICAgICQoXCIjYmlsbGluZ1pvbmVcIikudmFsKGNvdW50cnlDb2RlKTtcclxuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczE6IGFkZHJlc3MxLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczI6IGFkZHJlc3MyLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogY2l0eSxcclxuICAgICAgICAgICAgICAgIGNvbXBhbnk6IGNvbXBhbnksXHJcbiAgICAgICAgICAgICAgICBzdGF0ZU9yUHJvdmluY2U6IHN0YXRlMTIsXHJcbiAgICAgICAgICAgICAgICBwb3N0YWxDb2RlOiBwb3N0YWxDb2RlLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogY291bnRyeSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZSxcclxuICAgICAgICAgICAgICAgIHBob25lOiBwbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1c3RvbWVyRW1haWxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBzZXJ2aWNlLnVwZGF0ZUJpbGxpbmdBZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgICAgICAgICB2YXIgZ2V0X2NoZWNrb3V0ID0gc3RhdGUuZGF0YS5nZXRDaGVja291dCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hpcHBpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2hpcHBpbmdNZXRob2QodmFsdWUsIGlkLCBsYWJlbFRleHQsIHNwYW5UZXh0LCBjaGVja2VkID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBwaW5nTWV0aG9kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kRGl2LmNsYXNzTmFtZSA9ICdzaGlwcGluZy1tZXRob2QnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lID0gJ3NoaXBwaW5nTWV0aG9kJztcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5pZCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5odG1sRm9yID0gaWQ7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHNwYW5UZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kRGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzaGlwcGluZ01ldGhvZERpdjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBpY2t1cE1ldGhvZCA9IGNyZWF0ZVNoaXBwaW5nTWV0aG9kKHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdPcHRpb25zKClbaV0uaWQsc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKVtpXS5pZCxzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmRlc2NyaXB0aW9uLCBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmRlc2NyaXB0aW9uLCBzdGF0ZS5kYXRhLmdldFNoaXBwaW5nT3B0aW9ucygpW2ldLmNvc3QpOyBcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpY2t1cE1ldGhvZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0Rmlyc3ROYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dExhc3ROYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dEFkZHJlc3NcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0Q2l0eU5hbWVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0U3RhdGVOYW1lXCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ3R4dFBvc3RhbENvZGVcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBwaW5ndHh0UGhvbmVOdW1iZXJcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcclxuICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHBpbmdNZXRob2RcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHgucmVtb3ZlKHgubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIHhbaV0uaW5uZXJIVE1MID0gXCJObyBTaGlwcGluZyBNZXRob2RzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNvbnRpbnVlQnV0dG9uQ2xpY2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBzZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcygpXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkcmVzc2NoZWNrYm94JykuY2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoXCIuYmlsbGluZ0Zvcm1cIikuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZGF0YS5nZXRQYXltZW50TWV0aG9kcygpW2ldLnR5cGUgPT0gXCJQQVlNRU5UX1RZUEVfQVBJXCIgJiYgc3RhdGUuZGF0YS5nZXRQYXltZW50TWV0aG9kcygpW2ldLnN1cHBvcnRlZENhcmRzLmxlbmd0aCAhPT0gMCAmJiBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0ubWV0aG9kICE9PSAnZ29vZ2xlcGF5Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9ICdwYXltZW50TWV0aG9kJztcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2xhc3NOYW1lID0gJ2NhcmRQYXltZW50TWV0aG9kJztcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uaWQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdjYXJkUGF5bWVudE1ldGhvZExhYmVsJztcclxuICAgICAgICAgICAgICAgIGxhYmVsLnRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKVtpXS5jb25maWcuZGlzcGxheU5hbWU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGF5bWVudE1ldGhvZCcsICdjYXJkUGF5bWVudE1ldGhvZCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuY2xhc3NMaXN0LmFkZCgnZm9ybS1ib2R5Jyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmROdW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjYXJkTnVtYmVySW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdjYXJkLW51bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgY2FyZE51bWJlcklucHV0LnBsYWNlaG9sZGVyID0gJ0NhcmQgTnVtYmVyJztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgY2FyZE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdOYW1lIG9uIENhcmQnO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVGaWVsZC5jbGFzc0xpc3QuYWRkKCdkYXRlLWZpZWxkJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBtb250aFNlbGVjdC5uYW1lID0gJ01vbnRoJztcclxuICAgICAgICAgICAgICAgIG1vbnRoU2VsZWN0LmlkID0gJ2NhcmRNb250aCc7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRocyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbW9udGhzLmZvckVhY2goKG1vbnRoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IChpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBtb250aDtcclxuICAgICAgICAgICAgICAgICAgICBtb250aFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXJTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIHllYXJTZWxlY3QubmFtZSA9ICdZZWFyJztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudFllYXI7IGkgPD0gY3VycmVudFllYXIgKyA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAoaSAlIDEwMCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFZlcmlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY2FyZFZlcmlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJkLXZlcmlmaWNhdGlvbicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdnZJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjdnZJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgY3Z2SW5wdXQuaWQgPSAnY3Z2JztcclxuICAgICAgICAgICAgICAgIGN2dklucHV0LnBsYWNlaG9sZGVyID0gJ0NWVic7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN2dkRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGN2dkRldGFpbHMuY2xhc3NMaXN0LmFkZCgnY3Z2LWRldGFpbHMnKTtcclxuICAgICAgICAgICAgICAgIGN2dkRldGFpbHMuaW5uZXJIVE1MID0gJzxwPjMgb3IgNCBkaWdpdHMgdXN1YWxseSBmb3VuZCA8YnI+IG9uIHRoZSBzaWduYXR1cmUgc3RyaXA8L3A+JztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKG1vbnRoU2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZCh5ZWFyU2VsZWN0KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY2FyZFZlcmlmaWNhdGlvbi5hcHBlbmRDaGlsZChjdnZJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjYXJkVmVyaWZpY2F0aW9uLmFwcGVuZENoaWxkKGN2dkRldGFpbHMpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChjYXJkTnVtYmVySW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoY2FyZE5hbWVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoY2FyZFZlcmlmaWNhdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUJvZHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5bWVudE1ldGhvZExpc3QnKVswXS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKHBheW1lbnRNZXRob2RDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnBheW1lbnRNZXRob2RMaXN0JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICByYWRpb0J0bi50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9CdG4ubmFtZSA9IFwicGF5bWVudE1ldGhvZFwiO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9CdG4udmFsdWUgPSBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnJlYWtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJSXCIpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uY29uZmlnLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5bWVudE1ldGhvZExpc3QnKVswXS5hcHBlbmRDaGlsZChyYWRpb0J0bik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheW1lbnRNZXRob2RMaXN0JylbMF0uYXBwZW5kQ2hpbGQoYnJlYWtFbGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvY2VlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHByb2NlZWRCdG4uaW5uZXJIVE1MID0gJ1Byb2NlZWQnO1xyXG4gICAgICAgIHByb2NlZWRCdG4udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICAgICAgcHJvY2VlZEJ0bi5jbGFzc05hbWUgPSAncHJvY2VlZC1idG4nO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheW1lbnRNZXRob2RMaXN0JylbMF0uYXBwZW5kQ2hpbGQocHJvY2VlZEJ0bik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICB2YXIgc2VsZWN0ZWRNZXRob2Q7XHJcbiAgICBjb25zdCBzZWxlY3RlZFNoaXBwaW5nTWV0aG9kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNoaXBwaW5nTWV0aG9kXCJdOmNoZWNrZWQnKTtcclxuICAgIGlmIChzZWxlY3RlZFNoaXBwaW5nTWV0aG9kKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRNZXRob2QgPSBzZWxlY3RlZFNoaXBwaW5nTWV0aG9kLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkcmVzcyA9IHN0YXRlLmRhdGEuZ2V0U2hpcHBpbmdBZGRyZXNzKCk7XHJcbiAgICBjb25zdCBvcHRpb25zID0gc3RhdGUuZGF0YS5nZXRTaGlwcGluZ09wdGlvbnMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRNZXRob2RcIiwgc2VsZWN0ZWRNZXRob2QpO1xyXG4gICAgY29uc3QgdXBkYXRlU2hpcHBpbmdNZXRob2QgPSBhd2FpdCBzZXJ2aWNlLnNlbGVjdFNoaXBwaW5nT3B0aW9uKHNlbGVjdGVkTWV0aG9kKTtcclxuICAgIHZhciBnZXRfY2hlY2tvdXQgPSBzdGF0ZS5kYXRhLmdldENoZWNrb3V0KCk7XHJcbiAgICBpZiAoZ2V0X2NoZWNrb3V0LmNvbnNpZ25tZW50c1swXS5zZWxlY3RlZFNoaXBwaW5nT3B0aW9uLnR5cGUgPT0gXCJzaGlwcGluZ19mbGF0cmF0ZVwiKSB7XHJcbiAgICAgICAgJChcIiNzaGlwcGluZ1JhdGVcIikuaHRtbChcIiRcIiArIGdldF9jaGVja291dC5jb25zaWdubWVudHNbMF0uc2VsZWN0ZWRTaGlwcGluZ09wdGlvbi5jb3N0LnRvRml4ZWQoMikpO1xyXG4gICAgICAgIHZhciBjaGVja291dFRvdGFsID0gJChcIiN0b3RhbENoZWNrb3V0UHJpY2VcIikuaHRtbCgpO1xyXG4gICAgICAgIHZhciB1cGRhdGVkVG90YWwgPSBOdW1iZXIoY2hlY2tvdXRUb3RhbC5yZXBsYWNlKFwiJFwiLCBcIlwiKSkgKyBOdW1iZXIoZ2V0X2NoZWNrb3V0LmNvbnNpZ25tZW50c1swXS5zZWxlY3RlZFNoaXBwaW5nT3B0aW9uLmNvc3QpO1xyXG4gICAgICAgICQoXCIjdG90YWxDaGVja291dFByaWNlXCIpLmh0bWwoXCIkXCIgKyB1cGRhdGVkVG90YWwudG9GaXhlZCgyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjc2hpcHBpbmdSYXRlXCIpLmh0bWwoXCJGcmVlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgYmlsbGluZ0NvbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmlsbGluZ0NvbnRpbnVlJyk7XHJcbmlmIChiaWxsaW5nQ29udEJ0bikge1xyXG4gICAgYmlsbGluZ0NvbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZmlyc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsaW5ndHh0Rmlyc3ROYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgbGFzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRMYXN0TmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGFkZHJlc3MxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsaW5ndHh0QWRkcmVzc1wiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGFkZHJlc3MyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsaW5ndHh0QWRkcmVzcy0yXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlsbGluZ3R4dENpdHlOYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgY29tcGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlsbGluZ3R4dENvbXBhbnlOYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUxMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlsbGluZ3R4dFN0YXRlTmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHBvc3RhbENvZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRQaG9uZU51bWJlclwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpbGxpbmd0eHRQaG9uZU51bWJlclwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGN1c3RvbWVyRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEVtYWlsXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgY291bnRyeSA9ICQoXCIjYmlsbGluZ1pvbmUgb3B0aW9uOnNlbGVjdGVkXCIpLmh0bWwoKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsaW5nWm9uZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGFkZHJlc3MgPSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxOiBhZGRyZXNzMSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MyOiBhZGRyZXNzMixcclxuICAgICAgICAgICAgICAgIGNpdHk6IGNpdHksXHJcbiAgICAgICAgICAgICAgICBjb21wYW55OiBjb21wYW55LFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlMTIsXHJcbiAgICAgICAgICAgICAgICBwb3N0YWxDb2RlOiBwb3N0YWxDb2RlLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogY291bnRyeSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZSxcclxuICAgICAgICAgICAgICAgIHBob25lOiBwbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1c3RvbWVyRW1haWxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBzZXJ2aWNlLnVwZGF0ZUJpbGxpbmdBZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5kYXRhLmdldEJpbGxpbmdBZGRyZXNzKCkpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKVtpXS50eXBlID09IFwiUEFZTUVOVF9UWVBFX0FQSVwiICYmIHN0YXRlLmRhdGEuZ2V0UGF5bWVudE1ldGhvZHMoKVtpXS5zdXBwb3J0ZWRDYXJkcy5sZW5ndGggIT09IDAgJiYgc3RhdGUuZGF0YS5nZXRQYXltZW50TWV0aG9kcygpW2ldLm1ldGhvZCAhPT0gJ2dvb2dsZXBheScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9ICdwYXltZW50TWV0aG9kJztcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2xhc3NOYW1lID0gJ2NhcmRQYXltZW50TWV0aG9kJztcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ2NhcmRQYXltZW50TWV0aG9kTGFiZWwnO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwudGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gc3RhdGUuZGF0YS5nZXRQYXltZW50TWV0aG9kcygpW2ldLmNvbmZpZy5kaXNwbGF5TmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BheW1lbnRNZXRob2QnLCAnY2FyZFBheW1lbnRNZXRob2QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuY2xhc3NMaXN0LmFkZCgnZm9ybS1ib2R5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZE51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgY2FyZE51bWJlcklucHV0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtbnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICBjYXJkTnVtYmVySW5wdXQucGxhY2Vob2xkZXIgPSAnQ2FyZCBOdW1iZXInO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgY2FyZE5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgY2FyZE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdjYXJkLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIGNhcmROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSBvbiBDYXJkJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVGaWVsZC5jbGFzc0xpc3QuYWRkKCdkYXRlLWZpZWxkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGhTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIG1vbnRoU2VsZWN0Lm5hbWUgPSAnTW9udGgnO1xyXG4gICAgICAgICAgICAgICAgbW9udGhTZWxlY3QuaWQgPSAnY2FyZE1vbnRoJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgbW9udGhzLmZvckVhY2goKG1vbnRoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IChpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBtb250aDtcclxuICAgICAgICAgICAgICAgICAgICBtb250aFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgeWVhclNlbGVjdC5uYW1lID0gJ1llYXInO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnRZZWFyOyBpIDw9IGN1cnJlbnRZZWFyICsgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gKGkgJSAxMDApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXJTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRWZXJpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGNhcmRWZXJpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnY2FyZC12ZXJpZmljYXRpb24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdnZJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjdnZJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgY3Z2SW5wdXQuaWQgPSAnY3Z2JztcclxuICAgICAgICAgICAgICAgIGN2dklucHV0LnBsYWNlaG9sZGVyID0gJ0NWVic7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3Z2RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY3Z2RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdjdnYtZGV0YWlscycpO1xyXG4gICAgICAgICAgICAgICAgY3Z2RGV0YWlscy5pbm5lckhUTUwgPSAnPHA+MyBvciA0IGRpZ2l0cyB1c3VhbGx5IGZvdW5kIDxicj4gb24gdGhlIHNpZ25hdHVyZSBzdHJpcDwvcD4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZChtb250aFNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICBkYXRlRmllbGQuYXBwZW5kQ2hpbGQoeWVhclNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FyZFZlcmlmaWNhdGlvbi5hcHBlbmRDaGlsZChjdnZJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBjYXJkVmVyaWZpY2F0aW9uLmFwcGVuZENoaWxkKGN2dkRldGFpbHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGNhcmROdW1iZXJJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChjYXJkTmFtZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGRhdGVGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChjYXJkVmVyaWZpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Cb2R5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5bWVudE1ldGhvZExpc3QnKVswXS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKHBheW1lbnRNZXRob2RDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnBheW1lbnRNZXRob2RMaXN0JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICByYWRpb0J0bi50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9CdG4ubmFtZSA9IFwicGF5bWVudE1ldGhvZFwiO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9CdG4udmFsdWUgPSBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnJlYWtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJSXCIpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBzdGF0ZS5kYXRhLmdldFBheW1lbnRNZXRob2RzKClbaV0uY29uZmlnLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5bWVudE1ldGhvZExpc3QnKVswXS5hcHBlbmRDaGlsZChyYWRpb0J0bik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXltZW50TWV0aG9kTGlzdCcpWzBdLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheW1lbnRNZXRob2RMaXN0JylbMF0uYXBwZW5kQ2hpbGQoYnJlYWtFbGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvY2VlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHByb2NlZWRCdG4uaW5uZXJIVE1MID0gJ1Byb2NlZWQnO1xyXG4gICAgICAgIHByb2NlZWRCdG4udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICAgICAgcHJvY2VlZEJ0bi5jbGFzc05hbWUgPSAncHJvY2VlZC1idG4nO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheW1lbnRNZXRob2RMaXN0JylbMF0uYXBwZW5kQ2hpbGQocHJvY2VlZEJ0bik7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucHJvY2VlZC1idG4nLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbWV0aG9kSWQgPSAkKCdpbnB1dFtuYW1lPVwicGF5bWVudE1ldGhvZFwiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICB2YXIgY2FyZFBheW1lbnRNZXRob2RDbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmRQYXltZW50TWV0aG9kJyk7XHJcbiAgICB2YXIgY2FyZFBheW1lbnRNZXRob2RJZDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FyZFBheW1lbnRNZXRob2RDbGFzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChjYXJkUGF5bWVudE1ldGhvZENsYXNzW2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY2FyZFBheW1lbnRNZXRob2RJZCA9IGNhcmRQYXltZW50TWV0aG9kQ2xhc3NbaV0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGNhcmROdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkLW51bWJlcicpWzBdLnZhbHVlO1xyXG4gICAgdmFyIGNhcmROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZC1uYW1lJylbMF0udmFsdWU7XHJcbiAgICB2YXIgY2FyZEV4cE1vbnRoID0gJCgnc2VsZWN0W25hbWU9XCJNb250aFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgIHZhciBjYXJkRXhwWWVhciA9ICQoJ3NlbGVjdFtuYW1lPVwiWWVhclwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgIHZhciBjdnYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Z2JykudmFsdWU7XHJcbiAgICB2YXIgcGF5bWVudCA9IHt9O1xyXG4gICAgaWYgKG1ldGhvZElkID09ICd6aXAnKSB7XHJcbiAgICAgICAgYXdhaXQgc2VydmljZS5pbml0aWFsaXplUGF5bWVudCh7XHJcbiAgICAgICAgICAgIG1ldGhvZElkOiBtZXRob2RJZCxcclxuICAgICAgICAgICAgbWV0aG9kSWQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJ3dhbGxldFdpZGdldCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IHNlcnZpY2UuaW5pdGlhbGl6ZVBheW1lbnQoeyBtZXRob2RJZDogbWV0aG9kSWQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhcmRQYXltZW50TWV0aG9kSWQpIHtcclxuICAgICAgICBwYXltZW50ID0ge1xyXG4gICAgICAgICAgICBtZXRob2RJZDogY2FyZFBheW1lbnRNZXRob2RJZCxcclxuICAgICAgICAgICAgcGF5bWVudERhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNjRXhwaXJ5OiB7IG1vbnRoOiBjYXJkRXhwTW9udGgsIHllYXI6IGNhcmRFeHBZZWFyIH0sXHJcbiAgICAgICAgICAgICAgICBjY05hbWU6IGNhcmROYW1lLFxyXG4gICAgICAgICAgICAgICAgY2NOdW1iZXI6IGNhcmROdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjY1R5cGU6ICdWSVNBJyxcclxuICAgICAgICAgICAgICAgIGNjQ3Z2OiBjdnYsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobWV0aG9kSWQgPT0gJ3ppcCcpIHtcclxuICAgICAgICBhd2FpdCBzZXJ2aWNlLmxvYWRDaGVja291dCgpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBzZXJ2aWNlLmZpbmFsaXplT3JkZXJJZk5lZWRlZCgpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbignL29yZGVyLWNvbmZpcm1hdGlvbicpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci50eXBlICE9PSAnb3JkZXJfZmluYWxpemF0aW9uX25vdF9yZXF1aXJlZCcpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcGF5bWVudCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kSWQ6IG1ldGhvZElkXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgc2VydmljZS5zdWJtaXRPcmRlcih7IHBheW1lbnQgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvb3JkZXItY29uZmlybWF0aW9uJyk7XHJcbn0pXHJcblxyXG52YXIgYWNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjY29yZGlvblwiKTtcclxudmFyIGk7XHJcbmZvciAoaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcclxuICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB2YXIgcGFuZWxQYXJlbnRDbGFzcyA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICAgICAgdmFyIHBhbmVsID0gcGFuZWxQYXJlbnRDbGFzcy5uZXh0KCcucGFuZWwnKTtcclxuICAgICAgICAkKHBhbmVsKS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG59Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9pbmhlcml0c0xvb3NlIiwiX3NldFByb3RvdHlwZU9mIiwiYmluZCIsIlBhZ2VNYW5hZ2VyIiwiY3JlYXRlQ2hlY2tvdXRTZXJ2aWNlIiwiJCIsImF4aW9zIiwiZm9ybXMiLCJub2QiLCJ3aW4iLCJ3aW5kb3ciLCJsaXN0ZW5lcnMiLCJkb2MiLCJkb2N1bWVudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJfdGhpcyIsInNlcnZpY2UiLCJDaGVja291dCIsIl9QYWdlTWFuYWdlciIsIl9wcm90byIsIm9uUmVhZHkiLCJfb25SZWFkeSIsIl9jYWxsZWUiLCJzdGF0ZSIsImdldF9jaGVja291dCIsImdyYW5kVG90YWwiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibG9hZENoZWNrb3V0IiwiZGF0YSIsImdldENoZWNrb3V0IiwicG9zdENhcnRJdGVtcyIsImRlZmF1bHQiLCJfeCIsIl9wb3N0Q2FydEl0ZW1zIiwiX2NhbGxlZTE2IiwibXlGb3JtIiwic3ViVG90YWwiLCJjcmVhdGVQcm9kdWN0SXRlbSIsInByb2R1Y3RzIiwiX2k4IiwicHJvZHVjdCIsImN1c3RvbWVyX2ZuYW1lIiwiY3VzdG9tZXJfZW1haWwiLCJjdXN0b21lcl9sbmFtZSIsImN1c3RvbWVyX2FkZHJfMSIsImN1c3RvbWVyX2FkZHJfMiIsImN1c3RvbWVyX3N0YXRlIiwiY3VzdG9tZXJfY2l0eSIsImN1c3RvbWVyX3Bjb2RlIiwiY3VzdG9tZXJfcG51bWJlciIsImNvdW50cnkiLCJjdXN0b21lcl9jb21wYW55IiwiY291bnRyeUNvZGUiLCJjcmVhdGVTaGlwcGluZ01ldGhvZCIsImFkZHJlc3MiLCJjb250aW51ZUJ1dHRvbiIsInNoaXBwaW5nQ29udGFpbmVyIiwiX2k5IiwicGlja3VwTWV0aG9kIiwic2hpcHBpbmdFbGVtZW50RHJvcERvd24iLCJfY2FsbGVlMTYkIiwiX2NvbnRleHQxNyIsImFjdGlvbiIsInN1YnRvdGFsIiwiY2FydCIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJpdGVtRGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRldGFpbHNEaXYiLCJhcHBlbmRDaGlsZCIsImltZyIsImlkIiwic3JjIiwiaW1hZ2VTcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwibmFtZVNwYW4iLCJ0ZXh0Q29udGVudCIsInF1YW50aXR5RGl2IiwibWludXNCdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJkYXRhVGl0bGUiLCJkYXRhRm9yIiwiZGF0YVByaWNlSWQiLCJxdWFudGl0eUlucHV0IiwicXVhbnRpdHkiLCJwbHVzQnV0dG9uIiwicHJpY2VEaXYiLCJzYWxlUHJpY2UiLCJwcm9kdWN0SWQiLCJ2YXJpYW50X2lkIiwidmFyaWFudElkIiwibGluZUl0ZW1zX2lkIiwiY2hlY2tvdXRfaWQiLCJpbWFnZVVybCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0SXRlbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImN1c3RvbWVyIiwiZmlyc3ROYW1lIiwiZW1haWwiLCJsYXN0TmFtZSIsImFkZHJlc3NlcyIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJzdGF0ZU9yUHJvdmluY2UiLCJjaXR5IiwicG9zdGFsQ29kZSIsInBob25lIiwiY29tcGFueSIsImxhYmVsVGV4dCIsInNwYW5UZXh0IiwiY2hlY2tlZCIsInNoaXBwaW5nTWV0aG9kRGl2IiwiaW5wdXQiLCJsYWJlbCIsImh0bWxGb3IiLCJzcGFuIiwiY3NzIiwidmFsIiwidXBkYXRlU2hpcHBpbmdBZGRyZXNzIiwiZ2V0U2hpcHBpbmdPcHRpb25zIiwiZGVzY3JpcHRpb24iLCJjb3N0Iiwib25jbGljayIsImhhbmRsZUNvbnRpbnVlQnV0dG9uQ2xpY2siLCJvbiIsIl9yZWYxNCIsIl9jYWxsZWUxNSIsImVtYWlsSW5wdXQiLCJfY2FsbGVlMTUkIiwiX2NvbnRleHQxNiIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVGb3JtIiwiaW5zZXJ0QWZ0ZXIiLCJfeDE0IiwiX3JlZiIsIl9jYWxsZWUzIiwiZXYiLCJzaGlwcGluZ0RhdGEiLCJzdGF0ZTEyIiwicG51bWJlciIsImN1c3RvbWVyRW1haWwiLCJfaSIsIm5ld0J1dHRvbiIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImh0bWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2NhbGxlZTIiLCJzZWxlY3RlZFNoaXBwaW5nTWV0aG9kIiwic2VsZWN0ZWRNZXRob2QiLCJvcHRpb25zIiwidXBkYXRlU2hpcHBpbmdNZXRob2QiLCJjaGVja291dFRvdGFsIiwidXBkYXRlZFRvdGFsIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicXVlcnlTZWxlY3RvciIsImxvYWRQYXltZW50TWV0aG9kcyIsImdldFNoaXBwaW5nQWRkcmVzcyIsInNlbGVjdFNoaXBwaW5nT3B0aW9uIiwiY29uc2lnbm1lbnRzIiwic2VsZWN0ZWRTaGlwcGluZ09wdGlvbiIsInRvRml4ZWQiLCJOdW1iZXIiLCJyZXBsYWNlIiwiX3gyIiwiaXNWYWxpZCIsIk9iakRhdGEiLCJPYmpEYXRhQXJyIiwiQXJyYXkiLCJkaXZzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwiX3JlZjMiLCJfY2FsbGVlNCIsImV2ZW50Iiwic2VsZWN0RGl2Iiwic2hpcHBpbmdTZWxlY3QiLCJfaTIiLCJvcHRpb25FbGVtZW50IiwiX2kzIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwidGV4dCIsImVtcHR5IiwiX3gzIiwiY2xpY2siLCJfcmVmNCIsIl9jYWxsZWU2IiwibGluZUl0ZW1JZCIsImNoa091dElkIiwicHJvZHVjdFByaWNlIiwicXR5IiwiY29uZmlnIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiYXR0ciIsImxpbmVJdGVtIiwibWF4Qm9keUxlbmd0aCIsIkluZmluaXR5IiwidXJsIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1ZXN0IiwiX3JlZjUiLCJfY2FsbGVlNSIsInJlc3BvbnNlIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1Iiwic3RhdHVzIiwicmVsb2FkRm4iLCJfeDUiLCJlcnJvciIsIl94NCIsIl9yZWY2IiwiX2NhbGxlZTgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJfcmVmNyIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiX3g3IiwiX3g2Iiwic2hvd0xvYWRlciIsInNldFRpbWVvdXQiLCJoaWRlTG9hZGVyIiwicHJpY2UiLCJuZXdQcmljZSIsInN1YnRvdGFsUHJpY2UiLCJ0b3RhbCIsImlubmVyVGV4dCIsIl9jYWxsZWU5IiwiY291cG9uQ29kZSIsImNvZGUiLCJkaXNjb3VudGVkQW1vdW50IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiYXBwbHlDb3Vwb24iLCJjb3Vwb25zIiwiY291cG9uVHlwZSIsInVwZGF0ZVN1YnRvdGFsIiwiY291cG9uQXBwbGllZCIsIl94OCIsIl94OSIsIl94MTAiLCJfdXBkYXRlU3VidG90YWwiLCJfY2FsbGVlMTciLCJlbGVtZW50cyIsInRvdGFsX2Rpc2NvdW50IiwiX2NhbGxlZTE3JCIsIl9jb250ZXh0MTgiLCJlbGVtZW50IiwiY291cG9uQW1vdW50IiwiX3JlZjkiLCJfY2FsbGVlMTAiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsInJlbW92ZUNvdXBvbiIsIl94MTEiLCJjaGFuZ2UiLCJfY2FsbGVlMTEiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsIl9jYWxsZWUxMiIsIl9pNCIsIngiLCJfaTUiLCJfY2FsbGVlMTIkIiwiX2NvbnRleHQxMiIsInVwZGF0ZUJpbGxpbmdBZGRyZXNzIiwicmVtb3ZlIiwiX3gxMiIsIl9oYW5kbGVDb250aW51ZUJ1dHRvbkNsaWNrIiwiX2NhbGxlZTE4IiwiX2xvb3AyIiwicmFkaW9CdG4iLCJicmVha0VsZW0iLCJfaTEwIiwicHJvY2VlZEJ0biIsIl9jYWxsZWUxOCQiLCJfY29udGV4dDIwIiwicmFkaW9JbnB1dCIsIl9sYWJlbDIiLCJwYXltZW50TWV0aG9kQ29udGFpbmVyIiwiZm9ybUJvZHkiLCJjYXJkTnVtYmVySW5wdXQiLCJjYXJkTmFtZUlucHV0IiwiZGF0ZUZpZWxkIiwibW9udGhTZWxlY3QiLCJtb250aHMiLCJ5ZWFyU2VsZWN0IiwiY3VycmVudFllYXIiLCJfaTExIiwib3B0aW9uIiwiY2FyZFZlcmlmaWNhdGlvbiIsImN2dklucHV0IiwiY3Z2RGV0YWlscyIsIl9sb29wMiQiLCJfY29udGV4dDE5IiwiZ2V0UGF5bWVudE1ldGhvZHMiLCJzdXBwb3J0ZWRDYXJkcyIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJtb250aCIsImluZGV4IiwidG9TdHJpbmciLCJwYWRTdGFydCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImJpbGxpbmdDb250QnRuIiwiX3JlZjEyIiwiX2NhbGxlZTEzIiwiX2xvb3AiLCJfaTYiLCJfY2FsbGVlMTMkIiwiX2NvbnRleHQxNCIsImdldEJpbGxpbmdBZGRyZXNzIiwiX2xhYmVsIiwiX2k3IiwiX2xvb3AkIiwiX2NvbnRleHQxMyIsIl94MTMiLCJfY2FsbGVlMTQiLCJtZXRob2RJZCIsImNhcmRQYXltZW50TWV0aG9kQ2xhc3MiLCJjYXJkUGF5bWVudE1ldGhvZElkIiwiY2FyZE51bWJlciIsImNhcmROYW1lIiwiY2FyZEV4cE1vbnRoIiwiY2FyZEV4cFllYXIiLCJjdnYiLCJwYXltZW50IiwiX3NlcnZpY2UkaW5pdGlhbGl6ZVBhIiwiX2NhbGxlZTE0JCIsIl9jb250ZXh0MTUiLCJpbml0aWFsaXplUGF5bWVudCIsImNvbnRhaW5lciIsInBheW1lbnREYXRhIiwiY2NFeHBpcnkiLCJ5ZWFyIiwiY2NOYW1lIiwiY2NOdW1iZXIiLCJjY1R5cGUiLCJjY0N2diIsImZpbmFsaXplT3JkZXJJZk5lZWRlZCIsImxvY2F0aW9uIiwiYXNzaWduIiwidDAiLCJzdWJtaXRPcmRlciIsImFjYyIsInRvZ2dsZSIsInBhbmVsUGFyZW50Q2xhc3MiLCJwYXJlbnQiLCJwYW5lbCJdLCJzb3VyY2VSb290IjoiIn0=