import { Flex, Grid, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import ImageTile from "./ImageTile";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import usePhotos, { Photo } from "../hooks/usePhotos";

const PhotosGrid = () => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, hasNextPage } = usePhotos({
    pageSize,
  });
  const [columns, setColumns] = useState<Photo[]>([]);

  if (isLoading) return <Spinner />;

  if (error) return <p>{error.message}</p>;

  const fetchedPhotosCount =
    data?.pages.reduce((total, page) => total + page.length, 0) || 0;

  // TODO: Custom photo grid layout
  // TODO: Responsive layout for photos

  // const splitToColumns = () => {
  //   const photos = data.map((item) => ({
  //     id: item.id,
  //     url: item.urls.regular,
  //     first_name: item.user.first_name,
  //     last_name: item.user.last_name,
  //     profile_image: item.user.profile_image.small,
  //   }));

  //   const parts = parseInt((photos.length / 3).toFixed(0));

  //   const structure: Columns = {
  //     column1: [],
  //     column2: [],
  //     column3: [],
  //   };

  //   for (let i = 0, j = 0; i < parts * 3; i++, j++) {
  //     if (j === parts) j = 0;
  //     switch (j) {
  //       case 0:
  //         structure.column1.push(photos[i]);
  //         break;
  //       case 1:
  //         structure.column2.push(photos[i]);
  //         break;
  //       case 2:
  //         structure.column3.push(photos[i]);
  //     }
  //   }

  //   setColums(structure);
  // };

  // useEffect(() => {
  //   splitToColumns();
  // }, [data]);

  return (
    <InfiniteScroll
      dataLength={fetchedPhotosCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <Flex
        justifyContent="center"
        marginTop="24px"
        marginX="24px"
        height="100%"
      >
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(3, 1fr)",
          }}
          templateRows={"1fr"}
          maxWidth="1280px"
          gap="24px"
        >
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.map((photo) => (
                <ImageTile key={photo.id} src={photo} />
              ))}
            </React.Fragment>
          ))}
        </Grid>
      </Flex>
    </InfiniteScroll>
  );
};

export default PhotosGrid;
