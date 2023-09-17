import AdvertCard from 'components/Advert/AdvertCard';
import { Grid, GridItem } from '@chakra-ui/react';

export default function AdvertsList({ list }) {

/*   function handleClick(id) {
    console.log('click>>>id', id); //onClick={handleClick}
  }

  console.log('visibleAds>>>', list);
 */
  return (
    <Grid width="full" templateColumns="repeat(4, 1fr)">
      {!!list &&
        list.map(ad => (
          <GridItem key={ad.id}>
            <AdvertCard ad={ad} />
          </GridItem>
        ))}
    </Grid>
  );
}
