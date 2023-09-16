import {
  //Text,
  Input,
  //VStack,
  Box,
  FormControl,
  FormLabel,
  //FormErrorMessage,
} from '@chakra-ui/react';
import COLORS from 'constants/colors';

const CarBrand = ({ value, onChange }) => {
  return (
    <Box>
      <FormControl variant="floating" id="brand" colorScheme="messenger">
        <FormLabel color={COLORS.grey}>Car brand</FormLabel>
        <Input placeholder="" colorScheme="messenger" />
        {/* FIXME: ???  It is important that the Label comes after the Control due to css selectors */}
      </FormControl>
    </Box>
  );
};
//<FormErrorMessage>Your input is invalid</FormErrorMessage>
//isRequired isInvalid TODO: ???

export default CarBrand;
/*     <VStack>
      <Text as="label" mb="20px" fontWeight="500" color={COLORS.black}>
        Car brand
        <Input
          width="auto"
          type="text"
          id="filter"
          name="filter"
          value={value}
          onChange={onChange}
          color="red"
          background={COLORS.bgWhite}
        />
      </Text>
    </VStack> */
