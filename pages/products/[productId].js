import { useRouter } from "next/router";
import React from "react";

const Product = ({ product }) => {
  //   console.log("product", product);
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Product Details</h1>
      <h2>
        {product?.id}
        {product?.title}
        {product?.price}
      </h2>
      <p>{product?.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}

export const getStaticProps = async (id) => {
  const { params } = id;
  //   console.log("params", params);
  console.log(`Regenrating Page Product ${params?.productId}`);
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  //   console.log("data", data);
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};
export default Product;
