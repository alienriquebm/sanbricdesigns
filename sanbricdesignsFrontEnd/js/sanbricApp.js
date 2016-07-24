angular
	.module('sanbricApp',['ui.router','angular-loading-bar'])
	.config(function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
    	$stateProvider
        // Navegación
        .state('home', {
            url: '/',
            views: {
            	"content":{templateUrl:'partials/indexView.part1.html'},
            	"scriptEndArea":{templateUrl:'partials/indexView.part2.html'}
            }
        });   
	})
	.controller('mainController', ['$scope','$http',function($scope,$http){
		var mc = this;
		mc.query =  $http.get("http://localhost/sanbricdesigns/sanbricdesigns/web/app_dev.php/ObtenerDatosEmpresa")
							.then(function(response){
			 					console.log(response.data[0]);
			 					mc.nombre_empresa = response.data[0].nombre;
			 					mc.correo_empresa = response.data[0].correo;
			 					mc.rif_empresa = response.data[0].rif;
			 					mc.telefono_empresa = response.data[0].telefono;
			 					mc.direccion_empresa = response.data[0].direccion;
							})
							.catch(function(error){
								console.log(error);
								if (error.status == '412') {
									console.log('Error obteniendo datos: ' + error.data.error);
								}
							});

	}]);