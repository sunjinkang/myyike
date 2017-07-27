angular.module("controller",[])
.controller("NavCon",["$scope",function($scope){
	$scope.navs = [
		{"link":"#/today","class":"icon-home","text":"今日一刻"},
		{"link":"#/older","class":"icon-file-empty","text":"往期内容"},
		{"link":"#/author","class":"icon-pencil","text":"热门作者"},
		{"link":"#/category","class":"icon-menu","text":"栏目浏览"},
		{"link":"#/favourite","class":"icon-heart","text":"我的喜欢"},
		{"link":"#/settings","class":"icon-cog","text":"设置"}
	];
}])
.controller("todayCon",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
	var now = $filter("date")(new Date(),"yyyy-MM-dd");
	// $rootScope.index = 0;
	$rootScope.title = "今日一刻";
	$rootScope.loaded = 1;
	$http({
		url:"./api/today.php",
		params:{"now":now}
	}).then(function(data){
		console.log(data);
		$rootScope.index = 0;
		$rootScope.loaded = 0;
		$scope.datas = data.data;
	})
}])
.controller("olderCon",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
	// var now = $filter("date")(new Date(),"yyyy-MM-dd");
	// $rootScope.index = 0;
	$rootScope.title = "往期内容";
	$rootScope.loaded = 1;
	$http({
		url:"./api/older.php",
		// params:{"now":now}
	}).then(function(data){
		console.log(data);
		$rootScope.index = 1;
		$rootScope.loaded = 0;
		$scope.datas = data.data;
	})
}])
.controller("authorCon",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	// var now = $filter("date")(new Date(),"yyyy-MM-dd");
	// $rootScope.current = 0;
	$rootScope.title = "热门作者";
	$rootScope.loaded = 1;
	$http({
		url:"./api/author.php",
	}).then(function(data){
		// console.log(data.data[1].authors);
		$rootScope.index = 2;
		// $rootScope.current = 1;
		$rootScope.loaded = 0;
		$scope.alls = data.data[1].authors;
		$scope.hots = data.data[0].authors;
	})
}])








