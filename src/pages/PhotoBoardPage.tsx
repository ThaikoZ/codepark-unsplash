import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Center, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import PhotosGrid from "../components/PhotosGrid";
import Topics from "../components/Topics";

const PhotoBoardPage = () => {
  const params = useParams();
  return (
    <Grid
      templateAreas={`"navbar"
          "content"
          "footer"`}
      gridTemplateRows={{
        base: "118px 1fr 250px",
        md: "118px 1fr 250px",
      }}
      gridTemplateColumns={"100%"}
      color="#767676"
      fontWeight="bold"
    >
      <GridItem
        area={"navbar"}
        width="100%"
        height="118px"
        position="fixed"
        top="0"
        left="0"
        bg="#fff"
        boxShadow="0 2px 4px 0 rgba(0,0,0,.2);"
        zIndex="50"
      >
        <Navbar />
        {/* TODO: Collection Bar */}
      </GridItem>

      <GridItem area={"content"} width="100%">
        <Center flexDirection="column" width="100%">
          <Box maxWidth="1280px" paddingY="30px" width="100%">
            <Heading size="lg" color="#111">
              {params.query &&
                params.query?.charAt(0).toUpperCase() +
                  params.query?.substring(1, params.query.length)}
            </Heading>
            <Box paddingTop="15px">{/* TODO: Topics tiles */}</Box>
          </Box>
        </Center>
        <PhotosGrid query={params.query} />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default PhotoBoardPage;
