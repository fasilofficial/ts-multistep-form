import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold my-3">{title}</h2>
      <div className="grid gap-y-2 justify-start grid-cols-auto">
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
