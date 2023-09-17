import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Stack, Button, Container } from '@chakra-ui/react';

import Filter from 'components/Filter/Filter';
import AdvertsList from 'components/AdvertsList';
import Loading from 'components/Loading';
import apiAdverts from 'api/adverts';

export default function Catalogue() {
  let [searchParams] = useSearchParams();

  const [visibleAds, setVisibleAds] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(true);
  const endOfListRef = useRef(null);

  function handleLoadMore() {
    if (isMore) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  }

  function doSearch(params) {
    console.log('doSearch>>>>', params.make);
  }

  useEffect(() => {
    async function getData() {
      let data;
      try {
        if (searchParams) {
          data = await apiAdverts.getFiltered({
            make: searchParams.getAll('make'),
          });
          console.log('searchParams>>>', data);
          setVisibleAds(data);
        }else{
        data = await apiAdverts.getAll(page);
        if (page === 1) {
          setVisibleAds(data);
        } else {
          if (data?.length) {
            setVisibleAds(visibleAds => [...visibleAds, ...data]);
          }
        }
        setIsMore(data?.length === 8);}

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
  }, [page, isMore, searchParams]);

  console.log("searchParams>>>", searchParams.getAll("make"))
  return (
    <Container as="main" w="full" maxWidth="1440px">
      <Stack>
        {isBusy ? (
          <Loading isLoading loadingText="... Loading data" />
        ) : (
          visibleAds?.length && (
            <>
                <Filter onSearchClick={doSearch} />
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
    </Container>
  );
}
