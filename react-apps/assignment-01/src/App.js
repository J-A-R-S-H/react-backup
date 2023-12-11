import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const arrayForItems = [
    "Camera",
    "Shoes",
    "Handbag",
    "Smartphone",
    "Sweater",
    "Watch",
    "Headphones",
    "Book",
    "Ring",
  ];

  function addCartItem(e) {
    e.preventDefault();
    const item = e.target.elements.products.value;
    setCart([...cart, item]);
  }

  function renderCart() {
    return (
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <header>
        <h1>Shopping Spree</h1>
      </header>
      <p>
        {cart.length === 0
          ? "You should add some more items"
          : `There's currently ${cart.length} items in your cart`}
      </p>
      {renderCart()}
      <form action="" onSubmit={addCartItem}>
        <label htmlFor="products"></label>

        <select name="products" id="products">
          {arrayForItems.map((product) => (
            <option value={product}>{product}</option>
          ))}
        </select>

        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
}

export default App;
