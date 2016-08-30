'use strict';

  function ShoppingCart(cartName) {
      this.cartName = cartName;
      this.clearCart = false;
      this.checkoutParameters = {};
      this.items = [];
      this.skuArray = [];
      this.totalWeight = 0;
      // load items from local storage when initializing
      this.loadItems();
  }

    //----------------------------------------------------------------
    // items in the cart
    //
    function CartItem(sku, name, slug, mrp, price, quantity, image, category, size, weight) {
      // console.log(size);
        this.sku = sku;
        this.name = name;
        this.slug = slug;
        this.image = image;
        this.category = category;
        this.size = size;
        this.mrp = mrp;
        this.price = price * 1;
        this.quantity = quantity * 1;
        this.weight = weight * 1;
        this.status = 0;
    }

    //----------------------------------------------------------------
    // checkout parameters (one per supported payment service)
    // replaced this.serviceName with serviceName because of jshint complaint
    //
    function checkoutParameters(serviceName, merchantID, options) {
        this.serviceName = serviceName;
        this.merchantID = merchantID;
        this.options = options;
    }

  // load items from local storage
  ShoppingCart.prototype.loadItems = function () {
      var items = localStorage !== null ? localStorage[this.cartName + '_items'] : null;
      if (items !== null && JSON !== null) {
          try {
              items = JSON.parse(items);
              for (var i = 0; i < items.length; i++) {
                  var item = items[i];
                  if (item.sku !== null && item.name !== null && item.price !== null) {
                      item = new CartItem(item.sku, item.name, item.slug, item.mrp, item.price, item.quantity, item.image, item.category, item.size, item.weight, item.status);
                      this.items.push(item);
                      this.skuArray.push(item.sku);
                      // this.totalWeight = item.weight;
                  }
              }

          }
          catch (err) {
              // ignore errors while loading...
          }
      }
  };

  // save items to local storage
  ShoppingCart.prototype.saveItems = function () {
      if (localStorage !== null && JSON !== null) {
          localStorage[this.cartName + '_items'] = JSON.stringify(this.items);
      }
  };

  // adds an item to the cart
  ShoppingCart.prototype.addItem = function (product,quantity) {
    // sku, name, slug, mrp, price, quantity, image, category, size, weight
      quantity = this.toNumber(quantity);
      if (quantity !== 0) {
          // update quantity for existing item
          var found = false;
          for (var i = 0; i < this.items.length && !found; i++) {
              var item = this.items[i];
              if (item.sku === product.sku) {
                  found = true;
                  item.quantity = this.toNumber(this.toNumber(item.quantity) + quantity);
                  if(item.weight==null){item.weight = 0;}
                  // console.log(quantity,item.weight);
                  // this.totalWeight += this.toNumber(quantity * this.toNumber(item.weight));
                  if (item.quantity <= 0) {
                      this.items.splice(i, 1);
                      this.skuArray.splice(i,1);
                  }
              }
          }

          // new item, add now
          if (!found) {
              var itm = new CartItem(product.sku, product.name, product.slug, product.mrp, product.price, product.quantity, product.image, product.category, product.size, product.weight, 0);
              this.items.push(itm);
              this.skuArray.push(itm.sku);
          }

          // save changes
          this.saveItems();
      }
  };

  // get the total price for all items currently in the cart
  ShoppingCart.prototype.getTotalWeight = function (sku) {
      var totalWeight = 0;
      for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          // console.log(item);
          if (sku === undefined || item.sku === sku) {
              totalWeight += this.toNumber(item.quantity * item.weight);
          }
      }
      return totalWeight;
  };

  // get the total price for all items currently in the cart
  ShoppingCart.prototype.getTotalPrice = function (sku) {
      var total = 0;
      for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (sku === undefined || item.sku === sku) {
              total += this.toNumber(item.quantity * item.price);
          }
      }
      return total;
  };

  // get the total price for all items currently in the cart
  ShoppingCart.prototype.getShippingCharge = function (shipping) {
    var totalWeight = 0, shippingCharge=1000000, minFreeShipping = 1000000, carrier, selectedShipping = {};
    totalWeight = this.getTotalWeight();
    // Calculate Shipping Charge based on totalWeight and available shipping methods
    for(var i=0; i<shipping.length; i++){
      // Check if any shipping method available which provides free shipping
      // console.log(shipping[i].freeShipping < minFreeShipping , shipping[i].minWeight < totalWeight , shipping[i].maxWeight > totalWeight);
      if(shipping[i].freeShipping < minFreeShipping && shipping[i].minWeight < totalWeight && shipping[i].maxWeight > totalWeight){
        minFreeShipping = shipping[i].freeShipping;
      }else{
        minFreeShipping = 0;
      }
      if(this.getTotalPrice()>=minFreeShipping){
        // console.log('Free shipping');
        shippingCharge = 0;
        // carrier = shipping[i].carrier;
      }else{
        // console.log('Shipping charged');
        if(shipping[i].charge < shippingCharge){
          shippingCharge = shipping[i].charge;
          carrier = '('+shipping[i].carrier+')';
        }
      }
      // console.log(shippingCharge, this.getTotalPrice(), minFreeShipping, shipping[i].minWeight ,shipping[i].maxWeight , shipping[i].charge, shipping[i].freeShipping);
    }
    selectedShipping = {charge:shippingCharge, carrier:carrier, weight:totalWeight, minFreeShipping: minFreeShipping};
    return selectedShipping;
  };

  ShoppingCart.prototype.getTotalPriceAfterShipping = function (shipping,couponAmount) { //Total Price Including Shipping

      var ship = {};
      if(typeof shipping === 'undefined'){
        shipping = {};
      }

      var total = 0, grandTotal = 0;
      total = this.getTotalPrice();
      if(typeof couponAmount === 'undefined'){
        couponAmount = 0;
      }
      // console.log(shipping);
      var selectedShipping = this.getShippingCharge(shipping);
      // console.log(selectedShipping);
      grandTotal = total + selectedShipping.charge - couponAmount;
      ship = {total: grandTotal, charge:selectedShipping.charge, carrier:selectedShipping.carrier, more: selectedShipping.minFreeShipping-total,couponAmount:couponAmount};

      // console.log(ship);
      return ship;
  };

  // get the total price for all items currently in the cart
  ShoppingCart.prototype.getTotalCount = function (sku) {
      var count = 0;
      for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (sku === undefined || item.sku === sku) {
              count += this.toNumber(item.quantity);
          }
      }
      return count;
  };

  // clear the cart
  ShoppingCart.prototype.clearItems = function () {
      this.items = [];
      this.skuArray = [];
      this.saveItems();
  };

  ShoppingCart.prototype.toNumber = function (value) {
      value = value * 1;
      return isNaN(value) ? 0 : value;
  };

  // define checkout parameters
