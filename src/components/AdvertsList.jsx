
import  AdvertsListItem  from 'components/Advert/AdvertCard';
import { List, Box } from '@chakra-ui/react';

export default function  AdvertsList (visibleAds) {

  return (
    <Box>
      {visibleAds && (
        <List spacing={3}>
          {visibleAds.map(ad => (
            <li key={ad.id}>
              <AdvertsListItem advert={ad} />
            </li>
          ))}
        </List>
      )}
    </Box>
  );
};
