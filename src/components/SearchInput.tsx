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
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [isPopover, setPopover] = useBoolean(false);
  const items = ["dwarf", "hanobi", "welcome", "missisipi", "dwarw"];

  const handleSubmit = () => {
    console.log("Sent to the server: " + ref.current?.value);
  };

  const handleChange = () => {
    console.log(ref.current?.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Popover isOpen={isPopover} autoFocus={false} flip={false}>
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
              onClick={handleSubmit}
              paddingLeft={2}
              color="#767676"
              _hover={{ color: "#111" }}
              _active={{ color: "#111" }}
            >
              <FaSearch color="#767676" />
            </InputLeftElement>
            <Input
              onChange={handleChange}
              display={{ base: "none", md: "block" }}
              ref={ref}
              maxLength={40}
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
              onFocus={setPopover.toggle}
              onBlur={setPopover.toggle}
            />
            <InputRightElement
              height="100%"
              width={14}
              bg="red"
              cursor="pointer"
              onClick={handleSubmit}
              color="#767676"
              _hover={{ color: "#111" }}
              _active={{ color: "#111" }}
            >
              <FaSearch color="#767676" />
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent
          width="65vw"
          marginTop="-4px"
          border="1px solid #d1d1d1"
        >
          <PopoverBody paddingX={0}>
            <UnorderedList listStyleType="none" padding="0px" margin="0px">
              {items.map((item) => (
                <ListItem
                  paddingY="9px"
                  paddingX={4}
                  cursor="pointer"
                  _hover={{ bg: "#eee" }}
                  onClick={() => console.log(item)}
                  color="#111"
                  fontWeight="450"
                >
                  {/* TODO: Load items dynamiclly from hook */}
                  {item}
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
