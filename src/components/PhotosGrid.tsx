import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ImageTile from "./ImageTile";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import usePhotos, { Photo } from "../hooks/usePhotos";
import CustomSpinner from "./CustomSpinner";

// interface Columns {
//   column1: Photo[];
//   column2: Photo[];
//   column3: Photo[];
//   pagesUsed: number[];
// }

interface Columns {
  content: Photo[];
}

// TODO: Custom photo grid layout
// TODO: Responsive layout for photos

const PhotosGrid = () => {
  const pageSize = 12;
  const { data, error, isLoading, fetchNextPage, hasNextPage } = usePhotos({
    pageSize,
  });
  const [columns, setColumns] = useState<Columns[]>([
    { content: [] },
    { content: [] },
    { content: [] },
  ]);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (error) return <p>{error.message}</p>;

  const fetchedPhotosCount =
    data?.pages.reduce((total, page) => total + page.length, 0) || 0;

  //
  const splitColumns = () => {
    // Algorytm sprawdza która strona została dodana do Pages a następnie dodaje jej zawartość funkcją setColumns()

    const subColumns: Columns[] = [];

    let photography = {};
    // const pageIds = [0];
    // const columnIds = [0, 1, 2];

    // data.pages[0].map((photo, index) => {
    //   if (index > 7) columnContent.push(photo);
    // });

    // console.log(columnContent);

    const pageIds = [0];
    // const columnIds = [0, 1, 2];

    // console.log(data.pages[2][2]);

    [0, 1, 2].map((columnId) => {
      pageIds.map((pageId) => {
        const columnContent: Photo[] = [];
        for (let i = columnId * 4; i < columnId * 4 + 4; i++) {
          // columnContent.push(data.pages[pageId][i]);
          columnContent.push({ ...data.pages[pageId][i] });
        }
      });
    });

    setColumns(columns);
    console.log(columns);
  };
  useEffect(() => {
    splitColumns();
  }, [data]);

  return (
    // TODO: Dodać infinite scroll
    // <InfiniteScroll
    //   dataLength={fetchedPhotosCount}
    //   hasMore={!!hasNextPage}
    //   next={() => fetchNextPage()}
    //   loader={<CustomSpinner />}
    // >
    <Center marginTop="48px">
      <Flex
        justifyContent="center"
        bg="red"
        marginX="24px"
        height="100%"
        maxWidth="1280px"
      >
        <SimpleGrid columns={3}>
          {data.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.map((photo) => (
                <ImageTile key={photo.id} src={photo} />
              ))}
            </React.Fragment>
          ))}
          <Button onClick={() => fetchNextPage()}>Load More</Button>
        </SimpleGrid>
      </Flex>
    </Center>

    // </InfiniteScroll>
  );
};

export default PhotosGrid;
