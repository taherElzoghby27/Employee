angular.module('myEmployeeApp').component('appSelectField', {
    templateUrl: 'form/select-field/select-field.html',
    bindings: {
        label: '@',
        labelHint: '@',
        field: '=',
        selectValues: '<'
    }
});
