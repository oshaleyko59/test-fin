//import PropTypes from 'prop-types';
//import { useDispatch } from 'react-redux';
import {
  Text,
  VStack,
  Stack,
  Box,
  HStack,
  Flex,
  IconButton,
  Button,
} from '@chakra-ui/react';
import useLocalStorageState from 'use-local-storage-state';
//import { CloseIcon } from 'icons/CloseIcon';
import { FiHeart } from 'react-icons/fi';

import Name from './Name';
import MainButton from '../MainButton';
import COLORS from 'constants/colors';
import VLine from 'icons/VLine';

export default function AdvertCard({ ad, onClick }) {
  const [favorites, setFavorites] = useLocalStorageState('favAds', {
    defaultValue: [],
  });
  const { id, make, model, year, mileage, rentalCompany, type } = ad;

  function handleClick() {
    console.log('favorites.indexOf(id)>>>>', favorites.indexOf(id));
    if (isFavorite()) {
      setFavorites(favorites.toSpliced(favorites.indexOf(id), 1));
    } else {
      setFavorites([...favorites, id]);
    }
    onClick(id);
  }

  function isFavorite() {
    return favorites.includes(id);
  }

  //TODO: background image to Box ??? #12141780  h="426px"
  //background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(<path-to-image>), lightgray 50% / cover no-repeat;
  return (
    <Box w="274px" marginBottom="50px" marginRight="29px">
      <Stack w="full" align-items="flex-start" gap="28px" flexShrink={0}>
        <VStack align-items="flex-start" gap="14px">
          <Flex
            justifyContent="flex-end"
            p="14px"
            w="100%"
            h="268px"
            borderRadius="14px"
            background={`linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(${ad.img}) no-repeat  center/cover lightblue`}
          >
            <Button
              variant="ghost"
              colorScheme="whiteAlpha"
              aria-label="Toggle favorite"
              onClick={handleClick}
            >
              <FiHeart
                fontSize="18px"
                fill={isFavorite() ? 'blue' : 'transparent'}
                stroke={isFavorite() ? 'blue' : 'white'}
              />
            </Button>
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
background={`linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(${ad.img}), lightblue 10% / cover`}


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
