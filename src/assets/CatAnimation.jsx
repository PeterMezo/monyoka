import { useState, useEffect } from "react";
import './CatAnimation.css';  // Import the CSS file for animation

const CatAnimation = ({ isKissing }) => {
  const [heartPosition, setHeartPosition] = useState({ x: 120, y: 100, scale: 1 });

  // Keep the heart position and scaling but handle them with CSS for smooth animation
  useEffect(() => {
    if (isKissing) {
      // Set initial position and scaling of the heart
      setHeartPosition({ x: 120, y: 100, scale: 1 });
    }
  }, [isKissing]);

  return (
    <div className="caty flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <svg width="300" height="300" viewBox="0 0 300 300" className="mb-8">
        {/* Cat Body */}
        <ellipse
          cx="150"
          cy="180"
          rx="80"
          ry="60"
          style={{ fill: '#B0BEC5' }}  // Fill color for cat body
        />
        
        {/* Cat Head */}
        <g transform={`rotate(${isKissing ? '15' : '0'} 150 140)`}>
          <circle
            cx="150"
            cy="140"
            r="50"
            style={{ fill: '#B0BEC5' }}  // Fill color for cat head
          />
          
          {/* Eyes */}
          <circle
            cx="130"
            cy="130"
            r="5"
            style={{ fill: '#37474F' }}  // Fill color for eyes (gray-800)
          />
          <circle
            cx="170"
            cy="130"
            r="5"
            style={{ fill: '#37474F' }}  // Fill color for eyes
          />
          
          {/* Ears */}
          <path
            d="M110 100 L130 120 L100 130 Z"
            style={{ fill: '#B0BEC5' }}  // Fill color for ears
          />
          <path
            d="M190 100 L170 120 L200 130 Z"
            style={{ fill: '#B0BEC5' }}  // Fill color for ears
          />
          
          {/* Mouth */}
          <path
            d={isKissing ? "M145 150 Q150 155 155 150" : "M140 150 Q150 155 160 150"}
            style={{ stroke: '#37474F', fill: 'none', strokeWidth: 2 }}
          />
        </g>
        
        {/* Paw */}
        <g className={!isKissing ? "animate-[spin_2s_ease-in-out_infinite]" : ""}>
          <circle
            cx="180"
            cy="220"
            r="15"
            style={{ fill: '#B0BEC5' }}  // Fill color for paw
          />
        </g>

        {/* Flying Heart (CSS animated if isKissing is true) */}
        {isKissing && (
          <g
            className="flying-heart"
            style={{
              transform: `translate(${heartPosition.x}px, ${heartPosition.y}px) scale(${heartPosition.scale})`,
            }}
          >
            <path
              d="M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 Z"
              style={{ fill: '#F44336' }}  // Fill color for heart
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default CatAnimation;
