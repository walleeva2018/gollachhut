import React from 'react'
import Image from 'next/image'
import '../../styles/newarrival.css'
import { Heading , VStack} from '@chakra-ui/react';

export default function NewArrival() {
  const products = [
    { id: 1, title: "Toy 1", subtitle: "New collection 2024", category: "Toy", price: "$23.09", img: "/images/car.jpg" },
    { id: 2, title: "Toy 2", subtitle: "Limited Edition", category: "Toy", price: "$30.99", img: "/images/heli.jpeg" },
    { id: 3, title: "Toy 3", subtitle: "Sportwear", category: "Toy", price: "$45.00", img: "/images/car.jpg" },
    { id: 4, title: "Toy 4", subtitle: "Running Shoes", category: "Toy", price: "$29.99", img: "/images/heli.jpeg" },
  ];

  return (
    
    <>
     <VStack spacing={4} margin={4} align="center">
    <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, white, pink.200, cyan.200, orange.200)"
            bgClip="text"
            textShadow="0 1px 2px rgba(0, 0, 0, 0.15)" // Optional: slight shadow for better readability
      >
            New Arrivals
          </Heading>
          </VStack>
    <section className="product-grid">
      {products.map((product) => (
        <article key={product.id} className="card">
          <header className="card__header">
            <h2 className="card__header-title">{product.title}</h2>
            <h3 className="card__header-subtitle">{product.subtitle}</h3>
            <div className="card__header-category">{product.category}</div>
          </header>

          <div className="card__items">
            <div className="card__item">
              <input className="card__item-input" type="radio" name={`color-${product.id}`} checked />
              <Image src={product.img} className="card__item-img" alt="product-image" width={200} height={180} />
            </div>
          </div>

          <footer className="card__footer">
            <div className="card__price">{product.price}</div>
          </footer>
        </article>
      ))}
    </section>
    </>
  );
}
