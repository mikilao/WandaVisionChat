import {ChatEngine} from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/Loginpage'
import './App.css';

const projectId = '2212251f-c64d-4bd2-b79c-5f79744f60d5';
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID={projectId}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}//use the spread operator
        />
    )
} 
export default App;