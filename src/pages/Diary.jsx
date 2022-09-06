import React, {useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryStateContext } from '../App';
import { getStringDate } from '../util/data';
import { emotionList } from '../util/emotion';
import Layout from '../components/Layout';
import Header from '../components/Header'
import Btn from '../components/Btn';
import './style.css'
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
			navigate('/')
		}
		
      }
    },[id, diaryList])
	
	if (!data){
		return <div className='Diary-detail-page'>로딩중입니다...</div>
	
	} else {
		const  curEmotionData = emotionList.find((it)=>parseInt(it.emotion_id) === parseInt(data.emotion))

		return (
			
			<Layout>
				<div className='Diary-detail-page'>
				
				<Header headerText={`${getStringDate(new Date(data.date))} 기록`} 
					leftChild={
						<Btn text={'< 뒤로가기'} type={'default'} onClick={()=>navigate('/')} />
					}

					rightChild={
						<Btn text={'수정하기'} type={'default'} onClick={()=>navigate(`/edit/${data.id}`)} 
					/>
					
					}
					
				/>
				<article>
					<section>
						<h4>오늘의 감정</h4>
						<div className={['diary-img-wrap', `img-wrap-${data.emotion}`].join(" ")}>
							<img src={curEmotionData.emotion_img}/>
							<div className="emotion-descript">
							{curEmotionData.emotion_descript}
						</div>
						</div>
						
					</section>
					<section>
						<h4>오늘의 일기</h4>
						<div className="diary-content-wrap">
							<p>{data.content}</p>
						</div>
					</section>
				</article>
					
					
				</div>
			</Layout>
		
		)		
		
	}
	
}

export default Diary