'use client'
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Icon,
  Badge,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

import { Layout } from '@/components/layouts';

interface ProductCategory {
  name: string;
  colorScheme: string;
}

const productCategories: ProductCategory[] = [
  { name: 'Educational Toys', colorScheme: 'yellow' },
  { name: 'Brain Development', colorScheme: 'blue' },
  { name: 'English & Arbi Learning', colorScheme: 'green' },
  { name: 'Puzzles', colorScheme: 'teal' },
  { name: 'Action Figures', colorScheme: 'cyan' },
];

export default function About() {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const cardColor = useColorModeValue('white', 'gray.700');

  return (
    <Layout>
      <Container maxW="container.md" py={10}>
        <VStack spacing={6} align="center" textAlign="center">
          <Avatar size="2xl" name="Gollachhut" src="/images/gollachhut.png" />
          <Heading size="lg">Gollachhut</Heading>
          <Text color={'white'} fontSize="md" maxW="600px">
            Welcome to Gollachhut! We specialize in creating and curating a wide range of toys that bring joy, learning, and creativity to children of all ages. At Gollachhut, we believe in the power of play to spark imagination, foster learning, and make memories.
          </Text>
        </VStack>

        <Divider my={8} />

        <VStack spacing={4} align="flex-start">
          <Heading size="md">Our Services</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} w="full">
            {productCategories.map((category) => (
              <Badge
                key={category.name}
                colorScheme={category.colorScheme}
                fontSize="sm" 
                px={3}
                py={1}
                borderRadius="full"
                textAlign="center"
                // Removed unnecessary width and className props
              >
                {category.name}
              </Badge>
            ))}
          </SimpleGrid>
        </VStack>

        <Divider my={8} />

      </Container>
    </Layout>
  );
}