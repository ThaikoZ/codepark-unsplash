import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";

const WrappedNotifications = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        variant="ghost"
        color="#767676"
        fontSize="xl"
        bg="none"
        _hover={{ color: "#111" }}
        _active={{ color: "#111" }}
        icon={<FaBell />}
      ></MenuButton>
      <MenuList>
        <MenuItem>Activity</MenuItem>
        <MenuDivider />
        <MenuItem>Highlights</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default WrappedNotifications;
