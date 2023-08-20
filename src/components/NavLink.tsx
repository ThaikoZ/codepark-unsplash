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
      whiteSpace="nowrap"
      marginTop="25px"
      height="60px"
    >
      {children}
      {false && <div className="underline--selected"></div>}
    </Link>
  );
};

export default NavLink;
