
import React, { useEffect, useState } from 'react'
import './invoice.css'
import { Link, useParams } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvide'
import { FaArrowLeft } from 'react-icons/fa'
import Sidebar from './Sidebar'
function SingleInvoice() {

  
  const {id} = useParams()
  const [invoiceDetails, setInvoiceDetails] = useState([]);

  // fetch data from local storage
  useEffect(()=>{
    // retrieve the list from local storage
    const existingInvoices =JSON.parse(localStorage.getItem('invoices')||[])
     // find invoice with matching id
     const invoice= existingInvoices.find((invoice)=>invoice.id===parseInt(id))
     //set the found invoice details to the found invoice
     setInvoiceDetails(invoice)
  },[id]);

  console.log(invoiceDetails)
  const { address,address2,postcode, email,name,select } = invoiceDetails;
  return (
    <div className='single-wrapper'>
      <Sidebar/>
      <Link to='/' className='back-link'> <FaArrowLeft/>Go back</Link>
      <div className='singleinvoice-header'>
    <div className='single-status'>
        <p >status</p><button className='btn-status' style={{backgroundColor:select==='paid'?'mediumseagreen':'orange'}}> {select}</button>
    </div>
    <div className='status-edit-btn'>
<button className='btn-edit'>edit</button>
<button className='btn-delete'>delete</button>
<button className='btn-mark'>mark as paid</button>
    </div>
</div>


{/* single invoice container */}
<div className='single-invoice-container'>
  <div className='single-body-header'>
    <div className='header1'>
    <h2>{postcode}</h2>
<p>re-brancing</p>

    </div>
<div className='header2'>
<p>
  sharrington
</p>
<p>
united states
</p>
<p>zoo06678</p>
</div>
  </div>   
  <div className='single-body-body'>
    <div className="date">
      <div className='date1'>
      <p>invoice date</p>
      <h2>22-8-2023</h2>
      </div>
      
      <div className='date2'>
      <p>invoice date</p>
      <h2>22-8-2023</h2>
      </div>
      
    </div>
    <div className="billto">
      <p>{address2}</p>
      <h2>jensen hung</h2>
      <p>1p union berlin</p>
      <p>london</p>
    </div>
    <div className="sentto">
      <p>sent to</p>
      <h2>{email}</h2>
  
    </div>
  </div>
  <div className='single-table'>
    <table>
      <thead>
        <tr>
          <th>item name</th>
          <th>qty</th>
          <th>price</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brand Guidelines</td>
          <td>1</td>
          <td>$4567</td>
          <td>$8000</td>
        </tr>
    <tr className='table-total'>
      <td colSpan={3}>price</td>
      
      <td>567</td>
    </tr>
      </tbody>
    </table>
  </div>
</div>
{/* <SingleInvoice invoice={invoice}/> */}
    </div>
  )
}

export default SingleInvoice