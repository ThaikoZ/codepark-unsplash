import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";
import useTopics from "../../hooks/useTopics";

const Topics = () => {
  const { topics, error, isLoading } = useTopics();

  return (
    <Flex as="nav" gap="4px" overflow="hidden">
      <NavLink href="#">Editorial</NavLink>
      <NavLink href="#">Following</NavLink>
      <NavLink href="#">Unsplash+</NavLink>
      <div className="vl"></div>
      <div className="featured__text">Featured</div>
      {/* TODO: Add functionality on click */}
      {topics?.map((topic) => (
        <NavLink href="#" key={topic.id}>
          {topic.title}
        </NavLink>
      ))}

      {/*  */}
    </Flex>
  );
};

export default Topics;
