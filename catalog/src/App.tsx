import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./pages/Home/Home.tsx";
import SalaPage from "./pages/Category/SalaPage.tsx";
import ComedorPage from "./pages/Category/ComedorPage.tsx";
import AlcobaPage from "./pages/Category/AlcobaPage.tsx";
import DecoracionPage from "./pages/Category/DecoracionPage.tsx";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salas" element={<SalaPage />} />
          <Route path="/comedores" element={<ComedorPage />} />
          <Route path="/alcobas" element={<AlcobaPage />} />
          <Route path="/decoracion" element={<DecoracionPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
