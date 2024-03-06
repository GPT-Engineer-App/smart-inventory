import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index";
import OrderManagement from "./pages/OrderManagement";
import StockManagement from "./pages/StockManagement";
import ProductionManagement from "./pages/ProductionManagement";
import DispatchManagement from "./pages/DispatchManagement";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/stock" element={<StockManagement />} />
        <Route path="/production" element={<ProductionManagement />} />
        <Route path="/dispatch" element={<DispatchManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
