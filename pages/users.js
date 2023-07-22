import UserDetails from "@/components/UserDetails";
import React from "react";

// Using ES 6 function
// export const getStaticProps = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   //   console.log("data", data);
//   return {
//     props: {
//       users: data,
//     },
//   };
// };
const Users = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user) => (
        <div key={user?.id} style={{ padding: "10px" }}>
          <UserDetails userData={user} />
        </div>
      ))}
    </div>
  );
};

export default Users;

// Using normal function
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  //   console.log("data", data);
  return {
    props: {
      users: data,
    },
  };
}
