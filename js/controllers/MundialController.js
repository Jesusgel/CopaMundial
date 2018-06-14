app.controller('MundialController',['$scope','scoreService',function($scope,scoreService){
    $scope.titulo = 'Bienvenido a este Evento';
    $scope.texto = '';
    scoreService.success(function (data) {
        $scope.equipo  = data;  
    });
}]);