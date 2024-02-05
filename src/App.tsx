import { FormEvent, useEffect, useState } from "react";
import AccountForm from "./components/AccountForm";
import AddressForm from "./components/AddressForm";
import UserForm from "./components/UserForm";
import { useMultistepForm } from "./useMultistepForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  pin: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  pin: "",
  email: "",
  password: "",
};

const App = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const navigate = useNavigate();

  function updateFields(fields: Partial<FormData>) {
    setData((prevData) => ({ ...prevData, ...fields }));
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, prev, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    localStorage.setItem("userDetails", JSON.stringify(data));
    toast("Account created successfully");
    setTimeout(() => navigate("/user"), 3000);
  }

  useEffect(() => {
    return () => {
      localStorage.removeItem("userDetails");
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <h1 className="text-3xl font-semibold text-center mt-3 mb-6">
        Typescript Multistep Form
      </h1>
      <div className="bg-white border border-black rounded-lg p-8 m-4 mx-auto font-sans max-w-screen-sm relative">
        <form onSubmit={handleSubmit}>
          <div className="absolute top-3 right-3 text-gray-600">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="mt-4 flex gap-2 justify-end">
            {!isFirstStep && (
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                type="button"
                onClick={prev}
              >
                Back
              </button>
            )}
            <button
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              type="submit"
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
