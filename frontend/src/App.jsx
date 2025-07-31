import React from 'react';
import CampaignForm from './components/CampaignForm';
import CampaignList from './components/CampaignList';
import './app.css'; // Import the general app styles

function App() {
  return (
    <div className="app"> {/* Using .app class from app.css */}
      <h1>Email Campaign Manager</h1> {/* Using h1 style from index.css */}
      <div className="main-content-container"> {/* A new class for layout */}
        <div className="component-wrapper"> {/* Wrapper for CampaignForm */}
          <CampaignForm />
        </div>
        <div className="component-wrapper"> {/* Wrapper for CampaignList */}
          <CampaignList />
        </div>
      </div>
    </div>
  );
}

export default App;
