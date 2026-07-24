import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const products: Product[] = [
  { id: 1, name: "Aamer Achar - Mango Pickle", price: 180, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 2, name: "Aamer Jam - Mango Jam", price: 220, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 3, name: "Amloki Morobba - Amla Murabba", price: 250, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 4, name: "Amloki Candy - Amla Candy", price: 150, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 5, name: "Karamcha Achar - Karonda Pickle", price: 160, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 6, name: "Lebu Achar - Lemon Pickle", price: 140, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 7, name: "Kamranga Jam - Starfruit Jam", price: 210, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 8, name: "Gota Masala - Whole Spices", price: 120, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 9, name: "Guro Masala - Ground Spices", price: 100, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 10, name: "Herbal Panio - Lemon Mint Drink", price: 80, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 11, name: "Holud Guro - Turmeric Powder", price: 70, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" },
  { id: 12, name: "Lal Mirich Guro - Red Chilli Powder", price: 90, image: "https://i.imgur.com/abc123.jpg", category: "Food & Beverages" }
];

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', background: '#f5f5f5' }}>
      <h1 style={{ textAlign: 'center', color: '#2e7d32', fontSize: '40px' }}>BEGAD MART</h1>
      <p style={{ textAlign: 'center', color: '#555', fontSize: '18px' }}>প্রাকৃতিক ও ঘরোয়া খাদ্যপণ্য</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {products.map(product => (
          <div key={product.id} style={{ background: 'white', borderRadius: '10px', padding: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3 style={{ margin: '10px 0 5px 0' }}>{product.name}</h3>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2e7d32' }}>₹{product.price}</p>
            <button style={{ width: '100%', padding: '10px', background: '#2e7d32', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
