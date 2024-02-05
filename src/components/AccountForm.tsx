import FormWrapper from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountDataProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountDataProps) => {
  return (
    <FormWrapper title="Account">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        autoFocus
        required
      />
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        required
      />
    </FormWrapper>
  );
};

export default AccountForm;
