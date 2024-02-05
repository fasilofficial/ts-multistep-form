import FormWrapper from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  pin: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
  street,
  city,
  state,
  pin,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Street
      </label>
      <input
        className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
        autoFocus
        required
      />
      <label className="block mb-1 text-sm font-medium text-gray-700">
        City
      </label>
      <input
        className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
        required
      />
      <label className="block mb-1 text-sm font-medium text-gray-700">
        State
      </label>
      <input
        className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
        required
      />
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Pin
      </label>
      <input
        className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        type="text"
        value={pin}
        onChange={(e) => updateFields({ pin: e.target.value })}
        required
      />
    </FormWrapper>
  );
};

export default AddressForm;
