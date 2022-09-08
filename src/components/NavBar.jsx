import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Btn from './Btn';
import "./style.css"

function Navbar() {
    const [sign, setSign] = useState(true)
    const onClick = () => {
        setSign((prev) => !prev)
    }
    return (
        <div >
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                {sign ? (
                    <li><Link to="/sign_in"><Btn text={'로그인'}/></Link></li>
                    ) : (
                    <li><Link to="/sign_up"><button text={'회원가입'}/></Link></li>
                )}      
            </ul>
        </div>
    );
}

export default Navbar;
