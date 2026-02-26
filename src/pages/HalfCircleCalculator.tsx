import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/Calculator.scss';

function HalfCircleCalculator() {
  const navigate = useNavigate();

  return (
    <div className="calculator-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="calculator-content">
        <h1>Half-Circle Skirt Calculator</h1>
        <p className="placeholder-text">Calculator functionality coming soon...</p>
      </div>
    </div>
  );
}

export default HalfCircleCalculator;
