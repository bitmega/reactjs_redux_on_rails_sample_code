// NOTES: activeClassName of react-router will add class if route match
import React, {PropTypes} from 'react'
import { withRouter, matchPath } from 'react-router'
import { NavLink } from 'react-router-dom'

export class CLayout extends React.Component {

  exactMatch(path){
    return matchPath(this.props.location.pathname, {
      path: path,
      exact: true
    })
  }

  matchEditEmployee(){
    return this.exactMatch('/employees/:id/edit')
  }

  render(){
    let t = i18ntranslate.bind({rootI18n: "layout"})
    return (
      <div className="employees-app row">
        <div className="col-sm-2 left-menu collapse navbar-collapse" id="left-menu">
          <div className="level-1">{t("links")}</div>
            <ul className="list-unstyled">
              <li className="level-2">
                <NavLink to={Routes.root_path()} activeClassName="choosen" exact>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  {t("home")}
                </NavLink>
                {
                  this.matchEditEmployee() ? (
                    <div className="level-3 choosen">{t("edit_employee")}</div>
                  ) : ""
                }
              </li>

              <li className="level-2">
                <NavLink to={Routes.about_us_path()} activeClassName="choosen" exact>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  {t("about_us")}
                </NavLink>
              </li>

            </ul>

            <div className="level-1">{t("tech_stacks")}</div>
            <ul className="list-unstyled">
              {JSCONSTANT.TECH_STACKS.map( stack =>
                <li key={stack.key} className="level-2">
                  <a target="_blank" href={stack.link}>{t(stack.key)}</a>
                </li>
              )}
            </ul>

          </div>

        <div className="col-sm-10 right-menu">
          {this.props.children}
        </div>

      </div>
    )
  }

}
// NOTES: withRouter will set match, location and history to CLayout component when route change
export const Layout = withRouter(CLayout)
