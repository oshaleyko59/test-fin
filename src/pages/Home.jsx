import {
  Heading,
  Text,
  Flex,
  Box,
  SkeletonText,
  Skeleton,
} from '@chakra-ui/react';
import COLORS from 'constants/colors';
import TEST from 'components/TEST';
export default function Home() {

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
                Here you can select a your ideal car for rent on the basis of
                your personal preference in make, price, milage etc.
              </Text>
            </Box>
            <Text my="16px" fontSize="20px" color={COLORS.black}>
              TODO:
            </Text>
          </SkeletonText>
          <TEST/>
          <Skeleton isLoaded={true}>
{/*             <iframe
              src="https://giphy.com/embed/HPXmHjGqCQCg8"
              width="480"
              height="255"
              frameBorder="0"
              title="Choose your car"
            /> */}
          </Skeleton>
        </Flex>
      </SkeletonText>
    </div>
  );
}
