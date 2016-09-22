'use strict';

angular.module('shopnxApp')
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
	//---------------header----------------------
      BRANDS: 'Brands',
      JIANYI_GROUP: 'JIANYI GROUP',
      LOGIN: 'Login',
      INDUSTRY_LEADER: 'Industry Leader',
	  SIGN_UP: 'Sign up',
	  SETTINGS: 'Settings',
	  DASHBOARD: 'Dashboard',
	  LOGOUT: 'Logout',
	  CONTACT: 'Contact',
	  DOCUMENTATION: 'Documentation',
	  CHANGE_PASSWORD: 'Change Password',
	  ORDER: 'Order',
	  COUPONS: 'Coupons',
	  FEATURES: 'Features',	
	  CATEGORIES: 'Categories',
	  NEWS:'News',
	  NEWSMANAGE:'newsManage',
	  PRODUCT: 'Product',
	  ADMINISTRATION: 'Administration',
	  CUSTOMERS: 'Customers',
	  PAYMENT_METHOD: 'Payment Method',
	  SHIPPING_SETTINGS: 'Shipping Settings',
	  SEARCH_TIPS:'Search for a product, category or brand...',
	  SEARCH:'Search',
	  CART:'Cart',
	  HELLO:'Hello',
	 //---------------footer----------------------
	  COPYRIGHT_GOV:'Beijing ICP 11011249-1',
	  COPYRIGHT_COM:'All rights reserved by Beijing JianYi Investment and Development (Group) Co., Ltd',
	  HOMEPAGE:'HomePage',
	  ABOUT_US:'About Us',
	  TERMS_CONDITIONS:'Terms And Conditions',
	  ISSUE:'FAQ',
	  TOP_CATEGORIES:'Top categories',
	  BIM_COLLEGE:'BIM College',
	  BIM_INFORMATION:'BIM information',
	  BIM_TRAINING:'BIM training',
	  BIM_INTERACTION:'BIM interaction',
	  PROJECT_SERVICES:'Project Services',
	  PUBLISHING_TASKS:'Publishing Tasks',
	  FIND_PROJECT:'Find Project',
	  PROJECT_BIDDING:'Project Bidding',
	  ONLINE_BOOKING:'Online Booking',
	  ADDRESS_BUILD:'Bldg 5',
	  ADDRESS_COURTYARD:'Courtyard 156',
	  ADDRESS_ROAD:'Majiapu East Road',
	  ADDRESS_DISTRICT:'Fengtai District',
	  ADDRESS_CITY:'Beijing',
	  CHINA:'China',
	  MORE:'More',
	  INDUSTRY_INFORMATION:'Industry Information',
	  GET_MORE_NEWS:'The first time to obtain the relevant industry dynamics.',
	  SUBSCRIBE:'Subscribe',
	  LOGIN_MODE:'Login mode',
	 //---------------/client/app/main/main.html----------------------
	  NO_PRODUCT_FOUND:'No product found. Try removing some filters.',
	  PRICE_RANGE:'Price Range',
	  PRICE_RESET:'Reset',
	  PRODUCT_SORT:'Sort',
	  VIEW_DETAIL:'View detail',
	  ADD_TO_CART:'Add to cart',
	  
	//---------------/client/app/main/main.html----------------------  
	  HOT_SALE:'SALE',
	  HOT_NEW:'NEW'
    });
    $translateProvider.translations('cn', {
	  //---------------header----------------------
      BRANDS: '品牌',
      JIANYI_GROUP: '建宜集团',
      LOGIN: '登录',
      INDUSTRY_LEADER: '行业领导者',
	  SIGN_UP: '注册',
	  SETTINGS: '设置',
	  DASHBOARD: '面板',
	  LOGOUT: '退出',
	  CONTACT: '联系我们',
	  DOCUMENTATION: '文档',
	  CHANGE_PASSWORD: '修改密码',
	  ORDER: '订单',
	  COUPONS: '优惠券',
	  FEATURES: '特色',
	  CATEGORIES: '品类',
	  NEWS:'新闻',
	  NEWSMANAGE:'新闻管理',
	  PRODUCT: '商品管理',
	  ADMINISTRATION: '用户',
	  CUSTOMERS: '顾客',
	  PAYMENT_METHOD: '支付方式',
	  SHIPPING_SETTINGS: '设置',
	  SEARCH_TIPS:'查找商品，品类，品牌...',
	  SEARCH:'查找',
	  CART:'购物车',
	  HELLO:'您好',
	  //---------------footer----------------------
	  COPYRIGHT_GOV:'京ICP备11011249号-1',
	  COPYRIGHT_COM:'北京建谊投资发展（集团）有限公司',
	  HOMEPAGE:'首页',
	  ABOUT_US:'关于我们',
	  TERMS_CONDITIONS:'条款和条件',
	  ISSUE:'常见问题',
	  TOP_CATEGORIES:'热门推荐',
	  BIM_COLLEGE:'BIM学院',
	  BIM_INFORMATION:'BIM资讯',
	  BIM_TRAINING:'BIM培训',
	  BIM_INTERACTION:'BIM互动',
	  PROJECT_SERVICES:'项目服务',
	  PUBLISHING_TASKS:'发布任务',
	  FIND_PROJECT:'寻找项目',
	  PROJECT_BIDDING:'方案竞标',
	  ONLINE_BOOKING:'线上预约',
	  ADDRESS_BUILD:'5号楼',
	  ADDRESS_COURTYARD:'156号院',
	  ADDRESS_ROAD:'马家堡东路',
	  ADDRESS_DISTRICT:'丰台区',
	  ADDRESS_CITY:'北京市',
	  CHINA:'中国',
	  MORE:'了解更多',
	  INDUSTRY_INFORMATION:'行业资讯',
	  GET_MORE_NEWS:'第一时间获取行业相关动态',
	  SUBSCRIBE:'订阅',
	  LOGIN_MODE:'登录方式',
	  //---------------/client/app/main/main.html----------------------
	  NO_PRODUCT_FOUND:'没有找到相关商品。试试其它筛选条件。',
	  PRICE_RANGE:'价格范围',
	  PRICE_RESET:'重置',
	  PRODUCT_SORT:'排序',
	  VIEW_DETAIL:'查看详情',
	  ADD_TO_CART:'添加购物车',
	  //---------------/client/app/main/main.html----------------------  
	  HOT_SALE:'热卖',
	  HOT_NEW:'新品'
    });
    $translateProvider.preferredLanguage('cn');

    $translateProvider.useSanitizeValueStrategy('escapeParameters');
  })
;






















