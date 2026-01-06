import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
export default function App() {
  return (
    <BrowserRouter>
      {/* <div className="w-[1200px] min-w-[1200px] mx-auto"> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard/:username"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}
