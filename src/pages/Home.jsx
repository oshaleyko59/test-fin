import {
  Heading,
  Text,
  Flex,
  Box,
  SkeletonText,
  Skeleton,
} from '@chakra-ui/react';

import COLORS from 'constants/colors';
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
              Hello :)
            </Heading>
            <Box w={[300, 400, 500]} mb="40px">
              <Text fontSize="24px" color={COLORS.black}>
                Here you can select your ideal car for rent on the basis of
                your personal preference in make, price per day, mileage etc.
              </Text>
            </Box>
          </SkeletonText>
          <Skeleton isLoaded={true}>
{/*   //FIXME:          <iframe
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
