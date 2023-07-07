package com.crud.employee.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.employee.model.EmployeePOJO;

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeePOJO, Integer> {

	
	
	
	
}
