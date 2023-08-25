import { Center, Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ImageTile from "./ImageTile";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import usePhotos, { Photo } from "../hooks/usePhotos";
import CustomSpinner from "./CustomSpinner";
import useResize from "../hooks/useResize";

interface Column {
  content: Photo[];
}

interface Props {
  query?: string;
}

const PhotosGrid = ({ query }: Props) => {
  const pageSize = 12;
  const { data, error, isLoading, fetchNextPage, hasNextPage } = usePhotos({
    pageSize,
    query,
  });
  console.log(data);
  const [columns, setColumns] = useState<Column[]>([
    { content: [] },
    { content: [] },
    { content: [] },
  ]);

  const screenSize = useResize();

  useEffect(() => {
    splitColumns();
  }, [data]);

  const splitColumns = () => {
    const columns: Column[] = [
      { content: [] },
      { content: [] },
      { content: [] },
    ];

    if (query)
      columns.map((column, columnId) => {
        data?.pages.map((page, pageId) => {
          for (let i = columnId * 4; i < columnId * 4 + 4; i++) {
            column.content.push({ ...data.pages[pageId].results[i] });
          }
        });
      });
    else
      columns.map((column, columnId) => {
        data?.pages.map((page, pageId) => {
          for (let i = columnId * 4; i < columnId * 4 + 4; i++) {
            column.content.push({ ...data.pages[pageId][i] });
          }
        });
      });

    setColumns(columns);
  };

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (error) return <p>{error.message}</p>;

  const fetchedPhotosCount =
    data.pages.reduce((total, page) => total + page.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedPhotosCount / 3}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<CustomSpinner />}
      style={{ overflow: "hidden" }}
      // endMessage={<Footer />}
    >
      <Center height="100%" width="100%" marginTop="48px">
        <React.Fragment>
          <Flex
            justifyContent="center"
            marginX="24px"
            maxWidth="1280px"
            gap="24px"
            minHeight="100%"
          >
            {screenSize.width > 700 ? (
              columns.map((column, index) => (
                <SimpleGrid key={index} columns={1} gap="24px" height="100%">
                  {column.content.map((photo) => (
                    <ImageTile
                      key={photo.id + Math.floor(Math.random() * 10000)}
                      src={photo}
                    />
                  ))}
                </SimpleGrid>
              ))
            ) : (
              <SimpleGrid columns={1} gap="24px" height="100%">
                {columns.map((column, index) =>
                  column.content.map((photo) => (
                    // TODO: Render different component
                    <ImageTile
                      key={photo.id + Math.floor(Math.random() * 10000)}
                      src={photo}
                    />
                  ))
                )}
              </SimpleGrid>
            )}
          </Flex>
        </React.Fragment>
      </Center>
    </InfiniteScroll>
  );
};

export default PhotosGrid;
