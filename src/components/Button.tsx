import { Button, ButtonGroup } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const LocalButton = ({ children, onClick }: Props) => {
  return (
    <Button colorScheme="blue" onClick={onClick}>
      {children}
    </Button>
  );
};

export default LocalButton;
