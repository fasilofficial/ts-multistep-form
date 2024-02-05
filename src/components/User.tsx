import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [userDetails, setUserDetails] = useState(
    localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails"))
      : null
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails) navigate("/");
  }, []);

  return userDetails ? (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-semibold text-center mt-3 mb-6">
        Welcome {userDetails.firstName + " " + userDetails.lastName}
      </h1>
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
          <div className="grid gap-4">
            <div>
              <p className="text-gray-600 text-lg">
                First Name:
                <span className="text-gray-800 ml-2">
                  {userDetails.firstName}
                </span>
              </p>
              <p className="text-gray-600">
                Last Name:
                <span className="text-gray-800 ml-2">
                  {userDetails.lastName}
                </span>
              </p>
              <p className="text-gray-600">
                Age:
                <span className="text-gray-800 ml-2">{userDetails.age}</span>
              </p>
              <p className="text-gray-600">
                Email:
                <span className="text-gray-800 ml-2">{userDetails.email}</span>
              </p>
            </div>
            <div className="h-[2px] w-full bg-gray-200" />
            <div>
              <p className="text-gray-600">
                Street:
                <span className="text-gray-800 ml-2">{userDetails.street}</span>
              </p>
              <p className="text-gray-600">
                City:
                <span className="text-gray-800 ml-2">{userDetails.city}</span>
              </p>
              <p className="text-gray-600">
                State:
                <span className="text-gray-800 ml-2">{userDetails.state}</span>
              </p>
              <p className="text-gray-600">
                Pin:
                <span className="text-gray-800 ml-2">{userDetails.pin}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="text-3xl font-bold text-center">Hello World</h1>
  );
};

export default User;
