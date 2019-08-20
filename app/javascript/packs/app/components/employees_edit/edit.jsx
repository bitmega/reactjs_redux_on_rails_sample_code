import React from 'react'
import { PropTypes }from 'react'
import { CEmployeesForm } from '../employees_form/form'
import { connect } from 'react-redux'
import { updateEmployee } from "../../actions/employees"

// NOTES: we can let CEmployeesEdit extends from CEmployeesForm
export class CEmployeesEdit extends CEmployeesForm {

  constructor(props) {
    super(props);

    this.fetchEmployee()
  }

  // NOTES: You can update state in componentWillReceiveProps
  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.id != nextProps.match.params.id)
      // NOTES: If you only call this.fetchEmployee() without explicit argument id(new employee id), this.fetchEmployee will use old id of previous props
      this.fetchEmployee(nextProps.match.params.id)
  }

  params(){
    return this.props.match.params
  }

  fetchEmployee(id=null){
    id = id || this.params().id
    let self = this;
    axios.get(Routes.employee_path(id)).then( response => {
      self.setState({employee: response.data})
    }).catch( error => {
      errorHandling(error)
    })
  }

  handleSubmit = (e) => {
    if (!super.handleSubmit(e))
      return;

    let self = this;

    axios.put(Routes.employee_path(this.params().id),{
      employee: this.state.employee
    }).then( response => {
      if (response.data.success)
        self.props.updateEmployee(response.data.employee)
      self.afterSubmit(response)
    }).catch( error => {
      errorHandling(error)
      this.setState({isRequesting: false});
    })

  }

  render(){

    let t = i18ntranslate.bind({rootI18n: "employees.edit"})

    return (
      <div>
        <div className="edit-employee center-block">
          <div className="row">
            <h4 className="title col-sm-offset-3 col-sm-9" >{t("title")}</h4>
          </div>
          {this.formBodyDOM.bind(this)()}
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = {
  updateEmployee: updateEmployee
}
export const EmployeesEdit = connect(
  null,
  mapDispatchToProps
)(CEmployeesEdit)

