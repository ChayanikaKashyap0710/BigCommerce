import PageManager from './page-manager';
import { createCheckoutService } from '@bigcommerce/checkout-sdk';
import $, { get } from 'jquery';
import axios from 'axios';
import forms from './common/models/forms';
import nod from './common/nod';
import { log } from 'grunt';

var win = window,
    listeners = [],
    doc = win.document,
    MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
    observer,
    _this;
const service = createCheckoutService();
export default class Checkout extends PageManager {
    async onReady() {
        const state = await service.loadCheckout();
        var get_checkout = state.data.getCheckout();
        //console.log('get_checkout', get_checkout);
        var grandTotal = get_checkout.grandTotal;
        postCartItems(get_checkout)
    }
}
async function postCartItems(get_checkout) {
    var myForm = get_checkout;
    myForm.method = "post";
    myForm.action = "http://localhost:3000/checkout";
    var product_name = get_checkout.cart.lineItems.physicalItems[0].name;
    var product_price = get_checkout.cart.lineItems.physicalItems[0].originalPrice;
    var product_quantity = get_checkout.cart.lineItems.physicalItems[0].quantity;
    var product_img = get_checkout.cart.lineItems.physicalItems[0].imageUrl;
    var productSalePrice = get_checkout.cart.lineItems.physicalItems[0].salePrice;
    var subTotal = get_checkout.subtotal;
    if (get_checkout.cart.lineItems.physicalItems.length > 1) {
        for (let i = 1; i < get_checkout.cart.lineItems.physicalItems.length; i++) {
            var new_product_qty = get_checkout.cart.lineItems.physicalItems[i].quantity;
            var product_id = get_checkout.cart.lineItems.physicalItems[i].productId;
            var variant_id = get_checkout.cart.lineItems.physicalItems[i].variantId;
            var lineItems_id = get_checkout.cart.lineItems.physicalItems[i].id;
            var salePrice = get_checkout.cart.lineItems.physicalItems[i].salePrice;
            var checkout_id = get_checkout.cart.id;
            var firstDiv = document.createElement("div");
            firstDiv.className = "row mt-3";
            var productNameDiv = document.createElement("div");
            var productPriceDiv = document.createElement("div");
            var productImgDiv = document.createElement("div");
            var productQtyDiv = document.createElement("div");
            var priceClass = document.createElement("div");
            var plusQtyClass = document.createElement("span");
            var minusQtyClass = document.createElement("span");
            var priceInputClass = document.createElement("input");
            var productPriceSpan = document.createElement("span");
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
            var new_product_img = get_checkout.cart.lineItems.physicalItems[i].imageUrl;
            var elem = document.createElement("img");
            elem.setAttribute("src", new_product_img);
            elem.setAttribute("height", "150");
            elem.setAttribute("width", "150");
            productImgDiv.append(elem);
            var new_product_name = get_checkout.cart.lineItems.physicalItems[i].name;
            var new_product_price = get_checkout.cart.lineItems.physicalItems[i].originalPrice;
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
            $("#product-row").append(firstDiv);
        }
    }
    var customer_fname = get_checkout.customer.firstName;
    var customer_email = get_checkout.customer.email;
    var customer_lname = get_checkout.customer.lastName;
    if (customer_email) {
        var customer_addr_1 = get_checkout.customer.addresses[0].address1;
        var customer_addr_2 = get_checkout.customer.addresses[0].address2;
        var customer_state = get_checkout.customer.addresses[0].state;
        var customer_city = get_checkout.customer.addresses[0].city;
        var customer_pcode = get_checkout.customer.addresses[0].postalCode;
        var customer_pnumber = get_checkout.customer.addresses[0].phone;
        var country = get_checkout.customer.addresses[0].country;
        var customer_company = get_checkout.customer.addresses[0].company;
        var countryCode = get_checkout.customer.addresses[0].countryCode;
    }
    document.getElementById("product-image").src = product_img;
    $("#product-name").append(product_name);
    $("#product-price").append(product_price);
    var checkout_id = get_checkout.cart.id;
    var new_product_qty = get_checkout.cart.lineItems.physicalItems[0].quantity;
    var product_id = get_checkout.cart.lineItems.physicalItems[0].productId;
    var variant_id = get_checkout.cart.lineItems.physicalItems[0].variantId;
    var lineItems_id = get_checkout.cart.lineItems.physicalItems[0].id;
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
    if (customer_email) {
        $(".shippingForm").css('display', 'block');
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
        $("#shippingZone").val(countryCode);
        var address = {
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
        const state = await service.updateShippingAddress(address);
        var selectDiv = document.getElementById("shippingMethod");
        var continueButton = document.createElement('button');
        if (selectDiv == null) {
            var shippingSelect = document.createElement('select');
            for (let i = 0; i < state.data.getShippingOptions().length; i++) {
                shippingSelect.id = 'shippingMethod';
                shippingSelect.className = 'selectpicker shippingmethod dropdown-header w-100';
                var optionElement = document.createElement('option');
                optionElement.value = state.data.getShippingOptions()[i].id;
                optionElement.text = state.data.getShippingOptions()[i].description;
                shippingSelect.appendChild(optionElement);
                document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
                shippingSelect.appendChild(optionElement);
                document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
            }
        } else {
            $(selectDiv).empty();
            for (let i = 0; i < state.data.getShippingOptions().length; i++) {
                var optionElement = document.createElement('option');
                optionElement.value = state.data.getShippingOptions()[i].id;
                optionElement.text = state.data.getShippingOptions()[i].description;
                document.getElementById("shippingMethod").appendChild(optionElement);
            }

        }
        continueButton.innerHTML = 'Continue';
        continueButton.className = 'shippingMethodContinue';
        document.getElementById("shippingMethodDropDown").appendChild(continueButton);
    } else {
        $(document).on('click', '.continue', async function (e) {
            e.preventDefault();
            var emailInput = document.getElementById("txtEmail");
            if (emailInput.value !== '') {
                console.log(emailInput.value);
                $('.shippingForm').css('display', 'block');
                validateForm()
            } else {
                if (document.getElementsByClassName('error-class')[0]) {
                } else {
                    $("<div class='error-class'>Please enter email</div>").insertAfter(emailInput);
                }

            }

        })
    }
}

// $(document).on("click", ".billingForm", async function () {
//     console.log("hi");
//     document.getElementById("txtEmail").setAttribute('value', customer_email);
//     document.getElementById("billingtxtFirstName").setAttribute('value', customer_fname);
//     document.getElementById("billingtxtLastName").setAttribute('value', customer_lname);
//     document.getElementById("billingtxtAddress").setAttribute('value', customer_addr_1);
//     document.getElementById("billingtxtAddress-2").setAttribute('value', customer_addr_2);
//     document.getElementById("billingtxtCityName").setAttribute('value', customer_city);
//     document.getElementById("billingtxtCompanyName").setAttribute('value', customer_company);
//     document.getElementById("billingtxtStateName").setAttribute('value', customer_state);
//     document.getElementById("billingtxtPostalCode").setAttribute('value', customer_pcode);
//     document.getElementById("billingtxtPhoneNumber").setAttribute('value', customer_pnumber);
//     $("#billingZone").val(countryCode);
//     var address = {
//         firstName: customer_fname,
//         lastName: customer_lname,
//         address1: customer_addr_1,
//         address2: customer_addr_2,
//         city: customer_city,
//         company: customer_company,
//         state: customer_state,
//         postalCode: customer_pcode,
//         country: country,
//         countryCode: countryCode,
//         phone: customer_pnumber,
//         email: customer_email
//     };
//     console.log("address", address);
//     // const state = await service.updateShippingAddress(address);
//     // var selectDiv = document.getElementById("shippingMethod");
//     // var continueButton = document.createElement('button');
//     // if (selectDiv == null) {
//     //     var shippingSelect = document.createElement('select');
//     //     for (let i = 0; i < state.data.getShippingOptions().length; i++) {
//     //         shippingSelect.id = 'shippingMethod';
//     //         shippingSelect.className = 'selectpicker shippingmethod dropdown-header w-100';
//     //         var optionElement = document.createElement('option');
//     //         optionElement.value = state.data.getShippingOptions()[i].id;
//     //         optionElement.text = state.data.getShippingOptions()[i].description;
//     //         shippingSelect.appendChild(optionElement);
//     //         document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
//     //         shippingSelect.appendChild(optionElement);
//     //         document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
//     //     }
//     // } else {
//     //     $(selectDiv).empty();
//     //     for (let i = 0; i < state.data.getShippingOptions().length; i++) {
//     //         var optionElement = document.createElement('option');
//     //         optionElement.value = state.data.getShippingOptions()[i].id;
//     //         optionElement.text = state.data.getShippingOptions()[i].description;
//     //         document.getElementById("shippingMethod").appendChild(optionElement);
//     //     }

//     // }
//     // continueButton.innerHTML = 'Continue';
//     // continueButton.className = 'shippingMethodContinue';
//     // document.getElementById("shippingMethodDropDown").appendChild(continueButton);

// })
function validateForm(){
    var isValid = true;
    var ObjData = {};
    var ObjDataArr = new Array();
    const divs = document.querySelectorAll('.shipping');
    divs.forEach(el => el.addEventListener('change', async event => {
        var customer_fname = document.getElementById("shippingtxtFirstName").value;
        var customer_lname = document.getElementById("shippingtxtLastName").value;
        var customer_addr_1 = document.getElementById("shippingtxtAddress").value;
        var customer_addr_2 = document.getElementById("shippingtxtAddress-2").value;
        var customer_city = document.getElementById("shippingtxtCityName").value;
        var customer_company = document.getElementById("shippingtxtCompanyName").value;
        var customer_state = document.getElementById("shippingtxtStateName").value;
        var customer_pcode = document.getElementById("shippingtxtPostalCode").value;
        var customer_pnumber = document.getElementById("shippingtxtPhoneNumber").value;
        var customer_email = document.getElementById("txtEmail").value;
        var country = $("#shippingZone option:selected").html();
        var countryCode = document.getElementById("shippingZone").value;
    
        if (customer_fname !== "" && customer_lname !== "" && customer_addr_1 !== "" && customer_addr_2 !== "" && customer_city !== "" && customer_state !== "" && customer_pcode !== "" && customer_pnumber !== "" && customer_email !== "" && country !== "" && countryCode !== "") {
            var address = {
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
            const state = await service.updateShippingAddress(address);
            console.log('address', address);
            var selectDiv = document.getElementById("shippingMethod");
            var continueButton = document.createElement('button');
            if (selectDiv == null) {
                var shippingSelect = document.createElement('select');
                for (let i = 0; i < state.data.getShippingOptions().length; i++) {
                    shippingSelect.id = 'shippingMethod';
                    shippingSelect.className = 'selectpicker shippingmethod dropdown-header w-100';
                    var optionElement = document.createElement('option');
                    optionElement.value = state.data.getShippingOptions()[i].id;
                    optionElement.text = state.data.getShippingOptions()[i].description;
                    shippingSelect.appendChild(optionElement);
                    document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
                    shippingSelect.appendChild(optionElement);
                    document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
                }
            } else {
                $(selectDiv).empty();
                for (let i = 0; i < state.data.getShippingOptions().length; i++) {
                    var optionElement = document.createElement('option');
                    optionElement.value = state.data.getShippingOptions()[i].id;
                    optionElement.text = state.data.getShippingOptions()[i].description;
                    document.getElementById("shippingMethod").appendChild(optionElement);
                }

            }
            continueButton.innerHTML = 'Continue';
            continueButton.className = 'shippingMethodContinue';
            document.getElementById("shippingMethodDropDown").appendChild(continueButton);
        }
    }));
}

$('.continue').click(function (){
    $('.shippingForm.panel').css('display', 'block');
})
$(document).on("click", ".minus", async function (ev) {
    var productId = ev.target.getAttribute("data-another-attribute");
    var lineItemId = ev.target.getAttribute("data-for");
    var chkOutId = ev.target.getAttribute("data-title");
    var productPrice = ev.target.getAttribute("data-price-id");
    var qty = $('[name= ' + productId + ']').val();
    var variantId = $('[name= ' + productId + ']').attr("data-title");
    let data = {};
    data = {
        lineItem: {
            productId: productId,
            quantity: qty - 1,
            variantId: variantId
        }
    }
    let config = {
        method: 'PUT',
        maxBodyLength: Infinity,
        url: "/api/storefront/checkouts/" + chkOutId + "/carts/" + chkOutId + "/items/" + lineItemId,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data)
    };
    await axios.request(config)
        .then(async (response) => {
            if (response.status == 200 || response.status == 204) {
                reloadFn(data, productPrice, "minus")
                console.log(" minus success");
            }

        })
        .catch((error) => {
            console.log(error);
        });


});

$(document).on("click", ".plus", async function (ev) {
    var productId = ev.target.getAttribute("data-another-attribute");
    var lineItemId = ev.target.getAttribute("data-for");
    var chkOutId = ev.target.getAttribute("data-title");
    var productPrice = ev.target.getAttribute("data-price-id");
    var qty = $('[name= ' + productId + ']').val();
    var variantId = $('[name= ' + productId + ']').attr("data-title");
    let data = {};
    data = {
        lineItem: {
            productId: productId,
            quantity: Number(qty) + 1,
            variantId: variantId
        }
    }
    let config = {
        method: 'PUT',
        maxBodyLength: Infinity,
        url: "/api/storefront/checkouts/" + chkOutId + "/carts/" + chkOutId + "/items/" + lineItemId,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data)
    };
    await axios.request(config)
        .then(async (response) => {
            if (response.status == 200 || response.status == 204) {
                reloadFn(data, productPrice, "plus")
                console.log("plus success");
            }

        })
        .catch((error) => {
            console.log(error);
        });


});
function showLoader() {
    $(".loader").css("display", "block");
    $("#main-div").css("display", "none");
    setTimeout(hideLoader, 3000);
}

