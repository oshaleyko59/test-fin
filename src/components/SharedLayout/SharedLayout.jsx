import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, VStack, useBreakpointValue } from '@chakra-ui/react';

import Sidebar from '../SideBar';
import Filter from 'components/Filter/Filter';
import Loading from '../Loading';

import Header from 'components/Header';

const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };

const SharedLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <VStack ml="160px" mr="0px" maxWidth="1440px">
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        >
          <Filter/>
        </Header>

        <Suspense fallback={<Loading isLoading loadingText="Loading..." />}>
          <Outlet />
        </Suspense>
      </Box>
    </VStack>
  );
};

export default SharedLayout;

