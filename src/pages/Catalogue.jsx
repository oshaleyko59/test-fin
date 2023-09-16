import { useEffect, useState, useRef } from 'react';
import { Stack, Button } from '@chakra-ui/react';

import AdvertsList from 'components/AdvertsList';
import Loading from 'components/Loading';
import apiAdverts from 'api/adverts';

export default function Catalogue() {
  const [visibleAds, setVisibleAds] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(true);
  const endOfListRef = useRef(null);

  // function onChangeFilter() {}

  function handleLoadMore() {
    if (isMore) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        console.log('data>>>page', page);
        const data = await apiAdverts.getAll(page);
        if (page === 1) {
          setVisibleAds(data);
        } else {
          if (data?.length) {
            setVisibleAds(visibleAds => {
              console.log('visibleAds>>>length', visibleAds.length);
              return [...visibleAds, ...data];
            });
          }
        }
        setIsMore(data?.length === 8);

        endOfListRef?.current?.scrollIntoView(); // FIXME: ???
        console.log('endOfListRef>>>', endOfListRef?.current);
        console.log('data>>>length', data.length);
      } catch (err) {
        console.error('getAll>>>', err);
      }
      setIsBusy(false);
    }

    if (isMore) {
      setIsBusy(true);
      getData();
    }
  }, [page, isMore]);

  // console.log('isBusy>>>', isBusy);
  //console.log('>>>page', page);

  return (
    <>
      <Stack as="main" w="full">
        {isBusy ? (
          <Loading isLoading loadingText="... Loading data" />
        ) : (
          visibleAds?.length && (
            <>
              <AdvertsList list={visibleAds} />
              {isMore && (
                <Button
                  onClick={handleLoadMore}
                  variant="ghost"
                  colorScheme="messenger"
                  mt="50px"
                  mb="150px"
                >
                  Load more
                </Button>
              )}
              <div ref={endOfListRef} />
            </>
          )
        )}
      </Stack>
    </>
  );
}
