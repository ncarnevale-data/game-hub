import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  let color: string;

  if (score > 75) {
    color = "green";
  } else if (score > 60) {
    color = "yellow";
  } else {
    color = "red";
  }

  return (
    <Badge colorScheme={color} fontSize="14px" px={2} borderRadius="4px">
      {score}
    </Badge>
  );
};
