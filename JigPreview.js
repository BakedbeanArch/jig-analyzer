import React from 'react';
import './JigPreview.css';

const JigPreview = ({ rows, cols }) => {
  // Create an array with a length of rows * cols to map over for the tiles
  const tiles = Array.from({ length: rows * cols });

  return (
    <div className="jig-preview-wrapper">
      <div
        className="jig-grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 50px)`,
          gridTemplateRows: `repeat(${rows}, 50px)`,
        }}
      >
        {tiles.map((_, index) => (
          <div className="tile" key={index}>
            <div className="glowing-circle"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JigPreview;