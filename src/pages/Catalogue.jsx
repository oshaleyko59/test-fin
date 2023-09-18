import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Stack,
  Button,
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

import Filter from 'components/Filter/Filter';
import AdvertsList from 'components/AdvertsList';
import Loading from 'components/Loading';
import apiAdverts from 'api/adverts';

export default function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('make') ?? '';
  const [error, setError] = useState(null);

  const [visibleAds, setVisibleAds] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(true);

  function handleLoadMore() {
    if (isMore) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  }

  const fetchData = useCallback(async () => {
    setIsBusy(true);
    setError(null);
    try {
      const data = await apiAdverts.getAll(page, query);
      if (page === 1) {
        setVisibleAds(data);
      } else {
        if (data?.length) {
          setVisibleAds(visibleAds => [...visibleAds, ...data]);
        }
      }
      setIsMore(data?.length === 8);
      if (data.length === 0) { setError(`No adverts found on the query <${query}>`) };
    } catch (err) {
      setVisibleAds([]);
      setError(err);
    }
    setIsBusy(false);
  }, [query, page]);

  function handleSubmit(query) {
    setIsMore(true);
    setPage(1);
    if (query === '') {
      return setSearchParams({});
    }

    setSearchParams({ query });
  }

  useEffect(() => {
    if (isMore) {
      setIsBusy(true);
      fetchData();
    }
  }, [fetchData, isMore]);

  return (
    <Container as="main" w="full" maxWidth="1440px">
      <Stack>
        <Filter  onSubmitClick={handleSubmit} />
        {error && (
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {error}
            </AlertTitle>
          </Alert>
        )}
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
            </>
          )
        )}
      </Stack>
    </Container>
  );
}
