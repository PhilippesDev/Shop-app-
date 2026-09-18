import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import ReadOnlyBanner from './components/AuthUi'
import Login from './pages/Login'
import Register from './pages/Register'
import Compte from './pages/Compte'
import Dashboard from './pages/Dashboard'
import Eleves from './pages/Eleves'
import Classes from './pages/Classes'
import Options from './pages/Options'
import Cours from './pages/Cours'
import Presence from './pages/Presence'
import AnneesScolaires from './pages/AnneesScolaires'
import Inscriptions from './pages/Inscriptions'
import Cotations from './pages/Cotations'
import Frais from './pages/Frais'
import Paiements from './pages/Paiements'
import Rapports from './pages/Rapports'
import Parametres from './pages/Parametres'
import EspaceEnseignant from './pages/EspaceEnseignant'
import EspaceParent from './pages/EspaceParent'

function StaffRoute({ children }) {
  return (
    <ProtectedRoute>
      <div>
        <ReadOnlyBanner />
      </div>
      {children}
    </ProtectedRoute>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/compte" element={<Compte />} />

      <Route path="/espace-enseignant" element={<EspaceEnseignant />} />
      <Route path="/espace-parent" element={<EspaceParent />} />

      <Route path="/dashboard" element={<StaffRoute><Dashboard /></StaffRoute>} />
      <Route path="/eleves" element={<StaffRoute><Eleves /></StaffRoute>} />
      <Route path="/classes" element={<StaffRoute><Classes /></StaffRoute>} />
      <Route path="/options" element={<StaffRoute><Options /></StaffRoute>} />
      <Route path="/cours" element={<StaffRoute><Cours /></StaffRoute>} />
      <Route path="/presence" element={<StaffRoute><Presence /></StaffRoute>} />
      <Route path="/annees-scolaires" element={<StaffRoute><AnneesScolaires /></StaffRoute>} />
      <Route path="/inscriptions" element={<StaffRoute><Inscriptions /></StaffRoute>} />
      <Route path="/cotations" element={<StaffRoute><Cotations /></StaffRoute>} />
      <Route path="/frais" element={<StaffRoute><Frais /></StaffRoute>} />
      <Route path="/paiements" element={<StaffRoute><Paiements /></StaffRoute>} />
      <Route path="/rapports" element={<StaffRoute><Rapports /></StaffRoute>} />
      <Route path="/parametres" element={<StaffRoute><Parametres /></StaffRoute>} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
