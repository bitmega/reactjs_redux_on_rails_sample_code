import React from 'react'
import about_us_img from 'images/about_us.jpg'
import "./about_us.scss"

export const CAboutUs = () => {
  return (
    <div className="about-us">
      <img src={about_us_img} className="center-block team-pic"/>
      <div dangerouslySetInnerHTML={{__html: I18n.t("common.about_us")}}/>
    </div>
  )
}
