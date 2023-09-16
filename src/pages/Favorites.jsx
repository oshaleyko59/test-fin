import { useEffect, useState } from 'react';
import { Grid, GridItem, Container, Box, Text } from '@chakra-ui/react';
import useLocalStorageState from 'use-local-storage-state';

import AdvertCard from 'components/Advert/AdvertCard';
import apiAdverts from 'api/adverts';
import COLORS from 'constants/colors';

export default function Favorites() {
  const [favorites, setFavorites] = useLocalStorageState('favAds', {
    defaultValue: [],
  });
  const [favAds, setFavAds] = useState([]);

/*   async function getAd(id) {
    try {
      const data = await apiAdverts.getById(id);
      return data;
    } catch (err) {
      console.error('TODO: This advert is not available anymore...', err);
    }
  } */

  useEffect(() => {
    async function getFavAds() {

      //  apiAdverts.getListById(favorites).then(data => console.log('@FAV>>>', data));
      /*     try {
      const data = await;
      console.log('getFavAds>>>>>', data);
    } catch(err) {
      console.error('TODO: This advert is not available anymore...', err)
    } */
    }

    setFavAds([]);
    getFavAds();
  }, [favorites]);

  console.log('Favorites@FAV>>>>>', favorites);
  return (
    <Container maxWidth="1440px">
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
              You don't have any favorite adverts yet...
            </Text>
          </Box>
        )}
      </Grid>
    </Container>
  );
}
