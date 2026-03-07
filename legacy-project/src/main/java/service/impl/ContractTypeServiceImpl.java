package service.impl;

import models.ContractType;
import service.ContractTypeService;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ContractTypeServiceImpl implements ContractTypeService {
    private DataSource dataSource;

    public ContractTypeServiceImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public List<ContractType> getContractTypes() {
        String query = "SELECT ID, TYPE FROM TEST.CONTRACTTYPE";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            return mapResultSet(resultSet);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ArrayList<>();
    }

    private List<ContractType> mapResultSet(ResultSet resultSet) throws Exception {
        List<ContractType> contractTypes = new ArrayList<>();
        while (resultSet.next()) {
            ContractType contractType = new ContractType();
            contractType.setId(resultSet.getLong("ID"));
            contractType.setType(resultSet.getString("TYPE"));
            contractTypes.add(contractType);
        }
        return contractTypes;
    }
}
