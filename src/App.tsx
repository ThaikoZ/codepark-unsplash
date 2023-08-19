import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Grid
      templateAreas={`"navbar"
                  "main"
                  "photos"`}
      gridTemplateRows={{ base: "112px 310px 1fr", md: "118px 593px 1fr" }}
      gridTemplateColumns={"1fr"}
      color="#767676"
      fontWeight="bold"
    >
      <GridItem px="2" area={"navbar"}>
        <Navbar />
      </GridItem>

      <GridItem area={"main"}>
        <Hero />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"photos"}>
        Photos
      </GridItem>
    </Grid>
  );
}

export default App;
