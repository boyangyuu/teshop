'use strict';

angular.module('shopnxApp')
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
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
	  BRANDS: 'Brands',
	  CATEGORIES: 'Categories',
	  NEWS:'News',
	  NEWSMANAGE:'newsManage',
	  PRODUCT: 'Product',
	  ADMINISTRATION: 'Administration',
	  CUSTOMERS: 'Customers',
	  PAYMENT_METHOD: 'Payment Method',
	  SHIPPING_SETTINGS: 'Shipping Settings',
	  SEARCH_TIPS:'Search for a product, category or brand...',
	  SEARCH:'Search'
	 
	  
    });
    $translateProvider.translations('cn', {
      BRANDS: '品牌',
      JIANYI_GROUP: '建宜集团',
      LOGIN: '登录',
      INDUSTRY_LEADER: '行业领导者',
	  SIGN_UP: '注册',
	  SETTINGS: '设置',
	  DASHBOARD: '面板',
	  LOGOUT: '退出',
	  CONTACT: '联系方式',
	  DOCUMENTATION: '文档',
	  CHANGE_PASSWORD: '修改密码',
	  ORDER: '订单',
	  COUPONS: '优惠券',
	  FEATURES: '特色',
	  BRANDS: '品牌',
	  CATEGORIES: '品类',
	  NEWS:'新闻',
	  NEWSMANAGE:'新闻管理',
	  PRODUCT: '商品管理',
	  ADMINISTRATION: '用户',
	  CUSTOMERS: '顾客',
	  PAYMENT_METHOD: '支付方式',
	  SHIPPING_SETTINGS: '设置',
	  SEARCH_TIPS:'查找商品，品类，品牌...',
	  SEARCH:'查找'
	  
    });
    $translateProvider.preferredLanguage('cn');

    $translateProvider.useSanitizeValueStrategy('escapeParameters');
  })
;
