import React from 'react';
import Counter from './containers/Counter';
import TodoList from './containers/TodoList';
import IPAddress from './containers/IPAddress';
import './App.css';

export default function App() {
  return (
    <>
      <header>
        <h1> Buncha components using app state</h1>
      </header>
      <main className="app">
        <Counter />
        <TodoList />
        <IPAddress />
      </main>
    </>
  );
}
