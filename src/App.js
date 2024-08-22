import './App.css';
import cart from './images/cart.png';
import muskmelon from './images/muskmelon.png';
import apple from './images/apple.png';
import orange from './images/orange.png';
import pineapple from './images/pineapple.png';
import watermelon  from './images/watermelon.png';
import banana from './images/banana.png';
function App() {
  return (
    <div className="App">
      <header>
      <div class="logo">
            <h1>Fruit Basket</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#"><img src={cart} id='cart'></img> </a></li>
            </ul>
        </nav>
      </header>
      <main>
      <h2>Featured Products</h2><br></br>
        <section class="products">
              <div class="product-card">
                <img src={apple} alt="Apple"></img>
                <h3>Apple</h3>
                <p>Rs.180 Per KG</p>
                <button>Add to Cart</button>
              </div>
              <div class="product-card">
                <img src={banana} alt="Banana"></img>
                <h3>Banana</h3>
                <p>Rs.60 Per KG</p>
                <button>Add to Cart</button>
              </div>
              <div class="product-card">
                <img src={watermelon} alt="Watermelon"></img>
                <h3>Watermelon</h3>
                <p>Rs.120 Per KG</p>
                <button>Add to Cart</button>
              </div>
              <div class="product-card">
                <img src={pineapple} alt="pineapple"></img>
                <h3>Pineapple</h3>
                <p>Rs.100 Per KG</p>
                <button>Add to Cart</button>
              </div>
              <div class="product-card">
                <img src={orange} alt="Orange"></img>
                <h3>Orange</h3>
                <p>Rs.160 Per KG</p>
                <button>Add to Cart</button>
              </div>
              <div class="product-card">
                <img src={muskmelon} alt="Muskmelon"></img>
                <h3>Muskmelon</h3>
                <p>Rs.180 Per KG</p>
                <button>Add to Cart</button>
              </div>
          </section>
        </main>
        <footer>
        <p>&copy; 2024 Grocery Shop. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
