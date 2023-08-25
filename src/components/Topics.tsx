import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";
import useTopics from "../hooks/useTopics";

const Topics = () => {
  let { topics, error } = useTopics();

  if (error) return;

  return (
    <Flex gap={4} overflow="hidden" alignItems="center" paddingX={4}>
      <NavLink href="#">Editorial</NavLink>
      <NavLink href="#">Following</NavLink>
      <NavLink href="#">Unsplash+</NavLink>
      <div className="vl"></div>
      <div className="featured__text">Featured</div>
      {/* TODO: Scrollable horizontal list */}
      {topics.map((topic) => (
        <NavLink key={topic.id} href="#">
          {topic.title}
        </NavLink>
      ))}
    </Flex>
  );
};

export default Topics;
