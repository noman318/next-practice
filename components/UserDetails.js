import React from "react";

const UserDetails = ({ userData }) => {
  //   console.log("props", userData);
  return (
    <div>
      <p>{userData?.name}</p>
      <p>{userData?.email}</p>
      <p>{userData?.username}</p>
    </div>
  );
};

export default UserDetails;
