import { Flex, Text, Box, IconButton } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';
//import Proptypes from 'prop-types';

import Filter from 'components/Filter';
//import COLORS from 'constants/colors';

export default function Header ({ showSidebarButton = true, onShowSidebar })  {
  return (
    <Flex as="header" gap="10" alignItems="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<FiChevronRight w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Text>TODO:</Text>
      <Filter />
    </Flex>
  );
};
