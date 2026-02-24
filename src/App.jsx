import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Logout from "./pages/Logout"; // ✅ ADDED
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CounsellorDashboard from "./pages/CounsellorDashboard";
import BookSession from "./pages/BookSession";
import CareerPaths from "./pages/CareerPaths";
import Resources from "./pages/Resources";
import ResourceDetails from "./pages/ResourceDetails";
import Colleges from "./pages/Colleges";
import CareerGuidance from "./pages/CareerGuidance";
import Performance from "./pages/Performance";

// New Pages
import CareerQuiz from "./pages/CareerQuiz";
import Feedback from "./pages/Feedback";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ✅ Logout Route (Protected) */}
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />

          {/* User Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute role="user">
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/book"
            element={
              <ProtectedRoute role="user">
                <BookSession />
              </ProtectedRoute>
            }
          />

          <Route
            path="/careers"
            element={
              <ProtectedRoute role="user">
                <CareerPaths />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resources"
            element={
              <ProtectedRoute role="user">
                <Resources />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resource/:id"
            element={
              <ProtectedRoute role="user">
                <ResourceDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/colleges"
            element={
              <ProtectedRoute role="user">
                <Colleges />
              </ProtectedRoute>
            }
          />

          <Route
            path="/guidance"
            element={
              <ProtectedRoute role="user">
                <CareerGuidance />
              </ProtectedRoute>
            }
          />

          <Route
            path="/performance"
            element={
              <ProtectedRoute role="user">
                <Performance />
              </ProtectedRoute>
            }
          />

          <Route
            path="/quiz"
            element={
              <ProtectedRoute role="user">
                <CareerQuiz />
              </ProtectedRoute>
            }
          />

          <Route
            path="/feedback"
            element={
              <ProtectedRoute role="user">
                <Feedback />
              </ProtectedRoute>
            }
          />

          {/* Admin Route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Counsellor Route */}
          <Route
            path="/counsellor"
            element={
              <ProtectedRoute role="counsellor">
                <CounsellorDashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;