import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core';

function Sidebar() {
  return <div className='sidebar'>
    <div className='sidebar__top'>
        <img src='' alt='' />
        <Avatar />
        <h2>Me</h2>
        <h4>5h3h4@example.com</h4>
    </div>
  </div>;

}

export default Sidebar
