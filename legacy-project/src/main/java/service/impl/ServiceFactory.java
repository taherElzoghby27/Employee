package service.impl;
import service.ContractTypeService;
import service.DepartmentService;
import service.EmployeeService;

import javax.sql.DataSource;

public class ServiceFactory {

    public static EmployeeService createEmployeeService(DataSource dataSource) {
        return new EmployeeServiceImpl(dataSource);
    }

    public static DepartmentService createDepartmentService(DataSource dataSource) {
        return new DepartmentServiceImpl(dataSource);
    }

    public static ContractTypeService createContractTypeService(DataSource dataSource) {
        return new ContractTypeServiceImpl(dataSource);
    }
}