function hideLoader() {
    $(".loader").css("display", "none");
    $("#main-div").css("display", "block");
}

function reloadFn(data, price, method) {
    showLoader()
    $("input[name*=" + data.lineItem.productId + "]").val(data.lineItem.quantity);
    var newPrice = 0;
    var productPrice = 0;
    var subtotalPrice = 0;
    var total = 0;
    if (method == "minus") {
        newPrice = price.replace(/\$/g, '');
        total = document.getElementById("subtotal").innerText;
        subtotalPrice = Number(total.replace(/\$/g, '')) - Number(newPrice);
    }
    else {
        newPrice = price.replace(/\$/g, '');;
        total = document.getElementById("subtotal").innerText;
        subtotalPrice = Number(total.replace(/\$/g, '')) + Number(newPrice);
    }
    $('#subtotal').html("$" + subtotalPrice.toFixed(2));
    $('#totalCheckoutPrice').html("$" + subtotalPrice.toFixed(2));
}
$(document).on("click", "#couponBtn", async function () {
    var couponCode = document.getElementById("couponCode").value;
    if (couponCode != "") {
        const state = await service.applyCoupon(couponCode);
        var get_checkout = state.data.getCheckout();
        $('#couponDetails').css('display', 'block');
        var code = get_checkout.coupons[0].code;
        var type = get_checkout.coupons[0].couponType;
        var discountedAmount = get_checkout.coupons[0].discountedAmount;
        var displayName = get_checkout.coupons[0].displayName;
        document.getElementById("couponName").innerText = displayName;
        updateSubtotal(type, discountedAmount, get_checkout);
    }
});
var couponApplied = false;
async function updateSubtotal(type, discountedAmount, get_checkout) {
    var total;
    var subTotal = 0;
    if (couponApplied == true) {
        document.getElementById("errorClass").innerHTML = "Already applied";
    }
    if (type == 'per_total_discount' && couponApplied == false) {
        showLoader()
        total = document.getElementById("subtotal").innerText;
        subTotal = Number(total.replace(/\$/g, '')) - Number(discountedAmount);
        document.getElementById("totalCheckoutPrice").innerHTML = "$" + subTotal;
        document.getElementById("discountValue").innerText = "-$" + discountedAmount.toFixed(2);
    } else if (type == 'per_item_discount' && couponApplied == false) {
        showLoader()
        var elements = document.querySelectorAll('#product-price');
        total = document.getElementById("subtotal").innerText;
        var total_discount = 0;
        elements.forEach(function (element, i) {
            total_discount = total_discount + Number(get_checkout.cart.lineItems.physicalItems[i].couponAmount);
        });
        subTotal = Number(total.replace(/\$/g, '')) - total_discount;
        document.getElementById("discountValue").innerText = "-$" + total_discount.toFixed(2);
        $('#totalCheckoutPrice').html("$" + subTotal.toFixed(2));
    } else if (type == 'percentage_discount') {
        showLoader()
        var elements = document.querySelectorAll('#product-price');
        total = document.getElementById("subtotal").innerText;
        var total_discount = 0;
        elements.forEach(function (element, i) {
            total_discount = total_discount + Number(get_checkout.cart.lineItems.physicalItems[i].couponAmount);
        });
        subTotal = Number(total.replace(/\$/g, '')) - total_discount;
        document.getElementById("discountValue").innerText = "-$" + total_discount.toFixed(2);
        $('#totalCheckoutPrice').html("$" + subTotal.toFixed(2));
    }
    else {
        console.log("Discout is Not Valid");
    }
    couponApplied = true;
}
$(document).on("click", "#removeCoupon", async function (ev) {
    var couponCode = document.getElementById("couponCode").value;
    if (couponCode != '') {
        await service.removeCoupon(couponCode);
        document.getElementById("couponCode").value = '';
        document.getElementById("couponName").innerHTML = '';
        document.getElementById("discountValue").innerHTML = '';
        $("#couponInput").css("display", "none");
        $("#removeCoupon").css("display", "none");
    }
})

