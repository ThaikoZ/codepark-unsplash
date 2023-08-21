import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import WrappedMenu from "./WrappedMenu";
import WrappedUser from "./WrappedUser";
import WrappedNotifications from "./WrappedNotifications";

const Navbar = () => {
  return (
    <HStack
      gap="1.5rem"
      paddingX={4}
      justifyContent="space-between"
      height="50%"
    >
      <Image title="Unsplash Home" src={logo} boxSize="32px" cursor="pointer" />
      <HStack gap={3}>
        <WrappedNotifications />
        <WrappedUser />
        <WrappedMenu />
      </HStack>
    </HStack>
  );
};

export default Navbar;
