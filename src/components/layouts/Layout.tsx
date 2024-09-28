'use client';

import { Box, Container, useColorMode } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import '@/styles/globals.css'

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box position="relative" minHeight="100vh" overflow="hidden">
      {/* Animated background */}
      <Box
        className="area"
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
      >
        <ul className="circles">
          {[...Array(10)].map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </Box>

      {/* Content area */}
      <Box
        position="relative"
        zIndex={1}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Container
          maxWidth="container.lg"
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding={4}
          borderRadius="md"
          marginY={32}
        >
          <Box as="main" width="100%">
            {children}
          </Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;