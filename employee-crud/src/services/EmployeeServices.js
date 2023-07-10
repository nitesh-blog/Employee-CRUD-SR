import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api";


//Get employee
export const fetchEmployee = async ()=>{
    try {
        const resp = await axios.get(`${API_BASE_URL}/emp`);
        return resp.data;
    } catch (err) {
        throw err;
    }
};

//push employee
export const createEmployee =async (employeeData)=>{
   try {
        const resp = await axios.post(`${API_BASE_URL}/emp`, employeeData);
        return resp.data;
    } catch (err) {
        throw err;
    }
};

//put employee
export const updateEmployee = async (employeeId , employeeData)=>{
    try {
        const resp = await axios.put(`${API_BASE_URL}/emp/${employeeId}`, employeeData);
        return resp.data;
    } catch (err) {
        throw err;
    }
};

//delete employee

export const deleteEmployee = async (employeeId)=>{
    try {
        const resp = await axios.delete(`${API_BASE_URL}/emp/${employeeId}`);
        return resp.data;
    } catch (err) {
        throw err;
    }

};