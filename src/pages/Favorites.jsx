import {
  Heading,
  Text,
  Flex,
  Box,
  SkeletonText,
 // Skeleton,
} from '@chakra-ui/react';
import COLORS from 'constants/colors';

export default function Favorites() {

  return (
    <div>
      <SkeletonText isLoaded={true}>
        <Flex
          direction="column"
          spacing="20px"
          px="32px"
          py="16px"
          w={[400, 500, 700]}
        >
          <SkeletonText isLoaded={true}>
            <Heading py="24px" fontWeight="500" color={COLORS.black}>
              Hello, TODO:!
            </Heading>
            <Box w={[300, 400, 500]}>
              <Text fontSize="24px" color={COLORS.black}>
                Here is Saved adverts
              </Text>
            </Box>
            <Text my="16px" fontSize="20px" color={COLORS.black}>
              TODO:
            </Text>
          </SkeletonText>
        </Flex>
      </SkeletonText>
    </div>
  );
}
