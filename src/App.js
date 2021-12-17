import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from  './contexts/AuthContext'

import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'

import Dashboard from './pages/Dashboard'
import ProductCreate from './pages/ProductCreate'
import ProductDetails from './pages/ProductDetails'
import ProductUpdate from './pages/ProductUpdate'

function App() {
  return (
    <AuthProvider>
      <Router>
          <Routes>
            <Route path="/" element={ <Dashboard /> } />

            {/* AuthRoutes */}
            <Route path="/register" element={ <Register /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/logout" element={ <Logout /> } />
                      
            {/* ProductRoutes */}
            <Route path="/products" element={ <Dashboard /> } />
            <Route path="/products/new" element={ <ProductCreate /> } />
            <Route path="/products/:id" element={ <ProductDetails /> } />
            <Route path="/products/:id/update" element={ <ProductUpdate /> } />
          </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
