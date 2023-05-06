import React, { useEffect, useState } from "react";

const Settimeout = () => {
  const [timeout, setTimeout] = useState(null);
  useEffect(() => {
    const id = setTimeout(() => {
      console.log("Timeout");
    }, 5000);
    setTimeout(id);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h1>My component</h1>
      <p>timeout will start after 5 sec</p>
    </div>
  );
};

export default Settimeout;
