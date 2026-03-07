package service.impl;

import models.Department;
import service.DepartmentService;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class DepartmentServiceImpl implements DepartmentService {
    private DataSource dataSource;

    public DepartmentServiceImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public List<Department> getDepartments() {
        String query = "SELECT ID, NAME FROM TEST.DEPARTMENT";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            return mapResultSet(resultSet);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ArrayList<>();
    }

    private List<Department> mapResultSet(ResultSet resultSet) throws Exception {
        List<Department> departments = new ArrayList<>();
        while (resultSet.next()) {
            Department department = new Department();
            department.setId(resultSet.getLong("ID"));
            department.setName(resultSet.getString("NAME"));
            departments.add(department);
        }
        return departments;
    }
}
