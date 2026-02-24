import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuth(); // ❌ remove logout from here (not needed now)

  return (
    <nav className="navbar">
      <div className="logo">CareerConnect</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="nav-btn">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>

            {/* ✅ Changed Logout button to Link */}
            <Link to="/logout" className="nav-btn">
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;