import { useState } from 'react'




const Practics = () => {
const [Message, setMessage] = useState("");
const[Message, setMessage] = useState([

{
    text: 'hello',
    Sender : 'hi',
},
{
    text: 'hi',
    sender: 'hellp'
}
])

const sendMessage =() =>{
{
    if(Message.trim() === "") return;
    const newMassge ={
        text: Message,
        sender: 'me',
    }
setMessage((prev) => [...prev, newMessage]);
setMessage("");
autoReply();

}
const autoReply = ()=>{
const repies = [
    "Hi",
    "hello",
    "how are you",
    "nice",
    "goood job",
    "hafez devolper",
]
const randomReply = repies[Math.floor(Math.random() * repies.length)];
setTimeout(() => {
    const bothMEssage={
        text: randomReply,
        sender: 'other',
    }
    setMessage((prev) =>[...prev,bothMEssage]);
},1000)}
}
return (
    <div>
      <h1>Chat Ai </h1>
      <div>
        {Message.map ((msg, idex) =>
        <div key={idex}>
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
        )}

      </div>
    <input type="text" 
    value={Message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder='Type your message...'
    inputMode='text'
        
    />
    <button onClick={sendMessage}>send </button>


    









    </div>
  )
}

export default Practics
