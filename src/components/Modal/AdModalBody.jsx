import { Box, Stack, Text, Image, HStack, Flex } from '@chakra-ui/react';
import Name from 'components/Advert/Name';
import VLine from 'icons/VLine';
import Condition from './Condition';
import COLORS from 'constants/colors';
import getCityCountry from 'helpers/getCityCountry';
import toDecCommaStr from 'helpers/toDecCommaStr';


export default function AdModalBody({ ad }) {
  const {
    id,
    make,
    model,
    year,
    mileage,
    type,
    img,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    rentalPrice, address
  } = ad;
  const { city, country } = getCityCountry(address);

  return (
    <Box w="541px" px="40px" paddingTop="40px" paddingBottom="8px">
      <Stack w="full" align-items="flex-start" flexShrink={0}>
        <Box w="461px"  marginBottom="14px" >
          <Image
            w="full"
            h="232px"
            src={img}
            borderRadius="14px"
            alt="Photo of the car"
            background={COLORS.bgGrey1000}
          />
        </Box>
        <Name make={make} model={model} year={year} fs="18px" />
        <HStack
          marginTop="8px"
          gap="6px"
          justifyContent="flex-start"
          flexGrow={1}
        >
          <Text textStyle="note">{city}</Text>
          <VLine />
          <Text textStyle="note">{country}</Text>
          <VLine />
          <Text textStyle="note">{`Id: ${id}`}</Text>
          <VLine />
          <Text textStyle="note">{`Year: ${year}`}</Text>
          <VLine />
          <Text textStyle="note">{`Type: ${type}`}</Text>
        </HStack>
        <HStack
          marginTop="4px"
          gap="3px"
          justifyContent="flex-start"
          flexGrow={1}
        >
          <Text textStyle="note">{`Fuel Consumption: ${fuelConsumption}`}</Text>
          <VLine />
          <Text textStyle="note">{`Engine Size: ${engineSize}`}</Text>
        </HStack>
        <Text color={COLORS.black} marginTop="14px" fontSize="14px">
          {description}
        </Text>
        <Text color={COLORS.black} marginTop="24px" fontSize="14px">
          Accessories and functionalities:
        </Text>
        <Flex
          direction="row"
          wrap="wrap"
          marginTop="8px"
          gap="3px"
          justifyContent="flex-start"
          flexGrow={1}
        >
          <Text textStyle="note">{accessories[0]}</Text>
          <VLine />
          <Text textStyle="note">{accessories[1]}</Text>
          <VLine />
          <Text textStyle="note">{accessories[2]}</Text>
          <VLine />
          <Text textStyle="note">{functionalities[0]}</Text>
          <VLine />
          <Text textStyle="note">{functionalities[1]}</Text>
          <VLine />
          <Text textStyle="note">{functionalities[2]}</Text>
        </Flex>
      </Stack>
      <Text
        color={COLORS.black}
        marginTop="24px"
        marginBottom="8px"
        fontSize="14px"
      >
        Rental Conditions:
      </Text>
      <Condition
        str={`${rentalConditions}\nMileage:${toDecCommaStr(
          mileage
        )}\nPrice:${rentalPrice}`}
      />
    </Box>
  );
}

