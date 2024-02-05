import FormWrapper from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        First Name
      </label>
      <input
        className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        type="text"
        value={firstName}
        autoFocus
        required
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Last Name
      </label>
      <input
        className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        type="text"
        value={lastName}
        required
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Age
      </label>
      <input
        className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        type="number"
        value={age}
        min={1}
        required
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
