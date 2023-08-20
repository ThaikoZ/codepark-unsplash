import {
  Center,
  Text,
  Image,
  Flex,
  Box,
  Heading,
  HStack,
  Input,
} from "@chakra-ui/react";
import heroBg from "./assets/background.avif";

const HeroBanner = () => {
  return (
    <Center
      height="100%"
      objectFit="cover"
      bgImage={heroBg}
      backgroundPosition="center"
    >
      <Flex
        flexDirection="column"
        height="100%"
        width="50vw"
        justifyContent="center"
        color="#fff"
      >
        <Heading fontSize="4xl" fontWeight="800">
          Unsplash
        </Heading>
        <Text marginTop="0.6rem" fontWeight="500" fontSize="15px">
          The internet’s source for visuals. <br />
          Powered by creators everywhere.
        </Text>
        <Input marginTop="1.2rem" />
      </Flex>
    </Center>
  );
};

export default HeroBanner;
