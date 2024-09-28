import { ProductListClient } from '../../components/ProductListClient';
import { Product } from '../../types/productTypes';

async function getProducts(): Promise<Product[]> {
  // In a real application, this would be an API call or database query
  return [
    { id: 1, name: 'Fun Toy 1', price: 19.99, image: '/images/heli.jpeg', tags: ['educational'], color: 'blue' },
    { id: 2, name: 'Cool Gadget 2', price: 29.99, image: '/images/cley.jpg', tags: ['electronic'], color: 'red' },
    { id: 3, name: 'Cool Gadget 2', price: 29.99, image: '/images/card.jpeg', tags: ['electronic'], color: 'red' },
    { id: 4, name: 'Cool Gadget 2', price: 29.99, image: '/images/car.jpg', tags: ['electronic'], color: 'red' },
    { id: 5, name: 'Cool Gadget 2', price: 29.99, image: '/images/car.jpg', tags: ['electronic'], color: 'red' },
    { id: 6, name: 'Cool Gadget 2', price: 29.99, image: '/images/car.jpg', tags: ['electronic'], color: 'red' },
    { id: 7, name: 'Cool Gadget 2', price: 29.99, image: '/images/car.jpg', tags: ['electronic'], color: 'red' },
    { id: 8, name: 'Cool Gadget 2', price: 29.99, image: '/images/car.jpg', tags: ['electronic'], color: 'red' },
    { id: 9, name: 'Cool Gadget 2', price: 29.99, image: '/images/car.jpg', tags: ['electronic'], color: 'red' },
    
    // Add more products...
  ];
}

export default async function ProductListPage() {
  const initialProducts = await getProducts();

  return <ProductListClient initialProducts={initialProducts}  />;
}