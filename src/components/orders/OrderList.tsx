import React from 'react'
`use client`
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Stack, 
  Text, 
  VStack, 
  Grid, 
  Heading, 
  Divider,
  useColorModeValue,
  Icon,
  HStack,
  Badge
} from '@chakra-ui/react';
import { FiShoppingBag, FiUser, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { Product } from '@/types/productTypes';

interface OrderProps {
   products: Product[];
   totalPrice: number;
  }

export default function OrderList({ products, totalPrice }: OrderProps) {

    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const shadowColor = useColorModeValue('sm', 'dark-lg');
    
  return (
   <>
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
                {products.map((product) => (
                  <Box
                    key={product.id}
                    p={4}
                    borderWidth={1}
                    borderRadius="lg"
                    borderColor={borderColor}
                    _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    <Grid templateColumns="1fr auto" gap={4}>
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
                      </Box>
                      <Text fontWeight="bold" fontSize="lg" color="#6B46C1">
                        ${product.price.toFixed(2)}
                      </Text>
                    </Grid>
                  </Box>
                ))}
              </VStack>

              <Box borderTopWidth={1} pt={4}>
                <Grid templateColumns="1fr auto" gap={4}>
                  <Text fontSize="lg" fontWeight="semibold">Total Amount:</Text>
                  <Text fontSize="xl" fontWeight="bold" color="#6B46C1">
                    ${totalPrice.toFixed(2)}
                  </Text>
                </Grid>
              </Box>
            </Box>
          </Box>
   </>
  )
}
