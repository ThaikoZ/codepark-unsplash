import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";
import { FaQrcode } from "react-icons/fa";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    console.log("Searcing " + query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        outline="4px solid rgba(0, 0, 0, 0.0)"
        outlineOffset="0"
        borderRadius="0.5rem"
        overflow="hidden"
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
          height="40px"
          outline="4px solid rgba(0, 0, 0, 0.0)"
          color="#111"
          fontSize="14px"
          borderRadius="60px"
          bg="#eee"
          _hover={{
            bg: "#eee",
            border: "1px solid #d1d1d1",
          }} // Remove any transform on hover }}
          _focus={{ border: "1px solid #d1d1d1", bg: "#fff" }}
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
    </form>
    // <Input
    //   ref={ref}
    //   placeholder="Search high-resolution images"
    //   fontSize="14px"
    //   color="#111"
    //   variant="filled"
    //   borderRadius="60px"
    //   bg="#eee"
    //   _hover={{ bg: "#eee", border: "1px solid #d1d1d1" }}
    //   _focus={{ border: "1px solid #d1d1d1", bg: "#fff" }}
    //   _placeholder={{ color: "#767676" }}
    // /> */}
  );
};

export default SearchInput;
