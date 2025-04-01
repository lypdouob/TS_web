import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <section id="landing">
      <div className="landing_content">
        <h2>歡迎來到初上石</h2>
        <p>探索沉浸式體驗的無限可能</p>
        <button onClick={() => navigate('/products')}>
          View Service
        </button>
      </div>
    </section>
  );
}

export default LandingPage; 