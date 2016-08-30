/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Setting = require('../api/setting/setting.model');
var Product = require('../api/product/product.model');
var Category = require('../api/category/category.model');
var Brand = require('../api/brand/brand.model');
var PaymentMethod = require('../api/PaymentMethod/PaymentMethod.model');
var Setting = require('../api/setting/setting.model');
var Feature = require('../api/feature/feature.model');
var Coupon = require('../api/coupon/coupon.model');
var Shipping = require('../api/shipping/shipping.model');
var Country = require('../api/country/country.model');

Shipping.find(function (err, data) {
  if(data.length < 1){
    Shipping.create(
      {
        "_id" : "561f73dbe87e75d814a98f5a",
        "carrier" : "DTDC",
        "country" : "India",
        "charge" : 100,
        "minWeight" : 20,
        "maxWeight" : 200,
        "freeShipping" : 200,
        "active" : true,
        "__v" : 0,
        "name" : "DTDC"
      },
      {
          "_id" : "561f7ff6fb2f8dac199a618f",
          "carrier" : "UPS",
          "country" : "United States",
          "charge" : 500,
          "minWeight" : 0,
          "maxWeight" : 100,
          "freeShipping" : 5000,
          "__v" : 0,
          "active" : true
      },
      {
          "_id" : "561f801ffb2f8dac199a6190",
          "carrier" : "DHL",
          "country" : "Germany",
          "charge" : 300,
          "minWeight" : 0,
          "maxWeight" : 200,
          "freeShipping" : 3000,
          "active" : true,
          "__v" : 0
      },
      {
          "_id" : "561f804dfb2f8dac199a6191",
          "carrier" : "DHL",
          "country" : "India",
          "charge" : 50,
          "minWeight" : 100,
          "maxWeight" : 500,
          "freeShipping" : 1000,
          "active" : true,
          "__v" : 0
      }
    );
  }
});

Coupon.find(function (err, data) {
  if(data.length < 1){
    Coupon.create(
      {
        "_id" : "561cbd6fc3c4fab4009caa0e",
        "code" : "A100",
        "amount" : 100,
        "info" : "$100 discount on all products above $100",
        "active" : true,
        "type" : "Discount",
        "minimumCartValue" : 500,
        "__v" : 0
      }
    );
  }
});

Feature.find(function (err, data) {
  if(data.length < 1){
    Feature.create(
      {"key" : "Type", "val" : "Blouses", "active" : true},
      {"key" : "Type", "val" : "Gown", "active" : true},
      {"key" : "Fit", "val" : "Slim", "active" : true},
      {"key" : "Fit", "val" : "Tight", "active" : true},
      {"key" : "Fit", "val" : "Loose", "active" : true},
      {"key" : "Fit", "val" : "Regular", "active" : true},
      {"key" : "Fabric", "val" : "Cotton", "active" : true},
      {"key" : "Fabric", "val" : "Polyester", "active" : true},
      {"key" : "Neck", "val" : "Round Neck", "active" : true},
      {"key" : "Neck", "val" : "Collar", "active" : true},
      {"key" : "Color", "val" : "Red", "active" : true},
      {"key" : "Color", "val" : "Green", "active" : true},
      {"key" : "Color", "val" : "Blue", "active" : true},
      {"key" : "Color", "val" : "White", "active" : true}
    );
  }
});

Setting.find(function (err, data) {
  if(data.length < 1){
    Setting.create({
      "minOrderValue" : 20,
      "shippingCharge" : 15
    });
  }
});

PaymentMethod.find(function (err, data) {
  if(data.length < 1){
    PaymentMethod.create({
        name: 'COD',
        email: '-',
        active : true
    },
    {
        name: 'PayPal',
        email: '2lessons@gmail.com',
        active : true
    },
    {
        name: 'Google',
        email: '2lessons@gmail.com',
        options: {
              ship_method_name_1: "UPS Next Day Air",
              ship_method_price_1: "20.00",
              ship_method_currency_1: "USD",
              ship_method_name_2: "UPS Ground",
              ship_method_price_2: "15.00",
              ship_method_currency_2: "USD"
          },
        active : false
    },
    {
        name: 'Stripe',
        email: 'pk_test_srKHaSHynBIVLX03r33xLszb',
        options: { chargeurl : "http://biri.in/order" },
        active : true
    });
  }
});

// Setting.find(function (err, data) {
//   if(data.length < 1){
//     Setting.create({
//       paypal : '2lessons@gmail.com'
//     });
//   }
// });

