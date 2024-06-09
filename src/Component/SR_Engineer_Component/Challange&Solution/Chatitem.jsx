import React from 'react'

const Chatitem = ({ chat }) => {
    let messageColor = chat.message === 'Typing...' ? '#00A3FF' : '#000';

    return (
      <div className="flex justify-between items-center p-2  hover:bg-gray-100 border border-gray-200 border-t-0 border-r-[0.8px]">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <h3
              className={`text-sm font-medium ${
                chat.time ? "font-semibold" : ""
              }`}
            >
              {chat.name}
            </h3>{" "}
            {/* Added font-semibold class conditionally */}
            <p
              className={`text-sm ${
                chat.unread ? "font-semibold text-blue-600" : "text-gray-500"
              }`}
              style={{color: messageColor}}
            >
              {chat.message}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">{chat.time}</p>
          {chat.unread && (
            <span className="text-xs bg-[#00A3FF] text-white rounded-full px-2 py-1">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    )
}

export default Chatitem
