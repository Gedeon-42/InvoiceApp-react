import React, { useEffect, useState } from 'react'
import './invoice.css'
import {FaAngleDown, FaAngleRight,  FaArrowLeft,  FaPlusCircle, FaSun} from 'react-icons/fa'
import Form from '../form/Form'
import invoicee from '../../assets/images/invoice.jpg'
import profile from '../../assets/images/profile.jpg'
import '../form/Form.css'
import { FaTimes } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvide'

function Invoice() {

  const id= useParams()
const {model,setModal}=useStateContext()
  const[address,setAdress]=useState('');
  const[city,setCity]=useState('');
  const[postcode,setPostcode]=useState('')
  const[country,setCountry]=useState('')
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[address2,setAdress2]=useState('')
  const[city2,setCity2]=useState('')
  const[postcode2,setPostcode2]=useState('')
  const[country2,setCountry2]=useState('')
  const[description,setDescription]=useState('')
  const[select,setSelect]=useState('pending')
  const[date,setDate]=useState('')
  const[invoice,setInvoice]=useState([])
  function handleSubmit(e){
e.preventDefault()
const formData = {
  address,
  date,
  name,
  postcode,
  postcode2,
  city,
  email,
  city2,
  country,
  country2,
  address2,
  description,
  select,
  id: Date.now(),
}
console.log(formData)
setInvoice([...invoice,formData])
const existingInvoices = JSON.parse(localStorage.getItem('invoices')) || [];

const updatedInvoices = [...existingInvoices, formData];

// Save the updated invoices array back to localStorage
  // Save the updated invoices array back to localStorage
  localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
  setInvoice(updatedInvoices);

setAdress('')
setDate('')
setDescription
setName('')
setPostcode('')
setPostcode2
setSelect('')
setCountry2('')
setPostcode2('')
setEmail('')
setCountry('')
setCity('')
setCity2('')
setAdress2('')
setModal(false)

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
<img src={profile}/>
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
    
      
<div className='invoice-container'>

    {invoice.map((invo)=>(
      <Link to={`/invoice/${invo.id}`} key={invo.id} className="invoice-content1">
          <h2>{invo.postcode}</h2>
          <p>{invo.date}</p>
      <p className='p-name'>{invo.name}</p>
      <h2>{invo.address}</h2>
      <div className='btn-name'><button  style ={{
        backgroundColor:invo.select==='paid'?'mediumseagreen':'orange',
        color:'white'
      }} className='btn-status'>{invo.select}</button>
      <FaAngleRight className='arrow'/>
      </div>
      </Link>
    
      
    ))}
    </div>
    {model&&(<>
      <div className='form-container'>
    
     <form action="" method="post" onSubmit={handleSubmit}>
      <div className='bill-from'>
        <p className='bill'>bill from</p>
      <label htmlFor="adress">StreetAdress</label>
        <input className='larger-input' type="text" placeholder='address'  onChange={(e)=>{setAdress(e.target.value)}}/>
        <div className='location-input'>
          <div className='location1'>
          <label htmlFor="adress">city</label>
        <input type="text" name='city' onChange={(e)=>{setCity(e.target.value)}} />
          </div>
          <div className='location1'>
          <label htmlFor="postcode" name="postcode">postcode</label>
        <input type="text" name='postcode' onChange={(e)=>{setPostcode(e.target.value)}} />
          </div>
          <div className='location1'>
          <label htmlFor="country" >country</label>
        <input type="text" name='country' onChange={(e)=>{setCountry(e.target.value)}} />
          </div>
        </div>
      </div>
      {/* bill to container */}
      <div className='bill-to'>
      <p className='bill'>bill from</p>
<label htmlFor="client name">client name</label>
<input type="text" name='name'  className='larger-input' onChange={(e)=>{setName(e.target.value)}}/>
<label htmlFor="clientemail">client email</label>
<input type="email" name='email'onChange={(e)=>{setEmail(e.target.value)}}  className='larger-input' placeholder='eg.email@example.com'/>
<label htmlFor="client name">StreetAdress</label>
<input type="text" name='address2'  className='larger-input' onChange={(e)=>{setAdress2(e.target.value)}}/>
<div className='location-input'>
<div className='location1'>
          <label htmlFor="city2">city</label>
        <input type="text" name='city2' onChange={(e)=>{setCity2(e.target.value)}} />
          </div>
          <div className='location1'>
          <label htmlFor="postcode">postcode</label>
        <input type="text"  name='postcode2' onChange={(e)=>{setPostcode2(e.target.value)}}/>
          </div>
          <div className='location1'>
          <label htmlFor="country">country</label>
        <input type="text" name='country2' onChange={(e)=>{setCountry2(e.target.value)}} />
          </div>        

        </div>
        <label htmlFor="date">invoice date</label>
<input type="date" name='date' onChange={(e)=>{setDate(e.target.value)}} className='larger-input'/>
<label htmlFor="payment">payment status</label>
<select name='select' className='larger-input'>
  <option value="pending">pending</option>
  <option value="paid">paid</option>
  <option value="draft">draft</option>
  
</select>
<label htmlFor="description">project description</label>
<input type="text" name='description' onChange={(e)=>{setDescription(e.target.value)}} placeholder='eg. graphic design service'  className='larger-input'/>
      </div>
      <div className="item-list">
      </div>
      <div className="form-footer-button">
      <button className='btn-discard'>discard</button>
      <div className="send-save-button">
<button className='save-btn'>save as draft</button>
<button className='send-btn'>save and send</button>
      </div>
      </div>
      </form>
    
      </div>
      
      </>)}</div>
    

    </section>
    </>
 
  )
}

export default Invoice