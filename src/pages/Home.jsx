
import React,{useContext, useEffect, useState} from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import DiaryList from '../components/DiaryList'
import Btn from '../components/Btn'
import { DiaryStateContext } from '../App'


const Home = () => {
  const diaryList = useContext(DiaryStateContext)
  const [data, setData] = useState([])
  const [curDate, setCurDate] = useState(new Date())
  const headText =`${curDate.getFullYear()}년 ${curDate.getMonth()+1}일`

  useEffect(()=>{
    if(diaryList.length >= 1){
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
      
    ).getTime()

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth()+1,
      0,
      23,
      59,
      59
    ).getTime()

    setData(diaryList.filter((it)=>firstDay <= it.date && it.date <= lastDay))
    }
  },[diaryList,curDate])



  const increaseMonth = () =>{
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate())
    )
  }
  const decreaseMonth = () =>{
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate())
    )
  }

 
          return (
            <Layout>
       <Header headerText={headText} leftChild={<Btn text={'<'} onClick={decreaseMonth}/> } rightChild={<Btn text={'>'} onClick={increaseMonth}/>}/>

  
       <DiaryList diaryList={data}/>
    </Layout>
    
  )
}

export default Home