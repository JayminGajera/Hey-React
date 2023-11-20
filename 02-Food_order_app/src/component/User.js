import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="user-card">
      <h3>Name : {name}</h3>
      <p>Like : {count}</p>
      <p>View : {count1}</p>
    </div>
  );
};

export default User;
