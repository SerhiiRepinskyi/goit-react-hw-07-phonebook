import { FilterBlock, FilterLabel, FilterInput } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);

  const handleChange = evt => {
    const valueFilter = evt.currentTarget.value.trim();
    dispatch(setFilter(valueFilter));
  };

  return (
    <FilterBlock>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleChange}
        />
      </FilterLabel>
    </FilterBlock>
  );
};

export default Filter;
