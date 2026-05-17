import { useState } from 'react'




const Practics = () => {
    const [Message, setMessage] = useState("");
    const [Messages, setMessages] = useState([

        {
            text: 'hello',
            sender: 'hi',
        },
        {
            text: 'hi',
            sender: 'hellp'
        }
    ])

    const sendMessage = () => {
        
            if (Message.trim() === "") return;
            const newMessage = {
                text: Message,
                sender: 'me',
            }
            setMessages((prev) => [...prev, newMessage]);
            setMessage("");
            autoReply();

        }
       
 const autoReply = () => {
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
                const bothMessage = {
                    text: randomReply,
                    sender: 'other',
                }
                setMessages((prev) => [...prev, bothMessage]);
            }, 1000)
        }
    return (
        <div>
            <h1>Chat Ai </h1>
            <div>
                {Messages.map((msg, idex) =>
                    <div
                        key={idex}
                        className={`w-fit max-w-[300px] p-3 rounded-2xl ${msg.sender === "me"
                            ? "bg-violet-500 text-white ml-auto"
                            : "bg-gray-200"
                            }`}
                    >
                        {msg.text}
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
