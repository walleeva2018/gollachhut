'use client';

import React, { useState } from 'react';
import {
  VStack,
  Text,
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Select,
  FormControl,
  FormLabel,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

interface FilterSectionProps {
  onPriceChange: (min: number, max: number) => void;
  onTagChange: (tag: string) => void;
  onColorChange: (color: string) => void;
}

export const FilterSection = ({
  onPriceChange,
  onTagChange,
  onColorChange,
}: FilterSectionProps) => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handlePriceChange = (val: number[]) => {
    setPriceRange(val);
    onPriceChange(val[0], val[1]);
  };

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const shadowColor = useColorModeValue('sm', 'dark-lg');

  return (
    <Box
      p={6}
      borderRadius="lg"
      bg={bgColor}
      boxShadow={shadowColor}
      border="1px"
      borderColor={borderColor}
    >
      <VStack align="stretch" spacing={6}>
        <Heading size="md" color="purple.500">Refine Your Search</Heading>

        <FormControl>
          <FormLabel>Price Range</FormLabel>
          <Box>
            <Text fontSize="sm" color="gray.500" mb={1}>
              ${priceRange[0]} - ${priceRange[1]}
            </Text>
            <RangeSlider
              defaultValue={[0, 100]}
              min={0}
              max={100}
              step={5}
              onChange={(val) => handlePriceChange(val)}
            >
              <RangeSliderTrack bg="purple.100">
                <RangeSliderFilledTrack bg="purple.500" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </Box>
        </FormControl>

        <FormControl>
          <FormLabel>Toy Type</FormLabel>
          <Select placeholder="Select toy type" onChange={(e) => onTagChange(e.target.value)}>
            <option value="educational">Educational</option>
            <option value="electronic">Electronic</option>
            {/* Add more options */}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Color</FormLabel>
          <Select placeholder="Select color" onChange={(e) => onColorChange(e.target.value)}>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            {/* Add more options */}
          </Select>
        </FormControl>
      </VStack>
    </Box>
  );
};