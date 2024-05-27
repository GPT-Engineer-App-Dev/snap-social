import { Box, Button, Input, VStack, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle the upload logic here
    console.log("Uploading:", file, caption);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input type="file" onChange={handleFileChange} />
        <Textarea placeholder="Write a caption..." value={caption} onChange={(e) => setCaption(e.target.value)} />
        <Button colorScheme="blue" onClick={handleUpload}>Upload</Button>
      </VStack>
    </Box>
  );
};

export default Upload;