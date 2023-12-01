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
      <Route path="Chats" element={<ChatsTab/>}/>
      <Route path="Communities" element={<CommunityTab/>}/>
      <Route path="Updates" element={<UpdatesTab/>}/>
    </Routes>
  );
}

export default App;