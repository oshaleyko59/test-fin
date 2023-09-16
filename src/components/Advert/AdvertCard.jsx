//import PropTypes from 'prop-types';
//import { useDispatch } from 'react-redux';
import {
  Text,
  VStack,
  Stack,
  Image,
  Box,
  HStack,
  Flex,
} from '@chakra-ui/react';

//import { CloseIcon } from 'icons/CloseIcon';
//import { LiIcon } from 'icons/LiIcon';
import Name from './Name';
import MainButton from '../MainButton';
import COLORS from 'constants/colors';
import VLine from 'icons/VLine';

export default function AdvertCard({ ad }) {
  function onClick(id) {
    console.log('click>>>id', id);
  }
  const { id, make, model, year, mileage, rentalCompany, type } = ad;

  //TODO: background image to Box ??? #12141780  h="426px"
  //background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(<path-to-image>), lightgray 50% / cover no-repeat;
  return (
    <Box w="274px" marginBottom="50px" marginRight="29px">
      <Stack w="full" align-items="flex-start" gap="28px" flexShrink={0}>
        <VStack align-items="flex-start" gap="14px">
          <Flex
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="268px"
            borderRadius="14px"
          >
            <Image
              boxSize="100%"
              objectFit="cover"
              borderRadius="14px"
              bgGradient="linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 100%)"
              src={ad.img}
              alt="Photo of the car"
            />
          </Flex>
          <VStack align-items="flex-start" gap="8px">
            <HStack justifyContent="flex-start" flexGrow={1}>
              <Name make={make} model={model} year={year} />
              <Text textStyle="name" color={COLORS.black}>
                {ad.rentalPrice}
              </Text>
            </HStack>
            <VStack gap="4px">
              <HStack gap="3px" justifyContent="flex-start" flexGrow={1}>
                <Text textStyle="note">City</Text>
                <VLine />
                <Text textStyle="note">Country</Text>
                <VLine />
                <Text textStyle="note">{rentalCompany}</Text>
                <VLine />
                <Text textStyle="note">Premium</Text>
              </HStack>
              <HStack gap="3px" justifyContent="flex-start" flexGrow={1}>
                <Text textStyle="note">{type}</Text>
                <VLine />
                <Text textStyle="note">{model}</Text>
                <VLine />
                <Text textStyle="note">{mileage}</Text>
                <VLine />
                <Text textStyle="note">Feature</Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
        <MainButton onClick={() => onClick(id)}>
          <Text>Learn more</Text>
        </MainButton>
      </Stack>
    </Box>
  );
}

/*
              <HStack gap="4px" justifyContent="flex-start" flexGrow={1}>
                <Text textStyle="note">City</Text>
                <VLine />
                <Text textStyle="note">Country</Text>
                <VLine />
                <Text textStyle="note">{rentalCompany}</Text>
                <VLine />
                <Text textStyle="note">Premium</Text>
              </HStack>
<Divider orientation="vertical" />
w=274 h=268 borderRadius=14
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
