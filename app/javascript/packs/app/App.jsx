import React from 'react'
import { Provider } from 'react-redux'
import { store } from './stores/root'
import { Routes } from './routes'

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
export default App
