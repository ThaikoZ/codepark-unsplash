import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";
import useTopics from "../hooks/useTopics";

interface Props {
  activeId: number;
}

const Topics = ({ activeId = 0 }: Props) => {
  const { topics, error, isLoading } = useTopics();

  return (
    <Flex gap="4px" overflow="hidden" alignItems="center" bg="red" height="50%">
      <NavLink href="#">Editorial</NavLink>
      <NavLink href="#">Following</NavLink>
      <NavLink href="#">Unsplash+</NavLink>
      <div className="vl"></div>
      <div className="featured__text">Featured</div>
      {/* TODO: Add functionality on click */}
      {topics?.map((topic) => (
        <NavLink
          href="#"
          key={topic.id}
          className={
            parseInt(topic.id) === activeId ? "underline--selected" : ""
          }
        >
          {topic.title}
        </NavLink>
      ))}

      {/*  */}
    </Flex>
  );
};

export default Topics;
