import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { customStyles } from './selectStyles';
import { BsChevronDown } from 'react-icons/bs';

const options = [
  { value: 'all', label: 'All' },
  { value: 'football', label: 'Football' },
  { value: 'volleyball', label: 'Volleyball' },
  { value: 'basketball', label: 'Basketball' },
  { value: 'tennis', label: 'Tennis' },
];

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <BsChevronDown />
    </components.DropdownIndicator>
  );
};

export default function Filter() {

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='filter'>
      <h2 className="filter__title">
        Filters
      </h2>
      <form className='filter__form'>

        <Select
          styles={customStyles}
          components={{ DropdownIndicator }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder={'Select Sport'}
        />
        <input
          type="text"
          placeholder='Address'
          className='filter__input'
        />

      </form>
    </div>
  );
}