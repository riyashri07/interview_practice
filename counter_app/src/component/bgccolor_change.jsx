import React, { useState } from 'react'

const Bgccolor_change = () => {
    const [color, setColor] = useState("white");

    const handleClick = () => {
        const randomColor = getRandomColor();
        setColor(randomColor);
    }
    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let hash = "#";
        for (let i = 0; i < 6; i++){
            hash=hash+letters[Math.floor(Math.random()*16)]
        }
        return hash;
    }

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={handleClick}>change the color of background</button>
    </div>
  );
}

export default Bgccolor_change