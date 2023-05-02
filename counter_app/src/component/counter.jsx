import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
          <h1>Counter is:{ counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Reduce</button>
    </div>
  );
}

export default Counter