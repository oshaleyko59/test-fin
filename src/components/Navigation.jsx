import { NavLink } from 'react-router-dom';
import { Flex, Text, Button } from '@chakra-ui/react';
//import Proptypes from 'prop-types';

import COLORS from 'constants/colors';

const getStyle = ({ isActive, isPending }) => { //FIXME:
  return {
    color: isPending ? 'red' : isActive ? 'gray' : `${COLORS.blue}`,
  };
};

const getColor = ({ isActive, isPending }) => {
  //FIXME:
  return (!!isPending ? 'red' : !!isActive ? 'gray' : `${COLORS.blue}`);
};

const Navigation = ({onClick}) => {
  return (
    <Flex
      direction="column"
      as="nav"
      gap="10"
      minWidth="max-content"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <NavLink to="/" style={getStyle}>
        <Button variant="ghost" colorScheme={getColor} onClick={onClick}>
          <Text fontSize="20px">Home</Text>
        </Button>
      </NavLink>
      <NavLink to="/catalog" style={getStyle} end>
        <Button variant="ghost" colorScheme={getColor} onClick={onClick}>
          <Text fontSize="20px" alignSelf="flex-end">
            Catalogue
          </Text>
        </Button>
      </NavLink>
      <NavLink to="/favorites" style={getStyle} end>
        <Button variant="ghost" colorScheme={getColor} onClick={onClick}>
          <Text fontSize="20px" alignSelf="flex-end">
            Favorites
          </Text>
        </Button>
      </NavLink>
    </Flex>
  );
};

export default Navigation;

/* Navigation.propTypes = {
  showPrivate: Proptypes.bool,
};
 */
