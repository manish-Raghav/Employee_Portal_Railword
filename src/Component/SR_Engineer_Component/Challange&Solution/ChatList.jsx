import React from "react";

import { BsPinAngleFill } from "react-icons/bs";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import Chatitem from "./Chatitem";
const ChatList = () => {
    
    const pinnedChats = [
        { name: "AKash", message: "Typing...", time: "04:50 PM", pinned: true },
        {
          name: "Backend team",
          message: "Hey, how’s it will Work?",
          time: "10:30 AM",
          pinned: true,
          unread: 2,
        },
        {
          name: "Frontend team",
          message: "Can't wait for the weekend!",
          time: "10:25 AM",
          pinned: true,
        },
      ];
      
      const allMessages = [
        {
          name: "Sir akash",
          message: "Remember that concert last y...",
          time: "07:23 PM",
        },
        {
          name: "Sir tushar",
          message: "Just got back from a hiking trip!",
          time: "08:45 PM",
        },
      ];
      
    

      return (
        <div className="overflow-y-auto mt-2">
          <div className="p-4">
            <div className="flex items-center mb-2">
              <BsPinAngleFill
                className="mr-2"
                style={{ width: "15px", height: "15px", color: "#818181" }}
              />
              <h5 className="text-sm font-semibold" style={{ color: "#818181" }}>
                PINNED CHATS
              </h5>
            </div>
            {pinnedChats.map((chat, index) => (
              <Chatitem key={index} chat={chat} />
            ))}
          </div>
          <div className="px-4"> {/* Reduced padding from p-4 to p-2 */}
            <div className="flex items-center mb-2">
              <BiSolidMessageRoundedDetail
                className="mr-2"
                style={{ width: "18px", height: "18px", color: "#818181" }}
              />
              <h2 className="text-sm font-semibold" style={{ color: "#818181" }}>
                ALL MESSAGES
              </h2>
            </div>
            {allMessages.map((chat, index) => (
              <Chatitem key={index} chat={chat} />
            ))}
          </div>
        </div>
      );
}

export default ChatList
