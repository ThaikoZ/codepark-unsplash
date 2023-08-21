import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import usePhotos, { Photo } from "../hooks/usePhotos";
import { useEffect, useState } from "react";
import ImageTile from "./ImageTile";

interface Columns {
  column1: Photo[];
  column2: Photo[];
  column3: Photo[];
}

const PhotosGrid = () => {
  const { data, error, isLoading } = usePhotos();
  const [columns, setColums] = useState<Columns>();

  const splitToColumns = () => {
    const photos = data.map((item) => ({
      id: item.id,
      url: item.urls.regular,
      first_name: item.user.first_name,
      last_name: item.user.last_name,
      profile_image: item.user.profile_image.small,
    }));

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
    splitToColumns();
  }, [data]);

  // TODO: Photos should load infinite while scrolling with React Query.
  // TODO: Photo grid on base width is not showing properly. To big gap beetwen columns
  return (
    <Flex justifyContent="center" marginTop="24px" marginX="24px" height="100%">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
        }}
        templateRows={"1fr"}
        maxWidth="1280px"
        gap="24px"
      >
        <Box>
          {columns?.column1.map((link) => (
            <ImageTile key={link.id} src={link} />
          ))}
        </Box>
        <Box>
          {columns?.column2.map((link) => (
            <ImageTile key={link.id} src={link} />
          ))}
        </Box>
        <Box>
          {columns?.column3.map((link) => (
            <ImageTile key={link.id} src={link} />
          ))}
        </Box>
      </Grid>
    </Flex>
  );
};

export default PhotosGrid;
