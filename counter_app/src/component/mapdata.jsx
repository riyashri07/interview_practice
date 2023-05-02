import React from "react";

const Mapdata = () => {
  const obj = [
    {
      id: 1,
      name: "Riya",
      Lastname: "Shrivastava",
    },
    {
      id: 2,
      name: "Aman",
      Lastname: "Shrivastava",
    },
    {
      id: 3,
      name: "Ayushi",
      Lastname: "Shrivastava",
    },
  ];
  return (
    <div>
      {obj.map((ele) => (
        <h3>
          {ele.name} {ele.Lastname}
        </h3>
      ))}
    </div>
  );
};

export default Mapdata;
