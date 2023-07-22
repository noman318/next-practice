import React from "react";

const ProducList = ({ productData }) => {
  //   console.log("{productData}", productData);
  return (
    <div>
      <h1>All Products</h1>
      {productData?.map((product) => (
        <div key={product?.id}>
          <h3>{product?.id}</h3>
          {/* <hr /> */}
          <h3>
            {product?.title} {[product?.price]}
          </h3>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProducList;

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  //   console.log("data", data);
  return {
    props: {
      productData: data,
    },
    revalidate: 10,
  };
};
