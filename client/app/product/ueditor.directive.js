angular.module("ms.ueditor",[])
	.directive('msUeditor',['$timeout',function($timeout){
		return {
			restrict:'EA',
			//transclude:true,
            //replace: false,
            require:'?ngModel',
            scope:{

            },
            link:function(scope,element,attrs,ueditorController){
            	 ueditor = UE.getEditor(element[0]);
            	//ueditor.render(element[0]);
            	ueditor.on('instanceReady', function() {
            		ueditor.setContent(ueditorController.$viewValue);
            	});
				
            	ueditor.addListener("contentChange",function(){
                    scope.$apply(function(){
                        ueditorController.$setViewValue(ueditor.getContent());
                    });          		
            	});
            	
            	ueditor.addListener('ready',function(){
            		ueditorController.$setViewValue(ueditorController.$viewValue);
            	});


                ueditorController.$render=function(){
                        $timeout(function(){
                                ueditor.setContent(ueditorController.$viewValue);
                        },200);
                };
/*
            	scope.$watch('ngModel',function(newValue,oldValue){
            		ueditor.setContent(newValue);
            	});*/
            }
		}
	}]);