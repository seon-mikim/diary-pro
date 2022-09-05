
import React ,{useState,useRef, useContext}from 'react'
import Layout from './Layout'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import {DiaryDispatchContext} from '../App'
import Btn from './Btn'
import EmotionItem from './EmotionItem'

const emotionList = [
    {
        emotion_id: 1,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
        emotion_descript:'완전좋음'
    },
    {
        emotion_id: 2,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
        emotion_descript:'좋음'
    },
    {
        emotion_id: 3,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
        emotion_descript:'그럭저럭'
    },
    {
        emotion_id: 4,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
        emotion_descript:'나쁨'
    },
    {
        emotion_id: 5,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
        emotion_descript:'완전나쁨'
    },
]

const DiaryEditor = () => {
    const contentRef = useRef()
    const [emotion, setEmotion] = useState(3)
    const [content, setContent] = useState("")
    const handlerClickEmote =(emotion) => { 
        setEmotion(emotion);
        
    }
    const navigate = useNavigate()
    const getStringDate = (date) => {
        return date.toISOString().slice(0, 10)
    }
    const [date, setDate] = useState(getStringDate(new Date()))
    const {onCreate} =useContext(DiaryDispatchContext)
    const handlerSubmit = () =>{
        if(content.length < 1){
            contentRef.current.focus();
            return;
        }
        onCreate(date, content, emotion);
        navigate('/',{replace: true});
    };
  return (
    <div className='DiaryEditor'>
        <Layout>
            
            <Header headerText={"새 일기쓰기"} leftChild={<Btn text={'< 뒤로가기'} onClick={()=>navigate('/')} type={'default'}/>}/>
            
            <div>
                

                <section>
                    <h4>오늘은 언제인가요?</h4>
                  
                    <div className="input-area">
                        <input className='input-date' type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
                    </div>
                
                </section>
               
                <section>
                    <h4>오늘의 감정</h4>
                    <div className="input-area emotion-select-list-area">
                        {emotionList.map((it)=><EmotionItem key={it.emotion_id} {...it} onClick={handlerClickEmote}
                        isSelected ={it.emotion_id === emotion}/>)}
                    </div>
                </section> 
                <section>
                    <h4>오늘의 일기</h4>
                    <div className="input-area textearea-area">
                        <textarea ref={contentRef}  placeholder='오늘은 어땠나요?'value={content} onChange={(e)=>setContent(e.target.value)}/>
                    </div>
                </section>
                <section>
                    <div className='btn-area'>
                        <Btn text={'취소하기'} type={'default'} onClick={()=>{navigate('/')}}/>
                        <Btn text={'작성완료'} type={'positive'} onClick={handlerSubmit}/> 
                    </div>
                </section>
            </div>
            
            </Layout>
            

    </div>
            
    
  )
}

export default DiaryEditor