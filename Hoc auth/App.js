import React from 'react'
import HOC from './Hoc';

function App() {
  return (
      <div>
        <h1>Hello</h1>
        <h2>Welcome to Home Component</h2>
      </div>
  );
}

export default HOC(App);
