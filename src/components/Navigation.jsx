import React from "react";
import { Link, Box, Flex } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Flex justifyContent="space-around">
        <Link to="/">Home</Link>
        <Link to="/orders">Order Management</Link>
        <Link to="/stock">Stock Management</Link>
        <Link to="/production">Production Management</Link>
        <Link to="/dispatch">Dispatch Management</Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
