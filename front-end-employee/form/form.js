angular.module("myEmployeeApp").component("formEmployee", {
    templateUrl: "form/form.html",
    controllerAs: "$formCtrl",
    controller: function () {
        var $formCtrl = this;
        $formCtrl.cities = ['London', 'Alexandria', 'Giza', 'Luxor', 'Aswan', 'Port Said'];
        $formCtrl.departments = ['Human Resources', 'Information Technology', 'Finance', 'Operations', 'Marketing', 'Legal'];
        $formCtrl.contractTypes = ['Full-Time', 'Part-Time', 'Contract'];
        $formCtrl.statuses = ['Active', 'Inactive'];
        $formCtrl.employeeForm = {
            employeeCode: 'EMP-001',
            employeeName: 'John Doe',
            birthDate: '1990-06-15',
            birthCity: 'London',
            employeeId: 'ID-2024-001',
            department: 'Information Technology',
            jobTitle: 'Software Engineer',
            directManager: 'Jane Smith',
            contractType: 'Full-Time',
            status: 'Active'
        };
        $formCtrl.onSubmit = function (event) {
            if (event) {
                event.preventDefault();
            }
            console.log('Employee Data:', $formCtrl.employeeForm);
        };
    }
});