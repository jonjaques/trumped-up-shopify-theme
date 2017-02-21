import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Application from './app'

const rootEl = document.getElementById('application')

if (module.hot) {
  module.hot.accept('./app', ()=> renderComponent(require('./app').default))
}

rootEl.classList.remove('loading')
render(Application)

function render(App) {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    rootEl
  )
}
