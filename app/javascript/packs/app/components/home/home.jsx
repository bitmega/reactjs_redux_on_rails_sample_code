import React from 'react'
import { connect } from 'react-redux'
import { EmployeesIndex }  from '../employees_index/index'
import { EmployeesNew } from '../employees_new/new'

export const CHome = () => {
  return (
    <div className="home-page row">
      <div className="col-sm-7">
        <EmployeesIndex />
      </div>
      <div className="col-sm-5">
        <EmployeesNew />
      </div>
    </div>
  )
}
