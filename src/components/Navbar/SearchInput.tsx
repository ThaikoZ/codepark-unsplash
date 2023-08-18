import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement fontSize="sm" children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search high-resolution images"
          fontSize="14px"
          color="#111"
          variant="filled"
          borderRadius="60px"
          bg="#eee"
          _hover={{ bg: "#eee", border: "1px solid #d1d1d1" }}
          _focus={{ border: "1px solid #d1d1d1", bg: "#fff" }}
          _placeholder={{ color: "#767676" }}
        />
      </InputGroup>
      {/* TODO: Panel with a search hints */}
      {/* TODO: Searchin query */}
    </form>
  );
};

export default SearchInput;
