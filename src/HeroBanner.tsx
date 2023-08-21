import { Center, Text, Flex, Heading } from "@chakra-ui/react";
import heroBg from "./assets/background.avif";
import SearchInput from "./components/SearchInput";

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
        width="65vw"
        marginTop={{ base: "0px", md: "-70px" }}
        justifyContent="center"
        color="#fff"
      >
        <Heading fontSize="5xl" fontWeight="800">
          Unsplash
        </Heading>
        <Text
          marginTop="1rem"
          marginBottom="1.4rem"
          fontWeight="500"
          fontSize="18px"
        >
          The internet’s source for visuals. <br />
          Powered by creators everywhere.
        </Text>
        <SearchInput />
      </Flex>
    </Center>
  );
};

export default HeroBanner;
