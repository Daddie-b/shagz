// ChatsTab.tsx

import React, { useState } from 'react';

interface TextData {
  title: string;
  content: string;
  timestamp: number;
}

interface ChatsTabProps {
  setActiveTab: (tab: string) => void;
}

const ChatsTab: React.FC<ChatsTabProps> = ({ setActiveTab }) => {
  const [messages, setMessages] = useState<TextData[]>([]);

  // Function to add a dummy message
  const addDummyMessage = () => {
    const dummyMessage: TextData = {
      title: 'Sender',
      content: 'Hello there!',
      timestamp: Date.now(),
    };

    setMessages((prevMessages) => [...prevMessages, dummyMessage]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chats</h1>
      {/* Display messages */}
      <div className="mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <strong>{message.title}:</strong> {message.content}
          </div>
        ))}
      </div>
      {/* Type box for sending messages */}
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-md mr-2"
        />
        <button
          type="button"
          onClick={addDummyMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatsTab;