ShoppingCart.prototype.addCheckoutParameters = function (serviceName, merchantID, options) {

    // check parameters
    if (serviceName != "PayPal" && serviceName != "Google" && serviceName != "Stripe" && serviceName != "COD") {
        throw "serviceName must be 'PayPal' or 'Google' or 'Stripe' or 'Cash On Delivery'.";
    }
    if (merchantID == null) {
        throw "A merchantID is required in order to checkout.";
    }

    // save parameters
    this.checkoutParameters[serviceName] = new checkoutParameters(serviceName, merchantID, options);
}

// check out
ShoppingCart.prototype.checkout = function (serviceName, clearCart) {
  serviceName = {name:serviceName.paymentMethod.name, email:serviceName.paymentMethod.email,options:serviceName.options};

  this.addCheckoutParameters(serviceName.name, serviceName.email, serviceName.options);

  // this.addCheckoutParameters("COD", "-");
  // // enable PayPal checkout
  // // note: the second parameter identifies the merchant; in order to use the
  // // shopping cart with PayPal, you have to create a merchant account with
  // // PayPal. You can do that here:
  // // https://www.paypal.com/webapps/mpp/merchant
  // this.addCheckoutParameters("PayPal", "2lessons@gmail.com");
  //
  // // enable Google Wallet checkout
  // // note: the second parameter identifies the merchant; in order to use the
  // // shopping cart with Google Wallet, you have to create a merchant account with
  // // Google. You can do that here:
  // // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
  // this.addCheckoutParameters("Google", "2lessons@gmail.com",
  //     {
  //         ship_method_name_1: "UPS Next Day Air",
  //         ship_method_price_1: "20.00",
  //         ship_method_currency_1: "USD",
  //         ship_method_name_2: "UPS Ground",
  //         ship_method_price_2: "15.00",
  //         ship_method_currency_2: "USD"
  //     }
  // );
  //
  // // enable Stripe checkout
  // // note: the second parameter identifies your publishable key; in order to use the
  // // shopping cart with Stripe, you have to create a merchant account with
  // // Stripe. You can do that here:
  // // https://manage.stripe.com/register
  // this.addCheckoutParameters("Stripe", "pk_test_srKHaSHynBIVLX03r33xLszb",
  //     {
  //         chargeurl: "http://biri.in/order"
  //     }
  // );

// console.log(serviceName);
    // select serviceName if we have to
    if (serviceName.name == null) {
        var p = this.checkoutParameters[Object.keys(this.checkoutParameters)[0]];
        serviceName = p.serviceName;
    }

    // sanity
    if (serviceName.name == null) {
        throw "Use the 'addCheckoutParameters' method to define at least one checkout service.";
    }

    // go to work
    var parms = this.checkoutParameters[serviceName.name];
// console.log(parms);
    if (parms == null) {
        throw "Cannot get checkout parameters for '" + serviceName.name + "'.";
    }
    switch (parms.serviceName) {
        case "PayPal":
              this.checkoutPayPal(parms, clearCart);
            break;
        case "Google":
            this.checkoutGoogle(parms, clearCart);
            break;
        case "Stripe":
            this.checkoutStripe(parms, clearCart);
            break;
        case "COD":
            this.checkoutCOD(parms, clearCart);
            break;
        default:
            throw "Unknown checkout service: " + parms.serviceName;
    }
}

