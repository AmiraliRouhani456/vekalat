import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
export default function App() {
  return (
    <BrowserRouter>

      <MainLayout>
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
      </MainLayout>
      
    </BrowserRouter>
  );
}
