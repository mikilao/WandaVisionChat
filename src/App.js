import {ChatEngine} from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="2212251f-c64d-4bd2-b79c-5f79744f60d5"
            userName="MrsVision"
            userSecret="wanda"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}//use the spread operator
        />
    )
} 
export default App;