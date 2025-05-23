import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Make sure Navbar is imported
import Home from "./pages/home";
import ACservices from "./pages/acservices";
import ROFilterServices from "./pages/roservices";

export default function App() {
  return (
    <>


      {/* Main content with padding top equal to navbar height */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ACservices />} />
          <Route path="/roservices" element={<ROFilterServices />} />
        </Routes>
      </main>
    </>
  );
}
