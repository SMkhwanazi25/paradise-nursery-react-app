import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';

const plantData = [
  { id: 1, category: 'Air Purifying', name: 'Snake Plant', price: 25, image: 'https://images.unsplash.com/photo-1593482892290-f7f2f1536d1e?q=80&w=200&auto=format&fit=crop' },
  { id: 2, category: 'Air Purifying', name: 'Spider Plant', price: 15, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?q=80&w=200&auto=format&fit=crop' },
  { id: 3, category: 'Air Purifying', name: 'Peace Lily', price: 30, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?q=80&w=200&auto=format&fit=crop' },
  { id: 4, category: 'Air Purifying', name: 'Boston Fern', price: 20, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=200&auto=format&fit=crop' },
  { id: 5, category: 'Air Purifying', name: 'Rubber Plant', price: 35, image: 'https://images.unsplash.com/photo-1597055181300-e3633a917ca1?q=80&w=200&auto=format&fit=crop' },
  { id: 6, category: 'Air Purifying', name: 'Aloe Vera', price: 12, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=200&auto=format&fit=crop' },
  { id: 7, category: 'Low Light', name: 'ZZ Plant', price: 28, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=200&auto=format&fit=crop' },
  { id: 8, category: 'Low Light', name: 'Pothos', price: 18, image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?q=80&w=200&auto=format&fit=crop' },
  { id: 9, category: 'Low Light', name: 'Philodendron', price: 22, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=200&auto=format&fit=crop' },
  { id: 10, category: 'Low Light', name: 'Cast Iron Plant', price: 40, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=200&auto=format&fit=crop' },
  { id: 11, category: 'Low Light', name: 'Dracaena', price: 32, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?q=80&w=200&auto=format&fit=crop' },
  { id: 12, category: 'Low Light', name: 'Parlor Palm', price: 19, image: 'https://images.unsplash.com/photo-1593482892290-f7f2f1536d1e?q=80&w=200&auto=format&fit=crop' },
  { id: 13, category: 'Succulents', name: 'Echeveria', price: 8, image: 'https://images.unsplash.com/photo-1545241047-6083a36f0b21?q=80&w=200&auto=format&fit=crop' },
  { id: 14, category: 'Succulents', name: 'Jade Plant', price: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f2360af2e4?q=80&w=200&auto=format&fit=crop' },
  { id: 15, category: 'Succulents', name: 'Burro\'s Tail', price: 16, image: 'https://images.unsplash.com/photo-1509423350716-97f2360af2e4?q=80&w=200&auto=format&fit=crop' },
  { id: 16, category: 'Succulents', name: 'Haworthia', price: 10, image: 'https://images.unsplash.com/photo-1545241047-6083a36f0b21?q=80&w=200&auto=format&fit=crop' },
  { id: 17, category: 'Succulents', name: 'Sedum', price: 9, image: 'https://images.unsplash.com/photo-1509423350716-97f2360af2e4?q=80&w=200&auto=format&fit=crop' },
  { id: 18, category: 'Succulents', name: 'Kalanchoe', price: 15, image: 'https://images.unsplash.com/photo-1545241047-6083a36f0b21?q=80&w=200&auto=format&fit=crop' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const categories = [...new Set(plantData.map((plant) => plant.category))];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#2e7d32' }}>Our Plants</h1>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h2 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '10px' }}>{category}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {plantData.filter((plant) => plant.category === category).map((plant) => {
              const isInCart = cartItems.some((item) => item.id === plant.id);
              return (
                <div key={plant.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center', backgroundColor: '#fff' }}>
                  <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
                  <h3 style={{ margin: '10px 0' }}>{plant.name}</h3>
                  <p style={{ color: '#2e7d32', fontWeight: 'bold' }}>${plant.price}</p>
                  <button 
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart}
                    style={{ padding: '8px 15px', backgroundColor: isInCart ? '#ccc' : '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: isInCart ? 'not-allowed' : 'pointer', width: '100%' }}
                  >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
