import Footer from "./components/Footer";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import "./output.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/LoginForm/Login";
import Signup from "./components/LoginForm/Signup";
import MainContent from "./components/MainContent";
import ForgotPassword from "./components/LoginForm/ForgotPassword";
import UpdateProfile from "./components/LoginForm/UpdateProfile";
import PrivateRoute from "./components/LoginForm/PrivateRoute";
import Dashboard from "./components/LoginForm/Dashboard";
import { DarkModeProvider } from "./context/DarkModeContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <DarkModeProvider>
      <div className="flex flex-col bg-gray-300 dark:bg-gray-700 text-white dark:text-white min-h-screen">
        <Router>
          <UserContextProvider>
            <AuthProvider>
              <Header />
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/update-profile"
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute>
                  }
                />
                <Route path="/" element={<MainContent />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route
                  path="/forgot-password"
                  element={<ForgotPassword />}
                ></Route>
                {/* Catch-all route for 404 errors */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <Footer />
            </AuthProvider>
          </UserContextProvider>
        </Router>
      </div>
    </DarkModeProvider>
  );
}

export default App;
