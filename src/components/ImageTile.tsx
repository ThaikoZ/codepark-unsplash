import {
  Center,
  Box,
  Image,
  Button,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Photo } from "../hooks/usePhotos";

interface Props {
  src: Photo;
}

const ImageTile = ({ src }: Props) => {
  const [isHoverd, setHoverd] = useState(false);

  // TODO: An ImageTile. We need a whole interface for a img tile.
  return (
    <Box
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
    >
      {/* <Flex zIndex="10" position="absolute">
        <Button top="100px" />
      </Flex> */}

      <Image
        src={src.url}
        transition="filter 0.1s ease-out"
        filter={isHoverd ? "brightness(80%);" : "none"}
        marginTop="24px"
        cursor="zoom-in"
      />
    </Box>
  );
};

export default ImageTile;
