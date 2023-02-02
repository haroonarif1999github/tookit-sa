import React from 'react'
import ApiThunk from './features/ApiThunk'
import Counter from './features/Counter'
import Products from './features/Products'
const App = () => {
  return (
    <div>
      <Counter/>
      <Products/>
      <ApiThunk/>
    </div>
  )
}

export default App