// check out using PayPal
// for details see:
// www.paypal.com/cgi-bin/webscr?cmd=p/pdn/howto_checkout-outside
ShoppingCart.prototype.checkoutPayPal = function (parms, clearCart) {
    // console.log(parms.options);
    // global data
    var data = {
        cmd: "_cart",
        business: parms.merchantID,
        upload: "1",
        rm: "2",
        charset: "utf-8",
        cancel_return: 'http://biri.in/cart',
        return: 'http://biri.in/order'
    };

    // var selectedShipping = this.getTotalPriceAfterShipping();
    console.log(parms.options);
    // parms.options.couponAmount = -parms.options.couponAmount;
    this.items.push({name: 'Shipping', price: parms.options.charge});
    this.items.push({name: 'Discount', price: parms.options.couponAmount});
    // item data
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        var ctr = i + 1;
        data["item_number_" + ctr] = item.sku;
        data["item_name_" + ctr] = item.name;
        data["quantity_" + ctr] = item.quantity;
        data["amount_" + ctr] = item.price.toFixed(2);
        data["currency_code_" + ctr] = 'USD';
    }

    // build form
    var form = $('<form/></form>');
    form.attr("action", "https://www.sandbox.paypal.com/cgi-bin/webscr");
    form.attr("method", "POST");
    form.attr("style", "display:none;");
    this.addFormFields(form, data);
    if(!parms.options){parms.options = {};}
    // console.log(parms.options);
    this.addFormFields(form, parms.options);
    $("body").append(form);

    // submit form
    this.clearCart = clearCart == null || clearCart;
    form.submit();
    form.remove();
}

// check out using Google Wallet
// for details see:
// developers.google.com/checkout/developer/Google_Checkout_Custom_Cart_How_To_HTML
// developers.google.com/checkout/developer/interactive_demo
ShoppingCart.prototype.checkoutGoogle = function (parms, clearCart) {

    // global data
    var data = {};

    // item data
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        var ctr = i + 1;
        data["item_name_" + ctr] = item.sku;
        data["item_description_" + ctr] = item.name;
        data["item_price_" + ctr] = item.price.toFixed(2);
        data["item_quantity_" + ctr] = item.quantity;
        data["item_merchant_id_" + ctr] = parms.merchantID;
    }

    // build form
    var form = $('<form/></form>');
    // NOTE: in production projects, use the checkout.google url below;
    // for debugging/testing, use the sandbox.google url instead.
    //form.attr("action", "https://checkout.google.com/api/checkout/v2/merchantCheckoutForm/Merchant/" + parms.merchantID);
    form.attr("action", "https://sandbox.google.com/checkout/api/checkout/v2/checkoutForm/Merchant/" + parms.merchantID);
    form.attr("method", "POST");
    form.attr("style", "display:none;");
    this.addFormFields(form, data);
    if(!parms.options){parms.options = {};}
    this.addFormFields(form, parms.options);
    $("body").append(form);

    // submit form
    this.clearCart = clearCart == null || clearCart;
    form.submit();
    form.remove();
}

