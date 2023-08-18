import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={`"navbar"
                  "main"
                  "photos"`}
      gridTemplateRows={{ base: "112px 310px 1fr", md: "118px 593px 1fr" }}
      gridTemplateColumns={"1fr"}
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem px="2" area={"navbar"}>
        <Navbar />
      </GridItem>

      <GridItem px="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"photos"}>
        Photos
      </GridItem>
    </Grid>
  );
}

export default App;
