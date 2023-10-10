import { useState } from 'react'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Invoice from './components/Invoice/Invoice'
import SingleInvoice from './components/Invoice/SingleInvoice'
import { useStateContext } from './context/ContextProvide'

function App() {
 

  return (
    <>
   <BrowserRouter>
      <div className='main'>
  
   <Routes>
    <Route path='/' element={<Invoice/>}/>
    <Route path='invoice/:id' element={<SingleInvoice />}/>
   </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
