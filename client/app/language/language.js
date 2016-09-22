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
	  //-------------------用户管理--------------------------
	  USER_ADMINISTRATION:'User Administration',
	  DELETE:'Delete',
	  ADD:'add',
	  ID:'id',
	  NAME:'name',
	  GOODSTYPE:'GoodsType',
	  VERIFY:'verify',
	  HANDLE:'handle',
	  SUPPLIER:'supplier',
	  PURCHASE:'purchase',
	  SUPPLIERLIST:'supplierlist',
	  PURCHASELIST:'purchaselist',
	  //--------------------新闻资讯-----------------
	  //NEWS_INFORMATION:'news information',
	  //DROPFILE_CHARACTER:'Drop file here or click to upload',
	  //FILEDRAG_CHARACTER:'File Drag/Drop is not supported for this browser',
	  //FILENAME:'File Name',
	  //FILESIZE:'File Size',
	  //PROGRESS:'Progress',
	  //PREVIEW:'preview',
	  //------------------特色-----------------------------
	  THIS_CHARACTER:'This is a paragraph',

	  FIRST_CLASSIFCTION:'first classifction',
	  SECONDARY_CLASSIFICATION:'Secondary classification',
	  //--------------------订单----------------------------
	  ORDERS_HISTORY:'Orders History',
	  SHIPPING_CHARGE:'Shipping Charge:',
	  COUPON:'Coupon:',
	  Order_Total:'Order Total',
	  TOTAL_SPENT:'Total Spent',
	  QTY:'Qty',
	  PACKING_SIZE:'Packing/Size',
	  UNIT_PRICE:'Unit Price',
	  
	  //----------------------修改密码-----------------------
	
	  PRIMITIVE_PASSWORD:'primitive Password',
	  NEW_PASSWORD:'New Password',
	  PASSWORD_CHARACTER:'Password must be at least 3 characters.',
	  SAVE_CHANGES:'Save changes',
	  OLD_PASSWORD:'Old password',
	  SET_PASSWORD:'Set a new password',
	  //-------------------------类别-------------------------
	
	  INFO:'info',
	  CATEGORY:'category',
	  PARENTCATEGORY:'parentCategory',
	  ACTIVE:'active',
	  //---------------------登录-------------------------------
	  ALREADY_CHARACTER:'Already our customer?',
	  EMAIL:'Email',
	  PLEASE_EMAIL_CHARACTER:'Please enter your email',
	  PASSWORD:'Password',
	  PLEASE_PASSWORD_CHARACTER:'Please enter your password',
	  PLEASE_EMAIL_PASSWORD_CHARACTER:'Please enter your email and password',
	  PLEASE_ENTER_VALID_EMAIL:'Please enter a valid email',


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
	  HOT_NEW:'NEW',
	  FEATURES_FILTER_TIP:'Filter Features ...',
	  PRODUCT_SHOWING_A:'Showing',
	  PRODUCT_SHOWING_B:'products of',
	  PRODUCT_SHOWING_C:'in:',
	  SCROLL_TO_DETAIL:'Scroll to product details, material & care and sizing',
	  SORT_LOW_PRICE:'Low Price',
	  SORT_HIGH_PRICE:'High Price',
	  SORT_NAME_ASC:'Name(A-Z)',
	  SORT_LOW_DESC:'Name(Z-A):',
	
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

	  //-------------------用户管理--------------------------
	  USER_ADMINISTRATION:'用户管理',
	  DELETE:'删除',
	  ADD:'添加',
	  ID:'序列号',
	//   NAME:'用户名',
	  GOODSTYPE:'产品类型',
	  VERIFY:'审核状态',
	  HANDLE:'操作',
	  PURCHASE:'采购商',
	  SUPPLIER:'供应商',
	  SUPPLIERLIST:'供应商列表',
	  PURCHASELIST:'采购商列表',
	  //--------------------新闻资讯-----------------
	  //NEWS_INFORMATION:'新闻资讯',
	  //DROPFILECHARACTER:'删除文件或单击上传',
	  //FILEDRAGCHARACTER:'文件拖/下降这个浏览器不支持',
	  //FILENAME:'文件名',
	  //FILESIZE:'文件大小',
	  //PROGRESS:'进展',
	  //PREVIEW:'预览',
	  //-----------------------特色-------------------------
	  THIS_CHARACTER:'这是一个段落',
	
	  FIRST_CLASSIFCTION:'一级标题',
	  SECONDARY_CLASSIFICATION:'二级标题',
	  //-----------------------订单---------------------------
	  ORDERS_HISTORY:'历史订单',
	  SHIPPING_CHARGE:'运费',
	  COUPON:'优惠券:',
	  ORDER_TOTAL:'订单总额',
	  Order_Total:'订单总数',
	  TOTAL_SPENT:'总金额',
	  QTY:'数量',
	  PACKING_SIZE:'包装/尺寸',
	  UNIT_PRICE:'单价',
	  //----------------------修改密码------------------------------

	  PRIMITIVE_PASSWORD:'原始密码',
	  NEW_PASSWORD:'新密码',
	  PASSWORD_CHARACTER:'密码必须包含三个字符',
	  SAVE_CHANGES:'保存设置',
	  OLD_PASSWORD:'原始的密码',
	  SET_PASSWORD:'请设置新密码',
	  //--------------------------类别------------------------
	  NAME:'名称',
	  INFO:'信息',
	  CATEGORY:'类别',
	  PARENTCATEGORY:'父级分类',
	  ACTIVE:'状态',
	   //---------------------登录-------------------------------
	  ALREADY_CHARACTER:'已经成为我们的客户吗?',
	  EMAIL:'邮件',
	  PLEASE_EMAIL_CHARACTER:'请输入你的电子邮件',
	  PASSWORD:'密码',
	  PLEASE_PASSWORD_CHARACTER:'请输入你的密码？',
	  PLEASE_EMAIL_PASSWORD_CHARACTER:'请输入您的电子邮件和密码',
	  PLEASE_ENTER_VALID_EMAIL:'Please enter a valid email',
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
	  HOT_NEW:'新品',
	  FEATURES_FILTER_TIP:'搜索过滤条件',
	  PRODUCT_SHOWING_A:'显示',
	  PRODUCT_SHOWING_B:'件商品 共',
	  PRODUCT_SHOWING_C:'件商品 ',
	  SCROLL_TO_DETAIL:'转到商品介绍',
	  SORT_LOW_PRICE:'价格↑',
	  SORT_HIGH_PRICE:'价格↓',
	  SORT_NAME_ASC:'商品(A-Z)',
	  SORT_LOW_DESC:'商品(Z-A)',

    });
    $translateProvider.preferredLanguage('cn');

    $translateProvider.useSanitizeValueStrategy('escapeParameters');
  })
;






















