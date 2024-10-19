"use client";  // Enable client-side rendering for this page

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/save-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();
      setResponseMessage(data.message);
    } catch (error) {
      setResponseMessage('Error submitting name');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Submit Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
