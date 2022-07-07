import React, { useState } from 'react';

// Delete me
export const Thing = () => {
  const [counter, updateCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => updateCounter(counter + 1)}>Increment</button>
    </div>
  );
};
