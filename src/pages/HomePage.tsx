import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Topics from "../components/Topics";
import HeroBanner from "../components/HeroBanner";
import PhotosGrid from "../components/PhotosGrid";
import Footer from "../components/Footer";

function App() {
  return (
    <Grid
      templateAreas={`"navbar"
              "main"
              "photos"
              "footer"`}
      gridTemplateRows={{
        base: "118px 368px 1fr 250px",
        md: "118px 593px 1fr 250px",
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
        <Topics />
      </GridItem>

      <GridItem width="100%" area={"main"} objectPosition="bottom">
        <HeroBanner />
      </GridItem>
      <GridItem area={"photos"}>
        <PhotosGrid />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
