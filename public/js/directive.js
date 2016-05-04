angular.module('phoneNumberFormat')
    .directive('phoneField', function() {
        return {
            restrict: 'A',
            template:
            '<div><input type="text" name="inputP" ng-model="phoneInput2" placeholder="Phone Number" /></div>'+
            '<div><input type="text" name="inputPF" ng-value="phoneInput2 | phoneNumber"  placeholder="Formatted Phone Number" ng-disabled="true"/></div>'
        };
    });