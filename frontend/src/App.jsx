import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PublicQRView from './pages/PublicQRView';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import InventoryList from './pages/inventory/InventoryList';
import InventoryNew from './pages/inventory/InventoryNew';
import InventoryEdit from './pages/inventory/InventoryEdit';
import InventoryDetail from './pages/inventory/InventoryDetail';
import AdminUsers from './pages/admin/AdminUsers';
import AdminRoles from './pages/admin/AdminRoles';
import AdminSettings from './pages/admin/AdminSettings';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/consulta-activo/:qr" element={<PublicQRView />} />

        {/* Rutas Protegidas */}
        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<DashboardHome />} />
          
          {/* Inventario */}
          <Route path="/inventario" element={<InventoryList />} />
          <Route path="/inventario/nuevo" element={<InventoryNew />} />
          <Route path="/inventario/:id" element={<InventoryDetail />} />
          <Route path="/inventario/editar/:id" element={<InventoryEdit />} />
          
          {/* Admin */}
          <Route path="/admin/usuarios" element={<AdminUsers />} />
          <Route path="/admin/roles" element={<AdminRoles />} />
          <Route path="/admin/configuracion" element={<AdminSettings />} />
          
          {/* Perfil */}
          <Route path="/perfil" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
