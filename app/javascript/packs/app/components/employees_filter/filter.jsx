import React from 'react'
import { connect } from 'react-redux'
import { setEmployeeFilter } from "../../actions/employees"
import { PropTypes }from 'react'
import { EMPLOYEE_FILTERS } from '../../constant'

export const CFilter = (props) => {

  let t = i18ntranslate.bind({rootI18n: "employees.filter"})

  return (
    <h4 className="employees-filter">
      {props.active ? (
        <span className="label label-info">
          {t(props.filter)}
        </span>
      ) : (
        <span className="label label-default not-choosen" onClick={() => props.setEmployeeFilter(props.filter)} >
          {t(props.filter)}
        </span>
      )}
    </h4>

  )
}
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
})

const mapDispatchToProps = {
  setEmployeeFilter: setEmployeeFilter
}

export const Filter =  connect(
  mapStateToProps,
  mapDispatchToProps
)(CFilter)
