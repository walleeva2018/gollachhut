import { Box, Flex, Link, Text, Image, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import gollachhut from '../../../public/images/gollachhut.jpeg';

const Footer = () => {
  return (
    <Box
      as="footer"
      width="full"
      borderTopWidth={1}
      borderColor="gray.400"
      paddingY={6}
      backgroundColor="white"
      position="relative"
      marginTop="auto" // Ensure footer stays at the bottom of the page
    >
      <Flex
        maxWidth="container.xl"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap" // Allow wrapping for smaller screens
        paddingX={4} // Add horizontal padding
      >
        {/* Logo on the left */}
        <Box>
          <Image
            src={gollachhut.src}
            alt="Logo"
            height="150px"
            width="250px"
            objectFit="contain"
          />
        </Box>

        {/* Quick Links in the middle */}
        <VStack  align="center" my={4}>
          <Text fontWeight="bold">Quick Links</Text>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </VStack>

        {/* Social Links and Contact on the right */}
        <VStack spacing={2} align="flex-end" my={4}>
          <Text fontWeight="bold">Connect with Us</Text>
          <HStack spacing={4}>
            <Link href="https://www.facebook.com/profile.php?id=61565797084540&mibextid=ZbWKwL" isExternal>
              <Icon as={FaFacebook} w={6} h={6} />
            </Link>
            <Link href="https://x.com/Gollachhuthq?t=R5oVfM9lZhmp4b1dLYILuw&s=09" isExternal>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="https://www.instagram.com/gollachhutofficial06?igsh=czY1dDVkeWdiZjVy" isExternal>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="mailto:gollchhutteam@gmail.com">
              <Icon as={FaEnvelope} w={6} h={6} />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      {/* Copyright text */}
      <Text textAlign="center" marginTop={4}>
        {new Date().getFullYear()} &bull;{' '}
        <Link
          href="https://akmalhisyam.my.id"
          _hover={{ color: 'blue.500' }}
          isExternal
        >
          All Rights Reserved @GollaChhut
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
