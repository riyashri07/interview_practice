

// const Practice = () => {
//     const [change, setChange] = useState("Riya Shrivastava");

//     const handleChange = () => {
//         setChange("Kaustubh Pardeshi");
//     };

//     return (
//         <div>
//             <h1>{change}</h1>
//             <button onClick={handleChange}>Click me to change name</button>
//         </div>
//     );
// };

// export default Practice;

import React, { useState } from "react";

const Practice = () => {
    const [count, setCount] = useState("0");



  return (
      <div>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
      </div>
  );
}

export default Practice;
