import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Upa from "./Pages/Upa";
import Bapak from "./Pages/Bapak";
import Edunas from "./Pages/Edunas";
import ChatKelas from "./Pages/ChatKelas";
import Dash from "./Pages/Dash";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memorize" element={<Upa />} />
        <Route path="/selamatulangtahunbapak" element={<Bapak />} />
        <Route path={`/edunas`} element={<Edunas />} />
        <Route path={`/dash`} element={<Dash />} />
        <Route path={`/chatapp`} element={<ChatKelas />} />

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}
