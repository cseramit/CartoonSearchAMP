cartoonSearchAppSvc.factory('RestApiService', ['$http', '$q', function ($http, $q) {
        return {


            /* REST Call to fetch the cartoon characters */
            getSearchResults: function () {
                var urlSearchCartoons = "./mockData/cartoonCharacters.json";
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    contentType: 'application/json',
                    url: urlSearchCartoons,
                    data: {},
                    headers: {}
                }).success(
                    function (data, status) {
                        if (angular.lowercase(data.status) == "success") {
                            deferred.resolve(data, status);
                        }
                        else {
                            if (angular.lowercase(data.status) == "error") {
                                /*Log error*/
                                console.log('No Results Found');
                            }
                            deferred.resolve(data, status);
                        }
                    }).error(function (data, status) {
                    deferred.reject(status);
                });
                return deferred.promise;
            }
        }
    }
]);