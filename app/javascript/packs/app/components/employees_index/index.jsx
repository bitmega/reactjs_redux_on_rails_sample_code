import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Filter } from '../employees_filter/filter'
import { CConfirmModal } from '../confirm_modal/confirm_modal'
import { EMPLOYEE_FILTERS } from '../../constant'
import { Link } from 'react-router-dom'
import {
  deleteEmployee,
  setEmployeeFilter,
  setEmployees,
  updateEmployee
} from "../../actions/employees"
import "./index.scss"

export class CEmployeesIndex extends React.Component {

  constructor(props) {
    super(props);

    this.confirmModalId = "del-employee"

    this.state = {
      employeeWillBeDeleted: {}
    };

    this.fetchEmployees()
  }

  fetchEmployees(){

    let self = this;
    axios.get(
      Routes.employees_path()
    ).then( response => {
      self.props.setEmployees(response.data)
    }).catch( error => {
      errorHandling(error)
    })
  }

  delEmployee = (employee) => {
    this.setState({employeeWillBeDeleted: employee});
    $(`#${this.confirmModalId}`).modal("show")
  }

  requestDelEmployee = () => {
    let self = this;
    axios.delete(
      Routes.employee_path(this.state.employeeWillBeDeleted.id)
    ).then( response => {
      if(response.data.success) {
        self.props.deleteEmployee(self.state.employeeWillBeDeleted.id);
        notice(response.data.message)
      } else {
        warning(response.data.message)
      }
    }).catch( error => {
      errorHandling(error)
    })
  }

  render(){
    let t = i18ntranslate.bind({rootI18n: "employees.index"});

    return (
      <div className="employees-index">

        <h4 className="title">{t("title")}</h4>

        <div className="filter-region row">
          <div className="col-xs-2 col-md-1 filter-icon">
            <i className="fa fa-filter"/>
          </div>
          <div className="col-xs-10 col-md-11 filter-types">
            { _.values(EMPLOYEE_FILTERS).map( (filter, index) =>
              <Filter key={index} filter={filter} />
            )}
          </div>
        </div>

        <div className="result-region table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>{t("name")}</th>
                <th className="salary text-right">{t("salary")}</th>
                <th className="dob text-right">{t("dob")}</th>
                <th className="level">{t("level")}</th>
                <th className="actions text-right">{t("actions")}</th>
              </tr>
            </thead>
            <tbody>
                {this.props.employees.map( employee =>
                  <tr
                    key={employee.id}
                    className={employee.level_key}
                  >
                    <td className="break-word">{employee.name}</td>
                    <td className="text-right">{employee.salary_human_readable}</td>
                    <td className="text-right">{employee.dob_human_readable}</td>
                    <td>{I18n.t(`employees.levels.${employee.level_key}`)}</td>
                    <td className="text-right actions">
                      <Link to={Routes.edit_employee_path(employee.id)}>
                        <i className="fa fa-pencil-square-o" />
                      </Link>
                      {
                        !this.props.editMode &&
                        <i className="fa fa-times" onClick={() => this.delEmployee(employee)}/>
                      }
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>

        <div className="confirm-modal-region">
          <CConfirmModal
            desc={t("del_employee_desc",{name: this.state.employeeWillBeDeleted.name})}
            yesCallBack={this.requestDelEmployee}
            id={this.confirmModalId}
          />
        </div>
      </div>
    );
  }
}
const getFilteredEmployees = (employees, filter) => {
  switch (filter) {
    case EMPLOYEE_FILTERS.SHOW_ALL:
      return employees
    case EMPLOYEE_FILTERS.GREATER_THAN_1000_USD:
      return employees.filter( employee => employee.salary > 1000 )
    case EMPLOYEE_FILTERS.LESS_THAN_OR_EQUAL_1000_USD:
      return employees.filter( employee => employee.salary <= 1000 )
  }
}

const mapStateToProps = (state) => ({
  employees: getFilteredEmployees(state.employees, state.filter)
})

const mapDispatchToProps = {
  deleteEmployee: deleteEmployee,
  setEmployeeFilter: setEmployeeFilter,
  setEmployees: setEmployees
}

export const EmployeesIndex =  connect(
  mapStateToProps,
  mapDispatchToProps
)(CEmployeesIndex)

