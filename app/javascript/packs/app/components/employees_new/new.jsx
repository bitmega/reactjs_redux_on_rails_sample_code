import React from 'react'
import { connect } from 'react-redux'
import { PropTypes }from 'react'
import { CEmployeesForm } from '../employees_form/form'
import { addEmployee } from "../../actions/employees"
import "./new.scss"

// NOTES: we can let CEmployeesNew extends from CEmployeesForm
export class CEmployeesNew extends CEmployeesForm {

  handleSubmit = (e) => {
    if (!super.handleSubmit(e))
      return;

    let self = this;

    axios.post(Routes.employees_path(),{
      employee: this.state.employee
    }).then( response => {
      if (response.data.success){
        self.props.addEmployee(response.data.employee);
        this.setState({employee: {...this.initForm}});
        this.validator.currentElements[0].focus();
      }
      self.afterSubmit(response)
    }).catch( error => {
      errorHandling(error)
      this.setState({isRequesting: false});
    })

  }

  render(){
    let t = i18ntranslate.bind({rootI18n: "employees.new"})

    return (
      <div className="new-employee">
      <div className="row">
        <h4 className="title col-sm-offset-3 col-sm-9" >{t("title")}</h4>
      </div>
      {this.formBodyDOM.bind(this)()}
    </div>


    );
  }
}
const mapDispatchToProps = {
  addEmployee: addEmployee
}
export const EmployeesNew = connect(
  null,
  mapDispatchToProps
)(CEmployeesNew)
