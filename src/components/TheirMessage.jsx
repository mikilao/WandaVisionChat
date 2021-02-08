const TheirMessage = (lastMessage, message)=>{
const isFirstMessageByUser =!lastMessage  || lastMessage.sender.username !==
 message.sender.username;
     return(
        <div className="message-row">
           {isFirstMessageByUser && (
               <div
               className="message-avatar"
               style={{backgroundImage:`url(${message?.sender?.avatar})`}
            }
               />
           )}
           {message?.attachments?.length >0 //checking if message is an img
    ?(
        <img 
        src={message.attachement[0].file}
        alt="message.attachment"
        className="message-image"
        style={{marginLeft:isFirstMessageByUser ? '4ps' : '48px' }}
            />
        
    ) :(// same as myMessage but as a ternary operator
        <div className="message" style={{float: 'left', marginLeft:isFirstMessageByUser ? '4ps' : '48px', backgroundColor: "#CABCdc" }}>
                {message.text}
     </div>
     )
}
        </div>
    );
};
export  default TheirMessage;