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
        title="View more links"
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
        <MenuItem>Company</MenuItem>
        <MenuItem>Product</MenuItem>
        <MenuItem>Community</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default WrappedMenu;
