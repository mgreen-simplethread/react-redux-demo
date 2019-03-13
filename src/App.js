import React from 'react';
import Counter from './containers/Counter';
import './App.css';

export default function App() {
  return (
    <>
      <header>
        <h1> Buncha components using app state</h1>
      </header>
      <main className="app">
        <Counter />
      </main>
    </>
  );
}
