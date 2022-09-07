import React from 'react'
import './style.css'


const Btn = ({text, type, onClick}) => {
  const BtnType = ['positive', 'negative'].includes(type)? type:'default'
  return (
    <button className={['Btn',`Btn_${BtnType}`].join(" ")}  onClick={onClick}  >{text}</button>
  )
}

export default Btn

Btn.defaultProps = {
  type: "default",
}


