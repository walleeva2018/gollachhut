'use client'
import   CartList   from '../../components/orders/CartList';
import { Product } from '../../types/productTypes';

async function getProducts(): Promise<Product[]> {
  // In a real application, this would be an API call or database query
  return [
    { id: 1, name: 'Fun Toy 1', price: 19.99, image: '/images/heli.jpeg', tags: ['educational'], color: 'blue' },
    { id: 2, name: 'Cool Gadget 2', price: 29.99, image: '/images/cley.jpg', tags: ['electronic'], color: 'red' },
    
    // Add more products...
  ];
}

export default async function ProductListPage() {
  
  const initialProducts = await getProducts();

  return <CartList products={initialProducts} totalPrice={2000}  />;
}