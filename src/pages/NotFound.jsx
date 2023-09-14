import { Box, Text } from '@chakra-ui/react';
import COLORS from 'constants/colors';

export default function NotFound() {
  return (
    <Box mt="120px">
      <Text fontSize="24px" color={COLORS.black}>
        The page is not found...
      </Text>
    </Box>
  );
}
