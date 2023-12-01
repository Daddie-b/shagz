// CommunityTab.tsx

import React, { useState } from 'react';

const CommunityTab: React.FC = () => {
  const [communityMessage, setCommunityMessage] = useState<string>('');

  const handleSendCommunityMessage = () => {
    // Add logic to send the community message
    console.log('Community message sent:', communityMessage);
    // Reset the message input
    setCommunityMessage('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Community</h1>
      {/* Community chat display area */}
      <div className="mb-4"> {/* Add your community chat display component here */}</div>
      {/* Type box for sending community messages */}
      <div className="flex">
        <input
          type="text"
          value={communityMessage}
          onChange={(e) => setCommunityMessage(e.target.value)}
          placeholder="Type your community message..."
          className="flex-1 p-2 border rounded-md mr-2"
        />
        <button
          type="button"
          onClick={handleSendCommunityMessage}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CommunityTab;
