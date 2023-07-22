import React from "react";

const ArticleByCategory = ({ articles, category }) => {
  //   console.log("props", articles);
  return (
    <div>
      <h1>Showing news of category {category}</h1>
      {articles.map((article) => (
        <div key={article?.id} style={{ padding: "20px" }}>
          <h2>
            {article?.id} | {article?.title}{" "}
          </h2>
          <hr />
          <p>{article?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  //   console.log("params", params);
  console.log("req.header.cokkie", req.headers.cookie);
  console.log("query", query);
  res.setHeader("Set-Cookie", ["name=Noman"]);
  const { category } = params;
  //   console.log("category", category);
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  //   console.log("data", data);
  console.log(`Pre-rendering news article of category ${category}`);
  return {
    props: {
      articles: data,
      category,
    },
  };
}
