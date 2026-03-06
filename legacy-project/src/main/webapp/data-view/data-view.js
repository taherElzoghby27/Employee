angular.module("myEmployeeApp").component("employeeDataView", {
    templateUrl: "data-view/data-view.html",
    bindings: {
        employees: '<',
        getStatusClass: '&'
    }
});
