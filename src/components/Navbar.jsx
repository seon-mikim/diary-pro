import React from 'react'
import './style.css'

const navbar = ({headerText,leftChild, rightChild}) => {
  return (
    <navbar>
      <div className="head_btn_left">{leftChild}</div>
        <div className='head_text'>{headerText}</div>
        <div className="head btn_right">{rightChild}</div>
    </navbar>
  )
}

export default navbar

