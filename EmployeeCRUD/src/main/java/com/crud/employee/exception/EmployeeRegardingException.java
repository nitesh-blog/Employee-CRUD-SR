package com.crud.employee.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class EmployeeRegardingException extends RuntimeException {

	
	private static final long serialVersion =1L;
	
	
	public EmployeeRegardingException (String msg)
	{
		super(msg);
	}
	
	
	
	
	
	
	
}
