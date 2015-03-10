var app = angular.module("Todo", ["ngAnimate"]);

app.controller("TodoController", function($scope, $http){

  $http.get("/javascripts/data.json").success(function(data){
    $scope.items = data;
    $scope.loaded = true;
  });
  
  $scope.addItem = function(){
    $scope.items.push($scope.newToDo);
    $scope.newToDo = {priority: "low"};
  };

  $scope.removeItems = function(){
    $scope.items = $scope.items.filter(function(item){
      return !item.done;
    });
  };

  $scope.completeItems = function(){
    $scope.toggle = !$scope.toggle;
    for (i=0; i < $scope.items.length; i++){
      $scope.items[i].done = $scope.toggle;
    }
  };

});

