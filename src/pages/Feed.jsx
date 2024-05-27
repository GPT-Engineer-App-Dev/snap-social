import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const photos = [
  { id: 1, src: "https://via.placeholder.com/300", caption: "Beautiful scenery" },
  { id: 2, src: "https://via.placeholder.com/300", caption: "City lights" },
  { id: 3, src: "https://via.placeholder.com/300", caption: "Mountain view" },
];

const Feed = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {photos.map(photo => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={photo.src} alt={photo.caption} />
            <Box p={4}>
              <Text>{photo.caption}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Feed;