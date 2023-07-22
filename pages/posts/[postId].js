import { useRouter } from "next/router";
import React from "react";

const PostData = ({ posts }) => {
  // const router = useRouter();
  //   console.log("posts", posts);
  // if (router.isFallback) {
  //   return <h2>Loading...</h2>;
  // }
  // else {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Post details</h2>
      <h3>{posts?.id}</h3>
      <h4>{posts?.title}</h4>
      <hr />
      <p>{posts?.body}</p>
    </div>
  );
  // }
};

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data?.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });
  // console.log("paths", paths);
  return {
    // if there are limited paths
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    //   {
    //     params: { postId: "4" },
    //   },
    //   {
    //     params: { postId: "5" },
    //   },
    // ],
    paths,
    // fallback: true,
    // fallback: false,
    fallback: "blocking",
  };
}

export async function getStaticProps(id) {
  const { params } = id;
  console.log("params", params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log(`Generating page for /posts/${params?.postId}`);
  return {
    props: {
      posts: data,
    },
  };
}
export default PostData;
