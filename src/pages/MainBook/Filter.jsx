import React, { useEffect, useState } from 'react';
import { StyledInput, StyledLabel } from './Main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from '../../redux/phonebook/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const [localFilter, setLocalFilter] = useState(filter);

  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  const handleInputChange = e => {
    const value = e.target.value.toLowerCase();

    setLocalFilter(value);
    dispatch(setFilter(value));
  };
  return (
    <StyledLabel>
      Find contacts by name:
      <StyledInput
        type="text"
        name="filter"
        value={localFilter}
        onChange={handleInputChange}
      />
    </StyledLabel>
  );
};
