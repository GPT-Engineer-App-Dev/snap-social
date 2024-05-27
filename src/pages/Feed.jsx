import { Box, Image, SimpleGrid, Text, IconButton, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

const Feed = () => {
  const [photos, setPhotos] = useState([]);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setPhotos(storedPhotos);

    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    setLikes(storedLikes);
  }, []);

  const handleLike = (id) => {
    const newLikes = { ...likes, [id]: (likes[id] || 0) + 1 };
    setLikes(newLikes);
    localStorage.setItem("likes", JSON.stringify(newLikes));
  };

  return (
    <Box p={4}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {photos.map(photo => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={photo.src} alt={photo.caption} />
            <Box p={4}>
              <Text>{photo.caption}</Text>
              <Flex align="center" mt={2}>
                <IconButton
                  icon={<FaHeart />}
                  onClick={() => handleLike(photo.id)}
                  colorScheme="red"
                  variant="outline"
                  aria-label="Like"
                  mr={2}
                />
                <Text>{likes[photo.id] || 0} Likes</Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Feed;