$("input[type=radio][id=cardDetails]").change(function () {
    if (this.checked) {
        $("#card-template").css("display", "block");
    }
});

$(document).on("click", "#couponCodeHead", async function () {
    $("#couponInput").css("display", "block");
})
$(document).on("click", "#adresscheckbox", async function () {
    if (document.getElementById('adresscheckbox').checked == true) {
        var shippingData = document.getElementById("shippingtxtFirstName").value;
        if (shippingData != null) {
            var firstName = document.getElementById("shippingtxtFirstName").value;
            var lastName = document.getElementById("shippingtxtLastName").value;
            var address1 = document.getElementById("shippingtxtAddress").value;
            var address2 = document.getElementById("shippingtxtAddress-2").value;
            var city = document.getElementById("shippingtxtCityName").value;
            var company = document.getElementById("shippingtxtCompanyName").value;
            var state12 = document.getElementById("shippingtxtStateName").value;
            var postalCode = document.getElementById("shippingtxtPhoneNumber").value;
            var pnumber = document.getElementById("shippingtxtPhoneNumber").value;
            var customerEmail = document.getElementById("txtEmail").value;
            var country = $("#shippingZone option:selected").html();
            var countryCode = document.getElementById("shippingZone").value;
            document.getElementById("billingtxtFirstName").setAttribute('value', firstName);
            document.getElementById("billingtxtLastName").setAttribute('value', lastName);
            document.getElementById("billingtxtAddress").setAttribute('value', address1);
            document.getElementById("billingtxtAddress-2").setAttribute('value', address2);
            document.getElementById("billingtxtCityName").setAttribute('value', city);
            document.getElementById("billingtxtStateName").setAttribute('value', state12);
            document.getElementById("billingtxtPostalCode").setAttribute('value', postalCode);
            document.getElementById("billingtxtPhoneNumber").setAttribute('value', pnumber);
            document.getElementById("billingtxtCompanyName").setAttribute('value', company);
            $("#billingZone").val(countryCode);
            const address = {
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
            const state = await service.updateBillingAddress(address);
            var get_checkout = state.data.getCheckout();
            var selectDiv = document.getElementById("shippingMethod");
            if (selectDiv == null) {
                var shippingSelect = document.createElement('select');
                var continueButton = document.createElement('button');
                for (let i = 0; i < state.data.getShippingOptions().length; i++) {
                    shippingSelect.id = 'shippingMethod';
                    shippingSelect.className = 'selectpicker shippingmethod dropdown-header w-100';
                    var optionElement = document.createElement('option');
                    optionElement.value = state.data.getShippingOptions()[i].id;
                    optionElement.text = state.data.getShippingOptions()[i].description;
                    continueButton.innerHTML = 'Continue';
                    continueButton.className = 'shippingMethodContinue';
                    shippingSelect.appendChild(optionElement);
                    document.getElementById("shippingMethodDropDown").appendChild(shippingSelect);
                    document.getElementById("shippingMethodDropDown").appendChild(continueButton);
                }
            } else {
                $(selectDiv).empty();
                for (let i = 0; i < state.data.getShippingOptions().length; i++) {
                    var optionElement = document.createElement('option');
                    optionElement.text = state.data.getShippingOptions()[i].description;
                    optionElement.value = state.data.getShippingOptions()[i].id;
                    document.getElementById("shippingMethod").appendChild(optionElement);
                }

            }
        }

    } else {
        document.getElementById("shippingtxtFirstName").setAttribute('value', '');
        document.getElementById("shippingtxtLastName").setAttribute('value', '');
        document.getElementById("shippingtxtAddress").setAttribute('value', '');
        document.getElementById("shippingtxtCityName").setAttribute('value', '');
        document.getElementById("shippingtxtStateName").setAttribute('value', '');
        document.getElementById("shippingtxtPostalCode").setAttribute('value', '');
        document.getElementById("shippingtxtPhoneNumber").setAttribute('value', '');
        var x = document.getElementById("shippingMethod");
        for (let i = 0; i < x.length; i++) {
            x.remove(x.length - 1);
            x[i].innerHTML = "No Shipping Methods";
        }
    }
})

document.querySelector('.shippingMethodContinue').addEventListener('click', async function(e) {
    e.preventDefault();
    var selectedMethod = $("#shippingMethod :selected").val();
    const state = await service.loadPaymentMethods();
    const address = state.data.getShippingAddress();
    const options = state.data.getShippingOptions();
    const updateShippingMethod = await service.selectShippingOption(selectedMethod);
    var get_checkout = state.data.getCheckout();
    if( get_checkout.consignments[0].selectedShippingOption.type == "shipping_flatrate"){
        $("#shippingRate").html("$"+get_checkout.consignments[0].selectedShippingOption.cost.toFixed(2));
        var checkoutTotal = $("#totalCheckoutPrice").html();
        var updatedTotal = Number(checkoutTotal.replace("$", "")) + Number(get_checkout.consignments[0].selectedShippingOption.cost);
        $("#totalCheckoutPrice").html("$"+updatedTotal.toFixed(2));
    }else{
        $("#shippingRate").html("Free");
    }
    for (let i = 0; i < state.data.getPaymentMethods().length; i++) {
        if (state.data.getPaymentMethods()[i].type == "PAYMENT_TYPE_API" && state.data.getPaymentMethods()[i].supportedCards.length !== 0 && state.data.getPaymentMethods()[i].method !== 'googlepay') {
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'paymentMethod';
            radioInput.className = 'cardPaymentMethod';
            radioInput.value = state.data.getPaymentMethods()[i].id;

            const label = document.createElement('label');
            label.className = 'cardPaymentMethodLabel';
            label.title = '';
            label.textContent = state.data.getPaymentMethods()[i].config.displayName;

            const paymentMethodContainer = document.createElement('div');
            paymentMethodContainer.classList.add('paymentMethod', 'cardPaymentMethod');

            const formBody = document.createElement('div');
            formBody.classList.add('form-body');

            const cardNumberInput = document.createElement('input');
            cardNumberInput.type = 'text';
            cardNumberInput.classList.add('card-number');
            cardNumberInput.placeholder = 'Card Number';

            const cardNameInput = document.createElement('input');
            cardNameInput.type = 'text';
            cardNameInput.classList.add('card-name');
            cardNameInput.placeholder = 'Name on Card';

            const dateField = document.createElement('div');
            dateField.classList.add('date-field');

            const monthSelect = document.createElement('select');
            monthSelect.name = 'Month';
            monthSelect.id = 'cardMonth';

            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];

            months.forEach((month, index) => {
                const option = document.createElement('option');
                option.value = (index + 1).toString().padStart(2, '0');
                option.textContent = month;
                monthSelect.appendChild(option);
            });

            const yearSelect = document.createElement('select');
            yearSelect.name = 'Year';

            const currentYear = new Date().getFullYear();
            for (let i = currentYear; i <= currentYear + 6; i++) {
                const option = document.createElement('option');
                option.value = (i % 100).toString().padStart(2, '0');
                option.textContent = i;
                yearSelect.appendChild(option);
            }
            const cardVerification = document.createElement('div');
            cardVerification.classList.add('card-verification');

            const cvvInput = document.createElement('input');
            cvvInput.type = 'text';
            cvvInput.id = 'cvv';
            cvvInput.placeholder = 'CVV';

            const cvvDetails = document.createElement('div');
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
            document.getElementsByClassName('paymentMethodList')[0].appendChild(label);
            document.getElementsByClassName('paymentMethodList')[0].appendChild(paymentMethodContainer);
            $('.paymentMethodList').css('display', 'block');
        } else {
            var radioBtn = document.createElement("input");
            radioBtn.type = "radio";
            radioBtn.name = "paymentMethod";
            radioBtn.value = state.data.getPaymentMethods()[i].id;
            var label = document.createElement("label");
            var breakElem = document.createElement("BR");
            label.textContent = state.data.getPaymentMethods()[i].config.displayName;
            document.getElementsByClassName('paymentMethodList')[0].appendChild(radioBtn);
            document.getElementsByClassName('paymentMethodList')[0].appendChild(label);
            document.getElementsByClassName('paymentMethodList')[0].appendChild(breakElem);
        }
    }
    var proceedBtn = document.createElement('button');
    proceedBtn.innerHTML = 'Proceed';
    proceedBtn.type = "submit";
    proceedBtn.className = 'proceed-btn';
    document.getElementsByClassName('paymentMethodList')[0].appendChild(proceedBtn);
});

