'use strict';

angular.module('languageApp')
  .controller('MainCtrl', function ($scope, $http) {
	$scope.textInput='';
	$scope.urlInput='';
	$scope.enterKey = function(keyEvent){
		if(keyEvent.which === 13)
		$scope.checker();
	};
	$scope.checker =function(){
							//XOR
						$scope.error='';
						$scope.errorFrench='';
						$scope.errorSpanish='';
						$scope.result ='';
						 if(($scope.textInput && !$scope.urlInput) || (!$scope.textInput && $scope.urlInput)){
							 callAPI();
						 }
						 else{
							 $scope.error='You have to choose (only)one option';
							 $scope.errorFrench='Vous devez choisir ( seulement) une option';
							 $scope.errorSpanish='Tienes que elegir (sólo ) una opción';
						 }
						return;
					 }
	
	 function callAPI(){
						    var inputData = "key=7f7131edcd0f9b05a739502503c512bf&txt="+$scope.textInput+"&url="+$scope.urlInput;
							$http({
									method: 'POST',
									url: 'http://api.meaningcloud.com/lang-1.1',
									data: inputData,
									headers: {
										'Content-Type': 'application/x-www-form-urlencoded'
								}}).then(function(response) {
										   $scope.result = response.data.lang_list.toString();
										   if($scope.result=='??') $scope.result = 'Check if you have passed valid URL';
									     },function(response) {
										   $scope.result = "Promise failed";
									   });
							return;
					}
  });
