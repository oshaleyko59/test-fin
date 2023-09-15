import {
  Text
} from '@chakra-ui/react';
import COLORS from 'constants/colors';

export default function Name({ make, model, year, fs='16px' }) {

  return (
    <>
      <Text textStyle="name" color={COLORS.black}>
        {make}
      </Text>
      <Text textStyle="name" color={COLORS.blue}>
        ` ${model}, `
      </Text>
      <Text textStyle="name" color={COLORS.black}>
        {year}
      </Text>
    </>
  );
}
