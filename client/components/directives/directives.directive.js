'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('shopnxApp')
  .directive('compare',function(){
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


