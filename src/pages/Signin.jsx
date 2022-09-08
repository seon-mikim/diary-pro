import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from "../components/Header"
import Btn from "../components/Btn"
import './style.css'

const Signin = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

  const onSubmit = (event) => {
    event.preventDefault();

    let body = {
      email: email,
      password: password
    }

    dispatch((body))
      .then(response => {
          if(response.payload.loginSuccess) {
              props.history.push('/')
          } else {
              alert('Error')
          }
      })
  }

  return (
    <div>
    <Header headerText={'로그인'}/>
    <div className='sign'>
      
        <form onSubmit={onSubmit}>
            <div><input type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="loginregister__input"/></div>
            <div><input type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/></div>
            <div><Btn text={'로그인'} type={"positive"} onClick={onSubmit}/></div>
            <div><Btn text={'가입 하기'} type={"default"} onClick={()=>navigate("/sign_up")}/></div>
        </form>
    </div>
    </div>
  );
};

export default Signin;