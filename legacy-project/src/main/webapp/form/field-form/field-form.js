angular.module('myEmployeeApp').component('appFieldForm', {
    templateUrl: 'form/field-form/field-form.html',
    bindings: {
        label: '@',
        type: '@',
        field: '='
    }
});
