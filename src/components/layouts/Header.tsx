import { Box, Container, IconButton, Image } from '@chakra-ui/react';
import { RiShoppingCartLine } from 'react-icons/ri';
import Link from 'next/link'; // Import the Next.js Link component

const Header = () => {
  return (
    <Box
      as="header"
      width="full"
      height={70}
      backgroundImage="url('/images/flowery-bg.jpeg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundColor={'rgba(237, 242, 247, 0.8)'}
      backdropFilter="blur(10px)"
      position="fixed"
      zIndex={5}
    >
      <Container
        as="nav"
        maxWidth="container.lg"
        height="full"
        padding={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Clickable Logo */}
        <Box>
          <Link href="/" passHref>
            <Image
              src="/images/gollachhut.png"
              alt="Logo"
              height="100px"
              width="250px"
              objectFit="contain"
              cursor="pointer" // Add a pointer cursor to indicate it's clickable
            />
          </Link>
        </Box>

        {/* Cart Icon */}
        <Box display="flex" alignItems="center">
          <IconButton
            aria-label="Cart"
            icon={<RiShoppingCartLine />}
            variant="ghost"
            marginRight={2}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
