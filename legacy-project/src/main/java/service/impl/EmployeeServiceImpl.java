package service.impl;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import models.Employee;
import service.EmployeeService;

public class EmployeeServiceImpl implements EmployeeService {
	private DataSource dataSource;

	public EmployeeServiceImpl(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	@Override
	public List<Employee> getEmployees(Employee employee) {
		String query = buildSearchQuery(employee);
		try (Connection connection = dataSource.getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(query)) {

			setParameters(preparedStatement, employee);

			try (ResultSet resultSet = preparedStatement.executeQuery()) {
				return mapResultSet(resultSet);
			}
		} catch (Exception e) {
			System.out.println(e.toString());	
		}
		return new ArrayList<>();
	}

	private String buildSearchQuery(Employee employee) {
		StringBuilder queryBuilder = new StringBuilder();
		queryBuilder.append("SELECT u.ID AS employee_id, u.NAME AS employee_name, u.code AS employee_code, ");
		queryBuilder.append("u.BIRTH_CITY AS birth_city, u.BIRTH_DATE AS birth_date, ");
		queryBuilder.append("d.NAME AS department_name, j.TITLE AS job, ct.TYPE AS contract_type, ");
		queryBuilder.append("u2.NAME AS direct_manager, u.STATUS AS status ");
		queryBuilder.append("FROM TEST.USERTABLE u ");
		queryBuilder.append("LEFT JOIN TEST.JOB j ON u.JOB_ID = j.ID ");
		queryBuilder.append("LEFT JOIN TEST.DEPARTMENT d ON u.DEPARTMENT_ID = d.ID ");
		queryBuilder.append("LEFT JOIN TEST.CONTRACTTYPE ct ON u.CONTRACT_TYPE_ID = ct.ID ");
		queryBuilder.append("LEFT JOIN TEST.USERTABLE u2 ON u.MANAGER_ID = u2.ID ");
		queryBuilder.append("WHERE 1=1 ");

		if (employee.getEmployeeCode() != null && !employee.getEmployeeCode().isEmpty()) {
			queryBuilder.append("AND u.CODE LIKE ? ");
		}
		if (employee.getEmployeeName() != null && !employee.getEmployeeName().isEmpty()) {
			queryBuilder.append("AND u.NAME LIKE ? ");
		}
		if (employee.getBirthCity() != null && !employee.getBirthCity().isEmpty()) {
			queryBuilder.append("AND u.BIRTH_CITY LIKE ? ");
		}
		if (employee.getBirthDate() != null) {
			queryBuilder.append("AND u.BIRTH_DATE = ? ");
		}
		if (employee.getDepartmentName() != null && !employee.getDepartmentName().isEmpty()) {
			queryBuilder.append("AND d.NAME LIKE ? ");
		}
		if (employee.getJob() != null && !employee.getJob().isEmpty()) {
			queryBuilder.append("AND j.TITLE LIKE ? ");
		}
		if (employee.getContractType() != null && !employee.getContractType().isEmpty()) {
			queryBuilder.append("AND ct.TYPE LIKE ? ");
		}
		if (employee.getDirectManager() != null && !employee.getDirectManager().isEmpty()) {
			queryBuilder.append("AND u2.NAME LIKE ? ");
		}
		if (employee.getStatus() != null && !employee.getStatus().isEmpty()) {
			queryBuilder.append("AND u.STATUS LIKE ? ");
		}
		return queryBuilder.toString();
	}

	private void setParameters(PreparedStatement preparedStatement, Employee employee) throws Exception {
		int paramIndex = 1;
		if (employee.getEmployeeCode() != null && !employee.getEmployeeCode().isEmpty()) {
			preparedStatement.setString(paramIndex++, "%" + employee.getEmployeeCode() + "%");
		}
		if (employee.getEmployeeName() != null && !employee.getEmployeeName().isEmpty()) {
			preparedStatement.setString(paramIndex++, "%" + employee.getEmployeeName() + "%");
		}
		if (employee.getBirthCity() != null && !employee.getBirthCity().isEmpty()) {
			preparedStatement.setString(paramIndex++, "%" + employee.getBirthCity() + "%");
		}
		if (employee.getBirthDate() != null) {
			preparedStatement.setDate(paramIndex++, new java.sql.Date(employee.getBirthDate().getTime()));
		}
		if (employee.getDepartmentName() != null && !employee.getDepartmentName().isEmpty()) {
			preparedStatement.setString(paramIndex++, "%" + employee.getDepartmentName() + "%");
		}
		if (employee.getJob() != null && !employee.getJob().isEmpty()) {
			preparedStatement.setString(paramIndex++, "%" + employee.getJob() + "%");
		}
		if (employee.getContractType() != null && !employee.getContractType().isEmpty()) {
			preparedStatement.setString(paramIndex++, "%" + employee.getContractType() + "%");
		}
		if (employee.getDirectManager() != null && !employee.getDirectManager().isEmpty()) {
			preparedStatement.setString(paramIndex++, "%" + employee.getDirectManager() + "%");
		}
		if (employee.getStatus() != null && !employee.getStatus().isEmpty()) {
			preparedStatement.setString(paramIndex++, "%" + employee.getStatus() + "%");
		}
	}

	private List<Employee> mapResultSet(ResultSet resultSet) throws Exception {
		List<Employee> employees = new ArrayList<>();
		while (resultSet.next()) {
			Employee emp = new Employee();
			emp.setEmployeeId(resultSet.getLong("employee_id"));
			emp.setEmployeeName(resultSet.getString("employee_name"));
			emp.setEmployeeCode(resultSet.getString("employee_code"));
			emp.setBirthCity(resultSet.getString("birth_city"));
			emp.setBirthDate(resultSet.getDate("birth_date"));
			emp.setDepartmentName(resultSet.getString("department_name"));
			emp.setJob(resultSet.getString("job"));
			emp.setContractType(resultSet.getString("contract_type"));
			emp.setDirectManager(resultSet.getString("direct_manager"));
			emp.setStatus(resultSet.getString("status"));
			employees.add(emp);
		}
		return employees;
	}
}