$(document).on('click', '.proceed-btn', async function () {
    var methodId = $('input[name="paymentMethod"]:checked').val();
    var cardPaymentMethodClass = document.getElementsByClassName('cardPaymentMethod');
    var cardPaymentMethodId;
    for (var i = 0; i < cardPaymentMethodClass.length; i++) {
        if (cardPaymentMethodClass[i].checked) {
            cardPaymentMethodId = cardPaymentMethodClass[i].value;
        }
    }
    var cardNumber = document.getElementsByClassName('card-number')[0].value;
    var cardName = document.getElementsByClassName('card-name')[0].value;
    var cardExpMonth = $('select[name="Month"] option:selected').val();
    var cardExpYear = $('select[name="Year"] option:selected').val();
    var cvv = document.getElementById('cvv').value;
    var payment = {};
    if (methodId == 'zip') {
        await service.initializePayment({
            methodId: methodId,
            methodId: {
                container: 'walletWidget',
            },
        });
    } else {
        await service.initializePayment({ methodId: methodId });
    }

    if (cardPaymentMethodId) {
        payment = {
            methodId: cardPaymentMethodId,
            paymentData: {
                ccExpiry: { month: cardExpMonth, year: cardExpYear },
                ccName: cardName,
                ccNumber: cardNumber,
                ccType: 'VISA',
                ccCvv: cvv,
            }
        };
    }
    else if (methodId == 'zip') {
        await service.loadCheckout();

        try {
            await service.finalizeOrderIfNeeded();

            window.location.assign('/order-confirmation');
        } catch (error) {
            if (error.type !== 'order_finalization_not_required') {
                throw error;
            }
        }
    }
    else {
        payment = {
            methodId: methodId
        };
    }
    const state = await service.submitOrder({ payment });
    window.location.assign('/order-confirmation');
})

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panelParentClass = $(this).parent().parent().parent();
        var panel = panelParentClass.next('.panel');
        $(panel).toggle();
    });
}