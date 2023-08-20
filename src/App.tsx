import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Searches } from "./hooks/useSearches";
import Topics from "./components/Topics";

function App() {
  interface Query {
    searchQuery: Searches;
    selectedTopic: string;
  }

  return (
    <Grid
      templateAreas={`"navbar"
                  "main"
                  "photos"`}
      gridTemplateRows={"118px 593px 1fr"}
      gridTemplateColumns={"100vw"}
      color="#767676"
      fontWeight="bold"
    >
      <GridItem area={"navbar"}>
        <Navbar />
        <Topics />
      </GridItem>

      <GridItem area={"main"}>Center</GridItem>
      <GridItem pl="2" bg="blue.300" area={"photos"}>
        Photos
      </GridItem>
    </Grid>
  );
}

export default App;
