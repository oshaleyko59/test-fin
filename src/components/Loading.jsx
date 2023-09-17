import { Button, Flex } from '@chakra-ui/react';

const Loading = ({ loadingText, isLoading }) => {
  return (
    <Flex alignItems="flex-start">
      <Button
        mt="20px"
        isLoading={isLoading}
        loadingText={loadingText}
        colorScheme="blue"
        variant="ghost"
        spinnerPlacement="start"
      />
    </Flex>
  );
};

export default Loading;


