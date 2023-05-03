// usememo example

// import "./App.css";
// import React, { useState } from "react";
// function App() {
//   const [count, setData] = useState(1);
//   const [item, setItem] = useState(20);

//   const newApple = React.useMemo(
//     function appleTime() {
//       console.warn("Hello");
//       return 100 * count;
//     },
//     [item]
//   );
//   return (
//     <div className="App">
//       <h1>Hooks in React {count}</h1>
//       {newApple}
//       <button onClick={() => setData(count + 1)}>Update State</button>
//       <button onClick={() => setItem(item * 10)}>Update State</button>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button
        disabled={count == 0 ? true : false}
        onClick={() => setCount(count - 1)}
      >
        Reduce
      </button>
    </div>
  );
}

export default App
