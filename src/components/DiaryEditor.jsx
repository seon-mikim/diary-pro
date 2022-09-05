
import React ,{useState,useRef, useContext, useEffect}from 'react'
import Layout from './Layout'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import {DiaryDispatchContext} from '../App'
import { getStringDate } from '../util/data'
import { emotionList } from '../util/emotion'
import Btn from './Btn'
import EmotionItem from './EmotionItem'



const DiaryEditor = ({isEdit, originData}) => {
    const contentRef = useRef()
    const [emotion, setEmotion] = useState(3)
    const [content, setContent] = useState("")
    const handlerClickEmote =(emotion) => { 
        setEmotion(emotion);
        
    }
    const navigate = useNavigate()
 
    const [date, setDate] = useState(getStringDate(new Date()))
    const {onCreate, onEdit} =useContext(DiaryDispatchContext)
    const handlerSubmit = () =>{
        if(content.length < 1){
            contentRef.current.focus();
            return;
        }

        if(window.confirm(isEdit?'일기를 수정하시겠습니까?': '새로운 일기를 작성하시겠습니까?')){
            if(!isEdit){
                onCreate(date, content, emotion);

            }else{
                onEdit(originData.id, date, content, emotion)
            }
        }
        navigate('/', {replace: true});
    };

    useEffect(()=>{
        if(isEdit){
            setDate(getStringDate(new Date(parseInt(originData.date))))
            setEmotion(originData.emotion)
            setContent(originData.content)
        }
    },[isEdit, originData])
     
  return (
    <div className='DiaryEditor'>
        <Layout>
            
            <Header headerText={isEdit ? "일기 수정하기" : "새 일기쓰기"} leftChild={<Btn text={'< 뒤로가기'} onClick={()=>navigate('/')} type={'default'}/>}/>
            
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
                        <Btn text={isEdit ?'수정완료': '작성완료'} type={'positive'} onClick={handlerSubmit}/> 
                    </div>
                </section>
            </div>
            
            </Layout>
            

    </div>
            
    
  )
}

export default DiaryEditor