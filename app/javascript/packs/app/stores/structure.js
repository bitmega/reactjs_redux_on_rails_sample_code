import { combineReducers } from 'redux'
import { filter } from '../reducers/filter'
import { employees } from '../reducers/employees'

export const structure = combineReducers({
  filter: filter,
  employees: employees
})
