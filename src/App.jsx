import Footer from "./components/Footer";
import Header from "./components/Header";
import "./output.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import MainContent from "./components/MainContent";

function App() {
  return (
    <DarkModeProvider>
      <div className="flex flex-col bg-gray-300 dark:bg-gray-700 text-white dark:text-white min-h-screen">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </DarkModeProvider>
  );
}

export default App;
