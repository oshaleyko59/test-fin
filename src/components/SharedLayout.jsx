import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Flex, VStack } from '@chakra-ui/react';

import Navigation from './Navigation';
import Loading from './Loading';

//import { UserMenu } from './UserMenu';

import COLORS from 'constants/colors';

const SharedLayout = () => {
  return (
    <VStack ml="auto" mr="auto" minWidth="max-content">
      <Box
        minWidth="max-content"
        as="header"
        p="12px"
        w="80%"
        bg={COLORS.bgWhite}
        px="32px"
        color={COLORS.black}
        boxShadow=" 0px 2px 4px -1px rgba(0, 0, 0, 0.2)"
      >
        <Flex
          as="nav"
          justify="space-between"
          minWidth="max-content"
          alignItems="center"
          gap="2"
        >
          <Navigation />
        </Flex>
      </Box>
      <Suspense fallback={<Loading isLoading loadingText="Loading..." />}>
        <Outlet />
      </Suspense>
    </VStack>
  );
};

export default SharedLayout;
//  {isLoggedIn ? <UserMenu /> : <NavigationAuth />}
