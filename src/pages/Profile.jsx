import { Box, Image, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Profile = () => {
  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setUserPhotos(storedPhotos);
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>My Profile</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {userPhotos.map(photo => (
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

export default Profile;