import { Box, Button, Container, IconButton, Image ,useMediaQuery , Badge} from '@chakra-ui/react';
import { RiShoppingCartLine } from 'react-icons/ri';
import Link from 'next/link'; // Import the Next.js Link component

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const itemCount =2
  return (
    <Box
      as="header"
      width="full"
      height={70}
      backgroundSize="cover"
      backgroundImage=
                "url('https://i.ytimg.com/vi/wuUSVEcK-kM/maxresdefault.jpg')"
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
              height="60px"
              width="250px"
              objectFit="contain"
              cursor="pointer" // Add a pointer cursor to indicate it's clickable
            />
          </Link>
        </Box>

        {/* Explore Products Button */}
        <Box display="flex" alignItems="center">
          <Link href="/product" passHref>
            <Button variant="solid" colorScheme="purple" cursor="pointer">
              Explore Products
            </Button>
          </Link>
        </Box>

        {/* Cart Icon */}
        <Box
      display="flex"
      alignItems="center"
      background="white"
      px={isMobile ? 2 : 4}
      py={isMobile ? 2 : 3}
      borderRadius={isMobile ? 'md' : 'lg'}
      boxShadow={isMobile ? 'sm' : 'md'}
      position="relative"
    >
      <IconButton
        aria-label="Cart"
        icon={<RiShoppingCartLine size={isMobile ? 20 : 24} />}
        variant="ghost"
        mr={isMobile ? 2 : 4}
      />
      {!isMobile && <span>Cart</span>}
      <Badge colorScheme="red" ml={-2}>
        {itemCount}
      </Badge>
    </Box>
      </Container>
    </Box>
  );
};

export default Header;
