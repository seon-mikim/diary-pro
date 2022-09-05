import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryStateContext } from '../App';
import Layout from '../components/Layout';
import Header from '../components/Header'
const Diary = () => {

    const {id} = useParams();  
    const navigate = useNavigate()
    const diaryList = useContext(DiaryStateContext)
	const [data, setData] = userState();

    useEffect(() => {
      if(diaryList.length >= 1){
        const targetDiary = diaryList.find((it)=>parseInt(it.id)===parseInt(id)
		)
		if(targetDiary){
			//일기가 존재할때
			setData(targetDiary)
		}else{
			//일기가 없을때
			alert('없는 일기입니다.')
			navigate('/', {replace: true})
		}
		
      }
    },[id, diaryList])
	
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