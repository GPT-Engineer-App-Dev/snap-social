import { Box, Image, SimpleGrid, Text, Heading } from "@chakra-ui/react";

const userPhotos = [
  { id: 1, src: "https://via.placeholder.com/300", caption: "My first photo" },
  { id: 2, src: "https://via.placeholder.com/300", caption: "Vacation time" },
];

const Profile = () => {
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