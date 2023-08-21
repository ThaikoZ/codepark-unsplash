import { Image } from "@chakra-ui/react";

interface Props {
  urlPath: string;
}

const ImageTitle = ({ urlPath }: Props) => {
  return <Image marginBottom="24px" src={urlPath} />;
};

export default ImageTitle;
