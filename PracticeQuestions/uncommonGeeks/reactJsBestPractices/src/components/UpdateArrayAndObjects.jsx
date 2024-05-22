import React, { useState } from "react";

const UpdateArrayAndObjects = () => {
  const [x, setX] = useState(10);

  const addTenToX = () => {
    setX(x + 10);
  };

  const userInfo = {
    firstName: "Harsh",
    lastName: "Vardhan",
    address: {
      firstLine: "Sector 38",
      secondLine: "Gurugram",
    },
  };
  const [userDetails, setUserDetails] = useState(userInfo);

  const updateUserDetails = () => {
    // setUserDetails((prev) => ({
    //   ...prev,
    //   firstName: "Legend",
    //   lastName: "Harsh",
    // }));

    // or

    setUserDetails({
      ...userDetails,
      address: {
        ...userDetails?.address,
        firstLine: "Whitefield",
        secondLine: "Bengaluru",
      },
    });
  };

  return (
    <div>
      <div>
        <h1>UpdateArrayAndObjects</h1>
      </div>
      <div>
        <p>Value of x is = {x}</p>
        <button onClick={addTenToX}>Add 10 to x</button>
        <div style={{ color: "red" }}>
          Value of x immutable(value of x can be updated on the same location).
          In js value of primitive types. But object types are mutable so that
          means in the same memory location you can update the value
        </div>
        <div>
          {/* always put question mark, as it is a good practice*/}
          <p>User firstname is {userDetails?.firstName}</p>{" "}
          <p>User lastname is {userDetails?.lastName}</p>
          <p>User address firstLine is {userDetails?.address?.firstLine}</p>
          <p>User address lastline is {userDetails?.address?.secondLine}</p>
          <button onClick={updateUserDetails}>Update user details</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateArrayAndObjects;
