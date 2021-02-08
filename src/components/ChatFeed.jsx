 import MessageForm from './MessageForm';
 import TheirMessage from './TheirMessage';
 import MyMessage from './MyMessage';

 const ChatFeed =(props) => {
   //destructuring the props
       const {chats, activeChat, userName, messages } = props;
// to find the current chat
       const chat = chats && chats[activeChat];
       //fetch the current messages
       const renderMessages = () => {
           const keys = Object.keys(messages);
        //keys are the id's of each message
           return keys.map((key, index) =>{
               const message = messages[key];
               const lastMessageKey = index === 0 ? null :keys[index -1]; //was this the last message
               const isMyMessage = userName === message.sender.username;

               return(
                   <div key={`msg_${index}`} style={{width: '100%'}}>
                        <div className="message-block">
                            { //using a ternary statement to divide comments by user. 
                                isMyMessage ? <MyMessage message={message} />// called as a component
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                            }
                        </div>
                        <div className="read-reciepts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px': "68px"}}>
                            read
                        </div>
                   </div>
               )
           })
       }

if(!chat) return 'Loading...'
     return(
         <div className="chat-feed">
             <div className="chat-title-container">
                 <div className="chat-title">
                     {chat?.title}
                 </div>
                 <div className="chat-subtitle">
                     {chat.people.map((person) => `${person.person.username}`)}
                 </div>
             </div>
             {renderMessages()}
             <div style={{height:'100px'}} />
             <div className='message-form-container'>
                 <MessageForm {...props} chatID={activeChat}/>
             </div>
         </div>
     );
 }
 export  default ChatFeed;