import React, {useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryStateContext } from '../App';
import { getStringDate } from '../util/data';
import Layout from '../components/Layout';
import Header from '../components/Header'
import Btn from '../components/Btn';
const Diary = () => {

    const {id} = useParams();  
    const navigate = useNavigate()
    const diaryList = useContext(DiaryStateContext)
	const [data, setData] = useState();

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
	
	if(!data){
		return <div className='Diary-DeTail-Page'>로딩중입니다...</div>
	}else{
		return (
			<Layout>
				<div className='Diary-DeTail-Page'>
				
				<Header headerText={`${getStringDate(new Date(data.date))}`} 
					leftChild={<Btn text={'< 뒤로가기'} type={'default'} onClick={()=>{navigate('/')} }/>}
					rightChild={<Btn text={'수정하기'} type={'default'} onClick={()=>{navigate(`/edit/${id}`)}}/>}
					/>
				
				</div>
			</Layout>
		
		)		
		
	}
	
}

export default Diary