import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useGetData } from "../Services/services";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Main = () => {
  const { data, isLoading } = useGetData();
  console.log(data);
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {isLoading && (
        <div className="h-screen w-screen grid place-items-center">
          Loading ...
        </div>
      )}
      {data?.map((product: Product) => (
        <Link to={`single/${product.id}`} key={product.id}>
          <div
            className="md:w-[23vw] md:h-[33vh] rounded shadow-lg w-[80vw] overflow-hidden h-[20rem]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[75%] object-contain"
            />
            <div className="p-2 text-center ">
              <p>{product.title}</p>
              <p>Rs.{product.price} /- </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default memo(Main);
