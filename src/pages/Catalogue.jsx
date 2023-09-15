import { Stack, Text } from '@chakra-ui/react';
//import { useFilter } from '../hooks/useFilter';
//import { useAdverts } from '../hooks/useAdverts';
import  AdvertsList  from 'components/AdvertsList';
import  Filter  from 'components/Filter';
import  Loading  from 'components/Loading';
import COLORS from 'constants/colors';

export default function Catalogue() {
 // const { filter, onChangeFilter } = useFilter();
 // const { isBusy, visibleContacts, isEmpty, onDeleteContact } = useContacts();
  const visibleAdverts = [];
  const isBusy = true; //FIXME:
  const filter = '';

  function onChangeFilter() {

  }

  return (
    <Stack as="main" p="16px" w="80%" maxWidth="720">
      <Text as="h1" fontSize="32px" color={COLORS.black}>
        Phonebook
      </Text>
      <Text
        as="h2"
        mt="32px"
        fontSize="24px"
        fontWeight="500"
        color={COLORS.black}
      >
        Contacts
      </Text>
      {isBusy ? (
        <Loading isLoading loadingText="" />
      ) :(
        <Filter value={filter} onChangeFilter={onChangeFilter} />
      )}
      {visibleAdverts.length && (
        <AdvertsList
          adverts={visibleAdverts}
        />
      )}
    </Stack>
  );
}
