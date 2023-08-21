import user from "../assets/user.avif";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  MenuDivider,
} from "@chakra-ui/react";

const WrappedUser = () => {
  return (
    <>
      <Menu>
        <MenuButton
          aria-label="Options"
          bg="none"
          fontSize="xl"
          title="User settings"
        >
          <Image src={user} borderRadius="full" border="1px solid #eee" />
        </MenuButton>
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

export default WrappedUser;
