import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  const disp = (type) => store.dispatch({ type })

  const { good, bad, ok } = store.getState()

  return (
    <div>
      <button onClick={disp('GOOD')}>good</button> 
      <button onClick={disp('OK')}>ok</button> 
      <button onClick={disp('BAD')}>bad</button>
      <button onClick={disp()}>reset stats</button>
      <div>good {good}</div>
      <div>ok {ok}</div>
      <div>bad {bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
