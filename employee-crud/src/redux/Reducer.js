import {FETCH_EMPLOYEE,
CREATE_EMPLOYEE,
UPDATE_EMPLOYEE,
DELETE_EMPLOYEE} from './ActionType';

const intiatlStatus ={
    employees:[],
    loading:false,
    error:null
};

const employeeReducer = (state =intiatlStatus,action)=>{

    switch(action.type)
    {
        case FETCH_EMPLOYEE:
            return {
                ...state,
                employees:action.payload,
                loading:false,
                error:null
            };

            case CREATE_EMPLOYEE:
                return {
                    ...state,
                    employees:[...state.employees,action.payload],
                    loading:false,
                    error:null
                };

                case UPDATE_EMPLOYEE:
                    return {
                        ...state,
                        employees:state.employees.map(employee=>
                            employee.id === action.payload.id ? action.payload : employee
                        ),

                        loading:false,
                        error:null
          };

          case DELETE_EMPLOYEE:
            return{
                ...state,
                employees:state.employees.filter(
                    employee => employee.id !== action.payload
                ),
                loading:false,
                error:null

            };

            default :
            return state;

    }

};

export default employeeReducer;