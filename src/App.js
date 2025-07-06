import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddJobs from "./components/AddJobs";
import Jobs from "./components/Jobs";
import Home from "./components/Home";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./context/Provider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddJobs />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
