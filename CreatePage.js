import React, { useState } from 'react';
import JigPreview from '../JigPreview/JigPreview';
import './CreatePage.css';

const CreatePage = ({ onNavigate }) => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);

  return (
    <div className="create-page-container">
      <aside className="sidebar">
        <h2>Jig Customization</h2>

        <div className="control-group">
          <label htmlFor="rows">Rows: {rows}</label>
          <input
            type="range"
            id="rows"
            min="1"
            max="50"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label htmlFor="cols">Columns: {cols}</label>
          <input
            type="range"
            id="cols"
            min="1"
            max="50"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
          />
        </div>
        
        {/* Add more customization options here later! */}

        <button className="bubble-button secondary back-button" onClick={() => onNavigate('menu')}>
          Back to Menu
        </button>
      </aside>

      <main className="main-content">
        <JigPreview rows={rows} cols={cols} />
      </main>
    </div>
  );
};

export default CreatePage;