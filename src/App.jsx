import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HW from './components/HW/HW';
import HW1 from './components/HW-1/HW1';
import HW2 from './components/HW-2/HW2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HW />} />
        <Route path="/hw" element={<HW />} />
        <Route path="/hw1" element={<HW1 />} />
        <Route path="/hw2" element={<HW2 />} />
      </Routes>
    </Router>
  );
};
export default App;
