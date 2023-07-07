package com.crud.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.crud.employee.model.EmployeePOJO;

@SpringBootApplication
public class EmployeeCrudApplication implements CommandLineRunner {
	
	

	public static void main(String[] args) {
		SpringApplication.run(EmployeeCrudApplication.class, args);
		
		
	}

	@Override
	public void run(String... args) throws Exception {
		
		System.out.println("hello");
		
		
		
		
		
	}

}
