import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryDispatchContext } from '../App'
import Header from '../components/Header'
import Layout from '../components/Layout'

const Edit = () => {
  
  const [originData, setOriginData] = useState()
  const navigate = useNavigate()
  const {id} = useParams()
  
  const diaryList = useContext(DiaryDispatchContext)

  useEffect(()=>{
    if(diaryList.length >= 1){
        const targetDiary = diaryList.find(
          (it)=>parseInt(it.id) === parseInt(id)
          );
          console.log(targetDiary)

          if(targetDiary){

          }else{
            navigate('/',{replace: true})
          }
    }
  },[id, diaryList])

  console.log(id)
  return (
    <Layout>
    <Header/>  
    <div>
      
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
  </div>
  </Layout>
  
  )
}

export default Edit
