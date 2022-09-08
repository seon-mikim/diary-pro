import React from 'react'
import { useNavigate } from 'react-router-dom'

import Btn from './Btn'

const DiaryItem = ({id, emotion, content, date}) => {
   
  const navigate = useNavigate()
  const strDate = new Date(parseInt(date)).toLocaleDateString()
  const goEidt = (e) => {
    e.stopPropagation();
    navigate(`/edit/${id}`)
  }

  return (
    <div className='DiaryItem' onClick={()=> navigate(`/diary/${id}`)}>
        <div className={['emotion-img-area',`emotion-img-area-${emotion}`].join(' ')}>
            <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}/>
        </div>
        <div className="info-area">
            <div className='diary-date'>{strDate}</div>
            <div className='diary-content-preview'>{content.slice(0,25)}</div>
        </div>
        <div className="btn-area">
           < Btn text={'수정하기'} type={'default'} onClick ={goEidt}/>
        </div>
    </div>
  )
}

export default React.memo(DiaryItem)
