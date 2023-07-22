import PostList from "@/components/PostList";
import React from "react";

const Posts = ({ postsData }) => {
  // console.log("{postsData}", postsData);
  return (
    <div style={{ padding: "20px" }}>
      <h1>All Posts</h1>
      {postsData.map((post) => (
        <div key={post.id}>
          <PostList data={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // console.log("data", data);
  return {
    props: {
      postsData: data,
      // postsData: data.slice(0, 5),
    },
  };
};
