import React, { useEffect, useState } from "react";
import NavBar from "../navbar/Navbar";
import { db } from "../../firebase";
import fb from "../../firebase";

export default function Profile() {
  const [data, setData] = useState([]);

  const getBookings = async () => {
    const querySnapshot = await db.collection("Bookings").get();
    querySnapshot.forEach((doc) => {
      setData(doc.data());
      console.log(data);
    });
  };

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      <NavBar />
      <h2 className='text-center text-primary'>Reservas</h2>
    </>
  );
}
