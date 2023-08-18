import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const CollapsedMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaBars />}
        variant="ghost"
        color="#767676"
        _hover={{ bg: "white", color: "#111" }}
        _active={{ bg: "white", color: "#111" }}
      />
      {/* TODO: Menu of items */}
      <MenuList aria-orientation="horizontal">
        <MenuItem>Options</MenuItem>
        <MenuItem>Options2</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CollapsedMenu;
