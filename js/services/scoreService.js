app.factory('scoreService',['$http',function ($http) {
      return $http.get('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json')
        .success(function (data) {
          return data;
        })
        .error(function (err) {
          return err;
        });
  }]);