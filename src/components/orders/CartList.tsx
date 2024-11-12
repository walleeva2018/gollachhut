'use client'

import React, { useState } from 'react';

import { 
  Box, 
  Button, 
  Text, 
  VStack, 
  Grid, 
  Heading, 
  Divider,
  useColorModeValue,
  Icon,
  HStack,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { FiShoppingBag, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { Product } from '@/types/productTypes';
import { Layout } from '@/components/layouts';
import Link from 'next/link';

interface OrderProps {
  products: Product[];
  totalPrice: number;
}

export default function CartList({ products, totalPrice }: OrderProps) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const shadowColor = useColorModeValue('sm', 'dark-lg');

  // State to manage product quantities and total price
  const [cartProducts, setCartProducts] = useState(
    products.map((product) => ({ ...product, quantity: 1 }))
  );

  const calculateTotalPrice = () => {
    return cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  const handleIncrease = (productId: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleDecrease = (productId: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleDelete = (productId: number) => {
    setCartProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  return (
    <Layout>
      <Box>
        <Box
          bg={bgColor}
          p={6}
          borderRadius="xl"
          boxShadow={shadowColor}
          border="1px"
          borderColor={borderColor}
        >
          <HStack spacing={2} mb={6}>
            <Icon as={FiShoppingBag} w={6} h={6} color="#6B46C1" />
            <Heading size="lg">Order Summary</Heading>
          </HStack>
          <Divider mb={6} />

          <VStack align="stretch" spacing={4} mb={8}>
            {cartProducts.map((product) => (
              <Box
                key={product.id}
                p={4}
                borderWidth={1}
                borderRadius="lg"
                borderColor={borderColor}
                _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <Grid
                  templateColumns={{ base: '1fr', md: '2fr 1fr' }}
                  gap={4}
                  alignItems="center"
                >
                  <Box>
                    <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
                    <Text color="gray.500" fontSize="sm" mt={1}>Color: {product.color}</Text>
                    <HStack spacing={2} mt={2}>
                      {product.tags.map((tag, index) => (
                        <Badge key={index} backgroundColor={'#6B46C1'} textColor={'white'} variant="subtle">
                          {tag}
                        </Badge>
                      ))}
                    </HStack>
                    <HStack spacing={2} mt={4}>
                      <Button
                        size="sm"
                        onClick={() => handleDecrease(product.id)}
                        leftIcon={<Icon as={FiMinus} />}
                        isDisabled={product.quantity === 1}
                      >
                        Decrease
                      </Button>
                      <Text fontWeight="bold" fontSize="lg">{product.quantity}</Text>
                      <Button
                        size="sm"
                        onClick={() => handleIncrease(product.id)}
                        leftIcon={<Icon as={FiPlus} />}
                      >
                        Increase
                      </Button>
                    </HStack>
                  </Box>
                  <Flex direction="column" align={{ base: 'start', md: 'end' }} mt={{ base: 4, md: 0 }}>
                    <Text fontWeight="bold" fontSize="lg" color="#6B46C1">
                      ${(product.price * product.quantity).toFixed(2)}
                    </Text>
                    <Button
                      variant="ghost"
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                      leftIcon={<Icon as={FiTrash2} />}
                      mt={2}
                    >
                      Remove
                    </Button>
                  </Flex>
                </Grid>
              </Box>
            ))}
          </VStack>

          <Box borderTopWidth={1} pt={4}>
            <Grid templateColumns="1fr auto" gap={4}>
              <Text fontSize="lg" fontWeight="semibold">Total Amount:</Text>
              <Text fontSize="xl" fontWeight="bold" color="#6B46C1">
                ${calculateTotalPrice().toFixed(2)}
               
              </Text>
              
            </Grid>
            <Link
                href={'/order'}
            >
                <Button
                    backgroundColor={'#6B46C1'}
                    textColor={'white'}
                >
                         Confirm Order
                </Button>
                       
            </Link>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
