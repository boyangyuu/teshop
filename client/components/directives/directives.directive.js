'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('shopnxApp')
  .directive('compare',function(){
      var o={};
      o.strict='AE';
      o.scope={
        text:'='
      };
      o.require='ngModel';
      o.link=function(sco,ele,att,con)
      {
        con.$validators.compare=function(v)
        {
            return v==sco.text;
        }
        sco.$watch('text',function()
        {
          con.$validate();
        })
      }
      return o;

  })


