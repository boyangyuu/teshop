'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('shopnxApp')
  .directive('compare',function(){
    // 确认密码
      var o={};
      o.strict='AE';
      o.scope={
        orgText:'=compare'
      };
      o.require='ngModel';
      o.link=function(sco,ele,att,con)
      {
        con.$validators.compare=function(v)
        {
            return v==sco.orgText;
        }
        sco.$watch('orgText',function()
        {
          con.$validate();
        })
      }
      return o;

  }) 
  .directive('bfCaptcha',function(){
    //图片验证码刷新
    return{
      restrict:'A',
      link:function(scope,element){
        var changeSrc=function(){
          element.attr('src','/api/captcha.jpg?random='+new Date().getTime());
        };
        changeSrc();
        element.on('click',function(){
          changeSrc();
        })
      }
    }
  })
  .directive('timerbutton',function($timeout, $interval){
    // 验证码倒计时
    return {
        restrict: 'AE',
        transclude:true,
        scope:{
            showTimer: '=',
            onClick: '&',
            timeout: '='
        },
        link: function(scope, element, attrs){
            scope.timer = false;
            scope.timeout = 60000;
            scope.timerCount = scope.timeout/1000;
            scope.text = "获取验证码";

            scope.onClick = function(){
                console.log("aaa");
                scope.showTimer = true;
                scope.timer = true;
                scope.text = "秒后重新获取";
                var counter = $interval(function(){
                    scope.timerCount = scope.timerCount - 1;
                },1000);

                $timeout(function(){
                    scope.text = "获取验证码";
                    scope.timer = false;
                    $interval.cancel(counter);
                    scope.showTimer = false;
                    scope.timerCount = scope.timeout / 1000;
                }, scope.timeout);
            }
        },
        template:'<button ng-click="onClick()" class="button button-calm xgmm-btn" ng-disabled="timer"><span ng-if="showTimer">{{ timerCount }}</span>{{text}}</button>'
    };
  })


