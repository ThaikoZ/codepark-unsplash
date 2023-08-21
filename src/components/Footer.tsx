import { Center, Text } from "@chakra-ui/react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Center height="100%" flexDirection="column">
      <Logo />
      <Text marginTop="18px" fontWeight="400" fontSize="15px">
        Make something awesome
      </Text>
    </Center>
  );
};

export default Footer;
