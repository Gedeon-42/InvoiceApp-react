// SingleInvoice.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

function SingleInvoice({ invoice }) {
  return (
    <div className="invoice-content1">
      <Link to={`/invoice/${invoice.id}`}>{invoice.code}</Link>
      <p>{invoice.date}</p>
      <p className='p-name'>{invoice.name}</p>
      <h2>${invoice.amount}</h2>
      <div className='btn-name'>
        <button style={{
          backgroundColor: invoice.select === 'paid' ? 'mediumseagreen' : 'orange',
          color: 'white'
        }} className='btn-status'>
          {invoice.select}
        </button>
        <FaAngleRight className='arrow' />
      </div>
    </div>
  );
}

export default SingleInvoice;
