import { HStack, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import CollapsedMenu from "./CollapsedMenu";
import CollapsedUser from "./CollapsedUser";
import SearchInput from "./SearchInput";
import CollapsedNotifications from "./CollapsedNotifications";
import Topics from "./Topics";

const Navbar = () => {
  return (
    <>
      <HStack gap="15px" justifyContent={"space-between"} height="50%">
        <Image src={logo} boxSize="32px" cursor="pointer" />
        <SearchInput />
        <HStack gap="15px">
          <CollapsedNotifications />
          <CollapsedUser />
          <CollapsedMenu />
        </HStack>
      </HStack>
      <HStack
        gap="15px"
        justifyContent={"space-between"}
        height="50%"
        maxWidth="93vw"
      >
        <Topics />
      </HStack>
    </>
  );
};

export default Navbar;
