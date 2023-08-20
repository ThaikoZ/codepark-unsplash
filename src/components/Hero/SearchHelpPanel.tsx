import { Flex, Link, UnorderedList } from "@chakra-ui/react";
import useSearches from "../../hooks/useSearches";

interface Props {
  barWidth: string;
  searchQuery: string;
  onItemClick: (name: string) => void;
}

const SearchHelpPanel = ({ barWidth, searchQuery, onItemClick }: Props) => {
  const { tags, error, isLoading } = useSearches(searchQuery);

  if (isLoading) return;

  return (
    <Flex
      position="absolute"
      borderRadius="0.3rem"
      bg="#fff"
      width="50vw"
      maxWidth={barWidth}
      marginTop="4px"
      overflow="hidden"
    >
      <UnorderedList
        listStyleType="none"
        width="100%"
        marginX="0"
        marginY="8px"
        paddingBottom="0px"
        color="#111"
        fontSize="14px"
        lineHeight="1.7rem"
      >
        {tags.map((item) => (
          <Link
            key={item}
            width="100%"
            href="dwa"
            display="block"
            paddingLeft="16px"
            paddingY="5px"
            _hover={{
              textDecoration: "none",
              bg: "#f5f5f5",
              transition: "background-color 0s",
            }}
            onClick={(event) => {
              onItemClick(item);
              event.preventDefault();
            }}
          >
            {item}
          </Link>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default SearchHelpPanel;
