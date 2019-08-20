import React from 'react'
import { PropTypes }from 'react'

export const CConfirmModal = (props) => {

  let t = i18ntranslate.bind({rootI18n: "common"})

  return (
    <div className="modal fade" role="dialog" id={props.id}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h5 className="modal-title">{props.title}</h5>
          </div>
          <div className="modal-body">
            <p dangerouslySetInnerHTML={{__html: props.desc}}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">{props.cancelText}</button>
            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={props.yesCallBack}>{props.yesText}</button>
          </div>
        </div>

      </div>
    </div>
  )
}

CConfirmModal.defaultProps = {
  title: I18n.t("common.confirm_title"),
  desc: "",
  cancelText: I18n.t("common.no_t"),
  yesText: I18n.t("common.yes_t")
}
