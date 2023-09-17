import { useState, useEffect } from 'react';
import {
  Grid,
  GridItem,
  Container,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';
import useLocalStorageState from 'use-local-storage-state';

import AdvertCard from 'components/Advert/AdvertCard';
import apiAdverts from 'api/adverts';
import COLORS from 'constants/colors';

export default function Favorites() {
  const [favorites, setFavorites] = useLocalStorageState('favAds', {
    defaultValue: [],
  });
  const [favAds, setFavAds] = useState([]);

  useEffect(() => {
    let ignore = false;
    setFavAds([]);
    apiAdverts.getListById(favorites).then(data => {
      if (!ignore) {
        setFavAds(data);
        if (data.length !== favorites.length) {
          setFavorites([]);
          const res = [];
          data.forEach((el) => { res.push(el.id) });
          setFavorites(res);
        }
      }
    });

    return () => {
      ignore = true;
    };
  }, [favorites, setFavorites]);

  return (
    <Container py="60px" as="main" w="full" maxWidth="1440px">
      <Heading mb="40px"> Your favorite adverts</Heading>
      <Grid width="full" templateColumns="repeat(4, 1fr)">
        {!!favAds ? (
          favAds.map(ad => (
            <GridItem key={ad.id}>
              <AdvertCard ad={ad} />
            </GridItem>
          ))
        ) : (
          <Box w={[300, 400, 500]}>
            <Text fontSize="24px" color={COLORS.black}>
              You don't have any favorite yet...
            </Text>
          </Box>
        )}
      </Grid>
    </Container>
  );
}
