import { NavLink } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
//import Proptypes from 'prop-types';

import COLORS from 'constants/colors';

const getStyle = ({ isActive, isPending }) => {
  return {
    color: isPending ? 'red' : isActive ? 'gray' : `${COLORS.blue}`,
  };
};

const Navigation = () => {
  return (
    <Flex gap="10" alignItems="center">
      <NavLink to="/" style={getStyle}>
        <Text fontSize="20px">Home</Text>
      </NavLink>
      <NavLink to="/adverts" style={getStyle} end>
        <Text fontSize="20px" alignSelf="flex-end">
          Catalogue
        </Text>
      </NavLink>
      <NavLink to="/saved-adverts" style={getStyle} end>
        <Text fontSize="20px" alignSelf="flex-end">
          Saved Adverts
        </Text>
      </NavLink>
    </Flex>
  );
};

export default Navigation;

/* Navigation.propTypes = {
  showPrivate: Proptypes.bool,
};
 */
