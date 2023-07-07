package com.crud.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.employee.dao.EmployeeRepo;
import com.crud.employee.exception.EmployeeRegardingException;
import com.crud.employee.model.EmployeePOJO;

@RestController
@RequestMapping("/api")
public class EmpController {

	
	
	@Autowired
  private EmployeeRepo empRepo ;
	
	//getAllemployee
	
	@GetMapping("/emp")
	public List<EmployeePOJO> getAllEmployees()
	{
		return empRepo.findAll();
	}
	
	
	
	//add employee
	@PostMapping("/emp")
	public EmployeePOJO createEmployee(@RequestBody EmployeePOJO emp)
	{
		return empRepo.save(emp);
	}
	
	
	//get by id api
	@GetMapping("/emp/{id}")
	public ResponseEntity<EmployeePOJO> getEmployeeById(@PathVariable Integer id)
	{
		   EmployeePOJO empp  = empRepo.findById(id).orElseThrow(()->new EmployeeRegardingException("Employee not exits with id:"+id));
		   
			return ResponseEntity.ok(empp);
	}
	
	
	//update api
	@PutMapping("/emp/{id}")
	public ResponseEntity<EmployeePOJO> updateEmployee(@PathVariable Integer id ,@RequestBody EmployeePOJO emp)
	{
		EmployeePOJO empp=empRepo.findById(id).orElseThrow(
				
				()->new EmployeeRegardingException("Employee not exits with id :"+id)
				
				);
		
		empp.setFirstName(emp.getFirstName());
		empp.setLastName(emp.getLastName());
		empp.setMbNumber(emp.getMbNumber());
		empp.setCompanyName(emp.getCompanyName());
		empp.setDescription(emp.getDescription());
		empp.setGender(emp.getGender());
		empp.setLocation(emp.getLocation());
		empp.setPosition(emp.getPosition());
		
		EmployeePOJO updateEmp=empRepo.save(empp);
		return ResponseEntity.ok(updateEmp);
		
		
	}
	
	//delete api
	@DeleteMapping("/emp/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Integer id )
	{
		EmployeePOJO emp=empRepo.findById(id).orElseThrow(
				
				()-> new EmployeeRegardingException("Employee not exits with this id:"+id)
				
				);
		
		empRepo.delete(emp);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
}
