import { Link } from "@chakra-ui/react";

interface Props {
  children: string;
  href: string;
}

const NavLink = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      p="2"
      fontWeight="500"
      _hover={{ textDecoration: "none", color: "#111" }}
      overflow="hidden"
      whiteSpace="nowrap"
    >
      {children}
    </Link>
  );
};

export default NavLink;
