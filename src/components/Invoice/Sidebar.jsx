import React from 'react'
import './invoice.css'
import invoicee from '../../assets/images/invoice.jpg'
import profile from '../../assets/images/profile.jpg'
import { FaSun } from 'react-icons/fa'

function Sidebar (){
  return (
    <div>
         <div className='sidebar'>
        <div className='sidebar-header'>
          <img className='sidebar-img' src={invoicee} alt="" />
          <div className='sun-btn'>
              <FaSun className='sun-logo'/>
<div className='profile-btn'>
<img src={profile}/>
</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
