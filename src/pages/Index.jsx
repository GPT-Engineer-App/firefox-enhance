import { Box, Button, Text, VStack, Image } from "@chakra-ui/react";
import { FaFirefoxBrowser } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={4} p={5} align="center">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Image src="https://images.unsplash.com/photo-1657885428171-0e164036a1f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaXJlZm94JTIwbG9nb3xlbnwwfHx8fDE3MTQxMjc5OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Firefox Logo" boxSize="100px" />
        <Text mt={4} fontSize="xl" fontWeight="bold">
          Firefox Extension Interface
        </Text>
        <Text mt={2}>This is a simple UI component that could be part of a Firefox extension.</Text>
      </Box>
      <Button leftIcon={<FaFirefoxBrowser />} colorScheme="orange" variant="solid">
        Activate Feature
      </Button>
    </VStack>
  );
};

export default Index;
