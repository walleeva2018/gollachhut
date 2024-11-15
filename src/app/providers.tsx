'use client';

import { ChakraProvider } from '@chakra-ui/react';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    
      <ChakraProvider>{children}</ChakraProvider>

  );
};

export default Providers;
