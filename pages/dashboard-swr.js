import React from "react";
import useSWR from "swr";

const DashboardSWR = () => {
  const fetcher = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR("dashboard", fetcher);
  if (error) {
    return "An Error has Occurred";
  }
  if (!data) return "!loading";
  return (
    <div>
      <h1>Dashboard-SWR</h1>
      <h2>Posts: {data?.posts}</h2>
      <h2>Likes: {data?.likes}</h2>
      <h2>Followers: {data?.followers}</h2>
      <h2>Following: {data?.following}</h2>
    </div>
  );
};

export default DashboardSWR;
