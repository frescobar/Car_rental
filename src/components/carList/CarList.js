import React from "react";
import Car from "../car/Car";

export default function CarList({ carList }) {
  return (
    <>
      <div className='w-100 d-flex justify-content-center bd-highlight flex-wrap m-2 col-md-12'>
        {carList.map((cars) => (
          <Car key={cars.id} {...cars} />
        ))}
      </div>
    </>
  );
}
