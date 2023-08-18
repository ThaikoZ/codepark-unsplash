import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { FaQrcode } from "react-icons/fa";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      // TODO: Zmienić format z on Submit na on Change
      onSubmit={(event) => {
        event.preventDefault();
        console.log(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement
          cursor="pointer"
          fontSize="md"
          marginTop="5px"
          _hover={{ color: "#111" }}
          _active={{ color: "#111" }}
        >
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search high-resolution images"
          variant="filled"
          color="#111"
          bg="#f5f5f5"
          height="50px"
          _hover={{
            bg: "#f5f5f5",
            outline: "4px solid rgba(0, 0, 0, 0.02)",
          }}
          _focus={{
            outline: "3px solid rgba(0, 0, 0, 0.1)",
            bg: "#fff",
            border: "0",
            transform: "",
          }}
        />
        <InputRightElement
          cursor="pointer"
          fontSize="md"
          marginTop="5px"
          _hover={{ color: "#111" }}
          _active={{ color: "#111" }}
        >
          <FaQrcode />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
