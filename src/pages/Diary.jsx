import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout';
import Header from '../components/Header'
const Diary = () => {

    const {id} = useParams();  
    const navigate = useNavigate()
    console.log(id) 
  return (
    <Layout>
      <Header/>
        <h1>Diary</h1>
        <span onClick={()=>{
            navigate('/')
        }}>Home으로 가기</span>
        <p>이곳은 일기장 상세페이지 입니다.</p>
    </Layout>
  )
}

export default Diary