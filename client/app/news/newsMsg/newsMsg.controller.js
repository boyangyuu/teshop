'use strict';

angular.module('shopnxApp')
  .controller('NewsMsgCtrl', function ($scope, $sce) { //, socket, Category, Modal, toastr

    var data = "<div id=\"new_content\">\
          		威卢克斯进入中国市场近二十年来，与国内多家著名品牌房地产商及甲类建筑设计院所建立了长久的战略合作伙伴关系,\
              同时在全国各大中城市建立起代理商网络，形成良好的合作伙伴关系。为了巩固和扩大代理商网络，我们现面向湖南，湖北，广东，海南，福建，江西诚征代理商。<br />\
              <div style=\"color: rgb(0,0,0)\">作为威卢克斯代理商主要负责协助威卢克斯做产品的分销、施工以及售后服务。</div>\
              <div style=\"color: rgb(0,0,0)\">&nbsp;</div>\
              <div style=\"color: rgb(0,0,0)\">成为威卢克斯代理商需要：</div>\
              <div style=\"color: rgb(0,0,0)\">１、具备企业长期稳定发展的理念，并具备良好营销和为客户服务的意识</div>\
              <div style=\"color: rgb(0,0,0)\">２、具有建材行业相关经验和关系网络</div>\
              <div style=\"color: rgb(0,0,0)\">３、具有一定资金实力</div>\
              <div style=\"color: rgb(0,0,0)\">&nbsp;</div>\
              <div><span style=\"color: rgb(0,0,0)\">如有意向请</span><font color=\"#000000\">拔打400 707 6001或</font>\
              <span style=\"font-size: 11pt; font-family: Calibri, sans-serif; color: rgb(31,73,125)\">0316-6072731、</span>\
              <span style=\"font-size: 11pt; font-family: Calibri, sans-serif; color: rgb(31,73,125)\">13605143748&nbsp;&nbsp;\
              </span><span color:=\" lang=\"ZH-CN\" microsoft=\" style=\"font-size: 11pt; font-family: Helvetica,\">南普红经理</span>\
              <span style=\"color: rgb(0,0,0)\">，期待您的加入！</span></div>\
              <br />\
          		</div>"
    $scope.myHTML= $sce.trustAsHtml(data);
    // $scope.myHTML = $sce.trustAsHtml("<div style=\"color:red\">监工</div>");

   });
