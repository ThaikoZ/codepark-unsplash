import { FaBell } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
  Tabs,
  Tab,
  TabPanel,
  TabList,
  TabPanels,
} from "@chakra-ui/react";
const CollapsedNotifications = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          width="32px"
          variant="ghost"
          color="#767676"
          _hover={{ bg: "white", color: "#111" }}
          _active={{ bg: "white", color: "#111" }}
          fontSize="xl"
          icon={<FaBell />}
        ></MenuButton>
        {/* TODO: Menu of items */}
        <MenuList aria-orientation="horizontal">
          <MenuItem>Activity</MenuItem>

          <MenuDivider />
        </MenuList>
      </Menu>
    </>
  );
};

export default CollapsedNotifications;
