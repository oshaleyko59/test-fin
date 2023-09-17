import {Text} from '@chakra-ui/react';
import COLORS from 'constants/colors';

export default function Name({ make, model, year, fs='16px' }) {

  return (
    <Text color={COLORS.black} noOfLines={1} fontSize={fs}>
      <Text as="span">{make}</Text>
      <Text as="span" color={COLORS.blue}>
        {` ${model}, `}
      </Text>
      <Text as="span">{year}</Text>
    </Text>
  );
}

