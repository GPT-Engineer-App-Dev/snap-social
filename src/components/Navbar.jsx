import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex alignItems="center">
        <Heading size="md" color="white">PhotoShare</Heading>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} color="white" _hover={{ textDecoration: "none", color: "gray.300" }}>Home</Link>
          <Link as={NavLink} to="/profile" px={2} color="white" _hover={{ textDecoration: "none", color: "gray.300" }}>Profile</Link>
          <Link as={NavLink} to="/upload" px={2} color="white" _hover={{ textDecoration: "none", color: "gray.300" }}>Upload</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;