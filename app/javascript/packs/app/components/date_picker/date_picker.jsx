
import React, { PropTypes }from 'react'
import { DEFAULT_DATEPICKER_OPTIONS } from '../../constant'

export class CDatePicker extends React.Component {

  componentDidMount(){
    var self = this;

    $(this.domNode).datepicker(
      {...DEFAULT_DATEPICKER_OPTIONS, ...this.props.options}
    ).on("changeDate", e => {
      self.props.onChange({
        target: {
          name: self.props.name,
          value: $(self.domNode).datepicker("getUTCDate")
        }
      })
    })
  }

  componentDidUpdate(){
    // NOTES: hotfix for view date not update in edit page because datepicker be binded before set value
    $(this.domNode).datepicker("update")
  }

  setDomNode = (domNode) => {
    this.domNode = domNode;
  }

  render(){

   let displayValue = this.props.value ? moment(this.props.value).format(JSCONSTANT.MOMENT_FORMAT) : ""

    return (
      <div
      className="input-group date"
      ref={input => this.setDomNode(input)}
    >
        <input
          type="text"
          className="form-control date-picker-display"
          name={this.props.name}
          value={displayValue}
          placeholder={JSCONSTANT.DATEPICKER_FORMAT}
        />
        <input
          type="hidden"
          className="form-control"
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
        />

        <div className="input-group-addon">
            <span className="fa fa-calendar"></span>
        </div>
    </div>
    )
  }
}

CDatePicker.defaultProps = {
  options: DEFAULT_DATEPICKER_OPTIONS
}
