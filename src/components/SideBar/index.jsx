import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent,
  VStack,
} from '@chakra-ui/react';

import Navigation from 'components/Navigation';

const SidebarContent = ({ onClick }) => (
  <VStack>
    <Navigation onClick={onClick} />
  </VStack>
);

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="#dfdfdf"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Navigation onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
