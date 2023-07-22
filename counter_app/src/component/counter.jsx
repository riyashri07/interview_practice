
//useState----------------------------------


// import React, { useEffect, useState } from 'react'

// const Counter = () => {
//     const [counter, setCounter] = useState(0);
//   return (
//     <div>
//           <h1>Counter is:{ counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>Add</button>
//       <button onClick={() => setCounter(counter - 1)}>Reduce</button>
//     </div>
//   );
// }

// export default Counter



//useEffect-------------------------------------------------------


// useEffect(() => {

// },[])


//useRef------------------------------------------------------------------------------------

// import React, { useRef } from 'react'

// const Co = () => {
//   const input = useRef(0)

//   console.log(input.current.focus)
//   const handleinput = () => {
//     input.current.focus();
//       input.current.style.backgroundColor="green"
//   }

//   return (
//     <div>
//       <input type="text" placeholder='Type Here' ref={input} />

//       <button onClick={handleinput}>click me</button>
//     </div>
//   )
// }

// export default Co;



//useReducer----------------------------------------------------------------------------------


// import React, { useReducer } from 'react'

// const Co = () => {

//   const initialState = { count: 0 };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "Inc": {
//         return { count:state.count+1}
//       }
//       case "Dec": {
//         return {count:state.count-1}
//       }
//       default: {
//         return state;
//         }
//      }
//   }

//   const [state, dispatch] = useReducer(reducer, initialState)

//   const Inc = () => {
//     dispatch ({type: "Inc"})
//   }

//   const Dec = () => {
//       dispatch({ type: "Dec" });
//   };

//   return (
//       <div>
//           <h1>Count:{state.count}</h1>
//           <button onClick={Inc}>Incement</button>
//           <button onClick={Dec}>Decrement</button>
//       </div>
//   );
// }

// export default Co;