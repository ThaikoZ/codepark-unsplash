import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import background from "../../assets/background.avif";
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
      <Flex width="50vw" maxW="2xl" flexDirection="column">
        <Heading
          fontSize="42px"
          marginTop="-40px"
          paddingBottom="15px"
          letterSpacing="1px"
          color="#fff"
          lineHeight="3.2rem"
        >
          Unsplash
        </Heading>
        <Box
          paddingBottom="1.5rem"
          color="#fff"
          fontSize="16px"
          fontWeight="500"
        >
          The internet’s source for visuals.
          <br /> Powered by creators everywhere.
        </Box>
        <SearchInput />
      </Flex>
    </Center>
  );
};

export default Hero;
