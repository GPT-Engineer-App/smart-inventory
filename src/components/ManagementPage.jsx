import React, { useState } from "react";
import { Box, Button, Heading, Input, List, ListItem, IconButton, Stack, Text, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";

const ManagementPage = ({ title }) => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const toast = useToast();

  const handleAddEntry = () => {};

  const handleUpdateEntry = (index) => {};

  const handleDeleteEntry = (index) => {};

  const handlePrintData = () => {};

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>{title}</Heading>
      </VStack>
    </Box>
  );
};

export default ManagementPage;
