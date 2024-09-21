'use client';

import { useState } from 'react';
import {
  Container,
  VStack,
  Flex,
  Box,
  SimpleGrid,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { FaFilter } from 'react-icons/fa';
import { Layout } from '@/components/layouts';
import { SearchBar } from '../components/SearhBar';
import { FilterSection } from '../components/FilterComponent';
import { ProductCard } from './ProductCard';
import { Product } from '../types/productTypes';

interface ProductListClientProps {
  initialProducts: Product[];
}

export function ProductListClient({ initialProducts }: ProductListClientProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = (term: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handlePriceChange = (min: number, max: number) => {
    const filtered = products.filter((product) => product.price >= min && product.price <= max);
    setFilteredProducts(filtered);
  };

  const handleTagChange = (tag: string) => {
    if(tag==='')
    {
      setFilteredProducts(products)
      return 
    }
    const filtered = products.filter((product) => product.tags.includes(tag));
    setFilteredProducts(filtered);
  };

  const handleColorChange = (color: string) => {
    if(color==='')
    {
      setFilteredProducts(products)
      return
    }
    const filtered = products.filter((product) => product.color === color);
    setFilteredProducts(filtered);
  };

  return (
    <Layout>
         <SearchBar onSearch={handleSearch} />
         <Flex direction="column" alignItems="center" gap={4} marginTop={8}> 
            <Button leftIcon={<FaFilter />} colorScheme="purple" display={{ md: 'none' }}  onClick={onOpen}>
              Filters
            </Button>
            </Flex>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
            <Box display={{ base: 'none', md: 'block' }} w="250px">
              <FilterSection
                onPriceChange={handlePriceChange}
                onTagChange={handleTagChange}
                onColorChange={handleColorChange}
              />
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} flex={1}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </SimpleGrid>
          </Flex>
        </VStack>
      </Container>

      {/* Mobile Filter Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Fun Filters</DrawerHeader>
          <DrawerBody>
            <FilterSection
              onPriceChange={handlePriceChange}
              onTagChange={handleTagChange}
              onColorChange={handleColorChange}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Layout>
  );
}