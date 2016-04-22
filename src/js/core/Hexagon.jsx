
import React from 'react';


export function hexagon() {
  return (
    <svg className="hexagon" width="100%" height="100%" viewBox="0 0 500 500" overflow="visible" enableBackground="new 0 0 500 500">
        <polygon className="hex" fill="f5f5f5" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
    </svg>
  );
}
