//import PropTypes from 'prop-types';
//import { useDispatch } from 'react-redux';
import { Text, VStack, Image, Box, HStack } from '@chakra-ui/react';

//import { CloseIcon } from 'icons/CloseIcon';
//import { LiIcon } from 'icons/LiIcon';
import Name from './Name';
import MainButton from '../MainButton';
import VLine from 'icons/VLine';
import COLORS from 'constants/colors';

export default function AdvertCard({ advert }) {
  function onClick(id) {
    console.log('click>>>id', id);
  }
  const { make, model, year } = advert;

  //TODO: background image to Box ??? #12141780
  return (
    <VStack
      w="274px"
      h="426px"
      align-items="flex-start"
      gap="28px"
      flexShrink={0}
    >
      <Box w="100%" h="268px" overflow="hidden" borderRadius="14px">
        <Image src={advert.img} alt="Photo of the car" />
      </Box>
      <HStack justifyContent="space-between" flexGrow={1}>
        <Name make={make} model={model} year={year} />
        <Text textStyle="name" color={COLORS.black}>
          {advert.rentalPrice}
        </Text>
      </HStack>
      <VStack>
        <HStack>
          <Text textStyle="note">City TODO:</Text>
          <VLine />
          <Text textStyle="note">Country TODO:</Text>
          <VLine />
          <Text textStyle="note">{advert.rentalCompany}</Text>
          <VLine />
          <Text textStyle="note">Premium TODO:</Text>
        </HStack>
        <HStack>
          <Text textStyle="note">{advert.type}</Text>
          <VLine />
          <Text textStyle="note">{advert.model}</Text>
          <VLine />
          <Text textStyle="note">{advert.mileage}</Text>
          <VLine />
        </HStack>
      </VStack>
      <MainButton onClick={() => onClick(advert.id)}>
        <Text>Learn more</Text>
      </MainButton>
    </VStack>
  );
}

/* w=274 h=268 borderRadius=14
        <ListIcon as={LiIcon} />

        <Text as="a" href={'tel:' + contact.number}>
              {contact.number}
            </Text>
*/
/* ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  }).isRequired,
}; */
