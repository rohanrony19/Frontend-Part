import { useState } from "react";
import Arr from "./Arr";

export default function Obj() {
  const [data, setData] = useState({
    name: "Rohan",
    address: {
      city: "Bangalore",
      country: "Karnataka",
    },
  });
  

  const handleName = (val) => {
    data.name = val;
    setData({ ...data });
  };

  const handleCity = (city) => {
    setData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        city: city,
      },
    }));
  };

  const handleCountry = (country) => {
    setData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        country: country,
      },
    }));
  };

  return (
    <div>
      <h1>Updating Object in State</h1>
      <input
        type="text"
        placeholder="update name"
        onChange={(event) => handleName(event.target.value)}
      />
      <input
        type="text"
        placeholder="update city"
        onChange={(event) => handleCity(event.target.value)}
      />
      <input
        type="text"
        placeholder="update country"
        onChange={(event) => handleCountry(event.target.value)}
      />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
      <hr/>
      <Arr/>
    </div>
  );
}
