import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Image title="Unsplash Home" src={logo} boxSize="32px" cursor="pointer" />
  );
};

export default Logo;
