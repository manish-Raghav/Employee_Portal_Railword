import React, {useState} from "react"
import {FiSmile, FiMic, FiPaperclip, FiSend} from "react-icons/fi"



import Solution from "./Solution"
import Chatitem from "./Chatitem"

const ChatComp = () => {
    const user = {
        name: "Grace Miller",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      }  
  
    const [messages, setMessages] = useState([
      {
        sender: "Grace Miller",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "Hi Jack! I'm doing well, thanks. Can't wait for the weekend!",
        time: "10:30 AM",
        isUser: false,
      },
      {
        sender: "Jack Raymonds",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "I know, right? Weekend plans are the best. Any exciting plans on your end?",
        time: "10:30 AM",
        isUser: true,
      },
      {
        sender: "Grace Miller",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "Absolutely! I'm thinking of going for a hike on Saturday. How about you?",
        time: "10:30 AM",
        isUser: false,
      },
      {
        sender: "Jack Raymonds",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Hiking sounds amazing! I might catch up on some reading and also meet up with a few friends on Sunday.",
        time: "10:30 AM",
        isUser: true,
      },
      {
        sender: "Grace Miller",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "That sounds like a great plan! Excited 😊",
        time: "10:30 AM",
        isUser: false,
      },
      {
        sender: "Jack Raymonds",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Can't wait for the weekend!",
        time: "10:30 AM",
        isUser: true,
      },
    ])
  
    const [newMessage, setNewMessage] = useState("")
  
    const handleSendMessage = () => {
      if (newMessage.trim()) {
        setMessages([
          ...messages,
          {
            sender: "Jack Raymonds",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            text: newMessage,
            time: new Date().toLocaleTimeString(),
            isUser: true,
          },
        ])
        setNewMessage("")
        }
  
    }
  const handleFileChange = event => {
    setSelectedFile(event.target.files[0])
  }
    return (
      <div className="flex flex-col min-h-[100vh] shadow-md  min-w-[100vh] bg-gray-100 items-center ">
        <div className="flex w-full items-center p-4 bg-white border-b">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
  
          <div>
            <div className="text-lg font-semibold">{user.name}</div>
            <div className="text-sm text-blue-500">Online</div>
          </div>
        </div>
        <div className="flex flex-col flex-grow p-4 overflow-auto w-full max-w-3xl">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              } mb-4 items-start`}
            >
              {!message.isUser && (
                <>
                  <img
                    src={message.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <div className="text-sm font-semibold">
                        {message.sender}
                      </div>
                      <div className="text-xs text-gray-500 ml-2">
                        {message.time}
                      </div>
                    </div>
                    <div className="rounded-lg p-4 bg-white text-black shadow max-w-xs mt-1">
                      <div>{message.text}</div>
                      {message.file && (
                        <a
                          href={URL.createObjectURL(message.file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {message.file.name}
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
              {message.isUser && (
                <>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center">
                      <div className="text-xs text-gray-500 mr-2">
                        {message.time}
                      </div>
                      <div className="text-sm font-semibold">
                        {message.sender}
                      </div>
                    </div>
                    <div className="rounded-lg p-4 bg-blue-500 text-white max-w-xs mt-1">
                      <div>{message.text}</div>
                      {message.file && (
                        <a
                          href={URL.createObjectURL(message.file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white underline"
                        >
                          {message.file.name}
                        </a>
                      )}
                    </div>
                  </div>
                  <img
                    src={message.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full ml-3"
                  />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center p-4 bg-white border-t w-full max-w-3xl">
          <FiSmile className="text-gray-500 mr-4" size={24} />
          <input
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none"
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSendMessage()}
          />
          <FiMic className="text-gray-500 mx-4" size={24} />
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label htmlFor="file">
            <FiPaperclip
              className="text-gray-500 mr-4 cursor-pointer"
              size={24}
            />
          </label>
          <button
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleSendMessage}
          >
            Send <FiSend className="ml-2" />
          </button>
        </div>
      </div>
    )
}

export default ChatComp
