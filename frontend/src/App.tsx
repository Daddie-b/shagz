import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Routes >
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path="/ChatPage" element={<ChatPage/>}/>
    </Routes>
  );
}

export default App;