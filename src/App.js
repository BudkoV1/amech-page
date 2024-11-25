import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Pageone } from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="one" element={<Pageone />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;