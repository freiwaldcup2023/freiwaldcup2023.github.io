import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireAuth({ children }: { children:JSX.Element }) {
  const { currentUser } = useAuth()
  let location = useLocation()

  if (!currentUser) {
    return <Navigate to="/login" state={ { from: location } } replace />;
  }

  return children;
}

export default RequireAuth