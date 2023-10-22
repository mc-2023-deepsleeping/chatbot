
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from "./about";
import HomePage from "./home"
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import './chatbot.css'; // 导入自定义的CSS文件


function App() {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="App">
        <Routes>
             <Route element={<HomePage />} path={'/'}></Route>
             <Route element={<AboutPage />} path='/about'></Route>
        </Routes>
      
      <div className="chatbot-container">
        <div className="chatbot-button" onClick={toggleChatbot}>
          {isChatbotOpen ? "Hide Chat" : "Show Chat"}
        </div>
        {isChatbotOpen && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}
      </div>
      
    </div>
  );
}

export default App;