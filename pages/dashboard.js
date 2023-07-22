import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function getDashBoardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboard(data);
      setIsLoading(false);
    }
    getDashBoardData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <>
          <h2>Loading...</h2>
        </>
      ) : (
        <div>
          <h1>Dashboard details</h1>
          <h2>Posts: {dashboard?.posts}</h2>
          <h2>Likes: {dashboard?.likes}</h2>
          <h2>Followers: {dashboard?.followers}</h2>
          <h2>Following: {dashboard?.following}</h2>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