// check out using COD
ShoppingCart.prototype.checkoutCOD = function (parms, clearCart) {

      // global data
      var data = {};

      // item data
      for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          var ctr = i + 1;
          // data["item_name_" + ctr] = item.sku;
          data["item_description  _" + ctr] = item.name;
          // data["item_price_" + ctr] = item.price.toFixed(2);
          // data["item_quantity_" + ctr] = item.quantity;
          // data["item_merchant_id_" + ctr] = parms.merchantID;
      }

      // build form
      var form = $('<form/></form>');
      // NOTE: in production projects, use the checkout.google url below;
      // for debugging/testing, use the sandbox.google url instead.
      //form.attr("action", "https://checkout.google.com/api/checkout/v2/merchantCheckoutForm/Merchant/" + parms.merchantID);
      form.attr("action", "/order");
      form.attr("method", "GET");
      form.attr("style", "display:none;");
      this.addFormFields(form, data);
      if(!parms.options){parms.options = {};}
      this.addFormFields(form, parms.options);
      $("body").append(form);

      // submit form
      this.clearCart = clearCart == null || clearCart;
      form.submit();
      form.remove();
}

// check out using Stripe
// for details see:
// https://stripe.com/docs/checkout
ShoppingCart.prototype.checkoutStripe = function (parms, clearCart) {

    // global data
    var data = {};

    // item data
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        var ctr = i + 1;
        data["item_name_" + ctr] = item.sku;
        data["item_description_" + ctr] = item.name;
        data["item_price_" + ctr] = item.price.toFixed(2);
        data["item_quantity_" + ctr] = item.quantity;
    }

    // build form
    var form = $('.form-stripe');
    form.empty();
    // NOTE: in production projects, you have to handle the post with a few simple calls to the Stripe API.
    // See https://stripe.com/docs/checkout
    // You'll get a POST to the address below w/ a stripeToken.
    // First, you have to initialize the Stripe API w/ your public/private keys.
    // You then call Customer.create() w/ the stripeToken and your email address.
    // Then you call Charge.create() w/ the customer ID from the previous call and your charge amount.
    form.attr("action", parms.options['chargeurl']);
    form.attr("method", "POST");
    form.attr("style", "display:none;");
    this.addFormFields(form, data);
    if(!parms.options){parms.options = {};}
    this.addFormFields(form, parms.options);
    $("body").append(form);

    // ajaxify form
    // form.ajaxForm({
    //     success: function () {
    //         $.unblockUI();
    //         alert('Thanks for your order!');
    //     },
    //     error: function (result) {
    //         $.unblockUI();
    //         alert('Error submitting order: ' + result.statusText);
    //     }
    // });

    var token = function (res) {
        var $input = $('<input type=hidden name=stripeToken />').val(res.id);

        // show processing message and block UI until form is submitted and returns
        $.blockUI({ message: 'Processing order...' });

        // submit form
        form.append($input).submit();
        this.clearCart = clearCart == null || clearCart;
        form.submit();
    };

    var ship = this.getTotalPriceAfterShipping();
    StripeCheckout.open({
        key: parms.merchantID,
        address: false,
        amount: ship.grandTotal *100, /** expects an integer **/
        currency: 'usd',
        name: 'Purchase',
        description: 'Description',
        panelLabel: 'Checkout',
        token: token
    });
}

  // utility methods
  ShoppingCart.prototype.addFormFields = function (form, data) {
      if (data !== null) {
          $.each(data, function (name, value) {
              if (value !== null) {
                  var input = $('<input></input>').attr('type', 'hidden').attr('name', name).val(value);
                  form.append(input);
              }
          });
      }
    console.log(form);
  };

  angular.module('shopnxApp')
    .factory('Cart', function (Setting, $location) {
      var myCart = new ShoppingCart('ShopNx');

      // var settings = Setting.query().$promise.then(function(res){
      //     myCart.addCheckoutParameters('PayPal', res[0].paypal);
      // }, function (err) {
      //     console.log("fail", err);
      // });
      // console.log(myCart);
      return { cart: myCart };
    });
