import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();                 // perform logout
    navigate("/");            // redirect to home
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;