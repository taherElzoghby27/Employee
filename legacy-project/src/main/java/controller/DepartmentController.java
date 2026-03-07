package controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import models.Department;
import service.DepartmentService;
import service.impl.ServiceFactory;
import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;
import java.util.List;

@WebServlet("/department")
public class DepartmentController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Resource(name = "employee_db")
    private DataSource dataSource;
    private DepartmentService departmentService;

    @Override
    public void init() throws ServletException {
        this.departmentService = ServiceFactory.createDepartmentService(dataSource);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        List<Department> departments = departmentService.getDepartments();
        
        ObjectMapper objectMapper = new ObjectMapper();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(objectMapper.writeValueAsString(departments));
    }
}
