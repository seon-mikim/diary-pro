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
  localStorage.setItem('diary', JSON.stringify(newState))
  return newState
}

export const DiaryStateContext = React.createContext()
export const DiaryDispatchContext = React.createContext()




function App() {

  const localStorage = localStorage.getItem('diary')
  if(localData){
    const diaryList = JSON.parse(localData)
    dataId.current = parseInt(diaryList[0].id)
  }
 
  const [data, dispatch] = useReducer(reducer, [])
  const dataId = useRef(3) 
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