//
// Thing.find(function (err, data) {
//   if(data.length < 1){
//     Thing.create({
//       name : 'Development Tools',
//       info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//     }, {
//       name : 'Server and Client integration',
//       info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//     }, {
//       name : 'Smart Build System',
//       info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//     },  {
//       name : 'Modular Structure',
//       info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//     },  {
//       name : 'Optimized Build',
//       info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//     },{
//       name : 'Deployment Ready',
//       info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//     });
//   }
// });

User.find(function (err, data) {
  if(data.length < 1){
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'user@codenx.com',
      password: 'codenx'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@codenx.com',
      password: 'codenx'
    }, function() {
        console.log('finished populating users');
    });
  }
});

Product.find(function (err, data) {
  if(data.length < 1){
    Product.create({
    "_id" : "5607a6af0dc20f1b0366522a",
    "name" : "ArrowGrey Slim Fit Formal Trouser",
    "info" : "Complete your formal attire by wearing these grey coloured formal trousers from Arrow. Made from poly viscose, these trousers can be worn with complete ease and comfort. Featuring a smooth finish and flat front, these trousers with cross pockets at the sides can be clubbed with a modish formal shirt for a perfect look. ",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "arrowgrey slim fit formal trouser",
    "active" : true,
    "sku" : 5,
    "type" : "Men",
    "slug" : "arrowgrey-slim-fit-formal-trouser",
    "variants" : [
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "30",
            "weight" : "130",
            "image" : "handsome-916499_640.jpg"
        },
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "32",
            "weight" : "130",
            "image" : "handsome-916499_640.jpg"
        },
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "34",
            "weight" : "130",
            "image" : "handsome-916499_640.jpg"
        },
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "36",
            "weight" : "130",
            "image" : "handsome-916499_640.jpg"
        },
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "38",
            "weight" : "130",
            "image" : "handsome-916499_640.jpg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Fabric",
            "val" : "Blended"
        },
        {
            "key" : "Fit",
            "val" : "Slim"
        },
        {
            "key" : "Color",
            "val" : "Grey"
        },
        {
            "key" : "Style",
            "val" : "Solid"
        },
        {
            "key" : "Model Stats",
            "val" : "This model has height 6'4\",Chest 38\",Waist 31\"and is Wearing Size 32."
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "casual-trousers",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 100,
        "name" : "Casual Trousers",
        "_id" : "560774dad4124c770bfc4b68"
    },
    "__v" : 0
}, function() {
        console.log('finished populating products');
    });
  }
});

Category.find(function (err, data) {
  if(data.length < 1){
    Category.create({
    "_id" : "560773abd4124c770bfc4b57",
    "name" : "Men",
    "category" : 2,
    "parentCategory" : 0,
    "active" : true,
    "__v" : 0,
    "slug" : "men"
  },{
      "_id" : "560773b6d4124c770bfc4b58",
      "name" : "Women",
      "category" : 1,
      "parentCategory" : 0,
      "active" : true,
      "__v" : 0,
      "slug" : "women"
  },{
      "_id" : "560773d2d4124c770bfc4b59",
      "name" : "Dresses",
      "category" : 100,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "dresses"
  },{
      "_id" : "560774dad4124c770bfc4b68",
      "name" : "Casual Trousers",
      "category" : 209,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "casual-trousers"
  }, function() {
        console.log('finished populating categories');
    });
  }
});

Brand.find(function (err, data) {
  if(data.length < 1){
    Brand.create({
    "_id" : "5607c58bdddfb6780c5bddf3",
    "name" : "Estelle",
    "info" : "Estelle",
    "slug" : "estelle",
    "active" : true,
    "__v" : 0
}, {
    "_id" : "5607c599dddfb6780c5bddf4",
    "name" : "FREECULTR",
    "info" : "FREECULTR",
    "slug" : "freecultr",
    "active" : true,
    "__v" : 0
},{
    "active" : true,
    "__v" : 0,
    "slug" : "alleviater",
    "info" : "Alleviater",
    "name" : "Alleviater",
    "_id" : "5607c5c1dddfb6780c5bddf8"
}, function() {
        console.log('finished populating brands');
    });
  }
});

