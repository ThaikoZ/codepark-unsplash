import { Link } from "@chakra-ui/react";

interface Props {
  children: string;
  href: string;
}

const NavLink = ({ children, href }: Props) => {
  const active = false;
  return (
    <>
      <Link
        href={href}
        paddingY="2"
        margin={0}
        // bg="red"
        paddingTop="19px"
        fontWeight="500"
        _hover={{ textDecoration: "none", color: "#111" }}
        whiteSpace="nowrap"
        height="100%"
        borderColor="#111"
        borderStyle="solid"
        borderBottomWidth={active ? "2px" : "0px"}
        borderRadius="1px"
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
