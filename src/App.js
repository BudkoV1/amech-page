import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Stock from './pages/Stock'
import Contacts from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="stock" element={<Stock />} />
        <Route path="contacts" element={<Contacts />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;