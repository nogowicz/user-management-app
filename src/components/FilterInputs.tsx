import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { AppDispatch, RootState } from '../store';
import { setFilter } from '../store/usersSlice';

import CustomInput from './ui/CustomInput';

type FilterField = 'name' | 'username' | 'email' | 'phone';

export default function FilterInputs() {
  const dispatch = useDispatch<AppDispatch>();
  const { filters } = useSelector((state: RootState) => state.users);

  const [filterValues, setFilterValues] = useState({
    name: filters.name,
    username: filters.username,
    email: filters.email,
    phone: filters.phone,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      for (const field in filterValues) {
        dispatch(
          setFilter({
            field: field as FilterField,
            value: filterValues[field as FilterField],
          })
        );
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [filterValues, dispatch]);

  const handleFilterChange = (field: FilterField, value: string) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
      <CustomInput
        type="text"
        placeholder="Filter by name"
        value={filterValues.name}
        onChange={(e) => handleFilterChange('name', e.target.value)}
      />
      <CustomInput
        type="text"
        placeholder="Filter by username"
        value={filterValues.username}
        onChange={(e) => handleFilterChange('username', e.target.value)}
      />
      <CustomInput
        type="text"
        placeholder="Filter by email"
        value={filterValues.email}
        onChange={(e) => handleFilterChange('email', e.target.value)}
      />
      <CustomInput
        type="text"
        placeholder="Filter by phone"
        value={filterValues.phone}
        onChange={(e) => handleFilterChange('phone', e.target.value)}
      />
    </div>
  );
}
