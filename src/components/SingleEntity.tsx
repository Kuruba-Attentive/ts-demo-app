import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "../Services/services";
import { Navigate } from "react-router-dom";

const SingleEntity = () => {
  const { entityId } = useParams();
  console.log(entityId);

  const { data, isLoading, isError } = useGetSingleProduct(entityId);
  return (
    <div>
      {isError && <Navigate to="/notfound" />}
      {isLoading && (
        <p className="font-bold text-center text-2xl">Loading ...</p>
      )}
      <div className="w-full h-full p-4 flex flex-col justify-center items-center gap-2">
        <img src={data?.image} alt={data?.title} className='w-[50%] h-[20rem] object-contain' />
        <p className="bg-blue-800 px-4 py-2 uppercase text-white rounded-lg shadow-md">{data?.category}</p>
        <div>
          <p className="text-lg font-semibold">{data?.title}</p>
          <p>{data?.description}</p>
          <p className="font-semibold">Price: ₹ {data?.price}</p>
          <p className="font-bold">{data?.rating.rate>3?'Highly Rated':'Low Rated'}</p>
        </div>
      </div>

    </div>
  );
};

export default memo(SingleEntity);
