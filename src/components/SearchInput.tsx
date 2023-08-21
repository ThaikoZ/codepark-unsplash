import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  PopoverTrigger,
  Popover,
  PopoverBody,
  ListItem,
  UnorderedList,
  PopoverContent,
  useBoolean,
  HStack,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsX, BsQrCodeScan } from "react-icons/bs";
import useSearches from "../hooks/useSearches";

interface Props {
  barWidth: string;
  bgInActive?: string;
  borderRadius?: string;
}

// TODO: React query for fetching the data
// TODO: Second search input in a navbar

const SearchInput = ({ barWidth }: Props) => {
  const [query, setQuery] = useState("");
  const [isPopover, setPopover] = useBoolean(false);
  const { tags } = useSearches(query);

  const handleSubmit = (word?: string) => {
    console.log("Sent to the server: " + (word || query || "Empty"));
  };

  const handleQrCode = () => {
    console.log("scanning document");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Popover
        isOpen={query.length > 2 && isPopover}
        autoFocus={false}
        flip={false}
      >
        <PopoverTrigger>
          <InputGroup
            overflow="hidden"
            borderRadius={5}
            outline="5px solid rgba(0, 0, 0, 0)"
            transition="outline-color 0.2s ease-in"
            _hover={{
              outlineColor: "rgba(0, 0, 0, 0.1)",
            }}
            _focusWithin={{
              outlineColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            <InputLeftElement
              height="100%"
              cursor="pointer"
              onClick={() => handleSubmit()}
              paddingLeft={2}
              fontSize="md"
              color="#767676"
              _hover={{ color: "#111" }}
              _active={{ color: "#111" }}
              children={<FaSearch />}
            />
            <Input
              onFocus={setPopover.toggle}
              onBlur={setPopover.toggle}
              onChange={(event) => setQuery(event.target.value)}
              display={{ base: "none", md: "block" }}
              maxLength={40}
              value={query}
              required
              placeholder="Search high-resolution images"
              height="54px"
              borderRadius="5"
              paddingLeft={12}
              variant="filled"
              fontSize="15px"
              fontWeight="450"
              color="#111"
              bg="#eee"
              border="0px"
              outline="4px solid rgba(0, 0, 0, 0)"
              _hover={{ bg: "#eee" }}
              _focus={{
                bg: "#fff",
              }}
              _placeholder={{ color: "#767676" }}
            />
            <HStack bg="red">
              <InputRightElement
                display={query ? "flex" : "none"}
                height="100%"
                title="Search Unsplash"
                width={14}
                cursor="pointer"
                marginRight="54px"
                fontSize="xl"
                onClick={() => setQuery("")}
                color="#767676"
                _hover={{ color: "#111" }}
                _active={{ color: "#111" }}
                children={<BsX />}
              />

              <Box
                display={query ? "flex" : "none"}
                className="search__vl"
                borderLeft="1px solid #c2c2c2"
                height="15px"
                position="absolute"
                right="56px"
              ></Box>
              <InputRightElement
                height="100%"
                title="Visual search"
                cursor="pointer"
                fontSize="lg"
                width="56px"
                onClick={handleQrCode}
                color="#767676"
                _hover={{ color: "#111" }}
                children={<BsQrCodeScan />}
              />
            </HStack>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent
          width={barWidth}
          marginTop="-4px"
          border="1px solid #d1d1d1"
        >
          <PopoverBody paddingX={0}>
            <UnorderedList listStyleType="none" padding="0px" margin="0px">
              {tags.map((tag) => (
                <ListItem
                  key={tag}
                  paddingY="9px"
                  paddingX={4}
                  cursor="pointer"
                  _hover={{ bg: "#eee" }}
                  onClick={() => handleSubmit(tag)}
                  color="#111"
                  fontWeight="450"
                >
                  {tag}
                </ListItem>
              ))}
            </UnorderedList>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </form>
  );
};

export default SearchInput;
