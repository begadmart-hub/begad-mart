import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const products: Product[] = [
  { id: 1, name: "আমের আচার", price: 200, image: "https://i.imgur.com/abc123.jpg", category: "আচার" },
  { id: 2, name: "আমের জ্যাম", price: 170, image: "https://i.imgur.com/abc123.jpg", category: "জ্যাম" },
  { id: 3, name: "আমের জেলি", price: 170, image: "https://i.imgur.com/abc123.jpg", category: "জেলি" },
  { id: 4, name: "আমলকীর মোরব্বা", price: 200, image: "https://i.imgur.com/abc123.jpg", category: "মোরব্বা" },
  { id: 5, name: "আমলকী ক্যান্ডি", price: 200, image: "https://i.imgur.com/abc123.jpg", category: "ক্যান্ডি" },
  { id: 6, name: "করমচা আচার", price: 240, image: "https://i.imgur.com/abc123.jpg", category: "আচার" },
  { id: 7, name: "চেরি জ্যাম", price: 240, image: "https://i.imgur.com/abc123.jpg", category: "জ্যাম" },
  { id: 8, name: "লেবুর আচার", price: 215, image: "https://i.imgur.com/abc123.jpg", category: "আচার" },
  { id: 9, name: "কামরাঙ্গা জেলি", price: 215, image: "https://i.imgur.com/abc123.jpg", category: "জেলি" },
  { id: 10, name: "গোটা মসলা", price: 100, image: "https://i.imgur.com/abc123.jpg", category: "মসলা" },
  { id: 11, name: "গুঁড়ো মসলা", price: 80, image: "https://i.imgur.com/abc123.jpg", category: "মসলা" },
  { id: 12, name: "হার্বাল পানীয়", price: 275, image: "https://i.imgur.com/abc123.jpg", category: "পানীয়" },
];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#2d6a4f' }}>BEGAD MART</h1>
      <p style={{ textAlign: 'center' }}>প্রাকৃতিক ও ঘরোয়া খাদ্যপণ্য</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p style={{ fontSize: '12px', color: 'gray' }}>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