Country.find(function (err, data) {
  if(data.length < 1){
    Country.create({"code":"AF","dial_code":"+93","name":"Afghanistan"},
    {"code":"AL","dial_code":"+355","name":"Albania"},
    {"code":"DZ","dial_code":"+213","name":"Algeria"},
    {"code":"AS","dial_code":"+1 684","name":"AmericanSamoa"},
    {"code":"AD","dial_code":"+376","name":"Andorra"},
    {"code":"AO","dial_code":"+244","name":"Angola"},
    {"code":"AI","dial_code":"+1 264","name":"Anguilla"},
    {"code":"AQ","dial_code":"+672","name":"Antarctica"},
    {"code":"AG","dial_code":"+1268","name":"Antigua and Barbuda"},
    {"code":"AR","dial_code":"+54","name":"Argentina"},
    {"code":"AM","dial_code":"+374","name":"Armenia"},
    {"code":"AW","dial_code":"+297","name":"Aruba"},
    {"code":"AU","dial_code":"+61","name":"Australia"},
    {"code":"AT","dial_code":"+43","name":"Austria"},
    {"code":"AZ","dial_code":"+994","name":"Azerbaijan"},
    {"code":"BS","dial_code":"+1 242","name":"Bahamas"},
    {"code":"BH","dial_code":"+973","name":"Bahrain"},
    {"code":"BD","dial_code":"+880","name":"Bangladesh"},
    {"code":"BB","dial_code":"+1 246","name":"Barbados"},
    {"code":"BY","dial_code":"+375","name":"Belarus"},
    {"code":"BE","dial_code":"+32","name":"Belgium"},
    {"code":"BZ","dial_code":"+501","name":"Belize"},
    {"code":"BJ","dial_code":"+229","name":"Benin"},
    {"code":"BM","dial_code":"+1 441","name":"Bermuda"},
    {"code":"BT","dial_code":"+975","name":"Bhutan"},
    {"code":"BO","dial_code":"+591","name":"Bolivia, Plurinational State of"},
    {"code":"BA","dial_code":"+387","name":"Bosnia and Herzegovina"},
    {"code":"BW","dial_code":"+267","name":"Botswana"},
    {"code":"BR","dial_code":"+55","name":"Brazil"},
    {"code":"IO","dial_code":"+246","name":"British Indian Ocean Territory"},
    {"code":"BN","dial_code":"+673","name":"Brunei Darussalam"},
    {"code":"BG","dial_code":"+359","name":"Bulgaria"},
    {"code":"BF","dial_code":"+226","name":"Burkina Faso"},
    {"code":"BI","dial_code":"+257","name":"Burundi"},
    {"code":"KH","dial_code":"+855","name":"Cambodia"},
    {"code":"CM","dial_code":"+237","name":"Cameroon"},
    {"code":"CA","dial_code":"+1","name":"Canada"},
    {"code":"CV","dial_code":"+238","name":"Cape Verde"},
    {"code":"KY","dial_code":"+ 345","name":"Cayman Islands"},
    {"code":"CF","dial_code":"+236","name":"Central African Republic"},
    {"code":"TD","dial_code":"+235","name":"Chad"},
    {"code":"CL","dial_code":"+56","name":"Chile"},
    {"code":"CN","dial_code":"+86","name":"China"},
    {"code":"CX","dial_code":"+61","name":"Christmas Island"},
    {"code":"CC","dial_code":"+61","name":"Cocos (Keeling) Islands"},
    {"code":"CO","dial_code":"+57","name":"Colombia"},
    {"code":"KM","dial_code":"+269","name":"Comoros"},
    {"code":"CG","dial_code":"+242","name":"Congo"},
    {"code":"CD","dial_code":"+243","name":"Congo, The Democratic Republic of the"},
    {"code":"CK","dial_code":"+682","name":"Cook Islands"},
    {"code":"CR","dial_code":"+506","name":"Costa Rica"},
    {"code":"CI","dial_code":"+225","name":"Cote d'Ivoire"},
    {"code":"HR","dial_code":"+385","name":"Croatia"},
    {"code":"CU","dial_code":"+53","name":"Cuba"},
    {"code":"CY","dial_code":"+357","name":"Cyprus"},
    {"code":"CZ","dial_code":"+420","name":"Czech Republic"},
    {"code":"DK","dial_code":"+45","name":"Denmark"},
    {"code":"DJ","dial_code":"+253","name":"Djibouti"},
    {"code":"DM","dial_code":"+1 767","name":"Dominica"},
    {"code":"DO","dial_code":"+1 849","name":"Dominican Republic"},
    {"code":"EC","dial_code":"+593","name":"Ecuador"},
    {"code":"EG","dial_code":"+20","name":"Egypt"},
    {"code":"SV","dial_code":"+503","name":"El Salvador"},
    {"code":"GQ","dial_code":"+240","name":"Equatorial Guinea"},
    {"code":"ER","dial_code":"+291","name":"Eritrea"},
    {"code":"EE","dial_code":"+372","name":"Estonia"},
    {"code":"ET","dial_code":"+251","name":"Ethiopia"},
    {"code":"FK","dial_code":"+500","name":"Falkland Islands (Malvinas)"},
    {"code":"FO","dial_code":"+298","name":"Faroe Islands"},
    {"code":"FJ","dial_code":"+679","name":"Fiji"},
    {"code":"FI","dial_code":"+358","name":"Finland"},
    {"code":"FR","dial_code":"+33","name":"France"},
    {"code":"GF","dial_code":"+594","name":"French Guiana"},
    {"code":"PF","dial_code":"+689","name":"French Polynesia"},
    {"code":"GA","dial_code":"+241","name":"Gabon"},
    {"code":"GM","dial_code":"+220","name":"Gambia"},
    {"code":"GE","dial_code":"+995","name":"Georgia"},
    {"code":"DE","dial_code":"+49","name":"Germany"},
    {"code":"GH","dial_code":"+233","name":"Ghana"},
    {"code":"GI","dial_code":"+350","name":"Gibraltar"},
    {"code":"GR","dial_code":"+30","name":"Greece"},
    {"code":"GL","dial_code":"+299","name":"Greenland"},
    {"code":"GD","dial_code":"+1 473","name":"Grenada"},
    {"code":"GP","dial_code":"+590","name":"Guadeloupe"},
    {"code":"GU","dial_code":"+1 671","name":"Guam"},
    {"code":"GT","dial_code":"+502","name":"Guatemala"},
    {"code":"GG","dial_code":"+44","name":"Guernsey"},
    {"code":"GN","dial_code":"+224","name":"Guinea"},
    {"code":"GW","dial_code":"+245","name":"Guinea-Bissau"},
    {"code":"GY","dial_code":"+595","name":"Guyana"},
    {"code":"HT","dial_code":"+509","name":"Haiti"},
    {"code":"VA","dial_code":"+379","name":"Holy See (Vatican City State)"},
    {"code":"HN","dial_code":"+504","name":"Honduras"},
    {"code":"HK","dial_code":"+852","name":"Hong Kong"},
    {"code":"HU","dial_code":"+36","name":"Hungary"},
    {"code":"IS","dial_code":"+354","name":"Iceland"},
    {"code":"IN","dial_code":"+91","name":"India"},
    {"code":"ID","dial_code":"+62","name":"Indonesia"},
    {"code":"IR","dial_code":"+98","name":"Iran, Islamic Republic of"},
    {"code":"IQ","dial_code":"+964","name":"Iraq"},
    {"code":"IE","dial_code":"+353","name":"Ireland"},
    {"code":"IM","dial_code":"+44","name":"Isle of Man"},
    {"code":"IL","dial_code":"+972","name":"Israel"},
    {"code":"IT","dial_code":"+39","name":"Italy"},
    {"code":"JM","dial_code":"+1 876","name":"Jamaica"},
    {"code":"JP","dial_code":"+81","name":"Japan"},
    {"code":"JE","dial_code":"+44","name":"Jersey"},
    {"code":"JO","dial_code":"+962","name":"Jordan"},
    {"code":"KZ","dial_code":"+7 7","name":"Kazakhstan"},
    {"code":"KE","dial_code":"+254","name":"Kenya"},
    {"code":"KI","dial_code":"+686","name":"Kiribati"},
    {"code":"KP","dial_code":"+850","name":"Korea, Democratic People's Republic of"},
    {"code":"KR","dial_code":"+82","name":"Korea, Republic of"},
    {"code":"KW","dial_code":"+965","name":"Kuwait"},
    {"code":"KG","dial_code":"+996","name":"Kyrgyzstan"},
    {"code":"LA","dial_code":"+856","name":"Lao People's Democratic Republic"},
    {"code":"LV","dial_code":"+371","name":"Latvia"},
    {"code":"LB","dial_code":"+961","name":"Lebanon"},
    {"code":"LS","dial_code":"+266","name":"Lesotho"},
    {"code":"LR","dial_code":"+231","name":"Liberia"},
    {"code":"LY","dial_code":"+218","name":"Libyan Arab Jamahiriya"},
    {"code":"LI","dial_code":"+423","name":"Liechtenstein"},
    {"code":"LT","dial_code":"+370","name":"Lithuania"},
    {"code":"LU","dial_code":"+352","name":"Luxembourg"},
    {"code":"MO","dial_code":"+853","name":"Macao"},
    {"code":"MK","dial_code":"+389","name":"Macedonia, The Former Yugoslav Republic of"},
    {"code":"MG","dial_code":"+261","name":"Madagascar"},
    {"code":"MW","dial_code":"+265","name":"Malawi"},
    {"code":"MY","dial_code":"+60","name":"Malaysia"},
    {"code":"MV","dial_code":"+960","name":"Maldives"},
    {"code":"ML","dial_code":"+223","name":"Mali"},
    {"code":"MT","dial_code":"+356","name":"Malta"},
    {"code":"MH","dial_code":"+692","name":"Marshall Islands"},
    {"code":"MQ","dial_code":"+596","name":"Martinique"},
    {"code":"MR","dial_code":"+222","name":"Mauritania"},
    {"code":"MU","dial_code":"+230","name":"Mauritius"},
    {"code":"YT","dial_code":"+262","name":"Mayotte"},
    {"code":"MX","dial_code":"+52","name":"Mexico"},
    {"code":"FM","dial_code":"+691","name":"Micronesia, Federated States of"},
    {"code":"MD","dial_code":"+373","name":"Moldova, Republic of"},
    {"code":"MC","dial_code":"+377","name":"Monaco"},
    {"code":"MN","dial_code":"+976","name":"Mongolia"},
    {"code":"ME","dial_code":"+382","name":"Montenegro"},
    {"code":"MS","dial_code":"+1664","name":"Montserrat"},
    {"code":"MA","dial_code":"+212","name":"Morocco"},
    {"code":"MZ","dial_code":"+258","name":"Mozambique"},
    {"code":"MM","dial_code":"+95","name":"Myanmar"},
    {"code":"NA","dial_code":"+264","name":"Namibia"},
    {"code":"NR","dial_code":"+674","name":"Nauru"},
    {"code":"NP","dial_code":"+977","name":"Nepal"},
    {"code":"NL","dial_code":"+31","name":"Netherlands"},
    {"code":"AN","dial_code":"+599","name":"Netherlands Antilles"},
    {"code":"NC","dial_code":"+687","name":"New Caledonia"},
    {"code":"NZ","dial_code":"+64","name":"New Zealand"},
    {"code":"NI","dial_code":"+505","name":"Nicaragua"},
    {"code":"NE","dial_code":"+227","name":"Niger"},
    {"code":"NG","dial_code":"+234","name":"Nigeria"},
    {"code":"NU","dial_code":"+683","name":"Niue"},
    {"code":"NF","dial_code":"+672","name":"Norfolk Island"},
    {"code":"MP","dial_code":"+1 670","name":"Northern Mariana Islands"},
    {"code":"NO","dial_code":"+47","name":"Norway"},
    {"code":"OM","dial_code":"+968","name":"Oman"},
    {"code":"PK","dial_code":"+92","name":"Pakistan"},
    {"code":"PW","dial_code":"+680","name":"Palau"},
    {"code":"PS","dial_code":"+970","name":"Palestinian Territory, Occupied"},
    {"code":"PA","dial_code":"+507","name":"Panama"},
    {"code":"PG","dial_code":"+675","name":"Papua New Guinea"},
    {"code":"PY","dial_code":"+595","name":"Paraguay"},
    {"code":"PE","dial_code":"+51","name":"Peru"},
    {"code":"PH","dial_code":"+63","name":"Philippines"},
    {"code":"PN","dial_code":"+872","name":"Pitcairn"},
    {"code":"PL","dial_code":"+48","name":"Poland"},
    {"code":"PT","dial_code":"+351","name":"Portugal"},
    {"code":"PR","dial_code":"+1 939","name":"Puerto Rico"},
    {"code":"QA","dial_code":"+974","name":"Qatar"},
    {"code":"RO","dial_code":"+40","name":"Romania"},
    {"code":"RU","dial_code":"+7","name":"Russia"},
    {"code":"RW","dial_code":"+250","name":"Rwanda"},
    {"code":"RE","dial_code":"+262","name":"Réunion"},
    {"code":"BL","dial_code":"+590","name":"Saint Barthélemy"},
    {"code":"SH","dial_code":"+290","name":"Saint Helena, Ascension and Tristan Da Cunha"},
    {"code":"KN","dial_code":"+1 869","name":"Saint Kitts and Nevis"},
    {"code":"LC","dial_code":"+1 758","name":"Saint Lucia"},
    {"code":"MF","dial_code":"+590","name":"Saint Martin"},
    {"code":"PM","dial_code":"+508","name":"Saint Pierre and Miquelon"},
    {"code":"VC","dial_code":"+1 784","name":"Saint Vincent and the Grenadines"},
    {"code":"WS","dial_code":"+685","name":"Samoa"},
    {"code":"SM","dial_code":"+378","name":"San Marino"},
    {"code":"ST","dial_code":"+239","name":"Sao Tome and Principe"},
    {"code":"SA","dial_code":"+966","name":"Saudi Arabia"},
    {"code":"SN","dial_code":"+221","name":"Senegal"},
    {"code":"RS","dial_code":"+381","name":"Serbia"},
    {"code":"SC","dial_code":"+248","name":"Seychelles"},
    {"code":"SL","dial_code":"+232","name":"Sierra Leone"},
    {"code":"SG","dial_code":"+65","name":"Singapore"},
    {"code":"SK","dial_code":"+421","name":"Slovakia"},
    {"code":"SI","dial_code":"+386","name":"Slovenia"},
    {"code":"SB","dial_code":"+677","name":"Solomon Islands"},
    {"code":"SO","dial_code":"+252","name":"Somalia"},
    {"code":"ZA","dial_code":"+27","name":"South Africa"},
    {"code":"GS","dial_code":"+500","name":"South Georgia and the South Sandwich Islands"},
    {"code":"ES","dial_code":"+34","name":"Spain"},
    {"code":"LK","dial_code":"+94","name":"Sri Lanka"},
    {"code":"SD","dial_code":"+249","name":"Sudan"},
    {"code":"SR","dial_code":"+597","name":"Suriname"},
    {"code":"SJ","dial_code":"+47","name":"Svalbard and Jan Mayen"},
    {"code":"SZ","dial_code":"+268","name":"Swaziland"},
    {"code":"SE","dial_code":"+46","name":"Sweden"},
    {"code":"CH","dial_code":"+41","name":"Switzerland"},
    {"code":"SY","dial_code":"+963","name":"Syrian Arab Republic"},
    {"code":"TW","dial_code":"+886","name":"Taiwan"},
    {"code":"TJ","dial_code":"+992","name":"Tajikistan"},
    {"code":"TZ","dial_code":"+255","name":"Tanzania, United Republic of"},
    {"code":"TH","dial_code":"+66","name":"Thailand"},
    {"code":"TL","dial_code":"+670","name":"Timor-Leste"},
    {"code":"TG","dial_code":"+228","name":"Togo"},
    {"code":"TK","dial_code":"+690","name":"Tokelau"},
    {"code":"TO","dial_code":"+676","name":"Tonga"},
    {"code":"TT","dial_code":"+1 868","name":"Trinidad and Tobago"},
    {"code":"TN","dial_code":"+216","name":"Tunisia"},
    {"code":"TR","dial_code":"+90","name":"Turkey"},
    {"code":"TM","dial_code":"+993","name":"Turkmenistan"},
    {"code":"TC","dial_code":"+1 649","name":"Turks and Caicos Islands"},
    {"code":"TV","dial_code":"+688","name":"Tuvalu"},
    {"code":"UG","dial_code":"+256","name":"Uganda"},
    {"code":"UA","dial_code":"+380","name":"Ukraine"},
    {"code":"AE","dial_code":"+971","name":"United Arab Emirates"},
    {"code":"GB","dial_code":"+44","name":"United Kingdom"},
    {"code":"US","dial_code":"+1","name":"United States"},
    {"code":"UY","dial_code":"+598","name":"Uruguay"},
    {"code":"UZ","dial_code":"+998","name":"Uzbekistan"},
    {"code":"VU","dial_code":"+678","name":"Vanuatu"},
    {"code":"VE","dial_code":"+58","name":"Venezuela, Bolivarian Republic of"},
    {"code":"VN","dial_code":"+84","name":"Viet Nam"},
    {"code":"VG","dial_code":"+1 284","name":"Virgin Islands, British"},
    {"code":"VI","dial_code":"+1 340","name":"Virgin Islands, U.S."},
    {"code":"WF","dial_code":"+681","name":"Wallis and Futuna"},
    {"code":"YE","dial_code":"+967","name":"Yemen"},
    {"code":"ZM","dial_code":"+260","name":"Zambia"},
    {"code":"ZW","dial_code":"+263","name":"Zimbabwe"},
    {"code":"AX","dial_code":"+358","name":"Aland Islands"}
, function() {
        console.log('finished populating countries');
    });
  }
});
