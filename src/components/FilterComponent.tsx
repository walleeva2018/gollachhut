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
  Select
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
    setPriceRange(val); // Update the price range state
    onPriceChange(val[0], val[1]); // Call the prop function to handle the price change
  };

  return (
    <VStack align="stretch" spacing={4} m={4}>
      <Text fontWeight="bold" fontSize="xl" color="purple.500">Fun Filters</Text>

      <Box>
        <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text> {/* Display the price range */}
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

      <Select placeholder="Select toy type" onChange={(e) => onTagChange(e.target.value)}>
        <option value="educational">Educational</option>
        <option value="electronic">Electronic</option>
        {/* Add more options */}
      </Select>

      <Select placeholder="Select color" onChange={(e) => onColorChange(e.target.value)}>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        {/* Add more options */}
      </Select>
    </VStack>
  );
};
