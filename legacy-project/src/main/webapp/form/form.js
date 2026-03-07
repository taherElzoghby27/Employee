angular.module("myEmployeeApp").service("employeeService", function ($http) {
    var $employeeService = this;
    $employeeService.getEmployees = function ($employeeForm) {
        return $http.get('http://localhost:8080/legacy-project/employee', { params: $employeeForm })
            .then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.error('Error fetching employees:', error);
                return [];
            });
    };
});

angular.module("myEmployeeApp").component("formEmployee", {
    templateUrl: "form/form.html",
    controllerAs: "$formCtrl",
    controller: ["employeeService", function (employeeService) {
        var $formCtrl = this;
        $formCtrl.cities = ['London', 'Alexandria', 'Giza', 'Luxor', 'Aswan', 'Port Said'];
        $formCtrl.departments = ['Human Resources', 'Information Technology', 'Finance', 'Operations', 'Marketing', 'Legal'];
        $formCtrl.contractTypes = ['Full-Time', 'Part-Time', 'Contract'];
        $formCtrl.statuses = ['0', '1'];
        $formCtrl.employeeForm = {
            employeeCode: '',
            employeeName: '',
            birthDate: '',
            birthCity: '',
            employeeId: '',
            department: '',
            jobTitle: '',
            directManager: '',
            contractType: '',
            status: ''
        };
        $formCtrl.onSubmit = function (event) {
            if (event) {
                event.preventDefault();
            }
            console.log('Employee Data:', $formCtrl.employeeForm);
            $formCtrl.loadEmployees();
        };
        $formCtrl.getStatusClass = function (status) {
            return status === '1' ? 'text-success' : 'text-danger';
        };

        $formCtrl.loadEmployees = function () {
            employeeService.getEmployees($formCtrl.employeeForm).then(function (data) {
                $formCtrl.employees = data;
            });
        };

        $formCtrl.$onInit = function () {
            $formCtrl.loadEmployees();
        };
    }]
});