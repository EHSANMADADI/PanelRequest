
import './App.css'
import Login from './pages/Login'
import Rejester from './pages/Rejester';
import Panel from './pages/Panel';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Rejester />} />
        <Route path="Panel" element={<Panel
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
