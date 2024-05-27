import { Container, Text, VStack } from "@chakra-ui/react";
import Feed from "./Feed";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Welcome to PhotoShare</Text>
        <Feed />
      </VStack>
    </Container>
  );
};

export default Index;