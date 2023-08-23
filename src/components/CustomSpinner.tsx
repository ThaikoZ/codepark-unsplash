import { Center, Spinner } from "@chakra-ui/react";

const CustomSpinner = () => {
  return (
    <Center marginTop="3.5rem">
      <Spinner size="sm" speed="0.5s" color="blue.500" />
    </Center>
  );
};

export default CustomSpinner;
