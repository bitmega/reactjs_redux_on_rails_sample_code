import React from 'react'
import { CDatePicker } from '../date_picker/date_picker'
import { CSelect2 } from '../select2/select2'

export class CEmployeesForm extends React.Component {
  constructor(props) {
    super(props);
    this.formSelector = ".employee-form";
    this.initForm = {
      name: "",
      salary: "",
      dob: "",
      level: gon.EMPLOYEE_LEVELS.fresher
    };
    this.state = {
      employee: {...this.initForm},
      isRequesting: false
    }
  }

  handleChange = (e) => {
    let {employee} = {...this.state}
    employee[e.target.name] = e.target.value
    this.setState({employee: employee})
  }

  validateForm(){
    if (!this.validator)
      this.validator = $(this.formSelector).validate({
        onSubmit: false,
        rules: {
          name: {
            required: true,
            minlength: 2,
            maxlength: 256
          },
          salary: {
            required: true,
            min: 1,
            max: 100000,
            number: true
          },
          level: {
            required: true
          },
          dob: {
            required: true
          }
        }
      })

    let isValid = this.validator.form();
    this.validator.showErrors();
    // focus on first input error field
    if (this.validator.errorList[0])
      this.validator.errorList[0].element.focus()

    return isValid;
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({isRequesting: true});
      return true;
    } else {
      return false;
    }
  }

  afterSubmit(response){
    if (response.data.success){
      notice(response.data.message)
    } else {
      warning(response.data.message)
    }
    this.setState({isRequesting: false});
  }

  formBodyDOM(){
    let t = i18ntranslate.bind({rootI18n: "employees.form"})
    let endDate = moment().subtract(gon.AGE_MUST_GREATER_THAN, "years");
    // NOTES: must set default View Date If restrict for endDate option
    let datepickerOptions = {
      endDate: endDate.format(JSCONSTANT.MOMENT_FORMAT),
      defaultViewDate: {
        year: endDate.year(),
        month: endDate.month(),
        day: endDate.day()
      }
    };
    return(
      // template begin --->
      <form className="form-horizontal employee-form">
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            {t("name")}
            <span>*</span>
          </label>
          <div className="col-sm-9">
            <input
              autoFocus
              value={this.state.employee.name}
              name="name"
              type="text"
              className="form-control"
              placeholder={t("name")}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="salary">
            {t("salary")}
            <span>*</span>
          </label>
          <div className="col-sm-9">
            <input
              value={this.state.employee.salary}
              name="salary"
              type="number"
              className="form-control"
              placeholder={t("salary_placeholder")}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="dob">
            {t("dob")}
            <span>*</span>
          </label>
          <div className="col-sm-9">
            <CDatePicker
              value={this.state.employee.dob}
              onChange={this.handleChange}
              name="dob"
              options={datepickerOptions}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="level">
            {t("level")}
            <span>*</span>
          </label>
          <div className="col-sm-9">
            <CSelect2
              value={this.state.employee.level}
              onChange={this.handleChange}
              name="level"
              options={gon.EMPLOYEE_LEVEL_OPTIONS}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button disabled={this.state.isRequesting} onClick={this.handleSubmit} className="btn btn-info submit">
              {I18n.t("common.submit")}
            </button>
          </div>
        </div>

      </form>
      // template end <---
    );
  }
}
