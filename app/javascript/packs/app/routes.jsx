import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { CHome } from './components/home/home'
import { CAboutUs } from './components/about_us/about_us'
import { CEditEmployee } from './components/dashboard/dashboard'
import { Layout } from './components/layout/layout'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Layout>
        <Route exact path="/" component={CHome}/>
        <Route exact path="/employees" component={CHome}/>
        <Route exact path="/employees/:id/edit" component={CEditEmployee}/>
        <Route exact path="/about-us" component={CAboutUs}/>
      </Layout>
      </Switch>
    </BrowserRouter>
  )
}
