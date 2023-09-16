import { useState } from 'react';
import {  HStack } from '@chakra-ui/react';
import MainButton from 'components/MainButton';

import CarBrand from './CarBrand';


const Filter = () => {
  const [brand, setBrand] = useState('');

console.log('brand>>>>', brand)
  return (
<HStack p="40px"  gap="20px" alignItems='end'>
      <CarBrand value={brand} onChange={setBrand}/>
      <MainButton>Search</MainButton>
</HStack>
  );
};

export default Filter;

/* Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}; */
