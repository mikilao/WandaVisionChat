const MyMessage = ({message})=>{
if(message?.attachments?.length >0){ //checking if message is an img
    return(
        <img 
        src={message.attachement[0].file}
        alt="message.attachment"
        className="message-image"
        style={{float: 'right'}}
            />
        
    )
        }
    return(
        
        <div className="message" style={{float: 'right', marginRight:"18px", color: "white", backgroundColor: "#2347d3" }}>
           {message.text}
        </div>
    );
};
export  default MyMessage;