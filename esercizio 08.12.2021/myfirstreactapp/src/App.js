

import Product from './components/product';
import './App.css';

function App() {
  
  return (
    <body>
    <div className="App">
      <Product 
      title="Nike Air Wax"
      price = "Price: 28"
      spec ="Nike Air Wax, ottime per la corsa ma attenti a non scivolare"
      url="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

      />
    </div>  
    </body>
  );
}


export default App;
