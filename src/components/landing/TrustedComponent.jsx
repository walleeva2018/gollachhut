import React from 'react';
import Image from 'next/image';
import '../../styles/trusted.css';
import { Heading, VStack, Box } from '@chakra-ui/react';

export default function TrustedComponent() {
  return (
    <div className="partners-logo-slider">
      <VStack spacing={4} margin={4} align="center">
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.500, cyan.500, pink.500)"
          bgClip="text" // Clips the background gradient to text
        >
          Our Services
        </Heading>
        <div className="slide-track">
          <div className="slide">
            <Image src="/images/offer1.jpeg" height={80} width={250} alt="Offer 1" />
          </div>
          <div className="slide">
            <Image src="/images/offer2.jpeg" height={80} width={250} alt="Offer 2" />
          </div>
          <div className="slide">
            <Image src="/images/offer3.jpg" height={80} width={250} alt="Offer 3" />
          </div>
          <div className="slide">
            <Image src="/images/offer4.png" height={80} width={250} alt="Offer 4" />
          </div>
          <div className="slide">
            <Image src="/images/offer5.png" height={80} width={250} alt="Offer 5" />
          </div>
        </div>
      </VStack>
    </div>
  );
}
