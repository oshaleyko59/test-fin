import {
  Button,
} from '@chakra-ui/react';

import COLORS from 'constants/colors';

export default function MainButton({ onClick, children }) {

  return (
    <Button
      type="button"
      variant="solid"
      onClick={onClick}
      colorScheme="messenger"
      _hover={{
        background: `${COLORS.bgDarkBlue}`,
      }}
      p="4px"
    >
      {children}
    </Button>
  );
}

//     height="20px"
// <CloseIcon />
