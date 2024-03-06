import React, { useState } from "react";
import { Box, Button, Heading, Input, List, ListItem, IconButton, Stack, Text, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const toast = useToast();

  const handleAddItem = () => {
    if (newItem.trim() === "") {
      toast({
        title: "Error",
        description: "Item name can't be empty",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setItems([...items, newItem]);
    setNewItem("");
    toast({
      title: "Success",
      description: "Item added to inventory",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, itemIndex) => itemIndex !== index);
    setItems(updatedItems);
    toast({
      title: "Item Removed",
      description: "Item has been removed from inventory",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>Inventory Management App</Heading>
        <HStack>
          <Input placeholder="Enter item name" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddItem}>
            Add Item
          </Button>
        </HStack>
        <Box>
          <Text fontSize="xl" mb={2}>
            Inventory List
          </Text>
          <List spacing={3}>
            {items.map((item, index) => (
              <ListItem key={index} p={2} borderWidth="1px" borderRadius="lg">
                <Stack direction="row" justify="space-between" align="center">
                  <Text>{item}</Text>
                  <IconButton aria-label="Delete item" icon={<FaTrash />} onClick={() => handleDeleteItem(index)} />
                </Stack>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
