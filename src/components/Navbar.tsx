import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import WrappedMenu from "./WrappedMenu";
import WrappedUser from "./WrappedUser";
import WrappedNotifications from "./WrappedNotifications";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <HStack
      gap="1.5rem"
      paddingX={4}
      height="50%"
      justifyContent="space-between"
    >
      <Image title="Unsplash Home" src={logo} boxSize="32px" cursor="pointer" />
      <Box width="100%">
        <SearchInput
          barWidth="100%"
          borderRadius="full"
          height="38px"
          outline="0px"
          borderColor="#d1d1d1"
          fontWeight="400"
        />
      </Box>

      <HStack gap={3}>
        <WrappedNotifications />
        <WrappedUser />
        <WrappedMenu />
      </HStack>
    </HStack>
  );
};

export default Navbar;
