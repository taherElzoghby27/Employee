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
        $formCtrl.employees = [
            {
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
            },
            {
                employeeCode: 'EMP-002',
                employeeName: 'Alice Johnson',
                birthDate: '1985-09-20',
                birthCity: 'Alexandria',
                employeeId: 'ID-2024-002',
                department: 'Human Resources',
                jobTitle: 'HR Manager',
                directManager: 'Bob Brown',
                contractType: 'Part-Time',
                status: 'Active'
            },
            {
                employeeCode: 'EMP-003',
                employeeName: 'Michael Smith',
                birthDate: '1992-12-05',
                birthCity: 'Giza',
                employeeId: 'ID-2024-003',
                department: 'Finance',
                jobTitle: 'Financial Analyst',
                directManager: 'Sara Davis',
                contractType: 'Contract',
                status: 'Inactive'
            },
            {
                employeeCode: 'EMP-004',
                employeeName: 'Emily Davis',
                birthDate: '1988-04-10',
                birthCity: 'Luxor',
                employeeId: 'ID-2024-004',
                department: 'Operations',
                jobTitle: 'Operations Manager',
                directManager: 'Mark Wilson',
                contractType: 'Full-Time',
                status: 'Active'
            },
            {
                employeeCode: 'EMP-005',
                employeeName: 'Daniel Wilson',
                birthDate: '1995-07-25',
                birthCity: 'Aswan',
                employeeId: 'ID-2024-005',
                department: 'Marketing',
                jobTitle: 'Marketing Manager',
                directManager: 'Emily Davis',
                contractType: 'Part-Time',
                status: 'Inactive'
            },
            {
                employeeCode: 'EMP-006',
                employeeName: 'Olivia Taylor',
                birthDate: '1998-02-18',
                birthCity: 'Port Said',
                employeeId: 'ID-2024-006',
                department: 'Legal',
                jobTitle: 'Legal Counsel',
                directManager: 'Michael Smith',
                contractType: 'Contract',
                status: 'Active'
            },
            {
                employeeCode: 'EMP-007',
                employeeName: 'James Anderson',
                birthDate: '1991-11-12',
                birthCity: 'Giza',
                employeeId: 'ID-2024-007',
                department: 'Legal',
                jobTitle: 'Legal Counsel',
                directManager: 'Michael Smith',
                contractType: 'Contract',
                status: 'Active'
            },
            {
                employeeCode: 'EMP-008',
                employeeName: 'Sophia Martinez',
                birthDate: '1987-03-30',
                birthCity: 'Alexandria',
                employeeId: 'ID-2024-008',
                department: 'Human Resources',
                jobTitle: 'HR Specialist',
                directManager: 'Bob Brown',
                contractType: 'Full-Time',
                status: 'Active'
            },
            {
                employeeCode: 'EMP-009',
                employeeName: 'William Brown',
                birthDate: '1993-08-22',
                birthCity: 'London',
                employeeId: 'ID-2024-009',
                department: 'Information Technology',
                jobTitle: 'System Administrator',
                directManager: 'Jane Smith',
                contractType: 'Part-Time',
                status: 'Inactive'
            },
            {
                employeeCode: 'EMP-010',
                employeeName: 'Ava Wilson',
                birthDate: '1996-05-14',
                birthCity: 'Luxor',
                employeeId: 'ID-2024-010',
                department: 'Operations',
                jobTitle: 'Operations Coordinator',
                directManager: 'Mark Wilson',
                contractType: 'Full-Time',
                status: 'Active'
            },
            {
                employeeCode: 'EMP-011',
                employeeName: 'Ethan Taylor',
                birthDate: '1999-09-08',
                birthCity: 'Aswan',
                employeeId: 'ID-2024-011',
                department: 'Marketing',
                jobTitle: 'Marketing Specialist',
                directManager: 'Emily Davis',
                contractType: 'Part-Time',
                status: 'Inactive'
            },
            {
                employeeCode: 'EMP-012',
                employeeName: 'Mia Anderson',
                birthDate: '1990-12-31',
                birthCity: 'Port Said',
                employeeId: 'ID-2024-012',
                department: 'Legal',
                jobTitle: 'Legal Counsel',
                directManager: 'Michael Smith',
                contractType: 'Contract',
                status: 'Active'
            },
            {
                employeeCode: 'EMP-013',
                employeeName: 'Benjamin Lee',
                birthDate: '1989-07-19',
                birthCity: 'Giza',
                employeeId: 'ID-2024-013',
                department: 'Finance',
                jobTitle: 'Financial Analyst',
                directManager: 'Sara Davis',
                contractType: 'Full-Time',
                status: 'Active'
            },
            {
                employeeCode: 'EMP-014',
                employeeName: 'Isabella Martinez',
                birthDate: '1994-10-05',
                birthCity: 'Alexandria',
                employeeId: 'ID-2024-014',
                department: 'Human Resources',
                jobTitle: 'HR Coordinator',
                directManager: 'Bob Brown',
                contractType: 'Part-Time',
                status: 'Inactive'
            },
            {
                employeeCode: 'EMP-015',
                employeeName: 'Lucas Wilson',
                birthDate: '1992-01-20',
                birthCity: 'London',
                employeeId: 'ID-2024-015',
                department: 'Information Technology',
                jobTitle: 'Network Engineer',
                directManager: 'Jane Smith',
                contractType: 'Full-Time',
                status: 'Active'
            }
        ];

        $formCtrl.getStatusClass = function (status) {
            return status === 'Active' ? 'text-success' : 'text-danger';
        };
    }
});