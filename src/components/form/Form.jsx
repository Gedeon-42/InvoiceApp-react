import React, { useState } from 'react'
import './Form.css'
import { FaTimes } from 'react-icons/fa'
function Form() {
  const [modal,setModal]=useState(true);
  const[code,setCode]=useState('');
  const[date,setDate]=useState('');
  const[name,setName]=useState('')
  const[amount,setAmount]=useState('')
  const[select,setSelect]=useState('pending')
  const[invoice,setInvoice]=useState([])
  
  function handleSubmit(e){
e.preventDefault()
const formData = {
  code,
  date,
  name,
  amount,
  select
}
console.log(formData)
setInvoice([...invoice,formData])
const existingInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
setInvoice(existingInvoices)

// Save the updated invoices array back to localStorage
localStorage.setItem('invoices', JSON.stringify(existingInvoices));

console.log(invoice)
setCode('')
setDate('')
setName('')
setAmount('')
setSelect('')

  }
  function closeModel(){
    setModal((prevModal)=>!prevModal)
    
  }
  return (
    <>{modal &&
    <div className='form-container'>
     <form action="" method="post" onSubmit={handleSubmit}>
      <FaTimes className='closeMenu' onClick={closeModel}/>
        <input type="text" placeholder='code'  onChange={(e)=>{setCode(e.target.value)}}/>
        <input type="date" placeholder='Date' onChange={(e)=>setDate(e.target.value)} />
        <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
        <input type="number" placeholder='amount'onChange={(e)=>setAmount(e.target.value)} />
        <select name="" id="" onChange={(e)=>setSelect(e.target.value)}>
          <option value="pending">pending</option>
          <option value="paid">paid</option>
          <option value="draft">draft</option>
         
        </select>
        <button>add invoice</button>
      </form>
      </div>
    }
    </>
  )
}

export default Form