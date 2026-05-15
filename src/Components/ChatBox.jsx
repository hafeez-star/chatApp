import React, { useState } from "react";

const ChatBox = () => {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      text: "Hello",
      sender: "me",
    },

    {
      text: "Hi",
      sender: "other",
    },
  ]);

  const sendMessage = () => {

  if (message.trim() === "") return;

  const newMessage = {
    text: message,
    sender: "me",
  };

  setMessages((prev) => [...prev, newMessage]);

  setMessage("");

  autoReply();
};
const autoReply = () => {

  const replies = [
    "Hello 👋",
    "How are you?",
    "Nice 😎",
    "React is awesome 🔥",
    "Good Job 🚀",
    "Hafeez Devolper",
  ];

  const randomReply =
    replies[Math.floor(Math.random() * replies.length)];

  setTimeout(() => {

    const botMessage = {
      text: randomReply,
      sender: "other",
    };

    setMessages((prev) => [...prev, botMessage]);

  }, 1000);

};
  return (
    <div className="flex-1 flex flex-col">

      {/* Top */}
      <div className="p-5 border-b text-2xl font-bold">
        Ali
      </div>

      {/* Messages */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`w-fit max-w-[300px] p-3 rounded-2xl ${
              msg.sender === "me"
                ? "bg-violet-500 text-white ml-auto"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>

        ))}

      </div>

      {/* Input */}
      <div className="p-5 border-t flex gap-3">

        <input
          type="text"
          placeholder="Type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border p-3 rounded-xl outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-violet-500 text-white px-8 rounded-xl"
        >
          Send
        </button>

      </div>

    </div>
  );
};

export default ChatBox;