import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Topics from "./components/Topics";
import HeroBanner from "./components/HeroBanner";
import PhotosGrid from "./components/PhotosGrid";

function App() {
  return (
    <Grid
      templateAreas={`"navbar"
                  "main"
                  "photos"`}
      gridTemplateRows={{ base: "118px 368px 1fr", md: "118px 593px 1fr" }}
      gridTemplateColumns={"100vw"}
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
        boxShadow="0 2px 4px 0 rgba(0,0,0,.2);
        "
      >
        <Navbar />
        <Topics />
      </GridItem>

      <GridItem
        width="100%"
        height="100%"
        area={"main"}
        objectPosition="bottom"
      >
        <HeroBanner />
      </GridItem>
      <GridItem area={"photos"}>
        <PhotosGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
