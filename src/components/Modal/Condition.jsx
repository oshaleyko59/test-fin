import { HStack, Text, Flex } from '@chakra-ui/react';
import COLORS from 'constants/colors';

export function OnThePlate({ str }) {
  const [param, value]= str.split(':');
  return (<HStack px="14px" py="7px" borderRadius="35px" bg={COLORS.bgGrey1000} fontSize="12px">
      <Text w='fit-content' color={COLORS.darkGrey}>{param}</Text>
      {!!value && <Text color={COLORS.blue}>{` : ${value}`}</Text>}
    </HStack>)
}

export default function Condition({ str }) {
  const cond = str.split('\n');

  return (
    <Flex direction='row' wrap='wrap'gap='8px' >
      {!!cond && cond.map((item, index) => <OnThePlate key={ index} str={item} />)}
    </Flex>
  );
}
