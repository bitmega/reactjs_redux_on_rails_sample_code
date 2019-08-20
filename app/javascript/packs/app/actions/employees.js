import { EMPLOYEE_ACTIONS } from "./types"

export const setEmployees = (employees) => ({
  type: EMPLOYEE_ACTIONS.SET_EMPLOYEES,
  payload: {
    employees: employees
  }
})

export const addEmployee = (employee) => ({
  type: EMPLOYEE_ACTIONS.ADD_EMPLOYEE,
  payload: {
    employee: employee
  }
})

export const deleteEmployee = (employee_id) => ({
  type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE,
  payload: {
    employee_id: employee_id
  }
})

export const updateEmployee = (employee) => ({
  type: EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE,
  payload: {
    employee: employee
  }
})

export const setEmployeeFilter = (filter) => ({
  type: EMPLOYEE_ACTIONS.SET_EMPLOYEE_FILTER,
  payload: {
    filter: filter
  }
})
