import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FullCircleCalculator from './pages/FullCircleCalculator';
import HalfCircleCalculator from './pages/HalfCircleCalculator';
import TwoCircleCalculator from './pages/TwoCircleCalculator';
import BoxPleatsCalculator from './pages/BoxPleatsCalculator';
import KnifePleatsCalculator from './pages/KnifePleatsCalculator';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator/full-circle" element={<FullCircleCalculator />} />
        <Route path="/calculator/half-circle" element={<HalfCircleCalculator />} />
        <Route path="/calculator/two-circle" element={<TwoCircleCalculator />} />
        <Route path="/calculator/box-pleats" element={<BoxPleatsCalculator />} />
        <Route path="/calculator/knife-pleats" element={<KnifePleatsCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
