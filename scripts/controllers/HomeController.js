cartoonSearchAppCtrl.controller('HomeController', ['$scope', 'RestApiService', function($scope, restApiService) {
    $scope.searchString = "";

    var searchPromise = restApiService.getSearchResults();
    searchPromise.then(function (data) {
        if(data.status = 'Success')
            $scope.searchResultList = data.searchResultList;
    },function(){
        console.log("Error needs to be handled");
    });
    
}]);