'use client';

import { HStack, Input, Button } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => (
  <HStack>
    <Input placeholder="Search fun toys..." onChange={(e) => onSearch(e.target.value)} background='#91BECE'/>
   
  </HStack>
);