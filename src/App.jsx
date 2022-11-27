import { useState } from "react";

// Components
import { Cart, Header, Product } from "./components";

function App() {
  return (
    <div className="App">
      <Cart />
      {/* Header */}
      <Header />
      {/* Product */}
      <Product />
    </div>
  );
}

export default App;
