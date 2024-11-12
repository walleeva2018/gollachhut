import React from 'react';
import Image from 'next/image';
import ele from '../../../public/images/kids.png';
import { Heading, Text, VStack, Flex, Box } from '@chakra-ui/react';
import '../../styles/heroItem.css';

const HeroItem = () => {
  return (
    <Box className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg shadow-xl">
      <Flex direction={['column', 'row']} alignItems="center" justifyContent="space-between">
        <VStack align={['center', 'start']} spacing={4} flex={1}>
          {/* Heading with gradient text */}
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, white, pink.200, cyan.200, orange.200)"
            bgClip="text"
            textShadow="0 1px 2px rgba(0, 0, 0, 0.15)" // Optional: slight shadow for better readability
          >
            Welcome to GollaChhut
          </Heading>

          {/* Text with gradient effect */}
          <Text
            fontSize="s"
            fontWeight="medium"
            bgGradient="linear(to-r, white, teal.100, green.100)"
            bgClip="text"
            textShadow="0 1px 2px rgba(0, 0, 0, 0.1)" // Optional: shadow for contrast
          >
            Where childrens dreams come to dance
          </Text>
        </VStack>

        <Box className="relative w-30 h-40 flex-shrink-0 mt-6 lg:mt-0">
          <Image
            src={ele}
            alt="Gollachhut Elephant"
            className="animate-bounce-slow"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroItem;
