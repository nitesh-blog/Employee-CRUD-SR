import axios from "axios"

import{FETCH_EMPLOYEE,
CREATE_EMPLOYEE,
UPDATE_EMPLOYEE,
DELETE_EMPLOYEE} from './ActionType';

import {fetchEmployee,
createEmployee,
updateEmployee,
deleteEmployee} from '../services/EmployeeServices';


export const fetchEmployee =()=>{
   return dispatch =>{
   fetchEmployee().then(data =>{
    dispatch({
        type: FETCH_EMPLOYEE,
        payload: data
    });
   }).catch(
    err =>{
     throw err;
    }
   );
   }; 
};


export const addEmployee =(employeeData)=>{
    return dispatch =>{
        createEmployee(employeeData).then(
            data =>{
                dispatch({
                    type:CREATE_EMPLOYEE,
                    payload:data
                });
            
            }
        ).catch(err =>{
            throw err;
        });
    };
};


export const updateEmployeeData = (employeeId,employeeData)=>{
    return dispatch =>{
        updateEmployee(employeeId,employeeData).then(
            data=>{
                dispatch({
                    type:UPDATE_EMPLOYEE,
                    payload:data
                });
            }
        ).catch(err=>{
            throw err;
        })
    };
};


export const removeEmployee = (employeeId)=>{
    return dispatch =>{
        deleteEmployee(employeeId).then(data=>{
           dispatch({
            type:DELETE_EMPLOYEE,
            payload:employeeId
           });
        }).catch(err=>{
            throw err;
        })
    };
};