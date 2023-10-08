import React, { useEffect, useState } from 'react'
import './invoice.css'
import {FaAngleDown, FaAngleRight,  FaArrowLeft,  FaPlusCircle, FaSun} from 'react-icons/fa'
import Form from '../form/Form'
import invoicee from '../../assets/images/invoice.jpg'
import me from '../../assets/images/me.jpg'
import '../form/Form.css'
import { FaTimes } from 'react-icons/fa'

function Invoice() {
  

  // const invoice=[
  //   {
  //     id:1,
  //     code:'#467',
  //     date:'12 july 2022',
  //     name:'peter gosens',
  //     amount:130,
  //     status:'paid'
  //   },
  //   {
  //     id:2,
  //     code:'#126',
  //     date:'12 june 2022',
  //     name:'john doe',
  //     amount:120,
  //     status:'paid'
  //   },
  //   {
  //     id:3,
  //     code:'#288',
  //     date:'12 march 2023',
  //     name:'eric omongu',
  //     amount:123,
  //     status:'pending'
  //   },
  //   {
  //     id:4,
  //     code:'#222',
  //     date:'11 febrwary 2022',
  //     name:'samson daniel',
  //     amount:234,
  //     status:'paid'
  //   },
  //   {
  //     id:5  ,
  //     code:'#312',
  //     date:'12 july 2022',
  //     name:'peter gosens',
  //     amount:500,
  //     status:'pending'
  //   },
  // ]
  
  const [model,setModal]=useState(true)

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

const updatedInvoices = [...existingInvoices, formData];

// Save the updated invoices array back to localStorage
  // Save the updated invoices array back to localStorage
  localStorage.setItem('invoices', JSON.stringify(updatedInvoices));

  setInvoice(updatedInvoices);

console.log(invoice)
setCode('')
setDate('')
setName('')
setAmount('')
setSelect('')
setModal(true)

  }
  
  function openModel(){
  
    setModal((prevModal)=>!prevModal)
     }
     useEffect(() => {
      const existingInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
      setInvoice(existingInvoices);
    }, []);
    

  return (
    <>
  
    <section className='invoice-section'>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <img src={invoicee} alt="" />
          <div className='sun-btn'>
              <FaSun className='sun-logo'/>
<div className='profile-btn'>
<img src={me}/>
</div>
          </div>

        </div>
      </div>
   <div className='invoice-header'>
      <div className='invoice-title'>
        <h2>invoices</h2>
        <p>there are 7 total invoices</p>
      </div>
      <div className='invoice-content'>
        <div className='filter'>
        <p>filter by status</p>
        <FaAngleDown className='filter-icon'/>
        </div>
      
          <div className='btn-add' onClick={openModel}><FaPlusCircle/> <p>new invoice</p></div>
        
      </div>
    </div>
    <div>
    
      {model?(
<div className='invoice-container'>

    {invoice.map((invo)=>(
      <div key={invo.code} className="invoice-content1">
          <h2>{invo.code}</h2>
          <p>{invo.date}</p>
      <p className='p-name'>{invo.name}</p>
      <h2>${invo.amount}</h2>
      <div className='btn-name'><button  style ={{
        backgroundColor:invo.status==='paid'?'mediumseagreen':'orange',
        color:'white'
      }} className='btn-status'>{invo.status}</button>
      <FaAngleRight className='arrow'/>
      </div>
      </div>
    
      
    ))}
    </div>
      ):<>
      <div className='form-container'>
     <form action="" method="post" onSubmit={handleSubmit}>
      <FaTimes className='closeMenu' onClick={openModel}/>
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
      
      </>}</div>
    

    </section>
    </>
 
  )
}

export default Invoice