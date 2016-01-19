//controllers

app.controller('ctrl', function($scope){

    $scope.firstname = "Hello";
    $scope.lastname = "World !";

});

app.controller('repeat', function($http, $scope){
   $http.get('http://www.w3schools.com/angular/customers.php').then(function(response){
       $scope.data = response.data.records;
   });
});