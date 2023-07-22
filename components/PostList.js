import Link from "next/link";
import React from "react";

const PostList = ({ data }) => {
  //   console.log("props", data);
  return (
    <div style={{ padding: "10px" }}>
      <h3>
        <Link href={`posts/${data?.id}`} passHref>
          Id: {data?.id} <hr /> Title: {data?.title}
        </Link>
        <hr />
      </h3>
      <p>{data?.body}</p>
    </div>
  );
};

export default PostList;
