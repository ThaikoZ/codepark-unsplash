import user from "../../assets/user.avif";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  MenuDivider,
} from "@chakra-ui/react";

const CollapsedUser = () => {
  return (
    <>
      <Menu>
        <MenuButton
          aria-label="Options"
          _hover={{ bg: "white" }}
          _active={{ bg: "white" }}
          width="32px"
        >
          <Image src={user} borderRadius="full" border="1px solid #eee" />
        </MenuButton>
        {/* TODO: Menu of items */}
        <MenuList>
          <MenuItem>View profile</MenuItem>
          <MenuItem>Stats</MenuItem>
          <MenuItem>Account settings</MenuItem>
          <MenuDivider />
          <MenuItem>Log in</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default CollapsedUser;
