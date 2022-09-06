import React ,{ useEffect, useReducer, useRef } from "react";
import "./App.css"
import Router from './router/Router';


const reducer = (state, action) => {
  let newState =[];
 
  switch(action.type){
    case 'INIT':{
        return action.data 
    }
    case 'CREATE' :{
      
      newState =[action.data, ...state]
      break
    }
    case 'REMOVE': {
      newState = state.filter((it)=>it.id !== action.targetId)
      break
    }

    case 'EDIT':{
      newState = state.map((it)=>it.id ===action.data.id?{...action.data}:it)
      break
    }
    default:
      return state
  } 
  return newState
}

export const DiaryStateContext = React.createContext()
export const DiaryDispatchContext = React.createContext()

const dummyData = [{
  id: 1,
  emotion: 1,
  content:'오늘의 일기 1번',
  date: 1662349574125,
},
{
  id: 2,
  emotion: 5,
  content:'오늘의 일기 2번',
  date: 1662349574126,
}]




function App() {

  useEffect(()=>{
    const item1 = localStorage.getItem('item1')
    const item2 = localStorage.getItem('item2')
    const item3 = localStorage.getItem('item3')
    console.log({item1, item2, item3})
  },[])
  const [data, dispatch] = useReducer(reducer, dummyData)
  const dataId = useRef(0) 
  const onCreate=(date, content, emotion) =>{
    dispatch({type:'CREATE',
    data:{
      id:dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion,
    },  
  })
  dataId.current += 1;
  }

  const onRemove =(targetId) => {
    dispatch({type:'REMOVE',targetId})
  }

  const onEdit =(targetId, date, content, emotion)=> {
    dispatch({type:'EDIT',
    data:{
      id:targetId,
      date: new Date(date).getTime(),
      content,
      emotion,
    }
    })
  }
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onEdit, onRemove}}>
      <div className='App'>
      <Router/>
    </div>
      </DiaryDispatchContext.Provider>
      
    </DiaryStateContext.Provider>
  
  );
}

export default App;
