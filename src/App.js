import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import Features from "./pages/features";
import Contact from "./pages/contact";
import Extension from "./pages/extension";
import { tema } from "./theme/theme";
import Header from "./components/header";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extension" element={<Extension />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
