import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching campaigns:', err);
        setError('Failed to load campaigns. Please ensure the backend server is running.');
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="campaign-list"> {/* Using .campaign-list class from app.css */}
      <h2>Campaigns</h2>
      {loading && <p className="status-message">Loading campaigns...</p>} {/* New class for status */}
      {error && <p className="status-message error-message">{error}</p>} {/* New classes for errors */}
      {!loading && campaigns.length === 0 && !error && (
        <p className="status-message">No campaigns found. Create one!</p>
      )}
      <div className="campaigns-container"> {/* New container for campaign items */}
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="campaign-item"> {/* Using .campaign-item class from app.css */}
            <h3>{campaign.title}</h3>
            <p>Status: <span className={`status-${campaign.status}`}>{campaign.status}</span></p> {/* New class for status */}
            <p>Scheduled: {new Date(campaign.scheduledTime).toLocaleString()}</p>
            <p>Recipients: {campaign.recipients.join(', ')}</p>
            <h4>Email Logs:</h4>
            {campaign.logs && campaign.logs.length > 0 ? (
              <ul>
                {campaign.logs.map((log, index) => (
                  <li key={index}>
                    {log.recipient} - <span className={`log-status-${log.status}`}>{log.status}</span>{' '}
                    {log.error && <span className="log-error">({log.error})</span>} {/* New class for log error */}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-logs">No logs available yet.</p> 
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignList;
