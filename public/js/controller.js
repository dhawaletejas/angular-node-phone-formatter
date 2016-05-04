angular.module('phoneNumberFormat')
.controller("mainController", function ($scope, $http) {
    $scope.formatPhone = function() {
        $scope.phoneFormatted='';
        $scope.phoneNational='';
        $scope.phoneValid='';
        var phoneValidTxt='This Phone Number is Valid';
        var phoneInvalidTxt='This Phone Number is Invalid';
        var phone = {'text':$scope.phoneInput};
        $http.post('/formatPhone', phone)
            .success(function(data) {
                $scope.phoneFormatted = data.phoneIntl;
                if(data.phoneValid) {
                    $scope.phoneValid = phoneValidTxt;
                    $scope.alertClass = 'alert-success';
                    $scope.phoneNational = data.phoneNational;
                }
                else {
                    $scope.phoneValid = phoneInvalidTxt;
                    $scope.alertClass = 'alert-danger';
                }
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
});

