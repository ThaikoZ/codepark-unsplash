import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import usePhotos, { Photos } from "../hooks/usePhotos";
import { useEffect, useState } from "react";

interface Columns {
  column1: string[];
  column2: string[];
  column3: string[];
}

const PhotosGrid = () => {
  const { data, error, isLoading } = usePhotos();
  const [columns, setColums] = useState<Columns>();

  const splitToColumns = (data: Photos[]) => {
    const photos = [...data.map((img) => img.urls.regular)];

    const parts = parseInt((photos.length / 3).toFixed(0));

    const structure: Columns = {
      column1: [],
      column2: [],
      column3: [],
    };

    for (let i = 0, j = 0; i < parts * 3; i++, j++) {
      if (j === parts) j = 0;
      switch (j) {
        case 0:
          structure.column1.push(photos[i]);
          break;
        case 1:
          structure.column2.push(photos[i]);
          break;
        case 2:
          structure.column3.push(photos[i]);
      }
    }

    setColums(structure);
  };

  useEffect(() => {
    splitToColumns(data);
  }, [data]);

  return (
    <Flex
      justifyContent="center"
      marginTop="48px"
      marginLeft="24px"
      marginRight="42px"
      height="100%"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        templateRows={"1fr"}
        maxWidth="1280px"
        gap="24px"
      >
        <Box>
          {/* TODO: Img */}
          {columns?.column1.map((link) => (
            <Image marginBottom="24px" src={link} />
          ))}
        </Box>
        <Box>
          {columns?.column2.map((link) => (
            <Image marginBottom="24px" src={link} />
          ))}
        </Box>
        <Box>
          {columns?.column3.map((link) => (
            <Image marginBottom="24px" src={link} />
          ))}
        </Box>
      </Grid>
    </Flex>
  );
};

export default PhotosGrid;
