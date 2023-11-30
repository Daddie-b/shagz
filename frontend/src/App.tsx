// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SignupPage from './pages/Signup';

const Header = styled.header`
  background-color: #3498db;
  padding: 2em 0;
  color: #fff;
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

function App() {
  return (
    <Router>
        <Header>
          <h1>Shagz - Connecting Rural Communities</h1>
        </Header>

        <StickyNav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/signup">Sign Up</NavLink>
          <NavLink href="#">Sign In</NavLink>
        </StickyNav>

        <Routes>
          <Route path="/signup" Component={SignupPage} />
          <Route path="/">
            <Section>
              <h2>Features that set Shagz apart:</h2>
              <FeaturesContainer>
                <Feature>
                  <h3>Offline Capabilities</h3>
                  <p>Stay connected even with limited internet access.</p>
                </Feature>
                <Feature>
                  <h3>Community Engagement</h3>
                  <p>Enhance bonds within your community through group chats and local events.</p>
                </Feature>
                <Feature>
                  <h3>Local Content</h3>
                  <p>Discover and share stories, news, and events specific to your region.</p>
                </Feature>
                <Feature>
                  <h3>Intuitive UI</h3>
                  <p>User-friendly design for everyone.</p>
                </Feature>
                <Feature>
                  <h3>Secure and Private</h3>
                  <p>Advanced security measures for your privacy.</p>
                </Feature>
              </FeaturesContainer>
            </Section>

            <Section>
              <h2>How Shagz Works:</h2>
              <p>
                1. <strong>Download the App:</strong> Get started by downloading the Shagz app from the App Store or Google Play.
              </p>
              <p>
                2. <strong>Create Your Profile:</strong> Set up your Shagz profile with a picture and some information about yourself.
              </p>
              <p>
                3. <strong>Connect with Your Community:</strong> Join local groups, participate in discussions, and get to know your neighbors.
              </p>
              <p>
                4. <strong>Share Updates:</strong> Post updates, photos, and events to keep your community informed and engaged.
              </p>
              <p>
                5. <strong>Enjoy Offline Communication:</strong> Communicate even without internet; messages will be sent when back online.
              </p>
            </Section>

            <AuthButtons>
              <AuthButton href="#">Sign Up</AuthButton>
              <AuthButton href="#">Sign In</AuthButton>
            </AuthButtons>

            <Section>
              <h2>Join Shagz today and experience the power of connectivity in rural communities.</h2>
              <p>Download Shagz now and take the first step towards a more connected future!</p>
              <CtaButtons>
                <CtaButton href="#">Download on the App Store</CtaButton>
                <CtaButton href="#">Get it on Google Play</CtaButton>
              </CtaButtons>
            </Section>
          </Route>
        </Routes>

        <Footer>
          &copy; 2023 Shagz - Connecting Rural Communities
        </Footer>
    </Router>
  );
}

export default App;