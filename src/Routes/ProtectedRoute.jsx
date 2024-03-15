
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   return localStorage.getItem("uid") ? <Outlet /> : <Navigate to={"/"} />;
// };

// export default ProtectedRoute;



// ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
