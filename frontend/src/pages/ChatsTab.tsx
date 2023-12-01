
import "./chatsTab.css"
// App.tsx
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #3498db;
  padding: 80px 0;
  color: #fff;
  margin-top: 40px;
  text-align: center;
`;

const StickyNav = styled.nav`
  background-color: #333;
  padding: 1em 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  transition: background-color 0.3s ease;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 1em;
  padding: 1em 2em;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;

const Section = styled.section`
  padding: 4em 0;
  text-align: center;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  margin-top: 2em;
`;

const Feature = styled.div`
  flex: 1;
  max-width: 300px;
  padding: 1em;
  border: 1px solid #3498db;
  border-radius: 8px;
`;

const AuthButtons = styled.div`
  margin-top: 2em;
`;

const AuthButton = styled.a`
  display: inline-block;
  margin: 0 1em;
  padding: 1em 2em;
  text-decoration: none;
  color: #fff;
  background-color: #3498db;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;

const CtaButtons = styled.div`
  margin-top: 2em;
`;

const CtaButton = styled.a`
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  color: #fff;
  background-color: #3498db;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin: 0 0.5em;
  &:hover {
    background-color: #2980b9;
  }
`;

const Footer = styled.footer`
  background-color: #34495e;
  color: #ecf0f1;
  text-align: center;
  padding: 2em 0;
`;
export default function ChatsTab(){
  return(
    <>
    <Header>
          <h1>Shagz - Connecting Rural Communities</h1>
        </Header>

        <StickyNav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/Signup">Sign Up</NavLink>
          <NavLink href="/Login">Login</NavLink>
          <NavLink href="/ChatPage">Chats</NavLink>
        </StickyNav>
      <div className="chat-container">
        <div className="chat">
            <div className="message received">
                <p>Hello! How are you today?</p>
            </div>
            <div className="message sent">
                <p>Hey! I'm good, thanks for asking.</p>
            </div>
            <div className="message received">
                <p>Great! Anything exciting happening?</p>
            </div>
            <div className="message sent">
                <p>Not much, just the usual. How about you?</p>
            </div>
            <div className="message received">
                <p>Just finished a good book. Any recommendations?</p>
            </div>
            <div className="message sent">
                <p>That sounds awesome! What book was it?</p>
            </div>
            <div className="message received">
                <p>It was "The Night Circus" by Erin Morgenstern. I couldn't put it down!</p>
            </div>
            <div className="message sent">
                <p>I've heard great things about that book. I'll have to add it to my reading list.</p>
            </div>
            <div className="message received">
                <p>Definitely do! The magical atmosphere and intricate storytelling are captivating.</p>
            </div>
            <div className="message sent">
                <p>Sounds like my kind of book. Thanks for the recommendation!</p>
            </div>
            <div className="message received">
                <p>You're welcome! Anything interesting on your agenda for the day?</p>
            </div>
            <div className="message sent">
                <p>Not much, just some work and maybe catching up on a few TV shows. How about you?</p>
            </div>
            <div className="message received">
                <p>I have a meeting in the afternoon, but other than that, just chilling at home.</p>
            </div>
            <div className="message sent">
                <p>Nice! Meetings can be a bit dull, but hopefully, it goes smoothly for you.</p>
            </div>
            <div className="message received">
                <p>Thanks! Fingers crossed. Anything specific you're working on today?</p>
            </div>
            <div className="message sent">
                <p>Just some coding projects and responding to emails. The usual grind.</p>
            </div>
            <div className="message received">
                <p>Gotcha. Well, good luck with your tasks! If you need a break, you know where to find me.</p>
            </div>

            <div className="input-container">
                <form id="reply-form" action="#">
                    <input type="text" id="reply-input" placeholder="Type your message..."/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}