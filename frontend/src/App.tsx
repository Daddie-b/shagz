<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ChatPage from "./pages/ChatPage";
import Chats from "./pages/ChatsTab";
import ChatsTab from "./pages/ChatsTab";
import CommunityTab from "./pages/CommunityTab";
import UpdatesTab from "./pages/UpdatesTab";


function App() {
  return (
    <Routes >
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path="/ChatPage" element={<ChatPage/>}/>
      <Route path="/chatpage/Chats" element={<ChatsTab/>}/>
      <Route path="/Communities" element={<CommunityTab/>}/>
      <Route path="/chatpage/Updates" element={<UpdatesTab/>}/>
    </Routes>
  );
=======
import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";

import NavBar from "./components/organs/NavBar"
import Home from "./components/pages/Home";
import { useEffect } from "react";
import Footer from "./components/organs/Footer";

function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
>>>>>>> 21fe39a4e2701ddc9914e475ec3b91a1f5d9b293
}

export default App;