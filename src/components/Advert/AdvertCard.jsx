import {
  Text,
  VStack,
  Stack,
  Box,
  HStack,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
} from '@chakra-ui/react';
import useLocalStorageState from 'use-local-storage-state';
import { FiHeart } from 'react-icons/fi';

import Name from './Name';
import MainButton from '../MainButton';
import COLORS from 'constants/colors';
import VLine from 'icons/VLine';
import AdModalBody from 'components/Modal/AdModalBody';
import getCityCountry from 'helpers/getCityCountry';
import getPremium from 'helpers/getPremium';
import toDecCommaStr from 'helpers/toDecCommaStr';

export default function AdvertCard({ ad, onClick }) {
  const [favorites, setFavorites] = useLocalStorageState('favAds', {
    defaultValue: [],
  });
  const { id, make, model, year, mileage, rentalCompany, type, accessories, functionalities } = ad;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { city, country } = getCityCountry(ad.address);
  const { isPremium, feature } = getPremium([...accessories, ...functionalities]);

  function handleClick() {
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
                <Text textStyle="note">{city}</Text>
                <VLine />
                <Text textStyle="note">{country}</Text>
                <VLine />
                <Text textStyle="note" noOfLines={1}>
                  {rentalCompany}
                </Text>
                {isPremium && <VLine />}
                {isPremium && <Text textStyle="note">Premium</Text>}
              </HStack>
              <HStack gap="3px" justifyContent="flex-start" flexGrow={1}>
                <Text textStyle="note">{type}</Text>
                <VLine />
                <Text noOfLines={1} textStyle="note">
                  {model}
                </Text>
                <VLine />
                <Text textStyle="note">{toDecCommaStr(mileage)}</Text>
                <VLine />
                <Text noOfLines={1} textStyle="note">
                  {isPremium ? feature : functionalities[0]}
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
        <MainButton onClick={onOpen}>
          <Text>Learn more</Text>
        </MainButton>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="fit-content" borderRadius="24px">
          <ModalCloseButton />
          <ModalBody id="Detailed information of rental proposal" p="0px">
            <AdModalBody ad={ad} />
          </ModalBody>
          <ModalFooter marginBottom="24px">
            <Stack direction="row" justifyContent="flex-start">
              <Box
                as="a"
                href="tel:+380730000000"
                borderRadius="12px"
                bg={COLORS.bgBlue}
                color={COLORS.white}
                fontWeight="600"
                _hover={{
                  background: `${COLORS.bgDarkBlue}`,
                }}
                px="50px"
                py="12px"
                alignSelf="start"
              >
                <Text lineHeight="20px">Call to rent</Text>
              </Box>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
