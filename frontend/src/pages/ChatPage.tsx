// ChatPage.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const ChatContainer = styled.div`
  text-align: center;
  padding: 2em;
`;

const TabsContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1em 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const TabLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0.5em 1em;
  &.active {
    background-color: #555;
  }
`;


const ChatPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveTab(currentPath);
  }, []);

  return (
    <>
      <ChatContainer>

        <TabsContainer>
          <TabLink to="chats" className={activeTab === '/chats' ? 'active' : ''}>
            Chats
          </TabLink>
          <TabLink to="community" className={activeTab === '/community' ? 'active' : ''}>
            Community
          </TabLink>
          <TabLink to="updates" className={activeTab === '/updates' ? 'active' : ''}>
            Updates
          </TabLink>
        </TabsContainer>
      </ChatContainer>
      </>
  );
};

export default ChatPage;
