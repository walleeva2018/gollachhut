import { Box, Flex, Link, Text, Image, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import gollachhut from '../../../public/images/fullGolla.png';

const Footer = () => {
  return (
    <Box
      as="footer"
      width="full"
      borderTopWidth={1}
      borderColor="gray.400"
      backgroundImage="/images/footer.jpg"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      paddingY={10}
      position="relative"
      _after={{
        content: `""`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 50, 0.6)', // Dark blue overlay for readability
        zIndex: 0,
      }}
      marginTop="auto"
    >
      <Flex
        maxWidth="container.xl"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
        paddingX={4}
        position="relative"
        zIndex={1} // Ensure content is above the overlay
      >
        {/* Logo */}
        <Box>
          <Link href="/" color="gray.700" _hover={{ color: 'blue.600' }}> 
            <Image
              src={gollachhut.src}
              alt="Logo"
              height="120px"
              width="auto"
              objectFit="contain"
            />
          </Link>
        </Box>

        {/* Quick Links */}
        <VStack
          align="center"
          my={4}
          background="rgba(255, 255, 255, 0.85)"
          borderRadius="md"
          boxShadow="lg"
          padding={5}
        >
          <Text fontWeight="semibold" color="blue.900" fontSize="lg">Quick Links</Text>
          <Link href="/" color="gray.700" _hover={{ color: 'blue.600' }}>Home</Link>
          <Link href="/about" color="gray.700" _hover={{ color: 'blue.600' }}>About</Link>
          <Link href="/contact" color="gray.700" _hover={{ color: 'blue.600' }}>Contact</Link>
        </VStack>

        {/* Social Links and Contact */}
        <VStack
          spacing={3}
          align="flex-end"
          my={4}
          background="rgba(255, 255, 255, 0.85)"
          borderRadius="md"
          boxShadow="lg"
          padding={5}
        >
          <Text fontWeight="semibold" color="blue.900" fontSize="lg">Connect with Us</Text>
          <HStack spacing={5}>
            <Link href="https://www.facebook.com/profile.php?id=61565797084540&mibextid=ZbWKwL" isExternal>
              <Icon as={FaFacebook} w={5} h={5} color="gray.600" _hover={{ color: 'blue.500' }} />
            </Link>
            <Link href="https://x.com/Gollachhuthq?t=R5oVfM9lZhmp4b1dLYILuw&s=09" isExternal>
              <Icon as={FaTwitter} w={5} h={5} color="gray.600" _hover={{ color: 'blue.500' }} />
            </Link>
            <Link href="https://www.instagram.com/gollachhutofficial06?igsh=czY1dDVkeWdiZjVy" isExternal>
              <Icon as={FaInstagram} w={5} h={5} color="gray.600" _hover={{ color: 'blue.500' }} />
            </Link>
            <Link href="mailto:gollchhutteam@gmail.com">
              <Icon as={FaEnvelope} w={5} h={5} color="gray.600" _hover={{ color: 'blue.500' }} />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      {/* Copyright */}
      <Text
        textAlign="center"
        marginTop={6}
        color="gray.300"
        fontSize="sm"
        fontWeight="medium"
        position="relative"
        zIndex={1}
      >
        {new Date().getFullYear()} &bull;{' '}
        <Link href="https://akmalhisyam.my.id" _hover={{ color: 'blue.500' }} isExternal>
          All Rights Reserved @GollaChhut
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
