import  {useState}  from "react"

import axios from 'axios';

const projectId= '2212251f-c64d-4bd2-b79c-5f79744f60d5'
const LoginForm = ( )=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] =useState('');

    const handleSubmit = async (e) => { // copied from messageform
        e.preventDefault();
        const authObj ={ 
            "Project-ID": projectId, 
            "User-Name": username,
        "User-Secret": password
    }; try{ //dont forget the async keyword above
        await axios.get('https://api.chatengine.io/chats', {headers: authObj});
       //if successful login, info gets saved
        localStorage.setItem('username', username);
        localStorage.setItem('password' , password);

        window.location.reload();
    }
    catch(error){
         setError('Incorrect, Try Again')
    }
}
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className='title'>Chat application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" />
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" />
                       <div align="center">
                           <button type="submit" classname="button" style={{padding:"20px"}}>
                           <span>Start Chatting</span>
                           </button>
                       </div>
                       <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}
export default LoginForm;