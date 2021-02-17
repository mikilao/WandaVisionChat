import { useState } from "react"

import useState from 'react';
import axios from 'axios';

const LoginForm = ( )=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className='title'>Chat application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e)} />
                      
                </form>
            </div>
        </div>
    );
}