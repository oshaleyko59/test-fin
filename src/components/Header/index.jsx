import { Flex, Box, IconButton } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

export default function Header ({ showSidebarButton = true, onShowSidebar, children })  {
  return (
    <Flex
      as="header"
      gap="10"
      justifyContent="flex-start"
      alignItems="center"
      minHeight="74px"
    >
      <Box>
        {showSidebarButton && (
          <IconButton
            icon={<FiChevronRight w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
            aria-label="Show sidebar"
          />
        )}
      </Box>
      {children}
    </Flex>
  );
};
