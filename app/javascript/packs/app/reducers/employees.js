import { EMPLOYEE_ACTIONS } from "../actions/types"

export const employees = (state=[], action) => {
  switch (action.type) {
    case EMPLOYEE_ACTIONS.SET_EMPLOYEES:
      return action.payload.employees
    case EMPLOYEE_ACTIONS.ADD_EMPLOYEE:
      return [
        ...state,
        action.payload.employee
      ]
    case EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE:
      return state.map( employee =>
        employee.id == action.payload.employee.id ?
          action.payload.employee :
          employee
      )
    case EMPLOYEE_ACTIONS.DELETE_EMPLOYEE:
      return state.filter(employee => employee.id != action.payload.employee_id)
    default:
      return state
  }
}
