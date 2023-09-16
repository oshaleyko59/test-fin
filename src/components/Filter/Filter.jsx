//import PropTypes from 'prop-types';
import { Text, Input } from '@chakra-ui/react';
import COLORS from 'constants/colors';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <Text as="label" mb="20px" fontWeight="500" color={COLORS.black}>
      {'Search by make: '}
      <Input
        width="auto"
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onChangeFilter}
        color="red"
        background={COLORS.bgWhite}
      />
    </Text>
  );
};

export default Filter;

/* Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}; */
