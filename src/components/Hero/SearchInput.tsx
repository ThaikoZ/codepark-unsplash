import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useBoolean } from "@chakra-ui/react";
import { BsSearch, BsX } from "react-icons/bs";
import { FaQrcode } from "react-icons/fa";
import SearchHelpPanel from "../SearchHelpPanel";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [isFocuesd, setFocues] = useBoolean(false);
  // const { onOpen, onClose } = useDisclosure();
  const handleSubmit = () => {
    console.log("Searcing " + query);
  };
  return (
    <form
      // TODO: Zmienić format z on Submit na on Change
      onSubmit={handleSubmit}
    >
      <InputGroup
        outline="4px solid rgba(0, 0, 0, 0.0)"
        bg="#f5f5f5"
        outlineOffset="0"
        borderRadius="0.5rem"
        overflow="hidden"
        _hover={{
          bg: "#f5f5f5",
          outlineColor: "rgba(0, 0, 0, 0.1)",
          transition: "outline-color 0.3s",
        }}
      >
        <InputLeftElement
          cursor="pointer"
          height="100%"
          paddingStart="0.75rem"
          width="2.25rem"
          transition="color 0.3s"
          _hover={{ color: "#111" }}
          _active={{ color: "#111" }}
          onClick={handleSubmit}
        >
          <BsSearch />
        </InputLeftElement>
        <Input
          onChange={(event) => {
            setQuery(event.target.value);
            console.log(query);
          }}
          value={query}
          required
          placeholder="Search high-resolution images"
          variant="filled"
          height="50px"
          outline="4px solid rgba(0, 0, 0, 0.0)"
          color="#111"
          fontSize="14px"
          bg="#f5f5f5"
          outlineOffset="0"
          borderRadius="0.5rem"
          _hover={{
            bg: "#f5f5f5",
          }}
          _focus={{
            outlineColor: "rgba(0, 0, 0, 0.2)",
            bg: "#fff",
            border: "0",
            transition: "outline-color 0.3s",
          }}
          _placeholder={{ color: "#767676" }}
        />
        {query && (
          <>
            <InputRightElement
              height="100%"
              width="3rem"
              transition="color 0.3s"
              children={
                <>
                  <BsX />
                  <div className="input__vl"></div>
                </>
              }
              fontSize="2xl"
              cursor="pointer"
              marginEnd="3rem"
              _hover={{ color: "#111" }}
              _active={{ color: "#111" }}
              onClick={() => setQuery("")}
            />
          </>
        )}
        <InputRightElement
          height="100%"
          width="3rem"
          cursor="pointer"
          fontSize="md"
          transition="color 0.3s"
          _hover={{ color: "#111" }}
          _active={{ color: "#111" }}
          children={<FaQrcode />}
        />
      </InputGroup>
      {isFocuesd && <SearchHelpPanel />}
    </form>
  );
};

export default SearchInput;
