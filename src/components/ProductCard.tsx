'use client';

import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  HStack,
  Tag,
  Divider,
  ButtonGroup,
  Button
} from '@chakra-ui/react';
import { Product } from '../types/productTypes';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <Card 
    maxW="sm" 
    borderRadius="xl" 
    overflow="hidden" 
    boxShadow="xl"
    transition="all 0.3s"
    _hover={{
      transform: "scale(1.05)",
      boxShadow: "2xl",
    }}
  >
    <CardBody>
      <Image 
        src={product.image} 
        alt={product.name} 
        borderRadius="xl"
        objectFit="cover"
        height="150px"
        width="100%"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md" color="purple.600">{product.name}</Heading>
        <Text color="green.500" fontSize="2xl" fontWeight="bold">
          ${product.price}
        </Text>
        <HStack>
          {product.tags.map((tag) => (
            <Tag key={tag} colorScheme="purple" borderRadius="full">{tag}</Tag>
          ))}
        </HStack>
      </Stack>
    </CardBody>
    <Divider />
    <ButtonGroup spacing="2" p={4}>
      <Button variant="solid" colorScheme="purple">
        Buy Now
      </Button>
      <Button variant="outline" colorScheme="purple">
        Add to Cart
      </Button>
    </ButtonGroup>
  </Card>
);