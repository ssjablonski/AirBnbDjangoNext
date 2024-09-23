"use client";

import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";

export type SelectCountryValue = {
  label: string;
  value: string;
};

interface SelectCountryProps {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <>
      <Select
        isClearable
        value={value}
        placeholder="Select country"
        onChange={(value) => onChange(value as SelectCountryValue)}
        options={getAll()}
      />
    </>
  );
};

export default SelectCountry;
