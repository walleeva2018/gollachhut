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
import { useState } from 'react';
import { Product } from '../../types/productTypes';
import { Layout } from '@/components/layouts';
import { FiShoppingBag, FiUser, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import OrderList from './OrderList';

interface OrderProps {
  initialProducts: Product[];
}

const Order = ({ initialProducts }: OrderProps) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    contactNumber: '',
    email: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const shadowColor = useColorModeValue('sm', 'dark-lg');

  // Calculate total price
  const totalPrice = initialProducts.reduce((sum, product) => sum + product.price, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.address && userInfo.contactNumber) {
      setFormSubmitted(true);
      alert('Proceeding to payment...');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Layout>
      <Box 
        maxWidth="1200px" 
        mx="auto" 
        p={{ base: 4, md: 8 }}
        minHeight="100vh"
        bg={useColorModeValue('gray.50', 'gray.900')}
      >
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={8}
        >
          {/* Left Column - Order Summary */}

          <OrderList products={initialProducts} totalPrice={totalPrice}/>
          {/* Right Column - User Information Form */}
          <Box>
            {!formSubmitted ? (
              <Box
                as="form"
                onSubmit={handleSubmit}
                bg={bgColor}
                borderRadius="xl"
                p={6}
                boxShadow={shadowColor}
                border="1px"
                borderColor={borderColor}
              >
                <HStack spacing={2} mb={6}>
                  <Icon as={FiUser} w={6} h={6} color="#6B46C1" />
                  <Heading size="lg">Your Information</Heading>
                </HStack>
                <Divider mb={6} />

                <Stack spacing={6}>
                  <FormControl id="name" isRequired>
                    <FormLabel>
                      <HStack spacing={2}>
                        <Icon as={FiUser} />
                        <Text>Full Name</Text>
                      </HStack>
                    </FormLabel>
                    <Input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={userInfo.name}
                      onChange={handleChange}
                      size="lg"
                      borderRadius="md"
                      _focus={{
                        borderColor: "#6B46C1",
                        boxShadow: "0 0 0 1px #6B46C1"
                      }}
                    />
                  </FormControl>

                  <FormControl id="address" isRequired>
                    <FormLabel>
                      <HStack spacing={2}>
                        <Icon as={FiMapPin} />
                        <Text>Delivery Address</Text>
                      </HStack>
                    </FormLabel>
                    <Input
                      type="text"
                      name="address"
                      placeholder="123 Main St, City, Country"
                      value={userInfo.address}
                      onChange={handleChange}
                      size="lg"
                      borderRadius="md"
                    />
                  </FormControl>

                  <FormControl id="contactNumber" isRequired>
                    <FormLabel>
                      <HStack spacing={2}>
                        <Icon as={FiPhone} />
                        <Text>Contact Number</Text>
                      </HStack>
                    </FormLabel>
                    <Input
                      type="tel"
                      name="contactNumber"
                      placeholder="+1 (234) 567-8900"
                      value={userInfo.contactNumber}
                      onChange={handleChange}
                      size="lg"
                      borderRadius="md"
                    />
                  </FormControl>

                  <FormControl id="email">
                    <FormLabel>
                      <HStack spacing={2}>
                        <Icon as={FiMail} />
                        <Text>Email (optional)</Text>
                      </HStack>
                    </FormLabel>
                    <Input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={userInfo.email}
                      onChange={handleChange}
                      size="lg"
                      borderRadius="md"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    background={'#6B46C1'}
                    textColor={'white'}
                    size="lg"
                    fontSize="md"
                    rightIcon={<Icon as={FiShoppingBag} />}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    transition="all 0.2s"
                  >
                    Proceed to Payment
                  </Button>
                </Stack>
              </Box>
            ) : (
              <Box
                p={8}
                bg={bgColor}
                borderRadius="xl"
                boxShadow={shadowColor}
                textAlign="center"
              >
                <Icon as={FiShoppingBag} w={12} h={12} color="green.500" mb={4} />
                <Heading size="lg" color="green.500" mb={4}>
                  Thank you for your order!
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Redirecting to payment...
                </Text>
              </Box>
            )}
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Order;