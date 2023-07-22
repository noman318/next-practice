import React from "react";

const News = ({ articles }) => {
  //   console.log("{articles}", articles);
  return (
    <div style={{ padding: "20px" }}>
      <h1>All news Arcticles</h1>
      {articles.map((article) => (
        <div key={article?.id}>
          <h2>
            {article?.id} | {article?.title} | {article?.category}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
}
