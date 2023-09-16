import { Flex, Box, IconButton } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

//import Proptypes from 'prop-types';
//import COLORS from 'constants/colors';
//   <Box flex="1">
export default function Header ({ showSidebarButton = true, onShowSidebar, children })  {
  return (
    <Flex as="header" gap="10" justifyContent='flex-start' alignItems="center" minHeight='74px'>
      <Box >
        {showSidebarButton && (
          <IconButton
            icon={<FiChevronRight w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      {children}
    </Flex>
  );
};
