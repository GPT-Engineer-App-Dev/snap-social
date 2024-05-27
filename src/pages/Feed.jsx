import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";



const Feed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setPhotos(storedPhotos);
  }, []);

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