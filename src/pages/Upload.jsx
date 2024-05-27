import { Box, Button, Input, VStack, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected.",
        description: "Please select a file to upload.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPhoto = {
        id: Date.now(),
        src: reader.result,
        caption: caption,
      };

      // Save the new photo to localStorage
      const existingPhotos = JSON.parse(localStorage.getItem("photos")) || [];
      existingPhotos.push(newPhoto);
      localStorage.setItem("photos", JSON.stringify(existingPhotos));

      toast({
        title: "Upload successful.",
        description: "Your photo has been uploaded.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Clear the input fields
      setCaption("");
      setFile(null);
    };

    reader.readAsDataURL(file);
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