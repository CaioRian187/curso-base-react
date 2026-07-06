import { useState } from 'react';
import './Login.css'


export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("login");
    }


    return (
        <div className='container'>
            <h1>Login</h1>


            <b>Email</b>
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <b>Password</b>
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <button className='btn-login' onClick={handleLogin}>
                Entrar
            </button>
        </div>
    );
}