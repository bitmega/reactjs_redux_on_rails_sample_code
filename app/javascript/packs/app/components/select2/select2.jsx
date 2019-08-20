import React, { PropTypes }from 'react'

export class CSelect2 extends React.Component {

  componentDidMount(){
    var self = this;
    $(this.domNode).select2(this.props.configs)
    $(this.domNode).on("change", e => {
      self.props.onChange({target: e.currentTarget})
    })
  }

  componentDidUpdate(){
    // NOTES: hotfix for select2 not update in edit page because select2 be binded before set value)
    $(this.domNode).trigger('change.select2')
  }

  setDomNode = (domNode) => {
    this.domNode = domNode;
  }

  render(){
    return (
      <select
        className="form-control select2-hide"
        name={this.props.name}
        onChange={this.props.onChange}
        value={this.props.value}
        ref={input => this.setDomNode(input)}
      >
        {this.props.options.map( option =>
          <option key={option.display} value={option.value}>{option.display}</option>
        )}
    </select>
    )
  }
}

CSelect2.defaultProps = {
  configs: {}
}

