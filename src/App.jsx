import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Teen from './pages/Teen';
import Company from './pages/Company';

function App() {
  return (
    <div className="bg-[#0D172A] text-white min-h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teen" element={<Teen />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </div>
  );
}

export default App;
