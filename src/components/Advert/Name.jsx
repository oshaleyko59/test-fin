import {Text} from '@chakra-ui/react';
import COLORS from 'constants/colors';

export default function Name({ make, model, year, fs='16px' }) {

  return (
    <Text noOfLines={1}>
      <Text as="span">{make}</Text>
      <Text as="span" color={COLORS.blue}>
        {` ${model}, `}
      </Text>
      <Text as="span">{year}</Text>
    </Text>
  );
}

