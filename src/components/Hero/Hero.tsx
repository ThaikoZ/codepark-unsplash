import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import background from "../../assets/background.webp";
import SearchInput from "./SearchInput";
const Hero = () => {
  return (
    <Center
      height="100%"
      bgImage={background}
      objectFit="cover"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex width="50%" maxW="2xl" flexDirection="column">
        <Heading
          fontSize="40px"
          marginTop="-40px"
          paddingBottom="15px"
          color="#fff"
        >
          Unsplash
        </Heading>
        <Box paddingBottom="25px" color="#fff" fontSize="14px">
          The internet’s source for visuals.
          <br /> Powered by creators everywhere.
        </Box>
        <SearchInput />
      </Flex>
    </Center>
  );
};

export default Hero;
