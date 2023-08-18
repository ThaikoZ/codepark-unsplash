import { Flex, Link, MenuDivider } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Topics = () => {
  // TODO: Create Hook that Dynamically load data from server.
  const topicsList = [
    "One the lake",
    "Wallpapers",
    "3D Renders",
    "Nature",
    "Textures",
    "Patterns",
    "Film",
    "Animals",
    "Food",
  ];

  return (
    <Flex as="nav">
      <NavLink href="#">Editorial</NavLink>
      <NavLink href="#">Following</NavLink>
      <NavLink href="#">Unsplash+</NavLink>
      <div className="vl"></div>
      <div className="featured__text">Featured</div>
      {topicsList.map((topic) => (
        <NavLink href="#" key={topic}>
          {topic}
        </NavLink>
      ))}
    </Flex>
  );
};

export default Topics;
