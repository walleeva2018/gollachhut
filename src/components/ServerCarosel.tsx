import Image from 'next/image';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

// Dummy data for the carousel
const carouselItems = [
  { id: 1, name: 'Fun Toy 1', price: 19.99, image: '/images/heli.jpeg' },
  { id: 2, name: 'Cool Gadget 2', price: 29.99, image: '/images/cley.jpg' },
  { id: 3, name: 'Exciting Game 3', price: 39.99, image: '/images/card.jpeg' },
  { id: 4, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
  { id: 5, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
  { id: 6, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
  { id: 7, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
  { id: 8, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
  { id: 9, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
  { id: 10, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
  { id: 11, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
  { id: 12, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
  { id: 13, name: 'Amazing Toy 4', price: 24.99, image: '/images/car.jpg' },
];

export const ServerSideCarousel = ()=> {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading as="h2" size="xl">
          Featured Products
        </Heading>
        <Box position="relative" width="100%" height="400px">
          {carouselItems.map((item, index) => (
            <Box
              key={item.id}
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              opacity={index === 0 ? 1 : 0}
              transition="opacity 0.5s"
            >
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="rgba(0,0,0,0.7)"
                color="white"
                p={4}
              >
                <Heading size="md">{item.name}</Heading>
                <Text>${item.price.toFixed(2)}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
}