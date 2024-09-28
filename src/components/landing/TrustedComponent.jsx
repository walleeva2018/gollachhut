import React from 'react'
import Image from 'next/image'
import '../../styles/trusted.css'
import { Heading, Text, VStack, Flex, Box } from '@chakra-ui/react';

export default function TrustedComponent() {
  return (
    <div>

    <div class="partners-logo-slider">
    <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, blue.500, cyan.500, pink.500)"
            spacing={4}
            margin={4}
            bgClip="text"  // This clips the background gradient to text
          >
            Our Services
          </Heading>
        <div class="slide-track">
            <div class="slide">
                <Image src="/images/gollachhut.png" height="80" width="250" alt="" />
            </div>
            <div class="slide">
                <Image src="/images/playing.png" height="80" width="250" alt="" />
            </div>
            <div class="slide">
                <Image src="/images/images.jpeg" height="80" width="250" alt="" />
            </div>

            <div class="slide">
                <Image src="/images/gollachhut.png" height="80" width="250" alt="" />
            </div>
            <div class="slide">
                <Image src="/images/playing.png" height="80" width="250" alt="" />
            </div>
            <div class="slide">
                <Image src="/images/images.jpeg" height="80" width="250" alt="" />
            </div>
            
        </div>
    </div>
    </div>
  )
}
