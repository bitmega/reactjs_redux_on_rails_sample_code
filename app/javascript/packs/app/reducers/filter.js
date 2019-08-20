import { EMPLOYEE_FILTERS } from "../constant"
import { EMPLOYEE_ACTIONS } from "../actions/types"

export const filter = (state=EMPLOYEE_FILTERS.SHOW_ALL, action) => {
  switch (action.type) {
    case EMPLOYEE_ACTIONS.SET_EMPLOYEE_FILTER:
      return action.payload.filter
    default:
      return state
  }
}
