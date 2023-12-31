import {
  Button,
} from '@chakra-ui/react';

import COLORS from 'constants/colors';

export default function MainButton({type='button', onClick, children }) {
  return (
    <Button type={type}
      variant="solid"
      onClick={onClick}
      colorScheme="messenger"
      _hover={{
        background: `${COLORS.bgDarkBlue}`,
      }}
      px="44px"
      py="14px"
    >
      {children}
    </Button>
  );
}

