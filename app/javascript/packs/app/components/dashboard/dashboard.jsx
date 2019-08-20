import React from 'react'
import { EmployeesIndex } from '../employees_index/index'
import { EmployeesEdit } from '../employees_edit/edit'

export const CEditEmployee = (props) => {
  return (
    <div className="edit-employee-page row">
      <div className="col-sm-7">
        <EmployeesIndex
          editMode={true}
        />
      </div>
      <div className="col-sm-5">
        <EmployeesEdit
          match={props.match}
        />
      </div>
    </div>
  )
}

