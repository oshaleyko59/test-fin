import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  HStack,
  Container,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import makes from '../../assets/makes.json';
import COLORS from 'constants/colors';
import MainButton from 'components/MainButton';

const Filter = ({onSubmitClick, value}) => {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = data => {
    const make = getValues('brand');
    onSubmitClick(make);
    if (!make) {
      navigate('/catalog');
      return;
    }
    const navstr = `/catalog?make=${make}`;
    navigate(navstr);
  };

  return (
    <Container as="form" p="40px" onSubmit={handleSubmit(onSubmit)}>
      <HStack gap="20px" alignItems="end">
        <FormControl
          size="100px"
          variant="floating"
          id="brand"
          colorScheme="messenger"
        >
          <FormLabel color={COLORS.grey}>Car brand</FormLabel>
          <Select  placeholder="All" name="Car brands" {...register('brand')}>
            {makes.map((make, index) => {
              return (
                <option key={index} value={make}>
                  {make}
                </option>
              );
            })}
          </Select>
        </FormControl>
        <MainButton type="submit">Search</MainButton>
      </HStack>
    </Container>
  );
};

export default Filter;
