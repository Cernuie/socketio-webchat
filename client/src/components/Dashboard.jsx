import React from 'react'
import Conversation from './Conversation'
import Sidebar from './Sidebar'
import PropTypes from "prop-types"

export default function Dashboard( {id} ) {
  return (
    <div className='d-flex' style={ {height:'100vh'} }>
        <Sidebar id={id} />
        <Conversation />
    </div>
  )
}

Dashboard.propTypes = {
  id: PropTypes.string
}