var yike = angular.module("yike",["controller","ngRoute"]);
yike.run(["$rootScope",function($rootScope){
	$rootScope.collapsed = false;
	$rootScope.toggle = function(){
		console.log("进入事件");
		$rootScope.collapsed = !$rootScope.collapsed;
		var dd = document.querySelectorAll(".navs dd");
		if($rootScope.collapsed){
			for(var i=0;i<dd.length;i++){
				dd[i].style.transform = "translate(0)";
				dd[i].style.transitionDuration = 0.1*(i+1)+"s";
				dd[i].style.transitionDelay = 0.2+"s";
			}
		}else{
			for(var i=dd.length-1;i>=0;i--){
				dd[i].style.transform = "translate(-100%)";
				dd[i].style.transitionDuration = 0.3+"s";
				dd[i].style.transitionDelay = 0.3*(dd.length-i-1)+"s";
			}
		}
	}
}]);
yike.config(function($locationProvider){
	$locationProvider.hashPrefix("");
});
yike.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/today",{
		templateUrl:"./views/today.html",
		controller:"todayCon"
	})
	.when("/older",{
		templateUrl:"./views/older.html",
		controller:"olderCon"
	})
	.when("/author",{
		templateUrl:"./views/author.html",
		controller:"authorCon"
	})
	.otherwise({
		redirectTo:"/today"
	})
}])

















