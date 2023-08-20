import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const WrappedMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        icon={<FaBars />}
        fontSize="xl"
        variant="ghost"
        color="#767676"
        bg="none"
        _hover={{ color: "#111" }}
        _active={{ color: "#111" }}
      />
      <MenuList aria-orientation="horizontal">
        <MenuItem>Options</MenuItem>
        <MenuItem>Options2</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default WrappedMenu;
